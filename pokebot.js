var Discord = require('discord.io');
var bot = new Discord.Client({
    autorun: true,
    token: "yeah no"
});
var mons = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoranf", "nidorina", "nidoqueen", "nidoranm", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr. mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho_oh", "celebi", "treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken", "mudkip", "marshtomp", "swampert", "poochyena", "mightyena", "zigzagoon", "linoone", "wurmple", "silcoon", "beautifly", "cascoon", "dustox", "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry", "taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia", "gardevoir", "surskit", "masquerain", "shroomish", "breloom", "slakoth", "vigoroth", "slaking", "nincada", "ninjask", "shedinja", "whismur", "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass", "skitty", "delcatty", "sableye", "mawile", "aron", "lairon", "aggron", "meditite", "medicham", "electrike", "manectric", "plusle", "minun", "volbeat", "illumise", "roselia", "gulpin", "swalot", "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt", "torkoal", "spoink", "grumpig", "spinda", "trapinch", "vibrava", "flygon", "cacnea", "cacturne", "swablu", "altaria", "zangoose", "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish", "crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith", "armaldo", "feebas", "milotic", "castform", "kecleon", "shuppet", "banette", "duskull", "dusclops", "tropius", "chimecho", "absol", "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein", "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "bagon", "shelgon", "salamence", "beldum", "metang", "metagross", "regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza", "jirachi", "deoxys", "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape", "piplup", "prinplup", "empoleon", "starly", "staravia", "staraptor", "bidoof", "bibarel", "kricketot", "kricketune", "shinx", "luxio", "luxray", "budew", "roserade", "cranidos", "rampardos", "shieldon", "bastiodon", "burmy", "wormadam", "mothim", "combee", "vespiquen", "pachirisu", "buizel", "floatzel", "cherubi", "cherrim", "shellos", "gastrodon", "ambipom", "drifloon", "drifblim", "buneary", "lopunny", "mismagius", "honchkrow", "glameow", "purugly", "chingling", "stunky", "skuntank", "bronzor", "bronzong", "bonsly", "mime jr.", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp", "munchlax", "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion", "croagunk", "toxicroak", "carnivine", "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile", "magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire", "magmortar", "togekiss", "yanmega", "leafeon", "glaceon", "gliscor", "mamoswine", "porygon-z", "gallade", "probopass", "dusknoir", "froslass", "rotom", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran", "regigigas", "giratina", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "arceus", "victini", "snivy", "servine", "serperior", "tepig", "pignite", "emboar", "oshawott", "dewott", "samurott", "patrat", "watchog", "lillipup", "herdier", "stoutland", "purrloin", "liepard", "pansage", "simisage", "pansear", "simisear", "panpour", "simipour", "munna", "musharna", "pidove", "tranquill", "unfezant", "blitzle", "zebstrika", "roggenrola", "boldore", "gigalith", "woobat", "swoobat", "drilbur", "excadrill", "audino", "timburr", "gurdurr", "conkeldurr", "tympole", "palpitoad", "seismitoad", "throh", "sawk", "sewaddle", "swadloon", "leavanny", "venipede", "whirlipede", "scolipede", "cottonee", "whimsicott", "petilil", "lilligant", "basculin", "sandile", "krokorok", "krookodile", "darumaka", "darmanitan", "maractus", "dwebble", "crustle", "scraggy", "scrafty", "sigilyph", "yamask", "cofagrigus", "tirtouga", "carracosta", "archen", "archeops", "trubbish", "garbodor", "zorua", "zoroark", "minccino", "cinccino", "gothita", "gothorita", "gothitelle", "solosis", "duosion", "reuniclus", "ducklett", "swanna", "vanillite", "vanillish", "vanilluxe", "deerling", "sawsbuck", "emolga", "karrablast", "escavalier", "foongus", "amoonguss", "frillish", "jellicent", "alomomola", "joltik", "galvantula", "ferroseed", "ferrothorn", "klink", "klang", "klinklang", "tynamo", "eelektrik", "eelektross", "elgyem", "beheeyem", "litwick", "lampent", "chandelure", "axew", "fraxure", "haxorus", "cubchoo", "beartic", "cryogonal", "shelmet", "accelgor", "stunfisk", "mienfoo", "mienshao", "druddigon", "golett", "golurk", "pawniard", "bisharp", "bouffalant", "rufflet", "braviary", "vullaby", "mandibuzz", "heatmor", "durant", "deino", "zweilous", "hydreigon", "larvesta", "volcarona", "cobalion", "terrakion", "virizion", "tornadus", "thundurus", "reshiram", "zekrom", "landorus", "kyurem", "keldeo", "meloetta", "genesect", "chespin", "quilladin", "chesnaught", "fennekin", "braixen", "delphox", "froakie", "frogadier", "greninja", "bunnelby", "diggersby", "fletchling", "fletchinder", "talonflame", "scatterbug", "spewpa", "vivillon", "litleo", "pyroar", "flabebe", "floette", "florges", "skiddo", "gogoat", "pancham", "pangoro", "furfrou", "espurr", "meowstic", "honedge", "doublade", "aegislash", "spritzee", "aromatisse", "swirlix", "slurpuff", "inkay", "malamar", "binacle", "barbaracle", "skrelp", "dragalge", "clauncher", "clawitzer", "helioptile", "heliolisk", "tyrunt", "tyrantrum", "amaura", "aurorus", "sylveon", "hawlucha", "dedenne", "carbink", "goomy", "sliggoo", "goodra", "klefki", "phantump", "trevenant", "pumpkaboo", "gourgeist", "bergmite", "avalugg", "noibat", "noivern", "xerneas", "yveltal", "zygarde", "diancie"];
var moves = ["pound", "karate chop", "double slap", "comet punch", "mega punch", "pay day", "fire punch", "ice punch", "thunder punch", "scratch", "vice grip", "guillotine", "razor wind", "swords dance", "cut", "gust", "wing attack", "whirlwind", "fly", "bind", "slam", "vine whip", "stomp", "double kick", "mega kick", "jump kick", "rolling kick", "sand attack", "headbutt", "horn attack", "fury attack", "horn drill", "tackle", "body slam", "wrap", "take down", "thrash", "double-edge", "tail whip", "poison sting", "twineedle", "pin missile", "leer", "bite", "growl", "roar", "sing", "supersonic", "sonic boom", "disable", "acid", "ember", "flamethrower", "mist", "water gun", "hydro pump", "surf", "ice beam", "blizzard", "psybeam", "bubble beam", "aurora beam", "hyper beam", "peck", "drill peck", "submission", "low kick", "counter", "seismic toss", "strength", "absorb", "mega drain", "leech seed", "growth", "razor leaf", "solar beam", "poison powder", "stun spore", "sleep powder", "petal dance", "string shot", "dragon rage", "fire spin", "thunder shock", "thunderbolt", "thunder wave", "thunder", "rock throw", "earthquake", "fissure", "dig", "toxic", "confusion", "psychic", "hypnosis", "meditate", "agility", "quick attack", "rage", "teleport", "night shade", "mimic", "screech", "double team", "recover", "harden", "minimize", "smokescreen", "confuse ray", "withdraw", "defense curl", "barrier", "light screen", "haze", "reflect", "focus energy", "bide", "metronome", "mirror move", "self-destruct", "egg bomb", "lick", "smog", "sludge", "bone club", "fire blast", "waterfall", "clamp", "swift", "skull bash", "spike cannon", "constrict", "amnesia", "kinesis", "soft_boiled", "high jump kick", "glare", "dream eater", "poison gas", "barrage", "leech life", "lovely kiss", "sky attack", "transform", "bubble", "dizzy punch", "spore", "flash", "psywave", "splash", "acid armor", "crabhammer", "explosion", "fury swipes", "bonemerang", "rest", "rock slide", "hyper fang", "sharpen", "conversion", "tri attack", "super fang", "slash", "substitute", "struggle", "sketch", "triple kick", "thief", "spider web", "mind reader", "nightmare", "flame wheel", "snore", "curse", "flail", "conversion 2", "aeroblast", "cotton spore", "reversal", "spite", "powder snow", "protect", "mach punch", "scary face", "feint attack", "sweet kiss", "belly drum", "sludge bomb", "mud-slap", "octazooka", "spikes", "zap cannon", "foresight", "destiny bond", "perish song", "icy wind", "detect", "bone rush", "lock-on", "outrage", "sandstorm", "giga drain", "endure", "charm", "rollout", "false swipe", "swagger", "milk drink", "spark", "fury cutter", "steel wing", "mean look", "attract", "sleep talk", "heal bell", "return", "present", "frustration", "safeguard", "pain split", "sacred fire", "magnitude", "dynamic punch", "megahorn", "dragon breath", "baton pass", "encore", "pursuit", "rapid spin", "sweet scent", "iron tail", "metal claw", "vital throw", "morning sun", "synthesis", "moonlight", "hidden power", "cross chop", "twister", "rain dance", "sunny day", "crunch", "mirror coat", "psych up", "extreme speed", "ancient power", "shadow ball", "future sight", "rock smash", "whirlpool", "beat up", "fake out", "uproar", "stockpile", "spit up", "swallow", "heat wave", "hail", "torment", "flatter", "will-o-wisp", "memento", "facade", "focus punch", "smelling salts", "follow me", "nature power", "charge", "taunt", "helping hand", "trick", "role play", "wish", "assist", "ingrain", "superpower", "magic coat", "recycle", "revenge", "brick break", "yawn", "knock off", "endeavor", "eruption", "skill swap", "imprison", "refresh", "grudge", "snatch", "secret power", "dive", "arm thrust", "camouflage", "tail glow", "luster purge", "mist ball", "feather dance", "teeter dance", "blaze kick", "mud sport", "ice ball", "needle arm", "slack off", "hyper voice", "poison fang", "crush claw", "blast burn", "hydro cannon", "meteor mash", "astonish", "weather ball", "aromatherapy", "fake tears", "air cutter", "overheat", "odor sleuth", "rock tomb", "silver wind", "metal sound", "grass whistle", "tickle", "cosmic power", "water spout", "signal beam", "shadow punch", "extrasensory", "sky uppercut", "sand tomb", "sheer cold", "muddy water", "bullet seed", "aerial ace", "icicle spear", "iron defense", "block", "howl", "dragon claw", "frenzy plant", "bulk up", "bounce", "mud shot", "poison tail", "covet", "volt tackle", "magical leaf", "water sport", "calm mind", "leaf blade", "dragon dance", "rock blast", "shock wave", "water pulse", "doom desire", "psycho boost", "roost", "gravity", "miracle eye", "wake-up slap", "hammer arm", "gyro ball", "healing wish", "brine", "natural gift", "feint", "pluck", "tailwind", "acupressure", "metal burst", "u-turn", "close combat", "payback", "assurance", "embargo", "fling", "psycho shift", "trump card", "heal block", "wring out", "power trick", "gastro acid", "lucky chant", "me first", "copycat", "power swap", "guard swap", "punishment", "last resort", "worry seed", "sucker punch", "toxic spikes", "heart swap", "aqua ring", "magnet rise", "flare blitz", "force palm", "aura sphere", "rock polish", "poison jab", "dark pulse", "night slash", "aqua tail", "seed bomb", "air slash", "x-scissor", "bug buzz", "dragon pulse", "dragon rush", "power gem", "drain punch", "vacuum wave", "focus blast", "energy ball", "brave bird", "earth power", "switcheroo", "giga impact", "nasty plot", "bullet punch", "avalanche", "ice shard", "shadow claw", "thunder fang", "ice fang", "fire fang", "shadow sneak", "mud bomb", "psycho cut", "zen headbutt", "mirror shot", "flash cannon", "rock climb", "defog", "trick room", "draco meteor", "discharge", "lava plume", "leaf storm", "power whip", "rock wrecker", "cross poison", "gunk shot", "iron head", "magnet bomb", "stone edge", "captivate", "stealth rock", "grass knot", "chatter", "judgment", "bug bite", "charge beam", "wood hammer", "aqua jet", "attack order", "defend order", "heal order", "head smash", "double hit", "roar of time", "spacial rend", "lunar dance", "crush grip", "magma storm", "dark void", "seed flare", "ominous wind", "shadow force", "hone claws", "wide guard", "guard split", "power split", "wonder room", "psyshock", "venoshock", "autotomize", "rage powder", "telekinesis", "magic room", "smack down", "storm throw", "flame burst", "sludge wave", "quiver dance", "heavy slam", "synchronoise", "electro ball", "soak", "flame charge", "coil", "low sweep", "acid spray", "foul play", "simple beam", "entrainment", "after you", "round", "echoed voice", "chip away", "clear smog", "stored power", "quick guard", "ally switch", "scald", "shell smash", "heal pulse", "hex", "sky drop", "shift gear", "circle throw", "incinerate", "quash", "acrobatics", "reflect type", "retaliate", "final gambit", "bestow", "inferno", "water pledge", "fire pledge", "grass pledge", "volt switch", "struggle bug", "bulldoze", "frost breath", "dragon tail", "work up", "electroweb", "wild charge", "drill run", "dual chop", "heart stamp", "horn leech", "sacred sword", "razor shell", "heat crash", "leaf tornado", "steamroller", "cotton guard", "night daze", "psystrike", "tail slap", "hurricane", "head charge", "gear grind", "searing shot", "techno blast", "relic song", "secret sword", "glaciate", "bolt strike", "blue flare", "fiery dance", "freeze shock", "ice burn", "snarl", "icicle crash", "v-create", "fusion flare", "fusion bolt", "flying press", "mat block", "belch", "rototiller", "sticky web", "fell stinger", "phantom force", "trick-or-treat", "noble roar", "ion deluge", "parabolic charge", "forest's curse", "petal blizzard", "freeze-dry", "disarming voice", "parting shot", "topsy-turvy", "draining kiss", "crafty shield", "flower shield", "grassy terrain", "misty terrain", "electrify", "play rough", "fairy wind", "moonblast", "boomburst", "fairy lock", "king's shield", "play nice", "confide", "diamond storm", "steam eruption", "hyperspace hole", "water shuriken", "mystical fire", "spiky shield", "aromatic mist", "eerie impulse", "venom drench", "powder", "geomancy", "magnetic flux", "happy hour", "electric terrain", "dazzling gleam", "celebrate", "hold hands", "baby-doll eyes", "nuzzle", "hold back", "infestation", "power-up punch", "oblivion wing", "thousand arrows", "thousand waves", "land's wrath", "light of ruin", "origin pulse", "precipice blades", "dragon ascent", "hyperspace fury"];
bot.on('ready', function(event) {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message.toLowerCase().substring(0, 5) === "!help") {
        help(user, userID, channelID, message, event);
    }
    if (message.toLowerCase().substring(0, 8) === "!pokemon") {
        pokemon(user, userID, channelID, message, event);
    }
    if (message.toLowerCase().substring(0, 5) === "!move") {
        move(user, userID, channelID, message, event);
    }
});

function help(user, userID, channelID, message, event) {
    bot.sendMessage({
        to: channelID,
        message: "Hi, I'm Pokébot! My job is to serve information about data in the Pokémon games. I recognise the following commands: \n!help: Displays this help message.\n!pokemon: Serves information about individual Pokémon.\n!moves: Serves information about Pokémon moves.\n!items: Serves information about items.\nFor more detail on each command, call it with 'help' as the first argument. For example, '!pokemon help'.\n~~Use your Master Ball on Fearow or Tentacruel.~~"
    });
}

function pokemon(user, userID, channelID, message, event) {
    var mon = message.substring(9);
    mon = mon.toLowerCase();
    if (mon === "help") {
        bot.sendMessage({
            to: channelID,
            message: "This command serves information about Pokémon! Use the Pokémon's name as the argument, with 'm' and 'f' for Nidoran's symbols, ignoring Farfetch'd's apostrophe, and '_' instead of Ho-oh's '-', and with normal 'e's for Flabébé."
        });
    } else {
        if (mons.indexOf(mon) !== -1) {
            bot.sendMessage({
                to: channelID,
                message: "Image: " + window[mon].image + "\nName: " + window[mon].name + "\nPokédex No.: " + window[mon].dex + "\nType: " + window[mon].type + "\nAbility: " + window[mon].ability + "\nEvolution: " + window[mon].evolve + "\nWiki Link: " + window[mon].wiki
            });
        } else {
            bot.sendMessage({
                to: channelID,
                message: "I don't recognise that Pokémon, " + user + "!"
            });
        }
    }
}

function move(user, userID, channelID, message, event) {
    var mov = message.substring(6);
    mov = mov.toLowerCase();
    if (mov === "help") {
        bot.sendMessage({
            to: channelID,
            message: "This command serves information about Pokémon's moves! Use the move's name as the argument, with spaces where appropriate, and '_' instead of Soft-boiled's '-'."
        });
    } else {
        if (moves.indexOf(mov) !== -1) {
            mov = mov.replace(/ /g, "_");
            bot.sendMessage({
                to: channelID,
                message: "Name: " + window[mov].name + "\nType: " + window[mov].type + "\nCategory: " + window[mov].cat + "\nPower: " + window[mov].power + "\nPP: " + window[mov].pp + "\nAccuracy: " + window[mov].acc + "\nEffect: " + window[mov].effect + "\nWiki Link: " + window[mov].wiki
            });
        } else {
            bot.sendMessage({
                to: channelID,
                message: "I don't recognise that move, " + user + "!"
            });
        }
    }
}

var bulbasaur = {
    name: "Bulbasaur",
    dex: 1,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Level 16, Ivysaur",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)",
    image: "http://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/240px-001Bulbasaur.png"
};

var ivysaur = {
    name: "Ivysaur",
    dex: 2,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Level 32, Venusaur",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ivysaur_(Pok%C3%A9mon)",
    image: "http://cdn.bulbagarden.net/upload/thumb/7/73/002Ivysaur.png/240px-002Ivysaur.png"
};

var venusaur = {
    name: "Venusaur",
    dex: 3,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Venusaur_(Pok%C3%A9mon)",
    image: "//TODO"
};

var charmander = {
    name: "Charmander",
    dex: 4,
    type: "Fire",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)",
    image: "//TODO"
};

var charmeleon = {
    name: "Charmeleon",
    dex: 5,
    type: "Fire",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Charmeleon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var charizard = {
    name: "Charizard",
    dex: 6,
    type: "Fire/Flying",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Charizard_(Pok%C3%A9mon)",
    image: "//TODO"
};

var squirtle = {
    name: "Squirtle",
    dex: 7,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)",
    image: "//TODO"
};

var wartortle = {
    name: "Wartortle",
    dex: 8,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wartortle_(Pok%C3%A9mon)",
    image: "//TODO"
};

var blastoise = {
    name: "Blastoise",
    dex: 9,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pok%C3%A9mon)",
    image: "//TODO"
};

var caterpie = {
    name: "Caterpie",
    dex: 10,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)",
    image: "//TODO"
};

var metapod = {
    name: "Metapod",
    dex: 11,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Metapod_(Pok%C3%A9mon)",
    image: "//TODO"
};

var butterfree = {
    name: "Butterfree",
    dex: 12,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Butterfree_(Pok%C3%A9mon)",
    image: "//TODO"
};

var weedle = {
    name: "Weedle",
    dex: 13,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Weedle_(Pok%C3%A9mon)",
    image: "//TODO"
};

var kakuna = {
    name: "Kakuna",
    dex: 14,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kakuna_(Pok%C3%A9mon)",
    image: "//TODO"
};

