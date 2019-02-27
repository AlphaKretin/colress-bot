let fs = require("fs");

let config = JSON.parse(fs.readFileSync("config/config.json", "utf8")); //open config file from local directory. Expected contents are as follows
/*
{
	"token": "", //Discord bot token for login
	"prefix": "!", //the prefix for a user to type to indicate that what they're typing is a command
	"data": "data/colressData.db", //the location of a SQLite database relative to the local directory. Details on the format of this database can be found in the readme.
	"redirects": {
		"serverID": "channelID" //a message Colress would send in serverID is redirected to channelID instead of where the command was posted
	},
	"imageUrl": "https://...", //online source from which Colress will retrieve images of pokemon. Colress will append the pokemon's pokedex number, with a customisable suffix for alternate formes, then .png
	"shinyUrl": "https://..." //online source from which Colress will retrieve images of pokemon's shiny colourations. Colress will append the pokemon's pokedex number, with a customisable suffix for alternate formes, then .png
}
*/
let pre = config.prefix;

//discord setup
let Discord = require("discord.io");

let bot = new Discord.Client({
    token: config.token,
    autorun: true
});

bot.on("ready", function() {
    console.log("Logged in as %s - %s\n", bot.username, bot.id);
});

bot.on("disconnect", function() {
    bot.connect();
});

//sql setup
let SQL = require("sql.js");
let filebuffer = fs.readFileSync(config.data);
let db = new SQL.Database(filebuffer);
let mons = db.exec("SELECT * FROM mons");
let moves = db.exec("SELECT * FROM moves");
let items = db.exec("SELECT * FROM items");
let abilities = db.exec("SELECT * FROM abilities");
let monNames: string[] = [];
let monDexes: number[] = [];
let monAlola: number[] = [];
let monNamesFuse = [];
for (let mon of mons[0].values) {
    monNames.push(mon[1].toLowerCase());
    monDexes.push(mon[2]);
    if (mon[3]) {
        monAlola.push(mon[3]);
    } else {
        monAlola.push(-1);
    }
    monNamesFuse.push({
        name: mon[1]
    });
}
let movNames: string[] = [];
let movNamesFuse = [];
for (let move of moves[0].values) {
    movNames.push(move[1].toLowerCase());
    movNamesFuse.push({
        name: move[1]
    });
}
let itNames: string[] = [];
let itNamesFuse = [];
for (let item of items[0].values) {
    itNames.push(item[1].toLowerCase());
    itNamesFuse.push({
        name: item[1]
    });
}
let abNames: string[] = [];
let abNamesFuse = [];
for (let ability of abilities[0].values) {
    abNames.push(ability[1].toLowerCase());
    abNamesFuse.push({
        name: ability[1]
    });
}

//fuse setup
let Fuse = require("fuse.js");
let options = {
    shouldSort: true,
    includeScore: true,
    tokenize: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["name"]
};
let monFuse = new Fuse(monNamesFuse, options);
let movFuse = new Fuse(movNamesFuse, options);
let itFuse = new Fuse(itNamesFuse, options);
let abFuse = new Fuse(abNamesFuse, options);

let request = require("request");
let https = require("https");
let url = require("url");

let gameData: any = {
    active: false
};
let gameTO1: NodeJS.Timer;
let gameTO2: NodeJS.Timer;

