"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("mz/fs"));
const eris_1 = __importDefault(require("eris"));
const request_promise_native_1 = __importDefault(require("request-promise-native"));
const fuse_js_1 = __importDefault(require("fuse.js"));
let config = JSON.parse(fs_1.default.readFileSync("config/config.json", "utf8")); //open config file from local directory. Expected contents are as follows
/*
{
    "token": "", //Discord bot token for login
    "prefix": "!", //the prefix for a user to type to indicate that what they're typing is a command
    "pokemonData": "data/pokemon.json", //the location of a JSON file relative to the local directory. Details on the format of this file can be found in the readme.
    "abilityData": "data/ability.json",
    "moveData": "data/move.json",
    "itemData": "data/item.json",
    "redirects": {
        "serverID": "msg" //a msg.content.toLowerCase() Colress would send in serverID is redirected to msg instead of where the command was posted
    },
    "imageUrl": "https://...", //online source from which Colress will retrieve images of pokemon. Colress will append the pokemon's pokedex number, with a customisable suffix for alternate formes, then .png
    "shinyUrl": "https://..." //online source from which Colress will retrieve images of pokemon's shiny colourations. Colress will append the pokemon's pokedex number, with a customisable suffix for alternate formes, then .png
}
*/
let pre = config.prefix;
//discord setup
let bot = new eris_1.default.Client(config.token);
bot.on("ready", () => {
    console.log("Logged in as %s - %s\n", bot.user.username, bot.user.id);
});
bot.on("disconnect", () => {
    console.log("Disconnected. Reconnecting...");
    bot.connect();
});
const mons = JSON.parse(fs_1.default.readFileSync(config.pokemonData, "utf8"));
let moves = JSON.parse(fs_1.default.readFileSync(config.moveData, "utf8"));
let items = JSON.parse(fs_1.default.readFileSync(config.itemData, "utf8"));
let abilities = JSON.parse(fs_1.default.readFileSync(config.abilityData, "utf8"));
let monNamesFuse = [];
for (let mon of mons) {
    monNamesFuse.push({
        name: mon.name,
        dex: mon.dex
    });
}
let movNamesFuse = [];
for (let move of moves) {
    movNamesFuse.push({
        name: move.name
    });
}
let itNamesFuse = [];
for (let item of items) {
    itNamesFuse.push({
        name: item.name
    });
}
let abNamesFuse = [];
for (let ability of abilities) {
    abNamesFuse.push({
        name: ability.name
    });
}
//stupid hack for stupid fuse
const name = "name";
//fuse setup
let options = {
    shouldSort: true,
    includeScore: true,
    tokenize: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [name]
};
let monFuse = new fuse_js_1.default(monNamesFuse, options);
let movFuse = new fuse_js_1.default(movNamesFuse, options);
let itFuse = new fuse_js_1.default(itNamesFuse, options);
let abFuse = new fuse_js_1.default(abNamesFuse, options);
let gameData = {
    active: false
};
let gameTO1;
let gameTO2;
bot.on("msg.content.toLowerCase()Create", (msg) => {
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
async function sendMessage(out, msg, file) {
    const chan = msg.channel;
    if (chan instanceof eris_1.default.GuildChannel) {
        const server = chan.guild;
        if (server.id in config.redirects) {
            await bot.createMessage(config.redirects[server.id], out, file);
            return;
        }
    }
    await chan.createMessage(out, file);
}
async function sendSingleMessage(msgType, msg) {
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
function getMon(name) {
    let mon = mons.find(m => m.name.toLowerCase() === name);
    if (mon) {
        return mon;
    }
    let result = monFuse.search(name);
    return mons.find(m => m.name === result[0].name);
}
async function pokemon(msg) {
    let query = msg.content.toLowerCase().slice((pre + "pokemon ").length);
    let mon = getMon(query);
    if (!mon) {
        await sendMessage("Sorry, I can't find a Pokémon with that name!", msg);
        return;
    }
    await postImage(mon, false, msg);
    await sendMessage(getMonInfo(mon), msg);
}
function getMonInfo(mon) {
    let out = "__**" + mon.name + "**__\n";
    out += "**Pokédex**: " + mon.dex;
    if (mon.alola) {
        out += " (" + mon.alola + ")";
    }
    out += "\n**Type**: " + mon.type1;
    if (mon.type2) {
        out += "/" + mon.type2;
    }
    out += "\n**Ability**: " + mon.ability1;
    if (mon.ability2) {
        out += "/" + mon.ability2;
    }
    if (mon.abilityHidden !== mon.ability1) {
        out += " **Hidden**: " + mon.abilityHidden;
    }
    out += "\n**Serebii Link**: http://www.serebii.net/pokedex-sm/" + mon.dex.toString().padStart(3, "0") + ".shtml";
    return out;
}
async function postImage(mon, shiny, msg) {
    let imageUrl = "";
    if (shiny) {
        imageUrl = config.shinyUrl;
    }
    else {
        imageUrl = config.imageUrl;
    }
    let suffix = mon.dex.toString().padStart(3, "0");
    if (mon.imageSuffix) {
        suffix += "-" + mon.imageSuffix + ".png";
    }
    else {
        suffix += ".png";
    }
    const image = await request_promise_native_1.default(imageUrl + suffix, { encoding: null });
    await sendMessage("", msg, { file: image, name: suffix });
}
async function pokedex(msg) {
    let query = parseInt(msg.content.toLowerCase().slice((pre + "pokedex ").length));
    if (query === NaN || query < 1) {
        await sendMessage("Sorry, that doesn't look like a Pokédex number!", msg);
        return;
    }
    let mon = mons.find(m => m.dex === query);
    if (mon) {
        await postImage(mon, false, msg);
        await sendMessage(getMonInfo(mon), msg);
    }
    else {
        await sendMessage("Sorry, I can't find a Pokémon with that number!", msg);
    }
}
async function aloladex(msg) {
    let query = parseInt(msg.content.toLowerCase().slice((pre + "aloladex ").length));
    if (query === NaN || query < 1) {
        await sendMessage("Sorry, that doesn't look like a Pokédex number!", msg);
        return;
    }
    let mon = mons.find(m => m.alola === query);
    if (mon) {
        await postImage(mon, false, msg);
        await sendMessage(getMonInfo(mon), msg);
    }
    else {
        await sendMessage("Sorry, I can't find a Pokémon with that number!", msg);
    }
}
function getMove(name) {
    let move = moves.find(m => m.name.toLowerCase() === name);
    if (move) {
        return move;
    }
    let result = movFuse.search(name);
    return moves.find(m => m.name === result[0].name);
}
async function move(msg) {
    let query = msg.content.toLowerCase().slice((pre + "move ").length);
    let move = getMove(query);
    if (!move) {
        await sendMessage("Sorry, I can't find a move with that name!", msg);
        return;
    }
    await sendMessage(getMoveInfo(move), msg);
}
function getMoveInfo(move) {
    let out = "__**" + move.name + "**__\n";
    out += "**Type**: " + move.type;
    out += " **Category**: " + move.cat + "\n";
    if (move.power) {
        out += "**Power**: " + move.power + " ";
    }
    if (move.pp) {
        out += "**PP**: " + move.pp + " ";
    }
    if (move.acc) {
        out += "**Accuracy**: " + move.acc;
    }
    out += "\n**Effect**: " + move.effect;
    if (move.zeffect) {
        out += "\n**Z-Move Effect**: " + move.zeffect;
    }
    if (move.tm) {
        out += "\n**TM**: " + move.tm.join(", ");
    }
    if (move.wiki) {
        out += "\n**Serebii Link**: http://www.serebii.net/attackdex-sm/" + move.wiki + ".shtml";
    }
    else {
        out +=
            "\n**Serebii Link**: http://www.serebii.net/attackdex-sm/" +
                move.name.toLowerCase().replace(/ /g, "") +
                ".shtml";
    }
    return out;
}
function getItem(name) {
    let item = items.find(i => i.name.toLowerCase() === name);
    if (item) {
        return item;
    }
    let result = itFuse.search(name);
    return items.find(i => i.name === result[0].name);
}
async function item(msg) {
    let query = msg.content.toLowerCase().slice((pre + "move ").length);
    let item = getItem(query);
    if (!item) {
        await sendMessage("Sorry, I can't find an item with that name!", msg);
        return;
    }
    await sendMessage(getItemInfo(item), msg);
}
function getItemInfo(item) {
    let out = "__**" + item.name + "**__\n";
    out += "**Description**: " + item.desc;
    if (item.wiki) {
        out += "\n**Serebii Link**: http://www.serebii.net/itemdex/" + item.wiki + ".shtml";
    }
    else {
        out +=
            "\n**Serebii Link**: http://www.serebii.net/itemdex/" +
                item.name.toLowerCase().replace(/ /g, "") +
                ".shtml";
    }
    return out;
}
function getAbility(name) {
    let ability = abilities.find(a => a.name.toLowerCase() === name);
    if (ability) {
        return ability;
    }
    let result = abFuse.search(name);
    return abilities.find(a => a.name === result[0].name);
}
async function ability(msg) {
    let query = msg.content.toLowerCase().slice((pre + "ability ").length);
    let ability = getAbility(query);
    if (!ability) {
        await sendMessage("Sorry, I can't find an ability with that name!", msg);
        return;
    }
    await sendMessage(getAbilityInfo(ability), msg);
}
function getAbilityInfo(ability) {
    let out = "__**" + ability.name + "**__\n";
    out += "**Description**: " + ability.desc;
    if (ability.wiki) {
        out += "\n**Serebii Link**: http://www.serebii.net/abilitydex/" + ability.wiki + ".shtml";
    }
    else {
        out +=
            "\n**Serebii Link**: http://www.serebii.net/abilitydex/" +
                ability.name.toLowerCase().replace(/ /g, "") +
                ".shtml";
    }
    return out;
}
async function shiny(msg) {
    let query = msg.content.toLowerCase().slice((pre + "shiny ").length);
    const mon = getMon(query);
    if (!mon) {
        await sendMessage("Sorry, I can't find a Pokémon with that name!", msg);
        return;
    }
    await postImage(mon, true, msg);
}
async function weak(msg) {
    let query = msg.content.toLowerCase().slice((pre + "weak ").length);
    const mon = getMon(query);
    if (!mon) {
        "Sorry, I can't find a Pokémon with that number!";
        return;
    }
    const types = getMonTypes(mon);
    await sendMessage("**Name**: " + mon.name + "\n" + getWeakInfo(types), msg);
}
async function weakTypes(msg) {
    let args = msg.content
        .toLowerCase()
        .toLowerCase()
        .split(" ");
    let types = [];
    for (let arg of args) {
        arg = c(arg);
        if ([
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
        ].indexOf(arg) > -1) {
            types.push(arg);
        }
    }
    let out = "";
    if (types.length > 0) {
        out = getWeakInfo(types);
    }
    else {
        out = "Sorry, none of those words look like types to me!";
    }
    await sendMessage(out, msg);
}
function getMonTypes(mon) {
    let types = [mon.type1];
    if (mon.type2) {
        types.push(mon.type2);
    }
    return types;
}
function getWeakInfo(types) {
    if (types.length < 1) {
        return "Invalid types!";
    }
    let typeInfo = {
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
    let weaks = [];
    let resists = [];
    let immunes = [];
    Object.keys(typeInfo).forEach(function (key, index) {
        if (typeInfo[key].value > 1) {
            weaks.push("__" + key + "__");
        }
        else if (typeInfo[key].value === 1) {
            weaks.push(key);
        }
        else if (typeInfo[key].value === -1) {
            resists.push(key);
        }
        else if (typeInfo[key].value === -2) {
            resists.push("__" + key + "__");
        }
        else if (typeInfo[key].value < -2) {
            immunes.push(key);
        }
    });
    let out = "**Types**: " + types.join(", ") + "\n";
    if (weaks.length > 0) {
        out += "**Weaknesses**: " + weaks.join(", ") + "\n";
    }
    if (resists.length > 0) {
        out += "**Resistances**: " + resists.join(", ") + "\n";
    }
    if (immunes.length > 0) {
        out += "**Immunities**: " + immunes.join(", ");
    }
    return out;
}
async function game(msg) {
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
async function gameHiLo(msg) {
    const chan = msg.channel;
    if (!(chan instanceof eris_1.default.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
    if (gameData.active) {
        return;
    }
    else {
        //pick a random pokemon
        let index = getIncInt(0, mons.length - 1);
        const mon = mons[index];
        //start game
        gameData = {
            active: true,
            game: "highlow",
            server: serverID,
            channel: msg,
            name: mon.name,
            dex: mon.dex,
            guesses: 0
        };
        await sendMessage("You have 10 tries to guess the National Pokédex number of the following Pokémon: **" + name + "**!", msg);
    }
}
async function answerHiLo(msg) {
    const chan = msg.channel;
    if (!(chan instanceof eris_1.default.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
    if (gameData.active === false ||
        serverID !== gameData.server ||
        msg !== gameData.channel ||
        gameData.game !== "highlow") {
        return;
    }
    if (parseInt(msg.content.toLowerCase()) === gameData.dex) {
        gameData.guesses++;
        await msg.addReaction("👍");
        await sendMessage("<@" +
            msg.author.id +
            "> got it in " +
            gameData.guesses +
            " guess(es)! The National Pokédex number of " +
            gameData.name +
            " is **" +
            gameData.dex +
            "**!", msg);
        gameData = {
            active: false
        };
    }
    else {
        let out = "";
        let mon = mons.find(m => m.dex === parseInt(msg.content.toLowerCase()));
        if (!mon) {
            return;
        }
        gameData.guesses++;
        if (mon.dex < gameData.dex) {
            out = "That Pokémon is " + mon.name + ", which is too early in the Pokédex!\n";
        }
        else {
            //if (monDexes[index] > gameData.dex)
            out = "That Pokémon is " + mon.name + ", which is too late in the Pokédex!\n";
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
        }
        else {
            out += "You have " + (10 - gameData.guesses) + " guess(es) left!";
        }
        await sendMessage(out, msg);
    }
}
async function gameHiLo2(msg) {
    const chan = msg.channel;
    if (!(chan instanceof eris_1.default.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
    if (gameData.active) {
        return;
    }
    else {
        //pick a random pokemon
        let mon = mons[getIncInt(0, mons.length - 1)];
        let name = mon.name
            .replace("é", "e")
            .replace("♂", "M")
            .replace("♀", "F");
        let dex = mon.dex;
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
        await sendMessage("You have 10 tries to name the Pokémon with the following National Pokédex number: **" + dex + "**!", msg);
    }
}
async function answerHiLo2(msg) {
    const chan = msg.channel;
    if (!(chan instanceof eris_1.default.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
    if (gameData.active === false ||
        serverID !== gameData.server ||
        msg !== gameData.channel ||
        gameData.game !== "highlow2") {
        return;
    }
    let mon = mons.find(m => m.name === msg.content.toLowerCase());
    if (!mon) {
        return;
    }
    if (mon.dex === gameData.dex) {
        gameData.guesses++;
        await msg.addReaction("👍");
        await sendMessage("<@" +
            msg.author.id +
            "> got it in " +
            gameData.guesses +
            " guess(es)! The answer I had in mind was **" +
            gameData.name +
            "**, but if it has alternate formes, they were valid too!", msg);
        gameData = {
            active: false
        };
    }
    else {
        let out = "";
        gameData.guesses++;
        if (mon.dex < gameData.dex) {
            out = "That Pokémon is number " + mon.dex + ", which is too early in the Pokédex!\n";
        }
        else {
            //if (guessDex > gameData.dex)
            out = "That Pokémon is number " + mon.dex + ", which is too late in the Pokédex!\n";
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
        }
        else {
            out += "You have " + (10 - gameData.guesses) + " guess(es) left!";
        }
        await sendMessage(out, msg);
    }
}
async function gameWhosThat(msg) {
    const chan = msg.channel;
    if (!(chan instanceof eris_1.default.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
    if (gameData.active) {
        return;
    }
    else {
        //pick a random pokemon
        let mon = mons[getIncInt(0, mons.length - 1)];
        let name = mon.name
            .replace("é", "e")
            .replace("♂", "M")
            .replace("♀", "F");
        let dex = mon.dex;
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
        await postImage(mon, false, msg);
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
async function answerWhosThat(msg) {
    const chan = msg.channel;
    if (!(chan instanceof eris_1.default.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
    if (gameData.active === false ||
        serverID !== gameData.server ||
        msg !== gameData.channel ||
        gameData.game !== "whosthat") {
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
async function gameHangman(msg) {
    const chan = msg.channel;
    if (!(chan instanceof eris_1.default.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
    if (gameData.active) {
        return;
    }
    else {
        //pick a random pokemon
        let mon = mons[getIncInt(0, mons.length - 1)];
        let name = mon.name
            .replace("é", "e")
            .replace("♂", "M")
            .replace("♀", "F");
        let dex = mon.dex;
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
        await sendMessage("Guess the letters in this Pokémon's name! You can make 10 mistakes before the game is over.\n`" +
            hint +
            "`", msg);
    }
}
async function answerHangman(msg) {
    const chan = msg.channel;
    if (!(chan instanceof eris_1.default.GuildChannel)) {
        return;
    }
    const serverID = chan.guild.id;
    if (gameData.active === false ||
        serverID !== gameData.server ||
        msg !== gameData.channel ||
        gameData.game !== "hangman") {
        return;
    }
    let mon = mons.find(m => m.name === msg.content.toLowerCase());
    if (mon) {
        if (msg.content.toLowerCase() === gameData.name.toLowerCase()) {
            await msg.addReaction("👍");
            await sendMessage("You got it, ending with " +
                msg.author.id +
                "'s guess! The answer was **" +
                gameData.name +
                "**!\nWrong guesses: `" +
                gameData.wrongs.join(", ") +
                " `", msg);
            gameData = {
                active: false
            };
        }
        else {
            gameData.guesses++;
            if (gameData.guesses < 10) {
                gameData.wrongs.push(msg.content.toLowerCase().toLowerCase());
                await sendMessage("Sorry, " +
                    msg.author.id +
                    ", that's wrong! That was strike #" +
                    gameData.guesses +
                    "! Your current progress is:\n`" +
                    gameData.hint +
                    "`\nWrong guesses: `" +
                    gameData.wrongs.join(", ") +
                    " `", msg);
            }
            else {
                await sendMessage("Sorry, " +
                    msg.author.id +
                    ", that's wrong, and it was your last strike! The game is over. The answer was **" +
                    gameData.name +
                    "**.`\nWrong guesses: `" +
                    gameData.wrongs.join(", ") +
                    " `", msg);
                gameData = {
                    active: false
                };
            }
        }
    }
    else if (msg.content.toLowerCase().length === 1) {
        if (gameData.name.toLowerCase().indexOf(msg.content.toLowerCase().toLowerCase()) > -1) {
            for (let i = 0; i < gameData.name.length; i++) {
                if (gameData.name.charAt(i).toLowerCase() === msg.content.toLowerCase().toLowerCase()) {
                    gameData.hint = gameData.hint.replaceAt(i, gameData.name.charAt(i));
                }
            }
            if (gameData.name === gameData.hint) {
                await msg.addReaction("👍");
                await sendMessage("You got it, ending with " +
                    msg.author.id +
                    "'s guess! The answer was **" +
                    gameData.name +
                    "**!\nWrong guesses: `" +
                    gameData.wrongs.join(", ") +
                    " `", msg);
                gameData = {
                    active: false
                };
            }
            else {
                await sendMessage("That's correct, " +
                    msg.author.id +
                    "! Your current progress is:\n`" +
                    gameData.hint +
                    "`\nWrong guesses: `" +
                    gameData.wrongs.join(", ") +
                    " `", msg);
            }
        }
        else {
            gameData.guesses++;
            if (gameData.guesses < 10) {
                gameData.wrongs.push(msg.content.toLowerCase().toLowerCase());
                await sendMessage("Sorry, " +
                    msg.author.id +
                    ", that's wrong! That was strike #" +
                    gameData.guesses +
                    "! Your current progress is:\n`" +
                    gameData.hint +
                    "`\nWrong guesses: `" +
                    gameData.wrongs.join(", ") +
                    " `", msg);
            }
            else {
                await sendMessage("Sorry, " +
                    msg.author.id +
                    ", that's wrong, and it was your last strike! The game is over. The answer was **" +
                    gameData.name +
                    "**.\nWrong guesses: `" +
                    gameData.wrongs.join(", ") +
                    " `", msg);
                gameData = {
                    active: false
                };
            }
        }
    }
}
function getIncInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
function c(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function replaceAt(string, index, character) {
    return string.substr(0, index) + character + string.substr(index + character.length);
}
//# sourceMappingURL=colress.js.map