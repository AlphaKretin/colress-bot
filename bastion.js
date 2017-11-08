//discord setup
var Discord = require('discord.io');

var bot = new Discord.Client({
    token: "",
    autorun: true
});

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('disconnect', function() { bot.connect(); });

//sql setup
var fs = require('fs');
var SQL = require('sql.js');
var filebuffer = fs.readFileSync('cards.cdb');
var db = new SQL.Database(filebuffer);
var contents = db.exec("SELECT * FROM datas");
var names = db.exec("SELECT * FROM texts");
var ids = [];
var nameList = [];
for (var card of contents[0].values) {
    ids.push(card[0]);
}
for (var card of names[0].values) {
    nameList.push({
        name: card[1]
    });
}

//fuse setup
var Fuse = require('fuse.js');
var options = {
    shouldSort: true,
	includeScore: true,
    tokenize: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 64,
    minMatchCharLength: 1,
    keys: [
        "name"
    ]
};
var fuse = new Fuse(nameList, options)

var request = require('request');

//real shit
bot.on('message', function(user, userID, channelID, message, event) {
    if (userID === bot.id) {
        return;
    }
    if (message.toLowerCase().indexOf(".randcard") === 0) {
        randomCard(user, userID, channelID, message, event);
        return;
    }
    var re = /{([\S\s]*?)}/g;
    var results = [];
    var regx;
    do {
        regx = re.exec(message);
        if (regx !== null) {
            results.push(regx[1]);
        }
    } while (regx !== null);
    if (results.length > 3) {
        bot.sendMessage({
            to: channelID,
            message: "Too many searches!"
        });
    } else if (results.length > 0) {
        for (var result of results) {
            searchCard(result, user, userID, channelID, message, event);
        }
    }
});

async function randomCard(user, userID, channelID, message, event) {
    var code = ids[Math.floor(Math.random() * ids.length)];
    if (ids.indexOf(code) === -1) {
        console.log("Invalid card ID, please try again.");
        return "Invalid card ID, please try again.";
    }
	var out = await getCardInfo(code, user, userID, channelID, message, event);
    bot.sendMessage({
        to: channelID,
        message: out
    });
}

async function searchCard(input, user, userID, channelID, message, event) {
    var inInt = parseInt(input);
    if (ids.indexOf(inInt) > -1) {
		var out = await getCardInfo(inInt, user, userID, channelID, message, event);
        bot.sendMessage({
            to: channelID,
            message: out
        });
    } else {
        var index = nameCheck(input);
        if (index > -1 && index in ids) {
			var out = await getCardInfo(ids[index], user, userID, channelID, message, event);
            bot.sendMessage({
                to: channelID,
                message: out
            });
        } else {
            console.log("Invalid card ID or name, please try again.");
            return;
        }
    }
}

