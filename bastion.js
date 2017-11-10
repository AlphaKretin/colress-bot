let fs = require('fs');

let config = JSON.parse(fs.readFileSync('config.json', 'utf8')); //open config file from local directory. Expected contents are as follows
/*
	{
	"token": "", //Discord bot token for log-in
	"longStr": "", //The string to be appended to the end of a too-long message, telling the user to type ".long"
	"shortcuts": [ //an array of arrays that contain shortcuts for typing card names eg MST -> Mystical Space Typhoon
		[
			"mst",
			"Mystical Space Typhoon"
		],
		[
			"...",
			"...", //the arrays can have multiple shortcuts, only the last will be considered the full name
			"..."
		]
	],
	"randFilterAttempts": 1000, //the number of tries to find a random card meeting criteria before bastion gives up. Infinite loop without this!
	"maxSearches": 3, //the number of searches a user is allowed per post
	"imageUrl": "", //this will be the start of the URL from which official card images are downloaded. Bastion will appened the card ID, and then .png.
	"imageUrl": "", //this will be the start of the URL from which anime card images are downloaded. Bastion will appened the card ID, and then .png.
	"imageUrlCustom": "", //this will be the start of the URL from which custom card images are downloaded. Bastion will appened the card ID, and then .png.
	"imageSize": 100, //the height and width for card images to be resized to, in px.
	"dbs" [ "", "" ] //a list of databases to read cards from, in the local directory
}
*/

//discord setup
let Discord = require('discord.io');

let bot = new Discord.Client({
    token: config.token,
    autorun: true
});

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('disconnect', function() {
    bot.connect();
});

//sql setup
let SQL = require('sql.js');
let filebuffer = fs.readFileSync(config.dbs[0]);
let db = new SQL.Database(filebuffer);
let contents = db.exec("SELECT * FROM datas");
let names = db.exec("SELECT * FROM texts");
if (config.dbs.length > 1) {
	for (let i = 1; i < config.dbs.length; i++) {
		let newbuffer = fs.readFileSync(config.dbs[i]);
		let newDB = new SQL.Database(newbuffer);
		let newContents = newDB.exec("SELECT * FROM datas");
		let newNames = newDB.exec("SELECT * FROM texts");
		for (let card of newContents[0].values) {
			contents[0].values.push(card);
		}
		for (let card of newNames[0].values) {
			names[0].values.push(card);
		}
	}
}
let ids = [];
let nameList = [];
for (let card of contents[0].values) { //populate ID list for easy checking of card validity
    ids.push(card[0]);
}
for (let card of names[0].values) { //populatre array of objects containing names for the sake of fuse
    nameList.push({
        name: card[1]
    });
}

