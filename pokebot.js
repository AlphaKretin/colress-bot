var Discord = require('discord.io');
var bot = new Discord.Client({
    autorun: true,
    token: "get out"
});

var mons = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoranf", "nidorina", "nidoqueen", "nidoranm", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho_oh", "celebi", "treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken", "mudkip", "marshtomp", "swampert", "poochyena", "mightyena", "zigzagoon", "linoone", "wurmple", "silcoon", "beautifly", "cascoon", "dustox", "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry", "taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia", "gardevoir", "surskit", "masquerain", "shroomish", "breloom", "slakoth", "vigoroth", "slaking", "nincada", "ninjask", "shedinja", "whismur", "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass", "skitty", "delcatty", "sableye", "mawile", "aron", "lairon", "aggron", "meditite", "medicham", "electrike", "manectric", "plusle", "minun", "volbeat", "illumise", "roselia", "gulpin", "swalot", "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt", "torkoal", "spoink", "grumpig", "spinda", "trapinch", "vibrava", "flygon", "cacnea", "cacturne", "swablu", "altaria", "zangoose", "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish", "crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith", "armaldo", "feebas", "milotic", "castform", "kecleon", "shuppet", "banette", "duskull", "dusclops", "tropius", "chimecho", "absol", "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein", "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "bagon", "shelgon", "salamence", "beldum", "metang", "metagross", "regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza", "jirachi", "deoxys", "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape", "piplup", "prinplup", "empoleon", "starly", "staravia", "staraptor", "bidoof", "bibarel", "kricketot", "kricketune", "shinx", "luxio", "luxray", "budew", "roserade", "cranidos", "rampardos", "shieldon", "bastiodon", "burmy", "wormadam", "mothim", "combee", "vespiquen", "pachirisu", "buizel", "floatzel", "cherubi", "cherrim", "shellos", "gastrodon", "ambipom", "drifloon", "drifblim", "buneary", "lopunny", "mismagius", "honchkrow", "glameow", "purugly", "chingling", "stunky", "skuntank", "bronzor", "bronzong", "bonsly", "mime jr", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp", "munchlax", "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion", "croagunk", "toxicroak", "carnivine", "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile", "magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire", "magmortar", "togekiss", "yanmega", "leafeon", "glaceon", "gliscor", "mamoswine", "porygon_z", "gallade", "probopass", "dusknoir", "froslass", "rotom", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran", "regigigas", "giratina", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "arceus", "victini", "snivy", "servine", "serperior", "tepig", "pignite", "emboar", "oshawott", "dewott", "samurott", "patrat", "watchog", "lillipup", "herdier", "stoutland", "purrloin", "liepard", "pansage", "simisage", "pansear", "simisear", "panpour", "simipour", "munna", "musharna", "pidove", "tranquill", "unfezant", "blitzle", "zebstrika", "roggenrola", "boldore", "gigalith", "woobat", "swoobat", "drilbur", "excadrill", "audino", "timburr", "gurdurr", "conkeldurr", "tympole", "palpitoad", "seismitoad", "throh", "sawk", "sewaddle", "swadloon", "leavanny", "venipede", "whirlipede", "scolipede", "cottonee", "whimsicott", "petilil", "lilligant", "basculin", "sandile", "krokorok", "krookodile", "darumaka", "darmanitan", "maractus", "dwebble", "crustle", "scraggy", "scrafty", "sigilyph", "yamask", "cofagrigus", "tirtouga", "carracosta", "archen", "archeops", "trubbish", "garbodor", "zorua", "zoroark", "minccino", "cinccino", "gothita", "gothorita", "gothitelle", "solosis", "duosion", "reuniclus", "ducklett", "swanna", "vanillite", "vanillish", "vanilluxe", "deerling", "sawsbuck", "emolga", "karrablast", "escavalier", "foongus", "amoonguss", "frillish", "jellicent", "alomomola", "joltik", "galvantula", "ferroseed", "ferrothorn", "klink", "klang", "klinklang", "tynamo", "eelektrik", "eelektross", "elgyem", "beheeyem", "litwick", "lampent", "chandelure", "axew", "fraxure", "haxorus", "cubchoo", "beartic", "cryogonal", "shelmet", "accelgor", "stunfisk", "mienfoo", "mienshao", "druddigon", "golett", "golurk", "pawniard", "bisharp", "bouffalant", "rufflet", "braviary", "vullaby", "mandibuzz", "heatmor", "durant", "deino", "zweilous", "hydreigon", "larvesta", "volcarona", "cobalion", "terrakion", "virizion", "tornadus", "thundurus", "reshiram", "zekrom", "landorus", "kyurem", "keldeo", "meloetta", "genesect", "chespin", "quilladin", "chesnaught", "fennekin", "braixen", "delphox", "froakie", "frogadier", "greninja", "bunnelby", "diggersby", "fletchling", "fletchinder", "talonflame", "scatterbug", "spewpa", "vivillon", "litleo", "pyroar", "flabebe", "floette", "florges", "skiddo", "gogoat", "pancham", "pangoro", "furfrou", "espurr", "meowstic", "honedge", "doublade", "aegislash", "spritzee", "aromatisse", "swirlix", "slurpuff", "inkay", "malamar", "binacle", "barbaracle", "skrelp", "dragalge", "clauncher", "clawitzer", "helioptile", "heliolisk", "tyrunt", "tyrantrum", "amaura", "aurorus", "sylveon", "hawlucha", "dedenne", "carbink", "goomy", "sliggoo", "goodra", "klefki", "phantump", "trevenant", "pumpkaboo", "gourgeist", "bergmite", "avalugg", "noibat", "noivern", "xerneas", "yveltal", "zygarde", "diancie"];
var moves = ["pound", "karate chop", "double slap", "comet punch", "mega punch", "pay day", "fire punch", "ice punch", "thunder punch", "scratch", "vice grip", "guillotine", "razor wind", "swords dance", "cut", "gust", "wing attack", "whirlwind", "fly", "bind", "slam", "vine whip", "stomp", "double kick", "mega kick", "jump kick", "rolling kick", "sand attack", "headbutt", "horn attack", "fury attack", "horn drill", "tackle", "body slam", "wrap", "take down", "thrash", "double_edge", "tail whip", "poison sting", "twineedle", "pin missile", "leer", "bite", "growl", "roar", "sing", "supersonic", "sonic boom", "disable", "acid", "ember", "flamethrower", "mist", "water gun", "hydro pump", "surf", "ice beam", "blizzard", "psybeam", "bubble beam", "aurora beam", "hyper beam", "peck", "drill peck", "submission", "low kick", "counter", "seismic toss", "strength", "absorb", "mega drain", "leech seed", "growth", "razor leaf", "solar beam", "poison powder", "stun spore", "sleep powder", "petal dance", "string shot", "dragon rage", "fire spin", "thunder shock", "thunderbolt", "thunder wave", "thunder", "rock throw", "earthquake", "fissure", "dig", "toxic", "confusion", "psychic", "hypnosis", "meditate", "agility", "quick attack", "rage", "teleport", "night shade", "mimic", "screech", "double team", "recover", "harden", "minimize", "smokescreen", "confuse ray", "withdraw", "defense curl", "barrier", "light screen", "haze", "reflect", "focus energy", "bide", "metronome", "mirror move", "self_destruct", "egg bomb", "lick", "smog", "sludge", "bone club", "fire blast", "waterfall", "clamp", "swift", "skull bash", "spike cannon", "constrict", "amnesia", "kinesis", "soft_boiled", "high jump kick", "glare", "dream eater", "poison gas", "barrage", "leech life", "lovely kiss", "sky attack", "transform", "bubble", "dizzy punch", "spore", "flash", "psywave", "splash", "acid armor", "crabhammer", "explosion", "fury swipes", "bonemerang", "rest", "rock slide", "hyper fang", "sharpen", "conversion", "tri attack", "super fang", "slash", "substitute", "struggle", "sketch", "triple kick", "thief", "spider web", "mind reader", "nightmare", "flame wheel", "snore", "curse", "flail", "conversion 2", "aeroblast", "cotton spore", "reversal", "spite", "powder snow", "protect", "mach punch", "scary face", "feint attack", "sweet kiss", "belly drum", "sludge bomb", "mud_slap", "octazooka", "spikes", "zap cannon", "foresight", "destiny bond", "perish song", "icy wind", "detect", "bone rush", "lock_on", "outrage", "sandstorm", "giga drain", "endure", "charm", "rollout", "false swipe", "swagger", "milk drink", "spark", "fury cutter", "steel wing", "mean look", "attract", "sleep talk", "heal bell", "return", "present", "frustration", "safeguard", "pain split", "sacred fire", "magnitude", "dynamic punch", "megahorn", "dragon breath", "baton pass", "encore", "pursuit", "rapid spin", "sweet scent", "iron tail", "metal claw", "vital throw", "morning sun", "synthesis", "moonlight", "hidden power", "cross chop", "twister", "rain dance", "sunny day", "crunch", "mirror coat", "psych up", "extreme speed", "ancient power", "shadow ball", "future sight", "rock smash", "whirlpool", "beat up", "fake out", "uproar", "stockpile", "spit up", "swallow", "heat wave", "hail", "torment", "flatter", "will_o_wisp", "memento", "facade", "focus punch", "smelling salts", "follow me", "nature power", "charge", "taunt", "helping hand", "trick", "role play", "wish", "assist", "ingrain", "superpower", "magic coat", "recycle", "revenge", "brick break", "yawn", "knock off", "endeavor", "eruption", "skill swap", "imprison", "refresh", "grudge", "snatch", "secret power", "dive", "arm thrust", "camouflage", "tail glow", "luster purge", "mist ball", "feather dance", "teeter dance", "blaze kick", "mud sport", "ice ball", "needle arm", "slack off", "hyper voice", "poison fang", "crush claw", "blast burn", "hydro cannon", "meteor mash", "astonish", "weather ball", "aromatherapy", "fake tears", "air cutter", "overheat", "odor sleuth", "rock tomb", "silver wind", "metal sound", "grass whistle", "tickle", "cosmic power", "water spout", "signal beam", "shadow punch", "extrasensory", "sky uppercut", "sand tomb", "sheer cold", "muddy water", "bullet seed", "aerial ace", "icicle spear", "iron defense", "block", "howl", "dragon claw", "frenzy plant", "bulk up", "bounce", "mud shot", "poison tail", "covet", "volt tackle", "magical leaf", "water sport", "calm mind", "leaf blade", "dragon dance", "rock blast", "shock wave", "water pulse", "doom desire", "psycho boost", "roost", "gravity", "miracle eye", "wake_up slap", "hammer arm", "gyro ball", "healing wish", "brine", "natural gift", "feint", "pluck", "tailwind", "acupressure", "metal burst", "u_turn", "close combat", "payback", "assurance", "embargo", "fling", "psycho shift", "trump card", "heal block", "wring out", "power trick", "gastro acid", "lucky chant", "me first", "copycat", "power swap", "guard swap", "punishment", "last resort", "worry seed", "sucker punch", "toxic spikes", "heart swap", "aqua ring", "magnet rise", "flare blitz", "force palm", "aura sphere", "rock polish", "poison jab", "dark pulse", "night slash", "aqua tail", "seed bomb", "air slash", "x_scissor", "bug buzz", "dragon pulse", "dragon rush", "power gem", "drain punch", "vacuum wave", "focus blast", "energy ball", "brave bird", "earth power", "switcheroo", "giga impact", "nasty plot", "bullet punch", "avalanche", "ice shard", "shadow claw", "thunder fang", "ice fang", "fire fang", "shadow sneak", "mud bomb", "psycho cut", "zen headbutt", "mirror shot", "flash cannon", "rock climb", "defog", "trick room", "draco meteor", "discharge", "lava plume", "leaf storm", "power whip", "rock wrecker", "cross poison", "gunk shot", "iron head", "magnet bomb", "stone edge", "captivate", "stealth rock", "grass knot", "chatter", "judgment", "bug bite", "charge beam", "wood hammer", "aqua jet", "attack order", "defend order", "heal order", "head smash", "double hit", "roar of time", "spacial rend", "lunar dance", "crush grip", "magma storm", "dark void", "seed flare", "ominous wind", "shadow force", "hone claws", "wide guard", "guard split", "power split", "wonder room", "psyshock", "venoshock", "autotomize", "rage powder", "telekinesis", "magic room", "smack down", "storm throw", "flame burst", "sludge wave", "quiver dance", "heavy slam", "synchronoise", "electro ball", "soak", "flame charge", "coil", "low sweep", "acid spray", "foul play", "simple beam", "entrainment", "after you", "round", "echoed voice", "chip away", "clear smog", "stored power", "quick guard", "ally switch", "scald", "shell smash", "heal pulse", "hex", "sky drop", "shift gear", "circle throw", "incinerate", "quash", "acrobatics", "reflect type", "retaliate", "final gambit", "bestow", "inferno", "water pledge", "fire pledge", "grass pledge", "volt switch", "struggle bug", "bulldoze", "frost breath", "dragon tail", "work up", "electroweb", "wild charge", "drill run", "dual chop", "heart stamp", "horn leech", "sacred sword", "razor shell", "heat crash", "leaf tornado", "steamroller", "cotton guard", "night daze", "psystrike", "tail slap", "hurricane", "head charge", "gear grind", "searing shot", "techno blast", "relic song", "secret sword", "glaciate", "bolt strike", "blue flare", "fiery dance", "freeze shock", "ice burn", "snarl", "icicle crash", "v_create", "fusion flare", "fusion bolt", "flying press", "mat block", "belch", "rototiller", "sticky web", "fell stinger", "phantom force", "trick_or_treat", "noble roar", "ion deluge", "parabolic charge", "forests curse", "petal blizzard", "freeze_dry", "disarming voice", "parting shot", "topsy_turvy", "draining kiss", "crafty shield", "flower shield", "grassy terrain", "misty terrain", "electrify", "play rough", "fairy wind", "moonblast", "boomburst", "fairy lock", "kings shield", "play nice", "confide", "diamond storm", "steam eruption", "hyperspace hole", "water shuriken", "mystical fire", "spiky shield", "aromatic mist", "eerie impulse", "venom drench", "powder", "geomancy", "magnetic flux", "happy hour", "electric terrain", "dazzling gleam", "celebrate", "hold hands", "baby_doll eyes", "nuzzle", "hold back", "infestation", "power_up punch", "oblivion wing", "thousand arrows", "thousand waves", "lands wrath", "light of ruin", "origin pulse", "precipice blades", "dragon ascent", "hyperspace fury"];
var items = ["ability capsule", "ability urge", "abomasite", "absolite", "absorb bulb", "adamant orb", "adventure rules", "aerodactylite", "aggronite", "aguav berry", "air balloon", "alakazite", "altarianite", "ampharosite", "amulet coin", "antidote", "apicot berry", "armor fossil", "aspear berry", "audinite", "awakening", "babiri berry", "balmmushroom", "banettite", "beedrillite", "belue berry", "berry juice", "big mushroom", "big nugget", "big pearl", "big root", "binding band", "black belt", "black flute", "black sludge", "blackglasses", "blastoisinite", "blazikenite", "blk apricorn", "blu apricorn", "blue flute", "blue scarf", "blue shard", "bluk berry", "brightpowder", "bug gem", "burn drive", "burn heal", "calcium", "cameruptite", "carbos", "casteliacone", "cell battery", "charcoal", "charizardite x", "charizardite y", "charti berry", "cheri berry", "cherish ball", "chesto berry", "chilan berry", "chill drive", "choice band", "choice scarf", "choice specs", "chople berry", "claw fossil", "cleanse tag", "clever wing", "coba berry", "colbur berry", "colress machine", "comet shard", "cornn berry", "cover fossil", "custap berry", "damp mulch", "damp rock", "dark gem", "dawn stone", "deepseascale", "deepseatooth", "destiny knot", "diancite", "dire hit", "dire hit 2", "dire hit 3", "dive ball", "dna splicers", "dome fossil", "douse drive", "draco plate", "dragon fang", "dragon gem", "dragon scale", "dread plate", "dream ball", "dropped item", "dubious disc", "durin berry", "dusk ball", "dusk stone", "earth plate", "eject button", "electirizer", "electric gem", "elevator key", "elixir", "energy root", "energypowder", "enigma berry", "escape rope", "ether", "everstone", "eviolite", "exp share", "expert belt", "fairy gem", "fast ball", "fighting gem", "figy berry", "fire gem", "fire stone", "fist plate", "flame orb", "flame plate", "float stone", "fluffy tail", "flying gem", "focus band", "focus sash", "fresh water", "friend ball", "full heal", "full incense", "full restore", "galladite", "ganlon berry", "garchompite", "gardevoirite", "gengarite", "genius wing", "ghost gem", "glalitite", "gooey mulch", "grass gem", "great ball", "green scarf", "green shard", "grepa berry", "grip claw", "griseous orb", "grn apricorn", "ground gem", "growth mulch", "grubby hanky", "guard spec.", "gyaradosite", "haban berry", "hard stone", "heal ball", "heal powder", "health wing", "heart scale", "heat rock", "heavy ball", "helix fossil", "heracronite", "hm01", "hm02", "hm03", "hm04", "hm05", "hm06", "hm07", "hm08", "holo caster", "hondew berry", "honey", "honor of kalos", "houndoominite", "hp up", "hyper potion", "iapapa berry", "ice gem", "ice heal", "icicle plate", "icy rock", "insect plate", "intriguing stone", "iron", "iron ball", "iron plate", "item drop", "item urge", "jaboca berry", "kangaskhanite", "kasib berry", "kebia berry", "kelpsy berry", "kings rock", "lagging tail", "lansat berry", "latiasite", "latiosite", "lava cookie", "lax incense", "leaf stone", "leftovers", "lemonade", "lens case", "leppa berry", "level ball", "liechi berry", "life orb", "light ball", "light clay", "looker ticket", "lopunnite", "love ball", "lucarionite", "luck incense", "lucky egg", "lucky punch", "lum berry", "lure ball", "lustrous orb", "luxury ball", "macho brace", "magmarizer", "magnet", "mago berry", "magost berry", "manectite", "master ball", "mawilite", "max elixir", "max ether", "max potion", "max repel", "max revive", "meadow plate", "medal box", "medichamite", "mental herb", "metagrossite", "metal coat", "metal powder", "metronome", "mewtwonite x", "mewtwonite y", "micle berry", "mind plate", "miracle seed", "moomoo milk", "moon ball", "moon stone", "muscle band", "muscle wing", "mystic water", "nanab berry", "nest ball", "net ball", "nevermeltice", "nomel berry", "normal gem", "nugget", "occa berry", "odd incense", "odd keystone", "old amber", "old gateau", "oran berry", "oval charm", "oval stone", "pamtre berry", "park ball", "parlyz heal", "pass orb", "passho berry", "payapa berry", "pearl", "pearl string", "pecha berry", "permit", "persim berry", "petaya berry", "pidgeotite", "pinap berry", "pink scarf", "pinsirite", "pixie plate", "plasma card", "plume fossil", "pnk apricorn", "poison barb", "poison gem", "poké ball", "poké doll", "poké toy", "pomeg berry", "potion", "power anklet", "power band", "power belt", "power bracer", "power herb", "power lens", "power plant pass", "power weight", "pp max", "pp up", "premier ball", "pretty wing", "prism scale", "profs letter", "protector", "protein", "psychic gem", "pure incense", "qualot berry", "quick ball", "quick claw", "quick powder", "rabuta berry", "rare bone", "rare candy", "rawst berry", "razor claw", "razor fang", "razz berry", "reaper cloth", "red apricorn", "red card", "red flute", "red scarf", "red shard", "relic band", "relic copper", "relic crown", "relic gold", "relic silver", "relic statue", "relic vase", "repeat ball", "repel", "reset urge", "resist wing", "reveal glass", "revival herb", "revive", "rindo berry", "ring target", "rock gem", "rock incense", "rocky helmet", "roller skates", "root fossil", "rose incense", "rowap berry", "sablenite", "sacred ash", "safari ball", "salac berry", "salamencite", "sceptilite", "scizorite", "scope lens", "sea incense", "sharp beak", "sharpedonite", "shed shell", "shell bell", "shiny charm", "shiny stone", "shoal salt", "shoal shell", "shock drive", "shuca berry", "silk scarf", "silverpowder", "sitrus berry", "skull fossil", "sky plate", "slowbronite", "smoke ball", "smooth rock", "soda pop", "soft sand", "soothe bell", "soul dew", "spell tag", "spelon berry", "splash plate", "spooky plate", "sport ball", "sprinklotad", "stable mulch", "star piece", "stardust", "starf berry", "steel gem", "steelixite", "stick", "sticky barb", "stone plate", "sun stone", "super potion", "super repel", "swampertite", "sweet heart", "swift wing", "tamato berry", "tanga berry", "thick club", "thunderstone", "timer ball", "tinymushroom", "tm01", "tm02", "tm03", "tm04", "tm05", "tm06", "tm07", "tm08", "tm09", "tm10", "tm100", "tm11", "tm12", "tm13", "tm14", "tm15", "tm16", "tm17", "tm18", "tm19", "tm20", "tm21", "tm22", "tm23", "tm24", "tm25", "tm26", "tm27", "tm28", "tm29", "tm30", "tm31", "tm32", "tm33", "tm34", "tm35", "tm36", "tm37", "tm38", "tm39", "tm40", "tm41", "tm42", "tm43", "tm44", "tm45", "tm46", "tm47", "tm48", "tm49", "tm50", "tm51", "tm52", "tm53", "tm54", "tm55", "tm56", "tm57", "tm58", "tm59", "tm60", "tm61", "tm62", "tm63", "tm64", "tm65", "tm66", "tm67", "tm68", "tm69", "tm70", "tm71", "tm72", "tm73", "tm74", "tm75", "tm76", "tm77", "tm78", "tm79", "tm80", "tm81", "tm82", "tm83", "tm84", "tm85", "tm86", "tm87", "tm88", "tm89", "tm90", "tm91", "tm92", "tm93", "tm94", "tm95", "tm96", "tm97", "tm98", "tm99", "tmv pass", "toxic orb", "toxic plate", "twistedspoon", "tyranitarite", "ultra ball", "up_grade", "venusaurite", "wacan berry", "water gem", "water stone", "watmel berry", "wave incense", "wepear berry", "white flute", "white herb", "wht apricorn", "wide lens", "wiki berry", "wise glasses", "x accuracy", "x accuracy 2", "x accuracy 3", "x accuracy 6", "x attack", "x attack 2", "x attack 3", "x attack 6", "x defend", "x defend 2", "x defend 3", "x defend 6", "x sp def", "x sp def 2", "x sp def 3", "x sp def 6", "x special", "x special 2", "x special 3", "x special 6", "x speed", "x speed 2", "x speed 3", "x speed 6", "yache berry", "yellow flute", "yellow scarf", "yellow shard", "ylw apricorn", "zap plate", "zinc", "zoom lens"];
var abilities = ["adaptability", "aerilate", "aftermath", "air lock", "analytic", "anger point", "anticipation", "arena trap", "aroma veil", "aura break", "bad dreams", "battery", "battle armor", "battle bond", "berserk", "big pecks", "blaze", "bulletproof", "cacophony", "cheek pouch", "chlorophyll", "clear body", "cloud nine", "color change", "comatose", "competitive", "compound eyes", "contrary", "corrosion", "cursed body", "cute charm", "damp", "dancer", "dark aura", "dazzling", "defeatist", "defiant", "delta stream", "desolate land", "disguise", "download", "drizzle", "drought", "dry skin", "early bird", "effect spore", "electric surge", "fairy aura", "filter", "flame body", "flare boost", "flash fire", "flower gift", "flower veil", "fluffy", "forecast", "forewarn", "friend guard", "frisk", "full metal body", "fur coat", "gale wings", "gluttony", "gooey", "grass pelt", "guts", "harvest", "healer", "heatproof", "heavy metal", "honey gather", "huge power", "hustle", "hydration", "hyper cutter", "ice body", "illuminate", "illusion", "immunity", "imposter", "innards out", "infiltrator", "inner focus", "insomnia", "intimidate", "iron barbs", "iron fist", "justified", "keen eye", "klutz", "leaf guard", "levitate", "light metal", "lightning rod", "limber", "liquid ooze", "magic bounce", "magic guard", "magician", "magma armor", "magnet pull", "marvel scale", "mega launcher", "minus", "mold breaker", "moody", "motor drive", "moxie", "multiscale", "multitype", "mummy", "natural cure", "no guard", "normalize", "oblivious", "overcoat", "overgrow", "own tempo", "parental bond", "pickpocket", "pickup", "pixilate", "plus", "poison heal", "poison point", "poison touch", "power construct", "prankster", "pressure", "primordial sea", "protean", "pure power", "queenly majesty", "quick feet", "rain dish", "rattled", "receiver", "reckless", "refrigerate", "regenerator", "rivalry", "rks system", "rock head", "rough skin", "run away", "sand force", "sand rush", "sand stream", "sand veil", "sap sipper", "schooling", "scrappy", "serene grace", "shadow shield", "shadow tag", "shed skin", "sheer force", "shell armor", "shield dust", "shields down", "simple", "skill link", "slow start", "sniper", "snow cloak", "snow warning", "solar power", "solid rock", "soul_heart", "soundproof", "speed boost", "stakeout", "stall", "stamina", "stance change", "static", "steadfast", "stench", "sticky hold", "storm drain", "strong jaw", "sturdy", "suction cups", "super luck", "surge surfer", "swarm", "sweet veil", "swift swim", "symbiosis", "synchronize", "tangled feet", "technician", "telepathy", "teravolt", "thick fat", "tinted lens", "torrent", "tough claws", "toxic boost", "trace", "triage", "truant", "turboblaze", "unaware", "unburden", "unnerve", "victory star", "vital spirit", "volt absorb", "water absorb", "water compaction", "water veil", "weak armor", "white smoke", "wimp out", "wonder guard", "wonder skin", "zen mode"];

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
    if (message.toLowerCase().substring(0, 5) === "!item") {
        item(user, userID, channelID, message, event);
    }
    if (message.toLowerCase().substring(0, 8) === "!ability") {
        ability(user, userID, channelID, message, event);
    }
});

