//discord setup
let Discord = require('discord.io');

let bot = new Discord.Client({
    token: "",
    autorun: true
});

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('disconnect', function() {
    bot.connect();
});

//sql setup
let fs = require('fs');
let SQL = require('sql.js');
let filebuffer = fs.readFileSync('cards.cdb');
let db = new SQL.Database(filebuffer);
let contents = db.exec("SELECT * FROM datas");
let names = db.exec("SELECT * FROM texts");
let ids = [];
let nameList = [];
for (let card of contents[0].values) {
    ids.push(card[0]);
}
for (let card of names[0].values) {
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

let longMsg = "";
let longUser = "";
let longStr = "...\n__Type \".long\" to be PMed the rest!__";

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
    if (results.length + results2.length > 3) {
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
        message: "I am a Yu-Gi-Oh! card bot made by AlphaKretin#7990.\nPrice data is from the https://yugiohprices.com API.\nYou can find my help file here: httpss://github.com/AlphaKretin/colress-bot/blob/master/README-bastion.md"
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
        } while (!randFilterCheck(code, args) && i < 1000);
        if (i >= 1000) {
            bot.sendMessage({
                to: channelID,
                message: "No card matching your critera was found after 1000 attempts, so one probably doesn't exist."
            });
            return
        }
        let out = await getCardInfo(code, user, userID, channelID, message, event);
        if (args.indexOf("image") > -1) {
            postImage(code, out, user, userID, channelID, message, event);
        } else {
            if (out.length > 2000) {
                let outArr = [out.slice(0, 2000 - longStr.length) + longStr, out.slice(2000 - longStr.length)];
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
                    let outArr = [out.slice(0, 2000 - longStr.length) + longStr, out.slice(2000 - longStr.length)];
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
                        let outArr = [out.slice(0, 2000 - longStr.length) + longStr, out.slice(2000 - longStr.length)];
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
				var avg = (avgs.reduce((a, b) => a + b, 0))/avgs.length;
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
    https.get(url.parse("https://raw.githubusercontent.com/shadowfox87/YGOTCGOCGPics323x323/master/" + code + ".png"), function(response) {
        let data = [];
        response.on('data', function(chunk) {
            data.push(chunk);
        }).on('end', function() {
            let buffer = Buffer.concat(data);
            bot.uploadFile({
                to: channelID,
                file: buffer,
                filename: code + ".png"
            }, function(err, res) {
                if (out.length > 2000) {
                    let outArr = [out.slice(0, 2000 - longStr.length) + longStr, out.slice(2000 - longStr.length)];
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
        return [cardText.replace(/\n/g, "\n")];
    } else {
        let outArr = [];
        outArr.push(regx[1].replace(/\n/g, "\n"));
        let re2 = /(?:r Effect|xt) ?\]\R*([\S\s]*)/g;
        outArr.push(re2.exec(cardText)[1].replace(/\n/g, "\n"));
        return outArr;
    }
}

let shortcuts = [
    ["A0", "Ab Z.", "AbZ.", "Ab Z", "AbZ", "Elemental HERO Absolute Zero"],
    ["AGGD", "Ancient Gear Gadjiltron Dragon"],
    ["BEWD", "B-EWD", "Blue-Eyes White Dragon"],
    ["BEUD", "B-EUD", "Blue-Eyes Ultimate Dragon"],
    ["BRD", "Black Rose Dragon"],
    ["Brio", "BDoftIB", "B,DIB", "B,DoftB", "Brionac, Dragon of the Ice Barrier"],
    ["BLS", "BLS-EotB", "BLS EotB", "BLS-EB", "BLS EB", "BLS-EoB", "BLS EoB", "Black Luster Soldier - Envoy of the Beginning"],
    ["CcD", "Cardcar D"],
    ["CDI", "Cyber Dragon Infinity"],
    ["CED-EotE", "CED EotE", "CED-EE", "CED EE", "CED-EoE", "CED EoE", "Chaos Emperor Dragon - Envoy of the End"],
    ["CED", "Cyber End Dragon"],
    ["CyDra", "Cyber Dragon"],
    ["DAD", "Dark Armed Dragon"],
    ["DM", "Dark Magician"],
    ["DMG", "Dark Magician Girl"],
    ["DMK", "Dragon Master Knight"],
    ["DMoC", "Dark Magician of Chaos"],
    ["FGD", "FHD", "Five-Headed Dragon"],
    ["GEPD", "Galaxy-Eyes Photon Dragon"],
    ["JD", "Judgment Dragon"],
    ["LaDD", "Light and Darkness Dragon"],
    ["LPD", "Lightpulsar Dragon"],
    ["M7", "Constellar Ptolemy M7"],
    ["Mali", "Destiny Hero - Malicious"],
    ["NeoGEPD", "Neo Galaxy-Eyes Photon Dragon"],
    ["PSZ", "Plaguespreader Zombie"],
    ["PoC", "Phantom of Chaos"],
    ["RDA", "Red Dragon Archfiend"],
    ["REBD", "R-EB.D", "R-EBD", "REB.D", "Red-Eyes B. Dragon"],
    ["REDMD", "R-EDMD", "Red-Eyes Darkness Metal Dragon"],
    ["REFMD", "R-EFMD", "Red-Eyes Flare Metal Dragon"],
    ["TER", "T-ER", "Thousand-Eyes Restrict"],
    ["TGU", "TGftU", "TGfU", "Tour Guide from the Underworld"],
    ["TKRO", "TKR-O", "Thunder King Rai-Oh"],
    ["Trag", "Tragoedia"],
    ["Trish", "TDotIB", "T,DotIB", "T,DIB", "TDIB", "Trishula, Dragon of the Ice Barrier"],
    ["AoD", "Allure of Darkness"],
    ["AHL", "A Hero Lives"],
    ["ARA", "Advanced Ritual Art"],
    ["BoM", "Book of Moon"],
    ["BoT", "Book of Taiyou"],
    ["BoE", "Book of Eclipse"],
    ["BoL", "Book of Life"],
    ["D-Draw", "DDraw", "D Draw", "DestDraw", "Destiny Draw"],
    ["DDR", "D.D.R.", "D.D.R", "Different Dimension Reincarnation"],
    ["DWD", "Dark World Dealings"],
    ["E-Con", "ECon", "E Con", "Enemy Controller"],
    ["E-Tele", "ETele", "E Tele", "Emergency Teleport"],
    ["FC", "Final Countdown"],
    ["FuFu", "Future Fusion"],
    ["IRS", "Inferno Reckless Summon"],
    ["MST", "Mystical Space Typhoon"],
    ["PoD", "Pot of Duality"],
    ["PoA", "Pot of Avarice"],
    ["RotA", "Reinforcement of the Army"],
    ["R-U-M", "RUM", "R-UM", "RU-M", "Rank-Up-Magic"],
    ["TWRA", "WRA", "The Warrior Returning Alive"],
    ["BTH", "Bottomless Trap Hole"],
    ["CED", "Compulsory Evacuation Device"],
    ["CCV", "Crush Card Virus"],
    ["CotH", "Call of the Haunted"],
    ["D Prison", "D-Prison", "DPrison", "Dimensional Prison"],
    ["DDV", "Deck Devastation Virus"],
    ["EEV", "Eradicator Epidemic Virus"],
    ["LIM", "L-IM", "Light-Imprisoning Mirror"],
    ["PWWB", "Phoenix Wing Wind Blast"],
    ["SIM", "S-IM", "Shadow-Imprisoning Mirror"],
    ["SJ", "Solemn Judgment"],
    ["SkD", "SD", "Skill Drain"],
    ["SW", "Solemn Warning"],
    ["THRiO", "THRO", "The Huge Revolution is Over"],
    ["T Roar", "T-Roar", "TRoar", "Theartening Roar"],
    ["TT", "ToTr", "Torrential Tribute"],
    ["AoJ", "Ally of Justice"],
    ["BB", "B'B", "Battlin' Boxer"],
    ["BW", "Blackwing"],
    ["CB", "Crystal Beast"],
    ["DW", "Dark World"],
    ["GB", "GLAD", "Gladiator Beast"],
    ["GK", "GK's", "GKs", "Gravekeeper's"],
    ["GemK", "Gem-K", "GemKn", "Gem-Knight"],
    ["HC", "Heroic Challenger"],
    ["HF", "Hazy Flame"],
    ["LS", "Lightsworn"],
    ["MPB", "Mecha Phantom Beast"],
    ["SS", "SixSam", "6S", "6Sam", "Six Samurai"],
    ["TG", "T.G", "TG.", "T.G."],
    ["WU", "W-U", "Wind-Up"],
    ["OE", "O-E", "Odd-Eyes"],
    ["PK", "TPK", "The Phantom Knights"],
    ["RB", "Ritual Beast"],
    ["RBT", "Ritual Beast Tamer"],
    ["SB", "SpiRB", "SRB", "Spiritual Beast"],
    ["SBT", "SpiRBT", "SRBT", "Spiritual Beast Tamer"],
    ["RR", "Raidraptor"],
    ["SDR", "Super Defense Robot"],
    ["SHS", "SuSa", "Superheavy Samurai"],
    ["/AM", "/Assault Mode"],
    ["ACB", "Advanced Crystal Beast"],
    ["AG", "Ancient Gear"],
    ["ABW", "Assault Blackwing"],
    ["BWT", "Blackwing Tamer"],
    ["BA", "Burning Abyss"],
    ["CG", "Celtic Guard"],
    ["ChemB", "ChB", "Chemical Beast"],
    ["AChemB", "AChB", "Advanced Chemical Beast"],
    ["CA", "Cyber Angel"],
    ["DC", "Dark Contract"],
    ["D-HERO", "DHERO", "Destiny HERO"],
    ["E-HERO", "EHERO", "Elemental HERO"],
    ["M-HERO", "MHERO", "Masked HERO"],
    ["V-HERO", "VHERO", "Vision HERO"],
    ["Ev-HERO", "EvHERO", "Evil HERO"],
    ["EI", "EbI", "Earthbound Immortal"],
    ["ES", "EbS", "Earthbound Servant"],
    ["EoD", "ED", "Emissary of Darkness"],
    ["EW", "EmWa", "Empowered Warrior"],
    ["FP", "F-O", "Familiar-Posessed"],
    ["BotFF", "BhotFF", "BoFF", "BhoFF", "BFF", "Brotherhood of the Fire First"],
    ["FF", "Fire Formation"],
    ["FB", "Forbidden Beast"],
    ["otF", "of the Forest"],
    ["GtFK", "GFK", "Gaia the Fierce Knight"],
    ["GM", "Guts Master"],
    ["HB", "Heraldic Beast"],
    ["SR", "Speedroid"],
    ["HtBFD", "HBFD", "Horus the Black Flame Dragon"],
    ["BE", "B-E", "Blue-Eyes"],
    ["RE", "R-E", "Red-Eyes"],
    ["LL", "Lunalight"],
    ["MW", "Magnet Warrior"],
    ["SQ", "Super Quant"],
    ["SQum", "Super Quantum"],
    ["SQal", "Super Quantal"],
    ["UA", "U.A", "UA.", "U.A."],
    ["WW", "Wind Witch"],
    ["YZ", "Yang Zing"],
    ["TH", "Trap Hole"]
];

function nameCheck(line) {
    for (let i = 0; i < names[0].values.length; i++) { //check all entries for exact name
        if (names[0].values[i][1].toLowerCase() === line.toLowerCase()) {
            return i;
        }
    }
    let lineArr = line.split(" ");
    for (let i = 0; i < lineArr.length; i++) {
        for (let cut of shortcuts) {
            for (let j = 0; j < cut.length - 1; j++) {
                if (lineArr[i].toLowerCase() === cut[j].toLowerCase()) {
                    console.log(lineArr[i]);
                    console.log(cut[j]);
                    console.log(cut[cut.length - 1]);
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