import fs from "fs";
import Eris from "eris";
import SQL from "sql.js";
import request from "request-promise-native";

let config = JSON.parse(fs.readFileSync("config/config.json", "utf8")); //open config file from local directory. Expected contents are as follows
/*
{
	"token": "", //Discord bot token for login
	"prefix": "!", //the prefix for a user to type to indicate that what they're typing is a command
	"data": "data/colressData.db", //the location of a SQLite database relative to the local directory. Details on the format of this database can be found in the readme.
	"redirects": {
		"serverID": "msg" //a msg.content.toLowerCase() Colress would send in serverID is redirected to msg instead of where the command was posted
	},
	"imageUrl": "https://...", //online source from which Colress will retrieve images of pokemon. Colress will append the pokemon's pokedex number, with a customisable suffix for alternate formes, then .png
	"shinyUrl": "https://..." //online source from which Colress will retrieve images of pokemon's shiny colourations. Colress will append the pokemon's pokedex number, with a customisable suffix for alternate formes, then .png
}
*/
let pre = config.prefix;

//discord setup
let bot = new Eris.Client(config.token);

bot.on("ready", () => {
    console.log("Logged in as %s - %s\n", bot.user.username, bot.user.id);
});

bot.on("disconnect", () => {
    console.log("Disconnected. Reconnecting...");
    bot.connect();
});

