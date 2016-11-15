var Discord = require('discord.io');
var bot = new Discord.Client({
    autorun: true,
    token: "butts"
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
    wiki: "http://www.serebii.net/attackdex-xy/pound.shtml"
};

var karate_chop = {
    name: "Karate Chop",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/karatechop.shtml"
};

var double_slap = {
    name: "Double Slap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/doubleslap.shtml"
};

var comet_punch = {
    name: "Comet Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/cometpunch.shtml"
};

var mega_punch = {
    name: "Mega Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/megapunch.shtml"
};

var pay_day = {
    name: "Pay Day",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/payday.shtml"
};

var fire_punch = {
    name: "Fire Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/firepunch.shtml"
};

var ice_punch = {
    name: "Ice Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/icepunch.shtml"
};

var thunder_punch = {
    name: "Thunder Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/thunderpunch.shtml"
};

var scratch = {
    name: "Scratch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/scratch.shtml"
};

var vice_grip = {
    name: "Vice Grip",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/vicegrip.shtml"
};

var guillotine = {
    name: "Guillotine",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/guillotine.shtml"
};

var razor_wind = {
    name: "Razor Wind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/razorwind.shtml"
};

var swords_dance = {
    name: "Swords Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/swordsdance.shtml"
};

var cut = {
    name: "Cut",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/cut.shtml"
};

var gust = {
    name: "Gust",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/gust.shtml"
};

var wing_attack = {
    name: "Wing Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/wingattack.shtml"
};

var whirlwind = {
    name: "Whirlwind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/whirlwind.shtml"
};

var fly = {
    name: "Fly",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/fly.shtml"
};

var bind = {
    name: "Bind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bind.shtml"
};

var slam = {
    name: "Slam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/slam.shtml"
};

var vine_whip = {
    name: "Vine Whip",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/vinewhip.shtml"
};

var stomp = {
    name: "Stomp",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/stomp.shtml"
};

var double_kick = {
    name: "Double Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/doublekick.shtml"
};

var mega_kick = {
    name: "Mega Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/megakick.shtml"
};

var jump_kick = {
    name: "Jump Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/jumpkick.shtml"
};

var rolling_kick = {
    name: "Rolling Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/rollingkick.shtml"
};

var sand_attack = {
    name: "Sand Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sandattack.shtml"
};

var headbutt = {
    name: "Headbutt",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/headbutt.shtml"
};

var horn_attack = {
    name: "Horn Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/hornattack.shtml"
};

var fury_attack = {
    name: "Fury Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/furyattack.shtml"
};

var horn_drill = {
    name: "Horn Drill",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/horndrill.shtml"
};

var tackle = {
    name: "Tackle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/tackle.shtml"
};

var body_slam = {
    name: "Body Slam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bodyslam.shtml"
};

var wrap = {
    name: "Wrap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/wrap.shtml"
};

var take_down = {
    name: "Take Down",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/takedown.shtml"
};

var thrash = {
    name: "Thrash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/thrash.shtml"
};

var double_edge = {
    name: "Double_edge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/double_edge.shtml"
};

var tail_whip = {
    name: "Tail Whip",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/tailwhip.shtml"
};

var poison_sting = {
    name: "Poison Sting",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/poisonsting.shtml"
};

var twineedle = {
    name: "Twineedle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/twineedle.shtml"
};

var pin_missile = {
    name: "Pin Missile",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/pinmissile.shtml"
};

var leer = {
    name: "Leer",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/leer.shtml"
};

var bite = {
    name: "Bite",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bite.shtml"
};

var growl = {
    name: "Growl",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/growl.shtml"
};

var roar = {
    name: "Roar",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/roar.shtml"
};

var sing = {
    name: "Sing",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sing.shtml"
};

var supersonic = {
    name: "Supersonic",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/supersonic.shtml"
};

var sonic_boom = {
    name: "Sonic Boom",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sonicboom.shtml"
};

var disable = {
    name: "Disable",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/disable.shtml"
};

var acid = {
    name: "Acid",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/acid.shtml"
};

var ember = {
    name: "Ember",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/ember.shtml"
};

var flamethrower = {
    name: "Flamethrower",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/flamethrower.shtml"
};

var mist = {
    name: "Mist",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/mist.shtml"
};

var water_gun = {
    name: "Water Gun",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/watergun.shtml"
};

var hydro_pump = {
    name: "Hydro Pump",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/hydropump.shtml"
};

var surf = {
    name: "Surf",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/surf.shtml"
};

var ice_beam = {
    name: "Ice Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/icebeam.shtml"
};

var blizzard = {
    name: "Blizzard",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/blizzard.shtml"
};

var psybeam = {
    name: "Psybeam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/psybeam.shtml"
};

var bubble_beam = {
    name: "Bubble Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bubblebeam.shtml"
};

var aurora_beam = {
    name: "Aurora Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/aurorabeam.shtml"
};

var hyper_beam = {
    name: "Hyper Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/hyperbeam.shtml"
};

var peck = {
    name: "Peck",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/peck.shtml"
};

var drill_peck = {
    name: "Drill Peck",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/drillpeck.shtml"
};

var submission = {
    name: "Submission",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/submission.shtml"
};

var low_kick = {
    name: "Low Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/lowkick.shtml"
};

var counter = {
    name: "Counter",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/counter.shtml"
};

var seismic_toss = {
    name: "Seismic Toss",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/seismictoss.shtml"
};

var strength = {
    name: "Strength",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/strength.shtml"
};

var absorb = {
    name: "Absorb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/absorb.shtml"
};

var mega_drain = {
    name: "Mega Drain",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/megadrain.shtml"
};

var leech_seed = {
    name: "Leech Seed",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/leechseed.shtml"
};

var growth = {
    name: "Growth",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/growth.shtml"
};

var razor_leaf = {
    name: "Razor Leaf",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/razorleaf.shtml"
};

var solar_beam = {
    name: "Solar Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/solarbeam.shtml"
};

var poison_powder = {
    name: "Poison Powder",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/poisonpowder.shtml"
};

var stun_spore = {
    name: "Stun Spore",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/stunspore.shtml"
};

var sleep_powder = {
    name: "Sleep Powder",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sleeppowder.shtml"
};

var petal_dance = {
    name: "Petal Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/petaldance.shtml"
};

var string_shot = {
    name: "String Shot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/stringshot.shtml"
};

var dragon_rage = {
    name: "Dragon Rage",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dragonrage.shtml"
};

var fire_spin = {
    name: "Fire Spin",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/firespin.shtml"
};

var thunder_shock = {
    name: "Thunder Shock",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/thundershock.shtml"
};

var thunderbolt = {
    name: "Thunderbolt",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/thunderbolt.shtml"
};

var thunder_wave = {
    name: "Thunder Wave",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/thunderwave.shtml"
};

var thunder = {
    name: "Thunder",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/thunder.shtml"
};

var rock_throw = {
    name: "Rock Throw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/rockthrow.shtml"
};

var earthquake = {
    name: "Earthquake",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/earthquake.shtml"
};

var fissure = {
    name: "Fissure",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/fissure.shtml"
};

var dig = {
    name: "Dig",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dig.shtml"
};

var toxic = {
    name: "Toxic",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/toxic.shtml"
};

var confusion = {
    name: "Confusion",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/confusion.shtml"
};

var psychic = {
    name: "Psychic",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/psychic.shtml"
};

var hypnosis = {
    name: "Hypnosis",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/hypnosis.shtml"
};

var meditate = {
    name: "Meditate",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/meditate.shtml"
};

var agility = {
    name: "Agility",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/agility.shtml"
};

var quick_attack = {
    name: "Quick Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/quickattack.shtml"
};

var rage = {
    name: "Rage",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/rage.shtml"
};

var teleport = {
    name: "Teleport",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/teleport.shtml"
};

var night_shade = {
    name: "Night Shade",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/nightshade.shtml"
};

var mimic = {
    name: "Mimic",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/mimic.shtml"
};

var screech = {
    name: "Screech",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/screech.shtml"
};

var double_team = {
    name: "Double Team",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/doubleteam.shtml"
};

var recover = {
    name: "Recover",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/recover.shtml"
};

var harden = {
    name: "Harden",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/harden.shtml"
};

var minimize = {
    name: "Minimize",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/minimize.shtml"
};

var smokescreen = {
    name: "Smokescreen",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/smokescreen.shtml"
};

var confuse_ray = {
    name: "Confuse Ray",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/confuseray.shtml"
};

var withdraw = {
    name: "Withdraw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/withdraw.shtml"
};

var defense_curl = {
    name: "Defense Curl",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/defensecurl.shtml"
};

var barrier = {
    name: "Barrier",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/barrier.shtml"
};

var light_screen = {
    name: "Light Screen",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/lightscreen.shtml"
};

var haze = {
    name: "Haze",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/haze.shtml"
};

var reflect = {
    name: "Reflect",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/reflect.shtml"
};

var focus_energy = {
    name: "Focus Energy",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/focusenergy.shtml"
};

var bide = {
    name: "Bide",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bide.shtml"
};

var metronome = {
    name: "Metronome",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/metronome.shtml"
};

var mirror_move = {
    name: "Mirror Move",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/mirrormove.shtml"
};

var self_destruct = {
    name: "Self_destruct",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/self_destruct.shtml"
};

var egg_bomb = {
    name: "Egg Bomb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/eggbomb.shtml"
};

var lick = {
    name: "Lick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/lick.shtml"
};

var smog = {
    name: "Smog",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/smog.shtml"
};

var sludge = {
    name: "Sludge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sludge.shtml"
};

var bone_club = {
    name: "Bone Club",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/boneclub.shtml"
};

var fire_blast = {
    name: "Fire Blast",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/fireblast.shtml"
};

var waterfall = {
    name: "Waterfall",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/waterfall.shtml"
};

var clamp = {
    name: "Clamp",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/clamp.shtml"
};

var swift = {
    name: "Swift",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/swift.shtml"
};

var skull_bash = {
    name: "Skull Bash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/skullbash.shtml"
};

var spike_cannon = {
    name: "Spike Cannon",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/spikecannon.shtml"
};

var constrict = {
    name: "Constrict",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/constrict.shtml"
};

var amnesia = {
    name: "Amnesia",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/amnesia.shtml"
};

var kinesis = {
    name: "Kinesis",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/kinesis.shtml"
};

var soft_boiled = {
    name: "Soft_boiled",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/soft_boiled.shtml"
};

var high_jump_kick = {
    name: "High Jump Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/highjumpkick.shtml"
};

var glare = {
    name: "Glare",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/glare.shtml"
};

var dream_eater = {
    name: "Dream Eater",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dreameater.shtml"
};

var poison_gas = {
    name: "Poison Gas",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/poisongas.shtml"
};

var barrage = {
    name: "Barrage",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/barrage.shtml"
};

var leech_life = {
    name: "Leech Life",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/leechlife.shtml"
};

var lovely_kiss = {
    name: "Lovely Kiss",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/lovelykiss.shtml"
};

var sky_attack = {
    name: "Sky Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/skyattack.shtml"
};

var transform = {
    name: "Transform",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/transform.shtml"
};

var bubble = {
    name: "Bubble",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bubble.shtml"
};

var dizzy_punch = {
    name: "Dizzy Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dizzypunch.shtml"
};

var spore = {
    name: "Spore",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/spore.shtml"
};

var flash = {
    name: "Flash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/flash.shtml"
};

var psywave = {
    name: "Psywave",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/psywave.shtml"
};

var splash = {
    name: "Splash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/splash.shtml"
};

var acid_armor = {
    name: "Acid Armor",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/acidarmor.shtml"
};

var crabhammer = {
    name: "Crabhammer",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/crabhammer.shtml"
};

var explosion = {
    name: "Explosion",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/explosion.shtml"
};

var fury_swipes = {
    name: "Fury Swipes",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/furyswipes.shtml"
};

var bonemerang = {
    name: "Bonemerang",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bonemerang.shtml"
};

var rest = {
    name: "Rest",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/rest.shtml"
};

var rock_slide = {
    name: "Rock Slide",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/rockslide.shtml"
};

var hyper_fang = {
    name: "Hyper Fang",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/hyperfang.shtml"
};

var sharpen = {
    name: "Sharpen",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sharpen.shtml"
};

var conversion = {
    name: "Conversion",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/conversion.shtml"
};

var tri_attack = {
    name: "Tri Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/triattack.shtml"
};

var super_fang = {
    name: "Super Fang",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/superfang.shtml"
};

var slash = {
    name: "Slash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/slash.shtml"
};

var substitute = {
    name: "Substitute",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/substitute.shtml"
};

var struggle = {
    name: "Struggle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/struggle.shtml"
};

var sketch = {
    name: "Sketch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sketch.shtml"
};

var triple_kick = {
    name: "Triple Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/triplekick.shtml"
};

var thief = {
    name: "Thief",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/thief.shtml"
};

var spider_web = {
    name: "Spider Web",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/spiderweb.shtml"
};

var mind_reader = {
    name: "Mind Reader",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/mindreader.shtml"
};

var nightmare = {
    name: "Nightmare",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/nightmare.shtml"
};

var flame_wheel = {
    name: "Flame Wheel",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/flamewheel.shtml"
};

var snore = {
    name: "Snore",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/snore.shtml"
};

var curse = {
    name: "Curse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/curse.shtml"
};

var flail = {
    name: "Flail",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/flail.shtml"
};

var conversion_2 = {
    name: "Conversion 2",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/conversion2.shtml"
};

var aeroblast = {
    name: "Aeroblast",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/aeroblast.shtml"
};

var cotton_spore = {
    name: "Cotton Spore",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/cottonspore.shtml"
};

var reversal = {
    name: "Reversal",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/reversal.shtml"
};

var spite = {
    name: "Spite",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/spite.shtml"
};

var powder_snow = {
    name: "Powder Snow",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/powdersnow.shtml"
};

var protect = {
    name: "Protect",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/protect.shtml"
};

var mach_punch = {
    name: "Mach Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/machpunch.shtml"
};

var scary_face = {
    name: "Scary Face",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/scaryface.shtml"
};

var feint_attack = {
    name: "Feint Attack",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/feintattack.shtml"
};

var sweet_kiss = {
    name: "Sweet Kiss",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sweetkiss.shtml"
};

var belly_drum = {
    name: "Belly Drum",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bellydrum.shtml"
};

var sludge_bomb = {
    name: "Sludge Bomb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sludgebomb.shtml"
};

var mud_slap = {
    name: "Mud_slap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/mud_slap.shtml"
};

var octazooka = {
    name: "Octazooka",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/octazooka.shtml"
};

var spikes = {
    name: "Spikes",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/spikes.shtml"
};

var zap_cannon = {
    name: "Zap Cannon",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/zapcannon.shtml"
};

var foresight = {
    name: "Foresight",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/foresight.shtml"
};

var destiny_bond = {
    name: "Destiny Bond",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/destinybond.shtml"
};

var perish_song = {
    name: "Perish Song",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/perishsong.shtml"
};

var icy_wind = {
    name: "Icy Wind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/icywind.shtml"
};

var detect = {
    name: "Detect",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/detect.shtml"
};

var bone_rush = {
    name: "Bone Rush",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bonerush.shtml"
};

var lock_on = {
    name: "Lock_on",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/lock_on.shtml"
};

var outrage = {
    name: "Outrage",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/outrage.shtml"
};

var sandstorm = {
    name: "Sandstorm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sandstorm.shtml"
};

var giga_drain = {
    name: "Giga Drain",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/gigadrain.shtml"
};

var endure = {
    name: "Endure",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/endure.shtml"
};

var charm = {
    name: "Charm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/charm.shtml"
};

var rollout = {
    name: "Rollout",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/rollout.shtml"
};

var false_swipe = {
    name: "False Swipe",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/falseswipe.shtml"
};

var swagger = {
    name: "Swagger",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/swagger.shtml"
};

var milk_drink = {
    name: "Milk Drink",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/milkdrink.shtml"
};

var spark = {
    name: "Spark",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/spark.shtml"
};

var fury_cutter = {
    name: "Fury Cutter",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/furycutter.shtml"
};

var steel_wing = {
    name: "Steel Wing",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/steelwing.shtml"
};

var mean_look = {
    name: "Mean Look",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/meanlook.shtml"
};

var attract = {
    name: "Attract",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/attract.shtml"
};

var sleep_talk = {
    name: "Sleep Talk",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sleeptalk.shtml"
};

var heal_bell = {
    name: "Heal Bell",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/healbell.shtml"
};

var return = {
    name: "Return",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/return.shtml"
};

var present = {
    name: "Present",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/present.shtml"
};

var frustration = {
    name: "Frustration",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/frustration.shtml"
};

var safeguard = {
    name: "Safeguard",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/safeguard.shtml"
};

var pain_split = {
    name: "Pain Split",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/painsplit.shtml"
};

var sacred_fire = {
    name: "Sacred Fire",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sacredfire.shtml"
};

var magnitude = {
    name: "Magnitude",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/magnitude.shtml"
};

var dynamic_punch = {
    name: "Dynamic Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dynamicpunch.shtml"
};

var megahorn = {
    name: "Megahorn",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/megahorn.shtml"
};

var dragon_breath = {
    name: "Dragon Breath",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dragonbreath.shtml"
};

var baton_pass = {
    name: "Baton Pass",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/batonpass.shtml"
};

var encore = {
    name: "Encore",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/encore.shtml"
};

var pursuit = {
    name: "Pursuit",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/pursuit.shtml"
};

var rapid_spin = {
    name: "Rapid Spin",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/rapidspin.shtml"
};

var sweet_scent = {
    name: "Sweet Scent",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sweetscent.shtml"
};

var iron_tail = {
    name: "Iron Tail",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/irontail.shtml"
};

var metal_claw = {
    name: "Metal Claw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/metalclaw.shtml"
};

var vital_throw = {
    name: "Vital Throw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/vitalthrow.shtml"
};

var morning_sun = {
    name: "Morning Sun",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/morningsun.shtml"
};

var synthesis = {
    name: "Synthesis",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/synthesis.shtml"
};

var moonlight = {
    name: "Moonlight",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/moonlight.shtml"
};

var hidden_power = {
    name: "Hidden Power",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/hiddenpower.shtml"
};

var cross_chop = {
    name: "Cross Chop",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/crosschop.shtml"
};

var twister = {
    name: "Twister",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/twister.shtml"
};

var rain_dance = {
    name: "Rain Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/raindance.shtml"
};

var sunny_day = {
    name: "Sunny Day",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sunnyday.shtml"
};

var crunch = {
    name: "Crunch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/crunch.shtml"
};

var mirror_coat = {
    name: "Mirror Coat",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/mirrorcoat.shtml"
};

var psych_up = {
    name: "Psych Up",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/psychup.shtml"
};

var extreme_speed = {
    name: "Extreme Speed",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/extremespeed.shtml"
};

var ancient_power = {
    name: "Ancient Power",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/ancientpower.shtml"
};

var shadow_ball = {
    name: "Shadow Ball",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/shadowball.shtml"
};

var future_sight = {
    name: "Future Sight",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/futuresight.shtml"
};

var rock_smash = {
    name: "Rock Smash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/rocksmash.shtml"
};

var whirlpool = {
    name: "Whirlpool",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/whirlpool.shtml"
};

var beat_up = {
    name: "Beat Up",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/beatup.shtml"
};

var fake_out = {
    name: "Fake Out",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/fakeout.shtml"
};

var uproar = {
    name: "Uproar",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/uproar.shtml"
};

var stockpile = {
    name: "Stockpile",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/stockpile.shtml"
};

var spit_up = {
    name: "Spit Up",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/spitup.shtml"
};

var swallow = {
    name: "Swallow",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/swallow.shtml"
};

var heat_wave = {
    name: "Heat Wave",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/heatwave.shtml"
};

var hail = {
    name: "Hail",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/hail.shtml"
};

var torment = {
    name: "Torment",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/torment.shtml"
};

var flatter = {
    name: "Flatter",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/flatter.shtml"
};

var will_o_wisp = {
    name: "Will_o_wisp",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/will_o_wisp.shtml"
};

var memento = {
    name: "Memento",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/memento.shtml"
};

var facade = {
    name: "Facade",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/facade.shtml"
};

var focus_punch = {
    name: "Focus Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/focuspunch.shtml"
};

var smelling_salts = {
    name: "Smelling Salts",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/smellingsalts.shtml"
};

var follow_me = {
    name: "Follow Me",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/followme.shtml"
};

var nature_power = {
    name: "Nature Power",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/naturepower.shtml"
};

var charge = {
    name: "Charge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/charge.shtml"
};

var taunt = {
    name: "Taunt",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/taunt.shtml"
};

var helping_hand = {
    name: "Helping Hand",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/helpinghand.shtml"
};

var trick = {
    name: "Trick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/trick.shtml"
};

var role_play = {
    name: "Role Play",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/roleplay.shtml"
};

var wish = {
    name: "Wish",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/wish.shtml"
};

var assist = {
    name: "Assist",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/assist.shtml"
};

var ingrain = {
    name: "Ingrain",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/ingrain.shtml"
};

var superpower = {
    name: "Superpower",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/superpower.shtml"
};

var magic_coat = {
    name: "Magic Coat",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/magiccoat.shtml"
};

var recycle = {
    name: "Recycle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/recycle.shtml"
};

var revenge = {
    name: "Revenge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/revenge.shtml"
};

var brick_break = {
    name: "Brick Break",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/brickbreak.shtml"
};

var yawn = {
    name: "Yawn",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/yawn.shtml"
};

var knock_off = {
    name: "Knock Off",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/knockoff.shtml"
};

var endeavor = {
    name: "Endeavor",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/endeavor.shtml"
};

var eruption = {
    name: "Eruption",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/eruption.shtml"
};

var skill_swap = {
    name: "Skill Swap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/skillswap.shtml"
};

var imprison = {
    name: "Imprison",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/imprison.shtml"
};

var refresh = {
    name: "Refresh",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/refresh.shtml"
};

var grudge = {
    name: "Grudge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/grudge.shtml"
};

var snatch = {
    name: "Snatch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/snatch.shtml"
};

var secret_power = {
    name: "Secret Power",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/secretpower.shtml"
};

var dive = {
    name: "Dive",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dive.shtml"
};

var arm_thrust = {
    name: "Arm Thrust",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/armthrust.shtml"
};

var camouflage = {
    name: "Camouflage",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/camouflage.shtml"
};

var tail_glow = {
    name: "Tail Glow",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/tailglow.shtml"
};

var luster_purge = {
    name: "Luster Purge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/lusterpurge.shtml"
};

var mist_ball = {
    name: "Mist Ball",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/mistball.shtml"
};

var feather_dance = {
    name: "Feather Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/featherdance.shtml"
};

var teeter_dance = {
    name: "Teeter Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/teeterdance.shtml"
};

var blaze_kick = {
    name: "Blaze Kick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/blazekick.shtml"
};

var mud_sport = {
    name: "Mud Sport",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/mudsport.shtml"
};

var ice_ball = {
    name: "Ice Ball",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/iceball.shtml"
};

var needle_arm = {
    name: "Needle Arm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/needlearm.shtml"
};

var slack_off = {
    name: "Slack Off",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/slackoff.shtml"
};

var hyper_voice = {
    name: "Hyper Voice",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/hypervoice.shtml"
};

var poison_fang = {
    name: "Poison Fang",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/poisonfang.shtml"
};

var crush_claw = {
    name: "Crush Claw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/crushclaw.shtml"
};

var blast_burn = {
    name: "Blast Burn",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/blastburn.shtml"
};

var hydro_cannon = {
    name: "Hydro Cannon",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/hydrocannon.shtml"
};

var meteor_mash = {
    name: "Meteor Mash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/meteormash.shtml"
};

var astonish = {
    name: "Astonish",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/astonish.shtml"
};

var weather_ball = {
    name: "Weather Ball",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/weatherball.shtml"
};

var aromatherapy = {
    name: "Aromatherapy",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/aromatherapy.shtml"
};

var fake_tears = {
    name: "Fake Tears",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/faketears.shtml"
};

var air_cutter = {
    name: "Air Cutter",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/aircutter.shtml"
};

var overheat = {
    name: "Overheat",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/overheat.shtml"
};

var odor_sleuth = {
    name: "Odor Sleuth",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/odorsleuth.shtml"
};

var rock_tomb = {
    name: "Rock Tomb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/rocktomb.shtml"
};

var silver_wind = {
    name: "Silver Wind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/silverwind.shtml"
};

var metal_sound = {
    name: "Metal Sound",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/metalsound.shtml"
};

var grass_whistle = {
    name: "Grass Whistle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/grasswhistle.shtml"
};

var tickle = {
    name: "Tickle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/tickle.shtml"
};

var cosmic_power = {
    name: "Cosmic Power",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/cosmicpower.shtml"
};

var water_spout = {
    name: "Water Spout",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/waterspout.shtml"
};

var signal_beam = {
    name: "Signal Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/signalbeam.shtml"
};

var shadow_punch = {
    name: "Shadow Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/shadowpunch.shtml"
};

var extrasensory = {
    name: "Extrasensory",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/extrasensory.shtml"
};

var sky_uppercut = {
    name: "Sky Uppercut",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/skyuppercut.shtml"
};

var sand_tomb = {
    name: "Sand Tomb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sandtomb.shtml"
};

var sheer_cold = {
    name: "Sheer Cold",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sheercold.shtml"
};

var muddy_water = {
    name: "Muddy Water",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/muddywater.shtml"
};

var bullet_seed = {
    name: "Bullet Seed",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bulletseed.shtml"
};

var aerial_ace = {
    name: "Aerial Ace",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/aerialace.shtml"
};

var icicle_spear = {
    name: "Icicle Spear",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/iciclespear.shtml"
};

var iron_defense = {
    name: "Iron Defense",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/irondefense.shtml"
};

var block = {
    name: "Block",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/block.shtml"
};

var howl = {
    name: "Howl",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/howl.shtml"
};

var dragon_claw = {
    name: "Dragon Claw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dragonclaw.shtml"
};

var frenzy_plant = {
    name: "Frenzy Plant",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/frenzyplant.shtml"
};

var bulk_up = {
    name: "Bulk Up",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bulkup.shtml"
};

var bounce = {
    name: "Bounce",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bounce.shtml"
};

var mud_shot = {
    name: "Mud Shot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/mudshot.shtml"
};

var poison_tail = {
    name: "Poison Tail",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/poisontail.shtml"
};

var covet = {
    name: "Covet",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/covet.shtml"
};

var volt_tackle = {
    name: "Volt Tackle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/volttackle.shtml"
};

var magical_leaf = {
    name: "Magical Leaf",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/magicalleaf.shtml"
};

var water_sport = {
    name: "Water Sport",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/watersport.shtml"
};

var calm_mind = {
    name: "Calm Mind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/calmmind.shtml"
};

var leaf_blade = {
    name: "Leaf Blade",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/leafblade.shtml"
};

var dragon_dance = {
    name: "Dragon Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dragondance.shtml"
};

var rock_blast = {
    name: "Rock Blast",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/rockblast.shtml"
};

var shock_wave = {
    name: "Shock Wave",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/shockwave.shtml"
};

var water_pulse = {
    name: "Water Pulse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/waterpulse.shtml"
};

var doom_desire = {
    name: "Doom Desire",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/doomdesire.shtml"
};

var psycho_boost = {
    name: "Psycho Boost",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/psychoboost.shtml"
};

var roost = {
    name: "Roost",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/roost.shtml"
};

var gravity = {
    name: "Gravity",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/gravity.shtml"
};

var miracle_eye = {
    name: "Miracle Eye",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/miracleeye.shtml"
};

var wake_up_slap = {
    name: "Wake_up Slap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/wake_upslap.shtml"
};

var hammer_arm = {
    name: "Hammer Arm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/hammerarm.shtml"
};

var gyro_ball = {
    name: "Gyro Ball",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/gyroball.shtml"
};

var healing_wish = {
    name: "Healing Wish",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/healingwish.shtml"
};

var brine = {
    name: "Brine",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/brine.shtml"
};

var natural_gift = {
    name: "Natural Gift",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/naturalgift.shtml"
};

var feint = {
    name: "Feint",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/feint.shtml"
};

var pluck = {
    name: "Pluck",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/pluck.shtml"
};

var tailwind = {
    name: "Tailwind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/tailwind.shtml"
};

var acupressure = {
    name: "Acupressure",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/acupressure.shtml"
};

var metal_burst = {
    name: "Metal Burst",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/metalburst.shtml"
};

var u_turn = {
    name: "U_turn",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/u_turn.shtml"
};

var close_combat = {
    name: "Close Combat",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/closecombat.shtml"
};

var payback = {
    name: "Payback",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/payback.shtml"
};

var assurance = {
    name: "Assurance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/assurance.shtml"
};

var embargo = {
    name: "Embargo",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/embargo.shtml"
};

var fling = {
    name: "Fling",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/fling.shtml"
};

var psycho_shift = {
    name: "Psycho Shift",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/psychoshift.shtml"
};

var trump_card = {
    name: "Trump Card",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/trumpcard.shtml"
};

var heal_block = {
    name: "Heal Block",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/healblock.shtml"
};

var wring_out = {
    name: "Wring Out",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/wringout.shtml"
};

var power_trick = {
    name: "Power Trick",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/powertrick.shtml"
};

var gastro_acid = {
    name: "Gastro Acid",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/gastroacid.shtml"
};

var lucky_chant = {
    name: "Lucky Chant",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/luckychant.shtml"
};

var me_first = {
    name: "Me First",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/mefirst.shtml"
};

var copycat = {
    name: "Copycat",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/copycat.shtml"
};

var power_swap = {
    name: "Power Swap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/powerswap.shtml"
};

var guard_swap = {
    name: "Guard Swap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/guardswap.shtml"
};

var punishment = {
    name: "Punishment",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/punishment.shtml"
};

var last_resort = {
    name: "Last Resort",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/lastresort.shtml"
};

var worry_seed = {
    name: "Worry Seed",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/worryseed.shtml"
};

var sucker_punch = {
    name: "Sucker Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/suckerpunch.shtml"
};

var toxic_spikes = {
    name: "Toxic Spikes",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/toxicspikes.shtml"
};

var heart_swap = {
    name: "Heart Swap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/heartswap.shtml"
};

var aqua_ring = {
    name: "Aqua Ring",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/aquaring.shtml"
};

var magnet_rise = {
    name: "Magnet Rise",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/magnetrise.shtml"
};

var flare_blitz = {
    name: "Flare Blitz",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/flareblitz.shtml"
};

var force_palm = {
    name: "Force Palm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/forcepalm.shtml"
};

var aura_sphere = {
    name: "Aura Sphere",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/aurasphere.shtml"
};

var rock_polish = {
    name: "Rock Polish",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/rockpolish.shtml"
};

var poison_jab = {
    name: "Poison Jab",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/poisonjab.shtml"
};

var dark_pulse = {
    name: "Dark Pulse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/darkpulse.shtml"
};

var night_slash = {
    name: "Night Slash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/nightslash.shtml"
};

var aqua_tail = {
    name: "Aqua Tail",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/aquatail.shtml"
};

var seed_bomb = {
    name: "Seed Bomb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/seedbomb.shtml"
};

var air_slash = {
    name: "Air Slash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/airslash.shtml"
};

var x_scissor = {
    name: "X_scissor",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/x_scissor.shtml"
};

var bug_buzz = {
    name: "Bug Buzz",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bugbuzz.shtml"
};

var dragon_pulse = {
    name: "Dragon Pulse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dragonpulse.shtml"
};

var dragon_rush = {
    name: "Dragon Rush",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dragonrush.shtml"
};

var power_gem = {
    name: "Power Gem",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/powergem.shtml"
};

var drain_punch = {
    name: "Drain Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/drainpunch.shtml"
};

var vacuum_wave = {
    name: "Vacuum Wave",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/vacuumwave.shtml"
};

var focus_blast = {
    name: "Focus Blast",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/focusblast.shtml"
};

var energy_ball = {
    name: "Energy Ball",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/energyball.shtml"
};

var brave_bird = {
    name: "Brave Bird",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bravebird.shtml"
};

var earth_power = {
    name: "Earth Power",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/earthpower.shtml"
};

var switcheroo = {
    name: "Switcheroo",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/switcheroo.shtml"
};

var giga_impact = {
    name: "Giga Impact",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/gigaimpact.shtml"
};

var nasty_plot = {
    name: "Nasty Plot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/nastyplot.shtml"
};

var bullet_punch = {
    name: "Bullet Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bulletpunch.shtml"
};

var avalanche = {
    name: "Avalanche",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/avalanche.shtml"
};

var ice_shard = {
    name: "Ice Shard",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/iceshard.shtml"
};

var shadow_claw = {
    name: "Shadow Claw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/shadowclaw.shtml"
};

var thunder_fang = {
    name: "Thunder Fang",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/thunderfang.shtml"
};

var ice_fang = {
    name: "Ice Fang",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/icefang.shtml"
};

var fire_fang = {
    name: "Fire Fang",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/firefang.shtml"
};

var shadow_sneak = {
    name: "Shadow Sneak",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/shadowsneak.shtml"
};

var mud_bomb = {
    name: "Mud Bomb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/mudbomb.shtml"
};

var psycho_cut = {
    name: "Psycho Cut",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/psychocut.shtml"
};

var zen_headbutt = {
    name: "Zen Headbutt",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/zenheadbutt.shtml"
};

var mirror_shot = {
    name: "Mirror Shot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/mirrorshot.shtml"
};

var flash_cannon = {
    name: "Flash Cannon",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/flashcannon.shtml"
};

var rock_climb = {
    name: "Rock Climb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/rockclimb.shtml"
};

var defog = {
    name: "Defog",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/defog.shtml"
};

var trick_room = {
    name: "Trick Room",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/trickroom.shtml"
};

var draco_meteor = {
    name: "Draco Meteor",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dracometeor.shtml"
};

var discharge = {
    name: "Discharge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/discharge.shtml"
};

var lava_plume = {
    name: "Lava Plume",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/lavaplume.shtml"
};

var leaf_storm = {
    name: "Leaf Storm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/leafstorm.shtml"
};

var power_whip = {
    name: "Power Whip",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/powerwhip.shtml"
};

var rock_wrecker = {
    name: "Rock Wrecker",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/rockwrecker.shtml"
};

var cross_poison = {
    name: "Cross Poison",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/crosspoison.shtml"
};

var gunk_shot = {
    name: "Gunk Shot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/gunkshot.shtml"
};

var iron_head = {
    name: "Iron Head",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/ironhead.shtml"
};

var magnet_bomb = {
    name: "Magnet Bomb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/magnetbomb.shtml"
};

var stone_edge = {
    name: "Stone Edge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/stoneedge.shtml"
};

var captivate = {
    name: "Captivate",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/captivate.shtml"
};

var stealth_rock = {
    name: "Stealth Rock",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/stealthrock.shtml"
};

var grass_knot = {
    name: "Grass Knot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/grassknot.shtml"
};

var chatter = {
    name: "Chatter",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/chatter.shtml"
};

var judgment = {
    name: "Judgment",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/judgment.shtml"
};

var bug_bite = {
    name: "Bug Bite",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bugbite.shtml"
};

var charge_beam = {
    name: "Charge Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/chargebeam.shtml"
};

var wood_hammer = {
    name: "Wood Hammer",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/woodhammer.shtml"
};

var aqua_jet = {
    name: "Aqua Jet",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/aquajet.shtml"
};

var attack_order = {
    name: "Attack Order",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/attackorder.shtml"
};

var defend_order = {
    name: "Defend Order",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/defendorder.shtml"
};

var heal_order = {
    name: "Heal Order",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/healorder.shtml"
};

var head_smash = {
    name: "Head Smash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/headsmash.shtml"
};

var double_hit = {
    name: "Double Hit",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/doublehit.shtml"
};

var roar_of_time = {
    name: "Roar Of Time",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/roaroftime.shtml"
};

var spacial_rend = {
    name: "Spacial Rend",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/spacialrend.shtml"
};

var lunar_dance = {
    name: "Lunar Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/lunardance.shtml"
};

var crush_grip = {
    name: "Crush Grip",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/crushgrip.shtml"
};

var magma_storm = {
    name: "Magma Storm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/magmastorm.shtml"
};

var dark_void = {
    name: "Dark Void",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/darkvoid.shtml"
};

var seed_flare = {
    name: "Seed Flare",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/seedflare.shtml"
};

var ominous_wind = {
    name: "Ominous Wind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/ominouswind.shtml"
};

var shadow_force = {
    name: "Shadow Force",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/shadowforce.shtml"
};

var hone_claws = {
    name: "Hone Claws",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/honeclaws.shtml"
};

var wide_guard = {
    name: "Wide Guard",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/wideguard.shtml"
};

var guard_split = {
    name: "Guard Split",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/guardsplit.shtml"
};

var power_split = {
    name: "Power Split",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/powersplit.shtml"
};

var wonder_room = {
    name: "Wonder Room",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/wonderroom.shtml"
};

var psyshock = {
    name: "Psyshock",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/psyshock.shtml"
};

var venoshock = {
    name: "Venoshock",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/venoshock.shtml"
};

var autotomize = {
    name: "Autotomize",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/autotomize.shtml"
};

var rage_powder = {
    name: "Rage Powder",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/ragepowder.shtml"
};

var telekinesis = {
    name: "Telekinesis",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/telekinesis.shtml"
};

var magic_room = {
    name: "Magic Room",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/magicroom.shtml"
};

var smack_down = {
    name: "Smack Down",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/smackdown.shtml"
};

var storm_throw = {
    name: "Storm Throw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/stormthrow.shtml"
};

var flame_burst = {
    name: "Flame Burst",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/flameburst.shtml"
};

var sludge_wave = {
    name: "Sludge Wave",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sludgewave.shtml"
};

var quiver_dance = {
    name: "Quiver Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/quiverdance.shtml"
};

var heavy_slam = {
    name: "Heavy Slam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/heavyslam.shtml"
};

var synchronoise = {
    name: "Synchronoise",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/synchronoise.shtml"
};

var electro_ball = {
    name: "Electro Ball",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/electroball.shtml"
};

var soak = {
    name: "Soak",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/soak.shtml"
};

var flame_charge = {
    name: "Flame Charge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/flamecharge.shtml"
};

var coil = {
    name: "Coil",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/coil.shtml"
};

var low_sweep = {
    name: "Low Sweep",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/lowsweep.shtml"
};

var acid_spray = {
    name: "Acid Spray",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/acidspray.shtml"
};

var foul_play = {
    name: "Foul Play",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/foulplay.shtml"
};

var simple_beam = {
    name: "Simple Beam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/simplebeam.shtml"
};

var entrainment = {
    name: "Entrainment",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/entrainment.shtml"
};

var after_you = {
    name: "After You",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/afteryou.shtml"
};

var round = {
    name: "Round",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/round.shtml"
};

var echoed_voice = {
    name: "Echoed Voice",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/echoedvoice.shtml"
};

var chip_away = {
    name: "Chip Away",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/chipaway.shtml"
};

var clear_smog = {
    name: "Clear Smog",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/clearsmog.shtml"
};

var stored_power = {
    name: "Stored Power",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/storedpower.shtml"
};

var quick_guard = {
    name: "Quick Guard",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/quickguard.shtml"
};

var ally_switch = {
    name: "Ally Switch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/allyswitch.shtml"
};

var scald = {
    name: "Scald",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/scald.shtml"
};

var shell_smash = {
    name: "Shell Smash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/shellsmash.shtml"
};

var heal_pulse = {
    name: "Heal Pulse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/healpulse.shtml"
};

var hex = {
    name: "Hex",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/hex.shtml"
};

var sky_drop = {
    name: "Sky Drop",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/skydrop.shtml"
};

var shift_gear = {
    name: "Shift Gear",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/shiftgear.shtml"
};

var circle_throw = {
    name: "Circle Throw",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/circlethrow.shtml"
};

var incinerate = {
    name: "Incinerate",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/incinerate.shtml"
};

var quash = {
    name: "Quash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/quash.shtml"
};

var acrobatics = {
    name: "Acrobatics",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/acrobatics.shtml"
};

var reflect_type = {
    name: "Reflect Type",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/reflecttype.shtml"
};

var retaliate = {
    name: "Retaliate",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/retaliate.shtml"
};

var final_gambit = {
    name: "Final Gambit",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/finalgambit.shtml"
};

var bestow = {
    name: "Bestow",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bestow.shtml"
};

var inferno = {
    name: "Inferno",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/inferno.shtml"
};

var water_pledge = {
    name: "Water Pledge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/waterpledge.shtml"
};

var fire_pledge = {
    name: "Fire Pledge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/firepledge.shtml"
};

var grass_pledge = {
    name: "Grass Pledge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/grasspledge.shtml"
};

var volt_switch = {
    name: "Volt Switch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/voltswitch.shtml"
};

var struggle_bug = {
    name: "Struggle Bug",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/strugglebug.shtml"
};

var bulldoze = {
    name: "Bulldoze",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/bulldoze.shtml"
};

var frost_breath = {
    name: "Frost Breath",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/frostbreath.shtml"
};

var dragon_tail = {
    name: "Dragon Tail",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dragontail.shtml"
};

var work_up = {
    name: "Work Up",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/workup.shtml"
};

var electroweb = {
    name: "Electroweb",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/electroweb.shtml"
};

var wild_charge = {
    name: "Wild Charge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/wildcharge.shtml"
};

var drill_run = {
    name: "Drill Run",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/drillrun.shtml"
};

var dual_chop = {
    name: "Dual Chop",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dualchop.shtml"
};

var heart_stamp = {
    name: "Heart Stamp",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/heartstamp.shtml"
};

var horn_leech = {
    name: "Horn Leech",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/hornleech.shtml"
};

var sacred_sword = {
    name: "Sacred Sword",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/sacredsword.shtml"
};

var razor_shell = {
    name: "Razor Shell",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/razorshell.shtml"
};

var heat_crash = {
    name: "Heat Crash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/heatcrash.shtml"
};

var leaf_tornado = {
    name: "Leaf Tornado",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/leaftornado.shtml"
};

var steamroller = {
    name: "Steamroller",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/steamroller.shtml"
};

var cotton_guard = {
    name: "Cotton Guard",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/cottonguard.shtml"
};

var night_daze = {
    name: "Night Daze",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/nightdaze.shtml"
};

var psystrike = {
    name: "Psystrike",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/psystrike.shtml"
};

var tail_slap = {
    name: "Tail Slap",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/tailslap.shtml"
};

var hurricane = {
    name: "Hurricane",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/hurricane.shtml"
};

var head_charge = {
    name: "Head Charge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/headcharge.shtml"
};

var gear_grind = {
    name: "Gear Grind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/geargrind.shtml"
};

var searing_shot = {
    name: "Searing Shot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/searingshot.shtml"
};

var techno_blast = {
    name: "Techno Blast",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/technoblast.shtml"
};

var relic_song = {
    name: "Relic Song",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/relicsong.shtml"
};

var secret_sword = {
    name: "Secret Sword",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/secretsword.shtml"
};

var glaciate = {
    name: "Glaciate",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/glaciate.shtml"
};

var bolt_strike = {
    name: "Bolt Strike",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/boltstrike.shtml"
};

var blue_flare = {
    name: "Blue Flare",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/blueflare.shtml"
};

var fiery_dance = {
    name: "Fiery Dance",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/fierydance.shtml"
};

var freeze_shock = {
    name: "Freeze Shock",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/freezeshock.shtml"
};

var ice_burn = {
    name: "Ice Burn",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/iceburn.shtml"
};

var snarl = {
    name: "Snarl",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/snarl.shtml"
};

var icicle_crash = {
    name: "Icicle Crash",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/iciclecrash.shtml"
};

var v_create = {
    name: "V_create",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/v_create.shtml"
};

var fusion_flare = {
    name: "Fusion Flare",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/fusionflare.shtml"
};

var fusion_bolt = {
    name: "Fusion Bolt",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/fusionbolt.shtml"
};

var flying_press = {
    name: "Flying Press",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/flyingpress.shtml"
};

var mat_block = {
    name: "Mat Block",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/matblock.shtml"
};

var belch = {
    name: "Belch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/belch.shtml"
};

var rototiller = {
    name: "Rototiller",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/rototiller.shtml"
};

var sticky_web = {
    name: "Sticky Web",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/stickyweb.shtml"
};

var fell_stinger = {
    name: "Fell Stinger",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/fellstinger.shtml"
};

var phantom_force = {
    name: "Phantom Force",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/phantomforce.shtml"
};

var trick_or_treat = {
    name: "Trick_or_treat",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/trick_or_treat.shtml"
};

var noble_roar = {
    name: "Noble Roar",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/nobleroar.shtml"
};

var ion_deluge = {
    name: "Ion Deluge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/iondeluge.shtml"
};

var parabolic_charge = {
    name: "Parabolic Charge",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/paraboliccharge.shtml"
};

var forests_curse = {
    name: "Forests Curse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/forestscurse.shtml"
};

var petal_blizzard = {
    name: "Petal Blizzard",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/petalblizzard.shtml"
};

var freeze_dry = {
    name: "Freeze_dry",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/freeze_dry.shtml"
};

var disarming_voice = {
    name: "Disarming Voice",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/disarmingvoice.shtml"
};

var parting_shot = {
    name: "Parting Shot",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/partingshot.shtml"
};

var topsy_turvy = {
    name: "Topsy_turvy",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/topsy_turvy.shtml"
};

var draining_kiss = {
    name: "Draining Kiss",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/drainingkiss.shtml"
};

var crafty_shield = {
    name: "Crafty Shield",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/craftyshield.shtml"
};

var flower_shield = {
    name: "Flower Shield",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/flowershield.shtml"
};

var grassy_terrain = {
    name: "Grassy Terrain",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/grassyterrain.shtml"
};

var misty_terrain = {
    name: "Misty Terrain",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/mistyterrain.shtml"
};

var electrify = {
    name: "Electrify",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/electrify.shtml"
};

var play_rough = {
    name: "Play Rough",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/playrough.shtml"
};

var fairy_wind = {
    name: "Fairy Wind",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/fairywind.shtml"
};

var moonblast = {
    name: "Moonblast",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/moonblast.shtml"
};

var boomburst = {
    name: "Boomburst",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/boomburst.shtml"
};

var fairy_lock = {
    name: "Fairy Lock",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/fairylock.shtml"
};

var kings_shield = {
    name: "King's Shield",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/kingsshield.shtml"
};

var play_nice = {
    name: "Play Nice",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/playnice.shtml"
};

var confide = {
    name: "Confide",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/confide.shtml"
};

var diamond_storm = {
    name: "Diamond Storm",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/diamondstorm.shtml"
};

var steam_eruption = {
    name: "Steam Eruption",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/steameruption.shtml"
};

var hyperspace_hole = {
    name: "Hyperspace Hole",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/hyperspacehole.shtml"
};

var water_shuriken = {
    name: "Water Shuriken",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/watershuriken.shtml"
};

var mystical_fire = {
    name: "Mystical Fire",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/mysticalfire.shtml"
};

var spiky_shield = {
    name: "Spiky Shield",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/spikyshield.shtml"
};

var aromatic_mist = {
    name: "Aromatic Mist",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/aromaticmist.shtml"
};

var eerie_impulse = {
    name: "Eerie Impulse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/eerieimpulse.shtml"
};

var venom_drench = {
    name: "Venom Drench",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/venomdrench.shtml"
};

var powder = {
    name: "Powder",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/powder.shtml"
};

var geomancy = {
    name: "Geomancy",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/geomancy.shtml"
};

var magnetic_flux = {
    name: "Magnetic Flux",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/magneticflux.shtml"
};

var happy_hour = {
    name: "Happy Hour",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/happyhour.shtml"
};

var electric_terrain = {
    name: "Electric Terrain",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/electricterrain.shtml"
};

var dazzling_gleam = {
    name: "Dazzling Gleam",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dazzlinggleam.shtml"
};

var celebrate = {
    name: "Celebrate",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/celebrate.shtml"
};

var hold_hands = {
    name: "Hold Hands",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/holdhands.shtml"
};

var baby_doll_eyes = {
    name: "Baby_doll Eyes",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/baby_dolleyes.shtml"
};

var nuzzle = {
    name: "Nuzzle",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/nuzzle.shtml"
};

var hold_back = {
    name: "Hold Back",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/holdback.shtml"
};

var infestation = {
    name: "Infestation",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/infestation.shtml"
};

var power_up_punch = {
    name: "Power_up Punch",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/power_uppunch.shtml"
};

var oblivion_wing = {
    name: "Oblivion Wing",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/oblivionwing.shtml"
};

var thousand_arrows = {
    name: "Thousand Arrows",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/thousandarrows.shtml"
};

var thousand_waves = {
    name: "Thousand Waves",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/thousandwaves.shtml"
};

var lands_wrath = {
    name: "Land's Wrath",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/landswrath.shtml"
};

var light_of_ruin = {
    name: "Light Of Ruin",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/lightofruin.shtml"
};

var origin_pulse = {
    name: "Origin Pulse",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/originpulse.shtml"
};

var precipice_blades = {
    name: "Precipice Blades",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/precipiceblades.shtml"
};

var dragon_ascent = {
    name: "Dragon Ascent",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/dragonascent.shtml"
};

var hyperspace_fury = {
    name: "Hyperspace Fury",
    type: "Normal",
    cat: "Physical",
    power: 40,
    pp: 35,
    acc: 100,
    effect: "N/A",
    wiki: "http://www.serebii.net/attackdex-xy/hyperspacefury.shtml"
};

var ability_capsule = {
    name: "Ability Capsule",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/abilitycapsule.shtml"
};

var ability_urge = {
    name: "Ability Urge",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/abilityurge.shtml"
};

var abomasite = {
    name: "Abomasite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/abomasite.shtml"
};

var absolite = {
    name: "Absolite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/absolite.shtml"
};

var absorb_bulb = {
    name: "Absorb Bulb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/absorbbulb.shtml"
};

var adamant_orb = {
    name: "Adamant Orb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/adamantorb.shtml"
};

var adventure_rules = {
    name: "Adventure Rules",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/adventurerules.shtml"
};

var aerodactylite = {
    name: "Aerodactylite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/aerodactylite.shtml"
};

var aggronite = {
    name: "Aggronite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/aggronite.shtml"
};

var aguav_berry = {
    name: "Aguav Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/aguavberry.shtml"
};

var air_balloon = {
    name: "Air Balloon",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/airballoon.shtml"
};

var alakazite = {
    name: "Alakazite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/alakazite.shtml"
};

var altarianite = {
    name: "Altarianite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/altarianite.shtml"
};

var ampharosite = {
    name: "Ampharosite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/ampharosite.shtml"
};

var amulet_coin = {
    name: "Amulet Coin",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/amuletcoin.shtml"
};

var antidote = {
    name: "Antidote",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/antidote.shtml"
};

var apicot_berry = {
    name: "Apicot Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/apicotberry.shtml"
};

var armor_fossil = {
    name: "Armor Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/armorfossil.shtml"
};

var aspear_berry = {
    name: "Aspear Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/aspearberry.shtml"
};

var audinite = {
    name: "Audinite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/audinite.shtml"
};

var awakening = {
    name: "Awakening",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/awakening.shtml"
};

var babiri_berry = {
    name: "Babiri Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/babiriberry.shtml"
};

var balmmushroom = {
    name: "Balmmushroom",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/balmmushroom.shtml"
};

var banettite = {
    name: "Banettite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/banettite.shtml"
};

var beedrillite = {
    name: "Beedrillite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/beedrillite.shtml"
};

var belue_berry = {
    name: "Belue Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/belueberry.shtml"
};

var berry_juice = {
    name: "Berry Juice",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/berryjuice.shtml"
};

var big_mushroom = {
    name: "Big Mushroom",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/bigmushroom.shtml"
};

var big_nugget = {
    name: "Big Nugget",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/bignugget.shtml"
};

var big_pearl = {
    name: "Big Pearl",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/bigpearl.shtml"
};

var big_root = {
    name: "Big Root",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/bigroot.shtml"
};

var binding_band = {
    name: "Binding Band",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/bindingband.shtml"
};

var black_belt = {
    name: "Black Belt",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/blackbelt.shtml"
};

var black_flute = {
    name: "Black Flute",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/blackflute.shtml"
};

var black_sludge = {
    name: "Black Sludge",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/blacksludge.shtml"
};

var blackglasses = {
    name: "Blackglasses",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/blackglasses.shtml"
};

var blastoisinite = {
    name: "Blastoisinite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/blastoisinite.shtml"
};

var blazikenite = {
    name: "Blazikenite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/blazikenite.shtml"
};

var blk_apricorn = {
    name: "Blk Apricorn",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/blkapricorn.shtml"
};

var blu_apricorn = {
    name: "Blu Apricorn",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/bluapricorn.shtml"
};

var blue_flute = {
    name: "Blue Flute",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/blueflute.shtml"
};

var blue_scarf = {
    name: "Blue Scarf",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/bluescarf.shtml"
};

var blue_shard = {
    name: "Blue Shard",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/blueshard.shtml"
};

var bluk_berry = {
    name: "Bluk Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/blukberry.shtml"
};

var brightpowder = {
    name: "Brightpowder",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/brightpowder.shtml"
};

var bug_gem = {
    name: "Bug Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/buggem.shtml"
};

var burn_drive = {
    name: "Burn Drive",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/burndrive.shtml"
};

var burn_heal = {
    name: "Burn Heal",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/burnheal.shtml"
};

var calcium = {
    name: "Calcium",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/calcium.shtml"
};

var cameruptite = {
    name: "Cameruptite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/cameruptite.shtml"
};

var carbos = {
    name: "Carbos",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/carbos.shtml"
};

var casteliacone = {
    name: "Casteliacone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/casteliacone.shtml"
};

var cell_battery = {
    name: "Cell Battery",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/cellbattery.shtml"
};

var charcoal = {
    name: "Charcoal",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/charcoal.shtml"
};

var charizardite_x = {
    name: "Charizardite X",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/charizarditex.shtml"
};

var charizardite_y = {
    name: "Charizardite Y",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/charizarditey.shtml"
};

var charti_berry = {
    name: "Charti Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/chartiberry.shtml"
};

var cheri_berry = {
    name: "Cheri Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/cheriberry.shtml"
};

var cherish_ball = {
    name: "Cherish Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/cherishball.shtml"
};

var chesto_berry = {
    name: "Chesto Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/chestoberry.shtml"
};

var chilan_berry = {
    name: "Chilan Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/chilanberry.shtml"
};

var chill_drive = {
    name: "Chill Drive",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/chilldrive.shtml"
};

var choice_band = {
    name: "Choice Band",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/choiceband.shtml"
};

var choice_scarf = {
    name: "Choice Scarf",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/choicescarf.shtml"
};

var choice_specs = {
    name: "Choice Specs",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/choicespecs.shtml"
};

var chople_berry = {
    name: "Chople Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/chopleberry.shtml"
};

var claw_fossil = {
    name: "Claw Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/clawfossil.shtml"
};

var cleanse_tag = {
    name: "Cleanse Tag",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/cleansetag.shtml"
};

var clever_wing = {
    name: "Clever Wing",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/cleverwing.shtml"
};

var coba_berry = {
    name: "Coba Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/cobaberry.shtml"
};

var colbur_berry = {
    name: "Colbur Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/colburberry.shtml"
};

var colress_machine = {
    name: "Colress Machine",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/colressmachine.shtml"
};

var comet_shard = {
    name: "Comet Shard",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/cometshard.shtml"
};

var cornn_berry = {
    name: "Cornn Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/cornnberry.shtml"
};

var cover_fossil = {
    name: "Cover Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/coverfossil.shtml"
};

var custap_berry = {
    name: "Custap Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/custapberry.shtml"
};

var damp_mulch = {
    name: "Damp Mulch",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/dampmulch.shtml"
};

var damp_rock = {
    name: "Damp Rock",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/damprock.shtml"
};

var dark_gem = {
    name: "Dark Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/darkgem.shtml"
};

var dawn_stone = {
    name: "Dawn Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/dawnstone.shtml"
};

var deepseascale = {
    name: "Deepseascale",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/deepseascale.shtml"
};

var deepseatooth = {
    name: "Deepseatooth",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/deepseatooth.shtml"
};

var destiny_knot = {
    name: "Destiny Knot",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/destinyknot.shtml"
};

var diancite = {
    name: "Diancite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/diancite.shtml"
};

var dire_hit = {
    name: "Dire Hit",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/direhit.shtml"
};

var dire_hit_2 = {
    name: "Dire Hit 2",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/direhit2.shtml"
};

var dire_hit_3 = {
    name: "Dire Hit 3",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/direhit3.shtml"
};

var dive_ball = {
    name: "Dive Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/diveball.shtml"
};

var dna_splicers = {
    name: "Dna Splicers",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/dnasplicers.shtml"
};

var dome_fossil = {
    name: "Dome Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/domefossil.shtml"
};

var douse_drive = {
    name: "Douse Drive",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/dousedrive.shtml"
};

var draco_plate = {
    name: "Draco Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/dracoplate.shtml"
};

var dragon_fang = {
    name: "Dragon Fang",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/dragonfang.shtml"
};

var dragon_gem = {
    name: "Dragon Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/dragongem.shtml"
};

var dragon_scale = {
    name: "Dragon Scale",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/dragonscale.shtml"
};

var dread_plate = {
    name: "Dread Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/dreadplate.shtml"
};

var dream_ball = {
    name: "Dream Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/dreamball.shtml"
};

var dropped_item = {
    name: "Dropped Item",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/droppeditem.shtml"
};

var dubious_disc = {
    name: "Dubious Disc",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/dubiousdisc.shtml"
};

var durin_berry = {
    name: "Durin Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/durinberry.shtml"
};

var dusk_ball = {
    name: "Dusk Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/duskball.shtml"
};

var dusk_stone = {
    name: "Dusk Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/duskstone.shtml"
};

var earth_plate = {
    name: "Earth Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/earthplate.shtml"
};

var eject_button = {
    name: "Eject Button",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/ejectbutton.shtml"
};

var electirizer = {
    name: "Electirizer",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/electirizer.shtml"
};

var electric_gem = {
    name: "Electric Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/electricgem.shtml"
};

var elevator_key = {
    name: "Elevator Key",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/elevatorkey.shtml"
};

var elixir = {
    name: "Elixir",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/elixir.shtml"
};

var energy_root = {
    name: "Energy Root",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/energyroot.shtml"
};

var energypowder = {
    name: "Energypowder",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/energypowder.shtml"
};

var enigma_berry = {
    name: "Enigma Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/enigmaberry.shtml"
};

var escape_rope = {
    name: "Escape Rope",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/escaperope.shtml"
};

var ether = {
    name: "Ether",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/ether.shtml"
};

var everstone = {
    name: "Everstone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/everstone.shtml"
};

var eviolite = {
    name: "Eviolite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/eviolite.shtml"
};

var exp_share = {
    name: "Exp Share",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/expshare.shtml"
};

var expert_belt = {
    name: "Expert Belt",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/expertbelt.shtml"
};

var fairy_gem = {
    name: "Fairy Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/fairygem.shtml"
};

var fast_ball = {
    name: "Fast Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/fastball.shtml"
};

var fighting_gem = {
    name: "Fighting Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/fightinggem.shtml"
};

var figy_berry = {
    name: "Figy Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/figyberry.shtml"
};

var fire_gem = {
    name: "Fire Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/firegem.shtml"
};

var fire_stone = {
    name: "Fire Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/firestone.shtml"
};

var fist_plate = {
    name: "Fist Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/fistplate.shtml"
};

var flame_orb = {
    name: "Flame Orb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/flameorb.shtml"
};

var flame_plate = {
    name: "Flame Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/flameplate.shtml"
};

var float_stone = {
    name: "Float Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/floatstone.shtml"
};

var fluffy_tail = {
    name: "Fluffy Tail",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/fluffytail.shtml"
};

var flying_gem = {
    name: "Flying Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/flyinggem.shtml"
};

var focus_band = {
    name: "Focus Band",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/focusband.shtml"
};

var focus_sash = {
    name: "Focus Sash",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/focussash.shtml"
};

var fresh_water = {
    name: "Fresh Water",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/freshwater.shtml"
};

var friend_ball = {
    name: "Friend Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/friendball.shtml"
};

var full_heal = {
    name: "Full Heal",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/fullheal.shtml"
};

var full_incense = {
    name: "Full Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/fullincense.shtml"
};

var full_restore = {
    name: "Full Restore",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/fullrestore.shtml"
};

var galladite = {
    name: "Galladite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/galladite.shtml"
};

var ganlon_berry = {
    name: "Ganlon Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/ganlonberry.shtml"
};

var garchompite = {
    name: "Garchompite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/garchompite.shtml"
};

var gardevoirite = {
    name: "Gardevoirite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/gardevoirite.shtml"
};

var gengarite = {
    name: "Gengarite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/gengarite.shtml"
};

var genius_wing = {
    name: "Genius Wing",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/geniuswing.shtml"
};

var ghost_gem = {
    name: "Ghost Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/ghostgem.shtml"
};

var glalitite = {
    name: "Glalitite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/glalitite.shtml"
};

var gooey_mulch = {
    name: "Gooey Mulch",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/gooeymulch.shtml"
};

var grass_gem = {
    name: "Grass Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/grassgem.shtml"
};

var great_ball = {
    name: "Great Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/greatball.shtml"
};

var green_scarf = {
    name: "Green Scarf",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/greenscarf.shtml"
};

var green_shard = {
    name: "Green Shard",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/greenshard.shtml"
};

var grepa_berry = {
    name: "Grepa Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/grepaberry.shtml"
};

var grip_claw = {
    name: "Grip Claw",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/gripclaw.shtml"
};

var griseous_orb = {
    name: "Griseous Orb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/griseousorb.shtml"
};

var grn_apricorn = {
    name: "Grn Apricorn",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/grnapricorn.shtml"
};

var ground_gem = {
    name: "Ground Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/groundgem.shtml"
};

var growth_mulch = {
    name: "Growth Mulch",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/growthmulch.shtml"
};

var grubby_hanky = {
    name: "Grubby Hanky",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/grubbyhanky.shtml"
};

var guard_spec. = {
    name: "Guard Spec.",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/guardspec..shtml"
};

var gyaradosite = {
    name: "Gyaradosite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/gyaradosite.shtml"
};

var haban_berry = {
    name: "Haban Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/habanberry.shtml"
};

var hard_stone = {
    name: "Hard Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/hardstone.shtml"
};

var heal_ball = {
    name: "Heal Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/healball.shtml"
};

var heal_powder = {
    name: "Heal Powder",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/healpowder.shtml"
};

var health_wing = {
    name: "Health Wing",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/healthwing.shtml"
};

var heart_scale = {
    name: "Heart Scale",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/heartscale.shtml"
};

var heat_rock = {
    name: "Heat Rock",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/heatrock.shtml"
};

var heavy_ball = {
    name: "Heavy Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/heavyball.shtml"
};

var helix_fossil = {
    name: "Helix Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/helixfossil.shtml"
};

var heracronite = {
    name: "Heracronite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/heracronite.shtml"
};

var hm01 = {
    name: "HM01",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/hm01.shtml"
};

var hm02 = {
    name: "HM02",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/hm02.shtml"
};

var hm03 = {
    name: "HM03",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/hm03.shtml"
};

var hm04 = {
    name: "HM04",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/hm04.shtml"
};

var hm05 = {
    name: "HM05",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/hm05.shtml"
};

var hm06 = {
    name: "HM06",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/hm06.shtml"
};

var hm07 = {
    name: "HM07",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/hm07.shtml"
};

var hm08 = {
    name: "HM08",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/hm08.shtml"
};

var holo_caster = {
    name: "Holo Caster",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/holocaster.shtml"
};

var hondew_berry = {
    name: "Hondew Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/hondewberry.shtml"
};

var honey = {
    name: "Honey",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/honey.shtml"
};

var honor_of_kalos = {
    name: "Honor Of Kalos",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/honorofkalos.shtml"
};

var houndoominite = {
    name: "Houndoominite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/houndoominite.shtml"
};

var hp_up = {
    name: "Hp Up",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/hpup.shtml"
};

var hyper_potion = {
    name: "Hyper Potion",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/hyperpotion.shtml"
};

var iapapa_berry = {
    name: "Iapapa Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/iapapaberry.shtml"
};

var ice_gem = {
    name: "Ice Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/icegem.shtml"
};

var ice_heal = {
    name: "Ice Heal",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/iceheal.shtml"
};

var icicle_plate = {
    name: "Icicle Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/icicleplate.shtml"
};

var icy_rock = {
    name: "Icy Rock",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/icyrock.shtml"
};

var insect_plate = {
    name: "Insect Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/insectplate.shtml"
};

var intriguing_stone = {
    name: "Intriguing Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/intriguingstone.shtml"
};

var iron = {
    name: "Iron",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/iron.shtml"
};

var iron_ball = {
    name: "Iron Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/ironball.shtml"
};

var iron_plate = {
    name: "Iron Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/ironplate.shtml"
};

var item_drop = {
    name: "Item Drop",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/itemdrop.shtml"
};

var item_urge = {
    name: "Item Urge",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/itemurge.shtml"
};

var jaboca_berry = {
    name: "Jaboca Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/jabocaberry.shtml"
};

var kangaskhanite = {
    name: "Kangaskhanite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/kangaskhanite.shtml"
};

var kasib_berry = {
    name: "Kasib Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/kasibberry.shtml"
};

var kebia_berry = {
    name: "Kebia Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/kebiaberry.shtml"
};

var kelpsy_berry = {
    name: "Kelpsy Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/kelpsyberry.shtml"
};

var kings_rock = {
    name: "Kings Rock",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/kingsrock.shtml"
};

var lagging_tail = {
    name: "Lagging Tail",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/laggingtail.shtml"
};

var lansat_berry = {
    name: "Lansat Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/lansatberry.shtml"
};

var latiasite = {
    name: "Latiasite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/latiasite.shtml"
};

var latiosite = {
    name: "Latiosite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/latiosite.shtml"
};

var lava_cookie = {
    name: "Lava Cookie",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/lavacookie.shtml"
};

var lax_incense = {
    name: "Lax Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/laxincense.shtml"
};

var leaf_stone = {
    name: "Leaf Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/leafstone.shtml"
};

var leftovers = {
    name: "Leftovers",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/leftovers.shtml"
};

var lemonade = {
    name: "Lemonade",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/lemonade.shtml"
};

var lens_case = {
    name: "Lens Case",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/lenscase.shtml"
};

var leppa_berry = {
    name: "Leppa Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/leppaberry.shtml"
};

var level_ball = {
    name: "Level Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/levelball.shtml"
};

var liechi_berry = {
    name: "Liechi Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/liechiberry.shtml"
};

var life_orb = {
    name: "Life Orb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/lifeorb.shtml"
};

var light_ball = {
    name: "Light Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/lightball.shtml"
};

var light_clay = {
    name: "Light Clay",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/lightclay.shtml"
};

var looker_ticket = {
    name: "Looker Ticket",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/lookerticket.shtml"
};

var lopunnite = {
    name: "Lopunnite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/lopunnite.shtml"
};

var love_ball = {
    name: "Love Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/loveball.shtml"
};

var lucarionite = {
    name: "Lucarionite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/lucarionite.shtml"
};

var luck_incense = {
    name: "Luck Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/luckincense.shtml"
};

var lucky_egg = {
    name: "Lucky Egg",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/luckyegg.shtml"
};

var lucky_punch = {
    name: "Lucky Punch",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/luckypunch.shtml"
};

var lum_berry = {
    name: "Lum Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/lumberry.shtml"
};

var lure_ball = {
    name: "Lure Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/lureball.shtml"
};

var lustrous_orb = {
    name: "Lustrous Orb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/lustrousorb.shtml"
};

var luxury_ball = {
    name: "Luxury Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/luxuryball.shtml"
};

var macho_brace = {
    name: "Macho Brace",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/machobrace.shtml"
};

var magmarizer = {
    name: "Magmarizer",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/magmarizer.shtml"
};

var magnet = {
    name: "Magnet",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/magnet.shtml"
};

var mago_berry = {
    name: "Mago Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/magoberry.shtml"
};

var magost_berry = {
    name: "Magost Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/magostberry.shtml"
};

var manectite = {
    name: "Manectite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/manectite.shtml"
};

var master_ball = {
    name: "Master Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/masterball.shtml"
};

var mawilite = {
    name: "Mawilite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/mawilite.shtml"
};

var max_elixir = {
    name: "Max Elixir",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/maxelixir.shtml"
};

var max_ether = {
    name: "Max Ether",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/maxether.shtml"
};

var max_potion = {
    name: "Max Potion",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/maxpotion.shtml"
};

var max_repel = {
    name: "Max Repel",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/maxrepel.shtml"
};

var max_revive = {
    name: "Max Revive",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/maxrevive.shtml"
};

var meadow_plate = {
    name: "Meadow Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/meadowplate.shtml"
};

var medal_box = {
    name: "Medal Box",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/medalbox.shtml"
};

var medichamite = {
    name: "Medichamite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/medichamite.shtml"
};

var mental_herb = {
    name: "Mental Herb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/mentalherb.shtml"
};

var metagrossite = {
    name: "Metagrossite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/metagrossite.shtml"
};

var metal_coat = {
    name: "Metal Coat",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/metalcoat.shtml"
};

var metal_powder = {
    name: "Metal Powder",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/metalpowder.shtml"
};

var metronome = {
    name: "Metronome",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/metronome.shtml"
};

var mewtwonite_x = {
    name: "Mewtwonite X",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/mewtwonitex.shtml"
};

var mewtwonite_y = {
    name: "Mewtwonite Y",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/mewtwonitey.shtml"
};

var micle_berry = {
    name: "Micle Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/micleberry.shtml"
};

var mind_plate = {
    name: "Mind Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/mindplate.shtml"
};

var miracle_seed = {
    name: "Miracle Seed",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/miracleseed.shtml"
};

var moomoo_milk = {
    name: "Moomoo Milk",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/moomoomilk.shtml"
};

var moon_ball = {
    name: "Moon Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/moonball.shtml"
};

var moon_stone = {
    name: "Moon Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/moonstone.shtml"
};

var muscle_band = {
    name: "Muscle Band",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/muscleband.shtml"
};

var muscle_wing = {
    name: "Muscle Wing",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/musclewing.shtml"
};

var mystic_water = {
    name: "Mystic Water",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/mysticwater.shtml"
};

var nanab_berry = {
    name: "Nanab Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/nanabberry.shtml"
};

var nest_ball = {
    name: "Nest Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/nestball.shtml"
};

var net_ball = {
    name: "Net Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/netball.shtml"
};

var nevermeltice = {
    name: "Nevermeltice",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/nevermeltice.shtml"
};

var nomel_berry = {
    name: "Nomel Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/nomelberry.shtml"
};

var normal_gem = {
    name: "Normal Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/normalgem.shtml"
};

var nugget = {
    name: "Nugget",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/nugget.shtml"
};

var occa_berry = {
    name: "Occa Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/occaberry.shtml"
};

var odd_incense = {
    name: "Odd Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/oddincense.shtml"
};

var odd_keystone = {
    name: "Odd Keystone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/oddkeystone.shtml"
};

var old_amber = {
    name: "Old Amber",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/oldamber.shtml"
};

var old_gateau = {
    name: "Old Gateau",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/oldgateau.shtml"
};

var oran_berry = {
    name: "Oran Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/oranberry.shtml"
};

var oval_charm = {
    name: "Oval Charm",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/ovalcharm.shtml"
};

var oval_stone = {
    name: "Oval Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/ovalstone.shtml"
};

var pamtre_berry = {
    name: "Pamtre Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/pamtreberry.shtml"
};

var park_ball = {
    name: "Park Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/parkball.shtml"
};

var parlyz_heal = {
    name: "Parlyz Heal",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/parlyzheal.shtml"
};

var pass_orb = {
    name: "Pass Orb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/passorb.shtml"
};

var passho_berry = {
    name: "Passho Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/passhoberry.shtml"
};

var payapa_berry = {
    name: "Payapa Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/payapaberry.shtml"
};

var pearl = {
    name: "Pearl",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/pearl.shtml"
};

var pearl_string = {
    name: "Pearl String",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/pearlstring.shtml"
};

var pecha_berry = {
    name: "Pecha Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/pechaberry.shtml"
};

var permit = {
    name: "Permit",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/permit.shtml"
};

var persim_berry = {
    name: "Persim Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/persimberry.shtml"
};

var petaya_berry = {
    name: "Petaya Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/petayaberry.shtml"
};

var pidgeotite = {
    name: "Pidgeotite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/pidgeotite.shtml"
};

var pinap_berry = {
    name: "Pinap Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/pinapberry.shtml"
};

var pink_scarf = {
    name: "Pink Scarf",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/pinkscarf.shtml"
};

var pinsirite = {
    name: "Pinsirite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/pinsirite.shtml"
};

var pixie_plate = {
    name: "Pixie Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/pixieplate.shtml"
};

var plasma_card = {
    name: "Plasma Card",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/plasmacard.shtml"
};

var plume_fossil = {
    name: "Plume Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/plumefossil.shtml"
};

var pnk_apricorn = {
    name: "Pnk Apricorn",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/pnkapricorn.shtml"
};

var poison_barb = {
    name: "Poison Barb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/poisonbarb.shtml"
};

var poison_gem = {
    name: "Poison Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/poisongem.shtml"
};

var poké_ball = {
    name: "Poké Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/pokéball.shtml"
};

var poké_doll = {
    name: "Poké Doll",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/pokédoll.shtml"
};

var poké_toy = {
    name: "Poké Toy",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/pokétoy.shtml"
};

var pomeg_berry = {
    name: "Pomeg Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/pomegberry.shtml"
};

var potion = {
    name: "Potion",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/potion.shtml"
};

var power_anklet = {
    name: "Power Anklet",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/poweranklet.shtml"
};

var power_band = {
    name: "Power Band",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/powerband.shtml"
};

var power_belt = {
    name: "Power Belt",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/powerbelt.shtml"
};

var power_bracer = {
    name: "Power Bracer",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/powerbracer.shtml"
};

var power_herb = {
    name: "Power Herb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/powerherb.shtml"
};

var power_lens = {
    name: "Power Lens",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/powerlens.shtml"
};

var power_plant_pass = {
    name: "Power Plant Pass",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/powerplantpass.shtml"
};

var power_weight = {
    name: "Power Weight",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/powerweight.shtml"
};

var pp_max = {
    name: "Pp Max",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/ppmax.shtml"
};

var pp_up = {
    name: "Pp Up",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/ppup.shtml"
};

var premier_ball = {
    name: "Premier Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/premierball.shtml"
};

var pretty_wing = {
    name: "Pretty Wing",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/prettywing.shtml"
};

var prism_scale = {
    name: "Prism Scale",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/prismscale.shtml"
};

var profs_letter = {
    name: "Profs Letter",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/profsletter.shtml"
};

var protector = {
    name: "Protector",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/protector.shtml"
};

var protein = {
    name: "Protein",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/protein.shtml"
};

var psychic_gem = {
    name: "Psychic Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/psychicgem.shtml"
};

var pure_incense = {
    name: "Pure Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/pureincense.shtml"
};

var qualot_berry = {
    name: "Qualot Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/qualotberry.shtml"
};

var quick_ball = {
    name: "Quick Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/quickball.shtml"
};

var quick_claw = {
    name: "Quick Claw",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/quickclaw.shtml"
};

var quick_powder = {
    name: "Quick Powder",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/quickpowder.shtml"
};

var rabuta_berry = {
    name: "Rabuta Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/rabutaberry.shtml"
};

var rare_bone = {
    name: "Rare Bone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/rarebone.shtml"
};

var rare_candy = {
    name: "Rare Candy",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/rarecandy.shtml"
};

var rawst_berry = {
    name: "Rawst Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/rawstberry.shtml"
};

var razor_claw = {
    name: "Razor Claw",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/razorclaw.shtml"
};

var razor_fang = {
    name: "Razor Fang",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/razorfang.shtml"
};

var razz_berry = {
    name: "Razz Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/razzberry.shtml"
};

var reaper_cloth = {
    name: "Reaper Cloth",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/reapercloth.shtml"
};

var red_apricorn = {
    name: "Red Apricorn",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/redapricorn.shtml"
};

var red_card = {
    name: "Red Card",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/redcard.shtml"
};

var red_flute = {
    name: "Red Flute",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/redflute.shtml"
};

var red_scarf = {
    name: "Red Scarf",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/redscarf.shtml"
};

var red_shard = {
    name: "Red Shard",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/redshard.shtml"
};

var relic_band = {
    name: "Relic Band",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/relicband.shtml"
};

var relic_copper = {
    name: "Relic Copper",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/reliccopper.shtml"
};

var relic_crown = {
    name: "Relic Crown",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/reliccrown.shtml"
};

var relic_gold = {
    name: "Relic Gold",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/relicgold.shtml"
};

var relic_silver = {
    name: "Relic Silver",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/relicsilver.shtml"
};

var relic_statue = {
    name: "Relic Statue",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/relicstatue.shtml"
};

var relic_vase = {
    name: "Relic Vase",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/relicvase.shtml"
};

var repeat_ball = {
    name: "Repeat Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/repeatball.shtml"
};

var repel = {
    name: "Repel",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/repel.shtml"
};

var reset_urge = {
    name: "Reset Urge",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/reseturge.shtml"
};

var resist_wing = {
    name: "Resist Wing",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/resistwing.shtml"
};

var reveal_glass = {
    name: "Reveal Glass",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/revealglass.shtml"
};

var revival_herb = {
    name: "Revival Herb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/revivalherb.shtml"
};

var revive = {
    name: "Revive",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/revive.shtml"
};

var rindo_berry = {
    name: "Rindo Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/rindoberry.shtml"
};

var ring_target = {
    name: "Ring Target",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/ringtarget.shtml"
};

var rock_gem = {
    name: "Rock Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/rockgem.shtml"
};

var rock_incense = {
    name: "Rock Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/rockincense.shtml"
};

var rocky_helmet = {
    name: "Rocky Helmet",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/rockyhelmet.shtml"
};

var roller_skates = {
    name: "Roller Skates",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/rollerskates.shtml"
};

var root_fossil = {
    name: "Root Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/rootfossil.shtml"
};

var rose_incense = {
    name: "Rose Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/roseincense.shtml"
};

var rowap_berry = {
    name: "Rowap Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/rowapberry.shtml"
};

var sablenite = {
    name: "Sablenite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/sablenite.shtml"
};

var sacred_ash = {
    name: "Sacred Ash",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/sacredash.shtml"
};

var safari_ball = {
    name: "Safari Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/safariball.shtml"
};

var salac_berry = {
    name: "Salac Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/salacberry.shtml"
};

var salamencite = {
    name: "Salamencite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/salamencite.shtml"
};

var sceptilite = {
    name: "Sceptilite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/sceptilite.shtml"
};

var scizorite = {
    name: "Scizorite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/scizorite.shtml"
};

var scope_lens = {
    name: "Scope Lens",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/scopelens.shtml"
};

var sea_incense = {
    name: "Sea Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/seaincense.shtml"
};

var sharp_beak = {
    name: "Sharp Beak",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/sharpbeak.shtml"
};

var sharpedonite = {
    name: "Sharpedonite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/sharpedonite.shtml"
};

var shed_shell = {
    name: "Shed Shell",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/shedshell.shtml"
};

var shell_bell = {
    name: "Shell Bell",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/shellbell.shtml"
};

var shiny_charm = {
    name: "Shiny Charm",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/shinycharm.shtml"
};

var shiny_stone = {
    name: "Shiny Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/shinystone.shtml"
};

var shoal_salt = {
    name: "Shoal Salt",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/shoalsalt.shtml"
};

var shoal_shell = {
    name: "Shoal Shell",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/shoalshell.shtml"
};

var shock_drive = {
    name: "Shock Drive",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/shockdrive.shtml"
};

var shuca_berry = {
    name: "Shuca Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/shucaberry.shtml"
};

var silk_scarf = {
    name: "Silk Scarf",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/silkscarf.shtml"
};

var silverpowder = {
    name: "Silverpowder",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/silverpowder.shtml"
};

var sitrus_berry = {
    name: "Sitrus Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/sitrusberry.shtml"
};

var skull_fossil = {
    name: "Skull Fossil",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/skullfossil.shtml"
};

var sky_plate = {
    name: "Sky Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/skyplate.shtml"
};

var slowbronite = {
    name: "Slowbronite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/slowbronite.shtml"
};

var smoke_ball = {
    name: "Smoke Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/smokeball.shtml"
};

var smooth_rock = {
    name: "Smooth Rock",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/smoothrock.shtml"
};

var soda_pop = {
    name: "Soda Pop",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/sodapop.shtml"
};

var soft_sand = {
    name: "Soft Sand",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/softsand.shtml"
};

var soothe_bell = {
    name: "Soothe Bell",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/soothebell.shtml"
};

var soul_dew = {
    name: "Soul Dew",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/souldew.shtml"
};

var spell_tag = {
    name: "Spell Tag",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/spelltag.shtml"
};

var spelon_berry = {
    name: "Spelon Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/spelonberry.shtml"
};

var splash_plate = {
    name: "Splash Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/splashplate.shtml"
};

var spooky_plate = {
    name: "Spooky Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/spookyplate.shtml"
};

var sport_ball = {
    name: "Sport Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/sportball.shtml"
};

var sprinklotad = {
    name: "Sprinklotad",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/sprinklotad.shtml"
};

var stable_mulch = {
    name: "Stable Mulch",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/stablemulch.shtml"
};

var star_piece = {
    name: "Star Piece",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/starpiece.shtml"
};

var stardust = {
    name: "Stardust",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/stardust.shtml"
};

var starf_berry = {
    name: "Starf Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/starfberry.shtml"
};

var steel_gem = {
    name: "Steel Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/steelgem.shtml"
};

var steelixite = {
    name: "Steelixite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/steelixite.shtml"
};

var stick = {
    name: "Stick",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/stick.shtml"
};

var sticky_barb = {
    name: "Sticky Barb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/stickybarb.shtml"
};

var stone_plate = {
    name: "Stone Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/stoneplate.shtml"
};

var sun_stone = {
    name: "Sun Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/sunstone.shtml"
};

var super_potion = {
    name: "Super Potion",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/superpotion.shtml"
};

var super_repel = {
    name: "Super Repel",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/superrepel.shtml"
};

var swampertite = {
    name: "Swampertite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/swampertite.shtml"
};

var sweet_heart = {
    name: "Sweet Heart",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/sweetheart.shtml"
};

var swift_wing = {
    name: "Swift Wing",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/swiftwing.shtml"
};

var tamato_berry = {
    name: "Tamato Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tamatoberry.shtml"
};

var tanga_berry = {
    name: "Tanga Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tangaberry.shtml"
};

var thick_club = {
    name: "Thick Club",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/thickclub.shtml"
};

var thunderstone = {
    name: "Thunderstone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/thunderstone.shtml"
};

var timer_ball = {
    name: "Timer Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/timerball.shtml"
};

var tinymushroom = {
    name: "Tinymushroom",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tinymushroom.shtml"
};

var tm01 = {
    name: "TM01",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm01.shtml"
};

var tm02 = {
    name: "TM02",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm02.shtml"
};

var tm03 = {
    name: "TM03",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm03.shtml"
};

var tm04 = {
    name: "TM04",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm04.shtml"
};

var tm05 = {
    name: "TM05",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm05.shtml"
};

var tm06 = {
    name: "TM06",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm06.shtml"
};

var tm07 = {
    name: "TM07",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm07.shtml"
};

var tm08 = {
    name: "TM08",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm08.shtml"
};

var tm09 = {
    name: "TM09",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm09.shtml"
};

var tm10 = {
    name: "TM10",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm10.shtml"
};

var tm100 = {
    name: "TM100",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm100.shtml"
};

var tm11 = {
    name: "TM11",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm11.shtml"
};

var tm12 = {
    name: "TM12",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm12.shtml"
};

var tm13 = {
    name: "TM13",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm13.shtml"
};

var tm14 = {
    name: "TM14",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm14.shtml"
};

var tm15 = {
    name: "TM15",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm15.shtml"
};

var tm16 = {
    name: "TM16",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm16.shtml"
};

var tm17 = {
    name: "TM17",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm17.shtml"
};

var tm18 = {
    name: "TM18",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm18.shtml"
};

var tm19 = {
    name: "TM19",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm19.shtml"
};

var tm20 = {
    name: "TM20",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm20.shtml"
};

var tm21 = {
    name: "TM21",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm21.shtml"
};

var tm22 = {
    name: "TM22",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm22.shtml"
};

var tm23 = {
    name: "TM23",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm23.shtml"
};

var tm24 = {
    name: "TM24",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm24.shtml"
};

var tm25 = {
    name: "TM25",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm25.shtml"
};

var tm26 = {
    name: "TM26",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm26.shtml"
};

var tm27 = {
    name: "TM27",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm27.shtml"
};

var tm28 = {
    name: "TM28",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm28.shtml"
};

var tm29 = {
    name: "TM29",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm29.shtml"
};

var tm30 = {
    name: "TM30",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm30.shtml"
};

var tm31 = {
    name: "TM31",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm31.shtml"
};

var tm32 = {
    name: "TM32",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm32.shtml"
};

var tm33 = {
    name: "TM33",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm33.shtml"
};

var tm34 = {
    name: "TM34",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm34.shtml"
};

var tm35 = {
    name: "TM35",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm35.shtml"
};

var tm36 = {
    name: "TM36",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm36.shtml"
};

var tm37 = {
    name: "TM37",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm37.shtml"
};

var tm38 = {
    name: "TM38",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm38.shtml"
};

var tm39 = {
    name: "TM39",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm39.shtml"
};

var tm40 = {
    name: "TM40",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm40.shtml"
};

var tm41 = {
    name: "TM41",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm41.shtml"
};

var tm42 = {
    name: "TM42",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm42.shtml"
};

var tm43 = {
    name: "TM43",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm43.shtml"
};

var tm44 = {
    name: "TM44",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm44.shtml"
};

var tm45 = {
    name: "TM45",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm45.shtml"
};

var tm46 = {
    name: "TM46",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm46.shtml"
};

var tm47 = {
    name: "TM47",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm47.shtml"
};

var tm48 = {
    name: "TM48",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm48.shtml"
};

var tm49 = {
    name: "TM49",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm49.shtml"
};

var tm50 = {
    name: "TM50",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm50.shtml"
};

var tm51 = {
    name: "TM51",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm51.shtml"
};

var tm52 = {
    name: "TM52",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm52.shtml"
};

var tm53 = {
    name: "TM53",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm53.shtml"
};

var tm54 = {
    name: "TM54",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm54.shtml"
};

var tm55 = {
    name: "TM55",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm55.shtml"
};

var tm56 = {
    name: "TM56",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm56.shtml"
};

var tm57 = {
    name: "TM57",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm57.shtml"
};

var tm58 = {
    name: "TM58",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm58.shtml"
};

var tm59 = {
    name: "TM59",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm59.shtml"
};

var tm60 = {
    name: "TM60",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm60.shtml"
};

var tm61 = {
    name: "TM61",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm61.shtml"
};

var tm62 = {
    name: "TM62",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm62.shtml"
};

var tm63 = {
    name: "TM63",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm63.shtml"
};

var tm64 = {
    name: "TM64",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm64.shtml"
};

var tm65 = {
    name: "TM65",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm65.shtml"
};

var tm66 = {
    name: "TM66",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm66.shtml"
};

var tm67 = {
    name: "TM67",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm67.shtml"
};

var tm68 = {
    name: "TM68",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm68.shtml"
};

var tm69 = {
    name: "TM69",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm69.shtml"
};

var tm70 = {
    name: "TM70",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm70.shtml"
};

var tm71 = {
    name: "TM71",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm71.shtml"
};

var tm72 = {
    name: "TM72",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm72.shtml"
};

var tm73 = {
    name: "TM73",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm73.shtml"
};

var tm74 = {
    name: "TM74",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm74.shtml"
};

var tm75 = {
    name: "TM75",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm75.shtml"
};

var tm76 = {
    name: "TM76",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm76.shtml"
};

var tm77 = {
    name: "TM77",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm77.shtml"
};

var tm78 = {
    name: "TM78",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm78.shtml"
};

var tm79 = {
    name: "TM79",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm79.shtml"
};

var tm80 = {
    name: "TM80",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm80.shtml"
};

var tm81 = {
    name: "TM81",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm81.shtml"
};

var tm82 = {
    name: "TM82",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm82.shtml"
};

var tm83 = {
    name: "TM83",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm83.shtml"
};

var tm84 = {
    name: "TM84",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm84.shtml"
};

var tm85 = {
    name: "TM85",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm85.shtml"
};

var tm86 = {
    name: "TM86",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm86.shtml"
};

var tm87 = {
    name: "TM87",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm87.shtml"
};

var tm88 = {
    name: "TM88",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm88.shtml"
};

var tm89 = {
    name: "TM89",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm89.shtml"
};

var tm90 = {
    name: "TM90",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm90.shtml"
};

var tm91 = {
    name: "TM91",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm91.shtml"
};

var tm92 = {
    name: "TM92",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm92.shtml"
};

var tm93 = {
    name: "TM93",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm93.shtml"
};

var tm94 = {
    name: "TM94",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm94.shtml"
};

var tm95 = {
    name: "TM95",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm95.shtml"
};

var tm96 = {
    name: "TM96",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm96.shtml"
};

var tm97 = {
    name: "TM97",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm97.shtml"
};

var tm98 = {
    name: "TM98",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm98.shtml"
};

var tm99 = {
    name: "TM99",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tm99.shtml"
};

var tmv_pass = {
    name: "TMv Pass",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tmvpass.shtml"
};

var toxic_orb = {
    name: "Toxic Orb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/toxicorb.shtml"
};

var toxic_plate = {
    name: "Toxic Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/toxicplate.shtml"
};

var twistedspoon = {
    name: "Twistedspoon",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/twistedspoon.shtml"
};

var tyranitarite = {
    name: "Tyranitarite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/tyranitarite.shtml"
};

var ultra_ball = {
    name: "Ultra Ball",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/ultraball.shtml"
};

var up_grade = {
    name: "Up_grade",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/up_grade.shtml"
};

var venusaurite = {
    name: "Venusaurite",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/venusaurite.shtml"
};

var wacan_berry = {
    name: "Wacan Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/wacanberry.shtml"
};

var water_gem = {
    name: "Water Gem",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/watergem.shtml"
};

var water_stone = {
    name: "Water Stone",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/waterstone.shtml"
};

var watmel_berry = {
    name: "Watmel Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/watmelberry.shtml"
};

var wave_incense = {
    name: "Wave Incense",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/waveincense.shtml"
};

var wepear_berry = {
    name: "Wepear Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/wepearberry.shtml"
};

var white_flute = {
    name: "White Flute",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/whiteflute.shtml"
};

var white_herb = {
    name: "White Herb",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/whiteherb.shtml"
};

var wht_apricorn = {
    name: "Wht Apricorn",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/whtapricorn.shtml"
};

var wide_lens = {
    name: "Wide Lens",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/widelens.shtml"
};

var wiki_berry = {
    name: "Wiki Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/wikiberry.shtml"
};

var wise_glasses = {
    name: "Wise Glasses",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/wiseglasses.shtml"
};

var x_accuracy = {
    name: "X Accuracy",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xaccuracy.shtml"
};

var x_accuracy_2 = {
    name: "X Accuracy 2",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xaccuracy2.shtml"
};

var x_accuracy_3 = {
    name: "X Accuracy 3",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xaccuracy3.shtml"
};

var x_accuracy_6 = {
    name: "X Accuracy 6",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xaccuracy6.shtml"
};

var x_attack = {
    name: "X Attack",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xattack.shtml"
};

var x_attack_2 = {
    name: "X Attack 2",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xattack2.shtml"
};

var x_attack_3 = {
    name: "X Attack 3",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xattack3.shtml"
};

var x_attack_6 = {
    name: "X Attack 6",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xattack6.shtml"
};

var x_defend = {
    name: "X Defend",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xdefend.shtml"
};

var x_defend_2 = {
    name: "X Defend 2",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xdefend2.shtml"
};

var x_defend_3 = {
    name: "X Defend 3",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xdefend3.shtml"
};

var x_defend_6 = {
    name: "X Defend 6",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xdefend6.shtml"
};

var x_sp_def = {
    name: "X Sp Def",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xspdef.shtml"
};

var x_sp_def_2 = {
    name: "X Sp Def 2",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xspdef2.shtml"
};

var x_sp_def_3 = {
    name: "X Sp Def 3",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xspdef3.shtml"
};

var x_sp_def_6 = {
    name: "X Sp Def 6",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xspdef6.shtml"
};

var x_special = {
    name: "X Special",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xspecial.shtml"
};

var x_special_2 = {
    name: "X Special 2",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xspecial2.shtml"
};

var x_special_3 = {
    name: "X Special 3",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xspecial3.shtml"
};

var x_special_6 = {
    name: "X Special 6",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xspecial6.shtml"
};

var x_speed = {
    name: "X Speed",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xspeed.shtml"
};

var x_speed_2 = {
    name: "X Speed 2",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xspeed2.shtml"
};

var x_speed_3 = {
    name: "X Speed 3",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xspeed3.shtml"
};

var x_speed_6 = {
    name: "X Speed 6",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/xspeed6.shtml"
};

var yache_berry = {
    name: "Yache Berry",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/yacheberry.shtml"
};

var yellow_flute = {
    name: "Yellow Flute",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/yellowflute.shtml"
};

var yellow_scarf = {
    name: "Yellow Scarf",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/yellowscarf.shtml"
};

var yellow_shard = {
    name: "Yellow Shard",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/yellowshard.shtml"
};

var ylw_apricorn = {
    name: "Ylw Apricorn",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/ylwapricorn.shtml"
};

var zap_plate = {
    name: "Zap Plate",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/zapplate.shtml"
};

var zinc = {
    name: "Zinc",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/zinc.shtml"
};

var zoom_lens = {
    name: "Zoom Lens",
    desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.",
    wiki: "http://www.serebii.net/itemdex/zoomlens.shtml"
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