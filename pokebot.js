var Discord = require('discord.io');
var bot = new Discord.Client({
    autorun: true,
    token: "pie tart"
});

var mons = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoranf", "nidorina", "nidoqueen", "nidoranm", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho_oh", "celebi", "treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken", "mudkip", "marshtomp", "swampert", "poochyena", "mightyena", "zigzagoon", "linoone", "wurmple", "silcoon", "beautifly", "cascoon", "dustox", "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry", "taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia", "gardevoir", "surskit", "masquerain", "shroomish", "breloom", "slakoth", "vigoroth", "slaking", "nincada", "ninjask", "shedinja", "whismur", "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass", "skitty", "delcatty", "sableye", "mawile", "aron", "lairon", "aggron", "meditite", "medicham", "electrike", "manectric", "plusle", "minun", "volbeat", "illumise", "roselia", "gulpin", "swalot", "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt", "torkoal", "spoink", "grumpig", "spinda", "trapinch", "vibrava", "flygon", "cacnea", "cacturne", "swablu", "altaria", "zangoose", "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish", "crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith", "armaldo", "feebas", "milotic", "castform", "kecleon", "shuppet", "banette", "duskull", "dusclops", "tropius", "chimecho", "absol", "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein", "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "bagon", "shelgon", "salamence", "beldum", "metang", "metagross", "regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza", "jirachi", "deoxys", "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape", "piplup", "prinplup", "empoleon", "starly", "staravia", "staraptor", "bidoof", "bibarel", "kricketot", "kricketune", "shinx", "luxio", "luxray", "budew", "roserade", "cranidos", "rampardos", "shieldon", "bastiodon", "burmy", "wormadam", "mothim", "combee", "vespiquen", "pachirisu", "buizel", "floatzel", "cherubi", "cherrim", "shellos", "gastrodon", "ambipom", "drifloon", "drifblim", "buneary", "lopunny", "mismagius", "honchkrow", "glameow", "purugly", "chingling", "stunky", "skuntank", "bronzor", "bronzong", "bonsly", "mime jr", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp", "munchlax", "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion", "croagunk", "toxicroak", "carnivine", "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile", "magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire", "magmortar", "togekiss", "yanmega", "leafeon", "glaceon", "gliscor", "mamoswine", "porygon_z", "gallade", "probopass", "dusknoir", "froslass", "rotom", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran", "regigigas", "giratina", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "arceus", "victini", "snivy", "servine", "serperior", "tepig", "pignite", "emboar", "oshawott", "dewott", "samurott", "patrat", "watchog", "lillipup", "herdier", "stoutland", "purrloin", "liepard", "pansage", "simisage", "pansear", "simisear", "panpour", "simipour", "munna", "musharna", "pidove", "tranquill", "unfezant", "blitzle", "zebstrika", "roggenrola", "boldore", "gigalith", "woobat", "swoobat", "drilbur", "excadrill", "audino", "timburr", "gurdurr", "conkeldurr", "tympole", "palpitoad", "seismitoad", "throh", "sawk", "sewaddle", "swadloon", "leavanny", "venipede", "whirlipede", "scolipede", "cottonee", "whimsicott", "petilil", "lilligant", "basculin", "sandile", "krokorok", "krookodile", "darumaka", "darmanitan", "maractus", "dwebble", "crustle", "scraggy", "scrafty", "sigilyph", "yamask", "cofagrigus", "tirtouga", "carracosta", "archen", "archeops", "trubbish", "garbodor", "zorua", "zoroark", "minccino", "cinccino", "gothita", "gothorita", "gothitelle", "solosis", "duosion", "reuniclus", "ducklett", "swanna", "vanillite", "vanillish", "vanilluxe", "deerling", "sawsbuck", "emolga", "karrablast", "escavalier", "foongus", "amoonguss", "frillish", "jellicent", "alomomola", "joltik", "galvantula", "ferroseed", "ferrothorn", "klink", "klang", "klinklang", "tynamo", "eelektrik", "eelektross", "elgyem", "beheeyem", "litwick", "lampent", "chandelure", "axew", "fraxure", "haxorus", "cubchoo", "beartic", "cryogonal", "shelmet", "accelgor", "stunfisk", "mienfoo", "mienshao", "druddigon", "golett", "golurk", "pawniard", "bisharp", "bouffalant", "rufflet", "braviary", "vullaby", "mandibuzz", "heatmor", "durant", "deino", "zweilous", "hydreigon", "larvesta", "volcarona", "cobalion", "terrakion", "virizion", "tornadus", "thundurus", "reshiram", "zekrom", "landorus", "kyurem", "keldeo", "meloetta", "genesect", "chespin", "quilladin", "chesnaught", "fennekin", "braixen", "delphox", "froakie", "frogadier", "greninja", "bunnelby", "diggersby", "fletchling", "fletchinder", "talonflame", "scatterbug", "spewpa", "vivillon", "litleo", "pyroar", "flabebe", "floette", "florges", "skiddo", "gogoat", "pancham", "pangoro", "furfrou", "espurr", "meowstic", "honedge", "doublade", "aegislash", "spritzee", "aromatisse", "swirlix", "slurpuff", "inkay", "malamar", "binacle", "barbaracle", "skrelp", "dragalge", "clauncher", "clawitzer", "helioptile", "heliolisk", "tyrunt", "tyrantrum", "amaura", "aurorus", "sylveon", "hawlucha", "dedenne", "carbink", "goomy", "sliggoo", "goodra", "klefki", "phantump", "trevenant", "pumpkaboo", "gourgeist", "bergmite", "avalugg", "noibat", "noivern", "xerneas", "yveltal", "zygarde", "diancie"];
var moves = ["pound", "karate chop", "double slap", "comet punch", "mega punch", "pay day", "fire punch", "ice punch", "thunder punch", "scratch", "vice grip", "guillotine", "razor wind", "swords dance", "cut", "gust", "wing attack", "whirlwind", "fly", "bind", "slam", "vine whip", "stomp", "double kick", "mega kick", "jump kick", "rolling kick", "sand attack", "headbutt", "horn attack", "fury attack", "horn drill", "tackle", "body slam", "wrap", "take down", "thrash", "double_edge", "tail whip", "poison sting", "twineedle", "pin missile", "leer", "bite", "growl", "roar", "sing", "supersonic", "sonic boom", "disable", "acid", "ember", "flamethrower", "mist", "water gun", "hydro pump", "surf", "ice beam", "blizzard", "psybeam", "bubble beam", "aurora beam", "hyper beam", "peck", "drill peck", "submission", "low kick", "counter", "seismic toss", "strength", "absorb", "mega drain", "leech seed", "growth", "razor leaf", "solar beam", "poison powder", "stun spore", "sleep powder", "petal dance", "string shot", "dragon rage", "fire spin", "thunder shock", "thunderbolt", "thunder wave", "thunder", "rock throw", "earthquake", "fissure", "dig", "toxic", "confusion", "psychic", "hypnosis", "meditate", "agility", "quick attack", "rage", "teleport", "night shade", "mimic", "screech", "double team", "recover", "harden", "minimize", "smokescreen", "confuse ray", "withdraw", "defense curl", "barrier", "light screen", "haze", "reflect", "focus energy", "bide", "metronome", "mirror move", "self_destruct", "egg bomb", "lick", "smog", "sludge", "bone club", "fire blast", "waterfall", "clamp", "swift", "skull bash", "spike cannon", "constrict", "amnesia", "kinesis", "soft_boiled", "high jump kick", "glare", "dream eater", "poison gas", "barrage", "leech life", "lovely kiss", "sky attack", "transform", "bubble", "dizzy punch", "spore", "flash", "psywave", "splash", "acid armor", "crabhammer", "explosion", "fury swipes", "bonemerang", "rest", "rock slide", "hyper fang", "sharpen", "conversion", "tri attack", "super fang", "slash", "substitute", "struggle", "sketch", "triple kick", "thief", "spider web", "mind reader", "nightmare", "flame wheel", "snore", "curse", "flail", "conversion 2", "aeroblast", "cotton spore", "reversal", "spite", "powder snow", "protect", "mach punch", "scary face", "feint attack", "sweet kiss", "belly drum", "sludge bomb", "mud_slap", "octazooka", "spikes", "zap cannon", "foresight", "destiny bond", "perish song", "icy wind", "detect", "bone rush", "lock_on", "outrage", "sandstorm", "giga drain", "endure", "charm", "rollout", "false swipe", "swagger", "milk drink", "spark", "fury cutter", "steel wing", "mean look", "attract", "sleep talk", "heal bell", "_return", "present", "frustration", "safeguard", "pain split", "sacred fire", "magnitude", "dynamic punch", "megahorn", "dragon breath", "baton pass", "encore", "pursuit", "rapid spin", "sweet scent", "iron tail", "metal claw", "vital throw", "morning sun", "synthesis", "moonlight", "hidden power", "cross chop", "twister", "rain dance", "sunny day", "crunch", "mirror coat", "psych up", "extreme speed", "ancient power", "shadow ball", "future sight", "rock smash", "whirlpool", "beat up", "fake out", "uproar", "stockpile", "spit up", "swallow", "heat wave", "hail", "torment", "flatter", "will_o_wisp", "memento", "facade", "focus punch", "smelling salts", "follow me", "nature power", "charge", "taunt", "helping hand", "trick", "role play", "wish", "assist", "ingrain", "superpower", "magic coat", "recycle", "revenge", "brick break", "yawn", "knock off", "endeavor", "eruption", "skill swap", "imprison", "refresh", "grudge", "snatch", "secret power", "dive", "arm thrust", "camouflage", "tail glow", "luster purge", "mist ball", "feather dance", "teeter dance", "blaze kick", "mud sport", "ice ball", "needle arm", "slack off", "hyper voice", "poison fang", "crush claw", "blast burn", "hydro cannon", "meteor mash", "astonish", "weather ball", "aromatherapy", "fake tears", "air cutter", "overheat", "odor sleuth", "rock tomb", "silver wind", "metal sound", "grass whistle", "tickle", "cosmic power", "water spout", "signal beam", "shadow punch", "extrasensory", "sky uppercut", "sand tomb", "sheer cold", "muddy water", "bullet seed", "aerial ace", "icicle spear", "iron defense", "block", "howl", "dragon claw", "frenzy plant", "bulk up", "bounce", "mud shot", "poison tail", "covet", "volt tackle", "magical leaf", "water sport", "calm mind", "leaf blade", "dragon dance", "rock blast", "shock wave", "water pulse", "doom desire", "psycho boost", "roost", "gravity", "miracle eye", "wake_up slap", "hammer arm", "gyro ball", "healing wish", "brine", "natural gift", "feint", "pluck", "tailwind", "acupressure", "metal burst", "u_turn", "close combat", "payback", "assurance", "embargo", "fling", "psycho shift", "trump card", "heal block", "wring out", "power trick", "gastro acid", "lucky chant", "me first", "copycat", "power swap", "guard swap", "punishment", "last resort", "worry seed", "sucker punch", "toxic spikes", "heart swap", "aqua ring", "magnet rise", "flare blitz", "force palm", "aura sphere", "rock polish", "poison jab", "dark pulse", "night slash", "aqua tail", "seed bomb", "air slash", "x_scissor", "bug buzz", "dragon pulse", "dragon rush", "power gem", "drain punch", "vacuum wave", "focus blast", "energy ball", "brave bird", "earth power", "switcheroo", "giga impact", "nasty plot", "bullet punch", "avalanche", "ice shard", "shadow claw", "thunder fang", "ice fang", "fire fang", "shadow sneak", "mud bomb", "psycho cut", "zen headbutt", "mirror shot", "flash cannon", "rock climb", "defog", "trick room", "draco meteor", "discharge", "lava plume", "leaf storm", "power whip", "rock wrecker", "cross poison", "gunk shot", "iron head", "magnet bomb", "stone edge", "captivate", "stealth rock", "grass knot", "chatter", "judgment", "bug bite", "charge beam", "wood hammer", "aqua jet", "attack order", "defend order", "heal order", "head smash", "double hit", "roar of time", "spacial rend", "lunar dance", "crush grip", "magma storm", "dark void", "seed flare", "ominous wind", "shadow force", "hone claws", "wide guard", "guard split", "power split", "wonder room", "psyshock", "venoshock", "autotomize", "rage powder", "telekinesis", "magic room", "smack down", "storm throw", "flame burst", "sludge wave", "quiver dance", "heavy slam", "synchronoise", "electro ball", "soak", "flame charge", "coil", "low sweep", "acid spray", "foul play", "simple beam", "entrainment", "after you", "round", "echoed voice", "chip away", "clear smog", "stored power", "quick guard", "ally switch", "scald", "shell smash", "heal pulse", "hex", "sky drop", "shift gear", "circle throw", "incinerate", "quash", "acrobatics", "reflect type", "retaliate", "final gambit", "bestow", "inferno", "water pledge", "fire pledge", "grass pledge", "volt switch", "struggle bug", "bulldoze", "frost breath", "dragon tail", "work up", "electroweb", "wild charge", "drill run", "dual chop", "heart stamp", "horn leech", "sacred sword", "razor shell", "heat crash", "leaf tornado", "steamroller", "cotton guard", "night daze", "psystrike", "tail slap", "hurricane", "head charge", "gear grind", "searing shot", "techno blast", "relic song", "secret sword", "glaciate", "bolt strike", "blue flare", "fiery dance", "freeze shock", "ice burn", "snarl", "icicle crash", "v_create", "fusion flare", "fusion bolt", "flying press", "mat block", "belch", "rototiller", "sticky web", "fell stinger", "phantom force", "trick_or_treat", "noble roar", "ion deluge", "parabolic charge", "forests curse", "petal blizzard", "freeze_dry", "disarming voice", "parting shot", "topsy_turvy", "draining kiss", "crafty shield", "flower shield", "grassy terrain", "misty terrain", "electrify", "play rough", "fairy wind", "moonblast", "boomburst", "fairy lock", "kings shield", "play nice", "confide", "diamond storm", "steam eruption", "hyperspace hole", "water shuriken", "mystical fire", "spiky shield", "aromatic mist", "eerie impulse", "venom drench", "powder", "geomancy", "magnetic flux", "happy hour", "electric terrain", "dazzling gleam", "celebrate", "hold hands", "baby_doll eyes", "nuzzle", "hold back", "infestation", "power_up punch", "oblivion wing", "thousand arrows", "thousand waves", "lands wrath", "light of ruin", "origin pulse", "precipice blades", "dragon ascent", "hyperspace fury"];
var items = ["ability capsule", "ability urge", "abomasite", "absolite", "absorb bulb", "adamant orb", "adventure rules", "aerodactylite", "aggronite", "aguav berry", "air balloon", "alakazite", "altarianite", "ampharosite", "amulet coin", "antidote", "apicot berry", "armor fossil", "aspear berry", "audinite", "awakening", "babiri berry", "balmmushroom", "banettite", "beedrillite", "belue berry", "berry juice", "big mushroom", "big nugget", "big pearl", "big root", "binding band", "black belt", "black flute", "black sludge", "blackglasses", "blastoisinite", "blazikenite", "blk apricorn", "blu apricorn", "blue flute", "blue scarf", "blue shard", "bluk berry", "brightpowder", "bug gem", "burn drive", "burn heal", "calcium", "cameruptite", "carbos", "casteliacone", "cell battery", "charcoal", "charizardite x", "charizardite y", "charti berry", "cheri berry", "cherish ball", "chesto berry", "chilan berry", "chill drive", "choice band", "choice scarf", "choice specs", "chople berry", "claw fossil", "cleanse tag", "clever wing", "coba berry", "colbur berry", "colress machine", "comet shard", "cornn berry", "cover fossil", "custap berry", "damp mulch", "damp rock", "dark gem", "dawn stone", "deepseascale", "deepseatooth", "destiny knot", "diancite", "dire hit", "dire hit 2", "dire hit 3", "dive ball", "dna splicers", "dome fossil", "douse drive", "draco plate", "dragon fang", "dragon gem", "dragon scale", "dread plate", "dream ball", "dropped item", "dubious disc", "durin berry", "dusk ball", "dusk stone", "earth plate", "eject button", "electirizer", "electric gem", "elevator key", "elixir", "energy root", "energypowder", "enigma berry", "escape rope", "ether", "everstone", "eviolite", "exp share", "expert belt", "fairy gem", "fast ball", "fighting gem", "figy berry", "fire gem", "fire stone", "fist plate", "flame orb", "flame plate", "float stone", "fluffy tail", "flying gem", "focus band", "focus sash", "fresh water", "friend ball", "full heal", "full incense", "full restore", "galladite", "ganlon berry", "garchompite", "gardevoirite", "gengarite", "genius wing", "ghost gem", "glalitite", "gooey mulch", "grass gem", "great ball", "green scarf", "green shard", "grepa berry", "grip claw", "griseous orb", "grn apricorn", "ground gem", "growth mulch", "grubby hanky", "guard spec", "gyaradosite", "haban berry", "hard stone", "heal ball", "heal powder", "health wing", "heart scale", "heat rock", "heavy ball", "helix fossil", "heracronite", "hm01", "hm02", "hm03", "hm04", "hm05", "hm06", "hm07", "hm08", "holo caster", "hondew berry", "honey", "honor of kalos", "houndoominite", "hp up", "hyper potion", "iapapa berry", "ice gem", "ice heal", "icicle plate", "icy rock", "insect plate", "intriguing stone", "iron", "iron ball", "iron plate", "item drop", "item urge", "jaboca berry", "kangaskhanite", "kasib berry", "kebia berry", "kelpsy berry", "kings rock", "lagging tail", "lansat berry", "latiasite", "latiosite", "lava cookie", "lax incense", "leaf stone", "leftovers", "lemonade", "lens case", "leppa berry", "level ball", "liechi berry", "life orb", "light ball", "light clay", "looker ticket", "lopunnite", "love ball", "lucarionite", "luck incense", "lucky egg", "lucky punch", "lum berry", "lure ball", "lustrous orb", "luxury ball", "macho brace", "magmarizer", "magnet", "mago berry", "magost berry", "manectite", "master ball", "mawilite", "max elixir", "max ether", "max potion", "max repel", "max revive", "meadow plate", "medal box", "medichamite", "mental herb", "metagrossite", "metal coat", "metal powder", "metronome", "mewtwonite x", "mewtwonite y", "micle berry", "mind plate", "miracle seed", "moomoo milk", "moon ball", "moon stone", "muscle band", "muscle wing", "mystic water", "nanab berry", "nest ball", "net ball", "nevermeltice", "nomel berry", "normal gem", "nugget", "occa berry", "odd incense", "odd keystone", "old amber", "old gateau", "oran berry", "oval charm", "oval stone", "pamtre berry", "park ball", "parlyz heal", "pass orb", "passho berry", "payapa berry", "pearl", "pearl string", "pecha berry", "permit", "persim berry", "petaya berry", "pidgeotite", "pinap berry", "pink scarf", "pinsirite", "pixie plate", "plasma card", "plume fossil", "pnk apricorn", "poison barb", "poison gem", "poké ball", "poké doll", "poké toy", "pomeg berry", "potion", "power anklet", "power band", "power belt", "power bracer", "power herb", "power lens", "power plant pass", "power weight", "pp max", "pp up", "premier ball", "pretty wing", "prism scale", "profs letter", "protector", "protein", "psychic gem", "pure incense", "qualot berry", "quick ball", "quick claw", "quick powder", "rabuta berry", "rare bone", "rare candy", "rawst berry", "razor claw", "razor fang", "razz berry", "reaper cloth", "red apricorn", "red card", "red flute", "red scarf", "red shard", "relic band", "relic copper", "relic crown", "relic gold", "relic silver", "relic statue", "relic vase", "repeat ball", "repel", "reset urge", "resist wing", "reveal glass", "revival herb", "revive", "rindo berry", "ring target", "rock gem", "rock incense", "rocky helmet", "roller skates", "root fossil", "rose incense", "rowap berry", "sablenite", "sacred ash", "safari ball", "salac berry", "salamencite", "sceptilite", "scizorite", "scope lens", "sea incense", "sharp beak", "sharpedonite", "shed shell", "shell bell", "shiny charm", "shiny stone", "shoal salt", "shoal shell", "shock drive", "shuca berry", "silk scarf", "silverpowder", "sitrus berry", "skull fossil", "sky plate", "slowbronite", "smoke ball", "smooth rock", "soda pop", "soft sand", "soothe bell", "soul dew", "spell tag", "spelon berry", "splash plate", "spooky plate", "sport ball", "sprinklotad", "stable mulch", "star piece", "stardust", "starf berry", "steel gem", "steelixite", "stick", "sticky barb", "stone plate", "sun stone", "super potion", "super repel", "swampertite", "sweet heart", "swift wing", "tamato berry", "tanga berry", "thick club", "thunderstone", "timer ball", "tinymushroom", "tm01", "tm02", "tm03", "tm04", "tm05", "tm06", "tm07", "tm08", "tm09", "tm10", "tm100", "tm11", "tm12", "tm13", "tm14", "tm15", "tm16", "tm17", "tm18", "tm19", "tm20", "tm21", "tm22", "tm23", "tm24", "tm25", "tm26", "tm27", "tm28", "tm29", "tm30", "tm31", "tm32", "tm33", "tm34", "tm35", "tm36", "tm37", "tm38", "tm39", "tm40", "tm41", "tm42", "tm43", "tm44", "tm45", "tm46", "tm47", "tm48", "tm49", "tm50", "tm51", "tm52", "tm53", "tm54", "tm55", "tm56", "tm57", "tm58", "tm59", "tm60", "tm61", "tm62", "tm63", "tm64", "tm65", "tm66", "tm67", "tm68", "tm69", "tm70", "tm71", "tm72", "tm73", "tm74", "tm75", "tm76", "tm77", "tm78", "tm79", "tm80", "tm81", "tm82", "tm83", "tm84", "tm85", "tm86", "tm87", "tm88", "tm89", "tm90", "tm91", "tm92", "tm93", "tm94", "tm95", "tm96", "tm97", "tm98", "tm99", "tmv pass", "toxic orb", "toxic plate", "twistedspoon", "tyranitarite", "ultra ball", "up_grade", "venusaurite", "wacan berry", "water gem", "water stone", "watmel berry", "wave incense", "wepear berry", "white flute", "white herb", "wht apricorn", "wide lens", "wiki berry", "wise glasses", "x accuracy", "x accuracy 2", "x accuracy 3", "x accuracy 6", "x attack", "x attack 2", "x attack 3", "x attack 6", "x defend", "x defend 2", "x defend 3", "x defend 6", "x sp def", "x sp def 2", "x sp def 3", "x sp def 6", "x special", "x special 2", "x special 3", "x special 6", "x speed", "x speed 2", "x speed 3", "x speed 6", "yache berry", "yellow flute", "yellow scarf", "yellow shard", "ylw apricorn", "zap plate", "zinc", "zoom lens"];
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
    if (message.toLowerCase().substring(0, 10) === "!typechart"){
    	typechart(user, userID, channelID, message, event);
    }
});

function help(user, userID, channelID, message, event) {
    bot.sendMessage({
        to: channelID,
        message: "Hi, I'm Pokébot! My job is to serve information about data in the Pokémon games. I recognise the following commands: \n!help: Displays this help message.\n!pokemon: Serves information about individual Pokémon.\n!move: Serves information about Pokémon moves.\n!item: Serves information about items.\n!ability: Serves information about pokemon abilites.\n!typechart: Displays a chart of type strengths and weaknesses.\nFor more detail on each command, call it with 'help' as the first argument. For example, '!pokemon help'.\n~~Please use your Master Ball on Fearow or Tentacruel.~~\nI was created by AlphaKretin, using discord.io in node.js."
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
                message: "Image: " + eval(mon).image + "\nName: " + eval(mon).name + "\nPokédex No.: " + eval(mon).dex + "\nType: " + eval(mon).type + "\nAbility: " + eval(mon).ability + "\nWiki Link: " + eval(mon).wiki
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
            message: "This command serves information about Pokémon's moves! Use the move's name as the argument, with spaces where appropriate, ignoring apostrophes, and using '_' instead of '-' in move names that include it. Return is a special case, please ask for that as '!move _return'."
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

function typechart(user, userID, channelID, message, event){
	bot.sendMessage({
		to: channelID,
		message: "http://i.imgur.com/fylyCdC.png"
	});
}

var bulbasaur = {
    name: "Bulbasaur",
    dex: 1,
    type: "Grass/Poison",
    ability: "Overgrow/None/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-xy/001.shtml",
    image: "http://www.serebii.net/xy/pokemon/001.png"
};

var ivysaur = {
    name: "Ivysaur",
    dex: 2,
    type: "Grass/Poison",
    ability: "Overgrow/None/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-xy/002.shtml",
    image: "http://www.serebii.net/xy/pokemon/002.png"
};

var venusaur = {
    name: "Venusaur",
    dex: 3,
    type: "Grass/Poison",
    ability: "Overgrow/None/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-xy/003.shtml",
    image: "http://www.serebii.net/xy/pokemon/003.png"
};

var charmander = {
    name: "Charmander",
    dex: 4,
    type: "Fire",
    ability: "Blaze/None/Solar Power",
    wiki: "http://www.serebii.net/pokedex-xy/004.shtml",
    image: "http://www.serebii.net/xy/pokemon/004.png"
};

var charmeleon = {
    name: "Charmeleon",
    dex: 5,
    type: "Fire",
    ability: "Blaze/None/Solar Power",
    wiki: "http://www.serebii.net/pokedex-xy/005.shtml",
    image: "http://www.serebii.net/xy/pokemon/005.png"
};

var charizard = {
    name: "Charizard",
    dex: 6,
    type: "Fire/Flying",
    ability: "Blaze/None/Solar Power",
    wiki: "http://www.serebii.net/pokedex-xy/006.shtml",
    image: "http://www.serebii.net/xy/pokemon/006.png"
};

var squirtle = {
    name: "Squirtle",
    dex: 7,
    type: "Water",
    ability: "Torrent/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-xy/007.shtml",
    image: "http://www.serebii.net/xy/pokemon/007.png"
};

var wartortle = {
    name: "Wartortle",
    dex: 8,
    type: "Water",
    ability: "Torrent/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-xy/008.shtml",
    image: "http://www.serebii.net/xy/pokemon/008.png"
};

var blastoise = {
    name: "Blastoise",
    dex: 9,
    type: "Water",
    ability: "Torrent/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-xy/009.shtml",
    image: "http://www.serebii.net/xy/pokemon/009.png"
};

var caterpie = {
    name: "Caterpie",
    dex: 10,
    type: "Bug",
    ability: "Shield Dust/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-xy/010.shtml",
    image: "http://www.serebii.net/xy/pokemon/010.png"
};

var metapod = {
    name: "Metapod",
    dex: 11,
    type: "Bug",
    ability: "Shed Skin",
    wiki: "http://www.serebii.net/pokedex-xy/011.shtml",
    image: "http://www.serebii.net/xy/pokemon/011.png"
};

var butterfree = {
    name: "Butterfree",
    dex: 12,
    type: "Bug/Flying",
    ability: "Compound Eyes/None/Tinted Lens",
    wiki: "http://www.serebii.net/pokedex-xy/012.shtml",
    image: "http://www.serebii.net/xy/pokemon/012.png"
};

var weedle = {
    name: "Weedle",
    dex: 13,
    type: "Bug/Poison",
    ability: "Shield Dust/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-xy/013.shtml",
    image: "http://www.serebii.net/xy/pokemon/013.png"
};

var kakuna = {
    name: "Kakuna",
    dex: 14,
    type: "Bug/Poison",
    ability: "Shed Skin",
    wiki: "http://www.serebii.net/pokedex-xy/014.shtml",
    image: "http://www.serebii.net/xy/pokemon/014.png"
};

var beedrill = {
    name: "Beedrill",
    dex: 15,
    type: "Bug/Poison",
    ability: "Swarm/None/Sniper",
    wiki: "http://www.serebii.net/pokedex-xy/015.shtml",
    image: "http://www.serebii.net/xy/pokemon/015.png"
};

var pidgey = {
    name: "Pidgey",
    dex: 16,
    type: "Normal/Flying",
    ability: "Keen Eye/Tangled Feet/Big Pecks",
    wiki: "http://www.serebii.net/pokedex-xy/016.shtml",
    image: "http://www.serebii.net/xy/pokemon/016.png"
};

var pidgeotto = {
    name: "Pidgeotto",
    dex: 17,
    type: "Normal/Flying",
    ability: "Keen Eye/Tangled Feet/Big Pecks",
    wiki: "http://www.serebii.net/pokedex-xy/017.shtml",
    image: "http://www.serebii.net/xy/pokemon/017.png"
};

var pidgeot = {
    name: "Pidgeot",
    dex: 18,
    type: "Normal/Flying",
    ability: "Keen Eye/Tangled Feet/Big Pecks",
    wiki: "http://www.serebii.net/pokedex-xy/018.shtml",
    image: "http://www.serebii.net/xy/pokemon/018.png"
};

var rattata = {
    name: "Rattata",
    dex: 19,
    type: "Normal",
    ability: "Run Away/Guts/Hustle",
    wiki: "http://www.serebii.net/pokedex-xy/019.shtml",
    image: "http://www.serebii.net/xy/pokemon/019.png"
};

var raticate = {
    name: "Raticate",
    dex: 20,
    type: "Normal",
    ability: "Run Away/Guts/Hustle",
    wiki: "http://www.serebii.net/pokedex-xy/020.shtml",
    image: "http://www.serebii.net/xy/pokemon/020.png"
};

var spearow = {
    name: "Spearow",
    dex: 21,
    type: "Normal/Flying",
    ability: "Keen Eye/None/Sniper",
    wiki: "http://www.serebii.net/pokedex-xy/021.shtml",
    image: "http://www.serebii.net/xy/pokemon/021.png"
};

var fearow = {
    name: "Fearow",
    dex: 22,
    type: "Normal/Flying",
    ability: "Keen Eye/None/Sniper",
    wiki: "http://www.serebii.net/pokedex-xy/022.shtml",
    image: "http://www.serebii.net/xy/pokemon/022.png"
};

var ekans = {
    name: "Ekans",
    dex: 23,
    type: "Poison",
    ability: "Intimidate/Shed Skin/Unnerve",
    wiki: "http://www.serebii.net/pokedex-xy/023.shtml",
    image: "http://www.serebii.net/xy/pokemon/023.png"
};

var arbok = {
    name: "Arbok",
    dex: 24,
    type: "Poison",
    ability: "Intimidate/Shed Skin/Unnerve",
    wiki: "http://www.serebii.net/pokedex-xy/024.shtml",
    image: "http://www.serebii.net/xy/pokemon/024.png"
};

var pikachu = {
    name: "Pikachu",
    dex: 25,
    type: "Electric",
    ability: "Static/None/Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-xy/025.shtml",
    image: "http://www.serebii.net/xy/pokemon/025.png"
};

var raichu = {
    name: "Raichu",
    dex: 26,
    type: "Electric",
    ability: "Static/None/Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-xy/026.shtml",
    image: "http://www.serebii.net/xy/pokemon/026.png"
};

var sandshrew = {
    name: "Sandshrew",
    dex: 27,
    type: "Ground",
    ability: "Sand Veil/None/Sand Rush",
    wiki: "http://www.serebii.net/pokedex-xy/027.shtml",
    image: "http://www.serebii.net/xy/pokemon/027.png"
};

var sandslash = {
    name: "Sandslash",
    dex: 28,
    type: "Ground",
    ability: "Sand Veil/None/Sand Rush",
    wiki: "http://www.serebii.net/pokedex-xy/028.shtml",
    image: "http://www.serebii.net/xy/pokemon/028.png"
};

var nidoranf = {
    name: "Nidoran♀",
    dex: 29,
    type: "Poison",
    ability: "Poison Point/Rivalry/Hustle",
    wiki: "http://www.serebii.net/pokedex-xy/029.shtml",
    image: "http://www.serebii.net/xy/pokemon/029.png"
};

var nidorina = {
    name: "Nidorina",
    dex: 30,
    type: "Poison",
    ability: "Poison Point/Rivalry/Hustle",
    wiki: "http://www.serebii.net/pokedex-xy/030.shtml",
    image: "http://www.serebii.net/xy/pokemon/030.png"
};

var nidoqueen = {
    name: "Nidoqueen",
    dex: 31,
    type: "Poison/Ground",
    ability: "Poison Point/Rivalry/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/031.shtml",
    image: "http://www.serebii.net/xy/pokemon/031.png"
};

var nidoranm = {
    name: "Nidoran♂",
    dex: 32,
    type: "Poison",
    ability: "Poison Point/Rivalry/Hustle",
    wiki: "http://www.serebii.net/pokedex-xy/032.shtml",
    image: "http://www.serebii.net/xy/pokemon/032.png"
};

var nidorino = {
    name: "Nidorino",
    dex: 33,
    type: "Poison",
    ability: "Poison Point/Rivalry/Hustle",
    wiki: "http://www.serebii.net/pokedex-xy/033.shtml",
    image: "http://www.serebii.net/xy/pokemon/033.png"
};

var nidoking = {
    name: "Nidoking",
    dex: 34,
    type: "Poison/Ground",
    ability: "Poison Point/Rivalry/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/034.shtml",
    image: "http://www.serebii.net/xy/pokemon/034.png"
};

var clefairy = {
    name: "Clefairy",
    dex: 35,
    type: "Fairy",
    ability: "Cute Charm/Magic Guard/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-xy/035.shtml",
    image: "http://www.serebii.net/xy/pokemon/035.png"
};

var clefable = {
    name: "Clefable",
    dex: 36,
    type: "Fairy",
    ability: "Cute Charm/Magic Guard/Unaware",
    wiki: "http://www.serebii.net/pokedex-xy/036.shtml",
    image: "http://www.serebii.net/xy/pokemon/036.png"
};

var vulpix = {
    name: "Vulpix",
    dex: 37,
    type: "Fire",
    ability: "Flash Fire/None/Drought",
    wiki: "http://www.serebii.net/pokedex-xy/037.shtml",
    image: "http://www.serebii.net/xy/pokemon/037.png"
};

var ninetales = {
    name: "Ninetales",
    dex: 38,
    type: "Fire",
    ability: "Flash Fire/None/Drought",
    wiki: "http://www.serebii.net/pokedex-xy/038.shtml",
    image: "http://www.serebii.net/xy/pokemon/038.png"
};

var jigglypuff = {
    name: "Jigglypuff",
    dex: 39,
    type: "Normal/Fairy",
    ability: "Cute Charm/Competitive/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-xy/039.shtml",
    image: "http://www.serebii.net/xy/pokemon/039.png"
};

var wigglytuff = {
    name: "Wigglytuff",
    dex: 40,
    type: "Normal/Fairy",
    ability: "Cute Charm/Competitive/Frisk",
    wiki: "http://www.serebii.net/pokedex-xy/040.shtml",
    image: "http://www.serebii.net/xy/pokemon/040.png"
};

var zubat = {
    name: "Zubat",
    dex: 41,
    type: "Poison/Flying",
    ability: "Inner Focus/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-xy/041.shtml",
    image: "http://www.serebii.net/xy/pokemon/041.png"
};

var golbat = {
    name: "Golbat",
    dex: 42,
    type: "Poison/Flying",
    ability: "Inner Focus/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-xy/042.shtml",
    image: "http://www.serebii.net/xy/pokemon/042.png"
};

var oddish = {
    name: "Oddish",
    dex: 43,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-xy/043.shtml",
    image: "http://www.serebii.net/xy/pokemon/043.png"
};

var gloom = {
    name: "Gloom",
    dex: 44,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Stench",
    wiki: "http://www.serebii.net/pokedex-xy/044.shtml",
    image: "http://www.serebii.net/xy/pokemon/044.png"
};

var vileplume = {
    name: "Vileplume",
    dex: 45,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Effect Spore",
    wiki: "http://www.serebii.net/pokedex-xy/045.shtml",
    image: "http://www.serebii.net/xy/pokemon/045.png"
};

var paras = {
    name: "Paras",
    dex: 46,
    type: "Bug/Grass",
    ability: "Effect Spore/Dry Skin/Damp",
    wiki: "http://www.serebii.net/pokedex-xy/046.shtml",
    image: "http://www.serebii.net/xy/pokemon/046.png"
};

var parasect = {
    name: "Parasect",
    dex: 47,
    type: "Bug/Grass",
    ability: "Effect Spore/Dry Skin/Damp",
    wiki: "http://www.serebii.net/pokedex-xy/047.shtml",
    image: "http://www.serebii.net/xy/pokemon/047.png"
};

var venonat = {
    name: "Venonat",
    dex: 48,
    type: "Bug/Poison",
    ability: "Compound Eyes/Tinted Lens/Run Away",
    wiki: "http://www.serebii.net/pokedex-xy/048.shtml",
    image: "http://www.serebii.net/xy/pokemon/048.png"
};

var venomoth = {
    name: "Venomoth",
    dex: 49,
    type: "Bug/Poison",
    ability: "Shield Dust/Tinted Lens/Wonder Skin",
    wiki: "http://www.serebii.net/pokedex-xy/049.shtml",
    image: "http://www.serebii.net/xy/pokemon/049.png"
};

var diglett = {
    name: "Diglett",
    dex: 50,
    type: "Ground",
    ability: "Sand Veil/Arena Trap/Sand Force",
    wiki: "http://www.serebii.net/pokedex-xy/050.shtml",
    image: "http://www.serebii.net/xy/pokemon/050.png"
};

var dugtrio = {
    name: "Dugtrio",
    dex: 51,
    type: "Ground",
    ability: "Sand Veil/Arena Trap/Sand Force",
    wiki: "http://www.serebii.net/pokedex-xy/051.shtml",
    image: "http://www.serebii.net/xy/pokemon/051.png"
};

var meowth = {
    name: "Meowth",
    dex: 52,
    type: "Normal",
    ability: "Pickup/Technician/Unnerve",
    wiki: "http://www.serebii.net/pokedex-xy/052.shtml",
    image: "http://www.serebii.net/xy/pokemon/052.png"
};

var persian = {
    name: "Persian",
    dex: 53,
    type: "Normal",
    ability: "Limber/Technician/Unnerve",
    wiki: "http://www.serebii.net/pokedex-xy/053.shtml",
    image: "http://www.serebii.net/xy/pokemon/053.png"
};

var psyduck = {
    name: "Psyduck",
    dex: 54,
    type: "Water",
    ability: "Damp/Cloud Nine/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-xy/054.shtml",
    image: "http://www.serebii.net/xy/pokemon/054.png"
};

var golduck = {
    name: "Golduck",
    dex: 55,
    type: "Water",
    ability: "Damp/Cloud Nine/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-xy/055.shtml",
    image: "http://www.serebii.net/xy/pokemon/055.png"
};

var mankey = {
    name: "Mankey",
    dex: 56,
    type: "Fighting",
    ability: "Vital Spirit/Anger Point/Defiant",
    wiki: "http://www.serebii.net/pokedex-xy/056.shtml",
    image: "http://www.serebii.net/xy/pokemon/056.png"
};

var primeape = {
    name: "Primeape",
    dex: 57,
    type: "Fighting",
    ability: "Vital Spirit/Anger Point/Defiant",
    wiki: "http://www.serebii.net/pokedex-xy/057.shtml",
    image: "http://www.serebii.net/xy/pokemon/057.png"
};

var growlithe = {
    name: "Growlithe",
    dex: 58,
    type: "Fire",
    ability: "Intimidate/Flash Fire/Justified",
    wiki: "http://www.serebii.net/pokedex-xy/058.shtml",
    image: "http://www.serebii.net/xy/pokemon/058.png"
};

var arcanine = {
    name: "Arcanine",
    dex: 59,
    type: "Fire",
    ability: "Intimidate/Flash Fire/Justified",
    wiki: "http://www.serebii.net/pokedex-xy/059.shtml",
    image: "http://www.serebii.net/xy/pokemon/059.png"
};

var poliwag = {
    name: "Poliwag",
    dex: 60,
    type: "Water",
    ability: "Water Absorb/Damp/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-xy/060.shtml",
    image: "http://www.serebii.net/xy/pokemon/060.png"
};

var poliwhirl = {
    name: "Poliwhirl",
    dex: 61,
    type: "Water",
    ability: "Water Absorb/Damp/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-xy/061.shtml",
    image: "http://www.serebii.net/xy/pokemon/061.png"
};

var poliwrath = {
    name: "Poliwrath",
    dex: 62,
    type: "Water/Fighting",
    ability: "Water Absorb/Damp/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-xy/062.shtml",
    image: "http://www.serebii.net/xy/pokemon/062.png"
};

var abra = {
    name: "Abra",
    dex: 63,
    type: "Psychic",
    ability: "Synchronize/Inner Focus/Magic Guard",
    wiki: "http://www.serebii.net/pokedex-xy/063.shtml",
    image: "http://www.serebii.net/xy/pokemon/063.png"
};

var kadabra = {
    name: "Kadabra",
    dex: 64,
    type: "Psychic",
    ability: "Synchronize/Inner Focus/Magic Guard",
    wiki: "http://www.serebii.net/pokedex-xy/064.shtml",
    image: "http://www.serebii.net/xy/pokemon/064.png"
};

var alakazam = {
    name: "Alakazam",
    dex: 65,
    type: "Psychic",
    ability: "Synchronize/Inner Focus/Magic Guard",
    wiki: "http://www.serebii.net/pokedex-xy/065.shtml",
    image: "http://www.serebii.net/xy/pokemon/065.png"
};

var machop = {
    name: "Machop",
    dex: 66,
    type: "Fighting",
    ability: "Guts/No Guard/Steadfast",
    wiki: "http://www.serebii.net/pokedex-xy/066.shtml",
    image: "http://www.serebii.net/xy/pokemon/066.png"
};

var machoke = {
    name: "Machoke",
    dex: 67,
    type: "Fighting",
    ability: "Guts/No Guard/Steadfast",
    wiki: "http://www.serebii.net/pokedex-xy/067.shtml",
    image: "http://www.serebii.net/xy/pokemon/067.png"
};

var machamp = {
    name: "Machamp",
    dex: 68,
    type: "Fighting",
    ability: "Guts/No Guard/Steadfast",
    wiki: "http://www.serebii.net/pokedex-xy/068.shtml",
    image: "http://www.serebii.net/xy/pokemon/068.png"
};

var bellsprout = {
    name: "Bellsprout",
    dex: 69,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Gluttony",
    wiki: "http://www.serebii.net/pokedex-xy/069.shtml",
    image: "http://www.serebii.net/xy/pokemon/069.png"
};

var weepinbell = {
    name: "Weepinbell",
    dex: 70,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Gluttony",
    wiki: "http://www.serebii.net/pokedex-xy/070.shtml",
    image: "http://www.serebii.net/xy/pokemon/070.png"
};

var victreebel = {
    name: "Victreebel",
    dex: 71,
    type: "Grass/Poison",
    ability: "Chlorophyll/None/Gluttony",
    wiki: "http://www.serebii.net/pokedex-xy/071.shtml",
    image: "http://www.serebii.net/xy/pokemon/071.png"
};

var tentacool = {
    name: "Tentacool",
    dex: 72,
    type: "Water/Poison",
    ability: "Clear Body/Liquid Ooze/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-xy/072.shtml",
    image: "http://www.serebii.net/xy/pokemon/072.png"
};

var tentacruel = {
    name: "Tentacruel",
    dex: 73,
    type: "Water/Poison",
    ability: "Clear Body/Liquid Ooze/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-xy/073.shtml",
    image: "http://www.serebii.net/xy/pokemon/073.png"
};

var geodude = {
    name: "Geodude",
    dex: 74,
    type: "Rock/Ground",
    ability: "Rock Head/Sturdy/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-xy/074.shtml",
    image: "http://www.serebii.net/xy/pokemon/074.png"
};

var graveler = {
    name: "Graveler",
    dex: 75,
    type: "Rock/Ground",
    ability: "Rock Head/Sturdy/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-xy/075.shtml",
    image: "http://www.serebii.net/xy/pokemon/075.png"
};

var golem = {
    name: "Golem",
    dex: 76,
    type: "Rock/Ground",
    ability: "Rock Head/Sturdy/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-xy/076.shtml",
    image: "http://www.serebii.net/xy/pokemon/076.png"
};

var ponyta = {
    name: "Ponyta",
    dex: 77,
    type: "Fire",
    ability: "Run Away/Flash Fire/Flame Body",
    wiki: "http://www.serebii.net/pokedex-xy/077.shtml",
    image: "http://www.serebii.net/xy/pokemon/077.png"
};

var rapidash = {
    name: "Rapidash",
    dex: 78,
    type: "Fire",
    ability: "Run Away/Flash Fire/Flame Body",
    wiki: "http://www.serebii.net/pokedex-xy/078.shtml",
    image: "http://www.serebii.net/xy/pokemon/078.png"
};

var slowpoke = {
    name: "Slowpoke",
    dex: 79,
    type: "Water/Psychic",
    ability: "Oblivious/Own Tempo/Regenerator",
    wiki: "http://www.serebii.net/pokedex-xy/079.shtml",
    image: "http://www.serebii.net/xy/pokemon/079.png"
};

var slowbro = {
    name: "Slowbro",
    dex: 80,
    type: "Water/Psychic",
    ability: "Oblivious/Own Tempo/Regenerator",
    wiki: "http://www.serebii.net/pokedex-xy/080.shtml",
    image: "http://www.serebii.net/xy/pokemon/080.png"
};

var magnemite = {
    name: "Magnemite",
    dex: 81,
    type: "Electric/Steel",
    ability: "Magnet Pull/Sturdy/Analytic",
    wiki: "http://www.serebii.net/pokedex-xy/081.shtml",
    image: "http://www.serebii.net/xy/pokemon/081.png"
};

var magneton = {
    name: "Magneton",
    dex: 82,
    type: "Electric/Steel",
    ability: "Magnet Pull/Sturdy/Analytic",
    wiki: "http://www.serebii.net/pokedex-xy/082.shtml",
    image: "http://www.serebii.net/xy/pokemon/082.png"
};

var farfetchd = {
    name: "Farfetch'd",
    dex: 83,
    type: "Normal/Flying",
    ability: "Keen Eye/Inner Focus/Defiant",
    wiki: "http://www.serebii.net/pokedex-xy/083.shtml",
    image: "http://www.serebii.net/xy/pokemon/083.png"
};

var doduo = {
    name: "Doduo",
    dex: 84,
    type: "Normal/Flying",
    ability: "Run Away/Early Bird/Tangled Feet",
    wiki: "http://www.serebii.net/pokedex-xy/084.shtml",
    image: "http://www.serebii.net/xy/pokemon/084.png"
};

var dodrio = {
    name: "Dodrio",
    dex: 85,
    type: "Normal/Flying",
    ability: "Run Away/Early Bird/Tangled Feet",
    wiki: "http://www.serebii.net/pokedex-xy/085.shtml",
    image: "http://www.serebii.net/xy/pokemon/085.png"
};

var seel = {
    name: "Seel",
    dex: 86,
    type: "Water",
    ability: "Thick Fat/Hydration/Ice Body",
    wiki: "http://www.serebii.net/pokedex-xy/086.shtml",
    image: "http://www.serebii.net/xy/pokemon/086.png"
};

var dewgong = {
    name: "Dewgong",
    dex: 87,
    type: "Water/Ice",
    ability: "Thick Fat/Hydration/Ice Body",
    wiki: "http://www.serebii.net/pokedex-xy/087.shtml",
    image: "http://www.serebii.net/xy/pokemon/087.png"
};

var grimer = {
    name: "Grimer",
    dex: 88,
    type: "Poison",
    ability: "Stench/Sticky Hold/Poison Touch",
    wiki: "http://www.serebii.net/pokedex-xy/088.shtml",
    image: "http://www.serebii.net/xy/pokemon/088.png"
};

var muk = {
    name: "Muk",
    dex: 89,
    type: "Poison",
    ability: "Stench/Sticky Hold/Poison Touch",
    wiki: "http://www.serebii.net/pokedex-xy/089.shtml",
    image: "http://www.serebii.net/xy/pokemon/089.png"
};

var shellder = {
    name: "Shellder",
    dex: 90,
    type: "Water",
    ability: "Shell Armor/Skill Link/Overcoat",
    wiki: "http://www.serebii.net/pokedex-xy/090.shtml",
    image: "http://www.serebii.net/xy/pokemon/090.png"
};

var cloyster = {
    name: "Cloyster",
    dex: 91,
    type: "Water/Ice",
    ability: "Shell Armor/Skill Link/Overcoat",
    wiki: "http://www.serebii.net/pokedex-xy/091.shtml",
    image: "http://www.serebii.net/xy/pokemon/091.png"
};

var gastly = {
    name: "Gastly",
    dex: 92,
    type: "Ghost/Poison",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/092.shtml",
    image: "http://www.serebii.net/xy/pokemon/092.png"
};

var haunter = {
    name: "Haunter",
    dex: 93,
    type: "Ghost/Poison",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/093.shtml",
    image: "http://www.serebii.net/xy/pokemon/093.png"
};

var gengar = {
    name: "Gengar",
    dex: 94,
    type: "Ghost/Poison",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/094.shtml",
    image: "http://www.serebii.net/xy/pokemon/094.png"
};

var onix = {
    name: "Onix",
    dex: 95,
    type: "Rock/Ground",
    ability: "Rock Head/Sturdy/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-xy/095.shtml",
    image: "http://www.serebii.net/xy/pokemon/095.png"
};

var drowzee = {
    name: "Drowzee",
    dex: 96,
    type: "Psychic",
    ability: "Insomnia/Forewarn/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-xy/096.shtml",
    image: "http://www.serebii.net/xy/pokemon/096.png"
};

var hypno = {
    name: "Hypno",
    dex: 97,
    type: "Psychic",
    ability: "Insomnia/Forewarn/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-xy/097.shtml",
    image: "http://www.serebii.net/xy/pokemon/097.png"
};

var krabby = {
    name: "Krabby",
    dex: 98,
    type: "Water",
    ability: "Hyper Cutter/Shell Armor/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/098.shtml",
    image: "http://www.serebii.net/xy/pokemon/098.png"
};

var kingler = {
    name: "Kingler",
    dex: 99,
    type: "Water",
    ability: "Hyper Cutter/Shell Armor/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/099.shtml",
    image: "http://www.serebii.net/xy/pokemon/099.png"
};

var voltorb = {
    name: "Voltorb",
    dex: 100,
    type: "Electric",
    ability: "Soundproof/Static/Aftermath",
    wiki: "http://www.serebii.net/pokedex-xy/100.shtml",
    image: "http://www.serebii.net/xy/pokemon/100.png"
};

var electrode = {
    name: "Electrode",
    dex: 101,
    type: "Electric",
    ability: "Soundproof/Static/Aftermath",
    wiki: "http://www.serebii.net/pokedex-xy/101.shtml",
    image: "http://www.serebii.net/xy/pokemon/101.png"
};

var exeggcute = {
    name: "Exeggcute",
    dex: 102,
    type: "Grass/Psychic",
    ability: "Chlorophyll/None/Harvest",
    wiki: "http://www.serebii.net/pokedex-xy/102.shtml",
    image: "http://www.serebii.net/xy/pokemon/102.png"
};

var exeggutor = {
    name: "Exeggutor",
    dex: 103,
    type: "Grass/Psychic",
    ability: "Chlorophyll/None/Harvest",
    wiki: "http://www.serebii.net/pokedex-xy/103.shtml",
    image: "http://www.serebii.net/xy/pokemon/103.png"
};

var cubone = {
    name: "Cubone",
    dex: 104,
    type: "Ground",
    ability: "Rock Head/Lightning Rod/Battle Armor",
    wiki: "http://www.serebii.net/pokedex-xy/104.shtml",
    image: "http://www.serebii.net/xy/pokemon/104.png"
};

var marowak = {
    name: "Marowak",
    dex: 105,
    type: "Ground",
    ability: "Rock Head/Lightning Rod/Battle Armor",
    wiki: "http://www.serebii.net/pokedex-xy/105.shtml",
    image: "http://www.serebii.net/xy/pokemon/105.png"
};

var hitmonlee = {
    name: "Hitmonlee",
    dex: 106,
    type: "Fighting",
    ability: "Limber/Reckless/Unburden",
    wiki: "http://www.serebii.net/pokedex-xy/106.shtml",
    image: "http://www.serebii.net/xy/pokemon/106.png"
};

var hitmonchan = {
    name: "Hitmonchan",
    dex: 107,
    type: "Fighting",
    ability: "Keen Eye/Iron Fist/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-xy/107.shtml",
    image: "http://www.serebii.net/xy/pokemon/107.png"
};

var lickitung = {
    name: "Lickitung",
    dex: 108,
    type: "Normal",
    ability: "Own Tempo/Oblivious/Cloud Nine",
    wiki: "http://www.serebii.net/pokedex-xy/108.shtml",
    image: "http://www.serebii.net/xy/pokemon/108.png"
};

var koffing = {
    name: "Koffing",
    dex: 109,
    type: "Poison",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/109.shtml",
    image: "http://www.serebii.net/xy/pokemon/109.png"
};

var weezing = {
    name: "Weezing",
    dex: 110,
    type: "Poison",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/110.shtml",
    image: "http://www.serebii.net/xy/pokemon/110.png"
};

var rhyhorn = {
    name: "Rhyhorn",
    dex: 111,
    type: "Ground/Rock",
    ability: "Lightning Rod/Rock Head/Reckless",
    wiki: "http://www.serebii.net/pokedex-xy/111.shtml",
    image: "http://www.serebii.net/xy/pokemon/111.png"
};

var rhydon = {
    name: "Rhydon",
    dex: 112,
    type: "Ground/Rock",
    ability: "Lightning Rod/Rock Head/Reckless",
    wiki: "http://www.serebii.net/pokedex-xy/112.shtml",
    image: "http://www.serebii.net/xy/pokemon/112.png"
};

var chansey = {
    name: "Chansey",
    dex: 113,
    type: "Normal",
    ability: "Natural Cure/Serene Grace/Healer",
    wiki: "http://www.serebii.net/pokedex-xy/113.shtml",
    image: "http://www.serebii.net/xy/pokemon/113.png"
};

var tangela = {
    name: "Tangela",
    dex: 114,
    type: "Grass",
    ability: "Chlorophyll/Leaf Guard/Regenerator",
    wiki: "http://www.serebii.net/pokedex-xy/114.shtml",
    image: "http://www.serebii.net/xy/pokemon/114.png"
};

var kangaskhan = {
    name: "Kangaskhan",
    dex: 115,
    type: "Normal",
    ability: "Early Bird/Scrappy/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-xy/115.shtml",
    image: "http://www.serebii.net/xy/pokemon/115.png"
};

var horsea = {
    name: "Horsea",
    dex: 116,
    type: "Water",
    ability: "Swift Swim/Sniper/Damp",
    wiki: "http://www.serebii.net/pokedex-xy/116.shtml",
    image: "http://www.serebii.net/xy/pokemon/116.png"
};

var seadra = {
    name: "Seadra",
    dex: 117,
    type: "Water",
    ability: "Poison Point/Sniper/Damp",
    wiki: "http://www.serebii.net/pokedex-xy/117.shtml",
    image: "http://www.serebii.net/xy/pokemon/117.png"
};

var goldeen = {
    name: "Goldeen",
    dex: 118,
    type: "Water",
    ability: "Swift Swim/Water Veil/Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-xy/118.shtml",
    image: "http://www.serebii.net/xy/pokemon/118.png"
};

var seaking = {
    name: "Seaking",
    dex: 119,
    type: "Water",
    ability: "Swift Swim/Water Veil/Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-xy/119.shtml",
    image: "http://www.serebii.net/xy/pokemon/119.png"
};

var staryu = {
    name: "Staryu",
    dex: 120,
    type: "Water",
    ability: "Illuminate/Natural Cure/Analytic",
    wiki: "http://www.serebii.net/pokedex-xy/120.shtml",
    image: "http://www.serebii.net/xy/pokemon/120.png"
};

var starmie = {
    name: "Starmie",
    dex: 121,
    type: "Water/Psychic",
    ability: "Illuminate/Natural Cure/Analytic",
    wiki: "http://www.serebii.net/pokedex-xy/121.shtml",
    image: "http://www.serebii.net/xy/pokemon/121.png"
};

var mr_mime = {
    name: "Mr. Mime",
    dex: 122,
    type: "Psychic/Fairy",
    ability: "Soundproof/Filter/Technician",
    wiki: "http://www.serebii.net/pokedex-xy/122.shtml",
    image: "http://www.serebii.net/xy/pokemon/122.png"
};

var scyther = {
    name: "Scyther",
    dex: 123,
    type: "Bug/Flying",
    ability: "Swarm/Technician/Steadfast",
    wiki: "http://www.serebii.net/pokedex-xy/123.shtml",
    image: "http://www.serebii.net/xy/pokemon/123.png"
};

var jynx = {
    name: "Jynx",
    dex: 124,
    type: "Ice/Psychic",
    ability: "Oblivious/Forewarn/Dry Skin",
    wiki: "http://www.serebii.net/pokedex-xy/124.shtml",
    image: "http://www.serebii.net/xy/pokemon/124.png"
};

var electabuzz = {
    name: "Electabuzz",
    dex: 125,
    type: "Electric",
    ability: "Static/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-xy/125.shtml",
    image: "http://www.serebii.net/xy/pokemon/125.png"
};

var magmar = {
    name: "Magmar",
    dex: 126,
    type: "Fire",
    ability: "Flame Body/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-xy/126.shtml",
    image: "http://www.serebii.net/xy/pokemon/126.png"
};

var pinsir = {
    name: "Pinsir",
    dex: 127,
    type: "Bug",
    ability: "Hyper Cutter/Mold Breaker/Moxie",
    wiki: "http://www.serebii.net/pokedex-xy/127.shtml",
    image: "http://www.serebii.net/xy/pokemon/127.png"
};

var tauros = {
    name: "Tauros",
    dex: 128,
    type: "Normal",
    ability: "Intimidate/Anger Point/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/128.shtml",
    image: "http://www.serebii.net/xy/pokemon/128.png"
};

var magikarp = {
    name: "Magikarp",
    dex: 129,
    type: "Water",
    ability: "Swift Swim/None/Rattled",
    wiki: "http://www.serebii.net/pokedex-xy/129.shtml",
    image: "http://www.serebii.net/xy/pokemon/129.png"
};

var gyarados = {
    name: "Gyarados",
    dex: 130,
    type: "Water/Flying",
    ability: "Intimidate/None/Moxie",
    wiki: "http://www.serebii.net/pokedex-xy/130.shtml",
    image: "http://www.serebii.net/xy/pokemon/130.png"
};

var lapras = {
    name: "Lapras",
    dex: 131,
    type: "Water/Ice",
    ability: "Water Absorb/Shell Armor/Hydration",
    wiki: "http://www.serebii.net/pokedex-xy/131.shtml",
    image: "http://www.serebii.net/xy/pokemon/131.png"
};

var ditto = {
    name: "Ditto",
    dex: 132,
    type: "Normal",
    ability: "Limber/None/Imposter",
    wiki: "http://www.serebii.net/pokedex-xy/132.shtml",
    image: "http://www.serebii.net/xy/pokemon/132.png"
};

var eevee = {
    name: "Eevee",
    dex: 133,
    type: "Normal",
    ability: "Run Away/Adaptability/Anticipation",
    wiki: "http://www.serebii.net/pokedex-xy/133.shtml",
    image: "http://www.serebii.net/xy/pokemon/133.png"
};

var vaporeon = {
    name: "Vaporeon",
    dex: 134,
    type: "Water",
    ability: "Water Absorb/None/Hydration",
    wiki: "http://www.serebii.net/pokedex-xy/134.shtml",
    image: "http://www.serebii.net/xy/pokemon/134.png"
};

var jolteon = {
    name: "Jolteon",
    dex: 135,
    type: "Electric",
    ability: "Volt Absorb/None/Quick Feet",
    wiki: "http://www.serebii.net/pokedex-xy/135.shtml",
    image: "http://www.serebii.net/xy/pokemon/135.png"
};

var flareon = {
    name: "Flareon",
    dex: 136,
    type: "Fire",
    ability: "Flash Fire/None/Guts",
    wiki: "http://www.serebii.net/pokedex-xy/136.shtml",
    image: "http://www.serebii.net/xy/pokemon/136.png"
};

var porygon = {
    name: "Porygon",
    dex: 137,
    type: "Normal",
    ability: "Trace/Download/Analytic",
    wiki: "http://www.serebii.net/pokedex-xy/137.shtml",
    image: "http://www.serebii.net/xy/pokemon/137.png"
};

var omanyte = {
    name: "Omanyte",
    dex: 138,
    type: "Rock/Water",
    ability: "Swift Swim/Shell Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-xy/138.shtml",
    image: "http://www.serebii.net/xy/pokemon/138.png"
};

var omastar = {
    name: "Omastar",
    dex: 139,
    type: "Rock/Water",
    ability: "Swift Swim/Shell Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-xy/139.shtml",
    image: "http://www.serebii.net/xy/pokemon/139.png"
};

var kabuto = {
    name: "Kabuto",
    dex: 140,
    type: "Rock/Water",
    ability: "Swift Swim/Battle Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-xy/140.shtml",
    image: "http://www.serebii.net/xy/pokemon/140.png"
};

var kabutops = {
    name: "Kabutops",
    dex: 141,
    type: "Rock/Water",
    ability: "Swift Swim/Battle Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-xy/141.shtml",
    image: "http://www.serebii.net/xy/pokemon/141.png"
};

var aerodactyl = {
    name: "Aerodactyl",
    dex: 142,
    type: "Rock/Flying",
    ability: "Rock Head/Pressure/Unnerve",
    wiki: "http://www.serebii.net/pokedex-xy/142.shtml",
    image: "http://www.serebii.net/xy/pokemon/142.png"
};

var snorlax = {
    name: "Snorlax",
    dex: 143,
    type: "Normal",
    ability: "Immunity/Thick Fat/Gluttony",
    wiki: "http://www.serebii.net/pokedex-xy/143.shtml",
    image: "http://www.serebii.net/xy/pokemon/143.png"
};

var articuno = {
    name: "Articuno",
    dex: 144,
    type: "Ice/Flying",
    ability: "Pressure/None/Snow Cloak",
    wiki: "http://www.serebii.net/pokedex-xy/144.shtml",
    image: "http://www.serebii.net/xy/pokemon/144.png"
};

var zapdos = {
    name: "Zapdos",
    dex: 145,
    type: "Electric/Flying",
    ability: "Pressure/None/Static/",
    wiki: "http://www.serebii.net/pokedex-xy/145.shtml",
    image: "http://www.serebii.net/xy/pokemon/145.png"
};

var moltres = {
    name: "Moltres",
    dex: 146,
    type: "Fire/Flying",
    ability: "Pressure/None/Flame Body",
    wiki: "http://www.serebii.net/pokedex-xy/146.shtml",
    image: "http://www.serebii.net/xy/pokemon/146.png"
};

var dratini = {
    name: "Dratini",
    dex: 147,
    type: "Dragon",
    ability: "Shed Skin/None/Marvel Scale",
    wiki: "http://www.serebii.net/pokedex-xy/147.shtml",
    image: "http://www.serebii.net/xy/pokemon/147.png"
};

var dragonair = {
    name: "Dragonair",
    dex: 148,
    type: "Dragon",
    ability: "Shed Skin/None/Marvel Scale",
    wiki: "http://www.serebii.net/pokedex-xy/148.shtml",
    image: "http://www.serebii.net/xy/pokemon/148.png"
};

var dragonite = {
    name: "Dragonite",
    dex: 149,
    type: "Dragon/Flying",
    ability: "Inner Focus/None/Multiscale",
    wiki: "http://www.serebii.net/pokedex-xy/149.shtml",
    image: "http://www.serebii.net/xy/pokemon/149.png"
};

var mewtwo = {
    name: "Mewtwo",
    dex: 150,
    type: "Psychic",
    ability: "Pressure/None/Unnerve",
    wiki: "http://www.serebii.net/pokedex-xy/150.shtml",
    image: "http://www.serebii.net/xy/pokemon/150.png"
};

var mew = {
    name: "Mew",
    dex: 151,
    type: "Psychic",
    ability: "Synchronize",
    wiki: "http://www.serebii.net/pokedex-xy/151.shtml",
    image: "http://www.serebii.net/xy/pokemon/151.png"
};

var chikorita = {
    name: "Chikorita",
    dex: 152,
    type: "Grass",
    ability: "Overgrow/None/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-xy/152.shtml",
    image: "http://www.serebii.net/xy/pokemon/152.png"
};

var bayleef = {
    name: "Bayleef",
    dex: 153,
    type: "Grass",
    ability: "Overgrow/None/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-xy/153.shtml",
    image: "http://www.serebii.net/xy/pokemon/153.png"
};

var meganium = {
    name: "Meganium",
    dex: 154,
    type: "Grass",
    ability: "Overgrow/None/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-xy/154.shtml",
    image: "http://www.serebii.net/xy/pokemon/154.png"
};

var cyndaquil = {
    name: "Cyndaquil",
    dex: 155,
    type: "Fire",
    ability: "Blaze/None/Flash Fire",
    wiki: "http://www.serebii.net/pokedex-xy/155.shtml",
    image: "http://www.serebii.net/xy/pokemon/155.png"
};

var quilava = {
    name: "Quilava",
    dex: 156,
    type: "Fire",
    ability: "Blaze/None/Flash Fire",
    wiki: "http://www.serebii.net/pokedex-xy/156.shtml",
    image: "http://www.serebii.net/xy/pokemon/156.png"
};

var typhlosion = {
    name: "Typhlosion",
    dex: 157,
    type: "Fire",
    ability: "Blaze/None/Flash Fire",
    wiki: "http://www.serebii.net/pokedex-xy/157.shtml",
    image: "http://www.serebii.net/xy/pokemon/157.png"
};

var totodile = {
    name: "Totodile",
    dex: 158,
    type: "Water",
    ability: "Torrent/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/158.shtml",
    image: "http://www.serebii.net/xy/pokemon/158.png"
};

var croconaw = {
    name: "Croconaw",
    dex: 159,
    type: "Water",
    ability: "Torrent/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/159.shtml",
    image: "http://www.serebii.net/xy/pokemon/159.png"
};

var feraligatr = {
    name: "Feraligatr",
    dex: 160,
    type: "Water",
    ability: "Torrent/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/160.shtml",
    image: "http://www.serebii.net/xy/pokemon/160.png"
};

var sentret = {
    name: "Sentret",
    dex: 161,
    type: "Normal",
    ability: "Run Away/Keen Eye/Frisk",
    wiki: "http://www.serebii.net/pokedex-xy/161.shtml",
    image: "http://www.serebii.net/xy/pokemon/161.png"
};

var furret = {
    name: "Furret",
    dex: 162,
    type: "Normal",
    ability: "Run Away/Keen Eye/Frisk",
    wiki: "http://www.serebii.net/pokedex-xy/162.shtml",
    image: "http://www.serebii.net/xy/pokemon/162.png"
};

var hoothoot = {
    name: "Hoothoot",
    dex: 163,
    type: "Normal/Flying",
    ability: "Insomnia/Keen Eye/Tinted Lens",
    wiki: "http://www.serebii.net/pokedex-xy/163.shtml",
    image: "http://www.serebii.net/xy/pokemon/163.png"
};

var noctowl = {
    name: "Noctowl",
    dex: 164,
    type: "Normal/Flying",
    ability: "Insomnia/Keen Eye/Tinted Lens",
    wiki: "http://www.serebii.net/pokedex-xy/164.shtml",
    image: "http://www.serebii.net/xy/pokemon/164.png"
};

var ledyba = {
    name: "Ledyba",
    dex: 165,
    type: "Bug/Flying",
    ability: "Swarm/Early Bird/Rattled",
    wiki: "http://www.serebii.net/pokedex-xy/165.shtml",
    image: "http://www.serebii.net/xy/pokemon/165.png"
};

var ledian = {
    name: "Ledian",
    dex: 166,
    type: "Bug/Flying",
    ability: "Swarm/Early Bird/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-xy/166.shtml",
    image: "http://www.serebii.net/xy/pokemon/166.png"
};

var spinarak = {
    name: "Spinarak",
    dex: 167,
    type: "Bug/Poison",
    ability: "Swarm/Insomnia/Sniper",
    wiki: "http://www.serebii.net/pokedex-xy/167.shtml",
    image: "http://www.serebii.net/xy/pokemon/167.png"
};

var ariados = {
    name: "Ariados",
    dex: 168,
    type: "Bug/Poison",
    ability: "Swarm/Insomnia/Sniper",
    wiki: "http://www.serebii.net/pokedex-xy/168.shtml",
    image: "http://www.serebii.net/xy/pokemon/168.png"
};

var crobat = {
    name: "Crobat",
    dex: 169,
    type: "Poison/Flying",
    ability: "Inner Focus/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-xy/169.shtml",
    image: "http://www.serebii.net/xy/pokemon/169.png"
};

var chinchou = {
    name: "Chinchou",
    dex: 170,
    type: "Water/Electric",
    ability: "Volt Absorb/Illuminate/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-xy/170.shtml",
    image: "http://www.serebii.net/xy/pokemon/170.png"
};

var lanturn = {
    name: "Lanturn",
    dex: 171,
    type: "Water/Electric",
    ability: "Volt Absorb/Illuminate/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-xy/171.shtml",
    image: "http://www.serebii.net/xy/pokemon/171.png"
};

var pichu = {
    name: "Pichu",
    dex: 172,
    type: "Electric",
    ability: "Static/None/Lightning Rod",
    wiki: "http://www.serebii.net/pokedex-xy/172.shtml",
    image: "http://www.serebii.net/xy/pokemon/172.png"
};

var cleffa = {
    name: "Cleffa",
    dex: 173,
    type: "Fairy",
    ability: "Cute Charm/Magic Guard/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-xy/173.shtml",
    image: "http://www.serebii.net/xy/pokemon/173.png"
};

var igglybuff = {
    name: "Igglybuff",
    dex: 174,
    type: "Normal/Fairy",
    ability: "Cute Charm/Competitive/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-xy/174.shtml",
    image: "http://www.serebii.net/xy/pokemon/174.png"
};

var togepi = {
    name: "Togepi",
    dex: 175,
    type: "Fairy",
    ability: "Hustle/Serene Grace/Super Luck",
    wiki: "http://www.serebii.net/pokedex-xy/175.shtml",
    image: "http://www.serebii.net/xy/pokemon/175.png"
};

var togetic = {
    name: "Togetic",
    dex: 176,
    type: "Fairy/Flying",
    ability: "Hustle/Serene Grace/Super Luck",
    wiki: "http://www.serebii.net/pokedex-xy/176.shtml",
    image: "http://www.serebii.net/xy/pokemon/176.png"
};

var natu = {
    name: "Natu",
    dex: 177,
    type: "Psychic/Flying",
    ability: "Synchronize/Early Bird/Magic Bounce",
    wiki: "http://www.serebii.net/pokedex-xy/177.shtml",
    image: "http://www.serebii.net/xy/pokemon/177.png"
};

var xatu = {
    name: "Xatu",
    dex: 178,
    type: "Psychic/Flying",
    ability: "Synchronize/Early Bird/Magic Bounce",
    wiki: "http://www.serebii.net/pokedex-xy/178.shtml",
    image: "http://www.serebii.net/xy/pokemon/178.png"
};

var mareep = {
    name: "Mareep",
    dex: 179,
    type: "Electric",
    ability: "Static/None/Plus",
    wiki: "http://www.serebii.net/pokedex-xy/179.shtml",
    image: "http://www.serebii.net/xy/pokemon/179.png"
};

var flaaffy = {
    name: "Flaaffy",
    dex: 180,
    type: "Electric",
    ability: "Static/None/Plus",
    wiki: "http://www.serebii.net/pokedex-xy/180.shtml",
    image: "http://www.serebii.net/xy/pokemon/180.png"
};

var ampharos = {
    name: "Ampharos",
    dex: 181,
    type: "Electric",
    ability: "Static/None/Plus",
    wiki: "http://www.serebii.net/pokedex-xy/181.shtml",
    image: "http://www.serebii.net/xy/pokemon/181.png"
};

var bellossom = {
    name: "Bellossom",
    dex: 182,
    type: "Grass",
    ability: "Chlorophyll/None/Healer",
    wiki: "http://www.serebii.net/pokedex-xy/182.shtml",
    image: "http://www.serebii.net/xy/pokemon/182.png"
};

var marill = {
    name: "Marill",
    dex: 183,
    type: "Water/Fairy",
    ability: "Thick Fat/Huge Power/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-xy/183.shtml",
    image: "http://www.serebii.net/xy/pokemon/183.png"
};

var azumarill = {
    name: "Azumarill",
    dex: 184,
    type: "Water/Fairy",
    ability: "Thick Fat/Huge Power/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-xy/184.shtml",
    image: "http://www.serebii.net/xy/pokemon/184.png"
};

var sudowoodo = {
    name: "Sudowoodo",
    dex: 185,
    type: "Rock",
    ability: "Sturdy/Rock Head/Rattled",
    wiki: "http://www.serebii.net/pokedex-xy/185.shtml",
    image: "http://www.serebii.net/xy/pokemon/185.png"
};

var politoed = {
    name: "Politoed",
    dex: 186,
    type: "Water",
    ability: "Water Absorb/Damp/Drizzle",
    wiki: "http://www.serebii.net/pokedex-xy/186.shtml",
    image: "http://www.serebii.net/xy/pokemon/186.png"
};

var hoppip = {
    name: "Hoppip",
    dex: 187,
    type: "Grass/Flying",
    ability: "Chlorophyll/Leaf Guard/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-xy/187.shtml",
    image: "http://www.serebii.net/xy/pokemon/187.png"
};

var skiploom = {
    name: "Skiploom",
    dex: 188,
    type: "Grass/Flying",
    ability: "Chlorophyll/Leaf Guard/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-xy/188.shtml",
    image: "http://www.serebii.net/xy/pokemon/188.png"
};

var jumpluff = {
    name: "Jumpluff",
    dex: 189,
    type: "Grass/Flying",
    ability: "Chlorophyll/Leaf Guard/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-xy/189.shtml",
    image: "http://www.serebii.net/xy/pokemon/189.png"
};

var aipom = {
    name: "Aipom",
    dex: 190,
    type: "Normal",
    ability: "Run Away/Pickup/Skill Link",
    wiki: "http://www.serebii.net/pokedex-xy/190.shtml",
    image: "http://www.serebii.net/xy/pokemon/190.png"
};

var sunkern = {
    name: "Sunkern",
    dex: 191,
    type: "Grass",
    ability: "Chlorophyll/Solar Power/Early Bird",
    wiki: "http://www.serebii.net/pokedex-xy/191.shtml",
    image: "http://www.serebii.net/xy/pokemon/191.png"
};

var sunflora = {
    name: "Sunflora",
    dex: 192,
    type: "Grass",
    ability: "Chlorophyll/Solar Power/Early Bird",
    wiki: "http://www.serebii.net/pokedex-xy/192.shtml",
    image: "http://www.serebii.net/xy/pokemon/192.png"
};

var yanma = {
    name: "Yanma",
    dex: 193,
    type: "Bug/Flying",
    ability: "Speed Boost/Compound Eyes/Frisk",
    wiki: "http://www.serebii.net/pokedex-xy/193.shtml",
    image: "http://www.serebii.net/xy/pokemon/193.png"
};

var wooper = {
    name: "Wooper",
    dex: 194,
    type: "Water/Ground",
    ability: "Damp/Water Absorb/Unaware",
    wiki: "http://www.serebii.net/pokedex-xy/194.shtml",
    image: "http://www.serebii.net/xy/pokemon/194.png"
};

var quagsire = {
    name: "Quagsire",
    dex: 195,
    type: "Water/Ground",
    ability: "Damp/Water Absorb/Unaware",
    wiki: "http://www.serebii.net/pokedex-xy/195.shtml",
    image: "http://www.serebii.net/xy/pokemon/195.png"
};

var espeon = {
    name: "Espeon",
    dex: 196,
    type: "Psychic",
    ability: "Synchronize/None/Magic Bounce",
    wiki: "http://www.serebii.net/pokedex-xy/196.shtml",
    image: "http://www.serebii.net/xy/pokemon/196.png"
};

var umbreon = {
    name: "Umbreon",
    dex: 197,
    type: "Dark",
    ability: "Synchronize/None/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-xy/197.shtml",
    image: "http://www.serebii.net/xy/pokemon/197.png"
};

var murkrow = {
    name: "Murkrow",
    dex: 198,
    type: "Dark/Flying",
    ability: "Insomnia/Super Luck/Prankster",
    wiki: "http://www.serebii.net/pokedex-xy/198.shtml",
    image: "http://www.serebii.net/xy/pokemon/198.png"
};

var slowking = {
    name: "Slowking",
    dex: 199,
    type: "Water/Psychic",
    ability: "Oblivious/Own Tempo/Regenerator",
    wiki: "http://www.serebii.net/pokedex-xy/199.shtml",
    image: "http://www.serebii.net/xy/pokemon/199.png"
};

var misdreavus = {
    name: "Misdreavus",
    dex: 200,
    type: "Ghost",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/200.shtml",
    image: "http://www.serebii.net/xy/pokemon/200.png"
};

var unown = {
    name: "Unown",
    dex: 201,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/201.shtml",
    image: "http://www.serebii.net/xy/pokemon/201.png"
};

var wobbuffet = {
    name: "Wobbuffet",
    dex: 202,
    type: "Psychic",
    ability: "Shadow Tag/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-xy/202.shtml",
    image: "http://www.serebii.net/xy/pokemon/202.png"
};

var girafarig = {
    name: "Girafarig",
    dex: 203,
    type: "Normal/Psychic",
    ability: "Inner Focus/Early Bird/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-xy/203.shtml",
    image: "http://www.serebii.net/xy/pokemon/203.png"
};

var pineco = {
    name: "Pineco",
    dex: 204,
    type: "Bug",
    ability: "Sturdy/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-xy/204.shtml",
    image: "http://www.serebii.net/xy/pokemon/204.png"
};

var forretress = {
    name: "Forretress",
    dex: 205,
    type: "Bug/Steel",
    ability: "Sturdy/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-xy/205.shtml",
    image: "http://www.serebii.net/xy/pokemon/205.png"
};

var dunsparce = {
    name: "Dunsparce",
    dex: 206,
    type: "Normal",
    ability: "Serene Grace/Run Away/Rattled",
    wiki: "http://www.serebii.net/pokedex-xy/206.shtml",
    image: "http://www.serebii.net/xy/pokemon/206.png"
};

var gligar = {
    name: "Gligar",
    dex: 207,
    type: "Ground/Flying",
    ability: "Hyper Cutter/Sand Veil/Immunity",
    wiki: "http://www.serebii.net/pokedex-xy/207.shtml",
    image: "http://www.serebii.net/xy/pokemon/207.png"
};

var steelix = {
    name: "Steelix",
    dex: 208,
    type: "Steel/Ground",
    ability: "Rock Head/Sturdy/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/208.shtml",
    image: "http://www.serebii.net/xy/pokemon/208.png"
};

var snubbull = {
    name: "Snubbull",
    dex: 209,
    type: "Fairy",
    ability: "Intimidate/Run Away/Rattled",
    wiki: "http://www.serebii.net/pokedex-xy/209.shtml",
    image: "http://www.serebii.net/xy/pokemon/209.png"
};

var granbull = {
    name: "Granbull",
    dex: 210,
    type: "Fairy",
    ability: "Intimidate/Quick Feet/Rattled",
    wiki: "http://www.serebii.net/pokedex-xy/210.shtml",
    image: "http://www.serebii.net/xy/pokemon/210.png"
};

var qwilfish = {
    name: "Qwilfish",
    dex: 211,
    type: "Water/Poison",
    ability: "Poison Point/Swift Swim/Intimidate",
    wiki: "http://www.serebii.net/pokedex-xy/211.shtml",
    image: "http://www.serebii.net/xy/pokemon/211.png"
};

var scizor = {
    name: "Scizor",
    dex: 212,
    type: "Bug/Steel",
    ability: "Swarm/Technician/Light Metal",
    wiki: "http://www.serebii.net/pokedex-xy/212.shtml",
    image: "http://www.serebii.net/xy/pokemon/212.png"
};

var shuckle = {
    name: "Shuckle",
    dex: 213,
    type: "Bug/Rock",
    ability: "Sturdy/Gluttony/Contrary",
    wiki: "http://www.serebii.net/pokedex-xy/213.shtml",
    image: "http://www.serebii.net/xy/pokemon/213.png"
};

var heracross = {
    name: "Heracross",
    dex: 214,
    type: "Bug/Fighting",
    ability: "Swarm/Guts/Moxie",
    wiki: "http://www.serebii.net/pokedex-xy/214.shtml",
    image: "http://www.serebii.net/xy/pokemon/214.png"
};

var sneasel = {
    name: "Sneasel",
    dex: 215,
    type: "Dark/Ice",
    ability: "Inner Focus/Keen Eye/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-xy/215.shtml",
    image: "http://www.serebii.net/xy/pokemon/215.png"
};

var teddiursa = {
    name: "Teddiursa",
    dex: 216,
    type: "Normal",
    ability: "Pickup/Quick Feet/Honey Gather",
    wiki: "http://www.serebii.net/pokedex-xy/216.shtml",
    image: "http://www.serebii.net/xy/pokemon/216.png"
};

var ursaring = {
    name: "Ursaring",
    dex: 217,
    type: "Normal",
    ability: "Guts/Quick Feet/Unnerve",
    wiki: "http://www.serebii.net/pokedex-xy/217.shtml",
    image: "http://www.serebii.net/xy/pokemon/217.png"
};

var slugma = {
    name: "Slugma",
    dex: 218,
    type: "Fire",
    ability: "Magma Armor/Flame Body/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-xy/218.shtml",
    image: "http://www.serebii.net/xy/pokemon/218.png"
};

var magcargo = {
    name: "Magcargo",
    dex: 219,
    type: "Fire/Rock",
    ability: "Magma Armor/Flame Body/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-xy/219.shtml",
    image: "http://www.serebii.net/xy/pokemon/219.png"
};

var swinub = {
    name: "Swinub",
    dex: 220,
    type: "Ice/Ground",
    ability: "Oblivious/Snow Cloak/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-xy/220.shtml",
    image: "http://www.serebii.net/xy/pokemon/220.png"
};

var piloswine = {
    name: "Piloswine",
    dex: 221,
    type: "Ice/Ground",
    ability: "Oblivious/Snow Cloak/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-xy/221.shtml",
    image: "http://www.serebii.net/xy/pokemon/221.png"
};

var corsola = {
    name: "Corsola",
    dex: 222,
    type: "Water/Rock",
    ability: "Hustle/Natural Cure/Regenerator",
    wiki: "http://www.serebii.net/pokedex-xy/222.shtml",
    image: "http://www.serebii.net/xy/pokemon/222.png"
};

var remoraid = {
    name: "Remoraid",
    dex: 223,
    type: "Water",
    ability: "Hustle/Sniper/Moody",
    wiki: "http://www.serebii.net/pokedex-xy/223.shtml",
    image: "http://www.serebii.net/xy/pokemon/223.png"
};

var octillery = {
    name: "Octillery",
    dex: 224,
    type: "Water",
    ability: "Suction Cups/Sniper/Moody",
    wiki: "http://www.serebii.net/pokedex-xy/224.shtml",
    image: "http://www.serebii.net/xy/pokemon/224.png"
};

var delibird = {
    name: "Delibird",
    dex: 225,
    type: "Ice/Flying",
    ability: "Vital Spirit/Hustle/Insomnia",
    wiki: "http://www.serebii.net/pokedex-xy/225.shtml",
    image: "http://www.serebii.net/xy/pokemon/225.png"
};

var mantine = {
    name: "Mantine",
    dex: 226,
    type: "Water/Flying",
    ability: "Swift Swim/Water Absorb/Water Veil",
    wiki: "http://www.serebii.net/pokedex-xy/226.shtml",
    image: "http://www.serebii.net/xy/pokemon/226.png"
};

var skarmory = {
    name: "Skarmory",
    dex: 227,
    type: "Steel/Flying",
    ability: "Keen Eye/Sturdy/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-xy/227.shtml",
    image: "http://www.serebii.net/xy/pokemon/227.png"
};

var houndour = {
    name: "Houndour",
    dex: 228,
    type: "Dark/Fire",
    ability: "Early Bird/Flash Fire/Unnerve",
    wiki: "http://www.serebii.net/pokedex-xy/228.shtml",
    image: "http://www.serebii.net/xy/pokemon/228.png"
};

var houndoom = {
    name: "Houndoom",
    dex: 229,
    type: "Dark/Fire",
    ability: "Early Bird/Flash Fire/Unnerve",
    wiki: "http://www.serebii.net/pokedex-xy/229.shtml",
    image: "http://www.serebii.net/xy/pokemon/229.png"
};

var kingdra = {
    name: "Kingdra",
    dex: 230,
    type: "Water/Dragon",
    ability: "Swift Swim/Sniper/Damp",
    wiki: "http://www.serebii.net/pokedex-xy/230.shtml",
    image: "http://www.serebii.net/xy/pokemon/230.png"
};

var phanpy = {
    name: "Phanpy",
    dex: 231,
    type: "Ground",
    ability: "Pickup/None/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-xy/231.shtml",
    image: "http://www.serebii.net/xy/pokemon/231.png"
};

var donphan = {
    name: "Donphan",
    dex: 232,
    type: "Ground",
    ability: "Sturdy/None/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-xy/232.shtml",
    image: "http://www.serebii.net/xy/pokemon/232.png"
};

var porygon2 = {
    name: "Porygon2",
    dex: 233,
    type: "Normal",
    ability: "Trace/Download/Analytic",
    wiki: "http://www.serebii.net/pokedex-xy/233.shtml",
    image: "http://www.serebii.net/xy/pokemon/233.png"
};

var stantler = {
    name: "Stantler",
    dex: 234,
    type: "Normal",
    ability: "Intimidate/Frisk/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-xy/234.shtml",
    image: "http://www.serebii.net/xy/pokemon/234.png"
};

var smeargle = {
    name: "Smeargle",
    dex: 235,
    type: "Normal",
    ability: "Own Tempo/Technician/Moody",
    wiki: "http://www.serebii.net/pokedex-xy/235.shtml",
    image: "http://www.serebii.net/xy/pokemon/235.png"
};

var tyrogue = {
    name: "Tyrogue",
    dex: 236,
    type: "Fighting",
    ability: "Guts/Steadfast/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-xy/236.shtml",
    image: "http://www.serebii.net/xy/pokemon/236.png"
};

var hitmontop = {
    name: "Hitmontop",
    dex: 237,
    type: "Fighting",
    ability: "Intimidate/Technician/Steadfast",
    wiki: "http://www.serebii.net/pokedex-xy/237.shtml",
    image: "http://www.serebii.net/xy/pokemon/237.png"
};

var smoochum = {
    name: "Smoochum",
    dex: 238,
    type: "Ice/Psychic",
    ability: "Oblivious/Forewarn/Hydration",
    wiki: "http://www.serebii.net/pokedex-xy/238.shtml",
    image: "http://www.serebii.net/xy/pokemon/238.png"
};

var elekid = {
    name: "Elekid",
    dex: 239,
    type: "Electric",
    ability: "Static/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-xy/239.shtml",
    image: "http://www.serebii.net/xy/pokemon/239.png"
};

var magby = {
    name: "Magby",
    dex: 240,
    type: "Fire",
    ability: "Flame Body/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-xy/240.shtml",
    image: "http://www.serebii.net/xy/pokemon/240.png"
};

var miltank = {
    name: "Miltank",
    dex: 241,
    type: "Normal",
    ability: "Thick Fat/Scrappy/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-xy/241.shtml",
    image: "http://www.serebii.net/xy/pokemon/241.png"
};

var blissey = {
    name: "Blissey",
    dex: 242,
    type: "Normal",
    ability: "Natural Cure/Serene Grace/Healer",
    wiki: "http://www.serebii.net/pokedex-xy/242.shtml",
    image: "http://www.serebii.net/xy/pokemon/242.png"
};

var raikou = {
    name: "Raikou",
    dex: 243,
    type: "Electric",
    ability: "Pressure/None/Volt Absorb",
    wiki: "http://www.serebii.net/pokedex-xy/243.shtml",
    image: "http://www.serebii.net/xy/pokemon/243.png"
};

var entei = {
    name: "Entei",
    dex: 244,
    type: "Fire",
    ability: "Pressure/None/Flash Fire",
    wiki: "http://www.serebii.net/pokedex-xy/244.shtml",
    image: "http://www.serebii.net/xy/pokemon/244.png"
};

var suicune = {
    name: "Suicune",
    dex: 245,
    type: "Water",
    ability: "Pressure/None/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-xy/245.shtml",
    image: "http://www.serebii.net/xy/pokemon/245.png"
};

var larvitar = {
    name: "Larvitar",
    dex: 246,
    type: "Rock/Ground",
    ability: "Guts/None/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-xy/246.shtml",
    image: "http://www.serebii.net/xy/pokemon/246.png"
};

var pupitar = {
    name: "Pupitar",
    dex: 247,
    type: "Rock/Ground",
    ability: "Shed Skin",
    wiki: "http://www.serebii.net/pokedex-xy/247.shtml",
    image: "http://www.serebii.net/xy/pokemon/247.png"
};

var tyranitar = {
    name: "Tyranitar",
    dex: 248,
    type: "Rock/Dark",
    ability: "Sand Stream/None/Unnerve",
    wiki: "http://www.serebii.net/pokedex-xy/248.shtml",
    image: "http://www.serebii.net/xy/pokemon/248.png"
};

var lugia = {
    name: "Lugia",
    dex: 249,
    type: "Psychic/Flying",
    ability: "Pressure/None/Multiscale",
    wiki: "http://www.serebii.net/pokedex-xy/249.shtml",
    image: "http://www.serebii.net/xy/pokemon/249.png"
};

var ho_oh = {
    name: "Ho-oh",
    dex: 250,
    type: "Fire/Flying",
    ability: "Pressure/None/Regenerator",
    wiki: "http://www.serebii.net/pokedex-xy/250.shtml",
    image: "http://www.serebii.net/xy/pokemon/250.png"
};

var celebi = {
    name: "Celebi",
    dex: 251,
    type: "Psychic/Grass",
    ability: "Natural Cure",
    wiki: "http://www.serebii.net/pokedex-xy/251.shtml",
    image: "http://www.serebii.net/xy/pokemon/251.png"
};

var treecko = {
    name: "Treecko",
    dex: 252,
    type: "Grass",
    ability: "Overgrow/None/Unburden",
    wiki: "http://www.serebii.net/pokedex-xy/252.shtml",
    image: "http://www.serebii.net/xy/pokemon/252.png"
};

var grovyle = {
    name: "Grovyle",
    dex: 253,
    type: "Grass",
    ability: "Overgrow/None/Unburden",
    wiki: "http://www.serebii.net/pokedex-xy/253.shtml",
    image: "http://www.serebii.net/xy/pokemon/253.png"
};

var sceptile = {
    name: "Sceptile",
    dex: 254,
    type: "Grass",
    ability: "Overgrow/None/Unburden",
    wiki: "http://www.serebii.net/pokedex-xy/254.shtml",
    image: "http://www.serebii.net/xy/pokemon/254.png"
};

var torchic = {
    name: "Torchic",
    dex: 255,
    type: "Fire",
    ability: "Blaze/None/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-xy/255.shtml",
    image: "http://www.serebii.net/xy/pokemon/255.png"
};

var combusken = {
    name: "Combusken",
    dex: 256,
    type: "Fire/Fighting",
    ability: "Blaze/None/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-xy/256.shtml",
    image: "http://www.serebii.net/xy/pokemon/256.png"
};

var blaziken = {
    name: "Blaziken",
    dex: 257,
    type: "Fire/Fighting",
    ability: "Blaze/None/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-xy/257.shtml",
    image: "http://www.serebii.net/xy/pokemon/257.png"
};

var mudkip = {
    name: "Mudkip",
    dex: 258,
    type: "Water",
    ability: "Torrent/None/Damp",
    wiki: "http://www.serebii.net/pokedex-xy/258.shtml",
    image: "http://www.serebii.net/xy/pokemon/258.png"
};

var marshtomp = {
    name: "Marshtomp",
    dex: 259,
    type: "Water/Ground",
    ability: "Torrent/None/Damp",
    wiki: "http://www.serebii.net/pokedex-xy/259.shtml",
    image: "http://www.serebii.net/xy/pokemon/259.png"
};

var swampert = {
    name: "Swampert",
    dex: 260,
    type: "Water/Ground",
    ability: "Torrent/None/Damp",
    wiki: "http://www.serebii.net/pokedex-xy/260.shtml",
    image: "http://www.serebii.net/xy/pokemon/260.png"
};

var poochyena = {
    name: "Poochyena",
    dex: 261,
    type: "Dark",
    ability: "Run Away/Quick Feet/Rattled",
    wiki: "http://www.serebii.net/pokedex-xy/261.shtml",
    image: "http://www.serebii.net/xy/pokemon/261.png"
};

var mightyena = {
    name: "Mightyena",
    dex: 262,
    type: "Dark",
    ability: "Intimidate/Quick Feet/Moxie",
    wiki: "http://www.serebii.net/pokedex-xy/262.shtml",
    image: "http://www.serebii.net/xy/pokemon/262.png"
};

var zigzagoon = {
    name: "Zigzagoon",
    dex: 263,
    type: "Normal",
    ability: "Pickup/Gluttony/Quick Feet",
    wiki: "http://www.serebii.net/pokedex-xy/263.shtml",
    image: "http://www.serebii.net/xy/pokemon/263.png"
};

var linoone = {
    name: "Linoone",
    dex: 264,
    type: "Normal",
    ability: "Pickup/Gluttony/Quick Feet",
    wiki: "http://www.serebii.net/pokedex-xy/264.shtml",
    image: "http://www.serebii.net/xy/pokemon/264.png"
};

var wurmple = {
    name: "Wurmple",
    dex: 265,
    type: "Bug",
    ability: "Shield Dust/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-xy/265.shtml",
    image: "http://www.serebii.net/xy/pokemon/265.png"
};

var silcoon = {
    name: "Silcoon",
    dex: 266,
    type: "Bug",
    ability: "Shed Skin",
    wiki: "http://www.serebii.net/pokedex-xy/266.shtml",
    image: "http://www.serebii.net/xy/pokemon/266.png"
};

var beautifly = {
    name: "Beautifly",
    dex: 267,
    type: "Bug/Flying",
    ability: "Swarm/None/Rivalry",
    wiki: "http://www.serebii.net/pokedex-xy/267.shtml",
    image: "http://www.serebii.net/xy/pokemon/267.png"
};

var cascoon = {
    name: "Cascoon",
    dex: 268,
    type: "Bug",
    ability: "Shed Skin",
    wiki: "http://www.serebii.net/pokedex-xy/268.shtml",
    image: "http://www.serebii.net/xy/pokemon/268.png"
};

var dustox = {
    name: "Dustox",
    dex: 269,
    type: "Bug/Poison",
    ability: "Shield Dust/None/Compound Eyes",
    wiki: "http://www.serebii.net/pokedex-xy/269.shtml",
    image: "http://www.serebii.net/xy/pokemon/269.png"
};

var lotad = {
    name: "Lotad",
    dex: 270,
    type: "Water/Grass",
    ability: "Swift Swim/Rain Dish/Own Tempo",
    wiki: "http://www.serebii.net/pokedex-xy/270.shtml",
    image: "http://www.serebii.net/xy/pokemon/270.png"
};

var lombre = {
    name: "Lombre",
    dex: 271,
    type: "Water/Grass",
    ability: "Swift Swim/Rain Dish/Own Tempo",
    wiki: "http://www.serebii.net/pokedex-xy/271.shtml",
    image: "http://www.serebii.net/xy/pokemon/271.png"
};

var ludicolo = {
    name: "Ludicolo",
    dex: 272,
    type: "Water/Grass",
    ability: "Swift Swim/Rain Dish/Own Tempo",
    wiki: "http://www.serebii.net/pokedex-xy/272.shtml",
    image: "http://www.serebii.net/xy/pokemon/272.png"
};

var seedot = {
    name: "Seedot",
    dex: 273,
    type: "Grass",
    ability: "Chlorophyll/Early Bird/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-xy/273.shtml",
    image: "http://www.serebii.net/xy/pokemon/273.png"
};

var nuzleaf = {
    name: "Nuzleaf",
    dex: 274,
    type: "Grass/Dark",
    ability: "Chlorophyll/Early Bird/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-xy/274.shtml",
    image: "http://www.serebii.net/xy/pokemon/274.png"
};

var shiftry = {
    name: "Shiftry",
    dex: 275,
    type: "Grass/Dark",
    ability: "Chlorophyll/Early Bird/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-xy/275.shtml",
    image: "http://www.serebii.net/xy/pokemon/275.png"
};

var taillow = {
    name: "Taillow",
    dex: 276,
    type: "Normal/Flying",
    ability: "Guts/None/Scrappy",
    wiki: "http://www.serebii.net/pokedex-xy/276.shtml",
    image: "http://www.serebii.net/xy/pokemon/276.png"
};

var swellow = {
    name: "Swellow",
    dex: 277,
    type: "Normal/Flying",
    ability: "Guts/None/Scrappy",
    wiki: "http://www.serebii.net/pokedex-xy/277.shtml",
    image: "http://www.serebii.net/xy/pokemon/277.png"
};

var wingull = {
    name: "Wingull",
    dex: 278,
    type: "Water/Flying",
    ability: "Keen Eye/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-xy/278.shtml",
    image: "http://www.serebii.net/xy/pokemon/278.png"
};

var pelipper = {
    name: "Pelipper",
    dex: 279,
    type: "Water/Flying",
    ability: "Keen Eye/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-xy/279.shtml",
    image: "http://www.serebii.net/xy/pokemon/279.png"
};

var ralts = {
    name: "Ralts",
    dex: 280,
    type: "Psychic/Fairy",
    ability: "Synchronize/Trace/Telepathy",
    wiki: "http://www.serebii.net/pokedex-xy/280.shtml",
    image: "http://www.serebii.net/xy/pokemon/280.png"
};

var kirlia = {
    name: "Kirlia",
    dex: 281,
    type: "Psychic/Fairy",
    ability: "Synchronize/Trace/Telepathy",
    wiki: "http://www.serebii.net/pokedex-xy/281.shtml",
    image: "http://www.serebii.net/xy/pokemon/281.png"
};

var gardevoir = {
    name: "Gardevoir",
    dex: 282,
    type: "Psychic/Fairy",
    ability: "Synchronize/Trace/Telepathy",
    wiki: "http://www.serebii.net/pokedex-xy/282.shtml",
    image: "http://www.serebii.net/xy/pokemon/282.png"
};

var surskit = {
    name: "Surskit",
    dex: 283,
    type: "Bug/Water",
    ability: "Swift Swim/None/Rain Dish",
    wiki: "http://www.serebii.net/pokedex-xy/283.shtml",
    image: "http://www.serebii.net/xy/pokemon/283.png"
};

var masquerain = {
    name: "Masquerain",
    dex: 284,
    type: "Bug/Flying",
    ability: "Intimidate/None/Unnerve",
    wiki: "http://www.serebii.net/pokedex-xy/284.shtml",
    image: "http://www.serebii.net/xy/pokemon/284.png"
};

var shroomish = {
    name: "Shroomish",
    dex: 285,
    type: "Grass",
    ability: "Effect Spore/Poison Heal/Quick Feet",
    wiki: "http://www.serebii.net/pokedex-xy/285.shtml",
    image: "http://www.serebii.net/xy/pokemon/285.png"
};

var breloom = {
    name: "Breloom",
    dex: 286,
    type: "Grass/Fighting",
    ability: "Effect Spore/Poison Heal/Technician",
    wiki: "http://www.serebii.net/pokedex-xy/286.shtml",
    image: "http://www.serebii.net/xy/pokemon/286.png"
};

var slakoth = {
    name: "Slakoth",
    dex: 287,
    type: "Normal",
    ability: "Truant",
    wiki: "http://www.serebii.net/pokedex-xy/287.shtml",
    image: "http://www.serebii.net/xy/pokemon/287.png"
};

var vigoroth = {
    name: "Vigoroth",
    dex: 288,
    type: "Normal",
    ability: "Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-xy/288.shtml",
    image: "http://www.serebii.net/xy/pokemon/288.png"
};

var slaking = {
    name: "Slaking",
    dex: 289,
    type: "Normal",
    ability: "Truant",
    wiki: "http://www.serebii.net/pokedex-xy/289.shtml",
    image: "http://www.serebii.net/xy/pokemon/289.png"
};

var nincada = {
    name: "Nincada",
    dex: 290,
    type: "Bug/Ground",
    ability: "Compound Eyes/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-xy/290.shtml",
    image: "http://www.serebii.net/xy/pokemon/290.png"
};

var ninjask = {
    name: "Ninjask",
    dex: 291,
    type: "Bug/Flying",
    ability: "Speed Boost/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-xy/291.shtml",
    image: "http://www.serebii.net/xy/pokemon/291.png"
};

var shedinja = {
    name: "Shedinja",
    dex: 292,
    type: "Bug/Ghost",
    ability: "Wonder Guard",
    wiki: "http://www.serebii.net/pokedex-xy/292.shtml",
    image: "http://www.serebii.net/xy/pokemon/292.png"
};

var whismur = {
    name: "Whismur",
    dex: 293,
    type: "Normal",
    ability: "Soundproof/None/Rattled",
    wiki: "http://www.serebii.net/pokedex-xy/293.shtml",
    image: "http://www.serebii.net/xy/pokemon/293.png"
};

var loudred = {
    name: "Loudred",
    dex: 294,
    type: "Normal",
    ability: "Soundproof/None/Scrappy",
    wiki: "http://www.serebii.net/pokedex-xy/294.shtml",
    image: "http://www.serebii.net/xy/pokemon/294.png"
};

var exploud = {
    name: "Exploud",
    dex: 295,
    type: "Normal",
    ability: "Soundproof/None/Scrappy",
    wiki: "http://www.serebii.net/pokedex-xy/295.shtml",
    image: "http://www.serebii.net/xy/pokemon/295.png"
};

var makuhita = {
    name: "Makuhita",
    dex: 296,
    type: "Fighting",
    ability: "Thick Fat/Guts/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/296.shtml",
    image: "http://www.serebii.net/xy/pokemon/296.png"
};

var hariyama = {
    name: "Hariyama",
    dex: 297,
    type: "Fighting",
    ability: "Thick Fat/Guts/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/297.shtml",
    image: "http://www.serebii.net/xy/pokemon/297.png"
};

var azurill = {
    name: "Azurill",
    dex: 298,
    type: "Normal/Fairy",
    ability: "Thick Fat/Huge Power/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-xy/298.shtml",
    image: "http://www.serebii.net/xy/pokemon/298.png"
};

var nosepass = {
    name: "Nosepass",
    dex: 299,
    type: "Rock",
    ability: "Sturdy/Magnet Pull/Sand Force",
    wiki: "http://www.serebii.net/pokedex-xy/299.shtml",
    image: "http://www.serebii.net/xy/pokemon/299.png"
};

var skitty = {
    name: "Skitty",
    dex: 300,
    type: "Normal",
    ability: "Cute Charm/Normalize/Wonder Skin",
    wiki: "http://www.serebii.net/pokedex-xy/300.shtml",
    image: "http://www.serebii.net/xy/pokemon/300.png"
};

var delcatty = {
    name: "Delcatty",
    dex: 301,
    type: "Normal",
    ability: "Cute Charm/Normalize/Wonder Skin",
    wiki: "http://www.serebii.net/pokedex-xy/301.shtml",
    image: "http://www.serebii.net/xy/pokemon/301.png"
};

var sableye = {
    name: "Sableye",
    dex: 302,
    type: "Dark/Ghost",
    ability: "Keen Eye/Stall/Prankster",
    wiki: "http://www.serebii.net/pokedex-xy/302.shtml",
    image: "http://www.serebii.net/xy/pokemon/302.png"
};

var mawile = {
    name: "Mawile",
    dex: 303,
    type: "Steel/Fairy",
    ability: "Hyper Cutter/Intimidate/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/303.shtml",
    image: "http://www.serebii.net/xy/pokemon/303.png"
};

var aron = {
    name: "Aron",
    dex: 304,
    type: "Steel/Rock",
    ability: "Sturdy/Rock Head/Heavy Metal",
    wiki: "http://www.serebii.net/pokedex-xy/304.shtml",
    image: "http://www.serebii.net/xy/pokemon/304.png"
};

var lairon = {
    name: "Lairon",
    dex: 305,
    type: "Steel/Rock",
    ability: "Sturdy/Rock Head/Heavy Metal",
    wiki: "http://www.serebii.net/pokedex-xy/305.shtml",
    image: "http://www.serebii.net/xy/pokemon/305.png"
};

var aggron = {
    name: "Aggron",
    dex: 306,
    type: "Steel/Rock",
    ability: "Sturdy/Rock Head/Heavy Metal",
    wiki: "http://www.serebii.net/pokedex-xy/306.shtml",
    image: "http://www.serebii.net/xy/pokemon/306.png"
};

var meditite = {
    name: "Meditite",
    dex: 307,
    type: "Fighting/Psychic",
    ability: "Pure Power/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-xy/307.shtml",
    image: "http://www.serebii.net/xy/pokemon/307.png"
};

var medicham = {
    name: "Medicham",
    dex: 308,
    type: "Fighting/Psychic",
    ability: "Pure Power/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-xy/308.shtml",
    image: "http://www.serebii.net/xy/pokemon/308.png"
};

var electrike = {
    name: "Electrike",
    dex: 309,
    type: "Electric",
    ability: "Static/Lightning Rod/Minus",
    wiki: "http://www.serebii.net/pokedex-xy/309.shtml",
    image: "http://www.serebii.net/xy/pokemon/309.png"
};

var manectric = {
    name: "Manectric",
    dex: 310,
    type: "Electric",
    ability: "Static/Lightning Rod/Minus",
    wiki: "http://www.serebii.net/pokedex-xy/310.shtml",
    image: "http://www.serebii.net/xy/pokemon/310.png"
};

var plusle = {
    name: "Plusle",
    dex: 311,
    type: "Electric",
    ability: "Plus/None/Lightning Rod/VI",
    wiki: "http://www.serebii.net/pokedex-xy/311.shtml",
    image: "http://www.serebii.net/xy/pokemon/311.png"
};

var minun = {
    name: "Minun",
    dex: 312,
    type: "Electric",
    ability: "Minus/None/Volt Absorb/VI",
    wiki: "http://www.serebii.net/pokedex-xy/312.shtml",
    image: "http://www.serebii.net/xy/pokemon/312.png"
};

var volbeat = {
    name: "Volbeat",
    dex: 313,
    type: "Bug",
    ability: "Illuminate/Swarm/Prankster",
    wiki: "http://www.serebii.net/pokedex-xy/313.shtml",
    image: "http://www.serebii.net/xy/pokemon/313.png"
};

var illumise = {
    name: "Illumise",
    dex: 314,
    type: "Bug",
    ability: "Oblivious/Tinted Lens/Prankster",
    wiki: "http://www.serebii.net/pokedex-xy/314.shtml",
    image: "http://www.serebii.net/xy/pokemon/314.png"
};

var roselia = {
    name: "Roselia",
    dex: 315,
    type: "Grass/Poison",
    ability: "Natural Cure/Poison Point/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-xy/315.shtml",
    image: "http://www.serebii.net/xy/pokemon/315.png"
};

var gulpin = {
    name: "Gulpin",
    dex: 316,
    type: "Poison",
    ability: "Liquid Ooze/Sticky Hold/Gluttony",
    wiki: "http://www.serebii.net/pokedex-xy/316.shtml",
    image: "http://www.serebii.net/xy/pokemon/316.png"
};

var swalot = {
    name: "Swalot",
    dex: 317,
    type: "Poison",
    ability: "Liquid Ooze/Sticky Hold/Gluttony",
    wiki: "http://www.serebii.net/pokedex-xy/317.shtml",
    image: "http://www.serebii.net/xy/pokemon/317.png"
};

var carvanha = {
    name: "Carvanha",
    dex: 318,
    type: "Water/Dark",
    ability: "Rough Skin/None/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-xy/318.shtml",
    image: "http://www.serebii.net/xy/pokemon/318.png"
};

var sharpedo = {
    name: "Sharpedo",
    dex: 319,
    type: "Water/Dark",
    ability: "Rough Skin/None/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-xy/319.shtml",
    image: "http://www.serebii.net/xy/pokemon/319.png"
};

var wailmer = {
    name: "Wailmer",
    dex: 320,
    type: "Water",
    ability: "Water Veil/Oblivious/Pressure",
    wiki: "http://www.serebii.net/pokedex-xy/320.shtml",
    image: "http://www.serebii.net/xy/pokemon/320.png"
};

var wailord = {
    name: "Wailord",
    dex: 321,
    type: "Water",
    ability: "Water Veil/Oblivious/Pressure",
    wiki: "http://www.serebii.net/pokedex-xy/321.shtml",
    image: "http://www.serebii.net/xy/pokemon/321.png"
};

var numel = {
    name: "Numel",
    dex: 322,
    type: "Fire/Ground",
    ability: "Oblivious/Simple/Own Tempo",
    wiki: "http://www.serebii.net/pokedex-xy/322.shtml",
    image: "http://www.serebii.net/xy/pokemon/322.png"
};

var camerupt = {
    name: "Camerupt",
    dex: 323,
    type: "Fire/Ground",
    ability: "Magma Armor/Solid Rock/Anger Point",
    wiki: "http://www.serebii.net/pokedex-xy/323.shtml",
    image: "http://www.serebii.net/xy/pokemon/323.png"
};

var torkoal = {
    name: "Torkoal",
    dex: 324,
    type: "Fire",
    ability: "White Smoke/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-xy/324.shtml",
    image: "http://www.serebii.net/xy/pokemon/324.png"
};

var spoink = {
    name: "Spoink",
    dex: 325,
    type: "Psychic",
    ability: "Thick Fat/Own Tempo/Gluttony",
    wiki: "http://www.serebii.net/pokedex-xy/325.shtml",
    image: "http://www.serebii.net/xy/pokemon/325.png"
};

var grumpig = {
    name: "Grumpig",
    dex: 326,
    type: "Psychic",
    ability: "Thick Fat/Own Tempo/Gluttony",
    wiki: "http://www.serebii.net/pokedex-xy/326.shtml",
    image: "http://www.serebii.net/xy/pokemon/326.png"
};

var spinda = {
    name: "Spinda",
    dex: 327,
    type: "Normal",
    ability: "Own Tempo/Tangled Feet/Contrary",
    wiki: "http://www.serebii.net/pokedex-xy/327.shtml",
    image: "http://www.serebii.net/xy/pokemon/327.png"
};

var trapinch = {
    name: "Trapinch",
    dex: 328,
    type: "Ground",
    ability: "Hyper Cutter/Arena Trap/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/328.shtml",
    image: "http://www.serebii.net/xy/pokemon/328.png"
};

var vibrava = {
    name: "Vibrava",
    dex: 329,
    type: "Ground/Dragon",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/329.shtml",
    image: "http://www.serebii.net/xy/pokemon/329.png"
};

var flygon = {
    name: "Flygon",
    dex: 330,
    type: "Ground/Dragon",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/330.shtml",
    image: "http://www.serebii.net/xy/pokemon/330.png"
};

var cacnea = {
    name: "Cacnea",
    dex: 331,
    type: "Grass",
    ability: "Sand Veil/None/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-xy/331.shtml",
    image: "http://www.serebii.net/xy/pokemon/331.png"
};

var cacturne = {
    name: "Cacturne",
    dex: 332,
    type: "Grass/Dark",
    ability: "Sand Veil/None/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-xy/332.shtml",
    image: "http://www.serebii.net/xy/pokemon/332.png"
};

var swablu = {
    name: "Swablu",
    dex: 333,
    type: "Normal/Flying",
    ability: "Natural Cure/None/Cloud Nine",
    wiki: "http://www.serebii.net/pokedex-xy/333.shtml",
    image: "http://www.serebii.net/xy/pokemon/333.png"
};

var altaria = {
    name: "Altaria",
    dex: 334,
    type: "Dragon/Flying",
    ability: "Natural Cure/None/Cloud Nine",
    wiki: "http://www.serebii.net/pokedex-xy/334.shtml",
    image: "http://www.serebii.net/xy/pokemon/334.png"
};

var zangoose = {
    name: "Zangoose",
    dex: 335,
    type: "Normal",
    ability: "Immunity/None/Toxic Boost",
    wiki: "http://www.serebii.net/pokedex-xy/335.shtml",
    image: "http://www.serebii.net/xy/pokemon/335.png"
};

var seviper = {
    name: "Seviper",
    dex: 336,
    type: "Poison",
    ability: "Shed Skin/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-xy/336.shtml",
    image: "http://www.serebii.net/xy/pokemon/336.png"
};

var lunatone = {
    name: "Lunatone",
    dex: 337,
    type: "Rock/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/337.shtml",
    image: "http://www.serebii.net/xy/pokemon/337.png"
};

var solrock = {
    name: "Solrock",
    dex: 338,
    type: "Rock/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/338.shtml",
    image: "http://www.serebii.net/xy/pokemon/338.png"
};

var barboach = {
    name: "Barboach",
    dex: 339,
    type: "Water/Ground",
    ability: "Oblivious/Anticipation/Hydration",
    wiki: "http://www.serebii.net/pokedex-xy/339.shtml",
    image: "http://www.serebii.net/xy/pokemon/339.png"
};

var whiscash = {
    name: "Whiscash",
    dex: 340,
    type: "Water/Ground",
    ability: "Oblivious/Anticipation/Hydration",
    wiki: "http://www.serebii.net/pokedex-xy/340.shtml",
    image: "http://www.serebii.net/xy/pokemon/340.png"
};

var corphish = {
    name: "Corphish",
    dex: 341,
    type: "Water",
    ability: "Hyper Cutter/Shell Armor/Adaptability",
    wiki: "http://www.serebii.net/pokedex-xy/341.shtml",
    image: "http://www.serebii.net/xy/pokemon/341.png"
};

var crawdaunt = {
    name: "Crawdaunt",
    dex: 342,
    type: "Water/Dark",
    ability: "Hyper Cutter/Shell Armor/Adaptability",
    wiki: "http://www.serebii.net/pokedex-xy/342.shtml",
    image: "http://www.serebii.net/xy/pokemon/342.png"
};

var baltoy = {
    name: "Baltoy",
    dex: 343,
    type: "Ground/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/343.shtml",
    image: "http://www.serebii.net/xy/pokemon/343.png"
};

var claydol = {
    name: "Claydol",
    dex: 344,
    type: "Ground/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/344.shtml",
    image: "http://www.serebii.net/xy/pokemon/344.png"
};

var lileep = {
    name: "Lileep",
    dex: 345,
    type: "Rock/Grass",
    ability: "Suction Cups/None/Storm Drain",
    wiki: "http://www.serebii.net/pokedex-xy/345.shtml",
    image: "http://www.serebii.net/xy/pokemon/345.png"
};

var cradily = {
    name: "Cradily",
    dex: 346,
    type: "Rock/Grass",
    ability: "Suction Cups/None/Storm Drain",
    wiki: "http://www.serebii.net/pokedex-xy/346.shtml",
    image: "http://www.serebii.net/xy/pokemon/346.png"
};

var anorith = {
    name: "Anorith",
    dex: 347,
    type: "Rock/Bug",
    ability: "Battle Armor/None/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-xy/347.shtml",
    image: "http://www.serebii.net/xy/pokemon/347.png"
};

var armaldo = {
    name: "Armaldo",
    dex: 348,
    type: "Rock/Bug",
    ability: "Battle Armor/None/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-xy/348.shtml",
    image: "http://www.serebii.net/xy/pokemon/348.png"
};

var feebas = {
    name: "Feebas",
    dex: 349,
    type: "Water",
    ability: "Swift Swim/Oblivious/Adaptability",
    wiki: "http://www.serebii.net/pokedex-xy/349.shtml",
    image: "http://www.serebii.net/xy/pokemon/349.png"
};

var milotic = {
    name: "Milotic",
    dex: 350,
    type: "Water",
    ability: "Marvel Scale/Competitive/Cute Charm",
    wiki: "http://www.serebii.net/pokedex-xy/350.shtml",
    image: "http://www.serebii.net/xy/pokemon/350.png"
};

var castform = {
    name: "Castform",
    dex: 351,
    type: "Normal",
    ability: "Forecast",
    wiki: "http://www.serebii.net/pokedex-xy/351.shtml",
    image: "http://www.serebii.net/xy/pokemon/351.png"
};

var kecleon = {
    name: "Kecleon",
    dex: 352,
    type: "Normal",
    ability: "Color Change/None/Protean/VI",
    wiki: "http://www.serebii.net/pokedex-xy/352.shtml",
    image: "http://www.serebii.net/xy/pokemon/352.png"
};

var shuppet = {
    name: "Shuppet",
    dex: 353,
    type: "Ghost",
    ability: "Insomnia/Frisk/Cursed Body",
    wiki: "http://www.serebii.net/pokedex-xy/353.shtml",
    image: "http://www.serebii.net/xy/pokemon/353.png"
};

var banette = {
    name: "Banette",
    dex: 354,
    type: "Ghost",
    ability: "Insomnia/Frisk/Cursed Body",
    wiki: "http://www.serebii.net/pokedex-xy/354.shtml",
    image: "http://www.serebii.net/xy/pokemon/354.png"
};

var duskull = {
    name: "Duskull",
    dex: 355,
    type: "Ghost",
    ability: "Levitate/None/Frisk/VI",
    wiki: "http://www.serebii.net/pokedex-xy/355.shtml",
    image: "http://www.serebii.net/xy/pokemon/355.png"
};

var dusclops = {
    name: "Dusclops",
    dex: 356,
    type: "Ghost",
    ability: "Pressure/None/Frisk/VI",
    wiki: "http://www.serebii.net/pokedex-xy/356.shtml",
    image: "http://www.serebii.net/xy/pokemon/356.png"
};

var tropius = {
    name: "Tropius",
    dex: 357,
    type: "Grass/Flying",
    ability: "Chlorophyll/Solar Power/Harvest",
    wiki: "http://www.serebii.net/pokedex-xy/357.shtml",
    image: "http://www.serebii.net/xy/pokemon/357.png"
};

var chimecho = {
    name: "Chimecho",
    dex: 358,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/358.shtml",
    image: "http://www.serebii.net/xy/pokemon/358.png"
};

var absol = {
    name: "Absol",
    dex: 359,
    type: "Dark",
    ability: "Pressure/Super Luck/Justified",
    wiki: "http://www.serebii.net/pokedex-xy/359.shtml",
    image: "http://www.serebii.net/xy/pokemon/359.png"
};

var wynaut = {
    name: "Wynaut",
    dex: 360,
    type: "Psychic",
    ability: "Shadow Tag/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-xy/360.shtml",
    image: "http://www.serebii.net/xy/pokemon/360.png"
};

var snorunt = {
    name: "Snorunt",
    dex: 361,
    type: "Ice",
    ability: "Inner Focus/Ice Body/Moody",
    wiki: "http://www.serebii.net/pokedex-xy/361.shtml",
    image: "http://www.serebii.net/xy/pokemon/361.png"
};

var glalie = {
    name: "Glalie",
    dex: 362,
    type: "Ice",
    ability: "Inner Focus/Ice Body/Moody",
    wiki: "http://www.serebii.net/pokedex-xy/362.shtml",
    image: "http://www.serebii.net/xy/pokemon/362.png"
};

var spheal = {
    name: "Spheal",
    dex: 363,
    type: "Ice/Water",
    ability: "Thick Fat/Ice Body/Oblivious",
    wiki: "http://www.serebii.net/pokedex-xy/363.shtml",
    image: "http://www.serebii.net/xy/pokemon/363.png"
};

var sealeo = {
    name: "Sealeo",
    dex: 364,
    type: "Ice/Water",
    ability: "Thick Fat/Ice Body/Oblivious",
    wiki: "http://www.serebii.net/pokedex-xy/364.shtml",
    image: "http://www.serebii.net/xy/pokemon/364.png"
};

var walrein = {
    name: "Walrein",
    dex: 365,
    type: "Ice/Water",
    ability: "Thick Fat/Ice Body/Oblivious",
    wiki: "http://www.serebii.net/pokedex-xy/365.shtml",
    image: "http://www.serebii.net/xy/pokemon/365.png"
};

var clamperl = {
    name: "Clamperl",
    dex: 366,
    type: "Water",
    ability: "Shell Armor/None/Rattled",
    wiki: "http://www.serebii.net/pokedex-xy/366.shtml",
    image: "http://www.serebii.net/xy/pokemon/366.png"
};

var huntail = {
    name: "Huntail",
    dex: 367,
    type: "Water",
    ability: "Swift Swim/None/Water Veil",
    wiki: "http://www.serebii.net/pokedex-xy/367.shtml",
    image: "http://www.serebii.net/xy/pokemon/367.png"
};

var gorebyss = {
    name: "Gorebyss",
    dex: 368,
    type: "Water",
    ability: "Swift Swim/None/Hydration",
    wiki: "http://www.serebii.net/pokedex-xy/368.shtml",
    image: "http://www.serebii.net/xy/pokemon/368.png"
};

var relicanth = {
    name: "Relicanth",
    dex: 369,
    type: "Water/Rock",
    ability: "Swift Swim/Rock Head/Sturdy",
    wiki: "http://www.serebii.net/pokedex-xy/369.shtml",
    image: "http://www.serebii.net/xy/pokemon/369.png"
};

var luvdisc = {
    name: "Luvdisc",
    dex: 370,
    type: "Water",
    ability: "Swift Swim/None/Hydration",
    wiki: "http://www.serebii.net/pokedex-xy/370.shtml",
    image: "http://www.serebii.net/xy/pokemon/370.png"
};

var bagon = {
    name: "Bagon",
    dex: 371,
    type: "Dragon",
    ability: "Rock Head/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/371.shtml",
    image: "http://www.serebii.net/xy/pokemon/371.png"
};

var shelgon = {
    name: "Shelgon",
    dex: 372,
    type: "Dragon",
    ability: "Rock Head/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-xy/372.shtml",
    image: "http://www.serebii.net/xy/pokemon/372.png"
};

var salamence = {
    name: "Salamence",
    dex: 373,
    type: "Dragon/Flying",
    ability: "Intimidate/None/Moxie",
    wiki: "http://www.serebii.net/pokedex-xy/373.shtml",
    image: "http://www.serebii.net/xy/pokemon/373.png"
};

var beldum = {
    name: "Beldum",
    dex: 374,
    type: "Steel/Psychic",
    ability: "Clear Body/None/Light Metal",
    wiki: "http://www.serebii.net/pokedex-xy/374.shtml",
    image: "http://www.serebii.net/xy/pokemon/374.png"
};

var metang = {
    name: "Metang",
    dex: 375,
    type: "Steel/Psychic",
    ability: "Clear Body/None/Light Metal",
    wiki: "http://www.serebii.net/pokedex-xy/375.shtml",
    image: "http://www.serebii.net/xy/pokemon/375.png"
};

var metagross = {
    name: "Metagross",
    dex: 376,
    type: "Steel/Psychic",
    ability: "Clear Body/None/Light Metal",
    wiki: "http://www.serebii.net/pokedex-xy/376.shtml",
    image: "http://www.serebii.net/xy/pokemon/376.png"
};

var regirock = {
    name: "Regirock",
    dex: 377,
    type: "Rock",
    ability: "Clear Body/None/Sturdy",
    wiki: "http://www.serebii.net/pokedex-xy/377.shtml",
    image: "http://www.serebii.net/xy/pokemon/377.png"
};

var regice = {
    name: "Regice",
    dex: 378,
    type: "Ice",
    ability: "Clear Body/None/Ice Body",
    wiki: "http://www.serebii.net/pokedex-xy/378.shtml",
    image: "http://www.serebii.net/xy/pokemon/378.png"
};

var registeel = {
    name: "Registeel",
    dex: 379,
    type: "Steel",
    ability: "Clear Body/None/Light Metal",
    wiki: "http://www.serebii.net/pokedex-xy/379.shtml",
    image: "http://www.serebii.net/xy/pokemon/379.png"
};

var latias = {
    name: "Latias",
    dex: 380,
    type: "Dragon/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/380.shtml",
    image: "http://www.serebii.net/xy/pokemon/380.png"
};

var latios = {
    name: "Latios",
    dex: 381,
    type: "Dragon/Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/381.shtml",
    image: "http://www.serebii.net/xy/pokemon/381.png"
};

var kyogre = {
    name: "Kyogre",
    dex: 382,
    type: "Water",
    ability: "Drizzle",
    wiki: "http://www.serebii.net/pokedex-xy/382.shtml",
    image: "http://www.serebii.net/xy/pokemon/382.png"
};

var groudon = {
    name: "Groudon",
    dex: 383,
    type: "Ground",
    ability: "Drought",
    wiki: "http://www.serebii.net/pokedex-xy/383.shtml",
    image: "http://www.serebii.net/xy/pokemon/383.png"
};

var rayquaza = {
    name: "Rayquaza",
    dex: 384,
    type: "Dragon/Flying",
    ability: "Air Lock",
    wiki: "http://www.serebii.net/pokedex-xy/384.shtml",
    image: "http://www.serebii.net/xy/pokemon/384.png"
};

var jirachi = {
    name: "Jirachi",
    dex: 385,
    type: "Steel/Psychic",
    ability: "Serene Grace",
    wiki: "http://www.serebii.net/pokedex-xy/385.shtml",
    image: "http://www.serebii.net/xy/pokemon/385.png"
};

var deoxys = {
    name: "Deoxys",
    dex: 386,
    type: "Psychic",
    ability: "Pressure",
    wiki: "http://www.serebii.net/pokedex-xy/386.shtml",
    image: "http://www.serebii.net/xy/pokemon/386.png"
};

var turtwig = {
    name: "Turtwig",
    dex: 387,
    type: "Grass",
    ability: "Overgrow/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-xy/387.shtml",
    image: "http://www.serebii.net/xy/pokemon/387.png"
};

var grotle = {
    name: "Grotle",
    dex: 388,
    type: "Grass",
    ability: "Overgrow/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-xy/388.shtml",
    image: "http://www.serebii.net/xy/pokemon/388.png"
};

var torterra = {
    name: "Torterra",
    dex: 389,
    type: "Grass/Ground",
    ability: "Overgrow/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-xy/389.shtml",
    image: "http://www.serebii.net/xy/pokemon/389.png"
};

var chimchar = {
    name: "Chimchar",
    dex: 390,
    type: "Fire",
    ability: "Blaze/None/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-xy/390.shtml",
    image: "http://www.serebii.net/xy/pokemon/390.png"
};

var monferno = {
    name: "Monferno",
    dex: 391,
    type: "Fire/Fighting",
    ability: "Blaze/None/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-xy/391.shtml",
    image: "http://www.serebii.net/xy/pokemon/391.png"
};

var infernape = {
    name: "Infernape",
    dex: 392,
    type: "Fire/Fighting",
    ability: "Blaze/None/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-xy/392.shtml",
    image: "http://www.serebii.net/xy/pokemon/392.png"
};

var piplup = {
    name: "Piplup",
    dex: 393,
    type: "Water",
    ability: "Torrent/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-xy/393.shtml",
    image: "http://www.serebii.net/xy/pokemon/393.png"
};

var prinplup = {
    name: "Prinplup",
    dex: 394,
    type: "Water",
    ability: "Torrent/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-xy/394.shtml",
    image: "http://www.serebii.net/xy/pokemon/394.png"
};

var empoleon = {
    name: "Empoleon",
    dex: 395,
    type: "Water/Steel",
    ability: "Torrent/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-xy/395.shtml",
    image: "http://www.serebii.net/xy/pokemon/395.png"
};

var starly = {
    name: "Starly",
    dex: 396,
    type: "Normal/Flying",
    ability: "Keen Eye/None/Reckless/VI",
    wiki: "http://www.serebii.net/pokedex-xy/396.shtml",
    image: "http://www.serebii.net/xy/pokemon/396.png"
};

var staravia = {
    name: "Staravia",
    dex: 397,
    type: "Normal/Flying",
    ability: "Intimidate/None/Reckless",
    wiki: "http://www.serebii.net/pokedex-xy/397.shtml",
    image: "http://www.serebii.net/xy/pokemon/397.png"
};

var staraptor = {
    name: "Staraptor",
    dex: 398,
    type: "Normal/Flying",
    ability: "Intimidate/None/Reckless",
    wiki: "http://www.serebii.net/pokedex-xy/398.shtml",
    image: "http://www.serebii.net/xy/pokemon/398.png"
};

var bidoof = {
    name: "Bidoof",
    dex: 399,
    type: "Normal",
    ability: "Simple/Unaware/Moody",
    wiki: "http://www.serebii.net/pokedex-xy/399.shtml",
    image: "http://www.serebii.net/xy/pokemon/399.png"
};

var bibarel = {
    name: "Bibarel",
    dex: 400,
    type: "Normal/Water",
    ability: "Simple/Unaware/Moody",
    wiki: "http://www.serebii.net/pokedex-xy/400.shtml",
    image: "http://www.serebii.net/xy/pokemon/400.png"
};

var kricketot = {
    name: "Kricketot",
    dex: 401,
    type: "Bug",
    ability: "Shed Skin/None/Run Away",
    wiki: "http://www.serebii.net/pokedex-xy/401.shtml",
    image: "http://www.serebii.net/xy/pokemon/401.png"
};

var kricketune = {
    name: "Kricketune",
    dex: 402,
    type: "Bug",
    ability: "Swarm/None/Technician",
    wiki: "http://www.serebii.net/pokedex-xy/402.shtml",
    image: "http://www.serebii.net/xy/pokemon/402.png"
};

var shinx = {
    name: "Shinx",
    dex: 403,
    type: "Electric",
    ability: "Rivalry/Intimidate/Guts",
    wiki: "http://www.serebii.net/pokedex-xy/403.shtml",
    image: "http://www.serebii.net/xy/pokemon/403.png"
};

var luxio = {
    name: "Luxio",
    dex: 404,
    type: "Electric",
    ability: "Rivalry/Intimidate/Guts",
    wiki: "http://www.serebii.net/pokedex-xy/404.shtml",
    image: "http://www.serebii.net/xy/pokemon/404.png"
};

var luxray = {
    name: "Luxray",
    dex: 405,
    type: "Electric",
    ability: "Rivalry/Intimidate/Guts",
    wiki: "http://www.serebii.net/pokedex-xy/405.shtml",
    image: "http://www.serebii.net/xy/pokemon/405.png"
};

var budew = {
    name: "Budew",
    dex: 406,
    type: "Grass/Poison",
    ability: "Natural Cure/Poison Point/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-xy/406.shtml",
    image: "http://www.serebii.net/xy/pokemon/406.png"
};

var roserade = {
    name: "Roserade",
    dex: 407,
    type: "Grass/Poison",
    ability: "Natural Cure/Poison Point/Technician",
    wiki: "http://www.serebii.net/pokedex-xy/407.shtml",
    image: "http://www.serebii.net/xy/pokemon/407.png"
};

var cranidos = {
    name: "Cranidos",
    dex: 408,
    type: "Rock",
    ability: "Mold Breaker/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/408.shtml",
    image: "http://www.serebii.net/xy/pokemon/408.png"
};

var rampardos = {
    name: "Rampardos",
    dex: 409,
    type: "Rock",
    ability: "Mold Breaker/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/409.shtml",
    image: "http://www.serebii.net/xy/pokemon/409.png"
};

var shieldon = {
    name: "Shieldon",
    dex: 410,
    type: "Rock/Steel",
    ability: "Sturdy/None/Soundproof",
    wiki: "http://www.serebii.net/pokedex-xy/410.shtml",
    image: "http://www.serebii.net/xy/pokemon/410.png"
};

var bastiodon = {
    name: "Bastiodon",
    dex: 411,
    type: "Rock/Steel",
    ability: "Sturdy/None/Soundproof",
    wiki: "http://www.serebii.net/pokedex-xy/411.shtml",
    image: "http://www.serebii.net/xy/pokemon/411.png"
};

var burmy = {
    name: "Burmy",
    dex: 412,
    type: "Bug",
    ability: "Shed Skin/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-xy/412.shtml",
    image: "http://www.serebii.net/xy/pokemon/412.png"
};

var wormadam = {
    name: "Wormadam",
    dex: 413,
    type: "Bug/Steel",
    ability: "Anticipation/None/Overcoat",
    wiki: "http://www.serebii.net/pokedex-xy/413.shtml",
    image: "http://www.serebii.net/xy/pokemon/413.png"
};

var mothim = {
    name: "Mothim",
    dex: 414,
    type: "Bug/Flying",
    ability: "Swarm/None/Tinted Lens",
    wiki: "http://www.serebii.net/pokedex-xy/414.shtml",
    image: "http://www.serebii.net/xy/pokemon/414.png"
};

var combee = {
    name: "Combee",
    dex: 415,
    type: "Bug/Flying",
    ability: "Honey Gather/None/Hustle",
    wiki: "http://www.serebii.net/pokedex-xy/415.shtml",
    image: "http://www.serebii.net/xy/pokemon/415.png"
};

var vespiquen = {
    name: "Vespiquen",
    dex: 416,
    type: "Bug/Flying",
    ability: "Pressure/None/Unnerve",
    wiki: "http://www.serebii.net/pokedex-xy/416.shtml",
    image: "http://www.serebii.net/xy/pokemon/416.png"
};

var pachirisu = {
    name: "Pachirisu",
    dex: 417,
    type: "Electric",
    ability: "Run Away/Pickup/Volt Absorb",
    wiki: "http://www.serebii.net/pokedex-xy/417.shtml",
    image: "http://www.serebii.net/xy/pokemon/417.png"
};

var buizel = {
    name: "Buizel",
    dex: 418,
    type: "Water",
    ability: "Swift Swim/None/Water Veil",
    wiki: "http://www.serebii.net/pokedex-xy/418.shtml",
    image: "http://www.serebii.net/xy/pokemon/418.png"
};

var floatzel = {
    name: "Floatzel",
    dex: 419,
    type: "Water",
    ability: "Swift Swim/None/Water Veil",
    wiki: "http://www.serebii.net/pokedex-xy/419.shtml",
    image: "http://www.serebii.net/xy/pokemon/419.png"
};

var cherubi = {
    name: "Cherubi",
    dex: 420,
    type: "Grass",
    ability: "Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-xy/420.shtml",
    image: "http://www.serebii.net/xy/pokemon/420.png"
};

var cherrim = {
    name: "Cherrim",
    dex: 421,
    type: "Grass",
    ability: "Flower Gift",
    wiki: "http://www.serebii.net/pokedex-xy/421.shtml",
    image: "http://www.serebii.net/xy/pokemon/421.png"
};

var shellos = {
    name: "Shellos",
    dex: 422,
    type: "Water",
    ability: "Sticky Hold/Storm Drain/Sand Force",
    wiki: "http://www.serebii.net/pokedex-xy/422.shtml",
    image: "http://www.serebii.net/xy/pokemon/422.png"
};

var gastrodon = {
    name: "Gastrodon",
    dex: 423,
    type: "Water/Ground",
    ability: "Sticky Hold/Storm Drain/Sand Force",
    wiki: "http://www.serebii.net/pokedex-xy/423.shtml",
    image: "http://www.serebii.net/xy/pokemon/423.png"
};

var ambipom = {
    name: "Ambipom",
    dex: 424,
    type: "Normal",
    ability: "Technician/Pickup/Skill Link",
    wiki: "http://www.serebii.net/pokedex-xy/424.shtml",
    image: "http://www.serebii.net/xy/pokemon/424.png"
};

var drifloon = {
    name: "Drifloon",
    dex: 425,
    type: "Ghost/Flying",
    ability: "Aftermath/Unburden/Flare Boost",
    wiki: "http://www.serebii.net/pokedex-xy/425.shtml",
    image: "http://www.serebii.net/xy/pokemon/425.png"
};

var drifblim = {
    name: "Drifblim",
    dex: 426,
    type: "Ghost/Flying",
    ability: "Aftermath/Unburden/Flare Boost",
    wiki: "http://www.serebii.net/pokedex-xy/426.shtml",
    image: "http://www.serebii.net/xy/pokemon/426.png"
};

var buneary = {
    name: "Buneary",
    dex: 427,
    type: "Normal",
    ability: "Run Away/Klutz/Limber",
    wiki: "http://www.serebii.net/pokedex-xy/427.shtml",
    image: "http://www.serebii.net/xy/pokemon/427.png"
};

var lopunny = {
    name: "Lopunny",
    dex: 428,
    type: "Normal",
    ability: "Cute Charm/Klutz/Limber",
    wiki: "http://www.serebii.net/pokedex-xy/428.shtml",
    image: "http://www.serebii.net/xy/pokemon/428.png"
};

var mismagius = {
    name: "Mismagius",
    dex: 429,
    type: "Ghost",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/429.shtml",
    image: "http://www.serebii.net/xy/pokemon/429.png"
};

var honchkrow = {
    name: "Honchkrow",
    dex: 430,
    type: "Dark/Flying",
    ability: "Insomnia/Super Luck/Moxie",
    wiki: "http://www.serebii.net/pokedex-xy/430.shtml",
    image: "http://www.serebii.net/xy/pokemon/430.png"
};

var glameow = {
    name: "Glameow",
    dex: 431,
    type: "Normal",
    ability: "Limber/Own Tempo/Keen Eye",
    wiki: "http://www.serebii.net/pokedex-xy/431.shtml",
    image: "http://www.serebii.net/xy/pokemon/431.png"
};

var purugly = {
    name: "Purugly",
    dex: 432,
    type: "Normal",
    ability: "Thick Fat/Own Tempo/Defiant",
    wiki: "http://www.serebii.net/pokedex-xy/432.shtml",
    image: "http://www.serebii.net/xy/pokemon/432.png"
};

var chingling = {
    name: "Chingling",
    dex: 433,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/433.shtml",
    image: "http://www.serebii.net/xy/pokemon/433.png"
};

var stunky = {
    name: "Stunky",
    dex: 434,
    type: "Poison/Dark",
    ability: "Stench/Aftermath/Keen Eye",
    wiki: "http://www.serebii.net/pokedex-xy/434.shtml",
    image: "http://www.serebii.net/xy/pokemon/434.png"
};

var skuntank = {
    name: "Skuntank",
    dex: 435,
    type: "Poison/Dark",
    ability: "Stench/Aftermath/Keen Eye",
    wiki: "http://www.serebii.net/pokedex-xy/435.shtml",
    image: "http://www.serebii.net/xy/pokemon/435.png"
};

var bronzor = {
    name: "Bronzor",
    dex: 436,
    type: "Steel/Psychic",
    ability: "Levitate/Heatproof/Heavy Metal",
    wiki: "http://www.serebii.net/pokedex-xy/436.shtml",
    image: "http://www.serebii.net/xy/pokemon/436.png"
};

var bronzong = {
    name: "Bronzong",
    dex: 437,
    type: "Steel/Psychic",
    ability: "Levitate/Heatproof/Heavy Metal",
    wiki: "http://www.serebii.net/pokedex-xy/437.shtml",
    image: "http://www.serebii.net/xy/pokemon/437.png"
};

var bonsly = {
    name: "Bonsly",
    dex: 438,
    type: "Rock",
    ability: "Sturdy/Rock Head/Rattled",
    wiki: "http://www.serebii.net/pokedex-xy/438.shtml",
    image: "http://www.serebii.net/xy/pokemon/438.png"
};

var mime_jr = {
    name: "Mime Jr.",
    dex: 439,
    type: "Psychic/Fairy",
    ability: "Soundproof/Filter/Technician",
    wiki: "http://www.serebii.net/pokedex-xy/439.shtml",
    image: "http://www.serebii.net/xy/pokemon/439.png"
};

var happiny = {
    name: "Happiny",
    dex: 440,
    type: "Normal",
    ability: "Natural Cure/Serene Grace/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-xy/440.shtml",
    image: "http://www.serebii.net/xy/pokemon/440.png"
};

var chatot = {
    name: "Chatot",
    dex: 441,
    type: "Normal/Flying",
    ability: "Keen Eye/Tangled Feet/Big Pecks",
    wiki: "http://www.serebii.net/pokedex-xy/441.shtml",
    image: "http://www.serebii.net/xy/pokemon/441.png"
};

var spiritomb = {
    name: "Spiritomb",
    dex: 442,
    type: "Ghost/Dark",
    ability: "Pressure/None/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-xy/442.shtml",
    image: "http://www.serebii.net/xy/pokemon/442.png"
};

var gible = {
    name: "Gible",
    dex: 443,
    type: "Dragon/Ground",
    ability: "Sand Veil/None/Rough Skin",
    wiki: "http://www.serebii.net/pokedex-xy/443.shtml",
    image: "http://www.serebii.net/xy/pokemon/443.png"
};

var gabite = {
    name: "Gabite",
    dex: 444,
    type: "Dragon/Ground",
    ability: "Sand Veil/None/Rough Skin",
    wiki: "http://www.serebii.net/pokedex-xy/444.shtml",
    image: "http://www.serebii.net/xy/pokemon/444.png"
};

var garchomp = {
    name: "Garchomp",
    dex: 445,
    type: "Dragon/Ground",
    ability: "Sand Veil/None/Rough Skin",
    wiki: "http://www.serebii.net/pokedex-xy/445.shtml",
    image: "http://www.serebii.net/xy/pokemon/445.png"
};

var munchlax = {
    name: "Munchlax",
    dex: 446,
    type: "Normal",
    ability: "Pickup/Thick Fat/Gluttony",
    wiki: "http://www.serebii.net/pokedex-xy/446.shtml",
    image: "http://www.serebii.net/xy/pokemon/446.png"
};

var riolu = {
    name: "Riolu",
    dex: 447,
    type: "Fighting",
    ability: "Steadfast/Inner Focus/Prankster",
    wiki: "http://www.serebii.net/pokedex-xy/447.shtml",
    image: "http://www.serebii.net/xy/pokemon/447.png"
};

var lucario = {
    name: "Lucario",
    dex: 448,
    type: "Fighting/Steel",
    ability: "Steadfast/Inner Focus/Justified",
    wiki: "http://www.serebii.net/pokedex-xy/448.shtml",
    image: "http://www.serebii.net/xy/pokemon/448.png"
};

var hippopotas = {
    name: "Hippopotas",
    dex: 449,
    type: "Ground",
    ability: "Sand Stream/None/Sand Force",
    wiki: "http://www.serebii.net/pokedex-xy/449.shtml",
    image: "http://www.serebii.net/xy/pokemon/449.png"
};

var hippowdon = {
    name: "Hippowdon",
    dex: 450,
    type: "Ground",
    ability: "Sand Stream/None/Sand Force",
    wiki: "http://www.serebii.net/pokedex-xy/450.shtml",
    image: "http://www.serebii.net/xy/pokemon/450.png"
};

var skorupi = {
    name: "Skorupi",
    dex: 451,
    type: "Poison/Bug",
    ability: "Battle Armor/Sniper/Keen Eye",
    wiki: "http://www.serebii.net/pokedex-xy/451.shtml",
    image: "http://www.serebii.net/xy/pokemon/451.png"
};

var drapion = {
    name: "Drapion",
    dex: 452,
    type: "Poison/Dark",
    ability: "Battle Armor/Sniper/Keen Eye",
    wiki: "http://www.serebii.net/pokedex-xy/452.shtml",
    image: "http://www.serebii.net/xy/pokemon/452.png"
};

var croagunk = {
    name: "Croagunk",
    dex: 453,
    type: "Poison/Fighting",
    ability: "Anticipation/Dry Skin/Poison Touch",
    wiki: "http://www.serebii.net/pokedex-xy/453.shtml",
    image: "http://www.serebii.net/xy/pokemon/453.png"
};

var toxicroak = {
    name: "Toxicroak",
    dex: 454,
    type: "Poison/Fighting",
    ability: "Anticipation/Dry Skin/Poison Touch",
    wiki: "http://www.serebii.net/pokedex-xy/454.shtml",
    image: "http://www.serebii.net/xy/pokemon/454.png"
};

var carnivine = {
    name: "Carnivine",
    dex: 455,
    type: "Grass",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/455.shtml",
    image: "http://www.serebii.net/xy/pokemon/455.png"
};

var finneon = {
    name: "Finneon",
    dex: 456,
    type: "Water",
    ability: "Swift Swim/Storm Drain/Water Veil",
    wiki: "http://www.serebii.net/pokedex-xy/456.shtml",
    image: "http://www.serebii.net/xy/pokemon/456.png"
};

var lumineon = {
    name: "Lumineon",
    dex: 457,
    type: "Water",
    ability: "Swift Swim/Storm Drain/Water Veil",
    wiki: "http://www.serebii.net/pokedex-xy/457.shtml",
    image: "http://www.serebii.net/xy/pokemon/457.png"
};

var mantyke = {
    name: "Mantyke",
    dex: 458,
    type: "Water/Flying",
    ability: "Swift Swim/Water Absorb/Water Veil",
    wiki: "http://www.serebii.net/pokedex-xy/458.shtml",
    image: "http://www.serebii.net/xy/pokemon/458.png"
};

var snover = {
    name: "Snover",
    dex: 459,
    type: "Grass/Ice",
    ability: "Snow Warning/None/Soundproof",
    wiki: "http://www.serebii.net/pokedex-xy/459.shtml",
    image: "http://www.serebii.net/xy/pokemon/459.png"
};

var abomasnow = {
    name: "Abomasnow",
    dex: 460,
    type: "Grass/Ice",
    ability: "Snow Warning/None/Soundproof",
    wiki: "http://www.serebii.net/pokedex-xy/460.shtml",
    image: "http://www.serebii.net/xy/pokemon/460.png"
};

var weavile = {
    name: "Weavile",
    dex: 461,
    type: "Dark/Ice",
    ability: "Pressure/None/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-xy/461.shtml",
    image: "http://www.serebii.net/xy/pokemon/461.png"
};

var magnezone = {
    name: "Magnezone",
    dex: 462,
    type: "Electric/Steel",
    ability: "Magnet Pull/Sturdy/Analytic",
    wiki: "http://www.serebii.net/pokedex-xy/462.shtml",
    image: "http://www.serebii.net/xy/pokemon/462.png"
};

var lickilicky = {
    name: "Lickilicky",
    dex: 463,
    type: "Normal",
    ability: "Own Tempo/Oblivious/Cloud Nine",
    wiki: "http://www.serebii.net/pokedex-xy/463.shtml",
    image: "http://www.serebii.net/xy/pokemon/463.png"
};

var rhyperior = {
    name: "Rhyperior",
    dex: 464,
    type: "Ground/Rock",
    ability: "Lightning Rod/Solid Rock/Reckless",
    wiki: "http://www.serebii.net/pokedex-xy/464.shtml",
    image: "http://www.serebii.net/xy/pokemon/464.png"
};

var tangrowth = {
    name: "Tangrowth",
    dex: 465,
    type: "Grass",
    ability: "Chlorophyll/Leaf Guard/Regenerator",
    wiki: "http://www.serebii.net/pokedex-xy/465.shtml",
    image: "http://www.serebii.net/xy/pokemon/465.png"
};

var electivire = {
    name: "Electivire",
    dex: 466,
    type: "Electric",
    ability: "Motor Drive/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-xy/466.shtml",
    image: "http://www.serebii.net/xy/pokemon/466.png"
};

var magmortar = {
    name: "Magmortar",
    dex: 467,
    type: "Fire",
    ability: "Flame Body/None/Vital Spirit",
    wiki: "http://www.serebii.net/pokedex-xy/467.shtml",
    image: "http://www.serebii.net/xy/pokemon/467.png"
};

var togekiss = {
    name: "Togekiss",
    dex: 468,
    type: "Fairy/Flying",
    ability: "Hustle/Serene Grace/Super Luck",
    wiki: "http://www.serebii.net/pokedex-xy/468.shtml",
    image: "http://www.serebii.net/xy/pokemon/468.png"
};

var yanmega = {
    name: "Yanmega",
    dex: 469,
    type: "Bug/Flying",
    ability: "Speed Boost/Tinted Lens/Frisk",
    wiki: "http://www.serebii.net/pokedex-xy/469.shtml",
    image: "http://www.serebii.net/xy/pokemon/469.png"
};

var leafeon = {
    name: "Leafeon",
    dex: 470,
    type: "Grass",
    ability: "Leaf Guard/None/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-xy/470.shtml",
    image: "http://www.serebii.net/xy/pokemon/470.png"
};

var glaceon = {
    name: "Glaceon",
    dex: 471,
    type: "Ice",
    ability: "Snow Cloak/None/Ice Body",
    wiki: "http://www.serebii.net/pokedex-xy/471.shtml",
    image: "http://www.serebii.net/xy/pokemon/471.png"
};

var gliscor = {
    name: "Gliscor",
    dex: 472,
    type: "Ground/Flying",
    ability: "Hyper Cutter/Sand Veil/Poison Heal",
    wiki: "http://www.serebii.net/pokedex-xy/472.shtml",
    image: "http://www.serebii.net/xy/pokemon/472.png"
};

var mamoswine = {
    name: "Mamoswine",
    dex: 473,
    type: "Ice/Ground",
    ability: "Oblivious/Snow Cloak/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-xy/473.shtml",
    image: "http://www.serebii.net/xy/pokemon/473.png"
};

var porygon_z = {
    name: "Porygon-Z",
    dex: 474,
    type: "Normal",
    ability: "Adaptability/Download/Analytic",
    wiki: "http://www.serebii.net/pokedex-xy/474.shtml",
    image: "http://www.serebii.net/xy/pokemon/474.png"
};

var gallade = {
    name: "Gallade",
    dex: 475,
    type: "Psychic/Fighting",
    ability: "Steadfast/None/Justified",
    wiki: "http://www.serebii.net/pokedex-xy/475.shtml",
    image: "http://www.serebii.net/xy/pokemon/475.png"
};

var probopass = {
    name: "Probopass",
    dex: 476,
    type: "Rock/Steel",
    ability: "Sturdy/Magnet Pull/Sand Force",
    wiki: "http://www.serebii.net/pokedex-xy/476.shtml",
    image: "http://www.serebii.net/xy/pokemon/476.png"
};

var dusknoir = {
    name: "Dusknoir",
    dex: 477,
    type: "Ghost",
    ability: "Pressure/None/Frisk/VI",
    wiki: "http://www.serebii.net/pokedex-xy/477.shtml",
    image: "http://www.serebii.net/xy/pokemon/477.png"
};

var froslass = {
    name: "Froslass",
    dex: 478,
    type: "Ice/Ghost",
    ability: "Snow Cloak/None/Cursed Body",
    wiki: "http://www.serebii.net/pokedex-xy/478.shtml",
    image: "http://www.serebii.net/xy/pokemon/478.png"
};

var rotom = {
    name: "Rotom",
    dex: 479,
    type: "Electric/Ghost",
    ability: "Levitate/None//Rotom",
    wiki: "http://www.serebii.net/pokedex-xy/479.shtml",
    image: "http://www.serebii.net/xy/pokemon/479.png"
};

var uxie = {
    name: "Uxie",
    dex: 480,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/480.shtml",
    image: "http://www.serebii.net/xy/pokemon/480.png"
};

var mesprit = {
    name: "Mesprit",
    dex: 481,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/481.shtml",
    image: "http://www.serebii.net/xy/pokemon/481.png"
};

var azelf = {
    name: "Azelf",
    dex: 482,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/482.shtml",
    image: "http://www.serebii.net/xy/pokemon/482.png"
};

var dialga = {
    name: "Dialga",
    dex: 483,
    type: "Steel/Dragon",
    ability: "Pressure/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-xy/483.shtml",
    image: "http://www.serebii.net/xy/pokemon/483.png"
};

var palkia = {
    name: "Palkia",
    dex: 484,
    type: "Water/Dragon",
    ability: "Pressure/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-xy/484.shtml",
    image: "http://www.serebii.net/xy/pokemon/484.png"
};

var heatran = {
    name: "Heatran",
    dex: 485,
    type: "Fire/Steel",
    ability: "Flash Fire/None/Flame Body",
    wiki: "http://www.serebii.net/pokedex-xy/485.shtml",
    image: "http://www.serebii.net/xy/pokemon/485.png"
};

var regigigas = {
    name: "Regigigas",
    dex: 486,
    type: "Normal",
    ability: "Slow Start",
    wiki: "http://www.serebii.net/pokedex-xy/486.shtml",
    image: "http://www.serebii.net/xy/pokemon/486.png"
};

var giratina = {
    name: "Giratina",
    dex: 487,
    type: "Ghost/Dragon",
    ability: "Pressure/None/Telepathy",
    wiki: "http://www.serebii.net/pokedex-xy/487.shtml",
    image: "http://www.serebii.net/xy/pokemon/487.png"
};

var cresselia = {
    name: "Cresselia",
    dex: 488,
    type: "Psychic",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/488.shtml",
    image: "http://www.serebii.net/xy/pokemon/488.png"
};

var phione = {
    name: "Phione",
    dex: 489,
    type: "Water",
    ability: "Hydration",
    wiki: "http://www.serebii.net/pokedex-xy/489.shtml",
    image: "http://www.serebii.net/xy/pokemon/489.png"
};

var manaphy = {
    name: "Manaphy",
    dex: 490,
    type: "Water",
    ability: "Hydration",
    wiki: "http://www.serebii.net/pokedex-xy/490.shtml",
    image: "http://www.serebii.net/xy/pokemon/490.png"
};

var darkrai = {
    name: "Darkrai",
    dex: 491,
    type: "Dark",
    ability: "Bad Dreams",
    wiki: "http://www.serebii.net/pokedex-xy/491.shtml",
    image: "http://www.serebii.net/xy/pokemon/491.png"
};

var shaymin = {
    name: "Shaymin",
    dex: 492,
    type: "Grass/Flying",
    ability: "Natural Cure",
    wiki: "http://www.serebii.net/pokedex-xy/492.shtml",
    image: "http://www.serebii.net/xy/pokemon/492.png"
};

var arceus = {
    name: "Arceus",
    dex: 493,
    type: "Normal",
    ability: "Multitype",
    wiki: "http://www.serebii.net/pokedex-xy/493.shtml",
    image: "http://www.serebii.net/xy/pokemon/493.png"
};

var victini = {
    name: "Victini",
    dex: 494,
    type: "Psychic/Fire",
    ability: "Victory Star",
    wiki: "http://www.serebii.net/pokedex-xy/494.shtml",
    image: "http://www.serebii.net/xy/pokemon/494.png"
};

var snivy = {
    name: "Snivy",
    dex: 495,
    type: "Grass",
    ability: "Overgrow/None/Contrary",
    wiki: "http://www.serebii.net/pokedex-xy/495.shtml",
    image: "http://www.serebii.net/xy/pokemon/495.png"
};

var servine = {
    name: "Servine",
    dex: 496,
    type: "Grass",
    ability: "Overgrow/None/Contrary",
    wiki: "http://www.serebii.net/pokedex-xy/496.shtml",
    image: "http://www.serebii.net/xy/pokemon/496.png"
};

var serperior = {
    name: "Serperior",
    dex: 497,
    type: "Grass",
    ability: "Overgrow/None/Contrary",
    wiki: "http://www.serebii.net/pokedex-xy/497.shtml",
    image: "http://www.serebii.net/xy/pokemon/497.png"
};

var tepig = {
    name: "Tepig",
    dex: 498,
    type: "Fire",
    ability: "Blaze/None/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-xy/498.shtml",
    image: "http://www.serebii.net/xy/pokemon/498.png"
};

var pignite = {
    name: "Pignite",
    dex: 499,
    type: "Fire/Fighting",
    ability: "Blaze/None/Thick Fat",
    wiki: "http://www.serebii.net/pokedex-xy/499.shtml",
    image: "http://www.serebii.net/xy/pokemon/499.png"
};

var emboar = {
    name: "Emboar",
    dex: 500,
    type: "Fire/Fighting",
    ability: "Blaze/None/Reckless",
    wiki: "http://www.serebii.net/pokedex-xy/500.shtml",
    image: "http://www.serebii.net/xy/pokemon/500.png"
};

var oshawott = {
    name: "Oshawott",
    dex: 501,
    type: "Water",
    ability: "Torrent/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-xy/501.shtml",
    image: "http://www.serebii.net/xy/pokemon/501.png"
};

var dewott = {
    name: "Dewott",
    dex: 502,
    type: "Water",
    ability: "Torrent/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-xy/502.shtml",
    image: "http://www.serebii.net/xy/pokemon/502.png"
};

var samurott = {
    name: "Samurott",
    dex: 503,
    type: "Water",
    ability: "Torrent/None/Shell Armor",
    wiki: "http://www.serebii.net/pokedex-xy/503.shtml",
    image: "http://www.serebii.net/xy/pokemon/503.png"
};

var patrat = {
    name: "Patrat",
    dex: 504,
    type: "Normal",
    ability: "Run Away/Keen Eye/Analytic",
    wiki: "http://www.serebii.net/pokedex-xy/504.shtml",
    image: "http://www.serebii.net/xy/pokemon/504.png"
};

var watchog = {
    name: "Watchog",
    dex: 505,
    type: "Normal",
    ability: "Illuminate/Keen Eye/Analytic",
    wiki: "http://www.serebii.net/pokedex-xy/505.shtml",
    image: "http://www.serebii.net/xy/pokemon/505.png"
};

var lillipup = {
    name: "Lillipup",
    dex: 506,
    type: "Normal",
    ability: "Vital Spirit/Pickup/Run Away",
    wiki: "http://www.serebii.net/pokedex-xy/506.shtml",
    image: "http://www.serebii.net/xy/pokemon/506.png"
};

var herdier = {
    name: "Herdier",
    dex: 507,
    type: "Normal",
    ability: "Intimidate/Sand Rush/Scrappy",
    wiki: "http://www.serebii.net/pokedex-xy/507.shtml",
    image: "http://www.serebii.net/xy/pokemon/507.png"
};

var stoutland = {
    name: "Stoutland",
    dex: 508,
    type: "Normal",
    ability: "Intimidate/Sand Rush/Scrappy",
    wiki: "http://www.serebii.net/pokedex-xy/508.shtml",
    image: "http://www.serebii.net/xy/pokemon/508.png"
};

var purrloin = {
    name: "Purrloin",
    dex: 509,
    type: "Dark",
    ability: "Limber/Unburden/Prankster",
    wiki: "http://www.serebii.net/pokedex-xy/509.shtml",
    image: "http://www.serebii.net/xy/pokemon/509.png"
};

var liepard = {
    name: "Liepard",
    dex: 510,
    type: "Dark",
    ability: "Limber/Unburden/Prankster",
    wiki: "http://www.serebii.net/pokedex-xy/510.shtml",
    image: "http://www.serebii.net/xy/pokemon/510.png"
};

var pansage = {
    name: "Pansage",
    dex: 511,
    type: "Grass",
    ability: "Gluttony/None/Overgrow",
    wiki: "http://www.serebii.net/pokedex-xy/511.shtml",
    image: "http://www.serebii.net/xy/pokemon/511.png"
};

var simisage = {
    name: "Simisage",
    dex: 512,
    type: "Grass",
    ability: "Gluttony/None/Overgrow",
    wiki: "http://www.serebii.net/pokedex-xy/512.shtml",
    image: "http://www.serebii.net/xy/pokemon/512.png"
};

var pansear = {
    name: "Pansear",
    dex: 513,
    type: "Fire",
    ability: "Gluttony/None/Blaze",
    wiki: "http://www.serebii.net/pokedex-xy/513.shtml",
    image: "http://www.serebii.net/xy/pokemon/513.png"
};

var simisear = {
    name: "Simisear",
    dex: 514,
    type: "Fire",
    ability: "Gluttony/None/Blaze",
    wiki: "http://www.serebii.net/pokedex-xy/514.shtml",
    image: "http://www.serebii.net/xy/pokemon/514.png"
};

var panpour = {
    name: "Panpour",
    dex: 515,
    type: "Water",
    ability: "Gluttony/None/Torrent",
    wiki: "http://www.serebii.net/pokedex-xy/515.shtml",
    image: "http://www.serebii.net/xy/pokemon/515.png"
};

var simipour = {
    name: "Simipour",
    dex: 516,
    type: "Water",
    ability: "Gluttony/None/Torrent",
    wiki: "http://www.serebii.net/pokedex-xy/516.shtml",
    image: "http://www.serebii.net/xy/pokemon/516.png"
};

var munna = {
    name: "Munna",
    dex: 517,
    type: "Psychic",
    ability: "Forewarn/Synchronize/Telepathy",
    wiki: "http://www.serebii.net/pokedex-xy/517.shtml",
    image: "http://www.serebii.net/xy/pokemon/517.png"
};

var musharna = {
    name: "Musharna",
    dex: 518,
    type: "Psychic",
    ability: "Forewarn/Synchronize/Telepathy",
    wiki: "http://www.serebii.net/pokedex-xy/518.shtml",
    image: "http://www.serebii.net/xy/pokemon/518.png"
};

var pidove = {
    name: "Pidove",
    dex: 519,
    type: "Normal/Flying",
    ability: "Big Pecks/Super Luck/Rivalry",
    wiki: "http://www.serebii.net/pokedex-xy/519.shtml",
    image: "http://www.serebii.net/xy/pokemon/519.png"
};

var tranquill = {
    name: "Tranquill",
    dex: 520,
    type: "Normal/Flying",
    ability: "Big Pecks/Super Luck/Rivalry",
    wiki: "http://www.serebii.net/pokedex-xy/520.shtml",
    image: "http://www.serebii.net/xy/pokemon/520.png"
};

var unfezant = {
    name: "Unfezant",
    dex: 521,
    type: "Normal/Flying",
    ability: "Big Pecks/Super Luck/Rivalry",
    wiki: "http://www.serebii.net/pokedex-xy/521.shtml",
    image: "http://www.serebii.net/xy/pokemon/521.png"
};

var blitzle = {
    name: "Blitzle",
    dex: 522,
    type: "Electric",
    ability: "Lightning Rod/Motor Drive/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-xy/522.shtml",
    image: "http://www.serebii.net/xy/pokemon/522.png"
};

var zebstrika = {
    name: "Zebstrika",
    dex: 523,
    type: "Electric",
    ability: "Lightning Rod/Motor Drive/Sap Sipper",
    wiki: "http://www.serebii.net/pokedex-xy/523.shtml",
    image: "http://www.serebii.net/xy/pokemon/523.png"
};

var roggenrola = {
    name: "Roggenrola",
    dex: 524,
    type: "Rock",
    ability: "Sturdy/None/Sand Force",
    wiki: "http://www.serebii.net/pokedex-xy/524.shtml",
    image: "http://www.serebii.net/xy/pokemon/524.png"
};

var boldore = {
    name: "Boldore",
    dex: 525,
    type: "Rock",
    ability: "Sturdy/None/Sand Force",
    wiki: "http://www.serebii.net/pokedex-xy/525.shtml",
    image: "http://www.serebii.net/xy/pokemon/525.png"
};

var gigalith = {
    name: "Gigalith",
    dex: 526,
    type: "Rock",
    ability: "Sturdy/None/Sand Force",
    wiki: "http://www.serebii.net/pokedex-xy/526.shtml",
    image: "http://www.serebii.net/xy/pokemon/526.png"
};

var woobat = {
    name: "Woobat",
    dex: 527,
    type: "Psychic/Flying",
    ability: "Unaware/Klutz/Simple",
    wiki: "http://www.serebii.net/pokedex-xy/527.shtml",
    image: "http://www.serebii.net/xy/pokemon/527.png"
};

var swoobat = {
    name: "Swoobat",
    dex: 528,
    type: "Psychic/Flying",
    ability: "Unaware/Klutz/Simple",
    wiki: "http://www.serebii.net/pokedex-xy/528.shtml",
    image: "http://www.serebii.net/xy/pokemon/528.png"
};

var drilbur = {
    name: "Drilbur",
    dex: 529,
    type: "Ground",
    ability: "Sand Rush/Sand Force/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-xy/529.shtml",
    image: "http://www.serebii.net/xy/pokemon/529.png"
};

var excadrill = {
    name: "Excadrill",
    dex: 530,
    type: "Ground/Steel",
    ability: "Sand Rush/Sand Force/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-xy/530.shtml",
    image: "http://www.serebii.net/xy/pokemon/530.png"
};

var audino = {
    name: "Audino",
    dex: 531,
    type: "Normal",
    ability: "Healer/Regenerator/Klutz",
    wiki: "http://www.serebii.net/pokedex-xy/531.shtml",
    image: "http://www.serebii.net/xy/pokemon/531.png"
};

var timburr = {
    name: "Timburr",
    dex: 532,
    type: "Fighting",
    ability: "Guts/Sheer Force/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-xy/532.shtml",
    image: "http://www.serebii.net/xy/pokemon/532.png"
};

var gurdurr = {
    name: "Gurdurr",
    dex: 533,
    type: "Fighting",
    ability: "Guts/Sheer Force/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-xy/533.shtml",
    image: "http://www.serebii.net/xy/pokemon/533.png"
};

var conkeldurr = {
    name: "Conkeldurr",
    dex: 534,
    type: "Fighting",
    ability: "Guts/Sheer Force/Iron Fist",
    wiki: "http://www.serebii.net/pokedex-xy/534.shtml",
    image: "http://www.serebii.net/xy/pokemon/534.png"
};

var tympole = {
    name: "Tympole",
    dex: 535,
    type: "Water",
    ability: "Swift Swim/Hydration/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-xy/535.shtml",
    image: "http://www.serebii.net/xy/pokemon/535.png"
};

var palpitoad = {
    name: "Palpitoad",
    dex: 536,
    type: "Water/Ground",
    ability: "Swift Swim/Hydration/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-xy/536.shtml",
    image: "http://www.serebii.net/xy/pokemon/536.png"
};

var seismitoad = {
    name: "Seismitoad",
    dex: 537,
    type: "Water/Ground",
    ability: "Swift Swim/Poison Touch/Water Absorb",
    wiki: "http://www.serebii.net/pokedex-xy/537.shtml",
    image: "http://www.serebii.net/xy/pokemon/537.png"
};

var throh = {
    name: "Throh",
    dex: 538,
    type: "Fighting",
    ability: "Guts/Inner Focus/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-xy/538.shtml",
    image: "http://www.serebii.net/xy/pokemon/538.png"
};

var sawk = {
    name: "Sawk",
    dex: 539,
    type: "Fighting",
    ability: "Sturdy/Inner Focus/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-xy/539.shtml",
    image: "http://www.serebii.net/xy/pokemon/539.png"
};

var sewaddle = {
    name: "Sewaddle",
    dex: 540,
    type: "Bug/Grass",
    ability: "Swarm/Chlorophyll/Overcoat",
    wiki: "http://www.serebii.net/pokedex-xy/540.shtml",
    image: "http://www.serebii.net/xy/pokemon/540.png"
};

var swadloon = {
    name: "Swadloon",
    dex: 541,
    type: "Bug/Grass",
    ability: "Leaf Guard/Chlorophyll/Overcoat",
    wiki: "http://www.serebii.net/pokedex-xy/541.shtml",
    image: "http://www.serebii.net/xy/pokemon/541.png"
};

var leavanny = {
    name: "Leavanny",
    dex: 542,
    type: "Bug/Grass",
    ability: "Swarm/Chlorophyll/Overcoat",
    wiki: "http://www.serebii.net/pokedex-xy/542.shtml",
    image: "http://www.serebii.net/xy/pokemon/542.png"
};

var venipede = {
    name: "Venipede",
    dex: 543,
    type: "Bug/Poison",
    ability: "Poison Point/Swarm/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-xy/543.shtml",
    image: "http://www.serebii.net/xy/pokemon/543.png"
};

var whirlipede = {
    name: "Whirlipede",
    dex: 544,
    type: "Bug/Poison",
    ability: "Poison Point/Swarm/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-xy/544.shtml",
    image: "http://www.serebii.net/xy/pokemon/544.png"
};

var scolipede = {
    name: "Scolipede",
    dex: 545,
    type: "Bug/Poison",
    ability: "Poison Point/Swarm/Speed Boost",
    wiki: "http://www.serebii.net/pokedex-xy/545.shtml",
    image: "http://www.serebii.net/xy/pokemon/545.png"
};

var cottonee = {
    name: "Cottonee",
    dex: 546,
    type: "Grass",
    ability: "Prankster/Infiltrator/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-xy/546.shtml",
    image: "http://www.serebii.net/xy/pokemon/546.png"
};

var whimsicott = {
    name: "Whimsicott",
    dex: 547,
    type: "Grass/Fairy",
    ability: "Prankster/Infiltrator/Chlorophyll",
    wiki: "http://www.serebii.net/pokedex-xy/547.shtml",
    image: "http://www.serebii.net/xy/pokemon/547.png"
};

var petilil = {
    name: "Petilil",
    dex: 548,
    type: "Grass",
    ability: "Chlorophyll/Own Tempo/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-xy/548.shtml",
    image: "http://www.serebii.net/xy/pokemon/548.png"
};

var lilligant = {
    name: "Lilligant",
    dex: 549,
    type: "Grass",
    ability: "Chlorophyll/Own Tempo/Leaf Guard",
    wiki: "http://www.serebii.net/pokedex-xy/549.shtml",
    image: "http://www.serebii.net/xy/pokemon/549.png"
};

var basculin = {
    name: "Basculin",
    dex: 550,
    type: "Water",
    ability: "Reckless/Adaptability/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-xy/550.shtml",
    image: "http://www.serebii.net/xy/pokemon/550.png"
};

var sandile = {
    name: "Sandile",
    dex: 551,
    type: "Ground/Dark",
    ability: "Intimidate/Moxie/Anger Point",
    wiki: "http://www.serebii.net/pokedex-xy/551.shtml",
    image: "http://www.serebii.net/xy/pokemon/551.png"
};

var krokorok = {
    name: "Krokorok",
    dex: 552,
    type: "Ground/Dark",
    ability: "Intimidate/Moxie/Anger Point",
    wiki: "http://www.serebii.net/pokedex-xy/552.shtml",
    image: "http://www.serebii.net/xy/pokemon/552.png"
};

var krookodile = {
    name: "Krookodile",
    dex: 553,
    type: "Ground/Dark",
    ability: "Intimidate/Moxie/Anger Point",
    wiki: "http://www.serebii.net/pokedex-xy/553.shtml",
    image: "http://www.serebii.net/xy/pokemon/553.png"
};

var darumaka = {
    name: "Darumaka",
    dex: 554,
    type: "Fire",
    ability: "Hustle/None/Inner Focus",
    wiki: "http://www.serebii.net/pokedex-xy/554.shtml",
    image: "http://www.serebii.net/xy/pokemon/554.png"
};

var darmanitan = {
    name: "Darmanitan",
    dex: 555,
    type: "Fire",
    ability: "Sheer Force/None/Zen Mode",
    wiki: "http://www.serebii.net/pokedex-xy/555.shtml",
    image: "http://www.serebii.net/xy/pokemon/555.png"
};

var maractus = {
    name: "Maractus",
    dex: 556,
    type: "Grass",
    ability: "Water Absorb/Chlorophyll/Storm Drain",
    wiki: "http://www.serebii.net/pokedex-xy/556.shtml",
    image: "http://www.serebii.net/xy/pokemon/556.png"
};

var dwebble = {
    name: "Dwebble",
    dex: 557,
    type: "Bug/Rock",
    ability: "Sturdy/Shell Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-xy/557.shtml",
    image: "http://www.serebii.net/xy/pokemon/557.png"
};

var crustle = {
    name: "Crustle",
    dex: 558,
    type: "Bug/Rock",
    ability: "Sturdy/Shell Armor/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-xy/558.shtml",
    image: "http://www.serebii.net/xy/pokemon/558.png"
};

var scraggy = {
    name: "Scraggy",
    dex: 559,
    type: "Dark/Fighting",
    ability: "Shed Skin/Moxie/Intimidate",
    wiki: "http://www.serebii.net/pokedex-xy/559.shtml",
    image: "http://www.serebii.net/xy/pokemon/559.png"
};

var scrafty = {
    name: "Scrafty",
    dex: 560,
    type: "Dark/Fighting",
    ability: "Shed Skin/Moxie/Intimidate",
    wiki: "http://www.serebii.net/pokedex-xy/560.shtml",
    image: "http://www.serebii.net/xy/pokemon/560.png"
};

var sigilyph = {
    name: "Sigilyph",
    dex: 561,
    type: "Psychic/Flying",
    ability: "Wonder Skin/Magic Guard/Tinted Lens",
    wiki: "http://www.serebii.net/pokedex-xy/561.shtml",
    image: "http://www.serebii.net/xy/pokemon/561.png"
};

var yamask = {
    name: "Yamask",
    dex: 562,
    type: "Ghost",
    ability: "Mummy",
    wiki: "http://www.serebii.net/pokedex-xy/562.shtml",
    image: "http://www.serebii.net/xy/pokemon/562.png"
};

var cofagrigus = {
    name: "Cofagrigus",
    dex: 563,
    type: "Ghost",
    ability: "Mummy",
    wiki: "http://www.serebii.net/pokedex-xy/563.shtml",
    image: "http://www.serebii.net/xy/pokemon/563.png"
};

var tirtouga = {
    name: "Tirtouga",
    dex: 564,
    type: "Water/Rock",
    ability: "Solid Rock/Sturdy/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-xy/564.shtml",
    image: "http://www.serebii.net/xy/pokemon/564.png"
};

var carracosta = {
    name: "Carracosta",
    dex: 565,
    type: "Water/Rock",
    ability: "Solid Rock/Sturdy/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-xy/565.shtml",
    image: "http://www.serebii.net/xy/pokemon/565.png"
};

var archen = {
    name: "Archen",
    dex: 566,
    type: "Rock/Flying",
    ability: "Defeatist",
    wiki: "http://www.serebii.net/pokedex-xy/566.shtml",
    image: "http://www.serebii.net/xy/pokemon/566.png"
};

var archeops = {
    name: "Archeops",
    dex: 567,
    type: "Rock/Flying",
    ability: "Defeatist",
    wiki: "http://www.serebii.net/pokedex-xy/567.shtml",
    image: "http://www.serebii.net/xy/pokemon/567.png"
};

var trubbish = {
    name: "Trubbish",
    dex: 568,
    type: "Poison",
    ability: "Stench/Sticky Hold/Aftermath",
    wiki: "http://www.serebii.net/pokedex-xy/568.shtml",
    image: "http://www.serebii.net/xy/pokemon/568.png"
};

var garbodor = {
    name: "Garbodor",
    dex: 569,
    type: "Poison",
    ability: "Stench/Weak Armor/Aftermath",
    wiki: "http://www.serebii.net/pokedex-xy/569.shtml",
    image: "http://www.serebii.net/xy/pokemon/569.png"
};

var zorua = {
    name: "Zorua",
    dex: 570,
    type: "Dark",
    ability: "Illusion",
    wiki: "http://www.serebii.net/pokedex-xy/570.shtml",
    image: "http://www.serebii.net/xy/pokemon/570.png"
};

var zoroark = {
    name: "Zoroark",
    dex: 571,
    type: "Dark",
    ability: "Illusion",
    wiki: "http://www.serebii.net/pokedex-xy/571.shtml",
    image: "http://www.serebii.net/xy/pokemon/571.png"
};

var minccino = {
    name: "Minccino",
    dex: 572,
    type: "Normal",
    ability: "Cute Charm/Technician/Skill Link",
    wiki: "http://www.serebii.net/pokedex-xy/572.shtml",
    image: "http://www.serebii.net/xy/pokemon/572.png"
};

var cinccino = {
    name: "Cinccino",
    dex: 573,
    type: "Normal",
    ability: "Cute Charm/Technician/Skill Link",
    wiki: "http://www.serebii.net/pokedex-xy/573.shtml",
    image: "http://www.serebii.net/xy/pokemon/573.png"
};

var gothita = {
    name: "Gothita",
    dex: 574,
    type: "Psychic",
    ability: "Frisk/Competitive/Shadow Tag",
    wiki: "http://www.serebii.net/pokedex-xy/574.shtml",
    image: "http://www.serebii.net/xy/pokemon/574.png"
};

var gothorita = {
    name: "Gothorita",
    dex: 575,
    type: "Psychic",
    ability: "Frisk/Competitive/Shadow Tag",
    wiki: "http://www.serebii.net/pokedex-xy/575.shtml",
    image: "http://www.serebii.net/xy/pokemon/575.png"
};

var gothitelle = {
    name: "Gothitelle",
    dex: 576,
    type: "Psychic",
    ability: "Frisk/Competitive/Shadow Tag",
    wiki: "http://www.serebii.net/pokedex-xy/576.shtml",
    image: "http://www.serebii.net/xy/pokemon/576.png"
};

var solosis = {
    name: "Solosis",
    dex: 577,
    type: "Psychic",
    ability: "Overcoat/Magic Guard/Regenerator",
    wiki: "http://www.serebii.net/pokedex-xy/577.shtml",
    image: "http://www.serebii.net/xy/pokemon/577.png"
};

var duosion = {
    name: "Duosion",
    dex: 578,
    type: "Psychic",
    ability: "Overcoat/Magic Guard/Regenerator",
    wiki: "http://www.serebii.net/pokedex-xy/578.shtml",
    image: "http://www.serebii.net/xy/pokemon/578.png"
};

var reuniclus = {
    name: "Reuniclus",
    dex: 579,
    type: "Psychic",
    ability: "Overcoat/Magic Guard/Regenerator",
    wiki: "http://www.serebii.net/pokedex-xy/579.shtml",
    image: "http://www.serebii.net/xy/pokemon/579.png"
};

var ducklett = {
    name: "Ducklett",
    dex: 580,
    type: "Water/Flying",
    ability: "Keen Eye/Big Pecks/Hydration",
    wiki: "http://www.serebii.net/pokedex-xy/580.shtml",
    image: "http://www.serebii.net/xy/pokemon/580.png"
};

var swanna = {
    name: "Swanna",
    dex: 581,
    type: "Water/Flying",
    ability: "Keen Eye/Big Pecks/Hydration",
    wiki: "http://www.serebii.net/pokedex-xy/581.shtml",
    image: "http://www.serebii.net/xy/pokemon/581.png"
};

var vanillite = {
    name: "Vanillite",
    dex: 582,
    type: "Ice",
    ability: "Ice Body/None/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-xy/582.shtml",
    image: "http://www.serebii.net/xy/pokemon/582.png"
};

var vanillish = {
    name: "Vanillish",
    dex: 583,
    type: "Ice",
    ability: "Ice Body/None/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-xy/583.shtml",
    image: "http://www.serebii.net/xy/pokemon/583.png"
};

var vanilluxe = {
    name: "Vanilluxe",
    dex: 584,
    type: "Ice",
    ability: "Ice Body/None/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-xy/584.shtml",
    image: "http://www.serebii.net/xy/pokemon/584.png"
};

var deerling = {
    name: "Deerling",
    dex: 585,
    type: "Normal/Grass",
    ability: "Chlorophyll/Sap Sipper/Serene Grace",
    wiki: "http://www.serebii.net/pokedex-xy/585.shtml",
    image: "http://www.serebii.net/xy/pokemon/585.png"
};

var sawsbuck = {
    name: "Sawsbuck",
    dex: 586,
    type: "Normal/Grass",
    ability: "Chlorophyll/Sap Sipper/Serene Grace",
    wiki: "http://www.serebii.net/pokedex-xy/586.shtml",
    image: "http://www.serebii.net/xy/pokemon/586.png"
};

var emolga = {
    name: "Emolga",
    dex: 587,
    type: "Electric/Flying",
    ability: "Static/None/Motor Drive",
    wiki: "http://www.serebii.net/pokedex-xy/587.shtml",
    image: "http://www.serebii.net/xy/pokemon/587.png"
};

var karrablast = {
    name: "Karrablast",
    dex: 588,
    type: "Bug",
    ability: "Swarm/Shed Skin/No Guard",
    wiki: "http://www.serebii.net/pokedex-xy/588.shtml",
    image: "http://www.serebii.net/xy/pokemon/588.png"
};

var escavalier = {
    name: "Escavalier",
    dex: 589,
    type: "Bug/Steel",
    ability: "Swarm/Shell Armor/Overcoat",
    wiki: "http://www.serebii.net/pokedex-xy/589.shtml",
    image: "http://www.serebii.net/xy/pokemon/589.png"
};

var foongus = {
    name: "Foongus",
    dex: 590,
    type: "Grass/Poison",
    ability: "Effect Spore/None/Regenerator",
    wiki: "http://www.serebii.net/pokedex-xy/590.shtml",
    image: "http://www.serebii.net/xy/pokemon/590.png"
};

var amoonguss = {
    name: "Amoonguss",
    dex: 591,
    type: "Grass/Poison",
    ability: "Effect Spore/None/Regenerator",
    wiki: "http://www.serebii.net/pokedex-xy/591.shtml",
    image: "http://www.serebii.net/xy/pokemon/591.png"
};

var frillish = {
    name: "Frillish",
    dex: 592,
    type: "Water/Ghost",
    ability: "Water Absorb/Cursed Body/Damp",
    wiki: "http://www.serebii.net/pokedex-xy/592.shtml",
    image: "http://www.serebii.net/xy/pokemon/592.png"
};

var jellicent = {
    name: "Jellicent",
    dex: 593,
    type: "Water/Ghost",
    ability: "Water Absorb/Cursed Body/Damp",
    wiki: "http://www.serebii.net/pokedex-xy/593.shtml",
    image: "http://www.serebii.net/xy/pokemon/593.png"
};

var alomomola = {
    name: "Alomomola",
    dex: 594,
    type: "Water",
    ability: "Healer/Hydration/Regenerator",
    wiki: "http://www.serebii.net/pokedex-xy/594.shtml",
    image: "http://www.serebii.net/xy/pokemon/594.png"
};

var joltik = {
    name: "Joltik",
    dex: 595,
    type: "Bug/Electric",
    ability: "Compound Eyes/Unnerve/Swarm",
    wiki: "http://www.serebii.net/pokedex-xy/595.shtml",
    image: "http://www.serebii.net/xy/pokemon/595.png"
};

var galvantula = {
    name: "Galvantula",
    dex: 596,
    type: "Bug/Electric",
    ability: "Compound Eyes/Unnerve/Swarm",
    wiki: "http://www.serebii.net/pokedex-xy/596.shtml",
    image: "http://www.serebii.net/xy/pokemon/596.png"
};

var ferroseed = {
    name: "Ferroseed",
    dex: 597,
    type: "Grass/Steel",
    ability: "Iron Barbs",
    wiki: "http://www.serebii.net/pokedex-xy/597.shtml",
    image: "http://www.serebii.net/xy/pokemon/597.png"
};

var ferrothorn = {
    name: "Ferrothorn",
    dex: 598,
    type: "Grass/Steel",
    ability: "Iron Barbs/None/Anticipation/VI",
    wiki: "http://www.serebii.net/pokedex-xy/598.shtml",
    image: "http://www.serebii.net/xy/pokemon/598.png"
};

var klink = {
    name: "Klink",
    dex: 599,
    type: "Steel",
    ability: "Plus/Minus/Clear Body",
    wiki: "http://www.serebii.net/pokedex-xy/599.shtml",
    image: "http://www.serebii.net/xy/pokemon/599.png"
};

var klang = {
    name: "Klang",
    dex: 600,
    type: "Steel",
    ability: "Plus/Minus/Clear Body",
    wiki: "http://www.serebii.net/pokedex-xy/600.shtml",
    image: "http://www.serebii.net/xy/pokemon/600.png"
};

var klinklang = {
    name: "Klinklang",
    dex: 601,
    type: "Steel",
    ability: "Plus/Minus/Clear Body",
    wiki: "http://www.serebii.net/pokedex-xy/601.shtml",
    image: "http://www.serebii.net/xy/pokemon/601.png"
};

var tynamo = {
    name: "Tynamo",
    dex: 602,
    type: "Electric",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/602.shtml",
    image: "http://www.serebii.net/xy/pokemon/602.png"
};

var eelektrik = {
    name: "Eelektrik",
    dex: 603,
    type: "Electric",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/603.shtml",
    image: "http://www.serebii.net/xy/pokemon/603.png"
};

var eelektross = {
    name: "Eelektross",
    dex: 604,
    type: "Electric",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/604.shtml",
    image: "http://www.serebii.net/xy/pokemon/604.png"
};

var elgyem = {
    name: "Elgyem",
    dex: 605,
    type: "Psychic",
    ability: "Telepathy/Synchronize/Analytic",
    wiki: "http://www.serebii.net/pokedex-xy/605.shtml",
    image: "http://www.serebii.net/xy/pokemon/605.png"
};

var beheeyem = {
    name: "Beheeyem",
    dex: 606,
    type: "Psychic",
    ability: "Telepathy/Synchronize/Analytic",
    wiki: "http://www.serebii.net/pokedex-xy/606.shtml",
    image: "http://www.serebii.net/xy/pokemon/606.png"
};

var litwick = {
    name: "Litwick",
    dex: 607,
    type: "Ghost/Fire",
    ability: "Flash Fire/Flame Body/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-xy/607.shtml",
    image: "http://www.serebii.net/xy/pokemon/607.png"
};

var lampent = {
    name: "Lampent",
    dex: 608,
    type: "Ghost/Fire",
    ability: "Flash Fire/Flame Body/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-xy/608.shtml",
    image: "http://www.serebii.net/xy/pokemon/608.png"
};

var chandelure = {
    name: "Chandelure",
    dex: 609,
    type: "Ghost/Fire",
    ability: "Flash Fire/Flame Body/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-xy/609.shtml",
    image: "http://www.serebii.net/xy/pokemon/609.png"
};

var axew = {
    name: "Axew",
    dex: 610,
    type: "Dragon",
    ability: "Rivalry/Mold Breaker/Unnerve",
    wiki: "http://www.serebii.net/pokedex-xy/610.shtml",
    image: "http://www.serebii.net/xy/pokemon/610.png"
};

var fraxure = {
    name: "Fraxure",
    dex: 611,
    type: "Dragon",
    ability: "Rivalry/Mold Breaker/Unnerve",
    wiki: "http://www.serebii.net/pokedex-xy/611.shtml",
    image: "http://www.serebii.net/xy/pokemon/611.png"
};

var haxorus = {
    name: "Haxorus",
    dex: 612,
    type: "Dragon",
    ability: "Rivalry/Mold Breaker/Unnerve",
    wiki: "http://www.serebii.net/pokedex-xy/612.shtml",
    image: "http://www.serebii.net/xy/pokemon/612.png"
};

var cubchoo = {
    name: "Cubchoo",
    dex: 613,
    type: "Ice",
    ability: "Snow Cloak/None/Rattled",
    wiki: "http://www.serebii.net/pokedex-xy/613.shtml",
    image: "http://www.serebii.net/xy/pokemon/613.png"
};

var beartic = {
    name: "Beartic",
    dex: 614,
    type: "Ice",
    ability: "Snow Cloak/None/Swift Swim",
    wiki: "http://www.serebii.net/pokedex-xy/614.shtml",
    image: "http://www.serebii.net/xy/pokemon/614.png"
};

var cryogonal = {
    name: "Cryogonal",
    dex: 615,
    type: "Ice",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/615.shtml",
    image: "http://www.serebii.net/xy/pokemon/615.png"
};

var shelmet = {
    name: "Shelmet",
    dex: 616,
    type: "Bug",
    ability: "Hydration/Shell Armor/Overcoat",
    wiki: "http://www.serebii.net/pokedex-xy/616.shtml",
    image: "http://www.serebii.net/xy/pokemon/616.png"
};

var accelgor = {
    name: "Accelgor",
    dex: 617,
    type: "Bug",
    ability: "Hydration/Sticky Hold/Unburden",
    wiki: "http://www.serebii.net/pokedex-xy/617.shtml",
    image: "http://www.serebii.net/xy/pokemon/617.png"
};

var stunfisk = {
    name: "Stunfisk",
    dex: 618,
    type: "Ground/Electric",
    ability: "Static/Limber/Sand Veil",
    wiki: "http://www.serebii.net/pokedex-xy/618.shtml",
    image: "http://www.serebii.net/xy/pokemon/618.png"
};

var mienfoo = {
    name: "Mienfoo",
    dex: 619,
    type: "Fighting",
    ability: "Inner Focus/Regenerator/Reckless",
    wiki: "http://www.serebii.net/pokedex-xy/619.shtml",
    image: "http://www.serebii.net/xy/pokemon/619.png"
};

var mienshao = {
    name: "Mienshao",
    dex: 620,
    type: "Fighting",
    ability: "Inner Focus/Regenerator/Reckless",
    wiki: "http://www.serebii.net/pokedex-xy/620.shtml",
    image: "http://www.serebii.net/xy/pokemon/620.png"
};

var druddigon = {
    name: "Druddigon",
    dex: 621,
    type: "Dragon",
    ability: "Rough Skin/Sheer Force/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-xy/621.shtml",
    image: "http://www.serebii.net/xy/pokemon/621.png"
};

var golett = {
    name: "Golett",
    dex: 622,
    type: "Ground/Ghost",
    ability: "Iron Fist/Klutz/No Guard",
    wiki: "http://www.serebii.net/pokedex-xy/622.shtml",
    image: "http://www.serebii.net/xy/pokemon/622.png"
};

var golurk = {
    name: "Golurk",
    dex: 623,
    type: "Ground/Ghost",
    ability: "Iron Fist/Klutz/No Guard",
    wiki: "http://www.serebii.net/pokedex-xy/623.shtml",
    image: "http://www.serebii.net/xy/pokemon/623.png"
};

var pawniard = {
    name: "Pawniard",
    dex: 624,
    type: "Dark/Steel",
    ability: "Defiant/Inner Focus/Pressure",
    wiki: "http://www.serebii.net/pokedex-xy/624.shtml",
    image: "http://www.serebii.net/xy/pokemon/624.png"
};

var bisharp = {
    name: "Bisharp",
    dex: 625,
    type: "Dark/Steel",
    ability: "Defiant/Inner Focus/Pressure",
    wiki: "http://www.serebii.net/pokedex-xy/625.shtml",
    image: "http://www.serebii.net/xy/pokemon/625.png"
};

var bouffalant = {
    name: "Bouffalant",
    dex: 626,
    type: "Normal",
    ability: "Reckless/Sap Sipper/Soundproof",
    wiki: "http://www.serebii.net/pokedex-xy/626.shtml",
    image: "http://www.serebii.net/xy/pokemon/626.png"
};

var rufflet = {
    name: "Rufflet",
    dex: 627,
    type: "Normal/Flying",
    ability: "Keen Eye/Sheer Force/Hustle",
    wiki: "http://www.serebii.net/pokedex-xy/627.shtml",
    image: "http://www.serebii.net/xy/pokemon/627.png"
};

var braviary = {
    name: "Braviary",
    dex: 628,
    type: "Normal/Flying",
    ability: "Keen Eye/Sheer Force/Defiant",
    wiki: "http://www.serebii.net/pokedex-xy/628.shtml",
    image: "http://www.serebii.net/xy/pokemon/628.png"
};

var vullaby = {
    name: "Vullaby",
    dex: 629,
    type: "Dark/Flying",
    ability: "Big Pecks/Overcoat/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-xy/629.shtml",
    image: "http://www.serebii.net/xy/pokemon/629.png"
};

var mandibuzz = {
    name: "Mandibuzz",
    dex: 630,
    type: "Dark/Flying",
    ability: "Big Pecks/Overcoat/Weak Armor",
    wiki: "http://www.serebii.net/pokedex-xy/630.shtml",
    image: "http://www.serebii.net/xy/pokemon/630.png"
};

var heatmor = {
    name: "Heatmor",
    dex: 631,
    type: "Fire",
    ability: "Gluttony/Flash Fire/White Smoke",
    wiki: "http://www.serebii.net/pokedex-xy/631.shtml",
    image: "http://www.serebii.net/xy/pokemon/631.png"
};

var durant = {
    name: "Durant",
    dex: 632,
    type: "Bug/Steel",
    ability: "Swarm/Hustle/Truant",
    wiki: "http://www.serebii.net/pokedex-xy/632.shtml",
    image: "http://www.serebii.net/xy/pokemon/632.png"
};

var deino = {
    name: "Deino",
    dex: 633,
    type: "Dark/Dragon",
    ability: "Hustle",
    wiki: "http://www.serebii.net/pokedex-xy/633.shtml",
    image: "http://www.serebii.net/xy/pokemon/633.png"
};

var zweilous = {
    name: "Zweilous",
    dex: 634,
    type: "Dark/Dragon",
    ability: "Hustle",
    wiki: "http://www.serebii.net/pokedex-xy/634.shtml",
    image: "http://www.serebii.net/xy/pokemon/634.png"
};

var hydreigon = {
    name: "Hydreigon",
    dex: 635,
    type: "Dark/Dragon",
    ability: "Levitate",
    wiki: "http://www.serebii.net/pokedex-xy/635.shtml",
    image: "http://www.serebii.net/xy/pokemon/635.png"
};

var larvesta = {
    name: "Larvesta",
    dex: 636,
    type: "Bug/Fire",
    ability: "Flame Body/None/Swarm",
    wiki: "http://www.serebii.net/pokedex-xy/636.shtml",
    image: "http://www.serebii.net/xy/pokemon/636.png"
};

var volcarona = {
    name: "Volcarona",
    dex: 637,
    type: "Bug/Fire",
    ability: "Flame Body/None/Swarm",
    wiki: "http://www.serebii.net/pokedex-xy/637.shtml",
    image: "http://www.serebii.net/xy/pokemon/637.png"
};

var cobalion = {
    name: "Cobalion",
    dex: 638,
    type: "Steel/Fighting",
    ability: "Justified",
    wiki: "http://www.serebii.net/pokedex-xy/638.shtml",
    image: "http://www.serebii.net/xy/pokemon/638.png"
};

var terrakion = {
    name: "Terrakion",
    dex: 639,
    type: "Rock/Fighting",
    ability: "Justified",
    wiki: "http://www.serebii.net/pokedex-xy/639.shtml",
    image: "http://www.serebii.net/xy/pokemon/639.png"
};

var virizion = {
    name: "Virizion",
    dex: 640,
    type: "Grass/Fighting",
    ability: "Justified",
    wiki: "http://www.serebii.net/pokedex-xy/640.shtml",
    image: "http://www.serebii.net/xy/pokemon/640.png"
};

var tornadus = {
    name: "Tornadus",
    dex: 641,
    type: "Flying",
    ability: "Prankster/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-xy/641.shtml",
    image: "http://www.serebii.net/xy/pokemon/641.png"
};

var thundurus = {
    name: "Thundurus",
    dex: 642,
    type: "Electric/Flying",
    ability: "Prankster/None/Defiant",
    wiki: "http://www.serebii.net/pokedex-xy/642.shtml",
    image: "http://www.serebii.net/xy/pokemon/642.png"
};

var reshiram = {
    name: "Reshiram",
    dex: 643,
    type: "Dragon/Fire",
    ability: "Turboblaze",
    wiki: "http://www.serebii.net/pokedex-xy/643.shtml",
    image: "http://www.serebii.net/xy/pokemon/643.png"
};

var zekrom = {
    name: "Zekrom",
    dex: 644,
    type: "Dragon/Electric",
    ability: "Teravolt",
    wiki: "http://www.serebii.net/pokedex-xy/644.shtml",
    image: "http://www.serebii.net/xy/pokemon/644.png"
};

var landorus = {
    name: "Landorus",
    dex: 645,
    type: "Ground/Flying",
    ability: "Sand Force/None/Sheer Force",
    wiki: "http://www.serebii.net/pokedex-xy/645.shtml",
    image: "http://www.serebii.net/xy/pokemon/645.png"
};

var kyurem = {
    name: "Kyurem",
    dex: 646,
    type: "Dragon/Ice",
    ability: "Pressure",
    wiki: "http://www.serebii.net/pokedex-xy/646.shtml",
    image: "http://www.serebii.net/xy/pokemon/646.png"
};

var keldeo = {
    name: "Keldeo",
    dex: 647,
    type: "Water/Fighting",
    ability: "Justified",
    wiki: "http://www.serebii.net/pokedex-xy/647.shtml",
    image: "http://www.serebii.net/xy/pokemon/647.png"
};

var meloetta = {
    name: "Meloetta",
    dex: 648,
    type: "Normal/Psychic",
    ability: "Serene Grace",
    wiki: "http://www.serebii.net/pokedex-xy/648.shtml",
    image: "http://www.serebii.net/xy/pokemon/648.png"
};

var genesect = {
    name: "Genesect",
    dex: 649,
    type: "Bug/Steel",
    ability: "Download",
    wiki: "http://www.serebii.net/pokedex-xy/649.shtml",
    image: "http://www.serebii.net/xy/pokemon/649.png"
};

var chespin = {
    name: "Chespin",
    dex: 650,
    type: "Grass",
    ability: "Overgrow/None/Bulletproof",
    wiki: "http://www.serebii.net/pokedex-xy/650.shtml",
    image: "http://www.serebii.net/xy/pokemon/650.png"
};

var quilladin = {
    name: "Quilladin",
    dex: 651,
    type: "Grass",
    ability: "Overgrow/None/Bulletproof",
    wiki: "http://www.serebii.net/pokedex-xy/651.shtml",
    image: "http://www.serebii.net/xy/pokemon/651.png"
};

var chesnaught = {
    name: "Chesnaught",
    dex: 652,
    type: "Grass/Fighting",
    ability: "Overgrow/None/Bulletproof",
    wiki: "http://www.serebii.net/pokedex-xy/652.shtml",
    image: "http://www.serebii.net/xy/pokemon/652.png"
};

var fennekin = {
    name: "Fennekin",
    dex: 653,
    type: "Fire",
    ability: "Blaze/None/Magician",
    wiki: "http://www.serebii.net/pokedex-xy/653.shtml",
    image: "http://www.serebii.net/xy/pokemon/653.png"
};

var braixen = {
    name: "Braixen",
    dex: 654,
    type: "Fire",
    ability: "Blaze/None/Magician",
    wiki: "http://www.serebii.net/pokedex-xy/654.shtml",
    image: "http://www.serebii.net/xy/pokemon/654.png"
};

var delphox = {
    name: "Delphox",
    dex: 655,
    type: "Fire/Psychic",
    ability: "Blaze/None/Magician",
    wiki: "http://www.serebii.net/pokedex-xy/655.shtml",
    image: "http://www.serebii.net/xy/pokemon/655.png"
};

var froakie = {
    name: "Froakie",
    dex: 656,
    type: "Water",
    ability: "Torrent/None/Protean",
    wiki: "http://www.serebii.net/pokedex-xy/656.shtml",
    image: "http://www.serebii.net/xy/pokemon/656.png"
};

var frogadier = {
    name: "Frogadier",
    dex: 657,
    type: "Water",
    ability: "Torrent/None/Protean",
    wiki: "http://www.serebii.net/pokedex-xy/657.shtml",
    image: "http://www.serebii.net/xy/pokemon/657.png"
};

var greninja = {
    name: "Greninja",
    dex: 658,
    type: "Water/Dark",
    ability: "Torrent/None/Protean",
    wiki: "http://www.serebii.net/pokedex-xy/658.shtml",
    image: "http://www.serebii.net/xy/pokemon/658.png"
};

var bunnelby = {
    name: "Bunnelby",
    dex: 659,
    type: "Normal",
    ability: "Pickup/Cheek Pouch/Huge Power",
    wiki: "http://www.serebii.net/pokedex-xy/659.shtml",
    image: "http://www.serebii.net/xy/pokemon/659.png"
};

var diggersby = {
    name: "Diggersby",
    dex: 660,
    type: "Normal/Ground",
    ability: "Pickup/Cheek Pouch/Huge Power",
    wiki: "http://www.serebii.net/pokedex-xy/660.shtml",
    image: "http://www.serebii.net/xy/pokemon/660.png"
};

var fletchling = {
    name: "Fletchling",
    dex: 661,
    type: "Normal/Flying",
    ability: "Big Pecks/None/Gale Wings",
    wiki: "http://www.serebii.net/pokedex-xy/661.shtml",
    image: "http://www.serebii.net/xy/pokemon/661.png"
};

var fletchinder = {
    name: "Fletchinder",
    dex: 662,
    type: "Fire/Flying",
    ability: "Flame Body/None/Gale Wings",
    wiki: "http://www.serebii.net/pokedex-xy/662.shtml",
    image: "http://www.serebii.net/xy/pokemon/662.png"
};

var talonflame = {
    name: "Talonflame",
    dex: 663,
    type: "Fire/Flying",
    ability: "Flame Body/None/ Gale Wings",
    wiki: "http://www.serebii.net/pokedex-xy/663.shtml",
    image: "http://www.serebii.net/xy/pokemon/663.png"
};

var scatterbug = {
    name: "Scatterbug",
    dex: 664,
    type: "Bug",
    ability: "Shield Dust/Compound Eyes/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-xy/664.shtml",
    image: "http://www.serebii.net/xy/pokemon/664.png"
};

var spewpa = {
    name: "Spewpa",
    dex: 665,
    type: "Bug",
    ability: "Shed Skin/None/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-xy/665.shtml",
    image: "http://www.serebii.net/xy/pokemon/665.png"
};

var vivillon = {
    name: "Vivillon",
    dex: 666,
    type: "Bug/Flying",
    ability: "Shield Dust/Compound Eyes/Friend Guard",
    wiki: "http://www.serebii.net/pokedex-xy/666.shtml",
    image: "http://www.serebii.net/xy/pokemon/666.png"
};

var litleo = {
    name: "Litleo",
    dex: 667,
    type: "Fire/Normal",
    ability: "Rivalry/Unnerve/Moxie",
    wiki: "http://www.serebii.net/pokedex-xy/667.shtml",
    image: "http://www.serebii.net/xy/pokemon/667.png"
};

var pyroar = {
    name: "Pyroar",
    dex: 668,
    type: "Fire/Normal",
    ability: "Rivalry/Unnerve/Moxie",
    wiki: "http://www.serebii.net/pokedex-xy/668.shtml",
    image: "http://www.serebii.net/xy/pokemon/668.png"
};

var flabébé = {
    name: "Flabébé",
    dex: 669,
    type: "Fairy",
    ability: "Flower Veil/None/Symbiosis",
    wiki: "http://www.serebii.net/pokedex-xy/669.shtml",
    image: "http://www.serebii.net/xy/pokemon/669.png"
};

var floette = {
    name: "Floette",
    dex: 670,
    type: "Fairy",
    ability: "Flower Veil/None/Symbiosis",
    wiki: "http://www.serebii.net/pokedex-xy/670.shtml",
    image: "http://www.serebii.net/xy/pokemon/670.png"
};

var florges = {
    name: "Florges",
    dex: 671,
    type: "Fairy",
    ability: "Flower Veil/None/Symbiosis",
    wiki: "http://www.serebii.net/pokedex-xy/671.shtml",
    image: "http://www.serebii.net/xy/pokemon/671.png"
};

var skiddo = {
    name: "Skiddo",
    dex: 672,
    type: "Grass",
    ability: "Sap Sipper/None/Grass Pelt",
    wiki: "http://www.serebii.net/pokedex-xy/672.shtml",
    image: "http://www.serebii.net/xy/pokemon/672.png"
};

var gogoat = {
    name: "Gogoat",
    dex: 673,
    type: "Grass",
    ability: "Sap Sipper/None/Grass Pelt",
    wiki: "http://www.serebii.net/pokedex-xy/673.shtml",
    image: "http://www.serebii.net/xy/pokemon/673.png"
};

var pancham = {
    name: "Pancham",
    dex: 674,
    type: "Fighting",
    ability: "Iron Fist/Mold Breaker/Scrappy",
    wiki: "http://www.serebii.net/pokedex-xy/674.shtml",
    image: "http://www.serebii.net/xy/pokemon/674.png"
};

var pangoro = {
    name: "Pangoro",
    dex: 675,
    type: "Fighting/Dark",
    ability: "Iron Fist/Mold Breaker/Scrappy",
    wiki: "http://www.serebii.net/pokedex-xy/675.shtml",
    image: "http://www.serebii.net/xy/pokemon/675.png"
};

var furfrou = {
    name: "Furfrou",
    dex: 676,
    type: "Normal",
    ability: "Fur Coat",
    wiki: "http://www.serebii.net/pokedex-xy/676.shtml",
    image: "http://www.serebii.net/xy/pokemon/676.png"
};

var espurr = {
    name: "Espurr",
    dex: 677,
    type: "Psychic",
    ability: "Keen Eye/Infiltrator/Own Tempo",
    wiki: "http://www.serebii.net/pokedex-xy/677.shtml",
    image: "http://www.serebii.net/xy/pokemon/677.png"
};

var meowstic = {
    name: "Meowstic",
    dex: 678,
    type: "Psychic",
    ability: "Keen Eye/Infiltrator/Prankster",
    wiki: "http://www.serebii.net/pokedex-xy/678.shtml",
    image: "http://www.serebii.net/xy/pokemon/678.png"
};

var honedge = {
    name: "Honedge",
    dex: 679,
    type: "Steel/Ghost",
    ability: "No Guard",
    wiki: "http://www.serebii.net/pokedex-xy/679.shtml",
    image: "http://www.serebii.net/xy/pokemon/679.png"
};

var doublade = {
    name: "Doublade",
    dex: 680,
    type: "Steel/Ghost",
    ability: "No Guard",
    wiki: "http://www.serebii.net/pokedex-xy/680.shtml",
    image: "http://www.serebii.net/xy/pokemon/680.png"
};

var aegislash = {
    name: "Aegislash",
    dex: 681,
    type: "Steel/Ghost",
    ability: "Stance Change",
    wiki: "http://www.serebii.net/pokedex-xy/681.shtml",
    image: "http://www.serebii.net/xy/pokemon/681.png"
};

var spritzee = {
    name: "Spritzee",
    dex: 682,
    type: "Fairy",
    ability: "Healer/None/Aroma Veil",
    wiki: "http://www.serebii.net/pokedex-xy/682.shtml",
    image: "http://www.serebii.net/xy/pokemon/682.png"
};

var aromatisse = {
    name: "Aromatisse",
    dex: 683,
    type: "Fairy",
    ability: "Healer/None/Aroma Veil",
    wiki: "http://www.serebii.net/pokedex-xy/683.shtml",
    image: "http://www.serebii.net/xy/pokemon/683.png"
};

var swirlix = {
    name: "Swirlix",
    dex: 684,
    type: "Fairy",
    ability: "Sweet Veil/None/Unburden",
    wiki: "http://www.serebii.net/pokedex-xy/684.shtml",
    image: "http://www.serebii.net/xy/pokemon/684.png"
};

var slurpuff = {
    name: "Slurpuff",
    dex: 685,
    type: "Fairy",
    ability: "Sweet Veil/None/Unburden",
    wiki: "http://www.serebii.net/pokedex-xy/685.shtml",
    image: "http://www.serebii.net/xy/pokemon/685.png"
};

var inkay = {
    name: "Inkay",
    dex: 686,
    type: "Dark/Psychic",
    ability: "Contrary/Suction Cups/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-xy/686.shtml",
    image: "http://www.serebii.net/xy/pokemon/686.png"
};

var malamar = {
    name: "Malamar",
    dex: 687,
    type: "Dark/Psychic",
    ability: "Contrary/Suction Cups/Infiltrator",
    wiki: "http://www.serebii.net/pokedex-xy/687.shtml",
    image: "http://www.serebii.net/xy/pokemon/687.png"
};

var binacle = {
    name: "Binacle",
    dex: 688,
    type: "Rock/Water",
    ability: "Sniper/Tough Claws/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-xy/688.shtml",
    image: "http://www.serebii.net/xy/pokemon/688.png"
};

var barbaracle = {
    name: "Barbaracle",
    dex: 689,
    type: "Rock/Water",
    ability: "Sniper/Tough Claws/Pickpocket",
    wiki: "http://www.serebii.net/pokedex-xy/689.shtml",
    image: "http://www.serebii.net/xy/pokemon/689.png"
};

var skrelp = {
    name: "Skrelp",
    dex: 690,
    type: "Poison/Water",
    ability: "Poison Point/Poison Touch/Adaptability",
    wiki: "http://www.serebii.net/pokedex-xy/690.shtml",
    image: "http://www.serebii.net/xy/pokemon/690.png"
};

var dragalge = {
    name: "Dragalge",
    dex: 691,
    type: "Poison/Dragon",
    ability: "Poison Point/Poison Touch/Adaptability",
    wiki: "http://www.serebii.net/pokedex-xy/691.shtml",
    image: "http://www.serebii.net/xy/pokemon/691.png"
};

var clauncher = {
    name: "Clauncher",
    dex: 692,
    type: "Water",
    ability: "Mega Launcher",
    wiki: "http://www.serebii.net/pokedex-xy/692.shtml",
    image: "http://www.serebii.net/xy/pokemon/692.png"
};

var clawitzer = {
    name: "Clawitzer",
    dex: 693,
    type: "Water",
    ability: "Mega Launcher",
    wiki: "http://www.serebii.net/pokedex-xy/693.shtml",
    image: "http://www.serebii.net/xy/pokemon/693.png"
};

var helioptile = {
    name: "Helioptile",
    dex: 694,
    type: "Electric/Normal",
    ability: "Dry Skin/Sand Veil/Solar Power",
    wiki: "http://www.serebii.net/pokedex-xy/694.shtml",
    image: "http://www.serebii.net/xy/pokemon/694.png"
};

var heliolisk = {
    name: "Heliolisk",
    dex: 695,
    type: "Electric/Normal",
    ability: "Dry Skin/Sand Veil/Solar Power",
    wiki: "http://www.serebii.net/pokedex-xy/695.shtml",
    image: "http://www.serebii.net/xy/pokemon/695.png"
};

var tyrunt = {
    name: "Tyrunt",
    dex: 696,
    type: "Rock/Dragon",
    ability: "Strong Jaw/None/Sturdy",
    wiki: "http://www.serebii.net/pokedex-xy/696.shtml",
    image: "http://www.serebii.net/xy/pokemon/696.png"
};

var tyrantrum = {
    name: "Tyrantrum",
    dex: 697,
    type: "Rock/Dragon",
    ability: "Strong Jaw/None/Rock Head",
    wiki: "http://www.serebii.net/pokedex-xy/697.shtml",
    image: "http://www.serebii.net/xy/pokemon/697.png"
};

var amaura = {
    name: "Amaura",
    dex: 698,
    type: "Rock/Ice",
    ability: "Refrigerate/None/Snow Warning",
    wiki: "http://www.serebii.net/pokedex-xy/698.shtml",
    image: "http://www.serebii.net/xy/pokemon/698.png"
};

var aurorus = {
    name: "Aurorus",
    dex: 699,
    type: "Rock/Ice",
    ability: "Refrigerate/None/Snow Warning",
    wiki: "http://www.serebii.net/pokedex-xy/699.shtml",
    image: "http://www.serebii.net/xy/pokemon/699.png"
};

var sylveon = {
    name: "Sylveon",
    dex: 700,
    type: "Fairy",
    ability: "Cute Charm/None/Pixilate",
    wiki: "http://www.serebii.net/pokedex-xy/700.shtml",
    image: "http://www.serebii.net/xy/pokemon/700.png"
};

var hawlucha = {
    name: "Hawlucha",
    dex: 701,
    type: "Fighting/Flying",
    ability: "Limber/Unburden/Mold Breaker",
    wiki: "http://www.serebii.net/pokedex-xy/701.shtml",
    image: "http://www.serebii.net/xy/pokemon/701.png"
};

var dedenne = {
    name: "Dedenne",
    dex: 702,
    type: "Electric/Fairy",
    ability: "Cheek Pouch/Pickup/Plus",
    wiki: "http://www.serebii.net/pokedex-xy/702.shtml",
    image: "http://www.serebii.net/xy/pokemon/702.png"
};

var carbink = {
    name: "Carbink",
    dex: 703,
    type: "Rock/Fairy",
    ability: "Clear Body/None/Sturdy",
    wiki: "http://www.serebii.net/pokedex-xy/703.shtml",
    image: "http://www.serebii.net/xy/pokemon/703.png"
};

var goomy = {
    name: "Goomy",
    dex: 704,
    type: "Dragon",
    ability: "Sap Sipper/Hydration/Gooey",
    wiki: "http://www.serebii.net/pokedex-xy/704.shtml",
    image: "http://www.serebii.net/xy/pokemon/704.png"
};

var sliggoo = {
    name: "Sliggoo",
    dex: 705,
    type: "Dragon",
    ability: "Sap Sipper/Hydration/Gooey",
    wiki: "http://www.serebii.net/pokedex-xy/705.shtml",
    image: "http://www.serebii.net/xy/pokemon/705.png"
};

var goodra = {
    name: "Goodra",
    dex: 706,
    type: "Dragon",
    ability: "Sap Sipper/Hydration/Gooey",
    wiki: "http://www.serebii.net/pokedex-xy/706.shtml",
    image: "http://www.serebii.net/xy/pokemon/706.png"
};

var klefki = {
    name: "Klefki",
    dex: 707,
    type: "Steel/Fairy",
    ability: "Prankster/None/Magician",
    wiki: "http://www.serebii.net/pokedex-xy/707.shtml",
    image: "http://www.serebii.net/xy/pokemon/707.png"
};

var phantump = {
    name: "Phantump",
    dex: 708,
    type: "Ghost/Grass",
    ability: "Natural Cure/Frisk/Harvest",
    wiki: "http://www.serebii.net/pokedex-xy/708.shtml",
    image: "http://www.serebii.net/xy/pokemon/708.png"
};

var trevenant = {
    name: "Trevenant",
    dex: 709,
    type: "Ghost/Grass",
    ability: "Natural Cure/Frisk/Harvest",
    wiki: "http://www.serebii.net/pokedex-xy/709.shtml",
    image: "http://www.serebii.net/xy/pokemon/709.png"
};

var pumpkaboo = {
    name: "Pumpkaboo",
    dex: 710,
    type: "Ghost/Grass",
    ability: "Pickup/Frisk/Insomnia",
    wiki: "http://www.serebii.net/pokedex-xy/710.shtml",
    image: "http://www.serebii.net/xy/pokemon/710.png"
};

var gourgeist = {
    name: "Gourgeist",
    dex: 711,
    type: "Ghost/Grass",
    ability: "Pickup/Frisk/Insomnia",
    wiki: "http://www.serebii.net/pokedex-xy/711.shtml",
    image: "http://www.serebii.net/xy/pokemon/711.png"
};

var bergmite = {
    name: "Bergmite",
    dex: 712,
    type: "Ice",
    ability: "Own Tempo/Ice Body/Sturdy",
    wiki: "http://www.serebii.net/pokedex-xy/712.shtml",
    image: "http://www.serebii.net/xy/pokemon/712.png"
};

var avalugg = {
    name: "Avalugg",
    dex: 713,
    type: "Ice",
    ability: "Own Tempo/Ice Body/Sturdy",
    wiki: "http://www.serebii.net/pokedex-xy/713.shtml",
    image: "http://www.serebii.net/xy/pokemon/713.png"
};

var noibat = {
    name: "Noibat",
    dex: 714,
    type: "Flying/Dragon",
    ability: "Frisk/Infiltrator/Telepathy",
    wiki: "http://www.serebii.net/pokedex-xy/714.shtml",
    image: "http://www.serebii.net/xy/pokemon/714.png"
};

var noivern = {
    name: "Noivern",
    dex: 715,
    type: "Flying/Dragon",
    ability: "Frisk/Infiltrator/Telepathy",
    wiki: "http://www.serebii.net/pokedex-xy/715.shtml",
    image: "http://www.serebii.net/xy/pokemon/715.png"
};

var xerneas = {
    name: "Xerneas",
    dex: 716,
    type: "Fairy",
    ability: "Fairy Aura",
    wiki: "http://www.serebii.net/pokedex-xy/716.shtml",
    image: "http://www.serebii.net/xy/pokemon/716.png"
};

var yveltal = {
    name: "Yveltal",
    dex: 717,
    type: "Dark/Flying",
    ability: "Dark Aura",
    wiki: "http://www.serebii.net/pokedex-xy/717.shtml",
    image: "http://www.serebii.net/xy/pokemon/717.png"
};

var zygarde = {
    name: "Zygarde",
    dex: 718,
    type: "Dragon/Ground",
    ability: "Aura Break/Power Construct",
    wiki: "http://www.serebii.net/pokedex-xy/718.shtml",
    image: "http://www.serebii.net/xy/pokemon/718.png"
};

var diancie = {
    name: "Diancie",
    dex: 719,
    type: "Rock/Fairy",
    ability: "Clear Body",
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
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/pound.shtml"
};

var karate_chop = {
    name: "Karate Chop",
    type: "Fighting",
    cat: "Physical",
    power: 50,
    pp: 25,
    acc: 100,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/karatechop.shtml"
};

var double_slap = {
    name: "Double Slap",
    type: "Normal",
    cat: "Physical",
    power: 15,
    pp: 10,
    acc: 85,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/doubleslap.shtml"
};

var comet_punch = {
    name: "Comet Punch",
    type: "Normal",
    cat: "Physical",
    power: 18,
    pp: 15,
    acc: 85,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/cometpunch.shtml"
};

var mega_punch = {
    name: "Mega Punch",
    type: "Normal",
    cat: "Physical",
    power: 80,
    pp: 20,
    acc: 85,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/megapunch.shtml"
};

var pay_day = {
    name: "Pay Day",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 20,
    acc: 100,
    effect: "A small amount of money is gained after the battle resolves.",
    wiki: "http://www.serebii.net/attackdex-xy/payday.shtml"
};

var fire_punch = {
    name: "Fire Punch",
    type: "Fire",
    cat: "Physical",
    power: 75,
    pp: 15,
    acc: 100,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/firepunch.shtml"
};

var ice_punch = {
    name: "Ice Punch",
    type: "Ice",
    cat: "Physical",
    power: 75,
    pp: 15,
    acc: 100,
    effect: "May freeze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/icepunch.shtml"
};

var thunder_punch = {
    name: "Thunder Punch",
    type: "Electric",
    cat: "Physical",
    power: 75,
    pp: 15,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/thunderpunch.shtml"
};

var scratch = {
    name: "Scratch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/scratch.shtml"
};

var vice_grip = {
    name: "Vice Grip",
    type: "Normal",
    cat: "Physical",
    power: 55,
    pp: 30,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/vicegrip.shtml"
};

var guillotine = {
    name: "Guillotine",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "One-Hit-KO, if it hits.",
    wiki: "http://www.serebii.net/attackdex-xy/guillotine.shtml"
};

var razor_wind = {
    name: "Razor Wind",
    type: "Normal",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Charges on first turn, attacks on second. High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/razorwind.shtml"
};

var swords_dance = {
    name: "Swords Dance",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Sharply raises user's Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/swordsdance.shtml"
};

var cut = {
    name: "Cut",
    type: "Normal",
    cat: "Physical",
    power: 50,
    pp: 30,
    acc: 95,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/cut.shtml"
};

var gust = {
    name: "Gust",
    type: "Flying",
    cat: "Special",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "Hits Pokémon using Fly/Bounce with double power.",
    wiki: "http://www.serebii.net/attackdex-xy/gust.shtml"
};

var wing_attack = {
    name: "Wing Attack",
    type: "Flying",
    cat: "Physical",
    power: 60,
    pp: 35,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/wingattack.shtml"
};

var whirlwind = {
    name: "Whirlwind",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "In battles, the opponent switches. In the wild, the Pokémon runs.",
    wiki: "http://www.serebii.net/attackdex-xy/whirlwind.shtml"
};

var fly = {
    name: "Fly",
    type: "Flying",
    cat: "Physical",
    power: 90,
    pp: 15,
    acc: 95,
    effect: "Flies up on first turn, attacks on second turn.",
    wiki: "http://www.serebii.net/attackdex-xy/fly.shtml"
};

var bind = {
    name: "Bind",
    type: "Normal",
    cat: "Physical",
    power: 15,
    pp: 20,
    acc: 85,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/bind.shtml"
};

var slam = {
    name: "Slam",
    type: "Normal",
    cat: "Physical",
    power: 80,
    pp: 20,
    acc: 75,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/slam.shtml"
};

var vine_whip = {
    name: "Vine Whip",
    type: "Grass",
    cat: "Physical",
    power: 45,
    pp: 25,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/vinewhip.shtml"
};

var stomp = {
    name: "Stomp",
    type: "Normal",
    cat: "Physical",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/stomp.shtml"
};

var double_kick = {
    name: "Double Kick",
    type: "Fighting",
    cat: "Physical",
    power: 30,
    pp: 30,
    acc: 100,
    effect: "Hits twice in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/doublekick.shtml"
};

var mega_kick = {
    name: "Mega Kick",
    type: "Normal",
    cat: "Physical",
    power: 120,
    pp: 5,
    acc: 75,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/megakick.shtml"
};

var jump_kick = {
    name: "Jump Kick",
    type: "Fighting",
    cat: "Physical",
    power: 100,
    pp: 10,
    acc: 95,
    effect: "If it misses, the user loses half their HP.",
    wiki: "http://www.serebii.net/attackdex-xy/jumpkick.shtml"
};

var rolling_kick = {
    name: "Rolling Kick",
    type: "Fighting",
    cat: "Physical",
    power: 60,
    pp: 15,
    acc: 85,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/rollingkick.shtml"
};

var sand_attack = {
    name: "Sand Attack",
    type: "Ground",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Lowers opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-xy/sandattack.shtml"
};

var headbutt = {
    name: "Headbutt",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 15,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/headbutt.shtml"
};

var horn_attack = {
    name: "Horn Attack",
    type: "Normal",
    cat: "Physical",
    power: 65,
    pp: 25,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/hornattack.shtml"
};

var fury_attack = {
    name: "Fury Attack",
    type: "Normal",
    cat: "Physical",
    power: 15,
    pp: 20,
    acc: 85,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/furyattack.shtml"
};

var horn_drill = {
    name: "Horn Drill",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "One-Hit-KO, if it hits.",
    wiki: "http://www.serebii.net/attackdex-xy/horndrill.shtml"
};

var tackle = {
    name: "Tackle",
    type: "Normal",
    cat: "Physical",
    power: 50,
    pp: 35,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/tackle.shtml"
};

var body_slam = {
    name: "Body Slam",
    type: "Normal",
    cat: "Physical",
    power: 85,
    pp: 15,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/bodyslam.shtml"
};

var wrap = {
    name: "Wrap",
    type: "Normal",
    cat: "Physical",
    power: 15,
    pp: 20,
    acc: 90,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/wrap.shtml"
};

var take_down = {
    name: "Take Down",
    type: "Normal",
    cat: "Physical",
    power: 90,
    pp: 20,
    acc: 85,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-xy/takedown.shtml"
};

var thrash = {
    name: "Thrash",
    type: "Normal",
    cat: "Physical",
    power: 120,
    pp: 10,
    acc: 100,
    effect: "User attacks for 2-3 turns but then becomes confused.",
    wiki: "http://www.serebii.net/attackdex-xy/thrash.shtml"
};

var double_edge = {
    name: "Double_edge",
    type: "Normal",
    cat: "Physical",
    power: 120,
    pp: 15,
    acc: 100,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-xy/double_edge.shtml"
};

var tail_whip = {
    name: "Tail Whip",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: 100,
    effect: "Lowers opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/tailwhip.shtml"
};

var poison_sting = {
    name: "Poison Sting",
    type: "Poison",
    cat: "Physical",
    power: 15,
    pp: 35,
    acc: 100,
    effect: "May poison the opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/poisonsting.shtml"
};

var twineedle = {
    name: "Twineedle",
    type: "Bug",
    cat: "Physical",
    power: 25,
    pp: 20,
    acc: 100,
    effect: "Hits twice in one turn. May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/twineedle.shtml"
};

var pin_missile = {
    name: "Pin Missile",
    type: "Bug",
    cat: "Physical",
    power: 25,
    pp: 20,
    acc: 95,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/pinmissile.shtml"
};

var leer = {
    name: "Leer",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: 100,
    effect: "Lowers opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/leer.shtml"
};

var bite = {
    name: "Bite",
    type: "Dark",
    cat: "Physical",
    power: 60,
    pp: 25,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/bite.shtml"
};

var growl = {
    name: "Growl",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 100,
    effect: "Lowers opponent's Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/growl.shtml"
};

var roar = {
    name: "Roar",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "In battles, the opponent switches. In the wild, the Pokémon runs.",
    wiki: "http://www.serebii.net/attackdex-xy/roar.shtml"
};

var sing = {
    name: "Sing",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 55,
    effect: "Puts opponent to sleep.",
    wiki: "http://www.serebii.net/attackdex-xy/sing.shtml"
};

var supersonic = {
    name: "Supersonic",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 55,
    effect: "Confuses opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/supersonic.shtml"
};

var sonic_boom = {
    name: "Sonic Boom",
    type: "Normal",
    cat: "Special",
    power: undefined,
    pp: 20,
    acc: 90,
    effect: "Always inflicts 20 HP.",
    wiki: "http://www.serebii.net/attackdex-xy/sonicboom.shtml"
};

var disable = {
    name: "Disable",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Opponent can't use its last attack for a few turns.",
    wiki: "http://www.serebii.net/attackdex-xy/disable.shtml"
};

var acid = {
    name: "Acid",
    type: "Poison",
    cat: "Special",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/acid.shtml"
};

var ember = {
    name: "Ember",
    type: "Fire",
    cat: "Special",
    power: 40,
    pp: 25,
    acc: 100,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/ember.shtml"
};

var flamethrower = {
    name: "Flamethrower",
    type: "Fire",
    cat: "Special",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/flamethrower.shtml"
};

var mist = {
    name: "Mist",
    type: "Ice",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "User's stats cannot be changed for a period of time.",
    wiki: "http://www.serebii.net/attackdex-xy/mist.shtml"
};

var water_gun = {
    name: "Water Gun",
    type: "Water",
    cat: "Special",
    power: 40,
    pp: 25,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/watergun.shtml"
};

var hydro_pump = {
    name: "Hydro Pump",
    type: "Water",
    cat: "Special",
    power: 110,
    pp: 5,
    acc: 80,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/hydropump.shtml"
};

var surf = {
    name: "Surf",
    type: "Water",
    cat: "Special",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "Hits all adjacent Pokémon.",
    wiki: "http://www.serebii.net/attackdex-xy/surf.shtml"
};

var ice_beam = {
    name: "Ice Beam",
    type: "Ice",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "May freeze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/icebeam.shtml"
};

var blizzard = {
    name: "Blizzard",
    type: "Ice",
    cat: "Special",
    power: 110,
    pp: 5,
    acc: 70,
    effect: "May freeze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/blizzard.shtml"
};

var psybeam = {
    name: "Psybeam",
    type: "Psychic",
    cat: "Special",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "May confuse opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/psybeam.shtml"
};

var bubble_beam = {
    name: "Bubble Beam",
    type: "Water",
    cat: "Special",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "May lower opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/bubblebeam.shtml"
};

var aurora_beam = {
    name: "Aurora Beam",
    type: "Ice",
    cat: "Special",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "May lower opponent's Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/aurorabeam.shtml"
};

var hyper_beam = {
    name: "Hyper Beam",
    type: "Normal",
    cat: "Special",
    power: 150,
    pp: 5,
    acc: 90,
    effect: "User must recharge next turn.",
    wiki: "http://www.serebii.net/attackdex-xy/hyperbeam.shtml"
};

var peck = {
    name: "Peck",
    type: "Flying",
    cat: "Physical",
    power: 35,
    pp: 35,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/peck.shtml"
};

var drill_peck = {
    name: "Drill Peck",
    type: "Flying",
    cat: "Physical",
    power: 80,
    pp: 20,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/drillpeck.shtml"
};

var submission = {
    name: "Submission",
    type: "Fighting",
    cat: "Physical",
    power: 80,
    pp: 25,
    acc: 80,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-xy/submission.shtml"
};

var low_kick = {
    name: "Low Kick",
    type: "Fighting",
    cat: "Physical",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "The heavier the opponent, the stronger the attack.",
    wiki: "http://www.serebii.net/attackdex-xy/lowkick.shtml"
};

var counter = {
    name: "Counter",
    type: "Fighting",
    cat: "Physical",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "When hit by a Physical Attack, user strikes back with 2x power.",
    wiki: "http://www.serebii.net/attackdex-xy/counter.shtml"
};

var seismic_toss = {
    name: "Seismic Toss",
    type: "Fighting",
    cat: "Physical",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Inflicts damage equal to user's level.",
    wiki: "http://www.serebii.net/attackdex-xy/seismictoss.shtml"
};

var strength = {
    name: "Strength",
    type: "Normal",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/strength.shtml"
};

var absorb = {
    name: "Absorb",
    type: "Grass",
    cat: "Special",
    power: 20,
    pp: 25,
    acc: 100,
    effect: "User recovers half the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/absorb.shtml"
};

var mega_drain = {
    name: "Mega Drain",
    type: "Grass",
    cat: "Special",
    power: 40,
    pp: 15,
    acc: 100,
    effect: "User recovers half the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/megadrain.shtml"
};

var leech_seed = {
    name: "Leech Seed",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 90,
    effect: "User steals HP from opponent each turn.",
    wiki: "http://www.serebii.net/attackdex-xy/leechseed.shtml"
};

var growth = {
    name: "Growth",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Attack and Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/growth.shtml"
};

var razor_leaf = {
    name: "Razor Leaf",
    type: "Grass",
    cat: "Physical",
    power: 55,
    pp: 25,
    acc: 95,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/razorleaf.shtml"
};

var solar_beam = {
    name: "Solar Beam",
    type: "Grass",
    cat: "Special",
    power: 120,
    pp: 10,
    acc: 100,
    effect: "Charges on first turn, attacks on second.",
    wiki: "http://www.serebii.net/attackdex-xy/solarbeam.shtml"
};

var poison_powder = {
    name: "Poison Powder",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 35,
    acc: 75,
    effect: "Poisons opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/poisonpowder.shtml"
};

var stun_spore = {
    name: "Stun Spore",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: 75,
    effect: "Paralyzes opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/stunspore.shtml"
};

var sleep_powder = {
    name: "Sleep Powder",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 75,
    effect: "Puts opponent to sleep.",
    wiki: "http://www.serebii.net/attackdex-xy/sleeppowder.shtml"
};

var petal_dance = {
    name: "Petal Dance",
    type: "Grass",
    cat: "Special",
    power: 120,
    pp: 10,
    acc: 100,
    effect: "User attacks for 2-3 turns but then becomes confused.",
    wiki: "http://www.serebii.net/attackdex-xy/petaldance.shtml"
};

var string_shot = {
    name: "String Shot",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 95,
    effect: "Sharply lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/stringshot.shtml"
};

var dragon_rage = {
    name: "Dragon Rage",
    type: "Dragon",
    cat: "Special",
    power: undefined,
    pp: 10,
    acc: 100,
    effect: "Always inflicts 40 HP.",
    wiki: "http://www.serebii.net/attackdex-xy/dragonrage.shtml"
};

var fire_spin = {
    name: "Fire Spin",
    type: "Fire",
    cat: "Special",
    power: 35,
    pp: 15,
    acc: 85,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/firespin.shtml"
};

var thunder_shock = {
    name: "Thunder Shock",
    type: "Electric",
    cat: "Special",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/thundershock.shtml"
};

var thunderbolt = {
    name: "Thunderbolt",
    type: "Electric",
    cat: "Special",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/thunderbolt.shtml"
};

var thunder_wave = {
    name: "Thunder Wave",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Paralyzes opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/thunderwave.shtml"
};

var thunder = {
    name: "Thunder",
    type: "Electric",
    cat: "Special",
    power: 110,
    pp: 10,
    acc: 70,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/thunder.shtml"
};

var rock_throw = {
    name: "Rock Throw",
    type: "Rock",
    cat: "Physical",
    power: 50,
    pp: 15,
    acc: 90,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/rockthrow.shtml"
};

var earthquake = {
    name: "Earthquake",
    type: "Ground",
    cat: "Physical",
    power: 100,
    pp: 10,
    acc: 100,
    effect: "Power is doubled if opponent is underground from using Dig.",
    wiki: "http://www.serebii.net/attackdex-xy/earthquake.shtml"
};

var fissure = {
    name: "Fissure",
    type: "Ground",
    cat: "Physical",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "One-Hit-KO, if it hits.",
    wiki: "http://www.serebii.net/attackdex-xy/fissure.shtml"
};

var dig = {
    name: "Dig",
    type: "Ground",
    cat: "Physical",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Digs underground on first turn, attacks on second. Can also escape from caves.",
    wiki: "http://www.serebii.net/attackdex-xy/dig.shtml"
};

var toxic = {
    name: "Toxic",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 90,
    effect: "Badly poisons opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/toxic.shtml"
};

var confusion = {
    name: "Confusion",
    type: "Psychic",
    cat: "Special",
    power: 50,
    pp: 25,
    acc: 100,
    effect: "May confuse opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/confusion.shtml"
};

var psychic = {
    name: "Psychic",
    type: "Psychic",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/psychic.shtml"
};

var hypnosis = {
    name: "Hypnosis",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 60,
    effect: "Puts opponent to sleep.",
    wiki: "http://www.serebii.net/attackdex-xy/hypnosis.shtml"
};

var meditate = {
    name: "Meditate",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "Raises user's Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/meditate.shtml"
};

var agility = {
    name: "Agility",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Sharply raises user's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/agility.shtml"
};

var quick_attack = {
    name: "Quick Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-xy/quickattack.shtml"
};

var rage = {
    name: "Rage",
    type: "Normal",
    cat: "Physical",
    power: 20,
    pp: 20,
    acc: 100,
    effect: "Raises user's Attack when hit.",
    wiki: "http://www.serebii.net/attackdex-xy/rage.shtml"
};

var teleport = {
    name: "Teleport",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Allows user to flee wild battles; also warps player to last PokéCenter.",
    wiki: "http://www.serebii.net/attackdex-xy/teleport.shtml"
};

var night_shade = {
    name: "Night Shade",
    type: "Ghost",
    cat: "Special",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Inflicts damage equal to user's level.",
    wiki: "http://www.serebii.net/attackdex-xy/nightshade.shtml"
};

var mimic = {
    name: "Mimic",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Copies the opponent's last move.",
    wiki: "http://www.serebii.net/attackdex-xy/mimic.shtml"
};

var screech = {
    name: "Screech",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 85,
    effect: "Sharply lowers opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/screech.shtml"
};

var double_team = {
    name: "Double Team",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Raises user's Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-xy/doubleteam.shtml"
};

var recover = {
    name: "Recover",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User recovers half its max HP.",
    wiki: "http://www.serebii.net/attackdex-xy/recover.shtml"
};

var harden = {
    name: "Harden",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Raises user's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/harden.shtml"
};

var minimize = {
    name: "Minimize",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Sharply raises user's Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-xy/minimize.shtml"
};

var smokescreen = {
    name: "Smokescreen",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-xy/smokescreen.shtml"
};

var confuse_ray = {
    name: "Confuse Ray",
    type: "Ghost",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Confuses opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/confuseray.shtml"
};

var withdraw = {
    name: "Withdraw",
    type: "Water",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "Raises user's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/withdraw.shtml"
};

var defense_curl = {
    name: "Defense Curl",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "Raises user's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/defensecurl.shtml"
};

var barrier = {
    name: "Barrier",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Sharply raises user's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/barrier.shtml"
};

var light_screen = {
    name: "Light Screen",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Halves damage from Special attacks for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/lightscreen.shtml"
};

var haze = {
    name: "Haze",
    type: "Ice",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Resets all stat changes.",
    wiki: "http://www.serebii.net/attackdex-xy/haze.shtml"
};

var reflect = {
    name: "Reflect",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Halves damage from Physical attacks for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/reflect.shtml"
};

var focus_energy = {
    name: "Focus Energy",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Increases critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/focusenergy.shtml"
};

var bide = {
    name: "Bide",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "User takes damage for two turns then strikes back double.",
    wiki: "http://www.serebii.net/attackdex-xy/bide.shtml"
};

var metronome = {
    name: "Metronome",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User performs any move in the game at random.",
    wiki: "http://www.serebii.net/attackdex-xy/metronome.shtml"
};

var mirror_move = {
    name: "Mirror Move",
    type: "Flying",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "User performs the opponent's last move.",
    wiki: "http://www.serebii.net/attackdex-xy/mirrormove.shtml"
};

var self_destruct = {
    name: "Self_destruct",
    type: "Normal",
    cat: "Physical",
    power: 200,
    pp: 5,
    acc: 100,
    effect: "User faints.",
    wiki: "http://www.serebii.net/attackdex-xy/self_destruct.shtml"
};

var egg_bomb = {
    name: "Egg Bomb",
    type: "Normal",
    cat: "Physical",
    power: 100,
    pp: 10,
    acc: 75,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/eggbomb.shtml"
};

var lick = {
    name: "Lick",
    type: "Ghost",
    cat: "Physical",
    power: 30,
    pp: 30,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/lick.shtml"
};

var smog = {
    name: "Smog",
    type: "Poison",
    cat: "Special",
    power: 30,
    pp: 20,
    acc: 70,
    effect: "May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/smog.shtml"
};

var sludge = {
    name: "Sludge",
    type: "Poison",
    cat: "Special",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/sludge.shtml"
};

var bone_club = {
    name: "Bone Club",
    type: "Ground",
    cat: "Physical",
    power: 65,
    pp: 20,
    acc: 85,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/boneclub.shtml"
};

var fire_blast = {
    name: "Fire Blast",
    type: "Fire",
    cat: "Special",
    power: 110,
    pp: 5,
    acc: 85,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/fireblast.shtml"
};

var waterfall = {
    name: "Waterfall",
    type: "Water",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/waterfall.shtml"
};

var clamp = {
    name: "Clamp",
    type: "Water",
    cat: "Physical",
    power: 35,
    pp: 15,
    acc: 85,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/clamp.shtml"
};

var swift = {
    name: "Swift",
    type: "Normal",
    cat: "Special",
    power: 60,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-xy/swift.shtml"
};

var skull_bash = {
    name: "Skull Bash",
    type: "Normal",
    cat: "Physical",
    power: 130,
    pp: 10,
    acc: 100,
    effect: "Raises Defense on first turn, attacks on second.",
    wiki: "http://www.serebii.net/attackdex-xy/skullbash.shtml"
};

var spike_cannon = {
    name: "Spike Cannon",
    type: "Normal",
    cat: "Physical",
    power: 20,
    pp: 15,
    acc: 100,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/spikecannon.shtml"
};

var constrict = {
    name: "Constrict",
    type: "Normal",
    cat: "Physical",
    power: 10,
    pp: 35,
    acc: 100,
    effect: "May lower opponent's Speed by one stage.",
    wiki: "http://www.serebii.net/attackdex-xy/constrict.shtml"
};

var amnesia = {
    name: "Amnesia",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Sharply raises user's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/amnesia.shtml"
};

var kinesis = {
    name: "Kinesis",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 80,
    effect: "Lowers opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-xy/kinesis.shtml"
};

var soft_boiled = {
    name: "Soft_boiled",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User recovers half its max HP.",
    wiki: "http://www.serebii.net/attackdex-xy/soft_boiled.shtml"
};

var high_jump_kick = {
    name: "High Jump Kick",
    type: "Fighting",
    cat: "Physical",
    power: 130,
    pp: 10,
    acc: 90,
    effect: "If it misses, the user loses half their HP.",
    wiki: "http://www.serebii.net/attackdex-xy/highjumpkick.shtml"
};

var glare = {
    name: "Glare",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: 100,
    effect: "Paralyzes opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/glare.shtml"
};

var dream_eater = {
    name: "Dream Eater",
    type: "Psychic",
    cat: "Special",
    power: 100,
    pp: 15,
    acc: 100,
    effect: "User recovers half the HP inflicted on a sleeping opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/dreameater.shtml"
};

var poison_gas = {
    name: "Poison Gas",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 90,
    effect: "Poisons opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/poisongas.shtml"
};

var barrage = {
    name: "Barrage",
    type: "Normal",
    cat: "Physical",
    power: 15,
    pp: 20,
    acc: 85,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/barrage.shtml"
};

var leech_life = {
    name: "Leech Life",
    type: "Bug",
    cat: "Physical",
    power: 20,
    pp: 15,
    acc: 100,
    effect: "User recovers half the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/leechlife.shtml"
};

var lovely_kiss = {
    name: "Lovely Kiss",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 75,
    effect: "Puts opponent to sleep.",
    wiki: "http://www.serebii.net/attackdex-xy/lovelykiss.shtml"
};

var sky_attack = {
    name: "Sky Attack",
    type: "Flying",
    cat: "Physical",
    power: 140,
    pp: 5,
    acc: 90,
    effect: "Charges on first turn, attacks on second. May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/skyattack.shtml"
};

var transform = {
    name: "Transform",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User takes on the form and attacks of the opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/transform.shtml"
};

var bubble = {
    name: "Bubble",
    type: "Water",
    cat: "Special",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "May lower opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/bubble.shtml"
};

var dizzy_punch = {
    name: "Dizzy Punch",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 10,
    acc: 100,
    effect: "May confuse opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/dizzypunch.shtml"
};

var spore = {
    name: "Spore",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Puts opponent to sleep.",
    wiki: "http://www.serebii.net/attackdex-xy/spore.shtml"
};

var flash = {
    name: "Flash",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-xy/flash.shtml"
};

var psywave = {
    name: "Psywave",
    type: "Psychic",
    cat: "Special",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Inflicts damage 50-150% of user's level.",
    wiki: "http://www.serebii.net/attackdex-xy/psywave.shtml"
};

var splash = {
    name: "Splash",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "Doesn't do ANYTHING.",
    wiki: "http://www.serebii.net/attackdex-xy/splash.shtml"
};

var acid_armor = {
    name: "Acid Armor",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Sharply raises user's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/acidarmor.shtml"
};

var crabhammer = {
    name: "Crabhammer",
    type: "Water",
    cat: "Physical",
    power: 100,
    pp: 10,
    acc: 90,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/crabhammer.shtml"
};

var explosion = {
    name: "Explosion",
    type: "Normal",
    cat: "Physical",
    power: 250,
    pp: 5,
    acc: 100,
    effect: "User faints.",
    wiki: "http://www.serebii.net/attackdex-xy/explosion.shtml"
};

var fury_swipes = {
    name: "Fury Swipes",
    type: "Normal",
    cat: "Physical",
    power: 18,
    pp: 15,
    acc: 80,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/furyswipes.shtml"
};

var bonemerang = {
    name: "Bonemerang",
    type: "Ground",
    cat: "Physical",
    power: 50,
    pp: 10,
    acc: 90,
    effect: "Hits twice in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/bonemerang.shtml"
};

var rest = {
    name: "Rest",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User sleeps for 2 turns, but user is fully healed.",
    wiki: "http://www.serebii.net/attackdex-xy/rest.shtml"
};

var rock_slide = {
    name: "Rock Slide",
    type: "Rock",
    cat: "Physical",
    power: 75,
    pp: 10,
    acc: 90,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/rockslide.shtml"
};

var hyper_fang = {
    name: "Hyper Fang",
    type: "Normal",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 90,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/hyperfang.shtml"
};

var sharpen = {
    name: "Sharpen",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Raises user's Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/sharpen.shtml"
};

var conversion = {
    name: "Conversion",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Changes user's type to that of its first move.",
    wiki: "http://www.serebii.net/attackdex-xy/conversion.shtml"
};

var tri_attack = {
    name: "Tri Attack",
    type: "Normal",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "May paralyze, burn or freeze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/triattack.shtml"
};

var super_fang = {
    name: "Super Fang",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 10,
    acc: 90,
    effect: "Always takes off half of the opponent's HP.",
    wiki: "http://www.serebii.net/attackdex-xy/superfang.shtml"
};

var slash = {
    name: "Slash",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/slash.shtml"
};

var substitute = {
    name: "Substitute",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Uses HP to creates a decoy that takes hits.",
    wiki: "http://www.serebii.net/attackdex-xy/substitute.shtml"
};

var struggle = {
    name: "Struggle",
    type: "Normal",
    cat: "Physical",
    power: 50,
    pp: 1,
    acc: -1,
    effect: "Only usable when all PP are gone. Hurts the user.",
    wiki: "http://www.serebii.net/attackdex-xy/struggle.shtml"
};

var sketch = {
    name: "Sketch",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 1,
    acc: -1,
    effect: "Permanently copies the opponent's last move.",
    wiki: "http://www.serebii.net/attackdex-xy/sketch.shtml"
};

var triple_kick = {
    name: "Triple Kick",
    type: "Fighting",
    cat: "Physical",
    power: 10,
    pp: 10,
    acc: 90,
    effect: "Hits thrice in one turn at increasing power.",
    wiki: "http://www.serebii.net/attackdex-xy/triplekick.shtml"
};

var thief = {
    name: "Thief",
    type: "Dark",
    cat: "Physical",
    power: 60,
    pp: 25,
    acc: 100,
    effect: "Also steals opponent's held item.",
    wiki: "http://www.serebii.net/attackdex-xy/thief.shtml"
};

var spider_web = {
    name: "Spider Web",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Opponent cannot escape/switch.",
    wiki: "http://www.serebii.net/attackdex-xy/spiderweb.shtml"
};

var mind_reader = {
    name: "Mind Reader",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "User's next attack is guaranteed to hit.",
    wiki: "http://www.serebii.net/attackdex-xy/mindreader.shtml"
};

var nightmare = {
    name: "Nightmare",
    type: "Ghost",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "The sleeping opponent loses 25% of its max HP each turn.",
    wiki: "http://www.serebii.net/attackdex-xy/nightmare.shtml"
};

var flame_wheel = {
    name: "Flame Wheel",
    type: "Fire",
    cat: "Physical",
    power: 60,
    pp: 25,
    acc: 100,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/flamewheel.shtml"
};

var snore = {
    name: "Snore",
    type: "Normal",
    cat: "Special",
    power: 50,
    pp: 15,
    acc: 100,
    effect: "Can only be used if asleep. May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/snore.shtml"
};

var curse = {
    name: "Curse",
    type: "Ghost",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Ghosts lose 50% of max HP and curse the opponent; Non-Ghosts raise Attack, Defense and lower Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/curse.shtml"
};

var flail = {
    name: "Flail",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "The lower the user's HP, the higher the power.",
    wiki: "http://www.serebii.net/attackdex-xy/flail.shtml"
};

var conversion_2 = {
    name: "Conversion 2",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: 100,
    effect: "User changes type to become resistant to opponent's last move.",
    wiki: "http://www.serebii.net/attackdex-xy/conversion2.shtml"
};

var aeroblast = {
    name: "Aeroblast",
    type: "Flying",
    cat: "Special",
    power: 100,
    pp: 5,
    acc: 95,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/aeroblast.shtml"
};

var cotton_spore = {
    name: "Cotton Spore",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 100,
    effect: "Sharply lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/cottonspore.shtml"
};

var reversal = {
    name: "Reversal",
    type: "Fighting",
    cat: "Physical",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "The lower the user's HP, the higher the power.",
    wiki: "http://www.serebii.net/attackdex-xy/reversal.shtml"
};

var spite = {
    name: "Spite",
    type: "Ghost",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "The opponent's last move loses 2-5 PP.",
    wiki: "http://www.serebii.net/attackdex-xy/spite.shtml"
};

var powder_snow = {
    name: "Powder Snow",
    type: "Ice",
    cat: "Special",
    power: 40,
    pp: 25,
    acc: 100,
    effect: "May freeze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/powdersnow.shtml"
};

var protect = {
    name: "Protect",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User is not affected by opponent's move.",
    wiki: "http://www.serebii.net/attackdex-xy/protect.shtml"
};

var mach_punch = {
    name: "Mach Punch",
    type: "Fighting",
    cat: "Physical",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-xy/machpunch.shtml"
};

var scary_face = {
    name: "Scary Face",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Sharply lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/scaryface.shtml"
};

var feint_attack = {
    name: "Feint Attack",
    type: "Dark",
    cat: "Physical",
    power: 60,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-xy/feintattack.shtml"
};

var sweet_kiss = {
    name: "Sweet Kiss",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 75,
    effect: "Confuses opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/sweetkiss.shtml"
};

var belly_drum = {
    name: "Belly Drum",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User loses 50% of its max HP, but Attack raises to maximum.",
    wiki: "http://www.serebii.net/attackdex-xy/bellydrum.shtml"
};

var sludge_bomb = {
    name: "Sludge Bomb",
    type: "Poison",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/sludgebomb.shtml"
};

var mud_slap = {
    name: "Mud_slap",
    type: "Ground",
    cat: "Special",
    power: 20,
    pp: 10,
    acc: 100,
    effect: "Lowers opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-xy/mud_slap.shtml"
};

var octazooka = {
    name: "Octazooka",
    type: "Water",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 85,
    effect: "May lower opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-xy/octazooka.shtml"
};

var spikes = {
    name: "Spikes",
    type: "Ground",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Hurts opponents when they switch into battle.",
    wiki: "http://www.serebii.net/attackdex-xy/spikes.shtml"
};

var zap_cannon = {
    name: "Zap Cannon",
    type: "Electric",
    cat: "Special",
    power: 120,
    pp: 5,
    acc: 50,
    effect: "Paralyzes opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/zapcannon.shtml"
};

var foresight = {
    name: "Foresight",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 100,
    effect: "Resets opponent's Evasiveness, Normal-type and Fighting-type attacks can now hit Ghosts, and Ghost-type attacks hit Normal.",
    wiki: "http://www.serebii.net/attackdex-xy/foresight.shtml"
};

var destiny_bond = {
    name: "Destiny Bond",
    type: "Ghost",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "If the user faints, the opponent also faints.",
    wiki: "http://www.serebii.net/attackdex-xy/destinybond.shtml"
};

var perish_song = {
    name: "Perish Song",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Any Pokémon in play when this attack is used faints in 3 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/perishsong.shtml"
};

var icy_wind = {
    name: "Icy Wind",
    type: "Ice",
    cat: "Special",
    power: 55,
    pp: 15,
    acc: 95,
    effect: "Lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/icywind.shtml"
};

var detect = {
    name: "Detect",
    type: "Fighting",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Opponent's attack doesn't affect you, but may fail if used often.",
    wiki: "http://www.serebii.net/attackdex-xy/detect.shtml"
};

var bone_rush = {
    name: "Bone Rush",
    type: "Ground",
    cat: "Physical",
    power: 25,
    pp: 10,
    acc: 90,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/bonerush.shtml"
};

var lock_on = {
    name: "Lock_on",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "User's next attack is guaranteed to hit.",
    wiki: "http://www.serebii.net/attackdex-xy/lock_on.shtml"
};

var outrage = {
    name: "Outrage",
    type: "Dragon",
    cat: "Physical",
    power: 120,
    pp: 10,
    acc: 100,
    effect: "User attacks for 2-3 turns but then becomes confused.",
    wiki: "http://www.serebii.net/attackdex-xy/outrage.shtml"
};

var sandstorm = {
    name: "Sandstorm",
    type: "Rock",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Creates a sandstorm for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/sandstorm.shtml"
};

var giga_drain = {
    name: "Giga Drain",
    type: "Grass",
    cat: "Special",
    power: 75,
    pp: 10,
    acc: 100,
    effect: "User recovers half the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/gigadrain.shtml"
};

var endure = {
    name: "Endure",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Always left with at least 1 HP, but may fail if used consecutively.",
    wiki: "http://www.serebii.net/attackdex-xy/endure.shtml"
};

var charm = {
    name: "Charm",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Sharply lowers opponent's Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/charm.shtml"
};

var rollout = {
    name: "Rollout",
    type: "Rock",
    cat: "Physical",
    power: 30,
    pp: 20,
    acc: 90,
    effect: "Doubles in power each turn for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/rollout.shtml"
};

var false_swipe = {
    name: "False Swipe",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 40,
    acc: 100,
    effect: "Always leaves opponent with at least 1 HP.",
    wiki: "http://www.serebii.net/attackdex-xy/falseswipe.shtml"
};

var swagger = {
    name: "Swagger",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 90,
    effect: "Opponent becomes confused, but its Attack is raised two stages.",
    wiki: "http://www.serebii.net/attackdex-xy/swagger.shtml"
};

var milk_drink = {
    name: "Milk Drink",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User recovers half its max HP.",
    wiki: "http://www.serebii.net/attackdex-xy/milkdrink.shtml"
};

var spark = {
    name: "Spark",
    type: "Electric",
    cat: "Physical",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/spark.shtml"
};

var fury_cutter = {
    name: "Fury Cutter",
    type: "Bug",
    cat: "Physical",
    power: 40,
    pp: 20,
    acc: 95,
    effect: "Power increases each turn.",
    wiki: "http://www.serebii.net/attackdex-xy/furycutter.shtml"
};

var steel_wing = {
    name: "Steel Wing",
    type: "Steel",
    cat: "Physical",
    power: 70,
    pp: 25,
    acc: 90,
    effect: "May raise user's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/steelwing.shtml"
};

var mean_look = {
    name: "Mean Look",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "Opponent cannot flee or switch.",
    wiki: "http://www.serebii.net/attackdex-xy/meanlook.shtml"
};

var attract = {
    name: "Attract",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "If opponent is the opposite gender, it's less likely to attack.",
    wiki: "http://www.serebii.net/attackdex-xy/attract.shtml"
};

var sleep_talk = {
    name: "Sleep Talk",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User performs one of its own moves while sleeping.",
    wiki: "http://www.serebii.net/attackdex-xy/sleeptalk.shtml"
};

var heal_bell = {
    name: "Heal Bell",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Heals the user's party's status conditions.",
    wiki: "http://www.serebii.net/attackdex-xy/healbell.shtml"
};

var _return = {
    name: "Return",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Power increases with user's Happiness.",
    wiki: "http://www.serebii.net/attackdex-xy/return.shtml"
};

var present = {
    name: "Present",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 15,
    acc: 90,
    effect: "Either deals damage or heals.",
    wiki: "http://www.serebii.net/attackdex-xy/present.shtml"
};

var frustration = {
    name: "Frustration",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Power decreases with higher Happiness.",
    wiki: "http://www.serebii.net/attackdex-xy/frustration.shtml"
};

var safeguard = {
    name: "Safeguard",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 25,
    acc: -1,
    effect: "The user's party is protected from status conditions.",
    wiki: "http://www.serebii.net/attackdex-xy/safeguard.shtml"
};

var pain_split = {
    name: "Pain Split",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "The user's and opponent's HP becomes the average of both.",
    wiki: "http://www.serebii.net/attackdex-xy/painsplit.shtml"
};

var sacred_fire = {
    name: "Sacred Fire",
    type: "Fire",
    cat: "Physical",
    power: 100,
    pp: 5,
    acc: 95,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/sacredfire.shtml"
};

var magnitude = {
    name: "Magnitude",
    type: "Ground",
    cat: "Physical",
    power: -1,
    pp: 30,
    acc: 100,
    effect: "Hits with random power.",
    wiki: "http://www.serebii.net/attackdex-xy/magnitude.shtml"
};

var dynamic_punch = {
    name: "Dynamic Punch",
    type: "Fighting",
    cat: "Physical",
    power: 100,
    pp: 5,
    acc: 50,
    effect: "Confuses opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/dynamicpunch.shtml"
};

var megahorn = {
    name: "Megahorn",
    type: "Bug",
    cat: "Physical",
    power: 120,
    pp: 10,
    acc: 85,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/megahorn.shtml"
};

var dragon_breath = {
    name: "Dragon Breath",
    type: "Dragon",
    cat: "Special",
    power: 60,
    pp: 20,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/dragonbreath.shtml"
};

var baton_pass = {
    name: "Baton Pass",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "User switches out and gives stat changes to the incoming Pokémon.",
    wiki: "http://www.serebii.net/attackdex-xy/batonpass.shtml"
};

var encore = {
    name: "Encore",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "Forces opponent to keep using its last move for 3 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/encore.shtml"
};

var pursuit = {
    name: "Pursuit",
    type: "Dark",
    cat: "Physical",
    power: 40,
    pp: 20,
    acc: 100,
    effect: "Double power if the opponent is switching out.",
    wiki: "http://www.serebii.net/attackdex-xy/pursuit.shtml"
};

var rapid_spin = {
    name: "Rapid Spin",
    type: "Normal",
    cat: "Physical",
    power: 20,
    pp: 40,
    acc: 100,
    effect: "Removes effects of trap moves.",
    wiki: "http://www.serebii.net/attackdex-xy/rapidspin.shtml"
};

var sweet_scent = {
    name: "Sweet Scent",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-xy/sweetscent.shtml"
};

var iron_tail = {
    name: "Iron Tail",
    type: "Steel",
    cat: "Physical",
    power: 100,
    pp: 15,
    acc: 75,
    effect: "May lower opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/irontail.shtml"
};

var metal_claw = {
    name: "Metal Claw",
    type: "Steel",
    cat: "Physical",
    power: 50,
    pp: 35,
    acc: 95,
    effect: "May raise user's Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/metalclaw.shtml"
};

var vital_throw = {
    name: "Vital Throw",
    type: "Fighting",
    cat: "Physical",
    power: 70,
    pp: 10,
    acc: -1,
    effect: "User attacks last, but ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-xy/vitalthrow.shtml"
};

var morning_sun = {
    name: "Morning Sun",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "User recovers HP. Amount varies with the weather.",
    wiki: "http://www.serebii.net/attackdex-xy/morningsun.shtml"
};

var synthesis = {
    name: "Synthesis",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "User recovers HP. Amount varies with the weather.",
    wiki: "http://www.serebii.net/attackdex-xy/synthesis.shtml"
};

var moonlight = {
    name: "Moonlight",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "User recovers HP. Amount varies with the weather.",
    wiki: "http://www.serebii.net/attackdex-xy/moonlight.shtml"
};

var hidden_power = {
    name: "Hidden Power",
    type: "Normal",
    cat: "Special",
    power: 60,
    pp: 15,
    acc: 100,
    effect: "Type and power depends on user's IVs.",
    wiki: "http://www.serebii.net/attackdex-xy/hiddenpower.shtml"
};

var cross_chop = {
    name: "Cross Chop",
    type: "Fighting",
    cat: "Physical",
    power: 100,
    pp: 5,
    acc: 80,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/crosschop.shtml"
};

var twister = {
    name: "Twister",
    type: "Dragon",
    cat: "Special",
    power: 40,
    pp: 20,
    acc: 100,
    effect: "May cause flinching. Hits Pokémon using Fly/Bounce with double power.",
    wiki: "http://www.serebii.net/attackdex-xy/twister.shtml"
};

var rain_dance = {
    name: "Rain Dance",
    type: "Water",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Makes it rain for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/raindance.shtml"
};

var sunny_day = {
    name: "Sunny Day",
    type: "Fire",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Makes it sunny for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/sunnyday.shtml"
};

var crunch = {
    name: "Crunch",
    type: "Dark",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May lower opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/crunch.shtml"
};

var mirror_coat = {
    name: "Mirror Coat",
    type: "Psychic",
    cat: "Special",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "When hit by a Special Attack, user strikes back with 2x power.",
    wiki: "http://www.serebii.net/attackdex-xy/mirrorcoat.shtml"
};

var psych_up = {
    name: "Psych Up",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Copies the opponent's stat changes.",
    wiki: "http://www.serebii.net/attackdex-xy/psychup.shtml"
};

var extreme_speed = {
    name: "Extreme Speed",
    type: "Normal",
    cat: "Physical",
    power: 80,
    pp: 5,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-xy/extremespeed.shtml"
};

var ancient_power = {
    name: "Ancient Power",
    type: "Rock",
    cat: "Special",
    power: 60,
    pp: 5,
    acc: 100,
    effect: "May raise all user's stats at once.",
    wiki: "http://www.serebii.net/attackdex-xy/ancientpower.shtml"
};

var shadow_ball = {
    name: "Shadow Ball",
    type: "Ghost",
    cat: "Special",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/shadowball.shtml"
};

var future_sight = {
    name: "Future Sight",
    type: "Psychic",
    cat: "Special",
    power: 120,
    pp: 10,
    acc: 100,
    effect: "Damage occurs 2 turns later.",
    wiki: "http://www.serebii.net/attackdex-xy/futuresight.shtml"
};

var rock_smash = {
    name: "Rock Smash",
    type: "Fighting",
    cat: "Physical",
    power: 40,
    pp: 15,
    acc: 100,
    effect: "May lower opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/rocksmash.shtml"
};

var whirlpool = {
    name: "Whirlpool",
    type: "Water",
    cat: "Special",
    power: 35,
    pp: 15,
    acc: 85,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/whirlpool.shtml"
};

var beat_up = {
    name: "Beat Up",
    type: "Dark",
    cat: "Physical",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Each Pokémon in your party attacks.",
    wiki: "http://www.serebii.net/attackdex-xy/beatup.shtml"
};

var fake_out = {
    name: "Fake Out",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 10,
    acc: 100,
    effect: "User attacks first, foe flinches. Only usable on first turn.",
    wiki: "http://www.serebii.net/attackdex-xy/fakeout.shtml"
};

var uproar = {
    name: "Uproar",
    type: "Normal",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "User attacks for 3 turns and prevents sleep.",
    wiki: "http://www.serebii.net/attackdex-xy/uproar.shtml"
};

var stockpile = {
    name: "Stockpile",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Stores energy for use with Spit Up and Swallow.",
    wiki: "http://www.serebii.net/attackdex-xy/stockpile.shtml"
};

var spit_up = {
    name: "Spit Up",
    type: "Normal",
    cat: "Special",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Power depends on how many times the user performed Stockpile.",
    wiki: "http://www.serebii.net/attackdex-xy/spitup.shtml"
};

var swallow = {
    name: "Swallow",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "The more times the user has performed Stockpile, the more HP is recovered.",
    wiki: "http://www.serebii.net/attackdex-xy/swallow.shtml"
};

var heat_wave = {
    name: "Heat Wave",
    type: "Fire",
    cat: "Special",
    power: 95,
    pp: 10,
    acc: 90,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/heatwave.shtml"
};

var hail = {
    name: "Hail",
    type: "Ice",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Non-Ice types are damaged for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/hail.shtml"
};

var torment = {
    name: "Torment",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Opponent cannot use the same move in a row.",
    wiki: "http://www.serebii.net/attackdex-xy/torment.shtml"
};

var flatter = {
    name: "Flatter",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Confuses opponent, but raises its Special Attack by two stages.",
    wiki: "http://www.serebii.net/attackdex-xy/flatter.shtml"
};

var will_o_wisp = {
    name: "Will_o_wisp",
    type: "Fire",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 85,
    effect: "Burns opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/will_o_wisp.shtml"
};

var memento = {
    name: "Memento",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "User faints, sharply lowers opponent's Attack and Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/memento.shtml"
};

var facade = {
    name: "Facade",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "Power doubles if user is burned, poisoned, or paralyzed.",
    wiki: "http://www.serebii.net/attackdex-xy/facade.shtml"
};

var focus_punch = {
    name: "Focus Punch",
    type: "Fighting",
    cat: "Physical",
    power: 150,
    pp: 20,
    acc: 100,
    effect: "If the user is hit before attacking, it flinches instead.",
    wiki: "http://www.serebii.net/attackdex-xy/focuspunch.shtml"
};

var smelling_salts = {
    name: "Smelling Salts",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 10,
    acc: 100,
    effect: "Power doubles if opponent is paralyzed, but cures it.",
    wiki: "http://www.serebii.net/attackdex-xy/smellingsalts.shtml"
};

var follow_me = {
    name: "Follow Me",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "In Double Battle, the user takes all the attacks.",
    wiki: "http://www.serebii.net/attackdex-xy/followme.shtml"
};

var nature_power = {
    name: "Nature Power",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Uses a certain move based on the current terrain.",
    wiki: "http://www.serebii.net/attackdex-xy/naturepower.shtml"
};

var charge = {
    name: "Charge",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Special Defense and next Electric move's power increases.",
    wiki: "http://www.serebii.net/attackdex-xy/charge.shtml"
};

var taunt = {
    name: "Taunt",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Opponent can only use moves that attack.",
    wiki: "http://www.serebii.net/attackdex-xy/taunt.shtml"
};

var helping_hand = {
    name: "Helping Hand",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "In Double Battles, boosts the power of the partner's move.",
    wiki: "http://www.serebii.net/attackdex-xy/helpinghand.shtml"
};

var trick = {
    name: "Trick",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Swaps held items with the opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/trick.shtml"
};

var role_play = {
    name: "Role Play",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User copies the opponent's Ability.",
    wiki: "http://www.serebii.net/attackdex-xy/roleplay.shtml"
};

var wish = {
    name: "Wish",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "The user recovers HP in the following turn.",
    wiki: "http://www.serebii.net/attackdex-xy/wish.shtml"
};

var assist = {
    name: "Assist",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "In a Double Battle, user randomly attacks with a partner's move.",
    wiki: "http://www.serebii.net/attackdex-xy/assist.shtml"
};

var ingrain = {
    name: "Ingrain",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "User restores HP each turn. User cannot escape/switch.",
    wiki: "http://www.serebii.net/attackdex-xy/ingrain.shtml"
};

var superpower = {
    name: "Superpower",
    type: "Fighting",
    cat: "Physical",
    power: 120,
    pp: 5,
    acc: 100,
    effect: "Lowers user's Attack and Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/superpower.shtml"
};

var magic_coat = {
    name: "Magic Coat",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Reflects moves that cause status conditions back to the attacker.",
    wiki: "http://www.serebii.net/attackdex-xy/magiccoat.shtml"
};

var recycle = {
    name: "Recycle",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "User's used hold item is restored.",
    wiki: "http://www.serebii.net/attackdex-xy/recycle.shtml"
};

var revenge = {
    name: "Revenge",
    type: "Fighting",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 100,
    effect: "Power increases if user was hit first.",
    wiki: "http://www.serebii.net/attackdex-xy/revenge.shtml"
};

var brick_break = {
    name: "Brick Break",
    type: "Fighting",
    cat: "Physical",
    power: 75,
    pp: 15,
    acc: 100,
    effect: "Breaks through Reflect and Light Screen barriers.",
    wiki: "http://www.serebii.net/attackdex-xy/brickbreak.shtml"
};

var yawn = {
    name: "Yawn",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Puts opponent to sleep in the next turn.",
    wiki: "http://www.serebii.net/attackdex-xy/yawn.shtml"
};

var knock_off = {
    name: "Knock Off",
    type: "Dark",
    cat: "Physical",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "Removes opponent's held item for the rest of the battle.",
    wiki: "http://www.serebii.net/attackdex-xy/knockoff.shtml"
};

var endeavor = {
    name: "Endeavor",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "Reduces opponent's HP to same as user's.",
    wiki: "http://www.serebii.net/attackdex-xy/endeavor.shtml"
};

var eruption = {
    name: "Eruption",
    type: "Fire",
    cat: "Special",
    power: 150,
    pp: 5,
    acc: 100,
    effect: "Stronger when the user's HP is higher.",
    wiki: "http://www.serebii.net/attackdex-xy/eruption.shtml"
};

var skill_swap = {
    name: "Skill Swap",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "The user swaps Abilities with the opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/skillswap.shtml"
};

var imprison = {
    name: "Imprison",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Opponent is unable to use moves that the user also knows.",
    wiki: "http://www.serebii.net/attackdex-xy/imprison.shtml"
};

var refresh = {
    name: "Refresh",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Cures paralysis, poison, and burns.",
    wiki: "http://www.serebii.net/attackdex-xy/refresh.shtml"
};

var grudge = {
    name: "Grudge",
    type: "Ghost",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "If the users faints after using this move, the PP for the opponent's last move is depleted.",
    wiki: "http://www.serebii.net/attackdex-xy/grudge.shtml"
};

var snatch = {
    name: "Snatch",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Steals the effects of the opponent's next move.",
    wiki: "http://www.serebii.net/attackdex-xy/snatch.shtml"
};

var secret_power = {
    name: "Secret Power",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "Effects of the attack vary with the location.",
    wiki: "http://www.serebii.net/attackdex-xy/secretpower.shtml"
};

var dive = {
    name: "Dive",
    type: "Water",
    cat: "Physical",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Dives underwater on first turn, attacks on second turn.",
    wiki: "http://www.serebii.net/attackdex-xy/dive.shtml"
};

var arm_thrust = {
    name: "Arm Thrust",
    type: "Fighting",
    cat: "Physical",
    power: 15,
    pp: 20,
    acc: 100,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/armthrust.shtml"
};

var camouflage = {
    name: "Camouflage",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Changes user's type according to the location.",
    wiki: "http://www.serebii.net/attackdex-xy/camouflage.shtml"
};

var tail_glow = {
    name: "Tail Glow",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Drastically raises user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/tailglow.shtml"
};

var luster_purge = {
    name: "Luster Purge",
    type: "Psychic",
    cat: "Special",
    power: 70,
    pp: 5,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/lusterpurge.shtml"
};

var mist_ball = {
    name: "Mist Ball",
    type: "Psychic",
    cat: "Special",
    power: 70,
    pp: 5,
    acc: 100,
    effect: "May lower opponent's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/mistball.shtml"
};

var feather_dance = {
    name: "Feather Dance",
    type: "Flying",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Sharply lowers opponent's Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/featherdance.shtml"
};

var teeter_dance = {
    name: "Teeter Dance",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Confuses all Pokémon.",
    wiki: "http://www.serebii.net/attackdex-xy/teeterdance.shtml"
};

var blaze_kick = {
    name: "Blaze Kick",
    type: "Fire",
    cat: "Physical",
    power: 85,
    pp: 10,
    acc: 90,
    effect: "High critical hit ratio. May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/blazekick.shtml"
};

var mud_sport = {
    name: "Mud Sport",
    type: "Ground",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Weakens the power of Electric-type moves.",
    wiki: "http://www.serebii.net/attackdex-xy/mudsport.shtml"
};

var ice_ball = {
    name: "Ice Ball",
    type: "Ice",
    cat: "Physical",
    power: 30,
    pp: 20,
    acc: 90,
    effect: "Doubles in power each turn for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/iceball.shtml"
};

var needle_arm = {
    name: "Needle Arm",
    type: "Grass",
    cat: "Physical",
    power: 60,
    pp: 15,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/needlearm.shtml"
};

var slack_off = {
    name: "Slack Off",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User recovers half its max HP.",
    wiki: "http://www.serebii.net/attackdex-xy/slackoff.shtml"
};

var hyper_voice = {
    name: "Hyper Voice",
    type: "Normal",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/hypervoice.shtml"
};

var poison_fang = {
    name: "Poison Fang",
    type: "Poison",
    cat: "Physical",
    power: 50,
    pp: 15,
    acc: 100,
    effect: "May badly poison opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/poisonfang.shtml"
};

var crush_claw = {
    name: "Crush Claw",
    type: "Normal",
    cat: "Physical",
    power: 75,
    pp: 10,
    acc: 95,
    effect: "May lower opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/crushclaw.shtml"
};

var blast_burn = {
    name: "Blast Burn",
    type: "Fire",
    cat: "Special",
    power: 150,
    pp: 5,
    acc: 90,
    effect: "User must recharge next turn.",
    wiki: "http://www.serebii.net/attackdex-xy/blastburn.shtml"
};

var hydro_cannon = {
    name: "Hydro Cannon",
    type: "Water",
    cat: "Special",
    power: 150,
    pp: 5,
    acc: 90,
    effect: "User must recharge next turn.",
    wiki: "http://www.serebii.net/attackdex-xy/hydrocannon.shtml"
};

var meteor_mash = {
    name: "Meteor Mash",
    type: "Steel",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 90,
    effect: "May raise user's Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/meteormash.shtml"
};

var astonish = {
    name: "Astonish",
    type: "Ghost",
    cat: "Physical",
    power: 30,
    pp: 15,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/astonish.shtml"
};

var weather_ball = {
    name: "Weather Ball",
    type: "Normal",
    cat: "Special",
    power: 50,
    pp: 10,
    acc: 100,
    effect: "Move's power and type changes with the weather.",
    wiki: "http://www.serebii.net/attackdex-xy/weatherball.shtml"
};

var aromatherapy = {
    name: "Aromatherapy",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Cures all status problems in your party.",
    wiki: "http://www.serebii.net/attackdex-xy/aromatherapy.shtml"
};

var fake_tears = {
    name: "Fake Tears",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Sharply lowers opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/faketears.shtml"
};

var air_cutter = {
    name: "Air Cutter",
    type: "Flying",
    cat: "Special",
    power: 60,
    pp: 25,
    acc: 95,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/aircutter.shtml"
};

var overheat = {
    name: "Overheat",
    type: "Fire",
    cat: "Special",
    power: 130,
    pp: 5,
    acc: 90,
    effect: "Sharply lowers user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/overheat.shtml"
};

var odor_sleuth = {
    name: "Odor Sleuth",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 100,
    effect: "Resets opponent's Evasiveness, Normal-type and Fighting-type attacks can now hit Ghosts, and Ghost-type attacks hit Normal.",
    wiki: "http://www.serebii.net/attackdex-xy/odorsleuth.shtml"
};

var rock_tomb = {
    name: "Rock Tomb",
    type: "Rock",
    cat: "Physical",
    power: 60,
    pp: 15,
    acc: 95,
    effect: "Lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/rocktomb.shtml"
};

var silver_wind = {
    name: "Silver Wind",
    type: "Bug",
    cat: "Special",
    power: 60,
    pp: 5,
    acc: 100,
    effect: "May raise all stats of user at once.",
    wiki: "http://www.serebii.net/attackdex-xy/silverwind.shtml"
};

var metal_sound = {
    name: "Metal Sound",
    type: "Steel",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: 85,
    effect: "Sharply lowers opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/metalsound.shtml"
};

var grass_whistle = {
    name: "Grass Whistle",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 55,
    effect: "Puts opponent to sleep.",
    wiki: "http://www.serebii.net/attackdex-xy/grasswhistle.shtml"
};

var tickle = {
    name: "Tickle",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Attack and Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/tickle.shtml"
};

var cosmic_power = {
    name: "Cosmic Power",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Defense and Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/cosmicpower.shtml"
};

var water_spout = {
    name: "Water Spout",
    type: "Water",
    cat: "Special",
    power: 150,
    pp: 5,
    acc: 100,
    effect: "The higher the user's HP, the higher the damage caused.",
    wiki: "http://www.serebii.net/attackdex-xy/waterspout.shtml"
};

var signal_beam = {
    name: "Signal Beam",
    type: "Bug",
    cat: "Special",
    power: 75,
    pp: 15,
    acc: 100,
    effect: "May confuse opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/signalbeam.shtml"
};

var shadow_punch = {
    name: "Shadow Punch",
    type: "Ghost",
    cat: "Physical",
    power: 60,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-xy/shadowpunch.shtml"
};

var extrasensory = {
    name: "Extrasensory",
    type: "Psychic",
    cat: "Special",
    power: 80,
    pp: 20,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/extrasensory.shtml"
};

var sky_uppercut = {
    name: "Sky Uppercut",
    type: "Fighting",
    cat: "Physical",
    power: 85,
    pp: 15,
    acc: 90,
    effect: "Hits the opponent, even during Fly.",
    wiki: "http://www.serebii.net/attackdex-xy/skyuppercut.shtml"
};

var sand_tomb = {
    name: "Sand Tomb",
    type: "Ground",
    cat: "Physical",
    power: 35,
    pp: 15,
    acc: 85,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/sandtomb.shtml"
};

var sheer_cold = {
    name: "Sheer Cold",
    type: "Ice",
    cat: "Special",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "One-Hit-KO, if it hits.",
    wiki: "http://www.serebii.net/attackdex-xy/sheercold.shtml"
};

var muddy_water = {
    name: "Muddy Water",
    type: "Water",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 85,
    effect: "May lower opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-xy/muddywater.shtml"
};

var bullet_seed = {
    name: "Bullet Seed",
    type: "Grass",
    cat: "Physical",
    power: 25,
    pp: 30,
    acc: 100,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/bulletseed.shtml"
};

var aerial_ace = {
    name: "Aerial Ace",
    type: "Flying",
    cat: "Physical",
    power: 60,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-xy/aerialace.shtml"
};

var icicle_spear = {
    name: "Icicle Spear",
    type: "Ice",
    cat: "Physical",
    power: 25,
    pp: 30,
    acc: 100,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/iciclespear.shtml"
};

var iron_defense = {
    name: "Iron Defense",
    type: "Steel",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Sharply raises user's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/irondefense.shtml"
};

var block = {
    name: "Block",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Opponent cannot flee or switch.",
    wiki: "http://www.serebii.net/attackdex-xy/block.shtml"
};

var howl = {
    name: "Howl",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "Raises user's Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/howl.shtml"
};

var dragon_claw = {
    name: "Dragon Claw",
    type: "Dragon",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/dragonclaw.shtml"
};

var frenzy_plant = {
    name: "Frenzy Plant",
    type: "Grass",
    cat: "Special",
    power: 150,
    pp: 5,
    acc: 90,
    effect: "User must recharge next turn.",
    wiki: "http://www.serebii.net/attackdex-xy/frenzyplant.shtml"
};

var bulk_up = {
    name: "Bulk Up",
    type: "Fighting",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Attack and Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/bulkup.shtml"
};

var bounce = {
    name: "Bounce",
    type: "Flying",
    cat: "Physical",
    power: 85,
    pp: 5,
    acc: 85,
    effect: "Springs up on first turn, attacks on second. May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/bounce.shtml"
};

var mud_shot = {
    name: "Mud Shot",
    type: "Ground",
    cat: "Special",
    power: 55,
    pp: 15,
    acc: 95,
    effect: "Lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/mudshot.shtml"
};

var poison_tail = {
    name: "Poison Tail",
    type: "Poison",
    cat: "Physical",
    power: 50,
    pp: 25,
    acc: 100,
    effect: "High critical hit ratio. May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/poisontail.shtml"
};

var covet = {
    name: "Covet",
    type: "Normal",
    cat: "Physical",
    power: 60,
    pp: 25,
    acc: 100,
    effect: "Opponent's item is stolen by the user.",
    wiki: "http://www.serebii.net/attackdex-xy/covet.shtml"
};

var volt_tackle = {
    name: "Volt Tackle",
    type: "Electric",
    cat: "Physical",
    power: 120,
    pp: 15,
    acc: 100,
    effect: "User receives recoil damage. May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/volttackle.shtml"
};

var magical_leaf = {
    name: "Magical Leaf",
    type: "Grass",
    cat: "Special",
    power: 60,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-xy/magicalleaf.shtml"
};

var water_sport = {
    name: "Water Sport",
    type: "Water",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Weakens the power of Fire-type moves.",
    wiki: "http://www.serebii.net/attackdex-xy/watersport.shtml"
};

var calm_mind = {
    name: "Calm Mind",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Special Attack and Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/calmmind.shtml"
};

var leaf_blade = {
    name: "Leaf Blade",
    type: "Grass",
    cat: "Physical",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/leafblade.shtml"
};

var dragon_dance = {
    name: "Dragon Dance",
    type: "Dragon",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Attack and Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/dragondance.shtml"
};

var rock_blast = {
    name: "Rock Blast",
    type: "Rock",
    cat: "Physical",
    power: 25,
    pp: 10,
    acc: 90,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/rockblast.shtml"
};

var shock_wave = {
    name: "Shock Wave",
    type: "Electric",
    cat: "Special",
    power: 60,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-xy/shockwave.shtml"
};

var water_pulse = {
    name: "Water Pulse",
    type: "Water",
    cat: "Special",
    power: 60,
    pp: 20,
    acc: 100,
    effect: "May confuse opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/waterpulse.shtml"
};

var doom_desire = {
    name: "Doom Desire",
    type: "Steel",
    cat: "Special",
    power: 140,
    pp: 5,
    acc: 100,
    effect: "Damage occurs 2 turns later.",
    wiki: "http://www.serebii.net/attackdex-xy/doomdesire.shtml"
};

var psycho_boost = {
    name: "Psycho Boost",
    type: "Psychic",
    cat: "Special",
    power: 140,
    pp: 5,
    acc: 90,
    effect: "Sharply lowers user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/psychoboost.shtml"
};

var roost = {
    name: "Roost",
    type: "Flying",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User recovers half of its max HP and loses the Flying type temporarily.",
    wiki: "http://www.serebii.net/attackdex-xy/roost.shtml"
};

var gravity = {
    name: "Gravity",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Prevents moves like Fly and Bounce and the Ability Levitate for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/gravity.shtml"
};

var miracle_eye = {
    name: "Miracle Eye",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "Resets opponent's Evasiveness, removes Dark's Psychic immunity.",
    wiki: "http://www.serebii.net/attackdex-xy/miracleeye.shtml"
};

var wake_up_slap = {
    name: "Wake_up Slap",
    type: "Fighting",
    cat: "Physical",
    power: 70,
    pp: 10,
    acc: 100,
    effect: "Power doubles if opponent is asleep, but wakes it up.",
    wiki: "http://www.serebii.net/attackdex-xy/wake_upslap.shtml"
};

var hammer_arm = {
    name: "Hammer Arm",
    type: "Fighting",
    cat: "Physical",
    power: 100,
    pp: 10,
    acc: 90,
    effect: "Lowers user's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/hammerarm.shtml"
};

var gyro_ball = {
    name: "Gyro Ball",
    type: "Steel",
    cat: "Physical",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "The slower the user, the stronger the attack.",
    wiki: "http://www.serebii.net/attackdex-xy/gyroball.shtml"
};

var healing_wish = {
    name: "Healing Wish",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "The user faints and the next Pokémon released is fully healed.",
    wiki: "http://www.serebii.net/attackdex-xy/healingwish.shtml"
};

var brine = {
    name: "Brine",
    type: "Water",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 100,
    effect: "Power doubles if opponent's HP is less than 50%.",
    wiki: "http://www.serebii.net/attackdex-xy/brine.shtml"
};

var natural_gift = {
    name: "Natural Gift",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Power and type depend on the user's held berry.",
    wiki: "http://www.serebii.net/attackdex-xy/naturalgift.shtml"
};

var feint = {
    name: "Feint",
    type: "Normal",
    cat: "Physical",
    power: 30,
    pp: 10,
    acc: 100,
    effect: "Only hits if opponent uses Protect or Detect in the same turn.",
    wiki: "http://www.serebii.net/attackdex-xy/feint.shtml"
};

var pluck = {
    name: "Pluck",
    type: "Flying",
    cat: "Physical",
    power: 60,
    pp: 20,
    acc: 100,
    effect: "If the opponent is holding a berry, its effect is stolen by user.",
    wiki: "http://www.serebii.net/attackdex-xy/pluck.shtml"
};

var tailwind = {
    name: "Tailwind",
    type: "Flying",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Doubles Speed for 4 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/tailwind.shtml"
};

var acupressure = {
    name: "Acupressure",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Sharply raises a random stat.",
    wiki: "http://www.serebii.net/attackdex-xy/acupressure.shtml"
};

var metal_burst = {
    name: "Metal Burst",
    type: "Steel",
    cat: "Physical",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Deals damage equal to 1.5x opponent's attack.",
    wiki: "http://www.serebii.net/attackdex-xy/metalburst.shtml"
};

var u_turn = {
    name: "U_turn",
    type: "Bug",
    cat: "Physical",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "User switches out immediately after attacking.",
    wiki: "http://www.serebii.net/attackdex-xy/u_turn.shtml"
};

var close_combat = {
    name: "Close Combat",
    type: "Fighting",
    cat: "Physical",
    power: 120,
    pp: 5,
    acc: 100,
    effect: "Lowers user's Defense and Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/closecombat.shtml"
};

var payback = {
    name: "Payback",
    type: "Dark",
    cat: "Physical",
    power: 50,
    pp: 10,
    acc: 100,
    effect: "Power doubles if the user was attacked first.",
    wiki: "http://www.serebii.net/attackdex-xy/payback.shtml"
};

var assurance = {
    name: "Assurance",
    type: "Dark",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 100,
    effect: "Power doubles if opponent already took damage in the same turn.",
    wiki: "http://www.serebii.net/attackdex-xy/assurance.shtml"
};

var embargo = {
    name: "Embargo",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Opponent cannot use items.",
    wiki: "http://www.serebii.net/attackdex-xy/embargo.shtml"
};

var fling = {
    name: "Fling",
    type: "Dark",
    cat: "Physical",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Power depends on held item.",
    wiki: "http://www.serebii.net/attackdex-xy/fling.shtml"
};

var psycho_shift = {
    name: "Psycho Shift",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Gives the opponent the user's status condition, if it hits.",
    wiki: "http://www.serebii.net/attackdex-xy/psychoshift.shtml"
};

var trump_card = {
    name: "Trump Card",
    type: "Normal",
    cat: "Special",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "The lower the PP, the higher the power.",
    wiki: "http://www.serebii.net/attackdex-xy/trumpcard.shtml"
};

var heal_block = {
    name: "Heal Block",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Prevents the opponent from restoring HP for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/healblock.shtml"
};

var wring_out = {
    name: "Wring Out",
    type: "Normal",
    cat: "Special",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "The higher the opponent's HP, the higher the damage.",
    wiki: "http://www.serebii.net/attackdex-xy/wringout.shtml"
};

var power_trick = {
    name: "Power Trick",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User's own Attack and Defense switch.",
    wiki: "http://www.serebii.net/attackdex-xy/powertrick.shtml"
};

var gastro_acid = {
    name: "Gastro Acid",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Cancels out the effect of the opponent's Ability.",
    wiki: "http://www.serebii.net/attackdex-xy/gastroacid.shtml"
};

var lucky_chant = {
    name: "Lucky Chant",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Opponent cannot land critical hits for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/luckychant.shtml"
};

var me_first = {
    name: "Me First",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "User copies the opponent's attack with 1.5× power.",
    wiki: "http://www.serebii.net/attackdex-xy/mefirst.shtml"
};

var copycat = {
    name: "Copycat",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Copies opponent's last move.",
    wiki: "http://www.serebii.net/attackdex-xy/copycat.shtml"
};

var power_swap = {
    name: "Power Swap",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User and opponent swap Attack and Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/powerswap.shtml"
};

var guard_swap = {
    name: "Guard Swap",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User and opponent swap Defense and Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/guardswap.shtml"
};

var punishment = {
    name: "Punishment",
    type: "Dark",
    cat: "Physical",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "Power increases when opponent's stats have been raised.",
    wiki: "http://www.serebii.net/attackdex-xy/punishment.shtml"
};

var last_resort = {
    name: "Last Resort",
    type: "Normal",
    cat: "Physical",
    power: 140,
    pp: 5,
    acc: 100,
    effect: "Can only be used after all other moves are used.",
    wiki: "http://www.serebii.net/attackdex-xy/lastresort.shtml"
};

var worry_seed = {
    name: "Worry Seed",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Changes the opponent's Ability to Insomnia.",
    wiki: "http://www.serebii.net/attackdex-xy/worryseed.shtml"
};

var sucker_punch = {
    name: "Sucker Punch",
    type: "Dark",
    cat: "Physical",
    power: 80,
    pp: 5,
    acc: 100,
    effect: "User attacks first, but only works if opponent is readying an attack.",
    wiki: "http://www.serebii.net/attackdex-xy/suckerpunch.shtml"
};

var toxic_spikes = {
    name: "Toxic Spikes",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Poisons opponents when they switch into battle.",
    wiki: "http://www.serebii.net/attackdex-xy/toxicspikes.shtml"
};

var heart_swap = {
    name: "Heart Swap",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Stat changes are swapped with the opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/heartswap.shtml"
};

var aqua_ring = {
    name: "Aqua Ring",
    type: "Water",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Restores a little HP each turn.",
    wiki: "http://www.serebii.net/attackdex-xy/aquaring.shtml"
};

var magnet_rise = {
    name: "Magnet Rise",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User becomes immune to Ground-type moves for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/magnetrise.shtml"
};

var flare_blitz = {
    name: "Flare Blitz",
    type: "Fire",
    cat: "Physical",
    power: 120,
    pp: 15,
    acc: 100,
    effect: "User receives recoil damage. May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/flareblitz.shtml"
};

var force_palm = {
    name: "Force Palm",
    type: "Fighting",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/forcepalm.shtml"
};

var aura_sphere = {
    name: "Aura Sphere",
    type: "Fighting",
    cat: "Special",
    power: 80,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-xy/aurasphere.shtml"
};

var rock_polish = {
    name: "Rock Polish",
    type: "Rock",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Sharply raises user's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/rockpolish.shtml"
};

var poison_jab = {
    name: "Poison Jab",
    type: "Poison",
    cat: "Physical",
    power: 80,
    pp: 20,
    acc: 100,
    effect: "May poison the opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/poisonjab.shtml"
};

var dark_pulse = {
    name: "Dark Pulse",
    type: "Dark",
    cat: "Special",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/darkpulse.shtml"
};

var night_slash = {
    name: "Night Slash",
    type: "Dark",
    cat: "Physical",
    power: 70,
    pp: 15,
    acc: 100,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/nightslash.shtml"
};

var aqua_tail = {
    name: "Aqua Tail",
    type: "Water",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 90,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/aquatail.shtml"
};

var seed_bomb = {
    name: "Seed Bomb",
    type: "Grass",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/seedbomb.shtml"
};

var air_slash = {
    name: "Air Slash",
    type: "Flying",
    cat: "Special",
    power: 75,
    pp: 15,
    acc: 95,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/airslash.shtml"
};

var x_scissor = {
    name: "X_scissor",
    type: "Bug",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/x_scissor.shtml"
};

var bug_buzz = {
    name: "Bug Buzz",
    type: "Bug",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/bugbuzz.shtml"
};

var dragon_pulse = {
    name: "Dragon Pulse",
    type: "Dragon",
    cat: "Special",
    power: 85,
    pp: 10,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/dragonpulse.shtml"
};

var dragon_rush = {
    name: "Dragon Rush",
    type: "Dragon",
    cat: "Physical",
    power: 100,
    pp: 10,
    acc: 75,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/dragonrush.shtml"
};

var power_gem = {
    name: "Power Gem",
    type: "Rock",
    cat: "Special",
    power: 80,
    pp: 20,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/powergem.shtml"
};

var drain_punch = {
    name: "Drain Punch",
    type: "Fighting",
    cat: "Physical",
    power: 75,
    pp: 10,
    acc: 100,
    effect: "User recovers half the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/drainpunch.shtml"
};

var vacuum_wave = {
    name: "Vacuum Wave",
    type: "Fighting",
    cat: "Special",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-xy/vacuumwave.shtml"
};

var focus_blast = {
    name: "Focus Blast",
    type: "Fighting",
    cat: "Special",
    power: 120,
    pp: 5,
    acc: 70,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/focusblast.shtml"
};

var energy_ball = {
    name: "Energy Ball",
    type: "Grass",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/energyball.shtml"
};

var brave_bird = {
    name: "Brave Bird",
    type: "Flying",
    cat: "Physical",
    power: 120,
    pp: 15,
    acc: 100,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-xy/bravebird.shtml"
};

var earth_power = {
    name: "Earth Power",
    type: "Ground",
    cat: "Special",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/earthpower.shtml"
};

var switcheroo = {
    name: "Switcheroo",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "Swaps held items with the opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/switcheroo.shtml"
};

var giga_impact = {
    name: "Giga Impact",
    type: "Normal",
    cat: "Physical",
    power: 150,
    pp: 5,
    acc: 90,
    effect: "User must recharge next turn.",
    wiki: "http://www.serebii.net/attackdex-xy/gigaimpact.shtml"
};

var nasty_plot = {
    name: "Nasty Plot",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Sharply raises user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/nastyplot.shtml"
};

var bullet_punch = {
    name: "Bullet Punch",
    type: "Steel",
    cat: "Physical",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-xy/bulletpunch.shtml"
};

var avalanche = {
    name: "Avalanche",
    type: "Ice",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 100,
    effect: "Power doubles if user took damage first.",
    wiki: "http://www.serebii.net/attackdex-xy/avalanche.shtml"
};

var ice_shard = {
    name: "Ice Shard",
    type: "Ice",
    cat: "Physical",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-xy/iceshard.shtml"
};

var shadow_claw = {
    name: "Shadow Claw",
    type: "Ghost",
    cat: "Physical",
    power: 70,
    pp: 15,
    acc: 100,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/shadowclaw.shtml"
};

var thunder_fang = {
    name: "Thunder Fang",
    type: "Electric",
    cat: "Physical",
    power: 65,
    pp: 15,
    acc: 95,
    effect: "May cause flinching and/or paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/thunderfang.shtml"
};

var ice_fang = {
    name: "Ice Fang",
    type: "Ice",
    cat: "Physical",
    power: 65,
    pp: 15,
    acc: 95,
    effect: "May cause flinching and/or freeze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/icefang.shtml"
};

var fire_fang = {
    name: "Fire Fang",
    type: "Fire",
    cat: "Physical",
    power: 65,
    pp: 15,
    acc: 95,
    effect: "May cause flinching and/or burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/firefang.shtml"
};

var shadow_sneak = {
    name: "Shadow Sneak",
    type: "Ghost",
    cat: "Physical",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-xy/shadowsneak.shtml"
};

var mud_bomb = {
    name: "Mud Bomb",
    type: "Ground",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 85,
    effect: "May lower opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-xy/mudbomb.shtml"
};

var psycho_cut = {
    name: "Psycho Cut",
    type: "Psychic",
    cat: "Physical",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/psychocut.shtml"
};

var zen_headbutt = {
    name: "Zen Headbutt",
    type: "Psychic",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 90,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/zenheadbutt.shtml"
};

var mirror_shot = {
    name: "Mirror Shot",
    type: "Steel",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 85,
    effect: "May lower opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-xy/mirrorshot.shtml"
};

var flash_cannon = {
    name: "Flash Cannon",
    type: "Steel",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/flashcannon.shtml"
};

var rock_climb = {
    name: "Rock Climb",
    type: "Normal",
    cat: "Physical",
    power: 90,
    pp: 20,
    acc: 85,
    effect: "May confuse opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/rockclimb.shtml"
};

var defog = {
    name: "Defog",
    type: "Flying",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Lowers opponent's Evasiveness and clears fog.",
    wiki: "http://www.serebii.net/attackdex-xy/defog.shtml"
};

var trick_room = {
    name: "Trick Room",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 5,
    acc: -1,
    effect: "Slower Pokémon move first in the turn for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/trickroom.shtml"
};

var draco_meteor = {
    name: "Draco Meteor",
    type: "Dragon",
    cat: "Special",
    power: 130,
    pp: 5,
    acc: 90,
    effect: "Sharply lowers user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/dracometeor.shtml"
};

var discharge = {
    name: "Discharge",
    type: "Electric",
    cat: "Special",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/discharge.shtml"
};

var lava_plume = {
    name: "Lava Plume",
    type: "Fire",
    cat: "Special",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/lavaplume.shtml"
};

var leaf_storm = {
    name: "Leaf Storm",
    type: "Grass",
    cat: "Special",
    power: 130,
    pp: 5,
    acc: 90,
    effect: "Sharply lowers user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/leafstorm.shtml"
};

var power_whip = {
    name: "Power Whip",
    type: "Grass",
    cat: "Physical",
    power: 120,
    pp: 10,
    acc: 85,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/powerwhip.shtml"
};

var rock_wrecker = {
    name: "Rock Wrecker",
    type: "Rock",
    cat: "Physical",
    power: 150,
    pp: 5,
    acc: 90,
    effect: "User must recharge next turn.",
    wiki: "http://www.serebii.net/attackdex-xy/rockwrecker.shtml"
};

var cross_poison = {
    name: "Cross Poison",
    type: "Poison",
    cat: "Physical",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "High critical hit ratio. May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/crosspoison.shtml"
};

var gunk_shot = {
    name: "Gunk Shot",
    type: "Poison",
    cat: "Physical",
    power: 120,
    pp: 5,
    acc: 80,
    effect: "May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/gunkshot.shtml"
};

var iron_head = {
    name: "Iron Head",
    type: "Steel",
    cat: "Physical",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/ironhead.shtml"
};

var magnet_bomb = {
    name: "Magnet Bomb",
    type: "Steel",
    cat: "Physical",
    power: 60,
    pp: 20,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-xy/magnetbomb.shtml"
};

var stone_edge = {
    name: "Stone Edge",
    type: "Rock",
    cat: "Physical",
    power: 100,
    pp: 5,
    acc: 80,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/stoneedge.shtml"
};

var captivate = {
    name: "Captivate",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Sharply lowers opponent's Special Attack if opposite gender.",
    wiki: "http://www.serebii.net/attackdex-xy/captivate.shtml"
};

var stealth_rock = {
    name: "Stealth Rock",
    type: "Rock",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Damages opponent switching into battle.",
    wiki: "http://www.serebii.net/attackdex-xy/stealthrock.shtml"
};

var grass_knot = {
    name: "Grass Knot",
    type: "Grass",
    cat: "Special",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "The heavier the opponent, the stronger the attack.",
    wiki: "http://www.serebii.net/attackdex-xy/grassknot.shtml"
};

var chatter = {
    name: "Chatter",
    type: "Flying",
    cat: "Special",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "Confuses opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/chatter.shtml"
};

var judgment = {
    name: "Judgment",
    type: "Normal",
    cat: "Special",
    power: 100,
    pp: 10,
    acc: 100,
    effect: "Type depends on the Arceus Plate being held.",
    wiki: "http://www.serebii.net/attackdex-xy/judgment.shtml"
};

var bug_bite = {
    name: "Bug Bite",
    type: "Bug",
    cat: "Physical",
    power: 60,
    pp: 20,
    acc: 100,
    effect: "Receives the effect from the opponent's held berry.",
    wiki: "http://www.serebii.net/attackdex-xy/bugbite.shtml"
};

var charge_beam = {
    name: "Charge Beam",
    type: "Electric",
    cat: "Special",
    power: 50,
    pp: 10,
    acc: 90,
    effect: "May raise user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/chargebeam.shtml"
};

var wood_hammer = {
    name: "Wood Hammer",
    type: "Grass",
    cat: "Physical",
    power: 120,
    pp: 15,
    acc: 100,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-xy/woodhammer.shtml"
};

var aqua_jet = {
    name: "Aqua Jet",
    type: "Water",
    cat: "Physical",
    power: 40,
    pp: 20,
    acc: 100,
    effect: "User attacks first.",
    wiki: "http://www.serebii.net/attackdex-xy/aquajet.shtml"
};

var attack_order = {
    name: "Attack Order",
    type: "Bug",
    cat: "Physical",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/attackorder.shtml"
};

var defend_order = {
    name: "Defend Order",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Raises user's Defense and Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/defendorder.shtml"
};

var heal_order = {
    name: "Heal Order",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "User recovers half its max HP.",
    wiki: "http://www.serebii.net/attackdex-xy/healorder.shtml"
};

var head_smash = {
    name: "Head Smash",
    type: "Rock",
    cat: "Physical",
    power: 150,
    pp: 5,
    acc: 80,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-xy/headsmash.shtml"
};

var double_hit = {
    name: "Double Hit",
    type: "Normal",
    cat: "Physical",
    power: 35,
    pp: 10,
    acc: 90,
    effect: "Hits twice in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/doublehit.shtml"
};

var roar_of_time = {
    name: "Roar Of Time",
    type: "Dragon",
    cat: "Special",
    power: 150,
    pp: 5,
    acc: 90,
    effect: "User must recharge next turn.",
    wiki: "http://www.serebii.net/attackdex-xy/roaroftime.shtml"
};

var spacial_rend = {
    name: "Spacial Rend",
    type: "Dragon",
    cat: "Special",
    power: 100,
    pp: 5,
    acc: 95,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/spacialrend.shtml"
};

var lunar_dance = {
    name: "Lunar Dance",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "The user faints but the next Pokémon released is fully healed.",
    wiki: "http://www.serebii.net/attackdex-xy/lunardance.shtml"
};

var crush_grip = {
    name: "Crush Grip",
    type: "Normal",
    cat: "Physical",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "More powerful when opponent has higher HP.",
    wiki: "http://www.serebii.net/attackdex-xy/crushgrip.shtml"
};

var magma_storm = {
    name: "Magma Storm",
    type: "Fire",
    cat: "Special",
    power: 100,
    pp: 5,
    acc: 75,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/magmastorm.shtml"
};

var dark_void = {
    name: "Dark Void",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: 80,
    effect: "Puts all adjacent opponents to sleep.",
    wiki: "http://www.serebii.net/attackdex-xy/darkvoid.shtml"
};

var seed_flare = {
    name: "Seed Flare",
    type: "Grass",
    cat: "Special",
    power: 120,
    pp: 5,
    acc: 85,
    effect: "May lower opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/seedflare.shtml"
};

var ominous_wind = {
    name: "Ominous Wind",
    type: "Ghost",
    cat: "Special",
    power: 60,
    pp: 5,
    acc: 100,
    effect: "May raise all user's stats at once.",
    wiki: "http://www.serebii.net/attackdex-xy/ominouswind.shtml"
};

var shadow_force = {
    name: "Shadow Force",
    type: "Ghost",
    cat: "Physical",
    power: 120,
    pp: 5,
    acc: 100,
    effect: "Disappears on first turn, attacks on second. Can strike through Protect/Detect.",
    wiki: "http://www.serebii.net/attackdex-xy/shadowforce.shtml"
};

var hone_claws = {
    name: "Hone Claws",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Raises user's Attack and Accuracy.",
    wiki: "http://www.serebii.net/attackdex-xy/honeclaws.shtml"
};

var wide_guard = {
    name: "Wide Guard",
    type: "Rock",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Protects the user's team from multi-target attacks.",
    wiki: "http://www.serebii.net/attackdex-xy/wideguard.shtml"
};

var guard_split = {
    name: "Guard Split",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Averages Defense and Special Defense with the target.",
    wiki: "http://www.serebii.net/attackdex-xy/guardsplit.shtml"
};

var power_split = {
    name: "Power Split",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Averages Attack and Special Attack with the target.",
    wiki: "http://www.serebii.net/attackdex-xy/powersplit.shtml"
};

var wonder_room = {
    name: "Wonder Room",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Swaps every Pokémon's Defense and Special Defense for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/wonderroom.shtml"
};

var psyshock = {
    name: "Psyshock",
    type: "Psychic",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Inflicts damage based on the target's Defense, not Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/psyshock.shtml"
};

var venoshock = {
    name: "Venoshock",
    type: "Poison",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 100,
    effect: "Inflicts double damage if the target is poisoned.",
    wiki: "http://www.serebii.net/attackdex-xy/venoshock.shtml"
};

var autotomize = {
    name: "Autotomize",
    type: "Steel",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Halves weight and sharply raises Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/autotomize.shtml"
};

var rage_powder = {
    name: "Rage Powder",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Forces attacks to hit user, not team-mates.",
    wiki: "http://www.serebii.net/attackdex-xy/ragepowder.shtml"
};

var telekinesis = {
    name: "Telekinesis",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Ignores opponent's Evasiveness for three turns, add Ground immunity.",
    wiki: "http://www.serebii.net/attackdex-xy/telekinesis.shtml"
};

var magic_room = {
    name: "Magic Room",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Suppresses the effects of held items for five turns.",
    wiki: "http://www.serebii.net/attackdex-xy/magicroom.shtml"
};

var smack_down = {
    name: "Smack Down",
    type: "Rock",
    cat: "Physical",
    power: 50,
    pp: 15,
    acc: 100,
    effect: "Makes Flying-type Pokémon vulnerable to Ground moves.",
    wiki: "http://www.serebii.net/attackdex-xy/smackdown.shtml"
};

var storm_throw = {
    name: "Storm Throw",
    type: "Fighting",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 100,
    effect: "Always results in a critical hit.",
    wiki: "http://www.serebii.net/attackdex-xy/stormthrow.shtml"
};

var flame_burst = {
    name: "Flame Burst",
    type: "Fire",
    cat: "Special",
    power: 70,
    pp: 15,
    acc: 100,
    effect: "May also injure nearby Pokémon.",
    wiki: "http://www.serebii.net/attackdex-xy/flameburst.shtml"
};

var sludge_wave = {
    name: "Sludge Wave",
    type: "Poison",
    cat: "Special",
    power: 95,
    pp: 10,
    acc: 100,
    effect: "May poison opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/sludgewave.shtml"
};

var quiver_dance = {
    name: "Quiver Dance",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Special Attack, Special Defense and Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/quiverdance.shtml"
};

var heavy_slam = {
    name: "Heavy Slam",
    type: "Steel",
    cat: "Physical",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "The heavier the user, the stronger the attack.",
    wiki: "http://www.serebii.net/attackdex-xy/heavyslam.shtml"
};

var synchronoise = {
    name: "Synchronoise",
    type: "Psychic",
    cat: "Special",
    power: 120,
    pp: 15,
    acc: 100,
    effect: "Hits any Pokémon that shares a type with the user.",
    wiki: "http://www.serebii.net/attackdex-xy/synchronoise.shtml"
};

var electro_ball = {
    name: "Electro Ball",
    type: "Electric",
    cat: "Special",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "The faster the user, the stronger the attack.",
    wiki: "http://www.serebii.net/attackdex-xy/electroball.shtml"
};

var soak = {
    name: "Soak",
    type: "Water",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Changes the target's type to water.",
    wiki: "http://www.serebii.net/attackdex-xy/soak.shtml"
};

var flame_charge = {
    name: "Flame Charge",
    type: "Fire",
    cat: "Physical",
    power: 50,
    pp: 20,
    acc: 100,
    effect: "Raises user's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/flamecharge.shtml"
};

var coil = {
    name: "Coil",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises user's Attack, Defense and Accuracy.",
    wiki: "http://www.serebii.net/attackdex-xy/coil.shtml"
};

var low_sweep = {
    name: "Low Sweep",
    type: "Fighting",
    cat: "Physical",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/lowsweep.shtml"
};

var acid_spray = {
    name: "Acid Spray",
    type: "Poison",
    cat: "Special",
    power: 40,
    pp: 20,
    acc: 100,
    effect: "Sharply lowers opponent's Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/acidspray.shtml"
};

var foul_play = {
    name: "Foul Play",
    type: "Dark",
    cat: "Physical",
    power: 95,
    pp: 15,
    acc: 100,
    effect: "Uses the opponent's Attack stat.",
    wiki: "http://www.serebii.net/attackdex-xy/foulplay.shtml"
};

var simple_beam = {
    name: "Simple Beam",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Changes target's ability to Simple.",
    wiki: "http://www.serebii.net/attackdex-xy/simplebeam.shtml"
};

var entrainment = {
    name: "Entrainment",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Makes target's ability same as user's.",
    wiki: "http://www.serebii.net/attackdex-xy/entrainment.shtml"
};

var after_you = {
    name: "After You",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Gives target priority in the next turn.",
    wiki: "http://www.serebii.net/attackdex-xy/afteryou.shtml"
};

var round = {
    name: "Round",
    type: "Normal",
    cat: "Special",
    power: 60,
    pp: 15,
    acc: 100,
    effect: "Power increases if teammates use it in the same turn.",
    wiki: "http://www.serebii.net/attackdex-xy/round.shtml"
};

var echoed_voice = {
    name: "Echoed Voice",
    type: "Normal",
    cat: "Special",
    power: 40,
    pp: 15,
    acc: 100,
    effect: "Power increases each turn.",
    wiki: "http://www.serebii.net/attackdex-xy/echoedvoice.shtml"
};

var chip_away = {
    name: "Chip Away",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "Ignores opponent's stat changes.",
    wiki: "http://www.serebii.net/attackdex-xy/chipaway.shtml"
};

var clear_smog = {
    name: "Clear Smog",
    type: "Poison",
    cat: "Special",
    power: 50,
    pp: 15,
    acc: -1,
    effect: "Removes all of the target's stat changes.",
    wiki: "http://www.serebii.net/attackdex-xy/clearsmog.shtml"
};

var stored_power = {
    name: "Stored Power",
    type: "Psychic",
    cat: "Special",
    power: 20,
    pp: 10,
    acc: 100,
    effect: "Power increases when user's stats have been raised.",
    wiki: "http://www.serebii.net/attackdex-xy/storedpower.shtml"
};

var quick_guard = {
    name: "Quick Guard",
    type: "Fighting",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Fast moves won't damage the user or its teammates.",
    wiki: "http://www.serebii.net/attackdex-xy/quickguard.shtml"
};

var ally_switch = {
    name: "Ally Switch",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "User switches with opposite teammate.",
    wiki: "http://www.serebii.net/attackdex-xy/allyswitch.shtml"
};

var scald = {
    name: "Scald",
    type: "Water",
    cat: "Special",
    power: 80,
    pp: 15,
    acc: 100,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/scald.shtml"
};

var shell_smash = {
    name: "Shell Smash",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Sharply raises user's Attack, Special Attack and Speed but lowers Defense and Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/shellsmash.shtml"
};

var heal_pulse = {
    name: "Heal Pulse",
    type: "Psychic",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Restores half the target's max HP.",
    wiki: "http://www.serebii.net/attackdex-xy/healpulse.shtml"
};

var hex = {
    name: "Hex",
    type: "Ghost",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 100,
    effect: "Inflicts more damage if the target has a status condition.",
    wiki: "http://www.serebii.net/attackdex-xy/hex.shtml"
};

var sky_drop = {
    name: "Sky Drop",
    type: "Flying",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 100,
    effect: "Takes opponent into the air on first turn, drops them on second turn.",
    wiki: "http://www.serebii.net/attackdex-xy/skydrop.shtml"
};

var shift_gear = {
    name: "Shift Gear",
    type: "Steel",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Raises user's Attack and sharply raises Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/shiftgear.shtml"
};

var circle_throw = {
    name: "Circle Throw",
    type: "Fighting",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 90,
    effect: "In battles, the opponent switches. In the wild, the Pokémon runs.",
    wiki: "http://www.serebii.net/attackdex-xy/circlethrow.shtml"
};

var incinerate = {
    name: "Incinerate",
    type: "Fire",
    cat: "Special",
    power: 60,
    pp: 15,
    acc: 100,
    effect: "Destroys the target's held berry.",
    wiki: "http://www.serebii.net/attackdex-xy/incinerate.shtml"
};

var quash = {
    name: "Quash",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Makes the target act last this turn.",
    wiki: "http://www.serebii.net/attackdex-xy/quash.shtml"
};

var acrobatics = {
    name: "Acrobatics",
    type: "Flying",
    cat: "Physical",
    power: 55,
    pp: 15,
    acc: 100,
    effect: "Stronger when the user does not have a held item.",
    wiki: "http://www.serebii.net/attackdex-xy/acrobatics.shtml"
};

var reflect_type = {
    name: "Reflect Type",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "User becomes the target's type.",
    wiki: "http://www.serebii.net/attackdex-xy/reflecttype.shtml"
};

var retaliate = {
    name: "Retaliate",
    type: "Normal",
    cat: "Physical",
    power: 70,
    pp: 5,
    acc: 100,
    effect: "Inflicts double damage if a teammate fainted on the last turn.",
    wiki: "http://www.serebii.net/attackdex-xy/retaliate.shtml"
};

var final_gambit = {
    name: "Final Gambit",
    type: "Fighting",
    cat: "Special",
    power: -1,
    pp: 5,
    acc: 100,
    effect: "Inflicts damage equal to the user's remaining HP. User faints.",
    wiki: "http://www.serebii.net/attackdex-xy/finalgambit.shtml"
};

var bestow = {
    name: "Bestow",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: -1,
    effect: "Gives the user's held item to the target.",
    wiki: "http://www.serebii.net/attackdex-xy/bestow.shtml"
};

var inferno = {
    name: "Inferno",
    type: "Fire",
    cat: "Special",
    power: 100,
    pp: 5,
    acc: 50,
    effect: "Burns opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/inferno.shtml"
};

var water_pledge = {
    name: "Water Pledge",
    type: "Water",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Added effects appear if preceded by Fire Pledge or succeeded by Grass Pledge.",
    wiki: "http://www.serebii.net/attackdex-xy/waterpledge.shtml"
};

var fire_pledge = {
    name: "Fire Pledge",
    type: "Fire",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Added effects appear if combined with Grass Pledge or Water Pledge.",
    wiki: "http://www.serebii.net/attackdex-xy/firepledge.shtml"
};

var grass_pledge = {
    name: "Grass Pledge",
    type: "Grass",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Added effects appear if preceded by Water Pledge or succeeded by Fire Pledge.",
    wiki: "http://www.serebii.net/attackdex-xy/grasspledge.shtml"
};

var volt_switch = {
    name: "Volt Switch",
    type: "Electric",
    cat: "Special",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "User must switch out after attacking.",
    wiki: "http://www.serebii.net/attackdex-xy/voltswitch.shtml"
};

var struggle_bug = {
    name: "Struggle Bug",
    type: "Bug",
    cat: "Special",
    power: 50,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/strugglebug.shtml"
};

var bulldoze = {
    name: "Bulldoze",
    type: "Ground",
    cat: "Physical",
    power: 60,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/bulldoze.shtml"
};

var frost_breath = {
    name: "Frost Breath",
    type: "Ice",
    cat: "Special",
    power: 60,
    pp: 10,
    acc: 90,
    effect: "Always results in a critical hit.",
    wiki: "http://www.serebii.net/attackdex-xy/frostbreath.shtml"
};

var dragon_tail = {
    name: "Dragon Tail",
    type: "Dragon",
    cat: "Physical",
    power: 60,
    pp: 10,
    acc: 90,
    effect: "In battles, the opponent switches. In the wild, the Pokémon runs.",
    wiki: "http://www.serebii.net/attackdex-xy/dragontail.shtml"
};

var work_up = {
    name: "Work Up",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Raises user's Attack and Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/workup.shtml"
};

var electroweb = {
    name: "Electroweb",
    type: "Electric",
    cat: "Special",
    power: 55,
    pp: 15,
    acc: 95,
    effect: "Lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/electroweb.shtml"
};

var wild_charge = {
    name: "Wild Charge",
    type: "Electric",
    cat: "Physical",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-xy/wildcharge.shtml"
};

var drill_run = {
    name: "Drill Run",
    type: "Ground",
    cat: "Physical",
    power: 80,
    pp: 10,
    acc: 95,
    effect: "High critical hit ratio.",
    wiki: "http://www.serebii.net/attackdex-xy/drillrun.shtml"
};

var dual_chop = {
    name: "Dual Chop",
    type: "Dragon",
    cat: "Physical",
    power: 40,
    pp: 15,
    acc: 90,
    effect: "Hits twice in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/dualchop.shtml"
};

var heart_stamp = {
    name: "Heart Stamp",
    type: "Psychic",
    cat: "Physical",
    power: 60,
    pp: 25,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/heartstamp.shtml"
};

var horn_leech = {
    name: "Horn Leech",
    type: "Grass",
    cat: "Physical",
    power: 75,
    pp: 10,
    acc: 100,
    effect: "User recovers half the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/hornleech.shtml"
};

var sacred_sword = {
    name: "Sacred Sword",
    type: "Fighting",
    cat: "Physical",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "Ignores opponent's stat changes.",
    wiki: "http://www.serebii.net/attackdex-xy/sacredsword.shtml"
};

var razor_shell = {
    name: "Razor Shell",
    type: "Water",
    cat: "Physical",
    power: 75,
    pp: 10,
    acc: 95,
    effect: "May lower opponent's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/razorshell.shtml"
};

var heat_crash = {
    name: "Heat Crash",
    type: "Fire",
    cat: "Physical",
    power: -1,
    pp: 10,
    acc: 100,
    effect: "The heavier the user, the stronger the attack.",
    wiki: "http://www.serebii.net/attackdex-xy/heatcrash.shtml"
};

var leaf_tornado = {
    name: "Leaf Tornado",
    type: "Grass",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 90,
    effect: "May lower opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-xy/leaftornado.shtml"
};

var steamroller = {
    name: "Steamroller",
    type: "Bug",
    cat: "Physical",
    power: 65,
    pp: 20,
    acc: 100,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/steamroller.shtml"
};

var cotton_guard = {
    name: "Cotton Guard",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Drastically raises user's Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/cottonguard.shtml"
};

var night_daze = {
    name: "Night Daze",
    type: "Dark",
    cat: "Special",
    power: 85,
    pp: 10,
    acc: 95,
    effect: "May lower opponent's Accuracy.",
    wiki: "http://www.serebii.net/attackdex-xy/nightdaze.shtml"
};

var psystrike = {
    name: "Psystrike",
    type: "Psychic",
    cat: "Special",
    power: 100,
    pp: 10,
    acc: 100,
    effect: "Inflicts damage based on the target's Defense, not Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/psystrike.shtml"
};

var tail_slap = {
    name: "Tail Slap",
    type: "Normal",
    cat: "Physical",
    power: 25,
    pp: 10,
    acc: 85,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/tailslap.shtml"
};

var hurricane = {
    name: "Hurricane",
    type: "Flying",
    cat: "Special",
    power: 110,
    pp: 10,
    acc: 70,
    effect: "May confuse opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/hurricane.shtml"
};

var head_charge = {
    name: "Head Charge",
    type: "Normal",
    cat: "Physical",
    power: 120,
    pp: 15,
    acc: 100,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-xy/headcharge.shtml"
};

var gear_grind = {
    name: "Gear Grind",
    type: "Steel",
    cat: "Physical",
    power: 50,
    pp: 15,
    acc: 85,
    effect: "Hits twice in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/geargrind.shtml"
};

var searing_shot = {
    name: "Searing Shot",
    type: "Fire",
    cat: "Special",
    power: 100,
    pp: 5,
    acc: 100,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/searingshot.shtml"
};

var techno_blast = {
    name: "Techno Blast",
    type: "Normal",
    cat: "Special",
    power: 120,
    pp: 5,
    acc: 100,
    effect: "Type depends on the Drive being held.",
    wiki: "http://www.serebii.net/attackdex-xy/technoblast.shtml"
};

var relic_song = {
    name: "Relic Song",
    type: "Normal",
    cat: "Special",
    power: 75,
    pp: 10,
    acc: 100,
    effect: "May put the target to sleep.",
    wiki: "http://www.serebii.net/attackdex-xy/relicsong.shtml"
};

var secret_sword = {
    name: "Secret Sword",
    type: "Fighting",
    cat: "Special",
    power: 85,
    pp: 10,
    acc: 100,
    effect: "Inflicts damage based on the target's Defense, not Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/secretsword.shtml"
};

var glaciate = {
    name: "Glaciate",
    type: "Ice",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 95,
    effect: "Lowers opponent's Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/glaciate.shtml"
};

var bolt_strike = {
    name: "Bolt Strike",
    type: "Electric",
    cat: "Physical",
    power: 130,
    pp: 5,
    acc: 85,
    effect: "May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/boltstrike.shtml"
};

var blue_flare = {
    name: "Blue Flare",
    type: "Fire",
    cat: "Special",
    power: 130,
    pp: 5,
    acc: 85,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/blueflare.shtml"
};

var fiery_dance = {
    name: "Fiery Dance",
    type: "Fire",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "May raise user's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/fierydance.shtml"
};

var freeze_shock = {
    name: "Freeze Shock",
    type: "Ice",
    cat: "Physical",
    power: 140,
    pp: 5,
    acc: 90,
    effect: "Charges on first turn, attacks on second. May paralyze opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/freezeshock.shtml"
};

var ice_burn = {
    name: "Ice Burn",
    type: "Ice",
    cat: "Special",
    power: 140,
    pp: 5,
    acc: 90,
    effect: "Charges on first turn, attacks on second. May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/iceburn.shtml"
};

var snarl = {
    name: "Snarl",
    type: "Dark",
    cat: "Special",
    power: 55,
    pp: 15,
    acc: 95,
    effect: "Lowers opponent's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/snarl.shtml"
};

var icicle_crash = {
    name: "Icicle Crash",
    type: "Ice",
    cat: "Physical",
    power: 85,
    pp: 10,
    acc: 90,
    effect: "May cause flinching.",
    wiki: "http://www.serebii.net/attackdex-xy/iciclecrash.shtml"
};

var v_create = {
    name: "V_create",
    type: "Fire",
    cat: "Physical",
    power: 180,
    pp: 5,
    acc: 95,
    effect: "Lowers user's Defense, Special Defense and Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/v_create.shtml"
};

var fusion_flare = {
    name: "Fusion Flare",
    type: "Fire",
    cat: "Special",
    power: 100,
    pp: 5,
    acc: 100,
    effect: "Power increases if Fusion Bolt is used in the same turn.",
    wiki: "http://www.serebii.net/attackdex-xy/fusionflare.shtml"
};

var fusion_bolt = {
    name: "Fusion Bolt",
    type: "Electric",
    cat: "Physical",
    power: 100,
    pp: 5,
    acc: 100,
    effect: "Power increases if Fusion Flare is used in the same turn.",
    wiki: "http://www.serebii.net/attackdex-xy/fusionbolt.shtml"
};

var flying_press = {
    name: "Flying Press",
    type: "Fighting",
    cat: "Physical",
    power: 80,
    pp: 10,
    acc: 95,
    effect: "Deals Fighting and Flying type damage.",
    wiki: "http://www.serebii.net/attackdex-xy/flyingpress.shtml"
};

var mat_block = {
    name: "Mat Block",
    type: "Fighting",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Protects teammates from damaging moves.",
    wiki: "http://www.serebii.net/attackdex-xy/matblock.shtml"
};

var belch = {
    name: "Belch",
    type: "Poison",
    cat: "Special",
    power: 120,
    pp: 10,
    acc: 90,
    effect: "User must have consumed a Berry.",
    wiki: "http://www.serebii.net/attackdex-xy/belch.shtml"
};

var rototiller = {
    name: "Rototiller",
    type: "Ground",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Raises Attack and Special Attack of Grass-types.",
    wiki: "http://www.serebii.net/attackdex-xy/rototiller.shtml"
};

var sticky_web = {
    name: "Sticky Web",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Lowers opponent's Speed when switching into battle.",
    wiki: "http://www.serebii.net/attackdex-xy/stickyweb.shtml"
};

var fell_stinger = {
    name: "Fell Stinger",
    type: "Bug",
    cat: "Physical",
    power: 30,
    pp: 25,
    acc: 100,
    effect: "Sharply raises user's Attack if target is KO'd.",
    wiki: "http://www.serebii.net/attackdex-xy/fellstinger.shtml"
};

var phantom_force = {
    name: "Phantom Force",
    type: "Ghost",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "Disappears on first turn, attacks on second. Can strike through Protect/Detect.",
    wiki: "http://www.serebii.net/attackdex-xy/phantomforce.shtml"
};

var trick_or_treat = {
    name: "Trick_or_treat",
    type: "Ghost",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Adds Ghost type to opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/trick_or_treat.shtml"
};

var noble_roar = {
    name: "Noble Roar",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: 100,
    effect: "Lowers opponent's Attack and Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/nobleroar.shtml"
};

var ion_deluge = {
    name: "Ion Deluge",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 25,
    acc: -1,
    effect: "Changes Normal-type moves to Electric-type.",
    wiki: "http://www.serebii.net/attackdex-xy/iondeluge.shtml"
};

var parabolic_charge = {
    name: "Parabolic Charge",
    type: "Electric",
    cat: "Special",
    power: 50,
    pp: 20,
    acc: 100,
    effect: "User recovers half the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/paraboliccharge.shtml"
};

var forests_curse = {
    name: "Forests Curse",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Adds Grass type to opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/forestscurse.shtml"
};

var petal_blizzard = {
    name: "Petal Blizzard",
    type: "Grass",
    cat: "Physical",
    power: 90,
    pp: 15,
    acc: 100,
    effect: "Hits all adjacent Pokémon.",
    wiki: "http://www.serebii.net/attackdex-xy/petalblizzard.shtml"
};

var freeze_dry = {
    name: "Freeze_dry",
    type: "Ice",
    cat: "Special",
    power: 70,
    pp: 20,
    acc: 100,
    effect: "May freeze opponent. Super-effective against Water types.",
    wiki: "http://www.serebii.net/attackdex-xy/freeze_dry.shtml"
};

var disarming_voice = {
    name: "Disarming Voice",
    type: "Fairy",
    cat: "Special",
    power: 40,
    pp: 15,
    acc: -1,
    effect: "Ignores Accuracy and Evasiveness.",
    wiki: "http://www.serebii.net/attackdex-xy/disarmingvoice.shtml"
};

var parting_shot = {
    name: "Parting Shot",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Lowers opponent's Attack and Special Attack then switches out.",
    wiki: "http://www.serebii.net/attackdex-xy/partingshot.shtml"
};

var topsy_turvy = {
    name: "Topsy_turvy",
    type: "Dark",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Reverses stat changes of opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/topsy_turvy.shtml"
};

var draining_kiss = {
    name: "Draining Kiss",
    type: "Fairy",
    cat: "Special",
    power: 50,
    pp: 10,
    acc: 100,
    effect: "User recovers most the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/drainingkiss.shtml"
};

var crafty_shield = {
    name: "Crafty Shield",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Protects the Pokémon from status moves.",
    wiki: "http://www.serebii.net/attackdex-xy/craftyshield.shtml"
};

var flower_shield = {
    name: "Flower Shield",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Sharply raises Defense of all Grass-type Pokémon on the field.",
    wiki: "http://www.serebii.net/attackdex-xy/flowershield.shtml"
};

var grassy_terrain = {
    name: "Grassy Terrain",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Restores a little HP of all Pokémon for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/grassyterrain.shtml"
};

var misty_terrain = {
    name: "Misty Terrain",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Protects the field from status conditions for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/mistyterrain.shtml"
};

var electrify = {
    name: "Electrify",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Changes the target's move to Electric type.",
    wiki: "http://www.serebii.net/attackdex-xy/electrify.shtml"
};

var play_rough = {
    name: "Play Rough",
    type: "Fairy",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 90,
    effect: "May lower opponent's Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/playrough.shtml"
};

var fairy_wind = {
    name: "Fairy Wind",
    type: "Fairy",
    cat: "Special",
    power: 40,
    pp: 30,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/fairywind.shtml"
};

var moonblast = {
    name: "Moonblast",
    type: "Fairy",
    cat: "Special",
    power: 95,
    pp: 15,
    acc: 100,
    effect: "May lower opponent's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/moonblast.shtml"
};

var boomburst = {
    name: "Boomburst",
    type: "Normal",
    cat: "Special",
    power: 140,
    pp: 10,
    acc: 100,
    effect: "Hits all adjacent Pokémon.",
    wiki: "http://www.serebii.net/attackdex-xy/boomburst.shtml"
};

var fairy_lock = {
    name: "Fairy Lock",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Prevents fleeing in the next turn.",
    wiki: "http://www.serebii.net/attackdex-xy/fairylock.shtml"
};

var kings_shield = {
    name: "Kings Shield",
    type: "Steel",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Protects against attacks, and lowers opponent's Attack on contact.",
    wiki: "http://www.serebii.net/attackdex-xy/kingsshield.shtml"
};

var play_nice = {
    name: "Play Nice",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Lowers opponent's Attack. Always hits.",
    wiki: "http://www.serebii.net/attackdex-xy/playnice.shtml"
};

var confide = {
    name: "Confide",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Lowers opponent's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/confide.shtml"
};

var diamond_storm = {
    name: "Diamond Storm",
    type: "Rock",
    cat: "Physical",
    power: 100,
    pp: 5,
    acc: 95,
    effect: "May raise user's Defense",
    wiki: "http://www.serebii.net/attackdex-xy/diamondstorm.shtml"
};

var steam_eruption = {
    name: "Steam Eruption",
    type: "Water",
    cat: "Special",
    power: 110,
    pp: 5,
    acc: 95,
    effect: "May burn opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/steameruption.shtml"
};

var hyperspace_hole = {
    name: "Hyperspace Hole",
    type: "Psychic",
    cat: "Special",
    power: 80,
    pp: 5,
    acc: -1,
    effect: "Can strike through Protect/Detect.",
    wiki: "http://www.serebii.net/attackdex-xy/hyperspacehole.shtml"
};

var water_shuriken = {
    name: "Water Shuriken",
    type: "Water",
    cat: "Physical",
    power: 15,
    pp: 20,
    acc: 100,
    effect: "Hits 2-5 times in one turn.",
    wiki: "http://www.serebii.net/attackdex-xy/watershuriken.shtml"
};

var mystical_fire = {
    name: "Mystical Fire",
    type: "Fire",
    cat: "Special",
    power: 65,
    pp: 10,
    acc: 100,
    effect: "Lowers opponent's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/mysticalfire.shtml"
};

var spiky_shield = {
    name: "Spiky Shield",
    type: "Grass",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Protects user and inflicts damage on contact moves.",
    wiki: "http://www.serebii.net/attackdex-xy/spikyshield.shtml"
};

var aromatic_mist = {
    name: "Aromatic Mist",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises Special Defense of allies.",
    wiki: "http://www.serebii.net/attackdex-xy/aromaticmist.shtml"
};

var eerie_impulse = {
    name: "Eerie Impulse",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 15,
    acc: 100,
    effect: "Sharply lowers opponent's Special Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/eerieimpulse.shtml"
};

var venom_drench = {
    name: "Venom Drench",
    type: "Poison",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Lowers poisoned opponent's Special Attack and Speed.",
    wiki: "http://www.serebii.net/attackdex-xy/venomdrench.shtml"
};

var powder = {
    name: "Powder",
    type: "Bug",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: 100,
    effect: "Damages Pokémon using Fire type moves.",
    wiki: "http://www.serebii.net/attackdex-xy/powder.shtml"
};

var geomancy = {
    name: "Geomancy",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Charges on first turn, sharply raises user's Sp. Attack, Sp. Defense and Speed on the second.",
    wiki: "http://www.serebii.net/attackdex-xy/geomancy.shtml"
};

var magnetic_flux = {
    name: "Magnetic Flux",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 20,
    acc: -1,
    effect: "Raises Defense and Sp. Defense of Plus/Minus Pokémon.",
    wiki: "http://www.serebii.net/attackdex-xy/magneticflux.shtml"
};

var happy_hour = {
    name: "Happy Hour",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: -1,
    effect: "Doubles prize money from trainer battles.",
    wiki: "http://www.serebii.net/attackdex-xy/happyhour.shtml"
};

var electric_terrain = {
    name: "Electric Terrain",
    type: "Electric",
    cat: "Status",
    power: -1,
    pp: 10,
    acc: -1,
    effect: "Prevents all Pokémon from falling asleep for 5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/electricterrain.shtml"
};

var dazzling_gleam = {
    name: "Dazzling Gleam",
    type: "Fairy",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "Hits all adjacent opponents.",
    wiki: "http://www.serebii.net/attackdex-xy/dazzlinggleam.shtml"
};

var celebrate = {
    name: "Celebrate",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "The Pokémon congratulates you on your special day. No battle effect.",
    wiki: "http://www.serebii.net/attackdex-xy/celebrate.shtml"
};

var hold_hands = {
    name: "Hold Hands",
    type: "Normal",
    cat: "Status",
    power: -1,
    pp: 40,
    acc: -1,
    effect: "Makes the user and an ally very happy.",
    wiki: "http://www.serebii.net/attackdex-xy/holdhands.shtml"
};

var baby_doll_eyes = {
    name: "Baby_doll Eyes",
    type: "Fairy",
    cat: "Status",
    power: -1,
    pp: 30,
    acc: 100,
    effect: "Always goes first. Lowers the target's attack.",
    wiki: "http://www.serebii.net/attackdex-xy/baby_dolleyes.shtml"
};

var nuzzle = {
    name: "Nuzzle",
    type: "Electric",
    cat: "Physical",
    power: 20,
    pp: 20,
    acc: 100,
    effect: "Paralyzes opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/nuzzle.shtml"
};

var hold_back = {
    name: "Hold Back",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 40,
    acc: 100,
    effect: "Always leaves opponent with at least 1 HP.",
    wiki: "http://www.serebii.net/attackdex-xy/holdback.shtml"
};

var infestation = {
    name: "Infestation",
    type: "Bug",
    cat: "Special",
    power: 20,
    pp: 20,
    acc: 100,
    effect: "Traps opponent, damaging them for 4-5 turns.",
    wiki: "http://www.serebii.net/attackdex-xy/infestation.shtml"
};

var power_up_punch = {
    name: "Power_up Punch",
    type: "Fighting",
    cat: "Physical",
    power: 40,
    pp: 20,
    acc: 100,
    effect: "Raises Attack.",
    wiki: "http://www.serebii.net/attackdex-xy/power_uppunch.shtml"
};

var oblivion_wing = {
    name: "Oblivion Wing",
    type: "Flying",
    cat: "Special",
    power: 80,
    pp: 10,
    acc: 100,
    effect: "User recovers most of the HP inflicted on opponent.",
    wiki: "http://www.serebii.net/attackdex-xy/oblivionwing.shtml"
};

var thousand_arrows = {
    name: "Thousand Arrows",
    type: "Ground",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "Makes Flying-type Pokémon vulnerable to Ground moves.",
    wiki: "http://www.serebii.net/attackdex-xy/thousandarrows.shtml"
};

var thousand_waves = {
    name: "Thousand Waves",
    type: "Ground",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "Opponent cannot flee or switch.",
    wiki: "http://www.serebii.net/attackdex-xy/thousandwaves.shtml"
};

var lands_wrath = {
    name: "Lands Wrath",
    type: "Ground",
    cat: "Physical",
    power: 90,
    pp: 10,
    acc: 100,
    effect: "None",
    wiki: "http://www.serebii.net/attackdex-xy/landswrath.shtml"
};

var light_of_ruin = {
    name: "Light Of Ruin",
    type: "Fairy",
    cat: "Special",
    power: 140,
    pp: 5,
    acc: 90,
    effect: "User receives recoil damage.",
    wiki: "http://www.serebii.net/attackdex-xy/lightofruin.shtml"
};

var origin_pulse = {
    name: "Origin Pulse",
    type: "Water",
    cat: "Special",
    power: 110,
    pp: 10,
    acc: 85,
    effect: "Hits all adjacent opponents.",
    wiki: "http://www.serebii.net/attackdex-xy/originpulse.shtml"
};

var precipice_blades = {
    name: "Precipice Blades",
    type: "Ground",
    cat: "Physical",
    power: 120,
    pp: 10,
    acc: 85,
    effect: "Hits all adjacent opponents.",
    wiki: "http://www.serebii.net/attackdex-xy/precipiceblades.shtml"
};

var dragon_ascent = {
    name: "Dragon Ascent",
    type: "Flying",
    cat: "Physical",
    power: 120,
    pp: 5,
    acc: 100,
    effect: "Lowers user's Defense and Special Defense.",
    wiki: "http://www.serebii.net/attackdex-xy/dragonascent.shtml"
};

var hyperspace_fury = {
    name: "Hyperspace Fury",
    type: "Dark",
    cat: "Physical",
    power: 100,
    pp: 5,
    acc: -1,
    effect: "Lowers user's Defense. Can strike through Protect/Detect.",
    wiki: "http://www.serebii.net/attackdex-xy/hyperspacefury.shtml"
};

var ability_capsule = {
    name: "Ability Capsule",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/abilitycapsule.shtml"
};

var ability_urge = {
    name: "Ability Urge",
    desc: "When used, it activates the Ability of an ally Pokémon.",
    wiki: "http://www.serebii.net/itemdex/abilityurge.shtml"
};

var abomasite = {
    name: "Abomasite",
    desc: "Enables Abomasnow to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/abomasite.shtml"
};

var absolite = {
    name: "Absolite",
    desc: "Enables Absol to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/absolite.shtml"
};

var absorb_bulb = {
    name: "Absorb Bulb",
    desc: "A consumable bulb. If the holder is hit by a Water-type move, its Sp. Atk will rise.",
    wiki: "http://www.serebii.net/itemdex/absorbbulb.shtml"
};

var adamant_orb = {
    name: "Adamant Orb",
    desc: "Increases the power of Dragon-​ and Steel-type moves when held by Dialga.",
    wiki: "http://www.serebii.net/itemdex/adamantorb.shtml"
};

var adventure_rules = {
    name: "Adventure Rules",
    desc: "This book contains all the points a new Trainer needs to know on a journey. It was handmade by a kind friend.",
    wiki: "http://www.serebii.net/itemdex/adventurerules.shtml"
};

var aerodactylite = {
    name: "Aerodactylite",
    desc: "Enables Aerodactyl to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/aerodactylite.shtml"
};

var aggronite = {
    name: "Aggronite",
    desc: "Enables Aggron to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/aggronite.shtml"
};

var aguav_berry = {
    name: "Aguav Berry",
    desc: "Restores HP if it's low, but may cause confusion.",
    wiki: "http://www.serebii.net/itemdex/aguavberry.shtml"
};

var air_balloon = {
    name: "Air Balloon",
    desc: "When held by a Pokémon, the Pokémon will float into the air. When the holder is attacked, this item will burst.",
    wiki: "http://www.serebii.net/itemdex/airballoon.shtml"
};

var alakazite = {
    name: "Alakazite",
    desc: "Enables Alakazam to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/alakazite.shtml"
};

var altarianite = {
    name: "Altarianite",
    desc: "One of a variety of mysterious Mega Stones. Have Altaria hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/altarianite.shtml"
};

var ampharosite = {
    name: "Ampharosite",
    desc: "Enables Ampharos to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/ampharosite.shtml"
};

var amulet_coin = {
    name: "Amulet Coin",
    desc: "An item to be held by a Pokémon. It doubles a battle’s prize money if the holding Pokémon joins in.",
    wiki: "http://www.serebii.net/itemdex/amuletcoin.shtml"
};

var antidote = {
    name: "Antidote",
    desc: "A spray-type medicine. It lifts the effect of poison from one Pokémon.",
    wiki: "http://www.serebii.net/itemdex/antidote.shtml"
};

var apicot_berry = {
    name: "Apicot Berry",
    desc: "Raises Special Defense when HP is low.",
    wiki: "http://www.serebii.net/itemdex/apicotberry.shtml"
};

var armor_fossil = {
    name: "Armor Fossil",
    desc: "A fossil from a prehistoric Pokémon that lived on the land. It appears to be part of a collar.",
    wiki: "http://www.serebii.net/itemdex/armorfossil.shtml"
};

var aspear_berry = {
    name: "Aspear Berry",
    desc: "If held by a Pokémon, it defrosts it.",
    wiki: "http://www.serebii.net/itemdex/aspearberry.shtml"
};

var audinite = {
    name: "Audinite",
    desc: "One of a variety of mysterious Mega Stones. Have Audino hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/audinite.shtml"
};

var awakening = {
    name: "Awakening",
    desc: "A spray-type medicine. It awakens a Pokémon from the clutches of sleep.",
    wiki: "http://www.serebii.net/itemdex/awakening.shtml"
};

var babiri_berry = {
    name: "Babiri Berry",
    desc: "Weakens a supereffective Steel-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/babiriberry.shtml"
};

var balmmushroom = {
    name: "Balmmushroom",
    desc: "A rare mushroom which gives off a nice fragrance. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/balmmushroom.shtml"
};

var banettite = {
    name: "Banettite",
    desc: "Enables Banette to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/banettite.shtml"
};

var beedrillite = {
    name: "Beedrillite",
    desc: "One of a variety of mysterious Mega Stones. Have Beedrill hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/beedrillite.shtml"
};

var belue_berry = {
    name: "Belue Berry",
    desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/belueberry.shtml"
};

var berry_juice = {
    name: "Berry Juice",
    desc: "A 100% pure juice made of Berries. It restores the HP of one Pokémon by just 20 points.",
    wiki: "http://www.serebii.net/itemdex/berryjuice.shtml"
};

var big_mushroom = {
    name: "Big Mushroom",
    desc: "A large and rare mushroom. It is sought after by collectors.",
    wiki: "http://www.serebii.net/itemdex/bigmushroom.shtml"
};

var big_nugget = {
    name: "Big Nugget",
    desc: "A big nugget of pure gold that gives off a lustrous gleam. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/bignugget.shtml"
};

var big_pearl = {
    name: "Big Pearl",
    desc: "A quite-large pearl that sparkles in a pretty silver color. It can be sold at a high price to shops.",
    wiki: "http://www.serebii.net/itemdex/bigpearl.shtml"
};

var big_root = {
    name: "Big Root",
    desc: "Recovers more HP from HP-stealing moves.",
    wiki: "http://www.serebii.net/itemdex/bigroot.shtml"
};

var binding_band = {
    name: "Binding Band",
    desc: "A band that increases the power of binding moves when held.",
    wiki: "http://www.serebii.net/itemdex/bindingband.shtml"
};

var black_belt = {
    name: "Black Belt",
    desc: "Increases the power of Fighting-type moves.",
    wiki: "http://www.serebii.net/itemdex/blackbelt.shtml"
};

var black_flute = {
    name: "Black Flute",
    desc: "A toy flute made from black glass. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/blackflute.shtml"
};

var black_sludge = {
    name: "Black Sludge",
    desc: "A held item that gradually restores the HP of Poison-type Pokémon. It inflicts damage on all other types.",
    wiki: "http://www.serebii.net/itemdex/blacksludge.shtml"
};

var blackglasses = {
    name: "Blackglasses",
    desc: "Increases the power of Dark-type moves.",
    wiki: "http://www.serebii.net/itemdex/blackglasses.shtml"
};

var blastoisinite = {
    name: "Blastoisinite",
    desc: "Enables Blastoise to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/blastoisinite.shtml"
};

var blazikenite = {
    name: "Blazikenite",
    desc: "Enables Blaziken to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/blazikenite.shtml"
};

var blk_apricorn = {
    name: "Blk Apricorn",
    desc: "A black Apricorn It has an indescribable scent.",
    wiki: "http://www.serebii.net/itemdex/blkapricorn.shtml"
};

var blu_apricorn = {
    name: "Blu Apricorn",
    desc: "A blue Apricorn. It smells a bit like grass.",
    wiki: "http://www.serebii.net/itemdex/bluapricorn.shtml"
};

var blue_flute = {
    name: "Blue Flute",
    desc: "A toy flute made from blue glass. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/blueflute.shtml"
};

var blue_scarf = {
    name: "Blue Scarf",
    desc: "Raises holder's Beauty aspect in a Contest.",
    wiki: "http://www.serebii.net/itemdex/bluescarf.shtml"
};

var blue_shard = {
    name: "Blue Shard",
    desc: "A small blue shard. It appears to be from some sort of implement made long ago.",
    wiki: "http://www.serebii.net/itemdex/blueshard.shtml"
};

var bluk_berry = {
    name: "Bluk Berry",
    desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/blukberry.shtml"
};

var brightpowder = {
    name: "Brightpowder",
    desc: "Lowers the opponent’s accuracy.",
    wiki: "http://www.serebii.net/itemdex/brightpowder.shtml"
};

var bug_gem = {
    name: "Bug Gem",
    desc: "Increases the power of a Bug-type move only once.",
    wiki: "http://www.serebii.net/itemdex/buggem.shtml"
};

var burn_drive = {
    name: "Burn Drive",
    desc: "Changes Techno Blast to a Fire-type move when held by Genesect.",
    wiki: "http://www.serebii.net/itemdex/burndrive.shtml"
};

var burn_heal = {
    name: "Burn Heal",
    desc: "A spray-type medicine. It heals a single Pokémon that is suffering from a burn.",
    wiki: "http://www.serebii.net/itemdex/burnheal.shtml"
};

var calcium = {
    name: "Calcium",
    desc: "A nutritious drink for Pokémon. It raises the base Sp. Atk (Special Attack) stat of a single Pokémon.",
    wiki: "http://www.serebii.net/itemdex/calcium.shtml"
};

var cameruptite = {
    name: "Cameruptite",
    desc: "One of a variety of mysterious Mega Stones. Have Camerupt hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/cameruptite.shtml"
};

var carbos = {
    name: "Carbos",
    desc: "A nutritious drink for Pokémon. It raises the base Speed stat of a single Pokémon.",
    wiki: "http://www.serebii.net/itemdex/carbos.shtml"
};

var casteliacone = {
    name: "Casteliacone",
    desc: "Castelia City’s specialty, soft-serve ice cream. It heals all the status problems of a single Pokémon.",
    wiki: "http://www.serebii.net/itemdex/casteliacone.shtml"
};

var cell_battery = {
    name: "Cell Battery",
    desc: "A consumable battery. If the holder is hit by an Electric-type move, its Attack will rise.",
    wiki: "http://www.serebii.net/itemdex/cellbattery.shtml"
};

var charcoal = {
    name: "Charcoal",
    desc: "Increases the power of Fire-type moves.",
    wiki: "http://www.serebii.net/itemdex/charcoal.shtml"
};

var charizardite_x = {
    name: "Charizardite X",
    desc: "Enables Charizard to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/charizarditex.shtml"
};

var charizardite_y = {
    name: "Charizardite Y",
    desc: "Enables Charizard to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/charizarditey.shtml"
};

var charti_berry = {
    name: "Charti Berry",
    desc: "Weakens a supereffective Rock-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/chartiberry.shtml"
};

var cheri_berry = {
    name: "Cheri Berry",
    desc: "If held by a Pokémon, it recovers from paralysis.",
    wiki: "http://www.serebii.net/itemdex/cheriberry.shtml"
};

var cherish_ball = {
    name: "Cherish Ball",
    desc: "A quite rare Poké Ball that has been specially crafted to commemorate an occasion of some sort.",
    wiki: "http://www.serebii.net/itemdex/cherishball.shtml"
};

var chesto_berry = {
    name: "Chesto Berry",
    desc: "If held by a Pokémon, it recovers from sleep.",
    wiki: "http://www.serebii.net/itemdex/chestoberry.shtml"
};

var chilan_berry = {
    name: "Chilan Berry",
    desc: "Weakens a Normal-type attack against the Pokémon holding this berry.",
    wiki: "http://www.serebii.net/itemdex/chilanberry.shtml"
};

var chill_drive = {
    name: "Chill Drive",
    desc: "Changes Techno Blast to an Ice-type move when held by Genesect.",
    wiki: "http://www.serebii.net/itemdex/chilldrive.shtml"
};

var choice_band = {
    name: "Choice Band",
    desc: "Raises Attack, but only one move can be used.",
    wiki: "http://www.serebii.net/itemdex/choiceband.shtml"
};

var choice_scarf = {
    name: "Choice Scarf",
    desc: "Raises Speed, but only one move can be used.",
    wiki: "http://www.serebii.net/itemdex/choicescarf.shtml"
};

var choice_specs = {
    name: "Choice Specs",
    desc: "Raises Special Attack, but only one move can be used.",
    wiki: "http://www.serebii.net/itemdex/choicespecs.shtml"
};

var chople_berry = {
    name: "Chople Berry",
    desc: "Weakens a supereffective Fighting-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/chopleberry.shtml"
};

var claw_fossil = {
    name: "Claw Fossil",
    desc: "A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a claw.",
    wiki: "http://www.serebii.net/itemdex/clawfossil.shtml"
};

var cleanse_tag = {
    name: "Cleanse Tag",
    desc: "An item to be held by a Pokémon. It helps keep wild Pokémon away if the holder is the first one in the party.",
    wiki: "http://www.serebii.net/itemdex/cleansetag.shtml"
};

var clever_wing = {
    name: "Clever Wing",
    desc: "Increases Special Defense EVs by 1.",
    wiki: "http://www.serebii.net/itemdex/cleverwing.shtml"
};

var coba_berry = {
    name: "Coba Berry",
    desc: "Weakens a supereffective Flying-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/cobaberry.shtml"
};

var colbur_berry = {
    name: "Colbur Berry",
    desc: "Weakens a supereffective Dark-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/colburberry.shtml"
};

var colress_machine = {
    name: "Colress Machine",
    desc: "A special device that wrings out the potential of Pokémon. It is an imperfect prototype.",
    wiki: "http://www.serebii.net/itemdex/colressmachine.shtml"
};

var comet_shard = {
    name: "Comet Shard",
    desc: "A shard which fell to the ground when a comet approached. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/cometshard.shtml"
};

var cornn_berry = {
    name: "Cornn Berry",
    desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/cornnberry.shtml"
};

var cover_fossil = {
    name: "Cover Fossil",
    desc: "A fossil of an ancient Pokémon that lived in the sea in ancient times. It appears to be part of its back.",
    wiki: "http://www.serebii.net/itemdex/coverfossil.shtml"
};

var custap_berry = {
    name: "Custap Berry",
    desc: "Holder can move first when HP is low.",
    wiki: "http://www.serebii.net/itemdex/custapberry.shtml"
};

var damp_mulch = {
    name: "Damp Mulch",
    desc: "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/dampmulch.shtml"
};

var damp_rock = {
    name: "Damp Rock",
    desc: "A Pokémon held item that extends the duration of the move Rain Dance used by the holder.",
    wiki: "http://www.serebii.net/itemdex/damprock.shtml"
};

var dark_gem = {
    name: "Dark Gem",
    desc: "Increases the power of a Dark-type move only once.",
    wiki: "http://www.serebii.net/itemdex/darkgem.shtml"
};

var dawn_stone = {
    name: "Dawn Stone",
    desc: "A peculiar stone that makes certain species of Pokémon evolve. It sparkles like eyes.",
    wiki: "http://www.serebii.net/itemdex/dawnstone.shtml"
};

var deepseascale = {
    name: "Deepseascale",
    desc: "Increases Special Defense when held by Clamperl.",
    wiki: "http://www.serebii.net/itemdex/deepseascale.shtml"
};

var deepseatooth = {
    name: "Deepseatooth",
    desc: "Increases Special Attack when held by Clamperl.",
    wiki: "http://www.serebii.net/itemdex/deepseatooth.shtml"
};

var destiny_knot = {
    name: "Destiny Knot",
    desc: "A long, thin, bright-red string to be held by a Pokémon. If the holder becomes infatuated, the foe does too.",
    wiki: "http://www.serebii.net/itemdex/destinyknot.shtml"
};

var diancite = {
    name: "Diancite",
    desc: "One of a variety of mysterious Mega Stones. Have Diancie hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/diancite.shtml"
};

var dire_hit = {
    name: "Dire Hit",
    desc: "Raises critical-hit ratio of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/direhit.shtml"
};

var dire_hit_2 = {
    name: "Dire Hit 2",
    desc: "It can be used many times to raise the critical-hit ratio of one Pokémon. It wears off if the Pokémon is withdrawn.",
    wiki: "http://www.serebii.net/itemdex/direhit2.shtml"
};

var dire_hit_3 = {
    name: "Dire Hit 3",
    desc: "It can be used many times to greatly raise a Pokémon’s critical-hit ratio. It wears off if the Pokémon is withdrawn.",
    wiki: "http://www.serebii.net/itemdex/direhit3.shtml"
};

var dive_ball = {
    name: "Dive Ball",
    desc: "A somewhat different Poké Ball that works especially well on Pokémon that live underwater.",
    wiki: "http://www.serebii.net/itemdex/diveball.shtml"
};

var dna_splicers = {
    name: "Dna Splicers",
    desc: "A splicer that fuses Kyurem and a certain Pokémon. They are said to have been one in the beginning.",
    wiki: "http://www.serebii.net/itemdex/dnasplicers.shtml"
};

var dome_fossil = {
    name: "Dome Fossil",
    desc: "A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a shell.",
    wiki: "http://www.serebii.net/itemdex/domefossil.shtml"
};

var douse_drive = {
    name: "Douse Drive",
    desc: "Changes Techno Blast to a Water-type move when held by Genesect.",
    wiki: "http://www.serebii.net/itemdex/dousedrive.shtml"
};

var draco_plate = {
    name: "Draco Plate",
    desc: "Increases power of Dragon-type moves. Changes Arceus' type to Dragon.",
    wiki: "http://www.serebii.net/itemdex/dracoplate.shtml"
};

var dragon_fang = {
    name: "Dragon Fang",
    desc: "Increases the power of Dragon-type moves.",
    wiki: "http://www.serebii.net/itemdex/dragonfang.shtml"
};

var dragon_gem = {
    name: "Dragon Gem",
    desc: "Increases the power of a Dragon-type move only once.",
    wiki: "http://www.serebii.net/itemdex/dragongem.shtml"
};

var dragon_scale = {
    name: "Dragon Scale",
    desc: "A thick and tough scale. Dragon-type Pokémon may be holding this item when caught.",
    wiki: "http://www.serebii.net/itemdex/dragonscale.shtml"
};

var dread_plate = {
    name: "Dread Plate",
    desc: "Increases power of Dark-type moves. Changes Arceus' type to Dark.",
    wiki: "http://www.serebii.net/itemdex/dreadplate.shtml"
};

var dream_ball = {
    name: "Dream Ball",
    desc: "A special Poké Ball that appears out of nowhere in a bag at the Entree Forest. It can catch any Pokémon.",
    wiki: "http://www.serebii.net/itemdex/dreamball.shtml"
};

var dropped_item = {
    name: "Dropped Item",
    desc: "The Xtransceiver found at the Nimbasa City amusement park. It seems it belongs to a boy.",
    wiki: "http://www.serebii.net/itemdex/droppeditem.shtml"
};

var dubious_disc = {
    name: "Dubious Disc",
    desc: "A transparent device overflowing with dubious data. Its producer is unknown.",
    wiki: "http://www.serebii.net/itemdex/dubiousdisc.shtml"
};

var durin_berry = {
    name: "Durin Berry",
    desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/durinberry.shtml"
};

var dusk_ball = {
    name: "Dusk Ball",
    desc: "A somewhat different Poké Ball that makes it easier to catch wild Pokémon at night or in dark places like caves.",
    wiki: "http://www.serebii.net/itemdex/duskball.shtml"
};

var dusk_stone = {
    name: "Dusk Stone",
    desc: "A peculiar stone that makes certain species of Pokémon evolve. It is as dark as dark can be.",
    wiki: "http://www.serebii.net/itemdex/duskstone.shtml"
};

var earth_plate = {
    name: "Earth Plate",
    desc: "Increases power of Ground-type moves. Changes Arceus' type to Ground.",
    wiki: "http://www.serebii.net/itemdex/earthplate.shtml"
};

var eject_button = {
    name: "Eject Button",
    desc: "If the holder is hit by an attack, it will switch with another Pokémon in your party.",
    wiki: "http://www.serebii.net/itemdex/ejectbutton.shtml"
};

var electirizer = {
    name: "Electirizer",
    desc: "A box packed with a tremendous amount of electric energy. It is loved by a certain Pokémon.",
    wiki: "http://www.serebii.net/itemdex/electirizer.shtml"
};

var electric_gem = {
    name: "Electric Gem",
    desc: "Increases the power of an Electric-type move only once.",
    wiki: "http://www.serebii.net/itemdex/electricgem.shtml"
};

var elevator_key = {
    name: "Elevator Key",
    desc: "A card key that activates the elevator in Lysandre Labs. It is emblazoned with Team Flare’s logo.",
    wiki: "http://www.serebii.net/itemdex/elevatorkey.shtml"
};

var elixir = {
    name: "Elixir",
    desc: "It restores the PP of all the moves learned by the targeted Pokémon by 10 points each.",
    wiki: "http://www.serebii.net/itemdex/elixir.shtml"
};

var energy_root = {
    name: "Energy Root",
    desc: "A very bitter root. It restores the HP of one POKéMON by 200 points.",
    wiki: "http://www.serebii.net/itemdex/energyroot.shtml"
};

var energypowder = {
    name: "Energypowder",
    desc: "A very bitter medicine powder. It restores the HP of one POKéMON by 50 points.",
    wiki: "http://www.serebii.net/itemdex/energypowder.shtml"
};

var enigma_berry = {
    name: "Enigma Berry",
    desc: "If held by a Pokémon, it restores its HP if it is hit by any supereffective attack.",
    wiki: "http://www.serebii.net/itemdex/enigmaberry.shtml"
};

var escape_rope = {
    name: "Escape Rope",
    desc: "A long, durable rope. Use it to escape instantly from a cave or a dungeon.",
    wiki: "http://www.serebii.net/itemdex/escaperope.shtml"
};

var ether = {
    name: "Ether",
    desc: "It restores the PP of a Pokémon’s selected move by a maximum of 10 points.",
    wiki: "http://www.serebii.net/itemdex/ether.shtml"
};

var everstone = {
    name: "Everstone",
    desc: "An item to be held by a Pokémon. The Pokémon holding this peculiar stone is prevented from evolving.",
    wiki: "http://www.serebii.net/itemdex/everstone.shtml"
};

var eviolite = {
    name: "Eviolite",
    desc: "A mysterious evolutionary lump. When held, it raises the Defense and Sp. Def of a Pokémon that can still evolve.",
    wiki: "http://www.serebii.net/itemdex/eviolite.shtml"
};

var exp_share = {
    name: "Exp Share",
    desc: "An item to be held by a Pokémon. The holder gets a share of a battle’s Exp. Points without battling.",
    wiki: "http://www.serebii.net/itemdex/expshare.shtml"
};

var expert_belt = {
    name: "Expert Belt",
    desc: "Increases the power of super-effective moves.",
    wiki: "http://www.serebii.net/itemdex/expertbelt.shtml"
};

var fairy_gem = {
    name: "Fairy Gem",
    desc: "Increases the power of a Fairy-type move only once.",
    wiki: "http://www.serebii.net/itemdex/fairygem.shtml"
};

var fast_ball = {
    name: "Fast Ball",
    desc: "A Poké Ball that makes it easier to catch Pokémon which are quick to run away.",
    wiki: "http://www.serebii.net/itemdex/fastball.shtml"
};

var fighting_gem = {
    name: "Fighting Gem",
    desc: "Increases the power of a Fighting-type move only once.",
    wiki: "http://www.serebii.net/itemdex/fightinggem.shtml"
};

var figy_berry = {
    name: "Figy Berry",
    desc: "Restores HP if it's low, but may cause confusion.",
    wiki: "http://www.serebii.net/itemdex/figyberry.shtml"
};

var fire_gem = {
    name: "Fire Gem",
    desc: "Increases the power of a Fire-type move only once.",
    wiki: "http://www.serebii.net/itemdex/firegem.shtml"
};

var fire_stone = {
    name: "Fire Stone",
    desc: "A peculiar stone that makes certain species of POKéMON evolve. It is colored orange.",
    wiki: "http://www.serebii.net/itemdex/firestone.shtml"
};

var fist_plate = {
    name: "Fist Plate",
    desc: "Increases power of Fighting-type moves. Changes Arceus' type to Fighting.",
    wiki: "http://www.serebii.net/itemdex/fistplate.shtml"
};

var flame_orb = {
    name: "Flame Orb",
    desc: "An item to be held by a Pokémon. It is a bizarre orb that inflicts a burn on the holder in battle.",
    wiki: "http://www.serebii.net/itemdex/flameorb.shtml"
};

var flame_plate = {
    name: "Flame Plate",
    desc: "Increases power of Fire-type moves. Changes Arceus' type to Fire.",
    wiki: "http://www.serebii.net/itemdex/flameplate.shtml"
};

var float_stone = {
    name: "Float Stone",
    desc: "A very light stone. It reduces the weight of a Pokémon when held.",
    wiki: "http://www.serebii.net/itemdex/floatstone.shtml"
};

var fluffy_tail = {
    name: "Fluffy Tail",
    desc: "An item that attracts Pokémon. Use it to flee from any battle with a wild Pokémon.",
    wiki: "http://www.serebii.net/itemdex/fluffytail.shtml"
};

var flying_gem = {
    name: "Flying Gem",
    desc: "Increases the power of a Flying-type move only once.",
    wiki: "http://www.serebii.net/itemdex/flyinggem.shtml"
};

var focus_band = {
    name: "Focus Band",
    desc: "An item to be held by a Pokémon. The holder may endure a potential KO attack, leaving it with just 1 HP.",
    wiki: "http://www.serebii.net/itemdex/focusband.shtml"
};

var focus_sash = {
    name: "Focus Sash",
    desc: "An item to be held by a Pokémon. If it has full HP, the holder will endure one potential KO attack, leaving 1 HP.",
    wiki: "http://www.serebii.net/itemdex/focussash.shtml"
};

var fresh_water = {
    name: "Fresh Water",
    desc: "Water with a high mineral content. It restores the HP of one POKéMON by 50 points.",
    wiki: "http://www.serebii.net/itemdex/freshwater.shtml"
};

var friend_ball = {
    name: "Friend Ball",
    desc: "A Poké Ball that makes caught Pokémon more friendly.",
    wiki: "http://www.serebii.net/itemdex/friendball.shtml"
};

var full_heal = {
    name: "Full Heal",
    desc: "A spray-type medicine. It heals all the status problems of a single Pokémon.",
    wiki: "http://www.serebii.net/itemdex/fullheal.shtml"
};

var full_incense = {
    name: "Full Incense",
    desc: "An item to be held by a Pokémon. It is an exotic-smelling incense that makes the holder bloated and slow moving.",
    wiki: "http://www.serebii.net/itemdex/fullincense.shtml"
};

var full_restore = {
    name: "Full Restore",
    desc: "A medicine that fully restores the HP and heals any status problems of a single Pokémon.",
    wiki: "http://www.serebii.net/itemdex/fullrestore.shtml"
};

var galladite = {
    name: "Galladite",
    desc: "One of a variety of mysterious Mega Stones. Have Gallade hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/galladite.shtml"
};

var ganlon_berry = {
    name: "Ganlon Berry",
    desc: "Raises Defense when HP is low.",
    wiki: "http://www.serebii.net/itemdex/ganlonberry.shtml"
};

var garchompite = {
    name: "Garchompite",
    desc: "Enables Garchomp to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/garchompite.shtml"
};

var gardevoirite = {
    name: "Gardevoirite",
    desc: "Enables Gardevoir to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/gardevoirite.shtml"
};

var gengarite = {
    name: "Gengarite",
    desc: "Enables Gengar to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/gengarite.shtml"
};

var genius_wing = {
    name: "Genius Wing",
    desc: "Increases Special Attack EVs by 1.",
    wiki: "http://www.serebii.net/itemdex/geniuswing.shtml"
};

var ghost_gem = {
    name: "Ghost Gem",
    desc: "Increases the power of a Ghost-type move only once.",
    wiki: "http://www.serebii.net/itemdex/ghostgem.shtml"
};

var glalitite = {
    name: "Glalitite",
    desc: "One of a variety of mysterious Mega Stones. Have Glalie hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/glalitite.shtml"
};

var gooey_mulch = {
    name: "Gooey Mulch",
    desc: "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/gooeymulch.shtml"
};

var grass_gem = {
    name: "Grass Gem",
    desc: "Increases the power of a Grass-type move only once.",
    wiki: "http://www.serebii.net/itemdex/grassgem.shtml"
};

var great_ball = {
    name: "Great Ball",
    desc: "A good, high-performance Ball that provides a higher Pokémon catch rate than a standard Poké Ball.",
    wiki: "http://www.serebii.net/itemdex/greatball.shtml"
};

var green_scarf = {
    name: "Green Scarf",
    desc: "Raises holder's Smart aspect in a Contest.",
    wiki: "http://www.serebii.net/itemdex/greenscarf.shtml"
};

var green_shard = {
    name: "Green Shard",
    desc: "A small green shard. It appears to be from some sort of implement made long ago.",
    wiki: "http://www.serebii.net/itemdex/greenshard.shtml"
};

var grepa_berry = {
    name: "Grepa Berry",
    desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base Sp. Def stat.",
    wiki: "http://www.serebii.net/itemdex/grepaberry.shtml"
};

var grip_claw = {
    name: "Grip Claw",
    desc: "A Pokémon held item that extends the duration of multiturn attacks like Bind and Wrap.",
    wiki: "http://www.serebii.net/itemdex/gripclaw.shtml"
};

var griseous_orb = {
    name: "Griseous Orb",
    desc: "Increases the power of Dragon- and Ghost-type moves when held by Giratina, and changes it to Origin Forme.",
    wiki: "http://www.serebii.net/itemdex/griseousorb.shtml"
};

var grn_apricorn = {
    name: "Grn Apricorn",
    desc: "A green Apricorn. It has a mysterious, aromatic scent.",
    wiki: "http://www.serebii.net/itemdex/grnapricorn.shtml"
};

var ground_gem = {
    name: "Ground Gem",
    desc: "Increases the power of a Ground-type move only once.",
    wiki: "http://www.serebii.net/itemdex/groundgem.shtml"
};

var growth_mulch = {
    name: "Growth Mulch",
    desc: "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/growthmulch.shtml"
};

var grubby_hanky = {
    name: "Grubby Hanky",
    desc: "A handkerchief dropped by a regular at Café Warehouse. It smells faintly like a Pokémon.",
    wiki: "http://www.serebii.net/itemdex/grubbyhanky.shtml"
};

var guard_spec = {
    name: "Guard Spec",
    desc: "Prevents stat reduction for five turns.",
    wiki: "http://www.serebii.net/itemdex/guardspec.shtml"
};

var gyaradosite = {
    name: "Gyaradosite",
    desc: "Enables Gyarados to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/gyaradosite.shtml"
};

var haban_berry = {
    name: "Haban Berry",
    desc: "Weakens a supereffective Dragon-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/habanberry.shtml"
};

var hard_stone = {
    name: "Hard Stone",
    desc: "Increases the power of Rock-type moves.",
    wiki: "http://www.serebii.net/itemdex/hardstone.shtml"
};

var heal_ball = {
    name: "Heal Ball",
    desc: "A remedial Poké Ball that restores the caught Pokémon’s HP and eliminates any status problem.",
    wiki: "http://www.serebii.net/itemdex/healball.shtml"
};

var heal_powder = {
    name: "Heal Powder",
    desc: "A very bitter medicine powder. It heals all the status problems of a single Pokémon.",
    wiki: "http://www.serebii.net/itemdex/healpowder.shtml"
};

var health_wing = {
    name: "Health Wing",
    desc: "Increases HP EVs by 1.",
    wiki: "http://www.serebii.net/itemdex/healthwing.shtml"
};

var heart_scale = {
    name: "Heart Scale",
    desc: "A pretty, heart-shaped scale that is extremely rare. It glows faintly in the colors of the rainbow.",
    wiki: "http://www.serebii.net/itemdex/heartscale.shtml"
};

var heat_rock = {
    name: "Heat Rock",
    desc: "A Pokémon held item that extends the duration of the move Sunny Day used by the holder.",
    wiki: "http://www.serebii.net/itemdex/heatrock.shtml"
};

var heavy_ball = {
    name: "Heavy Ball",
    desc: "A Poké Ball for catching very heavy Pokémon.",
    wiki: "http://www.serebii.net/itemdex/heavyball.shtml"
};

var helix_fossil = {
    name: "Helix Fossil",
    desc: "A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a seashell.",
    wiki: "http://www.serebii.net/itemdex/helixfossil.shtml"
};

var heracronite = {
    name: "Heracronite",
    desc: "Enables Heracross to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/heracronite.shtml"
};

var hm01 = {
    name: "Hm01",
    desc: "Teaches the move Cut.",
    wiki: "http://www.serebii.net/itemdex/hm01.shtml"
};

var hm02 = {
    name: "Hm02",
    desc: "Teaches the move Fly.",
    wiki: "http://www.serebii.net/itemdex/hm02.shtml"
};

var hm03 = {
    name: "Hm03",
    desc: "Teaches the move Surf.",
    wiki: "http://www.serebii.net/itemdex/hm03.shtml"
};

var hm04 = {
    name: "Hm04",
    desc: "Teaches the move Strength.",
    wiki: "http://www.serebii.net/itemdex/hm04.shtml"
};

var hm05 = {
    name: "Hm05",
    desc: "Teaches the move Flash/Defog/Whirlpool/Waterfall.",
    wiki: "http://www.serebii.net/itemdex/hm05.shtml"
};

var hm06 = {
    name: "Hm06",
    desc: "Teaches the move Whirlpool/Rock Smash/Dive.",
    wiki: "http://www.serebii.net/itemdex/hm06.shtml"
};

var hm07 = {
    name: "Hm07",
    desc: "Teaches the move Waterfall.",
    wiki: "http://www.serebii.net/itemdex/hm07.shtml"
};

var hm08 = {
    name: "Hm08",
    desc: "Teaches the move Dive/Rock Climb.",
    wiki: "http://www.serebii.net/itemdex/hm08.shtml"
};

var holo_caster = {
    name: "Holo Caster",
    desc: "A device that allows users to receive and view hologram clips at any time. It is also used to chat with others.",
    wiki: "http://www.serebii.net/itemdex/holocaster.shtml"
};

var hondew_berry = {
    name: "Hondew Berry",
    desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base Sp. Atk stat.",
    wiki: "http://www.serebii.net/itemdex/hondewberry.shtml"
};

var honey = {
    name: "Honey",
    desc: "A sweet honey with a lush aroma that attracts wild Pokémon when it is used in grass, caves, or on special trees.",
    wiki: "http://www.serebii.net/itemdex/honey.shtml"
};

var honor_of_kalos = {
    name: "Honor Of Kalos",
    desc: "A precious symbol that is awarded only to an individual who has done great things for the Kalos region.",
    wiki: "http://www.serebii.net/itemdex/honorofkalos.shtml"
};

var houndoominite = {
    name: "Houndoominite",
    desc: "Enables Houndoom to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/houndoominite.shtml"
};

var hp_up = {
    name: "Hp Up",
    desc: "A nutritious drink for Pokémon. It raises the base HP of a single Pokémon.",
    wiki: "http://www.serebii.net/itemdex/hpup.shtml"
};

var hyper_potion = {
    name: "Hyper Potion",
    desc: "A spray-type medicine for wounds. It restores the HP of one Pokémon by 200 points.",
    wiki: "http://www.serebii.net/itemdex/hyperpotion.shtml"
};

var iapapa_berry = {
    name: "Iapapa Berry",
    desc: "Restores HP if it's low, but may cause confusion.",
    wiki: "http://www.serebii.net/itemdex/iapapaberry.shtml"
};

var ice_gem = {
    name: "Ice Gem",
    desc: "Increases the power of an Ice-type move only once.",
    wiki: "http://www.serebii.net/itemdex/icegem.shtml"
};

var ice_heal = {
    name: "Ice Heal",
    desc: "A spray-type medicine. It defrosts a Pokémon that has been frozen solid.",
    wiki: "http://www.serebii.net/itemdex/iceheal.shtml"
};

var icicle_plate = {
    name: "Icicle Plate",
    desc: "Increases power of Ice-type moves. Changes Arceus' type to Ice.",
    wiki: "http://www.serebii.net/itemdex/icicleplate.shtml"
};

var icy_rock = {
    name: "Icy Rock",
    desc: "A Pokémon held item that extends the duration of the move Hail used by the holder.",
    wiki: "http://www.serebii.net/itemdex/icyrock.shtml"
};

var insect_plate = {
    name: "Insect Plate",
    desc: "Increases power of Bug-type moves. Changes Arceus' type to Bug.",
    wiki: "http://www.serebii.net/itemdex/insectplate.shtml"
};

var intriguing_stone = {
    name: "Intriguing Stone",
    desc: "A rather curious stone that might appear to be valuable to some. It’s all in the eye of the beholder.",
    wiki: "http://www.serebii.net/itemdex/intriguingstone.shtml"
};

var iron = {
    name: "Iron",
    desc: "A nutritious drink for Pokémon. It raises the base Defense stat of a single Pokémon.",
    wiki: "http://www.serebii.net/itemdex/iron.shtml"
};

var iron_ball = {
    name: "Iron Ball",
    desc: "A Pokémon held item that cuts Speed. It makes Flying-type and levitating holders susceptible to Ground moves.",
    wiki: "http://www.serebii.net/itemdex/ironball.shtml"
};

var iron_plate = {
    name: "Iron Plate",
    desc: "Increases power of Steel-type moves. Changes Arceus' type to Steel.",
    wiki: "http://www.serebii.net/itemdex/ironplate.shtml"
};

var item_drop = {
    name: "Item Drop",
    desc: "When used, it causes an ally Pokémon to drop a held item.",
    wiki: "http://www.serebii.net/itemdex/itemdrop.shtml"
};

var item_urge = {
    name: "Item Urge",
    desc: "When used, it causes an ally Pokémon to use its held item.",
    wiki: "http://www.serebii.net/itemdex/itemurge.shtml"
};

var jaboca_berry = {
    name: "Jaboca Berry",
    desc: "If held by a Pokémon and a physical attack lands, the attacker also takes damage.",
    wiki: "http://www.serebii.net/itemdex/jabocaberry.shtml"
};

var kangaskhanite = {
    name: "Kangaskhanite",
    desc: "Enables Kangaskhan to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/kangaskhanite.shtml"
};

var kasib_berry = {
    name: "Kasib Berry",
    desc: "Weakens a supereffective Ghost-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/kasibberry.shtml"
};

var kebia_berry = {
    name: "Kebia Berry",
    desc: "Weakens a supereffective Poison-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/kebiaberry.shtml"
};

var kelpsy_berry = {
    name: "Kelpsy Berry",
    desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base Attack stat.",
    wiki: "http://www.serebii.net/itemdex/kelpsyberry.shtml"
};

var kings_rock = {
    name: "Kings Rock",
    desc: "An item to be held by a Pokémon. When the holder inflicts damage, the target may flinch.",
    wiki: "http://www.serebii.net/itemdex/kingsrock.shtml"
};

var lagging_tail = {
    name: "Lagging Tail",
    desc: "An item to be held by a Pokémon. It is tremendously heavy and makes the holder move slower than usual.",
    wiki: "http://www.serebii.net/itemdex/laggingtail.shtml"
};

var lansat_berry = {
    name: "Lansat Berry",
    desc: "Increases critical-hit ratio when HP is low.",
    wiki: "http://www.serebii.net/itemdex/lansatberry.shtml"
};

var latiasite = {
    name: "Latiasite",
    desc: "One of a variety of mysterious Mega Stones. Have Latias hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/latiasite.shtml"
};

var latiosite = {
    name: "Latiosite",
    desc: "One of a variety of mysterious Mega Stones. Have Latios hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/latiosite.shtml"
};

var lava_cookie = {
    name: "Lava Cookie",
    desc: "LAVARIDGE TOWN’s local specialty. It heals all the status problems of one POKéMON.",
    wiki: "http://www.serebii.net/itemdex/lavacookie.shtml"
};

var lax_incense = {
    name: "Lax Incense",
    desc: "An item to be held by a Pokémon. The tricky aroma of this incense may make attacks miss the holder.",
    wiki: "http://www.serebii.net/itemdex/laxincense.shtml"
};

var leaf_stone = {
    name: "Leaf Stone",
    desc: "A peculiar stone that makes certain species of POKéMON evolve. It has a leaf pattern.",
    wiki: "http://www.serebii.net/itemdex/leafstone.shtml"
};

var leftovers = {
    name: "Leftovers",
    desc: "An item to be held by a Pokémon. The holder’s HP is gradually restored during battle.",
    wiki: "http://www.serebii.net/itemdex/leftovers.shtml"
};

var lemonade = {
    name: "Lemonade",
    desc: "A very sweet drink. It restores the HP of one POKéMON by 80 points.",
    wiki: "http://www.serebii.net/itemdex/lemonade.shtml"
};

var lens_case = {
    name: "Lens Case",
    desc: "A rather chic-looking case for carrying contact lenses.",
    wiki: "http://www.serebii.net/itemdex/lenscase.shtml"
};

var leppa_berry = {
    name: "Leppa Berry",
    desc: "If held by a Pokémon, it restores a move’s PP by 10.",
    wiki: "http://www.serebii.net/itemdex/leppaberry.shtml"
};

var level_ball = {
    name: "Level Ball",
    desc: "A Poké Ball for catching Pokémon that are a lower level than your own.",
    wiki: "http://www.serebii.net/itemdex/levelball.shtml"
};

var liechi_berry = {
    name: "Liechi Berry",
    desc: "Raises Attack when HP is low.",
    wiki: "http://www.serebii.net/itemdex/liechiberry.shtml"
};

var life_orb = {
    name: "Life Orb",
    desc: "Increases the power of moves, but loses HP each turn.",
    wiki: "http://www.serebii.net/itemdex/lifeorb.shtml"
};

var light_ball = {
    name: "Light Ball",
    desc: "An item to be held by PIKACHU. It is a puzzling orb that raises the Attack and Sp. Atk stat.",
    wiki: "http://www.serebii.net/itemdex/lightball.shtml"
};

var light_clay = {
    name: "Light Clay",
    desc: "A Pokémon held item that extends the duration of barrier moves like Light Screen and Reflect used by the holder.",
    wiki: "http://www.serebii.net/itemdex/lightclay.shtml"
};

var looker_ticket = {
    name: "Looker Ticket",
    desc: "A ticket that was handmade by Looker. It’s decorated with a liberal amount of glittery paint.",
    wiki: "http://www.serebii.net/itemdex/lookerticket.shtml"
};

var lopunnite = {
    name: "Lopunnite",
    desc: "One of a variety of mysterious Mega Stones. Have Lopunny hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/lopunnite.shtml"
};

var love_ball = {
    name: "Love Ball",
    desc: "Poké Ball for catching Pokémon that are the opposite gender of your Pokémon.",
    wiki: "http://www.serebii.net/itemdex/loveball.shtml"
};

var lucarionite = {
    name: "Lucarionite",
    desc: "Enables Lucario to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/lucarionite.shtml"
};

var luck_incense = {
    name: "Luck Incense",
    desc: "An item to be held by a Pokémon. It doubles a battle’s prize money if the holding Pokémon joins in.",
    wiki: "http://www.serebii.net/itemdex/luckincense.shtml"
};

var lucky_egg = {
    name: "Lucky Egg",
    desc: "An item to be held by a Pokémon. It is an egg filled with happiness that earns extra Exp. Points in battle.",
    wiki: "http://www.serebii.net/itemdex/luckyegg.shtml"
};

var lucky_punch = {
    name: "Lucky Punch",
    desc: "Increases critical-hit ratio when held by Chansey.",
    wiki: "http://www.serebii.net/itemdex/luckypunch.shtml"
};

var lum_berry = {
    name: "Lum Berry",
    desc: "If held by a Pokémon, it recovers from any status problem.",
    wiki: "http://www.serebii.net/itemdex/lumberry.shtml"
};

var lure_ball = {
    name: "Lure Ball",
    desc: "A Poké Ball for catching Pokémon hooked by a Rod when fishing.",
    wiki: "http://www.serebii.net/itemdex/lureball.shtml"
};

var lustrous_orb = {
    name: "Lustrous Orb",
    desc: "Increases the power of Dragon-​ and Water-type moves when held by Palkia.",
    wiki: "http://www.serebii.net/itemdex/lustrousorb.shtml"
};

var luxury_ball = {
    name: "Luxury Ball",
    desc: "A comfortable Poké Ball that makes a caught wild Pokémon quickly grow friendly.",
    wiki: "http://www.serebii.net/itemdex/luxuryball.shtml"
};

var macho_brace = {
    name: "Macho Brace",
    desc: "An item to be held by a Pokémon. It is a stiff and heavy brace that promotes strong growth but lowers Speed.",
    wiki: "http://www.serebii.net/itemdex/machobrace.shtml"
};

var magmarizer = {
    name: "Magmarizer",
    desc: "A box packed with a tremendous amount of magma energy. It is loved by a certain Pokémon.",
    wiki: "http://www.serebii.net/itemdex/magmarizer.shtml"
};

var magnet = {
    name: "Magnet",
    desc: "Increases the power of Electric-type moves.",
    wiki: "http://www.serebii.net/itemdex/magnet.shtml"
};

var mago_berry = {
    name: "Mago Berry",
    desc: "Restores HP if it's low, but may cause confusion.",
    wiki: "http://www.serebii.net/itemdex/magoberry.shtml"
};

var magost_berry = {
    name: "Magost Berry",
    desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/magostberry.shtml"
};

var manectite = {
    name: "Manectite",
    desc: "Enables Manectric to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/manectite.shtml"
};

var master_ball = {
    name: "Master Ball",
    desc: "The best Ball with the ultimate level of performance. It will catch any wild Pokémon without fail.",
    wiki: "http://www.serebii.net/itemdex/masterball.shtml"
};

var mawilite = {
    name: "Mawilite",
    desc: "Enables Mawile to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/mawilite.shtml"
};

var max_elixir = {
    name: "Max Elixir",
    desc: "It fully restores the PP of all the moves learned by the targeted Pokémon.",
    wiki: "http://www.serebii.net/itemdex/maxelixir.shtml"
};

var max_ether = {
    name: "Max Ether",
    desc: "It fully restores the PP of a single selected move that has been learned by the target Pokémon.",
    wiki: "http://www.serebii.net/itemdex/maxether.shtml"
};

var max_potion = {
    name: "Max Potion",
    desc: "A spray-type medicine for wounds. It completely restores the HP of a single Pokémon.",
    wiki: "http://www.serebii.net/itemdex/maxpotion.shtml"
};

var max_repel = {
    name: "Max Repel",
    desc: "An item that prevents weak wild Pokémon from appearing for 250 steps after its use.",
    wiki: "http://www.serebii.net/itemdex/maxrepel.shtml"
};

var max_revive = {
    name: "Max Revive",
    desc: "A medicine that revives a fainted Pokémon. It fully restores the Pokémon’s HP.",
    wiki: "http://www.serebii.net/itemdex/maxrevive.shtml"
};

var meadow_plate = {
    name: "Meadow Plate",
    desc: "Increases power of Grass-type moves. Changes Arceus' type to Grass.",
    wiki: "http://www.serebii.net/itemdex/meadowplate.shtml"
};

var medal_box = {
    name: "Medal Box",
    desc: "A box-shaped machine that stores Medals and Medal information.",
    wiki: "http://www.serebii.net/itemdex/medalbox.shtml"
};

var medichamite = {
    name: "Medichamite",
    desc: "Enables Medicham to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/medichamite.shtml"
};

var mental_herb = {
    name: "Mental Herb",
    desc: "An item to be held by a Pokémon. It snaps the holder out of infatuation. It can be used only once.",
    wiki: "http://www.serebii.net/itemdex/mentalherb.shtml"
};

var metagrossite = {
    name: "Metagrossite",
    desc: "One of a variety of mysterious Mega Stones. Have Metagross hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/metagrossite.shtml"
};

var metal_coat = {
    name: "Metal Coat",
    desc: "Increases the power of Steel-type moves.",
    wiki: "http://www.serebii.net/itemdex/metalcoat.shtml"
};

var metal_powder = {
    name: "Metal Powder",
    desc: "Increases Defense when held by Ditto.",
    wiki: "http://www.serebii.net/itemdex/metalpowder.shtml"
};

var metronome = {
    name: "Metronome",
    desc: "Increases the power of moves used consecutively.",
    wiki: "http://www.serebii.net/itemdex/metronome.shtml"
};

var mewtwonite_x = {
    name: "Mewtwonite X",
    desc: "Enables Mewtwo to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/mewtwonitex.shtml"
};

var mewtwonite_y = {
    name: "Mewtwonite Y",
    desc: "Enables Mewtwo to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/mewtwonitey.shtml"
};

var micle_berry = {
    name: "Micle Berry",
    desc: "Increases a move's accuracy when HP is low.",
    wiki: "http://www.serebii.net/itemdex/micleberry.shtml"
};

var mind_plate = {
    name: "Mind Plate",
    desc: "Increases power of Psychic-type moves. Changes Arceus' type to Psychic.",
    wiki: "http://www.serebii.net/itemdex/mindplate.shtml"
};

var miracle_seed = {
    name: "Miracle Seed",
    desc: "Increases the power of Grass-type moves.",
    wiki: "http://www.serebii.net/itemdex/miracleseed.shtml"
};

var moomoo_milk = {
    name: "Moomoo Milk",
    desc: "Milk with a very high nutrition content. It restores the HP of one Pokémon by 100 points.",
    wiki: "http://www.serebii.net/itemdex/moomoomilk.shtml"
};

var moon_ball = {
    name: "Moon Ball",
    desc: "A Poké Ball for catching Pokémon that evolve using the Moon Stone.",
    wiki: "http://www.serebii.net/itemdex/moonball.shtml"
};

var moon_stone = {
    name: "Moon Stone",
    desc: "A peculiar stone that makes certain species of POKéMON evolve. It is as black as the night sky.",
    wiki: "http://www.serebii.net/itemdex/moonstone.shtml"
};

var muscle_band = {
    name: "Muscle Band",
    desc: "Increases the power of Physical-category moves.",
    wiki: "http://www.serebii.net/itemdex/muscleband.shtml"
};

var muscle_wing = {
    name: "Muscle Wing",
    desc: "Increases Attack EVs by 1.",
    wiki: "http://www.serebii.net/itemdex/musclewing.shtml"
};

var mystic_water = {
    name: "Mystic Water",
    desc: "Increases the power of Water-type moves.",
    wiki: "http://www.serebii.net/itemdex/mysticwater.shtml"
};

var nanab_berry = {
    name: "Nanab Berry",
    desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/nanabberry.shtml"
};

var nest_ball = {
    name: "Nest Ball",
    desc: "A somewhat different Poké Ball that works especially well on weaker Pokémon in the wild.",
    wiki: "http://www.serebii.net/itemdex/nestball.shtml"
};

var net_ball = {
    name: "Net Ball",
    desc: "A somewhat different Poké Ball that works especially well on Water- and Bug-type Pokémon.",
    wiki: "http://www.serebii.net/itemdex/netball.shtml"
};

var nevermeltice = {
    name: "Nevermeltice",
    desc: "Increases the power of Ice-type moves.",
    wiki: "http://www.serebii.net/itemdex/nevermeltice.shtml"
};

var nomel_berry = {
    name: "Nomel Berry",
    desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/nomelberry.shtml"
};

var normal_gem = {
    name: "Normal Gem",
    desc: "Increases the power of a Normal-type move only once.",
    wiki: "http://www.serebii.net/itemdex/normalgem.shtml"
};

var nugget = {
    name: "Nugget",
    desc: "A nugget of pure gold that gives off a lustrous gleam. It can be sold at a high price to shops.",
    wiki: "http://www.serebii.net/itemdex/nugget.shtml"
};

var occa_berry = {
    name: "Occa Berry",
    desc: "Weakens a supereffective Fire-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/occaberry.shtml"
};

var odd_incense = {
    name: "Odd Incense",
    desc: "Increases the power of Psychic-type moves.",
    wiki: "http://www.serebii.net/itemdex/oddincense.shtml"
};

var odd_keystone = {
    name: "Odd Keystone",
    desc: "A vital item that is needed to keep a stone tower from collapsing. Voices can be heard from it occasionally.",
    wiki: "http://www.serebii.net/itemdex/oddkeystone.shtml"
};

var old_amber = {
    name: "Old Amber",
    desc: "A piece of amber that contains the genetic material of an ancient Pokémon. It is clear with a reddish tint.",
    wiki: "http://www.serebii.net/itemdex/oldamber.shtml"
};

var old_gateau = {
    name: "Old Gateau",
    desc: "Old Chateau’s hidden specialty. It heals all the status problems of a single Pokémon.",
    wiki: "http://www.serebii.net/itemdex/oldgateau.shtml"
};

var oran_berry = {
    name: "Oran Berry",
    desc: "If held by a Pokémon, it heals the user by just 10 HP.",
    wiki: "http://www.serebii.net/itemdex/oranberry.shtml"
};

var oval_charm = {
    name: "Oval Charm",
    desc: "An oval charm said to increase the chance of Pokémon Eggs being found at the Day Care.",
    wiki: "http://www.serebii.net/itemdex/ovalcharm.shtml"
};

var oval_stone = {
    name: "Oval Stone",
    desc: "A peculiar stone that makes certain species of Pokémon evolve. It is shaped like an egg.",
    wiki: "http://www.serebii.net/itemdex/ovalstone.shtml"
};

var pamtre_berry = {
    name: "Pamtre Berry",
    desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/pamtreberry.shtml"
};

var park_ball = {
    name: "Park Ball",
    desc: "A special Poké Ball for the Pal Park.",
    wiki: "http://www.serebii.net/itemdex/parkball.shtml"
};

var parlyz_heal = {
    name: "Parlyz Heal",
    desc: "A spray-type medicine. It eliminates paralysis from a single Pokémon.",
    wiki: "http://www.serebii.net/itemdex/parlyzheal.shtml"
};

var pass_orb = {
    name: "Pass Orb",
    desc: "A mysterious orb containing the power of the Unova region, to be used when generating Pass Power.",
    wiki: "http://www.serebii.net/itemdex/passorb.shtml"
};

var passho_berry = {
    name: "Passho Berry",
    desc: "Weakens a supereffective Water-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/passhoberry.shtml"
};

var payapa_berry = {
    name: "Payapa Berry",
    desc: "Weakens a supereffective Psychic-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/payapaberry.shtml"
};

var pearl = {
    name: "Pearl",
    desc: "A somewhat-small pearl that sparkles in a pretty silver color. It can be sold cheaply to shops.",
    wiki: "http://www.serebii.net/itemdex/pearl.shtml"
};

var pearl_string = {
    name: "Pearl String",
    desc: "Very large pearls that sparkle in a pretty silver color. A maniac will buy them for a high price.",
    wiki: "http://www.serebii.net/itemdex/pearlstring.shtml"
};

var pecha_berry = {
    name: "Pecha Berry",
    desc: "If held by a Pokémon, it recovers from poison.",
    wiki: "http://www.serebii.net/itemdex/pechaberry.shtml"
};

var permit = {
    name: "Permit",
    desc: "A permit that is needed to enter the Nature Preserve. Not many know about it.",
    wiki: "http://www.serebii.net/itemdex/permit.shtml"
};

var persim_berry = {
    name: "Persim Berry",
    desc: "If held by a Pokémon, it recovers from confusion.",
    wiki: "http://www.serebii.net/itemdex/persimberry.shtml"
};

var petaya_berry = {
    name: "Petaya Berry",
    desc: "Raises Special Attack when HP is low.",
    wiki: "http://www.serebii.net/itemdex/petayaberry.shtml"
};

var pidgeotite = {
    name: "Pidgeotite",
    desc: "One of a variety of mysterious Mega Stones. Have Pidgeot hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/pidgeotite.shtml"
};

var pinap_berry = {
    name: "Pinap Berry",
    desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/pinapberry.shtml"
};

var pink_scarf = {
    name: "Pink Scarf",
    desc: "Raises holder's Cute aspect in a Contest.",
    wiki: "http://www.serebii.net/itemdex/pinkscarf.shtml"
};

var pinsirite = {
    name: "Pinsirite",
    desc: "Enables Pinsir to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/pinsirite.shtml"
};

var pixie_plate = {
    name: "Pixie Plate",
    desc: "Increases power of Fairy-type moves. Changes Arceus' type to Fairy.",
    wiki: "http://www.serebii.net/itemdex/pixieplate.shtml"
};

var plasma_card = {
    name: "Plasma Card",
    desc: "A card key needed to enter the password inside the Plasma Frigate.",
    wiki: "http://www.serebii.net/itemdex/plasmacard.shtml"
};

var plume_fossil = {
    name: "Plume Fossil",
    desc: "A fossil of an ancient Pokémon that flew in the sky in ancient times. It appears to be part of its wing.",
    wiki: "http://www.serebii.net/itemdex/plumefossil.shtml"
};

var pnk_apricorn = {
    name: "Pnk Apricorn",
    desc: "A pink Apricorn. It has a nice, sweet scent.",
    wiki: "http://www.serebii.net/itemdex/pnkapricorn.shtml"
};

var poison_barb = {
    name: "Poison Barb",
    desc: "Increases the power of Poison-type moves.",
    wiki: "http://www.serebii.net/itemdex/poisonbarb.shtml"
};

var poison_gem = {
    name: "Poison Gem",
    desc: "Increases the power of a Poison-type move only once.",
    wiki: "http://www.serebii.net/itemdex/poisongem.shtml"
};

var poké_ball = {
    name: "Poké Ball",
    desc: "A device for catching wild Pokémon. It is thrown like a ball at the target. It is designed as a capsule system.",
    wiki: "http://www.serebii.net/itemdex/pokéball.shtml"
};

var poké_doll = {
    name: "Poké Doll",
    desc: "A doll that attracts Pokémon. Use it to flee from any battle with a wild Pokémon.",
    wiki: "http://www.serebii.net/itemdex/pokédoll.shtml"
};

var poké_toy = {
    name: "Poké Toy",
    desc: "An item that attracts Pokémon. Use it to flee from any battle with a wild Pokémon.",
    wiki: "http://www.serebii.net/itemdex/pokétoy.shtml"
};

var pomeg_berry = {
    name: "Pomeg Berry",
    desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base HP.",
    wiki: "http://www.serebii.net/itemdex/pomegberry.shtml"
};

var potion = {
    name: "Potion",
    desc: "A spray-type medicine for wounds. It restores the HP of one Pokémon by just 20 points.",
    wiki: "http://www.serebii.net/itemdex/potion.shtml"
};

var power_anklet = {
    name: "Power Anklet",
    desc: "A Pokémon held item that promotes Speed gain on leveling, but reduces the Speed stat.",
    wiki: "http://www.serebii.net/itemdex/poweranklet.shtml"
};

var power_band = {
    name: "Power Band",
    desc: "A Pokémon held item that promotes Sp. Def gain on leveling, but reduces the Speed stat.",
    wiki: "http://www.serebii.net/itemdex/powerband.shtml"
};

var power_belt = {
    name: "Power Belt",
    desc: "A Pokémon held item that promotes Defense gain on leveling, but reduces the Speed stat.",
    wiki: "http://www.serebii.net/itemdex/powerbelt.shtml"
};

var power_bracer = {
    name: "Power Bracer",
    desc: "A Pokémon held item that promotes Attack gain on leveling, but reduces the Speed stat.",
    wiki: "http://www.serebii.net/itemdex/powerbracer.shtml"
};

var power_herb = {
    name: "Power Herb",
    desc: "A single-use item to be held by a Pokémon. It allows the immediate use of a move that charges on the first turn.",
    wiki: "http://www.serebii.net/itemdex/powerherb.shtml"
};

var power_lens = {
    name: "Power Lens",
    desc: "A Pokémon held item that promotes Sp. Atk gain on leveling, but reduces the Speed stat.",
    wiki: "http://www.serebii.net/itemdex/powerlens.shtml"
};

var power_plant_pass = {
    name: "Power Plant Pass",
    desc: "This pass serves as an ID card for gaining access to the power plant that lies along Route 13.",
    wiki: "http://www.serebii.net/itemdex/powerplantpass.shtml"
};

var power_weight = {
    name: "Power Weight",
    desc: "A Pokémon held item that promotes HP gain on leveling, but reduces the Speed stat.",
    wiki: "http://www.serebii.net/itemdex/powerweight.shtml"
};

var pp_max = {
    name: "Pp Max",
    desc: "It maximally raises the top PP of a selected move that has been learned by the target Pokémon.",
    wiki: "http://www.serebii.net/itemdex/ppmax.shtml"
};

var pp_up = {
    name: "Pp Up",
    desc: "It slightly raises the maximum PP of a selected move that has been learned by the target Pokémon.",
    wiki: "http://www.serebii.net/itemdex/ppup.shtml"
};

var premier_ball = {
    name: "Premier Ball",
    desc: "A somewhat rare Poké Ball that has been specially made to commemorate an event of some sort.",
    wiki: "http://www.serebii.net/itemdex/premierball.shtml"
};

var pretty_wing = {
    name: "Pretty Wing",
    desc: "Though this feather is beautiful, it’s just a regular feather and has no effect on Pokémon.",
    wiki: "http://www.serebii.net/itemdex/prettywing.shtml"
};

var prism_scale = {
    name: "Prism Scale",
    desc: "A mysterious scale that evolves certain Pokémon. It shines in rainbow colors.",
    wiki: "http://www.serebii.net/itemdex/prismscale.shtml"
};

var profs_letter = {
    name: "Profs Letter",
    desc: "A letter that Professor Sycamore wrote to your mother. A faint but pleasant perfume seems to cling to the paper.",
    wiki: "http://www.serebii.net/itemdex/profsletter.shtml"
};

var protector = {
    name: "Protector",
    desc: "A protective item of some sort. It is extremely stiff and heavy. It is loved by a certain Pokémon.",
    wiki: "http://www.serebii.net/itemdex/protector.shtml"
};

var protein = {
    name: "Protein",
    desc: "A nutritious drink for Pokémon. It raises the base Attack stat of a single Pokémon.",
    wiki: "http://www.serebii.net/itemdex/protein.shtml"
};

var psychic_gem = {
    name: "Psychic Gem",
    desc: "Increases the power of a Psychic-type move only once.",
    wiki: "http://www.serebii.net/itemdex/psychicgem.shtml"
};

var pure_incense = {
    name: "Pure Incense",
    desc: "An item to be held by a Pokémon. It helps keep wild Pokémon away if the holder is the first one in the party.",
    wiki: "http://www.serebii.net/itemdex/pureincense.shtml"
};

var qualot_berry = {
    name: "Qualot Berry",
    desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base Defense stat.",
    wiki: "http://www.serebii.net/itemdex/qualotberry.shtml"
};

var quick_ball = {
    name: "Quick Ball",
    desc: "A somewhat different Poké Ball that provides a better catch rate if it is used at the start of a wild encounter.",
    wiki: "http://www.serebii.net/itemdex/quickball.shtml"
};

var quick_claw = {
    name: "Quick Claw",
    desc: "An item to be held by a Pokémon. A light, sharp claw that lets the bearer move first occasionally.",
    wiki: "http://www.serebii.net/itemdex/quickclaw.shtml"
};

var quick_powder = {
    name: "Quick Powder",
    desc: "Increases Speed when held by Ditto.",
    wiki: "http://www.serebii.net/itemdex/quickpowder.shtml"
};

var rabuta_berry = {
    name: "Rabuta Berry",
    desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/rabutaberry.shtml"
};

var rare_bone = {
    name: "Rare Bone",
    desc: "A bone that is extremely valuable for Pokémon archeology. It can be sold for a high price to shops.",
    wiki: "http://www.serebii.net/itemdex/rarebone.shtml"
};

var rare_candy = {
    name: "Rare Candy",
    desc: "A candy that is packed with energy. It raises the level of a single Pokémon by one.",
    wiki: "http://www.serebii.net/itemdex/rarecandy.shtml"
};

var rawst_berry = {
    name: "Rawst Berry",
    desc: "If held by a Pokémon, it recovers from a burn.",
    wiki: "http://www.serebii.net/itemdex/rawstberry.shtml"
};

var razor_claw = {
    name: "Razor Claw",
    desc: "Increases critical-hit ratio.",
    wiki: "http://www.serebii.net/itemdex/razorclaw.shtml"
};

var razor_fang = {
    name: "Razor Fang",
    desc: "An item to be held by a Pokémon. It may make foes and allies flinch when the holder inflicts damage.",
    wiki: "http://www.serebii.net/itemdex/razorfang.shtml"
};

var razz_berry = {
    name: "Razz Berry",
    desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/razzberry.shtml"
};

var reaper_cloth = {
    name: "Reaper Cloth",
    desc: "A cloth imbued with horrifyingly strong spiritual energy. It is loved by a certain Pokémon.",
    wiki: "http://www.serebii.net/itemdex/reapercloth.shtml"
};

var red_apricorn = {
    name: "Red Apricorn",
    desc: "A red Apricorn. It assails your nostrils.",
    wiki: "http://www.serebii.net/itemdex/redapricorn.shtml"
};

var red_card = {
    name: "Red Card",
    desc: "A card with a mysterious power. When the holder is struck by a foe, the attacker is removed from battle.",
    wiki: "http://www.serebii.net/itemdex/redcard.shtml"
};

var red_flute = {
    name: "Red Flute",
    desc: "A toy flute made from red glass. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/redflute.shtml"
};

var red_scarf = {
    name: "Red Scarf",
    desc: "Raises holder's Cool aspect in a Contest.",
    wiki: "http://www.serebii.net/itemdex/redscarf.shtml"
};

var red_shard = {
    name: "Red Shard",
    desc: "A small red shard. It appears to be from some sort of implement made long ago.",
    wiki: "http://www.serebii.net/itemdex/redshard.shtml"
};

var relic_band = {
    name: "Relic Band",
    desc: "A bracelet made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/relicband.shtml"
};

var relic_copper = {
    name: "Relic Copper",
    desc: "A copper coin used in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/reliccopper.shtml"
};

var relic_crown = {
    name: "Relic Crown",
    desc: "A crown made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/reliccrown.shtml"
};

var relic_gold = {
    name: "Relic Gold",
    desc: "A gold coin used in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/relicgold.shtml"
};

var relic_silver = {
    name: "Relic Silver",
    desc: "A silver coin used in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/relicsilver.shtml"
};

var relic_statue = {
    name: "Relic Statue",
    desc: "A stone figure made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/relicstatue.shtml"
};

var relic_vase = {
    name: "Relic Vase",
    desc: "A vase made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/relicvase.shtml"
};

var repeat_ball = {
    name: "Repeat Ball",
    desc: "A somewhat different Poké Ball that works especially well on Pokémon species that were previously caught.",
    wiki: "http://www.serebii.net/itemdex/repeatball.shtml"
};

var repel = {
    name: "Repel",
    desc: "An item that prevents weak wild Pokémon from appearing for 100 steps after its use.",
    wiki: "http://www.serebii.net/itemdex/repel.shtml"
};

var reset_urge = {
    name: "Reset Urge",
    desc: "When used, it restores any stat changes of an ally Pokémon.",
    wiki: "http://www.serebii.net/itemdex/reseturge.shtml"
};

var resist_wing = {
    name: "Resist Wing",
    desc: "Increases Defense EVs by 1.",
    wiki: "http://www.serebii.net/itemdex/resistwing.shtml"
};

var reveal_glass = {
    name: "Reveal Glass",
    desc: "A looking glass that reveals the truth. It’s a mysterious glass that returns a Pokémon to its original shape.",
    wiki: "http://www.serebii.net/itemdex/revealglass.shtml"
};

var revival_herb = {
    name: "Revival Herb",
    desc: "A very bitter medicinal herb. It revives a fainted Pokémon, fully restoring its HP.",
    wiki: "http://www.serebii.net/itemdex/revivalherb.shtml"
};

var revive = {
    name: "Revive",
    desc: "A medicine that revives a fainted Pokémon. It restores half the Pokémon’s maximum HP.",
    wiki: "http://www.serebii.net/itemdex/revive.shtml"
};

var rindo_berry = {
    name: "Rindo Berry",
    desc: "Weakens a supereffective Grass-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/rindoberry.shtml"
};

var ring_target = {
    name: "Ring Target",
    desc: "Moves that would otherwise have no effect will land on the Pokémon that holds it.",
    wiki: "http://www.serebii.net/itemdex/ringtarget.shtml"
};

var rock_gem = {
    name: "Rock Gem",
    desc: "Increases the power of a Rock-type move only once.",
    wiki: "http://www.serebii.net/itemdex/rockgem.shtml"
};

var rock_incense = {
    name: "Rock Incense",
    desc: "Increases the power of Rock-type moves.",
    wiki: "http://www.serebii.net/itemdex/rockincense.shtml"
};

var rocky_helmet = {
    name: "Rocky Helmet",
    desc: "If the holder of this item takes damage, the attacker will also be damaged upon contact.",
    wiki: "http://www.serebii.net/itemdex/rockyhelmet.shtml"
};

var roller_skates = {
    name: "Roller Skates",
    desc: "Attaches roller skates to the bottom of your shoes, allowing you to glide quickly around and perform tricks.",
    wiki: "http://www.serebii.net/itemdex/rollerskates.shtml"
};

var root_fossil = {
    name: "Root Fossil",
    desc: "A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a plant root.",
    wiki: "http://www.serebii.net/itemdex/rootfossil.shtml"
};

var rose_incense = {
    name: "Rose Incense",
    desc: "Increases the power of Grass-type moves.",
    wiki: "http://www.serebii.net/itemdex/roseincense.shtml"
};

var rowap_berry = {
    name: "Rowap Berry",
    desc: "If held by a Pokémon and a special attack lands, the attacker also takes damage.",
    wiki: "http://www.serebii.net/itemdex/rowapberry.shtml"
};

var sablenite = {
    name: "Sablenite",
    desc: "One of a variety of mysterious Mega Stones. Have Sableye hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/sablenite.shtml"
};

var sacred_ash = {
    name: "Sacred Ash",
    desc: "It revives all fainted Pokémon. In doing so, it also fully restores their HP.",
    wiki: "http://www.serebii.net/itemdex/sacredash.shtml"
};

var safari_ball = {
    name: "Safari Ball",
    desc: "A special Poké Ball that is used only in the Great Marsh. It is decorated in a camouflage pattern.",
    wiki: "http://www.serebii.net/itemdex/safariball.shtml"
};

var salac_berry = {
    name: "Salac Berry",
    desc: "Raises Speed when HP is low.",
    wiki: "http://www.serebii.net/itemdex/salacberry.shtml"
};

var salamencite = {
    name: "Salamencite",
    desc: "One of a variety of mysterious Mega Stones. Have Salamence hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/salamencite.shtml"
};

var sceptilite = {
    name: "Sceptilite",
    desc: "One of a variety of mysterious Mega Stones. Have Sceptile hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/sceptilite.shtml"
};

var scizorite = {
    name: "Scizorite",
    desc: "Enables Scizor to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/scizorite.shtml"
};

var scope_lens = {
    name: "Scope Lens",
    desc: "Increases critical-hit ratio.",
    wiki: "http://www.serebii.net/itemdex/scopelens.shtml"
};

var sea_incense = {
    name: "Sea Incense",
    desc: "Increases the power of Water-type moves.",
    wiki: "http://www.serebii.net/itemdex/seaincense.shtml"
};

var sharp_beak = {
    name: "Sharp Beak",
    desc: "Increases the power of Flying-type moves.",
    wiki: "http://www.serebii.net/itemdex/sharpbeak.shtml"
};

var sharpedonite = {
    name: "Sharpedonite",
    desc: "One of a variety of mysterious Mega Stones. Have Sharpedo hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/sharpedonite.shtml"
};

var shed_shell = {
    name: "Shed Shell",
    desc: "A tough, discarded carapace to be held by a Pokémon. It enables the holder to switch with a waiting Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/shedshell.shtml"
};

var shell_bell = {
    name: "Shell Bell",
    desc: "An item to be held by a Pokémon. The holder’s HP is restored a little every time it inflicts damage.",
    wiki: "http://www.serebii.net/itemdex/shellbell.shtml"
};

var shiny_charm = {
    name: "Shiny Charm",
    desc: "A shiny charm said to increase the chance of finding a Shiny Pokémon in the wild.",
    wiki: "http://www.serebii.net/itemdex/shinycharm.shtml"
};

var shiny_stone = {
    name: "Shiny Stone",
    desc: "A peculiar stone that makes certain species of Pokémon evolve. It shines with a dazzling light.",
    wiki: "http://www.serebii.net/itemdex/shinystone.shtml"
};

var shoal_salt = {
    name: "Shoal Salt",
    desc: "Pure salt that can be discovered deep inside the Shoal Cave. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/shoalsalt.shtml"
};

var shoal_shell = {
    name: "Shoal Shell",
    desc: "A pretty seashell that can be found deep inside the Shoal Cave. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/shoalshell.shtml"
};

var shock_drive = {
    name: "Shock Drive",
    desc: "Changes Techno Blast to an Electric-type move when held by Genesect.",
    wiki: "http://www.serebii.net/itemdex/shockdrive.shtml"
};

var shuca_berry = {
    name: "Shuca Berry",
    desc: "Weakens a supereffective Ground-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/shucaberry.shtml"
};

var silk_scarf = {
    name: "Silk Scarf",
    desc: "Increases the power of Normal-type moves.",
    wiki: "http://www.serebii.net/itemdex/silkscarf.shtml"
};

var silverpowder = {
    name: "Silverpowder",
    desc: "Increases the power of Bug-type moves.",
    wiki: "http://www.serebii.net/itemdex/silverpowder.shtml"
};

var sitrus_berry = {
    name: "Sitrus Berry",
    desc: "If held by a Pokémon, it heals the user’s HP a little.",
    wiki: "http://www.serebii.net/itemdex/sitrusberry.shtml"
};

var skull_fossil = {
    name: "Skull Fossil",
    desc: "A fossil from a prehistoric Pokémon that lived on the land. It appears to be part of a head.",
    wiki: "http://www.serebii.net/itemdex/skullfossil.shtml"
};

var sky_plate = {
    name: "Sky Plate",
    desc: "Increases power of Flying-type moves. Changes Arceus' type to Flying.",
    wiki: "http://www.serebii.net/itemdex/skyplate.shtml"
};

var slowbronite = {
    name: "Slowbronite",
    desc: "One of a variety of mysterious Mega Stones. Have Slowbro hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/slowbronite.shtml"
};

var smoke_ball = {
    name: "Smoke Ball",
    desc: "An item to be held by a Pokémon. It enables the holder to flee from any wild Pokémon without fail.",
    wiki: "http://www.serebii.net/itemdex/smokeball.shtml"
};

var smooth_rock = {
    name: "Smooth Rock",
    desc: "A Pokémon held item that extends the duration of the move Sandstorm used by the holder.",
    wiki: "http://www.serebii.net/itemdex/smoothrock.shtml"
};

var soda_pop = {
    name: "Soda Pop",
    desc: "A fizzy soda drink. It restores the HP of one POKéMON by 60 points.",
    wiki: "http://www.serebii.net/itemdex/sodapop.shtml"
};

var soft_sand = {
    name: "Soft Sand",
    desc: "Increases the power of Ground-type moves.",
    wiki: "http://www.serebii.net/itemdex/softsand.shtml"
};

var soothe_bell = {
    name: "Soothe Bell",
    desc: "An item to be held by a Pokémon. It is a bell with a comforting chime that calms the holder and makes it friendly.",
    wiki: "http://www.serebii.net/itemdex/soothebell.shtml"
};

var soul_dew = {
    name: "Soul Dew",
    desc: "Increases both Special Attack and Special Defense when held by Latios or Latias.",
    wiki: "http://www.serebii.net/itemdex/souldew.shtml"
};

var spell_tag = {
    name: "Spell Tag",
    desc: "Increases the power of Ghost-type moves.",
    wiki: "http://www.serebii.net/itemdex/spelltag.shtml"
};

var spelon_berry = {
    name: "Spelon Berry",
    desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/spelonberry.shtml"
};

var splash_plate = {
    name: "Splash Plate",
    desc: "Increases power of Water-type moves. Changes Arceus' type to Water.",
    wiki: "http://www.serebii.net/itemdex/splashplate.shtml"
};

var spooky_plate = {
    name: "Spooky Plate",
    desc: "Increases power of Ghost-type moves. Changes Arceus' type to Ghost.",
    wiki: "http://www.serebii.net/itemdex/spookyplate.shtml"
};

var sport_ball = {
    name: "Sport Ball",
    desc: "A special Poké Ball for the Bug-Catching Contest.",
    wiki: "http://www.serebii.net/itemdex/sportball.shtml"
};

var sprinklotad = {
    name: "Sprinklotad",
    desc: "A watering can shaped like a Lotad. It helps promote the healthy growth of any Berries planted in good, soft soil.",
    wiki: "http://www.serebii.net/itemdex/sprinklotad.shtml"
};

var stable_mulch = {
    name: "Stable Mulch",
    desc: "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/stablemulch.shtml"
};

var star_piece = {
    name: "Star Piece",
    desc: "A shard of a pretty gem that sparkles in a red color. It can be sold at a high price to shops.",
    wiki: "http://www.serebii.net/itemdex/starpiece.shtml"
};

var stardust = {
    name: "Stardust",
    desc: "Lovely, red-colored sand with a loose, silky feel. It can be sold at a high price to shops.",
    wiki: "http://www.serebii.net/itemdex/stardust.shtml"
};

var starf_berry = {
    name: "Starf Berry",
    desc: "Sharply raises a random stat when HP is low.",
    wiki: "http://www.serebii.net/itemdex/starfberry.shtml"
};

var steel_gem = {
    name: "Steel Gem",
    desc: "Increases the power of a Steel-type move only once.",
    wiki: "http://www.serebii.net/itemdex/steelgem.shtml"
};

var steelixite = {
    name: "Steelixite",
    desc: "One of a variety of mysterious Mega Stones. Have Steelix hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/steelixite.shtml"
};

var stick = {
    name: "Stick",
    desc: "Increases critical-hit ratio when held by Farfetch'd.",
    wiki: "http://www.serebii.net/itemdex/stick.shtml"
};

var sticky_barb = {
    name: "Sticky Barb",
    desc: "A held item that damages the holder on every turn. It may latch on to foes and allies that touch the holder.",
    wiki: "http://www.serebii.net/itemdex/stickybarb.shtml"
};

var stone_plate = {
    name: "Stone Plate",
    desc: "Increases power of Rock-type moves. Changes Arceus' type to Rock.",
    wiki: "http://www.serebii.net/itemdex/stoneplate.shtml"
};

var sun_stone = {
    name: "Sun Stone",
    desc: "A peculiar stone that makes certain species of POKéMON evolve. It is as red as the sun.",
    wiki: "http://www.serebii.net/itemdex/sunstone.shtml"
};

var super_potion = {
    name: "Super Potion",
    desc: "A spray-type medicine for wounds. It restores the HP of one Pokémon by 50 points.",
    wiki: "http://www.serebii.net/itemdex/superpotion.shtml"
};

var super_repel = {
    name: "Super Repel",
    desc: "An item that prevents weak wild Pokémon from appearing for 200 steps after its use.",
    wiki: "http://www.serebii.net/itemdex/superrepel.shtml"
};

var swampertite = {
    name: "Swampertite",
    desc: "One of a variety of mysterious Mega Stones. Have Swampert hold it, and this stone will enable it to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/swampertite.shtml"
};

var sweet_heart = {
    name: "Sweet Heart",
    desc: "Very sweet chocolate. It restores the HP of one Pokémon by only 20 points.",
    wiki: "http://www.serebii.net/itemdex/sweetheart.shtml"
};

var swift_wing = {
    name: "Swift Wing",
    desc: "Increases Speed EVs by 1.",
    wiki: "http://www.serebii.net/itemdex/swiftwing.shtml"
};

var tamato_berry = {
    name: "Tamato Berry",
    desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base Speed stat.",
    wiki: "http://www.serebii.net/itemdex/tamatoberry.shtml"
};

var tanga_berry = {
    name: "Tanga Berry",
    desc: "Weakens a supereffective Bug-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/tangaberry.shtml"
};

var thick_club = {
    name: "Thick Club",
    desc: "Increases Attack when held by Cubone or Marowak.",
    wiki: "http://www.serebii.net/itemdex/thickclub.shtml"
};

var thunderstone = {
    name: "Thunderstone",
    desc: "A peculiar stone that makes certain species of POKéMON evolve. It has a thunderbolt pattern.",
    wiki: "http://www.serebii.net/itemdex/thunderstone.shtml"
};

var timer_ball = {
    name: "Timer Ball",
    desc: "A somewhat different BALL that becomes progressively better the more turns there are in a battle.",
    wiki: "http://www.serebii.net/itemdex/timerball.shtml"
};

var tinymushroom = {
    name: "Tinymushroom",
    desc: "A small and rare mushroom. It is sought after by collectors.",
    wiki: "http://www.serebii.net/itemdex/tinymushroom.shtml"
};

var tm01 = {
    name: "Tm01",
    desc: "Teaches the move Mega Punch/DynamicPunch/Focus Punch/Hone Claws.",
    wiki: "http://www.serebii.net/itemdex/tm01.shtml"
};

var tm02 = {
    name: "Tm02",
    desc: "Teaches the move Razor Wind/Headbutt/Dragon Claw.",
    wiki: "http://www.serebii.net/itemdex/tm02.shtml"
};

var tm03 = {
    name: "Tm03",
    desc: "Teaches the move Swords Dance/Curse/Water Pulse/Psyshock.",
    wiki: "http://www.serebii.net/itemdex/tm03.shtml"
};

var tm04 = {
    name: "Tm04",
    desc: "Teaches the move Whirlwind/Rollout/Calm Mind.",
    wiki: "http://www.serebii.net/itemdex/tm04.shtml"
};

var tm05 = {
    name: "Tm05",
    desc: "Teaches the move Mega Kick/Roar.",
    wiki: "http://www.serebii.net/itemdex/tm05.shtml"
};

var tm06 = {
    name: "Tm06",
    desc: "Teaches the move Toxic.",
    wiki: "http://www.serebii.net/itemdex/tm06.shtml"
};

var tm07 = {
    name: "Tm07",
    desc: "Teaches the move Horn Drill/Zap Cannon/Hail.",
    wiki: "http://www.serebii.net/itemdex/tm07.shtml"
};

var tm08 = {
    name: "Tm08",
    desc: "Teaches the move Body Slam/Rock Smash/Bulk Up.",
    wiki: "http://www.serebii.net/itemdex/tm08.shtml"
};

var tm09 = {
    name: "Tm09",
    desc: "Teaches the move Take Down/Psych Up/Bullet Seed/Venoshock.",
    wiki: "http://www.serebii.net/itemdex/tm09.shtml"
};

var tm10 = {
    name: "Tm10",
    desc: "Teaches the move Double-Edge/Hidden Power.",
    wiki: "http://www.serebii.net/itemdex/tm10.shtml"
};

var tm100 = {
    name: "Tm100",
    desc: "Teaches the move Confide.",
    wiki: "http://www.serebii.net/itemdex/tm100.shtml"
};

var tm11 = {
    name: "Tm11",
    desc: "Teaches the move BubbleBeam/Sunny Day.",
    wiki: "http://www.serebii.net/itemdex/tm11.shtml"
};

var tm12 = {
    name: "Tm12",
    desc: "Teaches the move Water Gun/Sweet Scent/Taunt.",
    wiki: "http://www.serebii.net/itemdex/tm12.shtml"
};

var tm13 = {
    name: "Tm13",
    desc: "Teaches the move Snore/Ice Beam.",
    wiki: "http://www.serebii.net/itemdex/tm13.shtml"
};

var tm14 = {
    name: "Tm14",
    desc: "Teaches the move Blizzard.",
    wiki: "http://www.serebii.net/itemdex/tm14.shtml"
};

var tm15 = {
    name: "Tm15",
    desc: "Teaches the move Hyper Beam.",
    wiki: "http://www.serebii.net/itemdex/tm15.shtml"
};

var tm16 = {
    name: "Tm16",
    desc: "Teaches the move Pay Day/Icy Wind/Light Screen.",
    wiki: "http://www.serebii.net/itemdex/tm16.shtml"
};

var tm17 = {
    name: "Tm17",
    desc: "Teaches the move Submission/Protect.",
    wiki: "http://www.serebii.net/itemdex/tm17.shtml"
};

var tm18 = {
    name: "Tm18",
    desc: "Teaches the move Counter/Rain Dance.",
    wiki: "http://www.serebii.net/itemdex/tm18.shtml"
};

var tm19 = {
    name: "Tm19",
    desc: "Teaches the move Seismic Toss/Giga Drain/Telekinesis/Roost.",
    wiki: "http://www.serebii.net/itemdex/tm19.shtml"
};

var tm20 = {
    name: "Tm20",
    desc: "Teaches the move Rage/Endure/Safeguard.",
    wiki: "http://www.serebii.net/itemdex/tm20.shtml"
};

var tm21 = {
    name: "Tm21",
    desc: "Teaches the move Mega Drain/Frustration.",
    wiki: "http://www.serebii.net/itemdex/tm21.shtml"
};

var tm22 = {
    name: "Tm22",
    desc: "Teaches the move SolarBeam.",
    wiki: "http://www.serebii.net/itemdex/tm22.shtml"
};

var tm23 = {
    name: "Tm23",
    desc: "Teaches the move Dragon Rage/Iron Tail/Smack Down.",
    wiki: "http://www.serebii.net/itemdex/tm23.shtml"
};

var tm24 = {
    name: "Tm24",
    desc: "Teaches the move Thunderbolt/DragonBreath.",
    wiki: "http://www.serebii.net/itemdex/tm24.shtml"
};

var tm25 = {
    name: "Tm25",
    desc: "Teaches the move Thunder.",
    wiki: "http://www.serebii.net/itemdex/tm25.shtml"
};

var tm26 = {
    name: "Tm26",
    desc: "Teaches the move Earthquake.",
    wiki: "http://www.serebii.net/itemdex/tm26.shtml"
};

var tm27 = {
    name: "Tm27",
    desc: "Teaches the move Fissure/Return.",
    wiki: "http://www.serebii.net/itemdex/tm27.shtml"
};

var tm28 = {
    name: "Tm28",
    desc: "Teaches the move Dig.",
    wiki: "http://www.serebii.net/itemdex/tm28.shtml"
};

var tm29 = {
    name: "Tm29",
    desc: "Teaches the move Psychic.",
    wiki: "http://www.serebii.net/itemdex/tm29.shtml"
};

var tm30 = {
    name: "Tm30",
    desc: "Teaches the move Teleport/Shadow Ball.",
    wiki: "http://www.serebii.net/itemdex/tm30.shtml"
};

var tm31 = {
    name: "Tm31",
    desc: "Teaches the move Mimic/Mud-Slap/Brick Break.",
    wiki: "http://www.serebii.net/itemdex/tm31.shtml"
};

var tm32 = {
    name: "Tm32",
    desc: "Teaches the move Double Team.",
    wiki: "http://www.serebii.net/itemdex/tm32.shtml"
};

var tm33 = {
    name: "Tm33",
    desc: "Teaches the move Ice Punch/Reflect.",
    wiki: "http://www.serebii.net/itemdex/tm33.shtml"
};

var tm34 = {
    name: "Tm34",
    desc: "Teaches the move Bide/Swagger/Shock Wave/Sludge Wave.",
    wiki: "http://www.serebii.net/itemdex/tm34.shtml"
};

var tm35 = {
    name: "Tm35",
    desc: "Teaches the move Metronome/Sleep Talk/Flamethrower.",
    wiki: "http://www.serebii.net/itemdex/tm35.shtml"
};

var tm36 = {
    name: "Tm36",
    desc: "Teaches the move Selfdestruct/Sludge Bomb.",
    wiki: "http://www.serebii.net/itemdex/tm36.shtml"
};

var tm37 = {
    name: "Tm37",
    desc: "Teaches the move Egg Bomb/Sandstorm.",
    wiki: "http://www.serebii.net/itemdex/tm37.shtml"
};

var tm38 = {
    name: "Tm38",
    desc: "Teaches the move Fire Blast.",
    wiki: "http://www.serebii.net/itemdex/tm38.shtml"
};

var tm39 = {
    name: "Tm39",
    desc: "Teaches the move Swift/Rock Tomb.",
    wiki: "http://www.serebii.net/itemdex/tm39.shtml"
};

var tm40 = {
    name: "Tm40",
    desc: "Teaches the move Skull Bash/Defense Curl/Aerial Ace.",
    wiki: "http://www.serebii.net/itemdex/tm40.shtml"
};

var tm41 = {
    name: "Tm41",
    desc: "Teaches the move Softboiled/ThunderPunch/Torment.",
    wiki: "http://www.serebii.net/itemdex/tm41.shtml"
};

var tm42 = {
    name: "Tm42",
    desc: "Teaches the move Dream Eater/Facade.",
    wiki: "http://www.serebii.net/itemdex/tm42.shtml"
};

var tm43 = {
    name: "Tm43",
    desc: "Teaches the move Sky Attack/Detect/Secret Power/Flame Charge.",
    wiki: "http://www.serebii.net/itemdex/tm43.shtml"
};

var tm44 = {
    name: "Tm44",
    desc: "Teaches the move Rest.",
    wiki: "http://www.serebii.net/itemdex/tm44.shtml"
};

var tm45 = {
    name: "Tm45",
    desc: "Teaches the move Thunder Wave/Attract.",
    wiki: "http://www.serebii.net/itemdex/tm45.shtml"
};

var tm46 = {
    name: "Tm46",
    desc: "Teaches the move Psywave/Thief.",
    wiki: "http://www.serebii.net/itemdex/tm46.shtml"
};

var tm47 = {
    name: "Tm47",
    desc: "Teaches the move Explosion/Steel Wing/Low Sweep.",
    wiki: "http://www.serebii.net/itemdex/tm47.shtml"
};

var tm48 = {
    name: "Tm48",
    desc: "Teaches the move Rock Slide/Fire Punch/Skill Swap/Round.",
    wiki: "http://www.serebii.net/itemdex/tm48.shtml"
};

var tm49 = {
    name: "Tm49",
    desc: "Teaches the move Tri Attack/Fury Cutter/Snatch/Echoed Voice.",
    wiki: "http://www.serebii.net/itemdex/tm49.shtml"
};

var tm50 = {
    name: "Tm50",
    desc: "Teaches the move Substitute/Nightmare/Overheat.",
    wiki: "http://www.serebii.net/itemdex/tm50.shtml"
};

var tm51 = {
    name: "Tm51",
    desc: "Teaches the move Roost/Ally Switch/Steel Wing.",
    wiki: "http://www.serebii.net/itemdex/tm51.shtml"
};

var tm52 = {
    name: "Tm52",
    desc: "Teaches the move Focus Blast.",
    wiki: "http://www.serebii.net/itemdex/tm52.shtml"
};

var tm53 = {
    name: "Tm53",
    desc: "Teaches the move Energy Ball.",
    wiki: "http://www.serebii.net/itemdex/tm53.shtml"
};

var tm54 = {
    name: "Tm54",
    desc: "Teaches the move False Swipe.",
    wiki: "http://www.serebii.net/itemdex/tm54.shtml"
};

var tm55 = {
    name: "Tm55",
    desc: "Teaches the move Brine/Scald.",
    wiki: "http://www.serebii.net/itemdex/tm55.shtml"
};

var tm56 = {
    name: "Tm56",
    desc: "Teaches the move Fling.",
    wiki: "http://www.serebii.net/itemdex/tm56.shtml"
};

var tm57 = {
    name: "Tm57",
    desc: "Teaches the move Charge Beam.",
    wiki: "http://www.serebii.net/itemdex/tm57.shtml"
};

var tm58 = {
    name: "Tm58",
    desc: "Teaches the move Endure/Sky Drop.",
    wiki: "http://www.serebii.net/itemdex/tm58.shtml"
};

var tm59 = {
    name: "Tm59",
    desc: "Teaches the move Dragon Pulse/Incinerate.",
    wiki: "http://www.serebii.net/itemdex/tm59.shtml"
};

var tm60 = {
    name: "Tm60",
    desc: "Teaches the move Drain Punch/Quash.",
    wiki: "http://www.serebii.net/itemdex/tm60.shtml"
};

var tm61 = {
    name: "Tm61",
    desc: "Teaches the move Will-O-Wisp.",
    wiki: "http://www.serebii.net/itemdex/tm61.shtml"
};

var tm62 = {
    name: "Tm62",
    desc: "Teaches the move Silver Wind/Acrobatics.",
    wiki: "http://www.serebii.net/itemdex/tm62.shtml"
};

var tm63 = {
    name: "Tm63",
    desc: "Teaches the move Embargo.",
    wiki: "http://www.serebii.net/itemdex/tm63.shtml"
};

var tm64 = {
    name: "Tm64",
    desc: "Teaches the move Explosion.",
    wiki: "http://www.serebii.net/itemdex/tm64.shtml"
};

var tm65 = {
    name: "Tm65",
    desc: "Teaches the move Shadow Claw.",
    wiki: "http://www.serebii.net/itemdex/tm65.shtml"
};

var tm66 = {
    name: "Tm66",
    desc: "Teaches the move Payback.",
    wiki: "http://www.serebii.net/itemdex/tm66.shtml"
};

var tm67 = {
    name: "Tm67",
    desc: "Teaches the move Recycle/Retaliate.",
    wiki: "http://www.serebii.net/itemdex/tm67.shtml"
};

var tm68 = {
    name: "Tm68",
    desc: "Teaches the move Giga Impact.",
    wiki: "http://www.serebii.net/itemdex/tm68.shtml"
};

var tm69 = {
    name: "Tm69",
    desc: "Teaches the move Rock Polish.",
    wiki: "http://www.serebii.net/itemdex/tm69.shtml"
};

var tm70 = {
    name: "Tm70",
    desc: "Teaches the move Flash.",
    wiki: "http://www.serebii.net/itemdex/tm70.shtml"
};

var tm71 = {
    name: "Tm71",
    desc: "Teaches the move Stone Edge.",
    wiki: "http://www.serebii.net/itemdex/tm71.shtml"
};

var tm72 = {
    name: "Tm72",
    desc: "Teaches the move Avalanche/Volt Switch.",
    wiki: "http://www.serebii.net/itemdex/tm72.shtml"
};

var tm73 = {
    name: "Tm73",
    desc: "Teaches the move Thunder Wave.",
    wiki: "http://www.serebii.net/itemdex/tm73.shtml"
};

var tm74 = {
    name: "Tm74",
    desc: "Teaches the move Gyro Ball.",
    wiki: "http://www.serebii.net/itemdex/tm74.shtml"
};

var tm75 = {
    name: "Tm75",
    desc: "Teaches the move Swords Dance.",
    wiki: "http://www.serebii.net/itemdex/tm75.shtml"
};

var tm76 = {
    name: "Tm76",
    desc: "Teaches the move Stealth Rock/Struggle Bug.",
    wiki: "http://www.serebii.net/itemdex/tm76.shtml"
};

var tm77 = {
    name: "Tm77",
    desc: "Teaches the move Psych Up.",
    wiki: "http://www.serebii.net/itemdex/tm77.shtml"
};

var tm78 = {
    name: "Tm78",
    desc: "Teaches the move Captivate/Bulldoze.",
    wiki: "http://www.serebii.net/itemdex/tm78.shtml"
};

var tm79 = {
    name: "Tm79",
    desc: "Teaches the move Dark Pulse/Frost Breath.",
    wiki: "http://www.serebii.net/itemdex/tm79.shtml"
};

var tm80 = {
    name: "Tm80",
    desc: "Teaches the move Rock Slide.",
    wiki: "http://www.serebii.net/itemdex/tm80.shtml"
};

var tm81 = {
    name: "Tm81",
    desc: "Teaches the move X-Scissor.",
    wiki: "http://www.serebii.net/itemdex/tm81.shtml"
};

var tm82 = {
    name: "Tm82",
    desc: "Teaches the move Sleep Talk/Dragon Tail.",
    wiki: "http://www.serebii.net/itemdex/tm82.shtml"
};

var tm83 = {
    name: "Tm83",
    desc: "Teaches the move Natural Gift/Work Up/Infestation.",
    wiki: "http://www.serebii.net/itemdex/tm83.shtml"
};

var tm84 = {
    name: "Tm84",
    desc: "Teaches the move Poison Jab.",
    wiki: "http://www.serebii.net/itemdex/tm84.shtml"
};

var tm85 = {
    name: "Tm85",
    desc: "Teaches the move Dream Eater.",
    wiki: "http://www.serebii.net/itemdex/tm85.shtml"
};

var tm86 = {
    name: "Tm86",
    desc: "Teaches the move Grass Knot.",
    wiki: "http://www.serebii.net/itemdex/tm86.shtml"
};

var tm87 = {
    name: "Tm87",
    desc: "Teaches the move Swagger.",
    wiki: "http://www.serebii.net/itemdex/tm87.shtml"
};

var tm88 = {
    name: "Tm88",
    desc: "Teaches the move Pluck/Sleep Talk.",
    wiki: "http://www.serebii.net/itemdex/tm88.shtml"
};

var tm89 = {
    name: "Tm89",
    desc: "Teaches the move U-turn.",
    wiki: "http://www.serebii.net/itemdex/tm89.shtml"
};

var tm90 = {
    name: "Tm90",
    desc: "Teaches the move Substitute.",
    wiki: "http://www.serebii.net/itemdex/tm90.shtml"
};

var tm91 = {
    name: "Tm91",
    desc: "Teaches the move Flash Cannon.",
    wiki: "http://www.serebii.net/itemdex/tm91.shtml"
};

var tm92 = {
    name: "Tm92",
    desc: "Teaches the move Trick Room.",
    wiki: "http://www.serebii.net/itemdex/tm92.shtml"
};

var tm93 = {
    name: "Tm93",
    desc: "Teaches the move Wild Charge.",
    wiki: "http://www.serebii.net/itemdex/tm93.shtml"
};

var tm94 = {
    name: "Tm94",
    desc: "Teaches the move Rock Smash.",
    wiki: "http://www.serebii.net/itemdex/tm94.shtml"
};

var tm95 = {
    name: "Tm95",
    desc: "Teaches the move Snarl.",
    wiki: "http://www.serebii.net/itemdex/tm95.shtml"
};

var tm96 = {
    name: "Tm96",
    desc: "Teaches the move Nature Power.",
    wiki: "http://www.serebii.net/itemdex/tm96.shtml"
};

var tm97 = {
    name: "Tm97",
    desc: "Teaches the move Dark Pulse.",
    wiki: "http://www.serebii.net/itemdex/tm97.shtml"
};

var tm98 = {
    name: "Tm98",
    desc: "Teaches the move Power-Up Punch.",
    wiki: "http://www.serebii.net/itemdex/tm98.shtml"
};

var tm99 = {
    name: "Tm99",
    desc: "Teaches the move Dazzling Gleam.",
    wiki: "http://www.serebii.net/itemdex/tm99.shtml"
};

var tmv_pass = {
    name: "Tmv Pass",
    desc: "A commuter pass that allows the holder to ride the TMV between Lumiose City and Kiloude City at any time.",
    wiki: "http://www.serebii.net/itemdex/tmvpass.shtml"
};

var toxic_orb = {
    name: "Toxic Orb",
    desc: "An item to be held by a Pokémon. It is a bizarre orb that badly poisons the holder in battle.",
    wiki: "http://www.serebii.net/itemdex/toxicorb.shtml"
};

var toxic_plate = {
    name: "Toxic Plate",
    desc: "Increases power of Poison-type moves. Changes Arceus' type to Poison.",
    wiki: "http://www.serebii.net/itemdex/toxicplate.shtml"
};

var twistedspoon = {
    name: "Twistedspoon",
    desc: "Increases the power of Psychic-type moves.",
    wiki: "http://www.serebii.net/itemdex/twistedspoon.shtml"
};

var tyranitarite = {
    name: "Tyranitarite",
    desc: "Enables Tyranitar to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/tyranitarite.shtml"
};

var ultra_ball = {
    name: "Ultra Ball",
    desc: "An ultra-performance Ball that provides a higher Pokémon catch rate than a Great Ball.",
    wiki: "http://www.serebii.net/itemdex/ultraball.shtml"
};

var up_grade = {
    name: "Up_grade",
    desc: "A transparent device filled with all sorts of data. It was produced by Silph Co.",
    wiki: "http://www.serebii.net/itemdex/up_grade.shtml"
};

var venusaurite = {
    name: "Venusaurite",
    desc: "Enables Venusaur to Mega Evolve during battle.",
    wiki: "http://www.serebii.net/itemdex/venusaurite.shtml"
};

var wacan_berry = {
    name: "Wacan Berry",
    desc: "Weakens a supereffective Electric-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/wacanberry.shtml"
};

var water_gem = {
    name: "Water Gem",
    desc: "Increases the power of a Water-type move only once.",
    wiki: "http://www.serebii.net/itemdex/watergem.shtml"
};

var water_stone = {
    name: "Water Stone",
    desc: "A peculiar stone that makes certain species of Pokémon evolve. It is a clear, light blue.",
    wiki: "http://www.serebii.net/itemdex/waterstone.shtml"
};

var watmel_berry = {
    name: "Watmel Berry",
    desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/watmelberry.shtml"
};

var wave_incense = {
    name: "Wave Incense",
    desc: "Increases the power of Water-type moves.",
    wiki: "http://www.serebii.net/itemdex/waveincense.shtml"
};

var wepear_berry = {
    name: "Wepear Berry",
    desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/wepearberry.shtml"
};

var white_flute = {
    name: "White Flute",
    desc: "A toy flute made from white glass. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/whiteflute.shtml"
};

var white_herb = {
    name: "White Herb",
    desc: "An item to be held by a POKéMON. It restores any lowered stat in battle. It can be used only once.",
    wiki: "http://www.serebii.net/itemdex/whiteherb.shtml"
};

var wht_apricorn = {
    name: "Wht Apricorn",
    desc: "A white Apricorn. It doesn’t smell like anything.",
    wiki: "http://www.serebii.net/itemdex/whtapricorn.shtml"
};

var wide_lens = {
    name: "Wide Lens",
    desc: "Increases the accuracy of moves.",
    wiki: "http://www.serebii.net/itemdex/widelens.shtml"
};

var wiki_berry = {
    name: "Wiki Berry",
    desc: "Restores HP if it's low, but may cause confusion.",
    wiki: "http://www.serebii.net/itemdex/wikiberry.shtml"
};

var wise_glasses = {
    name: "Wise Glasses",
    desc: "Increases the power of Special-category moves.",
    wiki: "http://www.serebii.net/itemdex/wiseglasses.shtml"
};

var x_accuracy = {
    name: "X Accuracy",
    desc: "Raises Accuracy of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xaccuracy.shtml"
};

var x_accuracy_2 = {
    name: "X Accuracy 2",
    desc: "Sharply raises Accuracy of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xaccuracy2.shtml"
};

var x_accuracy_3 = {
    name: "X Accuracy 3",
    desc: "Drastically raises Accuracy of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xaccuracy3.shtml"
};

var x_accuracy_6 = {
    name: "X Accuracy 6",
    desc: "Immensely raises Accuracy of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xaccuracy6.shtml"
};

var x_attack = {
    name: "X Attack",
    desc: "Raises Attack of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xattack.shtml"
};

var x_attack_2 = {
    name: "X Attack 2",
    desc: "Sharply raises Attack of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xattack2.shtml"
};

var x_attack_3 = {
    name: "X Attack 3",
    desc: "Drastically raises Attack of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xattack3.shtml"
};

var x_attack_6 = {
    name: "X Attack 6",
    desc: "Immensely raises Attack of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xattack6.shtml"
};

var x_defend = {
    name: "X Defend",
    desc: "Raises Defense of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xdefend.shtml"
};

var x_defend_2 = {
    name: "X Defend 2",
    desc: "Sharply raises Defense of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xdefend2.shtml"
};

var x_defend_3 = {
    name: "X Defend 3",
    desc: "Drastically raises Defense of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xdefend3.shtml"
};

var x_defend_6 = {
    name: "X Defend 6",
    desc: "Immensely raises Defense of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xdefend6.shtml"
};

var x_sp_def = {
    name: "X Sp Def",
    desc: "Raises Special Defense of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xspdef.shtml"
};

var x_sp_def_2 = {
    name: "X Sp Def 2",
    desc: "Sharply raises Special Defense of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xspdef2.shtml"
};

var x_sp_def_3 = {
    name: "X Sp Def 3",
    desc: "Drastically raises Special Defense of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xspdef3.shtml"
};

var x_sp_def_6 = {
    name: "X Sp Def 6",
    desc: "Immensely raises Special Defense of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xspdef6.shtml"
};

var x_special = {
    name: "X Special",
    desc: "Raises Special Attack of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xspecial.shtml"
};

var x_special_2 = {
    name: "X Special 2",
    desc: "Sharply raises Special Attack of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xspecial2.shtml"
};

var x_special_3 = {
    name: "X Special 3",
    desc: "Drastically raises Special Attack of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xspecial3.shtml"
};

var x_special_6 = {
    name: "X Special 6",
    desc: "Immensely raises Special Attack of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xspecial6.shtml"
};

var x_speed = {
    name: "X Speed",
    desc: "Raises Speed of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xspeed.shtml"
};

var x_speed_2 = {
    name: "X Speed 2",
    desc: "Sharply raises Speed of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xspeed2.shtml"
};

var x_speed_3 = {
    name: "X Speed 3",
    desc: "Drastically raises Speed of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xspeed3.shtml"
};

var x_speed_6 = {
    name: "X Speed 6",
    desc: "Immensely raises Speed of a Pokémon in battle.",
    wiki: "http://www.serebii.net/itemdex/xspeed6.shtml"
};

var yache_berry = {
    name: "Yache Berry",
    desc: "Weakens a supereffective Ice-type attack against the holding Pokémon.",
    wiki: "http://www.serebii.net/itemdex/yacheberry.shtml"
};

var yellow_flute = {
    name: "Yellow Flute",
    desc: "A toy flute made from yellow glass. A maniac will buy it for a high price.",
    wiki: "http://www.serebii.net/itemdex/yellowflute.shtml"
};

var yellow_scarf = {
    name: "Yellow Scarf",
    desc: "Raises holder's Tough aspect in a Contest.",
    wiki: "http://www.serebii.net/itemdex/yellowscarf.shtml"
};

var yellow_shard = {
    name: "Yellow Shard",
    desc: "A small yellow shard. It appears to be from some sort of implement made long ago.",
    wiki: "http://www.serebii.net/itemdex/yellowshard.shtml"
};

var ylw_apricorn = {
    name: "Ylw Apricorn",
    desc: "A yellow Apricorn. It has an invigorating scent.",
    wiki: "http://www.serebii.net/itemdex/ylwapricorn.shtml"
};

var zap_plate = {
    name: "Zap Plate",
    desc: "Increases power of Electric-type moves. Changes Arceus' type to Electric.",
    wiki: "http://www.serebii.net/itemdex/zapplate.shtml"
};

var zinc = {
    name: "Zinc",
    desc: "A nutritious drink for Pokémon. It raises the base Sp. Def (Special Defense) stat of a single Pokémon.",
    wiki: "http://www.serebii.net/itemdex/zinc.shtml"
};

var zoom_lens = {
    name: "Zoom Lens",
    desc: "Raises a move's accuracy if the holder moves after its target.",
    wiki: "http://www.serebii.net/itemdex/zoomlens.shtml"
};



var adaptability = {
    name: "Adaptability",
    desc: "Powers up moves of the same type.",
    wiki: "http://www.serebii.net/abilitydex/adaptability.shtml"
};

var aerilate = {
    name: "Aerilate",
    desc: "Normal-type moves become Flying-type moves.",
    wiki: "http://www.serebii.net/abilitydex/aerilate.shtml"
};

var aftermath = {
    name: "Aftermath",
    desc: "Damages the foe landing the finishing hit.",
    wiki: "http://www.serebii.net/abilitydex/aftermath.shtml"
};

var air_lock = {
    name: "Air Lock",
    desc: "Eliminates the effects of weather.",
    wiki: "http://www.serebii.net/abilitydex/airlock.shtml"
};

var analytic = {
    name: "Analytic",
    desc: "Strengthens moves when moving last.",
    wiki: "http://www.serebii.net/abilitydex/analytic.shtml"
};

var anger_point = {
    name: "Anger Point",
    desc: "Raises Attack upon taking a critical hit.",
    wiki: "http://www.serebii.net/abilitydex/angerpoint.shtml"
};

var anticipation = {
    name: "Anticipation",
    desc: "Senses the foe’s dangerous moves.",
    wiki: "http://www.serebii.net/abilitydex/anticipation.shtml"
};

var arena_trap = {
    name: "Arena Trap",
    desc: "Prevents the foe from fleeing.",
    wiki: "http://www.serebii.net/abilitydex/arenatrap.shtml"
};

var aroma_veil = {
    name: "Aroma Veil",
    desc: "Protects allies from attacks that limit their move choices.",
    wiki: "http://www.serebii.net/abilitydex/aromaveil.shtml"
};

var aura_break = {
    name: "Aura Break",
    desc: "The effects of \"Aura\" Abilities are reversed.",
    wiki: "http://www.serebii.net/abilitydex/aurabreak.shtml"
};

var bad_dreams = {
    name: "Bad Dreams",
    desc: "Reduces a sleeping foe’s HP.",
    wiki: "http://www.serebii.net/abilitydex/baddreams.shtml"
};

var battery = {
    name: "Battery",
    desc: "Raises the power of allies' special moves",
    wiki: "http://www.serebii.net/abilitydex/battery.shtml"
};

var battle_armor = {
    name: "Battle Armor",
    desc: "The Pokémon is protected against critical hits.",
    wiki: "http://www.serebii.net/abilitydex/battlearmor.shtml"
};

var battle_bond = {
    name: "Battle Bond",
    desc: "Lets a Pokémon change its form after causing an opponent to faint.",
    wiki: "http://www.serebii.net/abilitydex/battlebond.shtml"
};

var berserk = {
    name: "Berserk",
    desc: "Raises Special Attack when HP is low",
    wiki: "http://www.serebii.net/abilitydex/berserk.shtml"
};

var big_pecks = {
    name: "Big Pecks",
    desc: "Protects the Pokémon from Defense-lowering attacks.",
    wiki: "http://www.serebii.net/abilitydex/bigpecks.shtml"
};

var blaze = {
    name: "Blaze",
    desc: "Powers up Fire-type moves in a pinch.",
    wiki: "http://www.serebii.net/abilitydex/blaze.shtml"
};

var bulletproof = {
    name: "Bulletproof",
    desc: "Protects the Pokémon from some ball and bomb moves.",
    wiki: "http://www.serebii.net/abilitydex/bulletproof.shtml"
};

var cacophony = {
    name: "Cacophony",
    desc: "Avoids sound-based moves.",
    wiki: "http://www.serebii.net/abilitydex/cacophony.shtml"
};

var cheek_pouch = {
    name: "Cheek Pouch",
    desc: "Restores HP as well when the Pokémon eats a Berry.",
    wiki: "http://www.serebii.net/abilitydex/cheekpouch.shtml"
};

var chlorophyll = {
    name: "Chlorophyll",
    desc: "Boosts the Pokémon's Speed in sunshine.",
    wiki: "http://www.serebii.net/abilitydex/chlorophyll.shtml"
};

var clear_body = {
    name: "Clear Body",
    desc: "Prevents the Pokémon's stats from being lowered.",
    wiki: "http://www.serebii.net/abilitydex/clearbody.shtml"
};

var cloud_nine = {
    name: "Cloud Nine",
    desc: "Eliminates the effects of weather.",
    wiki: "http://www.serebii.net/abilitydex/cloudnine.shtml"
};

var color_change = {
    name: "Color Change",
    desc: "Changes the Pokémon's type to the foe’s move.",
    wiki: "http://www.serebii.net/abilitydex/colorchange.shtml"
};

var comatose = {
    name: "Comatose",
    desc: "Protects the Pokémon from status conditions other than sleep.",
    wiki: "http://www.serebii.net/abilitydex/comatose.shtml"
};

var competitive = {
    name: "Competitive",
    desc: "Boosts the Sp. Atk stat when a stat is lowered.",
    wiki: "http://www.serebii.net/abilitydex/competitive.shtml"
};

var compound_eyes = {
    name: "Compound Eyes",
    desc: "The Pokémon's accuracy is boosted.",
    wiki: "http://www.serebii.net/abilitydex/compoundeyes.shtml"
};

var contrary = {
    name: "Contrary",
    desc: "Inverts changes to stat stages.",
    wiki: "http://www.serebii.net/abilitydex/contrary.shtml"
};

var corrosion = {
    name: "Corrosion",
    desc: "Allows the user to inflict poison on any Pokémon.",
    wiki: "http://www.serebii.net/abilitydex/corrosion.shtml"
};

var cursed_body = {
    name: "Cursed Body",
    desc: "Has a 30% chance of Disabling any move that hits the Pokémon.",
    wiki: "http://www.serebii.net/abilitydex/cursedbody.shtml"
};

var cute_charm = {
    name: "Cute Charm",
    desc: "Contact with the Pokémon may cause infatuation.",
    wiki: "http://www.serebii.net/abilitydex/cutecharm.shtml"
};

var damp = {
    name: "Damp",
    desc: "Prevents combatants from self destructing.",
    wiki: "http://www.serebii.net/abilitydex/damp.shtml"
};

var dancer = {
    name: "Dancer",
    desc: "Allows the Pokémon to immediately copy dancing moves.",
    wiki: "http://www.serebii.net/abilitydex/dancer.shtml"
};

var dark_aura = {
    name: "Dark Aura",
    desc: "Powers up each Pokémon's Dark-type moves.",
    wiki: "http://www.serebii.net/abilitydex/darkaura.shtml"
};

var dazzling = {
    name: "Dazzling",
    desc: "Prevents the opponent from using moves with increased priority.",
    wiki: "http://www.serebii.net/abilitydex/dazzling.shtml"
};

var defeatist = {
    name: "Defeatist",
    desc: "Halves Attack and Special Attack below 50% HP.",
    wiki: "http://www.serebii.net/abilitydex/defeatist.shtml"
};

var defiant = {
    name: "Defiant",
    desc: "Raises Attack two stages upon having any stat lowered.",
    wiki: "http://www.serebii.net/abilitydex/defiant.shtml"
};

var delta_stream = {
    name: "Delta Stream",
    desc: "Eliminates weather effects and eliminates weaknesses of Flying-type Pokémon.",
    wiki: "http://www.serebii.net/abilitydex/deltastream.shtml"
};

var desolate_land = {
    name: "Desolate Land",
    desc: "Creates harsh sunlight.",
    wiki: "http://www.serebii.net/abilitydex/desolateland.shtml"
};

var disguise = {
    name: "Disguise",
    desc: "Allows the Pokémon to nullify damage from one attack.",
    wiki: "http://www.serebii.net/abilitydex/disguise.shtml"
};

var download = {
    name: "Download",
    desc: "Adjusts power according to the foe’s lowest defensive stat.",
    wiki: "http://www.serebii.net/abilitydex/download.shtml"
};

var drizzle = {
    name: "Drizzle",
    desc: "The Pokémon makes it rain if it appears in battle.",
    wiki: "http://www.serebii.net/abilitydex/drizzle.shtml"
};

var drought = {
    name: "Drought",
    desc: "The Pokémon makes it sunny if it is in battle.",
    wiki: "http://www.serebii.net/abilitydex/drought.shtml"
};

var dry_skin = {
    name: "Dry Skin",
    desc: "Reduces HP if it is hot. Water restores HP.",
    wiki: "http://www.serebii.net/abilitydex/dryskin.shtml"
};

var early_bird = {
    name: "Early Bird",
    desc: "The Pokémon awakens quickly from sleep.",
    wiki: "http://www.serebii.net/abilitydex/earlybird.shtml"
};

var effect_spore = {
    name: "Effect Spore",
    desc: "Contact may paralyze, poison, or cause sleep.",
    wiki: "http://www.serebii.net/abilitydex/effectspore.shtml"
};

var electric_surge = {
    name: "Electric Surge",
    desc: "Immediately creates Electric Terrain upon entering battle.",
    wiki: "http://www.serebii.net/abilitydex/electricsurge.shtml"
};

var fairy_aura = {
    name: "Fairy Aura",
    desc: "Powers up each Pokémon's Fairy-type moves.",
    wiki: "http://www.serebii.net/abilitydex/fairyaura.shtml"
};

var filter = {
    name: "Filter",
    desc: "Powers down supereffective moves.",
    wiki: "http://www.serebii.net/abilitydex/filter.shtml"
};

var flame_body = {
    name: "Flame Body",
    desc: "Contact with the Pokémon may burn the foe.",
    wiki: "http://www.serebii.net/abilitydex/flamebody.shtml"
};

var flare_boost = {
    name: "Flare Boost",
    desc: "Increases Special Attack to 1.5× when burned.",
    wiki: "http://www.serebii.net/abilitydex/flareboost.shtml"
};

var flash_fire = {
    name: "Flash Fire",
    desc: "Powers up Fire-type moves if hit by a fire move.",
    wiki: "http://www.serebii.net/abilitydex/flashfire.shtml"
};

var flower_gift = {
    name: "Flower Gift",
    desc: "Powers up party Pokémon when it is sunny.",
    wiki: "http://www.serebii.net/abilitydex/flowergift.shtml"
};

var flower_veil = {
    name: "Flower Veil",
    desc: "Prevents lowering of ally Grass-type Pokémon's stats.",
    wiki: "http://www.serebii.net/abilitydex/flowerveil.shtml"
};

var fluffy = {
    name: "Fluffy",
    desc: "Haves damage from physical moves, but doubles damage from Fire-type ones.",
    wiki: "http://www.serebii.net/abilitydex/fluffy.shtml"
};

var forecast = {
    name: "Forecast",
    desc: "Transforms with the weather.",
    wiki: "http://www.serebii.net/abilitydex/forecast.shtml"
};

var forewarn = {
    name: "Forewarn",
    desc: "Determines what moves the foe has.",
    wiki: "http://www.serebii.net/abilitydex/forewarn.shtml"
};

var friend_guard = {
    name: "Friend Guard",
    desc: "Decreases damage inflicted against ally Pokémon.",
    wiki: "http://www.serebii.net/abilitydex/friendguard.shtml"
};

var frisk = {
    name: "Frisk",
    desc: "The Pokémon can check the foe’s held item.",
    wiki: "http://www.serebii.net/abilitydex/frisk.shtml"
};

var full_metal_body = {
    name: "Full Metal Body",
    desc: "Prevents stat reduction caused by other Pokémon's moves or abilities.",
    wiki: "http://www.serebii.net/abilitydex/fullmetalbody.shtml"
};

var fur_coat = {
    name: "Fur Coat",
    desc: "Halves damage from physical moves.",
    wiki: "http://www.serebii.net/abilitydex/furcoat.shtml"
};

var gale_wings = {
    name: "Gale Wings",
    desc: "Gives priority to Flying-type moves.",
    wiki: "http://www.serebii.net/abilitydex/galewings.shtml"
};

var gluttony = {
    name: "Gluttony",
    desc: "Encourages the early use of a held Berry.",
    wiki: "http://www.serebii.net/abilitydex/gluttony.shtml"
};

var gooey = {
    name: "Gooey",
    desc: "Contact with the Pokémon lowers the attacker's Speed stat.",
    wiki: "http://www.serebii.net/abilitydex/gooey.shtml"
};

var grass_pelt = {
    name: "Grass Pelt",
    desc: "Boosts the Defense stat in Grassy Terrain.",
    wiki: "http://www.serebii.net/abilitydex/grasspelt.shtml"
};

var guts = {
    name: "Guts",
    desc: "Boosts Attack if there is a status problem.",
    wiki: "http://www.serebii.net/abilitydex/guts.shtml"
};

var harvest = {
    name: "Harvest",
    desc: "Sometimes restores a consumed Berry.",
    wiki: "http://www.serebii.net/abilitydex/harvest.shtml"
};

var healer = {
    name: "Healer",
    desc: "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn.",
    wiki: "http://www.serebii.net/abilitydex/healer.shtml"
};

var heatproof = {
    name: "Heatproof",
    desc: "Weakens the power of Fire-type moves.",
    wiki: "http://www.serebii.net/abilitydex/heatproof.shtml"
};

var heavy_metal = {
    name: "Heavy Metal",
    desc: "Doubles the Pokémon's weight.",
    wiki: "http://www.serebii.net/abilitydex/heavymetal.shtml"
};

var honey_gather = {
    name: "Honey Gather",
    desc: "The Pokémon may gather Honey from somewhere.",
    wiki: "http://www.serebii.net/abilitydex/honeygather.shtml"
};

var huge_power = {
    name: "Huge Power",
    desc: "Raises the Pokémon's Attack stat.",
    wiki: "http://www.serebii.net/abilitydex/hugepower.shtml"
};

var hustle = {
    name: "Hustle",
    desc: "Boosts the Attack stat, but lowers accuracy.",
    wiki: "http://www.serebii.net/abilitydex/hustle.shtml"
};

var hydration = {
    name: "Hydration",
    desc: "Heals status problems if it is raining.",
    wiki: "http://www.serebii.net/abilitydex/hydration.shtml"
};

var hyper_cutter = {
    name: "Hyper Cutter",
    desc: "Prevents the Attack stat from being lowered.",
    wiki: "http://www.serebii.net/abilitydex/hypercutter.shtml"
};

var ice_body = {
    name: "Ice Body",
    desc: "The Pokémon regains HP in a hailstorm.",
    wiki: "http://www.serebii.net/abilitydex/icebody.shtml"
};

var illuminate = {
    name: "Illuminate",
    desc: "Raises the likelihood of meeting wild Pokémon.",
    wiki: "http://www.serebii.net/abilitydex/illuminate.shtml"
};

var illusion = {
    name: "Illusion",
    desc: "Takes the appearance of the last conscious party Pokémon upon being sent out until hit by a damaging move.",
    wiki: "http://www.serebii.net/abilitydex/illusion.shtml"
};

var immunity = {
    name: "Immunity",
    desc: "Prevents the Pokémon from getting poisoned.",
    wiki: "http://www.serebii.net/abilitydex/immunity.shtml"
};

var imposter = {
    name: "Imposter",
    desc: "Transforms upon entering battle.",
    wiki: "http://www.serebii.net/abilitydex/imposter.shtml"
};

var innards_out = {
    name: "Innards Out",
    desc: "Deals damage to opposing Pokémon upon fainting.",
    wiki: "http://www.serebii.net/abilitydex/innardsout.shtml"
};

var infiltrator = {
    name: "Infiltrator",
    desc: "Ignores Light Screen, Reflect, and Safeguard.",
    wiki: "http://www.serebii.net/abilitydex/infiltrator.shtml"
};

var inner_focus = {
    name: "Inner Focus",
    desc: "The Pokémon is protected from flinching.",
    wiki: "http://www.serebii.net/abilitydex/innerfocus.shtml"
};

var insomnia = {
    name: "Insomnia",
    desc: "Prevents the Pokémon from falling asleep.",
    wiki: "http://www.serebii.net/abilitydex/insomnia.shtml"
};

var intimidate = {
    name: "Intimidate",
    desc: "Lowers the foe’s Attack stat.",
    wiki: "http://www.serebii.net/abilitydex/intimidate.shtml"
};

var iron_barbs = {
    name: "Iron Barbs",
    desc: "Damages attacking Pokémon for 1/8 their max HP on contact.",
    wiki: "http://www.serebii.net/abilitydex/ironbarbs.shtml"
};

var iron_fist = {
    name: "Iron Fist",
    desc: "Boosts the power of punching moves.",
    wiki: "http://www.serebii.net/abilitydex/ironfist.shtml"
};

var justified = {
    name: "Justified",
    desc: "Raises Attack when hit by Dark-type moves.",
    wiki: "http://www.serebii.net/abilitydex/justified.shtml"
};

var keen_eye = {
    name: "Keen Eye",
    desc: "Prevents the Pokémon from losing accuracy.",
    wiki: "http://www.serebii.net/abilitydex/keeneye.shtml"
};

var klutz = {
    name: "Klutz",
    desc: "The Pokémon can’t use any held items.",
    wiki: "http://www.serebii.net/abilitydex/klutz.shtml"
};

var leaf_guard = {
    name: "Leaf Guard",
    desc: "Prevents status problems in sunny weather.",
    wiki: "http://www.serebii.net/abilitydex/leafguard.shtml"
};

var levitate = {
    name: "Levitate",
    desc: "Gives full immunity to all Ground-type moves.",
    wiki: "http://www.serebii.net/abilitydex/levitate.shtml"
};

var light_metal = {
    name: "Light Metal",
    desc: "Halves the Pokémon's weight.",
    wiki: "http://www.serebii.net/abilitydex/lightmetal.shtml"
};

var lightning_rod = {
    name: "Lightning Rod",
    desc: "The Pokémon draws in all Electric-type moves to raise Sp. Atk.",
    wiki: "http://www.serebii.net/abilitydex/lightningrod.shtml"
};

var limber = {
    name: "Limber",
    desc: "The Pokémon is protected from paralysis.",
    wiki: "http://www.serebii.net/abilitydex/limber.shtml"
};

var liquid_ooze = {
    name: "Liquid Ooze",
    desc: "Inflicts damage on foes using any draining move.",
    wiki: "http://www.serebii.net/abilitydex/liquidooze.shtml"
};

var magic_bounce = {
    name: "Magic Bounce",
    desc: "Reflects most non-damaging moves back at their user.",
    wiki: "http://www.serebii.net/abilitydex/magicbounce.shtml"
};

var magic_guard = {
    name: "Magic Guard",
    desc: "The Pokémon only takes damage from attacks.",
    wiki: "http://www.serebii.net/abilitydex/magicguard.shtml"
};

var magician = {
    name: "Magician",
    desc: "The Pokémon steals the held item of a Pokémon it hits with a move.",
    wiki: "http://www.serebii.net/abilitydex/magician.shtml"
};

var magma_armor = {
    name: "Magma Armor",
    desc: "Prevents the Pokémon from becoming frozen.",
    wiki: "http://www.serebii.net/abilitydex/magmaarmor.shtml"
};

var magnet_pull = {
    name: "Magnet Pull",
    desc: "Prevents Steel-type Pokémon from escaping.",
    wiki: "http://www.serebii.net/abilitydex/magnetpull.shtml"
};

var marvel_scale = {
    name: "Marvel Scale",
    desc: "Boosts Defense if there is a status problem.",
    wiki: "http://www.serebii.net/abilitydex/marvelscale.shtml"
};

var mega_launcher = {
    name: "Mega Launcher",
    desc: "Powers up aura and pulse moves.",
    wiki: "http://www.serebii.net/abilitydex/megalauncher.shtml"
};

var minus = {
    name: "Minus",
    desc: "Boosts Sp. Atk if another Pokémon has Plus.",
    wiki: "http://www.serebii.net/abilitydex/minus.shtml"
};

var mold_breaker = {
    name: "Mold Breaker",
    desc: "Moves can be used regardless of Abilities.",
    wiki: "http://www.serebii.net/abilitydex/moldbreaker.shtml"
};

var moody = {
    name: "Moody",
    desc: "Raises a random stat two stages and lowers another one stage after each turn.",
    wiki: "http://www.serebii.net/abilitydex/moody.shtml"
};

var motor_drive = {
    name: "Motor Drive",
    desc: "Raises Speed if hit by an Electric-type move.",
    wiki: "http://www.serebii.net/abilitydex/motordrive.shtml"
};

var moxie = {
    name: "Moxie",
    desc: "Raises Attack one stage upon KOing a Pokémon.",
    wiki: "http://www.serebii.net/abilitydex/moxie.shtml"
};

var multiscale = {
    name: "Multiscale",
    desc: "Halves damage taken from full HP.",
    wiki: "http://www.serebii.net/abilitydex/multiscale.shtml"
};

var multitype = {
    name: "Multitype",
    desc: "Changes type to match the held Plate.",
    wiki: "http://www.serebii.net/abilitydex/multitype.shtml"
};

var mummy = {
    name: "Mummy",
    desc: "Contact with this Pokémon spreads this Ability.",
    wiki: "http://www.serebii.net/abilitydex/mummy.shtml"
};

var natural_cure = {
    name: "Natural Cure",
    desc: "All status problems are healed upon switching out.",
    wiki: "http://www.serebii.net/abilitydex/naturalcure.shtml"
};

var no_guard = {
    name: "No Guard",
    desc: "Ensures the Pokémon and its foe’s attacks land.",
    wiki: "http://www.serebii.net/abilitydex/noguard.shtml"
};

var normalize = {
    name: "Normalize",
    desc: "All the Pokémon's moves become Normal type.",
    wiki: "http://www.serebii.net/abilitydex/normalize.shtml"
};

var oblivious = {
    name: "Oblivious",
    desc: "Prevents the Pokémon from becoming infatuated or falling for taunts*.",
    wiki: "http://www.serebii.net/abilitydex/oblivious.shtml"
};

var overcoat = {
    name: "Overcoat",
    desc: "Protects against damage from weather.",
    wiki: "http://www.serebii.net/abilitydex/overcoat.shtml"
};

var overgrow = {
    name: "Overgrow",
    desc: "Powers up Grass-type moves in a pinch.",
    wiki: "http://www.serebii.net/abilitydex/overgrow.shtml"
};

var own_tempo = {
    name: "Own Tempo",
    desc: "Prevents the Pokémon from becoming confused.",
    wiki: "http://www.serebii.net/abilitydex/owntempo.shtml"
};

var parental_bond = {
    name: "Parental Bond",
    desc: "Parent and child attack together.",
    wiki: "http://www.serebii.net/abilitydex/parentalbond.shtml"
};

var pickpocket = {
    name: "Pickpocket",
    desc: "Steals attacking Pokémon's held item on contact.",
    wiki: "http://www.serebii.net/abilitydex/pickpocket.shtml"
};

var pickup = {
    name: "Pickup",
    desc: "The Pokémon may pick up items.",
    wiki: "http://www.serebii.net/abilitydex/pickup.shtml"
};

var pixilate = {
    name: "Pixilate",
    desc: "Normal-type moves become Fairy-type moves.",
    wiki: "http://www.serebii.net/abilitydex/pixilate.shtml"
};

var plus = {
    name: "Plus",
    desc: "Boosts Sp. Atk if another Pokémon has Minus.",
    wiki: "http://www.serebii.net/abilitydex/plus.shtml"
};

var poison_heal = {
    name: "Poison Heal",
    desc: "Restores HP if the Pokémon is poisoned.",
    wiki: "http://www.serebii.net/abilitydex/poisonheal.shtml"
};

var poison_point = {
    name: "Poison Point",
    desc: "Contact with the Pokémon may poison the foe.",
    wiki: "http://www.serebii.net/abilitydex/poisonpoint.shtml"
};

var poison_touch = {
    name: "Poison Touch",
    desc: "Has a 30% chance of poisoning Pokémon upon contact when attacking.",
    wiki: "http://www.serebii.net/abilitydex/poisontouch.shtml"
};

var power_construct = {
    name: "Power Construct",
    desc: "Changes the Pokémon's form when its HP falls below half.",
    wiki: "http://www.serebii.net/abilitydex/powerconstruct.shtml"
};

var prankster = {
    name: "Prankster",
    desc: "Raises non-damaging moves' priority by one stage.",
    wiki: "http://www.serebii.net/abilitydex/prankster.shtml"
};

var pressure = {
    name: "Pressure",
    desc: "The Pokémon raises the foe’s PP usage.",
    wiki: "http://www.serebii.net/abilitydex/pressure.shtml"
};

var primordial_sea = {
    name: "Primordial Sea",
    desc: "Causes heavy rain.",
    wiki: "http://www.serebii.net/abilitydex/primordialsea.shtml"
};

var protean = {
    name: "Protean",
    desc: "Changes the Pokémon's type to the same type of the move it is using.",
    wiki: "http://www.serebii.net/abilitydex/protean.shtml"
};

var pure_power = {
    name: "Pure Power",
    desc: "Boosts the power of physical attacks.",
    wiki: "http://www.serebii.net/abilitydex/purepower.shtml"
};

var queenly_majesty = {
    name: "Queenly Majesty",
    desc: "Prevents the opponent from using moves with increased priority.",
    wiki: "http://www.serebii.net/abilitydex/queenlymajesty.shtml"
};

var quick_feet = {
    name: "Quick Feet",
    desc: "Boosts Speed if there is a status problem.",
    wiki: "http://www.serebii.net/abilitydex/quickfeet.shtml"
};

var rain_dish = {
    name: "Rain Dish",
    desc: "The Pokémon gradually recovers HP in rain.",
    wiki: "http://www.serebii.net/abilitydex/raindish.shtml"
};

var rattled = {
    name: "Rattled",
    desc: "Raises Speed one stage upon being hit by a Dark, Ghost, or Bug move.",
    wiki: "http://www.serebii.net/abilitydex/rattled.shtml"
};

var receiver = {
    name: "Receiver",
    desc: "Takes the Ability of a fainted ally.",
    wiki: "http://www.serebii.net/abilitydex/receiver.shtml"
};

var reckless = {
    name: "Reckless",
    desc: "Powers up moves that have recoil damage.",
    wiki: "http://www.serebii.net/abilitydex/reckless.shtml"
};

var refrigerate = {
    name: "Refrigerate",
    desc: "Normal-type moves become Ice-type moves.",
    wiki: "http://www.serebii.net/abilitydex/refrigerate.shtml"
};

var regenerator = {
    name: "Regenerator",
    desc: "Heals for 1/3 max HP upon leaving battle.",
    wiki: "http://www.serebii.net/abilitydex/regenerator.shtml"
};

var rivalry = {
    name: "Rivalry",
    desc: "Raises Attack if the foe is of the same gender.",
    wiki: "http://www.serebii.net/abilitydex/rivalry.shtml"
};

var rks_system = {
    name: "Rks System",
    desc: "Changes type to match a specific item.",
    wiki: "http://www.serebii.net/abilitydex/rkssystem.shtml"
};

var rock_head = {
    name: "Rock Head",
    desc: "Protects the Pokémon from recoil damage.",
    wiki: "http://www.serebii.net/abilitydex/rockhead.shtml"
};

var rough_skin = {
    name: "Rough Skin",
    desc: "Inflicts damage to the foe on contact.",
    wiki: "http://www.serebii.net/abilitydex/roughskin.shtml"
};

var run_away = {
    name: "Run Away",
    desc: "Enables sure getaway from wild Pokémon.",
    wiki: "http://www.serebii.net/abilitydex/runaway.shtml"
};

var sand_force = {
    name: "Sand Force",
    desc: "Strengthens Rock, Ground, and Steel moves to 1.3× their power during a sandstorm.",
    wiki: "http://www.serebii.net/abilitydex/sandforce.shtml"
};

var sand_rush = {
    name: "Sand Rush",
    desc: "Doubles Speed during a sandstorm.",
    wiki: "http://www.serebii.net/abilitydex/sandrush.shtml"
};

var sand_stream = {
    name: "Sand Stream",
    desc: "The Pokémon summons a sandstorm in battle.",
    wiki: "http://www.serebii.net/abilitydex/sandstream.shtml"
};

var sand_veil = {
    name: "Sand Veil",
    desc: "Boosts the Pokémon's evasion in a sandstorm.",
    wiki: "http://www.serebii.net/abilitydex/sandveil.shtml"
};

var sap_sipper = {
    name: "Sap Sipper",
    desc: "Absorbs Grass moves, raising Attack one stage.",
    wiki: "http://www.serebii.net/abilitydex/sapsipper.shtml"
};

var schooling = {
    name: "Schooling",
    desc: "Changes the Pokémon's form when certain requirements are met.",
    wiki: "http://www.serebii.net/abilitydex/schooling.shtml"
};

var scrappy = {
    name: "Scrappy",
    desc: "Enables moves to hit Ghost-type foes.",
    wiki: "http://www.serebii.net/abilitydex/scrappy.shtml"
};

var serene_grace = {
    name: "Serene Grace",
    desc: "Boosts the likelihood of added effects appearing.",
    wiki: "http://www.serebii.net/abilitydex/serenegrace.shtml"
};

var shadow_shield = {
    name: "Shadow Shield",
    desc: "Lowers damage taken from moves while at maximum HP.",
    wiki: "http://www.serebii.net/abilitydex/shadowshield.shtml"
};

var shadow_tag = {
    name: "Shadow Tag",
    desc: "Prevents the foe from escaping.",
    wiki: "http://www.serebii.net/abilitydex/shadowtag.shtml"
};

var shed_skin = {
    name: "Shed Skin",
    desc: "The Pokémon may heal its own status problems.",
    wiki: "http://www.serebii.net/abilitydex/shedskin.shtml"
};

var sheer_force = {
    name: "Sheer Force",
    desc: "Strengthens moves with extra effects to 1.3× their power, but prevents their extra effects.",
    wiki: "http://www.serebii.net/abilitydex/sheerforce.shtml"
};

var shell_armor = {
    name: "Shell Armor",
    desc: "The Pokémon is protected against critical hits.",
    wiki: "http://www.serebii.net/abilitydex/shellarmor.shtml"
};

var shield_dust = {
    name: "Shield Dust",
    desc: "Blocks the added effects of attacks taken.",
    wiki: "http://www.serebii.net/abilitydex/shielddust.shtml"
};

var shields_down = {
    name: "Shields Down",
    desc: "Changes the Pokémon's form when HP is low.",
    wiki: "http://www.serebii.net/abilitydex/shieldsdown.shtml"
};

var simple = {
    name: "Simple",
    desc: "The Pokémon is prone to wild stat changes.",
    wiki: "http://www.serebii.net/abilitydex/simple.shtml"
};

var skill_link = {
    name: "Skill Link",
    desc: "Increases the frequency of multi-strike moves.",
    wiki: "http://www.serebii.net/abilitydex/skilllink.shtml"
};

var slow_start = {
    name: "Slow Start",
    desc: "Temporarily halves Attack and Speed.",
    wiki: "http://www.serebii.net/abilitydex/slowstart.shtml"
};

var sniper = {
    name: "Sniper",
    desc: "Powers up moves if they become critical hits.",
    wiki: "http://www.serebii.net/abilitydex/sniper.shtml"
};

var snow_cloak = {
    name: "Snow Cloak",
    desc: "Raises evasion in a hailstorm.",
    wiki: "http://www.serebii.net/abilitydex/snowcloak.shtml"
};

var snow_warning = {
    name: "Snow Warning",
    desc: "The Pokémon summons a hailstorm in battle.",
    wiki: "http://www.serebii.net/abilitydex/snowwarning.shtml"
};

var solar_power = {
    name: "Solar Power",
    desc: "Boosts Sp. Atk, but lowers HP in sunshine.",
    wiki: "http://www.serebii.net/abilitydex/solarpower.shtml"
};

var solid_rock = {
    name: "Solid Rock",
    desc: "Powers down supereffective moves.",
    wiki: "http://www.serebii.net/abilitydex/solidrock.shtml"
};

var soul_heart = {
    name: "Soul_heart",
    desc: "Raises the Pokémon's Special Attack when any Pokémon faints.",
    wiki: "http://www.serebii.net/abilitydex/soul_heart.shtml"
};

var soundproof = {
    name: "Soundproof",
    desc: "Gives full immunity to all sound-based moves.",
    wiki: "http://www.serebii.net/abilitydex/soundproof.shtml"
};

var speed_boost = {
    name: "Speed Boost",
    desc: "The Pokémon's Speed stat is gradually boosted.",
    wiki: "http://www.serebii.net/abilitydex/speedboost.shtml"
};

var stakeout = {
    name: "Stakeout",
    desc: "Doubles damage inflicted on Pokémon that enter mid-battle.",
    wiki: "http://www.serebii.net/abilitydex/stakeout.shtml"
};

var stall = {
    name: "Stall",
    desc: "The Pokémon moves after even slower foes.",
    wiki: "http://www.serebii.net/abilitydex/stall.shtml"
};

var stamina = {
    name: "Stamina",
    desc: "Raises defense when hit by an attack.",
    wiki: "http://www.serebii.net/abilitydex/stamina.shtml"
};

var stance_change = {
    name: "Stance Change",
    desc: "The Pokémon changes form depending on how it battles.",
    wiki: "http://www.serebii.net/abilitydex/stancechange.shtml"
};

var static = {
    name: "Static",
    desc: "Contact with the Pokémon may cause paralysis.",
    wiki: "http://www.serebii.net/abilitydex/static.shtml"
};

var steadfast = {
    name: "Steadfast",
    desc: "Raises Speed each time the Pokémon flinches.",
    wiki: "http://www.serebii.net/abilitydex/steadfast.shtml"
};

var stench = {
    name: "Stench",
    desc: "The stench may cause the target to flinch.",
    wiki: "http://www.serebii.net/abilitydex/stench.shtml"
};

var sticky_hold = {
    name: "Sticky Hold",
    desc: "Protects the Pokémon from item theft.",
    wiki: "http://www.serebii.net/abilitydex/stickyhold.shtml"
};

var storm_drain = {
    name: "Storm Drain",
    desc: "The Pokémon draws in all Water-type moves.",
    wiki: "http://www.serebii.net/abilitydex/stormdrain.shtml"
};

var strong_jaw = {
    name: "Strong Jaw",
    desc: "The Pokémon's strong jaw gives it tremendous biting power.",
    wiki: "http://www.serebii.net/abilitydex/strongjaw.shtml"
};

var sturdy = {
    name: "Sturdy",
    desc: "The Pokémon is protected against 1-hit KO attacks.",
    wiki: "http://www.serebii.net/abilitydex/sturdy.shtml"
};

var suction_cups = {
    name: "Suction Cups",
    desc: "Negates moves that force switching out.",
    wiki: "http://www.serebii.net/abilitydex/suctioncups.shtml"
};

var super_luck = {
    name: "Super Luck",
    desc: "Heightens the critical-hit ratios of moves.",
    wiki: "http://www.serebii.net/abilitydex/superluck.shtml"
};

var surge_surfer = {
    name: "Surge Surfer",
    desc: "Doubles Speed while under the effects of Electric Terrain.",
    wiki: "http://www.serebii.net/abilitydex/surgesurfer.shtml"
};

var swarm = {
    name: "Swarm",
    desc: "Powers up Bug-type moves in a pinch.",
    wiki: "http://www.serebii.net/abilitydex/swarm.shtml"
};

var sweet_veil = {
    name: "Sweet Veil",
    desc: "Prevents itself and its allies from falling asleep.",
    wiki: "http://www.serebii.net/abilitydex/sweetveil.shtml"
};

var swift_swim = {
    name: "Swift Swim",
    desc: "Boosts the Pokémon's Speed in rain.",
    wiki: "http://www.serebii.net/abilitydex/swiftswim.shtml"
};

var symbiosis = {
    name: "Symbiosis",
    desc: "The Pokémon can pass an item to an ally.",
    wiki: "http://www.serebii.net/abilitydex/symbiosis.shtml"
};

var synchronize = {
    name: "Synchronize",
    desc: "Passes on a burn, poison, or paralysis to the foe.",
    wiki: "http://www.serebii.net/abilitydex/synchronize.shtml"
};

var tangled_feet = {
    name: "Tangled Feet",
    desc: "Raises evasion if the Pokémon is confused.",
    wiki: "http://www.serebii.net/abilitydex/tangledfeet.shtml"
};

var technician = {
    name: "Technician",
    desc: "Powers up the Pokémon's weaker moves.",
    wiki: "http://www.serebii.net/abilitydex/technician.shtml"
};

var telepathy = {
    name: "Telepathy",
    desc: "Protects against damaging moves from friendly Pokémon.",
    wiki: "http://www.serebii.net/abilitydex/telepathy.shtml"
};

var teravolt = {
    name: "Teravolt",
    desc: "Moves can be used regardless of Abilities.",
    wiki: "http://www.serebii.net/abilitydex/teravolt.shtml"
};

var thick_fat = {
    name: "Thick Fat",
    desc: "Raises resistance to Fire- and Ice-type moves.",
    wiki: "http://www.serebii.net/abilitydex/thickfat.shtml"
};

var tinted_lens = {
    name: "Tinted Lens",
    desc: "Powers up “not very effective” moves.",
    wiki: "http://www.serebii.net/abilitydex/tintedlens.shtml"
};

var torrent = {
    name: "Torrent",
    desc: "Powers up Water-type moves in a pinch.",
    wiki: "http://www.serebii.net/abilitydex/torrent.shtml"
};

var tough_claws = {
    name: "Tough Claws",
    desc: "Powers up moves that make direct contact.",
    wiki: "http://www.serebii.net/abilitydex/toughclaws.shtml"
};

var toxic_boost = {
    name: "Toxic Boost",
    desc: "Increases Attack to 1.5× when poisoned.",
    wiki: "http://www.serebii.net/abilitydex/toxicboost.shtml"
};

var trace = {
    name: "Trace",
    desc: "The Pokémon copies a foe's Ability.",
    wiki: "http://www.serebii.net/abilitydex/trace.shtml"
};

var triage = {
    name: "Triage",
    desc: "Boosts HP-restoring moves used to the highest priority.",
    wiki: "http://www.serebii.net/abilitydex/triage.shtml"
};

var truant = {
    name: "Truant",
    desc: "The Pokémon can't attack on consecutive turns.",
    wiki: "http://www.serebii.net/abilitydex/truant.shtml"
};

var turboblaze = {
    name: "Turboblaze",
    desc: "Moves can be used regardless of Abilities.",
    wiki: "http://www.serebii.net/abilitydex/turboblaze.shtml"
};

var unaware = {
    name: "Unaware",
    desc: "Ignores any change in stats by the foe.",
    wiki: "http://www.serebii.net/abilitydex/unaware.shtml"
};

var unburden = {
    name: "Unburden",
    desc: "Raises Speed if a held item is used.",
    wiki: "http://www.serebii.net/abilitydex/unburden.shtml"
};

var unnerve = {
    name: "Unnerve",
    desc: "Prevents opposing Pokémon from eating held Berries.",
    wiki: "http://www.serebii.net/abilitydex/unnerve.shtml"
};

var victory_star = {
    name: "Victory Star",
    desc: "Raises moves' accuracy to 1.1× for friendly Pokémon.",
    wiki: "http://www.serebii.net/abilitydex/victorystar.shtml"
};

var vital_spirit = {
    name: "Vital Spirit",
    desc: "Prevents the Pokémon from falling asleep.",
    wiki: "http://www.serebii.net/abilitydex/vitalspirit.shtml"
};

var volt_absorb = {
    name: "Volt Absorb",
    desc: "Restores HP if hit by an Electric-type move.",
    wiki: "http://www.serebii.net/abilitydex/voltabsorb.shtml"
};

var water_absorb = {
    name: "Water Absorb",
    desc: "Restores HP if hit by a Water-type move.",
    wiki: "http://www.serebii.net/abilitydex/waterabsorb.shtml"
};

var water_compaction = {
    name: "Water Compaction",
    desc: "Raises Defense by two stages if hit by a Water-type move.",
    wiki: "http://www.serebii.net/abilitydex/watercompaction.shtml"
};

var water_veil = {
    name: "Water Veil",
    desc: "Prevents the Pokémon from getting a burn.",
    wiki: "http://www.serebii.net/abilitydex/waterveil.shtml"
};

var weak_armor = {
    name: "Weak Armor",
    desc: "Raises Speed and lowers Defense by one stage each upon being hit by any move.",
    wiki: "http://www.serebii.net/abilitydex/weakarmor.shtml"
};

var white_smoke = {
    name: "White Smoke",
    desc: "Prevents the Pokémon's stats from being lowered.",
    wiki: "http://www.serebii.net/abilitydex/whitesmoke.shtml"
};

var wimp_out = {
    name: "Wimp Out",
    desc: "Causes the Pokémon to flee or switch out when HP is low.",
    wiki: "http://www.serebii.net/abilitydex/wimpout.shtml"
};

var wonder_guard = {
    name: "Wonder Guard",
    desc: "Only supereffective moves will hit.",
    wiki: "http://www.serebii.net/abilitydex/wonderguard.shtml"
};

var wonder_skin = {
    name: "Wonder Skin",
    desc: "Has a 50% chance of protecting against non-damaging moves that inflict major status ailments.",
    wiki: "http://www.serebii.net/abilitydex/wonderskin.shtml"
};

var zen_mode = {
    name: "Zen Mode",
    desc: "Changes the Pokémon's shape when HP is halved.",
    wiki: "http://www.serebii.net/abilitydex/zenmode.shtml"
};