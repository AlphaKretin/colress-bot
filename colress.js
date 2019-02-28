"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eris_1 = __importDefault(require("eris"));
const fuse_js_1 = __importDefault(require("fuse.js"));
const fs_1 = __importDefault(require("mz/fs"));
const request_promise_native_1 = __importDefault(require("request-promise-native"));
// open config file from local directory. Expected contents are as follows
const config = JSON.parse(fs_1.default.readFileSync("config/config.json", "utf8"));
const auth = JSON.parse(fs_1.default.readFileSync("config/auth.json", "utf8"));
/*
{
    "prefix": "!", //the prefix for a user to type to indicate that what they're typing is a command
    //the location of a JSON file relative to the local directory.
    //Details on the format of this file can be found in the readme.
    "pokemonData": "data/pokemon.json",
    "abilityData": "data/ability.json",
    "moveData": "data/move.json",
    "itemData": "data/item.json",
    "redirects": {
        //a message Colress would send in serverID is redirected to msg instead of where the command was posted
        "serverID": "msg"
    },
    //online source from which Colress will retrieve images of pokemon.
    //Colress will append the pokemon's pokedex number, with a customisable suffix for alternate formes, then .png
    "imageUrl": "https://...",
    "shinyUrl": "https://..."
}
*/
const pre = config.prefix;
// discord setup
const bot = new eris_1.default.Client(auth.token);
bot.on("ready", () => {
    console.log("Logged in as %s - %s\n", bot.user.username, bot.user.id);
});
bot.on("disconnect", () => {
    console.log("Disconnected. Reconnecting...");
    bot.connect();
});
const mons = JSON.parse(fs_1.default.readFileSync(config.pokemonData, "utf8"));
const moves = JSON.parse(fs_1.default.readFileSync(config.moveData, "utf8"));
const items = JSON.parse(fs_1.default.readFileSync(config.itemData, "utf8"));
const abilities = JSON.parse(fs_1.default.readFileSync(config.abilityData, "utf8"));
const monNamesFuse = [];
for (const mon of mons) {
    monNamesFuse.push({
        dex: mon.dex,
        name: mon.name
    });
}
const movNamesFuse = [];
for (const tempMove of moves) {
    movNamesFuse.push({
        name: tempMove.name
    });
}
const itNamesFuse = [];
for (const tempItem of items) {
    itNamesFuse.push({
        name: tempItem.name
    });
}
const abNamesFuse = [];
for (const tempAbility of abilities) {
    abNamesFuse.push({
        name: tempAbility.name
    });
}
// stupid hack for stupid fuse
const name = "name";
// fuse setup
const options = {
    distance: 100,
    includeScore: true,
    keys: [name],
    location: 0,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    shouldSort: true,
    threshold: 0.6,
    tokenize: true
};
const monFuse = new fuse_js_1.default(monNamesFuse, options);
const movFuse = new fuse_js_1.default(movNamesFuse, options);
const itFuse = new fuse_js_1.default(itNamesFuse, options);
const abFuse = new fuse_js_1.default(abNamesFuse, options);
let gameData = {
    active: false
};
let gameTO1;
let gameTO2;
bot.on("messageCreate", (msg) => {
    if (msg.author.id === bot.user.id) {
        return;
    }
    const lowMessage = msg.content.toLowerCase();
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
bot.connect();
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
                "I am a Pokémon bot made by AlphaKretin#7990." +
                    "\nYou can find my help file and source here: <https://github.com/AlphaKretin/colress-bot/>" +
                    "\nYou can support my development on Patreon here: <https://www.patreon.com/alphakretinbots>";
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
function getMon(query) {
    const mon = mons.find(m => {
        if (m.name.toLowerCase() === query) {
            return true;
        }
        if (m.aliases) {
            for (const alias of m.aliases) {
                if (alias === query) {
                    return true;
                }
            }
        }
        return false;
    });
    if (mon) {
        return mon;
    }
    const result = monFuse.search(query);
    return mons.find(m => m.name === result[0].name);
}
async function pokemon(msg) {
    const query = msg.content.toLowerCase().slice((pre + "pokemon ").length);
    const mon = getMon(query);
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
    out += "\n**Serebii Link**: <http://www.serebii.net/pokedex-sm/" + mon.dex.toString().padStart(3, "0") + ".shtml>";
    return out;
}
async function postImage(mon, isShiny, msg) {
    let imageUrl = "";
    if (isShiny) {
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
    const query = parseInt(msg.content.toLowerCase().slice((pre + "pokedex ").length), 10);
    if (isNaN(query) || query < 1) {
        await sendMessage("Sorry, that doesn't look like a Pokédex number!", msg);
        return;
    }
    const mon = mons.find(m => m.dex === query);
    if (mon) {
        await postImage(mon, false, msg);
        await sendMessage(getMonInfo(mon), msg);
    }
    else {
        await sendMessage("Sorry, I can't find a Pokémon with that number!", msg);
    }
}
async function aloladex(msg) {
    const query = parseInt(msg.content.toLowerCase().slice((pre + "aloladex ").length), 10);
    if (isNaN(query) || query < 1) {
        await sendMessage("Sorry, that doesn't look like a Pokédex number!", msg);
        return;
    }
    const mon = mons.find(m => m.alola === query);
    if (mon) {
        await postImage(mon, false, msg);
        await sendMessage(getMonInfo(mon), msg);
    }
    else {
        await sendMessage("Sorry, I can't find a Pokémon with that number!", msg);
    }
}
function getMove(query) {
    const mv = moves.find(m => m.name.toLowerCase() === query);
    if (mv) {
        return mv;
    }
    const result = movFuse.search(query);
    return moves.find(m => m.name === result[0].name);
}
async function move(msg) {
    const query = msg.content.toLowerCase().slice((pre + "move ").length);
    const mv = getMove(query);
    if (!mv) {
        await sendMessage("Sorry, I can't find a move with that name!", msg);
        return;
    }
    await sendMessage(getMoveInfo(mv), msg);
}
function getMoveInfo(mv) {
    let out = "__**" + mv.name + "**__\n";
    out += "**Type**: " + mv.type;
    out += " **Category**: " + mv.cat + "\n";
    if (mv.power) {
        out += "**Power**: " + mv.power + " ";
    }
    if (mv.pp) {
        out += "**PP**: " + mv.pp + " ";
    }
    if (mv.acc) {
        out += "**Accuracy**: " + mv.acc;
    }
    if (mv.effect) {
        out += "\n**Effect**: " + mv.effect;
    }
    if (mv.zeffect) {
        out += "\n**Z-Move Effect**: " + mv.zeffect;
    }
    if (mv.tm) {
        out += "\n**TM**: " + mv.tm.join(", ");
    }
    if (mv.wiki) {
        out += "\n**Serebii Link**: <http://www.serebii.net/attackdex-sm/" + mv.wiki + ".shtml>";
    }
    else {
        out +=
            "\n**Serebii Link**: <http://www.serebii.net/attackdex-sm/" +
                mv.name.toLowerCase().replace(/ /g, "") +
                ".shtml>";
    }
    return out;
}
function getItem(query) {
    const it = items.find(i => i.name.toLowerCase() === query);
    if (it) {
        return it;
    }
    const result = itFuse.search(query);
    return items.find(i => i.name === result[0].name);
}
async function item(msg) {
    const query = msg.content.toLowerCase().slice((pre + "move ").length);
    const it = getItem(query);
    if (!it) {
        await sendMessage("Sorry, I can't find an item with that name!", msg);
        return;
    }
    await sendMessage(getItemInfo(it), msg);
}
function getItemInfo(it) {
    let out = "__**" + it.name + "**__\n";
    out += "**Description**: " + it.desc;
    if (it.wiki) {
        out += "\n**Serebii Link**: <http://www.serebii.net/itemdex/" + it.wiki + ".shtml>";
    }
    else {
        out +=
            "\n**Serebii Link**: <http://www.serebii.net/itemdex/" +
                it.name.toLowerCase().replace(/ /g, "") +
                ".shtml>";
    }
    return out;
}
function getAbility(query) {
    const ab = abilities.find(a => a.name.toLowerCase() === query);
    if (ab) {
        return ab;
    }
    const result = abFuse.search(query);
    return abilities.find(a => a.name === result[0].name);
}
async function ability(msg) {
    const query = msg.content.toLowerCase().slice((pre + "ability ").length);
    const ab = getAbility(query);
    if (!ab) {
        await sendMessage("Sorry, I can't find an ability with that name!", msg);
        return;
    }
    await sendMessage(getAbilityInfo(ab), msg);
}
function getAbilityInfo(ab) {
    let out = "__**" + ab.name + "**__\n";
    out += "**Description**: " + ab.desc;
    if (ab.wiki) {
        out += "\n**Serebii Link**: <http://www.serebii.net/abilitydex/" + ab.wiki + ".shtml>";
    }
    else {
        out +=
            "\n**Serebii Link**: <http://www.serebii.net/abilitydex/" +
                ab.name.toLowerCase().replace(/ /g, "") +
                ".shtml>";
    }
    return out;
}
async function shiny(msg) {
    const query = msg.content.toLowerCase().slice((pre + "shiny ").length);
    const mon = getMon(query);
    if (!mon) {
        await sendMessage("Sorry, I can't find a Pokémon with that name!", msg);
        return;
    }
    await postImage(mon, true, msg);
}
async function weak(msg) {
    const query = msg.content.toLowerCase().slice((pre + "weak ").length);
    const mon = getMon(query);
    if (!mon) {
        await sendMessage("Sorry, I can't find a Pokémon with that number!", msg);
        return;
    }
    const types = getMonTypes(mon);
    await sendMessage("**Name**: " + mon.name + "\n" + getWeakInfo(types), msg);
}
async function weakTypes(msg) {
    const args = msg.content
        .toLowerCase()
        .toLowerCase()
        .split(" ");
    const types = [];
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
    const types = [mon.type1];
    if (mon.type2) {
        types.push(mon.type2);
    }
    return types;
}
function getWeakInfo(types) {
    if (types.length < 1) {
        return "Invalid types!";
    }
    const typeInfo = {
        Bug: {
            immune: [],
            resist: ["Fighting", "Grass", "Ground"],
            value: 0,
            weak: ["Fire", "Flying", "Rock"]
        },
        Dark: {
            immune: ["Psychic "],
            resist: ["Dark", "Ghost"],
            value: 0,
            weak: ["Bug", "Fighting", "Fairy"]
        },
        Electric: {
            immune: [],
            resist: ["Electric", "Flying", "Steel"],
            value: 0,
            weak: ["Ground"]
        },
        Fairy: {
            immune: ["Dragon"],
            resist: ["Bug", "Dark", "Fighting"],
            value: 0,
            weak: ["Poison", "Steel"]
        },
        Fighting: {
            immune: [],
            resist: ["Bug", "Dark", "Rock"],
            value: 0,
            weak: ["Fairy", "Flying", "Psychic"]
        },
        Fire: {
            immune: [],
            resist: ["Bug", "Fairy", "Fire", "Grass", "Ice", "Steel"],
            value: 0,
            weak: ["Ground", "Rock", "Water"]
        },
        Flying: {
            immune: ["Ground"],
            resist: ["Bug", "Fighting", "Grass"],
            value: 0,
            weak: ["Electric", "Ice", "Rock"]
        },
        Grass: {
            immune: [],
            resist: ["Electric", "Grass", "Ground", "Water"],
            value: 0,
            weak: ["Bug", "Fire", "Flying", "Ice", "Poison"]
        },
        Ice: {
            immune: [],
            resist: ["Ice"],
            value: 0,
            weak: ["Fighting", "Fire", "Rock", "Steel"]
        },
        Normal: {
            immune: ["Ghost"],
            resist: [],
            value: 0,
            weak: ["Fighting"]
        },
        Poison: {
            immune: [],
            resist: ["Bug", "Fairy", "Fighting", "Grass", "Poison"],
            value: 0,
            weak: ["Ground", "Psychic"]
        },
        Water: {
            immune: [],
            resist: ["Fire", "Ice", "Steel", "Water"],
            value: 0,
            weak: ["Electric", "Grass"]
        },
        Ground: {
            immune: ["Electric"],
            resist: ["Poison", "Rock"],
            value: 0,
            weak: ["Grass", "Ice", "Water"]
        },
        Psychic: {
            immune: [],
            resist: ["Fighting", "Psychic"],
            value: 0,
            weak: ["Bug", "Dark", "Ghost"]
        },
        Rock: {
            immune: [],
            resist: ["Fire", "Flying", "Normal", "Poison"],
            value: 0,
            weak: ["Fighting", "Grass", "Ground", "Steel", "Water"]
        },
        Dragon: {
            immune: [],
            resist: ["Electric", "Fire", "Grass", "Water"],
            value: 0,
            weak: ["Dragon", "Ice", "Fairy"]
        },
        Ghost: {
            immune: ["Normal", "Fighting"],
            resist: ["Bug", "Poison"],
            value: 0,
            weak: ["Ghost", "Dark"]
        },
        Steel: {
            immune: ["Poison"],
            resist: ["Bug", "Dragon", "Fairy", "Flying", "Grass", "Ice", "Normal", "Psychic", "Rock", "Steel"],
            value: 0,
            weak: ["Fighting", "Fire", "Ground"]
        }
    };
    for (const type of types) {
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
    const weaks = [];
    const resists = [];
    const immunes = [];
    for (const key in typeInfo) {
        if (typeInfo.hasOwnProperty(key)) {
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
        }
    }
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
    let input = msg.content.toLowerCase().split(" ")[1];
    if (!input) {
        input = "help";
    }
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
        // pick a random pokemon
        const index = getIncInt(0, mons.length - 1);
        const mon = mons[index];
        // start game
        gameData = {
            active: true,
            dex: mon.dex,
            game: "highlow",
            guesses: 0,
            msg,
            name: mon.name,
            server: serverID
        };
        await sendMessage("You have 10 tries to guess the National Pokédex number of the following Pokémon: **" + mon.name + "**!", msg);
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
        msg.channel.id !== gameData.msg.channel.id ||
        gameData.game !== "highlow") {
        return;
    }
    if (parseInt(msg.content.toLowerCase(), 10) === gameData.dex) {
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
        const mon = mons.find(m => m.dex === parseInt(msg.content.toLowerCase(), 10));
        if (!mon) {
            return;
        }
        gameData.guesses++;
        if (mon.dex < gameData.dex) {
            out = "That Pokémon is " + mon.name + ", which is too early in the Pokédex!\n";
        }
        else {
            // if (monDexes[index] > gameData.dex)
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
        // pick a random pokemon
        const mon = mons[getIncInt(0, mons.length - 1)];
        const fixedName = mon.name
            .replace("é", "e")
            .replace("♂", "M")
            .replace("♀", "F");
        const dex = mon.dex;
        let hint = "";
        for (let letter of name) {
            if (getIncInt(0, 2) !== 0 && letter !== " ") {
                letter = "-";
            }
            hint += letter;
        }
        // start game
        gameData = {
            active: true,
            dex,
            game: "highlow2",
            guesses: 0,
            hint,
            msg,
            name: fixedName,
            server: serverID
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
        msg.channel.id !== gameData.msg.channel.id ||
        gameData.game !== "highlow2") {
        return;
    }
    const mon = mons.find(m => m.name.toLowerCase() === msg.content.toLowerCase());
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
            // if (guessDex > gameData.dex)
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
        // pick a random pokemon
        const mon = mons[getIncInt(0, mons.length - 1)];
        const fixedName = mon.name
            .replace("é", "e")
            .replace("♂", "M")
            .replace("♀", "F");
        const dex = mon.dex;
        let hint = "";
        for (let letter of name) {
            if (getIncInt(0, 3) !== 0 && letter !== " ") {
                letter = "-";
            }
            hint += letter;
        }
        // start game
        gameData = {
            active: true,
            game: "whosthat",
            guesses: 0,
            hint,
            msg,
            name: fixedName,
            server: serverID
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
        msg.channel.id !== gameData.msg.channel.id ||
        gameData.game !== "whosthat") {
        return;
    }
    if (msg.content.toLowerCase() === gameData.name.toLowerCase()) {
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
        // pick a random pokemon
        const mon = mons[getIncInt(0, mons.length - 1)];
        const fixedName = mon.name
            .replace("é", "e")
            .replace("♂", "M")
            .replace("♀", "F");
        const dex = mon.dex;
        const hint = fixedName.replace(/\S/g, "-");
        // start game
        gameData = {
            active: true,
            dex,
            game: "hangman",
            guesses: 0,
            hint,
            msg,
            name: fixedName,
            server: serverID,
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
        msg.channel.id !== gameData.msg.channel.id ||
        gameData.game !== "hangman") {
        return;
    }
    const mon = mons.find(m => m.name === msg.content.toLowerCase());
    if (mon) {
        if (msg.content.toLowerCase() === gameData.name.toLowerCase()) {
            await msg.addReaction("👍");
            await sendMessage("You got it, ending with " +
                msg.author.username +
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
                gameData.wrongs.push(msg.content.toLowerCase());
                await sendMessage("Sorry, " +
                    msg.author.username +
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
                    msg.author.username +
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
        if (gameData.name.toLowerCase().indexOf(msg.content.toLowerCase()) > -1) {
            for (let i = 0; i < gameData.name.length; i++) {
                if (gameData.name.charAt(i).toLowerCase() === msg.content.toLowerCase()) {
                    gameData.hint = replaceAt(gameData.hint, i, gameData.name.charAt(i));
                }
            }
            if (gameData.name === gameData.hint) {
                await msg.addReaction("👍");
                await sendMessage("You got it, ending with " +
                    msg.author.username +
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
                    msg.author.username +
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
                gameData.wrongs.push(msg.content.toLowerCase());
                await sendMessage("Sorry, " +
                    msg.author.username +
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
                    msg.author.username +
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
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}
function c(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function replaceAt(str, index, character) {
    return str.substr(0, index) + character + str.substr(index + character.length);
}
//# sourceMappingURL=colress.js.map