bot.on("message", function(user: string, userID: string, channelID: string, message: string, event: any) {
    if (userID === bot.id) {
        return;
    }
    let lowMessage = message.toLowerCase();
    if (message.indexOf("<@" + bot.id + ">") > -1 || lowMessage.indexOf(pre + "help") === 0) {
        sendSingleMessage("help", user, userID, channelID, message, event);
    }
    if (lowMessage.indexOf(pre + "pokemon ") === 0) {
        pokemon(user, userID, channelID, message, event);
    }
    if (lowMessage.indexOf(pre + "pokedex ") === 0) {
        pokedex(user, userID, channelID, message, event);
    }
    if (lowMessage.indexOf(pre + "aloladex ") === 0) {
        aloladex(user, userID, channelID, message, event);
    }
    if (lowMessage.indexOf(pre + "move ") === 0) {
        move(user, userID, channelID, message, event);
    }
    if (lowMessage.indexOf(pre + "item ") === 0) {
        item(user, userID, channelID, message, event);
    }
    if (lowMessage.indexOf(pre + "ability ") === 0) {
        ability(user, userID, channelID, message, event);
    }
    if (lowMessage.indexOf(pre + "shiny ") === 0) {
        shiny(user, userID, channelID, message, event);
    }
    if (lowMessage.indexOf(pre + "weak ") === 0) {
        weak(user, userID, channelID, message, event);
    }
    if (lowMessage.indexOf(pre + "weaktypes ") === 0) {
        weakTypes(user, userID, channelID, message, event);
    }
    if (lowMessage.indexOf(pre + "game ") === 0) {
        game(user, userID, channelID, message, event);
    }
    if (lowMessage.indexOf(pre + "typechart") === 0) {
        sendSingleMessage("types", user, userID, channelID, message, event);
    }
    if (lowMessage.indexOf(pre + "evolution") === 0) {
        sendSingleMessage("evos", user, userID, channelID, message, event);
    }
    if (lowMessage.indexOf(pre + "qr") === 0) {
        sendSingleMessage("qr", user, userID, channelID, message, event);
    }
    if (lowMessage.indexOf(pre + "nature") === 0) {
        sendSingleMessage("nature", user, userID, channelID, message, event);
    }
    if (gameData.active) {
        switch (gameData.game) {
            case "highlow":
                answerHiLo(user, userID, channelID, message, event);
                break;
            case "highlow2":
                answerHiLo2(user, userID, channelID, message, event);
                break;
            case "whosthat":
                answerWhosThat(user, userID, channelID, message, event);
                break;
            case "hangman":
                answerHangman(user, userID, channelID, message, event);
                break;
            default:
                break;
        }
    }
});

function sendMessage(out: string, channelID: string) {
    return new Promise(function(resolve, reject) {
        let serverID = bot.channels[channelID] && bot.channels[channelID].guild_id;
        if (serverID in config.redirects) {
            bot.sendMessage(
                {
                    to: config.redirects[serverID],
                    message: out
                },
                function(err: Error, res: any) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                }
            );
        } else {
            bot.sendMessage(
                {
                    to: channelID,
                    message: out
                },
                function(err: Error, res: any) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                }
            );
        }
    });
}

async function sendSingleMessage(
    msg: string,
    user: string,
    userID: string,
    channelID: string,
    message: string,
    event: any
) {
    try {
        let out = "";
        switch (msg) {
            case "help":
                out =
                    "I am a Pokémon bot made by AlphaKretin#7990.\nYou can find my help file and source here: <https://github.com/AlphaKretin/colress-bot/>\nYou can support my development on Patreon here: <https://www.patreon.com/alphakretinbots>";
                break;
            case "types":
                out = "http://i.imgur.com/fylyCdC.png";
                break;
            case "evos":
                out = "https://a.pomf.cat/lmesct.png";
                break;
            case "qr":
                out = "http://imgur.com/a/EFOqs";
                break;
            case "nature":
                out = "http://faqs.neoseeker.com/Games/DS/pokemon_bw_2_nature.png";
                break;
            default:
                return;
        }
        if (out.length > 0) {
            sendMessage(out, channelID);
        }
    } catch (e) {
        console.log(e);
    }
}

async function pokemon(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let query = message.slice((pre + "pokemon ").length);
        let index = monNames.indexOf(query.toLowerCase());
        let out = "";
        if (index > -1) {
            out = getMonInfo(index);
        } else {
            let result = monFuse.search(query);
            if (result.length < 1) {
                out = "Sorry, I can't find a Pokémon with that name!";
                sendMessage(out, channelID);
                return;
            } else {
                index = monNames.indexOf(result[0].item.name.toLowerCase());
                if (index > -1) {
                    out = getMonInfo(index);
                } else {
                    out = "Sorry, I can't find a Pokémon with that name!";
                    console.log("Fuse error");
                    sendMessage(out, channelID);
                    return;
                }
            }
        }
        await postImage(index, false, channelID);
        sendMessage(out, channelID);
    } catch (e) {
        console.log(e);
    }
}

function getMonInfo(index: number) {
    let mon = mons[0].values[index];
    let out = "__**" + mon[1] + "**__\n";
    out += "**Pokédex**: " + mon[2];
    if (mon[3]) {
        out += " (" + mon[3] + ")";
    }
    out += "\n**Type**: " + mon[4];
    if (mon[5]) {
        out += "/" + mon[5];
    }
    out += "\n**Ability**: " + mon[6];
    if (mon[7]) {
        out += "/" + mon[7];
    }
    if (mon[8] !== mon[6]) {
        out += " **Hidden**: " + mon[8];
    }
    out += "\n**Serebii Link**: http://www.serebii.net/pokedex-sm/" + mon[2].toString().padStart(3, "0") + ".shtml";
    return out;
}