//fuse setup
let Fuse = require('fuse.js');
let options = {
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
let fuse = new Fuse(nameList, options);

let request = require('request');
let https = require('https');
let url = require('url');
let resizeImg = require('resize-img');

let longMsg = "";
let longUser = "";


//real shit
bot.on('message', function(user, userID, channelID, message, event) {
    if (userID === bot.id) {
        return;
    }
    if (message.toLowerCase().indexOf(".randcard") === 0) {
        randomCard(user, userID, channelID, message, event);
        return;
    }
    if (message.indexOf("<@" + bot.id + ">") > -1) {
        help(user, userID, channelID, message, event);
    }
    if (longMsg.length > 0 && longUser.length > 0 && message.toLowerCase().indexOf(".long") === 0) {
        if (userID === longUser) {
            bot.sendMessage({
                to: longUser,
                message: longMsg
            });
            longMsg = "";
            longUser = "";
            return;
        }
    }
    let re = /{([\S\s]*?)}/g;
    let results = [];
    let regx;
    do {
        regx = re.exec(message);
        if (regx !== null) {
            results.push(regx[1]);
        }
    } while (regx !== null);
    let re2 = /<([\S\s]*?)>/g;
    let results2 = [];
    let regx2;
    do {
        regx2 = re2.exec(message);
        if (regx2 !== null) {
            results2.push(regx2[1]);
        }
    } while (regx2 !== null);
    if (results.length + results2.length > config.maxSearches) {
        bot.sendMessage({
            to: channelID,
            message: "Too many searches!"
        });
    } else {
        if (results.length > 0) {
            for (let result of results) {
                searchCard(result, false, user, userID, channelID, message, event);
            }
        }
        if (results2.length > 0) {
            for (let result of results2) {
                searchCard(result, true, user, userID, channelID, message, event);
            }
        }
    }
});

function help(user, userID, channelID, message, event) {
    bot.sendMessage({
        to: channelID,
        message: "I am a Yu-Gi-Oh! card bot made by AlphaKretin#7990.\nPrice data is from the https://yugiohprices.com API.\nYou can find my help file here: https://github.com/AlphaKretin/colress-bot/blob/master/README-bastion.md"
    });
}

async function randomCard(user, userID, channelID, message, event) {
    try {
        let args = message.toLowerCase().split(" ");
        let code;
        let i = 0;
        do {
            i++;
            code = ids[Math.floor(Math.random() * ids.length)];
            if (ids.indexOf(code) === -1) {
                console.log("Invalid card ID, please try again.");
                return "Invalid card ID, please try again.";
            }
        } while (!randFilterCheck(code, args) && i < config.randFilterAttempts);
        if (i >= config.randFilterAttempts) {
            bot.sendMessage({
                to: channelID,
                message: "No card matching your critera was found after " + config.randFilterAttempts + " attempts, so one probably doesn't exist."
            });
            return
        }
        let out = await getCardInfo(code, user, userID, channelID, message, event);
        if (args.indexOf("image") > -1) {
            postImage(code, out, user, userID, channelID, message, event);
        } else {
            if (out.length > 2000) {
                let outArr = [out.slice(0, 2000 - config.longStr.length) + config.longStr, out.slice(2000 - config.longStr.length)];
                longMsg = outArr[1];
                longUser = userID;
                bot.sendMessage({
                    to: channelID,
                    message: outArr[0]
                });
            } else {
                bot.sendMessage({
                    to: channelID,
                    message: out
                });
            }
        }
    } catch (e) {
        console.log(e);
    }
}

async function searchCard(input, hasImage, user, userID, channelID, message, event) {
    let inInt = parseInt(input);
    if (ids.indexOf(inInt) > -1) {
        try {
            let out = await getCardInfo(inInt, user, userID, channelID, message, event);
            if (hasImage) {
                postImage(inInt, out, user, userID, channelID, message, event);
            } else {
                if (out.length > 2000) {
                    let outArr = [out.slice(0, 2000 - config.longStr.length) + config.longStr, out.slice(2000 - config.longStr.length)];
                    longMsg = outArr[1];
                    longUser = userID;
                    bot.sendMessage({
                        to: channelID,
                        message: outArr[0]
                    });
                } else {
                    bot.sendMessage({
                        to: channelID,
                        message: out
                    });
                }
            }

        } catch (e) {
            console.log("Error with search by ID:");
            console.log(e);
        }
    } else {
        try {
            let index = nameCheck(input);
            if (index > -1 && index in ids) {
                let out = await getCardInfo(ids[index], user, userID, channelID, message, event);
                if (hasImage) {
                    postImage(ids[index], out, user, userID, channelID, message, event);
                } else {
                    if (out.length > 2000) {
                        let outArr = [out.slice(0, 2000 - config.longStr.length) + config.longStr, out.slice(2000 - config.longStr.length)];
                        longMsg = outArr[1];
                        longUser = userID;
                        bot.sendMessage({
                            to: channelID,
                            message: outArr[0]
                        });
                    } else {
                        bot.sendMessage({
                            to: channelID,
                            message: out
                        });
                    };
                }
            } else {
                console.log("Invalid card ID or name, please try again.");
                return;
            }
        } catch (e) {
            console.log("Error with search by name:");
            console.log(e);
        }
    }
}

function getCardInfo(code, user, userID, channelID, message, event) {
    let index = ids.indexOf(code);
    if (index === -1) {
        console.log("Invalid card ID, please try again.");
        return "Invalid card ID, please try again.";
    }
    return new Promise(function(resolve, reject) {
        let out = "__**" + names[0].values[index][1] + "**__\n";
        out += "**ID**: " + code + "\n\n";
        request('https://yugiohprices.com/api/get_card_prices/' + names[0].values[index][1], function(error, response, body) {
            let data = JSON.parse(body);
            if (data.status === "success") {
                let low = 9999999999;
                let hi = 0;
                let avgs = [];
                for (let price of data.data) {
                    if (price.price_data.status === "success") {
                        if (price.price_data.data.prices.high > hi) {
                            hi = price.price_data.data.prices.high;
                        }
                        if (price.price_data.data.prices.low < low) {
                            low = price.price_data.data.prices.low;
                        }
                        avgs.push(price.price_data.data.prices.average);
                    }
                }
                var avg = (avgs.reduce((a, b) => a + b, 0)) / avgs.length;
                out += "**Status**: " + getOT(index) + " **Price**: $" + low.toFixed(2) + "-$" + avg.toFixed(2) + "-$" + hi.toFixed(2) + " USD\n";
            } else {
                out += "**Status**: " + getOT(index) + "\n";
            }
            let types = getTypes(index);
            if (types.indexOf("Monster") > -1) {
                let typesStr = types.toString().replace("Monster", getRace(index)).replace(/,/g, "/");
                out += "**Type**: " + typesStr + " **Attribute**: " + getAtt(index) + "\n";
                let lvName = "Level";
                let lv = getLevelScales(index);
                let def = true;
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
                let cardText = getCardText(index);
                let textName = "Monster Effect";
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
                let lv = getLevelScales(index)[0];
                if (lv > 0) { //is trap monster
                    let typesStr = getRace(index) + "/" + types.toString().replace(/,/g, "/");
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

function postImage(code, out, user, userID, channelID, message, event) {
	let imageUrl = config.imageUrl;
	if (["Anime", "Illegal", "Video Game"].indexOf(getOT(ids.indexOf(code))) > -1) {
		imageUrl = config.imageUrlAnime;
	}
	if (getOT(ids.indexOf(code)) === "Custom") {
		imageUrl = config.imageUrlCustom;
	}
    https.get(url.parse(imageUrl + code + ".png"), function(response) {
        let data = [];
        response.on('data', function(chunk) {
            data.push(chunk);
        }).on('end', function() {
            let buffer = Buffer.concat(data);
			resizeImg(buffer, {width: config.imageSize, height: config.imageSize}).then(buf => {
				bot.uploadFile({
					to: channelID,
					file: buf,
					filename: code + ".png"
				}, function(err, res) {
					if (out.length > 2000) {
						let outArr = [out.slice(0, 2000 - config.longStr.length) + config.longStr, out.slice(2000 - config.longStr.length)];
						longMsg = outArr[1];
						longUser = userID;
						bot.sendMessage({
							to: channelID,
							message: outArr[0]
						});
					} else {
						bot.sendMessage({
							to: channelID,
							message: out
						});
					}
				});
			});
        });
    });
}

function randFilterCheck(code, args) {
    let otFilters = [];
    let typeFilters = [];
    let raceFilters = [];
    let attFilters = [];
    let lvFilters = [];
    for (let arg of args) {
        if (["ocg", "tcg", "tcg/ocg", "anime", "illegal", "video", "game", "custom"].indexOf(arg) > -1) {
            if (arg === "video" || arg === "game") {
                otFilters.push("video game");
            } else {
                otFilters.push(arg);
            }
        }
        if (["monster", "spell", "trap", "fusion", "ritual", "spirit", "union", "gemini", "tuner", "synchro", "token", "quick-play", "continuous", "equip", "field", "counter", "flip", "toon", "xyz", "pendulum", "special summon", "link", "armor", "plus", "minus", "normal", "effect"].indexOf(arg) > -1) {
            typeFilters.push(arg);
        }
        if (["warrior", "spellcaster", "fairy", "fiend", "zombie", "machine", "aqua", "pyro", "rock", "winged beast", "plant", "insect", "thunder", "dragon", "beast", "beast-warrior", "dinosaur", "fish", "sea serpent", "reptile", "psychic", "divine-beast", "creator god", "wyrm", "cyberse", "yokai", "charisma"].indexOf(arg) > -1) {
            raceFilters.push(arg);
        }
        if (["earth", "wind", "water", "fire", "light", "dark", "divine", "laugh"].indexOf(arg) > -1) {
            attFilters.push(arg);
        }
        if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].indexOf(arg) > -1) {
            lvFilters.push(arg);
        }
    }
    if (otFilters.length + typeFilters.length + raceFilters.length + attFilters.length + lvFilters.length === 0) {
        return true;
    } else {
        let index = ids.indexOf(code);
        let boo = true;
        if (otFilters.length > 0 && otFilters.indexOf(getOT(index).toLowerCase()) === -1) {
            boo = false;
        }
        if (typeFilters.length > 0) {
            let subBoo = false;
            for (let type of getTypes(index)) {
                if (typeFilters.indexOf(type.toLowerCase()) > -1) {
                    subBoo = true;
                }
            }
            boo = subBoo;
        }
        if (raceFilters.length > 0 && raceFilters.indexOf(getRace(index).toLowerCase()) === -1) {
            boo = false;
        }
        if (attFilters.length > 0 && attFilters.indexOf(getAtt(index).toLowerCase()) === -1) {
            boo = false;
        }
        if (lvFilters.length > 0 && lvFilters.indexOf(getLevelScales(index)[0].toString()) === -1) {
            boo = false;
        }
        return boo;
    }
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
    let level = contents[0].values[index][7];
    let levelStr = level.toString("16");
    if (levelStr.length < 5) {
        return [level, 0, 0];
    } else {
        let lscale = parseInt(levelStr.slice(0, 1));
        let rscale = parseInt(levelStr.slice(2, 3));
        let plevel = parseInt(levelStr.slice(4));
        return [plevel, lscale, rscale];
    }
}

function getOT(index) {
    let ot = contents[0].values[index][1];
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
    let race = contents[0].values[index][8];
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
    let att = contents[0].values[index][9];
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
    let marks = contents[0].values[index][6];
    let out = "";
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
    let types = [];
    let type = contents[0].values[index][4];
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
    let cardText = names[0].values[index][2];
    let re = /\][\s\S]*?\n([\S\s]*?)\n-/g;
    let regx = re.exec(cardText);
    if (regx === null) {
        return [cardText];
    } else {
        let outArr = [];
        outArr.push(regx[1]);
        let re2 = /(?:r Effect|xt) ?\]\R*([\S\s]*)/g;
        outArr.push(re2.exec(cardText)[1]);
        return outArr;
    }
}

function nameCheck(line) {
    for (let i = 0; i < names[0].values.length; i++) { //check all entries for exact name
        if (names[0].values[i][1].toLowerCase() === line.toLowerCase()) {
            return i;
        }
    }
    let lineArr = line.split(" ");
    for (let i = 0; i < lineArr.length; i++) {
        for (let cut of config.shortcuts) {
            for (let j = 0; j < cut.length - 1; j++) {
                if (lineArr[i].toLowerCase() === cut[j].toLowerCase()) {
                    lineArr[i] = cut[cut.length - 1];
                }
            }
        }
    }
    let newLine = lineArr.toString().replace(/,/g, " ");
    for (let i = 0; i < names[0].values.length; i++) { //check all entries for exact name
        if (names[0].values[i][1].toLowerCase() === newLine.toLowerCase()) {
            return i;
        }
    }
    let result = fuse.search(newLine);
    if (result.length < 1) {
        return -1;
    } else {
        let index = -1;
        for (let i = 0; i < names[0].values.length; i++) {
            if (names[0].values[i][1].toLowerCase() === result[0].item.name.toLowerCase()) {
                index = i;
            }
        }
        return index;
    }
}