var beedrill = {
    name: "Beedrill",
    dex: 15,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Beedrill_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pidgey = {
    name: "Pidgey",
    dex: 16,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pidgey_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pidgeotto = {
    name: "Pidgeotto",
    dex: 17,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pidgeotto_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pidgeot = {
    name: "Pidgeot",
    dex: 18,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pidgeot_(Pok%C3%A9mon)",
    image: "//TODO"
};

var rattata = {
    name: "Rattata",
    dex: 19,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rattata_(Pok%C3%A9mon)",
    image: "//TODO"
};

var raticate = {
    name: "Raticate",
    dex: 20,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Raticate_(Pok%C3%A9mon)",
    image: "//TODO"
};

var spearow = {
    name: "Spearow",
    dex: 21,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spearow_(Pok%C3%A9mon)",
    image: "//TODO"
};

var fearow = {
    name: "Fearow",
    dex: 22,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fearow_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ekans = {
    name: "Ekans",
    dex: 23,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)",
    image: "//TODO"
};

var arbok = {
    name: "Arbok",
    dex: 24,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Arbok_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pikachu = {
    name: "Pikachu",
    dex: 25,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)",
    image: "//TODO"
};

var raichu = {
    name: "Raichu",
    dex: 26,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Raichu_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sandshrew = {
    name: "Sandshrew",
    dex: 27,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sandshrew_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sandslash = {
    name: "Sandslash",
    dex: 28,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sandslash_(Pok%C3%A9mon)",
    image: "//TODO"
};

var nidoran♀ = {
    name: "Nidoran♀",
    dex: 29,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nidoran♀_(Pok%C3%A9mon)",
    image: "//TODO"
};

var nidorina = {
    name: "Nidorina",
    dex: 30,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nidorina_(Pok%C3%A9mon)",
    image: "//TODO"
};

var nidoqueen = {
    name: "Nidoqueen",
    dex: 31,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nidoqueen_(Pok%C3%A9mon)",
    image: "//TODO"
};

var nidoran♂ = {
    name: "Nidoran♂",
    dex: 32,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nidoran♂_(Pok%C3%A9mon)",
    image: "//TODO"
};

var nidorino = {
    name: "Nidorino",
    dex: 33,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nidorino_(Pok%C3%A9mon)",
    image: "//TODO"
};

var nidoking = {
    name: "Nidoking",
    dex: 34,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nidoking_(Pok%C3%A9mon)",
    image: "//TODO"
};

var clefairy = {
    name: "Clefairy",
    dex: 35,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Clefairy_(Pok%C3%A9mon)",
    image: "//TODO"
};

var clefable = {
    name: "Clefable",
    dex: 36,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Clefable_(Pok%C3%A9mon)",
    image: "//TODO"
};

var vulpix = {
    name: "Vulpix",
    dex: 37,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Vulpix_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ninetales = {
    name: "Ninetales",
    dex: 38,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ninetales_(Pok%C3%A9mon)",
    image: "//TODO"
};

var jigglypuff = {
    name: "Jigglypuff",
    dex: 39,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Jigglypuff_(Pok%C3%A9mon)",
    image: "//TODO"
};

var wigglytuff = {
    name: "Wigglytuff",
    dex: 40,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wigglytuff_(Pok%C3%A9mon)",
    image: "//TODO"
};

var zubat = {
    name: "Zubat",
    dex: 41,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Zubat_(Pok%C3%A9mon)",
    image: "//TODO"
};

var golbat = {
    name: "Golbat",
    dex: 42,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Golbat_(Pok%C3%A9mon)",
    image: "//TODO"
};

var oddish = {
    name: "Oddish",
    dex: 43,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Oddish_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gloom = {
    name: "Gloom",
    dex: 44,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gloom_(Pok%C3%A9mon)",
    image: "//TODO"
};

var vileplume = {
    name: "Vileplume",
    dex: 45,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Vileplume_(Pok%C3%A9mon)",
    image: "//TODO"
};

var paras = {
    name: "Paras",
    dex: 46,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Paras_(Pok%C3%A9mon)",
    image: "//TODO"
};

var parasect = {
    name: "Parasect",
    dex: 47,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Parasect_(Pok%C3%A9mon)",
    image: "//TODO"
};

var venonat = {
    name: "Venonat",
    dex: 48,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Venonat_(Pok%C3%A9mon)",
    image: "//TODO"
};

var venomoth = {
    name: "Venomoth",
    dex: 49,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Venomoth_(Pok%C3%A9mon)",
    image: "//TODO"
};

var diglett = {
    name: "Diglett",
    dex: 50,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Diglett_(Pok%C3%A9mon)",
    image: "//TODO"
};

var dugtrio = {
    name: "Dugtrio",
    dex: 51,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dugtrio_(Pok%C3%A9mon)",
    image: "//TODO"
};

var meowth = {
    name: "Meowth",
    dex: 52,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Meowth_(Pok%C3%A9mon)",
    image: "//TODO"
};

var persian = {
    name: "Persian",
    dex: 53,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Persian_(Pok%C3%A9mon)",
    image: "//TODO"
};

var psyduck = {
    name: "Psyduck",
    dex: 54,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Psyduck_(Pok%C3%A9mon)",
    image: "//TODO"
};

var golduck = {
    name: "Golduck",
    dex: 55,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Golduck_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mankey = {
    name: "Mankey",
    dex: 56,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mankey_(Pok%C3%A9mon)",
    image: "//TODO"
};

var primeape = {
    name: "Primeape",
    dex: 57,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Primeape_(Pok%C3%A9mon)",
    image: "//TODO"
};

var growlithe = {
    name: "Growlithe",
    dex: 58,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Growlithe_(Pok%C3%A9mon)",
    image: "//TODO"
};

var arcanine = {
    name: "Arcanine",
    dex: 59,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Arcanine_(Pok%C3%A9mon)",
    image: "//TODO"
};

var poliwag = {
    name: "Poliwag",
    dex: 60,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Poliwag_(Pok%C3%A9mon)",
    image: "//TODO"
};

var poliwhirl = {
    name: "Poliwhirl",
    dex: 61,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Poliwhirl_(Pok%C3%A9mon)",
    image: "//TODO"
};

var poliwrath = {
    name: "Poliwrath",
    dex: 62,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Poliwrath_(Pok%C3%A9mon)",
    image: "//TODO"
};

var abra = {
    name: "Abra",
    dex: 63,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Abra_(Pok%C3%A9mon)",
    image: "//TODO"
};

var kadabra = {
    name: "Kadabra",
    dex: 64,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kadabra_(Pok%C3%A9mon)",
    image: "//TODO"
};

var alakazam = {
    name: "Alakazam",
    dex: 65,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)",
    image: "//TODO"
};

var machop = {
    name: "Machop",
    dex: 66,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Machop_(Pok%C3%A9mon)",
    image: "//TODO"
};

var machoke = {
    name: "Machoke",
    dex: 67,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Machoke_(Pok%C3%A9mon)",
    image: "//TODO"
};

var machamp = {
    name: "Machamp",
    dex: 68,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Machamp_(Pok%C3%A9mon)",
    image: "//TODO"
};

var bellsprout = {
    name: "Bellsprout",
    dex: 69,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bellsprout_(Pok%C3%A9mon)",
    image: "//TODO"
};

var weepinbell = {
    name: "Weepinbell",
    dex: 70,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Weepinbell_(Pok%C3%A9mon)",
    image: "//TODO"
};

var victreebel = {
    name: "Victreebel",
    dex: 71,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Victreebel_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tentacool = {
    name: "Tentacool",
    dex: 72,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tentacool_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tentacruel = {
    name: "Tentacruel",
    dex: 73,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tentacruel_(Pok%C3%A9mon)",
    image: "//TODO"
};

var geodude = {
    name: "Geodude",
    dex: 74,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Geodude_(Pok%C3%A9mon)",
    image: "//TODO"
};

var graveler = {
    name: "Graveler",
    dex: 75,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Graveler_(Pok%C3%A9mon)",
    image: "//TODO"
};

var golem = {
    name: "Golem",
    dex: 76,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Golem_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ponyta = {
    name: "Ponyta",
    dex: 77,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ponyta_(Pok%C3%A9mon)",
    image: "//TODO"
};

var rapidash = {
    name: "Rapidash",
    dex: 78,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)",
    image: "//TODO"
};

var slowpoke = {
    name: "Slowpoke",
    dex: 79,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Slowpoke_(Pok%C3%A9mon)",
    image: "//TODO"
};

var slowbro = {
    name: "Slowbro",
    dex: 80,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Slowbro_(Pok%C3%A9mon)",
    image: "//TODO"
};

var magnemite = {
    name: "Magnemite",
    dex: 81,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magnemite_(Pok%C3%A9mon)",
    image: "//TODO"
};

var magneton = {
    name: "Magneton",
    dex: 82,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magneton_(Pok%C3%A9mon)",
    image: "//TODO"
};

var farfetchd = {
    name: "Farfetch'd",
    dex: 83,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Farfetch'd_(Pok%C3%A9mon)",
    image: "//TODO"
};

var doduo = {
    name: "Doduo",
    dex: 84,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Doduo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var dodrio = {
    name: "Dodrio",
    dex: 85,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dodrio_(Pok%C3%A9mon)",
    image: "//TODO"
};

var seel = {
    name: "Seel",
    dex: 86,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Seel_(Pok%C3%A9mon)",
    image: "//TODO"
};

var dewgong = {
    name: "Dewgong",
    dex: 87,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dewgong_(Pok%C3%A9mon)",
    image: "//TODO"
};

var grimer = {
    name: "Grimer",
    dex: 88,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Grimer_(Pok%C3%A9mon)",
    image: "//TODO"
};

var muk = {
    name: "Muk",
    dex: 89,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Muk_(Pok%C3%A9mon)",
    image: "//TODO"
};

var shellder = {
    name: "Shellder",
    dex: 90,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shellder_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cloyster = {
    name: "Cloyster",
    dex: 91,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cloyster_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gastly = {
    name: "Gastly",
    dex: 92,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gastly_(Pok%C3%A9mon)",
    image: "//TODO"
};

var haunter = {
    name: "Haunter",
    dex: 93,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Haunter_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gengar = {
    name: "Gengar",
    dex: 94,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gengar_(Pok%C3%A9mon)",
    image: "//TODO"
};

var onix = {
    name: "Onix",
    dex: 95,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Onix_(Pok%C3%A9mon)",
    image: "//TODO"
};

var drowzee = {
    name: "Drowzee",
    dex: 96,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Drowzee_(Pok%C3%A9mon)",
    image: "//TODO"
};

var hypno = {
    name: "Hypno",
    dex: 97,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hypno_(Pok%C3%A9mon)",
    image: "//TODO"
};

var krabby = {
    name: "Krabby",
    dex: 98,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Krabby_(Pok%C3%A9mon)",
    image: "//TODO"
};

var kingler = {
    name: "Kingler",
    dex: 99,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kingler_(Pok%C3%A9mon)",
    image: "//TODO"
};

var voltorb = {
    name: "Voltorb",
    dex: 100,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Voltorb_(Pok%C3%A9mon)",
    image: "//TODO"
};

var electrode = {
    name: "Electrode",
    dex: 101,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Electrode_(Pok%C3%A9mon)",
    image: "//TODO"
};

var exeggcute = {
    name: "Exeggcute",
    dex: 102,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Exeggcute_(Pok%C3%A9mon)",
    image: "//TODO"
};

var exeggutor = {
    name: "Exeggutor",
    dex: 103,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Exeggutor_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cubone = {
    name: "Cubone",
    dex: 104,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cubone_(Pok%C3%A9mon)",
    image: "//TODO"
};

var marowak = {
    name: "Marowak",
    dex: 105,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Marowak_(Pok%C3%A9mon)",
    image: "//TODO"
};

var hitmonlee = {
    name: "Hitmonlee",
    dex: 106,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hitmonlee_(Pok%C3%A9mon)",
    image: "//TODO"
};

var hitmonchan = {
    name: "Hitmonchan",
    dex: 107,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hitmonchan_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lickitung = {
    name: "Lickitung",
    dex: 108,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lickitung_(Pok%C3%A9mon)",
    image: "//TODO"
};

var koffing = {
    name: "Koffing",
    dex: 109,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Koffing_(Pok%C3%A9mon)",
    image: "//TODO"
};

var weezing = {
    name: "Weezing",
    dex: 110,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Weezing_(Pok%C3%A9mon)",
    image: "//TODO"
};

var rhyhorn = {
    name: "Rhyhorn",
    dex: 111,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rhyhorn_(Pok%C3%A9mon)",
    image: "//TODO"
};

var rhydon = {
    name: "Rhydon",
    dex: 112,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rhydon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var chansey = {
    name: "Chansey",
    dex: 113,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chansey_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tangela = {
    name: "Tangela",
    dex: 114,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tangela_(Pok%C3%A9mon)",
    image: "//TODO"
};

var kangaskhan = {
    name: "Kangaskhan",
    dex: 115,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kangaskhan_(Pok%C3%A9mon)",
    image: "//TODO"
};

var horsea = {
    name: "Horsea",
    dex: 116,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Horsea_(Pok%C3%A9mon)",
    image: "//TODO"
};

var seadra = {
    name: "Seadra",
    dex: 117,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Seadra_(Pok%C3%A9mon)",
    image: "//TODO"
};

var goldeen = {
    name: "Goldeen",
    dex: 118,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Goldeen_(Pok%C3%A9mon)",
    image: "//TODO"
};

var seaking = {
    name: "Seaking",
    dex: 119,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Seaking_(Pok%C3%A9mon)",
    image: "//TODO"
};

var staryu = {
    name: "Staryu",
    dex: 120,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Staryu_(Pok%C3%A9mon)",
    image: "//TODO"
};

var starmie = {
    name: "Starmie",
    dex: 121,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Starmie_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mr.mime = {
    name: "Mr. mime",
    dex: 122,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mr. mime_(Pok%C3%A9mon)",
    image: "//TODO"
};

var scyther = {
    name: "Scyther",
    dex: 123,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Scyther_(Pok%C3%A9mon)",
    image: "//TODO"
};

var jynx = {
    name: "Jynx",
    dex: 124,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Jynx_(Pok%C3%A9mon)",
    image: "//TODO"
};

var electabuzz = {
    name: "Electabuzz",
    dex: 125,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Electabuzz_(Pok%C3%A9mon)",
    image: "//TODO"
};

var magmar = {
    name: "Magmar",
    dex: 126,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magmar_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pinsir = {
    name: "Pinsir",
    dex: 127,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pinsir_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tauros = {
    name: "Tauros",
    dex: 128,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tauros_(Pok%C3%A9mon)",
    image: "//TODO"
};

var magikarp = {
    name: "Magikarp",
    dex: 129,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magikarp_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gyarados = {
    name: "Gyarados",
    dex: 130,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gyarados_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lapras = {
    name: "Lapras",
    dex: 131,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lapras_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ditto = {
    name: "Ditto",
    dex: 132,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ditto_(Pok%C3%A9mon)",
    image: "//TODO"
};

var eevee = {
    name: "Eevee",
    dex: 133,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Eevee_(Pok%C3%A9mon)",
    image: "//TODO"
};

var vaporeon = {
    name: "Vaporeon",
    dex: 134,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Vaporeon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var jolteon = {
    name: "Jolteon",
    dex: 135,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Jolteon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var flareon = {
    name: "Flareon",
    dex: 136,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flareon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var porygon = {
    name: "Porygon",
    dex: 137,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Porygon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var omanyte = {
    name: "Omanyte",
    dex: 138,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Omanyte_(Pok%C3%A9mon)",
    image: "//TODO"
};

var omastar = {
    name: "Omastar",
    dex: 139,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Omastar_(Pok%C3%A9mon)",
    image: "//TODO"
};

var kabuto = {
    name: "Kabuto",
    dex: 140,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kabuto_(Pok%C3%A9mon)",
    image: "//TODO"
};

var kabutops = {
    name: "Kabutops",
    dex: 141,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kabutops_(Pok%C3%A9mon)",
    image: "//TODO"
};

var aerodactyl = {
    name: "Aerodactyl",
    dex: 142,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aerodactyl_(Pok%C3%A9mon)",
    image: "//TODO"
};

var snorlax = {
    name: "Snorlax",
    dex: 143,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)",
    image: "//TODO"
};

var articuno = {
    name: "Articuno",
    dex: 144,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Articuno_(Pok%C3%A9mon)",
    image: "//TODO"
};

var zapdos = {
    name: "Zapdos",
    dex: 145,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pok%C3%A9mon)",
    image: "//TODO"
};

var moltres = {
    name: "Moltres",
    dex: 146,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Moltres_(Pok%C3%A9mon)",
    image: "//TODO"
};

var dratini = {
    name: "Dratini",
    dex: 147,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dratini_(Pok%C3%A9mon)",
    image: "//TODO"
};

var dragonair = {
    name: "Dragonair",
    dex: 148,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)",
    image: "//TODO"
};

var dragonite = {
    name: "Dragonite",
    dex: 149,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dragonite_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mewtwo = {
    name: "Mewtwo",
    dex: 150,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mewtwo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mew = {
    name: "Mew",
    dex: 151,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)",
    image: "//TODO"
};

var chikorita = {
    name: "Chikorita",
    dex: 152,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chikorita_(Pok%C3%A9mon)",
    image: "//TODO"
};

var bayleef = {
    name: "Bayleef",
    dex: 153,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bayleef_(Pok%C3%A9mon)",
    image: "//TODO"
};

var meganium = {
    name: "Meganium",
    dex: 154,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Meganium_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cyndaquil = {
    name: "Cyndaquil",
    dex: 155,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cyndaquil_(Pok%C3%A9mon)",
    image: "//TODO"
};

var quilava = {
    name: "Quilava",
    dex: 156,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Quilava_(Pok%C3%A9mon)",
    image: "//TODO"
};

var typhlosion = {
    name: "Typhlosion",
    dex: 157,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pok%C3%A9mon)",
    image: "//TODO"
};

var totodile = {
    name: "Totodile",
    dex: 158,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Totodile_(Pok%C3%A9mon)",
    image: "//TODO"
};

var croconaw = {
    name: "Croconaw",
    dex: 159,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Croconaw_(Pok%C3%A9mon)",
    image: "//TODO"
};

var feraligatr = {
    name: "Feraligatr",
    dex: 160,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Feraligatr_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sentret = {
    name: "Sentret",
    dex: 161,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sentret_(Pok%C3%A9mon)",
    image: "//TODO"
};

var furret = {
    name: "Furret",
    dex: 162,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Furret_(Pok%C3%A9mon)",
    image: "//TODO"
};

var hoothoot = {
    name: "Hoothoot",
    dex: 163,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hoothoot_(Pok%C3%A9mon)",
    image: "//TODO"
};

var noctowl = {
    name: "Noctowl",
    dex: 164,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Noctowl_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ledyba = {
    name: "Ledyba",
    dex: 165,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ledyba_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ledian = {
    name: "Ledian",
    dex: 166,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ledian_(Pok%C3%A9mon)",
    image: "//TODO"
};

var spinarak = {
    name: "Spinarak",
    dex: 167,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spinarak_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ariados = {
    name: "Ariados",
    dex: 168,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ariados_(Pok%C3%A9mon)",
    image: "//TODO"
};

var crobat = {
    name: "Crobat",
    dex: 169,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Crobat_(Pok%C3%A9mon)",
    image: "//TODO"
};

var chinchou = {
    name: "Chinchou",
    dex: 170,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chinchou_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lanturn = {
    name: "Lanturn",
    dex: 171,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lanturn_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pichu = {
    name: "Pichu",
    dex: 172,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pichu_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cleffa = {
    name: "Cleffa",
    dex: 173,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cleffa_(Pok%C3%A9mon)",
    image: "//TODO"
};

var igglybuff = {
    name: "Igglybuff",
    dex: 174,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Igglybuff_(Pok%C3%A9mon)",
    image: "//TODO"
};

var togepi = {
    name: "Togepi",
    dex: 175,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Togepi_(Pok%C3%A9mon)",
    image: "//TODO"
};

var togetic = {
    name: "Togetic",
    dex: 176,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Togetic_(Pok%C3%A9mon)",
    image: "//TODO"
};

var natu = {
    name: "Natu",
    dex: 177,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Natu_(Pok%C3%A9mon)",
    image: "//TODO"
};

var xatu = {
    name: "Xatu",
    dex: 178,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Xatu_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mareep = {
    name: "Mareep",
    dex: 179,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mareep_(Pok%C3%A9mon)",
    image: "//TODO"
};

var flaaffy = {
    name: "Flaaffy",
    dex: 180,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flaaffy_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ampharos = {
    name: "Ampharos",
    dex: 181,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ampharos_(Pok%C3%A9mon)",
    image: "//TODO"
};

var bellossom = {
    name: "Bellossom",
    dex: 182,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bellossom_(Pok%C3%A9mon)",
    image: "//TODO"
};

var marill = {
    name: "Marill",
    dex: 183,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Marill_(Pok%C3%A9mon)",
    image: "//TODO"
};

var azumarill = {
    name: "Azumarill",
    dex: 184,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Azumarill_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sudowoodo = {
    name: "Sudowoodo",
    dex: 185,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sudowoodo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var politoed = {
    name: "Politoed",
    dex: 186,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Politoed_(Pok%C3%A9mon)",
    image: "//TODO"
};

var hoppip = {
    name: "Hoppip",
    dex: 187,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hoppip_(Pok%C3%A9mon)",
    image: "//TODO"
};

var skiploom = {
    name: "Skiploom",
    dex: 188,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Skiploom_(Pok%C3%A9mon)",
    image: "//TODO"
};

var jumpluff = {
    name: "Jumpluff",
    dex: 189,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Jumpluff_(Pok%C3%A9mon)",
    image: "//TODO"
};

var aipom = {
    name: "Aipom",
    dex: 190,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aipom_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sunkern = {
    name: "Sunkern",
    dex: 191,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sunkern_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sunflora = {
    name: "Sunflora",
    dex: 192,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sunflora_(Pok%C3%A9mon)",
    image: "//TODO"
};

var yanma = {
    name: "Yanma",
    dex: 193,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Yanma_(Pok%C3%A9mon)",
    image: "//TODO"
};

var wooper = {
    name: "Wooper",
    dex: 194,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wooper_(Pok%C3%A9mon)",
    image: "//TODO"
};

var quagsire = {
    name: "Quagsire",
    dex: 195,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Quagsire_(Pok%C3%A9mon)",
    image: "//TODO"
};

var espeon = {
    name: "Espeon",
    dex: 196,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Espeon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var umbreon = {
    name: "Umbreon",
    dex: 197,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Umbreon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var murkrow = {
    name: "Murkrow",
    dex: 198,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Murkrow_(Pok%C3%A9mon)",
    image: "//TODO"
};

var slowking = {
    name: "Slowking",
    dex: 199,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Slowking_(Pok%C3%A9mon)",
    image: "//TODO"
};

var misdreavus = {
    name: "Misdreavus",
    dex: 200,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Misdreavus_(Pok%C3%A9mon)",
    image: "//TODO"
};

var unown = {
    name: "Unown",
    dex: 201,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Unown_(Pok%C3%A9mon)",
    image: "//TODO"
};

var wobbuffet = {
    name: "Wobbuffet",
    dex: 202,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wobbuffet_(Pok%C3%A9mon)",
    image: "//TODO"
};

var girafarig = {
    name: "Girafarig",
    dex: 203,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Girafarig_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pineco = {
    name: "Pineco",
    dex: 204,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pineco_(Pok%C3%A9mon)",
    image: "//TODO"
};

var forretress = {
    name: "Forretress",
    dex: 205,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Forretress_(Pok%C3%A9mon)",
    image: "//TODO"
};

var dunsparce = {
    name: "Dunsparce",
    dex: 206,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dunsparce_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gligar = {
    name: "Gligar",
    dex: 207,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gligar_(Pok%C3%A9mon)",
    image: "//TODO"
};

var steelix = {
    name: "Steelix",
    dex: 208,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Steelix_(Pok%C3%A9mon)",
    image: "//TODO"
};

var snubbull = {
    name: "Snubbull",
    dex: 209,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Snubbull_(Pok%C3%A9mon)",
    image: "//TODO"
};

var granbull = {
    name: "Granbull",
    dex: 210,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Granbull_(Pok%C3%A9mon)",
    image: "//TODO"
};

var qwilfish = {
    name: "Qwilfish",
    dex: 211,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Qwilfish_(Pok%C3%A9mon)",
    image: "//TODO"
};

var scizor = {
    name: "Scizor",
    dex: 212,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Scizor_(Pok%C3%A9mon)",
    image: "//TODO"
};

var shuckle = {
    name: "Shuckle",
    dex: 213,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shuckle_(Pok%C3%A9mon)",
    image: "//TODO"
};

var heracross = {
    name: "Heracross",
    dex: 214,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heracross_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sneasel = {
    name: "Sneasel",
    dex: 215,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sneasel_(Pok%C3%A9mon)",
    image: "//TODO"
};

var teddiursa = {
    name: "Teddiursa",
    dex: 216,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Teddiursa_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ursaring = {
    name: "Ursaring",
    dex: 217,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ursaring_(Pok%C3%A9mon)",
    image: "//TODO"
};

var slugma = {
    name: "Slugma",
    dex: 218,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Slugma_(Pok%C3%A9mon)",
    image: "//TODO"
};

var magcargo = {
    name: "Magcargo",
    dex: 219,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magcargo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var swinub = {
    name: "Swinub",
    dex: 220,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Swinub_(Pok%C3%A9mon)",
    image: "//TODO"
};

var piloswine = {
    name: "Piloswine",
    dex: 221,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Piloswine_(Pok%C3%A9mon)",
    image: "//TODO"
};

var corsola = {
    name: "Corsola",
    dex: 222,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Corsola_(Pok%C3%A9mon)",
    image: "//TODO"
};

var remoraid = {
    name: "Remoraid",
    dex: 223,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Remoraid_(Pok%C3%A9mon)",
    image: "//TODO"
};

var octillery = {
    name: "Octillery",
    dex: 224,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Octillery_(Pok%C3%A9mon)",
    image: "//TODO"
};

var delibird = {
    name: "Delibird",
    dex: 225,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Delibird_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mantine = {
    name: "Mantine",
    dex: 226,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mantine_(Pok%C3%A9mon)",
    image: "//TODO"
};

var skarmory = {
    name: "Skarmory",
    dex: 227,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Skarmory_(Pok%C3%A9mon)",
    image: "//TODO"
};

var houndour = {
    name: "Houndour",
    dex: 228,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Houndour_(Pok%C3%A9mon)",
    image: "//TODO"
};

var houndoom = {
    name: "Houndoom",
    dex: 229,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Houndoom_(Pok%C3%A9mon)",
    image: "//TODO"
};

var kingdra = {
    name: "Kingdra",
    dex: 230,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kingdra_(Pok%C3%A9mon)",
    image: "//TODO"
};

var phanpy = {
    name: "Phanpy",
    dex: 231,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Phanpy_(Pok%C3%A9mon)",
    image: "//TODO"
};

var donphan = {
    name: "Donphan",
    dex: 232,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Donphan_(Pok%C3%A9mon)",
    image: "//TODO"
};

var porygon2 = {
    name: "Porygon2",
    dex: 233,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Porygon2_(Pok%C3%A9mon)",
    image: "//TODO"
};

var stantler = {
    name: "Stantler",
    dex: 234,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Stantler_(Pok%C3%A9mon)",
    image: "//TODO"
};

var smeargle = {
    name: "Smeargle",
    dex: 235,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Smeargle_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tyrogue = {
    name: "Tyrogue",
    dex: 236,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tyrogue_(Pok%C3%A9mon)",
    image: "//TODO"
};

var hitmontop = {
    name: "Hitmontop",
    dex: 237,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hitmontop_(Pok%C3%A9mon)",
    image: "//TODO"
};

var smoochum = {
    name: "Smoochum",
    dex: 238,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Smoochum_(Pok%C3%A9mon)",
    image: "//TODO"
};

var elekid = {
    name: "Elekid",
    dex: 239,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Elekid_(Pok%C3%A9mon)",
    image: "//TODO"
};

var magby = {
    name: "Magby",
    dex: 240,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magby_(Pok%C3%A9mon)",
    image: "//TODO"
};

var miltank = {
    name: "Miltank",
    dex: 241,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Miltank_(Pok%C3%A9mon)",
    image: "//TODO"
};

var blissey = {
    name: "Blissey",
    dex: 242,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blissey_(Pok%C3%A9mon)",
    image: "//TODO"
};

var raikou = {
    name: "Raikou",
    dex: 243,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Raikou_(Pok%C3%A9mon)",
    image: "//TODO"
};

var entei = {
    name: "Entei",
    dex: 244,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Entei_(Pok%C3%A9mon)",
    image: "//TODO"
};

var suicune = {
    name: "Suicune",
    dex: 245,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Suicune_(Pok%C3%A9mon)",
    image: "//TODO"
};

var larvitar = {
    name: "Larvitar",
    dex: 246,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Larvitar_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pupitar = {
    name: "Pupitar",
    dex: 247,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pupitar_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tyranitar = {
    name: "Tyranitar",
    dex: 248,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tyranitar_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lugia = {
    name: "Lugia",
    dex: 249,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lugia_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ho_oh = {
    name: "Ho-oh",
    dex: 250,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ho-oh_(Pok%C3%A9mon)",
    image: "//TODO"
};

var celebi = {
    name: "Celebi",
    dex: 251,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Celebi_(Pok%C3%A9mon)",
    image: "//TODO"
};

var treecko = {
    name: "Treecko",
    dex: 252,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Treecko_(Pok%C3%A9mon)",
    image: "//TODO"
};

var grovyle = {
    name: "Grovyle",
    dex: 253,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Grovyle_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sceptile = {
    name: "Sceptile",
    dex: 254,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sceptile_(Pok%C3%A9mon)",
    image: "//TODO"
};

var torchic = {
    name: "Torchic",
    dex: 255,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Torchic_(Pok%C3%A9mon)",
    image: "//TODO"
};

var combusken = {
    name: "Combusken",
    dex: 256,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Combusken_(Pok%C3%A9mon)",
    image: "//TODO"
};

var blaziken = {
    name: "Blaziken",
    dex: 257,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blaziken_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mudkip = {
    name: "Mudkip",
    dex: 258,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mudkip_(Pok%C3%A9mon)",
    image: "//TODO"
};

var marshtomp = {
    name: "Marshtomp",
    dex: 259,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Marshtomp_(Pok%C3%A9mon)",
    image: "//TODO"
};

var swampert = {
    name: "Swampert",
    dex: 260,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Swampert_(Pok%C3%A9mon)",
    image: "//TODO"
};

var poochyena = {
    name: "Poochyena",
    dex: 261,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Poochyena_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mightyena = {
    name: "Mightyena",
    dex: 262,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mightyena_(Pok%C3%A9mon)",
    image: "//TODO"
};

var zigzagoon = {
    name: "Zigzagoon",
    dex: 263,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Zigzagoon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var linoone = {
    name: "Linoone",
    dex: 264,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Linoone_(Pok%C3%A9mon)",
    image: "//TODO"
};

var wurmple = {
    name: "Wurmple",
    dex: 265,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wurmple_(Pok%C3%A9mon)",
    image: "//TODO"
};

var silcoon = {
    name: "Silcoon",
    dex: 266,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Silcoon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var beautifly = {
    name: "Beautifly",
    dex: 267,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Beautifly_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cascoon = {
    name: "Cascoon",
    dex: 268,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cascoon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var dustox = {
    name: "Dustox",
    dex: 269,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dustox_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lotad = {
    name: "Lotad",
    dex: 270,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lotad_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lombre = {
    name: "Lombre",
    dex: 271,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lombre_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ludicolo = {
    name: "Ludicolo",
    dex: 272,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ludicolo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var seedot = {
    name: "Seedot",
    dex: 273,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Seedot_(Pok%C3%A9mon)",
    image: "//TODO"
};

var nuzleaf = {
    name: "Nuzleaf",
    dex: 274,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nuzleaf_(Pok%C3%A9mon)",
    image: "//TODO"
};

var shiftry = {
    name: "Shiftry",
    dex: 275,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shiftry_(Pok%C3%A9mon)",
    image: "//TODO"
};

var taillow = {
    name: "Taillow",
    dex: 276,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Taillow_(Pok%C3%A9mon)",
    image: "//TODO"
};

var swellow = {
    name: "Swellow",
    dex: 277,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Swellow_(Pok%C3%A9mon)",
    image: "//TODO"
};

var wingull = {
    name: "Wingull",
    dex: 278,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wingull_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pelipper = {
    name: "Pelipper",
    dex: 279,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pelipper_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ralts = {
    name: "Ralts",
    dex: 280,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ralts_(Pok%C3%A9mon)",
    image: "//TODO"
};

var kirlia = {
    name: "Kirlia",
    dex: 281,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kirlia_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gardevoir = {
    name: "Gardevoir",
    dex: 282,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gardevoir_(Pok%C3%A9mon)",
    image: "//TODO"
};

var surskit = {
    name: "Surskit",
    dex: 283,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Surskit_(Pok%C3%A9mon)",
    image: "//TODO"
};

var masquerain = {
    name: "Masquerain",
    dex: 284,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Masquerain_(Pok%C3%A9mon)",
    image: "//TODO"
};

var shroomish = {
    name: "Shroomish",
    dex: 285,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shroomish_(Pok%C3%A9mon)",
    image: "//TODO"
};

var breloom = {
    name: "Breloom",
    dex: 286,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Breloom_(Pok%C3%A9mon)",
    image: "//TODO"
};

var slakoth = {
    name: "Slakoth",
    dex: 287,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Slakoth_(Pok%C3%A9mon)",
    image: "//TODO"
};

var vigoroth = {
    name: "Vigoroth",
    dex: 288,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Vigoroth_(Pok%C3%A9mon)",
    image: "//TODO"
};

var slaking = {
    name: "Slaking",
    dex: 289,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Slaking_(Pok%C3%A9mon)",
    image: "//TODO"
};

var nincada = {
    name: "Nincada",
    dex: 290,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nincada_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ninjask = {
    name: "Ninjask",
    dex: 291,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ninjask_(Pok%C3%A9mon)",
    image: "//TODO"
};

var shedinja = {
    name: "Shedinja",
    dex: 292,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pok%C3%A9mon)",
    image: "//TODO"
};

var whismur = {
    name: "Whismur",
    dex: 293,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Whismur_(Pok%C3%A9mon)",
    image: "//TODO"
};

var loudred = {
    name: "Loudred",
    dex: 294,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Loudred_(Pok%C3%A9mon)",
    image: "//TODO"
};

var exploud = {
    name: "Exploud",
    dex: 295,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Exploud_(Pok%C3%A9mon)",
    image: "//TODO"
};

var makuhita = {
    name: "Makuhita",
    dex: 296,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Makuhita_(Pok%C3%A9mon)",
    image: "//TODO"
};

var hariyama = {
    name: "Hariyama",
    dex: 297,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hariyama_(Pok%C3%A9mon)",
    image: "//TODO"
};

var azurill = {
    name: "Azurill",
    dex: 298,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Azurill_(Pok%C3%A9mon)",
    image: "//TODO"
};

var nosepass = {
    name: "Nosepass",
    dex: 299,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nosepass_(Pok%C3%A9mon)",
    image: "//TODO"
};

var skitty = {
    name: "Skitty",
    dex: 300,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Skitty_(Pok%C3%A9mon)",
    image: "//TODO"
};

var delcatty = {
    name: "Delcatty",
    dex: 301,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Delcatty_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sableye = {
    name: "Sableye",
    dex: 302,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sableye_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mawile = {
    name: "Mawile",
    dex: 303,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mawile_(Pok%C3%A9mon)",
    image: "//TODO"
};

var aron = {
    name: "Aron",
    dex: 304,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aron_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lairon = {
    name: "Lairon",
    dex: 305,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lairon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var aggron = {
    name: "Aggron",
    dex: 306,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aggron_(Pok%C3%A9mon)",
    image: "//TODO"
};

var meditite = {
    name: "Meditite",
    dex: 307,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Meditite_(Pok%C3%A9mon)",
    image: "//TODO"
};

var medicham = {
    name: "Medicham",
    dex: 308,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Medicham_(Pok%C3%A9mon)",
    image: "//TODO"
};

var electrike = {
    name: "Electrike",
    dex: 309,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Electrike_(Pok%C3%A9mon)",
    image: "//TODO"
};

var manectric = {
    name: "Manectric",
    dex: 310,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Manectric_(Pok%C3%A9mon)",
    image: "//TODO"
};

var plusle = {
    name: "Plusle",
    dex: 311,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Plusle_(Pok%C3%A9mon)",
    image: "//TODO"
};

var minun = {
    name: "Minun",
    dex: 312,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Minun_(Pok%C3%A9mon)",
    image: "//TODO"
};

var volbeat = {
    name: "Volbeat",
    dex: 313,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Volbeat_(Pok%C3%A9mon)",
    image: "//TODO"
};

var illumise = {
    name: "Illumise",
    dex: 314,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Illumise_(Pok%C3%A9mon)",
    image: "//TODO"
};

var roselia = {
    name: "Roselia",
    dex: 315,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Roselia_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gulpin = {
    name: "Gulpin",
    dex: 316,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gulpin_(Pok%C3%A9mon)",
    image: "//TODO"
};

var swalot = {
    name: "Swalot",
    dex: 317,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Swalot_(Pok%C3%A9mon)",
    image: "//TODO"
};

var carvanha = {
    name: "Carvanha",
    dex: 318,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Carvanha_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sharpedo = {
    name: "Sharpedo",
    dex: 319,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sharpedo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var wailmer = {
    name: "Wailmer",
    dex: 320,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wailmer_(Pok%C3%A9mon)",
    image: "//TODO"
};

var wailord = {
    name: "Wailord",
    dex: 321,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wailord_(Pok%C3%A9mon)",
    image: "//TODO"
};

var numel = {
    name: "Numel",
    dex: 322,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Numel_(Pok%C3%A9mon)",
    image: "//TODO"
};

var camerupt = {
    name: "Camerupt",
    dex: 323,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Camerupt_(Pok%C3%A9mon)",
    image: "//TODO"
};

var torkoal = {
    name: "Torkoal",
    dex: 324,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Torkoal_(Pok%C3%A9mon)",
    image: "//TODO"
};

var spoink = {
    name: "Spoink",
    dex: 325,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spoink_(Pok%C3%A9mon)",
    image: "//TODO"
};

var grumpig = {
    name: "Grumpig",
    dex: 326,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Grumpig_(Pok%C3%A9mon)",
    image: "//TODO"
};

var spinda = {
    name: "Spinda",
    dex: 327,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spinda_(Pok%C3%A9mon)",
    image: "//TODO"
};

var trapinch = {
    name: "Trapinch",
    dex: 328,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Trapinch_(Pok%C3%A9mon)",
    image: "//TODO"
};

var vibrava = {
    name: "Vibrava",
    dex: 329,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Vibrava_(Pok%C3%A9mon)",
    image: "//TODO"
};

var flygon = {
    name: "Flygon",
    dex: 330,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flygon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cacnea = {
    name: "Cacnea",
    dex: 331,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cacnea_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cacturne = {
    name: "Cacturne",
    dex: 332,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cacturne_(Pok%C3%A9mon)",
    image: "//TODO"
};

var swablu = {
    name: "Swablu",
    dex: 333,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Swablu_(Pok%C3%A9mon)",
    image: "//TODO"
};

var altaria = {
    name: "Altaria",
    dex: 334,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Altaria_(Pok%C3%A9mon)",
    image: "//TODO"
};

var zangoose = {
    name: "Zangoose",
    dex: 335,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Zangoose_(Pok%C3%A9mon)",
    image: "//TODO"
};

var seviper = {
    name: "Seviper",
    dex: 336,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Seviper_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lunatone = {
    name: "Lunatone",
    dex: 337,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lunatone_(Pok%C3%A9mon)",
    image: "//TODO"
};

var solrock = {
    name: "Solrock",
    dex: 338,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Solrock_(Pok%C3%A9mon)",
    image: "//TODO"
};

var barboach = {
    name: "Barboach",
    dex: 339,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Barboach_(Pok%C3%A9mon)",
    image: "//TODO"
};

var whiscash = {
    name: "Whiscash",
    dex: 340,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Whiscash_(Pok%C3%A9mon)",
    image: "//TODO"
};

var corphish = {
    name: "Corphish",
    dex: 341,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Corphish_(Pok%C3%A9mon)",
    image: "//TODO"
};

var crawdaunt = {
    name: "Crawdaunt",
    dex: 342,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Crawdaunt_(Pok%C3%A9mon)",
    image: "//TODO"
};

var baltoy = {
    name: "Baltoy",
    dex: 343,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Baltoy_(Pok%C3%A9mon)",
    image: "//TODO"
};

var claydol = {
    name: "Claydol",
    dex: 344,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Claydol_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lileep = {
    name: "Lileep",
    dex: 345,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lileep_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cradily = {
    name: "Cradily",
    dex: 346,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cradily_(Pok%C3%A9mon)",
    image: "//TODO"
};

var anorith = {
    name: "Anorith",
    dex: 347,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Anorith_(Pok%C3%A9mon)",
    image: "//TODO"
};

var armaldo = {
    name: "Armaldo",
    dex: 348,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Armaldo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var feebas = {
    name: "Feebas",
    dex: 349,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Feebas_(Pok%C3%A9mon)",
    image: "//TODO"
};

var milotic = {
    name: "Milotic",
    dex: 350,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Milotic_(Pok%C3%A9mon)",
    image: "//TODO"
};

var castform = {
    name: "Castform",
    dex: 351,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Castform_(Pok%C3%A9mon)",
    image: "//TODO"
};

var kecleon = {
    name: "Kecleon",
    dex: 352,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kecleon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var shuppet = {
    name: "Shuppet",
    dex: 353,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shuppet_(Pok%C3%A9mon)",
    image: "//TODO"
};

var banette = {
    name: "Banette",
    dex: 354,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Banette_(Pok%C3%A9mon)",
    image: "//TODO"
};

var duskull = {
    name: "Duskull",
    dex: 355,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Duskull_(Pok%C3%A9mon)",
    image: "//TODO"
};

var dusclops = {
    name: "Dusclops",
    dex: 356,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dusclops_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tropius = {
    name: "Tropius",
    dex: 357,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tropius_(Pok%C3%A9mon)",
    image: "//TODO"
};

var chimecho = {
    name: "Chimecho",
    dex: 358,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chimecho_(Pok%C3%A9mon)",
    image: "//TODO"
};

var absol = {
    name: "Absol",
    dex: 359,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Absol_(Pok%C3%A9mon)",
    image: "//TODO"
};

var wynaut = {
    name: "Wynaut",
    dex: 360,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wynaut_(Pok%C3%A9mon)",
    image: "//TODO"
};

var snorunt = {
    name: "Snorunt",
    dex: 361,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Snorunt_(Pok%C3%A9mon)",
    image: "//TODO"
};

var glalie = {
    name: "Glalie",
    dex: 362,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Glalie_(Pok%C3%A9mon)",
    image: "//TODO"
};

var spheal = {
    name: "Spheal",
    dex: 363,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spheal_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sealeo = {
    name: "Sealeo",
    dex: 364,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sealeo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var walrein = {
    name: "Walrein",
    dex: 365,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Walrein_(Pok%C3%A9mon)",
    image: "//TODO"
};

var clamperl = {
    name: "Clamperl",
    dex: 366,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Clamperl_(Pok%C3%A9mon)",
    image: "//TODO"
};

var huntail = {
    name: "Huntail",
    dex: 367,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Huntail_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gorebyss = {
    name: "Gorebyss",
    dex: 368,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gorebyss_(Pok%C3%A9mon)",
    image: "//TODO"
};

var relicanth = {
    name: "Relicanth",
    dex: 369,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Relicanth_(Pok%C3%A9mon)",
    image: "//TODO"
};

var luvdisc = {
    name: "Luvdisc",
    dex: 370,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Luvdisc_(Pok%C3%A9mon)",
    image: "//TODO"
};

var bagon = {
    name: "Bagon",
    dex: 371,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bagon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var shelgon = {
    name: "Shelgon",
    dex: 372,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shelgon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var salamence = {
    name: "Salamence",
    dex: 373,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Salamence_(Pok%C3%A9mon)",
    image: "//TODO"
};

var beldum = {
    name: "Beldum",
    dex: 374,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Beldum_(Pok%C3%A9mon)",
    image: "//TODO"
};

var metang = {
    name: "Metang",
    dex: 375,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Metang_(Pok%C3%A9mon)",
    image: "//TODO"
};

var metagross = {
    name: "Metagross",
    dex: 376,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Metagross_(Pok%C3%A9mon)",
    image: "//TODO"
};

var regirock = {
    name: "Regirock",
    dex: 377,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Regirock_(Pok%C3%A9mon)",
    image: "//TODO"
};

var regice = {
    name: "Regice",
    dex: 378,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Regice_(Pok%C3%A9mon)",
    image: "//TODO"
};

var registeel = {
    name: "Registeel",
    dex: 379,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Registeel_(Pok%C3%A9mon)",
    image: "//TODO"
};

var latias = {
    name: "Latias",
    dex: 380,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Latias_(Pok%C3%A9mon)",
    image: "//TODO"
};

var latios = {
    name: "Latios",
    dex: 381,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Latios_(Pok%C3%A9mon)",
    image: "//TODO"
};

var kyogre = {
    name: "Kyogre",
    dex: 382,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kyogre_(Pok%C3%A9mon)",
    image: "//TODO"
};

var groudon = {
    name: "Groudon",
    dex: 383,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Groudon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var rayquaza = {
    name: "Rayquaza",
    dex: 384,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rayquaza_(Pok%C3%A9mon)",
    image: "//TODO"
};

var jirachi = {
    name: "Jirachi",
    dex: 385,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Jirachi_(Pok%C3%A9mon)",
    image: "//TODO"
};

var deoxys = {
    name: "Deoxys",
    dex: 386,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)",
    image: "//TODO"
};

var turtwig = {
    name: "Turtwig",
    dex: 387,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Turtwig_(Pok%C3%A9mon)",
    image: "//TODO"
};

var grotle = {
    name: "Grotle",
    dex: 388,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Grotle_(Pok%C3%A9mon)",
    image: "//TODO"
};

var torterra = {
    name: "Torterra",
    dex: 389,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Torterra_(Pok%C3%A9mon)",
    image: "//TODO"
};

var chimchar = {
    name: "Chimchar",
    dex: 390,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chimchar_(Pok%C3%A9mon)",
    image: "//TODO"
};

var monferno = {
    name: "Monferno",
    dex: 391,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Monferno_(Pok%C3%A9mon)",
    image: "//TODO"
};

var infernape = {
    name: "Infernape",
    dex: 392,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Infernape_(Pok%C3%A9mon)",
    image: "//TODO"
};

var piplup = {
    name: "Piplup",
    dex: 393,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Piplup_(Pok%C3%A9mon)",
    image: "//TODO"
};

var prinplup = {
    name: "Prinplup",
    dex: 394,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Prinplup_(Pok%C3%A9mon)",
    image: "//TODO"
};

var empoleon = {
    name: "Empoleon",
    dex: 395,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Empoleon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var starly = {
    name: "Starly",
    dex: 396,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Starly_(Pok%C3%A9mon)",
    image: "//TODO"
};

var staravia = {
    name: "Staravia",
    dex: 397,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Staravia_(Pok%C3%A9mon)",
    image: "//TODO"
};

var staraptor = {
    name: "Staraptor",
    dex: 398,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Staraptor_(Pok%C3%A9mon)",
    image: "//TODO"
};

var bidoof = {
    name: "Bidoof",
    dex: 399,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bidoof_(Pok%C3%A9mon)",
    image: "//TODO"
};

var bibarel = {
    name: "Bibarel",
    dex: 400,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bibarel_(Pok%C3%A9mon)",
    image: "//TODO"
};

var kricketot = {
    name: "Kricketot",
    dex: 401,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kricketot_(Pok%C3%A9mon)",
    image: "//TODO"
};

var kricketune = {
    name: "Kricketune",
    dex: 402,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kricketune_(Pok%C3%A9mon)",
    image: "//TODO"
};

var shinx = {
    name: "Shinx",
    dex: 403,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shinx_(Pok%C3%A9mon)",
    image: "//TODO"
};

var luxio = {
    name: "Luxio",
    dex: 404,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Luxio_(Pok%C3%A9mon)",
    image: "//TODO"
};

var luxray = {
    name: "Luxray",
    dex: 405,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Luxray_(Pok%C3%A9mon)",
    image: "//TODO"
};

var budew = {
    name: "Budew",
    dex: 406,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Budew_(Pok%C3%A9mon)",
    image: "//TODO"
};

var roserade = {
    name: "Roserade",
    dex: 407,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Roserade_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cranidos = {
    name: "Cranidos",
    dex: 408,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cranidos_(Pok%C3%A9mon)",
    image: "//TODO"
};

var rampardos = {
    name: "Rampardos",
    dex: 409,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rampardos_(Pok%C3%A9mon)",
    image: "//TODO"
};

var shieldon = {
    name: "Shieldon",
    dex: 410,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shieldon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var bastiodon = {
    name: "Bastiodon",
    dex: 411,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bastiodon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var burmy = {
    name: "Burmy",
    dex: 412,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Burmy_(Pok%C3%A9mon)",
    image: "//TODO"
};

var wormadam = {
    name: "Wormadam",
    dex: 413,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wormadam_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mothim = {
    name: "Mothim",
    dex: 414,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mothim_(Pok%C3%A9mon)",
    image: "//TODO"
};

var combee = {
    name: "Combee",
    dex: 415,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Combee_(Pok%C3%A9mon)",
    image: "//TODO"
};

var vespiquen = {
    name: "Vespiquen",
    dex: 416,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Vespiquen_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pachirisu = {
    name: "Pachirisu",
    dex: 417,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pachirisu_(Pok%C3%A9mon)",
    image: "//TODO"
};

var buizel = {
    name: "Buizel",
    dex: 418,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Buizel_(Pok%C3%A9mon)",
    image: "//TODO"
};

var floatzel = {
    name: "Floatzel",
    dex: 419,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Floatzel_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cherubi = {
    name: "Cherubi",
    dex: 420,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cherubi_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cherrim = {
    name: "Cherrim",
    dex: 421,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cherrim_(Pok%C3%A9mon)",
    image: "//TODO"
};

var shellos = {
    name: "Shellos",
    dex: 422,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shellos_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gastrodon = {
    name: "Gastrodon",
    dex: 423,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gastrodon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ambipom = {
    name: "Ambipom",
    dex: 424,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ambipom_(Pok%C3%A9mon)",
    image: "//TODO"
};

var drifloon = {
    name: "Drifloon",
    dex: 425,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Drifloon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var drifblim = {
    name: "Drifblim",
    dex: 426,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Drifblim_(Pok%C3%A9mon)",
    image: "//TODO"
};

var buneary = {
    name: "Buneary",
    dex: 427,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Buneary_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lopunny = {
    name: "Lopunny",
    dex: 428,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lopunny_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mismagius = {
    name: "Mismagius",
    dex: 429,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mismagius_(Pok%C3%A9mon)",
    image: "//TODO"
};

var honchkrow = {
    name: "Honchkrow",
    dex: 430,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Honchkrow_(Pok%C3%A9mon)",
    image: "//TODO"
};

var glameow = {
    name: "Glameow",
    dex: 431,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Glameow_(Pok%C3%A9mon)",
    image: "//TODO"
};

var purugly = {
    name: "Purugly",
    dex: 432,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Purugly_(Pok%C3%A9mon)",
    image: "//TODO"
};

var chingling = {
    name: "Chingling",
    dex: 433,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chingling_(Pok%C3%A9mon)",
    image: "//TODO"
};

var stunky = {
    name: "Stunky",
    dex: 434,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Stunky_(Pok%C3%A9mon)",
    image: "//TODO"
};

var skuntank = {
    name: "Skuntank",
    dex: 435,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Skuntank_(Pok%C3%A9mon)",
    image: "//TODO"
};

var bronzor = {
    name: "Bronzor",
    dex: 436,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bronzor_(Pok%C3%A9mon)",
    image: "//TODO"
};

var bronzong = {
    name: "Bronzong",
    dex: 437,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bronzong_(Pok%C3%A9mon)",
    image: "//TODO"
};

var bonsly = {
    name: "Bonsly",
    dex: 438,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bonsly_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mime jr. = {
    name: "Mime jr.",
    dex: 439,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mime jr._(Pok%C3%A9mon)",
    image: "//TODO"
};

var happiny = {
    name: "Happiny",
    dex: 440,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Happiny_(Pok%C3%A9mon)",
    image: "//TODO"
};

var chatot = {
    name: "Chatot",
    dex: 441,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chatot_(Pok%C3%A9mon)",
    image: "//TODO"
};

var spiritomb = {
    name: "Spiritomb",
    dex: 442,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spiritomb_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gible = {
    name: "Gible",
    dex: 443,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gible_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gabite = {
    name: "Gabite",
    dex: 444,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gabite_(Pok%C3%A9mon)",
    image: "//TODO"
};

var garchomp = {
    name: "Garchomp",
    dex: 445,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Garchomp_(Pok%C3%A9mon)",
    image: "//TODO"
};

var munchlax = {
    name: "Munchlax",
    dex: 446,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Munchlax_(Pok%C3%A9mon)",
    image: "//TODO"
};

var riolu = {
    name: "Riolu",
    dex: 447,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Riolu_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lucario = {
    name: "Lucario",
    dex: 448,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lucario_(Pok%C3%A9mon)",
    image: "//TODO"
};

var hippopotas = {
    name: "Hippopotas",
    dex: 449,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hippopotas_(Pok%C3%A9mon)",
    image: "//TODO"
};

var hippowdon = {
    name: "Hippowdon",
    dex: 450,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hippowdon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var skorupi = {
    name: "Skorupi",
    dex: 451,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Skorupi_(Pok%C3%A9mon)",
    image: "//TODO"
};

var drapion = {
    name: "Drapion",
    dex: 452,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Drapion_(Pok%C3%A9mon)",
    image: "//TODO"
};

var croagunk = {
    name: "Croagunk",
    dex: 453,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Croagunk_(Pok%C3%A9mon)",
    image: "//TODO"
};

var toxicroak = {
    name: "Toxicroak",
    dex: 454,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Toxicroak_(Pok%C3%A9mon)",
    image: "//TODO"
};

var carnivine = {
    name: "Carnivine",
    dex: 455,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Carnivine_(Pok%C3%A9mon)",
    image: "//TODO"
};

var finneon = {
    name: "Finneon",
    dex: 456,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Finneon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lumineon = {
    name: "Lumineon",
    dex: 457,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lumineon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mantyke = {
    name: "Mantyke",
    dex: 458,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mantyke_(Pok%C3%A9mon)",
    image: "//TODO"
};

var snover = {
    name: "Snover",
    dex: 459,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Snover_(Pok%C3%A9mon)",
    image: "//TODO"
};

var abomasnow = {
    name: "Abomasnow",
    dex: 460,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Abomasnow_(Pok%C3%A9mon)",
    image: "//TODO"
};

var weavile = {
    name: "Weavile",
    dex: 461,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Weavile_(Pok%C3%A9mon)",
    image: "//TODO"
};

var magnezone = {
    name: "Magnezone",
    dex: 462,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magnezone_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lickilicky = {
    name: "Lickilicky",
    dex: 463,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lickilicky_(Pok%C3%A9mon)",
    image: "//TODO"
};

var rhyperior = {
    name: "Rhyperior",
    dex: 464,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rhyperior_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tangrowth = {
    name: "Tangrowth",
    dex: 465,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tangrowth_(Pok%C3%A9mon)",
    image: "//TODO"
};

var electivire = {
    name: "Electivire",
    dex: 466,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Electivire_(Pok%C3%A9mon)",
    image: "//TODO"
};

var magmortar = {
    name: "Magmortar",
    dex: 467,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magmortar_(Pok%C3%A9mon)",
    image: "//TODO"
};

var togekiss = {
    name: "Togekiss",
    dex: 468,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Togekiss_(Pok%C3%A9mon)",
    image: "//TODO"
};

var yanmega = {
    name: "Yanmega",
    dex: 469,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Yanmega_(Pok%C3%A9mon)",
    image: "//TODO"
};

var leafeon = {
    name: "Leafeon",
    dex: 470,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Leafeon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var glaceon = {
    name: "Glaceon",
    dex: 471,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Glaceon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gliscor = {
    name: "Gliscor",
    dex: 472,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gliscor_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mamoswine = {
    name: "Mamoswine",
    dex: 473,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mamoswine_(Pok%C3%A9mon)",
    image: "//TODO"
};

var porygon - z = {
    name: "Porygon-z",
    dex: 474,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Porygon-z_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gallade = {
    name: "Gallade",
    dex: 475,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gallade_(Pok%C3%A9mon)",
    image: "//TODO"
};

var probopass = {
    name: "Probopass",
    dex: 476,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Probopass_(Pok%C3%A9mon)",
    image: "//TODO"
};

var dusknoir = {
    name: "Dusknoir",
    dex: 477,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dusknoir_(Pok%C3%A9mon)",
    image: "//TODO"
};

var froslass = {
    name: "Froslass",
    dex: 478,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Froslass_(Pok%C3%A9mon)",
    image: "//TODO"
};

var rotom = {
    name: "Rotom",
    dex: 479,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rotom_(Pok%C3%A9mon)",
    image: "//TODO"
};

var uxie = {
    name: "Uxie",
    dex: 480,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Uxie_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mesprit = {
    name: "Mesprit",
    dex: 481,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mesprit_(Pok%C3%A9mon)",
    image: "//TODO"
};

var azelf = {
    name: "Azelf",
    dex: 482,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Azelf_(Pok%C3%A9mon)",
    image: "//TODO"
};

var dialga = {
    name: "Dialga",
    dex: 483,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dialga_(Pok%C3%A9mon)",
    image: "//TODO"
};

var palkia = {
    name: "Palkia",
    dex: 484,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Palkia_(Pok%C3%A9mon)",
    image: "//TODO"
};

var heatran = {
    name: "Heatran",
    dex: 485,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heatran_(Pok%C3%A9mon)",
    image: "//TODO"
};

var regigigas = {
    name: "Regigigas",
    dex: 486,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Regigigas_(Pok%C3%A9mon)",
    image: "//TODO"
};

var giratina = {
    name: "Giratina",
    dex: 487,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Giratina_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cresselia = {
    name: "Cresselia",
    dex: 488,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cresselia_(Pok%C3%A9mon)",
    image: "//TODO"
};

var phione = {
    name: "Phione",
    dex: 489,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Phione_(Pok%C3%A9mon)",
    image: "//TODO"
};

var manaphy = {
    name: "Manaphy",
    dex: 490,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Manaphy_(Pok%C3%A9mon)",
    image: "//TODO"
};

var darkrai = {
    name: "Darkrai",
    dex: 491,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Darkrai_(Pok%C3%A9mon)",
    image: "//TODO"
};

var shaymin = {
    name: "Shaymin",
    dex: 492,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shaymin_(Pok%C3%A9mon)",
    image: "//TODO"
};

var arceus = {
    name: "Arceus",
    dex: 493,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Arceus_(Pok%C3%A9mon)",
    image: "//TODO"
};

var victini = {
    name: "Victini",
    dex: 494,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Victini_(Pok%C3%A9mon)",
    image: "//TODO"
};

var snivy = {
    name: "Snivy",
    dex: 495,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Snivy_(Pok%C3%A9mon)",
    image: "//TODO"
};

var servine = {
    name: "Servine",
    dex: 496,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Servine_(Pok%C3%A9mon)",
    image: "//TODO"
};

var serperior = {
    name: "Serperior",
    dex: 497,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Serperior_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tepig = {
    name: "Tepig",
    dex: 498,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tepig_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pignite = {
    name: "Pignite",
    dex: 499,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pignite_(Pok%C3%A9mon)",
    image: "//TODO"
};

var emboar = {
    name: "Emboar",
    dex: 500,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Emboar_(Pok%C3%A9mon)",
    image: "//TODO"
};

var oshawott = {
    name: "Oshawott",
    dex: 501,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Oshawott_(Pok%C3%A9mon)",
    image: "//TODO"
};

var dewott = {
    name: "Dewott",
    dex: 502,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dewott_(Pok%C3%A9mon)",
    image: "//TODO"
};

var samurott = {
    name: "Samurott",
    dex: 503,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Samurott_(Pok%C3%A9mon)",
    image: "//TODO"
};

var patrat = {
    name: "Patrat",
    dex: 504,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Patrat_(Pok%C3%A9mon)",
    image: "//TODO"
};

var watchog = {
    name: "Watchog",
    dex: 505,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Watchog_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lillipup = {
    name: "Lillipup",
    dex: 506,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lillipup_(Pok%C3%A9mon)",
    image: "//TODO"
};

var herdier = {
    name: "Herdier",
    dex: 507,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Herdier_(Pok%C3%A9mon)",
    image: "//TODO"
};

var stoutland = {
    name: "Stoutland",
    dex: 508,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Stoutland_(Pok%C3%A9mon)",
    image: "//TODO"
};

var purrloin = {
    name: "Purrloin",
    dex: 509,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Purrloin_(Pok%C3%A9mon)",
    image: "//TODO"
};

var liepard = {
    name: "Liepard",
    dex: 510,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Liepard_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pansage = {
    name: "Pansage",
    dex: 511,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pansage_(Pok%C3%A9mon)",
    image: "//TODO"
};

var simisage = {
    name: "Simisage",
    dex: 512,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Simisage_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pansear = {
    name: "Pansear",
    dex: 513,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pansear_(Pok%C3%A9mon)",
    image: "//TODO"
};

var simisear = {
    name: "Simisear",
    dex: 514,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Simisear_(Pok%C3%A9mon)",
    image: "//TODO"
};

var panpour = {
    name: "Panpour",
    dex: 515,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Panpour_(Pok%C3%A9mon)",
    image: "//TODO"
};

var simipour = {
    name: "Simipour",
    dex: 516,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Simipour_(Pok%C3%A9mon)",
    image: "//TODO"
};

var munna = {
    name: "Munna",
    dex: 517,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Munna_(Pok%C3%A9mon)",
    image: "//TODO"
};

var musharna = {
    name: "Musharna",
    dex: 518,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Musharna_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pidove = {
    name: "Pidove",
    dex: 519,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pidove_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tranquill = {
    name: "Tranquill",
    dex: 520,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tranquill_(Pok%C3%A9mon)",
    image: "//TODO"
};

var unfezant = {
    name: "Unfezant",
    dex: 521,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Unfezant_(Pok%C3%A9mon)",
    image: "//TODO"
};

var blitzle = {
    name: "Blitzle",
    dex: 522,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blitzle_(Pok%C3%A9mon)",
    image: "//TODO"
};

var zebstrika = {
    name: "Zebstrika",
    dex: 523,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Zebstrika_(Pok%C3%A9mon)",
    image: "//TODO"
};

var roggenrola = {
    name: "Roggenrola",
    dex: 524,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Roggenrola_(Pok%C3%A9mon)",
    image: "//TODO"
};

var boldore = {
    name: "Boldore",
    dex: 525,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Boldore_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gigalith = {
    name: "Gigalith",
    dex: 526,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gigalith_(Pok%C3%A9mon)",
    image: "//TODO"
};

var woobat = {
    name: "Woobat",
    dex: 527,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Woobat_(Pok%C3%A9mon)",
    image: "//TODO"
};

var swoobat = {
    name: "Swoobat",
    dex: 528,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Swoobat_(Pok%C3%A9mon)",
    image: "//TODO"
};

var drilbur = {
    name: "Drilbur",
    dex: 529,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Drilbur_(Pok%C3%A9mon)",
    image: "//TODO"
};

var excadrill = {
    name: "Excadrill",
    dex: 530,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Excadrill_(Pok%C3%A9mon)",
    image: "//TODO"
};

var audino = {
    name: "Audino",
    dex: 531,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Audino_(Pok%C3%A9mon)",
    image: "//TODO"
};

var timburr = {
    name: "Timburr",
    dex: 532,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Timburr_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gurdurr = {
    name: "Gurdurr",
    dex: 533,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gurdurr_(Pok%C3%A9mon)",
    image: "//TODO"
};

var conkeldurr = {
    name: "Conkeldurr",
    dex: 534,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Conkeldurr_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tympole = {
    name: "Tympole",
    dex: 535,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tympole_(Pok%C3%A9mon)",
    image: "//TODO"
};

var palpitoad = {
    name: "Palpitoad",
    dex: 536,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Palpitoad_(Pok%C3%A9mon)",
    image: "//TODO"
};

var seismitoad = {
    name: "Seismitoad",
    dex: 537,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Seismitoad_(Pok%C3%A9mon)",
    image: "//TODO"
};

var throh = {
    name: "Throh",
    dex: 538,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Throh_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sawk = {
    name: "Sawk",
    dex: 539,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sawk_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sewaddle = {
    name: "Sewaddle",
    dex: 540,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sewaddle_(Pok%C3%A9mon)",
    image: "//TODO"
};

var swadloon = {
    name: "Swadloon",
    dex: 541,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Swadloon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var leavanny = {
    name: "Leavanny",
    dex: 542,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Leavanny_(Pok%C3%A9mon)",
    image: "//TODO"
};

var venipede = {
    name: "Venipede",
    dex: 543,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Venipede_(Pok%C3%A9mon)",
    image: "//TODO"
};

var whirlipede = {
    name: "Whirlipede",
    dex: 544,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Whirlipede_(Pok%C3%A9mon)",
    image: "//TODO"
};

var scolipede = {
    name: "Scolipede",
    dex: 545,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Scolipede_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cottonee = {
    name: "Cottonee",
    dex: 546,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cottonee_(Pok%C3%A9mon)",
    image: "//TODO"
};

var whimsicott = {
    name: "Whimsicott",
    dex: 547,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Whimsicott_(Pok%C3%A9mon)",
    image: "//TODO"
};

var petilil = {
    name: "Petilil",
    dex: 548,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Petilil_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lilligant = {
    name: "Lilligant",
    dex: 549,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lilligant_(Pok%C3%A9mon)",
    image: "//TODO"
};

var basculin = {
    name: "Basculin",
    dex: 550,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Basculin_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sandile = {
    name: "Sandile",
    dex: 551,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sandile_(Pok%C3%A9mon)",
    image: "//TODO"
};

var krokorok = {
    name: "Krokorok",
    dex: 552,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Krokorok_(Pok%C3%A9mon)",
    image: "//TODO"
};

var krookodile = {
    name: "Krookodile",
    dex: 553,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Krookodile_(Pok%C3%A9mon)",
    image: "//TODO"
};

var darumaka = {
    name: "Darumaka",
    dex: 554,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Darumaka_(Pok%C3%A9mon)",
    image: "//TODO"
};

var darmanitan = {
    name: "Darmanitan",
    dex: 555,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Darmanitan_(Pok%C3%A9mon)",
    image: "//TODO"
};

var maractus = {
    name: "Maractus",
    dex: 556,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Maractus_(Pok%C3%A9mon)",
    image: "//TODO"
};

var dwebble = {
    name: "Dwebble",
    dex: 557,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dwebble_(Pok%C3%A9mon)",
    image: "//TODO"
};

var crustle = {
    name: "Crustle",
    dex: 558,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Crustle_(Pok%C3%A9mon)",
    image: "//TODO"
};

var scraggy = {
    name: "Scraggy",
    dex: 559,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Scraggy_(Pok%C3%A9mon)",
    image: "//TODO"
};

var scrafty = {
    name: "Scrafty",
    dex: 560,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Scrafty_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sigilyph = {
    name: "Sigilyph",
    dex: 561,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sigilyph_(Pok%C3%A9mon)",
    image: "//TODO"
};

var yamask = {
    name: "Yamask",
    dex: 562,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Yamask_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cofagrigus = {
    name: "Cofagrigus",
    dex: 563,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cofagrigus_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tirtouga = {
    name: "Tirtouga",
    dex: 564,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tirtouga_(Pok%C3%A9mon)",
    image: "//TODO"
};

var carracosta = {
    name: "Carracosta",
    dex: 565,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Carracosta_(Pok%C3%A9mon)",
    image: "//TODO"
};

var archen = {
    name: "Archen",
    dex: 566,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Archen_(Pok%C3%A9mon)",
    image: "//TODO"
};

var archeops = {
    name: "Archeops",
    dex: 567,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Archeops_(Pok%C3%A9mon)",
    image: "//TODO"
};

var trubbish = {
    name: "Trubbish",
    dex: 568,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Trubbish_(Pok%C3%A9mon)",
    image: "//TODO"
};

var garbodor = {
    name: "Garbodor",
    dex: 569,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Garbodor_(Pok%C3%A9mon)",
    image: "//TODO"
};

var zorua = {
    name: "Zorua",
    dex: 570,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Zorua_(Pok%C3%A9mon)",
    image: "//TODO"
};

var zoroark = {
    name: "Zoroark",
    dex: 571,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Zoroark_(Pok%C3%A9mon)",
    image: "//TODO"
};

var minccino = {
    name: "Minccino",
    dex: 572,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Minccino_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cinccino = {
    name: "Cinccino",
    dex: 573,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cinccino_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gothita = {
    name: "Gothita",
    dex: 574,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gothita_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gothorita = {
    name: "Gothorita",
    dex: 575,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gothorita_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gothitelle = {
    name: "Gothitelle",
    dex: 576,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gothitelle_(Pok%C3%A9mon)",
    image: "//TODO"
};

var solosis = {
    name: "Solosis",
    dex: 577,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Solosis_(Pok%C3%A9mon)",
    image: "//TODO"
};

var duosion = {
    name: "Duosion",
    dex: 578,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Duosion_(Pok%C3%A9mon)",
    image: "//TODO"
};

var reuniclus = {
    name: "Reuniclus",
    dex: 579,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Reuniclus_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ducklett = {
    name: "Ducklett",
    dex: 580,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ducklett_(Pok%C3%A9mon)",
    image: "//TODO"
};

var swanna = {
    name: "Swanna",
    dex: 581,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Swanna_(Pok%C3%A9mon)",
    image: "//TODO"
};

var vanillite = {
    name: "Vanillite",
    dex: 582,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Vanillite_(Pok%C3%A9mon)",
    image: "//TODO"
};

var vanillish = {
    name: "Vanillish",
    dex: 583,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Vanillish_(Pok%C3%A9mon)",
    image: "//TODO"
};

var vanilluxe = {
    name: "Vanilluxe",
    dex: 584,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Vanilluxe_(Pok%C3%A9mon)",
    image: "//TODO"
};

var deerling = {
    name: "Deerling",
    dex: 585,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Deerling_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sawsbuck = {
    name: "Sawsbuck",
    dex: 586,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sawsbuck_(Pok%C3%A9mon)",
    image: "//TODO"
};

var emolga = {
    name: "Emolga",
    dex: 587,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Emolga_(Pok%C3%A9mon)",
    image: "//TODO"
};

var karrablast = {
    name: "Karrablast",
    dex: 588,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Karrablast_(Pok%C3%A9mon)",
    image: "//TODO"
};

var escavalier = {
    name: "Escavalier",
    dex: 589,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Escavalier_(Pok%C3%A9mon)",
    image: "//TODO"
};

var foongus = {
    name: "Foongus",
    dex: 590,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Foongus_(Pok%C3%A9mon)",
    image: "//TODO"
};

var amoonguss = {
    name: "Amoonguss",
    dex: 591,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Amoonguss_(Pok%C3%A9mon)",
    image: "//TODO"
};

var frillish = {
    name: "Frillish",
    dex: 592,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Frillish_(Pok%C3%A9mon)",
    image: "//TODO"
};

var jellicent = {
    name: "Jellicent",
    dex: 593,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Jellicent_(Pok%C3%A9mon)",
    image: "//TODO"
};

var alomomola = {
    name: "Alomomola",
    dex: 594,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Alomomola_(Pok%C3%A9mon)",
    image: "//TODO"
};

var joltik = {
    name: "Joltik",
    dex: 595,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Joltik_(Pok%C3%A9mon)",
    image: "//TODO"
};

var galvantula = {
    name: "Galvantula",
    dex: 596,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Galvantula_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ferroseed = {
    name: "Ferroseed",
    dex: 597,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ferroseed_(Pok%C3%A9mon)",
    image: "//TODO"
};

var ferrothorn = {
    name: "Ferrothorn",
    dex: 598,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ferrothorn_(Pok%C3%A9mon)",
    image: "//TODO"
};

var klink = {
    name: "Klink",
    dex: 599,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Klink_(Pok%C3%A9mon)",
    image: "//TODO"
};

var klang = {
    name: "Klang",
    dex: 600,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Klang_(Pok%C3%A9mon)",
    image: "//TODO"
};

var klinklang = {
    name: "Klinklang",
    dex: 601,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Klinklang_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tynamo = {
    name: "Tynamo",
    dex: 602,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tynamo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var eelektrik = {
    name: "Eelektrik",
    dex: 603,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Eelektrik_(Pok%C3%A9mon)",
    image: "//TODO"
};

var eelektross = {
    name: "Eelektross",
    dex: 604,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Eelektross_(Pok%C3%A9mon)",
    image: "//TODO"
};

var elgyem = {
    name: "Elgyem",
    dex: 605,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Elgyem_(Pok%C3%A9mon)",
    image: "//TODO"
};

var beheeyem = {
    name: "Beheeyem",
    dex: 606,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Beheeyem_(Pok%C3%A9mon)",
    image: "//TODO"
};

var litwick = {
    name: "Litwick",
    dex: 607,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Litwick_(Pok%C3%A9mon)",
    image: "//TODO"
};

var lampent = {
    name: "Lampent",
    dex: 608,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lampent_(Pok%C3%A9mon)",
    image: "//TODO"
};

var chandelure = {
    name: "Chandelure",
    dex: 609,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chandelure_(Pok%C3%A9mon)",
    image: "//TODO"
};

var axew = {
    name: "Axew",
    dex: 610,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Axew_(Pok%C3%A9mon)",
    image: "//TODO"
};

var fraxure = {
    name: "Fraxure",
    dex: 611,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fraxure_(Pok%C3%A9mon)",
    image: "//TODO"
};

var haxorus = {
    name: "Haxorus",
    dex: 612,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Haxorus_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cubchoo = {
    name: "Cubchoo",
    dex: 613,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cubchoo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var beartic = {
    name: "Beartic",
    dex: 614,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Beartic_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cryogonal = {
    name: "Cryogonal",
    dex: 615,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cryogonal_(Pok%C3%A9mon)",
    image: "//TODO"
};

var shelmet = {
    name: "Shelmet",
    dex: 616,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shelmet_(Pok%C3%A9mon)",
    image: "//TODO"
};

var accelgor = {
    name: "Accelgor",
    dex: 617,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Accelgor_(Pok%C3%A9mon)",
    image: "//TODO"
};

var stunfisk = {
    name: "Stunfisk",
    dex: 618,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Stunfisk_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mienfoo = {
    name: "Mienfoo",
    dex: 619,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mienfoo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mienshao = {
    name: "Mienshao",
    dex: 620,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mienshao_(Pok%C3%A9mon)",
    image: "//TODO"
};

var druddigon = {
    name: "Druddigon",
    dex: 621,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Druddigon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var golett = {
    name: "Golett",
    dex: 622,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Golett_(Pok%C3%A9mon)",
    image: "//TODO"
};

var golurk = {
    name: "Golurk",
    dex: 623,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Golurk_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pawniard = {
    name: "Pawniard",
    dex: 624,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pawniard_(Pok%C3%A9mon)",
    image: "//TODO"
};

var bisharp = {
    name: "Bisharp",
    dex: 625,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bisharp_(Pok%C3%A9mon)",
    image: "//TODO"
};

var bouffalant = {
    name: "Bouffalant",
    dex: 626,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bouffalant_(Pok%C3%A9mon)",
    image: "//TODO"
};

var rufflet = {
    name: "Rufflet",
    dex: 627,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rufflet_(Pok%C3%A9mon)",
    image: "//TODO"
};

var braviary = {
    name: "Braviary",
    dex: 628,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Braviary_(Pok%C3%A9mon)",
    image: "//TODO"
};

var vullaby = {
    name: "Vullaby",
    dex: 629,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Vullaby_(Pok%C3%A9mon)",
    image: "//TODO"
};

var mandibuzz = {
    name: "Mandibuzz",
    dex: 630,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mandibuzz_(Pok%C3%A9mon)",
    image: "//TODO"
};

var heatmor = {
    name: "Heatmor",
    dex: 631,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heatmor_(Pok%C3%A9mon)",
    image: "//TODO"
};

var durant = {
    name: "Durant",
    dex: 632,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Durant_(Pok%C3%A9mon)",
    image: "//TODO"
};

var deino = {
    name: "Deino",
    dex: 633,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Deino_(Pok%C3%A9mon)",
    image: "//TODO"
};

var zweilous = {
    name: "Zweilous",
    dex: 634,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Zweilous_(Pok%C3%A9mon)",
    image: "//TODO"
};

var hydreigon = {
    name: "Hydreigon",
    dex: 635,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hydreigon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var larvesta = {
    name: "Larvesta",
    dex: 636,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Larvesta_(Pok%C3%A9mon)",
    image: "//TODO"
};

var volcarona = {
    name: "Volcarona",
    dex: 637,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Volcarona_(Pok%C3%A9mon)",
    image: "//TODO"
};

var cobalion = {
    name: "Cobalion",
    dex: 638,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cobalion_(Pok%C3%A9mon)",
    image: "//TODO"
};

var terrakion = {
    name: "Terrakion",
    dex: 639,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Terrakion_(Pok%C3%A9mon)",
    image: "//TODO"
};

var virizion = {
    name: "Virizion",
    dex: 640,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Virizion_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tornadus = {
    name: "Tornadus",
    dex: 641,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tornadus_(Pok%C3%A9mon)",
    image: "//TODO"
};

var thundurus = {
    name: "Thundurus",
    dex: 642,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Thundurus_(Pok%C3%A9mon)",
    image: "//TODO"
};

var reshiram = {
    name: "Reshiram",
    dex: 643,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Reshiram_(Pok%C3%A9mon)",
    image: "//TODO"
};

var zekrom = {
    name: "Zekrom",
    dex: 644,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Zekrom_(Pok%C3%A9mon)",
    image: "//TODO"
};

var landorus = {
    name: "Landorus",
    dex: 645,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Landorus_(Pok%C3%A9mon)",
    image: "//TODO"
};

var kyurem = {
    name: "Kyurem",
    dex: 646,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kyurem_(Pok%C3%A9mon)",
    image: "//TODO"
};

var keldeo = {
    name: "Keldeo",
    dex: 647,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Keldeo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var meloetta = {
    name: "Meloetta",
    dex: 648,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Meloetta_(Pok%C3%A9mon)",
    image: "//TODO"
};

var genesect = {
    name: "Genesect",
    dex: 649,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Genesect_(Pok%C3%A9mon)",
    image: "//TODO"
};

var chespin = {
    name: "Chespin",
    dex: 650,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chespin_(Pok%C3%A9mon)",
    image: "//TODO"
};

var quilladin = {
    name: "Quilladin",
    dex: 651,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Quilladin_(Pok%C3%A9mon)",
    image: "//TODO"
};

var chesnaught = {
    name: "Chesnaught",
    dex: 652,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chesnaught_(Pok%C3%A9mon)",
    image: "//TODO"
};

var fennekin = {
    name: "Fennekin",
    dex: 653,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fennekin_(Pok%C3%A9mon)",
    image: "//TODO"
};

var braixen = {
    name: "Braixen",
    dex: 654,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Braixen_(Pok%C3%A9mon)",
    image: "//TODO"
};

var delphox = {
    name: "Delphox",
    dex: 655,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Delphox_(Pok%C3%A9mon)",
    image: "//TODO"
};

var froakie = {
    name: "Froakie",
    dex: 656,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Froakie_(Pok%C3%A9mon)",
    image: "//TODO"
};

var frogadier = {
    name: "Frogadier",
    dex: 657,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Frogadier_(Pok%C3%A9mon)",
    image: "//TODO"
};

var greninja = {
    name: "Greninja",
    dex: 658,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Greninja_(Pok%C3%A9mon)",
    image: "//TODO"
};

var bunnelby = {
    name: "Bunnelby",
    dex: 659,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bunnelby_(Pok%C3%A9mon)",
    image: "//TODO"
};

var diggersby = {
    name: "Diggersby",
    dex: 660,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Diggersby_(Pok%C3%A9mon)",
    image: "//TODO"
};

var fletchling = {
    name: "Fletchling",
    dex: 661,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fletchling_(Pok%C3%A9mon)",
    image: "//TODO"
};

var fletchinder = {
    name: "Fletchinder",
    dex: 662,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fletchinder_(Pok%C3%A9mon)",
    image: "//TODO"
};

var talonflame = {
    name: "Talonflame",
    dex: 663,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Talonflame_(Pok%C3%A9mon)",
    image: "//TODO"
};

var scatterbug = {
    name: "Scatterbug",
    dex: 664,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Scatterbug_(Pok%C3%A9mon)",
    image: "//TODO"
};

var spewpa = {
    name: "Spewpa",
    dex: 665,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spewpa_(Pok%C3%A9mon)",
    image: "//TODO"
};

var vivillon = {
    name: "Vivillon",
    dex: 666,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Vivillon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var litleo = {
    name: "Litleo",
    dex: 667,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Litleo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pyroar = {
    name: "Pyroar",
    dex: 668,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pyroar_(Pok%C3%A9mon)",
    image: "//TODO"
};

var flabebe = {
    name: "Flabébé",
    dex: 669,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flabébé_(Pok%C3%A9mon)",
    image: "//TODO"
};

var floette = {
    name: "Floette",
    dex: 670,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Floette_(Pok%C3%A9mon)",
    image: "//TODO"
};

var florges = {
    name: "Florges",
    dex: 671,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Florges_(Pok%C3%A9mon)",
    image: "//TODO"
};

var skiddo = {
    name: "Skiddo",
    dex: 672,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Skiddo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gogoat = {
    name: "Gogoat",
    dex: 673,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gogoat_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pancham = {
    name: "Pancham",
    dex: 674,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pancham_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pangoro = {
    name: "Pangoro",
    dex: 675,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pangoro_(Pok%C3%A9mon)",
    image: "//TODO"
};

var furfrou = {
    name: "Furfrou",
    dex: 676,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Furfrou_(Pok%C3%A9mon)",
    image: "//TODO"
};

var espurr = {
    name: "Espurr",
    dex: 677,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Espurr_(Pok%C3%A9mon)",
    image: "//TODO"
};

var meowstic = {
    name: "Meowstic",
    dex: 678,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Meowstic_(Pok%C3%A9mon)",
    image: "//TODO"
};

var honedge = {
    name: "Honedge",
    dex: 679,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Honedge_(Pok%C3%A9mon)",
    image: "//TODO"
};

var doublade = {
    name: "Doublade",
    dex: 680,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Doublade_(Pok%C3%A9mon)",
    image: "//TODO"
};

var aegislash = {
    name: "Aegislash",
    dex: 681,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aegislash_(Pok%C3%A9mon)",
    image: "//TODO"
};

var spritzee = {
    name: "Spritzee",
    dex: 682,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spritzee_(Pok%C3%A9mon)",
    image: "//TODO"
};

var aromatisse = {
    name: "Aromatisse",
    dex: 683,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aromatisse_(Pok%C3%A9mon)",
    image: "//TODO"
};

var swirlix = {
    name: "Swirlix",
    dex: 684,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Swirlix_(Pok%C3%A9mon)",
    image: "//TODO"
};

var slurpuff = {
    name: "Slurpuff",
    dex: 685,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Slurpuff_(Pok%C3%A9mon)",
    image: "//TODO"
};

var inkay = {
    name: "Inkay",
    dex: 686,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Inkay_(Pok%C3%A9mon)",
    image: "//TODO"
};

var malamar = {
    name: "Malamar",
    dex: 687,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Malamar_(Pok%C3%A9mon)",
    image: "//TODO"
};

var binacle = {
    name: "Binacle",
    dex: 688,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Binacle_(Pok%C3%A9mon)",
    image: "//TODO"
};

var barbaracle = {
    name: "Barbaracle",
    dex: 689,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Barbaracle_(Pok%C3%A9mon)",
    image: "//TODO"
};

var skrelp = {
    name: "Skrelp",
    dex: 690,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Skrelp_(Pok%C3%A9mon)",
    image: "//TODO"
};

var dragalge = {
    name: "Dragalge",
    dex: 691,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dragalge_(Pok%C3%A9mon)",
    image: "//TODO"
};

var clauncher = {
    name: "Clauncher",
    dex: 692,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Clauncher_(Pok%C3%A9mon)",
    image: "//TODO"
};

var clawitzer = {
    name: "Clawitzer",
    dex: 693,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Clawitzer_(Pok%C3%A9mon)",
    image: "//TODO"
};

var helioptile = {
    name: "Helioptile",
    dex: 694,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Helioptile_(Pok%C3%A9mon)",
    image: "//TODO"
};

var heliolisk = {
    name: "Heliolisk",
    dex: 695,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heliolisk_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tyrunt = {
    name: "Tyrunt",
    dex: 696,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tyrunt_(Pok%C3%A9mon)",
    image: "//TODO"
};

var tyrantrum = {
    name: "Tyrantrum",
    dex: 697,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tyrantrum_(Pok%C3%A9mon)",
    image: "//TODO"
};

var amaura = {
    name: "Amaura",
    dex: 698,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Amaura_(Pok%C3%A9mon)",
    image: "//TODO"
};

var aurorus = {
    name: "Aurorus",
    dex: 699,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aurorus_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sylveon = {
    name: "Sylveon",
    dex: 700,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sylveon_(Pok%C3%A9mon)",
    image: "//TODO"
};

var hawlucha = {
    name: "Hawlucha",
    dex: 701,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hawlucha_(Pok%C3%A9mon)",
    image: "//TODO"
};

var dedenne = {
    name: "Dedenne",
    dex: 702,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dedenne_(Pok%C3%A9mon)",
    image: "//TODO"
};

var carbink = {
    name: "Carbink",
    dex: 703,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Carbink_(Pok%C3%A9mon)",
    image: "//TODO"
};

var goomy = {
    name: "Goomy",
    dex: 704,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Goomy_(Pok%C3%A9mon)",
    image: "//TODO"
};

var sliggoo = {
    name: "Sliggoo",
    dex: 705,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sliggoo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var goodra = {
    name: "Goodra",
    dex: 706,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Goodra_(Pok%C3%A9mon)",
    image: "//TODO"
};

var klefki = {
    name: "Klefki",
    dex: 707,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Klefki_(Pok%C3%A9mon)",
    image: "//TODO"
};

var phantump = {
    name: "Phantump",
    dex: 708,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Phantump_(Pok%C3%A9mon)",
    image: "//TODO"
};

var trevenant = {
    name: "Trevenant",
    dex: 709,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Trevenant_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pumpkaboo = {
    name: "Pumpkaboo",
    dex: 710,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pumpkaboo_(Pok%C3%A9mon)",
    image: "//TODO"
};

var gourgeist = {
    name: "Gourgeist",
    dex: 711,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gourgeist_(Pok%C3%A9mon)",
    image: "//TODO"
};

var bergmite = {
    name: "Bergmite",
    dex: 712,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bergmite_(Pok%C3%A9mon)",
    image: "//TODO"
};

var avalugg = {
    name: "Avalugg",
    dex: 713,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Avalugg_(Pok%C3%A9mon)",
    image: "//TODO"
};

var noibat = {
    name: "Noibat",
    dex: 714,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Noibat_(Pok%C3%A9mon)",
    image: "//TODO"
};

var noivern = {
    name: "Noivern",
    dex: 715,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Noivern_(Pok%C3%A9mon)",
    image: "//TODO"
};

var xerneas = {
    name: "Xerneas",
    dex: 716,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Xerneas_(Pok%C3%A9mon)",
    image: "//TODO"
};

var yveltal = {
    name: "Yveltal",
    dex: 717,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Yveltal_(Pok%C3%A9mon)",
    image: "//TODO"
};

var zygarde = {
    name: "Zygarde",
    dex: 718,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Zygarde_(Pok%C3%A9mon)",
    image: "//TODO"
};

var diancie = {
    name: "Diancie",
    dex: 719,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Diancie_(Pok%C3%A9mon)",
    image: "//TODO"
};

var pound = {
    name: "Pound",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pound_(move)"
}

var karate_chop = {
    name: "Karate Chop",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Karate_Chop_(Move)"
};

var double_slap = {
    name: "Double Slap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Double_Slap_(Move)"
};

var comet_punch = {
    name: "Comet Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Comet_Punch_(Move)"
};

var mega_punch = {
    name: "Mega Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mega_Punch_(Move)"
};

var pay_day = {
    name: "Pay Day",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pay_Day_(Move)"
};

var fire_punch = {
    name: "Fire Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fire_Punch_(Move)"
};

var ice_punch = {
    name: "Ice Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ice_Punch_(Move)"
};

var thunder_punch = {
    name: "Thunder Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Thunder_Punch_(Move)"
};

var scratch = {
    name: "Scratch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Scratch_(Move)"
};

var vice_grip = {
    name: "Vice Grip",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Vice_Grip_(Move)"
};

var guillotine = {
    name: "Guillotine",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Guillotine_(Move)"
};

var razor_wind = {
    name: "Razor Wind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Razor_Wind_(Move)"
};

var swords_dance = {
    name: "Swords Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Swords_Dance_(Move)"
};

var cut = {
    name: "Cut",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cut_(Move)"
};

var gust = {
    name: "Gust",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gust_(Move)"
};

var wing_attack = {
    name: "Wing Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wing_Attack_(Move)"
};

var whirlwind = {
    name: "Whirlwind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Whirlwind_(Move)"
};

var fly = {
    name: "Fly",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fly_(Move)"
};

var bind = {
    name: "Bind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bind_(Move)"
};

var slam = {
    name: "Slam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Slam_(Move)"
};

var vine_whip = {
    name: "Vine Whip",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Vine_Whip_(Move)"
};

var stomp = {
    name: "Stomp",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Stomp_(Move)"
};

var double_kick = {
    name: "Double Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Double_Kick_(Move)"
};

var mega_kick = {
    name: "Mega Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mega_Kick_(Move)"
};

var jump_kick = {
    name: "Jump Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Jump_Kick_(Move)"
};

var rolling_kick = {
    name: "Rolling Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rolling_Kick_(Move)"
};

var sand_attack = {
    name: "Sand Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sand_Attack_(Move)"
};

var headbutt = {
    name: "Headbutt",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Headbutt_(Move)"
};

var horn_attack = {
    name: "Horn Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Horn_Attack_(Move)"
};

var fury_attack = {
    name: "Fury Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fury_Attack_(Move)"
};

var horn_drill = {
    name: "Horn Drill",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Horn_Drill_(Move)"
};

var tackle = {
    name: "Tackle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tackle_(Move)"
};

var body_slam = {
    name: "Body Slam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Body_Slam_(Move)"
};

var wrap = {
    name: "Wrap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wrap_(Move)"
};

var take_down = {
    name: "Take Down",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Take_Down_(Move)"
};

var thrash = {
    name: "Thrash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Thrash_(Move)"
};

var double-edge = {
    name: "Double-edge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Double-edge_(Move)"
};

var tail_whip = {
    name: "Tail Whip",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tail_Whip_(Move)"
};

var poison_sting = {
    name: "Poison Sting",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Poison_Sting_(Move)"
};

var twineedle = {
    name: "Twineedle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Twineedle_(Move)"
};

var pin_missile = {
    name: "Pin Missile",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pin_Missile_(Move)"
};

var leer = {
    name: "Leer",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Leer_(Move)"
};

var bite = {
    name: "Bite",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bite_(Move)"
};

var growl = {
    name: "Growl",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Growl_(Move)"
};

var roar = {
    name: "Roar",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Roar_(Move)"
};

var sing = {
    name: "Sing",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sing_(Move)"
};

var supersonic = {
    name: "Supersonic",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Supersonic_(Move)"
};

var sonic_boom = {
    name: "Sonic Boom",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sonic_Boom_(Move)"
};

var disable = {
    name: "Disable",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Disable_(Move)"
};

var acid = {
    name: "Acid",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Acid_(Move)"
};

var ember = {
    name: "Ember",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ember_(Move)"
};

var flamethrower = {
    name: "Flamethrower",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flamethrower_(Move)"
};

var mist = {
    name: "Mist",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mist_(Move)"
};

var water_gun = {
    name: "Water Gun",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Water_Gun_(Move)"
};

var hydro_pump = {
    name: "Hydro Pump",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hydro_Pump_(Move)"
};

var surf = {
    name: "Surf",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Surf_(Move)"
};

var ice_beam = {
    name: "Ice Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ice_Beam_(Move)"
};

var blizzard = {
    name: "Blizzard",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blizzard_(Move)"
};

var psybeam = {
    name: "Psybeam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Psybeam_(Move)"
};

var bubble_beam = {
    name: "Bubble Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bubble_Beam_(Move)"
};

var aurora_beam = {
    name: "Aurora Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aurora_Beam_(Move)"
};

var hyper_beam = {
    name: "Hyper Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hyper_Beam_(Move)"
};

var peck = {
    name: "Peck",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Peck_(Move)"
};

var drill_peck = {
    name: "Drill Peck",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Drill_Peck_(Move)"
};

var submission = {
    name: "Submission",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Submission_(Move)"
};

var low_kick = {
    name: "Low Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Low_Kick_(Move)"
};

var counter = {
    name: "Counter",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Counter_(Move)"
};

var seismic_toss = {
    name: "Seismic Toss",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Seismic_Toss_(Move)"
};

var strength = {
    name: "Strength",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Strength_(Move)"
};

var absorb = {
    name: "Absorb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Absorb_(Move)"
};

var mega_drain = {
    name: "Mega Drain",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mega_Drain_(Move)"
};

var leech_seed = {
    name: "Leech Seed",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Leech_Seed_(Move)"
};

var growth = {
    name: "Growth",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Growth_(Move)"
};

var razor_leaf = {
    name: "Razor Leaf",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Razor_Leaf_(Move)"
};

var solar_beam = {
    name: "Solar Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Solar_Beam_(Move)"
};

var poison_powder = {
    name: "Poison Powder",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Poison_Powder_(Move)"
};

var stun_spore = {
    name: "Stun Spore",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Stun_Spore_(Move)"
};

var sleep_powder = {
    name: "Sleep Powder",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sleep_Powder_(Move)"
};

var petal_dance = {
    name: "Petal Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Petal_Dance_(Move)"
};

var string_shot = {
    name: "String Shot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/String_Shot_(Move)"
};

var dragon_rage = {
    name: "Dragon Rage",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dragon_Rage_(Move)"
};

var fire_spin = {
    name: "Fire Spin",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fire_Spin_(Move)"
};

var thunder_shock = {
    name: "Thunder Shock",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Thunder_Shock_(Move)"
};

var thunderbolt = {
    name: "Thunderbolt",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Thunderbolt_(Move)"
};

var thunder_wave = {
    name: "Thunder Wave",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Thunder_Wave_(Move)"
};

var thunder = {
    name: "Thunder",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Thunder_(Move)"
};

var rock_throw = {
    name: "Rock Throw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rock_Throw_(Move)"
};

var earthquake = {
    name: "Earthquake",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Earthquake_(Move)"
};

var fissure = {
    name: "Fissure",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fissure_(Move)"
};

var dig = {
    name: "Dig",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dig_(Move)"
};

var toxic = {
    name: "Toxic",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Toxic_(Move)"
};

var confusion = {
    name: "Confusion",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Confusion_(Move)"
};

var psychic = {
    name: "Psychic",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Psychic_(Move)"
};

var hypnosis = {
    name: "Hypnosis",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hypnosis_(Move)"
};

var meditate = {
    name: "Meditate",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Meditate_(Move)"
};

var agility = {
    name: "Agility",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Agility_(Move)"
};

var quick_attack = {
    name: "Quick Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Quick_Attack_(Move)"
};

var rage = {
    name: "Rage",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rage_(Move)"
};

var teleport = {
    name: "Teleport",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Teleport_(Move)"
};

var night_shade = {
    name: "Night Shade",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Night_Shade_(Move)"
};

var mimic = {
    name: "Mimic",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mimic_(Move)"
};

var screech = {
    name: "Screech",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Screech_(Move)"
};

var double_team = {
    name: "Double Team",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Double_Team_(Move)"
};

var recover = {
    name: "Recover",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Recover_(Move)"
};

var harden = {
    name: "Harden",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Harden_(Move)"
};

var minimize = {
    name: "Minimize",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Minimize_(Move)"
};

var smokescreen = {
    name: "Smokescreen",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Smokescreen_(Move)"
};

var confuse_ray = {
    name: "Confuse Ray",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Confuse_Ray_(Move)"
};

var withdraw = {
    name: "Withdraw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Withdraw_(Move)"
};

var defense_curl = {
    name: "Defense Curl",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Defense_Curl_(Move)"
};

var barrier = {
    name: "Barrier",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Barrier_(Move)"
};

var light_screen = {
    name: "Light Screen",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Light_Screen_(Move)"
};

var haze = {
    name: "Haze",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Haze_(Move)"
};

var reflect = {
    name: "Reflect",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Reflect_(Move)"
};

var focus_energy = {
    name: "Focus Energy",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Focus_Energy_(Move)"
};

var bide = {
    name: "Bide",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bide_(Move)"
};

var metronome = {
    name: "Metronome",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Metronome_(Move)"
};

var mirror_move = {
    name: "Mirror Move",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mirror_Move_(Move)"
};

var self-destruct = {
    name: "Self-destruct",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Self-destruct_(Move)"
};

var egg_bomb = {
    name: "Egg Bomb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Egg_Bomb_(Move)"
};

var lick = {
    name: "Lick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lick_(Move)"
};

var smog = {
    name: "Smog",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Smog_(Move)"
};

var sludge = {
    name: "Sludge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sludge_(Move)"
};

var bone_club = {
    name: "Bone Club",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bone_Club_(Move)"
};

var fire_blast = {
    name: "Fire Blast",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fire_Blast_(Move)"
};

var waterfall = {
    name: "Waterfall",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Waterfall_(Move)"
};

var clamp = {
    name: "Clamp",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Clamp_(Move)"
};

var swift = {
    name: "Swift",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Swift_(Move)"
};

var skull_bash = {
    name: "Skull Bash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Skull_Bash_(Move)"
};

var spike_cannon = {
    name: "Spike Cannon",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spike_Cannon_(Move)"
};

var constrict = {
    name: "Constrict",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Constrict_(Move)"
};

var amnesia = {
    name: "Amnesia",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Amnesia_(Move)"
};

var kinesis = {
    name: "Kinesis",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kinesis_(Move)"
};

var soft_boiled = {
    name: "Soft-boiled",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Soft-boiled_(Move)"
};

var high_jump_kick = {
    name: "High Jump Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/High_Jump_Kick_(Move)"
};

var glare = {
    name: "Glare",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Glare_(Move)"
};

var dream_eater = {
    name: "Dream Eater",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dream_Eater_(Move)"
};

var poison_gas = {
    name: "Poison Gas",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Poison_Gas_(Move)"
};

var barrage = {
    name: "Barrage",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Barrage_(Move)"
};

var leech_life = {
    name: "Leech Life",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Leech_Life_(Move)"
};

var lovely_kiss = {
    name: "Lovely Kiss",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lovely_Kiss_(Move)"
};

var sky_attack = {
    name: "Sky Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sky_Attack_(Move)"
};

var transform = {
    name: "Transform",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Transform_(Move)"
};

var bubble = {
    name: "Bubble",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bubble_(Move)"
};

var dizzy_punch = {
    name: "Dizzy Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dizzy_Punch_(Move)"
};

var spore = {
    name: "Spore",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spore_(Move)"
};

var flash = {
    name: "Flash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flash_(Move)"
};

var psywave = {
    name: "Psywave",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Psywave_(Move)"
};

var splash = {
    name: "Splash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Splash_(Move)"
};

var acid_armor = {
    name: "Acid Armor",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Acid_Armor_(Move)"
};

var crabhammer = {
    name: "Crabhammer",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Crabhammer_(Move)"
};

var explosion = {
    name: "Explosion",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Explosion_(Move)"
};

var fury_swipes = {
    name: "Fury Swipes",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fury_Swipes_(Move)"
};

var bonemerang = {
    name: "Bonemerang",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bonemerang_(Move)"
};

var rest = {
    name: "Rest",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rest_(Move)"
};

var rock_slide = {
    name: "Rock Slide",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rock_Slide_(Move)"
};

var hyper_fang = {
    name: "Hyper Fang",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hyper_Fang_(Move)"
};

var sharpen = {
    name: "Sharpen",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sharpen_(Move)"
};

var conversion = {
    name: "Conversion",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Conversion_(Move)"
};

var tri_attack = {
    name: "Tri Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tri_Attack_(Move)"
};

var super_fang = {
    name: "Super Fang",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Super_Fang_(Move)"
};

var slash = {
    name: "Slash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Slash_(Move)"
};

var substitute = {
    name: "Substitute",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Substitute_(Move)"
};

var struggle = {
    name: "Struggle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Struggle_(Move)"
};

var sketch = {
    name: "Sketch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sketch_(Move)"
};

var triple_kick = {
    name: "Triple Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Triple_Kick_(Move)"
};

var thief = {
    name: "Thief",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Thief_(Move)"
};

var spider_web = {
    name: "Spider Web",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spider_Web_(Move)"
};

var mind_reader = {
    name: "Mind Reader",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mind_Reader_(Move)"
};

var nightmare = {
    name: "Nightmare",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nightmare_(Move)"
};

var flame_wheel = {
    name: "Flame Wheel",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flame_Wheel_(Move)"
};

var snore = {
    name: "Snore",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Snore_(Move)"
};

var curse = {
    name: "Curse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Curse_(Move)"
};

var flail = {
    name: "Flail",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flail_(Move)"
};

var conversion_2 = {
    name: "Conversion 2",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Conversion_2_(Move)"
};

var aeroblast = {
    name: "Aeroblast",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aeroblast_(Move)"
};

var cotton_spore = {
    name: "Cotton Spore",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cotton_Spore_(Move)"
};

var reversal = {
    name: "Reversal",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Reversal_(Move)"
};

var spite = {
    name: "Spite",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spite_(Move)"
};

var powder_snow = {
    name: "Powder Snow",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Powder_Snow_(Move)"
};

var protect = {
    name: "Protect",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Protect_(Move)"
};

var mach_punch = {
    name: "Mach Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mach_Punch_(Move)"
};

var scary_face = {
    name: "Scary Face",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Scary_Face_(Move)"
};

var feint_attack = {
    name: "Feint Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Feint_Attack_(Move)"
};

var sweet_kiss = {
    name: "Sweet Kiss",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sweet_Kiss_(Move)"
};

var belly_drum = {
    name: "Belly Drum",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Belly_Drum_(Move)"
};

var sludge_bomb = {
    name: "Sludge Bomb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sludge_Bomb_(Move)"
};

var mud-slap = {
    name: "Mud-slap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mud-slap_(Move)"
};

var octazooka = {
    name: "Octazooka",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Octazooka_(Move)"
};

var spikes = {
    name: "Spikes",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spikes_(Move)"
};

var zap_cannon = {
    name: "Zap Cannon",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Zap_Cannon_(Move)"
};

var foresight = {
    name: "Foresight",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Foresight_(Move)"
};

var destiny_bond = {
    name: "Destiny Bond",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Destiny_Bond_(Move)"
};

var perish_song = {
    name: "Perish Song",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Perish_Song_(Move)"
};

var icy_wind = {
    name: "Icy Wind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Icy_Wind_(Move)"
};

var detect = {
    name: "Detect",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Detect_(Move)"
};

var bone_rush = {
    name: "Bone Rush",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bone_Rush_(Move)"
};

var lock-on = {
    name: "Lock-on",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lock-on_(Move)"
};

var outrage = {
    name: "Outrage",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Outrage_(Move)"
};

var sandstorm = {
    name: "Sandstorm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sandstorm_(Move)"
};

var giga_drain = {
    name: "Giga Drain",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Giga_Drain_(Move)"
};

var endure = {
    name: "Endure",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Endure_(Move)"
};

var charm = {
    name: "Charm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Charm_(Move)"
};

var rollout = {
    name: "Rollout",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rollout_(Move)"
};

var false_swipe = {
    name: "False Swipe",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/False_Swipe_(Move)"
};

var swagger = {
    name: "Swagger",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Swagger_(Move)"
};

var milk_drink = {
    name: "Milk Drink",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Milk_Drink_(Move)"
};

var spark = {
    name: "Spark",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spark_(Move)"
};

var fury_cutter = {
    name: "Fury Cutter",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fury_Cutter_(Move)"
};

var steel_wing = {
    name: "Steel Wing",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Steel_Wing_(Move)"
};

var mean_look = {
    name: "Mean Look",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mean_Look_(Move)"
};

var attract = {
    name: "Attract",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Attract_(Move)"
};

var sleep_talk = {
    name: "Sleep Talk",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sleep_Talk_(Move)"
};

var heal_bell = {
    name: "Heal Bell",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heal_Bell_(Move)"
};

var return = {
    name: "Return",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Return_(Move)"
};

var present = {
    name: "Present",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Present_(Move)"
};

var frustration = {
    name: "Frustration",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Frustration_(Move)"
};

var safeguard = {
    name: "Safeguard",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Safeguard_(Move)"
};

var pain_split = {
    name: "Pain Split",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pain_Split_(Move)"
};

var sacred_fire = {
    name: "Sacred Fire",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sacred_Fire_(Move)"
};

var magnitude = {
    name: "Magnitude",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magnitude_(Move)"
};

var dynamic_punch = {
    name: "Dynamic Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dynamic_Punch_(Move)"
};

var megahorn = {
    name: "Megahorn",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Megahorn_(Move)"
};

var dragon_breath = {
    name: "Dragon Breath",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dragon_Breath_(Move)"
};

var baton_pass = {
    name: "Baton Pass",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Baton_Pass_(Move)"
};

var encore = {
    name: "Encore",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Encore_(Move)"
};

var pursuit = {
    name: "Pursuit",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pursuit_(Move)"
};

var rapid_spin = {
    name: "Rapid Spin",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rapid_Spin_(Move)"
};

var sweet_scent = {
    name: "Sweet Scent",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sweet_Scent_(Move)"
};

var iron_tail = {
    name: "Iron Tail",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Iron_Tail_(Move)"
};

var metal_claw = {
    name: "Metal Claw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Metal_Claw_(Move)"
};

var vital_throw = {
    name: "Vital Throw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Vital_Throw_(Move)"
};

var morning_sun = {
    name: "Morning Sun",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Morning_Sun_(Move)"
};

var synthesis = {
    name: "Synthesis",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Synthesis_(Move)"
};

var moonlight = {
    name: "Moonlight",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Moonlight_(Move)"
};

var hidden_power = {
    name: "Hidden Power",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hidden_Power_(Move)"
};

var cross_chop = {
    name: "Cross Chop",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cross_Chop_(Move)"
};

var twister = {
    name: "Twister",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Twister_(Move)"
};

var rain_dance = {
    name: "Rain Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rain_Dance_(Move)"
};

var sunny_day = {
    name: "Sunny Day",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sunny_Day_(Move)"
};

var crunch = {
    name: "Crunch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Crunch_(Move)"
};

var mirror_coat = {
    name: "Mirror Coat",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mirror_Coat_(Move)"
};

var psych_up = {
    name: "Psych Up",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Psych_Up_(Move)"
};

var extreme_speed = {
    name: "Extreme Speed",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Extreme_Speed_(Move)"
};

var ancient_power = {
    name: "Ancient Power",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ancient_Power_(Move)"
};

var shadow_ball = {
    name: "Shadow Ball",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shadow_Ball_(Move)"
};

var future_sight = {
    name: "Future Sight",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Future_Sight_(Move)"
};

var rock_smash = {
    name: "Rock Smash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rock_Smash_(Move)"
};

var whirlpool = {
    name: "Whirlpool",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Whirlpool_(Move)"
};

var beat_up = {
    name: "Beat Up",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Beat_Up_(Move)"
};

var fake_out = {
    name: "Fake Out",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fake_Out_(Move)"
};

var uproar = {
    name: "Uproar",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Uproar_(Move)"
};

var stockpile = {
    name: "Stockpile",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Stockpile_(Move)"
};

var spit_up = {
    name: "Spit Up",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spit_Up_(Move)"
};

var swallow = {
    name: "Swallow",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Swallow_(Move)"
};

var heat_wave = {
    name: "Heat Wave",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heat_Wave_(Move)"
};

var hail = {
    name: "Hail",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hail_(Move)"
};

var torment = {
    name: "Torment",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Torment_(Move)"
};

var flatter = {
    name: "Flatter",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flatter_(Move)"
};

var will-o-wisp = {
    name: "Will-o-wisp",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Will-o-wisp_(Move)"
};

var memento = {
    name: "Memento",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Memento_(Move)"
};

var facade = {
    name: "Facade",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Facade_(Move)"
};

var focus_punch = {
    name: "Focus Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Focus_Punch_(Move)"
};

var smelling_salts = {
    name: "Smelling Salts",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Smelling_Salts_(Move)"
};

var follow_me = {
    name: "Follow Me",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Follow_Me_(Move)"
};

var nature_power = {
    name: "Nature Power",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nature_Power_(Move)"
};

var charge = {
    name: "Charge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Charge_(Move)"
};

var taunt = {
    name: "Taunt",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Taunt_(Move)"
};

var helping_hand = {
    name: "Helping Hand",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Helping_Hand_(Move)"
};

var trick = {
    name: "Trick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Trick_(Move)"
};

var role_play = {
    name: "Role Play",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Role_Play_(Move)"
};

var wish = {
    name: "Wish",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wish_(Move)"
};

var assist = {
    name: "Assist",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Assist_(Move)"
};

var ingrain = {
    name: "Ingrain",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ingrain_(Move)"
};

var superpower = {
    name: "Superpower",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Superpower_(Move)"
};

var magic_coat = {
    name: "Magic Coat",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magic_Coat_(Move)"
};

var recycle = {
    name: "Recycle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Recycle_(Move)"
};

var revenge = {
    name: "Revenge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Revenge_(Move)"
};

var brick_break = {
    name: "Brick Break",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Brick_Break_(Move)"
};

var yawn = {
    name: "Yawn",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Yawn_(Move)"
};

var knock_off = {
    name: "Knock Off",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Knock_Off_(Move)"
};

var endeavor = {
    name: "Endeavor",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Endeavor_(Move)"
};

var eruption = {
    name: "Eruption",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Eruption_(Move)"
};

var skill_swap = {
    name: "Skill Swap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Skill_Swap_(Move)"
};

var imprison = {
    name: "Imprison",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Imprison_(Move)"
};

var refresh = {
    name: "Refresh",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Refresh_(Move)"
};

var grudge = {
    name: "Grudge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Grudge_(Move)"
};

var snatch = {
    name: "Snatch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Snatch_(Move)"
};

var secret_power = {
    name: "Secret Power",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Secret_Power_(Move)"
};

var dive = {
    name: "Dive",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dive_(Move)"
};

var arm_thrust = {
    name: "Arm Thrust",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Arm_Thrust_(Move)"
};

var camouflage = {
    name: "Camouflage",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Camouflage_(Move)"
};

var tail_glow = {
    name: "Tail Glow",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tail_Glow_(Move)"
};

var luster_purge = {
    name: "Luster Purge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Luster_Purge_(Move)"
};

var mist_ball = {
    name: "Mist Ball",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mist_Ball_(Move)"
};

var feather_dance = {
    name: "Feather Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Feather_Dance_(Move)"
};

var teeter_dance = {
    name: "Teeter Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Teeter_Dance_(Move)"
};

var blaze_kick = {
    name: "Blaze Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blaze_Kick_(Move)"
};

var mud_sport = {
    name: "Mud Sport",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mud_Sport_(Move)"
};

var ice_ball = {
    name: "Ice Ball",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ice_Ball_(Move)"
};

var needle_arm = {
    name: "Needle Arm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Needle_Arm_(Move)"
};

var slack_off = {
    name: "Slack Off",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Slack_Off_(Move)"
};

var hyper_voice = {
    name: "Hyper Voice",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hyper_Voice_(Move)"
};

var poison_fang = {
    name: "Poison Fang",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Poison_Fang_(Move)"
};

var crush_claw = {
    name: "Crush Claw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Crush_Claw_(Move)"
};

var blast_burn = {
    name: "Blast Burn",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blast_Burn_(Move)"
};

var hydro_cannon = {
    name: "Hydro Cannon",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hydro_Cannon_(Move)"
};

var meteor_mash = {
    name: "Meteor Mash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Meteor_Mash_(Move)"
};

var astonish = {
    name: "Astonish",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Astonish_(Move)"
};

var weather_ball = {
    name: "Weather Ball",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Weather_Ball_(Move)"
};

var aromatherapy = {
    name: "Aromatherapy",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aromatherapy_(Move)"
};

var fake_tears = {
    name: "Fake Tears",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fake_Tears_(Move)"
};

var air_cutter = {
    name: "Air Cutter",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Air_Cutter_(Move)"
};

var overheat = {
    name: "Overheat",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Overheat_(Move)"
};

var odor_sleuth = {
    name: "Odor Sleuth",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Odor_Sleuth_(Move)"
};

var rock_tomb = {
    name: "Rock Tomb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rock_Tomb_(Move)"
};

var silver_wind = {
    name: "Silver Wind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Silver_Wind_(Move)"
};

var metal_sound = {
    name: "Metal Sound",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Metal_Sound_(Move)"
};

var grass_whistle = {
    name: "Grass Whistle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Grass_Whistle_(Move)"
};

var tickle = {
    name: "Tickle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tickle_(Move)"
};

var cosmic_power = {
    name: "Cosmic Power",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cosmic_Power_(Move)"
};

var water_spout = {
    name: "Water Spout",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Water_Spout_(Move)"
};

var signal_beam = {
    name: "Signal Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Signal_Beam_(Move)"
};

var shadow_punch = {
    name: "Shadow Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shadow_Punch_(Move)"
};

var extrasensory = {
    name: "Extrasensory",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Extrasensory_(Move)"
};

var sky_uppercut = {
    name: "Sky Uppercut",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sky_Uppercut_(Move)"
};

var sand_tomb = {
    name: "Sand Tomb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sand_Tomb_(Move)"
};

var sheer_cold = {
    name: "Sheer Cold",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sheer_Cold_(Move)"
};

var muddy_water = {
    name: "Muddy Water",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Muddy_Water_(Move)"
};

var bullet_seed = {
    name: "Bullet Seed",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bullet_Seed_(Move)"
};

var aerial_ace = {
    name: "Aerial Ace",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aerial_Ace_(Move)"
};

var icicle_spear = {
    name: "Icicle Spear",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Icicle_Spear_(Move)"
};

var iron_defense = {
    name: "Iron Defense",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Iron_Defense_(Move)"
};

var block = {
    name: "Block",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Block_(Move)"
};

var howl = {
    name: "Howl",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Howl_(Move)"
};

var dragon_claw = {
    name: "Dragon Claw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dragon_Claw_(Move)"
};

var frenzy_plant = {
    name: "Frenzy Plant",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Frenzy_Plant_(Move)"
};

var bulk_up = {
    name: "Bulk Up",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bulk_Up_(Move)"
};

var bounce = {
    name: "Bounce",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bounce_(Move)"
};

var mud_shot = {
    name: "Mud Shot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mud_Shot_(Move)"
};

var poison_tail = {
    name: "Poison Tail",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Poison_Tail_(Move)"
};

var covet = {
    name: "Covet",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Covet_(Move)"
};

var volt_tackle = {
    name: "Volt Tackle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Volt_Tackle_(Move)"
};

var magical_leaf = {
    name: "Magical Leaf",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magical_Leaf_(Move)"
};

var water_sport = {
    name: "Water Sport",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Water_Sport_(Move)"
};

var calm_mind = {
    name: "Calm Mind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Calm_Mind_(Move)"
};

var leaf_blade = {
    name: "Leaf Blade",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Leaf_Blade_(Move)"
};

var dragon_dance = {
    name: "Dragon Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dragon_Dance_(Move)"
};

var rock_blast = {
    name: "Rock Blast",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rock_Blast_(Move)"
};

var shock_wave = {
    name: "Shock Wave",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shock_Wave_(Move)"
};

var water_pulse = {
    name: "Water Pulse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Water_Pulse_(Move)"
};

var doom_desire = {
    name: "Doom Desire",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Doom_Desire_(Move)"
};

var psycho_boost = {
    name: "Psycho Boost",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Psycho_Boost_(Move)"
};

var roost = {
    name: "Roost",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Roost_(Move)"
};

var gravity = {
    name: "Gravity",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gravity_(Move)"
};

var miracle_eye = {
    name: "Miracle Eye",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Miracle_Eye_(Move)"
};

var wake-up_slap = {
    name: "Wake-up Slap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wake-up_Slap_(Move)"
};

var hammer_arm = {
    name: "Hammer Arm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hammer_Arm_(Move)"
};

var gyro_ball = {
    name: "Gyro Ball",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gyro_Ball_(Move)"
};

var healing_wish = {
    name: "Healing Wish",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Healing_Wish_(Move)"
};

var brine = {
    name: "Brine",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Brine_(Move)"
};

var natural_gift = {
    name: "Natural Gift",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Natural_Gift_(Move)"
};

var feint = {
    name: "Feint",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Feint_(Move)"
};

var pluck = {
    name: "Pluck",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pluck_(Move)"
};

var tailwind = {
    name: "Tailwind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tailwind_(Move)"
};

var acupressure = {
    name: "Acupressure",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Acupressure_(Move)"
};

var metal_burst = {
    name: "Metal Burst",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Metal_Burst_(Move)"
};

var u-turn = {
    name: "U-turn",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/U-turn_(Move)"
};

var close_combat = {
    name: "Close Combat",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Close_Combat_(Move)"
};

var payback = {
    name: "Payback",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Payback_(Move)"
};

var assurance = {
    name: "Assurance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Assurance_(Move)"
};

var embargo = {
    name: "Embargo",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Embargo_(Move)"
};

var fling = {
    name: "Fling",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fling_(Move)"
};

var psycho_shift = {
    name: "Psycho Shift",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Psycho_Shift_(Move)"
};

var trump_card = {
    name: "Trump Card",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Trump_Card_(Move)"
};

var heal_block = {
    name: "Heal Block",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heal_Block_(Move)"
};

var wring_out = {
    name: "Wring Out",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wring_Out_(Move)"
};

var power_trick = {
    name: "Power Trick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Power_Trick_(Move)"
};

var gastro_acid = {
    name: "Gastro Acid",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gastro_Acid_(Move)"
};

var lucky_chant = {
    name: "Lucky Chant",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lucky_Chant_(Move)"
};

var me_first = {
    name: "Me First",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Me_First_(Move)"
};

var copycat = {
    name: "Copycat",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Copycat_(Move)"
};

var power_swap = {
    name: "Power Swap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Power_Swap_(Move)"
};

var guard_swap = {
    name: "Guard Swap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Guard_Swap_(Move)"
};

var punishment = {
    name: "Punishment",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Punishment_(Move)"
};

var last_resort = {
    name: "Last Resort",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Last_Resort_(Move)"
};

var worry_seed = {
    name: "Worry Seed",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Worry_Seed_(Move)"
};

var sucker_punch = {
    name: "Sucker Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sucker_Punch_(Move)"
};

var toxic_spikes = {
    name: "Toxic Spikes",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Toxic_Spikes_(Move)"
};

var heart_swap = {
    name: "Heart Swap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heart_Swap_(Move)"
};

var aqua_ring = {
    name: "Aqua Ring",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aqua_Ring_(Move)"
};

var magnet_rise = {
    name: "Magnet Rise",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magnet_Rise_(Move)"
};

var flare_blitz = {
    name: "Flare Blitz",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flare_Blitz_(Move)"
};

var force_palm = {
    name: "Force Palm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Force_Palm_(Move)"
};

var aura_sphere = {
    name: "Aura Sphere",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aura_Sphere_(Move)"
};

var rock_polish = {
    name: "Rock Polish",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rock_Polish_(Move)"
};

var poison_jab = {
    name: "Poison Jab",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Poison_Jab_(Move)"
};

var dark_pulse = {
    name: "Dark Pulse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dark_Pulse_(Move)"
};

var night_slash = {
    name: "Night Slash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Night_Slash_(Move)"
};

var aqua_tail = {
    name: "Aqua Tail",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aqua_Tail_(Move)"
};

var seed_bomb = {
    name: "Seed Bomb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Seed_Bomb_(Move)"
};

var air_slash = {
    name: "Air Slash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Air_Slash_(Move)"
};

var x-scissor = {
    name: "X-scissor",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X-scissor_(Move)"
};

var bug_buzz = {
    name: "Bug Buzz",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bug_Buzz_(Move)"
};

var dragon_pulse = {
    name: "Dragon Pulse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dragon_Pulse_(Move)"
};

var dragon_rush = {
    name: "Dragon Rush",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dragon_Rush_(Move)"
};

var power_gem = {
    name: "Power Gem",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Power_Gem_(Move)"
};

var drain_punch = {
    name: "Drain Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Drain_Punch_(Move)"
};

var vacuum_wave = {
    name: "Vacuum Wave",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Vacuum_Wave_(Move)"
};

var focus_blast = {
    name: "Focus Blast",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Focus_Blast_(Move)"
};

var energy_ball = {
    name: "Energy Ball",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Energy_Ball_(Move)"
};

var brave_bird = {
    name: "Brave Bird",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Brave_Bird_(Move)"
};

var earth_power = {
    name: "Earth Power",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Earth_Power_(Move)"
};

var switcheroo = {
    name: "Switcheroo",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Switcheroo_(Move)"
};

var giga_impact = {
    name: "Giga Impact",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Giga_Impact_(Move)"
};

var nasty_plot = {
    name: "Nasty Plot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nasty_Plot_(Move)"
};

var bullet_punch = {
    name: "Bullet Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bullet_Punch_(Move)"
};

var avalanche = {
    name: "Avalanche",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Avalanche_(Move)"
};

var ice_shard = {
    name: "Ice Shard",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ice_Shard_(Move)"
};

var shadow_claw = {
    name: "Shadow Claw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shadow_Claw_(Move)"
};

var thunder_fang = {
    name: "Thunder Fang",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Thunder_Fang_(Move)"
};

var ice_fang = {
    name: "Ice Fang",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ice_Fang_(Move)"
};

var fire_fang = {
    name: "Fire Fang",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fire_Fang_(Move)"
};

var shadow_sneak = {
    name: "Shadow Sneak",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shadow_Sneak_(Move)"
};

var mud_bomb = {
    name: "Mud Bomb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mud_Bomb_(Move)"
};

var psycho_cut = {
    name: "Psycho Cut",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Psycho_Cut_(Move)"
};

var zen_headbutt = {
    name: "Zen Headbutt",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Zen_Headbutt_(Move)"
};

var mirror_shot = {
    name: "Mirror Shot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mirror_Shot_(Move)"
};

var flash_cannon = {
    name: "Flash Cannon",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flash_Cannon_(Move)"
};

var rock_climb = {
    name: "Rock Climb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rock_Climb_(Move)"
};

var defog = {
    name: "Defog",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Defog_(Move)"
};

var trick_room = {
    name: "Trick Room",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Trick_Room_(Move)"
};

var draco_meteor = {
    name: "Draco Meteor",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Draco_Meteor_(Move)"
};

var discharge = {
    name: "Discharge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Discharge_(Move)"
};

var lava_plume = {
    name: "Lava Plume",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lava_Plume_(Move)"
};

var leaf_storm = {
    name: "Leaf Storm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Leaf_Storm_(Move)"
};

var power_whip = {
    name: "Power Whip",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Power_Whip_(Move)"
};

var rock_wrecker = {
    name: "Rock Wrecker",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rock_Wrecker_(Move)"
};

var cross_poison = {
    name: "Cross Poison",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cross_Poison_(Move)"
};

var gunk_shot = {
    name: "Gunk Shot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gunk_Shot_(Move)"
};

var iron_head = {
    name: "Iron Head",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Iron_Head_(Move)"
};

var magnet_bomb = {
    name: "Magnet Bomb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magnet_Bomb_(Move)"
};

var stone_edge = {
    name: "Stone Edge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Stone_Edge_(Move)"
};

var captivate = {
    name: "Captivate",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Captivate_(Move)"
};

var stealth_rock = {
    name: "Stealth Rock",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Stealth_Rock_(Move)"
};

var grass_knot = {
    name: "Grass Knot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Grass_Knot_(Move)"
};

var chatter = {
    name: "Chatter",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chatter_(Move)"
};

var judgment = {
    name: "Judgment",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Judgment_(Move)"
};

var bug_bite = {
    name: "Bug Bite",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bug_Bite_(Move)"
};

var charge_beam = {
    name: "Charge Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Charge_Beam_(Move)"
};

var wood_hammer = {
    name: "Wood Hammer",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wood_Hammer_(Move)"
};

var aqua_jet = {
    name: "Aqua Jet",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aqua_Jet_(Move)"
};

var attack_order = {
    name: "Attack Order",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Attack_Order_(Move)"
};

var defend_order = {
    name: "Defend Order",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Defend_Order_(Move)"
};

var heal_order = {
    name: "Heal Order",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heal_Order_(Move)"
};

var head_smash = {
    name: "Head Smash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Head_Smash_(Move)"
};

var double_hit = {
    name: "Double Hit",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Double_Hit_(Move)"
};

var roar_of_time = {
    name: "Roar Of Time",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Roar_Of_Time_(Move)"
};

var spacial_rend = {
    name: "Spacial Rend",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spacial_Rend_(Move)"
};

var lunar_dance = {
    name: "Lunar Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lunar_Dance_(Move)"
};

var crush_grip = {
    name: "Crush Grip",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Crush_Grip_(Move)"
};

var magma_storm = {
    name: "Magma Storm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magma_Storm_(Move)"
};

var dark_void = {
    name: "Dark Void",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dark_Void_(Move)"
};

var seed_flare = {
    name: "Seed Flare",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Seed_Flare_(Move)"
};

var ominous_wind = {
    name: "Ominous Wind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ominous_Wind_(Move)"
};

var shadow_force = {
    name: "Shadow Force",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shadow_Force_(Move)"
};

var hone_claws = {
    name: "Hone Claws",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hone_Claws_(Move)"
};

var wide_guard = {
    name: "Wide Guard",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wide_Guard_(Move)"
};

var guard_split = {
    name: "Guard Split",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Guard_Split_(Move)"
};

var power_split = {
    name: "Power Split",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Power_Split_(Move)"
};

var wonder_room = {
    name: "Wonder Room",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wonder_Room_(Move)"
};

var psyshock = {
    name: "Psyshock",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Psyshock_(Move)"
};

var venoshock = {
    name: "Venoshock",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Venoshock_(Move)"
};

var autotomize = {
    name: "Autotomize",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Autotomize_(Move)"
};

var rage_powder = {
    name: "Rage Powder",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rage_Powder_(Move)"
};

var telekinesis = {
    name: "Telekinesis",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Telekinesis_(Move)"
};

var magic_room = {
    name: "Magic Room",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magic_Room_(Move)"
};

var smack_down = {
    name: "Smack Down",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Smack_Down_(Move)"
};

var storm_throw = {
    name: "Storm Throw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Storm_Throw_(Move)"
};

var flame_burst = {
    name: "Flame Burst",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flame_Burst_(Move)"
};

var sludge_wave = {
    name: "Sludge Wave",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sludge_Wave_(Move)"
};

var quiver_dance = {
    name: "Quiver Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Quiver_Dance_(Move)"
};

var heavy_slam = {
    name: "Heavy Slam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heavy_Slam_(Move)"
};

var synchronoise = {
    name: "Synchronoise",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Synchronoise_(Move)"
};

var electro_ball = {
    name: "Electro Ball",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Electro_Ball_(Move)"
};

var soak = {
    name: "Soak",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Soak_(Move)"
};

var flame_charge = {
    name: "Flame Charge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flame_Charge_(Move)"
};

var coil = {
    name: "Coil",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Coil_(Move)"
};

var low_sweep = {
    name: "Low Sweep",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Low_Sweep_(Move)"
};

var acid_spray = {
    name: "Acid Spray",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Acid_Spray_(Move)"
};

var foul_play = {
    name: "Foul Play",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Foul_Play_(Move)"
};

var simple_beam = {
    name: "Simple Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Simple_Beam_(Move)"
};

var entrainment = {
    name: "Entrainment",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Entrainment_(Move)"
};

var after_you = {
    name: "After You",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/After_You_(Move)"
};

var round = {
    name: "Round",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Round_(Move)"
};

var echoed_voice = {
    name: "Echoed Voice",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Echoed_Voice_(Move)"
};

var chip_away = {
    name: "Chip Away",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chip_Away_(Move)"
};

var clear_smog = {
    name: "Clear Smog",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Clear_Smog_(Move)"
};

var stored_power = {
    name: "Stored Power",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Stored_Power_(Move)"
};

var quick_guard = {
    name: "Quick Guard",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Quick_Guard_(Move)"
};

var ally_switch = {
    name: "Ally Switch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ally_Switch_(Move)"
};

var scald = {
    name: "Scald",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Scald_(Move)"
};

var shell_smash = {
    name: "Shell Smash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shell_Smash_(Move)"
};

var heal_pulse = {
    name: "Heal Pulse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heal_Pulse_(Move)"
};

var hex = {
    name: "Hex",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hex_(Move)"
};

var sky_drop = {
    name: "Sky Drop",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sky_Drop_(Move)"
};

var shift_gear = {
    name: "Shift Gear",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shift_Gear_(Move)"
};

var circle_throw = {
    name: "Circle Throw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Circle_Throw_(Move)"
};

var incinerate = {
    name: "Incinerate",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Incinerate_(Move)"
};

var quash = {
    name: "Quash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Quash_(Move)"
};

var acrobatics = {
    name: "Acrobatics",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Acrobatics_(Move)"
};

var reflect_type = {
    name: "Reflect Type",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Reflect_Type_(Move)"
};

var retaliate = {
    name: "Retaliate",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Retaliate_(Move)"
};

var final_gambit = {
    name: "Final Gambit",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Final_Gambit_(Move)"
};

var bestow = {
    name: "Bestow",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bestow_(Move)"
};

var inferno = {
    name: "Inferno",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Inferno_(Move)"
};

var water_pledge = {
    name: "Water Pledge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Water_Pledge_(Move)"
};

var fire_pledge = {
    name: "Fire Pledge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fire_Pledge_(Move)"
};

var grass_pledge = {
    name: "Grass Pledge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Grass_Pledge_(Move)"
};

var volt_switch = {
    name: "Volt Switch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Volt_Switch_(Move)"
};

var struggle_bug = {
    name: "Struggle Bug",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Struggle_Bug_(Move)"
};

var bulldoze = {
    name: "Bulldoze",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bulldoze_(Move)"
};

var frost_breath = {
    name: "Frost Breath",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Frost_Breath_(Move)"
};

var dragon_tail = {
    name: "Dragon Tail",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dragon_Tail_(Move)"
};

var work_up = {
    name: "Work Up",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Work_Up_(Move)"
};

var electroweb = {
    name: "Electroweb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Electroweb_(Move)"
};

var wild_charge = {
    name: "Wild Charge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wild_Charge_(Move)"
};

var drill_run = {
    name: "Drill Run",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Drill_Run_(Move)"
};

var dual_chop = {
    name: "Dual Chop",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dual_Chop_(Move)"
};

var heart_stamp = {
    name: "Heart Stamp",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heart_Stamp_(Move)"
};

var horn_leech = {
    name: "Horn Leech",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Horn_Leech_(Move)"
};

var sacred_sword = {
    name: "Sacred Sword",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sacred_Sword_(Move)"
};

var razor_shell = {
    name: "Razor Shell",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Razor_Shell_(Move)"
};

var heat_crash = {
    name: "Heat Crash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heat_Crash_(Move)"
};

var leaf_tornado = {
    name: "Leaf Tornado",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Leaf_Tornado_(Move)"
};

var steamroller = {
    name: "Steamroller",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Steamroller_(Move)"
};

var cotton_guard = {
    name: "Cotton Guard",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cotton_Guard_(Move)"
};

var night_daze = {
    name: "Night Daze",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Night_Daze_(Move)"
};

var psystrike = {
    name: "Psystrike",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Psystrike_(Move)"
};

var tail_slap = {
    name: "Tail Slap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tail_Slap_(Move)"
};

var hurricane = {
    name: "Hurricane",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hurricane_(Move)"
};

var head_charge = {
    name: "Head Charge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Head_Charge_(Move)"
};

var gear_grind = {
    name: "Gear Grind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gear_Grind_(Move)"
};

var searing_shot = {
    name: "Searing Shot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Searing_Shot_(Move)"
};

var techno_blast = {
    name: "Techno Blast",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Techno_Blast_(Move)"
};

var relic_song = {
    name: "Relic Song",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Relic_Song_(Move)"
};

var secret_sword = {
    name: "Secret Sword",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Secret_Sword_(Move)"
};

var glaciate = {
    name: "Glaciate",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Glaciate_(Move)"
};

var bolt_strike = {
    name: "Bolt Strike",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bolt_Strike_(Move)"
};

var blue_flare = {
    name: "Blue Flare",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blue_Flare_(Move)"
};

var fiery_dance = {
    name: "Fiery Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fiery_Dance_(Move)"
};

var freeze_shock = {
    name: "Freeze Shock",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Freeze_Shock_(Move)"
};

var ice_burn = {
    name: "Ice Burn",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ice_Burn_(Move)"
};

var snarl = {
    name: "Snarl",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Snarl_(Move)"
};

var icicle_crash = {
    name: "Icicle Crash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Icicle_Crash_(Move)"
};

var v-create = {
    name: "V-create",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/V-create_(Move)"
};

var fusion_flare = {
    name: "Fusion Flare",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fusion_Flare_(Move)"
};

var fusion_bolt = {
    name: "Fusion Bolt",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fusion_Bolt_(Move)"
};

var flying_press = {
    name: "Flying Press",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flying_Press_(Move)"
};

var mat_block = {
    name: "Mat Block",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mat_Block_(Move)"
};

var belch = {
    name: "Belch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Belch_(Move)"
};

var rototiller = {
    name: "Rototiller",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rototiller_(Move)"
};

var sticky_web = {
    name: "Sticky Web",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sticky_Web_(Move)"
};

var fell_stinger = {
    name: "Fell Stinger",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fell_Stinger_(Move)"
};

var phantom_force = {
    name: "Phantom Force",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Phantom_Force_(Move)"
};

var trick-or-treat = {
    name: "Trick-or-treat",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Trick-or-treat_(Move)"
};

var noble_roar = {
    name: "Noble Roar",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Noble_Roar_(Move)"
};

var ion_deluge = {
    name: "Ion Deluge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ion_Deluge_(Move)"
};

var parabolic_charge = {
    name: "Parabolic Charge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Parabolic_Charge_(Move)"
};

var forest's_curse = {
    name: "Forest's Curse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Forest's_Curse_(Move)"
};

var petal_blizzard = {
    name: "Petal Blizzard",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Petal_Blizzard_(Move)"
};

var freeze-dry = {
    name: "Freeze-dry",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Freeze-dry_(Move)"
};

var disarming_voice = {
    name: "Disarming Voice",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Disarming_Voice_(Move)"
};

var parting_shot = {
    name: "Parting Shot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Parting_Shot_(Move)"
};

var topsy-turvy = {
    name: "Topsy-turvy",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Topsy-turvy_(Move)"
};

var draining_kiss = {
    name: "Draining Kiss",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Draining_Kiss_(Move)"
};

var crafty_shield = {
    name: "Crafty Shield",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Crafty_Shield_(Move)"
};

var flower_shield = {
    name: "Flower Shield",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flower_Shield_(Move)"
};

var grassy_terrain = {
    name: "Grassy Terrain",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Grassy_Terrain_(Move)"
};

var misty_terrain = {
    name: "Misty Terrain",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Misty_Terrain_(Move)"
};

var electrify = {
    name: "Electrify",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Electrify_(Move)"
};

var play_rough = {
    name: "Play Rough",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Play_Rough_(Move)"
};

var fairy_wind = {
    name: "Fairy Wind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fairy_Wind_(Move)"
};

var moonblast = {
    name: "Moonblast",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Moonblast_(Move)"
};

var boomburst = {
    name: "Boomburst",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Boomburst_(Move)"
};

var fairy_lock = {
    name: "Fairy Lock",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fairy_Lock_(Move)"
};

var king's_shield = {
    name: "King's Shield",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/King's_Shield_(Move)"
};

var play_nice = {
    name: "Play Nice",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Play_Nice_(Move)"
};

var confide = {
    name: "Confide",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Confide_(Move)"
};

var diamond_storm = {
    name: "Diamond Storm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Diamond_Storm_(Move)"
};

var steam_eruption = {
    name: "Steam Eruption",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Steam_Eruption_(Move)"
};

var hyperspace_hole = {
    name: "Hyperspace Hole",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hyperspace_Hole_(Move)"
};

var water_shuriken = {
    name: "Water Shuriken",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Water_Shuriken_(Move)"
};

var mystical_fire = {
    name: "Mystical Fire",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mystical_Fire_(Move)"
};

var spiky_shield = {
    name: "Spiky Shield",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spiky_Shield_(Move)"
};

var aromatic_mist = {
    name: "Aromatic Mist",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aromatic_Mist_(Move)"
};

var eerie_impulse = {
    name: "Eerie Impulse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Eerie_Impulse_(Move)"
};

var venom_drench = {
    name: "Venom Drench",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Venom_Drench_(Move)"
};

var powder = {
    name: "Powder",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Powder_(Move)"
};

var geomancy = {
    name: "Geomancy",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Geomancy_(Move)"
};

var magnetic_flux = {
    name: "Magnetic Flux",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magnetic_Flux_(Move)"
};

var happy_hour = {
    name: "Happy Hour",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Happy_Hour_(Move)"
};

var electric_terrain = {
    name: "Electric Terrain",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Electric_Terrain_(Move)"
};

var dazzling_gleam = {
    name: "Dazzling Gleam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dazzling_Gleam_(Move)"
};

var celebrate = {
    name: "Celebrate",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Celebrate_(Move)"
};

var hold_hands = {
    name: "Hold Hands",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hold_Hands_(Move)"
};

var baby-doll_eyes = {
    name: "Baby-doll Eyes",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Baby-doll_Eyes_(Move)"
};

var nuzzle = {
    name: "Nuzzle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nuzzle_(Move)"
};

var hold_back = {
    name: "Hold Back",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hold_Back_(Move)"
};

var infestation = {
    name: "Infestation",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Infestation_(Move)"
};

var power-up_punch = {
    name: "Power-up Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Power-up_Punch_(Move)"
};

var oblivion_wing = {
    name: "Oblivion Wing",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Oblivion_Wing_(Move)"
};

var thousand_arrows = {
    name: "Thousand Arrows",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Thousand_Arrows_(Move)"
};

var thousand_waves = {
    name: "Thousand Waves",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Thousand_Waves_(Move)"
};

var land's_wrath = {
    name: "Land's Wrath",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Land's_Wrath_(Move)"
};

var light_of_ruin = {
    name: "Light Of Ruin",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Light_Of_Ruin_(Move)"
};

var origin_pulse = {
    name: "Origin Pulse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Origin_Pulse_(Move)"
};

var precipice_blades = {
    name: "Precipice Blades",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Precipice_Blades_(Move)"
};

var dragon_ascent = {
    name: "Dragon Ascent",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dragon_Ascent_(Move)"
};

var hyperspace_fury = {
    name: "Hyperspace Fury",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hyperspace_Fury_(Move)"
};