function postImage(index: number, shiny: boolean, channelID: string) {
    return new Promise(function(resolve, reject) {
        let imageUrl = "";
        if (shiny) {
            imageUrl = config.shinyUrl;
        } else {
            imageUrl = config.imageUrl;
        }
        let mon = mons[0].values[index];
        let suffix = mon[2].toString().padStart(3, "0");
        if (mon[9]) {
            suffix += "-" + mon[9] + ".png";
        } else {
            suffix += ".png";
        }
        https.get(url.parse(imageUrl + suffix), function(response: any) {
            let data: Buffer[] = [];
            response
                .on("data", function(chunk: Buffer) {
                    data.push(chunk);
                })
                .on("end", function() {
                    let buffer = Buffer.concat(data);
                    let serverID = bot.channels[channelID] && bot.channels[channelID].guild_id;
                    if (serverID in config.redirects) {
                        bot.uploadFile(
                            {
                                to: config.redirects[serverID],
                                file: buffer,
                                filename: suffix
                            },
                            function(err: Error, res: any) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(res);
                                }
                            }
                        );
                    } else {
                        bot.uploadFile(
                            {
                                to: channelID,
                                file: buffer,
                                filename: suffix
                            },
                            function(err: Error, res: any) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(res);
                                }
                            }
                        );
                    }
                });
        });
    });
}

async function pokedex(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let query = parseInt(message.slice((pre + "pokedex ").length));
        if (query === NaN || query < 1) {
            sendMessage("Sorry, that doesn't look like a Pokédex number!", channelID);
            return;
        }
        let index = monDexes.indexOf(query);
        if (index > -1) {
            await postImage(index, false, channelID);
            sendMessage(getMonInfo(index), channelID);
        } else {
            sendMessage("Sorry, I can't find a Pokémon with that number!", channelID);
            return;
        }
    } catch (e) {
        console.log(e);
    }
}

async function aloladex(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let query = parseInt(message.slice((pre + "aloladex ").length));
        if (query === NaN || query < 1) {
            sendMessage("Sorry, that doesn't look like a Pokédex number!", channelID);
            return;
        }
        let index = monAlola.indexOf(query);
        if (index > -1) {
            await postImage(index, false, channelID);
            sendMessage(getMonInfo(index), channelID);
        } else {
            sendMessage("Sorry, I can't find a Pokémon with that number!", channelID);
            return;
        }
    } catch (e) {
        console.log(e);
    }
}

async function move(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let query = message.slice((pre + "move ").length);
        let index = movNames.indexOf(query.toLowerCase());
        let out = "";
        if (index > -1) {
            out = getMoveInfo(index);
        } else {
            let result = movFuse.search(query);
            if (result.length < 1) {
                out = "Sorry, I can't find a move with that name!";
            } else {
                index = movNames.indexOf(result[0].item.name.toLowerCase());
                if (index > -1) {
                    out = getMoveInfo(index);
                } else {
                    out = "Sorry, I can't find a move with that name!";
                    console.log("Fuse error");
                }
            }
        }
        sendMessage(out, channelID);
    } catch (e) {
        console.log(e);
    }
}

function getMoveInfo(index: number) {
    let move = moves[0].values[index];
    let out = "__**" + move[1] + "**__\n";
    out += "**Type**: " + move[2];
    out += " **Category**: " + move[3] + "\n";
    if (move[4]) {
        out += "**Power**: " + move[4] + " ";
    }
    if (move[5]) {
        out += "**PP**: " + move[5] + " ";
    }
    if (move[6]) {
        out += "**Accuracy**: " + move[6];
    }
    out += "\n**Effect**: " + move[7];
    if (move[8]) {
        out += "\n**Z-Move Effect**: " + move[8];
    }
    if (move[9]) {
        out += "\n**TM**: " + move[9];
    }
    if (move[10]) {
        out += "\n**Serebii Link**: http://www.serebii.net/attackdex-sm/" + move[10] + ".shtml";
    } else {
        out +=
            "\n**Serebii Link**: http://www.serebii.net/attackdex-sm/" +
            move[1].toLowerCase().replace(/ /g, "") +
            ".shtml";
    }
    return out;
}

async function item(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let query = message.slice((pre + "move ").length);
        let index = itNames.indexOf(query.toLowerCase());
        let out = "";
        if (index > -1) {
            out = getItemInfo(index);
        } else {
            let result = itFuse.search(query);
            if (result.length < 1) {
                out = "Sorry, I can't find an item with that name!";
            } else {
                index = itNames.indexOf(result[0].item.name.toLowerCase());
                if (index > -1) {
                    out = getItemInfo(index);
                } else {
                    out = "Sorry, I can't find an item with that name!";
                    console.log("Fuse error");
                }
            }
        }
        sendMessage(out, channelID);
    } catch (e) {
        console.log(e);
    }
}