function getCardInfo(code, user, userID, channelID, message, event) {
    var index = ids.indexOf(code);
    if (index === -1) {
        console.log("Invalid card ID, please try again.");
        return "Invalid card ID, please try again.";
    }
    return new Promise(function(resolve, reject) {
        var out = "__**" + names[0].values[index][1] + "**__\n";
        out += "**ID**: " + code + "\n\n";
        request('http://yugiohprices.com/api/get_card_prices/' + names[0].values[index][1], function(error, response, body) {
            var data = JSON.parse(body);
			if (data.status === "success") {
                var low = 9999999999;
                var hi = 0;
                for (var price of data.data) {
                    if (price.price_data.status === "success") {
                        if (price.price_data.data.prices.high > hi) {
                            hi = price.price_data.data.prices.high;
                        }
                        if (price.price_data.data.prices.low < low) {
                            low = price.price_data.data.prices.low;
                        }
                    }
                }
                out += "**Region**: " + getOT(index) + " **Price**: $" + low.toFixed(2) + "-$" + hi.toFixed(2) + " USD\n";
            } else {
                out += "**Region**: " + getOT(index) + "\n";
            }
            var types = getTypes(index);
            if (types.indexOf("Monster") > -1) {
                var typesStr = types.toString().replace("Monster", getRace(index)).replace(/,/g, "/");
                out += "**Type**: " + typesStr + " **Attribute**: " + getAtt(index) + "\n";
                var lvName = "Level";
                var lv = getLevelScales(index);
                var def = true;
                if (types.indexOf("Xyz") > -1) {
                    lvName = "Rank";
                } else if (types.indexOf("Link") > -1) {
                    lvName = "Link Rating";
                    def = false;
                }
                out += "**" + lvName + "**: " + lv[0] + " ";
                out += "**ATK**: " + convertStat(contents[0].values[index][5]) + " ";
                if (def) {
                    out += "**DEF**: " + convertStat(contents[0].values[index][6]);
                } else {
                    out += "**Link Markers**: " + getMarkers(index);
                }
                if (types.indexOf("Pendulum") > -1) {
                    out += " **Pendulum Scale**: " + lv[1] + "/" + lv[2] + "\n";
                } else {
                    out += "\n";
                }
                var cardText = getCardText(index);
                var textName = "Monster Effect";
                if (types.indexOf("Normal") > -1) {
                    textName = "Flavour Text";
                }
                if (cardText.length === 2) {
                    out += "**Pendulum Effect**: " + cardText[0] + "\n";
                    out += "**" + textName + "**: " + cardText[1];
                } else {
                    out += "**" + textName + "**: " + cardText[0];
                }
            } else if (types.indexOf("Spell") > -1 || types.indexOf("Trap") > -1) {
                var lv = getLevelScales(index)[0];
                if (lv > 0) { //is trap monster
                    var typesStr = getRace(index) + "/" + types.toString().replace(/,/g, "/");
                    out += "**Type**: " + typesStr + " **Attribute**: " + getAtt(index) + "\n";
                    out += "**Level**: " + lv + " **ATK**: " + convertStat(contents[0].values[index][5]) + " **DEF**: " + convertStat(contents[0].values[index][6]) + "\n";
                } else {
                    out += "**Type**: " + types.toString().replace(/,/g, "/") + "\n";
                }
                out += "**Effect**: " + names[0].values[index][2].replace(/\n/g, "\n");
            } else {
                out += "**Card Text**: " + names[0].values[index][2].replace(/\n/g, "\n");
            }
            resolve(out);
        });
    });
}

//utility functions
function convertStat(stat) {
	if (stat === -2) {
		return "?";
	} else {
		return stat;
	}
}

function getLevelScales(index) {
    var level = contents[0].values[index][7];
    var levelStr = level.toString("16");
    if (levelStr.length < 5) {
        return [level, 0, 0];
    } else {
        var lscale = parseInt(levelStr.slice(0, 1));
        var rscale = parseInt(levelStr.slice(2, 3));
        var plevel = parseInt(levelStr.slice(4));
        return [plevel, lscale, rscale];
    }
}

function getOT(index) {
    var ot = contents[0].values[index][1];
    switch (ot) {
        case 1:
            return "OCG";
        case 2:
            return "TCG";
        case 3:
            return "TCG/OCG";
        case 4:
            return "Anime";
        case 8:
            return "Illegal";
        case 16:
            return "Video Game";
        case 32:
            return "Custom";
        default:
            return "Null OT";
    }
}

function getRace(index) {
    var race = contents[0].values[index][8];
    switch (race) {
        case 0x1:
            return "Warrior";
        case 0x2:
            return "Spellcaster";
        case 0x4:
            return "Fairy";
        case 0x8:
            return "Fiend";
        case 0x10:
            return "Zombie";
        case 0x20:
            return "Machine";
        case 0x40:
            return "Aqua";
        case 0x80:
            return "Pyro";
        case 0x100:
            return "Rock";
        case 0x200:
            return "Winged Beast";
        case 0x400:
            return "Plant";
        case 0x800:
            return "Insect";
        case 0x1000:
            return "Thunder";
        case 0x2000:
            return "Dragon";
        case 0x4000:
            return "Beast";
        case 0x8000:
            return "Beast-Warrior";
        case 0x10000:
            return "Dinosaur";
        case 0x20000:
            return "Fish";
        case 0x40000:
            return "Sea Serpent";
        case 0x80000:
            return "Reptile";
        case 0x100000:
            return "Psychic";
        case 0x200000:
            return "Divine-Beast";
        case 0x400000:
            return "Creator God";
        case 0x800000:
            return "Wyrm";
        case 0x1000000:
            return "Cyberse";
		case 0x80000000:
			return "Yokai";
		case 0x100000000:
			return "Charisma";
        default:
            return "Null Race";
    }
}