//sql setup
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
    monNames.push((mon[1] as string).toLowerCase());
    monDexes.push(mon[2] as number);
    if (mon[3]) {
        monAlola.push(mon[3] as number);
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
    movNames.push((move[1] as string).toLowerCase());
    movNamesFuse.push({
        name: move[1]
    });
}
let itNames: string[] = [];
let itNamesFuse = [];
for (let item of items[0].values) {
    itNames.push((item[1] as string).toLowerCase());
    itNamesFuse.push({
        name: item[1]
    });
}
let abNames: string[] = [];
let abNamesFuse = [];
for (let ability of abilities[0].values) {
    abNames.push((ability[1] as string).toLowerCase());
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

let gameData: any = {
    active: false
};
let gameTO1: NodeJS.Timer;
let gameTO2: NodeJS.Timer;

bot.on("msg.content.toLowerCase()Create", (msg: Eris.Message) => {
    if (msg.author.id === bot.user.id) {
        return;
    }
    let lowMessage = msg.content.toLowerCase();
    if (msg.mentions.includes(bot.user) || lowMessage.indexOf(pre + "help") === 0) {
        sendSingleMessage("help", msg);
    }
    if (lowMessage.indexOf(pre + "pokemon ") === 0) {
        pokemon(msg);
    }
    if (lowMessage.indexOf(pre + "pokedex ") === 0) {
        pokedex(msg);
    }
    if (lowMessage.indexOf(pre + "aloladex ") === 0) {
        aloladex(msg);
    }
    if (lowMessage.indexOf(pre + "move ") === 0) {
        move(msg);
    }
    if (lowMessage.indexOf(pre + "item ") === 0) {
        item(msg);
    }
    if (lowMessage.indexOf(pre + "ability ") === 0) {
        ability(msg);
    }
    if (lowMessage.indexOf(pre + "shiny ") === 0) {
        shiny(msg);
    }
    if (lowMessage.indexOf(pre + "weak ") === 0) {
        weak(msg);
    }
    if (lowMessage.indexOf(pre + "weaktypes ") === 0) {
        weakTypes(msg);
    }
    if (lowMessage.indexOf(pre + "game ") === 0) {
        game(msg);
    }
    if (lowMessage.indexOf(pre + "typechart") === 0) {
        sendSingleMessage("types", msg);
    }
    if (lowMessage.indexOf(pre + "evolution") === 0) {
        sendSingleMessage("evos", msg);
    }
    if (lowMessage.indexOf(pre + "qr") === 0) {
        sendSingleMessage("qr", msg);
    }
    if (lowMessage.indexOf(pre + "nature") === 0) {
        sendSingleMessage("nature", msg);
    }
    if (gameData.active) {
        switch (gameData.game) {
            case "highlow":
                answerHiLo(msg);
                break;
            case "highlow2":
                answerHiLo2(msg);
                break;
            case "whosthat":
                answerWhosThat(msg);
                break;
            case "hangman":
                answerHangman(msg);
                break;
            default:
                break;
        }
    }
});

async function sendMessage(out: Eris.MessageContent, msg: Eris.Message, file?: Eris.MessageFile) {
    const chan = msg.channel;
    if (chan instanceof Eris.GuildChannel) {
        const server = chan.guild;
        if (server.id in config.redirects) {
            await bot.createMessage(config.redirects[server.id], out, file);
            return;
        }
    }
    await chan.createMessage(out, file);
}

async function sendSingleMessage(msgType: string, msg: Eris.Message) {
    let out = "";
    switch (msgType) {
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
        await sendMessage(out, msg);
    }
}

async function pokemon(msg: Eris.Message) {
    let query = msg.content.toLowerCase().slice((pre + "pokemon ").length);
    let index = monNames.indexOf(query.toLowerCase());
    let out = "";
    if (index > -1) {
        out = getMonInfo(index);
    } else {
        let result = monFuse.search(query);
        if (result.length < 1) {
            out = "Sorry, I can't find a Pokémon with that name!";
            await sendMessage(out, msg);
            return;
        } else {
            index = monNames.indexOf(result[0].item.name.toLowerCase());
            if (index > -1) {
                out = getMonInfo(index);
            } else {
                out = "Sorry, I can't find a Pokémon with that name!";
                console.log("Fuse error");
                await sendMessage(out, msg);
                return;
            }
        }
    }
    await postImage(index, false, msg);
    await sendMessage(out, msg);
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

async function postImage(index: number, shiny: boolean, msg: Eris.Message) {
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
    const image = await request(imageUrl + suffix, { encoding: null });
    await sendMessage("", msg, { file: image, name: suffix });
}

async function pokedex(msg: Eris.Message) {
    let query = parseInt(msg.content.toLowerCase().slice((pre + "pokedex ").length));
    if (query === NaN || query < 1) {
        await sendMessage("Sorry, that doesn't look like a Pokédex number!", msg);
        return;
    }
    let index = monDexes.indexOf(query);
    if (index > -1) {
        await postImage(index, false, msg);
        await sendMessage(getMonInfo(index), msg);
    } else {
        await sendMessage("Sorry, I can't find a Pokémon with that number!", msg);
        return;
    }
}

async function aloladex(msg: Eris.Message) {
    let query = parseInt(msg.content.toLowerCase().slice((pre + "aloladex ").length));
    if (query === NaN || query < 1) {
        await sendMessage("Sorry, that doesn't look like a Pokédex number!", msg);
        return;
    }
    let index = monAlola.indexOf(query);
    if (index > -1) {
        await postImage(index, false, msg);
        await sendMessage(getMonInfo(index), msg);
    } else {
        await sendMessage("Sorry, I can't find a Pokémon with that number!", msg);
        return;
    }
}

async function move(msg: Eris.Message) {
    let query = msg.content.toLowerCase().slice((pre + "move ").length);
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
    await sendMessage(out, msg);
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
            (move[1] as string).toLowerCase().replace(/ /g, "") +
            ".shtml";
    }
    return out;
}

async function item(msg: Eris.Message) {
    let query = msg.content.toLowerCase().slice((pre + "move ").length);
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
    await sendMessage(out, msg);
}

function getItemInfo(index: number) {
    let item = items[0].values[index];
    let out = "__**" + item[1] + "**__\n";
    out += "**Description**: " + item[2];
    if (item[3]) {
        out += "\n**Serebii Link**: http://www.serebii.net/itemdex/" + item[3] + ".shtml";
    } else {
        out +=
            "\n**Serebii Link**: http://www.serebii.net/itemdex/" +
            (item[1] as string).toLowerCase().replace(/ /g, "") +
            ".shtml";
    }
    return out;
}

async function ability(msg: Eris.Message) {
    let query = msg.content.toLowerCase().slice((pre + "ability ").length);
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
    await sendMessage(out, msg);
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
            (ability[1] as string).toLowerCase().replace(/ /g, "") +
            ".shtml";
    }
    return out;
}

async function shiny(msg: Eris.Message) {
    let query = msg.content.toLowerCase().slice((pre + "shiny ").length);
    let index = monNames.indexOf(query.toLowerCase());
    if (index < 0) {
        let result = monFuse.search(query);
        if (result.length < 1) {
            const out = "Sorry, I can't find a Pokémon with that name!";
            await sendMessage(out, msg);
            return;
        } else {
            index = monNames.indexOf(result[0].item.name.toLowerCase());
            if (index < 0) {
                const out = "Sorry, I can't find a Pokémon with that name!";
                console.log("Fuse error");
                await sendMessage(out, msg);
                return;
            }
        }
    }
    await postImage(index, true, msg);
}

async function weak(msg: Eris.Message) {
    let query = msg.content.toLowerCase().slice((pre + "weak ").length);
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
            await sendMessage(out, msg);
            return;
        } else {
            index = monNames.indexOf(result[0].item.name.toLowerCase());
            if (index > -1) {
                types = getMonTypes(index);
                out = "**Name**: " + mons[0].values[index][1] + "\n" + getWeakInfo(types);
            } else {
                out = "Sorry, I can't find a Pokémon with that name!";
                console.log("Fuse error");
                await sendMessage(out, msg);
                return;
            }
        }
    }
    await sendMessage(out, msg);
}