function getItemInfo(index: number) {
    let item = items[0].values[index];
    let out = "__**" + item[1] + "**__\n";
    out += "**Description**: " + item[2];
    if (item[3]) {
        out += "\n**Serebii Link**: http://www.serebii.net/itemdex/" + item[3] + ".shtml";
    } else {
        out +=
            "\n**Serebii Link**: http://www.serebii.net/itemdex/" + item[1].toLowerCase().replace(/ /g, "") + ".shtml";
    }
    return out;
}

async function ability(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let query = message.slice((pre + "ability ").length);
        let index = abNames.indexOf(query.toLowerCase());
        let out = "";
        if (index > -1) {
            out = getAbilityInfo(index);
        } else {
            let result = abFuse.search(query);
            if (result.length < 1) {
                out = "Sorry, I can't find an ability with that name!";
            } else {
                index = abNames.indexOf(result[0].item.name.toLowerCase());
                if (index > -1) {
                    out = getAbilityInfo(index);
                } else {
                    out = "Sorry, I can't find an ability with that name!";
                    console.log("Fuse error");
                }
            }
        }
        sendMessage(out, channelID);
    } catch (e) {
        console.log(e);
    }
}

function getAbilityInfo(index: number) {
    let ability = abilities[0].values[index];
    let out = "__**" + ability[1] + "**__\n";
    out += "**Description**: " + ability[2];
    if (ability[3]) {
        out += "\n**Serebii Link**: http://www.serebii.net/abilitydex/" + ability[3] + ".shtml";
    } else {
        out +=
            "\n**Serebii Link**: http://www.serebii.net/abilitydex/" +
            ability[1].toLowerCase().replace(/ /g, "") +
            ".shtml";
    }
    return out;
}

async function shiny(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let query = message.slice((pre + "shiny ").length);
        let index = monNames.indexOf(query.toLowerCase());
        if (index < 0) {
            let result = monFuse.search(query);
            if (result.length < 1) {
                const out = "Sorry, I can't find a Pokémon with that name!";
                sendMessage(out, channelID);
                return;
            } else {
                index = monNames.indexOf(result[0].item.name.toLowerCase());
                if (index < 0) {
                    const out = "Sorry, I can't find a Pokémon with that name!";
                    console.log("Fuse error");
                    sendMessage(out, channelID);
                    return;
                }
            }
        }
        postImage(index, true, channelID);
    } catch (e) {
        console.log(e);
    }
}

async function weak(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let query = message.slice((pre + "weak ").length);
        let index = monNames.indexOf(query.toLowerCase());
        let out = "";
        let types = [];
        if (index > -1) {
            types = getMonTypes(index);
            out = "**Name**: " + mons[0].values[index][1] + "\n" + getWeakInfo(types);
        } else {
            let result = monFuse.search(query);
            if (result.length < 1) {
                out = "Sorry, I can't find a Pokémon with that name!";
                sendMessage(out, channelID);
                return;
            } else {
                index = monNames.indexOf(result[0].item.name.toLowerCase());
                if (index > -1) {
                    types = getMonTypes(index);
                    out = "**Name**: " + mons[0].values[index][1] + "\n" + getWeakInfo(types);
                } else {
                    out = "Sorry, I can't find a Pokémon with that name!";
                    console.log("Fuse error");
                    sendMessage(out, channelID);
                    return;
                }
            }
        }
        sendMessage(out, channelID);
    } catch (e) {
        console.log(e);
    }
}

async function weakTypes(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let args = message.toLowerCase().split(" ");
        let types = [];
        for (let arg of args) {
            arg = c(arg);
            if (
                [
                    "Normal",
                    "Fire",
                    "Fighting",
                    "Water",
                    "Flying",
                    "Grass",
                    "Poison",
                    "Electric",
                    "Ground",
                    "Psychic",
                    "Rock",
                    "Ice",
                    "Bug",
                    "Dragon",
                    "Ghost",
                    "Dark",
                    "Steel",
                    "Fairy"
                ].indexOf(arg) > -1
            ) {
                types.push(arg);
            }
        }
        let out = "";
        if (types.length > 0) {
            out = getWeakInfo(types);
        } else {
            out = "Sorry, none of those words look like types to me!";
        }
        sendMessage(out, channelID);
    } catch (e) {
        console.log(e);
    }
}