function getAtt(index) {
    var att = contents[0].values[index][9];
    switch (att) {
        case 0x1:
            return "EARTH";
        case 0x2:
            return "WATER";
        case 0x4:
            return "FIRE";
        case 0x8:
            return "WIND";
        case 0x10:
            return "LIGHT";
        case 0x20:
            return "DARK";
        case 0x40:
            return "DIVINE";
		case 0x80:
			return "LAUGH";
        default:
            return "Null Attribute";
    }
}

function getMarkers(index) {
    var marks = contents[0].values[index][6];
    var out = "";
    if (marks & 0x001) {
        out += "↙️";
    }
    if (marks & 0x002) {
        out += "⬇️";
    }
    if (marks & 0x004) {
        out += "↘️";
    }
    if (marks & 0x008) {
        out += "⬅️";
    }
    if (marks & 0x020) {
        out += "➡️";
    }
    if (marks & 0x040) {
        out += "↖️";
    }
    if (marks & 0x080) {
        out += "⬆️";
    }
    if (marks & 0x100) {
        out += "↗️";
    }
    return out;
}

function getTypes(index) {
    var types = [];
    var type = contents[0].values[index][4];
    if (type & 0x1) {
        types.push("Monster");
    }
    if (type & 0x2) {
        types.push("Spell");
    }
    if (type & 0x4) {
        types.push("Trap");
    }
    //normal goes here in numeric order but I put it at the end so that it's at the end of any list of types
    //effect goes here in numeric order but I put it at the end so that it's at the end of any list of types
    if (type & 0x40) {
        types.push("Fusion");
    }
    if (type & 0x80) {
        types.push("Ritual");
    }
    if (type & 0x200) {
        types.push("Spirit");
    }
    if (type & 0x400) {
        types.push("Union");
    }
    if (type & 0x800) {
        types.push("Gemini");
    }
    if (type & 0x1000) {
        types.push("Tuner");
    }
    if (type & 0x2000) {
        types.push("Synchro");
    }
    if (type & 0x4000) {
        types.push("Token");
    }
    if (type & 0x10000) {
        types.push("Quick-Play");
    }
    if (type & 0x20000) {
        types.push("Continuous");
    }
    if (type & 0x40000) {
        types.push("Equip");
    }
    if (type & 0x80000) {
        types.push("Field");
    }
    if (type & 0x100000) {
        types.push("Counter");
    }
    if (type & 0x200000) {
        types.push("Flip");
    }
    if (type & 0x400000) {
        types.push("Toon");
    }
    if (type & 0x800000) {
        types.push("Xyz");
    }
    if (type & 0x1000000) {
        types.push("Pendulum");
    }
    if (type & 0x2000000) {
        types.push("Special Summon");
    }
    if (type & 0x4000000) {
        types.push("Link");
    }
	if (type & 0x10000000) {
        types.push("Armor");
    }
	if (type & 0x20000000) {
        types.push("Plus");
    }
	if (type & 0x40000000) {
        types.push("Minus");
    }
    if (type & 0x10) {
        types.push("Normal");
    }
    if (type & 0x20) {
        types.push("Effect");
    }
    return types;
}

function getCardText(index) {
    var cardText = names[0].values[index][2];
    var re = /\][\s\S]*?\n([\S\s]*?)\n-/g;
    var regx = re.exec(cardText);
    if (regx === null) {
        return [cardText.replace(/\n/g, "\n")];
    } else {
        var outArr = [];
        outArr.push(regx[1].replace(/\n/g, "\n"));
        var re2 = /(?:r Effect|xt) ?\]\R*([\S\s]*)/g;
        outArr.push(re2.exec(cardText)[1].replace(/\n/g, "\n"));
        return outArr;
    }
}

function nameCheck(line) {
    var result = fuse.search(line);
    if (result.length < 1) {
        return -1;
    } else {
        var index = -1;
        for (var i = 0; i < names[0].values.length; i++) {
            if (names[0].values[i][1].toLowerCase() === result[0].item.name.toLowerCase()) {
                index = i;
            }
        }
        return index;
    }
}