function help(user, userID, channelID, message, event) {
    bot.sendMessage({
        to: channelID,
        message: "Hi, I'm Pokébot! My job is to serve information about data in the Pokémon games. I recognise the following commands: \n!help: Displays this help message.\n!pokemon: Serves information about individual Pokémon.\n!move: Serves information about Pokémon moves.\n!item: Serves information about items.\n!ability: Serves information about pokemon abilites.\nFor more detail on each command, call it with 'help' as the first argument. For example, '!pokemon help'.\n~~Please use your Master Ball on Fearow or Tentacruel.~~\nI was created by AlphaKretin, using discord.io in node.js."
    });
}

function pokemon(user, userID, channelID, message, event) {
    var mon = message.substring(9);
    mon = mon.toLowerCase();
    if (mon === "help") {
        bot.sendMessage({
            to: channelID,
            message: "This command serves information about Pokémon! Use the Pokémon's name as the argument. If it doesn't work, try ignoring or substituting special characters - for example, 'nidoranm', 'farfetchd', 'mr mime', 'ho_oh', 'flabebe'."
        });
    } else if (mon === "list") {
    	list(user, userID, channelID, message, event, mons);
    } else {
        if (mons.indexOf(mon) !== -1) {
            mon = mon.replace(/ /g, "_");
            bot.sendMessage({
                to: channelID,
                message: "Image: " + eval(mon).image + "\nName: " + eval(mon).name + "\nPokédex No.: " + eval(mon).dex + "\nType: " + eval(mon).type + "\nAbility: " + eval(mon).ability + "\nEvolution: " + eval(mon).evolve + "\nWiki Link: " + eval(mon).wiki
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
            message: "This command serves information about Pokémon's moves! Use the move's name as the argument, with spaces where appropriate, ignoring apostrophes, and using '_' instead of '-' in move names that include it."
        });
    } else if (mov === "list") {
    	list(user, userID, channelID, message, event, moves);
    } else {
        if (moves.indexOf(mov) !== -1) {
            mov = mov.replace(/ /g, "_");
            bot.sendMessage({
                to: channelID,
                message: "Name: " + eval(mov).name + "\nType: " + eval(mov).type + "\nCategory: " + eval(mov).cat + "\nPower: " + eval(mov).power + "\nPP: " + eval(mov).pp + "\nAccuracy: " + eval(mov).acc + "\nEffect: " + eval(mov).effect + "\nWiki Link: " + eval(mov).wiki
            });
        } else {
            bot.sendMessage({
                to: channelID,
                message: "I don't recognise that move, " + user + "!"
            });
        }
    }
}

function item(user, userID, channelID, message, event) {
    var it = message.substring(6);
    it = it.toLowerCase();
    if (it === "help") {
        bot.sendMessage({
            to: channelID,
            message: "This command serves information about items! Use the item's name as the argument, with spaces where appropriate, ignoring apostrophes and full stops, and using '_' instead of '-' in item names that include it."
        });
    } else if (it === "list") {
    	list(user, userID, channelID, message, event, items);
    } else {
        if (items.indexOf(it) !== -1) {
            it = it.replace(/ /g, "_");
            bot.sendMessage({
                to: channelID,
                message: "Name: " + eval(it).name + "\nDescription: " + eval(it).desc + "\nWiki Link: " + eval(it).wiki
            });
        } else {
            bot.sendMessage({
                to: channelID,
                message: "I don't recognise that item, " + user + "!"
            });
        }
    }
}

function ability(user, userID, channelID, message, event) {
    var ab = message.substring(9);
    ab = ab.toLowerCase();
    if (ab === "help") {
        bot.sendMessage({
            to: channelID,
            message: "This command serves information about abilities! Use the ability's name as the argument, with spaces where appropriate, and using '_' instead of '-' in ability names that include it."
        });
    } else if (ab === "list") {
    	list(user, userID, channelID, message, event, abilities);
    } else {
        if (abilities.indexOf(ab) !== -1) {
            ab = ab.replace(/ /g, "_");
            bot.sendMessage({
                to: channelID,
                message: "Name: " + eval(ab).name + "\nDescription: " + eval(ab).desc + "\nWiki Link: " + eval(ab).wiki
            });
        } else {
            bot.sendMessage({
                to: channelID,
                message: "I don't recognise that ability, " + user + "!"
            });
        }
    }
}

function list(user, userID, channelID, message, event, arr){
	var out = "";
	for (var i = 0; i < arr.length; i++){
		if (out.length + arr[i].length < 2000){
			out += arr[i] + ", ";
		}
	}
	bot.sendMessage({
		to: channelID,
		message: "" + out
	});
}

var bulbasaur = {
    name: "Bulbasaur",
    dex: 1,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/1.shtml",
    image: "http://www.serebii.net/xy/pokemon/1.png"
};

var ivysaur = {
    name: "Ivysaur",
    dex: 2,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/2.shtml",
    image: "http://www.serebii.net/xy/pokemon/2.png"
};

var venusaur = {
    name: "Venusaur",
    dex: 3,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/3.shtml",
    image: "http://www.serebii.net/xy/pokemon/3.png"
};

var charmander = {
    name: "Charmander",
    dex: 4,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/4.shtml",
    image: "http://www.serebii.net/xy/pokemon/4.png"
};

var charmeleon = {
    name: "Charmeleon",
    dex: 5,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/5.shtml",
    image: "http://www.serebii.net/xy/pokemon/5.png"
};

var charizard = {
    name: "Charizard",
    dex: 6,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/6.shtml",
    image: "http://www.serebii.net/xy/pokemon/6.png"
};

var squirtle = {
    name: "Squirtle",
    dex: 7,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/7.shtml",
    image: "http://www.serebii.net/xy/pokemon/7.png"
};

var wartortle = {
    name: "Wartortle",
    dex: 8,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/8.shtml",
    image: "http://www.serebii.net/xy/pokemon/8.png"
};

var blastoise = {
    name: "Blastoise",
    dex: 9,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/9.shtml",
    image: "http://www.serebii.net/xy/pokemon/9.png"
};

var caterpie = {
    name: "Caterpie",
    dex: 10,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/10.shtml",
    image: "http://www.serebii.net/xy/pokemon/10.png"
};

var metapod = {
    name: "Metapod",
    dex: 11,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/11.shtml",
    image: "http://www.serebii.net/xy/pokemon/11.png"
};

var butterfree = {
    name: "Butterfree",
    dex: 12,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/12.shtml",
    image: "http://www.serebii.net/xy/pokemon/12.png"
};

var weedle = {
    name: "Weedle",
    dex: 13,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/13.shtml",
    image: "http://www.serebii.net/xy/pokemon/13.png"
};

var kakuna = {
    name: "Kakuna",
    dex: 14,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/14.shtml",
    image: "http://www.serebii.net/xy/pokemon/14.png"
};

var beedrill = {
    name: "Beedrill",
    dex: 15,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/15.shtml",
    image: "http://www.serebii.net/xy/pokemon/15.png"
};

var pidgey = {
    name: "Pidgey",
    dex: 16,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/16.shtml",
    image: "http://www.serebii.net/xy/pokemon/16.png"
};

var pidgeotto = {
    name: "Pidgeotto",
    dex: 17,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/17.shtml",
    image: "http://www.serebii.net/xy/pokemon/17.png"
};

var pidgeot = {
    name: "Pidgeot",
    dex: 18,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/18.shtml",
    image: "http://www.serebii.net/xy/pokemon/18.png"
};

var rattata = {
    name: "Rattata",
    dex: 19,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/19.shtml",
    image: "http://www.serebii.net/xy/pokemon/19.png"
};

var raticate = {
    name: "Raticate",
    dex: 20,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/20.shtml",
    image: "http://www.serebii.net/xy/pokemon/20.png"
};

var spearow = {
    name: "Spearow",
    dex: 21,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/21.shtml",
    image: "http://www.serebii.net/xy/pokemon/21.png"
};

var fearow = {
    name: "Fearow",
    dex: 22,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/22.shtml",
    image: "http://www.serebii.net/xy/pokemon/22.png"
};

var ekans = {
    name: "Ekans",
    dex: 23,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/23.shtml",
    image: "http://www.serebii.net/xy/pokemon/23.png"
};

var arbok = {
    name: "Arbok",
    dex: 24,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/24.shtml",
    image: "http://www.serebii.net/xy/pokemon/24.png"
};

var pikachu = {
    name: "Pikachu",
    dex: 25,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/25.shtml",
    image: "http://www.serebii.net/xy/pokemon/25.png"
};

var raichu = {
    name: "Raichu",
    dex: 26,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/26.shtml",
    image: "http://www.serebii.net/xy/pokemon/26.png"
};

var sandshrew = {
    name: "Sandshrew",
    dex: 27,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/27.shtml",
    image: "http://www.serebii.net/xy/pokemon/27.png"
};

var sandslash = {
    name: "Sandslash",
    dex: 28,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/28.shtml",
    image: "http://www.serebii.net/xy/pokemon/28.png"
};

var nidoranf = {
    name: "Nidoran♀",
    dex: 29,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/29.shtml",
    image: "http://www.serebii.net/xy/pokemon/29.png"
};

var nidorina = {
    name: "Nidorina",
    dex: 30,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/30.shtml",
    image: "http://www.serebii.net/xy/pokemon/30.png"
};

var nidoqueen = {
    name: "Nidoqueen",
    dex: 31,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/31.shtml",
    image: "http://www.serebii.net/xy/pokemon/31.png"
};

var nidoranm = {
    name: "Nidoran♂",
    dex: 32,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/32.shtml",
    image: "http://www.serebii.net/xy/pokemon/32.png"
};

var nidorino = {
    name: "Nidorino",
    dex: 33,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/33.shtml",
    image: "http://www.serebii.net/xy/pokemon/33.png"
};

var nidoking = {
    name: "Nidoking",
    dex: 34,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/34.shtml",
    image: "http://www.serebii.net/xy/pokemon/34.png"
};

var clefairy = {
    name: "Clefairy",
    dex: 35,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/35.shtml",
    image: "http://www.serebii.net/xy/pokemon/35.png"
};

var clefable = {
    name: "Clefable",
    dex: 36,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/36.shtml",
    image: "http://www.serebii.net/xy/pokemon/36.png"
};

var vulpix = {
    name: "Vulpix",
    dex: 37,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/37.shtml",
    image: "http://www.serebii.net/xy/pokemon/37.png"
};

var ninetales = {
    name: "Ninetales",
    dex: 38,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/38.shtml",
    image: "http://www.serebii.net/xy/pokemon/38.png"
};

var jigglypuff = {
    name: "Jigglypuff",
    dex: 39,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/39.shtml",
    image: "http://www.serebii.net/xy/pokemon/39.png"
};

var wigglytuff = {
    name: "Wigglytuff",
    dex: 40,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/40.shtml",
    image: "http://www.serebii.net/xy/pokemon/40.png"
};

var zubat = {
    name: "Zubat",
    dex: 41,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/41.shtml",
    image: "http://www.serebii.net/xy/pokemon/41.png"
};

var golbat = {
    name: "Golbat",
    dex: 42,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/42.shtml",
    image: "http://www.serebii.net/xy/pokemon/42.png"
};

var oddish = {
    name: "Oddish",
    dex: 43,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/43.shtml",
    image: "http://www.serebii.net/xy/pokemon/43.png"
};

var gloom = {
    name: "Gloom",
    dex: 44,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/44.shtml",
    image: "http://www.serebii.net/xy/pokemon/44.png"
};

var vileplume = {
    name: "Vileplume",
    dex: 45,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/45.shtml",
    image: "http://www.serebii.net/xy/pokemon/45.png"
};

var paras = {
    name: "Paras",
    dex: 46,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/46.shtml",
    image: "http://www.serebii.net/xy/pokemon/46.png"
};

var parasect = {
    name: "Parasect",
    dex: 47,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/47.shtml",
    image: "http://www.serebii.net/xy/pokemon/47.png"
};

var venonat = {
    name: "Venonat",
    dex: 48,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/48.shtml",
    image: "http://www.serebii.net/xy/pokemon/48.png"
};

var venomoth = {
    name: "Venomoth",
    dex: 49,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/49.shtml",
    image: "http://www.serebii.net/xy/pokemon/49.png"
};

var diglett = {
    name: "Diglett",
    dex: 50,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/50.shtml",
    image: "http://www.serebii.net/xy/pokemon/50.png"
};

var dugtrio = {
    name: "Dugtrio",
    dex: 51,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/51.shtml",
    image: "http://www.serebii.net/xy/pokemon/51.png"
};

var meowth = {
    name: "Meowth",
    dex: 52,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/52.shtml",
    image: "http://www.serebii.net/xy/pokemon/52.png"
};

var persian = {
    name: "Persian",
    dex: 53,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/53.shtml",
    image: "http://www.serebii.net/xy/pokemon/53.png"
};

var psyduck = {
    name: "Psyduck",
    dex: 54,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/54.shtml",
    image: "http://www.serebii.net/xy/pokemon/54.png"
};

var golduck = {
    name: "Golduck",
    dex: 55,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/55.shtml",
    image: "http://www.serebii.net/xy/pokemon/55.png"
};

var mankey = {
    name: "Mankey",
    dex: 56,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/56.shtml",
    image: "http://www.serebii.net/xy/pokemon/56.png"
};

var primeape = {
    name: "Primeape",
    dex: 57,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/57.shtml",
    image: "http://www.serebii.net/xy/pokemon/57.png"
};

var growlithe = {
    name: "Growlithe",
    dex: 58,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/58.shtml",
    image: "http://www.serebii.net/xy/pokemon/58.png"
};

var arcanine = {
    name: "Arcanine",
    dex: 59,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/59.shtml",
    image: "http://www.serebii.net/xy/pokemon/59.png"
};

var poliwag = {
    name: "Poliwag",
    dex: 60,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/60.shtml",
    image: "http://www.serebii.net/xy/pokemon/60.png"
};

var poliwhirl = {
    name: "Poliwhirl",
    dex: 61,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/61.shtml",
    image: "http://www.serebii.net/xy/pokemon/61.png"
};

var poliwrath = {
    name: "Poliwrath",
    dex: 62,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/62.shtml",
    image: "http://www.serebii.net/xy/pokemon/62.png"
};

var abra = {
    name: "Abra",
    dex: 63,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/63.shtml",
    image: "http://www.serebii.net/xy/pokemon/63.png"
};

var kadabra = {
    name: "Kadabra",
    dex: 64,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/64.shtml",
    image: "http://www.serebii.net/xy/pokemon/64.png"
};

var alakazam = {
    name: "Alakazam",
    dex: 65,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/65.shtml",
    image: "http://www.serebii.net/xy/pokemon/65.png"
};

var machop = {
    name: "Machop",
    dex: 66,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/66.shtml",
    image: "http://www.serebii.net/xy/pokemon/66.png"
};

var machoke = {
    name: "Machoke",
    dex: 67,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/67.shtml",
    image: "http://www.serebii.net/xy/pokemon/67.png"
};

var machamp = {
    name: "Machamp",
    dex: 68,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/68.shtml",
    image: "http://www.serebii.net/xy/pokemon/68.png"
};

var bellsprout = {
    name: "Bellsprout",
    dex: 69,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/69.shtml",
    image: "http://www.serebii.net/xy/pokemon/69.png"
};

var weepinbell = {
    name: "Weepinbell",
    dex: 70,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/70.shtml",
    image: "http://www.serebii.net/xy/pokemon/70.png"
};

var victreebel = {
    name: "Victreebel",
    dex: 71,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/71.shtml",
    image: "http://www.serebii.net/xy/pokemon/71.png"
};

var tentacool = {
    name: "Tentacool",
    dex: 72,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/72.shtml",
    image: "http://www.serebii.net/xy/pokemon/72.png"
};

var tentacruel = {
    name: "Tentacruel",
    dex: 73,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/73.shtml",
    image: "http://www.serebii.net/xy/pokemon/73.png"
};

var geodude = {
    name: "Geodude",
    dex: 74,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/74.shtml",
    image: "http://www.serebii.net/xy/pokemon/74.png"
};

var graveler = {
    name: "Graveler",
    dex: 75,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/75.shtml",
    image: "http://www.serebii.net/xy/pokemon/75.png"
};

var golem = {
    name: "Golem",
    dex: 76,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/76.shtml",
    image: "http://www.serebii.net/xy/pokemon/76.png"
};

var ponyta = {
    name: "Ponyta",
    dex: 77,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/77.shtml",
    image: "http://www.serebii.net/xy/pokemon/77.png"
};

var rapidash = {
    name: "Rapidash",
    dex: 78,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/78.shtml",
    image: "http://www.serebii.net/xy/pokemon/78.png"
};

var slowpoke = {
    name: "Slowpoke",
    dex: 79,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/79.shtml",
    image: "http://www.serebii.net/xy/pokemon/79.png"
};

var slowbro = {
    name: "Slowbro",
    dex: 80,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/80.shtml",
    image: "http://www.serebii.net/xy/pokemon/80.png"
};

var magnemite = {
    name: "Magnemite",
    dex: 81,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/81.shtml",
    image: "http://www.serebii.net/xy/pokemon/81.png"
};

var magneton = {
    name: "Magneton",
    dex: 82,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/82.shtml",
    image: "http://www.serebii.net/xy/pokemon/82.png"
};

var farfetchd = {
    name: "Farfetch'd",
    dex: 83,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/83.shtml",
    image: "http://www.serebii.net/xy/pokemon/83.png"
};

var doduo = {
    name: "Doduo",
    dex: 84,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/84.shtml",
    image: "http://www.serebii.net/xy/pokemon/84.png"
};

var dodrio = {
    name: "Dodrio",
    dex: 85,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/85.shtml",
    image: "http://www.serebii.net/xy/pokemon/85.png"
};

var seel = {
    name: "Seel",
    dex: 86,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/86.shtml",
    image: "http://www.serebii.net/xy/pokemon/86.png"
};

var dewgong = {
    name: "Dewgong",
    dex: 87,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/87.shtml",
    image: "http://www.serebii.net/xy/pokemon/87.png"
};

var grimer = {
    name: "Grimer",
    dex: 88,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/88.shtml",
    image: "http://www.serebii.net/xy/pokemon/88.png"
};

var muk = {
    name: "Muk",
    dex: 89,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/89.shtml",
    image: "http://www.serebii.net/xy/pokemon/89.png"
};

var shellder = {
    name: "Shellder",
    dex: 90,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/90.shtml",
    image: "http://www.serebii.net/xy/pokemon/90.png"
};

var cloyster = {
    name: "Cloyster",
    dex: 91,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/91.shtml",
    image: "http://www.serebii.net/xy/pokemon/91.png"
};

var gastly = {
    name: "Gastly",
    dex: 92,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/92.shtml",
    image: "http://www.serebii.net/xy/pokemon/92.png"
};

var haunter = {
    name: "Haunter",
    dex: 93,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/93.shtml",
    image: "http://www.serebii.net/xy/pokemon/93.png"
};

var gengar = {
    name: "Gengar",
    dex: 94,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/94.shtml",
    image: "http://www.serebii.net/xy/pokemon/94.png"
};

var onix = {
    name: "Onix",
    dex: 95,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/95.shtml",
    image: "http://www.serebii.net/xy/pokemon/95.png"
};

var drowzee = {
    name: "Drowzee",
    dex: 96,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/96.shtml",
    image: "http://www.serebii.net/xy/pokemon/96.png"
};

var hypno = {
    name: "Hypno",
    dex: 97,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/97.shtml",
    image: "http://www.serebii.net/xy/pokemon/97.png"
};

var krabby = {
    name: "Krabby",
    dex: 98,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/98.shtml",
    image: "http://www.serebii.net/xy/pokemon/98.png"
};

var kingler = {
    name: "Kingler",
    dex: 99,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/99.shtml",
    image: "http://www.serebii.net/xy/pokemon/99.png"
};

var voltorb = {
    name: "Voltorb",
    dex: 100,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/100.shtml",
    image: "http://www.serebii.net/xy/pokemon/100.png"
};

var electrode = {
    name: "Electrode",
    dex: 101,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/101.shtml",
    image: "http://www.serebii.net/xy/pokemon/101.png"
};

var exeggcute = {
    name: "Exeggcute",
    dex: 102,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/102.shtml",
    image: "http://www.serebii.net/xy/pokemon/102.png"
};

var exeggutor = {
    name: "Exeggutor",
    dex: 103,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/103.shtml",
    image: "http://www.serebii.net/xy/pokemon/103.png"
};

var cubone = {
    name: "Cubone",
    dex: 104,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/104.shtml",
    image: "http://www.serebii.net/xy/pokemon/104.png"
};

var marowak = {
    name: "Marowak",
    dex: 105,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/105.shtml",
    image: "http://www.serebii.net/xy/pokemon/105.png"
};

var hitmonlee = {
    name: "Hitmonlee",
    dex: 106,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/106.shtml",
    image: "http://www.serebii.net/xy/pokemon/106.png"
};

var hitmonchan = {
    name: "Hitmonchan",
    dex: 107,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/107.shtml",
    image: "http://www.serebii.net/xy/pokemon/107.png"
};

var lickitung = {
    name: "Lickitung",
    dex: 108,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/108.shtml",
    image: "http://www.serebii.net/xy/pokemon/108.png"
};

var koffing = {
    name: "Koffing",
    dex: 109,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/109.shtml",
    image: "http://www.serebii.net/xy/pokemon/109.png"
};

var weezing = {
    name: "Weezing",
    dex: 110,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/110.shtml",
    image: "http://www.serebii.net/xy/pokemon/110.png"
};

var rhyhorn = {
    name: "Rhyhorn",
    dex: 111,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/111.shtml",
    image: "http://www.serebii.net/xy/pokemon/111.png"
};

var rhydon = {
    name: "Rhydon",
    dex: 112,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/112.shtml",
    image: "http://www.serebii.net/xy/pokemon/112.png"
};

var chansey = {
    name: "Chansey",
    dex: 113,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/113.shtml",
    image: "http://www.serebii.net/xy/pokemon/113.png"
};

var tangela = {
    name: "Tangela",
    dex: 114,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/114.shtml",
    image: "http://www.serebii.net/xy/pokemon/114.png"
};

var kangaskhan = {
    name: "Kangaskhan",
    dex: 115,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/115.shtml",
    image: "http://www.serebii.net/xy/pokemon/115.png"
};

var horsea = {
    name: "Horsea",
    dex: 116,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/116.shtml",
    image: "http://www.serebii.net/xy/pokemon/116.png"
};

var seadra = {
    name: "Seadra",
    dex: 117,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/117.shtml",
    image: "http://www.serebii.net/xy/pokemon/117.png"
};

var goldeen = {
    name: "Goldeen",
    dex: 118,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/118.shtml",
    image: "http://www.serebii.net/xy/pokemon/118.png"
};

var seaking = {
    name: "Seaking",
    dex: 119,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/119.shtml",
    image: "http://www.serebii.net/xy/pokemon/119.png"
};

var staryu = {
    name: "Staryu",
    dex: 120,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/120.shtml",
    image: "http://www.serebii.net/xy/pokemon/120.png"
};

var starmie = {
    name: "Starmie",
    dex: 121,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/121.shtml",
    image: "http://www.serebii.net/xy/pokemon/121.png"
};

var mr_mime = {
    name: "Mr. Mime",
    dex: 122,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/122.shtml",
    image: "http://www.serebii.net/xy/pokemon/122.png"
};

var scyther = {
    name: "Scyther",
    dex: 123,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/123.shtml",
    image: "http://www.serebii.net/xy/pokemon/123.png"
};

var jynx = {
    name: "Jynx",
    dex: 124,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/124.shtml",
    image: "http://www.serebii.net/xy/pokemon/124.png"
};

var electabuzz = {
    name: "Electabuzz",
    dex: 125,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/125.shtml",
    image: "http://www.serebii.net/xy/pokemon/125.png"
};

var magmar = {
    name: "Magmar",
    dex: 126,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/126.shtml",
    image: "http://www.serebii.net/xy/pokemon/126.png"
};

var pinsir = {
    name: "Pinsir",
    dex: 127,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/127.shtml",
    image: "http://www.serebii.net/xy/pokemon/127.png"
};

var tauros = {
    name: "Tauros",
    dex: 128,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/128.shtml",
    image: "http://www.serebii.net/xy/pokemon/128.png"
};

var magikarp = {
    name: "Magikarp",
    dex: 129,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/129.shtml",
    image: "http://www.serebii.net/xy/pokemon/129.png"
};

var gyarados = {
    name: "Gyarados",
    dex: 130,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/130.shtml",
    image: "http://www.serebii.net/xy/pokemon/130.png"
};

var lapras = {
    name: "Lapras",
    dex: 131,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/131.shtml",
    image: "http://www.serebii.net/xy/pokemon/131.png"
};

var ditto = {
    name: "Ditto",
    dex: 132,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/132.shtml",
    image: "http://www.serebii.net/xy/pokemon/132.png"
};

var eevee = {
    name: "Eevee",
    dex: 133,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/133.shtml",
    image: "http://www.serebii.net/xy/pokemon/133.png"
};

var vaporeon = {
    name: "Vaporeon",
    dex: 134,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/134.shtml",
    image: "http://www.serebii.net/xy/pokemon/134.png"
};

var jolteon = {
    name: "Jolteon",
    dex: 135,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/135.shtml",
    image: "http://www.serebii.net/xy/pokemon/135.png"
};

var flareon = {
    name: "Flareon",
    dex: 136,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/136.shtml",
    image: "http://www.serebii.net/xy/pokemon/136.png"
};

var porygon = {
    name: "Porygon",
    dex: 137,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/137.shtml",
    image: "http://www.serebii.net/xy/pokemon/137.png"
};

var omanyte = {
    name: "Omanyte",
    dex: 138,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/138.shtml",
    image: "http://www.serebii.net/xy/pokemon/138.png"
};

var omastar = {
    name: "Omastar",
    dex: 139,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/139.shtml",
    image: "http://www.serebii.net/xy/pokemon/139.png"
};

var kabuto = {
    name: "Kabuto",
    dex: 140,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/140.shtml",
    image: "http://www.serebii.net/xy/pokemon/140.png"
};

var kabutops = {
    name: "Kabutops",
    dex: 141,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/141.shtml",
    image: "http://www.serebii.net/xy/pokemon/141.png"
};

var aerodactyl = {
    name: "Aerodactyl",
    dex: 142,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/142.shtml",
    image: "http://www.serebii.net/xy/pokemon/142.png"
};

var snorlax = {
    name: "Snorlax",
    dex: 143,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/143.shtml",
    image: "http://www.serebii.net/xy/pokemon/143.png"
};

var articuno = {
    name: "Articuno",
    dex: 144,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/144.shtml",
    image: "http://www.serebii.net/xy/pokemon/144.png"
};

var zapdos = {
    name: "Zapdos",
    dex: 145,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/145.shtml",
    image: "http://www.serebii.net/xy/pokemon/145.png"
};

var moltres = {
    name: "Moltres",
    dex: 146,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/146.shtml",
    image: "http://www.serebii.net/xy/pokemon/146.png"
};

var dratini = {
    name: "Dratini",
    dex: 147,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/147.shtml",
    image: "http://www.serebii.net/xy/pokemon/147.png"
};

var dragonair = {
    name: "Dragonair",
    dex: 148,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/148.shtml",
    image: "http://www.serebii.net/xy/pokemon/148.png"
};

var dragonite = {
    name: "Dragonite",
    dex: 149,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/149.shtml",
    image: "http://www.serebii.net/xy/pokemon/149.png"
};

var mewtwo = {
    name: "Mewtwo",
    dex: 150,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/150.shtml",
    image: "http://www.serebii.net/xy/pokemon/150.png"
};

var mew = {
    name: "Mew",
    dex: 151,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/151.shtml",
    image: "http://www.serebii.net/xy/pokemon/151.png"
};

var chikorita = {
    name: "Chikorita",
    dex: 152,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/152.shtml",
    image: "http://www.serebii.net/xy/pokemon/152.png"
};

var bayleef = {
    name: "Bayleef",
    dex: 153,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/153.shtml",
    image: "http://www.serebii.net/xy/pokemon/153.png"
};

var meganium = {
    name: "Meganium",
    dex: 154,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/154.shtml",
    image: "http://www.serebii.net/xy/pokemon/154.png"
};

var cyndaquil = {
    name: "Cyndaquil",
    dex: 155,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/155.shtml",
    image: "http://www.serebii.net/xy/pokemon/155.png"
};

var quilava = {
    name: "Quilava",
    dex: 156,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/156.shtml",
    image: "http://www.serebii.net/xy/pokemon/156.png"
};

var typhlosion = {
    name: "Typhlosion",
    dex: 157,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/157.shtml",
    image: "http://www.serebii.net/xy/pokemon/157.png"
};

var totodile = {
    name: "Totodile",
    dex: 158,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/158.shtml",
    image: "http://www.serebii.net/xy/pokemon/158.png"
};

var croconaw = {
    name: "Croconaw",
    dex: 159,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/159.shtml",
    image: "http://www.serebii.net/xy/pokemon/159.png"
};

var feraligatr = {
    name: "Feraligatr",
    dex: 160,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/160.shtml",
    image: "http://www.serebii.net/xy/pokemon/160.png"
};

var sentret = {
    name: "Sentret",
    dex: 161,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/161.shtml",
    image: "http://www.serebii.net/xy/pokemon/161.png"
};

var furret = {
    name: "Furret",
    dex: 162,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/162.shtml",
    image: "http://www.serebii.net/xy/pokemon/162.png"
};

var hoothoot = {
    name: "Hoothoot",
    dex: 163,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/163.shtml",
    image: "http://www.serebii.net/xy/pokemon/163.png"
};

var noctowl = {
    name: "Noctowl",
    dex: 164,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/164.shtml",
    image: "http://www.serebii.net/xy/pokemon/164.png"
};

var ledyba = {
    name: "Ledyba",
    dex: 165,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/165.shtml",
    image: "http://www.serebii.net/xy/pokemon/165.png"
};

var ledian = {
    name: "Ledian",
    dex: 166,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/166.shtml",
    image: "http://www.serebii.net/xy/pokemon/166.png"
};

var spinarak = {
    name: "Spinarak",
    dex: 167,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/167.shtml",
    image: "http://www.serebii.net/xy/pokemon/167.png"
};

var ariados = {
    name: "Ariados",
    dex: 168,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/168.shtml",
    image: "http://www.serebii.net/xy/pokemon/168.png"
};

var crobat = {
    name: "Crobat",
    dex: 169,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/169.shtml",
    image: "http://www.serebii.net/xy/pokemon/169.png"
};

var chinchou = {
    name: "Chinchou",
    dex: 170,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/170.shtml",
    image: "http://www.serebii.net/xy/pokemon/170.png"
};

var lanturn = {
    name: "Lanturn",
    dex: 171,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/171.shtml",
    image: "http://www.serebii.net/xy/pokemon/171.png"
};

var pichu = {
    name: "Pichu",
    dex: 172,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/172.shtml",
    image: "http://www.serebii.net/xy/pokemon/172.png"
};

var cleffa = {
    name: "Cleffa",
    dex: 173,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/173.shtml",
    image: "http://www.serebii.net/xy/pokemon/173.png"
};

var igglybuff = {
    name: "Igglybuff",
    dex: 174,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/174.shtml",
    image: "http://www.serebii.net/xy/pokemon/174.png"
};

var togepi = {
    name: "Togepi",
    dex: 175,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/175.shtml",
    image: "http://www.serebii.net/xy/pokemon/175.png"
};

var togetic = {
    name: "Togetic",
    dex: 176,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/176.shtml",
    image: "http://www.serebii.net/xy/pokemon/176.png"
};

var natu = {
    name: "Natu",
    dex: 177,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/177.shtml",
    image: "http://www.serebii.net/xy/pokemon/177.png"
};

var xatu = {
    name: "Xatu",
    dex: 178,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/178.shtml",
    image: "http://www.serebii.net/xy/pokemon/178.png"
};

var mareep = {
    name: "Mareep",
    dex: 179,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/179.shtml",
    image: "http://www.serebii.net/xy/pokemon/179.png"
};

var flaaffy = {
    name: "Flaaffy",
    dex: 180,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/180.shtml",
    image: "http://www.serebii.net/xy/pokemon/180.png"
};

var ampharos = {
    name: "Ampharos",
    dex: 181,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/181.shtml",
    image: "http://www.serebii.net/xy/pokemon/181.png"
};

var bellossom = {
    name: "Bellossom",
    dex: 182,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/182.shtml",
    image: "http://www.serebii.net/xy/pokemon/182.png"
};

var marill = {
    name: "Marill",
    dex: 183,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/183.shtml",
    image: "http://www.serebii.net/xy/pokemon/183.png"
};

var azumarill = {
    name: "Azumarill",
    dex: 184,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/184.shtml",
    image: "http://www.serebii.net/xy/pokemon/184.png"
};

var sudowoodo = {
    name: "Sudowoodo",
    dex: 185,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/185.shtml",
    image: "http://www.serebii.net/xy/pokemon/185.png"
};

var politoed = {
    name: "Politoed",
    dex: 186,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/186.shtml",
    image: "http://www.serebii.net/xy/pokemon/186.png"
};

var hoppip = {
    name: "Hoppip",
    dex: 187,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/187.shtml",
    image: "http://www.serebii.net/xy/pokemon/187.png"
};

var skiploom = {
    name: "Skiploom",
    dex: 188,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/188.shtml",
    image: "http://www.serebii.net/xy/pokemon/188.png"
};

var jumpluff = {
    name: "Jumpluff",
    dex: 189,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/189.shtml",
    image: "http://www.serebii.net/xy/pokemon/189.png"
};

var aipom = {
    name: "Aipom",
    dex: 190,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/190.shtml",
    image: "http://www.serebii.net/xy/pokemon/190.png"
};

var sunkern = {
    name: "Sunkern",
    dex: 191,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/191.shtml",
    image: "http://www.serebii.net/xy/pokemon/191.png"
};

var sunflora = {
    name: "Sunflora",
    dex: 192,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/192.shtml",
    image: "http://www.serebii.net/xy/pokemon/192.png"
};

var yanma = {
    name: "Yanma",
    dex: 193,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/193.shtml",
    image: "http://www.serebii.net/xy/pokemon/193.png"
};

var wooper = {
    name: "Wooper",
    dex: 194,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/194.shtml",
    image: "http://www.serebii.net/xy/pokemon/194.png"
};

var quagsire = {
    name: "Quagsire",
    dex: 195,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/195.shtml",
    image: "http://www.serebii.net/xy/pokemon/195.png"
};

var espeon = {
    name: "Espeon",
    dex: 196,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/196.shtml",
    image: "http://www.serebii.net/xy/pokemon/196.png"
};

var umbreon = {
    name: "Umbreon",
    dex: 197,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/197.shtml",
    image: "http://www.serebii.net/xy/pokemon/197.png"
};

var murkrow = {
    name: "Murkrow",
    dex: 198,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/198.shtml",
    image: "http://www.serebii.net/xy/pokemon/198.png"
};

var slowking = {
    name: "Slowking",
    dex: 199,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/199.shtml",
    image: "http://www.serebii.net/xy/pokemon/199.png"
};

var misdreavus = {
    name: "Misdreavus",
    dex: 200,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/200.shtml",
    image: "http://www.serebii.net/xy/pokemon/200.png"
};

var unown = {
    name: "Unown",
    dex: 201,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/201.shtml",
    image: "http://www.serebii.net/xy/pokemon/201.png"
};

var wobbuffet = {
    name: "Wobbuffet",
    dex: 202,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/202.shtml",
    image: "http://www.serebii.net/xy/pokemon/202.png"
};

var girafarig = {
    name: "Girafarig",
    dex: 203,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/203.shtml",
    image: "http://www.serebii.net/xy/pokemon/203.png"
};

var pineco = {
    name: "Pineco",
    dex: 204,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/204.shtml",
    image: "http://www.serebii.net/xy/pokemon/204.png"
};

var forretress = {
    name: "Forretress",
    dex: 205,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/205.shtml",
    image: "http://www.serebii.net/xy/pokemon/205.png"
};

var dunsparce = {
    name: "Dunsparce",
    dex: 206,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/206.shtml",
    image: "http://www.serebii.net/xy/pokemon/206.png"
};

var gligar = {
    name: "Gligar",
    dex: 207,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/207.shtml",
    image: "http://www.serebii.net/xy/pokemon/207.png"
};

var steelix = {
    name: "Steelix",
    dex: 208,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/208.shtml",
    image: "http://www.serebii.net/xy/pokemon/208.png"
};

var snubbull = {
    name: "Snubbull",
    dex: 209,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/209.shtml",
    image: "http://www.serebii.net/xy/pokemon/209.png"
};

var granbull = {
    name: "Granbull",
    dex: 210,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/210.shtml",
    image: "http://www.serebii.net/xy/pokemon/210.png"
};

var qwilfish = {
    name: "Qwilfish",
    dex: 211,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/211.shtml",
    image: "http://www.serebii.net/xy/pokemon/211.png"
};

var scizor = {
    name: "Scizor",
    dex: 212,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/212.shtml",
    image: "http://www.serebii.net/xy/pokemon/212.png"
};

var shuckle = {
    name: "Shuckle",
    dex: 213,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/213.shtml",
    image: "http://www.serebii.net/xy/pokemon/213.png"
};

var heracross = {
    name: "Heracross",
    dex: 214,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/214.shtml",
    image: "http://www.serebii.net/xy/pokemon/214.png"
};

var sneasel = {
    name: "Sneasel",
    dex: 215,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/215.shtml",
    image: "http://www.serebii.net/xy/pokemon/215.png"
};

var teddiursa = {
    name: "Teddiursa",
    dex: 216,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/216.shtml",
    image: "http://www.serebii.net/xy/pokemon/216.png"
};

var ursaring = {
    name: "Ursaring",
    dex: 217,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/217.shtml",
    image: "http://www.serebii.net/xy/pokemon/217.png"
};

var slugma = {
    name: "Slugma",
    dex: 218,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/218.shtml",
    image: "http://www.serebii.net/xy/pokemon/218.png"
};

var magcargo = {
    name: "Magcargo",
    dex: 219,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/219.shtml",
    image: "http://www.serebii.net/xy/pokemon/219.png"
};

var swinub = {
    name: "Swinub",
    dex: 220,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/220.shtml",
    image: "http://www.serebii.net/xy/pokemon/220.png"
};

var piloswine = {
    name: "Piloswine",
    dex: 221,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/221.shtml",
    image: "http://www.serebii.net/xy/pokemon/221.png"
};

var corsola = {
    name: "Corsola",
    dex: 222,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/222.shtml",
    image: "http://www.serebii.net/xy/pokemon/222.png"
};

var remoraid = {
    name: "Remoraid",
    dex: 223,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/223.shtml",
    image: "http://www.serebii.net/xy/pokemon/223.png"
};

var octillery = {
    name: "Octillery",
    dex: 224,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/224.shtml",
    image: "http://www.serebii.net/xy/pokemon/224.png"
};

var delibird = {
    name: "Delibird",
    dex: 225,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/225.shtml",
    image: "http://www.serebii.net/xy/pokemon/225.png"
};

var mantine = {
    name: "Mantine",
    dex: 226,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/226.shtml",
    image: "http://www.serebii.net/xy/pokemon/226.png"
};

var skarmory = {
    name: "Skarmory",
    dex: 227,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/227.shtml",
    image: "http://www.serebii.net/xy/pokemon/227.png"
};

var houndour = {
    name: "Houndour",
    dex: 228,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/228.shtml",
    image: "http://www.serebii.net/xy/pokemon/228.png"
};

var houndoom = {
    name: "Houndoom",
    dex: 229,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/229.shtml",
    image: "http://www.serebii.net/xy/pokemon/229.png"
};

var kingdra = {
    name: "Kingdra",
    dex: 230,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/230.shtml",
    image: "http://www.serebii.net/xy/pokemon/230.png"
};

var phanpy = {
    name: "Phanpy",
    dex: 231,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/231.shtml",
    image: "http://www.serebii.net/xy/pokemon/231.png"
};

var donphan = {
    name: "Donphan",
    dex: 232,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/232.shtml",
    image: "http://www.serebii.net/xy/pokemon/232.png"
};

var porygon2 = {
    name: "Porygon2",
    dex: 233,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/233.shtml",
    image: "http://www.serebii.net/xy/pokemon/233.png"
};

var stantler = {
    name: "Stantler",
    dex: 234,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/234.shtml",
    image: "http://www.serebii.net/xy/pokemon/234.png"
};

var smeargle = {
    name: "Smeargle",
    dex: 235,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/235.shtml",
    image: "http://www.serebii.net/xy/pokemon/235.png"
};

var tyrogue = {
    name: "Tyrogue",
    dex: 236,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/236.shtml",
    image: "http://www.serebii.net/xy/pokemon/236.png"
};

var hitmontop = {
    name: "Hitmontop",
    dex: 237,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/237.shtml",
    image: "http://www.serebii.net/xy/pokemon/237.png"
};

var smoochum = {
    name: "Smoochum",
    dex: 238,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/238.shtml",
    image: "http://www.serebii.net/xy/pokemon/238.png"
};

var elekid = {
    name: "Elekid",
    dex: 239,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/239.shtml",
    image: "http://www.serebii.net/xy/pokemon/239.png"
};

var magby = {
    name: "Magby",
    dex: 240,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/240.shtml",
    image: "http://www.serebii.net/xy/pokemon/240.png"
};

var miltank = {
    name: "Miltank",
    dex: 241,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/241.shtml",
    image: "http://www.serebii.net/xy/pokemon/241.png"
};

var blissey = {
    name: "Blissey",
    dex: 242,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/242.shtml",
    image: "http://www.serebii.net/xy/pokemon/242.png"
};

var raikou = {
    name: "Raikou",
    dex: 243,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/243.shtml",
    image: "http://www.serebii.net/xy/pokemon/243.png"
};

var entei = {
    name: "Entei",
    dex: 244,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/244.shtml",
    image: "http://www.serebii.net/xy/pokemon/244.png"
};

var suicune = {
    name: "Suicune",
    dex: 245,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/245.shtml",
    image: "http://www.serebii.net/xy/pokemon/245.png"
};

var larvitar = {
    name: "Larvitar",
    dex: 246,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/246.shtml",
    image: "http://www.serebii.net/xy/pokemon/246.png"
};

var pupitar = {
    name: "Pupitar",
    dex: 247,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/247.shtml",
    image: "http://www.serebii.net/xy/pokemon/247.png"
};

var tyranitar = {
    name: "Tyranitar",
    dex: 248,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/248.shtml",
    image: "http://www.serebii.net/xy/pokemon/248.png"
};

var lugia = {
    name: "Lugia",
    dex: 249,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/249.shtml",
    image: "http://www.serebii.net/xy/pokemon/249.png"
};

var ho_oh = {
    name: "Ho-oh",
    dex: 250,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/250.shtml",
    image: "http://www.serebii.net/xy/pokemon/250.png"
};

var celebi = {
    name: "Celebi",
    dex: 251,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/251.shtml",
    image: "http://www.serebii.net/xy/pokemon/251.png"
};

var treecko = {
    name: "Treecko",
    dex: 252,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/252.shtml",
    image: "http://www.serebii.net/xy/pokemon/252.png"
};

var grovyle = {
    name: "Grovyle",
    dex: 253,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/253.shtml",
    image: "http://www.serebii.net/xy/pokemon/253.png"
};

var sceptile = {
    name: "Sceptile",
    dex: 254,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/254.shtml",
    image: "http://www.serebii.net/xy/pokemon/254.png"
};

var torchic = {
    name: "Torchic",
    dex: 255,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/255.shtml",
    image: "http://www.serebii.net/xy/pokemon/255.png"
};

var combusken = {
    name: "Combusken",
    dex: 256,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/256.shtml",
    image: "http://www.serebii.net/xy/pokemon/256.png"
};

var blaziken = {
    name: "Blaziken",
    dex: 257,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/257.shtml",
    image: "http://www.serebii.net/xy/pokemon/257.png"
};

var mudkip = {
    name: "Mudkip",
    dex: 258,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/258.shtml",
    image: "http://www.serebii.net/xy/pokemon/258.png"
};

var marshtomp = {
    name: "Marshtomp",
    dex: 259,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/259.shtml",
    image: "http://www.serebii.net/xy/pokemon/259.png"
};

var swampert = {
    name: "Swampert",
    dex: 260,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/260.shtml",
    image: "http://www.serebii.net/xy/pokemon/260.png"
};

var poochyena = {
    name: "Poochyena",
    dex: 261,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/261.shtml",
    image: "http://www.serebii.net/xy/pokemon/261.png"
};

var mightyena = {
    name: "Mightyena",
    dex: 262,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/262.shtml",
    image: "http://www.serebii.net/xy/pokemon/262.png"
};

var zigzagoon = {
    name: "Zigzagoon",
    dex: 263,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/263.shtml",
    image: "http://www.serebii.net/xy/pokemon/263.png"
};

var linoone = {
    name: "Linoone",
    dex: 264,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/264.shtml",
    image: "http://www.serebii.net/xy/pokemon/264.png"
};

var wurmple = {
    name: "Wurmple",
    dex: 265,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/265.shtml",
    image: "http://www.serebii.net/xy/pokemon/265.png"
};

var silcoon = {
    name: "Silcoon",
    dex: 266,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/266.shtml",
    image: "http://www.serebii.net/xy/pokemon/266.png"
};

var beautifly = {
    name: "Beautifly",
    dex: 267,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/267.shtml",
    image: "http://www.serebii.net/xy/pokemon/267.png"
};

var cascoon = {
    name: "Cascoon",
    dex: 268,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/268.shtml",
    image: "http://www.serebii.net/xy/pokemon/268.png"
};

var dustox = {
    name: "Dustox",
    dex: 269,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/269.shtml",
    image: "http://www.serebii.net/xy/pokemon/269.png"
};

var lotad = {
    name: "Lotad",
    dex: 270,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/270.shtml",
    image: "http://www.serebii.net/xy/pokemon/270.png"
};

var lombre = {
    name: "Lombre",
    dex: 271,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/271.shtml",
    image: "http://www.serebii.net/xy/pokemon/271.png"
};

var ludicolo = {
    name: "Ludicolo",
    dex: 272,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/272.shtml",
    image: "http://www.serebii.net/xy/pokemon/272.png"
};

var seedot = {
    name: "Seedot",
    dex: 273,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/273.shtml",
    image: "http://www.serebii.net/xy/pokemon/273.png"
};

var nuzleaf = {
    name: "Nuzleaf",
    dex: 274,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/274.shtml",
    image: "http://www.serebii.net/xy/pokemon/274.png"
};

var shiftry = {
    name: "Shiftry",
    dex: 275,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/275.shtml",
    image: "http://www.serebii.net/xy/pokemon/275.png"
};

var taillow = {
    name: "Taillow",
    dex: 276,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/276.shtml",
    image: "http://www.serebii.net/xy/pokemon/276.png"
};

var swellow = {
    name: "Swellow",
    dex: 277,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/277.shtml",
    image: "http://www.serebii.net/xy/pokemon/277.png"
};

var wingull = {
    name: "Wingull",
    dex: 278,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/278.shtml",
    image: "http://www.serebii.net/xy/pokemon/278.png"
};

var pelipper = {
    name: "Pelipper",
    dex: 279,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/279.shtml",
    image: "http://www.serebii.net/xy/pokemon/279.png"
};

var ralts = {
    name: "Ralts",
    dex: 280,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/280.shtml",
    image: "http://www.serebii.net/xy/pokemon/280.png"
};

var kirlia = {
    name: "Kirlia",
    dex: 281,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/281.shtml",
    image: "http://www.serebii.net/xy/pokemon/281.png"
};

var gardevoir = {
    name: "Gardevoir",
    dex: 282,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/282.shtml",
    image: "http://www.serebii.net/xy/pokemon/282.png"
};

var surskit = {
    name: "Surskit",
    dex: 283,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/283.shtml",
    image: "http://www.serebii.net/xy/pokemon/283.png"
};

var masquerain = {
    name: "Masquerain",
    dex: 284,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/284.shtml",
    image: "http://www.serebii.net/xy/pokemon/284.png"
};

var shroomish = {
    name: "Shroomish",
    dex: 285,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/285.shtml",
    image: "http://www.serebii.net/xy/pokemon/285.png"
};

var breloom = {
    name: "Breloom",
    dex: 286,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/286.shtml",
    image: "http://www.serebii.net/xy/pokemon/286.png"
};

var slakoth = {
    name: "Slakoth",
    dex: 287,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/287.shtml",
    image: "http://www.serebii.net/xy/pokemon/287.png"
};

var vigoroth = {
    name: "Vigoroth",
    dex: 288,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/288.shtml",
    image: "http://www.serebii.net/xy/pokemon/288.png"
};

var slaking = {
    name: "Slaking",
    dex: 289,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/289.shtml",
    image: "http://www.serebii.net/xy/pokemon/289.png"
};

var nincada = {
    name: "Nincada",
    dex: 290,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/290.shtml",
    image: "http://www.serebii.net/xy/pokemon/290.png"
};

var ninjask = {
    name: "Ninjask",
    dex: 291,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/291.shtml",
    image: "http://www.serebii.net/xy/pokemon/291.png"
};

var shedinja = {
    name: "Shedinja",
    dex: 292,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/292.shtml",
    image: "http://www.serebii.net/xy/pokemon/292.png"
};

var whismur = {
    name: "Whismur",
    dex: 293,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/293.shtml",
    image: "http://www.serebii.net/xy/pokemon/293.png"
};

var loudred = {
    name: "Loudred",
    dex: 294,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/294.shtml",
    image: "http://www.serebii.net/xy/pokemon/294.png"
};

var exploud = {
    name: "Exploud",
    dex: 295,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/295.shtml",
    image: "http://www.serebii.net/xy/pokemon/295.png"
};

var makuhita = {
    name: "Makuhita",
    dex: 296,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/296.shtml",
    image: "http://www.serebii.net/xy/pokemon/296.png"
};

var hariyama = {
    name: "Hariyama",
    dex: 297,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/297.shtml",
    image: "http://www.serebii.net/xy/pokemon/297.png"
};

var azurill = {
    name: "Azurill",
    dex: 298,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/298.shtml",
    image: "http://www.serebii.net/xy/pokemon/298.png"
};

var nosepass = {
    name: "Nosepass",
    dex: 299,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/299.shtml",
    image: "http://www.serebii.net/xy/pokemon/299.png"
};

var skitty = {
    name: "Skitty",
    dex: 300,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/300.shtml",
    image: "http://www.serebii.net/xy/pokemon/300.png"
};

var delcatty = {
    name: "Delcatty",
    dex: 301,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/301.shtml",
    image: "http://www.serebii.net/xy/pokemon/301.png"
};

var sableye = {
    name: "Sableye",
    dex: 302,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/302.shtml",
    image: "http://www.serebii.net/xy/pokemon/302.png"
};

var mawile = {
    name: "Mawile",
    dex: 303,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/303.shtml",
    image: "http://www.serebii.net/xy/pokemon/303.png"
};

var aron = {
    name: "Aron",
    dex: 304,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/304.shtml",
    image: "http://www.serebii.net/xy/pokemon/304.png"
};

var lairon = {
    name: "Lairon",
    dex: 305,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/305.shtml",
    image: "http://www.serebii.net/xy/pokemon/305.png"
};

var aggron = {
    name: "Aggron",
    dex: 306,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/306.shtml",
    image: "http://www.serebii.net/xy/pokemon/306.png"
};

var meditite = {
    name: "Meditite",
    dex: 307,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/307.shtml",
    image: "http://www.serebii.net/xy/pokemon/307.png"
};

var medicham = {
    name: "Medicham",
    dex: 308,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/308.shtml",
    image: "http://www.serebii.net/xy/pokemon/308.png"
};

var electrike = {
    name: "Electrike",
    dex: 309,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/309.shtml",
    image: "http://www.serebii.net/xy/pokemon/309.png"
};

var manectric = {
    name: "Manectric",
    dex: 310,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/310.shtml",
    image: "http://www.serebii.net/xy/pokemon/310.png"
};

var plusle = {
    name: "Plusle",
    dex: 311,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/311.shtml",
    image: "http://www.serebii.net/xy/pokemon/311.png"
};

var minun = {
    name: "Minun",
    dex: 312,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/312.shtml",
    image: "http://www.serebii.net/xy/pokemon/312.png"
};

var volbeat = {
    name: "Volbeat",
    dex: 313,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/313.shtml",
    image: "http://www.serebii.net/xy/pokemon/313.png"
};

var illumise = {
    name: "Illumise",
    dex: 314,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/314.shtml",
    image: "http://www.serebii.net/xy/pokemon/314.png"
};

var roselia = {
    name: "Roselia",
    dex: 315,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/315.shtml",
    image: "http://www.serebii.net/xy/pokemon/315.png"
};

var gulpin = {
    name: "Gulpin",
    dex: 316,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/316.shtml",
    image: "http://www.serebii.net/xy/pokemon/316.png"
};

var swalot = {
    name: "Swalot",
    dex: 317,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/317.shtml",
    image: "http://www.serebii.net/xy/pokemon/317.png"
};

var carvanha = {
    name: "Carvanha",
    dex: 318,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/318.shtml",
    image: "http://www.serebii.net/xy/pokemon/318.png"
};

var sharpedo = {
    name: "Sharpedo",
    dex: 319,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/319.shtml",
    image: "http://www.serebii.net/xy/pokemon/319.png"
};

var wailmer = {
    name: "Wailmer",
    dex: 320,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/320.shtml",
    image: "http://www.serebii.net/xy/pokemon/320.png"
};

var wailord = {
    name: "Wailord",
    dex: 321,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/321.shtml",
    image: "http://www.serebii.net/xy/pokemon/321.png"
};

var numel = {
    name: "Numel",
    dex: 322,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/322.shtml",
    image: "http://www.serebii.net/xy/pokemon/322.png"
};

var camerupt = {
    name: "Camerupt",
    dex: 323,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/323.shtml",
    image: "http://www.serebii.net/xy/pokemon/323.png"
};

var torkoal = {
    name: "Torkoal",
    dex: 324,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/324.shtml",
    image: "http://www.serebii.net/xy/pokemon/324.png"
};

var spoink = {
    name: "Spoink",
    dex: 325,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/325.shtml",
    image: "http://www.serebii.net/xy/pokemon/325.png"
};

var grumpig = {
    name: "Grumpig",
    dex: 326,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/326.shtml",
    image: "http://www.serebii.net/xy/pokemon/326.png"
};

var spinda = {
    name: "Spinda",
    dex: 327,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/327.shtml",
    image: "http://www.serebii.net/xy/pokemon/327.png"
};

var trapinch = {
    name: "Trapinch",
    dex: 328,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/328.shtml",
    image: "http://www.serebii.net/xy/pokemon/328.png"
};

var vibrava = {
    name: "Vibrava",
    dex: 329,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/329.shtml",
    image: "http://www.serebii.net/xy/pokemon/329.png"
};

var flygon = {
    name: "Flygon",
    dex: 330,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/330.shtml",
    image: "http://www.serebii.net/xy/pokemon/330.png"
};

var cacnea = {
    name: "Cacnea",
    dex: 331,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/331.shtml",
    image: "http://www.serebii.net/xy/pokemon/331.png"
};

var cacturne = {
    name: "Cacturne",
    dex: 332,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/332.shtml",
    image: "http://www.serebii.net/xy/pokemon/332.png"
};

var swablu = {
    name: "Swablu",
    dex: 333,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/333.shtml",
    image: "http://www.serebii.net/xy/pokemon/333.png"
};

var altaria = {
    name: "Altaria",
    dex: 334,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/334.shtml",
    image: "http://www.serebii.net/xy/pokemon/334.png"
};

var zangoose = {
    name: "Zangoose",
    dex: 335,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/335.shtml",
    image: "http://www.serebii.net/xy/pokemon/335.png"
};

var seviper = {
    name: "Seviper",
    dex: 336,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/336.shtml",
    image: "http://www.serebii.net/xy/pokemon/336.png"
};

var lunatone = {
    name: "Lunatone",
    dex: 337,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/337.shtml",
    image: "http://www.serebii.net/xy/pokemon/337.png"
};

var solrock = {
    name: "Solrock",
    dex: 338,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/338.shtml",
    image: "http://www.serebii.net/xy/pokemon/338.png"
};

var barboach = {
    name: "Barboach",
    dex: 339,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/339.shtml",
    image: "http://www.serebii.net/xy/pokemon/339.png"
};

var whiscash = {
    name: "Whiscash",
    dex: 340,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/340.shtml",
    image: "http://www.serebii.net/xy/pokemon/340.png"
};

var corphish = {
    name: "Corphish",
    dex: 341,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/341.shtml",
    image: "http://www.serebii.net/xy/pokemon/341.png"
};

var crawdaunt = {
    name: "Crawdaunt",
    dex: 342,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/342.shtml",
    image: "http://www.serebii.net/xy/pokemon/342.png"
};

var baltoy = {
    name: "Baltoy",
    dex: 343,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/343.shtml",
    image: "http://www.serebii.net/xy/pokemon/343.png"
};

var claydol = {
    name: "Claydol",
    dex: 344,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/344.shtml",
    image: "http://www.serebii.net/xy/pokemon/344.png"
};

var lileep = {
    name: "Lileep",
    dex: 345,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/345.shtml",
    image: "http://www.serebii.net/xy/pokemon/345.png"
};

var cradily = {
    name: "Cradily",
    dex: 346,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/346.shtml",
    image: "http://www.serebii.net/xy/pokemon/346.png"
};

var anorith = {
    name: "Anorith",
    dex: 347,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/347.shtml",
    image: "http://www.serebii.net/xy/pokemon/347.png"
};

var armaldo = {
    name: "Armaldo",
    dex: 348,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/348.shtml",
    image: "http://www.serebii.net/xy/pokemon/348.png"
};

var feebas = {
    name: "Feebas",
    dex: 349,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/349.shtml",
    image: "http://www.serebii.net/xy/pokemon/349.png"
};

var milotic = {
    name: "Milotic",
    dex: 350,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/350.shtml",
    image: "http://www.serebii.net/xy/pokemon/350.png"
};

var castform = {
    name: "Castform",
    dex: 351,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/351.shtml",
    image: "http://www.serebii.net/xy/pokemon/351.png"
};

var kecleon = {
    name: "Kecleon",
    dex: 352,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/352.shtml",
    image: "http://www.serebii.net/xy/pokemon/352.png"
};

var shuppet = {
    name: "Shuppet",
    dex: 353,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/353.shtml",
    image: "http://www.serebii.net/xy/pokemon/353.png"
};

var banette = {
    name: "Banette",
    dex: 354,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/354.shtml",
    image: "http://www.serebii.net/xy/pokemon/354.png"
};

var duskull = {
    name: "Duskull",
    dex: 355,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/355.shtml",
    image: "http://www.serebii.net/xy/pokemon/355.png"
};

var dusclops = {
    name: "Dusclops",
    dex: 356,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/356.shtml",
    image: "http://www.serebii.net/xy/pokemon/356.png"
};

var tropius = {
    name: "Tropius",
    dex: 357,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/357.shtml",
    image: "http://www.serebii.net/xy/pokemon/357.png"
};

var chimecho = {
    name: "Chimecho",
    dex: 358,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/358.shtml",
    image: "http://www.serebii.net/xy/pokemon/358.png"
};

var absol = {
    name: "Absol",
    dex: 359,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/359.shtml",
    image: "http://www.serebii.net/xy/pokemon/359.png"
};

var wynaut = {
    name: "Wynaut",
    dex: 360,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/360.shtml",
    image: "http://www.serebii.net/xy/pokemon/360.png"
};

var snorunt = {
    name: "Snorunt",
    dex: 361,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/361.shtml",
    image: "http://www.serebii.net/xy/pokemon/361.png"
};

var glalie = {
    name: "Glalie",
    dex: 362,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/362.shtml",
    image: "http://www.serebii.net/xy/pokemon/362.png"
};

var spheal = {
    name: "Spheal",
    dex: 363,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/363.shtml",
    image: "http://www.serebii.net/xy/pokemon/363.png"
};

var sealeo = {
    name: "Sealeo",
    dex: 364,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/364.shtml",
    image: "http://www.serebii.net/xy/pokemon/364.png"
};

var walrein = {
    name: "Walrein",
    dex: 365,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/365.shtml",
    image: "http://www.serebii.net/xy/pokemon/365.png"
};

var clamperl = {
    name: "Clamperl",
    dex: 366,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/366.shtml",
    image: "http://www.serebii.net/xy/pokemon/366.png"
};

var huntail = {
    name: "Huntail",
    dex: 367,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/367.shtml",
    image: "http://www.serebii.net/xy/pokemon/367.png"
};

var gorebyss = {
    name: "Gorebyss",
    dex: 368,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/368.shtml",
    image: "http://www.serebii.net/xy/pokemon/368.png"
};

var relicanth = {
    name: "Relicanth",
    dex: 369,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/369.shtml",
    image: "http://www.serebii.net/xy/pokemon/369.png"
};

var luvdisc = {
    name: "Luvdisc",
    dex: 370,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/370.shtml",
    image: "http://www.serebii.net/xy/pokemon/370.png"
};

var bagon = {
    name: "Bagon",
    dex: 371,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/371.shtml",
    image: "http://www.serebii.net/xy/pokemon/371.png"
};

var shelgon = {
    name: "Shelgon",
    dex: 372,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/372.shtml",
    image: "http://www.serebii.net/xy/pokemon/372.png"
};

var salamence = {
    name: "Salamence",
    dex: 373,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/373.shtml",
    image: "http://www.serebii.net/xy/pokemon/373.png"
};

var beldum = {
    name: "Beldum",
    dex: 374,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/374.shtml",
    image: "http://www.serebii.net/xy/pokemon/374.png"
};

var metang = {
    name: "Metang",
    dex: 375,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/375.shtml",
    image: "http://www.serebii.net/xy/pokemon/375.png"
};

var metagross = {
    name: "Metagross",
    dex: 376,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/376.shtml",
    image: "http://www.serebii.net/xy/pokemon/376.png"
};

var regirock = {
    name: "Regirock",
    dex: 377,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/377.shtml",
    image: "http://www.serebii.net/xy/pokemon/377.png"
};

var regice = {
    name: "Regice",
    dex: 378,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/378.shtml",
    image: "http://www.serebii.net/xy/pokemon/378.png"
};

var registeel = {
    name: "Registeel",
    dex: 379,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/379.shtml",
    image: "http://www.serebii.net/xy/pokemon/379.png"
};

var latias = {
    name: "Latias",
    dex: 380,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/380.shtml",
    image: "http://www.serebii.net/xy/pokemon/380.png"
};

var latios = {
    name: "Latios",
    dex: 381,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/381.shtml",
    image: "http://www.serebii.net/xy/pokemon/381.png"
};

var kyogre = {
    name: "Kyogre",
    dex: 382,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/382.shtml",
    image: "http://www.serebii.net/xy/pokemon/382.png"
};

var groudon = {
    name: "Groudon",
    dex: 383,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/383.shtml",
    image: "http://www.serebii.net/xy/pokemon/383.png"
};

var rayquaza = {
    name: "Rayquaza",
    dex: 384,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/384.shtml",
    image: "http://www.serebii.net/xy/pokemon/384.png"
};

var jirachi = {
    name: "Jirachi",
    dex: 385,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/385.shtml",
    image: "http://www.serebii.net/xy/pokemon/385.png"
};

var deoxys = {
    name: "Deoxys",
    dex: 386,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/386.shtml",
    image: "http://www.serebii.net/xy/pokemon/386.png"
};

var turtwig = {
    name: "Turtwig",
    dex: 387,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/387.shtml",
    image: "http://www.serebii.net/xy/pokemon/387.png"
};

var grotle = {
    name: "Grotle",
    dex: 388,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/388.shtml",
    image: "http://www.serebii.net/xy/pokemon/388.png"
};

var torterra = {
    name: "Torterra",
    dex: 389,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/389.shtml",
    image: "http://www.serebii.net/xy/pokemon/389.png"
};

var chimchar = {
    name: "Chimchar",
    dex: 390,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/390.shtml",
    image: "http://www.serebii.net/xy/pokemon/390.png"
};

var monferno = {
    name: "Monferno",
    dex: 391,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/391.shtml",
    image: "http://www.serebii.net/xy/pokemon/391.png"
};

var infernape = {
    name: "Infernape",
    dex: 392,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/392.shtml",
    image: "http://www.serebii.net/xy/pokemon/392.png"
};

var piplup = {
    name: "Piplup",
    dex: 393,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/393.shtml",
    image: "http://www.serebii.net/xy/pokemon/393.png"
};

var prinplup = {
    name: "Prinplup",
    dex: 394,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/394.shtml",
    image: "http://www.serebii.net/xy/pokemon/394.png"
};

var empoleon = {
    name: "Empoleon",
    dex: 395,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/395.shtml",
    image: "http://www.serebii.net/xy/pokemon/395.png"
};

var starly = {
    name: "Starly",
    dex: 396,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/396.shtml",
    image: "http://www.serebii.net/xy/pokemon/396.png"
};

var staravia = {
    name: "Staravia",
    dex: 397,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/397.shtml",
    image: "http://www.serebii.net/xy/pokemon/397.png"
};

var staraptor = {
    name: "Staraptor",
    dex: 398,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/398.shtml",
    image: "http://www.serebii.net/xy/pokemon/398.png"
};

var bidoof = {
    name: "Bidoof",
    dex: 399,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/399.shtml",
    image: "http://www.serebii.net/xy/pokemon/399.png"
};

var bibarel = {
    name: "Bibarel",
    dex: 400,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/400.shtml",
    image: "http://www.serebii.net/xy/pokemon/400.png"
};

var kricketot = {
    name: "Kricketot",
    dex: 401,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/401.shtml",
    image: "http://www.serebii.net/xy/pokemon/401.png"
};

var kricketune = {
    name: "Kricketune",
    dex: 402,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/402.shtml",
    image: "http://www.serebii.net/xy/pokemon/402.png"
};

var shinx = {
    name: "Shinx",
    dex: 403,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/403.shtml",
    image: "http://www.serebii.net/xy/pokemon/403.png"
};

var luxio = {
    name: "Luxio",
    dex: 404,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/404.shtml",
    image: "http://www.serebii.net/xy/pokemon/404.png"
};

var luxray = {
    name: "Luxray",
    dex: 405,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/405.shtml",
    image: "http://www.serebii.net/xy/pokemon/405.png"
};

var budew = {
    name: "Budew",
    dex: 406,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/406.shtml",
    image: "http://www.serebii.net/xy/pokemon/406.png"
};

var roserade = {
    name: "Roserade",
    dex: 407,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/407.shtml",
    image: "http://www.serebii.net/xy/pokemon/407.png"
};

var cranidos = {
    name: "Cranidos",
    dex: 408,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/408.shtml",
    image: "http://www.serebii.net/xy/pokemon/408.png"
};

var rampardos = {
    name: "Rampardos",
    dex: 409,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/409.shtml",
    image: "http://www.serebii.net/xy/pokemon/409.png"
};

var shieldon = {
    name: "Shieldon",
    dex: 410,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/410.shtml",
    image: "http://www.serebii.net/xy/pokemon/410.png"
};

var bastiodon = {
    name: "Bastiodon",
    dex: 411,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/411.shtml",
    image: "http://www.serebii.net/xy/pokemon/411.png"
};

var burmy = {
    name: "Burmy",
    dex: 412,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/412.shtml",
    image: "http://www.serebii.net/xy/pokemon/412.png"
};

var wormadam = {
    name: "Wormadam",
    dex: 413,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/413.shtml",
    image: "http://www.serebii.net/xy/pokemon/413.png"
};

var mothim = {
    name: "Mothim",
    dex: 414,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/414.shtml",
    image: "http://www.serebii.net/xy/pokemon/414.png"
};

var combee = {
    name: "Combee",
    dex: 415,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/415.shtml",
    image: "http://www.serebii.net/xy/pokemon/415.png"
};

var vespiquen = {
    name: "Vespiquen",
    dex: 416,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/416.shtml",
    image: "http://www.serebii.net/xy/pokemon/416.png"
};

var pachirisu = {
    name: "Pachirisu",
    dex: 417,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/417.shtml",
    image: "http://www.serebii.net/xy/pokemon/417.png"
};

var buizel = {
    name: "Buizel",
    dex: 418,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/418.shtml",
    image: "http://www.serebii.net/xy/pokemon/418.png"
};

var floatzel = {
    name: "Floatzel",
    dex: 419,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/419.shtml",
    image: "http://www.serebii.net/xy/pokemon/419.png"
};

var cherubi = {
    name: "Cherubi",
    dex: 420,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/420.shtml",
    image: "http://www.serebii.net/xy/pokemon/420.png"
};

var cherrim = {
    name: "Cherrim",
    dex: 421,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/421.shtml",
    image: "http://www.serebii.net/xy/pokemon/421.png"
};

var shellos = {
    name: "Shellos",
    dex: 422,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/422.shtml",
    image: "http://www.serebii.net/xy/pokemon/422.png"
};

var gastrodon = {
    name: "Gastrodon",
    dex: 423,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/423.shtml",
    image: "http://www.serebii.net/xy/pokemon/423.png"
};

var ambipom = {
    name: "Ambipom",
    dex: 424,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/424.shtml",
    image: "http://www.serebii.net/xy/pokemon/424.png"
};

var drifloon = {
    name: "Drifloon",
    dex: 425,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/425.shtml",
    image: "http://www.serebii.net/xy/pokemon/425.png"
};

var drifblim = {
    name: "Drifblim",
    dex: 426,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/426.shtml",
    image: "http://www.serebii.net/xy/pokemon/426.png"
};

var buneary = {
    name: "Buneary",
    dex: 427,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/427.shtml",
    image: "http://www.serebii.net/xy/pokemon/427.png"
};

var lopunny = {
    name: "Lopunny",
    dex: 428,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/428.shtml",
    image: "http://www.serebii.net/xy/pokemon/428.png"
};

var mismagius = {
    name: "Mismagius",
    dex: 429,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/429.shtml",
    image: "http://www.serebii.net/xy/pokemon/429.png"
};

var honchkrow = {
    name: "Honchkrow",
    dex: 430,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/430.shtml",
    image: "http://www.serebii.net/xy/pokemon/430.png"
};

var glameow = {
    name: "Glameow",
    dex: 431,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/431.shtml",
    image: "http://www.serebii.net/xy/pokemon/431.png"
};

var purugly = {
    name: "Purugly",
    dex: 432,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/432.shtml",
    image: "http://www.serebii.net/xy/pokemon/432.png"
};

var chingling = {
    name: "Chingling",
    dex: 433,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/433.shtml",
    image: "http://www.serebii.net/xy/pokemon/433.png"
};

var stunky = {
    name: "Stunky",
    dex: 434,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/434.shtml",
    image: "http://www.serebii.net/xy/pokemon/434.png"
};

var skuntank = {
    name: "Skuntank",
    dex: 435,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/435.shtml",
    image: "http://www.serebii.net/xy/pokemon/435.png"
};

var bronzor = {
    name: "Bronzor",
    dex: 436,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/436.shtml",
    image: "http://www.serebii.net/xy/pokemon/436.png"
};

var bronzong = {
    name: "Bronzong",
    dex: 437,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/437.shtml",
    image: "http://www.serebii.net/xy/pokemon/437.png"
};

var bonsly = {
    name: "Bonsly",
    dex: 438,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/438.shtml",
    image: "http://www.serebii.net/xy/pokemon/438.png"
};

var mime_jr = {
    name: "Mime Jr.",
    dex: 439,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/439.shtml",
    image: "http://www.serebii.net/xy/pokemon/439.png"
};

var happiny = {
    name: "Happiny",
    dex: 440,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/440.shtml",
    image: "http://www.serebii.net/xy/pokemon/440.png"
};

var chatot = {
    name: "Chatot",
    dex: 441,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/441.shtml",
    image: "http://www.serebii.net/xy/pokemon/441.png"
};

var spiritomb = {
    name: "Spiritomb",
    dex: 442,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/442.shtml",
    image: "http://www.serebii.net/xy/pokemon/442.png"
};

var gible = {
    name: "Gible",
    dex: 443,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/443.shtml",
    image: "http://www.serebii.net/xy/pokemon/443.png"
};

var gabite = {
    name: "Gabite",
    dex: 444,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/444.shtml",
    image: "http://www.serebii.net/xy/pokemon/444.png"
};

var garchomp = {
    name: "Garchomp",
    dex: 445,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/445.shtml",
    image: "http://www.serebii.net/xy/pokemon/445.png"
};

var munchlax = {
    name: "Munchlax",
    dex: 446,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/446.shtml",
    image: "http://www.serebii.net/xy/pokemon/446.png"
};

var riolu = {
    name: "Riolu",
    dex: 447,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/447.shtml",
    image: "http://www.serebii.net/xy/pokemon/447.png"
};

var lucario = {
    name: "Lucario",
    dex: 448,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/448.shtml",
    image: "http://www.serebii.net/xy/pokemon/448.png"
};

var hippopotas = {
    name: "Hippopotas",
    dex: 449,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/449.shtml",
    image: "http://www.serebii.net/xy/pokemon/449.png"
};

var hippowdon = {
    name: "Hippowdon",
    dex: 450,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/450.shtml",
    image: "http://www.serebii.net/xy/pokemon/450.png"
};

var skorupi = {
    name: "Skorupi",
    dex: 451,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/451.shtml",
    image: "http://www.serebii.net/xy/pokemon/451.png"
};

var drapion = {
    name: "Drapion",
    dex: 452,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/452.shtml",
    image: "http://www.serebii.net/xy/pokemon/452.png"
};

var croagunk = {
    name: "Croagunk",
    dex: 453,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/453.shtml",
    image: "http://www.serebii.net/xy/pokemon/453.png"
};

var toxicroak = {
    name: "Toxicroak",
    dex: 454,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/454.shtml",
    image: "http://www.serebii.net/xy/pokemon/454.png"
};

var carnivine = {
    name: "Carnivine",
    dex: 455,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/455.shtml",
    image: "http://www.serebii.net/xy/pokemon/455.png"
};

var finneon = {
    name: "Finneon",
    dex: 456,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/456.shtml",
    image: "http://www.serebii.net/xy/pokemon/456.png"
};

var lumineon = {
    name: "Lumineon",
    dex: 457,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/457.shtml",
    image: "http://www.serebii.net/xy/pokemon/457.png"
};

var mantyke = {
    name: "Mantyke",
    dex: 458,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/458.shtml",
    image: "http://www.serebii.net/xy/pokemon/458.png"
};

var snover = {
    name: "Snover",
    dex: 459,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/459.shtml",
    image: "http://www.serebii.net/xy/pokemon/459.png"
};

var abomasnow = {
    name: "Abomasnow",
    dex: 460,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/460.shtml",
    image: "http://www.serebii.net/xy/pokemon/460.png"
};

var weavile = {
    name: "Weavile",
    dex: 461,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/461.shtml",
    image: "http://www.serebii.net/xy/pokemon/461.png"
};

var magnezone = {
    name: "Magnezone",
    dex: 462,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/462.shtml",
    image: "http://www.serebii.net/xy/pokemon/462.png"
};

var lickilicky = {
    name: "Lickilicky",
    dex: 463,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/463.shtml",
    image: "http://www.serebii.net/xy/pokemon/463.png"
};

var rhyperior = {
    name: "Rhyperior",
    dex: 464,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/464.shtml",
    image: "http://www.serebii.net/xy/pokemon/464.png"
};

var tangrowth = {
    name: "Tangrowth",
    dex: 465,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/465.shtml",
    image: "http://www.serebii.net/xy/pokemon/465.png"
};

var electivire = {
    name: "Electivire",
    dex: 466,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/466.shtml",
    image: "http://www.serebii.net/xy/pokemon/466.png"
};

var magmortar = {
    name: "Magmortar",
    dex: 467,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/467.shtml",
    image: "http://www.serebii.net/xy/pokemon/467.png"
};

var togekiss = {
    name: "Togekiss",
    dex: 468,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/468.shtml",
    image: "http://www.serebii.net/xy/pokemon/468.png"
};

var yanmega = {
    name: "Yanmega",
    dex: 469,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/469.shtml",
    image: "http://www.serebii.net/xy/pokemon/469.png"
};

var leafeon = {
    name: "Leafeon",
    dex: 470,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/470.shtml",
    image: "http://www.serebii.net/xy/pokemon/470.png"
};

var glaceon = {
    name: "Glaceon",
    dex: 471,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/471.shtml",
    image: "http://www.serebii.net/xy/pokemon/471.png"
};

var gliscor = {
    name: "Gliscor",
    dex: 472,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/472.shtml",
    image: "http://www.serebii.net/xy/pokemon/472.png"
};

var mamoswine = {
    name: "Mamoswine",
    dex: 473,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/473.shtml",
    image: "http://www.serebii.net/xy/pokemon/473.png"
};

var porygon_z = {
    name: "Porygon-Z",
    dex: 474,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/474.shtml",
    image: "http://www.serebii.net/xy/pokemon/474.png"
};

var gallade = {
    name: "Gallade",
    dex: 475,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/475.shtml",
    image: "http://www.serebii.net/xy/pokemon/475.png"
};

var probopass = {
    name: "Probopass",
    dex: 476,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/476.shtml",
    image: "http://www.serebii.net/xy/pokemon/476.png"
};

var dusknoir = {
    name: "Dusknoir",
    dex: 477,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/477.shtml",
    image: "http://www.serebii.net/xy/pokemon/477.png"
};

var froslass = {
    name: "Froslass",
    dex: 478,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/478.shtml",
    image: "http://www.serebii.net/xy/pokemon/478.png"
};

var rotom = {
    name: "Rotom",
    dex: 479,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/479.shtml",
    image: "http://www.serebii.net/xy/pokemon/479.png"
};

var uxie = {
    name: "Uxie",
    dex: 480,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/480.shtml",
    image: "http://www.serebii.net/xy/pokemon/480.png"
};

var mesprit = {
    name: "Mesprit",
    dex: 481,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/481.shtml",
    image: "http://www.serebii.net/xy/pokemon/481.png"
};

var azelf = {
    name: "Azelf",
    dex: 482,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/482.shtml",
    image: "http://www.serebii.net/xy/pokemon/482.png"
};

var dialga = {
    name: "Dialga",
    dex: 483,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/483.shtml",
    image: "http://www.serebii.net/xy/pokemon/483.png"
};

var palkia = {
    name: "Palkia",
    dex: 484,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/484.shtml",
    image: "http://www.serebii.net/xy/pokemon/484.png"
};

var heatran = {
    name: "Heatran",
    dex: 485,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/485.shtml",
    image: "http://www.serebii.net/xy/pokemon/485.png"
};

var regigigas = {
    name: "Regigigas",
    dex: 486,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/486.shtml",
    image: "http://www.serebii.net/xy/pokemon/486.png"
};

var giratina = {
    name: "Giratina",
    dex: 487,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/487.shtml",
    image: "http://www.serebii.net/xy/pokemon/487.png"
};

var cresselia = {
    name: "Cresselia",
    dex: 488,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/488.shtml",
    image: "http://www.serebii.net/xy/pokemon/488.png"
};

var phione = {
    name: "Phione",
    dex: 489,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/489.shtml",
    image: "http://www.serebii.net/xy/pokemon/489.png"
};

var manaphy = {
    name: "Manaphy",
    dex: 490,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/490.shtml",
    image: "http://www.serebii.net/xy/pokemon/490.png"
};

var darkrai = {
    name: "Darkrai",
    dex: 491,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/491.shtml",
    image: "http://www.serebii.net/xy/pokemon/491.png"
};

var shaymin = {
    name: "Shaymin",
    dex: 492,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/492.shtml",
    image: "http://www.serebii.net/xy/pokemon/492.png"
};

var arceus = {
    name: "Arceus",
    dex: 493,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/493.shtml",
    image: "http://www.serebii.net/xy/pokemon/493.png"
};

var victini = {
    name: "Victini",
    dex: 494,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/494.shtml",
    image: "http://www.serebii.net/xy/pokemon/494.png"
};

var snivy = {
    name: "Snivy",
    dex: 495,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/495.shtml",
    image: "http://www.serebii.net/xy/pokemon/495.png"
};

var servine = {
    name: "Servine",
    dex: 496,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/496.shtml",
    image: "http://www.serebii.net/xy/pokemon/496.png"
};

var serperior = {
    name: "Serperior",
    dex: 497,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/497.shtml",
    image: "http://www.serebii.net/xy/pokemon/497.png"
};

var tepig = {
    name: "Tepig",
    dex: 498,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/498.shtml",
    image: "http://www.serebii.net/xy/pokemon/498.png"
};

var pignite = {
    name: "Pignite",
    dex: 499,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/499.shtml",
    image: "http://www.serebii.net/xy/pokemon/499.png"
};

var emboar = {
    name: "Emboar",
    dex: 500,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/500.shtml",
    image: "http://www.serebii.net/xy/pokemon/500.png"
};

var oshawott = {
    name: "Oshawott",
    dex: 501,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/501.shtml",
    image: "http://www.serebii.net/xy/pokemon/501.png"
};

var dewott = {
    name: "Dewott",
    dex: 502,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/502.shtml",
    image: "http://www.serebii.net/xy/pokemon/502.png"
};

var samurott = {
    name: "Samurott",
    dex: 503,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/503.shtml",
    image: "http://www.serebii.net/xy/pokemon/503.png"
};

var patrat = {
    name: "Patrat",
    dex: 504,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/504.shtml",
    image: "http://www.serebii.net/xy/pokemon/504.png"
};

var watchog = {
    name: "Watchog",
    dex: 505,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/505.shtml",
    image: "http://www.serebii.net/xy/pokemon/505.png"
};

var lillipup = {
    name: "Lillipup",
    dex: 506,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/506.shtml",
    image: "http://www.serebii.net/xy/pokemon/506.png"
};

var herdier = {
    name: "Herdier",
    dex: 507,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/507.shtml",
    image: "http://www.serebii.net/xy/pokemon/507.png"
};

var stoutland = {
    name: "Stoutland",
    dex: 508,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/508.shtml",
    image: "http://www.serebii.net/xy/pokemon/508.png"
};

var purrloin = {
    name: "Purrloin",
    dex: 509,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/509.shtml",
    image: "http://www.serebii.net/xy/pokemon/509.png"
};

var liepard = {
    name: "Liepard",
    dex: 510,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/510.shtml",
    image: "http://www.serebii.net/xy/pokemon/510.png"
};

var pansage = {
    name: "Pansage",
    dex: 511,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/511.shtml",
    image: "http://www.serebii.net/xy/pokemon/511.png"
};

var simisage = {
    name: "Simisage",
    dex: 512,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/512.shtml",
    image: "http://www.serebii.net/xy/pokemon/512.png"
};

var pansear = {
    name: "Pansear",
    dex: 513,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/513.shtml",
    image: "http://www.serebii.net/xy/pokemon/513.png"
};

var simisear = {
    name: "Simisear",
    dex: 514,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/514.shtml",
    image: "http://www.serebii.net/xy/pokemon/514.png"
};

var panpour = {
    name: "Panpour",
    dex: 515,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/515.shtml",
    image: "http://www.serebii.net/xy/pokemon/515.png"
};

var simipour = {
    name: "Simipour",
    dex: 516,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/516.shtml",
    image: "http://www.serebii.net/xy/pokemon/516.png"
};

var munna = {
    name: "Munna",
    dex: 517,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/517.shtml",
    image: "http://www.serebii.net/xy/pokemon/517.png"
};

var musharna = {
    name: "Musharna",
    dex: 518,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/518.shtml",
    image: "http://www.serebii.net/xy/pokemon/518.png"
};

var pidove = {
    name: "Pidove",
    dex: 519,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/519.shtml",
    image: "http://www.serebii.net/xy/pokemon/519.png"
};

var tranquill = {
    name: "Tranquill",
    dex: 520,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/520.shtml",
    image: "http://www.serebii.net/xy/pokemon/520.png"
};

var unfezant = {
    name: "Unfezant",
    dex: 521,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/521.shtml",
    image: "http://www.serebii.net/xy/pokemon/521.png"
};

var blitzle = {
    name: "Blitzle",
    dex: 522,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/522.shtml",
    image: "http://www.serebii.net/xy/pokemon/522.png"
};

var zebstrika = {
    name: "Zebstrika",
    dex: 523,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/523.shtml",
    image: "http://www.serebii.net/xy/pokemon/523.png"
};

var roggenrola = {
    name: "Roggenrola",
    dex: 524,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/524.shtml",
    image: "http://www.serebii.net/xy/pokemon/524.png"
};

var boldore = {
    name: "Boldore",
    dex: 525,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/525.shtml",
    image: "http://www.serebii.net/xy/pokemon/525.png"
};

var gigalith = {
    name: "Gigalith",
    dex: 526,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/526.shtml",
    image: "http://www.serebii.net/xy/pokemon/526.png"
};

var woobat = {
    name: "Woobat",
    dex: 527,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/527.shtml",
    image: "http://www.serebii.net/xy/pokemon/527.png"
};

var swoobat = {
    name: "Swoobat",
    dex: 528,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/528.shtml",
    image: "http://www.serebii.net/xy/pokemon/528.png"
};

var drilbur = {
    name: "Drilbur",
    dex: 529,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/529.shtml",
    image: "http://www.serebii.net/xy/pokemon/529.png"
};

var excadrill = {
    name: "Excadrill",
    dex: 530,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/530.shtml",
    image: "http://www.serebii.net/xy/pokemon/530.png"
};

var audino = {
    name: "Audino",
    dex: 531,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/531.shtml",
    image: "http://www.serebii.net/xy/pokemon/531.png"
};

var timburr = {
    name: "Timburr",
    dex: 532,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/532.shtml",
    image: "http://www.serebii.net/xy/pokemon/532.png"
};

var gurdurr = {
    name: "Gurdurr",
    dex: 533,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/533.shtml",
    image: "http://www.serebii.net/xy/pokemon/533.png"
};

var conkeldurr = {
    name: "Conkeldurr",
    dex: 534,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/534.shtml",
    image: "http://www.serebii.net/xy/pokemon/534.png"
};

var tympole = {
    name: "Tympole",
    dex: 535,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/535.shtml",
    image: "http://www.serebii.net/xy/pokemon/535.png"
};

var palpitoad = {
    name: "Palpitoad",
    dex: 536,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/536.shtml",
    image: "http://www.serebii.net/xy/pokemon/536.png"
};

var seismitoad = {
    name: "Seismitoad",
    dex: 537,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/537.shtml",
    image: "http://www.serebii.net/xy/pokemon/537.png"
};

var throh = {
    name: "Throh",
    dex: 538,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/538.shtml",
    image: "http://www.serebii.net/xy/pokemon/538.png"
};

var sawk = {
    name: "Sawk",
    dex: 539,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/539.shtml",
    image: "http://www.serebii.net/xy/pokemon/539.png"
};

var sewaddle = {
    name: "Sewaddle",
    dex: 540,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/540.shtml",
    image: "http://www.serebii.net/xy/pokemon/540.png"
};

var swadloon = {
    name: "Swadloon",
    dex: 541,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/541.shtml",
    image: "http://www.serebii.net/xy/pokemon/541.png"
};

var leavanny = {
    name: "Leavanny",
    dex: 542,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/542.shtml",
    image: "http://www.serebii.net/xy/pokemon/542.png"
};

var venipede = {
    name: "Venipede",
    dex: 543,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/543.shtml",
    image: "http://www.serebii.net/xy/pokemon/543.png"
};

var whirlipede = {
    name: "Whirlipede",
    dex: 544,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/544.shtml",
    image: "http://www.serebii.net/xy/pokemon/544.png"
};

var scolipede = {
    name: "Scolipede",
    dex: 545,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/545.shtml",
    image: "http://www.serebii.net/xy/pokemon/545.png"
};

var cottonee = {
    name: "Cottonee",
    dex: 546,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/546.shtml",
    image: "http://www.serebii.net/xy/pokemon/546.png"
};

var whimsicott = {
    name: "Whimsicott",
    dex: 547,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/547.shtml",
    image: "http://www.serebii.net/xy/pokemon/547.png"
};

var petilil = {
    name: "Petilil",
    dex: 548,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/548.shtml",
    image: "http://www.serebii.net/xy/pokemon/548.png"
};

var lilligant = {
    name: "Lilligant",
    dex: 549,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/549.shtml",
    image: "http://www.serebii.net/xy/pokemon/549.png"
};

var basculin = {
    name: "Basculin",
    dex: 550,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/550.shtml",
    image: "http://www.serebii.net/xy/pokemon/550.png"
};

var sandile = {
    name: "Sandile",
    dex: 551,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/551.shtml",
    image: "http://www.serebii.net/xy/pokemon/551.png"
};

var krokorok = {
    name: "Krokorok",
    dex: 552,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/552.shtml",
    image: "http://www.serebii.net/xy/pokemon/552.png"
};

var krookodile = {
    name: "Krookodile",
    dex: 553,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/553.shtml",
    image: "http://www.serebii.net/xy/pokemon/553.png"
};

var darumaka = {
    name: "Darumaka",
    dex: 554,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/554.shtml",
    image: "http://www.serebii.net/xy/pokemon/554.png"
};

var darmanitan = {
    name: "Darmanitan",
    dex: 555,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/555.shtml",
    image: "http://www.serebii.net/xy/pokemon/555.png"
};

var maractus = {
    name: "Maractus",
    dex: 556,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/556.shtml",
    image: "http://www.serebii.net/xy/pokemon/556.png"
};

var dwebble = {
    name: "Dwebble",
    dex: 557,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/557.shtml",
    image: "http://www.serebii.net/xy/pokemon/557.png"
};

var crustle = {
    name: "Crustle",
    dex: 558,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/558.shtml",
    image: "http://www.serebii.net/xy/pokemon/558.png"
};

var scraggy = {
    name: "Scraggy",
    dex: 559,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/559.shtml",
    image: "http://www.serebii.net/xy/pokemon/559.png"
};

var scrafty = {
    name: "Scrafty",
    dex: 560,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/560.shtml",
    image: "http://www.serebii.net/xy/pokemon/560.png"
};

var sigilyph = {
    name: "Sigilyph",
    dex: 561,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/561.shtml",
    image: "http://www.serebii.net/xy/pokemon/561.png"
};

var yamask = {
    name: "Yamask",
    dex: 562,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/562.shtml",
    image: "http://www.serebii.net/xy/pokemon/562.png"
};

var cofagrigus = {
    name: "Cofagrigus",
    dex: 563,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/563.shtml",
    image: "http://www.serebii.net/xy/pokemon/563.png"
};

var tirtouga = {
    name: "Tirtouga",
    dex: 564,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/564.shtml",
    image: "http://www.serebii.net/xy/pokemon/564.png"
};

var carracosta = {
    name: "Carracosta",
    dex: 565,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/565.shtml",
    image: "http://www.serebii.net/xy/pokemon/565.png"
};

var archen = {
    name: "Archen",
    dex: 566,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/566.shtml",
    image: "http://www.serebii.net/xy/pokemon/566.png"
};

var archeops = {
    name: "Archeops",
    dex: 567,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/567.shtml",
    image: "http://www.serebii.net/xy/pokemon/567.png"
};

var trubbish = {
    name: "Trubbish",
    dex: 568,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/568.shtml",
    image: "http://www.serebii.net/xy/pokemon/568.png"
};

var garbodor = {
    name: "Garbodor",
    dex: 569,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/569.shtml",
    image: "http://www.serebii.net/xy/pokemon/569.png"
};

var zorua = {
    name: "Zorua",
    dex: 570,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/570.shtml",
    image: "http://www.serebii.net/xy/pokemon/570.png"
};

var zoroark = {
    name: "Zoroark",
    dex: 571,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/571.shtml",
    image: "http://www.serebii.net/xy/pokemon/571.png"
};

var minccino = {
    name: "Minccino",
    dex: 572,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/572.shtml",
    image: "http://www.serebii.net/xy/pokemon/572.png"
};

var cinccino = {
    name: "Cinccino",
    dex: 573,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/573.shtml",
    image: "http://www.serebii.net/xy/pokemon/573.png"
};

var gothita = {
    name: "Gothita",
    dex: 574,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/574.shtml",
    image: "http://www.serebii.net/xy/pokemon/574.png"
};

var gothorita = {
    name: "Gothorita",
    dex: 575,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/575.shtml",
    image: "http://www.serebii.net/xy/pokemon/575.png"
};

var gothitelle = {
    name: "Gothitelle",
    dex: 576,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/576.shtml",
    image: "http://www.serebii.net/xy/pokemon/576.png"
};

var solosis = {
    name: "Solosis",
    dex: 577,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/577.shtml",
    image: "http://www.serebii.net/xy/pokemon/577.png"
};

var duosion = {
    name: "Duosion",
    dex: 578,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/578.shtml",
    image: "http://www.serebii.net/xy/pokemon/578.png"
};

var reuniclus = {
    name: "Reuniclus",
    dex: 579,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/579.shtml",
    image: "http://www.serebii.net/xy/pokemon/579.png"
};

var ducklett = {
    name: "Ducklett",
    dex: 580,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/580.shtml",
    image: "http://www.serebii.net/xy/pokemon/580.png"
};

var swanna = {
    name: "Swanna",
    dex: 581,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/581.shtml",
    image: "http://www.serebii.net/xy/pokemon/581.png"
};

var vanillite = {
    name: "Vanillite",
    dex: 582,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/582.shtml",
    image: "http://www.serebii.net/xy/pokemon/582.png"
};

var vanillish = {
    name: "Vanillish",
    dex: 583,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/583.shtml",
    image: "http://www.serebii.net/xy/pokemon/583.png"
};

var vanilluxe = {
    name: "Vanilluxe",
    dex: 584,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/584.shtml",
    image: "http://www.serebii.net/xy/pokemon/584.png"
};

var deerling = {
    name: "Deerling",
    dex: 585,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/585.shtml",
    image: "http://www.serebii.net/xy/pokemon/585.png"
};

var sawsbuck = {
    name: "Sawsbuck",
    dex: 586,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/586.shtml",
    image: "http://www.serebii.net/xy/pokemon/586.png"
};

var emolga = {
    name: "Emolga",
    dex: 587,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/587.shtml",
    image: "http://www.serebii.net/xy/pokemon/587.png"
};

var karrablast = {
    name: "Karrablast",
    dex: 588,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/588.shtml",
    image: "http://www.serebii.net/xy/pokemon/588.png"
};

var escavalier = {
    name: "Escavalier",
    dex: 589,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/589.shtml",
    image: "http://www.serebii.net/xy/pokemon/589.png"
};

var foongus = {
    name: "Foongus",
    dex: 590,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/590.shtml",
    image: "http://www.serebii.net/xy/pokemon/590.png"
};

var amoonguss = {
    name: "Amoonguss",
    dex: 591,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/591.shtml",
    image: "http://www.serebii.net/xy/pokemon/591.png"
};

var frillish = {
    name: "Frillish",
    dex: 592,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/592.shtml",
    image: "http://www.serebii.net/xy/pokemon/592.png"
};

var jellicent = {
    name: "Jellicent",
    dex: 593,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/593.shtml",
    image: "http://www.serebii.net/xy/pokemon/593.png"
};

var alomomola = {
    name: "Alomomola",
    dex: 594,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/594.shtml",
    image: "http://www.serebii.net/xy/pokemon/594.png"
};

var joltik = {
    name: "Joltik",
    dex: 595,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/595.shtml",
    image: "http://www.serebii.net/xy/pokemon/595.png"
};

var galvantula = {
    name: "Galvantula",
    dex: 596,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/596.shtml",
    image: "http://www.serebii.net/xy/pokemon/596.png"
};

var ferroseed = {
    name: "Ferroseed",
    dex: 597,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/597.shtml",
    image: "http://www.serebii.net/xy/pokemon/597.png"
};

var ferrothorn = {
    name: "Ferrothorn",
    dex: 598,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/598.shtml",
    image: "http://www.serebii.net/xy/pokemon/598.png"
};

var klink = {
    name: "Klink",
    dex: 599,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/599.shtml",
    image: "http://www.serebii.net/xy/pokemon/599.png"
};

var klang = {
    name: "Klang",
    dex: 600,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/600.shtml",
    image: "http://www.serebii.net/xy/pokemon/600.png"
};

var klinklang = {
    name: "Klinklang",
    dex: 601,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/601.shtml",
    image: "http://www.serebii.net/xy/pokemon/601.png"
};

var tynamo = {
    name: "Tynamo",
    dex: 602,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/602.shtml",
    image: "http://www.serebii.net/xy/pokemon/602.png"
};

var eelektrik = {
    name: "Eelektrik",
    dex: 603,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/603.shtml",
    image: "http://www.serebii.net/xy/pokemon/603.png"
};

var eelektross = {
    name: "Eelektross",
    dex: 604,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/604.shtml",
    image: "http://www.serebii.net/xy/pokemon/604.png"
};

var elgyem = {
    name: "Elgyem",
    dex: 605,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/605.shtml",
    image: "http://www.serebii.net/xy/pokemon/605.png"
};

var beheeyem = {
    name: "Beheeyem",
    dex: 606,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/606.shtml",
    image: "http://www.serebii.net/xy/pokemon/606.png"
};

var litwick = {
    name: "Litwick",
    dex: 607,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/607.shtml",
    image: "http://www.serebii.net/xy/pokemon/607.png"
};

var lampent = {
    name: "Lampent",
    dex: 608,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/608.shtml",
    image: "http://www.serebii.net/xy/pokemon/608.png"
};

var chandelure = {
    name: "Chandelure",
    dex: 609,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/609.shtml",
    image: "http://www.serebii.net/xy/pokemon/609.png"
};

var axew = {
    name: "Axew",
    dex: 610,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/610.shtml",
    image: "http://www.serebii.net/xy/pokemon/610.png"
};

var fraxure = {
    name: "Fraxure",
    dex: 611,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/611.shtml",
    image: "http://www.serebii.net/xy/pokemon/611.png"
};

var haxorus = {
    name: "Haxorus",
    dex: 612,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/612.shtml",
    image: "http://www.serebii.net/xy/pokemon/612.png"
};

var cubchoo = {
    name: "Cubchoo",
    dex: 613,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/613.shtml",
    image: "http://www.serebii.net/xy/pokemon/613.png"
};

var beartic = {
    name: "Beartic",
    dex: 614,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/614.shtml",
    image: "http://www.serebii.net/xy/pokemon/614.png"
};

var cryogonal = {
    name: "Cryogonal",
    dex: 615,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/615.shtml",
    image: "http://www.serebii.net/xy/pokemon/615.png"
};

var shelmet = {
    name: "Shelmet",
    dex: 616,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/616.shtml",
    image: "http://www.serebii.net/xy/pokemon/616.png"
};

var accelgor = {
    name: "Accelgor",
    dex: 617,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/617.shtml",
    image: "http://www.serebii.net/xy/pokemon/617.png"
};

var stunfisk = {
    name: "Stunfisk",
    dex: 618,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/618.shtml",
    image: "http://www.serebii.net/xy/pokemon/618.png"
};

var mienfoo = {
    name: "Mienfoo",
    dex: 619,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/619.shtml",
    image: "http://www.serebii.net/xy/pokemon/619.png"
};

var mienshao = {
    name: "Mienshao",
    dex: 620,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/620.shtml",
    image: "http://www.serebii.net/xy/pokemon/620.png"
};

var druddigon = {
    name: "Druddigon",
    dex: 621,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/621.shtml",
    image: "http://www.serebii.net/xy/pokemon/621.png"
};

var golett = {
    name: "Golett",
    dex: 622,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/622.shtml",
    image: "http://www.serebii.net/xy/pokemon/622.png"
};

var golurk = {
    name: "Golurk",
    dex: 623,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/623.shtml",
    image: "http://www.serebii.net/xy/pokemon/623.png"
};

var pawniard = {
    name: "Pawniard",
    dex: 624,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/624.shtml",
    image: "http://www.serebii.net/xy/pokemon/624.png"
};

var bisharp = {
    name: "Bisharp",
    dex: 625,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/625.shtml",
    image: "http://www.serebii.net/xy/pokemon/625.png"
};

var bouffalant = {
    name: "Bouffalant",
    dex: 626,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/626.shtml",
    image: "http://www.serebii.net/xy/pokemon/626.png"
};

var rufflet = {
    name: "Rufflet",
    dex: 627,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/627.shtml",
    image: "http://www.serebii.net/xy/pokemon/627.png"
};

var braviary = {
    name: "Braviary",
    dex: 628,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/628.shtml",
    image: "http://www.serebii.net/xy/pokemon/628.png"
};

var vullaby = {
    name: "Vullaby",
    dex: 629,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/629.shtml",
    image: "http://www.serebii.net/xy/pokemon/629.png"
};

var mandibuzz = {
    name: "Mandibuzz",
    dex: 630,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/630.shtml",
    image: "http://www.serebii.net/xy/pokemon/630.png"
};

var heatmor = {
    name: "Heatmor",
    dex: 631,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/631.shtml",
    image: "http://www.serebii.net/xy/pokemon/631.png"
};

var durant = {
    name: "Durant",
    dex: 632,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/632.shtml",
    image: "http://www.serebii.net/xy/pokemon/632.png"
};

var deino = {
    name: "Deino",
    dex: 633,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/633.shtml",
    image: "http://www.serebii.net/xy/pokemon/633.png"
};

var zweilous = {
    name: "Zweilous",
    dex: 634,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/634.shtml",
    image: "http://www.serebii.net/xy/pokemon/634.png"
};

var hydreigon = {
    name: "Hydreigon",
    dex: 635,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/635.shtml",
    image: "http://www.serebii.net/xy/pokemon/635.png"
};

var larvesta = {
    name: "Larvesta",
    dex: 636,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/636.shtml",
    image: "http://www.serebii.net/xy/pokemon/636.png"
};

var volcarona = {
    name: "Volcarona",
    dex: 637,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/637.shtml",
    image: "http://www.serebii.net/xy/pokemon/637.png"
};

var cobalion = {
    name: "Cobalion",
    dex: 638,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/638.shtml",
    image: "http://www.serebii.net/xy/pokemon/638.png"
};

var terrakion = {
    name: "Terrakion",
    dex: 639,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/639.shtml",
    image: "http://www.serebii.net/xy/pokemon/639.png"
};

var virizion = {
    name: "Virizion",
    dex: 640,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/640.shtml",
    image: "http://www.serebii.net/xy/pokemon/640.png"
};

var tornadus = {
    name: "Tornadus",
    dex: 641,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/641.shtml",
    image: "http://www.serebii.net/xy/pokemon/641.png"
};

var thundurus = {
    name: "Thundurus",
    dex: 642,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/642.shtml",
    image: "http://www.serebii.net/xy/pokemon/642.png"
};

var reshiram = {
    name: "Reshiram",
    dex: 643,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/643.shtml",
    image: "http://www.serebii.net/xy/pokemon/643.png"
};

var zekrom = {
    name: "Zekrom",
    dex: 644,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/644.shtml",
    image: "http://www.serebii.net/xy/pokemon/644.png"
};

var landorus = {
    name: "Landorus",
    dex: 645,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/645.shtml",
    image: "http://www.serebii.net/xy/pokemon/645.png"
};

var kyurem = {
    name: "Kyurem",
    dex: 646,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/646.shtml",
    image: "http://www.serebii.net/xy/pokemon/646.png"
};

var keldeo = {
    name: "Keldeo",
    dex: 647,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/647.shtml",
    image: "http://www.serebii.net/xy/pokemon/647.png"
};

var meloetta = {
    name: "Meloetta",
    dex: 648,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/648.shtml",
    image: "http://www.serebii.net/xy/pokemon/648.png"
};

var genesect = {
    name: "Genesect",
    dex: 649,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/649.shtml",
    image: "http://www.serebii.net/xy/pokemon/649.png"
};

var chespin = {
    name: "Chespin",
    dex: 650,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/650.shtml",
    image: "http://www.serebii.net/xy/pokemon/650.png"
};

var quilladin = {
    name: "Quilladin",
    dex: 651,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/651.shtml",
    image: "http://www.serebii.net/xy/pokemon/651.png"
};

var chesnaught = {
    name: "Chesnaught",
    dex: 652,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/652.shtml",
    image: "http://www.serebii.net/xy/pokemon/652.png"
};

var fennekin = {
    name: "Fennekin",
    dex: 653,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/653.shtml",
    image: "http://www.serebii.net/xy/pokemon/653.png"
};

var braixen = {
    name: "Braixen",
    dex: 654,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/654.shtml",
    image: "http://www.serebii.net/xy/pokemon/654.png"
};

var delphox = {
    name: "Delphox",
    dex: 655,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/655.shtml",
    image: "http://www.serebii.net/xy/pokemon/655.png"
};

var froakie = {
    name: "Froakie",
    dex: 656,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/656.shtml",
    image: "http://www.serebii.net/xy/pokemon/656.png"
};

var frogadier = {
    name: "Frogadier",
    dex: 657,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/657.shtml",
    image: "http://www.serebii.net/xy/pokemon/657.png"
};

var greninja = {
    name: "Greninja",
    dex: 658,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/658.shtml",
    image: "http://www.serebii.net/xy/pokemon/658.png"
};

var bunnelby = {
    name: "Bunnelby",
    dex: 659,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/659.shtml",
    image: "http://www.serebii.net/xy/pokemon/659.png"
};

var diggersby = {
    name: "Diggersby",
    dex: 660,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/660.shtml",
    image: "http://www.serebii.net/xy/pokemon/660.png"
};

var fletchling = {
    name: "Fletchling",
    dex: 661,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/661.shtml",
    image: "http://www.serebii.net/xy/pokemon/661.png"
};

var fletchinder = {
    name: "Fletchinder",
    dex: 662,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/662.shtml",
    image: "http://www.serebii.net/xy/pokemon/662.png"
};

var talonflame = {
    name: "Talonflame",
    dex: 663,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/663.shtml",
    image: "http://www.serebii.net/xy/pokemon/663.png"
};

var scatterbug = {
    name: "Scatterbug",
    dex: 664,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/664.shtml",
    image: "http://www.serebii.net/xy/pokemon/664.png"
};

var spewpa = {
    name: "Spewpa",
    dex: 665,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/665.shtml",
    image: "http://www.serebii.net/xy/pokemon/665.png"
};

var vivillon = {
    name: "Vivillon",
    dex: 666,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/666.shtml",
    image: "http://www.serebii.net/xy/pokemon/666.png"
};

var litleo = {
    name: "Litleo",
    dex: 667,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/667.shtml",
    image: "http://www.serebii.net/xy/pokemon/667.png"
};

var pyroar = {
    name: "Pyroar",
    dex: 668,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/668.shtml",
    image: "http://www.serebii.net/xy/pokemon/668.png"
};

var flabebe = {
    name: "Flabébé",
    dex: 669,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/669.shtml",
    image: "http://www.serebii.net/xy/pokemon/669.png"
};

var floette = {
    name: "Floette",
    dex: 670,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/670.shtml",
    image: "http://www.serebii.net/xy/pokemon/670.png"
};

var florges = {
    name: "Florges",
    dex: 671,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/671.shtml",
    image: "http://www.serebii.net/xy/pokemon/671.png"
};

var skiddo = {
    name: "Skiddo",
    dex: 672,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/672.shtml",
    image: "http://www.serebii.net/xy/pokemon/672.png"
};

var gogoat = {
    name: "Gogoat",
    dex: 673,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/673.shtml",
    image: "http://www.serebii.net/xy/pokemon/673.png"
};

var pancham = {
    name: "Pancham",
    dex: 674,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/674.shtml",
    image: "http://www.serebii.net/xy/pokemon/674.png"
};

var pangoro = {
    name: "Pangoro",
    dex: 675,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/675.shtml",
    image: "http://www.serebii.net/xy/pokemon/675.png"
};

var furfrou = {
    name: "Furfrou",
    dex: 676,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/676.shtml",
    image: "http://www.serebii.net/xy/pokemon/676.png"
};

var espurr = {
    name: "Espurr",
    dex: 677,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/677.shtml",
    image: "http://www.serebii.net/xy/pokemon/677.png"
};

var meowstic = {
    name: "Meowstic",
    dex: 678,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/678.shtml",
    image: "http://www.serebii.net/xy/pokemon/678.png"
};

var honedge = {
    name: "Honedge",
    dex: 679,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/679.shtml",
    image: "http://www.serebii.net/xy/pokemon/679.png"
};

var doublade = {
    name: "Doublade",
    dex: 680,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/680.shtml",
    image: "http://www.serebii.net/xy/pokemon/680.png"
};

var aegislash = {
    name: "Aegislash",
    dex: 681,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/681.shtml",
    image: "http://www.serebii.net/xy/pokemon/681.png"
};

var spritzee = {
    name: "Spritzee",
    dex: 682,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/682.shtml",
    image: "http://www.serebii.net/xy/pokemon/682.png"
};

var aromatisse = {
    name: "Aromatisse",
    dex: 683,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/683.shtml",
    image: "http://www.serebii.net/xy/pokemon/683.png"
};

var swirlix = {
    name: "Swirlix",
    dex: 684,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/684.shtml",
    image: "http://www.serebii.net/xy/pokemon/684.png"
};

var slurpuff = {
    name: "Slurpuff",
    dex: 685,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/685.shtml",
    image: "http://www.serebii.net/xy/pokemon/685.png"
};

var inkay = {
    name: "Inkay",
    dex: 686,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/686.shtml",
    image: "http://www.serebii.net/xy/pokemon/686.png"
};

var malamar = {
    name: "Malamar",
    dex: 687,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/687.shtml",
    image: "http://www.serebii.net/xy/pokemon/687.png"
};

var binacle = {
    name: "Binacle",
    dex: 688,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/688.shtml",
    image: "http://www.serebii.net/xy/pokemon/688.png"
};

var barbaracle = {
    name: "Barbaracle",
    dex: 689,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/689.shtml",
    image: "http://www.serebii.net/xy/pokemon/689.png"
};

var skrelp = {
    name: "Skrelp",
    dex: 690,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/690.shtml",
    image: "http://www.serebii.net/xy/pokemon/690.png"
};

var dragalge = {
    name: "Dragalge",
    dex: 691,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/691.shtml",
    image: "http://www.serebii.net/xy/pokemon/691.png"
};

var clauncher = {
    name: "Clauncher",
    dex: 692,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/692.shtml",
    image: "http://www.serebii.net/xy/pokemon/692.png"
};

var clawitzer = {
    name: "Clawitzer",
    dex: 693,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/693.shtml",
    image: "http://www.serebii.net/xy/pokemon/693.png"
};

var helioptile = {
    name: "Helioptile",
    dex: 694,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/694.shtml",
    image: "http://www.serebii.net/xy/pokemon/694.png"
};

var heliolisk = {
    name: "Heliolisk",
    dex: 695,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/695.shtml",
    image: "http://www.serebii.net/xy/pokemon/695.png"
};

var tyrunt = {
    name: "Tyrunt",
    dex: 696,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/696.shtml",
    image: "http://www.serebii.net/xy/pokemon/696.png"
};

var tyrantrum = {
    name: "Tyrantrum",
    dex: 697,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/697.shtml",
    image: "http://www.serebii.net/xy/pokemon/697.png"
};

var amaura = {
    name: "Amaura",
    dex: 698,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/698.shtml",
    image: "http://www.serebii.net/xy/pokemon/698.png"
};

var aurorus = {
    name: "Aurorus",
    dex: 699,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/699.shtml",
    image: "http://www.serebii.net/xy/pokemon/699.png"
};

var sylveon = {
    name: "Sylveon",
    dex: 700,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/700.shtml",
    image: "http://www.serebii.net/xy/pokemon/700.png"
};

var hawlucha = {
    name: "Hawlucha",
    dex: 701,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/701.shtml",
    image: "http://www.serebii.net/xy/pokemon/701.png"
};

var dedenne = {
    name: "Dedenne",
    dex: 702,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/702.shtml",
    image: "http://www.serebii.net/xy/pokemon/702.png"
};

var carbink = {
    name: "Carbink",
    dex: 703,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/703.shtml",
    image: "http://www.serebii.net/xy/pokemon/703.png"
};

var goomy = {
    name: "Goomy",
    dex: 704,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/704.shtml",
    image: "http://www.serebii.net/xy/pokemon/704.png"
};

var sliggoo = {
    name: "Sliggoo",
    dex: 705,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/705.shtml",
    image: "http://www.serebii.net/xy/pokemon/705.png"
};

var goodra = {
    name: "Goodra",
    dex: 706,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/706.shtml",
    image: "http://www.serebii.net/xy/pokemon/706.png"
};

var klefki = {
    name: "Klefki",
    dex: 707,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/707.shtml",
    image: "http://www.serebii.net/xy/pokemon/707.png"
};

var phantump = {
    name: "Phantump",
    dex: 708,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/708.shtml",
    image: "http://www.serebii.net/xy/pokemon/708.png"
};

var trevenant = {
    name: "Trevenant",
    dex: 709,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/709.shtml",
    image: "http://www.serebii.net/xy/pokemon/709.png"
};

var pumpkaboo = {
    name: "Pumpkaboo",
    dex: 710,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/710.shtml",
    image: "http://www.serebii.net/xy/pokemon/710.png"
};

var gourgeist = {
    name: "Gourgeist",
    dex: 711,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/711.shtml",
    image: "http://www.serebii.net/xy/pokemon/711.png"
};

var bergmite = {
    name: "Bergmite",
    dex: 712,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/712.shtml",
    image: "http://www.serebii.net/xy/pokemon/712.png"
};

var avalugg = {
    name: "Avalugg",
    dex: 713,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/713.shtml",
    image: "http://www.serebii.net/xy/pokemon/713.png"
};

var noibat = {
    name: "Noibat",
    dex: 714,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/714.shtml",
    image: "http://www.serebii.net/xy/pokemon/714.png"
};

var noivern = {
    name: "Noivern",
    dex: 715,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/715.shtml",
    image: "http://www.serebii.net/xy/pokemon/715.png"
};

var xerneas = {
    name: "Xerneas",
    dex: 716,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/716.shtml",
    image: "http://www.serebii.net/xy/pokemon/716.png"
};

var yveltal = {
    name: "Yveltal",
    dex: 717,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/717.shtml",
    image: "http://www.serebii.net/xy/pokemon/717.png"
};

var zygarde = {
    name: "Zygarde",
    dex: 718,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/718.shtml",
    image: "http://www.serebii.net/xy/pokemon/718.png"
};

var diancie = {
    name: "Diancie",
    dex: 719,
    type: "Grass/Poison",
    ability: "Overgrow, N/A, Chlorophyll",
    evolve: "Mega",
    wiki: "http://www.serebii.net/pokedex-xy/719.shtml",
    image: "http://www.serebii.net/xy/pokemon/719.png"
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
};

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

var double_edge = {
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

var self_destruct = {
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

var mud_slap = {
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

var lock_on = {
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

var return_ = {
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

var will_o_wisp = {
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

var wake_up_slap = {
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

var u_turn = {
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

var x_scissor = {
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

var v_create = {
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

var trick_or_treat = {
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

var forests_curse = {
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

var freeze_dry = {
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

var topsy_turvy = {
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

var kings_shield = {
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

var baby_doll_eyes = {
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

var power_up_punch = {
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

var lands_wrath = {
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

var ability_capsule = {
    name: "Ability Capsule",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ability_Capsule"
};

var ability_urge = {
    name: "Ability Urge",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ability_Urge"
};

var abomasite = {
    name: "Abomasite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Abomasite"
};

var absolite = {
    name: "Absolite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Absolite"
};

var absorb_bulb = {
    name: "Absorb Bulb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Absorb_Bulb"
};

var adamant_orb = {
    name: "Adamant Orb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Adamant_Orb"
};

var adventure_rules = {
    name: "Adventure Rules",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Adventure_Rules"
};

var aerodactylite = {
    name: "Aerodactylite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aerodactylite"
};

var aggronite = {
    name: "Aggronite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aggronite"
};

var aguav_berry = {
    name: "Aguav Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aguav_Berry"
};

var air_balloon = {
    name: "Air Balloon",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Air_Balloon"
};

var alakazite = {
    name: "Alakazite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Alakazite"
};

var altarianite = {
    name: "Altarianite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Altarianite"
};

var ampharosite = {
    name: "Ampharosite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ampharosite"
};

var amulet_coin = {
    name: "Amulet Coin",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Amulet_Coin"
};

var antidote = {
    name: "Antidote",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Antidote"
};

var apicot_berry = {
    name: "Apicot Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Apicot_Berry"
};

var armor_fossil = {
    name: "Armor Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Armor_Fossil"
};

var aspear_berry = {
    name: "Aspear Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Aspear_Berry"
};

var audinite = {
    name: "Audinite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Audinite"
};

var awakening = {
    name: "Awakening",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Awakening"
};

var babiri_berry = {
    name: "Babiri Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Babiri_Berry"
};

var balmmushroom = {
    name: "Balmmushroom",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Balmmushroom"
};

var banettite = {
    name: "Banettite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Banettite"
};

var beedrillite = {
    name: "Beedrillite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Beedrillite"
};

var belue_berry = {
    name: "Belue Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Belue_Berry"
};

var berry_juice = {
    name: "Berry Juice",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Berry_Juice"
};

var big_mushroom = {
    name: "Big Mushroom",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Big_Mushroom"
};

var big_nugget = {
    name: "Big Nugget",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Big_Nugget"
};

var big_pearl = {
    name: "Big Pearl",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Big_Pearl"
};

var big_root = {
    name: "Big Root",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Big_Root"
};

var binding_band = {
    name: "Binding Band",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Binding_Band"
};

var black_belt = {
    name: "Black Belt",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Black_Belt"
};

var black_flute = {
    name: "Black Flute",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Black_Flute"
};

var black_sludge = {
    name: "Black Sludge",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Black_Sludge"
};

var blackglasses = {
    name: "Blackglasses",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blackglasses"
};

var blastoisinite = {
    name: "Blastoisinite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blastoisinite"
};

var blazikenite = {
    name: "Blazikenite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blazikenite"
};

var blk_apricorn = {
    name: "Blk Apricorn",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blk_Apricorn"
};

var blu_apricorn = {
    name: "Blu Apricorn",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blu_Apricorn"
};

var blue_flute = {
    name: "Blue Flute",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blue_Flute"
};

var blue_scarf = {
    name: "Blue Scarf",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blue_Scarf"
};

var blue_shard = {
    name: "Blue Shard",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Blue_Shard"
};

var bluk_berry = {
    name: "Bluk Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bluk_Berry"
};

var brightpowder = {
    name: "Brightpowder",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Brightpowder"
};

var bug_gem = {
    name: "Bug Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Bug_Gem"
};

var burn_drive = {
    name: "Burn Drive",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Burn_Drive"
};

var burn_heal = {
    name: "Burn Heal",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Burn_Heal"
};

var calcium = {
    name: "Calcium",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Calcium"
};

var cameruptite = {
    name: "Cameruptite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cameruptite"
};

var carbos = {
    name: "Carbos",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Carbos"
};

var casteliacone = {
    name: "Casteliacone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Casteliacone"
};

var cell_battery = {
    name: "Cell Battery",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cell_Battery"
};

var charcoal = {
    name: "Charcoal",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Charcoal"
};

var charizardite_x = {
    name: "Charizardite X",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Charizardite_X"
};

var charizardite_y = {
    name: "Charizardite Y",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Charizardite_Y"
};

var charti_berry = {
    name: "Charti Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Charti_Berry"
};

var cheri_berry = {
    name: "Cheri Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cheri_Berry"
};

var cherish_ball = {
    name: "Cherish Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cherish_Ball"
};

var chesto_berry = {
    name: "Chesto Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chesto_Berry"
};

var chilan_berry = {
    name: "Chilan Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chilan_Berry"
};

var chill_drive = {
    name: "Chill Drive",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chill_Drive"
};

var choice_band = {
    name: "Choice Band",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Choice_Band"
};

var choice_scarf = {
    name: "Choice Scarf",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Choice_Scarf"
};

var choice_specs = {
    name: "Choice Specs",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Choice_Specs"
};

var chople_berry = {
    name: "Chople Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Chople_Berry"
};

var claw_fossil = {
    name: "Claw Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Claw_Fossil"
};

var cleanse_tag = {
    name: "Cleanse Tag",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cleanse_Tag"
};

var clever_wing = {
    name: "Clever Wing",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Clever_Wing"
};

var coba_berry = {
    name: "Coba Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Coba_Berry"
};

var colbur_berry = {
    name: "Colbur Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Colbur_Berry"
};

var colress_machine = {
    name: "Colress Machine",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Colress_Machine"
};

var comet_shard = {
    name: "Comet Shard",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Comet_Shard"
};

var cornn_berry = {
    name: "Cornn Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cornn_Berry"
};

var cover_fossil = {
    name: "Cover Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Cover_Fossil"
};

var custap_berry = {
    name: "Custap Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Custap_Berry"
};

var damp_mulch = {
    name: "Damp Mulch",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Damp_Mulch"
};

var damp_rock = {
    name: "Damp Rock",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Damp_Rock"
};

var dark_gem = {
    name: "Dark Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dark_Gem"
};

var dawn_stone = {
    name: "Dawn Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dawn_Stone"
};

var deepseascale = {
    name: "Deepseascale",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Deepseascale"
};

var deepseatooth = {
    name: "Deepseatooth",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Deepseatooth"
};

var destiny_knot = {
    name: "Destiny Knot",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Destiny_Knot"
};

var diancite = {
    name: "Diancite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Diancite"
};

var dire_hit = {
    name: "Dire Hit",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dire_Hit"
};

var dire_hit_2 = {
    name: "Dire Hit 2",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dire_Hit_2"
};

var dire_hit_3 = {
    name: "Dire Hit 3",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dire_Hit_3"
};

var dive_ball = {
    name: "Dive Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dive_Ball"
};

var dna_splicers = {
    name: "DNA Splicers",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/DNA_Splicers"
};

var dome_fossil = {
    name: "Dome Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dome_Fossil"
};

var douse_drive = {
    name: "Douse Drive",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Douse_Drive"
};

var draco_plate = {
    name: "Draco Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Draco_Plate"
};

var dragon_fang = {
    name: "Dragon Fang",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dragon_Fang"
};

var dragon_gem = {
    name: "Dragon Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dragon_Gem"
};

var dragon_scale = {
    name: "Dragon Scale",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dragon_Scale"
};

var dread_plate = {
    name: "Dread Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dread_Plate"
};

var dream_ball = {
    name: "Dream Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dream_Ball"
};

var dropped_item = {
    name: "Dropped Item",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dropped_Item"
};

var dubious_disc = {
    name: "Dubious Disc",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dubious_Disc"
};

var durin_berry = {
    name: "Durin Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Durin_Berry"
};

var dusk_ball = {
    name: "Dusk Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dusk_Ball"
};

var dusk_stone = {
    name: "Dusk Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Dusk_Stone"
};

var earth_plate = {
    name: "Earth Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Earth_Plate"
};

var eject_button = {
    name: "Eject Button",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Eject_Button"
};

var electirizer = {
    name: "Electirizer",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Electirizer"
};

var electric_gem = {
    name: "Electric Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Electric_Gem"
};

var elevator_key = {
    name: "Elevator Key",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Elevator_Key"
};

var elixir = {
    name: "Elixir",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Elixir"
};

var energy_root = {
    name: "Energy Root",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Energy_Root"
};

var energypowder = {
    name: "Energypowder",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Energypowder"
};

var enigma_berry = {
    name: "Enigma Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Enigma_Berry"
};

var escape_rope = {
    name: "Escape Rope",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Escape_Rope"
};

var ether = {
    name: "Ether",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ether"
};

var everstone = {
    name: "Everstone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Everstone"
};

var eviolite = {
    name: "Eviolite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Eviolite"
};

var exp_share = {
    name: "Exp. Share",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Exp._Share"
};

var expert_belt = {
    name: "Expert Belt",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Expert_Belt"
};

var fairy_gem = {
    name: "Fairy Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fairy_Gem"
};

var fast_ball = {
    name: "Fast Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fast_Ball"
};

var fighting_gem = {
    name: "Fighting Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fighting_Gem"
};

var figy_berry = {
    name: "Figy Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Figy_Berry"
};

var fire_gem = {
    name: "Fire Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fire_Gem"
};

var fire_stone = {
    name: "Fire Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fire_Stone"
};

var fist_plate = {
    name: "Fist Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fist_Plate"
};

var flame_orb = {
    name: "Flame Orb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flame_Orb"
};

var flame_plate = {
    name: "Flame Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flame_Plate"
};

var float_stone = {
    name: "Float Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Float_Stone"
};

var fluffy_tail = {
    name: "Fluffy Tail",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fluffy_Tail"
};

var flying_gem = {
    name: "Flying Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Flying_Gem"
};

var focus_band = {
    name: "Focus Band",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Focus_Band"
};

var focus_sash = {
    name: "Focus Sash",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Focus_Sash"
};

var fresh_water = {
    name: "Fresh Water",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Fresh_Water"
};

var friend_ball = {
    name: "Friend Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Friend_Ball"
};

var full_heal = {
    name: "Full Heal",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Full_Heal"
};

var full_incense = {
    name: "Full Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Full_Incense"
};

var full_restore = {
    name: "Full Restore",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Full_Restore"
};

var galladite = {
    name: "Galladite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Galladite"
};

var ganlon_berry = {
    name: "Ganlon Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ganlon_Berry"
};

var garchompite = {
    name: "Garchompite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Garchompite"
};

var gardevoirite = {
    name: "Gardevoirite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gardevoirite"
};

var gengarite = {
    name: "Gengarite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gengarite"
};

var genius_wing = {
    name: "Genius Wing",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Genius_Wing"
};

var ghost_gem = {
    name: "Ghost Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ghost_Gem"
};

var glalitite = {
    name: "Glalitite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Glalitite"
};

var gooey_mulch = {
    name: "Gooey Mulch",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gooey_Mulch"
};

var grass_gem = {
    name: "Grass Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Grass_Gem"
};

var great_ball = {
    name: "Great Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Great_Ball"
};

var green_scarf = {
    name: "Green Scarf",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Green_Scarf"
};

var green_shard = {
    name: "Green Shard",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Green_Shard"
};

var grepa_berry = {
    name: "Grepa Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Grepa_Berry"
};

var grip_claw = {
    name: "Grip Claw",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Grip_Claw"
};

var griseous_orb = {
    name: "Griseous Orb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Griseous_Orb"
};

var grn_apricorn = {
    name: "Grn Apricorn",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Grn_Apricorn"
};

var ground_gem = {
    name: "Ground Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ground_Gem"
};

var growth_mulch = {
    name: "Growth Mulch",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Growth_Mulch"
};

var grubby_hanky = {
    name: "Grubby Hanky",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Grubby_Hanky"
};

var guard_spec = {
    name: "Guard Spec.",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Guard_Spec."
};

var gyaradosite = {
    name: "Gyaradosite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Gyaradosite"
};

var haban_berry = {
    name: "Haban Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Haban_Berry"
};

var hard_stone = {
    name: "Hard Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hard_Stone"
};

var heal_ball = {
    name: "Heal Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heal_Ball"
};

var heal_powder = {
    name: "Heal Powder",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heal_Powder"
};

var health_wing = {
    name: "Health Wing",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Health_Wing"
};

var heart_scale = {
    name: "Heart Scale",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heart_Scale"
};

var heat_rock = {
    name: "Heat Rock",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heat_Rock"
};

var heavy_ball = {
    name: "Heavy Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heavy_Ball"
};

var helix_fossil = {
    name: "Helix Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Helix_Fossil"
};

var heracronite = {
    name: "Heracronite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Heracronite"
};

var hm01 = {
    name: "Hm01",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hm01"
};

var hm02 = {
    name: "Hm02",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hm02"
};

var hm03 = {
    name: "Hm03",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hm03"
};

var hm04 = {
    name: "Hm04",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hm04"
};

var hm05 = {
    name: "Hm05",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hm05"
};

var hm06 = {
    name: "Hm06",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hm06"
};

var hm07 = {
    name: "Hm07",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hm07"
};

var hm08 = {
    name: "Hm08",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hm08"
};

var holo_caster = {
    name: "Holo Caster",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Holo_Caster"
};

var hondew_berry = {
    name: "Hondew Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hondew_Berry"
};

var honey = {
    name: "Honey",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Honey"
};

var honor_of_kalos = {
    name: "Honor Of Kalos",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Honor_Of_Kalos"
};

var houndoominite = {
    name: "Houndoominite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Houndoominite"
};

var hp_up = {
    name: "Hp Up",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hp_Up"
};

var hyper_potion = {
    name: "Hyper Potion",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Hyper_Potion"
};

var iapapa_berry = {
    name: "Iapapa Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Iapapa_Berry"
};

var ice_gem = {
    name: "Ice Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ice_Gem"
};

var ice_heal = {
    name: "Ice Heal",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ice_Heal"
};

var icicle_plate = {
    name: "Icicle Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Icicle_Plate"
};

var icy_rock = {
    name: "Icy Rock",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Icy_Rock"
};

var insect_plate = {
    name: "Insect Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Insect_Plate"
};

var intriguing_stone = {
    name: "Intriguing Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Intriguing_Stone"
};

var iron = {
    name: "Iron",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Iron"
};

var iron_ball = {
    name: "Iron Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Iron_Ball"
};

var iron_plate = {
    name: "Iron Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Iron_Plate"
};

var item_drop = {
    name: "Item Drop",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Item_Drop"
};

var item_urge = {
    name: "Item Urge",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Item_Urge"
};

var jaboca_berry = {
    name: "Jaboca Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Jaboca_Berry"
};

var kangaskhanite = {
    name: "Kangaskhanite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kangaskhanite"
};

var kasib_berry = {
    name: "Kasib Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kasib_Berry"
};

var kebia_berry = {
    name: "Kebia Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kebia_Berry"
};

var kelpsy_berry = {
    name: "Kelpsy Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kelpsy_Berry"
};

var kings_rock = {
    name: "Kings Rock",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Kings_Rock"
};

var lagging_tail = {
    name: "Lagging Tail",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lagging_Tail"
};

var lansat_berry = {
    name: "Lansat Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lansat_Berry"
};

var latiasite = {
    name: "Latiasite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Latiasite"
};

var latiosite = {
    name: "Latiosite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Latiosite"
};

var lava_cookie = {
    name: "Lava Cookie",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lava_Cookie"
};

var lax_incense = {
    name: "Lax Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lax_Incense"
};

var leaf_stone = {
    name: "Leaf Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Leaf_Stone"
};

var leftovers = {
    name: "Leftovers",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Leftovers"
};

var lemonade = {
    name: "Lemonade",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lemonade"
};

var lens_case = {
    name: "Lens Case",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lens_Case"
};

var leppa_berry = {
    name: "Leppa Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Leppa_Berry"
};

var level_ball = {
    name: "Level Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Level_Ball"
};

var liechi_berry = {
    name: "Liechi Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Liechi_Berry"
};

var life_orb = {
    name: "Life Orb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Life_Orb"
};

var light_ball = {
    name: "Light Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Light_Ball"
};

var light_clay = {
    name: "Light Clay",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Light_Clay"
};

var looker_ticket = {
    name: "Looker Ticket",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Looker_Ticket"
};

var lopunnite = {
    name: "Lopunnite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lopunnite"
};

var love_ball = {
    name: "Love Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Love_Ball"
};

var lucarionite = {
    name: "Lucarionite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lucarionite"
};

var luck_incense = {
    name: "Luck Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Luck_Incense"
};

var lucky_egg = {
    name: "Lucky Egg",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lucky_Egg"
};

var lucky_punch = {
    name: "Lucky Punch",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lucky_Punch"
};

var lum_berry = {
    name: "Lum Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lum_Berry"
};

var lure_ball = {
    name: "Lure Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lure_Ball"
};

var lustrous_orb = {
    name: "Lustrous Orb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Lustrous_Orb"
};

var luxury_ball = {
    name: "Luxury Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Luxury_Ball"
};

var macho_brace = {
    name: "Macho Brace",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Macho_Brace"
};

var magmarizer = {
    name: "Magmarizer",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magmarizer"
};

var magnet = {
    name: "Magnet",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magnet"
};

var mago_berry = {
    name: "Mago Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mago_Berry"
};

var magost_berry = {
    name: "Magost Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Magost_Berry"
};

var manectite = {
    name: "Manectite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Manectite"
};

var master_ball = {
    name: "Master Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Master_Ball"
};

var mawilite = {
    name: "Mawilite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mawilite"
};

var max_elixir = {
    name: "Max Elixir",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Max_Elixir"
};

var max_ether = {
    name: "Max Ether",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Max_Ether"
};

var max_potion = {
    name: "Max Potion",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Max_Potion"
};

var max_repel = {
    name: "Max Repel",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Max_Repel"
};

var max_revive = {
    name: "Max Revive",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Max_Revive"
};

var meadow_plate = {
    name: "Meadow Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Meadow_Plate"
};

var medal_box = {
    name: "Medal Box",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Medal_Box"
};

var medichamite = {
    name: "Medichamite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Medichamite"
};

var mental_herb = {
    name: "Mental Herb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mental_Herb"
};

var metagrossite = {
    name: "Metagrossite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Metagrossite"
};

var metal_coat = {
    name: "Metal Coat",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Metal_Coat"
};

var metal_powder = {
    name: "Metal Powder",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Metal_Powder"
};

var metronome = {
    name: "Metronome",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Metronome"
};

var mewtwonite_x = {
    name: "Mewtwonite X",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mewtwonite_X"
};

var mewtwonite_y = {
    name: "Mewtwonite Y",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mewtwonite_Y"
};

var micle_berry = {
    name: "Micle Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Micle_Berry"
};

var mind_plate = {
    name: "Mind Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mind_Plate"
};

var miracle_seed = {
    name: "Miracle Seed",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Miracle_Seed"
};

var moomoo_milk = {
    name: "Moomoo Milk",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Moomoo_Milk"
};

var moon_ball = {
    name: "Moon Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Moon_Ball"
};

var moon_stone = {
    name: "Moon Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Moon_Stone"
};

var muscle_band = {
    name: "Muscle Band",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Muscle_Band"
};

var muscle_wing = {
    name: "Muscle Wing",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Muscle_Wing"
};

var mystic_water = {
    name: "Mystic Water",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Mystic_Water"
};

var nanab_berry = {
    name: "Nanab Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nanab_Berry"
};

var nest_ball = {
    name: "Nest Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nest_Ball"
};

var net_ball = {
    name: "Net Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Net_Ball"
};

var nevermeltice = {
    name: "Nevermeltice",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nevermeltice"
};

var nomel_berry = {
    name: "Nomel Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nomel_Berry"
};

var normal_gem = {
    name: "Normal Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Normal_Gem"
};

var nugget = {
    name: "Nugget",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Nugget"
};

var occa_berry = {
    name: "Occa Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Occa_Berry"
};

var odd_incense = {
    name: "Odd Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Odd_Incense"
};

var odd_keystone = {
    name: "Odd Keystone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Odd_Keystone"
};

var old_amber = {
    name: "Old Amber",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Old_Amber"
};

var old_gateau = {
    name: "Old Gateau",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Old_Gateau"
};

var oran_berry = {
    name: "Oran Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Oran_Berry"
};

var oval_charm = {
    name: "Oval Charm",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Oval_Charm"
};

var oval_stone = {
    name: "Oval Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Oval_Stone"
};

var pamtre_berry = {
    name: "Pamtre Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pamtre_Berry"
};

var park_ball = {
    name: "Park Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Park_Ball"
};

var parlyz_heal = {
    name: "Parlyz Heal",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Parlyz_Heal"
};

var pass_orb = {
    name: "Pass Orb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pass_Orb"
};

var passho_berry = {
    name: "Passho Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Passho_Berry"
};

var payapa_berry = {
    name: "Payapa Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Payapa_Berry"
};

var pearl = {
    name: "Pearl",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pearl"
};

var pearl_string = {
    name: "Pearl String",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pearl_String"
};

var pecha_berry = {
    name: "Pecha Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pecha_Berry"
};

var permit = {
    name: "Permit",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Permit"
};

var persim_berry = {
    name: "Persim Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Persim_Berry"
};

var petaya_berry = {
    name: "Petaya Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Petaya_Berry"
};

var pidgeotite = {
    name: "Pidgeotite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pidgeotite"
};

var pinap_berry = {
    name: "Pinap Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pinap_Berry"
};

var pink_scarf = {
    name: "Pink Scarf",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pink_Scarf"
};

var pinsirite = {
    name: "Pinsirite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pinsirite"
};

var pixie_plate = {
    name: "Pixie Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pixie_Plate"
};

var plasma_card = {
    name: "Plasma Card",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Plasma_Card"
};

var plume_fossil = {
    name: "Plume Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Plume_Fossil"
};

var pnk_apricorn = {
    name: "Pnk Apricorn",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pnk_Apricorn"
};

var poison_barb = {
    name: "Poison Barb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Poison_Barb"
};

var poison_gem = {
    name: "Poison Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Poison_Gem"
};

var poké_ball = {
    name: "Poké Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Poké_Ball"
};

var poké_doll = {
    name: "Poké Doll",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Poké_Doll"
};

var poké_toy = {
    name: "Poké Toy",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Poké_Toy"
};

var pomeg_berry = {
    name: "Pomeg Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pomeg_Berry"
};

var potion = {
    name: "Potion",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Potion"
};

var power_anklet = {
    name: "Power Anklet",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Power_Anklet"
};

var power_band = {
    name: "Power Band",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Power_Band"
};

var power_belt = {
    name: "Power Belt",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Power_Belt"
};

var power_bracer = {
    name: "Power Bracer",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Power_Bracer"
};

var power_herb = {
    name: "Power Herb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Power_Herb"
};

var power_lens = {
    name: "Power Lens",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Power_Lens"
};

var power_plant_pass = {
    name: "Power Plant Pass",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Power_Plant_Pass"
};

var power_weight = {
    name: "Power Weight",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Power_Weight"
};

var pp_max = {
    name: "Pp Max",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pp_Max"
};

var pp_up = {
    name: "Pp Up",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pp_Up"
};

var premier_ball = {
    name: "Premier Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Premier_Ball"
};

var pretty_wing = {
    name: "Pretty Wing",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pretty_Wing"
};

var prism_scale = {
    name: "Prism Scale",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Prism_Scale"
};

var profs_letter = {
    name: "Profs Letter",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Profs_Letter"
};

var protector = {
    name: "Protector",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Protector"
};

var protein = {
    name: "Protein",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Protein"
};

var psychic_gem = {
    name: "Psychic Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Psychic_Gem"
};

var pure_incense = {
    name: "Pure Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Pure_Incense"
};

var qualot_berry = {
    name: "Qualot Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Qualot_Berry"
};

var quick_ball = {
    name: "Quick Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Quick_Ball"
};

var quick_claw = {
    name: "Quick Claw",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Quick_Claw"
};

var quick_powder = {
    name: "Quick Powder",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Quick_Powder"
};

var rabuta_berry = {
    name: "Rabuta Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rabuta_Berry"
};

var rare_bone = {
    name: "Rare Bone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rare_Bone"
};

var rare_candy = {
    name: "Rare Candy",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rare_Candy"
};

var rawst_berry = {
    name: "Rawst Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rawst_Berry"
};

var razor_claw = {
    name: "Razor Claw",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Razor_Claw"
};

var razor_fang = {
    name: "Razor Fang",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Razor_Fang"
};

var razz_berry = {
    name: "Razz Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Razz_Berry"
};

var reaper_cloth = {
    name: "Reaper Cloth",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Reaper_Cloth"
};

var red_apricorn = {
    name: "Red Apricorn",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Red_Apricorn"
};

var red_card = {
    name: "Red Card",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Red_Card"
};

var red_flute = {
    name: "Red Flute",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Red_Flute"
};

var red_scarf = {
    name: "Red Scarf",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Red_Scarf"
};

var red_shard = {
    name: "Red Shard",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Red_Shard"
};

var relic_band = {
    name: "Relic Band",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Relic_Band"
};

var relic_copper = {
    name: "Relic Copper",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Relic_Copper"
};

var relic_crown = {
    name: "Relic Crown",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Relic_Crown"
};

var relic_gold = {
    name: "Relic Gold",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Relic_Gold"
};

var relic_silver = {
    name: "Relic Silver",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Relic_Silver"
};

var relic_statue = {
    name: "Relic Statue",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Relic_Statue"
};

var relic_vase = {
    name: "Relic Vase",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Relic_Vase"
};

var repeat_ball = {
    name: "Repeat Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Repeat_Ball"
};

var repel = {
    name: "Repel",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Repel"
};

var reset_urge = {
    name: "Reset Urge",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Reset_Urge"
};

var resist_wing = {
    name: "Resist Wing",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Resist_Wing"
};

var reveal_glass = {
    name: "Reveal Glass",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Reveal_Glass"
};

var revival_herb = {
    name: "Revival Herb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Revival_Herb"
};

var revive = {
    name: "Revive",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Revive"
};

var rindo_berry = {
    name: "Rindo Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rindo_Berry"
};

var ring_target = {
    name: "Ring Target",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ring_Target"
};

var rock_gem = {
    name: "Rock Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rock_Gem"
};

var rock_incense = {
    name: "Rock Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rock_Incense"
};

var rocky_helmet = {
    name: "Rocky Helmet",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rocky_Helmet"
};

var roller_skates = {
    name: "Roller Skates",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Roller_Skates"
};

var root_fossil = {
    name: "Root Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Root_Fossil"
};

var rose_incense = {
    name: "Rose Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rose_Incense"
};

var rowap_berry = {
    name: "Rowap Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Rowap_Berry"
};

var sablenite = {
    name: "Sablenite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sablenite"
};

var sacred_ash = {
    name: "Sacred Ash",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sacred_Ash"
};

var safari_ball = {
    name: "Safari Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Safari_Ball"
};

var salac_berry = {
    name: "Salac Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Salac_Berry"
};

var salamencite = {
    name: "Salamencite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Salamencite"
};

var sceptilite = {
    name: "Sceptilite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sceptilite"
};

var scizorite = {
    name: "Scizorite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Scizorite"
};

var scope_lens = {
    name: "Scope Lens",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Scope_Lens"
};

var sea_incense = {
    name: "Sea Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sea_Incense"
};

var sharp_beak = {
    name: "Sharp Beak",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sharp_Beak"
};

var sharpedonite = {
    name: "Sharpedonite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sharpedonite"
};

var shed_shell = {
    name: "Shed Shell",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shed_Shell"
};

var shell_bell = {
    name: "Shell Bell",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shell_Bell"
};

var shiny_charm = {
    name: "Shiny Charm",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shiny_Charm"
};

var shiny_stone = {
    name: "Shiny Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shiny_Stone"
};

var shoal_salt = {
    name: "Shoal Salt",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shoal_Salt"
};

var shoal_shell = {
    name: "Shoal Shell",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shoal_Shell"
};

var shock_drive = {
    name: "Shock Drive",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shock_Drive"
};

var shuca_berry = {
    name: "Shuca Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Shuca_Berry"
};

var silk_scarf = {
    name: "Silk Scarf",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Silk_Scarf"
};

var silverpowder = {
    name: "Silverpowder",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Silverpowder"
};

var sitrus_berry = {
    name: "Sitrus Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sitrus_Berry"
};

var skull_fossil = {
    name: "Skull Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Skull_Fossil"
};

var sky_plate = {
    name: "Sky Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sky_Plate"
};

var slowbronite = {
    name: "Slowbronite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Slowbronite"
};

var smoke_ball = {
    name: "Smoke Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Smoke_Ball"
};

var smooth_rock = {
    name: "Smooth Rock",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Smooth_Rock"
};

var soda_pop = {
    name: "Soda Pop",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Soda_Pop"
};

var soft_sand = {
    name: "Soft Sand",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Soft_Sand"
};

var soothe_bell = {
    name: "Soothe Bell",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Soothe_Bell"
};

var soul_dew = {
    name: "Soul Dew",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Soul_Dew"
};

var spell_tag = {
    name: "Spell Tag",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spell_Tag"
};

var spelon_berry = {
    name: "Spelon Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spelon_Berry"
};

var splash_plate = {
    name: "Splash Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Splash_Plate"
};

var spooky_plate = {
    name: "Spooky Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Spooky_Plate"
};

var sport_ball = {
    name: "Sport Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sport_Ball"
};

var sprinklotad = {
    name: "Sprinklotad",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sprinklotad"
};

var stable_mulch = {
    name: "Stable Mulch",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Stable_Mulch"
};

var star_piece = {
    name: "Star Piece",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Star_Piece"
};

var stardust = {
    name: "Stardust",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Stardust"
};

var starf_berry = {
    name: "Starf Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Starf_Berry"
};

var steel_gem = {
    name: "Steel Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Steel_Gem"
};

var steelixite = {
    name: "Steelixite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Steelixite"
};

var stick = {
    name: "Stick",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Stick"
};

var sticky_barb = {
    name: "Sticky Barb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sticky_Barb"
};

var stone_plate = {
    name: "Stone Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Stone_Plate"
};

var sun_stone = {
    name: "Sun Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sun_Stone"
};

var super_potion = {
    name: "Super Potion",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Super_Potion"
};

var super_repel = {
    name: "Super Repel",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Super_Repel"
};

var swampertite = {
    name: "Swampertite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Swampertite"
};

var sweet_heart = {
    name: "Sweet Heart",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Sweet_Heart"
};

var swift_wing = {
    name: "Swift Wing",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Swift_Wing"
};

var tamato_berry = {
    name: "Tamato Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tamato_Berry"
};

var tanga_berry = {
    name: "Tanga Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tanga_Berry"
};

var thick_club = {
    name: "Thick Club",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Thick_Club"
};

var thunderstone = {
    name: "Thunderstone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Thunderstone"
};

var timer_ball = {
    name: "Timer Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Timer_Ball"
};

var tinymushroom = {
    name: "Tinymushroom",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tinymushroom"
};

var tm01 = {
    name: "Tm01",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm01"
};

var tm02 = {
    name: "Tm02",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm02"
};

var tm03 = {
    name: "Tm03",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm03"
};

var tm04 = {
    name: "Tm04",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm04"
};

var tm05 = {
    name: "Tm05",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm05"
};

var tm06 = {
    name: "Tm06",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm06"
};

var tm07 = {
    name: "Tm07",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm07"
};

var tm08 = {
    name: "Tm08",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm08"
};

var tm09 = {
    name: "Tm09",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm09"
};

var tm10 = {
    name: "Tm10",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm10"
};

var tm100 = {
    name: "Tm100",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm100"
};

var tm11 = {
    name: "Tm11",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm11"
};

var tm12 = {
    name: "Tm12",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm12"
};

var tm13 = {
    name: "Tm13",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm13"
};

var tm14 = {
    name: "Tm14",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm14"
};

var tm15 = {
    name: "Tm15",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm15"
};

var tm16 = {
    name: "Tm16",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm16"
};

var tm17 = {
    name: "Tm17",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm17"
};

var tm18 = {
    name: "Tm18",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm18"
};

var tm19 = {
    name: "Tm19",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm19"
};

var tm20 = {
    name: "Tm20",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm20"
};

var tm21 = {
    name: "Tm21",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm21"
};

var tm22 = {
    name: "Tm22",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm22"
};

var tm23 = {
    name: "Tm23",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm23"
};

var tm24 = {
    name: "Tm24",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm24"
};

var tm25 = {
    name: "Tm25",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm25"
};

var tm26 = {
    name: "Tm26",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm26"
};

var tm27 = {
    name: "Tm27",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm27"
};

var tm28 = {
    name: "Tm28",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm28"
};

var tm29 = {
    name: "Tm29",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm29"
};

var tm30 = {
    name: "Tm30",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm30"
};

var tm31 = {
    name: "Tm31",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm31"
};

var tm32 = {
    name: "Tm32",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm32"
};

var tm33 = {
    name: "Tm33",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm33"
};

var tm34 = {
    name: "Tm34",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm34"
};

var tm35 = {
    name: "Tm35",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm35"
};

var tm36 = {
    name: "Tm36",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm36"
};

var tm37 = {
    name: "Tm37",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm37"
};

var tm38 = {
    name: "Tm38",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm38"
};

var tm39 = {
    name: "Tm39",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm39"
};

var tm40 = {
    name: "Tm40",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm40"
};

var tm41 = {
    name: "Tm41",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm41"
};

var tm42 = {
    name: "Tm42",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm42"
};

var tm43 = {
    name: "Tm43",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm43"
};

var tm44 = {
    name: "Tm44",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm44"
};

var tm45 = {
    name: "Tm45",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm45"
};

var tm46 = {
    name: "Tm46",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm46"
};

var tm47 = {
    name: "Tm47",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm47"
};

var tm48 = {
    name: "Tm48",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm48"
};

var tm49 = {
    name: "Tm49",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm49"
};

var tm50 = {
    name: "Tm50",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm50"
};

var tm51 = {
    name: "Tm51",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm51"
};

var tm52 = {
    name: "Tm52",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm52"
};

var tm53 = {
    name: "Tm53",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm53"
};

var tm54 = {
    name: "Tm54",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm54"
};

var tm55 = {
    name: "Tm55",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm55"
};

var tm56 = {
    name: "Tm56",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm56"
};

var tm57 = {
    name: "Tm57",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm57"
};

var tm58 = {
    name: "Tm58",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm58"
};

var tm59 = {
    name: "Tm59",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm59"
};

var tm60 = {
    name: "Tm60",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm60"
};

var tm61 = {
    name: "Tm61",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm61"
};

var tm62 = {
    name: "Tm62",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm62"
};

var tm63 = {
    name: "Tm63",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm63"
};

var tm64 = {
    name: "Tm64",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm64"
};

var tm65 = {
    name: "Tm65",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm65"
};

var tm66 = {
    name: "Tm66",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm66"
};

var tm67 = {
    name: "Tm67",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm67"
};

var tm68 = {
    name: "Tm68",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm68"
};

var tm69 = {
    name: "Tm69",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm69"
};

var tm70 = {
    name: "Tm70",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm70"
};

var tm71 = {
    name: "Tm71",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm71"
};

var tm72 = {
    name: "Tm72",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm72"
};

var tm73 = {
    name: "Tm73",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm73"
};

var tm74 = {
    name: "Tm74",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm74"
};

var tm75 = {
    name: "Tm75",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm75"
};

var tm76 = {
    name: "Tm76",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm76"
};

var tm77 = {
    name: "Tm77",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm77"
};

var tm78 = {
    name: "Tm78",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm78"
};

var tm79 = {
    name: "Tm79",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm79"
};

var tm80 = {
    name: "Tm80",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm80"
};

var tm81 = {
    name: "Tm81",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm81"
};

var tm82 = {
    name: "Tm82",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm82"
};

var tm83 = {
    name: "Tm83",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm83"
};

var tm84 = {
    name: "Tm84",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm84"
};

var tm85 = {
    name: "Tm85",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm85"
};

var tm86 = {
    name: "Tm86",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm86"
};

var tm87 = {
    name: "Tm87",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm87"
};

var tm88 = {
    name: "Tm88",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm88"
};

var tm89 = {
    name: "Tm89",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm89"
};

var tm90 = {
    name: "Tm90",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm90"
};

var tm91 = {
    name: "Tm91",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm91"
};

var tm92 = {
    name: "Tm92",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm92"
};

var tm93 = {
    name: "Tm93",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm93"
};

var tm94 = {
    name: "Tm94",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm94"
};

var tm95 = {
    name: "Tm95",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm95"
};

var tm96 = {
    name: "Tm96",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm96"
};

var tm97 = {
    name: "Tm97",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm97"
};

var tm98 = {
    name: "Tm98",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm98"
};

var tm99 = {
    name: "Tm99",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tm99"
};

var tmv_pass = {
    name: "Tmv Pass",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tmv_Pass"
};

var toxic_orb = {
    name: "Toxic Orb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Toxic_Orb"
};

var toxic_plate = {
    name: "Toxic Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Toxic_Plate"
};

var twistedspoon = {
    name: "Twistedspoon",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Twistedspoon"
};

var tyranitarite = {
    name: "Tyranitarite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Tyranitarite"
};

var ultra_ball = {
    name: "Ultra Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ultra_Ball"
};

var up_grade = {
    name: "Up_grade",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Up_grade"
};

var venusaurite = {
    name: "Venusaurite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Venusaurite"
};

var wacan_berry = {
    name: "Wacan Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wacan_Berry"
};

var water_gem = {
    name: "Water Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Water_Gem"
};

var water_stone = {
    name: "Water Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Water_Stone"
};

var watmel_berry = {
    name: "Watmel Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Watmel_Berry"
};

var wave_incense = {
    name: "Wave Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wave_Incense"
};

var wepear_berry = {
    name: "Wepear Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wepear_Berry"
};

var white_flute = {
    name: "White Flute",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/White_Flute"
};

var white_herb = {
    name: "White Herb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/White_Herb"
};

var wht_apricorn = {
    name: "Wht Apricorn",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wht_Apricorn"
};

var wide_lens = {
    name: "Wide Lens",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wide_Lens"
};

var wiki_berry = {
    name: "Wiki Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wiki_Berry"
};

var wise_glasses = {
    name: "Wise Glasses",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Wise_Glasses"
};

var x_accuracy = {
    name: "X Accuracy",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Accuracy"
};

var x_accuracy_2 = {
    name: "X Accuracy 2",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Accuracy_2"
};

var x_accuracy_3 = {
    name: "X Accuracy 3",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Accuracy_3"
};

var x_accuracy_6 = {
    name: "X Accuracy 6",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Accuracy_6"
};

var x_attack = {
    name: "X Attack",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Attack"
};

var x_attack_2 = {
    name: "X Attack 2",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Attack_2"
};

var x_attack_3 = {
    name: "X Attack 3",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Attack_3"
};

var x_attack_6 = {
    name: "X Attack 6",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Attack_6"
};

var x_defend = {
    name: "X Defend",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Defend"
};

var x_defend_2 = {
    name: "X Defend 2",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Defend_2"
};

var x_defend_3 = {
    name: "X Defend 3",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Defend_3"
};

var x_defend_6 = {
    name: "X Defend 6",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Defend_6"
};

var x_sp_def = {
    name: "X Sp. Def",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Sp._Def"
};

var x_sp_def_2 = {
    name: "X Sp. Def 2",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Sp._Def_2"
};

var x_sp_def_3 = {
    name: "X Sp. Def 3",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Sp._Def_3"
};

var x_sp_def_6 = {
    name: "X Sp. Def 6",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Sp._Def_6"
};

var x_special = {
    name: "X Special",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Special"
};

var x_special_2 = {
    name: "X Special 2",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Special_2"
};

var x_special_3 = {
    name: "X Special 3",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Special_3"
};

var x_special_6 = {
    name: "X Special 6",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Special_6"
};

var x_speed = {
    name: "X Speed",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Speed"
};

var x_speed_2 = {
    name: "X Speed 2",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Speed_2"
};

var x_speed_3 = {
    name: "X Speed 3",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Speed_3"
};

var x_speed_6 = {
    name: "X Speed 6",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/X_Speed_6"
};

var yache_berry = {
    name: "Yache Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Yache_Berry"
};

var yellow_flute = {
    name: "Yellow Flute",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Yellow_Flute"
};

var yellow_scarf = {
    name: "Yellow Scarf",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Yellow_Scarf"
};

var yellow_shard = {
    name: "Yellow Shard",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Yellow_Shard"
};

var ylw_apricorn = {
    name: "Ylw Apricorn",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Ylw_Apricorn"
};

var zap_plate = {
    name: "Zap Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Zap_Plate"
};

var zinc = {
    name: "Zinc",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Zinc"
};

var zoom_lens = {
    name: "Zoom Lens",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://bulbapedia.bulbagarden.net/wiki/Zoom_Lens"
};

var adaptability = {
    name: "Adaptability",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/adaptability.shtml"
};

var aerilate = {
    name: "Aerilate",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/aerilate.shtml"
};

var aftermath = {
    name: "Aftermath",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/aftermath.shtml"
};

var air_lock = {
    name: "Air Lock",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/airlock.shtml"
};

var analytic = {
    name: "Analytic",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/analytic.shtml"
};

var anger_point = {
    name: "Anger Point",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/angerpoint.shtml"
};

var anticipation = {
    name: "Anticipation",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/anticipation.shtml"
};

var arena_trap = {
    name: "Arena Trap",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/arenatrap.shtml"
};

var aroma_veil = {
    name: "Aroma Veil",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/aromaveil.shtml"
};

var aura_break = {
    name: "Aura Break",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/aurabreak.shtml"
};

var bad_dreams = {
    name: "Bad Dreams",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/baddreams.shtml"
};

var battery = {
    name: "Battery",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/battery.shtml"
};

var battle_armor = {
    name: "Battle Armor",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/battlearmor.shtml"
};

var battle_bond = {
    name: "Battle Bond",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/battlebond.shtml"
};

var berserk = {
    name: "Berserk",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/berserk.shtml"
};

var big_pecks = {
    name: "Big Pecks",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/bigpecks.shtml"
};

var blaze = {
    name: "Blaze",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/blaze.shtml"
};

var bulletproof = {
    name: "Bulletproof",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/bulletproof.shtml"
};

var cacophony = {
    name: "Cacophony",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/cacophony.shtml"
};

var cheek_pouch = {
    name: "Cheek Pouch",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/cheekpouch.shtml"
};

var chlorophyll = {
    name: "Chlorophyll",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/chlorophyll.shtml"
};

var clear_body = {
    name: "Clear Body",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/clearbody.shtml"
};

var cloud_nine = {
    name: "Cloud Nine",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/cloudnine.shtml"
};

var color_change = {
    name: "Color Change",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/colorchange.shtml"
};

var comatose = {
    name: "Comatose",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/comatose.shtml"
};

var competitive = {
    name: "Competitive",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/competitive.shtml"
};

var compound_eyes = {
    name: "Compound Eyes",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/compoundeyes.shtml"
};

var contrary = {
    name: "Contrary",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/contrary.shtml"
};

var corrosion = {
    name: "Corrosion",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/corrosion.shtml"
};

var cursed_body = {
    name: "Cursed Body",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/cursedbody.shtml"
};

var cute_charm = {
    name: "Cute Charm",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/cutecharm.shtml"
};

var damp = {
    name: "Damp",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/damp.shtml"
};

var dancer = {
    name: "Dancer",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/dancer.shtml"
};

var dark_aura = {
    name: "Dark Aura",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/darkaura.shtml"
};

var dazzling = {
    name: "Dazzling",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/dazzling.shtml"
};

var defeatist = {
    name: "Defeatist",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/defeatist.shtml"
};

var defiant = {
    name: "Defiant",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/defiant.shtml"
};

var delta_stream = {
    name: "Delta Stream",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/deltastream.shtml"
};

var desolate_land = {
    name: "Desolate Land",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/desolateland.shtml"
};

var disguise = {
    name: "Disguise",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/disguise.shtml"
};

var download = {
    name: "Download",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/download.shtml"
};

var drizzle = {
    name: "Drizzle",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/drizzle.shtml"
};

var drought = {
    name: "Drought",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/drought.shtml"
};

var dry_skin = {
    name: "Dry Skin",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/dryskin.shtml"
};

var early_bird = {
    name: "Early Bird",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/earlybird.shtml"
};

var effect_spore = {
    name: "Effect Spore",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/effectspore.shtml"
};

var electric_surge = {
    name: "Electric Surge",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/electricsurge.shtml"
};

var fairy_aura = {
    name: "Fairy Aura",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/fairyaura.shtml"
};

var filter = {
    name: "Filter",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/filter.shtml"
};

var flame_body = {
    name: "Flame Body",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/flamebody.shtml"
};

var flare_boost = {
    name: "Flare Boost",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/flareboost.shtml"
};

var flash_fire = {
    name: "Flash Fire",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/flashfire.shtml"
};

var flower_gift = {
    name: "Flower Gift",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/flowergift.shtml"
};

var flower_veil = {
    name: "Flower Veil",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/flowerveil.shtml"
};

var fluffy = {
    name: "Fluffy",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/fluffy.shtml"
};

var forecast = {
    name: "Forecast",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/forecast.shtml"
};

var forewarn = {
    name: "Forewarn",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/forewarn.shtml"
};

var friend_guard = {
    name: "Friend Guard",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/friendguard.shtml"
};

var frisk = {
    name: "Frisk",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/frisk.shtml"
};

var full_metal_body = {
    name: "Full Metal Body",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/fullmetalbody.shtml"
};

var fur_coat = {
    name: "Fur Coat",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/furcoat.shtml"
};

var gale_wings = {
    name: "Gale Wings",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/galewings.shtml"
};

var gluttony = {
    name: "Gluttony",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/gluttony.shtml"
};

var gooey = {
    name: "Gooey",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/gooey.shtml"
};

var grass_pelt = {
    name: "Grass Pelt",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/grasspelt.shtml"
};

var guts = {
    name: "Guts",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/guts.shtml"
};

var harvest = {
    name: "Harvest",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/harvest.shtml"
};

var healer = {
    name: "Healer",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/healer.shtml"
};

var heatproof = {
    name: "Heatproof",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/heatproof.shtml"
};

var heavy_metal = {
    name: "Heavy Metal",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/heavymetal.shtml"
};

var honey_gather = {
    name: "Honey Gather",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/honeygather.shtml"
};

var huge_power = {
    name: "Huge Power",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/hugepower.shtml"
};

var hustle = {
    name: "Hustle",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/hustle.shtml"
};

var hydration = {
    name: "Hydration",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/hydration.shtml"
};

var hyper_cutter = {
    name: "Hyper Cutter",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/hypercutter.shtml"
};

var ice_body = {
    name: "Ice Body",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/icebody.shtml"
};

var illuminate = {
    name: "Illuminate",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/illuminate.shtml"
};

var illusion = {
    name: "Illusion",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/illusion.shtml"
};

var immunity = {
    name: "Immunity",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/immunity.shtml"
};

var imposter = {
    name: "Imposter",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/imposter.shtml"
};

var innards_out = {
    name: "Innards Out",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/innardsout.shtml"
};

var infiltrator = {
    name: "Infiltrator",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/infiltrator.shtml"
};

var inner_focus = {
    name: "Inner Focus",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/innerfocus.shtml"
};

var insomnia = {
    name: "Insomnia",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/insomnia.shtml"
};

var intimidate = {
    name: "Intimidate",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/intimidate.shtml"
};

var iron_barbs = {
    name: "Iron Barbs",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/ironbarbs.shtml"
};

var iron_fist = {
    name: "Iron Fist",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/ironfist.shtml"
};

var justified = {
    name: "Justified",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/justified.shtml"
};

var keen_eye = {
    name: "Keen Eye",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/keeneye.shtml"
};

var klutz = {
    name: "Klutz",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/klutz.shtml"
};

var leaf_guard = {
    name: "Leaf Guard",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/leafguard.shtml"
};

var levitate = {
    name: "Levitate",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/levitate.shtml"
};

var light_metal = {
    name: "Light Metal",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/lightmetal.shtml"
};

var lightning_rod = {
    name: "Lightning Rod",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/lightningrod.shtml"
};

var limber = {
    name: "Limber",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/limber.shtml"
};

var liquid_ooze = {
    name: "Liquid Ooze",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/liquidooze.shtml"
};

var magic_bounce = {
    name: "Magic Bounce",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/magicbounce.shtml"
};

var magic_guard = {
    name: "Magic Guard",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/magicguard.shtml"
};

var magician = {
    name: "Magician",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/magician.shtml"
};

var magma_armor = {
    name: "Magma Armor",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/magmaarmor.shtml"
};

var magnet_pull = {
    name: "Magnet Pull",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/magnetpull.shtml"
};

var marvel_scale = {
    name: "Marvel Scale",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/marvelscale.shtml"
};

var mega_launcher = {
    name: "Mega Launcher",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/megalauncher.shtml"
};

var minus = {
    name: "Minus",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/minus.shtml"
};

var mold_breaker = {
    name: "Mold Breaker",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/moldbreaker.shtml"
};

var moody = {
    name: "Moody",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/moody.shtml"
};

var motor_drive = {
    name: "Motor Drive",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/motordrive.shtml"
};

var moxie = {
    name: "Moxie",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/moxie.shtml"
};

var multiscale = {
    name: "Multiscale",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/multiscale.shtml"
};

var multitype = {
    name: "Multitype",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/multitype.shtml"
};

var mummy = {
    name: "Mummy",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/mummy.shtml"
};

var natural_cure = {
    name: "Natural Cure",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/naturalcure.shtml"
};

var no_guard = {
    name: "No Guard",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/noguard.shtml"
};

var normalize = {
    name: "Normalize",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/normalize.shtml"
};

var oblivious = {
    name: "Oblivious",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/oblivious.shtml"
};

var overcoat = {
    name: "Overcoat",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/overcoat.shtml"
};

var overgrow = {
    name: "Overgrow",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/overgrow.shtml"
};

var own_tempo = {
    name: "Own Tempo",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/owntempo.shtml"
};

var parental_bond = {
    name: "Parental Bond",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/parentalbond.shtml"
};

var pickpocket = {
    name: "Pickpocket",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/pickpocket.shtml"
};

var pickup = {
    name: "Pickup",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/pickup.shtml"
};

var pixilate = {
    name: "Pixilate",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/pixilate.shtml"
};

var plus = {
    name: "Plus",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/plus.shtml"
};

var poison_heal = {
    name: "Poison Heal",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/poisonheal.shtml"
};

var poison_point = {
    name: "Poison Point",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/poisonpoint.shtml"
};

var poison_touch = {
    name: "Poison Touch",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/poisontouch.shtml"
};

var power_construct = {
    name: "Power Construct",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/powerconstruct.shtml"
};

var prankster = {
    name: "Prankster",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/prankster.shtml"
};

var pressure = {
    name: "Pressure",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/pressure.shtml"
};

var primordial_sea = {
    name: "Primordial Sea",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/primordialsea.shtml"
};

var protean = {
    name: "Protean",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/protean.shtml"
};

var pure_power = {
    name: "Pure Power",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/purepower.shtml"
};

var queenly_majesty = {
    name: "Queenly Majesty",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/queenlymajesty.shtml"
};

var quick_feet = {
    name: "Quick Feet",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/quickfeet.shtml"
};

var rain_dish = {
    name: "Rain Dish",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/raindish.shtml"
};

var rattled = {
    name: "Rattled",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/rattled.shtml"
};

var receiver = {
    name: "Receiver",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/receiver.shtml"
};

var reckless = {
    name: "Reckless",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/reckless.shtml"
};

var refrigerate = {
    name: "Refrigerate",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/refrigerate.shtml"
};

var regenerator = {
    name: "Regenerator",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/regenerator.shtml"
};

var rivalry = {
    name: "Rivalry",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/rivalry.shtml"
};

var rks_system = {
    name: "Rks System",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/rkssystem.shtml"
};

var rock_head = {
    name: "Rock Head",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/rockhead.shtml"
};

var rough_skin = {
    name: "Rough Skin",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/roughskin.shtml"
};

var run_away = {
    name: "Run Away",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/runaway.shtml"
};

var sand_force = {
    name: "Sand Force",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/sandforce.shtml"
};

var sand_rush = {
    name: "Sand Rush",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/sandrush.shtml"
};

var sand_stream = {
    name: "Sand Stream",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/sandstream.shtml"
};

var sand_veil = {
    name: "Sand Veil",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/sandveil.shtml"
};

var sap_sipper = {
    name: "Sap Sipper",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/sapsipper.shtml"
};

var schooling = {
    name: "Schooling",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/schooling.shtml"
};

var scrappy = {
    name: "Scrappy",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/scrappy.shtml"
};

var serene_grace = {
    name: "Serene Grace",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/serenegrace.shtml"
};

var shadow_shield = {
    name: "Shadow Shield",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/shadowshield.shtml"
};

var shadow_tag = {
    name: "Shadow Tag",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/shadowtag.shtml"
};

var shed_skin = {
    name: "Shed Skin",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/shedskin.shtml"
};

var sheer_force = {
    name: "Sheer Force",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/sheerforce.shtml"
};

var shell_armor = {
    name: "Shell Armor",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/shellarmor.shtml"
};

var shield_dust = {
    name: "Shield Dust",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/shielddust.shtml"
};

var shields_down = {
    name: "Shields Down",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/shieldsdown.shtml"
};

var simple = {
    name: "Simple",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/simple.shtml"
};

var skill_link = {
    name: "Skill Link",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/skilllink.shtml"
};

var slow_start = {
    name: "Slow Start",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/slowstart.shtml"
};

var sniper = {
    name: "Sniper",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/sniper.shtml"
};

var snow_cloak = {
    name: "Snow Cloak",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/snowcloak.shtml"
};

var snow_warning = {
    name: "Snow Warning",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/snowwarning.shtml"
};

var solar_power = {
    name: "Solar Power",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/solarpower.shtml"
};

var solid_rock = {
    name: "Solid Rock",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/solidrock.shtml"
};

var soul_heart = {
    name: "Soul_heart",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/soul_heart.shtml"
};

var soundproof = {
    name: "Soundproof",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/soundproof.shtml"
};

var speed_boost = {
    name: "Speed Boost",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/speedboost.shtml"
};

var stakeout = {
    name: "Stakeout",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/stakeout.shtml"
};

var stall = {
    name: "Stall",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/stall.shtml"
};

var stamina = {
    name: "Stamina",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/stamina.shtml"
};

var stance_change = {
    name: "Stance Change",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/stancechange.shtml"
};

var static = {
    name: "Static",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/static.shtml"
};

var steadfast = {
    name: "Steadfast",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/steadfast.shtml"
};

var stench = {
    name: "Stench",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/stench.shtml"
};

var sticky_hold = {
    name: "Sticky Hold",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/stickyhold.shtml"
};

var storm_drain = {
    name: "Storm Drain",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/stormdrain.shtml"
};

var strong_jaw = {
    name: "Strong Jaw",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/strongjaw.shtml"
};

var sturdy = {
    name: "Sturdy",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/sturdy.shtml"
};

var suction_cups = {
    name: "Suction Cups",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/suctioncups.shtml"
};

var super_luck = {
    name: "Super Luck",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/superluck.shtml"
};

var surge_surfer = {
    name: "Surge Surfer",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/surgesurfer.shtml"
};

var swarm = {
    name: "Swarm",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/swarm.shtml"
};

var sweet_veil = {
    name: "Sweet Veil",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/sweetveil.shtml"
};

var swift_swim = {
    name: "Swift Swim",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/swiftswim.shtml"
};

var symbiosis = {
    name: "Symbiosis",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/symbiosis.shtml"
};

var synchronize = {
    name: "Synchronize",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/synchronize.shtml"
};

var tangled_feet = {
    name: "Tangled Feet",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/tangledfeet.shtml"
};

var technician = {
    name: "Technician",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/technician.shtml"
};

var telepathy = {
    name: "Telepathy",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/telepathy.shtml"
};

var teravolt = {
    name: "Teravolt",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/teravolt.shtml"
};

var thick_fat = {
    name: "Thick Fat",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/thickfat.shtml"
};

var tinted_lens = {
    name: "Tinted Lens",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/tintedlens.shtml"
};

var torrent = {
    name: "Torrent",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/torrent.shtml"
};

var tough_claws = {
    name: "Tough Claws",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/toughclaws.shtml"
};

var toxic_boost = {
    name: "Toxic Boost",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/toxicboost.shtml"
};

var trace = {
    name: "Trace",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/trace.shtml"
};

var triage = {
    name: "Triage",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/triage.shtml"
};

var truant = {
    name: "Truant",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/truant.shtml"
};

var turboblaze = {
    name: "Turboblaze",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/turboblaze.shtml"
};

var unaware = {
    name: "Unaware",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/unaware.shtml"
};

var unburden = {
    name: "Unburden",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/unburden.shtml"
};

var unnerve = {
    name: "Unnerve",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/unnerve.shtml"
};

var victory_star = {
    name: "Victory Star",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/victorystar.shtml"
};

var vital_spirit = {
    name: "Vital Spirit",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/vitalspirit.shtml"
};

var volt_absorb = {
    name: "Volt Absorb",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/voltabsorb.shtml"
};

var water_absorb = {
    name: "Water Absorb",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/waterabsorb.shtml"
};

var water_compaction = {
    name: "Water Compaction",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/watercompaction.shtml"
};

var water_veil = {
    name: "Water Veil",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/waterveil.shtml"
};

var weak_armor = {
    name: "Weak Armor",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/weakarmor.shtml"
};

var white_smoke = {
    name: "White Smoke",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/whitesmoke.shtml"
};

var wimp_out = {
    name: "Wimp Out",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/wimpout.shtml"
};

var wonder_guard = {
    name: "Wonder Guard",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/wonderguard.shtml"
};

var wonder_skin = {
    name: "Wonder Skin",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/wonderskin.shtml"
};

var zen_mode = {
    name: "Zen Mode",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/zenmode.shtml"
};