function getMonTypes(index: number) {
    let mon = mons[0].values[index];
    let types = [mon[4]];
    if (mon[5]) {
        types.push(mon[5]);
    }
    return types;
}

function getWeakInfo(types: string[]) {
    if (types.length < 1) {
        return "Invalid types!";
    }
    let typeInfo: { [type: string]: any } = {
        Normal: {
            value: 0,
            weak: ["Fighting"],
            resist: [],
            immune: ["Ghost"]
        },
        Fire: {
            value: 0,
            weak: ["Ground", "Rock", "Water"],
            resist: ["Bug", "Fairy", "Fire", "Grass", "Ice", "Steel"],
            immune: []
        },
        Fighting: {
            value: 0,
            weak: ["Fairy", "Flying", "Psychic"],
            resist: ["Bug", "Dark", "Rock"],
            immune: []
        },
        Water: {
            value: 0,
            weak: ["Electric", "Grass"],
            resist: ["Fire", "Ice", "Steel", "Water"],
            immune: []
        },
        Flying: {
            value: 0,
            weak: ["Electric", "Ice", "Rock"],
            resist: ["Bug", "Fighting", "Grass"],
            immune: ["Ground"]
        },
        Grass: {
            value: 0,
            weak: ["Bug", "Fire", "Flying", "Ice", "Poison"],
            resist: ["Electric", "Grass", "Ground", "Water"],
            immune: []
        },
        Poison: {
            value: 0,
            weak: ["Ground", "Psychic"],
            resist: ["Bug", "Fairy", "Fighting", "Grass", "Poison"],
            immune: []
        },
        Electric: {
            value: 0,
            weak: ["Ground"],
            resist: ["Electric", "Flying", "Steel"],
            immune: []
        },
        Ground: {
            value: 0,
            weak: ["Grass", "Ice", "Water"],
            resist: ["Poison", "Rock"],
            immune: ["Electric"]
        },
        Psychic: {
            value: 0,
            weak: ["Bug", "Dark", "Ghost"],
            resist: ["Fighting", "Psychic"],
            immune: []
        },
        Rock: {
            value: 0,
            weak: ["Fighting", "Grass", "Ground", "Steel", "Water"],
            resist: ["Fire", "Flying", "Normal", "Poison"],
            immune: []
        },
        Ice: {
            value: 0,
            weak: ["Fighting", "Fire", "Rock", "Steel"],
            resist: ["Ice"],
            immune: []
        },
        Bug: {
            value: 0,
            weak: ["Fire", "Flying", "Rock"],
            resist: ["Fighting", "Grass", "Ground"],
            immune: []
        },
        Dragon: {
            value: 0,
            weak: ["Dragon", "Ice", "Fairy"],
            resist: ["Electric", "Fire", "Grass", "Water"],
            immune: []
        },
        Ghost: {
            value: 0,
            weak: ["Ghost", "Dark"],
            resist: ["Bug", "Poison"],
            immune: ["Normal", "Fighting"]
        },
        Dark: {
            value: 0,
            weak: ["Bug", "Fighting", "Fairy"],
            resist: ["Dark", "Ghost"],
            immune: ["Psychic "]
        },
        Steel: {
            value: 0,
            weak: ["Fighting", "Fire", "Ground"],
            resist: ["Bug", "Dragon", "Fairy", "Flying", "Grass", "Ice", "Normal", "Psychic", "Rock", "Steel"],
            immune: ["Poison"]
        },
        Fairy: {
            value: 0,
            weak: ["Poison", "Steel"],
            resist: ["Bug", "Dark", "Fighting"],
            immune: ["Dragon"]
        }
    };
    for (let type of types) {
        if (c(type.toLowerCase()) in typeInfo) {
            for (const key in typeInfo) {
                if (typeInfo.hasOwnProperty(key)) {
                    if (typeInfo[c(type.toLowerCase())].weak.indexOf(key) > -1) {
                        typeInfo[key].value++;
                    }
                    if (typeInfo[c(type.toLowerCase())].resist.indexOf(key) > -1) {
                        typeInfo[key].value--;
                    }
                    if (typeInfo[c(type.toLowerCase())].immune.indexOf(key) > -1) {
                        typeInfo[key].value -= 10;
                    }
                }
            }
        }
    }
    let weaks: string[] = [];
    let resists: string[] = [];
    let immunes: string[] = [];
    Object.keys(typeInfo).forEach(function(key, index) {
        if (typeInfo[key].value > 1) {
            weaks.push("__" + key + "__");
        } else if (typeInfo[key].value === 1) {
            weaks.push(key);
        } else if (typeInfo[key].value === -1) {
            resists.push(key);
        } else if (typeInfo[key].value === -2) {
            resists.push("__" + key + "__");
        } else if (typeInfo[key].value < -2) {
            immunes.push(key);
        }
    });
    let out = "**Types**: " + types.toString().replace(/,/g, ", ") + "\n";
    if (weaks.length > 0) {
        out += "**Weaknesses**: " + weaks.toString().replace(/,/g, ", ") + "\n";
    }
    if (resists.length > 0) {
        out += "**Resistances**: " + resists.toString().replace(/,/g, ", ") + "\n";
    }
    if (immunes.length > 0) {
        out += "**Immunities**: " + immunes.toString().replace(/,/g, ", ");
    }
    return out;
}