async function weakTypes(msg: Eris.Message) {
    let args = msg.content
        .toLowerCase()
        .toLowerCase()
        .split(" ");
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
    await sendMessage(out, msg);
}

function getMonTypes(index: number): string[] {
    let mon = mons[0].values[index];
    let types: string[] = [mon[4] as string];
    if (mon[5]) {
        types.push(mon[5] as string);
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

async function game(msg: Eris.Message) {
    let input = msg.content
        .toLowerCase()
        .toLowerCase()
        .split(" ")[1];
    switch (input) {
        case "highlow":
            gameHiLo(msg);
            break;
        case "highlow2":
            gameHiLo2(msg);
            break;
        case "hangman":
            gameHangman(msg);
            break;
        case "whosthat":
            gameWhosThat(msg);
            break;
        default:
            await sendMessage('That\'s not a game I know! Try "highlow", "highlow2", "whosthat", or "hangman"!', msg);
    }
}

async function gameHiLo(msg: Eris.Message) {
    const chan = msg.channel;
    if (!(chan instanceof Eris.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
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
            channel: msg,
            name: name,
            dex: dex,
            guesses: 0
        };
        await sendMessage(
            "You have 10 tries to guess the National Pokédex number of the following Pokémon: **" + name + "**!",
            msg
        );
    }
}

async function answerHiLo(msg: Eris.Message) {
    const chan = msg.channel;
    if (!(chan instanceof Eris.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
    if (
        gameData.active === false ||
        serverID !== gameData.server ||
        msg !== gameData.channel ||
        gameData.game !== "highlow"
    ) {
        return;
    }
    if (parseInt(msg.content.toLowerCase()) === gameData.dex) {
        gameData.guesses++;
        await msg.addReaction("👍");
        await sendMessage(
            "<@" +
                msg.author.id +
                "> got it in " +
                gameData.guesses +
                " guess(es)! The National Pokédex number of " +
                gameData.name +
                " is **" +
                gameData.dex +
                "**!",
            msg
        );
        gameData = {
            active: false
        };
    } else {
        let out = "";
        let index = monDexes.indexOf(parseInt(msg.content.toLowerCase()));
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
        await sendMessage(out, msg);
    }
}

async function gameHiLo2(msg: Eris.Message) {
    const chan = msg.channel;
    if (!(chan instanceof Eris.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
    if (gameData.active) {
        return;
    } else {
        //pick a random pokemon
        let index = getIncInt(0, monNames.length - 1);
        let name = (mons[0].values[index][1] as string)
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
            channel: msg,
            name: name,
            dex: dex,
            hint: hint,
            guesses: 0
        };
        await sendMessage(
            "You have 10 tries to name the Pokémon with the following National Pokédex number: **" + dex + "**!",
            msg
        );
    }
}

async function answerHiLo2(msg: Eris.Message) {
    const chan = msg.channel;
    if (!(chan instanceof Eris.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
    if (
        gameData.active === false ||
        serverID !== gameData.server ||
        msg !== gameData.channel ||
        gameData.game !== "highlow2"
    ) {
        return;
    }
    let index = monNames.indexOf(msg.content.toLowerCase().toLowerCase());
    if (index === -1) {
        return;
    }
    let guessDex = monDexes[index];
    if (guessDex === gameData.dex) {
        gameData.guesses++;
        await msg.addReaction("👍");
        await sendMessage(
            "<@" +
                msg.author.id +
                "> got it in " +
                gameData.guesses +
                " guess(es)! The answer I had in mind was **" +
                gameData.name +
                "**, but if it has alternate formes, they were valid too!",
            msg
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
        await sendMessage(out, msg);
    }
}

async function gameWhosThat(msg: Eris.Message) {
    const chan = msg.channel;
    if (!(chan instanceof Eris.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
    if (gameData.active) {
        return;
    } else {
        //pick a random pokemon
        let index = getIncInt(0, monNames.length - 1);
        let name = (mons[0].values[index][1] as string)
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
            channel: msg,
            name: name,
            hint: hint,
            guesses: 0
        };
        await postImage(index, false, msg);
        await sendMessage("You have 10 seconds to name this Pokémon!", msg);
        gameTO1 = setTimeout(async () => {
            await sendMessage("Have a hint: `" + gameData.hint + "`", msg);
        }, 5000);
        gameTO2 = setTimeout(async () => {
            await sendMessage("Time's up! The Pokémon was **" + gameData.name + "**! Try again next time!", msg);
            gameData = {
                active: false
            };
        }, 10000);
    }
}

async function answerWhosThat(msg: Eris.Message) {
    const chan = msg.channel;
    if (!(chan instanceof Eris.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
    if (
        gameData.active === false ||
        serverID !== gameData.server ||
        msg !== gameData.channel ||
        gameData.game !== "whosthat"
    ) {
        return;
    }
    if (msg.content.toLowerCase().toLowerCase() === gameData.name.toLowerCase()) {
        clearTimeout(gameTO1);
        clearTimeout(gameTO2);
        await msg.addReaction("👍");
        await sendMessage("<@" + msg.author.id + "> got it! The answer was **" + gameData.name + "**!", msg);
        gameData = {
            active: false
        };
    }
}

async function gameHangman(msg: Eris.Message) {
    const chan = msg.channel;
    if (!(chan instanceof Eris.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
    if (gameData.active) {
        return;
    } else {
        //pick a random pokemon
        let index = getIncInt(0, monNames.length - 1);
        let name = (mons[0].values[index][1] as string)
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
            channel: msg,
            name: name,
            dex: dex,
            hint: hint,
            guesses: 0,
            wrongs: []
        };
        await sendMessage(
            "Guess the letters in this Pokémon's name! You can make 10 mistakes before the game is over.\n`" +
                hint +
                "`",
            msg
        );
    }
}

async function answerHangman(msg: Eris.Message) {
    const chan = msg.channel;
    if (!(chan instanceof Eris.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
    if (
        gameData.active === false ||
        serverID !== gameData.server ||
        msg !== gameData.channel ||
        gameData.game !== "hangman"
    ) {
        return;
    }
    let index = monNames.indexOf(msg.content.toLowerCase().toLowerCase());
    if (index > -1) {
        if (msg.content.toLowerCase().toLowerCase() === gameData.name.toLowerCase()) {
            await msg.addReaction("👍");

            await sendMessage(
                "You got it, ending with " +
                    msg.author.id +
                    "'s guess! The answer was **" +
                    gameData.name +
                    "**!\nWrong guesses: `" +
                    gameData.wrongs.toString() +
                    " `",
                msg
            );
            gameData = {
                active: false
            };
        } else {
            gameData.guesses++;
            if (gameData.guesses < 10) {
                gameData.wrongs.push(msg.content.toLowerCase().toLowerCase());
                await sendMessage(
                    "Sorry, " +
                        msg.author.id +
                        ", that's wrong! That was strike #" +
                        gameData.guesses +
                        "! Your current progress is:\n`" +
                        gameData.hint +
                        "`\nWrong guesses: `" +
                        gameData.wrongs.toString() +
                        " `",
                    msg
                );
            } else {
                await sendMessage(
                    "Sorry, " +
                        msg.author.id +
                        ", that's wrong, and it was your last strike! The game is over. The answer was **" +
                        gameData.name +
                        "**.`\nWrong guesses: `" +
                        gameData.wrongs.toString() +
                        " `",
                    msg
                );
                gameData = {
                    active: false
                };
            }
        }
    } else if (msg.content.toLowerCase().length === 1) {
        if (gameData.name.toLowerCase().indexOf(msg.content.toLowerCase().toLowerCase()) > -1) {
            for (let i = 0; i < gameData.name.length; i++) {
                if (gameData.name.charAt(i).toLowerCase() === msg.content.toLowerCase().toLowerCase()) {
                    gameData.hint = gameData.hint.replaceAt(i, gameData.name.charAt(i));
                }
            }
            if (gameData.name === gameData.hint) {
                await msg.addReaction("👍");
                await sendMessage(
                    "You got it, ending with " +
                        msg.author.id +
                        "'s guess! The answer was **" +
                        gameData.name +
                        "**!\nWrong guesses: `" +
                        gameData.wrongs.toString() +
                        " `",
                    msg
                );
                gameData = {
                    active: false
                };
            } else {
                await sendMessage(
                    "That's correct, " +
                        msg.author.id +
                        "! Your current progress is:\n`" +
                        gameData.hint +
                        "`\nWrong guesses: `" +
                        gameData.wrongs.toString() +
                        " `",
                    msg
                );
            }
        } else {
            gameData.guesses++;
            if (gameData.guesses < 10) {
                gameData.wrongs.push(msg.content.toLowerCase().toLowerCase());
                await sendMessage(
                    "Sorry, " +
                        msg.author.id +
                        ", that's wrong! That was strike #" +
                        gameData.guesses +
                        "! Your current progress is:\n`" +
                        gameData.hint +
                        "`\nWrong guesses: `" +
                        gameData.wrongs.toString() +
                        " `",
                    msg
                );
            } else {
                await sendMessage(
                    "Sorry, " +
                        msg.author.id +
                        ", that's wrong, and it was your last strike! The game is over. The answer was **" +
                        gameData.name +
                        "**.\nWrong guesses: `" +
                        gameData.wrongs.toString() +
                        " `",
                    msg
                );
                gameData = {
                    active: false
                };
            }
        }
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