async function game(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let input = message.toLowerCase().split(" ")[1];
        switch (input) {
            case "highlow":
                gameHiLo(user, userID, channelID, message, event);
                break;
            case "highlow2":
                gameHiLo2(user, userID, channelID, message, event);
                break;
            case "hangman":
                gameHangman(user, userID, channelID, message, event);
                break;
            case "whosthat":
                gameWhosThat(user, userID, channelID, message, event);
                break;
            default:
                sendMessage(
                    'That\'s not a game I know! Try "highlow", "highlow2", "whosthat", or "hangman"!',
                    channelID
                );
        }
    } catch (e) {
        console.log(e);
    }
}

async function gameHiLo(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let serverID = bot.channels[channelID] && bot.channels[channelID].guild_id;
        if (gameData.active) {
            return;
        } else {
            //pick a random pokemon
            let index = getIncInt(0, monNames.length - 1);
            let name = mons[0].values[index][1];
            let dex = mons[0].values[index][2];
            //start game
            gameData = {
                active: true,
                game: "highlow",
                server: serverID,
                channel: channelID,
                name: name,
                dex: dex,
                guesses: 0
            };
            sendMessage(
                "You have 10 tries to guess the National Pokédex number of the following Pokémon: **" + name + "**!",
                channelID
            );
        }
    } catch (e) {
        console.log(e);
    }
}

async function answerHiLo(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let serverID = bot.channels[channelID] && bot.channels[channelID].guild_id;
        if (
            gameData.active === false ||
            serverID !== gameData.server ||
            channelID !== gameData.channel ||
            gameData.game !== "highlow"
        ) {
            return;
        }
        if (parseInt(message) === gameData.dex) {
            gameData.guesses++;
            bot.addReaction({
                channelID: channelID,
                messageID: event.d.id,
                reaction: "👍"
            });
            sendMessage(
                "<@" +
                    userID +
                    "> got it in " +
                    gameData.guesses +
                    " guess(es)! The National Pokédex number of " +
                    gameData.name +
                    " is **" +
                    gameData.dex +
                    "**!",
                channelID
            );
            gameData = {
                active: false
            };
        } else {
            let out = "";
            let index = monDexes.indexOf(parseInt(message));
            if (index === -1) {
                return;
            }
            gameData.guesses++;
            if (monDexes[index] < gameData.dex) {
                out = "That Pokémon is " + mons[0].values[index][1] + ", which is too early in the Pokédex!\n";
            } else {
                //if (monDexes[index] > gameData.dex)
                out = "That Pokémon is " + mons[0].values[index][1] + ", which is too late in the Pokédex!\n";
            }
            if (gameData.guesses === 10) {
                out +=
                    "Sorry, but you're out of guesses! The National Pokédex number of " +
                    gameData.name +
                    " is **" +
                    gameData.dex +
                    "**!";
                gameData = {
                    active: false
                };
            } else {
                out += "You have " + (10 - gameData.guesses) + " guess(es) left!";
            }
            sendMessage(out, channelID);
        }
    } catch (e) {
        console.log(e);
    }
}

async function gameHiLo2(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let serverID = bot.channels[channelID] && bot.channels[channelID].guild_id;
        if (gameData.active) {
            return;
        } else {
            //pick a random pokemon
            let index = getIncInt(0, monNames.length - 1);
            let name = mons[0].values[index][1]
                .replace("é", "e")
                .replace("♂", "M")
                .replace("♀", "F");
            let dex = mons[0].values[index][2];
            let hint = "";
            for (let letter of name) {
                if (getIncInt(0, 2) !== 0 && letter !== " ") {
                    letter = "-";
                }
                hint += letter;
            }
            //start game
            gameData = {
                active: true,
                game: "highlow2",
                server: serverID,
                channel: channelID,
                name: name,
                dex: dex,
                hint: hint,
                guesses: 0
            };
            sendMessage(
                "You have 10 tries to name the Pokémon with the following National Pokédex number: **" + dex + "**!",
                channelID
            );
        }
    } catch (e) {
        console.log(e);
    }
}

async function answerHiLo2(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let serverID = bot.channels[channelID] && bot.channels[channelID].guild_id;
        if (
            gameData.active === false ||
            serverID !== gameData.server ||
            channelID !== gameData.channel ||
            gameData.game !== "highlow2"
        ) {
            return;
        }
        let index = monNames.indexOf(message.toLowerCase());
        if (index === -1) {
            return;
        }
        let guessDex = monDexes[index];
        if (guessDex === gameData.dex) {
            gameData.guesses++;
            bot.addReaction({
                channelID: channelID,
                messageID: event.d.id,
                reaction: "👍"
            });
            sendMessage(
                "<@" +
                    userID +
                    "> got it in " +
                    gameData.guesses +
                    " guess(es)! The answer I had in mind was **" +
                    gameData.name +
                    "**, but if it has alternate formes, they were valid too!",
                channelID
            );
            gameData = {
                active: false
            };
        } else {
            let out = "";
            if (index === -1) {
                return;
            }
            gameData.guesses++;
            if (guessDex < gameData.dex) {
                out = "That Pokémon is number " + guessDex + ", which is too early in the Pokédex!\n";
            } else {
                //if (guessDex > gameData.dex)
                out = "That Pokémon is number " + guessDex + ", which is too late in the Pokédex!\n";
            }
            if (gameData.guesses === 5) {
                out += "Have a hint: `" + gameData.hint + "`\n";
            }
            if (gameData.guesses === 10) {
                out +=
                    "Sorry, but you're out of guesses! The answer I had in mind was **" +
                    gameData.name +
                    "**, but if it has alternate formes, they were valid too!";
                gameData = {
                    active: false
                };
            } else {
                out += "You have " + (10 - gameData.guesses) + " guess(es) left!";
            }
            sendMessage(out, channelID);
        }
    } catch (e) {
        console.log(e);
    }
}

async function gameWhosThat(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let serverID = bot.channels[channelID] && bot.channels[channelID].guild_id;
        if (gameData.active) {
            return;
        } else {
            //pick a random pokemon
            let index = getIncInt(0, monNames.length - 1);
            let name = mons[0].values[index][1]
                .replace("é", "e")
                .replace("♂", "M")
                .replace("♀", "F");
            let dex = mons[0].values[index][2];
            let hint = "";
            for (let letter of name) {
                if (getIncInt(0, 3) !== 0 && letter !== " ") {
                    letter = "-";
                }
                hint += letter;
            }
            //start game
            gameData = {
                active: true,
                game: "whosthat",
                server: serverID,
                channel: channelID,
                name: name,
                hint: hint,
                guesses: 0
            };
            await postImage(index, false, channelID);
            sendMessage("You have 10 seconds to name this Pokémon!", channelID);
            gameTO1 = setTimeout(function() {
                sendMessage("Have a hint: `" + gameData.hint + "`", channelID);
            }, 5000);
            gameTO2 = setTimeout(function() {
                sendMessage("Time's up! The Pokémon was **" + gameData.name + "**! Try again next time!", channelID);
                gameData = {
                    active: false
                };
            }, 10000);
        }
    } catch (e) {
        console.log(e);
    }
}

async function answerWhosThat(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let serverID = bot.channels[channelID] && bot.channels[channelID].guild_id;
        if (
            gameData.active === false ||
            serverID !== gameData.server ||
            channelID !== gameData.channel ||
            gameData.game !== "whosthat"
        ) {
            return;
        }
        if (message.toLowerCase() === gameData.name.toLowerCase()) {
            clearTimeout(gameTO1);
            clearTimeout(gameTO2);
            bot.addReaction({
                channelID: channelID,
                messageID: event.d.id,
                reaction: "👍"
            });
            sendMessage("<@" + userID + "> got it! The answer was **" + gameData.name + "**!", channelID);
            gameData = {
                active: false
            };
        }
    } catch (e) {
        console.log(e);
    }
}

async function gameHangman(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let serverID = bot.channels[channelID] && bot.channels[channelID].guild_id;
        if (gameData.active) {
            return;
        } else {
            //pick a random pokemon
            let index = getIncInt(0, monNames.length - 1);
            let name = mons[0].values[index][1]
                .replace("é", "e")
                .replace("♂", "M")
                .replace("♀", "F");
            let dex = mons[0].values[index][2];
            let hint = name.replace(/\S/g, "-");
            //start game
            gameData = {
                active: true,
                game: "hangman",
                server: serverID,
                channel: channelID,
                name: name,
                dex: dex,
                hint: hint,
                guesses: 0,
                wrongs: []
            };
            sendMessage(
                "Guess the letters in this Pokémon's name! You can make 10 mistakes before the game is over.\n`" +
                    hint +
                    "`",
                channelID
            );
        }
    } catch (e) {
        console.log(e);
    }
}

async function answerHangman(user: string, userID: string, channelID: string, message: string, event: any) {
    try {
        let serverID = bot.channels[channelID] && bot.channels[channelID].guild_id;
        if (
            gameData.active === false ||
            serverID !== gameData.server ||
            channelID !== gameData.channel ||
            gameData.game !== "hangman"
        ) {
            return;
        }
        let index = monNames.indexOf(message.toLowerCase());
        if (index > -1) {
            if (message.toLowerCase() === gameData.name.toLowerCase()) {
                bot.addReaction({
                    channelID: channelID,
                    messageID: event.d.id,
                    reaction: "👍"
                });
                sendMessage(
                    "You got it, ending with " +
                        user +
                        "'s guess! The answer was **" +
                        gameData.name +
                        "**!\nWrong guesses: `" +
                        gameData.wrongs.toString() +
                        " `",
                    channelID
                );
                gameData = {
                    active: false
                };
            } else {
                gameData.guesses++;
                if (gameData.guesses < 10) {
                    gameData.wrongs.push(message.toLowerCase());
                    sendMessage(
                        "Sorry, " +
                            user +
                            ", that's wrong! That was strike #" +
                            gameData.guesses +
                            "! Your current progress is:\n`" +
                            gameData.hint +
                            "`\nWrong guesses: `" +
                            gameData.wrongs.toString() +
                            " `",
                        channelID
                    );
                } else {
                    sendMessage(
                        "Sorry, " +
                            user +
                            ", that's wrong, and it was your last strike! The game is over. The answer was **" +
                            gameData.name +
                            "**.`\nWrong guesses: `" +
                            gameData.wrongs.toString() +
                            " `",
                        channelID
                    );
                    gameData = {
                        active: false
                    };
                }
            }
        } else if (message.length === 1) {
            if (gameData.name.toLowerCase().indexOf(message.toLowerCase()) > -1) {
                for (let i = 0; i < gameData.name.length; i++) {
                    if (gameData.name.charAt(i).toLowerCase() === message.toLowerCase()) {
                        gameData.hint = gameData.hint.replaceAt(i, gameData.name.charAt(i));
                    }
                }
                if (gameData.name === gameData.hint) {
                    bot.addReaction({
                        channelID: channelID,
                        messageID: event.d.id,
                        reaction: "👍"
                    });
                    sendMessage(
                        "You got it, ending with " +
                            user +
                            "'s guess! The answer was **" +
                            gameData.name +
                            "**!\nWrong guesses: `" +
                            gameData.wrongs.toString() +
                            " `",
                        channelID
                    );
                    gameData = {
                        active: false
                    };
                } else {
                    sendMessage(
                        "That's correct, " +
                            user +
                            "! Your current progress is:\n`" +
                            gameData.hint +
                            "`\nWrong guesses: `" +
                            gameData.wrongs.toString() +
                            " `",
                        channelID
                    );
                }
            } else {
                gameData.guesses++;
                if (gameData.guesses < 10) {
                    gameData.wrongs.push(message.toLowerCase());
                    sendMessage(
                        "Sorry, " +
                            user +
                            ", that's wrong! That was strike #" +
                            gameData.guesses +
                            "! Your current progress is:\n`" +
                            gameData.hint +
                            "`\nWrong guesses: `" +
                            gameData.wrongs.toString() +
                            " `",
                        channelID
                    );
                } else {
                    sendMessage(
                        "Sorry, " +
                            user +
                            ", that's wrong, and it was your last strike! The game is over. The answer was **" +
                            gameData.name +
                            "**.\nWrong guesses: `" +
                            gameData.wrongs.toString() +
                            " `",
                        channelID
                    );
                    gameData = {
                        active: false
                    };
                }
            }
        }
    } catch (e) {
        console.log(e);
    }
}

function getIncInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function c(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function replaceAt(string: string, index: number, character: string) {
    return string.substr(0, index) + character + string.substr(index + character.length);
}
