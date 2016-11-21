//discord API boilerplate, logins in
var Discord = require('discord.io');
var bot = new Discord.Client({
	autorun: true,
	token: "remove horror"
});

//confirms login
bot.on('ready', function(event) {
	console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

//reads incoming messages to look for commands
bot.on('message', function(user, userID, channelID, message, event) {
	if (message.toLowerCase().substring(0, 5) === "!help") {
		help(user, userID, channelID, message, event);
	}
	if (message.toLowerCase().substring(0, 8) === "!pokemon") {
		pokemon(user, userID, channelID, message, event);
	}
	if (message.toLowerCase().substring(0, 8) === "!pokedex") {
		pokedex(user, userID, channelID, message, event);
	}
	if (message.toLowerCase().substring(0, 9) === "!aloladex") {
		aloladex(user, userID, channelID, message, event);
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
	if (message.toLowerCase().substring(0, 5) === "!weak") {
		weak(user, userID, channelID, message, event);
	}
	if (message.toLowerCase().substring(0, 10) === "!typechart") {
		typechart(user, userID, channelID, message, event);
	}
	if (message.toLowerCase().substring(0, 10) === "!evolution") {
		evolution(user, userID, channelID, message, event);
	}
	if (message.toLowerCase().substring(0, 3) === "!qr") {
		qr(user, userID, channelID, message, event);
	}
	if (message.toLowerCase().substring(0, 7) === "!nature") {
		nature(user, userID, channelID, message, event);
	}
});

//outputs help text
function help(user, userID, channelID, message, event) {
	bot.sendMessage({
		to: channelID,
		message: "Hello, I am Colress. My job is to serve information about data in the Pokémon games. I recognise the following commands: " +
		"\n!help: Displays this help message." + 
		"\n!pokemon: Serves information about individual Pokémon." + 
		"\n!pokedex: Serves Pokémon information by Pokédex number lookup." +
		"\n!aloladex: Serves Pokémon information by Alola Pokédex number lookup." +
		"\n!move: Serves information about Pokémon moves." + 
		"\n!item: Serves information about items." + 
		"\n!ability: Serves information about pokemon abilites." + 
		"\n!weak: Calculates the type relationships of a Pokémon." + 
		"\n!typechart: Displays a chart of type strengths and weaknesses." + 
		"\n!evolution: Displays an image guide for evolving new Alolan Pokémon. Spoiler alert!" + 
		"\n!qr: Links a list of QR codes for Pokémon Sun and Moon's scanning feature. Spoilers, and maybe cheating?" + 
		"\n!nature: Displays a chart of the effects of each Nature on a Pokémon's stats." +
		"\nFor more detail on each command, call it with 'help' as the first argument. For example, '!pokemon help'." + 
		"\nBy the way, I can respond to direct messages as well. Please feel free to try it if you don't want to clutter up a server!" + 
		"\nI was created by AlphaKretin, using discord.io in node.js."
	});
}

//returns pokemon info
function pokemon(user, userID, channelID, message, event) {
	var mon = message.substring(9); //gets part of message after the "!pokemon" that sent it here
	var out = "";
	var current;
	mon = mon.toLowerCase(); //formatted to match array
	if (mon === "help") { //returns help text
		bot.sendMessage({
			to: channelID,
			message: "This command serves information about Pokémon! Use the Pokémon's name as the argument. For alternate formes, spell out the forme name in full - for example, 'landorus therian', 'white kyurem', 'mega charizard y'."
		});
	} else if (mon === "rap") { //returns pokerap text
		rap(user, userID, channelID, message, event);
	} else {
		for (var man of mons) {
			if (man.id === mon) {
				current = man;
			}
		}
		if (current === undefined) {
			bot.sendMessage({
				to: channelID,
				message: "I don't recognise that Pokémon, " + user + "!"
			});
		} else {
			if (current.alola === -1) {
				out = "Image: " + current.image + "\nName: " + current.name + "\nPokédex No.: " + current.dex + "\nType: " + current.type + "\nAbility: " + current.ability + "\nWiki Link: " + current.wiki;
			} else {
				out = "Image: " + current.image + "\nName: " + current.name + "\nPokédex No.: " + current.dex + "\nAlola Dex No.: " + current.alola + "\nType: " + current.type + "\nAbility: " + current.ability + "\nWiki Link: " + current.wiki;
			}
			bot.sendMessage({
				to: channelID,
				message: out
			});
		}
	}
}

function pokedex(user, userID, channelID, message, event) {
	var mon = message.substring(9); //gets part of message after the "!pokemon" that sent it here
	var out = "";
	var current;
	if (mon === "help") { //returns help text
		bot.sendMessage({
			to: channelID,
			message: "This command serves information about Pokémon by Pokédex number lookup! Use the Pokémon's Pokédex number as the argument. Alternate formes are not supported."
		});
	} else {
		mon = parseInt(mon);
		for (var man of mons) {
			if (man.dex === mon) {
				current = man;
			}
		}
		if (current === undefined) {
			bot.sendMessage({
				to: channelID,
				message: "I don't recognise that Pokémon, " + user + "!"
			});
		} else {
			if (current.alola === -1) {
				out = "Image: " + current.image + "\nName: " + current.name + "\nPokédex No.: " + current.dex + "\nType: " + current.type + "\nAbility: " + current.ability + "\nWiki Link: " + current.wiki;
			} else {
				out = "Image: " + current.image + "\nName: " + current.name + "\nPokédex No.: " + current.dex + "\nAlola Dex No.: " + current.alola + "\nType: " + current.type + "\nAbility: " + current.ability + "\nWiki Link: " + current.wiki;
			}
			bot.sendMessage({
				to: channelID,
				message: out
			});
		}
	}
}

function aloladex(user, userID, channelID, message, event) {
	var mon = message.substring(10); //gets part of message after the "!pokemon" that sent it here
	var out = "";
	var current;
	if (mon === "help") { //returns help text
		bot.sendMessage({
			to: channelID,
			message: "This command serves information about Pokémon by Alola Pokédex number lookup! Use the Pokémon's Alola Pokédex number as the argument. Alternate formes are not supported."
		});
	} else {
		mon = parseInt(mon);
		for (var man of mons) {
			if (man.alola === mon) {
				current = man;
			}
		}
		if (current === undefined) {
			bot.sendMessage({
				to: channelID,
				message: "I don't recognise that Pokémon, " + user + "!"
			});
		} else {
			bot.sendMessage({
				to: channelID,
				message: "Image: " + current.image + "\nName: " + current.name + "\nPokédex No.: " + current.dex + "\nAlola Dex No.: " + current.alola + "\nType: " + current.type + "\nAbility: " + current.ability + "\nWiki Link: " + current.wiki
			});
		}
	}
}

//returns move info, see pokemon function
function move(user, userID, channelID, message, event) {
	var moveprops = ["name", "type", "cat", "power", "pp", "acc", "effect", "zeffect", "wiki"];
	var current;
	var mov = message.substring(6);
	mov = mov.toLowerCase();
	if (mov === "help") {
		bot.sendMessage({
			to: channelID,
			message: "This command serves information about Pokémon's moves! Use the move's name as the argument, with spaces where appropriate."
		});
	} else {
		var out = "";
		for (var move of moves) {
			if (move.id === mov) {
				current = move;
			}
		}
		if (current === undefined) {
			bot.sendMessage({
				to: channelID,
				message: "I don't recognise that move, " + user + "!"
			});
		} else {
			for (var prop of moveprops){
				if (current[prop] !== undefined){
					out += propToString(prop) + ": " + current[prop] + "\n";
				}
			}
			bot.sendMessage({
				to: channelID,
				message: out
			});
		}
	}
}

function propToString(prop){
	switch (prop){
		case "name": return "Name";
		case "type": return "Type";
		case "cat": return "Category";
		case "power": return "Power";
		case "pp": return "PP";
		case "acc": return "Accuracy";
		case "effect": return "Effect";
		case "zeffect": return "Z-Move Effect";
		case "wiki": return "Wiki Link";
		default: return "Error";
	}
}

//returns item info, see pokemon function
function item(user, userID, channelID, message, event) {
	var it = message.substring(6);
	var current;
	it = it.toLowerCase();
	if (it === "help") {
		bot.sendMessage({
			to: channelID,
			message: "This command serves information about items! Use the item's name as the argument, with spaces where appropriate, full stops."
		});
	} else {
		for (var ite of items) {
			if (ite.id === it) {
				current = ite;
			}
		}
		if (current === undefined) {
			bot.sendMessage({
				to: channelID,
				message: "I don't recognise that item, " + user + "!"
			});
		} else {
			out = "Name: " + current.name + "\nDescription: " + current.desc + "\nWiki Link: " + current.wiki;
			bot.sendMessage({
				to: channelID,
				message: out
			});
		}
	}
}

//returns ability info, see pokemon function
function ability(user, userID, channelID, message, event) {
	var ab = message.substring(9);
	var current;
	ab = ab.toLowerCase();
	if (ab === "help") {
		bot.sendMessage({
			to: channelID,
			message: "This command serves information about abilities! Use the ability's name as the argument, with spaces where appropriate."
		});
	} else {
		for (var abi of abilities) {
			if (abi.id === ab) {
				current = abi;
			}
		}
		if (current === undefined) {
			bot.sendMessage({
				to: channelID,
				message: "I don't recognise that ability, " + user + "!"
			});
		} else {
			out = "Name: " + current.name + "\nDescription: " + current.desc + "\nWiki Link: " + current.wiki;
			bot.sendMessage({
				to: channelID,
				message: out
			});
		}
	}
}

//returns info about type relations
function weak(user, userID, channelID, message, event) {
    var types = [{id: "normal", value: 0},
    {id: "fire", value: 0},
    {id: "fighting", value: 0},
    {id: "water", value: 0},
    {id: "flying", value: 0},
    {id: "grass", value: 0},
    {id: "poison", value: 0},
    {id: "electric", value: 0},
    {id: "ground", value: 0},
    {id: "psychic", value: 0},
    {id: "rock", value: 0},
    {id: "ice", value: 0},
    {id: "bug", value: 0},
    {id: "dragon", value: 0},
    {id: "ghost", value: 0},
    {id: "dark", value: 0},
    {id: "steel", value: 0},
    {id: "fairy", value: 0}];
    var weaks = ""; //strings for output later
    var res = "";
    var imms = "";
    var out = "";
    var current;
    var mon = message.substring(6);
    for (var mo of mons) {
        if (mo.id === mon) {
            current = mo;
        }
    }
    if (current === undefined) {
        bot.sendMessage({
            to: channelID,
            message: "I don't recognise that Pokémon, " + user + "!"
        });
    } else {
        var type = current.type.toLowerCase();
        if (type.indexOf("normal") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "ghost": type.value -= 10; break;
                    case "fighting": type.value++; break;
                }
            }
        }
        if (type.indexOf("fire") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "bug": typ.value--; break;
                    case "fairy": typ.value--; break;
                    case "fire": typ.value--; break;
                    case "grass": typ.value--; break;
                    case "ice": typ.value--; break;
                    case "steel": typ.value--; break;
                    case "ground": typ.value++; break;
                    case "rock": typ.value++; break;
                    case "water": typ.value++; break;
                }
            }
        }
        if (type.indexOf("fighting") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "bug": typ.value--; break;
                    case "dark": typ.value--; break;
                    case "rock": typ.value--; break;
                    case "fairy": typ.value++; break;
                    case "flying": typ.value++; break;
                    case "psychic": typ.value++; break;
                }
            }
        }
        if (type.indexOf("water") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "fire": typ.value--; break;
                    case "ice": typ.value--; break;
                    case "steel": typ.value--; break;
                    case "water": typ.value--; break;
                    case "electric": typ.value++; break;
                    case "grass": typ.value++; break;
                }
            }
        }
        if (type.indexOf("flying") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "bug": typ.value--; break;
                    case "fighting": typ.value--; break;
                    case "grass": typ.value--; break;
                    case "ground ": typ.value -= 10; break;
                    case "electric": typ.value++; break;
                    case "ice": typ.value++; break;
                    case "rock": typ.value++; break;
                }
            }
        }
        if (type.indexOf("grass") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "electric": typ.value--; break;
                    case "grass": typ.value--; break;
                    case "ground": typ.value--; break;
                    case "water": typ.value--; break;
                    case "bug": typ.value++; break;
                    case "fire": typ.value++; break;
                    case "flying": typ.value++; break;
                    case "ice": typ.value++; break;
                    case "poison": typ.value++; break;
                }
            }
        }
        if (type.indexOf("poison") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "bug": typ.value--; break;
                    case "fairy": typ.value--; break;
                    case "fighting": typ.value--; break;
                    case "grass": typ.value--; break;
                    case "poison": typ.value--; break;
                    case "ground": typ.value++; break;
                    case "psychic": typ.value++; break;
                }
            }
        }
        if (type.indexOf("electric") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "electric": typ.value--; break;
                    case "flying": typ.value--; break;
                    case "steel": typ.value--; break;
                    case "ground": typ.value++; break;
                }
            }
        }
        if (type.indexOf("ground") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "poison": typ.value--; break;
                    case "rock": typ.value--; break;
                    case "electric ": typ.value -= 10; break;
                    case "grass": typ.value++; break;
                    case "ice": typ.value++; break;
                    case "water": typ.value++; break;
                }
            }
        }
        if (type.indexOf("psychic") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "fighting": typ.value--; break;
                    case "psychic": typ.value--; break;
                    case "bug": typ.value++; break;
                    case "dark": typ.value++; break;
                    case "ghost": typ.value++; break;
                }
            }
        }
        if (type.indexOf("rock") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "fire": typ.value--; break;
                    case "flying": typ.value--; break;
                    case "normal": typ.value--; break;
                    case "poison": typ.value--; break;
                    case "fighting": typ.value++; break;
                    case "grass": typ.value++; break;
                    case "ground": typ.value++; break;
                    case "steel": typ.value++; break;
                    case "water": typ.value++; break;
                }
            }
        }
        if (type.indexOf("ice") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "ice": typ.value--; break;
                    case "fighting": typ.value++; break;
                    case "fire": typ.value++; break;
                    case "rock": typ.value++; break;
                    case "steel": typ.value++; break;
                }
            }
        }
        if (type.indexOf("bug") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "fighting": typ.value--; break;
                    case "grass": typ.value--; break;
                    case "ground": typ.value--; break;
                    case "fire": typ.value++; break;
                    case "flying": typ.value++; break;
                    case "rock": typ.value++; break;
                }
            }
        }
        if (type.indexOf("dragon") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "electric": typ.value--; break;
                    case "fire": typ.value--; break;
                    case "grass": typ.value--; break;
                    case "water": typ.value--; break;
                    case "dragon": typ.value++; break;
                    case "ice": typ.value++; break;
                    case "fairy": typ.value++; break;
                }
            }
        }
        if (type.indexOf("ghost") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "bug": typ.value--; break;
                    case "poison": typ.value--; break;
                    case "normal ": typ.value -= 10; break;
                    case "fighting ": typ.value -= 10; break;
                    case "ghost": typ.value++; break;
                    case "dark": typ.value++; break;
                }
            }
        }
        if (type.indexOf("dark") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "dark": typ.value--; break;
                    case "ghost": typ.value--; break;
                    case "psychic ": typ.value -= 10; break;
                    case "bug": typ.value++; break;
                    case "fighting": typ.value++; break;
                    case "fairy": typ.value++; break;
                }
            }
        }
        if (type.indexOf("steel") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "bug": typ.value--; break;
                    case "dragon": typ.value--; break;
                    case "fairy": typ.value--; break;
                    case "flying": typ.value--; break;
                    case "grass": typ.value--; break;
                    case "ice": typ.value--; break;
                    case "normal": typ.value--; break;
                    case "psychic": typ.value--; break;
                    case "rock": typ.value--; break;
                    case "steel": typ.value--; break;
                    case "poison ": typ.value -= 10; break;
                    case "fighting": typ.value++; break;
                    case "fire": typ.value++; break;
                    case "ground": typ.value++; break;
                }
            }
        }
        if (type.indexOf("fairy") !== -1) {
            for (var typ of types) {
                switch (typ.id) {
                    case "bug": typ.value--; break;
                    case "dark": typ.value--; break;
                    case "fighting": typ.value--; break;
                    case "dragon ": typ.value -= 10; break;
                    case "poison": typ.value++; break;
                    case "steel": typ.value++; break;
                }
            }
        }
        //output
        for (var typ of types) {
            if (typ.value === 2) {
                weaks += "**" + c(typ.id) + "**, ";
            }
            if (typ.value === 1) {
                weaks += c(typ.id) + ", ";
            }
            if (typ.value === -1) {
                res += c(typ.id) + ", ";
            }
            if (typ.value === -2) {
                res += "**" + c(typ.id) + "**, ";
            }
            if (typ.value < -2) {
                imms += c(typ.id) + ", ";
            }
        }
        imms = imms.slice(0, imms.length - 2);
        res = res.slice(0, res.length - 2);
        weaks = weaks.slice(0, weaks.length - 2);
        bot.sendMessage({
            to: channelID,
            message: "Pokémon: " + current.name + "\nWeaknesses: " + weaks + "\nResistances: " + res + "\nImmunities: " + imms
        });
    }
}

function rap(user, userID, channelID, message, event) {
	var out = "Electrode, Diglett, Nidoran, Mankey\n" +
		"Venusaur, Rattata, Fearow, Pidgey\n" +
		"Seaking, Jolteon, Dragonite, Gastly\n" +
		"Ponyta, Vaporeon, Poliwrath, Butterfree\n" +
		"Venomoth, Poliwag, Nidorino, Golduck\n" +
		"Ivysaur, Grimer, Victreebel, Moltres\n" +
		"Nidoking, Farfetch'd, Abra, Jigglypuff\n" +
		"Kingler, Rhyhorn, Clefable, Wigglytuff\n" +
		"Zubat, Primeape, Meowth, Onix\n" +
		"Geodude, Rapidash, Magneton, Snorlax\n" +
		"Gengar, Tangela, Goldeen, Spearow\n" +
		"Weezing, Seel, Gyarados, Slowbro\n" +
		"Kabuto, Persian, Paras, Horsea\n" +
		"Raticate, Magnemite, Kadabra, Weepinbell\n" +
		"Ditto, Cloyster, Caterpie, Sandshrew\n" +
		"Bulbasaur, Charmander, Golem, Pikachu\n" +
		"Alakazam, Doduo, Venonat, Machoke\n" +
		"Kangaskhan, Hypno, Electabuzz, Flareon\n" +
		"Blastoise, Poliwhirl, Oddish, Drowzee\n" +
		"Raichu, Nidoqueen, Bellsprout, Starmie\n" +
		"Metapod, Marowak, Kakuna, Clefairy\n" +
		"Dodrio, Seadra, Vileplume, Krabby\n" +
		"Lickitung, Tauros, Weedle, Nidoran\n" +
		"Machop, Shellder, Porygon, Hitmonchan\n" +
		"Articuno, Jynx, Nidorina, Beedrill\n" +
		"Haunter, Squirtle, Chansey (Pokémon!)\n" +
		"Parasect, Exeggcute, Muk, Dewgong\n" +
		"Pidgeotto, Lapras, Vulpix, Rhydon\n" +
		"Charizard, Machamp, Pinsir, Koffing\n" +
		"Dugtrio, Golbat, Staryu, Magikarp\n" +
		"Ninetales, Ekans, Omastar\n" +
		"Scyther, Tentacool, Dragonair, Magmar\n" +
		"Sandslash, Hitmonlee, Psyduck, Arcanine\n" +
		"Eevee, Exeggutor, Kabutops, Zapdos\n" +
		"Dratini, Growlithe, Mr. Mime, Cubone\n" +
		"Graveler, Voltorb, Gloom - We're almost home!\n" +
		"Charmeleon, Wartortle\n" +
		"Mewtwo, Tentacruel, Aerodactyl\n" +
		"Omanyte, Slowpoke\n" +
		"Pidgeot, Arbok - That's all, folks!";
	bot.sendMessage({
		to: channelID,
		message: "" + out
	});
}

function typechart(user, userID, channelID, message, event) {
	bot.sendMessage({
		to: channelID,
		message: "http://i.imgur.com/fylyCdC.png"
	});
}

function evolution(user, userID, channelID, message, event) {
	if (message !== "!evolution confirm spoiler") {
		bot.sendMessage({
			to: channelID,
			message: "Spoiler alert! This command displays an image that spoils aspects of the new Sun and Moon! If you're sure you, and everyone else in the channel, are fine with seeing it, type '!evolution confirm spoiler'."
		});
	} else {
		bot.sendMessage({
			to: channelID,
			message: "https://a.pomf.cat/lmesct.png"
		});
	}
}

function qr(user, userID, channelID, message, event) {
	bot.sendMessage({
		to: channelID,
		message: "http://imgur.com/a/EFOqs"
	});
}

function nature(user, userID, channelID, message, event) {
	bot.sendMessage({
		to: channelID,
		message: "http://faqs.neoseeker.com/Games/DS/pokemon_bw_2_nature.png"
	});
}

function c(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

var mons = [{id: "bulbasaur", name: "Bulbasaur", dex: 1, alola: -1, type: "Grass/Poison", ability: "Overgrow/None/Chlorophyll", wiki: "http://www.serebii.net/pokedex-sm/001.shtml", image: "http://www.serebii.net/sunmoon/pokemon/001.png"},
 {id: "ivysaur", name: "Ivysaur", dex: 2, alola: -1, type: "Grass/Poison", ability: "Overgrow/None/Chlorophyll", wiki: "http://www.serebii.net/pokedex-sm/002.shtml", image: "http://www.serebii.net/sunmoon/pokemon/002.png"},
 {id: "venusaur", name: "Venusaur", dex: 3, alola: -1, type: "Grass/Poison", ability: "Overgrow/None/Chlorophyll", wiki: "http://www.serebii.net/pokedex-sm/003.shtml", image: "http://www.serebii.net/sunmoon/pokemon/003.png"},
 {id: "charmander", name: "Charmander", dex: 4, alola: -1, type: "Fire", ability: "Blaze/None/Solar Power", wiki: "http://www.serebii.net/pokedex-sm/004.shtml", image: "http://www.serebii.net/sunmoon/pokemon/004.png"},
 {id: "charmeleon", name: "Charmeleon", dex: 5, alola: -1, type: "Fire", ability: "Blaze/None/Solar Power", wiki: "http://www.serebii.net/pokedex-sm/005.shtml", image: "http://www.serebii.net/sunmoon/pokemon/005.png"},
 {id: "charizard", name: "Charizard", dex: 6, alola: -1, type: "Fire/Flying", ability: "Blaze/None/Solar Power", wiki: "http://www.serebii.net/pokedex-sm/006.shtml", image: "http://www.serebii.net/sunmoon/pokemon/006.png"},
 {id: "squirtle", name: "Squirtle", dex: 7, alola: -1, type: "Water", ability: "Torrent/None/Rain Dish", wiki: "http://www.serebii.net/pokedex-sm/007.shtml", image: "http://www.serebii.net/sunmoon/pokemon/007.png"},
 {id: "wartortle", name: "Wartortle", dex: 8, alola: -1, type: "Water", ability: "Torrent/None/Rain Dish", wiki: "http://www.serebii.net/pokedex-sm/008.shtml", image: "http://www.serebii.net/sunmoon/pokemon/008.png"},
 {id: "blastoise", name: "Blastoise", dex: 9, alola: -1, type: "Water", ability: "Torrent/None/Rain Dish", wiki: "http://www.serebii.net/pokedex-sm/009.shtml", image: "http://www.serebii.net/sunmoon/pokemon/009.png"},
 {id: "caterpie", name: "Caterpie", dex: 10, alola: 15, type: "Bug", ability: "Shield Dust/None/Run Away", wiki: "http://www.serebii.net/pokedex-sm/010.shtml", image: "http://www.serebii.net/sunmoon/pokemon/010.png"},
 {id: "metapod", name: "Metapod", dex: 11, alola: 18, type: "Bug", ability: "Shed Skin", wiki: "http://www.serebii.net/pokedex-sm/011.shtml", image: "http://www.serebii.net/sunmoon/pokemon/011.png"},
 {id: "butterfree", name: "Butterfree", dex: 12, alola: 19, type: "Bug/Flying", ability: "Compound Eyes/None/Tinted Lens", wiki: "http://www.serebii.net/pokedex-sm/012.shtml", image: "http://www.serebii.net/sunmoon/pokemon/012.png"},
 {id: "weedle", name: "Weedle", dex: 13, alola: -1, type: "Bug/Poison", ability: "Shield Dust/None/Run Away", wiki: "http://www.serebii.net/pokedex-sm/013.shtml", image: "http://www.serebii.net/sunmoon/pokemon/013.png"},
 {id: "kakuna", name: "Kakuna", dex: 14, alola: -1, type: "Bug/Poison", ability: "Shed Skin", wiki: "http://www.serebii.net/pokedex-sm/014.shtml", image: "http://www.serebii.net/sunmoon/pokemon/014.png"},
 {id: "beedrill", name: "Beedrill", dex: 15, alola: -1, type: "Bug/Poison", ability: "Swarm/None/Sniper", wiki: "http://www.serebii.net/pokedex-sm/015.shtml", image: "http://www.serebii.net/sunmoon/pokemon/015.png"},
 {id: "pidgey", name: "Pidgey", dex: 16, alola: -1, type: "Normal/Flying", ability: "Keen Eye/Tangled Feet/Big Pecks", wiki: "http://www.serebii.net/pokedex-sm/016.shtml", image: "http://www.serebii.net/sunmoon/pokemon/016.png"},
 {id: "pidgeotto", name: "Pidgeotto", dex: 17, alola: -1, type: "Normal/Flying", ability: "Keen Eye/Tangled Feet/Big Pecks", wiki: "http://www.serebii.net/pokedex-sm/017.shtml", image: "http://www.serebii.net/sunmoon/pokemon/017.png"},
 {id: "pidgeot", name: "Pidgeot", dex: 18, alola: -1, type: "Normal/Flying", ability: "Keen Eye/Tangled Feet/Big Pecks", wiki: "http://www.serebii.net/pokedex-sm/018.shtml", image: "http://www.serebii.net/sunmoon/pokemon/018.png"},
 {id: "rattata", name: "Rattata", dex: 19, alola: 13, type: "Normal", ability: "Run Away/Guts/Hustle", wiki: "http://www.serebii.net/pokedex-sm/019.shtml", image: "http://www.serebii.net/sunmoon/pokemon/019.png"},
 {id: "raticate", name: "Raticate", dex: 20, alola: 14, type: "Normal", ability: "Run Away/Guts/Hustle", wiki: "http://www.serebii.net/pokedex-sm/020.shtml", image: "http://www.serebii.net/sunmoon/pokemon/020.png"},
 {id: "alolan rattata", name: "Rattata", dex: 19, alola: 13, type: "Dark/Normal", ability: "Gluttony/Hustle/Thick Fat", wiki: "http://www.serebii.net/pokedex-sm/019.shtml", image: "http://www.serebii.net/sunmoon/pokemon/019-a.png"},
 {id: "alolan raticate", name: "Alolan Raticate", dex: 20, alola: 14, type: "Dark Normal", ability: "Gluttony/Hustle/Thick Fat", wiki: "http://www.serebii.net/pokedex-sm/020.shtml", image: "http://www.serebii.net/sunmoon/pokemon/020-a.png"},
 {id: "spearow", name: "Spearow", dex: 21, alola: 59, type: "Normal/Flying", ability: "Keen Eye/None/Sniper", wiki: "http://www.serebii.net/pokedex-sm/021.shtml", image: "http://www.serebii.net/sunmoon/pokemon/021.png"},
 {id: "fearow", name: "Fearow", dex: 22, alola: 60, type: "Normal/Flying", ability: "Keen Eye/None/Sniper", wiki: "http://www.serebii.net/pokedex-sm/022.shtml", image: "http://www.serebii.net/sunmoon/pokemon/022.png"},
 {id: "ekans", name: "Ekans", dex: 23, alola: -1, type: "Poison", ability: "Intimidate/Shed Skin/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/023.shtml", image: "http://www.serebii.net/sunmoon/pokemon/023.png"},
 {id: "arbok", name: "Arbok", dex: 24, alola: -1, type: "Poison", ability: "Intimidate/Shed Skin/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/024.shtml", image: "http://www.serebii.net/sunmoon/pokemon/024.png"},
 {id: "pikachu", name: "Pikachu", dex: 25, alola: 21, type: "Electric", ability: "Static/None/Lightning Rod", wiki: "http://www.serebii.net/pokedex-sm/025.shtml", image: "http://www.serebii.net/sunmoon/pokemon/025.png"},
 {id: "raichu", name: "Raichu", dex: 26, alola: 22, type: "Electric", ability: "Static/None/Lightning Rod", wiki: "http://www.serebii.net/pokedex-sm/026.shtml", image: "http://www.serebii.net/sunmoon/pokemon/026.png"},
 {id: "alolan raichu", name: "Alolan Raichu", dex: 26, alola: 22, type: "Electric/Psychic", ability: "Surge Surfer", wiki: "http://www.serebii.net/pokedex-sm/026.shtml", image: "http://www.serebii.net/sunmoon/pokemon/026-a.png"},
 {id: "sandshrew", name: "Sandshrew", dex: 27, alola: 251, type: "Ground", ability: "Sand Veil/None/Sand Rush", wiki: "http://www.serebii.net/pokedex-sm/027.shtml", image: "http://www.serebii.net/sunmoon/pokemon/027.png"},
 {id: "sandslash", name: "Sandslash", dex: 28, alola: 252, type: "Ground", ability: "Sand Veil/None/Sand Rush", wiki: "http://www.serebii.net/pokedex-sm/028.shtml", image: "http://www.serebii.net/sunmoon/pokemon/028.png"},
 {id: "alolan sandshrew", name: "Alolan Sandshrew", dex: 27, alola: 251, type: "Ice/Steel", ability: "Snow Cloak/None/Slush Rush", wiki: "http://www.serebii.net/pokedex-sm/027.shtml", image: "http://www.serebii.net/sunmoon/pokemon/027-a.png"},
 {id: "alolan sandslash", name: "Alolan Sandslash", dex: 28, alola: 252, type: "Ice/Steel", ability: "Snow Cloak/None/Slush Rush", wiki: "http://www.serebii.net/pokedex-sm/028.shtml", image: "http://www.serebii.net/sunmoon/pokemon/028-a.png"},
 {id: "nidoranf", name: "Nidoran♀", dex: 29, alola: -1, type: "Poison", ability: "Poison Point/Rivalry/Hustle", wiki: "http://www.serebii.net/pokedex-sm/029.shtml", image: "http://www.serebii.net/sunmoon/pokemon/029.png"},
 {id: "nidorina", name: "Nidorina", dex: 30, alola: -1, type: "Poison", ability: "Poison Point/Rivalry/Hustle", wiki: "http://www.serebii.net/pokedex-sm/030.shtml", image: "http://www.serebii.net/sunmoon/pokemon/030.png"},
 {id: "nidoqueen", name: "Nidoqueen", dex: 31, alola: -1, type: "Poison/Ground", ability: "Poison Point/Rivalry/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/031.shtml", image: "http://www.serebii.net/sunmoon/pokemon/031.png"},
 {id: "nidoranm", name: "Nidoran♂", dex: 32, alola: -1, type: "Poison", ability: "Poison Point/Rivalry/Hustle", wiki: "http://www.serebii.net/pokedex-sm/032.shtml", image: "http://www.serebii.net/sunmoon/pokemon/032.png"},
 {id: "nidorino", name: "Nidorino", dex: 33, alola: -1, type: "Poison", ability: "Poison Point/Rivalry/Hustle", wiki: "http://www.serebii.net/pokedex-sm/033.shtml", image: "http://www.serebii.net/sunmoon/pokemon/033.png"},
 {id: "nidoking", name: "Nidoking", dex: 34, alola: -1, type: "Poison/Ground", ability: "Poison Point/Rivalry/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/034.shtml", image: "http://www.serebii.net/sunmoon/pokemon/034.png"},
 {id: "clefairy", name: "Clefairy", dex: 35, alola: 211, type: "Fairy", ability: "Cute Charm/Magic Guard/Friend Guard", wiki: "http://www.serebii.net/pokedex-sm/035.shtml", image: "http://www.serebii.net/sunmoon/pokemon/035.png"},
 {id: "clefable", name: "Clefable", dex: 36, alola: 212, type: "Fairy", ability: "Cute Charm/Magic Guard/Unaware", wiki: "http://www.serebii.net/pokedex-sm/036.shtml", image: "http://www.serebii.net/sunmoon/pokemon/036.png"},
 {id: "vulpix", name: "Vulpix", dex: 37, alola: 253, type: "Fire", ability: "Flash Fire/None/Drought", wiki: "http://www.serebii.net/pokedex-sm/037.shtml", image: "http://www.serebii.net/sunmoon/pokemon/037.png"},
 {id: "ninetales", name: "Ninetales", dex: 38, alola: 254, type: "Fire", ability: "Flash Fire/None/Drought", wiki: "http://www.serebii.net/pokedex-sm/038.shtml", image: "http://www.serebii.net/sunmoon/pokemon/038.png"},
 {id: "alolan vulpix", name: "Alolan Vulpix", dex: 37, alola: 253, type: "Ice", ability: "Snow Cloak/None/Snow Warning", wiki: "http://www.serebii.net/pokedex-sm/037.shtml", image: "http://www.serebii.net/sunmoon/pokemon/037-a.png"},
 {id: "alolan ninetales", name: "Alolan Ninetales", dex: 38, alola: 254, type: "Ice/Fairy", ability: "Snow Cloak/None/Snow Warning", wiki: "http://www.serebii.net/pokedex-sm/038.shtml", image: "http://www.serebii.net/sunmoon/pokemon/038-a.png"},
 {id: "jigglypuff", name: "Jigglypuff", dex: 39, alola: 135, type: "Normal/Fairy", ability: "Cute Charm/Competitive/Friend Guard", wiki: "http://www.serebii.net/pokedex-sm/039.shtml", image: "http://www.serebii.net/sunmoon/pokemon/039.png"},
 {id: "wigglytuff", name: "Wigglytuff", dex: 40, alola: 136, type: "Normal/Fairy", ability: "Cute Charm/Competitive/Frisk", wiki: "http://www.serebii.net/pokedex-sm/040.shtml", image: "http://www.serebii.net/sunmoon/pokemon/040.png"},
 {id: "zubat", name: "Zubat", dex: 41, alola: 68, type: "Poison/Flying", ability: "Inner Focus/None/Infiltrator", wiki: "http://www.serebii.net/pokedex-sm/041.shtml", image: "http://www.serebii.net/sunmoon/pokemon/041.png"},
 {id: "golbat", name: "Golbat", dex: 42, alola: 69, type: "Poison/Flying", ability: "Inner Focus/None/Infiltrator", wiki: "http://www.serebii.net/pokedex-sm/042.shtml", image: "http://www.serebii.net/sunmoon/pokemon/042.png"},
 {id: "oddish", name: "Oddish", dex: 43, alola: -1, type: "Grass/Poison", ability: "Chlorophyll/None/Run Away", wiki: "http://www.serebii.net/pokedex-sm/043.shtml", image: "http://www.serebii.net/sunmoon/pokemon/043.png"},
 {id: "gloom", name: "Gloom", dex: 44, alola: -1, type: "Grass/Poison", ability: "Chlorophyll/None/Stench", wiki: "http://www.serebii.net/pokedex-sm/044.shtml", image: "http://www.serebii.net/sunmoon/pokemon/044.png"},
 {id: "vileplume", name: "Vileplume", dex: 45, alola: -1, type: "Grass/Poison", ability: "Chlorophyll/None/Effect Spore", wiki: "http://www.serebii.net/pokedex-sm/045.shtml", image: "http://www.serebii.net/sunmoon/pokemon/045.png"},
 {id: "paras", name: "Paras", dex: 46, alola: 148, type: "Bug/Grass", ability: "Effect Spore/Dry Skin/Damp", wiki: "http://www.serebii.net/pokedex-sm/046.shtml", image: "http://www.serebii.net/sunmoon/pokemon/046.png"},
 {id: "parasect", name: "Parasect", dex: 47, alola: 148, type: "Bug/Grass", ability: "Effect Spore/Dry Skin/Damp", wiki: "http://www.serebii.net/pokedex-sm/047.shtml", image: "http://www.serebii.net/sunmoon/pokemon/047.png"},
 {id: "venonat", name: "Venonat", dex: 48, alola: -1, type: "Bug/Poison", ability: "Compound Eyes/Tinted Lens/Run Away", wiki: "http://www.serebii.net/pokedex-sm/048.shtml", image: "http://www.serebii.net/sunmoon/pokemon/048.png"},
 {id: "venomoth", name: "Venomoth", dex: 49, alola: -1, type: "Bug/Poison", ability: "Shield Dust/Tinted Lens/Wonder Skin", wiki: "http://www.serebii.net/pokedex-sm/049.shtml", image: "http://www.serebii.net/sunmoon/pokemon/049.png"},
 {id: "diglett", name: "Diglett", dex: 50, alola: 57, type: "Ground", ability: "Sand Veil/Arena Trap/Sand Force", wiki: "http://www.serebii.net/pokedex-sm/050.shtml", image: "http://www.serebii.net/sunmoon/pokemon/050.png"},
 {id: "dugtrio", name: "Dugtrio", dex: 51, alola: 58, type: "Ground", ability: "Sand Veil/Arena Trap/Sand Force", wiki: "http://www.serebii.net/pokedex-sm/051.shtml", image: "http://www.serebii.net/sunmoon/pokemon/051.png"},
 {id: "alolan diglett", name: "Alolan Diglett", dex: 50, alola: 57, type: "Ground/Steel", ability: "Sand Veil/Tangling Hair/Sand Force", wiki: "http://www.serebii.net/pokedex-sm/050.shtml", image: "http://www.serebii.net/sunmoon/pokemon/050-a.png"},
 {id: "alolan dugtrio", name: "Alolan Dugtrio", dex: 51, alola: 58, type: "Ground/Steel", ability: "Sand Veil/Tangling Hair/Sand Force", wiki: "http://www.serebii.net/pokedex-sm/051.shtml", image: "http://www.serebii.net/sunmoon/pokemon/051-a.png"},
 {id: "meowth", name: "Meowth", dex: 52, alola: 37, type: "Normal", ability: "Pickup/Technician/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/052.shtml", image: "http://www.serebii.net/sunmoon/pokemon/052.png"},
 {id: "persian", name: "Persian", dex: 53, alola: 38, type: "Normal", ability: "Limber/Technician/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/053.shtml", image: "http://www.serebii.net/sunmoon/pokemon/053.png"},
 {id: "alolan meowth", name: "Alolan Meowth", dex: 52, alola: 37, type: "Dark", ability: "Pickup/Technician/Rattled", wiki: "http://www.serebii.net/pokedex-sm/052.shtml", image: "http://www.serebii.net/sunmoon/pokemon/052-a.png"},
 {id: "alolan persian", name: "Alolan Persian", dex: 53, alola: 38, type: "Dark", ability: "Limber/Technician/Rattled", wiki: "http://www.serebii.net/pokedex-sm/053.shtml", image: "http://www.serebii.net/sunmoon/pokemon/053-a.png"},
 {id: "psyduck", name: "Psyduck", dex: 54, alola: 89, type: "Water", ability: "Damp/Cloud Nine/Swift Swim", wiki: "http://www.serebii.net/pokedex-sm/054.shtml", image: "http://www.serebii.net/sunmoon/pokemon/054.png"},
 {id: "golduck", name: "Golduck", dex: 55, alola: 90, type: "Water", ability: "Damp/Cloud Nine/Swift Swim", wiki: "http://www.serebii.net/pokedex-sm/055.shtml", image: "http://www.serebii.net/sunmoon/pokemon/055.png"},
 {id: "mankey", name: "Mankey", dex: 56, alola: 79, type: "Fighting", ability: "Vital Spirit/Anger Point/Defiant", wiki: "http://www.serebii.net/pokedex-sm/056.shtml", image: "http://www.serebii.net/sunmoon/pokemon/056.png"},
 {id: "primeape", name: "Primeape", dex: 57, alola: 80, type: "Fighting", ability: "Vital Spirit/Anger Point/Defiant", wiki: "http://www.serebii.net/pokedex-sm/057.shtml", image: "http://www.serebii.net/sunmoon/pokemon/057.png"},
 {id: "growlithe", name: "Growlithe", dex: 58, alola: 42, type: "Fire", ability: "Intimidate/Flash Fire/Justified", wiki: "http://www.serebii.net/pokedex-sm/058.shtml", image: "http://www.serebii.net/sunmoon/pokemon/058.png"},
 {id: "arcanine", name: "Arcanine", dex: 59, alola: 43, type: "Fire", ability: "Intimidate/Flash Fire/Justified", wiki: "http://www.serebii.net/pokedex-sm/059.shtml", image: "http://www.serebii.net/sunmoon/pokemon/059.png"},
 {id: "poliwag", name: "Poliwag", dex: 60, alola: 149, type: "Water", ability: "Water Absorb/Damp/Swift Swim", wiki: "http://www.serebii.net/pokedex-sm/060.shtml", image: "http://www.serebii.net/sunmoon/pokemon/060.png"},
 {id: "poliwhirl", name: "Poliwhirl", dex: 61, alola: 150, type: "Water", ability: "Water Absorb/Damp/Swift Swim", wiki: "http://www.serebii.net/pokedex-sm/061.shtml", image: "http://www.serebii.net/sunmoon/pokemon/061.png"},
 {id: "poliwrath", name: "Poliwrath", dex: 62, alola: 151, type: "Water/Fighting", ability: "Water Absorb/Damp/Swift Swim", wiki: "http://www.serebii.net/pokedex-sm/062.shtml", image: "http://www.serebii.net/sunmoon/pokemon/062.png"},
 {id: "abra", name: "Abra", dex: 63, alola: 59, type: "Psychic", ability: "Synchronize/Inner Focus/Magic Guard", wiki: "http://www.serebii.net/pokedex-sm/063.shtml", image: "http://www.serebii.net/sunmoon/pokemon/063.png"},
 {id: "kadabra", name: "Kadabra", dex: 64, alola: 35, type: "Psychic", ability: "Synchronize/Inner Focus/Magic Guard", wiki: "http://www.serebii.net/pokedex-sm/064.shtml", image: "http://www.serebii.net/sunmoon/pokemon/064.png"},
 {id: "alakazam", name: "Alakazam", dex: 65, alola: 36, type: "Psychic", ability: "Synchronize/Inner Focus/Magic Guard", wiki: "http://www.serebii.net/pokedex-sm/065.shtml", image: "http://www.serebii.net/sunmoon/pokemon/065.png"},
 {id: "machop", name: "Machop", dex: 66, alola: 95, type: "Fighting", ability: "Guts/No Guard/Steadfast", wiki: "http://www.serebii.net/pokedex-sm/066.shtml", image: "http://www.serebii.net/sunmoon/pokemon/066.png"},
 {id: "machoke", name: "Machoke", dex: 67, alola: 96, type: "Fighting", ability: "Guts/No Guard/Steadfast", wiki: "http://www.serebii.net/pokedex-sm/067.shtml", image: "http://www.serebii.net/sunmoon/pokemon/067.png"},
 {id: "machamp", name: "Machamp", dex: 68, alola: 97, type: "Fighting", ability: "Guts/No Guard/Steadfast", wiki: "http://www.serebii.net/pokedex-sm/068.shtml", image: "http://www.serebii.net/sunmoon/pokemon/068.png"},
 {id: "bellsprout", name: "Bellsprout", dex: 69, alola: -1, type: "Grass/Poison", ability: "Chlorophyll/None/Gluttony", wiki: "http://www.serebii.net/pokedex-sm/069.shtml", image: "http://www.serebii.net/sunmoon/pokemon/069.png"},
 {id: "weepinbell", name: "Weepinbell", dex: 70, alola: -1, type: "Grass/Poison", ability: "Chlorophyll/None/Gluttony", wiki: "http://www.serebii.net/pokedex-sm/070.shtml", image: "http://www.serebii.net/sunmoon/pokemon/070.png"},
 {id: "victreebel", name: "Victreebel", dex: 71, alola: -1, type: "Grass/Poison", ability: "Chlorophyll/None/Gluttony", wiki: "http://www.serebii.net/pokedex-sm/071.shtml", image: "http://www.serebii.net/sunmoon/pokemon/071.png"},
 {id: "tentacool", name: "Tentacool", dex: 72, alola: 106, type: "Water/Poison", ability: "Clear Body/Liquid Ooze/Rain Dish", wiki: "http://www.serebii.net/pokedex-sm/072.shtml", image: "http://www.serebii.net/sunmoon/pokemon/072.png"},
 {id: "tentacruel", name: "Tentacruel", dex: 73, alola: 107, type: "Water/Poison", ability: "Clear Body/Liquid Ooze/Rain Dish", wiki: "http://www.serebii.net/pokedex-sm/073.shtml", image: "http://www.serebii.net/sunmoon/pokemon/073.png"},
 {id: "geodude", name: "Geodude", dex: 74, alola: 229, type: "Rock/Ground", ability: "Rock Head/Sturdy/Sand Veil", wiki: "http://www.serebii.net/pokedex-sm/074.shtml", image: "http://www.serebii.net/sunmoon/pokemon/074.png"},
 {id: "graveler", name: "Graveler", dex: 75, alola: 230, type: "Rock/Ground", ability: "Rock Head/Sturdy/Sand Veil", wiki: "http://www.serebii.net/pokedex-sm/075.shtml", image: "http://www.serebii.net/sunmoon/pokemon/075.png"},
 {id: "golem", name: "Golem", dex: 76, alola: 231, type: "Rock/Ground", ability: "Rock Head/Sturdy/Sand Veil", wiki: "http://www.serebii.net/pokedex-sm/076.shtml", image: "http://www.serebii.net/sunmoon/pokemon/076.png"},
 {id: "alolan geodude", name: "Alolan Geodude", dex: 74, alola: 229, type: "Rock/Electric", ability: "Magnet Pull/Sturdy/Galvanise", wiki: "http://www.serebii.net/pokedex-sm/074.shtml", image: "http://www.serebii.net/sunmoon/pokemon/074.png-a"},
 {id: "alolan graveler", name: "Alolan Graveler", dex: 75, alola: 230, type: "Rock/Electric", ability: "Magnet Pull/Sturdy/Galvanise", wiki: "http://www.serebii.net/pokedex-sm/075.shtml", image: "http://www.serebii.net/sunmoon/pokemon/075-a.png"},
 {id: "alolan golem", name: "Alolan Golem", dex: 76, alola: 231, type: "Rock/Electric", ability: "Magnet Pull/Sturdy/Galvanise", wiki: "http://www.serebii.net/pokedex-sm/076.shtml", image: "http://www.serebii.net/sunmoon/pokemon/076-a.png"},
 {id: "ponyta", name: "Ponyta", dex: 77, alola: -1, type: "Fire", ability: "Run Away/Flash Fire/Flame Body", wiki: "http://www.serebii.net/pokedex-sm/077.shtml", image: "http://www.serebii.net/sunmoon/pokemon/077.png"},
 {id: "rapidash", name: "Rapidash", dex: 78, alola: -1, type: "Fire", ability: "Run Away/Flash Fire/Flame Body", wiki: "http://www.serebii.net/pokedex-sm/078.shtml", image: "http://www.serebii.net/sunmoon/pokemon/078.png"},
 {id: "slowpoke", name: "Slowpoke", dex: 79, alola: 31, type: "Water/Psychic", ability: "Oblivious/Own Tempo/Regenerator", wiki: "http://www.serebii.net/pokedex-sm/079.shtml", image: "http://www.serebii.net/sunmoon/pokemon/079.png"},
 {id: "slowbro", name: "Slowbro", dex: 80, alola: 38, type: "Water/Psychic", ability: "Oblivious/Own Tempo/Regenerator", wiki: "http://www.serebii.net/pokedex-sm/080.shtml", image: "http://www.serebii.net/sunmoon/pokemon/080.png"},
 {id: "magnemite", name: "Magnemite", dex: 81, alola: 39, type: "Electric/Steel", ability: "Magnet Pull/Sturdy/Analytic", wiki: "http://www.serebii.net/pokedex-sm/081.shtml", image: "http://www.serebii.net/sunmoon/pokemon/081.png"},
 {id: "magneton", name: "Magneton", dex: 82, alola: 48, type: "Electric/Steel", ability: "Magnet Pull/Sturdy/Analytic", wiki: "http://www.serebii.net/pokedex-sm/082.shtml", image: "http://www.serebii.net/sunmoon/pokemon/082.png"},
 {id: "farfetch'd", name: "Farfetch'd", dex: 83, alola: -1, type: "Normal/Flying", ability: "Keen Eye/Inner Focus/Defiant", wiki: "http://www.serebii.net/pokedex-sm/083.shtml", image: "http://www.serebii.net/sunmoon/pokemon/083.png"},
 {id: "doduo", name: "Doduo", dex: 84, alola: -1, type: "Normal/Flying", ability: "Run Away/Early Bird/Tangled Feet", wiki: "http://www.serebii.net/pokedex-sm/084.shtml", image: "http://www.serebii.net/sunmoon/pokemon/084.png"},
 {id: "dodrio", name: "Dodrio", dex: 85, alola: -1, type: "Normal/Flying", ability: "Run Away/Early Bird/Tangled Feet", wiki: "http://www.serebii.net/pokedex-sm/085.shtml", image: "http://www.serebii.net/sunmoon/pokemon/085.png"},
 {id: "seel", name: "Seel", dex: 86, alola: -1, type: "Water", ability: "Thick Fat/Hydration/Ice Body", wiki: "http://www.serebii.net/pokedex-sm/086.shtml", image: "http://www.serebii.net/sunmoon/pokemon/086.png"},
 {id: "dewgong", name: "Dewgong", dex: 87, alola: -1, type: "Water/Ice", ability: "Thick Fat/Hydration/Ice Body", wiki: "http://www.serebii.net/pokedex-sm/087.shtml", image: "http://www.serebii.net/sunmoon/pokemon/087.png"},
 {id: "grimer", name: "Grimer", dex: 88, alola: 40, type: "Poison", ability: "Stench/Sticky Hold/Poison Touch", wiki: "http://www.serebii.net/pokedex-sm/088.shtml", image: "http://www.serebii.net/sunmoon/pokemon/088.png"},
 {id: "muk", name: "Muk", dex: 89, alola: 41, type: "Poison", ability: "Stench/Sticky Hold/Poison Touch", wiki: "http://www.serebii.net/pokedex-sm/089.shtml", image: "http://www.serebii.net/sunmoon/pokemon/089.png"},
 {id: "alolan grimer", name: "Alolan Grimer", dex: 88, alola: 40, type: "Poison/Dark", ability: "Poison Touch/Gluttony/Power of Alchemy", wiki: "http://www.serebii.net/pokedex-sm/088.shtml", image: "http://www.serebii.net/sunmoon/pokemon/088-a.png"},
 {id: "alolan muk", name: "Alolan Muk", dex: 89, alola: 41, type: "Poison/Dark", ability: "Poison Touch/Gluttony/Power of Alchemy", wiki: "http://www.serebii.net/pokedex-sm/089.shtml", image: "http://www.serebii.net/sunmoon/pokemon/089-a.png"},
 {id: "shellder", name: "Shellder", dex: 90, alola: 115, type: "Water", ability: "Shell Armor/Skill Link/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/090.shtml", image: "http://www.serebii.net/sunmoon/pokemon/090.png"},
 {id: "cloyster", name: "Cloyster", dex: 91, alola: 116, type: "Water/Ice", ability: "Shell Armor/Skill Link/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/091.shtml", image: "http://www.serebii.net/sunmoon/pokemon/091.png"},
 {id: "gastly", name: "Gastly", dex: 92, alola: 49, type: "Ghost/Poison", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/092.shtml", image: "http://www.serebii.net/sunmoon/pokemon/092.png"},
 {id: "haunter", name: "Haunter", dex: 93, alola: 50, type: "Ghost/Poison", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/093.shtml", image: "http://www.serebii.net/sunmoon/pokemon/093.png"},
 {id: "gengar", name: "Gengar", dex: 94, alola: 51, type: "Ghost/Poison", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/094.shtml", image: "http://www.serebii.net/sunmoon/pokemon/094.png"},
 {id: "onix", name: "Onix", dex: 95, alola: -1, type: "Rock/Ground", ability: "Rock Head/Sturdy/Weak Armor", wiki: "http://www.serebii.net/pokedex-sm/095.shtml", image: "http://www.serebii.net/sunmoon/pokemon/095.png"},
 {id: "drowzee", name: "Drowzee", dex: 96, alola: 44, type: "Psychic", ability: "Insomnia/Forewarn/Inner Focus", wiki: "http://www.serebii.net/pokedex-sm/096.shtml", image: "http://www.serebii.net/sunmoon/pokemon/096.png"},
 {id: "hypno", name: "Hypno", dex: 97, alola: 45, type: "Psychic", ability: "Insomnia/Forewarn/Inner Focus", wiki: "http://www.serebii.net/pokedex-sm/097.shtml", image: "http://www.serebii.net/sunmoon/pokemon/097.png"},
 {id: "krabby", name: "Krabby", dex: 98, alola: -1, type: "Water", ability: "Hyper Cutter/Shell Armor/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/098.shtml", image: "http://www.serebii.net/sunmoon/pokemon/098.png"},
 {id: "kingler", name: "Kingler", dex: 99, alola: -1, type: "Water", ability: "Hyper Cutter/Shell Armor/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/099.shtml", image: "http://www.serebii.net/sunmoon/pokemon/099.png"},
 {id: "voltorb", name: "Voltorb", dex: 100, alola: -1, type: "Electric", ability: "Soundproof/Static/Aftermath", wiki: "http://www.serebii.net/pokedex-sm/100.shtml", image: "http://www.serebii.net/sunmoon/pokemon/100.png"},
 {id: "electrode", name: "Electrode", dex: 101, alola: -1, type: "Electric", ability: "Soundproof/Static/Aftermath", wiki: "http://www.serebii.net/pokedex-sm/101.shtml", image: "http://www.serebii.net/sunmoon/pokemon/101.png"},
 {id: "exeggcute", name: "Exeggcute", dex: 102, alola: 269, type: "Grass/Psychic", ability: "Chlorophyll/None/Harvest", wiki: "http://www.serebii.net/pokedex-sm/102.shtml", image: "http://www.serebii.net/sunmoon/pokemon/102.png"},
 {id: "exeggutor", name: "Exeggutor", dex: 103, alola: 270, type: "Grass/Psychic", ability: "Chlorophyll/None/Harvest", wiki: "http://www.serebii.net/pokedex-sm/103.shtml", image: "http://www.serebii.net/sunmoon/pokemon/103.png"},
 {id: "alolan exeggutor", name: "Alolan Exeggutor", dex: 103, alola: 270, type: "Grass/Dragon", ability: "Frisk/None/Harvest", wiki: "http://www.serebii.net/pokedex-sm/103.shtml", image: "http://www.serebii.net/sunmoon/pokemon/103-a.png"},
 {id: "cubone", name: "Cubone", dex: 104, alola: 163, type: "Ground", ability: "Rock Head/Lightning Rod/Battle Armor", wiki: "http://www.serebii.net/pokedex-sm/104.shtml", image: "http://www.serebii.net/sunmoon/pokemon/104.png"},
 {id: "marowak", name: "Marowak", dex: 105, alola: 164, type: "Ground", ability: "Rock Head/Lightning Rod/Battle Armor", wiki: "http://www.serebii.net/pokedex-sm/105.shtml", image: "http://www.serebii.net/sunmoon/pokemon/105.png"},
 {id: "alolan marowak", name: "Alolan Marowak", dex: 105, alola: 164, type: "Fire/Ghost", ability: "Rock Head/Lightning Rod/Battle Armor", wiki: "http://www.serebii.net/pokedex-sm/105.shtml", image: "http://www.serebii.net/sunmoon/pokemon/105-a.png"},
 {id: "hitmonlee", name: "Hitmonlee", dex: 106, alola: -1, type: "Fighting", ability: "Limber/Reckless/Unburden", wiki: "http://www.serebii.net/pokedex-sm/106.shtml", image: "http://www.serebii.net/sunmoon/pokemon/106.png"},
 {id: "hitmonchan", name: "Hitmonchan", dex: 107, alola: -1, type: "Fighting", ability: "Keen Eye/Iron Fist/Inner Focus", wiki: "http://www.serebii.net/pokedex-sm/107.shtml", image: "http://www.serebii.net/sunmoon/pokemon/107.png"},
 {id: "lickitung", name: "Lickitung", dex: 108, alola: -1, type: "Normal", ability: "Own Tempo/Oblivious/Cloud Nine", wiki: "http://www.serebii.net/pokedex-sm/108.shtml", image: "http://www.serebii.net/sunmoon/pokemon/108.png"},
 {id: "koffing", name: "Koffing", dex: 109, alola: -1, type: "Poison", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/109.shtml", image: "http://www.serebii.net/sunmoon/pokemon/109.png"},
 {id: "weezing", name: "Weezing", dex: 110, alola: -1, type: "Poison", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/110.shtml", image: "http://www.serebii.net/sunmoon/pokemon/110.png"},
 {id: "rhyhorn", name: "Rhyhorn", dex: 111, alola: -1, type: "Ground/Rock", ability: "Lightning Rod/Rock Head/Reckless", wiki: "http://www.serebii.net/pokedex-sm/111.shtml", image: "http://www.serebii.net/sunmoon/pokemon/111.png"},
 {id: "rhydon", name: "Rhydon", dex: 112, alola: -1, type: "Ground/Rock", ability: "Lightning Rod/Rock Head/Reckless", wiki: "http://www.serebii.net/pokedex-sm/112.shtml", image: "http://www.serebii.net/sunmoon/pokemon/112.png"},
 {id: "chansey", name: "Chansey", dex: 113, alola: 27, type: "Normal", ability: "Natural Cure/Serene Grace/Healer", wiki: "http://www.serebii.net/pokedex-sm/113.shtml", image: "http://www.serebii.net/sunmoon/pokemon/113.png"},
 {id: "tangela", name: "Tangela", dex: 114, alola: -1, type: "Grass", ability: "Chlorophyll/Leaf Guard/Regenerator", wiki: "http://www.serebii.net/pokedex-sm/114.shtml", image: "http://www.serebii.net/sunmoon/pokemon/114.png"},
 {id: "kangaskhan", name: "Kangaskhan", dex: 115, alola: 165, type: "Normal", ability: "Early Bird/Scrappy/Inner Focus", wiki: "http://www.serebii.net/pokedex-sm/115.shtml", image: "http://www.serebii.net/sunmoon/pokemon/115.png"},
 {id: "horsea", name: "Horsea", dex: 116, alola: -1, type: "Water", ability: "Swift Swim/Sniper/Damp", wiki: "http://www.serebii.net/pokedex-sm/116.shtml", image: "http://www.serebii.net/sunmoon/pokemon/116.png"},
 {id: "seadra", name: "Seadra", dex: 117, alola: -1, type: "Water", ability: "Poison Point/Sniper/Damp", wiki: "http://www.serebii.net/pokedex-sm/117.shtml", image: "http://www.serebii.net/sunmoon/pokemon/117.png"},
 {id: "goldeen", name: "Goldeen", dex: 118, alola: 153, type: "Water", ability: "Swift Swim/Water Veil/Lightning Rod", wiki: "http://www.serebii.net/pokedex-sm/118.shtml", image: "http://www.serebii.net/sunmoon/pokemon/118.png"},
 {id: "seaking", name: "Seaking", dex: 119, alola: 154, type: "Water", ability: "Swift Swim/Water Veil/Lightning Rod", wiki: "http://www.serebii.net/pokedex-sm/119.shtml", image: "http://www.serebii.net/sunmoon/pokemon/119.png"},
 {id: "staryu", name: "Staryu", dex: 120, alola: 184, type: "Water", ability: "Illuminate/Natural Cure/Analytic", wiki: "http://www.serebii.net/pokedex-sm/120.shtml", image: "http://www.serebii.net/sunmoon/pokemon/120.png"},
 {id: "starmie", name: "Starmie", dex: 121, alola: 185, type: "Water/Psychic", ability: "Illuminate/Natural Cure/Analytic", wiki: "http://www.serebii.net/pokedex-sm/121.shtml", image: "http://www.serebii.net/sunmoon/pokemon/121.png"},
 {id: "mr mime", name: "Mr. Mime", dex: 122, alola: -1, type: "Psychic/Fairy", ability: "Soundproof/Filter/Technician", wiki: "http://www.serebii.net/pokedex-sm/122.shtml", image: "http://www.serebii.net/sunmoon/pokemon/122.png"},
 {id: "scyther", name: "Scyther", dex: 123, alola: 275, type: "Bug/Flying", ability: "Swarm/Technician/Steadfast", wiki: "http://www.serebii.net/pokedex-sm/123.shtml", image: "http://www.serebii.net/sunmoon/pokemon/123.png"},
 {id: "jynx", name: "Jynx", dex: 124, alola: -1, type: "Ice/Psychic", ability: "Oblivious/Forewarn/Dry Skin", wiki: "http://www.serebii.net/pokedex-sm/124.shtml", image: "http://www.serebii.net/sunmoon/pokemon/124.png"},
 {id: "electabuzz", name: "Electabuzz", dex: 125, alola: 227, type: "Electric", ability: "Static/None/Vital Spirit", wiki: "http://www.serebii.net/pokedex-sm/125.shtml", image: "http://www.serebii.net/sunmoon/pokemon/125.png"},
 {id: "magmar", name: "Magmar", dex: 126, alola: 167, type: "Fire", ability: "Flame Body/None/Vital Spirit", wiki: "http://www.serebii.net/pokedex-sm/126.shtml", image: "http://www.serebii.net/sunmoon/pokemon/126.png"},
 {id: "pinsir", name: "Pinsir", dex: 127, alola: 175, type: "Bug", ability: "Hyper Cutter/Mold Breaker/Moxie", wiki: "http://www.serebii.net/pokedex-sm/127.shtml", image: "http://www.serebii.net/sunmoon/pokemon/127.png"},
 {id: "tauros", name: "Tauros", dex: 128, alola: 137, type: "Normal", ability: "Intimidate/Anger Point/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/128.shtml", image: "http://www.serebii.net/sunmoon/pokemon/128.png"},
 {id: "magikarp", name: "Magikarp", dex: 129, alola: 91, type: "Water", ability: "Swift Swim/None/Rattled", wiki: "http://www.serebii.net/pokedex-sm/129.shtml", image: "http://www.serebii.net/sunmoon/pokemon/129.png"},
 {id: "gyarados", name: "Gyarados", dex: 130, alola: 92, type: "Water/Flying", ability: "Intimidate/None/Moxie", wiki: "http://www.serebii.net/pokedex-sm/130.shtml", image: "http://www.serebii.net/sunmoon/pokemon/130.png"},
 {id: "lapras", name: "Lapras", dex: 131, alola: 268, type: "Water/Ice", ability: "Water Absorb/Shell Armor/Hydration", wiki: "http://www.serebii.net/pokedex-sm/131.shtml", image: "http://www.serebii.net/sunmoon/pokemon/131.png"},
 {id: "ditto", name: "Ditto", dex: 132, alola: 209, type: "Normal", ability: "Limber/None/Imposter", wiki: "http://www.serebii.net/pokedex-sm/132.shtml", image: "http://www.serebii.net/sunmoon/pokemon/132.png"},
 {id: "eevee", name: "Eevee", dex: 133, alola: 123, type: "Normal", ability: "Run Away/Adaptability/Anticipation", wiki: "http://www.serebii.net/pokedex-sm/133.shtml", image: "http://www.serebii.net/sunmoon/pokemon/133.png"},
 {id: "vaporeon", name: "Vaporeon", dex: 134, alola: 124, type: "Water", ability: "Water Absorb/None/Hydration", wiki: "http://www.serebii.net/pokedex-sm/134.shtml", image: "http://www.serebii.net/sunmoon/pokemon/134.png"},
 {id: "jolteon", name: "Jolteon", dex: 135, alola: 125, type: "Electric", ability: "Volt Absorb/None/Quick Feet", wiki: "http://www.serebii.net/pokedex-sm/135.shtml", image: "http://www.serebii.net/sunmoon/pokemon/135.png"},
 {id: "flareon", name: "Flareon", dex: 136, alola: 126, type: "Fire", ability: "Flash Fire/None/Guts", wiki: "http://www.serebii.net/pokedex-sm/136.shtml", image: "http://www.serebii.net/sunmoon/pokemon/136.png"},
 {id: "porygon", name: "Porygon", dex: 137, alola: 219, type: "Normal", ability: "Trace/Download/Analytic", wiki: "http://www.serebii.net/pokedex-sm/137.shtml", image: "http://www.serebii.net/sunmoon/pokemon/137.png"},
 {id: "omanyte", name: "Omanyte", dex: 138, alola: -1, type: "Rock/Water", ability: "Swift Swim/Shell Armor/Weak Armor", wiki: "http://www.serebii.net/pokedex-sm/138.shtml", image: "http://www.serebii.net/sunmoon/pokemon/138.png"},
 {id: "omastar", name: "Omastar", dex: 139, alola: -1, type: "Rock/Water", ability: "Swift Swim/Shell Armor/Weak Armor", wiki: "http://www.serebii.net/pokedex-sm/139.shtml", image: "http://www.serebii.net/sunmoon/pokemon/139.png"},
 {id: "kabuto", name: "Kabuto", dex: 140, alola: -1, type: "Rock/Water", ability: "Swift Swim/Battle Armor/Weak Armor", wiki: "http://www.serebii.net/pokedex-sm/140.shtml", image: "http://www.serebii.net/sunmoon/pokemon/140.png"},
 {id: "kabutops", name: "Kabutops", dex: 141, alola: -1, type: "Rock/Water", ability: "Swift Swim/Battle Armor/Weak Armor", wiki: "http://www.serebii.net/pokedex-sm/141.shtml", image: "http://www.serebii.net/sunmoon/pokemon/141.png"},
 {id: "aerodactyl", name: "Aerodactyl", dex: 142, alola: 284, type: "Rock/Flying", ability: "Rock Head/Pressure/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/142.shtml", image: "http://www.serebii.net/sunmoon/pokemon/142.png"},
 {id: "snorlax", name: "Snorlax", dex: 143, alola: 30, type: "Normal", ability: "Immunity/Thick Fat/Gluttony", wiki: "http://www.serebii.net/pokedex-sm/143.shtml", image: "http://www.serebii.net/sunmoon/pokemon/143.png"},
 {id: "articuno", name: "Articuno", dex: 144, alola: -1, type: "Ice/Flying", ability: "Pressure/None/Snow Cloak", wiki: "http://www.serebii.net/pokedex-sm/144.shtml", image: "http://www.serebii.net/sunmoon/pokemon/144.png"},
 {id: "zapdos", name: "Zapdos", dex: 145, alola: -1, type: "Electric/Flying", ability: "Pressure/None/Static/", wiki: "http://www.serebii.net/pokedex-sm/145.shtml", image: "http://www.serebii.net/sunmoon/pokemon/145.png"},
 {id: "moltres", name: "Moltres", dex: 146, alola: -1, type: "Fire/Flying", ability: "Pressure/None/Flame Body", wiki: "http://www.serebii.net/pokedex-sm/146.shtml", image: "http://www.serebii.net/sunmoon/pokemon/146.png"},
 {id: "dratini", name: "Dratini", dex: 147, alola: 281, type: "Dragon", ability: "Shed Skin/None/Marvel Scale", wiki: "http://www.serebii.net/pokedex-sm/147.shtml", image: "http://www.serebii.net/sunmoon/pokemon/147.png"},
 {id: "dragonair", name: "Dragonair", dex: 148, alola: 282, type: "Dragon", ability: "Shed Skin/None/Marvel Scale", wiki: "http://www.serebii.net/pokedex-sm/148.shtml", image: "http://www.serebii.net/sunmoon/pokemon/148.png"},
 {id: "dragonite", name: "Dragonite", dex: 149, alola: 283, type: "Dragon/Flying", ability: "Inner Focus/None/Multiscale", wiki: "http://www.serebii.net/pokedex-sm/149.shtml", image: "http://www.serebii.net/sunmoon/pokemon/149.png"},
 {id: "mewtwo", name: "Mewtwo", dex: 150, alola: -1, type: "Psychic", ability: "Pressure/None/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/150.shtml", image: "http://www.serebii.net/sunmoon/pokemon/150.png"},
 {id: "mew", name: "Mew", dex: 151, alola: -1, type: "Psychic", ability: "Synchronize", wiki: "http://www.serebii.net/pokedex-sm/151.shtml", image: "http://www.serebii.net/sunmoon/pokemon/151.png"},
 {id: "chikorita", name: "Chikorita", dex: 152, alola: -1, type: "Grass", ability: "Overgrow/None/Leaf Guard", wiki: "http://www.serebii.net/pokedex-sm/152.shtml", image: "http://www.serebii.net/sunmoon/pokemon/152.png"},
 {id: "bayleef", name: "Bayleef", dex: 153, alola: -1, type: "Grass", ability: "Overgrow/None/Leaf Guard", wiki: "http://www.serebii.net/pokedex-sm/153.shtml", image: "http://www.serebii.net/sunmoon/pokemon/153.png"},
 {id: "meganium", name: "Meganium", dex: 154, alola: -1, type: "Grass", ability: "Overgrow/None/Leaf Guard", wiki: "http://www.serebii.net/pokedex-sm/154.shtml", image: "http://www.serebii.net/sunmoon/pokemon/154.png"},
 {id: "cyndaquil", name: "Cyndaquil", dex: 155, alola: -1, type: "Fire", ability: "Blaze/None/Flash Fire", wiki: "http://www.serebii.net/pokedex-sm/155.shtml", image: "http://www.serebii.net/sunmoon/pokemon/155.png"},
 {id: "quilava", name: "Quilava", dex: 156, alola: -1, type: "Fire", ability: "Blaze/None/Flash Fire", wiki: "http://www.serebii.net/pokedex-sm/156.shtml", image: "http://www.serebii.net/sunmoon/pokemon/156.png"},
 {id: "typhlosion", name: "Typhlosion", dex: 157, alola: -1, type: "Fire", ability: "Blaze/None/Flash Fire", wiki: "http://www.serebii.net/pokedex-sm/157.shtml", image: "http://www.serebii.net/sunmoon/pokemon/157.png"},
 {id: "totodile", name: "Totodile", dex: 158, alola: -1, type: "Water", ability: "Torrent/None/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/158.shtml", image: "http://www.serebii.net/sunmoon/pokemon/158.png"},
 {id: "croconaw", name: "Croconaw", dex: 159, alola: -1, type: "Water", ability: "Torrent/None/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/159.shtml", image: "http://www.serebii.net/sunmoon/pokemon/159.png"},
 {id: "feraligatr", name: "Feraligatr", dex: 160, alola: -1, type: "Water", ability: "Torrent/None/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/160.shtml", image: "http://www.serebii.net/sunmoon/pokemon/160.png"},
 {id: "sentret", name: "Sentret", dex: 161, alola: -1, type: "Normal", ability: "Run Away/Keen Eye/Frisk", wiki: "http://www.serebii.net/pokedex-sm/161.shtml", image: "http://www.serebii.net/sunmoon/pokemon/161.png"},
 {id: "furret", name: "Furret", dex: 162, alola: -1, type: "Normal", ability: "Run Away/Keen Eye/Frisk", wiki: "http://www.serebii.net/pokedex-sm/162.shtml", image: "http://www.serebii.net/sunmoon/pokemon/162.png"},
 {id: "hoothoot", name: "Hoothoot", dex: 163, alola: -1, type: "Normal/Flying", ability: "Insomnia/Keen Eye/Tinted Lens", wiki: "http://www.serebii.net/pokedex-sm/163.shtml", image: "http://www.serebii.net/sunmoon/pokemon/163.png"},
 {id: "noctowl", name: "Noctowl", dex: 164, alola: -1, type: "Normal/Flying", ability: "Insomnia/Keen Eye/Tinted Lens", wiki: "http://www.serebii.net/pokedex-sm/164.shtml", image: "http://www.serebii.net/sunmoon/pokemon/164.png"},
 {id: "ledyba", name: "Ledyba", dex: 165, alola: 16, type: "Bug/Flying", ability: "Swarm/Early Bird/Rattled", wiki: "http://www.serebii.net/pokedex-sm/165.shtml", image: "http://www.serebii.net/sunmoon/pokemon/165.png"},
 {id: "ledian", name: "Ledian", dex: 166, alola: 17, type: "Bug/Flying", ability: "Swarm/Early Bird/Iron Fist", wiki: "http://www.serebii.net/pokedex-sm/166.shtml", image: "http://www.serebii.net/sunmoon/pokemon/166.png"},
 {id: "spinarak", name: "Spinarak", dex: 167, alola: 18, type: "Bug/Poison", ability: "Swarm/Insomnia/Sniper", wiki: "http://www.serebii.net/pokedex-sm/167.shtml", image: "http://www.serebii.net/sunmoon/pokemon/167.png"},
 {id: "ariados", name: "Ariados", dex: 168, alola: 19, type: "Bug/Poison", ability: "Swarm/Insomnia/Sniper", wiki: "http://www.serebii.net/pokedex-sm/168.shtml", image: "http://www.serebii.net/sunmoon/pokemon/168.png"},
 {id: "crobat", name: "Crobat", dex: 169, alola: 56, type: "Poison/Flying", ability: "Inner Focus/None/Infiltrator", wiki: "http://www.serebii.net/pokedex-sm/169.shtml", image: "http://www.serebii.net/sunmoon/pokemon/169.png"},
 {id: "chinchou", name: "Chinchou", dex: 170, alola: 201, type: "Water/Electric", ability: "Volt Absorb/Illuminate/Water Absorb", wiki: "http://www.serebii.net/pokedex-sm/170.shtml", image: "http://www.serebii.net/sunmoon/pokemon/170.png"},
 {id: "lanturn", name: "Lanturn", dex: 171, alola: 202, type: "Water/Electric", ability: "Volt Absorb/Illuminate/Water Absorb", wiki: "http://www.serebii.net/pokedex-sm/171.shtml", image: "http://www.serebii.net/sunmoon/pokemon/171.png"},
 {id: "pichu", name: "Pichu", dex: 172, alola: 20, type: "Electric", ability: "Static/None/Lightning Rod", wiki: "http://www.serebii.net/pokedex-sm/172.shtml", image: "http://www.serebii.net/sunmoon/pokemon/172.png"},
 {id: "cleffa", name: "Cleffa", dex: 173, alola: 210, type: "Fairy", ability: "Cute Charm/Magic Guard/Friend Guard", wiki: "http://www.serebii.net/pokedex-sm/173.shtml", image: "http://www.serebii.net/sunmoon/pokemon/173.png"},
 {id: "igglybuff", name: "Igglybuff", dex: 174, alola: 134, type: "Normal/Fairy", ability: "Cute Charm/Competitive/Friend Guard", wiki: "http://www.serebii.net/pokedex-sm/174.shtml", image: "http://www.serebii.net/sunmoon/pokemon/174.png"},
 {id: "togepi", name: "Togepi", dex: 175, alola: -1, type: "Fairy", ability: "Hustle/Serene Grace/Super Luck", wiki: "http://www.serebii.net/pokedex-sm/175.shtml", image: "http://www.serebii.net/sunmoon/pokemon/175.png"},
 {id: "togetic", name: "Togetic", dex: 176, alola: -1, type: "Fairy/Flying", ability: "Hustle/Serene Grace/Super Luck", wiki: "http://www.serebii.net/pokedex-sm/176.shtml", image: "http://www.serebii.net/sunmoon/pokemon/176.png"},
 {id: "natu", name: "Natu", dex: 177, alola: -1, type: "Psychic/Flying", ability: "Synchronize/Early Bird/Magic Bounce", wiki: "http://www.serebii.net/pokedex-sm/177.shtml", image: "http://www.serebii.net/sunmoon/pokemon/177.png"},
 {id: "xatu", name: "Xatu", dex: 178, alola: -1, type: "Psychic/Flying", ability: "Synchronize/Early Bird/Magic Bounce", wiki: "http://www.serebii.net/pokedex-sm/178.shtml", image: "http://www.serebii.net/sunmoon/pokemon/178.png"},
 {id: "mareep", name: "Mareep", dex: 179, alola: -1, type: "Electric", ability: "Static/None/Plus", wiki: "http://www.serebii.net/pokedex-sm/179.shtml", image: "http://www.serebii.net/sunmoon/pokemon/179.png"},
 {id: "flaaffy", name: "Flaaffy", dex: 180, alola: -1, type: "Electric", ability: "Static/None/Plus", wiki: "http://www.serebii.net/pokedex-sm/180.shtml", image: "http://www.serebii.net/sunmoon/pokemon/180.png"},
 {id: "ampharos", name: "Ampharos", dex: 181, alola: -1, type: "Electric", ability: "Static/None/Plus", wiki: "http://www.serebii.net/pokedex-sm/181.shtml", image: "http://www.serebii.net/sunmoon/pokemon/181.png"},
 {id: "bellossom", name: "Bellossom", dex: 182, alola: -1, type: "Grass", ability: "Chlorophyll/None/Healer", wiki: "http://www.serebii.net/pokedex-sm/182.shtml", image: "http://www.serebii.net/sunmoon/pokemon/182.png"},
 {id: "marill", name: "Marill", dex: 183, alola: -1, type: "Water/Fairy", ability: "Thick Fat/Huge Power/Sap Sipper", wiki: "http://www.serebii.net/pokedex-sm/183.shtml", image: "http://www.serebii.net/sunmoon/pokemon/183.png"},
 {id: "azumarill", name: "Azumarill", dex: 184, alola: -1, type: "Water/Fairy", ability: "Thick Fat/Huge Power/Sap Sipper", wiki: "http://www.serebii.net/pokedex-sm/184.shtml", image: "http://www.serebii.net/sunmoon/pokemon/184.png"},
 {id: "sudowoodo", name: "Sudowoodo", dex: 185, alola: 25, type: "Rock", ability: "Sturdy/Rock Head/Rattled", wiki: "http://www.serebii.net/pokedex-sm/185.shtml", image: "http://www.serebii.net/sunmoon/pokemon/185.png"},
 {id: "politoed", name: "Politoed", dex: 186, alola: 152, type: "Water", ability: "Water Absorb/Damp/Drizzle", wiki: "http://www.serebii.net/pokedex-sm/186.shtml", image: "http://www.serebii.net/sunmoon/pokemon/186.png"},
 {id: "hoppip", name: "Hoppip", dex: 187, alola: -1, type: "Grass/Flying", ability: "Chlorophyll/Leaf Guard/Infiltrator", wiki: "http://www.serebii.net/pokedex-sm/187.shtml", image: "http://www.serebii.net/sunmoon/pokemon/187.png"},
 {id: "skiploom", name: "Skiploom", dex: 188, alola: -1, type: "Grass/Flying", ability: "Chlorophyll/Leaf Guard/Infiltrator", wiki: "http://www.serebii.net/pokedex-sm/188.shtml", image: "http://www.serebii.net/sunmoon/pokemon/188.png"},
 {id: "jumpluff", name: "Jumpluff", dex: 189, alola: -1, type: "Grass/Flying", ability: "Chlorophyll/Leaf Guard/Infiltrator", wiki: "http://www.serebii.net/pokedex-sm/189.shtml", image: "http://www.serebii.net/sunmoon/pokemon/189.png"},
 {id: "aipom", name: "Aipom", dex: 190, alola: -1, type: "Normal", ability: "Run Away/Pickup/Skill Link", wiki: "http://www.serebii.net/pokedex-sm/190.shtml", image: "http://www.serebii.net/sunmoon/pokemon/190.png"},
 {id: "sunkern", name: "Sunkern", dex: 191, alola: -1, type: "Grass", ability: "Chlorophyll/Solar Power/Early Bird", wiki: "http://www.serebii.net/pokedex-sm/191.shtml", image: "http://www.serebii.net/sunmoon/pokemon/191.png"},
 {id: "sunflora", name: "Sunflora", dex: 192, alola: -1, type: "Grass", ability: "Chlorophyll/Solar Power/Early Bird", wiki: "http://www.serebii.net/pokedex-sm/192.shtml", image: "http://www.serebii.net/sunmoon/pokemon/192.png"},
 {id: "yanma", name: "Yanma", dex: 193, alola: -1, type: "Bug/Flying", ability: "Speed Boost/Compound Eyes/Frisk", wiki: "http://www.serebii.net/pokedex-sm/193.shtml", image: "http://www.serebii.net/sunmoon/pokemon/193.png"},
 {id: "wooper", name: "Wooper", dex: 194, alola: -1, type: "Water/Ground", ability: "Damp/Water Absorb/Unaware", wiki: "http://www.serebii.net/pokedex-sm/194.shtml", image: "http://www.serebii.net/sunmoon/pokemon/194.png"},
 {id: "quagsire", name: "Quagsire", dex: 195, alola: -1, type: "Water/Ground", ability: "Damp/Water Absorb/Unaware", wiki: "http://www.serebii.net/pokedex-sm/195.shtml", image: "http://www.serebii.net/sunmoon/pokemon/195.png"},
 {id: "espeon", name: "Espeon", dex: 196, alola: 127, type: "Psychic", ability: "Synchronize/None/Magic Bounce", wiki: "http://www.serebii.net/pokedex-sm/196.shtml", image: "http://www.serebii.net/sunmoon/pokemon/196.png"},
 {id: "umbreon", name: "Umbreon", dex: 197, alola: 128, type: "Dark", ability: "Synchronize/None/Inner Focus", wiki: "http://www.serebii.net/pokedex-sm/197.shtml", image: "http://www.serebii.net/sunmoon/pokemon/197.png"},
 {id: "murkrow", name: "Murkrow", dex: 198, alola: 277, type: "Dark/Flying", ability: "Insomnia/Super Luck/Prankster", wiki: "http://www.serebii.net/pokedex-sm/198.shtml", image: "http://www.serebii.net/sunmoon/pokemon/198.png"},
 {id: "slowking", name: "Slowking", dex: 199, alola: 39, type: "Water/Psychic", ability: "Oblivious/Own Tempo/Regenerator", wiki: "http://www.serebii.net/pokedex-sm/199.shtml", image: "http://www.serebii.net/sunmoon/pokemon/199.png"},
 {id: "misdreavus", name: "Misdreavus", dex: 200, alola: 54, type: "Ghost", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/200.shtml", image: "http://www.serebii.net/sunmoon/pokemon/200.png"},
 {id: "unown", name: "Unown", dex: 201, alola: -1, type: "Psychic", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/201.shtml", image: "http://www.serebii.net/sunmoon/pokemon/201.png"},
 {id: "wobbuffet", name: "Wobbuffet", dex: 202, alola: -1, type: "Psychic", ability: "Shadow Tag/None/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/202.shtml", image: "http://www.serebii.net/sunmoon/pokemon/202.png"},
 {id: "girafarig", name: "Girafarig", dex: 203, alola: -1, type: "Normal/Psychic", ability: "Inner Focus/Early Bird/Sap Sipper", wiki: "http://www.serebii.net/pokedex-sm/203.shtml", image: "http://www.serebii.net/sunmoon/pokemon/203.png"},
 {id: "pineco", name: "Pineco", dex: 204, alola: -1, type: "Bug", ability: "Sturdy/None/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/204.shtml", image: "http://www.serebii.net/sunmoon/pokemon/204.png"},
 {id: "forretress", name: "Forretress", dex: 205, alola: -1, type: "Bug/Steel", ability: "Sturdy/None/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/205.shtml", image: "http://www.serebii.net/sunmoon/pokemon/205.png"},
 {id: "dunsparce", name: "Dunsparce", dex: 206, alola: -1, type: "Normal", ability: "Serene Grace/Run Away/Rattled", wiki: "http://www.serebii.net/pokedex-sm/206.shtml", image: "http://www.serebii.net/sunmoon/pokemon/206.png"},
 {id: "gligar", name: "Gligar", dex: 207, alola: -1, type: "Ground/Flying", ability: "Hyper Cutter/Sand Veil/Immunity", wiki: "http://www.serebii.net/pokedex-sm/207.shtml", image: "http://www.serebii.net/sunmoon/pokemon/207.png"},
 {id: "steelix", name: "Steelix", dex: 208, alola: -1, type: "Steel/Ground", ability: "Rock Head/Sturdy/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/208.shtml", image: "http://www.serebii.net/sunmoon/pokemon/208.png"},
 {id: "snubbull", name: "Snubbull", dex: 209, alola: 258, type: "Fairy", ability: "Intimidate/Run Away/Rattled", wiki: "http://www.serebii.net/pokedex-sm/209.shtml", image: "http://www.serebii.net/sunmoon/pokemon/209.png"},
 {id: "granbull", name: "Granbull", dex: 210, alola: 259, type: "Fairy", ability: "Intimidate/Quick Feet/Rattled", wiki: "http://www.serebii.net/pokedex-sm/210.shtml", image: "http://www.serebii.net/sunmoon/pokemon/210.png"},
 {id: "qwilfish", name: "Qwilfish", dex: 211, alola: -1, type: "Water/Poison", ability: "Poison Point/Swift Swim/Intimidate", wiki: "http://www.serebii.net/pokedex-sm/211.shtml", image: "http://www.serebii.net/sunmoon/pokemon/211.png"},
 {id: "scizor", name: "Scizor", dex: 212, alola: 276, type: "Bug/Steel", ability: "Swarm/Technician/Light Metal", wiki: "http://www.serebii.net/pokedex-sm/212.shtml", image: "http://www.serebii.net/sunmoon/pokemon/212.png"},
 {id: "shuckle", name: "Shuckle", dex: 213, alola: -1, type: "Bug/Rock", ability: "Sturdy/Gluttony/Contrary", wiki: "http://www.serebii.net/pokedex-sm/213.shtml", image: "http://www.serebii.net/sunmoon/pokemon/213.png"},
 {id: "heracross", name: "Heracross", dex: 214, alola: -1, type: "Bug/Fighting", ability: "Swarm/Guts/Moxie", wiki: "http://www.serebii.net/pokedex-sm/214.shtml", image: "http://www.serebii.net/sunmoon/pokemon/214.png"},
 {id: "sneasel", name: "Sneasel", dex: 215, alola: 249, type: "Dark/Ice", ability: "Inner Focus/Keen Eye/Pickpocket", wiki: "http://www.serebii.net/pokedex-sm/215.shtml", image: "http://www.serebii.net/sunmoon/pokemon/215.png"},
 {id: "teddiursa", name: "Teddiursa", dex: 216, alola: -1, type: "Normal", ability: "Pickup/Quick Feet/Honey Gather", wiki: "http://www.serebii.net/pokedex-sm/216.shtml", image: "http://www.serebii.net/sunmoon/pokemon/216.png"},
 {id: "ursaring", name: "Ursaring", dex: 217, alola: -1, type: "Normal", ability: "Guts/Quick Feet/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/217.shtml", image: "http://www.serebii.net/sunmoon/pokemon/217.png"},
 {id: "slugma", name: "Slugma", dex: 218, alola: -1, type: "Fire", ability: "Magma Armor/Flame Body/Weak Armor", wiki: "http://www.serebii.net/pokedex-sm/218.shtml", image: "http://www.serebii.net/sunmoon/pokemon/218.png"},
 {id: "magcargo", name: "Magcargo", dex: 219, alola: -1, type: "Fire/Rock", ability: "Magma Armor/Flame Body/Weak Armor", wiki: "http://www.serebii.net/pokedex-sm/219.shtml", image: "http://www.serebii.net/sunmoon/pokemon/219.png"},
 {id: "swinub", name: "Swinub", dex: 220, alola: -1, type: "Ice/Ground", ability: "Oblivious/Snow Cloak/Thick Fat", wiki: "http://www.serebii.net/pokedex-sm/220.shtml", image: "http://www.serebii.net/sunmoon/pokemon/220.png"},
 {id: "piloswine", name: "Piloswine", dex: 221, alola: -1, type: "Ice/Ground", ability: "Oblivious/Snow Cloak/Thick Fat", wiki: "http://www.serebii.net/pokedex-sm/221.shtml", image: "http://www.serebii.net/sunmoon/pokemon/221.png"},
 {id: "corsola", name: "Corsola", dex: 222, alola: 112, type: "Water/Rock", ability: "Hustle/Natural Cure/Regenerator", wiki: "http://www.serebii.net/pokedex-sm/222.shtml", image: "http://www.serebii.net/sunmoon/pokemon/222.png"},
 {id: "remoraid", name: "Remoraid", dex: 223, alola: -1, type: "Water", ability: "Hustle/Sniper/Moody", wiki: "http://www.serebii.net/pokedex-sm/223.shtml", image: "http://www.serebii.net/sunmoon/pokemon/223.png"},
 {id: "octillery", name: "Octillery", dex: 224, alola: -1, type: "Water", ability: "Suction Cups/Sniper/Moody", wiki: "http://www.serebii.net/pokedex-sm/224.shtml", image: "http://www.serebii.net/sunmoon/pokemon/224.png"},
 {id: "delibird", name: "Delibird", dex: 225, alola: 81, type: "Ice/Flying", ability: "Vital Spirit/Hustle/Insomnia", wiki: "http://www.serebii.net/pokedex-sm/225.shtml", image: "http://www.serebii.net/sunmoon/pokemon/225.png"},
 {id: "mantine", name: "Mantine", dex: 226, alola: -1, type: "Water/Flying", ability: "Swift Swim/Water Absorb/Water Veil", wiki: "http://www.serebii.net/pokedex-sm/226.shtml", image: "http://www.serebii.net/sunmoon/pokemon/226.png"},
 {id: "skarmory", name: "Skarmory", dex: 227, alola: 208, type: "Steel/Flying", ability: "Keen Eye/Sturdy/Weak Armor", wiki: "http://www.serebii.net/pokedex-sm/227.shtml", image: "http://www.serebii.net/sunmoon/pokemon/227.png"},
 {id: "houndour", name: "Houndour", dex: 228, alola: -1, type: "Dark/Fire", ability: "Early Bird/Flash Fire/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/228.shtml", image: "http://www.serebii.net/sunmoon/pokemon/228.png"},
 {id: "houndoom", name: "Houndoom", dex: 229, alola: -1, type: "Dark/Fire", ability: "Early Bird/Flash Fire/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/229.shtml", image: "http://www.serebii.net/sunmoon/pokemon/229.png"},
 {id: "kingdra", name: "Kingdra", dex: 230, alola: -1, type: "Water/Dragon", ability: "Swift Swim/Sniper/Damp", wiki: "http://www.serebii.net/pokedex-sm/230.shtml", image: "http://www.serebii.net/sunmoon/pokemon/230.png"},
 {id: "phanpy", name: "Phanpy", dex: 231, alola: -1, type: "Ground", ability: "Pickup/None/Sand Veil", wiki: "http://www.serebii.net/pokedex-sm/231.shtml", image: "http://www.serebii.net/sunmoon/pokemon/231.png"},
 {id: "donphan", name: "Donphan", dex: 232, alola: -1, type: "Ground", ability: "Sturdy/None/Sand Veil", wiki: "http://www.serebii.net/pokedex-sm/232.shtml", image: "http://www.serebii.net/sunmoon/pokemon/232.png"},
 {id: "porygon2", name: "Porygon2", dex: 233, alola: 218, type: "Normal", ability: "Trace/Download/Analytic", wiki: "http://www.serebii.net/pokedex-sm/233.shtml", image: "http://www.serebii.net/sunmoon/pokemon/233.png"},
 {id: "stantler", name: "Stantler", dex: 234, alola: -1, type: "Normal", ability: "Intimidate/Frisk/Sap Sipper", wiki: "http://www.serebii.net/pokedex-sm/234.shtml", image: "http://www.serebii.net/sunmoon/pokemon/234.png"},
 {id: "smeargle", name: "Smeargle", dex: 235, alola: 58, type: "Normal", ability: "Own Tempo/Technician/Moody", wiki: "http://www.serebii.net/pokedex-sm/235.shtml", image: "http://www.serebii.net/sunmoon/pokemon/235.png"},
 {id: "tyrogue", name: "Tyrogue", dex: 236, alola: -1, type: "Fighting", ability: "Guts/Steadfast/Vital Spirit", wiki: "http://www.serebii.net/pokedex-sm/236.shtml", image: "http://www.serebii.net/sunmoon/pokemon/236.png"},
 {id: "hitmontop", name: "Hitmontop", dex: 237, alola: -1, type: "Fighting", ability: "Intimidate/Technician/Steadfast", wiki: "http://www.serebii.net/pokedex-sm/237.shtml", image: "http://www.serebii.net/sunmoon/pokemon/237.png"},
 {id: "smoochum", name: "Smoochum", dex: 238, alola: -1, type: "Ice/Psychic", ability: "Oblivious/Forewarn/Hydration", wiki: "http://www.serebii.net/pokedex-sm/238.shtml", image: "http://www.serebii.net/sunmoon/pokemon/238.png"},
 {id: "elekid", name: "Elekid", dex: 239, alola: 226, type: "Electric", ability: "Static/None/Vital Spirit", wiki: "http://www.serebii.net/pokedex-sm/239.shtml", image: "http://www.serebii.net/sunmoon/pokemon/239.png"},
 {id: "magby", name: "Magby", dex: 240, alola: 166, type: "Fire", ability: "Flame Body/None/Vital Spirit", wiki: "http://www.serebii.net/pokedex-sm/240.shtml", image: "http://www.serebii.net/sunmoon/pokemon/240.png"},
 {id: "miltank", name: "Miltank", dex: 241, alola: 138, type: "Normal", ability: "Thick Fat/Scrappy/Sap Sipper", wiki: "http://www.serebii.net/pokedex-sm/241.shtml", image: "http://www.serebii.net/sunmoon/pokemon/241.png"},
 {id: "blissey", name: "Blissey", dex: 242, alola: 28, type: "Normal", ability: "Natural Cure/Serene Grace/Healer", wiki: "http://www.serebii.net/pokedex-sm/242.shtml", image: "http://www.serebii.net/sunmoon/pokemon/242.png"},
 {id: "raikou", name: "Raikou", dex: 243, alola: -1, type: "Electric", ability: "Pressure/None/Volt Absorb", wiki: "http://www.serebii.net/pokedex-sm/243.shtml", image: "http://www.serebii.net/sunmoon/pokemon/243.png"},
 {id: "entei", name: "Entei", dex: 244, alola: -1, type: "Fire", ability: "Pressure/None/Flash Fire", wiki: "http://www.serebii.net/pokedex-sm/244.shtml", image: "http://www.serebii.net/sunmoon/pokemon/244.png"},
 {id: "suicune", name: "Suicune", dex: 245, alola: -1, type: "Water", ability: "Pressure/None/Water Absorb", wiki: "http://www.serebii.net/pokedex-sm/245.shtml", image: "http://www.serebii.net/sunmoon/pokemon/245.png"},
 {id: "larvitar", name: "Larvitar", dex: 246, alola: -1, type: "Rock/Ground", ability: "Guts/None/Sand Veil", wiki: "http://www.serebii.net/pokedex-sm/246.shtml", image: "http://www.serebii.net/sunmoon/pokemon/246.png"},
 {id: "pupitar", name: "Pupitar", dex: 247, alola: -1, type: "Rock/Ground", ability: "Shed Skin", wiki: "http://www.serebii.net/pokedex-sm/247.shtml", image: "http://www.serebii.net/sunmoon/pokemon/247.png"},
 {id: "tyranitar", name: "Tyranitar", dex: 248, alola: -1, type: "Rock/Dark", ability: "Sand Stream/None/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/248.shtml", image: "http://www.serebii.net/sunmoon/pokemon/248.png"},
 {id: "lugia", name: "Lugia", dex: 249, alola: -1, type: "Psychic/Flying", ability: "Pressure/None/Multiscale", wiki: "http://www.serebii.net/pokedex-sm/249.shtml", image: "http://www.serebii.net/sunmoon/pokemon/249.png"},
 {id: "ho-oh", name: "Ho-oh", dex: 250, alola: -1, type: "Fire/Flying", ability: "Pressure/None/Regenerator", wiki: "http://www.serebii.net/pokedex-sm/250.shtml", image: "http://www.serebii.net/sunmoon/pokemon/250.png"},
 {id: "celebi", name: "Celebi", dex: 251, alola: -1, type: "Psychic/Grass", ability: "Natural Cure", wiki: "http://www.serebii.net/pokedex-sm/251.shtml", image: "http://www.serebii.net/sunmoon/pokemon/251.png"},
 {id: "treecko", name: "Treecko", dex: 252, alola: -1, type: "Grass", ability: "Overgrow/None/Unburden", wiki: "http://www.serebii.net/pokedex-sm/252.shtml", image: "http://www.serebii.net/sunmoon/pokemon/252.png"},
 {id: "grovyle", name: "Grovyle", dex: 253, alola: -1, type: "Grass", ability: "Overgrow/None/Unburden", wiki: "http://www.serebii.net/pokedex-sm/253.shtml", image: "http://www.serebii.net/sunmoon/pokemon/253.png"},
 {id: "sceptile", name: "Sceptile", dex: 254, alola: -1, type: "Grass", ability: "Overgrow/None/Unburden", wiki: "http://www.serebii.net/pokedex-sm/254.shtml", image: "http://www.serebii.net/sunmoon/pokemon/254.png"},
 {id: "torchic", name: "Torchic", dex: 255, alola: -1, type: "Fire", ability: "Blaze/None/Speed Boost", wiki: "http://www.serebii.net/pokedex-sm/255.shtml", image: "http://www.serebii.net/sunmoon/pokemon/255.png"},
 {id: "combusken", name: "Combusken", dex: 256, alola: -1, type: "Fire/Fighting", ability: "Blaze/None/Speed Boost", wiki: "http://www.serebii.net/pokedex-sm/256.shtml", image: "http://www.serebii.net/sunmoon/pokemon/256.png"},
 {id: "blaziken", name: "Blaziken", dex: 257, alola: -1, type: "Fire/Fighting", ability: "Blaze/None/Speed Boost", wiki: "http://www.serebii.net/pokedex-sm/257.shtml", image: "http://www.serebii.net/sunmoon/pokemon/257.png"},
 {id: "mudkip", name: "Mudkip", dex: 258, alola: -1, type: "Water", ability: "Torrent/None/Damp", wiki: "http://www.serebii.net/pokedex-sm/258.shtml", image: "http://www.serebii.net/sunmoon/pokemon/258.png"},
 {id: "marshtomp", name: "Marshtomp", dex: 259, alola: -1, type: "Water/Ground", ability: "Torrent/None/Damp", wiki: "http://www.serebii.net/pokedex-sm/259.shtml", image: "http://www.serebii.net/sunmoon/pokemon/259.png"},
 {id: "swampert", name: "Swampert", dex: 260, alola: -1, type: "Water/Ground", ability: "Torrent/None/Damp", wiki: "http://www.serebii.net/pokedex-sm/260.shtml", image: "http://www.serebii.net/sunmoon/pokemon/260.png"},
 {id: "poochyena", name: "Poochyena", dex: 261, alola: -1, type: "Dark", ability: "Run Away/Quick Feet/Rattled", wiki: "http://www.serebii.net/pokedex-sm/261.shtml", image: "http://www.serebii.net/sunmoon/pokemon/261.png"},
 {id: "mightyena", name: "Mightyena", dex: 262, alola: -1, type: "Dark", ability: "Intimidate/Quick Feet/Moxie", wiki: "http://www.serebii.net/pokedex-sm/262.shtml", image: "http://www.serebii.net/sunmoon/pokemon/262.png"},
 {id: "zigzagoon", name: "Zigzagoon", dex: 263, alola: -1, type: "Normal", ability: "Pickup/Gluttony/Quick Feet", wiki: "http://www.serebii.net/pokedex-sm/263.shtml", image: "http://www.serebii.net/sunmoon/pokemon/263.png"},
 {id: "linoone", name: "Linoone", dex: 264, alola: -1, type: "Normal", ability: "Pickup/Gluttony/Quick Feet", wiki: "http://www.serebii.net/pokedex-sm/264.shtml", image: "http://www.serebii.net/sunmoon/pokemon/264.png"},
 {id: "wurmple", name: "Wurmple", dex: 265, alola: -1, type: "Bug", ability: "Shield Dust/None/Run Away", wiki: "http://www.serebii.net/pokedex-sm/265.shtml", image: "http://www.serebii.net/sunmoon/pokemon/265.png"},
 {id: "silcoon", name: "Silcoon", dex: 266, alola: -1, type: "Bug", ability: "Shed Skin", wiki: "http://www.serebii.net/pokedex-sm/266.shtml", image: "http://www.serebii.net/sunmoon/pokemon/266.png"},
 {id: "beautifly", name: "Beautifly", dex: 267, alola: -1, type: "Bug/Flying", ability: "Swarm/None/Rivalry", wiki: "http://www.serebii.net/pokedex-sm/267.shtml", image: "http://www.serebii.net/sunmoon/pokemon/267.png"},
 {id: "cascoon", name: "Cascoon", dex: 268, alola: -1, type: "Bug", ability: "Shed Skin", wiki: "http://www.serebii.net/pokedex-sm/268.shtml", image: "http://www.serebii.net/sunmoon/pokemon/268.png"},
 {id: "dustox", name: "Dustox", dex: 269, alola: -1, type: "Bug/Poison", ability: "Shield Dust/None/Compound Eyes", wiki: "http://www.serebii.net/pokedex-sm/269.shtml", image: "http://www.serebii.net/sunmoon/pokemon/269.png"},
 {id: "lotad", name: "Lotad", dex: 270, alola: -1, type: "Water/Grass", ability: "Swift Swim/Rain Dish/Own Tempo", wiki: "http://www.serebii.net/pokedex-sm/270.shtml", image: "http://www.serebii.net/sunmoon/pokemon/270.png"},
 {id: "lombre", name: "Lombre", dex: 271, alola: -1, type: "Water/Grass", ability: "Swift Swim/Rain Dish/Own Tempo", wiki: "http://www.serebii.net/pokedex-sm/271.shtml", image: "http://www.serebii.net/sunmoon/pokemon/271.png"},
 {id: "ludicolo", name: "Ludicolo", dex: 272, alola: -1, type: "Water/Grass", ability: "Swift Swim/Rain Dish/Own Tempo", wiki: "http://www.serebii.net/pokedex-sm/272.shtml", image: "http://www.serebii.net/sunmoon/pokemon/272.png"},
 {id: "seedot", name: "Seedot", dex: 273, alola: -1, type: "Grass", ability: "Chlorophyll/Early Bird/Pickpocket", wiki: "http://www.serebii.net/pokedex-sm/273.shtml", image: "http://www.serebii.net/sunmoon/pokemon/273.png"},
 {id: "nuzleaf", name: "Nuzleaf", dex: 274, alola: -1, type: "Grass/Dark", ability: "Chlorophyll/Early Bird/Pickpocket", wiki: "http://www.serebii.net/pokedex-sm/274.shtml", image: "http://www.serebii.net/sunmoon/pokemon/274.png"},
 {id: "shiftry", name: "Shiftry", dex: 275, alola: -1, type: "Grass/Dark", ability: "Chlorophyll/Early Bird/Pickpocket", wiki: "http://www.serebii.net/pokedex-sm/275.shtml", image: "http://www.serebii.net/sunmoon/pokemon/275.png"},
 {id: "taillow", name: "Taillow", dex: 276, alola: -1, type: "Normal/Flying", ability: "Guts/None/Scrappy", wiki: "http://www.serebii.net/pokedex-sm/276.shtml", image: "http://www.serebii.net/sunmoon/pokemon/276.png"},
 {id: "swellow", name: "Swellow", dex: 277, alola: -1, type: "Normal/Flying", ability: "Guts/None/Scrappy", wiki: "http://www.serebii.net/pokedex-sm/277.shtml", image: "http://www.serebii.net/sunmoon/pokemon/277.png"},
 {id: "wingull", name: "Wingull", dex: 278, alola: 32, type: "Water/Flying", ability: "Keen Eye/None/Rain Dish", wiki: "http://www.serebii.net/pokedex-sm/278.shtml", image: "http://www.serebii.net/sunmoon/pokemon/278.png"},
 {id: "pelipper", name: "Pelipper", dex: 279, alola: 33, type: "Water/Flying", ability: "Keen Eye/None/Rain Dish", wiki: "http://www.serebii.net/pokedex-sm/279.shtml", image: "http://www.serebii.net/sunmoon/pokemon/279.png"},
 {id: "ralts", name: "Ralts", dex: 280, alola: -1, type: "Psychic/Fairy", ability: "Synchronize/Trace/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/280.shtml", image: "http://www.serebii.net/sunmoon/pokemon/280.png"},
 {id: "kirlia", name: "Kirlia", dex: 281, alola: -1, type: "Psychic/Fairy", ability: "Synchronize/Trace/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/281.shtml", image: "http://www.serebii.net/sunmoon/pokemon/281.png"},
 {id: "gardevoir", name: "Gardevoir", dex: 282, alola: -1, type: "Psychic/Fairy", ability: "Synchronize/Trace/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/282.shtml", image: "http://www.serebii.net/sunmoon/pokemon/282.png"},
 {id: "surskit", name: "Surskit", dex: 283, alola: 139, type: "Bug/Water", ability: "Swift Swim/None/Rain Dish", wiki: "http://www.serebii.net/pokedex-sm/283.shtml", image: "http://www.serebii.net/sunmoon/pokemon/283.png"},
 {id: "masquerain", name: "Masquerain", dex: 284, alola: 140, type: "Bug/Flying", ability: "Intimidate/None/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/284.shtml", image: "http://www.serebii.net/sunmoon/pokemon/284.png"},
 {id: "shroomish", name: "Shroomish", dex: 285, alola: -1, type: "Grass", ability: "Effect Spore/Poison Heal/Quick Feet", wiki: "http://www.serebii.net/pokedex-sm/285.shtml", image: "http://www.serebii.net/sunmoon/pokemon/285.png"},
 {id: "breloom", name: "Breloom", dex: 286, alola: -1, type: "Grass/Fighting", ability: "Effect Spore/Poison Heal/Technician", wiki: "http://www.serebii.net/pokedex-sm/286.shtml", image: "http://www.serebii.net/sunmoon/pokemon/286.png"},
 {id: "slakoth", name: "Slakoth", dex: 287, alola: -1, type: "Normal", ability: "Truant", wiki: "http://www.serebii.net/pokedex-sm/287.shtml", image: "http://www.serebii.net/sunmoon/pokemon/287.png"},
 {id: "vigoroth", name: "Vigoroth", dex: 288, alola: -1, type: "Normal", ability: "Vital Spirit", wiki: "http://www.serebii.net/pokedex-sm/288.shtml", image: "http://www.serebii.net/sunmoon/pokemon/288.png"},
 {id: "slaking", name: "Slaking", dex: 289, alola: -1, type: "Normal", ability: "Truant", wiki: "http://www.serebii.net/pokedex-sm/289.shtml", image: "http://www.serebii.net/sunmoon/pokemon/289.png"},
 {id: "nincada", name: "Nincada", dex: 290, alola: -1, type: "Bug/Ground", ability: "Compound Eyes/None/Run Away", wiki: "http://www.serebii.net/pokedex-sm/290.shtml", image: "http://www.serebii.net/sunmoon/pokemon/290.png"},
 {id: "ninjask", name: "Ninjask", dex: 291, alola: -1, type: "Bug/Flying", ability: "Speed Boost/None/Infiltrator", wiki: "http://www.serebii.net/pokedex-sm/291.shtml", image: "http://www.serebii.net/sunmoon/pokemon/291.png"},
 {id: "shedinja", name: "Shedinja", dex: 292, alola: -1, type: "Bug/Ghost", ability: "Wonder Guard", wiki: "http://www.serebii.net/pokedex-sm/292.shtml", image: "http://www.serebii.net/sunmoon/pokemon/292.png"},
 {id: "whismur", name: "Whismur", dex: 293, alola: -1, type: "Normal", ability: "Soundproof/None/Rattled", wiki: "http://www.serebii.net/pokedex-sm/293.shtml", image: "http://www.serebii.net/sunmoon/pokemon/293.png"},
 {id: "loudred", name: "Loudred", dex: 294, alola: -1, type: "Normal", ability: "Soundproof/None/Scrappy", wiki: "http://www.serebii.net/pokedex-sm/294.shtml", image: "http://www.serebii.net/sunmoon/pokemon/294.png"},
 {id: "exploud", name: "Exploud", dex: 295, alola: -1, type: "Normal", ability: "Soundproof/None/Scrappy", wiki: "http://www.serebii.net/pokedex-sm/295.shtml", image: "http://www.serebii.net/sunmoon/pokemon/295.png"},
 {id: "makuhita", name: "Makuhita", dex: 296, alola: 46, type: "Fighting", ability: "Thick Fat/Guts/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/296.shtml", image: "http://www.serebii.net/sunmoon/pokemon/296.png"},
 {id: "hariyama", name: "Hariyama", dex: 297, alola: 47, type: "Fighting", ability: "Thick Fat/Guts/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/297.shtml", image: "http://www.serebii.net/sunmoon/pokemon/297.png"},
 {id: "azurill", name: "Azurill", dex: 298, alola: -1, type: "Normal/Fairy", ability: "Thick Fat/Huge Power/Sap Sipper", wiki: "http://www.serebii.net/pokedex-sm/298.shtml", image: "http://www.serebii.net/sunmoon/pokemon/298.png"},
 {id: "nosepass", name: "Nosepass", dex: 299, alola: 198, type: "Rock", ability: "Sturdy/Magnet Pull/Sand Force", wiki: "http://www.serebii.net/pokedex-sm/299.shtml", image: "http://www.serebii.net/sunmoon/pokemon/299.png"},
 {id: "skitty", name: "Skitty", dex: 300, alola: -1, type: "Normal", ability: "Cute Charm/Normalize/Wonder Skin", wiki: "http://www.serebii.net/pokedex-sm/300.shtml", image: "http://www.serebii.net/sunmoon/pokemon/300.png"},
 {id: "delcatty", name: "Delcatty", dex: 301, alola: -1, type: "Normal", ability: "Cute Charm/Normalize/Wonder Skin", wiki: "http://www.serebii.net/pokedex-sm/301.shtml", image: "http://www.serebii.net/sunmoon/pokemon/301.png"},
 {id: "sableye", name: "Sableye", dex: 302, alola: 102, type: "Dark/Ghost", ability: "Keen Eye/Stall/Prankster", wiki: "http://www.serebii.net/pokedex-sm/302.shtml", image: "http://www.serebii.net/sunmoon/pokemon/302.png"},
 {id: "mawile", name: "Mawile", dex: 303, alola: -1, type: "Steel/Fairy", ability: "Hyper Cutter/Intimidate/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/303.shtml", image: "http://www.serebii.net/sunmoon/pokemon/303.png"},
 {id: "aron", name: "Aron", dex: 304, alola: -1, type: "Steel/Rock", ability: "Sturdy/Rock Head/Heavy Metal", wiki: "http://www.serebii.net/pokedex-sm/304.shtml", image: "http://www.serebii.net/sunmoon/pokemon/304.png"},
 {id: "lairon", name: "Lairon", dex: 305, alola: -1, type: "Steel/Rock", ability: "Sturdy/Rock Head/Heavy Metal", wiki: "http://www.serebii.net/pokedex-sm/305.shtml", image: "http://www.serebii.net/sunmoon/pokemon/305.png"},
 {id: "aggron", name: "Aggron", dex: 306, alola: -1, type: "Steel/Rock", ability: "Sturdy/Rock Head/Heavy Metal", wiki: "http://www.serebii.net/pokedex-sm/306.shtml", image: "http://www.serebii.net/sunmoon/pokemon/306.png"},
 {id: "meditite", name: "Meditite", dex: 307, alola: -1, type: "Fighting/Psychic", ability: "Pure Power/None/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/307.shtml", image: "http://www.serebii.net/sunmoon/pokemon/307.png"},
 {id: "medicham", name: "Medicham", dex: 308, alola: -1, type: "Fighting/Psychic", ability: "Pure Power/None/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/308.shtml", image: "http://www.serebii.net/sunmoon/pokemon/308.png"},
 {id: "electrike", name: "Electrike", dex: 309, alola: -1, type: "Electric", ability: "Static/Lightning Rod/Minus", wiki: "http://www.serebii.net/pokedex-sm/309.shtml", image: "http://www.serebii.net/sunmoon/pokemon/309.png"},
 {id: "manectric", name: "Manectric", dex: 310, alola: -1, type: "Electric", ability: "Static/Lightning Rod/Minus", wiki: "http://www.serebii.net/pokedex-sm/310.shtml", image: "http://www.serebii.net/sunmoon/pokemon/310.png"},
 {id: "plusle", name: "Plusle", dex: 311, alola: -1, type: "Electric", ability: "Plus/None/Lightning Rod/VI", wiki: "http://www.serebii.net/pokedex-sm/311.shtml", image: "http://www.serebii.net/sunmoon/pokemon/311.png"},
 {id: "minun", name: "Minun", dex: 312, alola: -1, type: "Electric", ability: "Minus/None/Volt Absorb/VI", wiki: "http://www.serebii.net/pokedex-sm/312.shtml", image: "http://www.serebii.net/sunmoon/pokemon/312.png"},
 {id: "volbeat", name: "Volbeat", dex: 313, alola: -1, type: "Bug", ability: "Illuminate/Swarm/Prankster", wiki: "http://www.serebii.net/pokedex-sm/313.shtml", image: "http://www.serebii.net/sunmoon/pokemon/313.png"},
 {id: "illumise", name: "Illumise", dex: 314, alola: -1, type: "Bug", ability: "Oblivious/Tinted Lens/Prankster", wiki: "http://www.serebii.net/pokedex-sm/314.shtml", image: "http://www.serebii.net/sunmoon/pokemon/314.png"},
 {id: "roselia", name: "Roselia", dex: 315, alola: -1, type: "Grass/Poison", ability: "Natural Cure/Poison Point/Leaf Guard", wiki: "http://www.serebii.net/pokedex-sm/315.shtml", image: "http://www.serebii.net/sunmoon/pokemon/315.png"},
 {id: "gulpin", name: "Gulpin", dex: 316, alola: -1, type: "Poison", ability: "Liquid Ooze/Sticky Hold/Gluttony", wiki: "http://www.serebii.net/pokedex-sm/316.shtml", image: "http://www.serebii.net/sunmoon/pokemon/316.png"},
 {id: "swalot", name: "Swalot", dex: 317, alola: -1, type: "Poison", ability: "Liquid Ooze/Sticky Hold/Gluttony", wiki: "http://www.serebii.net/pokedex-sm/317.shtml", image: "http://www.serebii.net/sunmoon/pokemon/317.png"},
 {id: "carvanha", name: "Carvanha", dex: 318, alola: 264, type: "Water/Dark", ability: "Rough Skin/None/Speed Boost", wiki: "http://www.serebii.net/pokedex-sm/318.shtml", image: "http://www.serebii.net/sunmoon/pokemon/318.png"},
 {id: "sharpedo", name: "Sharpedo", dex: 319, alola: 265, type: "Water/Dark", ability: "Rough Skin/None/Speed Boost", wiki: "http://www.serebii.net/pokedex-sm/319.shtml", image: "http://www.serebii.net/sunmoon/pokemon/319.png"},
 {id: "wailmer", name: "Wailmer", dex: 320, alola: 266, type: "Water", ability: "Water Veil/Oblivious/Pressure", wiki: "http://www.serebii.net/pokedex-sm/320.shtml", image: "http://www.serebii.net/sunmoon/pokemon/320.png"},
 {id: "wailord", name: "Wailord", dex: 321, alola: 267, type: "Water", ability: "Water Veil/Oblivious/Pressure", wiki: "http://www.serebii.net/pokedex-sm/321.shtml", image: "http://www.serebii.net/sunmoon/pokemon/321.png"},
 {id: "numel", name: "Numel", dex: 322, alola: -1, type: "Fire/Ground", ability: "Oblivious/Simple/Own Tempo", wiki: "http://www.serebii.net/pokedex-sm/322.shtml", image: "http://www.serebii.net/sunmoon/pokemon/322.png"},
 {id: "camerupt", name: "Camerupt", dex: 323, alola: -1, type: "Fire/Ground", ability: "Magma Armor/Solid Rock/Anger Point", wiki: "http://www.serebii.net/pokedex-sm/323.shtml", image: "http://www.serebii.net/sunmoon/pokemon/323.png"},
 {id: "torkoal", name: "Torkoal", dex: 324, alola: 223, type: "Fire", ability: "White Smoke/None/Shell Armor", wiki: "http://www.serebii.net/pokedex-sm/324.shtml", image: "http://www.serebii.net/sunmoon/pokemon/324.png"},
 {id: "spoink", name: "Spoink", dex: 325, alola: -1, type: "Psychic", ability: "Thick Fat/Own Tempo/Gluttony", wiki: "http://www.serebii.net/pokedex-sm/325.shtml", image: "http://www.serebii.net/sunmoon/pokemon/325.png"},
 {id: "grumpig", name: "Grumpig", dex: 326, alola: -1, type: "Psychic", ability: "Thick Fat/Own Tempo/Gluttony", wiki: "http://www.serebii.net/pokedex-sm/326.shtml", image: "http://www.serebii.net/sunmoon/pokemon/326.png"},
 {id: "spinda", name: "Spinda", dex: 327, alola: 105, type: "Normal", ability: "Own Tempo/Tangled Feet/Contrary", wiki: "http://www.serebii.net/pokedex-sm/327.shtml", image: "http://www.serebii.net/sunmoon/pokemon/327.png"},
 {id: "trapinch", name: "Trapinch", dex: 328, alola: 235, type: "Ground", ability: "Hyper Cutter/Arena Trap/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/328.shtml", image: "http://www.serebii.net/sunmoon/pokemon/328.png"},
 {id: "vibrava", name: "Vibrava", dex: 329, alola: 236, type: "Ground/Dragon", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/329.shtml", image: "http://www.serebii.net/sunmoon/pokemon/329.png"},
 {id: "flygon", name: "Flygon", dex: 330, alola: 237, type: "Ground/Dragon", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/330.shtml", image: "http://www.serebii.net/sunmoon/pokemon/330.png"},
 {id: "cacnea", name: "Cacnea", dex: 331, alola: -1, type: "Grass", ability: "Sand Veil/None/Water Absorb", wiki: "http://www.serebii.net/pokedex-sm/331.shtml", image: "http://www.serebii.net/sunmoon/pokemon/331.png"},
 {id: "cacturne", name: "Cacturne", dex: 332, alola: -1, type: "Grass/Dark", ability: "Sand Veil/None/Water Absorb", wiki: "http://www.serebii.net/pokedex-sm/332.shtml", image: "http://www.serebii.net/sunmoon/pokemon/332.png"},
 {id: "swablu", name: "Swablu", dex: 333, alola: -1, type: "Normal/Flying", ability: "Natural Cure/None/Cloud Nine", wiki: "http://www.serebii.net/pokedex-sm/333.shtml", image: "http://www.serebii.net/sunmoon/pokemon/333.png"},
 {id: "altaria", name: "Altaria", dex: 334, alola: -1, type: "Dragon/Flying", ability: "Natural Cure/None/Cloud Nine", wiki: "http://www.serebii.net/pokedex-sm/334.shtml", image: "http://www.serebii.net/sunmoon/pokemon/334.png"},
 {id: "zangoose", name: "Zangoose", dex: 335, alola: -1, type: "Normal", ability: "Immunity/None/Toxic Boost", wiki: "http://www.serebii.net/pokedex-sm/335.shtml", image: "http://www.serebii.net/sunmoon/pokemon/335.png"},
 {id: "seviper", name: "Seviper", dex: 336, alola: -1, type: "Poison", ability: "Shed Skin/None/Infiltrator", wiki: "http://www.serebii.net/pokedex-sm/336.shtml", image: "http://www.serebii.net/sunmoon/pokemon/336.png"},
 {id: "lunatone", name: "Lunatone", dex: 337, alola: -1, type: "Rock/Psychic", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/337.shtml", image: "http://www.serebii.net/sunmoon/pokemon/337.png"},
 {id: "solrock", name: "Solrock", dex: 338, alola: -1, type: "Rock/Psychic", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/338.shtml", image: "http://www.serebii.net/sunmoon/pokemon/338.png"},
 {id: "barboach", name: "Barboach", dex: 339, alola: 93, type: "Water/Ground", ability: "Oblivious/Anticipation/Hydration", wiki: "http://www.serebii.net/pokedex-sm/339.shtml", image: "http://www.serebii.net/sunmoon/pokemon/339.png"},
 {id: "whiscash", name: "Whiscash", dex: 340, alola: 94, type: "Water/Ground", ability: "Oblivious/Anticipation/Hydration", wiki: "http://www.serebii.net/pokedex-sm/340.shtml", image: "http://www.serebii.net/sunmoon/pokemon/340.png"},
 {id: "corphish", name: "Corphish", dex: 341, alola: -1, type: "Water", ability: "Hyper Cutter/Shell Armor/Adaptability", wiki: "http://www.serebii.net/pokedex-sm/341.shtml", image: "http://www.serebii.net/sunmoon/pokemon/341.png"},
 {id: "crawdaunt", name: "Crawdaunt", dex: 342, alola: -1, type: "Water/Dark", ability: "Hyper Cutter/Shell Armor/Adaptability", wiki: "http://www.serebii.net/pokedex-sm/342.shtml", image: "http://www.serebii.net/sunmoon/pokemon/342.png"},
 {id: "baltoy", name: "Baltoy", dex: 343, alola: -1, type: "Ground/Psychic", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/343.shtml", image: "http://www.serebii.net/sunmoon/pokemon/343.png"},
 {id: "claydol", name: "Claydol", dex: 344, alola: -1, type: "Ground/Psychic", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/344.shtml", image: "http://www.serebii.net/sunmoon/pokemon/344.png"},
 {id: "lileep", name: "Lileep", dex: 345, alola: -1, type: "Rock/Grass", ability: "Suction Cups/None/Storm Drain", wiki: "http://www.serebii.net/pokedex-sm/345.shtml", image: "http://www.serebii.net/sunmoon/pokemon/345.png"},
 {id: "cradily", name: "Cradily", dex: 346, alola: -1, type: "Rock/Grass", ability: "Suction Cups/None/Storm Drain", wiki: "http://www.serebii.net/pokedex-sm/346.shtml", image: "http://www.serebii.net/sunmoon/pokemon/346.png"},
 {id: "anorith", name: "Anorith", dex: 347, alola: -1, type: "Rock/Bug", ability: "Battle Armor/None/Swift Swim", wiki: "http://www.serebii.net/pokedex-sm/347.shtml", image: "http://www.serebii.net/sunmoon/pokemon/347.png"},
 {id: "armaldo", name: "Armaldo", dex: 348, alola: -1, type: "Rock/Bug", ability: "Battle Armor/None/Swift Swim", wiki: "http://www.serebii.net/pokedex-sm/348.shtml", image: "http://www.serebii.net/sunmoon/pokemon/348.png"},
 {id: "feebas", name: "Feebas", dex: 349, alola: 155, type: "Water", ability: "Swift Swim/Oblivious/Adaptability", wiki: "http://www.serebii.net/pokedex-sm/349.shtml", image: "http://www.serebii.net/sunmoon/pokemon/349.png"},
 {id: "milotic", name: "Milotic", dex: 350, alola: 156, type: "Water", ability: "Marvel Scale/Competitive/Cute Charm", wiki: "http://www.serebii.net/pokedex-sm/350.shtml", image: "http://www.serebii.net/sunmoon/pokemon/350.png"},
 {id: "castform", name: "Castform", dex: 351, alola: 181, type: "Normal", ability: "Forecast", wiki: "http://www.serebii.net/pokedex-sm/351.shtml", image: "http://www.serebii.net/sunmoon/pokemon/351.png"},
 {id: "castform sunny", name: "Castform Sunny", dex: 351, alola: -1, type: "Fire", ability: "Forecast", wiki: "http://www.serebii.net/pokedex-sm/351.shtml", image: "http://www.serebii.net/sunmoon/pokemon/351-s.png"},
 {id: "castform rainy", name: "Castform", dex: 351, alola: -1, type: "Water", ability: "Forecast", wiki: "http://www.serebii.net/pokedex-sm/351.shtml", image: "http://www.serebii.net/sunmoon/pokemon/351-r.png"},
 {id: "castform snowy", name: "Castform Snowy", dex: 351, alola: -1, type: "Ice", ability: "Forecast", wiki: "http://www.serebii.net/pokedex-sm/351.shtml", image: "http://www.serebii.net/sunmoon/pokemon/351-i.png"},
 {id: "kecleon", name: "Kecleon", dex: 352, alola: -1, type: "Normal", ability: "Color Change/None/Protean/VI", wiki: "http://www.serebii.net/pokedex-sm/352.shtml", image: "http://www.serebii.net/sunmoon/pokemon/352.png"},
 {id: "shuppet", name: "Shuppet", dex: 353, alola: -1, type: "Ghost", ability: "Insomnia/Frisk/Cursed Body", wiki: "http://www.serebii.net/pokedex-sm/353.shtml", image: "http://www.serebii.net/sunmoon/pokemon/353.png"},
 {id: "banette", name: "Banette", dex: 354, alola: -1, type: "Ghost", ability: "Insomnia/Frisk/Cursed Body", wiki: "http://www.serebii.net/pokedex-sm/354.shtml", image: "http://www.serebii.net/sunmoon/pokemon/354.png"},
 {id: "duskull", name: "Duskull", dex: 355, alola: -1, type: "Ghost", ability: "Levitate/None/Frisk/VI", wiki: "http://www.serebii.net/pokedex-sm/355.shtml", image: "http://www.serebii.net/sunmoon/pokemon/355.png"},
 {id: "dusclops", name: "Dusclops", dex: 356, alola: -1, type: "Ghost", ability: "Pressure/None/Frisk/VI", wiki: "http://www.serebii.net/pokedex-sm/356.shtml", image: "http://www.serebii.net/sunmoon/pokemon/356.png"},
 {id: "tropius", name: "Tropius", dex: 357, alola: -1, type: "Grass/Flying", ability: "Chlorophyll/Solar Power/Harvest", wiki: "http://www.serebii.net/pokedex-sm/357.shtml", image: "http://www.serebii.net/sunmoon/pokemon/357.png"},
 {id: "chimecho", name: "Chimecho", dex: 358, alola: -1, type: "Psychic", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/358.shtml", image: "http://www.serebii.net/sunmoon/pokemon/358.png"},
 {id: "absol", name: "Absol", dex: 359, alola: 245, type: "Dark", ability: "Pressure/Super Luck/Justified", wiki: "http://www.serebii.net/pokedex-sm/359.shtml", image: "http://www.serebii.net/sunmoon/pokemon/359.png"},
 {id: "wynaut", name: "Wynaut", dex: 360, alola: -1, type: "Psychic", ability: "Shadow Tag/None/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/360.shtml", image: "http://www.serebii.net/sunmoon/pokemon/360.png"},
 {id: "snorunt", name: "Snorunt", dex: 361, alola: 246, type: "Ice", ability: "Inner Focus/Ice Body/Moody", wiki: "http://www.serebii.net/pokedex-sm/361.shtml", image: "http://www.serebii.net/sunmoon/pokemon/361.png"},
 {id: "glalie", name: "Glalie", dex: 362, alola: 247, type: "Ice", ability: "Inner Focus/Ice Body/Moody", wiki: "http://www.serebii.net/pokedex-sm/362.shtml", image: "http://www.serebii.net/sunmoon/pokemon/362.png"},
 {id: "spheal", name: "Spheal", dex: 363, alola: -1, type: "Ice/Water", ability: "Thick Fat/Ice Body/Oblivious", wiki: "http://www.serebii.net/pokedex-sm/363.shtml", image: "http://www.serebii.net/sunmoon/pokemon/363.png"},
 {id: "sealeo", name: "Sealeo", dex: 364, alola: -1, type: "Ice/Water", ability: "Thick Fat/Ice Body/Oblivious", wiki: "http://www.serebii.net/pokedex-sm/364.shtml", image: "http://www.serebii.net/sunmoon/pokemon/364.png"},
 {id: "walrein", name: "Walrein", dex: 365, alola: -1, type: "Ice/Water", ability: "Thick Fat/Ice Body/Oblivious", wiki: "http://www.serebii.net/pokedex-sm/365.shtml", image: "http://www.serebii.net/sunmoon/pokemon/365.png"},
 {id: "clamperl", name: "Clamperl", dex: 366, alola: -1, type: "Water", ability: "Shell Armor/None/Rattled", wiki: "http://www.serebii.net/pokedex-sm/366.shtml", image: "http://www.serebii.net/sunmoon/pokemon/366.png"},
 {id: "huntail", name: "Huntail", dex: 367, alola: -1, type: "Water", ability: "Swift Swim/None/Water Veil", wiki: "http://www.serebii.net/pokedex-sm/367.shtml", image: "http://www.serebii.net/sunmoon/pokemon/367.png"},
 {id: "gorebyss", name: "Gorebyss", dex: 368, alola: -1, type: "Water", ability: "Swift Swim/None/Hydration", wiki: "http://www.serebii.net/pokedex-sm/368.shtml", image: "http://www.serebii.net/sunmoon/pokemon/368.png"},
 {id: "relicanth", name: "Relicanth", dex: 369, alola: 262, type: "Water/Rock", ability: "Swift Swim/Rock Head/Sturdy", wiki: "http://www.serebii.net/pokedex-sm/369.shtml", image: "http://www.serebii.net/sunmoon/pokemon/369.png"},
 {id: "luvdisc", name: "Luvdisc", dex: 370, alola: 111, type: "Water", ability: "Swift Swim/None/Hydration", wiki: "http://www.serebii.net/pokedex-sm/370.shtml", image: "http://www.serebii.net/sunmoon/pokemon/370.png"},
 {id: "bagon", name: "Bagon", dex: 371, alola: 117, type: "Dragon", ability: "Rock Head/None/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/371.shtml", image: "http://www.serebii.net/sunmoon/pokemon/371.png"},
 {id: "shelgon", name: "Shelgon", dex: 372, alola: 118, type: "Dragon", ability: "Rock Head/None/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/372.shtml", image: "http://www.serebii.net/sunmoon/pokemon/372.png"},
 {id: "salamence", name: "Salamence", dex: 373, alola: 119, type: "Dragon/Flying", ability: "Intimidate/None/Moxie", wiki: "http://www.serebii.net/pokedex-sm/373.shtml", image: "http://www.serebii.net/sunmoon/pokemon/373.png"},
 {id: "beldum", name: "Beldum", dex: 374, alola: 214, type: "Steel/Psychic", ability: "Clear Body/None/Light Metal", wiki: "http://www.serebii.net/pokedex-sm/374.shtml", image: "http://www.serebii.net/sunmoon/pokemon/374.png"},
 {id: "metang", name: "Metang", dex: 375, alola: 215, type: "Steel/Psychic", ability: "Clear Body/None/Light Metal", wiki: "http://www.serebii.net/pokedex-sm/375.shtml", image: "http://www.serebii.net/sunmoon/pokemon/375.png"},
 {id: "metagross", name: "Metagross", dex: 376, alola: 216, type: "Steel/Psychic", ability: "Clear Body/None/Light Metal", wiki: "http://www.serebii.net/pokedex-sm/376.shtml", image: "http://www.serebii.net/sunmoon/pokemon/376.png"},
 {id: "regirock", name: "Regirock", dex: 377, alola: -1, type: "Rock", ability: "Clear Body/None/Sturdy", wiki: "http://www.serebii.net/pokedex-sm/377.shtml", image: "http://www.serebii.net/sunmoon/pokemon/377.png"},
 {id: "regice", name: "Regice", dex: 378, alola: -1, type: "Ice", ability: "Clear Body/None/Ice Body", wiki: "http://www.serebii.net/pokedex-sm/378.shtml", image: "http://www.serebii.net/sunmoon/pokemon/378.png"},
 {id: "registeel", name: "Registeel", dex: 379, alola: -1, type: "Steel", ability: "Clear Body/None/Light Metal", wiki: "http://www.serebii.net/pokedex-sm/379.shtml", image: "http://www.serebii.net/sunmoon/pokemon/379.png"},
 {id: "latias", name: "Latias", dex: 380, alola: -1, type: "Dragon/Psychic", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/380.shtml", image: "http://www.serebii.net/sunmoon/pokemon/380.png"},
 {id: "latios", name: "Latios", dex: 381, alola: -1, type: "Dragon/Psychic", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/381.shtml", image: "http://www.serebii.net/sunmoon/pokemon/381.png"},
 {id: "kyogre", name: "Kyogre", dex: 382, alola: -1, type: "Water", ability: "Drizzle", wiki: "http://www.serebii.net/pokedex-sm/382.shtml", image: "http://www.serebii.net/sunmoon/pokemon/382.png"},
 {id: "groudon", name: "Groudon", dex: 383, alola: -1, type: "Ground", ability: "Drought", wiki: "http://www.serebii.net/pokedex-sm/383.shtml", image: "http://www.serebii.net/sunmoon/pokemon/383.png"},
 {id: "rayquaza", name: "Rayquaza", dex: 384, alola: -1, type: "Dragon/Flying", ability: "Air Lock", wiki: "http://www.serebii.net/pokedex-sm/384.shtml", image: "http://www.serebii.net/sunmoon/pokemon/384.png"},
 {id: "jirachi", name: "Jirachi", dex: 385, alola: -1, type: "Steel/Psychic", ability: "Serene Grace", wiki: "http://www.serebii.net/pokedex-sm/385.shtml", image: "http://www.serebii.net/sunmoon/pokemon/385.png"},
 {id: "deoxys", name: "Deoxys", dex: 386, alola: -1, type: "Psychic", ability: "Pressure", wiki: "http://www.serebii.net/pokedex-sm/386.shtml", image: "http://www.serebii.net/sunmoon/pokemon/386.png"},
 {id: "turtwig", name: "Turtwig", dex: 387, alola: -1, type: "Grass", ability: "Overgrow/None/Shell Armor", wiki: "http://www.serebii.net/pokedex-sm/387.shtml", image: "http://www.serebii.net/sunmoon/pokemon/387.png"},
 {id: "grotle", name: "Grotle", dex: 388, alola: -1, type: "Grass", ability: "Overgrow/None/Shell Armor", wiki: "http://www.serebii.net/pokedex-sm/388.shtml", image: "http://www.serebii.net/sunmoon/pokemon/388.png"},
 {id: "torterra", name: "Torterra", dex: 389, alola: -1, type: "Grass/Ground", ability: "Overgrow/None/Shell Armor", wiki: "http://www.serebii.net/pokedex-sm/389.shtml", image: "http://www.serebii.net/sunmoon/pokemon/389.png"},
 {id: "chimchar", name: "Chimchar", dex: 390, alola: -1, type: "Fire", ability: "Blaze/None/Iron Fist", wiki: "http://www.serebii.net/pokedex-sm/390.shtml", image: "http://www.serebii.net/sunmoon/pokemon/390.png"},
 {id: "monferno", name: "Monferno", dex: 391, alola: -1, type: "Fire/Fighting", ability: "Blaze/None/Iron Fist", wiki: "http://www.serebii.net/pokedex-sm/391.shtml", image: "http://www.serebii.net/sunmoon/pokemon/391.png"},
 {id: "infernape", name: "Infernape", dex: 392, alola: -1, type: "Fire/Fighting", ability: "Blaze/None/Iron Fist", wiki: "http://www.serebii.net/pokedex-sm/392.shtml", image: "http://www.serebii.net/sunmoon/pokemon/392.png"},
 {id: "piplup", name: "Piplup", dex: 393, alola: -1, type: "Water", ability: "Torrent/None/Defiant", wiki: "http://www.serebii.net/pokedex-sm/393.shtml", image: "http://www.serebii.net/sunmoon/pokemon/393.png"},
 {id: "prinplup", name: "Prinplup", dex: 394, alola: -1, type: "Water", ability: "Torrent/None/Defiant", wiki: "http://www.serebii.net/pokedex-sm/394.shtml", image: "http://www.serebii.net/sunmoon/pokemon/394.png"},
 {id: "empoleon", name: "Empoleon", dex: 395, alola: -1, type: "Water/Steel", ability: "Torrent/None/Defiant", wiki: "http://www.serebii.net/pokedex-sm/395.shtml", image: "http://www.serebii.net/sunmoon/pokemon/395.png"},
 {id: "starly", name: "Starly", dex: 396, alola: -1, type: "Normal/Flying", ability: "Keen Eye/None/Reckless/VI", wiki: "http://www.serebii.net/pokedex-sm/396.shtml", image: "http://www.serebii.net/sunmoon/pokemon/396.png"},
 {id: "staravia", name: "Staravia", dex: 397, alola: -1, type: "Normal/Flying", ability: "Intimidate/None/Reckless", wiki: "http://www.serebii.net/pokedex-sm/397.shtml", image: "http://www.serebii.net/sunmoon/pokemon/397.png"},
 {id: "staraptor", name: "Staraptor", dex: 398, alola: -1, type: "Normal/Flying", ability: "Intimidate/None/Reckless", wiki: "http://www.serebii.net/pokedex-sm/398.shtml", image: "http://www.serebii.net/sunmoon/pokemon/398.png"},
 {id: "bidoof", name: "Bidoof", dex: 399, alola: -1, type: "Normal", ability: "Simple/Unaware/Moody", wiki: "http://www.serebii.net/pokedex-sm/399.shtml", image: "http://www.serebii.net/sunmoon/pokemon/399.png"},
 {id: "bibarel", name: "Bibarel", dex: 400, alola: -1, type: "Normal/Water", ability: "Simple/Unaware/Moody", wiki: "http://www.serebii.net/pokedex-sm/400.shtml", image: "http://www.serebii.net/sunmoon/pokemon/400.png"},
 {id: "kricketot", name: "Kricketot", dex: 401, alola: -1, type: "Bug", ability: "Shed Skin/None/Run Away", wiki: "http://www.serebii.net/pokedex-sm/401.shtml", image: "http://www.serebii.net/sunmoon/pokemon/401.png"},
 {id: "kricketune", name: "Kricketune", dex: 402, alola: -1, type: "Bug", ability: "Swarm/None/Technician", wiki: "http://www.serebii.net/pokedex-sm/402.shtml", image: "http://www.serebii.net/sunmoon/pokemon/402.png"},
 {id: "shinx", name: "Shinx", dex: 403, alola: -1, type: "Electric", ability: "Rivalry/Intimidate/Guts", wiki: "http://www.serebii.net/pokedex-sm/403.shtml", image: "http://www.serebii.net/sunmoon/pokemon/403.png"},
 {id: "luxio", name: "Luxio", dex: 404, alola: -1, type: "Electric", ability: "Rivalry/Intimidate/Guts", wiki: "http://www.serebii.net/pokedex-sm/404.shtml", image: "http://www.serebii.net/sunmoon/pokemon/404.png"},
 {id: "luxray", name: "Luxray", dex: 405, alola: -1, type: "Electric", ability: "Rivalry/Intimidate/Guts", wiki: "http://www.serebii.net/pokedex-sm/405.shtml", image: "http://www.serebii.net/sunmoon/pokemon/405.png"},
 {id: "budew", name: "Budew", dex: 406, alola: -1, type: "Grass/Poison", ability: "Natural Cure/Poison Point/Leaf Guard", wiki: "http://www.serebii.net/pokedex-sm/406.shtml", image: "http://www.serebii.net/sunmoon/pokemon/406.png"},
 {id: "roserade", name: "Roserade", dex: 407, alola: -1, type: "Grass/Poison", ability: "Natural Cure/Poison Point/Technician", wiki: "http://www.serebii.net/pokedex-sm/407.shtml", image: "http://www.serebii.net/sunmoon/pokemon/407.png"},
 {id: "cranidos", name: "Cranidos", dex: 408, alola: 188, type: "Rock", ability: "Mold Breaker/None/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/408.shtml", image: "http://www.serebii.net/sunmoon/pokemon/408.png"},
 {id: "rampardos", name: "Rampardos", dex: 409, alola: 189, type: "Rock", ability: "Mold Breaker/None/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/409.shtml", image: "http://www.serebii.net/sunmoon/pokemon/409.png"},
 {id: "shieldon", name: "Shieldon", dex: 410, alola: 190, type: "Rock/Steel", ability: "Sturdy/None/Soundproof", wiki: "http://www.serebii.net/pokedex-sm/410.shtml", image: "http://www.serebii.net/sunmoon/pokemon/410.png"},
 {id: "bastiodon", name: "Bastiodon", dex: 411, alola: 191, type: "Rock/Steel", ability: "Sturdy/None/Soundproof", wiki: "http://www.serebii.net/pokedex-sm/411.shtml", image: "http://www.serebii.net/sunmoon/pokemon/411.png"},
 {id: "burmy", name: "Burmy", dex: 412, alola: -1, type: "Bug", ability: "Shed Skin/None/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/412.shtml", image: "http://www.serebii.net/sunmoon/pokemon/412.png"},
 {id: "wormadam", name: "Wormadam", dex: 413, alola: -1, type: "Bug/Grass", ability: "Anticipation/None/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/413.shtml", image: "http://www.serebii.net/sunmoon/pokemon/413.png"},
 {id: "wormadam sandy", name: "Wormadam Sandy", dex: 413, alola: -1, type: "Bug/Ground", ability: "Anticipation/None/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/413.shtml", image: "http://www.serebii.net/sunmoon/pokemon/413-c.png"},
 {id: "wormadam trash", name: "Wormadam Trash", dex: 413, alola: -1, type: "Bug/Steel", ability: "Anticipation/None/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/413.shtml", image: "http://www.serebii.net/sunmoon/pokemon/413-s.png"},
 {id: "mothim", name: "Mothim", dex: 414, alola: -1, type: "Bug/Flying", ability: "Swarm/None/Tinted Lens", wiki: "http://www.serebii.net/pokedex-sm/414.shtml", image: "http://www.serebii.net/sunmoon/pokemon/414.png"},
 {id: "combee", name: "Combee", dex: 415, alola: -1, type: "Bug/Flying", ability: "Honey Gather/None/Hustle", wiki: "http://www.serebii.net/pokedex-sm/415.shtml", image: "http://www.serebii.net/sunmoon/pokemon/415.png"},
 {id: "vespiquen", name: "Vespiquen", dex: 416, alola: -1, type: "Bug/Flying", ability: "Pressure/None/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/416.shtml", image: "http://www.serebii.net/sunmoon/pokemon/416.png"},
 {id: "pachirisu", name: "Pachirisu", dex: 417, alola: -1, type: "Electric", ability: "Run Away/Pickup/Volt Absorb", wiki: "http://www.serebii.net/pokedex-sm/417.shtml", image: "http://www.serebii.net/sunmoon/pokemon/417.png"},
 {id: "buizel", name: "Buizel", dex: 418, alola: -1, type: "Water", ability: "Swift Swim/None/Water Veil", wiki: "http://www.serebii.net/pokedex-sm/418.shtml", image: "http://www.serebii.net/sunmoon/pokemon/418.png"},
 {id: "floatzel", name: "Floatzel", dex: 419, alola: -1, type: "Water", ability: "Swift Swim/None/Water Veil", wiki: "http://www.serebii.net/pokedex-sm/419.shtml", image: "http://www.serebii.net/sunmoon/pokemon/419.png"},
 {id: "cherubi", name: "Cherubi", dex: 420, alola: -1, type: "Grass", ability: "Chlorophyll", wiki: "http://www.serebii.net/pokedex-sm/420.shtml", image: "http://www.serebii.net/sunmoon/pokemon/420.png"},
 {id: "cherrim", name: "Cherrim", dex: 421, alola: -1, type: "Grass", ability: "Flower Gift", wiki: "http://www.serebii.net/pokedex-sm/421.shtml", image: "http://www.serebii.net/sunmoon/pokemon/421.png"},
 {id: "shellos", name: "Shellos", dex: 422, alola: 260, type: "Water", ability: "Sticky Hold/Storm Drain/Sand Force", wiki: "http://www.serebii.net/pokedex-sm/422.shtml", image: "http://www.serebii.net/sunmoon/pokemon/422.png"},
 {id: "gastrodon", name: "Gastrodon", dex: 423, alola: 261, type: "Water/Ground", ability: "Sticky Hold/Storm Drain/Sand Force", wiki: "http://www.serebii.net/pokedex-sm/423.shtml", image: "http://www.serebii.net/sunmoon/pokemon/423.png"},
 {id: "ambipom", name: "Ambipom", dex: 424, alola: -1, type: "Normal", ability: "Technician/Pickup/Skill Link", wiki: "http://www.serebii.net/pokedex-sm/424.shtml", image: "http://www.serebii.net/sunmoon/pokemon/424.png"},
 {id: "drifloon", name: "Drifloon", dex: 425, alola: 52, type: "Ghost/Flying", ability: "Aftermath/Unburden/Flare Boost", wiki: "http://www.serebii.net/pokedex-sm/425.shtml", image: "http://www.serebii.net/sunmoon/pokemon/425.png"},
 {id: "drifblim", name: "Drifblim", dex: 426, alola: 53, type: "Ghost/Flying", ability: "Aftermath/Unburden/Flare Boost", wiki: "http://www.serebii.net/pokedex-sm/426.shtml", image: "http://www.serebii.net/sunmoon/pokemon/426.png"},
 {id: "buneary", name: "Buneary", dex: 427, alola: -1, type: "Normal", ability: "Run Away/Klutz/Limber", wiki: "http://www.serebii.net/pokedex-sm/427.shtml", image: "http://www.serebii.net/sunmoon/pokemon/427.png"},
 {id: "lopunny", name: "Lopunny", dex: 428, alola: -1, type: "Normal", ability: "Cute Charm/Klutz/Limber", wiki: "http://www.serebii.net/pokedex-sm/428.shtml", image: "http://www.serebii.net/sunmoon/pokemon/428.png"},
 {id: "mismagius", name: "Mismagius", dex: 429, alola: 55, type: "Ghost", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/429.shtml", image: "http://www.serebii.net/sunmoon/pokemon/429.png"},
 {id: "honchkrow", name: "Honchkrow", dex: 430, alola: 278, type: "Dark/Flying", ability: "Insomnia/Super Luck/Moxie", wiki: "http://www.serebii.net/pokedex-sm/430.shtml", image: "http://www.serebii.net/sunmoon/pokemon/430.png"},
 {id: "glameow", name: "Glameow", dex: 431, alola: -1, type: "Normal", ability: "Limber/Own Tempo/Keen Eye", wiki: "http://www.serebii.net/pokedex-sm/431.shtml", image: "http://www.serebii.net/sunmoon/pokemon/431.png"},
 {id: "purugly", name: "Purugly", dex: 432, alola: -1, type: "Normal", ability: "Thick Fat/Own Tempo/Defiant", wiki: "http://www.serebii.net/pokedex-sm/432.shtml", image: "http://www.serebii.net/sunmoon/pokemon/432.png"},
 {id: "chingling", name: "Chingling", dex: 433, alola: -1, type: "Psychic", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/433.shtml", image: "http://www.serebii.net/sunmoon/pokemon/433.png"},
 {id: "stunky", name: "Stunky", dex: 434, alola: -1, type: "Poison/Dark", ability: "Stench/Aftermath/Keen Eye", wiki: "http://www.serebii.net/pokedex-sm/434.shtml", image: "http://www.serebii.net/sunmoon/pokemon/434.png"},
 {id: "skuntank", name: "Skuntank", dex: 435, alola: -1, type: "Poison/Dark", ability: "Stench/Aftermath/Keen Eye", wiki: "http://www.serebii.net/pokedex-sm/435.shtml", image: "http://www.serebii.net/sunmoon/pokemon/435.png"},
 {id: "bronzor", name: "Bronzor", dex: 436, alola: -1, type: "Steel/Psychic", ability: "Levitate/Heatproof/Heavy Metal", wiki: "http://www.serebii.net/pokedex-sm/436.shtml", image: "http://www.serebii.net/sunmoon/pokemon/436.png"},
 {id: "bronzong", name: "Bronzong", dex: 437, alola: -1, type: "Steel/Psychic", ability: "Levitate/Heatproof/Heavy Metal", wiki: "http://www.serebii.net/pokedex-sm/437.shtml", image: "http://www.serebii.net/sunmoon/pokemon/437.png"},
 {id: "bonsly", name: "Bonsly", dex: 438, alola: 24, type: "Rock", ability: "Sturdy/Rock Head/Rattled", wiki: "http://www.serebii.net/pokedex-sm/438.shtml", image: "http://www.serebii.net/sunmoon/pokemon/438.png"},
 {id: "mime jr", name: "Mime Jr.", dex: 439, alola: -1, type: "Psychic/Fairy", ability: "Soundproof/Filter/Technician", wiki: "http://www.serebii.net/pokedex-sm/439.shtml", image: "http://www.serebii.net/sunmoon/pokemon/439.png"},
 {id: "happiny", name: "Happiny", dex: 440, alola: 26, type: "Normal", ability: "Natural Cure/Serene Grace/Friend Guard", wiki: "http://www.serebii.net/pokedex-sm/440.shtml", image: "http://www.serebii.net/sunmoon/pokemon/440.png"},
 {id: "chatot", name: "Chatot", dex: 441, alola: -1, type: "Normal/Flying", ability: "Keen Eye/Tangled Feet/Big Pecks", wiki: "http://www.serebii.net/pokedex-sm/441.shtml", image: "http://www.serebii.net/sunmoon/pokemon/441.png"},
 {id: "spiritomb", name: "Spiritomb", dex: 442, alola: -1, type: "Ghost/Dark", ability: "Pressure/None/Infiltrator", wiki: "http://www.serebii.net/pokedex-sm/442.shtml", image: "http://www.serebii.net/sunmoon/pokemon/442.png"},
 {id: "gible", name: "Gible", dex: 443, alola: 238, type: "Dragon/Ground", ability: "Sand Veil/None/Rough Skin", wiki: "http://www.serebii.net/pokedex-sm/443.shtml", image: "http://www.serebii.net/sunmoon/pokemon/443.png"},
 {id: "gabite", name: "Gabite", dex: 444, alola: 239, type: "Dragon/Ground", ability: "Sand Veil/None/Rough Skin", wiki: "http://www.serebii.net/pokedex-sm/444.shtml", image: "http://www.serebii.net/sunmoon/pokemon/444.png"},
 {id: "garchomp", name: "Garchomp", dex: 445, alola: 240, type: "Dragon/Ground", ability: "Sand Veil/None/Rough Skin", wiki: "http://www.serebii.net/pokedex-sm/445.shtml", image: "http://www.serebii.net/sunmoon/pokemon/445.png"},
 {id: "munchlax", name: "Munchlax", dex: 446, alola: 29, type: "Normal", ability: "Pickup/Thick Fat/Gluttony", wiki: "http://www.serebii.net/pokedex-sm/446.shtml", image: "http://www.serebii.net/sunmoon/pokemon/446.png"},
 {id: "riolu", name: "Riolu", dex: 447, alola: 279, type: "Fighting", ability: "Steadfast/Inner Focus/Prankster", wiki: "http://www.serebii.net/pokedex-sm/447.shtml", image: "http://www.serebii.net/sunmoon/pokemon/447.png"},
 {id: "lucario", name: "Lucario", dex: 448, alola: 280, type: "Fighting/Steel", ability: "Steadfast/Inner Focus/Justified", wiki: "http://www.serebii.net/pokedex-sm/448.shtml", image: "http://www.serebii.net/sunmoon/pokemon/448.png"},
 {id: "hippopotas", name: "Hippopotas", dex: 449, alola: -1, type: "Ground", ability: "Sand Stream/None/Sand Force", wiki: "http://www.serebii.net/pokedex-sm/449.shtml", image: "http://www.serebii.net/sunmoon/pokemon/449.png"},
 {id: "hippowdon", name: "Hippowdon", dex: 450, alola: -1, type: "Ground", ability: "Sand Stream/None/Sand Force", wiki: "http://www.serebii.net/pokedex-sm/450.shtml", image: "http://www.serebii.net/sunmoon/pokemon/450.png"},
 {id: "skorupi", name: "Skorupi", dex: 451, alola: -1, type: "Poison/Bug", ability: "Battle Armor/Sniper/Keen Eye", wiki: "http://www.serebii.net/pokedex-sm/451.shtml", image: "http://www.serebii.net/sunmoon/pokemon/451.png"},
 {id: "drapion", name: "Drapion", dex: 452, alola: -1, type: "Poison/Dark", ability: "Battle Armor/Sniper/Keen Eye", wiki: "http://www.serebii.net/pokedex-sm/452.shtml", image: "http://www.serebii.net/sunmoon/pokemon/452.png"},
 {id: "croagunk", name: "Croagunk", dex: 453, alola: -1, type: "Poison/Fighting", ability: "Anticipation/Dry Skin/Poison Touch", wiki: "http://www.serebii.net/pokedex-sm/453.shtml", image: "http://www.serebii.net/sunmoon/pokemon/453.png"},
 {id: "toxicroak", name: "Toxicroak", dex: 454, alola: -1, type: "Poison/Fighting", ability: "Anticipation/Dry Skin/Poison Touch", wiki: "http://www.serebii.net/pokedex-sm/454.shtml", image: "http://www.serebii.net/sunmoon/pokemon/454.png"},
 {id: "carnivine", name: "Carnivine", dex: 455, alola: -1, type: "Grass", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/455.shtml", image: "http://www.serebii.net/sunmoon/pokemon/455.png"},
 {id: "finneon", name: "Finneon", dex: 456, alola: 108, type: "Water", ability: "Swift Swim/Storm Drain/Water Veil", wiki: "http://www.serebii.net/pokedex-sm/456.shtml", image: "http://www.serebii.net/sunmoon/pokemon/456.png"},
 {id: "lumineon", name: "Lumineon", dex: 457, alola: 109, type: "Water", ability: "Swift Swim/Storm Drain/Water Veil", wiki: "http://www.serebii.net/pokedex-sm/457.shtml", image: "http://www.serebii.net/sunmoon/pokemon/457.png"},
 {id: "mantyke", name: "Mantyke", dex: 458, alola: -1, type: "Water/Flying", ability: "Swift Swim/Water Absorb/Water Veil", wiki: "http://www.serebii.net/pokedex-sm/458.shtml", image: "http://www.serebii.net/sunmoon/pokemon/458.png"},
 {id: "snover", name: "Snover", dex: 459, alola: -1, type: "Grass/Ice", ability: "Snow Warning/None/Soundproof", wiki: "http://www.serebii.net/pokedex-sm/459.shtml", image: "http://www.serebii.net/sunmoon/pokemon/459.png"},
 {id: "abomasnow", name: "Abomasnow", dex: 460, alola: -1, type: "Grass/Ice", ability: "Snow Warning/None/Soundproof", wiki: "http://www.serebii.net/pokedex-sm/460.shtml", image: "http://www.serebii.net/sunmoon/pokemon/460.png"},
 {id: "weavile", name: "Weavile", dex: 461, alola: 250, type: "Dark/Ice", ability: "Pressure/None/Pickpocket", wiki: "http://www.serebii.net/pokedex-sm/461.shtml", image: "http://www.serebii.net/sunmoon/pokemon/461.png"},
 {id: "magnezone", name: "Magnezone", dex: 462, alola: 49, type: "Electric/Steel", ability: "Magnet Pull/Sturdy/Analytic", wiki: "http://www.serebii.net/pokedex-sm/462.shtml", image: "http://www.serebii.net/sunmoon/pokemon/462.png"},
 {id: "lickilicky", name: "Lickilicky", dex: 463, alola: -1, type: "Normal", ability: "Own Tempo/Oblivious/Cloud Nine", wiki: "http://www.serebii.net/pokedex-sm/463.shtml", image: "http://www.serebii.net/sunmoon/pokemon/463.png"},
 {id: "rhyperior", name: "Rhyperior", dex: 464, alola: -1, type: "Ground/Rock", ability: "Lightning Rod/Solid Rock/Reckless", wiki: "http://www.serebii.net/pokedex-sm/464.shtml", image: "http://www.serebii.net/sunmoon/pokemon/464.png"},
 {id: "tangrowth", name: "Tangrowth", dex: 465, alola: -1, type: "Grass", ability: "Chlorophyll/Leaf Guard/Regenerator", wiki: "http://www.serebii.net/pokedex-sm/465.shtml", image: "http://www.serebii.net/sunmoon/pokemon/465.png"},
 {id: "electivire", name: "Electivire", dex: 466, alola: 228, type: "Electric", ability: "Motor Drive/None/Vital Spirit", wiki: "http://www.serebii.net/pokedex-sm/466.shtml", image: "http://www.serebii.net/sunmoon/pokemon/466.png"},
 {id: "magmortar", name: "Magmortar", dex: 467, alola: 168, type: "Fire", ability: "Flame Body/None/Vital Spirit", wiki: "http://www.serebii.net/pokedex-sm/467.shtml", image: "http://www.serebii.net/sunmoon/pokemon/467.png"},
 {id: "togekiss", name: "Togekiss", dex: 468, alola: -1, type: "Fairy/Flying", ability: "Hustle/Serene Grace/Super Luck", wiki: "http://www.serebii.net/pokedex-sm/468.shtml", image: "http://www.serebii.net/sunmoon/pokemon/468.png"},
 {id: "yanmega", name: "Yanmega", dex: 469, alola: -1, type: "Bug/Flying", ability: "Speed Boost/Tinted Lens/Frisk", wiki: "http://www.serebii.net/pokedex-sm/469.shtml", image: "http://www.serebii.net/sunmoon/pokemon/469.png"},
 {id: "leafeon", name: "Leafeon", dex: 470, alola: 129, type: "Grass", ability: "Leaf Guard/None/Chlorophyll", wiki: "http://www.serebii.net/pokedex-sm/470.shtml", image: "http://www.serebii.net/sunmoon/pokemon/470.png"},
 {id: "glaceon", name: "Glaceon", dex: 471, alola: 130, type: "Ice", ability: "Snow Cloak/None/Ice Body", wiki: "http://www.serebii.net/pokedex-sm/471.shtml", image: "http://www.serebii.net/sunmoon/pokemon/471.png"},
 {id: "gliscor", name: "Gliscor", dex: 472, alola: -1, type: "Ground/Flying", ability: "Hyper Cutter/Sand Veil/Poison Heal", wiki: "http://www.serebii.net/pokedex-sm/472.shtml", image: "http://www.serebii.net/sunmoon/pokemon/472.png"},
 {id: "mamoswine", name: "Mamoswine", dex: 473, alola: -1, type: "Ice/Ground", ability: "Oblivious/Snow Cloak/Thick Fat", wiki: "http://www.serebii.net/pokedex-sm/473.shtml", image: "http://www.serebii.net/sunmoon/pokemon/473.png"},
 {id: "porygon z", name: "Porygon-Z", dex: 474, alola: -1, type: "Normal", ability: "Adaptability/Download/Analytic", wiki: "http://www.serebii.net/pokedex-sm/474.shtml", image: "http://www.serebii.net/sunmoon/pokemon/474.png"},
 {id: "gallade", name: "Gallade", dex: 475, alola: -1, type: "Psychic/Fighting", ability: "Steadfast/None/Justified", wiki: "http://www.serebii.net/pokedex-sm/475.shtml", image: "http://www.serebii.net/sunmoon/pokemon/475.png"},
 {id: "probopass", name: "Probopass", dex: 476, alola: 199, type: "Rock/Steel", ability: "Sturdy/Magnet Pull/Sand Force", wiki: "http://www.serebii.net/pokedex-sm/476.shtml", image: "http://www.serebii.net/sunmoon/pokemon/476.png"},
 {id: "dusknoir", name: "Dusknoir", dex: 477, alola: -1, type: "Ghost", ability: "Pressure/None/Frisk/VI", wiki: "http://www.serebii.net/pokedex-sm/477.shtml", image: "http://www.serebii.net/sunmoon/pokemon/477.png"},
 {id: "froslass", name: "Froslass", dex: 478, alola: 248, type: "Ice/Ghost", ability: "Snow Cloak/None/Cursed Body", wiki: "http://www.serebii.net/pokedex-sm/478.shtml", image: "http://www.serebii.net/sunmoon/pokemon/478.png"},
 {id: "rotom", name: "Rotom", dex: 479, alola: -1, type: "Electric/Ghost", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/479.shtml", image: "http://www.serebii.net/sunmoon/pokemon/479.png"},
 {id: "rotom heat", name: "Rotom Heat", dex: 479, alola: -1, type: "Electric/Fire", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/479.shtml", image: "http://www.serebii.net/sunmoon/pokemon/479-h.png"},
 {id: "rotom wash", name: "Rotom Wash", dex: 479, alola: -1, type: "Electric/Water", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/479.shtml", image: "http://www.serebii.net/sunmoon/pokemon/479-w.png"},
 {id: "rotom mow", name: "Rotom Mow", dex: 479, alola: -1, type: "Electric/Grass", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/479.shtml", image: "http://www.serebii.net/sunmoon/pokemon/479-m.png"},
 {id: "rotom fan", name: "Rotom Fan", dex: 479, alola: -1, type: "Electric/Flying", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/479.shtml", image: "http://www.serebii.net/sunmoon/pokemon/479-s.png"},
 {id: "rotom frost", name: "Rotom Frost", dex: 479, alola: -1, type: "Electric/Frost", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/479.shtml", image: "http://www.serebii.net/sunmoon/pokemon/479-f.png"},
 {id: "uxie", name: "Uxie", dex: 480, alola: -1, type: "Psychic", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/480.shtml", image: "http://www.serebii.net/sunmoon/pokemon/480.png"},
 {id: "mesprit", name: "Mesprit", dex: 481, alola: -1, type: "Psychic", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/481.shtml", image: "http://www.serebii.net/sunmoon/pokemon/481.png"},
 {id: "azelf", name: "Azelf", dex: 482, alola: -1, type: "Psychic", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/482.shtml", image: "http://www.serebii.net/sunmoon/pokemon/482.png"},
 {id: "dialga", name: "Dialga", dex: 483, alola: -1, type: "Steel/Dragon", ability: "Pressure/None/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/483.shtml", image: "http://www.serebii.net/sunmoon/pokemon/483.png"},
 {id: "palkia", name: "Palkia", dex: 484, alola: -1, type: "Water/Dragon", ability: "Pressure/None/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/484.shtml", image: "http://www.serebii.net/sunmoon/pokemon/484.png"},
 {id: "heatran", name: "Heatran", dex: 485, alola: -1, type: "Fire/Steel", ability: "Flash Fire/None/Flame Body", wiki: "http://www.serebii.net/pokedex-sm/485.shtml", image: "http://www.serebii.net/sunmoon/pokemon/485.png"},
 {id: "regigigas", name: "Regigigas", dex: 486, alola: -1, type: "Normal", ability: "Slow Start", wiki: "http://www.serebii.net/pokedex-sm/486.shtml", image: "http://www.serebii.net/sunmoon/pokemon/486.png"},
 {id: "giratina", name: "Giratina", dex: 487, alola: -1, type: "Ghost/Dragon", ability: "Pressure/None/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/487.shtml", image: "http://www.serebii.net/sunmoon/pokemon/487.png"},
 {id: "giratina origin", name: "Giratina", dex: 487, alola: -1, type: "Ghost/Dragon", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/487.shtml", image: "http://www.serebii.net/sunmoon/pokemon/487-o.png"},
 {id: "cresselia", name: "Cresselia", dex: 488, alola: -1, type: "Psychic", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/488.shtml", image: "http://www.serebii.net/sunmoon/pokemon/488.png"},
 {id: "phione", name: "Phione", dex: 489, alola: -1, type: "Water", ability: "Hydration", wiki: "http://www.serebii.net/pokedex-sm/489.shtml", image: "http://www.serebii.net/sunmoon/pokemon/489.png"},
 {id: "manaphy", name: "Manaphy", dex: 490, alola: -1, type: "Water", ability: "Hydration", wiki: "http://www.serebii.net/pokedex-sm/490.shtml", image: "http://www.serebii.net/sunmoon/pokemon/490.png"},
 {id: "darkrai", name: "Darkrai", dex: 491, alola: -1, type: "Dark", ability: "Bad Dreams", wiki: "http://www.serebii.net/pokedex-sm/491.shtml", image: "http://www.serebii.net/sunmoon/pokemon/491.png"},
 {id: "shaymin", name: "Shaymin", dex: 492, alola: -1, type: "Grass", ability: "Natural Cure", wiki: "http://www.serebii.net/pokedex-sm/492.shtml", image: "http://www.serebii.net/sunmoon/pokemon/492.png"},
 {id: "shaymin sky", name: "Shaymin Sky", dex: 492, alola: -1, type: "Grass/Flying", ability: "Serene Grace", wiki: "http://www.serebii.net/pokedex-sm/492.shtml", image: "http://www.serebii.net/sunmoon/pokemon/492-s.png"},
 {id: "arceus", name: "Arceus", dex: 493, alola: -1, type: "Normal", ability: "Multitype", wiki: "http://www.serebii.net/pokedex-sm/493.shtml", image: "http://www.serebii.net/sunmoon/pokemon/493.png"},
 {id: "victini", name: "Victini", dex: 494, alola: -1, type: "Psychic/Fire", ability: "Victory Star", wiki: "http://www.serebii.net/pokedex-sm/494.shtml", image: "http://www.serebii.net/sunmoon/pokemon/494.png"},
 {id: "snivy", name: "Snivy", dex: 495, alola: -1, type: "Grass", ability: "Overgrow/None/Contrary", wiki: "http://www.serebii.net/pokedex-sm/495.shtml", image: "http://www.serebii.net/sunmoon/pokemon/495.png"},
 {id: "servine", name: "Servine", dex: 496, alola: -1, type: "Grass", ability: "Overgrow/None/Contrary", wiki: "http://www.serebii.net/pokedex-sm/496.shtml", image: "http://www.serebii.net/sunmoon/pokemon/496.png"},
 {id: "serperior", name: "Serperior", dex: 497, alola: -1, type: "Grass", ability: "Overgrow/None/Contrary", wiki: "http://www.serebii.net/pokedex-sm/497.shtml", image: "http://www.serebii.net/sunmoon/pokemon/497.png"},
 {id: "tepig", name: "Tepig", dex: 498, alola: -1, type: "Fire", ability: "Blaze/None/Thick Fat", wiki: "http://www.serebii.net/pokedex-sm/498.shtml", image: "http://www.serebii.net/sunmoon/pokemon/498.png"},
 {id: "pignite", name: "Pignite", dex: 499, alola: -1, type: "Fire/Fighting", ability: "Blaze/None/Thick Fat", wiki: "http://www.serebii.net/pokedex-sm/499.shtml", image: "http://www.serebii.net/sunmoon/pokemon/499.png"},
 {id: "emboar", name: "Emboar", dex: 500, alola: -1, type: "Fire/Fighting", ability: "Blaze/None/Reckless", wiki: "http://www.serebii.net/pokedex-sm/500.shtml", image: "http://www.serebii.net/sunmoon/pokemon/500.png"},
 {id: "oshawott", name: "Oshawott", dex: 501, alola: -1, type: "Water", ability: "Torrent/None/Shell Armor", wiki: "http://www.serebii.net/pokedex-sm/501.shtml", image: "http://www.serebii.net/sunmoon/pokemon/501.png"},
 {id: "dewott", name: "Dewott", dex: 502, alola: -1, type: "Water", ability: "Torrent/None/Shell Armor", wiki: "http://www.serebii.net/pokedex-sm/502.shtml", image: "http://www.serebii.net/sunmoon/pokemon/502.png"},
 {id: "samurott", name: "Samurott", dex: 503, alola: -1, type: "Water", ability: "Torrent/None/Shell Armor", wiki: "http://www.serebii.net/pokedex-sm/503.shtml", image: "http://www.serebii.net/sunmoon/pokemon/503.png"},
 {id: "patrat", name: "Patrat", dex: 504, alola: -1, type: "Normal", ability: "Run Away/Keen Eye/Analytic", wiki: "http://www.serebii.net/pokedex-sm/504.shtml", image: "http://www.serebii.net/sunmoon/pokemon/504.png"},
 {id: "watchog", name: "Watchog", dex: 505, alola: -1, type: "Normal", ability: "Illuminate/Keen Eye/Analytic", wiki: "http://www.serebii.net/pokedex-sm/505.shtml", image: "http://www.serebii.net/sunmoon/pokemon/505.png"},
 {id: "lillipup", name: "Lillipup", dex: 506, alola: 120, type: "Normal", ability: "Vital Spirit/Pickup/Run Away", wiki: "http://www.serebii.net/pokedex-sm/506.shtml", image: "http://www.serebii.net/sunmoon/pokemon/506.png"},
 {id: "herdier", name: "Herdier", dex: 507, alola: 121, type: "Normal", ability: "Intimidate/Sand Rush/Scrappy", wiki: "http://www.serebii.net/pokedex-sm/507.shtml", image: "http://www.serebii.net/sunmoon/pokemon/507.png"},
 {id: "stoutland", name: "Stoutland", dex: 508, alola: 122, type: "Normal", ability: "Intimidate/Sand Rush/Scrappy", wiki: "http://www.serebii.net/pokedex-sm/508.shtml", image: "http://www.serebii.net/sunmoon/pokemon/508.png"},
 {id: "purrloin", name: "Purrloin", dex: 509, alola: -1, type: "Dark", ability: "Limber/Unburden/Prankster", wiki: "http://www.serebii.net/pokedex-sm/509.shtml", image: "http://www.serebii.net/sunmoon/pokemon/509.png"},
 {id: "liepard", name: "Liepard", dex: 510, alola: -1, type: "Dark", ability: "Limber/Unburden/Prankster", wiki: "http://www.serebii.net/pokedex-sm/510.shtml", image: "http://www.serebii.net/sunmoon/pokemon/510.png"},
 {id: "pansage", name: "Pansage", dex: 511, alola: -1, type: "Grass", ability: "Gluttony/None/Overgrow", wiki: "http://www.serebii.net/pokedex-sm/511.shtml", image: "http://www.serebii.net/sunmoon/pokemon/511.png"},
 {id: "simisage", name: "Simisage", dex: 512, alola: -1, type: "Grass", ability: "Gluttony/None/Overgrow", wiki: "http://www.serebii.net/pokedex-sm/512.shtml", image: "http://www.serebii.net/sunmoon/pokemon/512.png"},
 {id: "pansear", name: "Pansear", dex: 513, alola: -1, type: "Fire", ability: "Gluttony/None/Blaze", wiki: "http://www.serebii.net/pokedex-sm/513.shtml", image: "http://www.serebii.net/sunmoon/pokemon/513.png"},
 {id: "simisear", name: "Simisear", dex: 514, alola: -1, type: "Fire", ability: "Gluttony/None/Blaze", wiki: "http://www.serebii.net/pokedex-sm/514.shtml", image: "http://www.serebii.net/sunmoon/pokemon/514.png"},
 {id: "panpour", name: "Panpour", dex: 515, alola: -1, type: "Water", ability: "Gluttony/None/Torrent", wiki: "http://www.serebii.net/pokedex-sm/515.shtml", image: "http://www.serebii.net/sunmoon/pokemon/515.png"},
 {id: "simipour", name: "Simipour", dex: 516, alola: -1, type: "Water", ability: "Gluttony/None/Torrent", wiki: "http://www.serebii.net/pokedex-sm/516.shtml", image: "http://www.serebii.net/sunmoon/pokemon/516.png"},
 {id: "munna", name: "Munna", dex: 517, alola: -1, type: "Psychic", ability: "Forewarn/Synchronize/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/517.shtml", image: "http://www.serebii.net/sunmoon/pokemon/517.png"},
 {id: "musharna", name: "Musharna", dex: 518, alola: -1, type: "Psychic", ability: "Forewarn/Synchronize/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/518.shtml", image: "http://www.serebii.net/sunmoon/pokemon/518.png"},
 {id: "pidove", name: "Pidove", dex: 519, alola: -1, type: "Normal/Flying", ability: "Big Pecks/Super Luck/Rivalry", wiki: "http://www.serebii.net/pokedex-sm/519.shtml", image: "http://www.serebii.net/sunmoon/pokemon/519.png"},
 {id: "tranquill", name: "Tranquill", dex: 520, alola: -1, type: "Normal/Flying", ability: "Big Pecks/Super Luck/Rivalry", wiki: "http://www.serebii.net/pokedex-sm/520.shtml", image: "http://www.serebii.net/sunmoon/pokemon/520.png"},
 {id: "unfezant", name: "Unfezant", dex: 521, alola: -1, type: "Normal/Flying", ability: "Big Pecks/Super Luck/Rivalry", wiki: "http://www.serebii.net/pokedex-sm/521.shtml", image: "http://www.serebii.net/sunmoon/pokemon/521.png"},
 {id: "blitzle", name: "Blitzle", dex: 522, alola: -1, type: "Electric", ability: "Lightning Rod/Motor Drive/Sap Sipper", wiki: "http://www.serebii.net/pokedex-sm/522.shtml", image: "http://www.serebii.net/sunmoon/pokemon/522.png"},
 {id: "zebstrika", name: "Zebstrika", dex: 523, alola: -1, type: "Electric", ability: "Lightning Rod/Motor Drive/Sap Sipper", wiki: "http://www.serebii.net/pokedex-sm/523.shtml", image: "http://www.serebii.net/sunmoon/pokemon/523.png"},
 {id: "roggenrola", name: "Roggenrola", dex: 524, alola: 98, type: "Rock", ability: "Sturdy/None/Sand Force", wiki: "http://www.serebii.net/pokedex-sm/524.shtml", image: "http://www.serebii.net/sunmoon/pokemon/524.png"},
 {id: "boldore", name: "Boldore", dex: 525, alola: 99, type: "Rock", ability: "Sturdy/None/Sand Force", wiki: "http://www.serebii.net/pokedex-sm/525.shtml", image: "http://www.serebii.net/sunmoon/pokemon/525.png"},
 {id: "gigalith", name: "Gigalith", dex: 526, alola: 100, type: "Rock", ability: "Sturdy/None/Sand Force", wiki: "http://www.serebii.net/pokedex-sm/526.shtml", image: "http://www.serebii.net/sunmoon/pokemon/526.png"},
 {id: "woobat", name: "Woobat", dex: 527, alola: -1, type: "Psychic/Flying", ability: "Unaware/Klutz/Simple", wiki: "http://www.serebii.net/pokedex-sm/527.shtml", image: "http://www.serebii.net/sunmoon/pokemon/527.png"},
 {id: "swoobat", name: "Swoobat", dex: 528, alola: -1, type: "Psychic/Flying", ability: "Unaware/Klutz/Simple", wiki: "http://www.serebii.net/pokedex-sm/528.shtml", image: "http://www.serebii.net/sunmoon/pokemon/528.png"},
 {id: "drilbur", name: "Drilbur", dex: 529, alola: -1, type: "Ground", ability: "Sand Rush/Sand Force/Mold Breaker", wiki: "http://www.serebii.net/pokedex-sm/529.shtml", image: "http://www.serebii.net/sunmoon/pokemon/529.png"},
 {id: "excadrill", name: "Excadrill", dex: 530, alola: -1, type: "Ground/Steel", ability: "Sand Rush/Sand Force/Mold Breaker", wiki: "http://www.serebii.net/pokedex-sm/530.shtml", image: "http://www.serebii.net/sunmoon/pokemon/530.png"},
 {id: "audino", name: "Audino", dex: 531, alola: -1, type: "Normal", ability: "Healer/Regenerator/Klutz", wiki: "http://www.serebii.net/pokedex-sm/531.shtml", image: "http://www.serebii.net/sunmoon/pokemon/531.png"},
 {id: "timburr", name: "Timburr", dex: 532, alola: -1, type: "Fighting", ability: "Guts/Sheer Force/Iron Fist", wiki: "http://www.serebii.net/pokedex-sm/532.shtml", image: "http://www.serebii.net/sunmoon/pokemon/532.png"},
 {id: "gurdurr", name: "Gurdurr", dex: 533, alola: -1, type: "Fighting", ability: "Guts/Sheer Force/Iron Fist", wiki: "http://www.serebii.net/pokedex-sm/533.shtml", image: "http://www.serebii.net/sunmoon/pokemon/533.png"},
 {id: "conkeldurr", name: "Conkeldurr", dex: 534, alola: -1, type: "Fighting", ability: "Guts/Sheer Force/Iron Fist", wiki: "http://www.serebii.net/pokedex-sm/534.shtml", image: "http://www.serebii.net/sunmoon/pokemon/534.png"},
 {id: "tympole", name: "Tympole", dex: 535, alola: -1, type: "Water", ability: "Swift Swim/Hydration/Water Absorb", wiki: "http://www.serebii.net/pokedex-sm/535.shtml", image: "http://www.serebii.net/sunmoon/pokemon/535.png"},
 {id: "palpitoad", name: "Palpitoad", dex: 536, alola: -1, type: "Water/Ground", ability: "Swift Swim/Hydration/Water Absorb", wiki: "http://www.serebii.net/pokedex-sm/536.shtml", image: "http://www.serebii.net/sunmoon/pokemon/536.png"},
 {id: "seismitoad", name: "Seismitoad", dex: 537, alola: -1, type: "Water/Ground", ability: "Swift Swim/Poison Touch/Water Absorb", wiki: "http://www.serebii.net/pokedex-sm/537.shtml", image: "http://www.serebii.net/sunmoon/pokemon/537.png"},
 {id: "throh", name: "Throh", dex: 538, alola: -1, type: "Fighting", ability: "Guts/Inner Focus/Mold Breaker", wiki: "http://www.serebii.net/pokedex-sm/538.shtml", image: "http://www.serebii.net/sunmoon/pokemon/538.png"},
 {id: "sawk", name: "Sawk", dex: 539, alola: -1, type: "Fighting", ability: "Sturdy/Inner Focus/Mold Breaker", wiki: "http://www.serebii.net/pokedex-sm/539.shtml", image: "http://www.serebii.net/sunmoon/pokemon/539.png"},
 {id: "sewaddle", name: "Sewaddle", dex: 540, alola: -1, type: "Bug/Grass", ability: "Swarm/Chlorophyll/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/540.shtml", image: "http://www.serebii.net/sunmoon/pokemon/540.png"},
 {id: "swadloon", name: "Swadloon", dex: 541, alola: -1, type: "Bug/Grass", ability: "Leaf Guard/Chlorophyll/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/541.shtml", image: "http://www.serebii.net/sunmoon/pokemon/541.png"},
 {id: "leavanny", name: "Leavanny", dex: 542, alola: -1, type: "Bug/Grass", ability: "Swarm/Chlorophyll/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/542.shtml", image: "http://www.serebii.net/sunmoon/pokemon/542.png"},
 {id: "venipede", name: "Venipede", dex: 543, alola: -1, type: "Bug/Poison", ability: "Poison Point/Swarm/Speed Boost", wiki: "http://www.serebii.net/pokedex-sm/543.shtml", image: "http://www.serebii.net/sunmoon/pokemon/543.png"},
 {id: "whirlipede", name: "Whirlipede", dex: 544, alola: -1, type: "Bug/Poison", ability: "Poison Point/Swarm/Speed Boost", wiki: "http://www.serebii.net/pokedex-sm/544.shtml", image: "http://www.serebii.net/sunmoon/pokemon/544.png"},
 {id: "scolipede", name: "Scolipede", dex: 545, alola: -1, type: "Bug/Poison", ability: "Poison Point/Swarm/Speed Boost", wiki: "http://www.serebii.net/pokedex-sm/545.shtml", image: "http://www.serebii.net/sunmoon/pokemon/545.png"},
 {id: "cottonee", name: "Cottonee", dex: 546, alola: 87, type: "Grass", ability: "Prankster/Infiltrator/Chlorophyll", wiki: "http://www.serebii.net/pokedex-sm/546.shtml", image: "http://www.serebii.net/sunmoon/pokemon/546.png"},
 {id: "whimsicott", name: "Whimsicott", dex: 547, alola: 88, type: "Grass/Fairy", ability: "Prankster/Infiltrator/Chlorophyll", wiki: "http://www.serebii.net/pokedex-sm/547.shtml", image: "http://www.serebii.net/sunmoon/pokemon/547.png"},
 {id: "petilil", name: "Petilil", dex: 548, alola: 85, type: "Grass", ability: "Chlorophyll/Own Tempo/Leaf Guard", wiki: "http://www.serebii.net/pokedex-sm/548.shtml", image: "http://www.serebii.net/sunmoon/pokemon/548.png"},
 {id: "lilligant", name: "Lilligant", dex: 549, alola: 86, type: "Grass", ability: "Chlorophyll/Own Tempo/Leaf Guard", wiki: "http://www.serebii.net/pokedex-sm/549.shtml", image: "http://www.serebii.net/sunmoon/pokemon/549.png"},
 {id: "basculin", name: "Basculin", dex: 550, alola: -1, type: "Water", ability: "Reckless/Adaptability/Mold Breaker", wiki: "http://www.serebii.net/pokedex-sm/550.shtml", image: "http://www.serebii.net/sunmoon/pokemon/550.png"},
 {id: "basculin blue", name: "Basculin Blue", dex: 550, alola: -1, type: "Water", ability: "Rock Head/Adaptability/Mold Breaker", wiki: "http://www.serebii.net/pokedex-sm/550.shtml", image: "http://www.serebii.net/sunmoon/pokemon/550-b.png"},
 {id: "sandile", name: "Sandile", dex: 551, alola: 232, type: "Ground/Dark", ability: "Intimidate/Moxie/Anger Point", wiki: "http://www.serebii.net/pokedex-sm/551.shtml", image: "http://www.serebii.net/sunmoon/pokemon/551.png"},
 {id: "krokorok", name: "Krokorok", dex: 552, alola: 233, type: "Ground/Dark", ability: "Intimidate/Moxie/Anger Point", wiki: "http://www.serebii.net/pokedex-sm/552.shtml", image: "http://www.serebii.net/sunmoon/pokemon/552.png"},
 {id: "krookodile", name: "Krookodile", dex: 553, alola: 234, type: "Ground/Dark", ability: "Intimidate/Moxie/Anger Point", wiki: "http://www.serebii.net/pokedex-sm/553.shtml", image: "http://www.serebii.net/sunmoon/pokemon/553.png"},
 {id: "darumaka", name: "Darumaka", dex: 554, alola: -1, type: "Fire", ability: "Hustle/None/Inner Focus", wiki: "http://www.serebii.net/pokedex-sm/554.shtml", image: "http://www.serebii.net/sunmoon/pokemon/554.png"},
 {id: "darmanitan", name: "Darmanitan", dex: 555, alola: -1, type: "Fire", ability: "Sheer Force/None/Zen Mode", wiki: "http://www.serebii.net/pokedex-sm/555.shtml", image: "http://www.serebii.net/sunmoon/pokemon/555.png"},
 {id: "darmanitan zen", name: "Darmanitan Zen", dex: 555, alola: -1, type: "Fire/Psychic", ability: "Zen Mode", wiki: "http://www.serebii.net/pokedex-sm/555.shtml", image: "http://www.serebii.net/sunmoon/pokemon/555-d.png"},
 {id: "maractus", name: "Maractus", dex: 556, alola: -1, type: "Grass", ability: "Water Absorb/Chlorophyll/Storm Drain", wiki: "http://www.serebii.net/pokedex-sm/556.shtml", image: "http://www.serebii.net/sunmoon/pokemon/556.png"},
 {id: "dwebble", name: "Dwebble", dex: 557, alola: -1, type: "Bug/Rock", ability: "Sturdy/Shell Armor/Weak Armor", wiki: "http://www.serebii.net/pokedex-sm/557.shtml", image: "http://www.serebii.net/sunmoon/pokemon/557.png"},
 {id: "crustle", name: "Crustle", dex: 558, alola: -1, type: "Bug/Rock", ability: "Sturdy/Shell Armor/Weak Armor", wiki: "http://www.serebii.net/pokedex-sm/558.shtml", image: "http://www.serebii.net/sunmoon/pokemon/558.png"},
 {id: "scraggy", name: "Scraggy", dex: 559, alola: -1, type: "Dark/Fighting", ability: "Shed Skin/Moxie/Intimidate", wiki: "http://www.serebii.net/pokedex-sm/559.shtml", image: "http://www.serebii.net/sunmoon/pokemon/559.png"},
 {id: "scrafty", name: "Scrafty", dex: 560, alola: -1, type: "Dark/Fighting", ability: "Shed Skin/Moxie/Intimidate", wiki: "http://www.serebii.net/pokedex-sm/560.shtml", image: "http://www.serebii.net/sunmoon/pokemon/560.png"},
 {id: "sigilyph", name: "Sigilyph", dex: 561, alola: -1, type: "Psychic/Flying", ability: "Wonder Skin/Magic Guard/Tinted Lens", wiki: "http://www.serebii.net/pokedex-sm/561.shtml", image: "http://www.serebii.net/sunmoon/pokemon/561.png"},
 {id: "yamask", name: "Yamask", dex: 562, alola: -1, type: "Ghost", ability: "Mummy", wiki: "http://www.serebii.net/pokedex-sm/562.shtml", image: "http://www.serebii.net/sunmoon/pokemon/562.png"},
 {id: "cofagrigus", name: "Cofagrigus", dex: 563, alola: -1, type: "Ghost", ability: "Mummy", wiki: "http://www.serebii.net/pokedex-sm/563.shtml", image: "http://www.serebii.net/sunmoon/pokemon/563.png"},
 {id: "tirtouga", name: "Tirtouga", dex: 564, alola: 194, type: "Water/Rock", ability: "Solid Rock/Sturdy/Swift Swim", wiki: "http://www.serebii.net/pokedex-sm/564.shtml", image: "http://www.serebii.net/sunmoon/pokemon/564.png"},
 {id: "carracosta", name: "Carracosta", dex: 565, alola: 195, type: "Water/Rock", ability: "Solid Rock/Sturdy/Swift Swim", wiki: "http://www.serebii.net/pokedex-sm/565.shtml", image: "http://www.serebii.net/sunmoon/pokemon/565.png"},
 {id: "archen", name: "Archen", dex: 566, alola: 192, type: "Rock/Flying", ability: "Defeatist", wiki: "http://www.serebii.net/pokedex-sm/566.shtml", image: "http://www.serebii.net/sunmoon/pokemon/566.png"},
 {id: "archeops", name: "Archeops", dex: 567, alola: 193, type: "Rock/Flying", ability: "Defeatist", wiki: "http://www.serebii.net/pokedex-sm/567.shtml", image: "http://www.serebii.net/sunmoon/pokemon/567.png"},
 {id: "trubbish", name: "Trubbish", dex: 568, alola: 206, type: "Poison", ability: "Stench/Sticky Hold/Aftermath", wiki: "http://www.serebii.net/pokedex-sm/568.shtml", image: "http://www.serebii.net/sunmoon/pokemon/568.png"},
 {id: "garbodor", name: "Garbodor", dex: 569, alola: 207, type: "Poison", ability: "Stench/Weak Armor/Aftermath", wiki: "http://www.serebii.net/pokedex-sm/569.shtml", image: "http://www.serebii.net/sunmoon/pokemon/569.png"},
 {id: "zorua", name: "Zorua", dex: 570, alola: -1, type: "Dark", ability: "Illusion", wiki: "http://www.serebii.net/pokedex-sm/570.shtml", image: "http://www.serebii.net/sunmoon/pokemon/570.png"},
 {id: "zoroark", name: "Zoroark", dex: 571, alola: -1, type: "Dark", ability: "Illusion", wiki: "http://www.serebii.net/pokedex-sm/571.shtml", image: "http://www.serebii.net/sunmoon/pokemon/571.png"},
 {id: "minccino", name: "Minccino", dex: 572, alola: -1, type: "Normal", ability: "Cute Charm/Technician/Skill Link", wiki: "http://www.serebii.net/pokedex-sm/572.shtml", image: "http://www.serebii.net/sunmoon/pokemon/572.png"},
 {id: "cinccino", name: "Cinccino", dex: 573, alola: -1, type: "Normal", ability: "Cute Charm/Technician/Skill Link", wiki: "http://www.serebii.net/pokedex-sm/573.shtml", image: "http://www.serebii.net/sunmoon/pokemon/573.png"},
 {id: "gothita", name: "Gothita", dex: 574, alola: -1, type: "Psychic", ability: "Frisk/Competitive/Shadow Tag", wiki: "http://www.serebii.net/pokedex-sm/574.shtml", image: "http://www.serebii.net/sunmoon/pokemon/574.png"},
 {id: "gothorita", name: "Gothorita", dex: 575, alola: -1, type: "Psychic", ability: "Frisk/Competitive/Shadow Tag", wiki: "http://www.serebii.net/pokedex-sm/575.shtml", image: "http://www.serebii.net/sunmoon/pokemon/575.png"},
 {id: "gothitelle", name: "Gothitelle", dex: 576, alola: -1, type: "Psychic", ability: "Frisk/Competitive/Shadow Tag", wiki: "http://www.serebii.net/pokedex-sm/576.shtml", image: "http://www.serebii.net/sunmoon/pokemon/576.png"},
 {id: "solosis", name: "Solosis", dex: 577, alola: -1, type: "Psychic", ability: "Overcoat/Magic Guard/Regenerator", wiki: "http://www.serebii.net/pokedex-sm/577.shtml", image: "http://www.serebii.net/sunmoon/pokemon/577.png"},
 {id: "duosion", name: "Duosion", dex: 578, alola: -1, type: "Psychic", ability: "Overcoat/Magic Guard/Regenerator", wiki: "http://www.serebii.net/pokedex-sm/578.shtml", image: "http://www.serebii.net/sunmoon/pokemon/578.png"},
 {id: "reuniclus", name: "Reuniclus", dex: 579, alola: -1, type: "Psychic", ability: "Overcoat/Magic Guard/Regenerator", wiki: "http://www.serebii.net/pokedex-sm/579.shtml", image: "http://www.serebii.net/sunmoon/pokemon/579.png"},
 {id: "ducklett", name: "Ducklett", dex: 580, alola: -1, type: "Water/Flying", ability: "Keen Eye/Big Pecks/Hydration", wiki: "http://www.serebii.net/pokedex-sm/580.shtml", image: "http://www.serebii.net/sunmoon/pokemon/580.png"},
 {id: "swanna", name: "Swanna", dex: 581, alola: -1, type: "Water/Flying", ability: "Keen Eye/Big Pecks/Hydration", wiki: "http://www.serebii.net/pokedex-sm/581.shtml", image: "http://www.serebii.net/sunmoon/pokemon/581.png"},
 {id: "vanillite", name: "Vanillite", dex: 582, alola: 255, type: "Ice", ability: "Ice Body/None/Weak Armor", wiki: "http://www.serebii.net/pokedex-sm/582.shtml", image: "http://www.serebii.net/sunmoon/pokemon/582.png"},
 {id: "vanillish", name: "Vanillish", dex: 583, alola: 256, type: "Ice", ability: "Ice Body/None/Weak Armor", wiki: "http://www.serebii.net/pokedex-sm/583.shtml", image: "http://www.serebii.net/sunmoon/pokemon/583.png"},
 {id: "vanilluxe", name: "Vanilluxe", dex: 584, alola: 257, type: "Ice", ability: "Ice Body/None/Weak Armor", wiki: "http://www.serebii.net/pokedex-sm/584.shtml", image: "http://www.serebii.net/sunmoon/pokemon/584.png"},
 {id: "deerling", name: "Deerling", dex: 585, alola: -1, type: "Normal/Grass", ability: "Chlorophyll/Sap Sipper/Serene Grace", wiki: "http://www.serebii.net/pokedex-sm/585.shtml", image: "http://www.serebii.net/sunmoon/pokemon/585.png"},
 {id: "sawsbuck", name: "Sawsbuck", dex: 586, alola: -1, type: "Normal/Grass", ability: "Chlorophyll/Sap Sipper/Serene Grace", wiki: "http://www.serebii.net/pokedex-sm/586.shtml", image: "http://www.serebii.net/sunmoon/pokemon/586.png"},
 {id: "emolga", name: "Emolga", dex: 587, alola: 274, type: "Electric/Flying", ability: "Static/None/Motor Drive", wiki: "http://www.serebii.net/pokedex-sm/587.shtml", image: "http://www.serebii.net/sunmoon/pokemon/587.png"},
 {id: "karrablast", name: "Karrablast", dex: 588, alola: -1, type: "Bug", ability: "Swarm/Shed Skin/No Guard", wiki: "http://www.serebii.net/pokedex-sm/588.shtml", image: "http://www.serebii.net/sunmoon/pokemon/588.png"},
 {id: "escavalier", name: "Escavalier", dex: 589, alola: -1, type: "Bug/Steel", ability: "Swarm/Shell Armor/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/589.shtml", image: "http://www.serebii.net/sunmoon/pokemon/589.png"},
 {id: "foongus", name: "Foongus", dex: 590, alola: -1, type: "Grass/Poison", ability: "Effect Spore/None/Regenerator", wiki: "http://www.serebii.net/pokedex-sm/590.shtml", image: "http://www.serebii.net/sunmoon/pokemon/590.png"},
 {id: "amoonguss", name: "Amoonguss", dex: 591, alola: -1, type: "Grass/Poison", ability: "Effect Spore/None/Regenerator", wiki: "http://www.serebii.net/pokedex-sm/591.shtml", image: "http://www.serebii.net/sunmoon/pokemon/591.png"},
 {id: "frillish", name: "Frillish", dex: 592, alola: -1, type: "Water/Ghost", ability: "Water Absorb/Cursed Body/Damp", wiki: "http://www.serebii.net/pokedex-sm/592.shtml", image: "http://www.serebii.net/sunmoon/pokemon/592.png"},
 {id: "jellicent", name: "Jellicent", dex: 593, alola: -1, type: "Water/Ghost", ability: "Water Absorb/Cursed Body/Damp", wiki: "http://www.serebii.net/pokedex-sm/593.shtml", image: "http://www.serebii.net/sunmoon/pokemon/593.png"},
 {id: "alomomola", name: "Alomomola", dex: 594, alola: 157, type: "Water", ability: "Healer/Hydration/Regenerator", wiki: "http://www.serebii.net/pokedex-sm/594.shtml", image: "http://www.serebii.net/sunmoon/pokemon/594.png"},
 {id: "joltik", name: "Joltik", dex: 595, alola: -1, type: "Bug/Electric", ability: "Compound Eyes/Unnerve/Swarm", wiki: "http://www.serebii.net/pokedex-sm/595.shtml", image: "http://www.serebii.net/sunmoon/pokemon/595.png"},
 {id: "galvantula", name: "Galvantula", dex: 596, alola: -1, type: "Bug/Electric", ability: "Compound Eyes/Unnerve/Swarm", wiki: "http://www.serebii.net/pokedex-sm/596.shtml", image: "http://www.serebii.net/sunmoon/pokemon/596.png"},
 {id: "ferroseed", name: "Ferroseed", dex: 597, alola: -1, type: "Grass/Steel", ability: "Iron Barbs", wiki: "http://www.serebii.net/pokedex-sm/597.shtml", image: "http://www.serebii.net/sunmoon/pokemon/597.png"},
 {id: "ferrothorn", name: "Ferrothorn", dex: 598, alola: -1, type: "Grass/Steel", ability: "Iron Barbs/None/Anticipation/VI", wiki: "http://www.serebii.net/pokedex-sm/598.shtml", image: "http://www.serebii.net/sunmoon/pokemon/598.png"},
 {id: "klink", name: "Klink", dex: 599, alola: -1, type: "Steel", ability: "Plus/Minus/Clear Body", wiki: "http://www.serebii.net/pokedex-sm/599.shtml", image: "http://www.serebii.net/sunmoon/pokemon/599.png"},
 {id: "klang", name: "Klang", dex: 600, alola: -1, type: "Steel", ability: "Plus/Minus/Clear Body", wiki: "http://www.serebii.net/pokedex-sm/600.shtml", image: "http://www.serebii.net/sunmoon/pokemon/600.png"},
 {id: "klinklang", name: "Klinklang", dex: 601, alola: -1, type: "Steel", ability: "Plus/Minus/Clear Body", wiki: "http://www.serebii.net/pokedex-sm/601.shtml", image: "http://www.serebii.net/sunmoon/pokemon/601.png"},
 {id: "tynamo", name: "Tynamo", dex: 602, alola: -1, type: "Electric", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/602.shtml", image: "http://www.serebii.net/sunmoon/pokemon/602.png"},
 {id: "eelektrik", name: "Eelektrik", dex: 603, alola: -1, type: "Electric", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/603.shtml", image: "http://www.serebii.net/sunmoon/pokemon/603.png"},
 {id: "eelektross", name: "Eelektross", dex: 604, alola: -1, type: "Electric", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/604.shtml", image: "http://www.serebii.net/sunmoon/pokemon/604.png"},
 {id: "elgyem", name: "Elgyem", dex: 605, alola: -1, type: "Psychic", ability: "Telepathy/Synchronize/Analytic", wiki: "http://www.serebii.net/pokedex-sm/605.shtml", image: "http://www.serebii.net/sunmoon/pokemon/605.png"},
 {id: "beheeyem", name: "Beheeyem", dex: 606, alola: -1, type: "Psychic", ability: "Telepathy/Synchronize/Analytic", wiki: "http://www.serebii.net/pokedex-sm/606.shtml", image: "http://www.serebii.net/sunmoon/pokemon/606.png"},
 {id: "litwick", name: "Litwick", dex: 607, alola: -1, type: "Ghost/Fire", ability: "Flash Fire/Flame Body/Infiltrator", wiki: "http://www.serebii.net/pokedex-sm/607.shtml", image: "http://www.serebii.net/sunmoon/pokemon/607.png"},
 {id: "lampent", name: "Lampent", dex: 608, alola: -1, type: "Ghost/Fire", ability: "Flash Fire/Flame Body/Infiltrator", wiki: "http://www.serebii.net/pokedex-sm/608.shtml", image: "http://www.serebii.net/sunmoon/pokemon/608.png"},
 {id: "chandelure", name: "Chandelure", dex: 609, alola: -1, type: "Ghost/Fire", ability: "Flash Fire/Flame Body/Infiltrator", wiki: "http://www.serebii.net/pokedex-sm/609.shtml", image: "http://www.serebii.net/sunmoon/pokemon/609.png"},
 {id: "axew", name: "Axew", dex: 610, alola: -1, type: "Dragon", ability: "Rivalry/Mold Breaker/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/610.shtml", image: "http://www.serebii.net/sunmoon/pokemon/610.png"},
 {id: "fraxure", name: "Fraxure", dex: 611, alola: -1, type: "Dragon", ability: "Rivalry/Mold Breaker/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/611.shtml", image: "http://www.serebii.net/sunmoon/pokemon/611.png"},
 {id: "haxorus", name: "Haxorus", dex: 612, alola: -1, type: "Dragon", ability: "Rivalry/Mold Breaker/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/612.shtml", image: "http://www.serebii.net/sunmoon/pokemon/612.png"},
 {id: "cubchoo", name: "Cubchoo", dex: 613, alola: -1, type: "Ice", ability: "Snow Cloak/None/Rattled", wiki: "http://www.serebii.net/pokedex-sm/613.shtml", image: "http://www.serebii.net/sunmoon/pokemon/613.png"},
 {id: "beartic", name: "Beartic", dex: 614, alola: -1, type: "Ice", ability: "Snow Cloak/None/Swift Swim", wiki: "http://www.serebii.net/pokedex-sm/614.shtml", image: "http://www.serebii.net/sunmoon/pokemon/614.png"},
 {id: "cryogonal", name: "Cryogonal", dex: 615, alola: -1, type: "Ice", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/615.shtml", image: "http://www.serebii.net/sunmoon/pokemon/615.png"},
 {id: "shelmet", name: "Shelmet", dex: 616, alola: -1, type: "Bug", ability: "Hydration/Shell Armor/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/616.shtml", image: "http://www.serebii.net/sunmoon/pokemon/616.png"},
 {id: "accelgor", name: "Accelgor", dex: 617, alola: -1, type: "Bug", ability: "Hydration/Sticky Hold/Unburden", wiki: "http://www.serebii.net/pokedex-sm/617.shtml", image: "http://www.serebii.net/sunmoon/pokemon/617.png"},
 {id: "stunfisk", name: "Stunfisk", dex: 618, alola: -1, type: "Ground/Electric", ability: "Static/Limber/Sand Veil", wiki: "http://www.serebii.net/pokedex-sm/618.shtml", image: "http://www.serebii.net/sunmoon/pokemon/618.png"},
 {id: "mienfoo", name: "Mienfoo", dex: 619, alola: -1, type: "Fighting", ability: "Inner Focus/Regenerator/Reckless", wiki: "http://www.serebii.net/pokedex-sm/619.shtml", image: "http://www.serebii.net/sunmoon/pokemon/619.png"},
 {id: "mienshao", name: "Mienshao", dex: 620, alola: -1, type: "Fighting", ability: "Inner Focus/Regenerator/Reckless", wiki: "http://www.serebii.net/pokedex-sm/620.shtml", image: "http://www.serebii.net/sunmoon/pokemon/620.png"},
 {id: "druddigon", name: "Druddigon", dex: 621, alola: -1, type: "Dragon", ability: "Rough Skin/Sheer Force/Mold Breaker", wiki: "http://www.serebii.net/pokedex-sm/621.shtml", image: "http://www.serebii.net/sunmoon/pokemon/621.png"},
 {id: "golett", name: "Golett", dex: 622, alola: -1, type: "Ground/Ghost", ability: "Iron Fist/Klutz/No Guard", wiki: "http://www.serebii.net/pokedex-sm/622.shtml", image: "http://www.serebii.net/sunmoon/pokemon/622.png"},
 {id: "golurk", name: "Golurk", dex: 623, alola: -1, type: "Ground/Ghost", ability: "Iron Fist/Klutz/No Guard", wiki: "http://www.serebii.net/pokedex-sm/623.shtml", image: "http://www.serebii.net/sunmoon/pokemon/623.png"},
 {id: "pawniard", name: "Pawniard", dex: 624, alola: -1, type: "Dark/Steel", ability: "Defiant/Inner Focus/Pressure", wiki: "http://www.serebii.net/pokedex-sm/624.shtml", image: "http://www.serebii.net/sunmoon/pokemon/624.png"},
 {id: "bisharp", name: "Bisharp", dex: 625, alola: -1, type: "Dark/Steel", ability: "Defiant/Inner Focus/Pressure", wiki: "http://www.serebii.net/pokedex-sm/625.shtml", image: "http://www.serebii.net/sunmoon/pokemon/625.png"},
 {id: "bouffalant", name: "Bouffalant", dex: 626, alola: -1, type: "Normal", ability: "Reckless/Sap Sipper/Soundproof", wiki: "http://www.serebii.net/pokedex-sm/626.shtml", image: "http://www.serebii.net/sunmoon/pokemon/626.png"},
 {id: "rufflet", name: "Rufflet", dex: 627, alola: 61, type: "Normal/Flying", ability: "Keen Eye/Sheer Force/Hustle", wiki: "http://www.serebii.net/pokedex-sm/627.shtml", image: "http://www.serebii.net/sunmoon/pokemon/627.png"},
 {id: "braviary", name: "Braviary", dex: 628, alola: 62, type: "Normal/Flying", ability: "Keen Eye/Sheer Force/Defiant", wiki: "http://www.serebii.net/pokedex-sm/628.shtml", image: "http://www.serebii.net/sunmoon/pokemon/628.png"},
 {id: "vullaby", name: "Vullaby", dex: 629, alola: 63, type: "Dark/Flying", ability: "Big Pecks/Overcoat/Weak Armor", wiki: "http://www.serebii.net/pokedex-sm/629.shtml", image: "http://www.serebii.net/sunmoon/pokemon/629.png"},
 {id: "mandibuzz", name: "Mandibuzz", dex: 630, alola: 78, type: "Dark/Flying", ability: "Big Pecks/Overcoat/Weak Armor", wiki: "http://www.serebii.net/pokedex-sm/630.shtml", image: "http://www.serebii.net/sunmoon/pokemon/630.png"},
 {id: "heatmor", name: "Heatmor", dex: 631, alola: -1, type: "Fire", ability: "Gluttony/Flash Fire/White Smoke", wiki: "http://www.serebii.net/pokedex-sm/631.shtml", image: "http://www.serebii.net/sunmoon/pokemon/631.png"},
 {id: "durant", name: "Durant", dex: 632, alola: -1, type: "Bug/Steel", ability: "Swarm/Hustle/Truant", wiki: "http://www.serebii.net/pokedex-sm/632.shtml", image: "http://www.serebii.net/sunmoon/pokemon/632.png"},
 {id: "deino", name: "Deino", dex: 633, alola: -1, type: "Dark/Dragon", ability: "Hustle", wiki: "http://www.serebii.net/pokedex-sm/633.shtml", image: "http://www.serebii.net/sunmoon/pokemon/633.png"},
 {id: "zweilous", name: "Zweilous", dex: 634, alola: -1, type: "Dark/Dragon", ability: "Hustle", wiki: "http://www.serebii.net/pokedex-sm/634.shtml", image: "http://www.serebii.net/sunmoon/pokemon/634.png"},
 {id: "hydreigon", name: "Hydreigon", dex: 635, alola: -1, type: "Dark/Dragon", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/635.shtml", image: "http://www.serebii.net/sunmoon/pokemon/635.png"},
 {id: "larvesta", name: "Larvesta", dex: 636, alola: -1, type: "Bug/Fire", ability: "Flame Body/None/Swarm", wiki: "http://www.serebii.net/pokedex-sm/636.shtml", image: "http://www.serebii.net/sunmoon/pokemon/636.png"},
 {id: "volcarona", name: "Volcarona", dex: 637, alola: -1, type: "Bug/Fire", ability: "Flame Body/None/Swarm", wiki: "http://www.serebii.net/pokedex-sm/637.shtml", image: "http://www.serebii.net/sunmoon/pokemon/637.png"},
 {id: "cobalion", name: "Cobalion", dex: 638, alola: -1, type: "Steel/Fighting", ability: "Justified", wiki: "http://www.serebii.net/pokedex-sm/638.shtml", image: "http://www.serebii.net/sunmoon/pokemon/638.png"},
 {id: "terrakion", name: "Terrakion", dex: 639, alola: -1, type: "Rock/Fighting", ability: "Justified", wiki: "http://www.serebii.net/pokedex-sm/639.shtml", image: "http://www.serebii.net/sunmoon/pokemon/639.png"},
 {id: "virizion", name: "Virizion", dex: 640, alola: -1, type: "Grass/Fighting", ability: "Justified", wiki: "http://www.serebii.net/pokedex-sm/640.shtml", image: "http://www.serebii.net/sunmoon/pokemon/640.png"},
 {id: "tornadus", name: "Tornadus", dex: 641, alola: -1, type: "Flying", ability: "Prankster/None/Defiant", wiki: "http://www.serebii.net/pokedex-sm/641.shtml", image: "http://www.serebii.net/sunmoon/pokemon/641.png"},
 {id: "tornadus therian", name: "Tornadus Therian", dex: 641, alola: -1, type: "Flying", ability: "Regenerator", wiki: "http://www.serebii.net/pokedex-sm/641.shtml", image: "http://www.serebii.net/sunmoon/pokemon/641-s.png"},
 {id: "thundurus", name: "Thundurus", dex: 642, alola: -1, type: "Electric/Flying", ability: "Prankster/None/Defiant", wiki: "http://www.serebii.net/pokedex-sm/642.shtml", image: "http://www.serebii.net/sunmoon/pokemon/642.png"},
 {id: "thundurus therian", name: "Thundurus Therian", dex: 642, alola: -1, type: "Electric/Flying", ability: "Volt Absorb", wiki: "http://www.serebii.net/pokedex-sm/642.shtml", image: "http://www.serebii.net/sunmoon/pokemon/642-s.png"},
 {id: "reshiram", name: "Reshiram", dex: 643, alola: -1, type: "Dragon/Fire", ability: "Turboblaze", wiki: "http://www.serebii.net/pokedex-sm/643.shtml", image: "http://www.serebii.net/sunmoon/pokemon/643.png"},
 {id: "zekrom", name: "Zekrom", dex: 644, alola: -1, type: "Dragon/Electric", ability: "Teravolt", wiki: "http://www.serebii.net/pokedex-sm/644.shtml", image: "http://www.serebii.net/sunmoon/pokemon/644.png"},
 {id: "landorus", name: "Landorus", dex: 645, alola: -1, type: "Ground/Flying", ability: "Sand Force/None/Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/645.shtml", image: "http://www.serebii.net/sunmoon/pokemon/645.png"},
 {id: "landorus therian", name: "Landorus Therian", dex: 645, alola: -1, type: "Ground/Flying", ability: "Intimidate", wiki: "http://www.serebii.net/pokedex-sm/645.shtml", image: "http://www.serebii.net/sunmoon/pokemon/645-s.png"},
 {id: "kyurem", name: "Kyurem", dex: 646, alola: -1, type: "Dragon/Ice", ability: "Pressure", wiki: "http://www.serebii.net/pokedex-sm/646.shtml", image: "http://www.serebii.net/sunmoon/pokemon/646.png"},
 {id: "white kyurem", name: "White Kyurem", dex: 646, alola: -1, type: "Dragon/Ice", ability: "Turboblaze", wiki: "http://www.serebii.net/pokedex-sm/646.shtml", image: "http://www.serebii.net/sunmoon/pokemon/646-w.png"},
 {id: "black kyurem", name: "Black Kyurem", dex: 646, alola: -1, type: "Dragon/Ice", ability: "Teravolt", wiki: "http://www.serebii.net/pokedex-sm/646.shtml", image: "http://www.serebii.net/sunmoon/pokemon/646-b.png"},
 {id: "keldeo", name: "Keldeo", dex: 647, alola: -1, type: "Water/Fighting", ability: "Justified", wiki: "http://www.serebii.net/pokedex-sm/647.shtml", image: "http://www.serebii.net/sunmoon/pokemon/647.png"},
 {id: "meloetta", name: "Meloetta", dex: 648, alola: -1, type: "Normal/Psychic", ability: "Serene Grace", wiki: "http://www.serebii.net/pokedex-sm/648.shtml", image: "http://www.serebii.net/sunmoon/pokemon/648.png"},
 {id: "meloetta pirouette", name: "Meloetta Pirouette", dex: 648, alola: -1, type: "Normal/Fighting", ability: "Serene Grace", wiki: "http://www.serebii.net/pokedex-sm/648.shtml", image: "http://www.serebii.net/sunmoon/pokemon/648-s.png"},
 {id: "genesect", name: "Genesect", dex: 649, alola: -1, type: "Bug/Steel", ability: "Download", wiki: "http://www.serebii.net/pokedex-sm/649.shtml", image: "http://www.serebii.net/sunmoon/pokemon/649.png"},
 {id: "chespin", name: "Chespin", dex: 650, alola: -1, type: "Grass", ability: "Overgrow/None/Bulletproof", wiki: "http://www.serebii.net/pokedex-sm/650.shtml", image: "http://www.serebii.net/sunmoon/pokemon/650.png"},
 {id: "quilladin", name: "Quilladin", dex: 651, alola: -1, type: "Grass", ability: "Overgrow/None/Bulletproof", wiki: "http://www.serebii.net/pokedex-sm/651.shtml", image: "http://www.serebii.net/sunmoon/pokemon/651.png"},
 {id: "chesnaught", name: "Chesnaught", dex: 652, alola: -1, type: "Grass/Fighting", ability: "Overgrow/None/Bulletproof", wiki: "http://www.serebii.net/pokedex-sm/652.shtml", image: "http://www.serebii.net/sunmoon/pokemon/652.png"},
 {id: "fennekin", name: "Fennekin", dex: 653, alola: -1, type: "Fire", ability: "Blaze/None/Magician", wiki: "http://www.serebii.net/pokedex-sm/653.shtml", image: "http://www.serebii.net/sunmoon/pokemon/653.png"},
 {id: "braixen", name: "Braixen", dex: 654, alola: -1, type: "Fire", ability: "Blaze/None/Magician", wiki: "http://www.serebii.net/pokedex-sm/654.shtml", image: "http://www.serebii.net/sunmoon/pokemon/654.png"},
 {id: "delphox", name: "Delphox", dex: 655, alola: -1, type: "Fire/Psychic", ability: "Blaze/None/Magician", wiki: "http://www.serebii.net/pokedex-sm/655.shtml", image: "http://www.serebii.net/sunmoon/pokemon/655.png"},
 {id: "froakie", name: "Froakie", dex: 656, alola: -1, type: "Water", ability: "Torrent/None/Protean", wiki: "http://www.serebii.net/pokedex-sm/656.shtml", image: "http://www.serebii.net/sunmoon/pokemon/656.png"},
 {id: "frogadier", name: "Frogadier", dex: 657, alola: -1, type: "Water", ability: "Torrent/None/Protean", wiki: "http://www.serebii.net/pokedex-sm/657.shtml", image: "http://www.serebii.net/sunmoon/pokemon/657.png"},
 {id: "greninja", name: "Greninja", dex: 658, alola: -1, type: "Water/Dark", ability: "Torrent/None/Protean", wiki: "http://www.serebii.net/pokedex-sm/658.shtml", image: "http://www.serebii.net/sunmoon/pokemon/658.png"},
 {id: "bunnelby", name: "Bunnelby", dex: 659, alola: -1, type: "Normal", ability: "Pickup/Cheek Pouch/Huge Power", wiki: "http://www.serebii.net/pokedex-sm/659.shtml", image: "http://www.serebii.net/sunmoon/pokemon/659.png"},
 {id: "diggersby", name: "Diggersby", dex: 660, alola: -1, type: "Normal/Ground", ability: "Pickup/Cheek Pouch/Huge Power", wiki: "http://www.serebii.net/pokedex-sm/660.shtml", image: "http://www.serebii.net/sunmoon/pokemon/660.png"},
 {id: "fletchling", name: "Fletchling", dex: 661, alola: 158, type: "Normal/Flying", ability: "Big Pecks/None/Gale Wings", wiki: "http://www.serebii.net/pokedex-sm/661.shtml", image: "http://www.serebii.net/sunmoon/pokemon/661.png"},
 {id: "fletchinder", name: "Fletchinder", dex: 662, alola: 159, type: "Fire/Flying", ability: "Flame Body/None/Gale Wings", wiki: "http://www.serebii.net/pokedex-sm/662.shtml", image: "http://www.serebii.net/sunmoon/pokemon/662.png"},
 {id: "talonflame", name: "Talonflame", dex: 663, alola: 160, type: "Fire/Flying", ability: "Flame Body/None/ Gale Wings", wiki: "http://www.serebii.net/pokedex-sm/663.shtml", image: "http://www.serebii.net/sunmoon/pokemon/663.png"},
 {id: "scatterbug", name: "Scatterbug", dex: 664, alola: -1, type: "Bug", ability: "Shield Dust/Compound Eyes/Friend Guard", wiki: "http://www.serebii.net/pokedex-sm/664.shtml", image: "http://www.serebii.net/sunmoon/pokemon/664.png"},
 {id: "spewpa", name: "Spewpa", dex: 665, alola: -1, type: "Bug", ability: "Shed Skin/None/Friend Guard", wiki: "http://www.serebii.net/pokedex-sm/665.shtml", image: "http://www.serebii.net/sunmoon/pokemon/665.png"},
 {id: "vivillon", name: "Vivillon", dex: 666, alola: -1, type: "Bug/Flying", ability: "Shield Dust/Compound Eyes/Friend Guard", wiki: "http://www.serebii.net/pokedex-sm/666.shtml", image: "http://www.serebii.net/sunmoon/pokemon/666.png"},
 {id: "litleo", name: "Litleo", dex: 667, alola: -1, type: "Fire/Normal", ability: "Rivalry/Unnerve/Moxie", wiki: "http://www.serebii.net/pokedex-sm/667.shtml", image: "http://www.serebii.net/sunmoon/pokemon/667.png"},
 {id: "pyroar", name: "Pyroar", dex: 668, alola: -1, type: "Fire/Normal", ability: "Rivalry/Unnerve/Moxie", wiki: "http://www.serebii.net/pokedex-sm/668.shtml", image: "http://www.serebii.net/sunmoon/pokemon/668.png"},
 {id: "flabebe", name: "Flabébé", dex: 669, alola: -1, type: "Fairy", ability: "Flower Veil/None/Symbiosis", wiki: "http://www.serebii.net/pokedex-sm/669.shtml", image: "http://www.serebii.net/sunmoon/pokemon/669.png"},
 {id: "floette", name: "Floette", dex: 670, alola: -1, type: "Fairy", ability: "Flower Veil/None/Symbiosis", wiki: "http://www.serebii.net/pokedex-sm/670.shtml", image: "http://www.serebii.net/sunmoon/pokemon/670.png"},
 {id: "florges", name: "Florges", dex: 671, alola: -1, type: "Fairy", ability: "Flower Veil/None/Symbiosis", wiki: "http://www.serebii.net/pokedex-sm/671.shtml", image: "http://www.serebii.net/sunmoon/pokemon/671.png"},
 {id: "skiddo", name: "Skiddo", dex: 672, alola: -1, type: "Grass", ability: "Sap Sipper/None/Grass Pelt", wiki: "http://www.serebii.net/pokedex-sm/672.shtml", image: "http://www.serebii.net/sunmoon/pokemon/672.png"},
 {id: "gogoat", name: "Gogoat", dex: 673, alola: -1, type: "Grass", ability: "Sap Sipper/None/Grass Pelt", wiki: "http://www.serebii.net/pokedex-sm/673.shtml", image: "http://www.serebii.net/sunmoon/pokemon/673.png"},
 {id: "pancham", name: "Pancham", dex: 674, alola: 220, type: "Fighting", ability: "Iron Fist/Mold Breaker/Scrappy", wiki: "http://www.serebii.net/pokedex-sm/674.shtml", image: "http://www.serebii.net/sunmoon/pokemon/674.png"},
 {id: "pangoro", name: "Pangoro", dex: 675, alola: 221, type: "Fighting/Dark", ability: "Iron Fist/Mold Breaker/Scrappy", wiki: "http://www.serebii.net/pokedex-sm/675.shtml", image: "http://www.serebii.net/sunmoon/pokemon/675.png"},
 {id: "furfrou", name: "Furfrou", dex: 676, alola: -1, type: "Normal", ability: "Fur Coat", wiki: "http://www.serebii.net/pokedex-sm/676.shtml", image: "http://www.serebii.net/sunmoon/pokemon/676.png"},
 {id: "espurr", name: "Espurr", dex: 677, alola: -1, type: "Psychic", ability: "Keen Eye/Infiltrator/Own Tempo", wiki: "http://www.serebii.net/pokedex-sm/677.shtml", image: "http://www.serebii.net/sunmoon/pokemon/677.png"},
 {id: "meowstic", name: "Meowstic", dex: 678, alola: -1, type: "Psychic", ability: "Keen Eye/Infiltrator/Prankster", wiki: "http://www.serebii.net/pokedex-sm/678.shtml", image: "http://www.serebii.net/sunmoon/pokemon/678.png"},
 {id: "honedge", name: "Honedge", dex: 679, alola: -1, type: "Steel/Ghost", ability: "No Guard", wiki: "http://www.serebii.net/pokedex-sm/679.shtml", image: "http://www.serebii.net/sunmoon/pokemon/679.png"},
 {id: "doublade", name: "Doublade", dex: 680, alola: -1, type: "Steel/Ghost", ability: "No Guard", wiki: "http://www.serebii.net/pokedex-sm/680.shtml", image: "http://www.serebii.net/sunmoon/pokemon/680.png"},
 {id: "aegislash", name: "Aegislash", dex: 681, alola: -1, type: "Steel/Ghost", ability: "Stance Change", wiki: "http://www.serebii.net/pokedex-sm/681.shtml", image: "http://www.serebii.net/sunmoon/pokemon/681.png"},
 {id: "spritzee", name: "Spritzee", dex: 682, alola: -1, type: "Fairy", ability: "Healer/None/Aroma Veil", wiki: "http://www.serebii.net/pokedex-sm/682.shtml", image: "http://www.serebii.net/sunmoon/pokemon/682.png"},
 {id: "aromatisse", name: "Aromatisse", dex: 683, alola: -1, type: "Fairy", ability: "Healer/None/Aroma Veil", wiki: "http://www.serebii.net/pokedex-sm/683.shtml", image: "http://www.serebii.net/sunmoon/pokemon/683.png"},
 {id: "swirlix", name: "Swirlix", dex: 684, alola: -1, type: "Fairy", ability: "Sweet Veil/None/Unburden", wiki: "http://www.serebii.net/pokedex-sm/684.shtml", image: "http://www.serebii.net/sunmoon/pokemon/684.png"},
 {id: "slurpuff", name: "Slurpuff", dex: 685, alola: -1, type: "Fairy", ability: "Sweet Veil/None/Unburden", wiki: "http://www.serebii.net/pokedex-sm/685.shtml", image: "http://www.serebii.net/sunmoon/pokemon/685.png"},
 {id: "inkay", name: "Inkay", dex: 686, alola: -1, type: "Dark/Psychic", ability: "Contrary/Suction Cups/Infiltrator", wiki: "http://www.serebii.net/pokedex-sm/686.shtml", image: "http://www.serebii.net/sunmoon/pokemon/686.png"},
 {id: "malamar", name: "Malamar", dex: 687, alola: -1, type: "Dark/Psychic", ability: "Contrary/Suction Cups/Infiltrator", wiki: "http://www.serebii.net/pokedex-sm/687.shtml", image: "http://www.serebii.net/sunmoon/pokemon/687.png"},
 {id: "binacle", name: "Binacle", dex: 688, alola: -1, type: "Rock/Water", ability: "Sniper/Tough Claws/Pickpocket", wiki: "http://www.serebii.net/pokedex-sm/688.shtml", image: "http://www.serebii.net/sunmoon/pokemon/688.png"},
 {id: "barbaracle", name: "Barbaracle", dex: 689, alola: -1, type: "Rock/Water", ability: "Sniper/Tough Claws/Pickpocket", wiki: "http://www.serebii.net/pokedex-sm/689.shtml", image: "http://www.serebii.net/sunmoon/pokemon/689.png"},
 {id: "skrelp", name: "Skrelp", dex: 690, alola: -1, type: "Poison/Water", ability: "Poison Point/Poison Touch/Adaptability", wiki: "http://www.serebii.net/pokedex-sm/690.shtml", image: "http://www.serebii.net/sunmoon/pokemon/690.png"},
 {id: "dragalge", name: "Dragalge", dex: 691, alola: -1, type: "Poison/Dragon", ability: "Poison Point/Poison Touch/Adaptability", wiki: "http://www.serebii.net/pokedex-sm/691.shtml", image: "http://www.serebii.net/sunmoon/pokemon/691.png"},
 {id: "clauncher", name: "Clauncher", dex: 692, alola: -1, type: "Water", ability: "Mega Launcher", wiki: "http://www.serebii.net/pokedex-sm/692.shtml", image: "http://www.serebii.net/sunmoon/pokemon/692.png"},
 {id: "clawitzer", name: "Clawitzer", dex: 693, alola: -1, type: "Water", ability: "Mega Launcher", wiki: "http://www.serebii.net/pokedex-sm/693.shtml", image: "http://www.serebii.net/sunmoon/pokemon/693.png"},
 {id: "helioptile", name: "Helioptile", dex: 694, alola: -1, type: "Electric/Normal", ability: "Dry Skin/Sand Veil/Solar Power", wiki: "http://www.serebii.net/pokedex-sm/694.shtml", image: "http://www.serebii.net/sunmoon/pokemon/694.png"},
 {id: "heliolisk", name: "Heliolisk", dex: 695, alola: -1, type: "Electric/Normal", ability: "Dry Skin/Sand Veil/Solar Power", wiki: "http://www.serebii.net/pokedex-sm/695.shtml", image: "http://www.serebii.net/sunmoon/pokemon/695.png"},
 {id: "tyrunt", name: "Tyrunt", dex: 696, alola: -1, type: "Rock/Dragon", ability: "Strong Jaw/None/Sturdy", wiki: "http://www.serebii.net/pokedex-sm/696.shtml", image: "http://www.serebii.net/sunmoon/pokemon/696.png"},
 {id: "tyrantrum", name: "Tyrantrum", dex: 697, alola: -1, type: "Rock/Dragon", ability: "Strong Jaw/None/Rock Head", wiki: "http://www.serebii.net/pokedex-sm/697.shtml", image: "http://www.serebii.net/sunmoon/pokemon/697.png"},
 {id: "amaura", name: "Amaura", dex: 698, alola: -1, type: "Rock/Ice", ability: "Refrigerate/None/Snow Warning", wiki: "http://www.serebii.net/pokedex-sm/698.shtml", image: "http://www.serebii.net/sunmoon/pokemon/698.png"},
 {id: "aurorus", name: "Aurorus", dex: 699, alola: -1, type: "Rock/Ice", ability: "Refrigerate/None/Snow Warning", wiki: "http://www.serebii.net/pokedex-sm/699.shtml", image: "http://www.serebii.net/sunmoon/pokemon/699.png"},
 {id: "sylveon", name: "Sylveon", dex: 700, alola: 131, type: "Fairy", ability: "Cute Charm/None/Pixilate", wiki: "http://www.serebii.net/pokedex-sm/700.shtml", image: "http://www.serebii.net/sunmoon/pokemon/700.png"},
 {id: "hawlucha", name: "Hawlucha", dex: 701, alola: -1, type: "Fighting/Flying", ability: "Limber/Unburden/Mold Breaker", wiki: "http://www.serebii.net/pokedex-sm/701.shtml", image: "http://www.serebii.net/sunmoon/pokemon/701.png"},
 {id: "dedenne", name: "Dedenne", dex: 702, alola: -1, type: "Electric/Fairy", ability: "Cheek Pouch/Pickup/Plus", wiki: "http://www.serebii.net/pokedex-sm/702.shtml", image: "http://www.serebii.net/sunmoon/pokemon/702.png"},
 {id: "carbink", name: "Carbink", dex: 703, alola: 101, type: "Rock/Fairy", ability: "Clear Body/None/Sturdy", wiki: "http://www.serebii.net/pokedex-sm/703.shtml", image: "http://www.serebii.net/sunmoon/pokemon/703.png"},
 {id: "goomy", name: "Goomy", dex: 704, alola: 178, type: "Dragon", ability: "Sap Sipper/Hydration/Gooey", wiki: "http://www.serebii.net/pokedex-sm/704.shtml", image: "http://www.serebii.net/sunmoon/pokemon/704.png"},
 {id: "sliggoo", name: "Sliggoo", dex: 705, alola: 179, type: "Dragon", ability: "Sap Sipper/Hydration/Gooey", wiki: "http://www.serebii.net/pokedex-sm/705.shtml", image: "http://www.serebii.net/sunmoon/pokemon/705.png"},
 {id: "goodra", name: "Goodra", dex: 706, alola: 180, type: "Dragon", ability: "Sap Sipper/Hydration/Gooey", wiki: "http://www.serebii.net/pokedex-sm/706.shtml", image: "http://www.serebii.net/sunmoon/pokemon/706.png"},
 {id: "klefki", name: "Klefki", dex: 707, alola: 241, type: "Steel/Fairy", ability: "Prankster/None/Magician", wiki: "http://www.serebii.net/pokedex-sm/707.shtml", image: "http://www.serebii.net/sunmoon/pokemon/707.png"},
 {id: "phantump", name: "Phantump", dex: 708, alola: 196, type: "Ghost/Grass", ability: "Natural Cure/Frisk/Harvest", wiki: "http://www.serebii.net/pokedex-sm/708.shtml", image: "http://www.serebii.net/sunmoon/pokemon/708.png"},
 {id: "trevenant", name: "Trevenant", dex: 709, alola: 197, type: "Ghost/Grass", ability: "Natural Cure/Frisk/Harvest", wiki: "http://www.serebii.net/pokedex-sm/709.shtml", image: "http://www.serebii.net/sunmoon/pokemon/709.png"},
 {id: "pumpkaboo", name: "Pumpkaboo", dex: 710, alola: -1, type: "Ghost/Grass", ability: "Pickup/Frisk/Insomnia", wiki: "http://www.serebii.net/pokedex-sm/710.shtml", image: "http://www.serebii.net/sunmoon/pokemon/710.png"},
 {id: "gourgeist", name: "Gourgeist", dex: 711, alola: -1, type: "Ghost/Grass", ability: "Pickup/Frisk/Insomnia", wiki: "http://www.serebii.net/pokedex-sm/711.shtml", image: "http://www.serebii.net/sunmoon/pokemon/711.png"},
 {id: "bergmite", name: "Bergmite", dex: 712, alola: -1, type: "Ice", ability: "Own Tempo/Ice Body/Sturdy", wiki: "http://www.serebii.net/pokedex-sm/712.shtml", image: "http://www.serebii.net/sunmoon/pokemon/712.png"},
 {id: "avalugg", name: "Avalugg", dex: 713, alola: -1, type: "Ice", ability: "Own Tempo/Ice Body/Sturdy", wiki: "http://www.serebii.net/pokedex-sm/713.shtml", image: "http://www.serebii.net/sunmoon/pokemon/713.png"},
 {id: "noibat", name: "Noibat", dex: 714, alola: -1, type: "Flying/Dragon", ability: "Frisk/Infiltrator/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/714.shtml", image: "http://www.serebii.net/sunmoon/pokemon/714.png"},
 {id: "noivern", name: "Noivern", dex: 715, alola: -1, type: "Flying/Dragon", ability: "Frisk/Infiltrator/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/715.shtml", image: "http://www.serebii.net/sunmoon/pokemon/715.png"},
 {id: "xerneas", name: "Xerneas", dex: 716, alola: -1, type: "Fairy", ability: "Fairy Aura", wiki: "http://www.serebii.net/pokedex-sm/716.shtml", image: "http://www.serebii.net/sunmoon/pokemon/716.png"},
 {id: "yveltal", name: "Yveltal", dex: 717, alola: -1, type: "Dark/Flying", ability: "Dark Aura", wiki: "http://www.serebii.net/pokedex-sm/717.shtml", image: "http://www.serebii.net/sunmoon/pokemon/717.png"},
 {id: "zygarde", name: "Zygarde", dex: 718, alola: 205, type: "Dragon/Ground", ability: "Aura Break/Power Construct", wiki: "http://www.serebii.net/pokedex-sm/718.shtml", image: "http://www.serebii.net/sunmoon/pokemon/718.png"},
 {id: "diancie", name: "Diancie", dex: 719, alola: -1, type: "Rock/Fairy", ability: "Clear Body", wiki: "http://www.serebii.net/pokedex-sm/719.shtml", image: "http://www.serebii.net/sunmoon/pokemon/719.png"},
 {id: "hoopa", name: "Hoopa", dex: 720, alola: -1, type: "Psychic/Ghost", ability: "Magician", wiki: "http://www.serebii.net/pokedex-sm/720.shtml", image: "http://www.serebii.net/sunmoon/pokemon/720.png"},
 {id: "hoopa unbound", name: "Hoopa Unbound", dex: 720, alola: -1, type: "Psychic/Dark", ability: "Magician", wiki: "http://www.serebii.net/pokedex-sm/720.shtml", image: "http://www.serebii.net/sunmoon/pokemon/720-u.png"},
 {id: "volcanion", name: "Volcanion", dex: 721, alola: -1, type: "Fire/Water", ability: "Water Absorb", wiki: "http://www.serebii.net/pokedex-sm/721.shtml", image: "http://www.serebii.net/sunmoon/pokemon/721.png"},
 {id: "mega venusaur", name: "Mega Venusaur", dex: 3, alola: -1, type: "Grass/Poison", ability: "Thick Fat", wiki: "http://www.serebii.net/pokedex-sm/003.shtml", image: "http://www.serebii.net/sunmoon/pokemon/003-m.png"},
 {id: "mega charizard x", name: "Mega Charizard X", dex: 6, alola: -1, type: "Fire/Dragon", ability: "Tough Claws", wiki: "http://www.serebii.net/pokedex-sm/006.shtml", image: "http://www.serebii.net/sunmoon/pokemon/006-mx.png"},
 {id: "mega charizard y", name: "Mega Charizard Y", dex: 6, alola: -1, type: "Fire/Flying", ability: "Drought", wiki: "http://www.serebii.net/pokedex-sm/006.shtml", image: "http://www.serebii.net/sunmoon/pokemon/006-my.png"},
 {id: "mega blastoise", name: "Mega Blastoise", dex: 9, alola: -1, type: "Water", ability: "Mega Launcher", wiki: "http://www.serebii.net/pokedex-sm/009.shtml", image: "http://www.serebii.net/sunmoon/pokemon/009-m.png"},
 {id: "mega alakazam", name: "Mega Alakazam", dex: 65, alola: -1, type: "Psychic", ability: "Trace", wiki: "http://www.serebii.net/pokedex-sm/065.shtml", image: "http://www.serebii.net/sunmoon/pokemon/065-m.png"},
 {id: "mega gengar", name: "Mega Gengar", dex: 94, alola: -1, type: "Ghost/Poison", ability: "Shadow Tag", wiki: "http://www.serebii.net/pokedex-sm/094.shtml", image: "http://www.serebii.net/sunmoon/pokemon/094-m.png"},
 {id: "mega kangaskhan", name: "Mega Kangaskhan", dex: 115, alola: -1, type: "Normal", ability: "Parental Bond", wiki: "http://www.serebii.net/pokedex-sm/115.shtml", image: "http://www.serebii.net/sunmoon/pokemon/115-m.png"},
 {id: "mega pinsir", name: "Mega Pinsir", dex: 127, alola: -1, type: "Bug/Flying", ability: "Aerilate", wiki: "http://www.serebii.net/pokedex-sm/127.shtml", image: "http://www.serebii.net/sunmoon/pokemon/127-m.png"},
 {id: "mega gyarados", name: "Mega Gyarados", dex: 130, alola: -1, type: "Water/Dark", ability: "Mold Breaker", wiki: "http://www.serebii.net/pokedex-sm/130.shtml", image: "http://www.serebii.net/sunmoon/pokemon/130-m.png"},
 {id: "mega aerodactyl", name: "Mega Aerodactyl", dex: 142, alola: -1, type: "Rock/Flying", ability: "Tough Claws", wiki: "http://www.serebii.net/pokedex-sm/142.shtml", image: "http://www.serebii.net/sunmoon/pokemon/142-m.png"},
 {id: "mega mewtwo x", name: "Mega Mewtwo X", dex: 150, alola: -1, type: "Psychic/Fighting", ability: "Steadfast", wiki: "http://www.serebii.net/pokedex-sm/150.shtml", image: "http://www.serebii.net/sunmoon/pokemon/150-mx.png"},
 {id: "mega mewtwo y", name: "Mega Mewtwo Y", dex: 150, alola: -1, type: "Psychic", ability: "Insomnia", wiki: "http://www.serebii.net/pokedex-sm/150.shtml", image: "http://www.serebii.net/sunmoon/pokemon/150-my.png"},
 {id: "mega ampharos", name: "Mega Ampharos", dex: 181, alola: -1, type: "Electric/Dragon", ability: "Mold Breaker", wiki: "http://www.serebii.net/pokedex-sm/181.shtml", image: "http://www.serebii.net/sunmoon/pokemon/181-m.png"},
 {id: "mega scizor", name: "Mega Scizor", dex: 212, alola: -1, type: "Bug/Steel", ability: "Technician", wiki: "http://www.serebii.net/pokedex-sm/212.shtml", image: "http://www.serebii.net/sunmoon/pokemon/212-m.png"},
 {id: "mega heracross", name: "Mega Heracross", dex: 214, alola: -1, type: "Bug/Fighting", ability: "Skill Link", wiki: "http://www.serebii.net/pokedex-sm/214.shtml", image: "http://www.serebii.net/sunmoon/pokemon/214-m.png"},
 {id: "mega houndoom", name: "Mega Houndoom", dex: 229, alola: -1, type: "Dark/Fire", ability: "Solar Power", wiki: "http://www.serebii.net/pokedex-sm/229.shtml", image: "http://www.serebii.net/sunmoon/pokemon/229-m.png"},
 {id: "mega tyranitar", name: "Mega Tyranitar", dex: 248, alola: -1, type: "Rock/Dark", ability: "Sand Stream", wiki: "http://www.serebii.net/pokedex-sm/248.shtml", image: "http://www.serebii.net/sunmoon/pokemon/248-m.png"},
 {id: "mega blaziken", name: "Mega Blaziken", dex: 257, alola: -1, type: "Fire/Fighting", ability: "Speed Boost", wiki: "http://www.serebii.net/pokedex-sm/257.shtml", image: "http://www.serebii.net/sunmoon/pokemon/257-m.png"},
 {id: "mega gardevoir", name: "Mega Gardevoir", dex: 282, alola: -1, type: "Psychic/Fairy", ability: "Pixilate", wiki: "http://www.serebii.net/pokedex-sm/282.shtml", image: "http://www.serebii.net/sunmoon/pokemon/282-m.png"},
 {id: "mega mawile", name: "Mega Mawile", dex: 303, alola: -1, type: "Steel/Fairy", ability: "Huge Power", wiki: "http://www.serebii.net/pokedex-sm/303.shtml", image: "http://www.serebii.net/sunmoon/pokemon/303-m.png"},
 {id: "mega aggron", name: "Mega Aggron", dex: 306, alola: -1, type: "Steel", ability: "Filter", wiki: "http://www.serebii.net/pokedex-sm/306.shtml", image: "http://www.serebii.net/sunmoon/pokemon/306-m.png"},
 {id: "mega medicham", name: "Mega Medicham", dex: 308, alola: -1, type: "Fighting/Psychic", ability: "Pure Power", wiki: "http://www.serebii.net/pokedex-sm/308.shtml", image: "http://www.serebii.net/sunmoon/pokemon/308-m.png"},
 {id: "mega manectric", name: "Mega Manectric", dex: 310, alola: -1, type: "Electric", ability: "Intimidate", wiki: "http://www.serebii.net/pokedex-sm/310.shtml", image: "http://www.serebii.net/sunmoon/pokemon/310-m.png"},
 {id: "mega banette", name: "Mega Banette", dex: 354, alola: -1, type: "Ghost", ability: "Prankster", wiki: "http://www.serebii.net/pokedex-sm/354.shtml", image: "http://www.serebii.net/sunmoon/pokemon/354-m.png"},
 {id: "mega absol", name: "Mega Absol", dex: 359, alola: -1, type: "Dark", ability: "Magic Bounce", wiki: "http://www.serebii.net/pokedex-sm/359.shtml", image: "http://www.serebii.net/sunmoon/pokemon/359-m.png"},
 {id: "mega garchomp", name: "Mega Garchomp", dex: 445, alola: -1, type: "Dragon/Ground", ability: "Sand Force", wiki: "http://www.serebii.net/pokedex-sm/445.shtml", image: "http://www.serebii.net/sunmoon/pokemon/445-m.png"},
 {id: "mega lucario", name: "Mega Lucario", dex: 448, alola: -1, type: "Fighting/Steel", ability: "Adaptability", wiki: "http://www.serebii.net/pokedex-sm/448.shtml", image: "http://www.serebii.net/sunmoon/pokemon/448-m.png"},
 {id: "mega abomasnow", name: "Mega Abomasnow", dex: 460, alola: -1, type: "Grass/Ice", ability: "Snow Warning", wiki: "http://www.serebii.net/pokedex-sm/460.shtml", image: "http://www.serebii.net/sunmoon/pokemon/460-m.png"},
 {id: "mega beedrill", name: "Mega Beedrill", dex: 15, alola: -1, type: "Bug/Poison", ability: "Adaptability", wiki: "http://www.serebii.net/pokedex-sm/015.shtml", image: "http://www.serebii.net/sunmoon/pokemon/015-m.png"},
 {id: "mega pidgeot", name: "Mega Pidgeot", dex: 18, alola: -1, type: "Normal/Flying", ability: "No Guard", wiki: "http://www.serebii.net/pokedex-sm/018.shtml", image: "http://www.serebii.net/sunmoon/pokemon/018-m.png"},
 {id: "mega slowbro", name: "Mega Slowbro", dex: 80, alola: -1, type: "Water/Psychic", ability: "Shell Armor", wiki: "http://www.serebii.net/pokedex-sm/080.shtml", image: "http://www.serebii.net/sunmoon/pokemon/080-m.png"},
 {id: "mega steelix", name: "Mega Steelix", dex: 208, alola: -1, type: "Steel/Ground", ability: "Sand Force", wiki: "http://www.serebii.net/pokedex-sm/208.shtml", image: "http://www.serebii.net/sunmoon/pokemon/208-m.png"},
 {id: "mega sceptile", name: "Mega Sceptile", dex: 254, alola: -1, type: "Grass/Dragon", ability: "Lightning Rod", wiki: "http://www.serebii.net/pokedex-sm/254.shtml", image: "http://www.serebii.net/sunmoon/pokemon/254-m.png"},
 {id: "mega swampert", name: "Mega Swampert", dex: 260, alola: -1, type: "Water/Ground", ability: "Swift Swim", wiki: "http://www.serebii.net/pokedex-sm/260.shtml", image: "http://www.serebii.net/sunmoon/pokemon/260-m.png"},
 {id: "mega sableye", name: "Mega Sableye", dex: 302, alola: -1, type: "Dark/Ghost", ability: "Magic Bounce", wiki: "http://www.serebii.net/pokedex-sm/302.shtml", image: "http://www.serebii.net/sunmoon/pokemon/302-m.png"},
 {id: "mega sharpedo", name: "Mega Sharpedo", dex: 319, alola: -1, type: "Water/Dark", ability: "Strong Jaw", wiki: "http://www.serebii.net/pokedex-sm/319.shtml", image: "http://www.serebii.net/sunmoon/pokemon/319-m.png"},
 {id: "mega camerupt", name: "Mega Camerupt", dex: 323, alola: -1, type: "Fire/Ground", ability: "Sheer Force", wiki: "http://www.serebii.net/pokedex-sm/323.shtml", image: "http://www.serebii.net/sunmoon/pokemon/323-m.png"},
 {id: "mega altaria", name: "Mega Altaria", dex: 334, alola: -1, type: "Dragon/Fairy", ability: "Pixilate", wiki: "http://www.serebii.net/pokedex-sm/334.shtml", image: "http://www.serebii.net/sunmoon/pokemon/334-m.png"},
 {id: "mega glalie", name: "Mega Glalie", dex: 362, alola: -1, type: "Ice", ability: "Refrigerate", wiki: "http://www.serebii.net/pokedex-sm/362.shtml", image: "http://www.serebii.net/sunmoon/pokemon/362-m.png"},
 {id: "mega salamence", name: "Mega Salamence", dex: 373, alola: -1, type: "Dragon/Flying", ability: "Aerilate", wiki: "http://www.serebii.net/pokedex-sm/373.shtml", image: "http://www.serebii.net/sunmoon/pokemon/373-m.png"},
 {id: "mega metagross", name: "Mega Metagross", dex: 376, alola: -1, type: "Steel/Psychic", ability: "Tough Claws", wiki: "http://www.serebii.net/pokedex-sm/376.shtml", image: "http://www.serebii.net/sunmoon/pokemon/376-m.png"},
 {id: "mega latias", name: "Mega Latias", dex: 380, alola: -1, type: "Dragon/Psychic", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/380.shtml", image: "http://www.serebii.net/sunmoon/pokemon/380-m.png"},
 {id: "mega latios", name: "Mega Latios", dex: 381, alola: -1, type: "Dragon/Psychic", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/381.shtml", image: "http://www.serebii.net/sunmoon/pokemon/381-m.png"},
 {id: "mega rayquaza", name: "Mega Rayquaza", dex: 384, alola: -1, type: "Dragon/Flying", ability: "Delta Stream", wiki: "http://www.serebii.net/pokedex-sm/384.shtml", image: "http://www.serebii.net/sunmoon/pokemon/384-m.png"},
 {id: "mega lopunny", name: "Mega Lopunny", dex: 428, alola: -1, type: "Normal/Fighting", ability: "Scrappy", wiki: "http://www.serebii.net/pokedex-sm/428.shtml", image: "http://www.serebii.net/sunmoon/pokemon/428-m.png"},
 {id: "mega gallade", name: "Mega Gallade", dex: 475, alola: -1, type: "Psychic/Fighting", ability: "Inner Focus", wiki: "http://www.serebii.net/pokedex-sm/475.shtml", image: "http://www.serebii.net/sunmoon/pokemon/475-m.png"},
 {id: "mega audino", name: "Mega Audino", dex: 531, alola: -1, type: "Normal/Fairy", ability: "Healer", wiki: "http://www.serebii.net/pokedex-sm/531.shtml", image: "http://www.serebii.net/sunmoon/pokemon/531-m.png"},
 {id: "mega diancie", name: "Mega Diancie", dex: 719, alola: -1, type: "Rock/Fairy", ability: "Magic Bounce", wiki: "http://www.serebii.net/pokedex-sm/719.shtml", image: "http://www.serebii.net/sunmoon/pokemon/719-m.png"},
 {id: "rowlet", name: "Rowlet", dex: 722, alola: 1, type: "Grass/Flying", ability: "Overgrow/None/Long Reach", wiki: "http://www.serebii.net/pokedex-sm/722.shtml", image: "http://www.serebii.net/sunmoon/pokemon/722.png"},
 {id: "dartrix", name: "Dartrix", dex: 723, alola: 2, type: "Grass/Flying", ability: "Overgrow/None/Long Reach", wiki: "http://www.serebii.net/pokedex-sm/723.shtml", image: "http://www.serebii.net/sunmoon/pokemon/723.png"},
 {id: "decidueye", name: "Decidueye", dex: 724, alola: 3, type: "Grass/Ghost", ability: "Overgrow/None/Long Reach", wiki: "http://www.serebii.net/pokedex-sm/724.shtml", image: "http://www.serebii.net/sunmoon/pokemon/724.png"},
 {id: "litten", name: "Litten", dex: 725, alola: 4, type: "Fire", ability: "Blaze/None/Intimidate", wiki: "http://www.serebii.net/pokedex-sm/725.shtml", image: "http://www.serebii.net/sunmoon/pokemon/725.png"},
 {id: "torracat", name: "Torracat", dex: 726, alola: 5, type: "Fire", ability: "Blaze/None/Intimidate", wiki: "http://www.serebii.net/pokedex-sm/726.shtml", image: "http://www.serebii.net/sunmoon/pokemon/726.png"},
 {id: "incineroar", name: "Incineroar", dex: 727, alola: 6, type: "Fire/Dark", ability: "Blaze/None/Intimidate", wiki: "http://www.serebii.net/pokedex-sm/727.shtml", image: "http://www.serebii.net/sunmoon/pokemon/727.png"},
 {id: "popplio", name: "Popplio", dex: 728, alola: 7, type: "Water", ability: "Torrent/None/Liquid Voice", wiki: "http://www.serebii.net/pokedex-sm/728.shtml", image: "http://www.serebii.net/sunmoon/pokemon/728.png"},
 {id: "brionne", name: "Brionne", dex: 729, alola: 8, type: "Water", ability: "Torrent/None/Liquid Voice", wiki: "http://www.serebii.net/pokedex-sm/729.shtml", image: "http://www.serebii.net/sunmoon/pokemon/729.png"},
 {id: "primarina", name: "Primarina", dex: 730, alola: 9, type: "Water/Fairy", ability: "Torrent/None/Liquid Voice", wiki: "http://www.serebii.net/pokedex-sm/730.shtml", image: "http://www.serebii.net/sunmoon/pokemon/730.png"},
 {id: "pikipek", name: "Pikipek", dex: 731, alola: 8, type: "Normal/Flying", ability: "Keen Eye/Skill Link/", wiki: "http://www.serebii.net/pokedex-sm/731.shtml", image: "http://www.serebii.net/sunmoon/pokemon/731.png"},
 {id: "trumbeak", name: "Trumbeak", dex: 732, alola: 9, type: "Normal/Flying", ability: "Keen Eye/Skill Link/", wiki: "http://www.serebii.net/pokedex-sm/732.shtml", image: "http://www.serebii.net/sunmoon/pokemon/732.png"},
 {id: "toucannon", name: "Toucannon", dex: 733, alola: 10, type: "Normal/Flying", ability: "Keen Eye/Skill Link/", wiki: "http://www.serebii.net/pokedex-sm/733.shtml", image: "http://www.serebii.net/sunmoon/pokemon/733.png"},
 {id: "yungoos", name: "Yungoos", dex: 734, alola: 11, type: "Normal", ability: "Stakeout/Strong Jaw/Adaptability", wiki: "http://www.serebii.net/pokedex-sm/734.shtml", image: "http://www.serebii.net/sunmoon/pokemon/734.png"},
 {id: "gumshoos", name: "Gumshoos", dex: 735, alola: 12, type: "Normal", ability: "Stakeout/Strong Jaw/Adaptability", wiki: "http://www.serebii.net/pokedex-sm/735.shtml", image: "http://www.serebii.net/sunmoon/pokemon/735.png"},
 {id: "grubbin", name: "Grubbin", dex: 736, alola: 23, type: "Bug", ability: "Swarm", wiki: "http://www.serebii.net/pokedex-sm/736.shtml", image: "http://www.serebii.net/sunmoon/pokemon/736.png"},
 {id: "charjabug", name: "Charjabug", dex: 737, alola: 28, type: "Bug/Electric", ability: "Battery", wiki: "http://www.serebii.net/pokedex-sm/737.shtml", image: "http://www.serebii.net/sunmoon/pokemon/737.png"},
 {id: "vikavolt", name: "Vikavolt", dex: 738, alola: 29, type: "Bug/Electric", ability: "Levitate", wiki: "http://www.serebii.net/pokedex-sm/738.shtml", image: "http://www.serebii.net/sunmoon/pokemon/738.png"},
 {id: "crabrawler", name: "Crabrawler", dex: 739, alola: 59, type: "Fighting", ability: "Hyper Cutter/Iron Fist/Anger Point", wiki: "http://www.serebii.net/pokedex-sm/739.shtml", image: "http://www.serebii.net/sunmoon/pokemon/739.png"},
 {id: "crabominable", name: "Crabominable", dex: 740, alola: 48, type: "Fighting/Ice", ability: "Hyper Cutter/Iron Fist/Anger Point", wiki: "http://www.serebii.net/pokedex-sm/740.shtml", image: "http://www.serebii.net/sunmoon/pokemon/740.png"},
 {id: "oricorio", name: "Oricorio", dex: 741, alola: 82, type: "Fire/Flying", ability: "Dancer", wiki: "http://www.serebii.net/pokedex-sm/741.shtml", image: "http://www.serebii.net/sunmoon/pokemon/741.png"},
 {id: "cutiefly", name: "Cutiefly", dex: 742, alola: 83, type: "Bug/Fairy", ability: "Honey Gather/Shield Dust/Sweet Veil", wiki: "http://www.serebii.net/pokedex-sm/742.shtml", image: "http://www.serebii.net/sunmoon/pokemon/742.png"},
 {id: "ribombee", name: "Ribombee", dex: 743, alola: 84, type: "Bug/Fairy", ability: "Honey Gather/Shield Dust/Sweet Veil", wiki: "http://www.serebii.net/pokedex-sm/743.shtml", image: "http://www.serebii.net/sunmoon/pokemon/743.png"},
 {id: "rockruff", name: "Rockruff", dex: 744, alola: 103, type: "Rock", ability: "Keen Eye/Vital Spirit/Steadfast", wiki: "http://www.serebii.net/pokedex-sm/744.shtml", image: "http://www.serebii.net/sunmoon/pokemon/744.png"},
 {id: "lycanroc", name: "Lycanroc", dex: 745, alola: 104, type: "Rock", ability: "Keen Eye/Sand Rush/Steadfast", wiki: "http://www.serebii.net/pokedex-sm/745.shtml", image: "http://www.serebii.net/sunmoon/pokemon/745.png"},
 {id: "lycanroc midnight", name: "Lycanroc Midnight", dex: 745, alola: 104, type: "Rock", ability: "Keen Eye/Vital Spirit/No Guard", wiki: "http://www.serebii.net/pokedex-sm/745.shtml", image: "http://www.serebii.net/sunmoon/pokemon/745-m.png"},
 {id: "wishiwashi", name: "Wishiwashi", dex: 746, alola: 110, type: "Water", ability: "Schooling", wiki: "http://www.serebii.net/pokedex-sm/746.shtml", image: "http://www.serebii.net/sunmoon/pokemon/746.png"},
 {id: "mareanie", name: "Mareanie", dex: 747, alola: 113, type: "Poison/Water", ability: "Merciless/Limber/Regenerator", wiki: "http://www.serebii.net/pokedex-sm/747.shtml", image: "http://www.serebii.net/sunmoon/pokemon/747.png"},
 {id: "toxapex", name: "Toxapex", dex: 748, alola: 114, type: "Poison/Water", ability: "Merciless/Limber/Regenerator", wiki: "http://www.serebii.net/pokedex-sm/748.shtml", image: "http://www.serebii.net/sunmoon/pokemon/748.png"},
 {id: "mudbray", name: "Mudbray", dex: 749, alola: 132, type: "Ground", ability: "Own Tempo/Stamina/Inner Focus", wiki: "http://www.serebii.net/pokedex-sm/749.shtml", image: "http://www.serebii.net/sunmoon/pokemon/749.png"},
 {id: "mudsdale", name: "Mudsdale", dex: 750, alola: 133, type: "Ground", ability: "Own Tempo/Stamina/Inner Focus", wiki: "http://www.serebii.net/pokedex-sm/750.shtml", image: "http://www.serebii.net/sunmoon/pokemon/750.png"},
 {id: "dewpider", name: "Dewpider", dex: 751, alola: 141, type: "Water/Bug", ability: "Water Bubble/None/Water Absorb", wiki: "http://www.serebii.net/pokedex-sm/751.shtml", image: "http://www.serebii.net/sunmoon/pokemon/751.png"},
 {id: "araquanid", name: "Araquanid", dex: 752, alola: 142, type: "Water/Bug", ability: "Water Bubble/None/Water Absorb", wiki: "http://www.serebii.net/pokedex-sm/752.shtml", image: "http://www.serebii.net/sunmoon/pokemon/752.png"},
 {id: "fomantis", name: "Fomantis", dex: 753, alola: 143, type: "Grass", ability: "Leaf Guard/None/Contrary", wiki: "http://www.serebii.net/pokedex-sm/753.shtml", image: "http://www.serebii.net/sunmoon/pokemon/753.png"},
 {id: "lurantis", name: "Lurantis", dex: 754, alola: 144, type: "Grass", ability: "Leaf Guard/None/Contrary", wiki: "http://www.serebii.net/pokedex-sm/754.shtml", image: "http://www.serebii.net/sunmoon/pokemon/754.png"},
 {id: "morelull", name: "Morelull", dex: 755, alola: 145, type: "Grass/Fairy", ability: "Illuminate/Effect Spore/Rain Dish", wiki: "http://www.serebii.net/pokedex-sm/755.shtml", image: "http://www.serebii.net/sunmoon/pokemon/755.png"},
 {id: "shiinotic", name: "Shiinotic", dex: 756, alola: 146, type: "Grass/Fairy", ability: "Illuminate/Effect Spore/Rain Dish", wiki: "http://www.serebii.net/pokedex-sm/756.shtml", image: "http://www.serebii.net/sunmoon/pokemon/756.png"},
 {id: "salandit", name: "Salandit", dex: 757, alola: 161, type: "Poison/Fire", ability: "Corrosion/None/Oblivious", wiki: "http://www.serebii.net/pokedex-sm/757.shtml", image: "http://www.serebii.net/sunmoon/pokemon/757.png"},
 {id: "salazzle", name: "Salazzle", dex: 758, alola: 162, type: "Poison/Fire", ability: "Corrosion/None/Oblivious", wiki: "http://www.serebii.net/pokedex-sm/758.shtml", image: "http://www.serebii.net/sunmoon/pokemon/758.png"},
 {id: "stufful", name: "Stufful", dex: 759, alola: 169, type: "Normal/Fighting", ability: "Fluffy/Klutz/Cute Charm", wiki: "http://www.serebii.net/pokedex-sm/759.shtml", image: "http://www.serebii.net/sunmoon/pokemon/759.png"},
 {id: "bewear", name: "Bewear", dex: 760, alola: 170, type: "Normal/Fighting", ability: "Fluffy/Klutz/Unnerve", wiki: "http://www.serebii.net/pokedex-sm/760.shtml", image: "http://www.serebii.net/sunmoon/pokemon/760.png"},
 {id: "bounsweet", name: "Bounsweet", dex: 761, alola: 171, type: "Grass", ability: "Leaf Guard/Oblivious/Sweet Veil", wiki: "http://www.serebii.net/pokedex-sm/761.shtml", image: "http://www.serebii.net/sunmoon/pokemon/761.png"},
 {id: "steenee", name: "Steenee", dex: 762, alola: 172, type: "Grass", ability: "Leaf Guard/Oblivious/Sweet Veil", wiki: "http://www.serebii.net/pokedex-sm/762.shtml", image: "http://www.serebii.net/sunmoon/pokemon/762.png"},
 {id: "tsareena", name: "Tsareena", dex: 763, alola: 173, type: "Grass", ability: "Leaf Guard/Queenly Majesty/Sweet Veil", wiki: "http://www.serebii.net/pokedex-sm/763.shtml", image: "http://www.serebii.net/sunmoon/pokemon/763.png"},
 {id: "comfey", name: "Comfey", dex: 764, alola: 174, type: "Fairy", ability: "Flower Veil/Triage/Natural Cure", wiki: "http://www.serebii.net/pokedex-sm/764.shtml", image: "http://www.serebii.net/sunmoon/pokemon/764.png"},
 {id: "oranguru", name: "Oranguru", dex: 765, alola: 176, type: "Normal/Psychic", ability: "Inner Focus/Telepathy/Symbiosis", wiki: "http://www.serebii.net/pokedex-sm/765.shtml", image: "http://www.serebii.net/sunmoon/pokemon/765.png"},
 {id: "passimian", name: "Passimian", dex: 766, alola: 177, type: "Fighting", ability: "Receiver/None/Defiant", wiki: "http://www.serebii.net/pokedex-sm/766.shtml", image: "http://www.serebii.net/sunmoon/pokemon/766.png"},
 {id: "wimpod", name: "Wimpod", dex: 767, alola: 182, type: "Bug/Water", ability: "Wimp Out", wiki: "http://www.serebii.net/pokedex-sm/767.shtml", image: "http://www.serebii.net/sunmoon/pokemon/767.png"},
 {id: "golisopod", name: "Golisopod", dex: 768, alola: 183, type: "Bug/Water", ability: "Emergency Exit", wiki: "http://www.serebii.net/pokedex-sm/768.shtml", image: "http://www.serebii.net/sunmoon/pokemon/768.png"},
 {id: "sandygast", name: "Sandygast", dex: 769, alola: 186, type: "Ghost/Ground", ability: "Water Compaction/None/Sand Veil", wiki: "http://www.serebii.net/pokedex-sm/769.shtml", image: "http://www.serebii.net/sunmoon/pokemon/769.png"},
 {id: "palossand", name: "Palossand", dex: 770, alola: 187, type: "Ghost/Ground", ability: "Water Compaction/None/Sand Veil", wiki: "http://www.serebii.net/pokedex-sm/770.shtml", image: "http://www.serebii.net/sunmoon/pokemon/770.png"},
 {id: "pyukumuku", name: "Pyukumuku", dex: 771, alola: 200, type: "Water", ability: "Innards Out/None/Unaware", wiki: "http://www.serebii.net/pokedex-sm/771.shtml", image: "http://www.serebii.net/sunmoon/pokemon/771.png"},
 {id: "type null", name: "Type: Null", dex: 772, alola: -1, type: "Normal", ability: "Battle Armor", wiki: "http://www.serebii.net/pokedex-sm/772.shtml", image: "http://www.serebii.net/sunmoon/pokemon/772.png"},
 {id: "silvally", name: "Silvally", dex: 773, alola: 204, type: "Normal", ability: "RKS System", wiki: "http://www.serebii.net/pokedex-sm/773.shtml", image: "http://www.serebii.net/sunmoon/pokemon/773.png"},
 {id: "minior", name: "Minior", dex: 774, alola: 213, type: "Rock/Flying", ability: "Shields Down", wiki: "http://www.serebii.net/pokedex-sm/774.shtml", image: "http://www.serebii.net/sunmoon/pokemon/774.png"},
 {id: "komala", name: "Komala", dex: 775, alola: 222, type: "Normal", ability: "Comatose", wiki: "http://www.serebii.net/pokedex-sm/775.shtml", image: "http://www.serebii.net/sunmoon/pokemon/775.png"},
 {id: "turtonator", name: "Turtonator", dex: 776, alola: 224, type: "Fire/Dragon", ability: "Shell Armor", wiki: "http://www.serebii.net/pokedex-sm/776.shtml", image: "http://www.serebii.net/sunmoon/pokemon/776.png"},
 {id: "togedemaru", name: "Togedemaru", dex: 777, alola: 225, type: "Electric/Steel", ability: "Iron Barbs/Lightning Rod/Sturdy", wiki: "http://www.serebii.net/pokedex-sm/777.shtml", image: "http://www.serebii.net/sunmoon/pokemon/777.png"},
 {id: "mimikyu", name: "Mimikyu", dex: 778, alola: 242, type: "Ghost/Fairy", ability: "Disguise", wiki: "http://www.serebii.net/pokedex-sm/778.shtml", image: "http://www.serebii.net/sunmoon/pokemon/778.png"},
 {id: "bruxish", name: "Bruxish", dex: 779, alola: 243, type: "Water/Psychic", ability: "Dazzling/Strong Jaw/Wonder Skin", wiki: "http://www.serebii.net/pokedex-sm/779.shtml", image: "http://www.serebii.net/sunmoon/pokemon/779.png"},
 {id: "drampa", name: "Drampa", dex: 780, alola: 244, type: "Normal/Dragon", ability: "Berserk/Sap Sipper/Cloud Nine", wiki: "http://www.serebii.net/pokedex-sm/780.shtml", image: "http://www.serebii.net/sunmoon/pokemon/780.png"},
 {id: "dhelmise", name: "Dhelmise", dex: 781, alola: 263, type: "Ghost/Grass", ability: "Steelworker", wiki: "http://www.serebii.net/pokedex-sm/781.shtml", image: "http://www.serebii.net/sunmoon/pokemon/781.png"},
 {id: "jangmo-o", name: "Jangmo-o", dex: 782, alola: -1, type: "Dragon", ability: "Bulletproof/Soundproof/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/782.shtml", image: "http://www.serebii.net/sunmoon/pokemon/782.png"},
 {id: "hakamo-o", name: "Hakamo-o", dex: 783, alola: -1, type: "Dragon/Fighting", ability: "Bulletproof/Soundproof/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/783.shtml", image: "http://www.serebii.net/sunmoon/pokemon/783.png"},
 {id: "kommo-o", name: "Kommo-o", dex: 784, alola: -1, type: "Dragon/Fighting", ability: "Bulletproof/Soundproof/Overcoat", wiki: "http://www.serebii.net/pokedex-sm/784.shtml", image: "http://www.serebii.net/sunmoon/pokemon/784.png"},
 {id: "tapu koko", name: "Tapu Koko", dex: 785, alola: 285, type: "Electric/Fairy", ability: "Electric Surge/None/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/785.shtml", image: "http://www.serebii.net/sunmoon/pokemon/785.png"},
 {id: "tapu lele", name: "Tapu Lele", dex: 786, alola: 286, type: "Psychic/Fairy", ability: "Psychic Surge/None/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/786.shtml", image: "http://www.serebii.net/sunmoon/pokemon/786.png"},
 {id: "tapu bulu", name: "Tapu Bulu", dex: 787, alola: 287, type: "Grass/Fairy", ability: "Grassy Surge/None/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/787.shtml", image: "http://www.serebii.net/sunmoon/pokemon/787.png"},
 {id: "tapu fini", name: "Tapu Fini", dex: 788, alola: 288, type: "Water/Fairy", ability: "Misty Surge/None/Telepathy", wiki: "http://www.serebii.net/pokedex-sm/788.shtml", image: "http://www.serebii.net/sunmoon/pokemon/788.png"},
 {id: "cosmog", name: "Cosmog", dex: 789, alola: 289, type: "Psychic", ability: "Unaware", wiki: "http://www.serebii.net/pokedex-sm/789.shtml", image: "http://www.serebii.net/sunmoon/pokemon/789.png"},
 {id: "cosmoem", name: "Cosmoem", dex: 790, alola: 290, type: "Psychic", ability: "Sturdy", wiki: "http://www.serebii.net/pokedex-sm/790.shtml", image: "http://www.serebii.net/sunmoon/pokemon/790.png"},
 {id: "solgaleo", name: "Solgaleo", dex: 791, alola: 291, type: "Psychic/Steel", ability: "Full Metal Body", wiki: "http://www.serebii.net/pokedex-sm/791.shtml", image: "http://www.serebii.net/sunmoon/pokemon/791.png"},
 {id: "lunala", name: "Lunala", dex: 792, alola: 292, type: "Psychic/Ghost", ability: "Shadow Shield", wiki: "http://www.serebii.net/pokedex-sm/792.shtml", image: "http://www.serebii.net/sunmoon/pokemon/792.png"},
 {id: "nihilego", name: "Nihilego", dex: 793, alola: 293, type: "Rock/Poison", ability: "Beast Boost", wiki: "http://www.serebii.net/pokedex-sm/793.shtml", image: "http://www.serebii.net/sunmoon/pokemon/793.png"},
 {id: "buzzwole", name: "Buzzwole", dex: 794, alola: 294, type: "Bug/Fighting", ability: "Beast Boost", wiki: "http://www.serebii.net/pokedex-sm/794.shtml", image: "http://www.serebii.net/sunmoon/pokemon/794.png"},
 {id: "pheromosa", name: "Pheromosa", dex: 795, alola: 295, type: "Bug/Fighting", ability: "Beast Boost", wiki: "http://www.serebii.net/pokedex-sm/795.shtml", image: "http://www.serebii.net/sunmoon/pokemon/795.png"},
 {id: "xurkitree", name: "Xurkitree", dex: 796, alola: 296, type: "Electric", ability: "Beast Boost", wiki: "http://www.serebii.net/pokedex-sm/796.shtml", image: "http://www.serebii.net/sunmoon/pokemon/796.png"},
 {id: "celesteela", name: "Celesteela", dex: 797, alola: 297, type: "Steel/Flying", ability: "Beast Boost", wiki: "http://www.serebii.net/pokedex-sm/797.shtml", image: "http://www.serebii.net/sunmoon/pokemon/797.png"},
 {id: "kartana", name: "Kartana", dex: 798, alola: 298, type: "Grass/Steel", ability: "Beast Boost", wiki: "http://www.serebii.net/pokedex-sm/798.shtml", image: "http://www.serebii.net/sunmoon/pokemon/798.png"},
 {id: "guzzlord", name: "Guzzlord", dex: 799, alola: 299, type: "Dark/Dragon", ability: "Beast Boost", wiki: "http://www.serebii.net/pokedex-sm/799.shtml", image: "http://www.serebii.net/sunmoon/pokemon/799.png"},
 {id: "necrozma", name: "Necrozma", dex: 800, alola: 300, type: "Psychic", ability: "Prism Armor", wiki: "http://www.serebii.net/pokedex-sm/800.shtml", image: "http://www.serebii.net/sunmoon/pokemon/800.png"},
 {id: "magearna", name: "Magearna", dex: 801, alola: 301, type: "Steel/Fairy", ability: "Soul-Heart", wiki: "http://www.serebii.net/pokedex-sm/801.shtml", image: "http://www.serebii.net/sunmoon/pokemon/801.png"},
 {id: "marshadow", name: "Marshadow", dex: 802, alola: 302, type: "Fighting/Ghost", ability: "Technician", wiki: "http://www.serebii.net/pokedex-sm/802.shtml", image: "http://www.serebii.net/sunmoon/pokemon/802.png"}];
 
var moves = [{id: "pound", name: "Pound", type: "Normal", cat: "Physical", power: 40, pp: 35, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/pound.shtml"},
 {id: "karate chop", name: "Karate Chop", type: "Fighting", cat: "Physical", power: 50, pp: 25, acc: 100, effect: "High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/karatechop.shtml"},
 {id: "double slap", name: "Double Slap", type: "Normal", cat: "Physical", power: 15, pp: 10, acc: 85, effect: "Hits 2-5 times in one turn.", wiki: "http://www.serebii.net/attackdex-sm/doubleslap.shtml"},
 {id: "comet punch", name: "Comet Punch", type: "Normal", cat: "Physical", power: 18, pp: 15, acc: 85, effect: "Hits 2-5 times in one turn.", wiki: "http://www.serebii.net/attackdex-sm/cometpunch.shtml"},
 {id: "mega punch", name: "Mega Punch", type: "Normal", cat: "Physical", power: 80, pp: 20, acc: 85, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/megapunch.shtml"},
 {id: "pay day", name: "Pay Day", type: "Normal", cat: "Physical", power: 40, pp: 20, acc: 100, effect: "A small amount of money is gained after the battle resolves.", wiki: "http://www.serebii.net/attackdex-sm/payday.shtml"},
 {id: "fire punch", name: "Fire Punch", type: "Fire", cat: "Physical", power: 75, pp: 15, acc: 100, effect: "May burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/firepunch.shtml"},
 {id: "ice punch", name: "Ice Punch", type: "Ice", cat: "Physical", power: 75, pp: 15, acc: 100, effect: "May freeze opponent.", wiki: "http://www.serebii.net/attackdex-sm/icepunch.shtml"},
 {id: "thunder punch", name: "Thunder Punch", type: "Electric", cat: "Physical", power: 75, pp: 15, acc: 100, effect: "May paralyze opponent.", wiki: "http://www.serebii.net/attackdex-sm/thunderpunch.shtml"},
 {id: "scratch", name: "Scratch", type: "Normal", cat: "Physical", power: 40, pp: 35, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/scratch.shtml"},
 {id: "vice grip", name: "Vice Grip", type: "Normal", cat: "Physical", power: 55, pp: 30, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/vicegrip.shtml"},
 {id: "guillotine", name: "Guillotine", type: "Normal", cat: "Physical", pp: 5, effect: "One-Hit-KO, if it hits.", wiki: "http://www.serebii.net/attackdex-sm/guillotine.shtml"},
 {id: "razor wind", name: "Razor Wind", type: "Normal", cat: "Special", power: 80, pp: 10, acc: 100, effect: "Charges on first turn, attacks on second. High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/razorwind.shtml"},
 {id: "swords dance", name: "Swords Dance", type: "Normal", cat: "Status", pp: 20, effect: "Sharply raises user's Attack.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/swordsdance.shtml"},
 {id: "cut", name: "Cut", type: "Normal", cat: "Physical", power: 50, pp: 30, acc: 95, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/cut.shtml"},
 {id: "gust", name: "Gust", type: "Flying", cat: "Special", power: 40, pp: 35, acc: 100, effect: "Hits Pokémon using Fly/Bounce with double power.", wiki: "http://www.serebii.net/attackdex-sm/gust.shtml"},
 {id: "wing attack", name: "Wing Attack", type: "Flying", cat: "Physical", power: 60, pp: 35, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/wingattack.shtml"},
 {id: "whirlwind", name: "Whirlwind", type: "Normal", cat: "Status", pp: 20, effect: "In battles, the opponent switches. In the wild, the Pokémon runs.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/whirlwind.shtml"},
 {id: "fly", name: "Fly", type: "Flying", cat: "Physical", power: 90, pp: 15, acc: 95, effect: "Flies up on first turn, attacks on second turn.", wiki: "http://www.serebii.net/attackdex-sm/fly.shtml"},
 {id: "bind", name: "Bind", type: "Normal", cat: "Physical", power: 15, pp: 20, acc: 85, effect: "Traps opponent, damaging them for 4-5 turns.", wiki: "http://www.serebii.net/attackdex-sm/bind.shtml"},
 {id: "slam", name: "Slam", type: "Normal", cat: "Physical", power: 80, pp: 20, acc: 75, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/slam.shtml"},
 {id: "vine whip", name: "Vine Whip", type: "Grass", cat: "Physical", power: 45, pp: 25, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/vinewhip.shtml"},
 {id: "stomp", name: "Stomp", type: "Normal", cat: "Physical", power: 65, pp: 20, acc: 100, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/stomp.shtml"},
 {id: "double kick", name: "Double Kick", type: "Fighting", cat: "Physical", power: 30, pp: 30, acc: 100, effect: "Hits twice in one turn.", wiki: "http://www.serebii.net/attackdex-sm/doublekick.shtml"},
 {id: "mega kick", name: "Mega Kick", type: "Normal", cat: "Physical", power: 120, pp: 5, acc: 75, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/megakick.shtml"},
 {id: "jump kick", name: "Jump Kick", type: "Fighting", cat: "Physical", power: 100, pp: 10, acc: 95, effect: "If it misses, the user loses half their HP.", wiki: "http://www.serebii.net/attackdex-sm/jumpkick.shtml"},
 {id: "rolling kick", name: "Rolling Kick", type: "Fighting", cat: "Physical", power: 60, pp: 15, acc: 85, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/rollingkick.shtml"},
 {id: "sand attack", name: "Sand Attack", type: "Ground", cat: "Status", pp: 15, acc: 100, effect: "Lowers opponent's Accuracy.", zeffect: "Evasiveness ↑", wiki: "http://www.serebii.net/attackdex-sm/sandattack.shtml"},
 {id: "headbutt", name: "Headbutt", type: "Normal", cat: "Physical", power: 70, pp: 15, acc: 100, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/headbutt.shtml"},
 {id: "horn attack", name: "Horn Attack", type: "Normal", cat: "Physical", power: 65, pp: 25, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/hornattack.shtml"},
 {id: "fury attack", name: "Fury Attack", type: "Normal", cat: "Physical", power: 15, pp: 20, acc: 85, effect: "Hits 2-5 times in one turn.", wiki: "http://www.serebii.net/attackdex-sm/furyattack.shtml"},
 {id: "horn drill", name: "Horn Drill", type: "Normal", cat: "Physical", pp: 5, effect: "One-Hit-KO, if it hits.", wiki: "http://www.serebii.net/attackdex-sm/horndrill.shtml"},
 {id: "tackle", name: "Tackle", type: "Normal", cat: "Physical", power: 50, pp: 35, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/tackle.shtml"},
 {id: "body slam", name: "Body Slam", type: "Normal", cat: "Physical", power: 85, pp: 15, acc: 100, effect: "May paralyze opponent.", wiki: "http://www.serebii.net/attackdex-sm/bodyslam.shtml"},
 {id: "wrap", name: "Wrap", type: "Normal", cat: "Physical", power: 15, pp: 20, acc: 90, effect: "Traps opponent, damaging them for 4-5 turns.", wiki: "http://www.serebii.net/attackdex-sm/wrap.shtml"},
 {id: "take down", name: "Take Down", type: "Normal", cat: "Physical", power: 90, pp: 20, acc: 85, effect: "User receives recoil damage.", wiki: "http://www.serebii.net/attackdex-sm/takedown.shtml"},
 {id: "thrash", name: "Thrash", type: "Normal", cat: "Physical", power: 120, pp: 10, acc: 100, effect: "User attacks for 2-3 turns but then becomes confused.", wiki: "http://www.serebii.net/attackdex-sm/thrash.shtml"},
 {id: "double-edge", name: "Double-edge", type: "Normal", cat: "Physical", power: 120, pp: 15, acc: 100, effect: "User receives recoil damage.", wiki: "http://www.serebii.net/attackdex-sm/double-edge.shtml"},
 {id: "tail whip", name: "Tail Whip", type: "Normal", cat: "Status", pp: 30, acc: 100, effect: "Lowers opponent's Defense.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/tailwhip.shtml"},
 {id: "poison sting", name: "Poison Sting", type: "Poison", cat: "Physical", power: 15, pp: 35, acc: 100, effect: "May poison the opponent.", wiki: "http://www.serebii.net/attackdex-sm/poisonsting.shtml"},
 {id: "twineedle", name: "Twineedle", type: "Bug", cat: "Physical", power: 25, pp: 20, acc: 100, effect: "Hits twice in one turn. May poison opponent.", wiki: "http://www.serebii.net/attackdex-sm/twineedle.shtml"},
 {id: "pin missile", name: "Pin Missile", type: "Bug", cat: "Physical", power: 25, pp: 20, acc: 95, effect: "Hits 2-5 times in one turn.", wiki: "http://www.serebii.net/attackdex-sm/pinmissile.shtml"},
 {id: "leer", name: "Leer", type: "Normal", cat: "Status", pp: 30, acc: 100, effect: "Lowers opponent's Defense.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/leer.shtml"},
 {id: "bite", name: "Bite", type: "Dark", cat: "Physical", power: 60, pp: 25, acc: 100, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/bite.shtml"},
 {id: "growl", name: "Growl", type: "Normal", cat: "Status", pp: 40, acc: 100, effect: "Lowers opponent's Attack.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/growl.shtml"},
 {id: "roar", name: "Roar", type: "Normal", cat: "Status", pp: 20, effect: "In battles, the opponent switches. In the wild, the Pokémon runs.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/roar.shtml"},
 {id: "sing", name: "Sing", type: "Normal", cat: "Status", pp: 15, acc: 55, effect: "Puts opponent to sleep.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/sing.shtml"},
 {id: "supersonic", name: "Supersonic", type: "Normal", cat: "Status", pp: 20, acc: 55, effect: "Confuses opponent.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/supersonic.shtml"},
 {id: "sonic boom", name: "Sonic Boom", type: "Normal", cat: "Special", pp: 20, acc: 90, effect: "Always inflicts 20 HP.", wiki: "http://www.serebii.net/attackdex-sm/sonicboom.shtml"},
 {id: "disable", name: "Disable", type: "Normal", cat: "Status", pp: 20, acc: 100, effect: "Opponent can't use its last attack for a few turns.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/disable.shtml"},
 {id: "acid", name: "Acid", type: "Poison", cat: "Special", power: 40, pp: 30, acc: 100, effect: "May lower opponent's Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/acid.shtml"},
 {id: "ember", name: "Ember", type: "Fire", cat: "Special", power: 40, pp: 25, acc: 100, effect: "May burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/ember.shtml"},
 {id: "flamethrower", name: "Flamethrower", type: "Fire", cat: "Special", power: 90, pp: 15, acc: 100, effect: "May burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/flamethrower.shtml"},
 {id: "mist", name: "Mist", type: "Ice", cat: "Status", pp: 30, effect: "User's stats cannot be changed for a period of time.", zeffect: "Restores user's HP 100%", wiki: "http://www.serebii.net/attackdex-sm/mist.shtml"},
 {id: "water gun", name: "Water Gun", type: "Water", cat: "Special", power: 40, pp: 25, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/watergun.shtml"},
 {id: "hydro pump", name: "Hydro Pump", type: "Water", cat: "Special", power: 110, pp: 5, acc: 80, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/hydropump.shtml"},
 {id: "surf", name: "Surf", type: "Water", cat: "Special", power: 90, pp: 15, acc: 100, effect: "Hits all adjacent Pokémon.", wiki: "http://www.serebii.net/attackdex-sm/surf.shtml"},
 {id: "ice beam", name: "Ice Beam", type: "Ice", cat: "Special", power: 90, pp: 10, acc: 100, effect: "May freeze opponent.", wiki: "http://www.serebii.net/attackdex-sm/icebeam.shtml"},
 {id: "blizzard", name: "Blizzard", type: "Ice", cat: "Special", power: 110, pp: 5, acc: 70, effect: "May freeze opponent.", wiki: "http://www.serebii.net/attackdex-sm/blizzard.shtml"},
 {id: "psybeam", name: "Psybeam", type: "Psychic", cat: "Special", power: 65, pp: 20, acc: 100, effect: "May confuse opponent.", wiki: "http://www.serebii.net/attackdex-sm/psybeam.shtml"},
 {id: "bubble beam", name: "Bubble Beam", type: "Water", cat: "Special", power: 65, pp: 20, acc: 100, effect: "May lower opponent's Speed.", wiki: "http://www.serebii.net/attackdex-sm/bubblebeam.shtml"},
 {id: "aurora beam", name: "Aurora Beam", type: "Ice", cat: "Special", power: 65, pp: 20, acc: 100, effect: "May lower opponent's Attack.", wiki: "http://www.serebii.net/attackdex-sm/aurorabeam.shtml"},
 {id: "hyper beam", name: "Hyper Beam", type: "Normal", cat: "Special", power: 150, pp: 5, acc: 90, effect: "User must recharge next turn.", wiki: "http://www.serebii.net/attackdex-sm/hyperbeam.shtml"},
 {id: "peck", name: "Peck", type: "Flying", cat: "Physical", power: 35, pp: 35, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/peck.shtml"},
 {id: "drill peck", name: "Drill Peck", type: "Flying", cat: "Physical", power: 80, pp: 20, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/drillpeck.shtml"},
 {id: "submission", name: "Submission", type: "Fighting", cat: "Physical", power: 80, pp: 25, acc: 80, effect: "User receives recoil damage.", wiki: "http://www.serebii.net/attackdex-sm/submission.shtml"},
 {id: "low kick", name: "Low Kick", type: "Fighting", cat: "Physical", pp: 20, acc: 100, effect: "The heavier the opponent, the stronger the attack.", wiki: "http://www.serebii.net/attackdex-sm/lowkick.shtml"},
 {id: "counter", name: "Counter", type: "Fighting", cat: "Physical", pp: 20, acc: 100, effect: "When hit by a Physical Attack, user strikes back with 2x power.", wiki: "http://www.serebii.net/attackdex-sm/counter.shtml"},
 {id: "seismic toss", name: "Seismic Toss", type: "Fighting", cat: "Physical", pp: 20, acc: 100, effect: "Inflicts damage equal to user's level.", wiki: "http://www.serebii.net/attackdex-sm/seismictoss.shtml"},
 {id: "strength", name: "Strength", type: "Normal", cat: "Physical", power: 80, pp: 15, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/strength.shtml"},
 {id: "absorb", name: "Absorb", type: "Grass", cat: "Special", power: 20, pp: 25, acc: 100, effect: "User recovers half the HP inflicted on opponent.", wiki: "http://www.serebii.net/attackdex-sm/absorb.shtml"},
 {id: "mega drain", name: "Mega Drain", type: "Grass", cat: "Special", power: 40, pp: 15, acc: 100, effect: "User recovers half the HP inflicted on opponent.", wiki: "http://www.serebii.net/attackdex-sm/megadrain.shtml"},
 {id: "leech seed", name: "Leech Seed", type: "Grass", cat: "Status", pp: 10, acc: 90, effect: "User steals HP from opponent each turn.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/leechseed.shtml"},
 {id: "growth", name: "Growth", type: "Normal", cat: "Status", pp: 20, effect: "Raises user's Attack and Special Attack.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/growth.shtml"},
 {id: "razor leaf", name: "Razor Leaf", type: "Grass", cat: "Physical", power: 55, pp: 25, acc: 95, effect: "High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/razorleaf.shtml"},
 {id: "solar beam", name: "Solar Beam", type: "Grass", cat: "Special", power: 120, pp: 10, acc: 100, effect: "Charges on first turn, attacks on second.", wiki: "http://www.serebii.net/attackdex-sm/solarbeam.shtml"},
 {id: "poison powder", name: "Poison Powder", type: "Poison", cat: "Status", pp: 35, acc: 75, effect: "Poisons opponent.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/poisonpowder.shtml"},
 {id: "stun spore", name: "Stun Spore", type: "Grass", cat: "Status", pp: 30, acc: 75, effect: "Paralyzes opponent.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/stunspore.shtml"},
 {id: "sleep powder", name: "Sleep Powder", type: "Grass", cat: "Status", pp: 15, acc: 75, effect: "Puts opponent to sleep.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/sleeppowder.shtml"},
 {id: "petal dance", name: "Petal Dance", type: "Grass", cat: "Special", power: 120, pp: 10, acc: 100, effect: "User attacks for 2-3 turns but then becomes confused.", wiki: "http://www.serebii.net/attackdex-sm/petaldance.shtml"},
 {id: "string shot", name: "String Shot", type: "Bug", cat: "Status", pp: 40, acc: 95, effect: "Sharply lowers opponent's Speed.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/stringshot.shtml"},
 {id: "dragon rage", name: "Dragon Rage", type: "Dragon", cat: "Special", pp: 10, acc: 100, effect: "Always inflicts 40 HP.", wiki: "http://www.serebii.net/attackdex-sm/dragonrage.shtml"},
 {id: "fire spin", name: "Fire Spin", type: "Fire", cat: "Special", power: 35, pp: 15, acc: 85, effect: "Traps opponent, damaging them for 4-5 turns.", wiki: "http://www.serebii.net/attackdex-sm/firespin.shtml"},
 {id: "thunder shock", name: "Thunder Shock", type: "Electric", cat: "Special", power: 40, pp: 30, acc: 100, effect: "May paralyze opponent.", wiki: "http://www.serebii.net/attackdex-sm/thundershock.shtml"},
 {id: "thunderbolt", name: "Thunderbolt", type: "Electric", cat: "Special", power: 90, pp: 15, acc: 100, effect: "May paralyze opponent.", wiki: "http://www.serebii.net/attackdex-sm/thunderbolt.shtml"},
 {id: "thunder wave", name: "Thunder Wave", type: "Electric", cat: "Status", pp: 20, acc: 100, effect: "Paralyzes opponent.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/thunderwave.shtml"},
 {id: "thunder", name: "Thunder", type: "Electric", cat: "Special", power: 110, pp: 10, acc: 70, effect: "May paralyze opponent.", wiki: "http://www.serebii.net/attackdex-sm/thunder.shtml"},
 {id: "rock throw", name: "Rock Throw", type: "Rock", cat: "Physical", power: 50, pp: 15, acc: 90, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/rockthrow.shtml"},
 {id: "earthquake", name: "Earthquake", type: "Ground", cat: "Physical", power: 100, pp: 10, acc: 100, effect: "Power is doubled if opponent is underground from using Dig.", wiki: "http://www.serebii.net/attackdex-sm/earthquake.shtml"},
 {id: "fissure", name: "Fissure", type: "Ground", cat: "Physical", pp: 5, effect: "One-Hit-KO, if it hits.", wiki: "http://www.serebii.net/attackdex-sm/fissure.shtml"},
 {id: "dig", name: "Dig", type: "Ground", cat: "Physical", power: 80, pp: 10, acc: 100, effect: "Digs underground on first turn, attacks on second. Can also escape from caves.", wiki: "http://www.serebii.net/attackdex-sm/dig.shtml"},
 {id: "toxic", name: "Toxic", type: "Poison", cat: "Status", pp: 10, acc: 90, effect: "Badly poisons opponent.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/toxic.shtml"},
 {id: "confusion", name: "Confusion", type: "Psychic", cat: "Special", power: 50, pp: 25, acc: 100, effect: "May confuse opponent.", wiki: "http://www.serebii.net/attackdex-sm/confusion.shtml"},
 {id: "psychic", name: "Psychic", type: "Psychic", cat: "Special", power: 90, pp: 10, acc: 100, effect: "May lower opponent's Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/psychic.shtml"},
 {id: "hypnosis", name: "Hypnosis", type: "Psychic", cat: "Status", pp: 20, acc: 60, effect: "Puts opponent to sleep.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/hypnosis.shtml"},
 {id: "meditate", name: "Meditate", type: "Psychic", cat: "Status", pp: 40, effect: "Raises user's Attack.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/meditate.shtml"},
 {id: "agility", name: "Agility", type: "Psychic", cat: "Status", pp: 30, effect: "Sharply raises user's Speed.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/agility.shtml"},
 {id: "quick attack", name: "Quick Attack", type: "Normal", cat: "Physical", power: 40, pp: 30, acc: 100, effect: "User attacks first.", wiki: "http://www.serebii.net/attackdex-sm/quickattack.shtml"},
 {id: "rage", name: "Rage", type: "Normal", cat: "Physical", power: 20, pp: 20, acc: 100, effect: "Raises user's Attack when hit.", wiki: "http://www.serebii.net/attackdex-sm/rage.shtml"},
 {id: "teleport", name: "Teleport", type: "Psychic", cat: "Status", pp: 20, effect: "Allows user to flee wild battles; also warps player to last PokéCenter.", zeffect: "Restores user's HP 100%", wiki: "http://www.serebii.net/attackdex-sm/teleport.shtml"},
 {id: "night shade", name: "Night Shade", type: "Ghost", cat: "Special", pp: 15, acc: 100, effect: "Inflicts damage equal to user's level.", wiki: "http://www.serebii.net/attackdex-sm/nightshade.shtml"},
 {id: "mimic", name: "Mimic", type: "Normal", cat: "Status", pp: 10, acc: 100, effect: "Copies the opponent's last move.", zeffect: "Accuracy ↑", wiki: "http://www.serebii.net/attackdex-sm/mimic.shtml"},
 {id: "screech", name: "Screech", type: "Normal", cat: "Status", pp: 40, acc: 85, effect: "Sharply lowers opponent's Defense.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/screech.shtml"},
 {id: "double team", name: "Double Team", type: "Normal", cat: "Status", pp: 15, effect: "Raises user's Evasiveness.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/doubleteam.shtml"},
 {id: "recover", name: "Recover", type: "Normal", cat: "Status", pp: 10, effect: "User recovers half its max HP.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/recover.shtml"},
 {id: "harden", name: "Harden", type: "Normal", cat: "Status", pp: 30, effect: "Raises user's Defense.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/harden.shtml"},
 {id: "minimize", name: "Minimize", type: "Normal", cat: "Status", pp: 10, effect: "Sharply raises user's Evasiveness.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/minimize.shtml"},
 {id: "smokescreen", name: "Smokescreen", type: "Normal", cat: "Status", pp: 20, acc: 100, effect: "Lowers opponent's Accuracy.", zeffect: "Evasiveness ↑", wiki: "http://www.serebii.net/attackdex-sm/smokescreen.shtml"},
 {id: "confuse ray", name: "Confuse Ray", type: "Ghost", cat: "Status", pp: 10, acc: 100, effect: "Confuses opponent.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/confuseray.shtml"},
 {id: "withdraw", name: "Withdraw", type: "Water", cat: "Status", pp: 40, effect: "Raises user's Defense.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/withdraw.shtml"},
 {id: "defense curl", name: "Defense Curl", type: "Normal", cat: "Status", pp: 40, effect: "Raises user's Defense.", zeffect: "Accuracy ↑", wiki: "http://www.serebii.net/attackdex-sm/defensecurl.shtml"},
 {id: "barrier", name: "Barrier", type: "Psychic", cat: "Status", pp: 20, effect: "Sharply raises user's Defense.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/barrier.shtml"},
 {id: "light screen", name: "Light Screen", type: "Psychic", cat: "Status", pp: 30, effect: "Halves damage from Special attacks for 5 turns.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/lightscreen.shtml"},
 {id: "haze", name: "Haze", type: "Ice", cat: "Status", pp: 30, effect: "Resets all stat changes.", zeffect: "Restores user's HP 100%", wiki: "http://www.serebii.net/attackdex-sm/haze.shtml"},
 {id: "reflect", name: "Reflect", type: "Psychic", cat: "Status", pp: 20, effect: "Halves damage from Physical attacks for 5 turns.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/reflect.shtml"},
 {id: "focus energy", name: "Focus Energy", type: "Normal", cat: "Status", pp: 30, effect: "Increases critical hit ratio.", zeffect: "Accuracy ↑", wiki: "http://www.serebii.net/attackdex-sm/focusenergy.shtml"},
 {id: "bide", name: "Bide", type: "Normal", cat: "Physical", pp: 10, acc: 100, effect: "User takes damage for two turns then strikes back double.", wiki: "http://www.serebii.net/attackdex-sm/bide.shtml"},
 {id: "metronome", name: "Metronome", type: "Normal", cat: "Status", pp: 10, effect: "User performs any move in the game at random.", wiki: "http://www.serebii.net/attackdex-sm/metronome.shtml"},
 {id: "mirror move", name: "Mirror Move", type: "Flying", cat: "Status", pp: 20, effect: "User performs the opponent's last move.", zeffect: "Attack ↑↑", wiki: "http://www.serebii.net/attackdex-sm/mirrormove.shtml"},
 {id: "self-destruct", name: "Self-destruct", type: "Normal", cat: "Physical", power: 200, pp: 5, acc: 100, effect: "User faints.", wiki: "http://www.serebii.net/attackdex-sm/self-destruct.shtml"},
 {id: "egg bomb", name: "Egg Bomb", type: "Normal", cat: "Physical", power: 100, pp: 10, acc: 75, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/eggbomb.shtml"},
 {id: "lick", name: "Lick", type: "Ghost", cat: "Physical", power: 30, pp: 30, acc: 100, effect: "May paralyze opponent.", wiki: "http://www.serebii.net/attackdex-sm/lick.shtml"},
 {id: "smog", name: "Smog", type: "Poison", cat: "Special", power: 30, pp: 20, acc: 70, effect: "May poison opponent.", wiki: "http://www.serebii.net/attackdex-sm/smog.shtml"},
 {id: "sludge", name: "Sludge", type: "Poison", cat: "Special", power: 65, pp: 20, acc: 100, effect: "May poison opponent.", wiki: "http://www.serebii.net/attackdex-sm/sludge.shtml"},
 {id: "bone club", name: "Bone Club", type: "Ground", cat: "Physical", power: 65, pp: 20, acc: 85, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/boneclub.shtml"},
 {id: "fire blast", name: "Fire Blast", type: "Fire", cat: "Special", power: 110, pp: 5, acc: 85, effect: "May burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/fireblast.shtml"},
 {id: "waterfall", name: "Waterfall", type: "Water", cat: "Physical", power: 80, pp: 15, acc: 100, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/waterfall.shtml"},
 {id: "clamp", name: "Clamp", type: "Water", cat: "Physical", power: 35, pp: 15, acc: 85, effect: "Traps opponent, damaging them for 4-5 turns.", wiki: "http://www.serebii.net/attackdex-sm/clamp.shtml"},
 {id: "swift", name: "Swift", type: "Normal", cat: "Special", power: 60, pp: 20, effect: "Ignores Accuracy and Evasiveness.", wiki: "http://www.serebii.net/attackdex-sm/swift.shtml"},
 {id: "skull bash", name: "Skull Bash", type: "Normal", cat: "Physical", power: 130, pp: 10, acc: 100, effect: "Raises Defense on first turn, attacks on second.", wiki: "http://www.serebii.net/attackdex-sm/skullbash.shtml"},
 {id: "spike cannon", name: "Spike Cannon", type: "Normal", cat: "Physical", power: 20, pp: 15, acc: 100, effect: "Hits 2-5 times in one turn.", wiki: "http://www.serebii.net/attackdex-sm/spikecannon.shtml"},
 {id: "constrict", name: "Constrict", type: "Normal", cat: "Physical", power: 10, pp: 35, acc: 100, effect: "May lower opponent's Speed by one stage.", wiki: "http://www.serebii.net/attackdex-sm/constrict.shtml"},
 {id: "amnesia", name: "Amnesia", type: "Psychic", cat: "Status", pp: 20, effect: "Sharply raises user's Special Defense.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/amnesia.shtml"},
 {id: "kinesis", name: "Kinesis", type: "Psychic", cat: "Status", pp: 15, acc: 80, effect: "Lowers opponent's Accuracy.", zeffect: "Evasiveness ↑", wiki: "http://www.serebii.net/attackdex-sm/kinesis.shtml"},
 {id: "soft-boiled", name: "Soft-boiled", type: "Normal", cat: "Status", pp: 10, effect: "User recovers half its max HP.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/soft-boiled.shtml"},
 {id: "high jump kick", name: "High Jump Kick", type: "Fighting", cat: "Physical", power: 130, pp: 10, acc: 90, effect: "If it misses, the user loses half their HP.", wiki: "http://www.serebii.net/attackdex-sm/highjumpkick.shtml"},
 {id: "glare", name: "Glare", type: "Normal", cat: "Status", pp: 30, acc: 100, effect: "Paralyzes opponent.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/glare.shtml"},
 {id: "dream eater", name: "Dream Eater", type: "Psychic", cat: "Special", power: 100, pp: 15, acc: 100, effect: "User recovers half the HP inflicted on a sleeping opponent.", wiki: "http://www.serebii.net/attackdex-sm/dreameater.shtml"},
 {id: "poison gas", name: "Poison Gas", type: "Poison", cat: "Status", pp: 40, acc: 90, effect: "Poisons opponent.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/poisongas.shtml"},
 {id: "barrage", name: "Barrage", type: "Normal", cat: "Physical", power: 15, pp: 20, acc: 85, effect: "Hits 2-5 times in one turn.", wiki: "http://www.serebii.net/attackdex-sm/barrage.shtml"},
 {id: "leech life", name: "Leech Life", type: "Bug", cat: "Physical", power: 80, pp: 10, acc: 100, effect: "User recovers half the HP inflicted on opponent.", wiki: "http://www.serebii.net/attackdex-sm/leechlife.shtml"},
 {id: "lovely kiss", name: "Lovely Kiss", type: "Normal", cat: "Status", pp: 10, acc: 75, effect: "Puts opponent to sleep.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/lovelykiss.shtml"},
 {id: "sky attack", name: "Sky Attack", type: "Flying", cat: "Physical", power: 140, pp: 5, acc: 90, effect: "Charges on first turn, attacks on second. May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/skyattack.shtml"},
 {id: "transform", name: "Transform", type: "Normal", cat: "Status", pp: 10, effect: "User takes on the form and attacks of the opponent.", zeffect: "Restores user's HP 100%", wiki: "http://www.serebii.net/attackdex-sm/transform.shtml"},
 {id: "bubble", name: "Bubble", type: "Water", cat: "Special", power: 40, pp: 30, acc: 100, effect: "May lower opponent's Speed.", wiki: "http://www.serebii.net/attackdex-sm/bubble.shtml"},
 {id: "dizzy punch", name: "Dizzy Punch", type: "Normal", cat: "Physical", power: 70, pp: 10, acc: 100, effect: "May confuse opponent.", wiki: "http://www.serebii.net/attackdex-sm/dizzypunch.shtml"},
 {id: "spore", name: "Spore", type: "Grass", cat: "Status", pp: 15, acc: 100, effect: "Puts opponent to sleep.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/spore.shtml"},
 {id: "flash", name: "Flash", type: "Normal", cat: "Status", pp: 20, acc: 100, effect: "Lowers opponent's Accuracy.", zeffect: "Evasiveness ↑", wiki: "http://www.serebii.net/attackdex-sm/flash.shtml"},
 {id: "psywave", name: "Psywave", type: "Psychic", cat: "Special", pp: 15, acc: 100, effect: "Inflicts damage 50-150% of user's level.", wiki: "http://www.serebii.net/attackdex-sm/psywave.shtml"},
 {id: "splash", name: "Splash", type: "Normal", cat: "Status", pp: 40, effect: "Doesn't do ANYTHING.", zeffect: "Attack ↑↑↑", wiki: "http://www.serebii.net/attackdex-sm/splash.shtml"},
 {id: "acid armor", name: "Acid Armor", type: "Poison", cat: "Status", pp: 20, effect: "Sharply raises user's Defense.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/acidarmor.shtml"},
 {id: "crabhammer", name: "Crabhammer", type: "Water", cat: "Physical", power: 100, pp: 10, acc: 90, effect: "High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/crabhammer.shtml"},
 {id: "explosion", name: "Explosion", type: "Normal", cat: "Physical", power: 250, pp: 5, acc: 100, effect: "User faints.", wiki: "http://www.serebii.net/attackdex-sm/explosion.shtml"},
 {id: "fury swipes", name: "Fury Swipes", type: "Normal", cat: "Physical", power: 18, pp: 15, acc: 80, effect: "Hits 2-5 times in one turn.", wiki: "http://www.serebii.net/attackdex-sm/furyswipes.shtml"},
 {id: "bonemerang", name: "Bonemerang", type: "Ground", cat: "Physical", power: 50, pp: 10, acc: 90, effect: "Hits twice in one turn.", wiki: "http://www.serebii.net/attackdex-sm/bonemerang.shtml"},
 {id: "rest", name: "Rest", type: "Psychic", cat: "Status", pp: 10, effect: "User sleeps for 2 turns, but user is fully healed.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/rest.shtml"},
 {id: "rock slide", name: "Rock Slide", type: "Rock", cat: "Physical", power: 75, pp: 10, acc: 90, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/rockslide.shtml"},
 {id: "hyper fang", name: "Hyper Fang", type: "Normal", cat: "Physical", power: 80, pp: 15, acc: 90, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/hyperfang.shtml"},
 {id: "sharpen", name: "Sharpen", type: "Normal", cat: "Status", pp: 30, effect: "Raises user's Attack.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/sharpen.shtml"},
 {id: "conversion", name: "Conversion", type: "Normal", cat: "Status", pp: 30, effect: "Changes user's type to that of its first move.", zeffect: "All stats ↑", wiki: "http://www.serebii.net/attackdex-sm/conversion.shtml"},
 {id: "tri attack", name: "Tri Attack", type: "Normal", cat: "Special", power: 80, pp: 10, acc: 100, effect: "May paralyze, burn or freeze opponent.", wiki: "http://www.serebii.net/attackdex-sm/triattack.shtml"},
 {id: "super fang", name: "Super Fang", type: "Normal", cat: "Physical", pp: 10, acc: 90, effect: "Always takes off half of the opponent's HP.", wiki: "http://www.serebii.net/attackdex-sm/superfang.shtml"},
 {id: "slash", name: "Slash", type: "Normal", cat: "Physical", power: 70, pp: 20, acc: 100, effect: "High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/slash.shtml"},
 {id: "substitute", name: "Substitute", type: "Normal", cat: "Status", pp: 10, effect: "Uses HP to creates a decoy that takes hits.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/substitute.shtml"},
 {id: "struggle", name: "Struggle", type: "Normal", cat: "Physical", power: 50, pp: 1, effect: "Only usable when all PP are gone. Hurts the user.", wiki: "http://www.serebii.net/attackdex-sm/struggle.shtml"},
 {id: "sketch", name: "Sketch", type: "Normal", cat: "Status", pp: 1, effect: "Permanently copies the opponent's last move.", zeffect: "All stats ↑", wiki: "http://www.serebii.net/attackdex-sm/sketch.shtml"},
 {id: "triple kick", name: "Triple Kick", type: "Fighting", cat: "Physical", power: 10, pp: 10, acc: 90, effect: "Hits thrice in one turn at increasing power.", wiki: "http://www.serebii.net/attackdex-sm/triplekick.shtml"},
 {id: "thief", name: "Thief", type: "Dark", cat: "Physical", power: 60, pp: 25, acc: 100, effect: "Also steals opponent's held item.", wiki: "http://www.serebii.net/attackdex-sm/thief.shtml"},
 {id: "spider web", name: "Spider Web", type: "Bug", cat: "Status", pp: 10, acc: 100, effect: "Opponent cannot escape/switch.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/spiderweb.shtml"},
 {id: "mind reader", name: "Mind Reader", type: "Normal", cat: "Status", pp: 5, acc: 100, effect: "User's next attack is guaranteed to hit.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/mindreader.shtml"},
 {id: "nightmare", name: "Nightmare", type: "Ghost", cat: "Status", pp: 15, acc: 100, effect: "The sleeping opponent loses 25% of its max HP each turn.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/nightmare.shtml"},
 {id: "flame wheel", name: "Flame Wheel", type: "Fire", cat: "Physical", power: 60, pp: 25, acc: 100, effect: "May burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/flamewheel.shtml"},
 {id: "snore", name: "Snore", type: "Normal", cat: "Special", power: 50, pp: 15, acc: 100, effect: "Can only be used if asleep. May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/snore.shtml"},
 {id: "curse", name: "Curse", type: "Ghost", cat: "Status", pp: 10, effect: "Ghosts lose 50% of max HP and curse the opponent; Non-Ghosts raise Attack, Defense and lower Speed.", zeffect: "Restores user's HP 100% if user is Ghost-type, Attack ↑ otherwise", wiki: "http://www.serebii.net/attackdex-sm/curse.shtml"},
 {id: "flail", name: "Flail", type: "Normal", cat: "Physical", pp: 15, acc: 100, effect: "The lower the user's HP, the higher the power.", wiki: "http://www.serebii.net/attackdex-sm/flail.shtml"},
 {id: "conversion 2", name: "Conversion 2", type: "Normal", cat: "Status", pp: 30, acc: 100, effect: "User changes type to become resistant to opponent's last move.", zeffect: "Restores user's HP 100%", wiki: "http://www.serebii.net/attackdex-sm/conversion2.shtml"},
 {id: "aeroblast", name: "Aeroblast", type: "Flying", cat: "Special", power: 100, pp: 5, acc: 95, effect: "High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/aeroblast.shtml"},
 {id: "cotton spore", name: "Cotton Spore", type: "Grass", cat: "Status", pp: 40, acc: 100, effect: "Sharply lowers opponent's Speed.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/cottonspore.shtml"},
 {id: "reversal", name: "Reversal", type: "Fighting", cat: "Physical", pp: 15, acc: 100, effect: "The lower the user's HP, the higher the power.", wiki: "http://www.serebii.net/attackdex-sm/reversal.shtml"},
 {id: "spite", name: "Spite", type: "Ghost", cat: "Status", pp: 10, acc: 100, effect: "The opponent's last move loses 2-5 PP.", zeffect: "Restores user's HP 100%", wiki: "http://www.serebii.net/attackdex-sm/spite.shtml"},
 {id: "powder snow", name: "Powder Snow", type: "Ice", cat: "Special", power: 40, pp: 25, acc: 100, effect: "May freeze opponent.", wiki: "http://www.serebii.net/attackdex-sm/powdersnow.shtml"},
 {id: "protect", name: "Protect", type: "Normal", cat: "Status", pp: 10, effect: "User is not affected by opponent's move.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/protect.shtml"},
 {id: "mach punch", name: "Mach Punch", type: "Fighting", cat: "Physical", power: 40, pp: 30, acc: 100, effect: "User attacks first.", wiki: "http://www.serebii.net/attackdex-sm/machpunch.shtml"},
 {id: "scary face", name: "Scary Face", type: "Normal", cat: "Status", pp: 10, acc: 100, effect: "Sharply lowers opponent's Speed.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/scaryface.shtml"},
 {id: "feint attack", name: "Feint Attack", type: "Dark", cat: "Physical", power: 60, pp: 20, effect: "Ignores Accuracy and Evasiveness.", wiki: "http://www.serebii.net/attackdex-sm/feintattack.shtml"},
 {id: "sweet kiss", name: "Sweet Kiss", type: "Fairy", cat: "Status", pp: 10, acc: 75, effect: "Confuses opponent.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/sweetkiss.shtml"},
 {id: "belly drum", name: "Belly Drum", type: "Normal", cat: "Status", pp: 10, effect: "User loses 50% of its max HP, but Attack raises to maximum.", zeffect: "Restores user's HP 100%", wiki: "http://www.serebii.net/attackdex-sm/bellydrum.shtml"},
 {id: "sludge bomb", name: "Sludge Bomb", type: "Poison", cat: "Special", power: 90, pp: 10, acc: 100, effect: "May poison opponent.", wiki: "http://www.serebii.net/attackdex-sm/sludgebomb.shtml"},
 {id: "mud-slap", name: "Mud-slap", type: "Ground", cat: "Special", power: 20, pp: 10, acc: 100, effect: "Lowers opponent's Accuracy.", wiki: "http://www.serebii.net/attackdex-sm/mud-slap.shtml"},
 {id: "octazooka", name: "Octazooka", type: "Water", cat: "Special", power: 65, pp: 10, acc: 85, effect: "May lower opponent's Accuracy.", wiki: "http://www.serebii.net/attackdex-sm/octazooka.shtml"},
 {id: "spikes", name: "Spikes", type: "Ground", cat: "Status", pp: 20, effect: "Hurts opponents when they switch into battle.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/spikes.shtml"},
 {id: "zap cannon", name: "Zap Cannon", type: "Electric", cat: "Special", power: 120, pp: 5, acc: 50, effect: "Paralyzes opponent.", wiki: "http://www.serebii.net/attackdex-sm/zapcannon.shtml"},
 {id: "foresight", name: "Foresight", type: "Normal", cat: "Status", pp: 40, acc: 100, effect: "Resets opponent's Evasiveness, Normal-type and Fighting-type attacks can now hit Ghosts, and Ghost-type attacks hit Normal.", zeffect: "Boosts critical-hit ratio", wiki: "http://www.serebii.net/attackdex-sm/foresight.shtml"},
 {id: "destiny bond", name: "Destiny Bond", type: "Ghost", cat: "Status", pp: 5, effect: "If the user faints, the opponent also faints.", zeffect: "Becomes center of attention", wiki: "http://www.serebii.net/attackdex-sm/destinybond.shtml"},
 {id: "perish song", name: "Perish Song", type: "Normal", cat: "Status", pp: 5, effect: "Any Pokémon in play when this attack is used faints in 3 turns.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/perishsong.shtml"},
 {id: "icy wind", name: "Icy Wind", type: "Ice", cat: "Special", power: 55, pp: 15, acc: 95, effect: "Lowers opponent's Speed.", wiki: "http://www.serebii.net/attackdex-sm/icywind.shtml"},
 {id: "detect", name: "Detect", type: "Fighting", cat: "Status", pp: 5, effect: "Opponent's attack doesn't affect you, but may fail if used often.", zeffect: "Evasiveness ↑", wiki: "http://www.serebii.net/attackdex-sm/detect.shtml"},
 {id: "bone rush", name: "Bone Rush", type: "Ground", cat: "Physical", power: 25, pp: 10, acc: 90, effect: "Hits 2-5 times in one turn.", wiki: "http://www.serebii.net/attackdex-sm/bonerush.shtml"},
 {id: "lock-on", name: "Lock-on", type: "Normal", cat: "Status", pp: 5, acc: 100, effect: "User's next attack is guaranteed to hit.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/lock-on.shtml"},
 {id: "outrage", name: "Outrage", type: "Dragon", cat: "Physical", power: 120, pp: 10, acc: 100, effect: "User attacks for 2-3 turns but then becomes confused.", wiki: "http://www.serebii.net/attackdex-sm/outrage.shtml"},
 {id: "sandstorm", name: "Sandstorm", type: "Rock", cat: "Status", pp: 10, effect: "Creates a sandstorm for 5 turns.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/sandstorm.shtml"},
 {id: "giga drain", name: "Giga Drain", type: "Grass", cat: "Special", power: 75, pp: 10, acc: 100, effect: "User recovers half the HP inflicted on opponent.", wiki: "http://www.serebii.net/attackdex-sm/gigadrain.shtml"},
 {id: "endure", name: "Endure", type: "Normal", cat: "Status", pp: 10, effect: "Always left with at least 1 HP, but may fail if used consecutively.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/endure.shtml"},
 {id: "charm", name: "Charm", type: "Fairy", cat: "Status", pp: 20, acc: 100, effect: "Sharply lowers opponent's Attack.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/charm.shtml"},
 {id: "rollout", name: "Rollout", type: "Rock", cat: "Physical", power: 30, pp: 20, acc: 90, effect: "Doubles in power each turn for 5 turns.", wiki: "http://www.serebii.net/attackdex-sm/rollout.shtml"},
 {id: "false swipe", name: "False Swipe", type: "Normal", cat: "Physical", power: 40, pp: 40, acc: 100, effect: "Always leaves opponent with at least 1 HP.", wiki: "http://www.serebii.net/attackdex-sm/falseswipe.shtml"},
 {id: "swagger", name: "Swagger", type: "Normal", cat: "Status", pp: 15, acc: 90, effect: "Opponent becomes confused, but its Attack is raised two stages.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/swagger.shtml"},
 {id: "milk drink", name: "Milk Drink", type: "Normal", cat: "Status", pp: 10, effect: "User recovers half its max HP.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/milkdrink.shtml"},
 {id: "spark", name: "Spark", type: "Electric", cat: "Physical", power: 65, pp: 20, acc: 100, effect: "May paralyze opponent.", wiki: "http://www.serebii.net/attackdex-sm/spark.shtml"},
 {id: "fury cutter", name: "Fury Cutter", type: "Bug", cat: "Physical", power: 40, pp: 20, acc: 95, effect: "Power increases each turn.", wiki: "http://www.serebii.net/attackdex-sm/furycutter.shtml"},
 {id: "steel wing", name: "Steel Wing", type: "Steel", cat: "Physical", power: 70, pp: 25, acc: 90, effect: "May raise user's Defense.", wiki: "http://www.serebii.net/attackdex-sm/steelwing.shtml"},
 {id: "mean look", name: "Mean Look", type: "Normal", cat: "Status", pp: 5, acc: 100, effect: "Opponent cannot flee or switch.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/meanlook.shtml"},
 {id: "attract", name: "Attract", type: "Normal", cat: "Status", pp: 15, acc: 100, effect: "If opponent is the opposite gender, it's less likely to attack.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/attract.shtml"},
 {id: "sleep talk", name: "Sleep Talk", type: "Normal", cat: "Status", pp: 10, effect: "User performs one of its own moves while sleeping.", zeffect: "Boosts critical-hit ratio", wiki: "http://www.serebii.net/attackdex-sm/sleeptalk.shtml"},
 {id: "heal bell", name: "Heal Bell", type: "Normal", cat: "Status", pp: 5, effect: "Heals the user's party's status conditions.", zeffect: "Restores user's HP 100%", wiki: "http://www.serebii.net/attackdex-sm/healbell.shtml"},
 {id: "return", name: "Return", type: "Normal", cat: "Physical", pp: 20, acc: 100, effect: "Power increases with user's Happiness.", wiki: "http://www.serebii.net/attackdex-sm/return.shtml"},
 {id: "present", name: "Present", type: "Normal", cat: "Physical", pp: 15, acc: 90, effect: "Either deals damage or heals.", wiki: "http://www.serebii.net/attackdex-sm/present.shtml"},
 {id: "frustration", name: "Frustration", type: "Normal", cat: "Physical", pp: 20, acc: 100, effect: "Power decreases with higher Happiness.", wiki: "http://www.serebii.net/attackdex-sm/frustration.shtml"},
 {id: "safeguard", name: "Safeguard", type: "Normal", cat: "Status", pp: 25, effect: "The user's party is protected from status conditions.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/safeguard.shtml"},
 {id: "pain split", name: "Pain Split", type: "Normal", cat: "Status", pp: 20, acc: 100, effect: "The user's and opponent's HP becomes the average of both.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/painsplit.shtml"},
 {id: "sacred fire", name: "Sacred Fire", type: "Fire", cat: "Physical", power: 100, pp: 5, acc: 95, effect: "May burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/sacredfire.shtml"},
 {id: "magnitude", name: "Magnitude", type: "Ground", cat: "Physical", pp: 30, acc: 100, effect: "Hits with random power.", wiki: "http://www.serebii.net/attackdex-sm/magnitude.shtml"},
 {id: "dynamic punch", name: "Dynamic Punch", type: "Fighting", cat: "Physical", power: 100, pp: 5, acc: 50, effect: "Confuses opponent.", wiki: "http://www.serebii.net/attackdex-sm/dynamicpunch.shtml"},
 {id: "megahorn", name: "Megahorn", type: "Bug", cat: "Physical", power: 120, pp: 10, acc: 85, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/megahorn.shtml"},
 {id: "dragon breath", name: "Dragon Breath", type: "Dragon", cat: "Special", power: 60, pp: 20, acc: 100, effect: "May paralyze opponent.", wiki: "http://www.serebii.net/attackdex-sm/dragonbreath.shtml"},
 {id: "baton pass", name: "Baton Pass", type: "Normal", cat: "Status", pp: 40, effect: "User switches out and gives stat changes to the incoming Pokémon.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/batonpass.shtml"},
 {id: "encore", name: "Encore", type: "Normal", cat: "Status", pp: 5, acc: 100, effect: "Forces opponent to keep using its last move for 3 turns.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/encore.shtml"},
 {id: "pursuit", name: "Pursuit", type: "Dark", cat: "Physical", power: 40, pp: 20, acc: 100, effect: "Double power if the opponent is switching out.", wiki: "http://www.serebii.net/attackdex-sm/pursuit.shtml"},
 {id: "rapid spin", name: "Rapid Spin", type: "Normal", cat: "Physical", power: 20, pp: 40, acc: 100, effect: "Removes effects of trap moves.", wiki: "http://www.serebii.net/attackdex-sm/rapidspin.shtml"},
 {id: "sweet scent", name: "Sweet Scent", type: "Normal", cat: "Status", pp: 20, acc: 100, effect: "Lowers opponent's Evasiveness.", zeffect: "Accuracy ↑", wiki: "http://www.serebii.net/attackdex-sm/sweetscent.shtml"},
 {id: "iron tail", name: "Iron Tail", type: "Steel", cat: "Physical", power: 100, pp: 15, acc: 75, effect: "May lower opponent's Defense.", wiki: "http://www.serebii.net/attackdex-sm/irontail.shtml"},
 {id: "metal claw", name: "Metal Claw", type: "Steel", cat: "Physical", power: 50, pp: 35, acc: 95, effect: "May raise user's Attack.", wiki: "http://www.serebii.net/attackdex-sm/metalclaw.shtml"},
 {id: "vital throw", name: "Vital Throw", type: "Fighting", cat: "Physical", power: 70, pp: 10, effect: "User attacks last, but ignores Accuracy and Evasiveness.", wiki: "http://www.serebii.net/attackdex-sm/vitalthrow.shtml"},
 {id: "morning sun", name: "Morning Sun", type: "Normal", cat: "Status", pp: 5, effect: "User recovers HP. Amount varies with the weather.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/morningsun.shtml"},
 {id: "synthesis", name: "Synthesis", type: "Grass", cat: "Status", pp: 5, effect: "User recovers HP. Amount varies with the weather.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/synthesis.shtml"},
 {id: "moonlight", name: "Moonlight", type: "Fairy", cat: "Status", pp: 5, effect: "User recovers HP. Amount varies with the weather.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/moonlight.shtml"},
 {id: "hidden power", name: "Hidden Power", type: "Normal", cat: "Special", power: 60, pp: 15, acc: 100, effect: "Type and power depends on user's IVs.", wiki: "http://www.serebii.net/attackdex-sm/hiddenpower.shtml"},
 {id: "cross chop", name: "Cross Chop", type: "Fighting", cat: "Physical", power: 100, pp: 5, acc: 80, effect: "High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/crosschop.shtml"},
 {id: "twister", name: "Twister", type: "Dragon", cat: "Special", power: 40, pp: 20, acc: 100, effect: "May cause flinching. Hits Pokémon using Fly/Bounce with double power.", wiki: "http://www.serebii.net/attackdex-sm/twister.shtml"},
 {id: "rain dance", name: "Rain Dance", type: "Water", cat: "Status", pp: 5, effect: "Makes it rain for 5 turns.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/raindance.shtml"},
 {id: "sunny day", name: "Sunny Day", type: "Fire", cat: "Status", pp: 5, effect: "Makes it sunny for 5 turns.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/sunnyday.shtml"},
 {id: "crunch", name: "Crunch", type: "Dark", cat: "Physical", power: 80, pp: 15, acc: 100, effect: "May lower opponent's Defense.", wiki: "http://www.serebii.net/attackdex-sm/crunch.shtml"},
 {id: "mirror coat", name: "Mirror Coat", type: "Psychic", cat: "Special", pp: 20, acc: 100, effect: "When hit by a Special Attack, user strikes back with 2x power.", wiki: "http://www.serebii.net/attackdex-sm/mirrorcoat.shtml"},
 {id: "psych up", name: "Psych Up", type: "Normal", cat: "Status", pp: 10, effect: "Copies the opponent's stat changes.", zeffect: "Restores user's HP 100%", wiki: "http://www.serebii.net/attackdex-sm/psychup.shtml"},
 {id: "extreme speed", name: "Extreme Speed", type: "Normal", cat: "Physical", power: 80, pp: 5, acc: 100, effect: "User attacks first.", wiki: "http://www.serebii.net/attackdex-sm/extremespeed.shtml"},
 {id: "ancient power", name: "Ancient Power", type: "Rock", cat: "Special", power: 60, pp: 5, acc: 100, effect: "May raise all user's stats at once.", wiki: "http://www.serebii.net/attackdex-sm/ancientpower.shtml"},
 {id: "shadow ball", name: "Shadow Ball", type: "Ghost", cat: "Special", power: 80, pp: 15, acc: 100, effect: "May lower opponent's Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/shadowball.shtml"},
 {id: "future sight", name: "Future Sight", type: "Psychic", cat: "Special", power: 120, pp: 10, acc: 100, effect: "Damage occurs 2 turns later.", wiki: "http://www.serebii.net/attackdex-sm/futuresight.shtml"},
 {id: "rock smash", name: "Rock Smash", type: "Fighting", cat: "Physical", power: 40, pp: 15, acc: 100, effect: "May lower opponent's Defense.", wiki: "http://www.serebii.net/attackdex-sm/rocksmash.shtml"},
 {id: "whirlpool", name: "Whirlpool", type: "Water", cat: "Special", power: 35, pp: 15, acc: 85, effect: "Traps opponent, damaging them for 4-5 turns.", wiki: "http://www.serebii.net/attackdex-sm/whirlpool.shtml"},
 {id: "beat up", name: "Beat Up", type: "Dark", cat: "Physical", pp: 10, acc: 100, effect: "Each Pokémon in your party attacks.", wiki: "http://www.serebii.net/attackdex-sm/beatup.shtml"},
 {id: "fake out", name: "Fake Out", type: "Normal", cat: "Physical", power: 40, pp: 10, acc: 100, effect: "User attacks first, foe flinches. Only usable on first turn.", wiki: "http://www.serebii.net/attackdex-sm/fakeout.shtml"},
 {id: "uproar", name: "Uproar", type: "Normal", cat: "Special", power: 90, pp: 10, acc: 100, effect: "User attacks for 3 turns and prevents sleep.", wiki: "http://www.serebii.net/attackdex-sm/uproar.shtml"},
 {id: "stockpile", name: "Stockpile", type: "Normal", cat: "Status", pp: 20, effect: "Stores energy for use with Spit Up and Swallow.", zeffect: "Restores user's HP 100%", wiki: "http://www.serebii.net/attackdex-sm/stockpile.shtml"},
 {id: "spit up", name: "Spit Up", type: "Normal", cat: "Special", pp: 10, acc: 100, effect: "Power depends on how many times the user performed Stockpile.", wiki: "http://www.serebii.net/attackdex-sm/spitup.shtml"},
 {id: "swallow", name: "Swallow", type: "Normal", cat: "Status", pp: 10, effect: "The more times the user has performed Stockpile, the more HP is recovered.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/swallow.shtml"},
 {id: "heat wave", name: "Heat Wave", type: "Fire", cat: "Special", power: 95, pp: 10, acc: 90, effect: "May burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/heatwave.shtml"},
 {id: "hail", name: "Hail", type: "Ice", cat: "Status", pp: 10, effect: "Non-Ice types are damaged for 5 turns.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/hail.shtml"},
 {id: "torment", name: "Torment", type: "Dark", cat: "Status", pp: 15, acc: 100, effect: "Opponent cannot use the same move in a row.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/torment.shtml"},
 {id: "flatter", name: "Flatter", type: "Dark", cat: "Status", pp: 15, acc: 100, effect: "Confuses opponent, but raises its Special Attack by two stages.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/flatter.shtml"},
 {id: "will-o-wisp", name: "Will-o-wisp", type: "Fire", cat: "Status", pp: 15, acc: 85, effect: "Burns opponent.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/will-o-wisp.shtml"},
 {id: "memento", name: "Memento", type: "Dark", cat: "Status", pp: 10, acc: 100, effect: "User faints, sharply lowers opponent's Attack and Special Attack.", zeffect: "Restores replacement’s HP 100%", wiki: "http://www.serebii.net/attackdex-sm/memento.shtml"},
 {id: "facade", name: "Facade", type: "Normal", cat: "Physical", power: 70, pp: 20, acc: 100, effect: "Power doubles if user is burned, poisoned, or paralyzed.", wiki: "http://www.serebii.net/attackdex-sm/facade.shtml"},
 {id: "focus punch", name: "Focus Punch", type: "Fighting", cat: "Physical", power: 150, pp: 20, acc: 100, effect: "If the user is hit before attacking, it flinches instead.", wiki: "http://www.serebii.net/attackdex-sm/focuspunch.shtml"},
 {id: "smelling salts", name: "Smelling Salts", type: "Normal", cat: "Physical", power: 70, pp: 10, acc: 100, effect: "Power doubles if opponent is paralyzed, but cures it.", wiki: "http://www.serebii.net/attackdex-sm/smellingsalts.shtml"},
 {id: "follow me", name: "Follow Me", type: "Normal", cat: "Status", pp: 20, acc: 100, effect: "In Double Battle, the user takes all the attacks.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/followme.shtml"},
 {id: "nature power", name: "Nature Power", type: "Normal", cat: "Status", pp: 20, effect: "Uses a certain move based on the current terrain.", wiki: "http://www.serebii.net/attackdex-sm/naturepower.shtml"},
 {id: "charge", name: "Charge", type: "Electric", cat: "Status", pp: 20, effect: "Raises user's Special Defense and next Electric move's power increases.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/charge.shtml"},
 {id: "taunt", name: "Taunt", type: "Dark", cat: "Status", pp: 20, acc: 100, effect: "Opponent can only use moves that attack.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/taunt.shtml"},
 {id: "helping hand", name: "Helping Hand", type: "Normal", cat: "Status", pp: 20, effect: "In Double Battles, boosts the power of the partner's move.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/helpinghand.shtml"},
 {id: "trick", name: "Trick", type: "Psychic", cat: "Status", pp: 10, acc: 100, effect: "Swaps held items with the opponent.", zeffect: "Speed ↑↑", wiki: "http://www.serebii.net/attackdex-sm/trick.shtml"},
 {id: "role play", name: "Role Play", type: "Psychic", cat: "Status", pp: 10, effect: "User copies the opponent's Ability.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/roleplay.shtml"},
 {id: "wish", name: "Wish", type: "Normal", cat: "Status", pp: 10, effect: "The user recovers HP in the following turn.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/wish.shtml"},
 {id: "assist", name: "Assist", type: "Normal", cat: "Status", pp: 20, effect: "In a Double Battle, user randomly attacks with a partner's move.", wiki: "http://www.serebii.net/attackdex-sm/assist.shtml"},
 {id: "ingrain", name: "Ingrain", type: "Grass", cat: "Status", pp: 20, effect: "User restores HP each turn. User cannot escape/switch.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/ingrain.shtml"},
 {id: "superpower", name: "Superpower", type: "Fighting", cat: "Physical", power: 120, pp: 5, acc: 100, effect: "Lowers user's Attack and Defense.", wiki: "http://www.serebii.net/attackdex-sm/superpower.shtml"},
 {id: "magic coat", name: "Magic Coat", type: "Psychic", cat: "Status", pp: 15, effect: "Reflects moves that cause status conditions back to the attacker.", zeffect: "Special Defense ↑↑", wiki: "http://www.serebii.net/attackdex-sm/magiccoat.shtml"},
 {id: "recycle", name: "Recycle", type: "Normal", cat: "Status", pp: 10, acc: 100, effect: "User's used hold item is restored.", zeffect: "Speed ↑↑", wiki: "http://www.serebii.net/attackdex-sm/recycle.shtml"},
 {id: "revenge", name: "Revenge", type: "Fighting", cat: "Physical", power: 60, pp: 10, acc: 100, effect: "Power increases if user was hit first.", wiki: "http://www.serebii.net/attackdex-sm/revenge.shtml"},
 {id: "brick break", name: "Brick Break", type: "Fighting", cat: "Physical", power: 75, pp: 15, acc: 100, effect: "Breaks through Reflect and Light Screen barriers.", wiki: "http://www.serebii.net/attackdex-sm/brickbreak.shtml"},
 {id: "yawn", name: "Yawn", type: "Normal", cat: "Status", pp: 10, acc: 100, effect: "Puts opponent to sleep in the next turn.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/yawn.shtml"},
 {id: "knock off", name: "Knock Off", type: "Dark", cat: "Physical", power: 65, pp: 20, acc: 100, effect: "Removes opponent's held item for the rest of the battle.", wiki: "http://www.serebii.net/attackdex-sm/knockoff.shtml"},
 {id: "endeavor", name: "Endeavor", type: "Normal", cat: "Physical", pp: 5, acc: 100, effect: "Reduces opponent's HP to same as user's.", wiki: "http://www.serebii.net/attackdex-sm/endeavor.shtml"},
 {id: "eruption", name: "Eruption", type: "Fire", cat: "Special", power: 150, pp: 5, acc: 100, effect: "Stronger when the user's HP is higher.", wiki: "http://www.serebii.net/attackdex-sm/eruption.shtml"},
 {id: "skill swap", name: "Skill Swap", type: "Psychic", cat: "Status", pp: 10, acc: 100, effect: "The user swaps Abilities with the opponent.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/skillswap.shtml"},
 {id: "imprison", name: "Imprison", type: "Psychic", cat: "Status", pp: 10, acc: 100, effect: "Opponent is unable to use moves that the user also knows.", zeffect: "Special Defense ↑↑", wiki: "http://www.serebii.net/attackdex-sm/imprison.shtml"},
 {id: "refresh", name: "Refresh", type: "Normal", cat: "Status", pp: 20, acc: 100, effect: "Cures paralysis, poison, and burns.", zeffect: "Restores user's HP 100%", wiki: "http://www.serebii.net/attackdex-sm/refresh.shtml"},
 {id: "grudge", name: "Grudge", type: "Ghost", cat: "Status", pp: 5, acc: 100, effect: "If the users faints after using this move, the PP for the opponent's last move is depleted.", zeffect: "Becomes center of attention", wiki: "http://www.serebii.net/attackdex-sm/grudge.shtml"},
 {id: "snatch", name: "Snatch", type: "Dark", cat: "Status", pp: 10, acc: 100, effect: "Steals the effects of the opponent's next move.", zeffect: "Speed ↑↑", wiki: "http://www.serebii.net/attackdex-sm/snatch.shtml"},
 {id: "secret power", name: "Secret Power", type: "Normal", cat: "Physical", power: 70, pp: 20, acc: 100, effect: "Effects of the attack vary with the location.", wiki: "http://www.serebii.net/attackdex-sm/secretpower.shtml"},
 {id: "dive", name: "Dive", type: "Water", cat: "Physical", power: 80, pp: 10, acc: 100, effect: "Dives underwater on first turn, attacks on second turn.", wiki: "http://www.serebii.net/attackdex-sm/dive.shtml"},
 {id: "arm thrust", name: "Arm Thrust", type: "Fighting", cat: "Physical", power: 15, pp: 20, acc: 100, effect: "Hits 2-5 times in one turn.", wiki: "http://www.serebii.net/attackdex-sm/armthrust.shtml"},
 {id: "camouflage", name: "Camouflage", type: "Normal", cat: "Status", pp: 20, effect: "Changes user's type according to the location.", zeffect: "Evasiveness ↑", wiki: "http://www.serebii.net/attackdex-sm/camouflage.shtml"},
 {id: "tail glow", name: "Tail Glow", type: "Bug", cat: "Status", pp: 20, effect: "Drastically raises user's Special Attack.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/tailglow.shtml"},
 {id: "luster purge", name: "Luster Purge", type: "Psychic", cat: "Special", power: 70, pp: 5, acc: 100, effect: "May lower opponent's Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/lusterpurge.shtml"},
 {id: "mist ball", name: "Mist Ball", type: "Psychic", cat: "Special", power: 70, pp: 5, acc: 100, effect: "May lower opponent's Special Attack.", wiki: "http://www.serebii.net/attackdex-sm/mistball.shtml"},
 {id: "feather dance", name: "Feather Dance", type: "Flying", cat: "Status", pp: 15, acc: 100, effect: "Sharply lowers opponent's Attack.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/featherdance.shtml"},
 {id: "teeter dance", name: "Teeter Dance", type: "Normal", cat: "Status", pp: 20, acc: 100, effect: "Confuses all Pokémon.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/teeterdance.shtml"},
 {id: "blaze kick", name: "Blaze Kick", type: "Fire", cat: "Physical", power: 85, pp: 10, acc: 90, effect: "High critical hit ratio. May burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/blazekick.shtml"},
 {id: "mud sport", name: "Mud Sport", type: "Ground", cat: "Status", pp: 15, effect: "Weakens the power of Electric-type moves.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/mudsport.shtml"},
 {id: "ice ball", name: "Ice Ball", type: "Ice", cat: "Physical", power: 30, pp: 20, acc: 90, effect: "Doubles in power each turn for 5 turns.", wiki: "http://www.serebii.net/attackdex-sm/iceball.shtml"},
 {id: "needle arm", name: "Needle Arm", type: "Grass", cat: "Physical", power: 60, pp: 15, acc: 100, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/needlearm.shtml"},
 {id: "slack off", name: "Slack Off", type: "Normal", cat: "Status", pp: 10, effect: "User recovers half its max HP.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/slackoff.shtml"},
 {id: "hyper voice", name: "Hyper Voice", type: "Normal", cat: "Special", power: 90, pp: 10, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/hypervoice.shtml"},
 {id: "poison fang", name: "Poison Fang", type: "Poison", cat: "Physical", power: 50, pp: 15, acc: 100, effect: "May badly poison opponent.", wiki: "http://www.serebii.net/attackdex-sm/poisonfang.shtml"},
 {id: "crush claw", name: "Crush Claw", type: "Normal", cat: "Physical", power: 75, pp: 10, acc: 95, effect: "May lower opponent's Defense.", wiki: "http://www.serebii.net/attackdex-sm/crushclaw.shtml"},
 {id: "blast burn", name: "Blast Burn", type: "Fire", cat: "Special", power: 150, pp: 5, acc: 90, effect: "User must recharge next turn.", wiki: "http://www.serebii.net/attackdex-sm/blastburn.shtml"},
 {id: "hydro cannon", name: "Hydro Cannon", type: "Water", cat: "Special", power: 150, pp: 5, acc: 90, effect: "User must recharge next turn.", wiki: "http://www.serebii.net/attackdex-sm/hydrocannon.shtml"},
 {id: "meteor mash", name: "Meteor Mash", type: "Steel", cat: "Physical", power: 90, pp: 10, acc: 90, effect: "May raise user's Attack.", wiki: "http://www.serebii.net/attackdex-sm/meteormash.shtml"},
 {id: "astonish", name: "Astonish", type: "Ghost", cat: "Physical", power: 30, pp: 15, acc: 100, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/astonish.shtml"},
 {id: "weather ball", name: "Weather Ball", type: "Normal", cat: "Special", power: 50, pp: 10, acc: 100, effect: "Move's power and type changes with the weather.", wiki: "http://www.serebii.net/attackdex-sm/weatherball.shtml"},
 {id: "aromatherapy", name: "Aromatherapy", type: "Grass", cat: "Status", pp: 5, effect: "Cures all status problems in your party.", zeffect: "Restores user's HP 100%", wiki: "http://www.serebii.net/attackdex-sm/aromatherapy.shtml"},
 {id: "fake tears", name: "Fake Tears", type: "Dark", cat: "Status", pp: 20, acc: 100, effect: "Sharply lowers opponent's Special Defense.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/faketears.shtml"},
 {id: "air cutter", name: "Air Cutter", type: "Flying", cat: "Special", power: 60, pp: 25, acc: 95, effect: "High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/aircutter.shtml"},
 {id: "overheat", name: "Overheat", type: "Fire", cat: "Special", power: 130, pp: 5, acc: 90, effect: "Sharply lowers user's Special Attack.", wiki: "http://www.serebii.net/attackdex-sm/overheat.shtml"},
 {id: "odor sleuth", name: "Odor Sleuth", type: "Normal", cat: "Status", pp: 40, acc: 100, effect: "Resets opponent's Evasiveness, Normal-type and Fighting-type attacks can now hit Ghosts, and Ghost-type attacks hit Normal.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/odorsleuth.shtml"},
 {id: "rock tomb", name: "Rock Tomb", type: "Rock", cat: "Physical", power: 60, pp: 15, acc: 95, effect: "Lowers opponent's Speed.", wiki: "http://www.serebii.net/attackdex-sm/rocktomb.shtml"},
 {id: "silver wind", name: "Silver Wind", type: "Bug", cat: "Special", power: 60, pp: 5, acc: 100, effect: "May raise all stats of user at once.", wiki: "http://www.serebii.net/attackdex-sm/silverwind.shtml"},
 {id: "metal sound", name: "Metal Sound", type: "Steel", cat: "Status", pp: 40, acc: 85, effect: "Sharply lowers opponent's Special Defense.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/metalsound.shtml"},
 {id: "grass whistle", name: "Grass Whistle", type: "Grass", cat: "Status", pp: 15, acc: 55, effect: "Puts opponent to sleep.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/grasswhistle.shtml"},
 {id: "tickle", name: "Tickle", type: "Normal", cat: "Status", pp: 20, acc: 100, effect: "Lowers opponent's Attack and Defense.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/tickle.shtml"},
 {id: "cosmic power", name: "Cosmic Power", type: "Psychic", cat: "Status", pp: 20, effect: "Raises user's Defense and Special Defense.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/cosmicpower.shtml"},
 {id: "water spout", name: "Water Spout", type: "Water", cat: "Special", power: 150, pp: 5, acc: 100, effect: "The higher the user's HP, the higher the damage caused.", wiki: "http://www.serebii.net/attackdex-sm/waterspout.shtml"},
 {id: "signal beam", name: "Signal Beam", type: "Bug", cat: "Special", power: 75, pp: 15, acc: 100, effect: "May confuse opponent.", wiki: "http://www.serebii.net/attackdex-sm/signalbeam.shtml"},
 {id: "shadow punch", name: "Shadow Punch", type: "Ghost", cat: "Physical", power: 60, pp: 20, effect: "Ignores Accuracy and Evasiveness.", wiki: "http://www.serebii.net/attackdex-sm/shadowpunch.shtml"},
 {id: "extrasensory", name: "Extrasensory", type: "Psychic", cat: "Special", power: 80, pp: 20, acc: 100, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/extrasensory.shtml"},
 {id: "sky uppercut", name: "Sky Uppercut", type: "Fighting", cat: "Physical", power: 85, pp: 15, acc: 90, effect: "Hits the opponent, even during Fly.", wiki: "http://www.serebii.net/attackdex-sm/skyuppercut.shtml"},
 {id: "sand tomb", name: "Sand Tomb", type: "Ground", cat: "Physical", power: 35, pp: 15, acc: 85, effect: "Traps opponent, damaging them for 4-5 turns.", wiki: "http://www.serebii.net/attackdex-sm/sandtomb.shtml"},
 {id: "sheer cold", name: "Sheer Cold", type: "Ice", cat: "Special", pp: 5, effect: "One-Hit-KO, if it hits.", wiki: "http://www.serebii.net/attackdex-sm/sheercold.shtml"},
 {id: "muddy water", name: "Muddy Water", type: "Water", cat: "Special", power: 90, pp: 10, acc: 85, effect: "May lower opponent's Accuracy.", wiki: "http://www.serebii.net/attackdex-sm/muddywater.shtml"},
 {id: "bullet seed", name: "Bullet Seed", type: "Grass", cat: "Physical", power: 25, pp: 30, acc: 100, effect: "Hits 2-5 times in one turn.", wiki: "http://www.serebii.net/attackdex-sm/bulletseed.shtml"},
 {id: "aerial ace", name: "Aerial Ace", type: "Flying", cat: "Physical", power: 60, pp: 20, effect: "Ignores Accuracy and Evasiveness.", wiki: "http://www.serebii.net/attackdex-sm/aerialace.shtml"},
 {id: "icicle spear", name: "Icicle Spear", type: "Ice", cat: "Physical", power: 25, pp: 30, acc: 100, effect: "Hits 2-5 times in one turn.", wiki: "http://www.serebii.net/attackdex-sm/iciclespear.shtml"},
 {id: "iron defense", name: "Iron Defense", type: "Steel", cat: "Status", pp: 15, effect: "Sharply raises user's Defense.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/irondefense.shtml"},
 {id: "block", name: "Block", type: "Normal", cat: "Status", pp: 5, effect: "Opponent cannot flee or switch.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/block.shtml"},
 {id: "howl", name: "Howl", type: "Normal", cat: "Status", pp: 40, effect: "Raises user's Attack.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/howl.shtml"},
 {id: "dragon claw", name: "Dragon Claw", type: "Dragon", cat: "Physical", power: 80, pp: 15, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/dragonclaw.shtml"},
 {id: "frenzy plant", name: "Frenzy Plant", type: "Grass", cat: "Special", power: 150, pp: 5, acc: 90, effect: "User must recharge next turn.", wiki: "http://www.serebii.net/attackdex-sm/frenzyplant.shtml"},
 {id: "bulk up", name: "Bulk Up", type: "Fighting", cat: "Status", pp: 20, effect: "Raises user's Attack and Defense.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/bulkup.shtml"},
 {id: "bounce", name: "Bounce", type: "Flying", cat: "Physical", power: 85, pp: 5, acc: 85, effect: "Springs up on first turn, attacks on second. May paralyze opponent.", wiki: "http://www.serebii.net/attackdex-sm/bounce.shtml"},
 {id: "mud shot", name: "Mud Shot", type: "Ground", cat: "Special", power: 55, pp: 15, acc: 95, effect: "Lowers opponent's Speed.", wiki: "http://www.serebii.net/attackdex-sm/mudshot.shtml"},
 {id: "poison tail", name: "Poison Tail", type: "Poison", cat: "Physical", power: 50, pp: 25, acc: 100, effect: "High critical hit ratio. May poison opponent.", wiki: "http://www.serebii.net/attackdex-sm/poisontail.shtml"},
 {id: "covet", name: "Covet", type: "Normal", cat: "Physical", power: 60, pp: 25, acc: 100, effect: "Opponent's item is stolen by the user.", wiki: "http://www.serebii.net/attackdex-sm/covet.shtml"},
 {id: "volt tackle", name: "Volt Tackle", type: "Electric", cat: "Physical", power: 120, pp: 15, acc: 100, effect: "User receives recoil damage. May paralyze opponent.", wiki: "http://www.serebii.net/attackdex-sm/volttackle.shtml"},
 {id: "magical leaf", name: "Magical Leaf", type: "Grass", cat: "Special", power: 60, pp: 20, effect: "Ignores Accuracy and Evasiveness.", wiki: "http://www.serebii.net/attackdex-sm/magicalleaf.shtml"},
 {id: "water sport", name: "Water Sport", type: "Water", cat: "Status", pp: 15, acc: 100, effect: "Weakens the power of Fire-type moves.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/watersport.shtml"},
 {id: "calm mind", name: "Calm Mind", type: "Psychic", cat: "Status", pp: 20, effect: "Raises user's Special Attack and Special Defense.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/calmmind.shtml"},
 {id: "leaf blade", name: "Leaf Blade", type: "Grass", cat: "Physical", power: 90, pp: 15, acc: 100, effect: "High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/leafblade.shtml"},
 {id: "dragon dance", name: "Dragon Dance", type: "Dragon", cat: "Status", pp: 20, effect: "Raises user's Attack and Speed.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/dragondance.shtml"},
 {id: "rock blast", name: "Rock Blast", type: "Rock", cat: "Physical", power: 25, pp: 10, acc: 90, effect: "Hits 2-5 times in one turn.", wiki: "http://www.serebii.net/attackdex-sm/rockblast.shtml"},
 {id: "shock wave", name: "Shock Wave", type: "Electric", cat: "Special", power: 60, pp: 20, effect: "Ignores Accuracy and Evasiveness.", wiki: "http://www.serebii.net/attackdex-sm/shockwave.shtml"},
 {id: "water pulse", name: "Water Pulse", type: "Water", cat: "Special", power: 60, pp: 20, acc: 100, effect: "May confuse opponent.", wiki: "http://www.serebii.net/attackdex-sm/waterpulse.shtml"},
 {id: "doom desire", name: "Doom Desire", type: "Steel", cat: "Special", power: 140, pp: 5, acc: 100, effect: "Damage occurs 2 turns later.", wiki: "http://www.serebii.net/attackdex-sm/doomdesire.shtml"},
 {id: "psycho boost", name: "Psycho Boost", type: "Psychic", cat: "Special", power: 140, pp: 5, acc: 90, effect: "Sharply lowers user's Special Attack.", wiki: "http://www.serebii.net/attackdex-sm/psychoboost.shtml"},
 {id: "roost", name: "Roost", type: "Flying", cat: "Status", pp: 10, effect: "User recovers half of its max HP and loses the Flying type temporarily.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/roost.shtml"},
 {id: "gravity", name: "Gravity", type: "Psychic", cat: "Status", pp: 5, effect: "Prevents moves like Fly and Bounce and the Ability Levitate for 5 turns.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/gravity.shtml"},
 {id: "miracle eye", name: "Miracle Eye", type: "Psychic", cat: "Status", pp: 40, effect: "Resets opponent's Evasiveness, removes Dark's Psychic immunity.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/miracleeye.shtml"},
 {id: "wake-up slap", name: "Wake-up Slap", type: "Fighting", cat: "Physical", power: 70, pp: 10, acc: 100, effect: "Power doubles if opponent is asleep, but wakes it up.", wiki: "http://www.serebii.net/attackdex-sm/wake-upslap.shtml"},
 {id: "hammer arm", name: "Hammer Arm", type: "Fighting", cat: "Physical", power: 100, pp: 10, acc: 90, effect: "Lowers user's Speed.", wiki: "http://www.serebii.net/attackdex-sm/hammerarm.shtml"},
 {id: "gyro ball", name: "Gyro Ball", type: "Steel", cat: "Physical", pp: 5, acc: 100, effect: "The slower the user, the stronger the attack.", wiki: "http://www.serebii.net/attackdex-sm/gyroball.shtml"},
 {id: "healing wish", name: "Healing Wish", type: "Psychic", cat: "Status", pp: 10, effect: "The user faints and the next Pokémon released is fully healed.", wiki: "http://www.serebii.net/attackdex-sm/healingwish.shtml"},
 {id: "brine", name: "Brine", type: "Water", cat: "Special", power: 65, pp: 10, acc: 100, effect: "Power doubles if opponent's HP is less than 50%.", wiki: "http://www.serebii.net/attackdex-sm/brine.shtml"},
 {id: "natural gift", name: "Natural Gift", type: "Normal", cat: "Physical", pp: 15, acc: 100, effect: "Power and type depend on the user's held berry.", wiki: "http://www.serebii.net/attackdex-sm/naturalgift.shtml"},
 {id: "feint", name: "Feint", type: "Normal", cat: "Physical", power: 30, pp: 10, acc: 100, effect: "Only hits if opponent uses Protect or Detect in the same turn.", wiki: "http://www.serebii.net/attackdex-sm/feint.shtml"},
 {id: "pluck", name: "Pluck", type: "Flying", cat: "Physical", power: 60, pp: 20, acc: 100, effect: "If the opponent is holding a berry, its effect is stolen by user.", wiki: "http://www.serebii.net/attackdex-sm/pluck.shtml"},
 {id: "tailwind", name: "Tailwind", type: "Flying", cat: "Status", pp: 15, effect: "Doubles Speed for 4 turns.", zeffect: "Boosts critical-hit ratio", wiki: "http://www.serebii.net/attackdex-sm/tailwind.shtml"},
 {id: "acupressure", name: "Acupressure", type: "Normal", cat: "Status", pp: 30, effect: "Sharply raises a random stat.", zeffect: "Boosts critical-hit ratio", wiki: "http://www.serebii.net/attackdex-sm/acupressure.shtml"},
 {id: "metal burst", name: "Metal Burst", type: "Steel", cat: "Physical", pp: 10, acc: 100, effect: "Deals damage equal to 1.5x opponent's attack.", wiki: "http://www.serebii.net/attackdex-sm/metalburst.shtml"},
 {id: "u-turn", name: "U-turn", type: "Bug", cat: "Physical", power: 70, pp: 20, acc: 100, effect: "User switches out immediately after attacking.", wiki: "http://www.serebii.net/attackdex-sm/u-turn.shtml"},
 {id: "close combat", name: "Close Combat", type: "Fighting", cat: "Physical", power: 120, pp: 5, acc: 100, effect: "Lowers user's Defense and Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/closecombat.shtml"},
 {id: "payback", name: "Payback", type: "Dark", cat: "Physical", power: 50, pp: 10, acc: 100, effect: "Power doubles if the user was attacked first.", wiki: "http://www.serebii.net/attackdex-sm/payback.shtml"},
 {id: "assurance", name: "Assurance", type: "Dark", cat: "Physical", power: 60, pp: 10, acc: 100, effect: "Power doubles if opponent already took damage in the same turn.", wiki: "http://www.serebii.net/attackdex-sm/assurance.shtml"},
 {id: "embargo", name: "Embargo", type: "Dark", cat: "Status", pp: 15, acc: 100, effect: "Opponent cannot use items.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/embargo.shtml"},
 {id: "fling", name: "Fling", type: "Dark", cat: "Physical", pp: 10, acc: 100, effect: "Power depends on held item.", wiki: "http://www.serebii.net/attackdex-sm/fling.shtml"},
 {id: "psycho shift", name: "Psycho Shift", type: "Psychic", cat: "Status", pp: 10, acc: 100, effect: "Gives the opponent the user's status condition, if it hits.", zeffect: "Special Attack ↑↑", wiki: "http://www.serebii.net/attackdex-sm/psychoshift.shtml"},
 {id: "trump card", name: "Trump Card", type: "Normal", cat: "Special", pp: 5, effect: "The lower the PP, the higher the power.", wiki: "http://www.serebii.net/attackdex-sm/trumpcard.shtml"},
 {id: "heal block", name: "Heal Block", type: "Psychic", cat: "Status", pp: 15, acc: 100, effect: "Prevents the opponent from restoring HP for 5 turns.", zeffect: "Special Attack ↑↑", wiki: "http://www.serebii.net/attackdex-sm/healblock.shtml"},
 {id: "wring out", name: "Wring Out", type: "Normal", cat: "Special", pp: 5, acc: 100, effect: "The higher the opponent's HP, the higher the damage.", wiki: "http://www.serebii.net/attackdex-sm/wringout.shtml"},
 {id: "power trick", name: "Power Trick", type: "Psychic", cat: "Status", pp: 10, effect: "User's own Attack and Defense switch.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/powertrick.shtml"},
 {id: "gastro acid", name: "Gastro Acid", type: "Poison", cat: "Status", pp: 10, acc: 100, effect: "Cancels out the effect of the opponent's Ability.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/gastroacid.shtml"},
 {id: "lucky chant", name: "Lucky Chant", type: "Normal", cat: "Status", pp: 30, effect: "Opponent cannot land critical hits for 5 turns.", zeffect: "Evasiveness ↑", wiki: "http://www.serebii.net/attackdex-sm/luckychant.shtml"},
 {id: "me first", name: "Me First", type: "Normal", cat: "Status", pp: 20, effect: "User copies the opponent's attack with 1.5× power.", zeffect: "Speed ↑↑", wiki: "http://www.serebii.net/attackdex-sm/mefirst.shtml"},
 {id: "copycat", name: "Copycat", type: "Normal", cat: "Status", pp: 20, effect: "Copies opponent's last move.", zeffect: "Accuracy ↑", wiki: "http://www.serebii.net/attackdex-sm/copycat.shtml"},
 {id: "power swap", name: "Power Swap", type: "Psychic", cat: "Status", pp: 10, effect: "User and opponent swap Attack and Special Attack.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/powerswap.shtml"},
 {id: "guard swap", name: "Guard Swap", type: "Psychic", cat: "Status", pp: 10, effect: "User and opponent swap Defense and Special Defense.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/guardswap.shtml"},
 {id: "punishment", name: "Punishment", type: "Dark", cat: "Physical", pp: 5, acc: 100, effect: "Power increases when opponent's stats have been raised.", wiki: "http://www.serebii.net/attackdex-sm/punishment.shtml"},
 {id: "last resort", name: "Last Resort", type: "Normal", cat: "Physical", power: 140, pp: 5, acc: 100, effect: "Can only be used after all other moves are used.", wiki: "http://www.serebii.net/attackdex-sm/lastresort.shtml"},
 {id: "worry seed", name: "Worry Seed", type: "Grass", cat: "Status", pp: 10, acc: 100, effect: "Changes the opponent's Ability to Insomnia.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/worryseed.shtml"},
 {id: "sucker punch", name: "Sucker Punch", type: "Dark", cat: "Physical", power: 80, pp: 5, acc: 100, effect: "User attacks first, but only works if opponent is readying an attack.", wiki: "http://www.serebii.net/attackdex-sm/suckerpunch.shtml"},
 {id: "toxic spikes", name: "Toxic Spikes", type: "Poison", cat: "Status", pp: 20, effect: "Poisons opponents when they switch into battle.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/toxicspikes.shtml"},
 {id: "heart swap", name: "Heart Swap", type: "Psychic", cat: "Status", pp: 10, effect: "Stat changes are swapped with the opponent.", zeffect: "Boosts critical-hit ratio", wiki: "http://www.serebii.net/attackdex-sm/heartswap.shtml"},
 {id: "aqua ring", name: "Aqua Ring", type: "Water", cat: "Status", pp: 20, effect: "Restores a little HP each turn.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/aquaring.shtml"},
 {id: "magnet rise", name: "Magnet Rise", type: "Electric", cat: "Status", pp: 10, effect: "User becomes immune to Ground-type moves for 5 turns.", zeffect: "Evasiveness ↑", wiki: "http://www.serebii.net/attackdex-sm/magnetrise.shtml"},
 {id: "flare blitz", name: "Flare Blitz", type: "Fire", cat: "Physical", power: 120, pp: 15, acc: 100, effect: "User receives recoil damage. May burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/flareblitz.shtml"},
 {id: "force palm", name: "Force Palm", type: "Fighting", cat: "Physical", power: 60, pp: 10, acc: 100, effect: "May paralyze opponent.", wiki: "http://www.serebii.net/attackdex-sm/forcepalm.shtml"},
 {id: "aura sphere", name: "Aura Sphere", type: "Fighting", cat: "Special", power: 80, pp: 20, effect: "Ignores Accuracy and Evasiveness.", wiki: "http://www.serebii.net/attackdex-sm/aurasphere.shtml"},
 {id: "rock polish", name: "Rock Polish", type: "Rock", cat: "Status", pp: 20, effect: "Sharply raises user's Speed.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/rockpolish.shtml"},
 {id: "poison jab", name: "Poison Jab", type: "Poison", cat: "Physical", power: 80, pp: 20, acc: 100, effect: "May poison the opponent.", wiki: "http://www.serebii.net/attackdex-sm/poisonjab.shtml"},
 {id: "dark pulse", name: "Dark Pulse", type: "Dark", cat: "Special", power: 80, pp: 15, acc: 100, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/darkpulse.shtml"},
 {id: "night slash", name: "Night Slash", type: "Dark", cat: "Physical", power: 70, pp: 15, acc: 100, effect: "High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/nightslash.shtml"},
 {id: "aqua tail", name: "Aqua Tail", type: "Water", cat: "Physical", power: 90, pp: 10, acc: 90, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/aquatail.shtml"},
 {id: "seed bomb", name: "Seed Bomb", type: "Grass", cat: "Physical", power: 80, pp: 15, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/seedbomb.shtml"},
 {id: "air slash", name: "Air Slash", type: "Flying", cat: "Special", power: 75, pp: 15, acc: 95, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/airslash.shtml"},
 {id: "x-scissor", name: "X-Scissor", type: "Bug", cat: "Physical", power: 80, pp: 15, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/x-scissor.shtml"},
 {id: "bug buzz", name: "Bug Buzz", type: "Bug", cat: "Special", power: 90, pp: 10, acc: 100, effect: "May lower opponent's Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/bugbuzz.shtml"},
 {id: "dragon pulse", name: "Dragon Pulse", type: "Dragon", cat: "Special", power: 85, pp: 10, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/dragonpulse.shtml"},
 {id: "dragon rush", name: "Dragon Rush", type: "Dragon", cat: "Physical", power: 100, pp: 10, acc: 75, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/dragonrush.shtml"},
 {id: "power gem", name: "Power Gem", type: "Rock", cat: "Special", power: 80, pp: 20, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/powergem.shtml"},
 {id: "drain punch", name: "Drain Punch", type: "Fighting", cat: "Physical", power: 75, pp: 10, acc: 100, effect: "User recovers half the HP inflicted on opponent.", wiki: "http://www.serebii.net/attackdex-sm/drainpunch.shtml"},
 {id: "vacuum wave", name: "Vacuum Wave", type: "Fighting", cat: "Special", power: 40, pp: 30, acc: 100, effect: "User attacks first.", wiki: "http://www.serebii.net/attackdex-sm/vacuumwave.shtml"},
 {id: "focus blast", name: "Focus Blast", type: "Fighting", cat: "Special", power: 120, pp: 5, acc: 70, effect: "May lower opponent's Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/focusblast.shtml"},
 {id: "energy ball", name: "Energy Ball", type: "Grass", cat: "Special", power: 90, pp: 10, acc: 100, effect: "May lower opponent's Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/energyball.shtml"},
 {id: "brave bird", name: "Brave Bird", type: "Flying", cat: "Physical", power: 120, pp: 15, acc: 100, effect: "User receives recoil damage.", wiki: "http://www.serebii.net/attackdex-sm/bravebird.shtml"},
 {id: "earth power", name: "Earth Power", type: "Ground", cat: "Special", power: 90, pp: 10, acc: 100, effect: "May lower opponent's Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/earthpower.shtml"},
 {id: "switcheroo", name: "Switcheroo", type: "Dark", cat: "Status", pp: 10, acc: 100, effect: "Swaps held items with the opponent.", zeffect: "Speed ↑↑", wiki: "http://www.serebii.net/attackdex-sm/switcheroo.shtml"},
 {id: "giga impact", name: "Giga Impact", type: "Normal", cat: "Physical", power: 150, pp: 5, acc: 90, effect: "User must recharge next turn.", wiki: "http://www.serebii.net/attackdex-sm/gigaimpact.shtml"},
 {id: "nasty plot", name: "Nasty Plot", type: "Dark", cat: "Status", pp: 20, effect: "Sharply raises user's Special Attack.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/nastyplot.shtml"},
 {id: "bullet punch", name: "Bullet Punch", type: "Steel", cat: "Physical", power: 40, pp: 30, acc: 100, effect: "User attacks first.", wiki: "http://www.serebii.net/attackdex-sm/bulletpunch.shtml"},
 {id: "avalanche", name: "Avalanche", type: "Ice", cat: "Physical", power: 60, pp: 10, acc: 100, effect: "Power doubles if user took damage first.", wiki: "http://www.serebii.net/attackdex-sm/avalanche.shtml"},
 {id: "ice shard", name: "Ice Shard", type: "Ice", cat: "Physical", power: 40, pp: 30, acc: 100, effect: "User attacks first.", wiki: "http://www.serebii.net/attackdex-sm/iceshard.shtml"},
 {id: "shadow claw", name: "Shadow Claw", type: "Ghost", cat: "Physical", power: 70, pp: 15, acc: 100, effect: "High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/shadowclaw.shtml"},
 {id: "thunder fang", name: "Thunder Fang", type: "Electric", cat: "Physical", power: 65, pp: 15, acc: 95, effect: "May cause flinching and/or paralyze opponent.", wiki: "http://www.serebii.net/attackdex-sm/thunderfang.shtml"},
 {id: "ice fang", name: "Ice Fang", type: "Ice", cat: "Physical", power: 65, pp: 15, acc: 95, effect: "May cause flinching and/or freeze opponent.", wiki: "http://www.serebii.net/attackdex-sm/icefang.shtml"},
 {id: "fire fang", name: "Fire Fang", type: "Fire", cat: "Physical", power: 65, pp: 15, acc: 95, effect: "May cause flinching and/or burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/firefang.shtml"},
 {id: "shadow sneak", name: "Shadow Sneak", type: "Ghost", cat: "Physical", power: 40, pp: 30, acc: 100, effect: "User attacks first.", wiki: "http://www.serebii.net/attackdex-sm/shadowsneak.shtml"},
 {id: "mud bomb", name: "Mud Bomb", type: "Ground", cat: "Special", power: 65, pp: 10, acc: 85, effect: "May lower opponent's Accuracy.", wiki: "http://www.serebii.net/attackdex-sm/mudbomb.shtml"},
 {id: "psycho cut", name: "Psycho Cut", type: "Psychic", cat: "Physical", power: 70, pp: 20, acc: 100, effect: "High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/psychocut.shtml"},
 {id: "zen headbutt", name: "Zen Headbutt", type: "Psychic", cat: "Physical", power: 80, pp: 15, acc: 90, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/zenheadbutt.shtml"},
 {id: "mirror shot", name: "Mirror Shot", type: "Steel", cat: "Special", power: 65, pp: 10, acc: 85, effect: "May lower opponent's Accuracy.", wiki: "http://www.serebii.net/attackdex-sm/mirrorshot.shtml"},
 {id: "flash cannon", name: "Flash Cannon", type: "Steel", cat: "Special", power: 80, pp: 10, acc: 100, effect: "May lower opponent's Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/flashcannon.shtml"},
 {id: "rock climb", name: "Rock Climb", type: "Normal", cat: "Physical", power: 90, pp: 20, acc: 85, effect: "May confuse opponent.", wiki: "http://www.serebii.net/attackdex-sm/rockclimb.shtml"},
 {id: "defog", name: "Defog", type: "Flying", cat: "Status", pp: 15, effect: "Lowers opponent's Evasiveness and clears fog.", zeffect: "Accuracy ↑", wiki: "http://www.serebii.net/attackdex-sm/defog.shtml"},
 {id: "trick room", name: "Trick Room", type: "Psychic", cat: "Status", pp: 5, effect: "Slower Pokémon move first in the turn for 5 turns.", zeffect: "Accuracy ↑", wiki: "http://www.serebii.net/attackdex-sm/trickroom.shtml"},
 {id: "draco meteor", name: "Draco Meteor", type: "Dragon", cat: "Special", power: 130, pp: 5, acc: 90, effect: "Sharply lowers user's Special Attack.", wiki: "http://www.serebii.net/attackdex-sm/dracometeor.shtml"},
 {id: "discharge", name: "Discharge", type: "Electric", cat: "Special", power: 80, pp: 15, acc: 100, effect: "May paralyze opponent.", wiki: "http://www.serebii.net/attackdex-sm/discharge.shtml"},
 {id: "lava plume", name: "Lava Plume", type: "Fire", cat: "Special", power: 80, pp: 15, acc: 100, effect: "May burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/lavaplume.shtml"},
 {id: "leaf storm", name: "Leaf Storm", type: "Grass", cat: "Special", power: 130, pp: 5, acc: 90, effect: "Sharply lowers user's Special Attack.", wiki: "http://www.serebii.net/attackdex-sm/leafstorm.shtml"},
 {id: "power whip", name: "Power Whip", type: "Grass", cat: "Physical", power: 120, pp: 10, acc: 85, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/powerwhip.shtml"},
 {id: "rock wrecker", name: "Rock Wrecker", type: "Rock", cat: "Physical", power: 150, pp: 5, acc: 90, effect: "User must recharge next turn.", wiki: "http://www.serebii.net/attackdex-sm/rockwrecker.shtml"},
 {id: "cross poison", name: "Cross Poison", type: "Poison", cat: "Physical", power: 70, pp: 20, acc: 100, effect: "High critical hit ratio. May poison opponent.", wiki: "http://www.serebii.net/attackdex-sm/crosspoison.shtml"},
 {id: "gunk shot", name: "Gunk Shot", type: "Poison", cat: "Physical", power: 120, pp: 5, acc: 80, effect: "May poison opponent.", wiki: "http://www.serebii.net/attackdex-sm/gunkshot.shtml"},
 {id: "iron head", name: "Iron Head", type: "Steel", cat: "Physical", power: 80, pp: 15, acc: 100, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/ironhead.shtml"},
 {id: "magnet bomb", name: "Magnet Bomb", type: "Steel", cat: "Physical", power: 60, pp: 20, effect: "Ignores Accuracy and Evasiveness.", wiki: "http://www.serebii.net/attackdex-sm/magnetbomb.shtml"},
 {id: "stone edge", name: "Stone Edge", type: "Rock", cat: "Physical", power: 100, pp: 5, acc: 80, effect: "High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/stoneedge.shtml"},
 {id: "captivate", name: "Captivate", type: "Normal", cat: "Status", pp: 20, acc: 100, effect: "Sharply lowers opponent's Special Attack if opposite gender.", zeffect: "Special Defense ↑↑", wiki: "http://www.serebii.net/attackdex-sm/captivate.shtml"},
 {id: "stealth rock", name: "Stealth Rock", type: "Rock", cat: "Status", pp: 20, effect: "Damages opponent switching into battle.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/stealthrock.shtml"},
 {id: "grass knot", name: "Grass Knot", type: "Grass", cat: "Special", pp: 20, acc: 100, effect: "The heavier the opponent, the stronger the attack.", wiki: "http://www.serebii.net/attackdex-sm/grassknot.shtml"},
 {id: "chatter", name: "Chatter", type: "Flying", cat: "Special", power: 65, pp: 20, acc: 100, effect: "Confuses opponent.", wiki: "http://www.serebii.net/attackdex-sm/chatter.shtml"},
 {id: "judgment", name: "Judgment", type: "Normal", cat: "Special", power: 100, pp: 10, acc: 100, effect: "Type depends on the Arceus Plate being held.", wiki: "http://www.serebii.net/attackdex-sm/judgment.shtml"},
 {id: "bug bite", name: "Bug Bite", type: "Bug", cat: "Physical", power: 60, pp: 20, acc: 100, effect: "Receives the effect from the opponent's held berry.", wiki: "http://www.serebii.net/attackdex-sm/bugbite.shtml"},
 {id: "charge beam", name: "Charge Beam", type: "Electric", cat: "Special", power: 50, pp: 10, acc: 90, effect: "May raise user's Special Attack.", wiki: "http://www.serebii.net/attackdex-sm/chargebeam.shtml"},
 {id: "wood hammer", name: "Wood Hammer", type: "Grass", cat: "Physical", power: 120, pp: 15, acc: 100, effect: "User receives recoil damage.", wiki: "http://www.serebii.net/attackdex-sm/woodhammer.shtml"},
 {id: "aqua jet", name: "Aqua Jet", type: "Water", cat: "Physical", power: 40, pp: 20, acc: 100, effect: "User attacks first.", wiki: "http://www.serebii.net/attackdex-sm/aquajet.shtml"},
 {id: "attack order", name: "Attack Order", type: "Bug", cat: "Physical", power: 90, pp: 15, acc: 100, effect: "High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/attackorder.shtml"},
 {id: "defend order", name: "Defend Order", type: "Bug", cat: "Status", pp: 10, effect: "Raises user's Defense and Special Defense.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/defendorder.shtml"},
 {id: "heal order", name: "Heal Order", type: "Bug", cat: "Status", pp: 10, effect: "User recovers half its max HP.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/healorder.shtml"},
 {id: "head smash", name: "Head Smash", type: "Rock", cat: "Physical", power: 150, pp: 5, acc: 80, effect: "User receives recoil damage.", wiki: "http://www.serebii.net/attackdex-sm/headsmash.shtml"},
 {id: "double hit", name: "Double Hit", type: "Normal", cat: "Physical", power: 35, pp: 10, acc: 90, effect: "Hits twice in one turn.", wiki: "http://www.serebii.net/attackdex-sm/doublehit.shtml"},
 {id: "roar of time", name: "Roar Of Time", type: "Dragon", cat: "Special", power: 150, pp: 5, acc: 90, effect: "User must recharge next turn.", wiki: "http://www.serebii.net/attackdex-sm/roaroftime.shtml"},
 {id: "spacial rend", name: "Spacial Rend", type: "Dragon", cat: "Special", power: 100, pp: 5, acc: 95, effect: "High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/spacialrend.shtml"},
 {id: "lunar dance", name: "Lunar Dance", type: "Psychic", cat: "Status", pp: 10, effect: "The user faints but the next Pokémon released is fully healed.", wiki: "http://www.serebii.net/attackdex-sm/lunardance.shtml"},
 {id: "crush grip", name: "Crush Grip", type: "Normal", cat: "Physical", pp: 5, acc: 100, effect: "More powerful when opponent has higher HP.", wiki: "http://www.serebii.net/attackdex-sm/crushgrip.shtml"},
 {id: "magma storm", name: "Magma Storm", type: "Fire", cat: "Special", power: 100, pp: 5, acc: 75, effect: "Traps opponent, damaging them for 4-5 turns.", wiki: "http://www.serebii.net/attackdex-sm/magmastorm.shtml"},
 {id: "dark void", name: "Dark Void", type: "Dark", cat: "Status", pp: 10, acc: 80, effect: "Puts all adjacent opponents to sleep.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/darkvoid.shtml"},
 {id: "seed flare", name: "Seed Flare", type: "Grass", cat: "Special", power: 120, pp: 5, acc: 85, effect: "May lower opponent's Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/seedflare.shtml"},
 {id: "ominous wind", name: "Ominous Wind", type: "Ghost", cat: "Special", power: 60, pp: 5, acc: 100, effect: "May raise all user's stats at once.", wiki: "http://www.serebii.net/attackdex-sm/ominouswind.shtml"},
 {id: "shadow force", name: "Shadow Force", type: "Ghost", cat: "Physical", power: 120, pp: 5, acc: 100, effect: "Disappears on first turn, attacks on second. Can strike through Protect/Detect.", wiki: "http://www.serebii.net/attackdex-sm/shadowforce.shtml"},
 {id: "hone claws", name: "Hone Claws", type: "Dark", cat: "Status", pp: 15, effect: "Raises user's Attack and Accuracy.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/honeclaws.shtml"},
 {id: "wide guard", name: "Wide Guard", type: "Rock", cat: "Status", pp: 10, effect: "Protects the user's team from multi-target attacks.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/wideguard.shtml"},
 {id: "guard split", name: "Guard Split", type: "Psychic", cat: "Status", pp: 10, effect: "Averages Defense and Special Defense with the target.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/guardsplit.shtml"},
 {id: "power split", name: "Power Split", type: "Psychic", cat: "Status", pp: 10, effect: "Averages Attack and Special Attack with the target.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/powersplit.shtml"},
 {id: "wonder room", name: "Wonder Room", type: "Psychic", cat: "Status", pp: 10, effect: "Swaps every Pokémon's Defense and Special Defense for 5 turns.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/wonderroom.shtml"},
 {id: "psyshock", name: "Psyshock", type: "Psychic", cat: "Special", power: 80, pp: 10, acc: 100, effect: "Inflicts damage based on the target's Defense, not Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/psyshock.shtml"},
 {id: "venoshock", name: "Venoshock", type: "Poison", cat: "Special", power: 65, pp: 10, acc: 100, effect: "Inflicts double damage if the target is poisoned.", wiki: "http://www.serebii.net/attackdex-sm/venoshock.shtml"},
 {id: "autotomize", name: "Autotomize", type: "Steel", cat: "Status", pp: 15, effect: "Halves weight and sharply raises Speed.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/autotomize.shtml"},
 {id: "rage powder", name: "Rage Powder", type: "Bug", cat: "Status", pp: 20, effect: "Forces attacks to hit user, not team-mates.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/ragepowder.shtml"},
 {id: "telekinesis", name: "Telekinesis", type: "Psychic", cat: "Status", pp: 15, effect: "Ignores opponent's Evasiveness for three turns, add Ground immunity.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/telekinesis.shtml"},
 {id: "magic room", name: "Magic Room", type: "Psychic", cat: "Status", pp: 10, effect: "Suppresses the effects of held items for five turns.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/magicroom.shtml"},
 {id: "smack down", name: "Smack Down", type: "Rock", cat: "Physical", power: 50, pp: 15, acc: 100, effect: "Makes Flying-type Pokémon vulnerable to Ground moves.", wiki: "http://www.serebii.net/attackdex-sm/smackdown.shtml"},
 {id: "storm throw", name: "Storm Throw", type: "Fighting", cat: "Physical", power: 60, pp: 10, acc: 100, effect: "Always results in a critical hit.", wiki: "http://www.serebii.net/attackdex-sm/stormthrow.shtml"},
 {id: "flame burst", name: "Flame Burst", type: "Fire", cat: "Special", power: 70, pp: 15, acc: 100, effect: "May also injure nearby Pokémon.", wiki: "http://www.serebii.net/attackdex-sm/flameburst.shtml"},
 {id: "sludge wave", name: "Sludge Wave", type: "Poison", cat: "Special", power: 95, pp: 10, acc: 100, effect: "May poison opponent.", wiki: "http://www.serebii.net/attackdex-sm/sludgewave.shtml"},
 {id: "quiver dance", name: "Quiver Dance", type: "Bug", cat: "Status", pp: 20, effect: "Raises user's Special Attack, Special Defense and Speed.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/quiverdance.shtml"},
 {id: "heavy slam", name: "Heavy Slam", type: "Steel", cat: "Physical", pp: 10, acc: 100, effect: "The heavier the user, the stronger the attack.", wiki: "http://www.serebii.net/attackdex-sm/heavyslam.shtml"},
 {id: "synchronoise", name: "Synchronoise", type: "Psychic", cat: "Special", power: 120, pp: 15, acc: 100, effect: "Hits any Pokémon that shares a type with the user.", wiki: "http://www.serebii.net/attackdex-sm/synchronoise.shtml"},
 {id: "electro ball", name: "Electro Ball", type: "Electric", cat: "Special", pp: 10, acc: 100, effect: "The faster the user, the stronger the attack.", wiki: "http://www.serebii.net/attackdex-sm/electroball.shtml"},
 {id: "soak", name: "Soak", type: "Water", cat: "Status", pp: 20, acc: 100, effect: "Changes the target's type to water.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/soak.shtml"},
 {id: "flame charge", name: "Flame Charge", type: "Fire", cat: "Physical", power: 50, pp: 20, acc: 100, effect: "Raises user's Speed.", wiki: "http://www.serebii.net/attackdex-sm/flamecharge.shtml"},
 {id: "coil", name: "Coil", type: "Poison", cat: "Status", pp: 20, effect: "Raises user's Attack, Defense and Accuracy.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/coil.shtml"},
 {id: "low sweep", name: "Low Sweep", type: "Fighting", cat: "Physical", power: 65, pp: 20, acc: 100, effect: "Lowers opponent's Speed.", wiki: "http://www.serebii.net/attackdex-sm/lowsweep.shtml"},
 {id: "acid spray", name: "Acid Spray", type: "Poison", cat: "Special", power: 40, pp: 20, acc: 100, effect: "Sharply lowers opponent's Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/acidspray.shtml"},
 {id: "foul play", name: "Foul Play", type: "Dark", cat: "Physical", power: 95, pp: 15, acc: 100, effect: "Uses the opponent's Attack stat.", wiki: "http://www.serebii.net/attackdex-sm/foulplay.shtml"},
 {id: "simple beam", name: "Simple Beam", type: "Normal", cat: "Status", pp: 15, acc: 100, effect: "Changes target's ability to Simple.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/simplebeam.shtml"},
 {id: "entrainment", name: "Entrainment", type: "Normal", cat: "Status", pp: 15, acc: 100, effect: "Makes target's ability same as user's.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/entrainment.shtml"},
 {id: "after you", name: "After You", type: "Normal", cat: "Status", pp: 15, effect: "Gives target priority in the next turn.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/afteryou.shtml"},
 {id: "round", name: "Round", type: "Normal", cat: "Special", power: 60, pp: 15, acc: 100, effect: "Power increases if teammates use it in the same turn.", wiki: "http://www.serebii.net/attackdex-sm/round.shtml"},
 {id: "echoed voice", name: "Echoed Voice", type: "Normal", cat: "Special", power: 40, pp: 15, acc: 100, effect: "Power increases each turn.", wiki: "http://www.serebii.net/attackdex-sm/echoedvoice.shtml"},
 {id: "chip away", name: "Chip Away", type: "Normal", cat: "Physical", power: 70, pp: 20, acc: 100, effect: "Ignores opponent's stat changes.", wiki: "http://www.serebii.net/attackdex-sm/chipaway.shtml"},
 {id: "clear smog", name: "Clear Smog", type: "Poison", cat: "Special", power: 50, pp: 15, effect: "Removes all of the target's stat changes.", wiki: "http://www.serebii.net/attackdex-sm/clearsmog.shtml"},
 {id: "stored power", name: "Stored Power", type: "Psychic", cat: "Special", power: 20, pp: 10, acc: 100, effect: "Power increases when user's stats have been raised.", wiki: "http://www.serebii.net/attackdex-sm/storedpower.shtml"},
 {id: "quick guard", name: "Quick Guard", type: "Fighting", cat: "Status", pp: 15, effect: "Fast moves won't damage the user or its teammates.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/quickguard.shtml"},
 {id: "ally switch", name: "Ally Switch", type: "Psychic", cat: "Status", pp: 15, effect: "User switches with opposite teammate.", zeffect: "Speed ↑↑", wiki: "http://www.serebii.net/attackdex-sm/allyswitch.shtml"},
 {id: "scald", name: "Scald", type: "Water", cat: "Special", power: 80, pp: 15, acc: 100, effect: "May burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/scald.shtml"},
 {id: "shell smash", name: "Shell Smash", type: "Normal", cat: "Status", pp: 15, effect: "Sharply raises user's Attack, Special Attack and Speed but lowers Defense and Special Defense.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/shellsmash.shtml"},
 {id: "heal pulse", name: "Heal Pulse", type: "Psychic", cat: "Status", pp: 10, effect: "Restores half the target's max HP.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/healpulse.shtml"},
 {id: "hex", name: "Hex", type: "Ghost", cat: "Special", power: 65, pp: 10, acc: 100, effect: "Inflicts more damage if the target has a status condition.", wiki: "http://www.serebii.net/attackdex-sm/hex.shtml"},
 {id: "sky drop", name: "Sky Drop", type: "Flying", cat: "Physical", power: 60, pp: 10, acc: 100, effect: "Takes opponent into the air on first turn, drops them on second turn.", wiki: "http://www.serebii.net/attackdex-sm/skydrop.shtml"},
 {id: "shift gear", name: "Shift Gear", type: "Steel", cat: "Status", pp: 10, effect: "Raises user's Attack and sharply raises Speed.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/shiftgear.shtml"},
 {id: "circle throw", name: "Circle Throw", type: "Fighting", cat: "Physical", power: 60, pp: 10, acc: 90, effect: "In battles, the opponent switches. In the wild, the Pokémon runs.", wiki: "http://www.serebii.net/attackdex-sm/circlethrow.shtml"},
 {id: "incinerate", name: "Incinerate", type: "Fire", cat: "Special", power: 60, pp: 15, acc: 100, effect: "Destroys the target's held berry.", wiki: "http://www.serebii.net/attackdex-sm/incinerate.shtml"},
 {id: "quash", name: "Quash", type: "Dark", cat: "Status", pp: 15, acc: 100, effect: "Makes the target act last this turn.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/quash.shtml"},
 {id: "acrobatics", name: "Acrobatics", type: "Flying", cat: "Physical", power: 55, pp: 15, acc: 100, effect: "Stronger when the user does not have a held item.", wiki: "http://www.serebii.net/attackdex-sm/acrobatics.shtml"},
 {id: "reflect type", name: "Reflect Type", type: "Normal", cat: "Status", pp: 15, effect: "User becomes the target's type.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/reflecttype.shtml"},
 {id: "retaliate", name: "Retaliate", type: "Normal", cat: "Physical", power: 70, pp: 5, acc: 100, effect: "Inflicts double damage if a teammate fainted on the last turn.", wiki: "http://www.serebii.net/attackdex-sm/retaliate.shtml"},
 {id: "final gambit", name: "Final Gambit", type: "Fighting", cat: "Special", pp: 5, acc: 100, effect: "Inflicts damage equal to the user's remaining HP. User faints.", wiki: "http://www.serebii.net/attackdex-sm/finalgambit.shtml"},
 {id: "bestow", name: "Bestow", type: "Normal", cat: "Status", pp: 15, effect: "Gives the user's held item to the target.", zeffect: "Speed ↑↑", wiki: "http://www.serebii.net/attackdex-sm/bestow.shtml"},
 {id: "inferno", name: "Inferno", type: "Fire", cat: "Special", power: 100, pp: 5, acc: 50, effect: "Burns opponent.", wiki: "http://www.serebii.net/attackdex-sm/inferno.shtml"},
 {id: "water pledge", name: "Water Pledge", type: "Water", cat: "Special", power: 80, pp: 10, acc: 100, effect: "Added effects appear if preceded by Fire Pledge or succeeded by Grass Pledge.", wiki: "http://www.serebii.net/attackdex-sm/waterpledge.shtml"},
 {id: "fire pledge", name: "Fire Pledge", type: "Fire", cat: "Special", power: 80, pp: 10, acc: 100, effect: "Added effects appear if combined with Grass Pledge or Water Pledge.", wiki: "http://www.serebii.net/attackdex-sm/firepledge.shtml"},
 {id: "grass pledge", name: "Grass Pledge", type: "Grass", cat: "Special", power: 80, pp: 10, acc: 100, effect: "Added effects appear if preceded by Water Pledge or succeeded by Fire Pledge.", wiki: "http://www.serebii.net/attackdex-sm/grasspledge.shtml"},
 {id: "volt switch", name: "Volt Switch", type: "Electric", cat: "Special", power: 70, pp: 20, acc: 100, effect: "User must switch out after attacking.", wiki: "http://www.serebii.net/attackdex-sm/voltswitch.shtml"},
 {id: "struggle bug", name: "Struggle Bug", type: "Bug", cat: "Special", power: 50, pp: 20, acc: 100, effect: "Lowers opponent's Special Attack.", wiki: "http://www.serebii.net/attackdex-sm/strugglebug.shtml"},
 {id: "bulldoze", name: "Bulldoze", type: "Ground", cat: "Physical", power: 60, pp: 20, acc: 100, effect: "Lowers opponent's Speed.", wiki: "http://www.serebii.net/attackdex-sm/bulldoze.shtml"},
 {id: "frost breath", name: "Frost Breath", type: "Ice", cat: "Special", power: 60, pp: 10, acc: 90, effect: "Always results in a critical hit.", wiki: "http://www.serebii.net/attackdex-sm/frostbreath.shtml"},
 {id: "dragon tail", name: "Dragon Tail", type: "Dragon", cat: "Physical", power: 60, pp: 10, acc: 90, effect: "In battles, the opponent switches. In the wild, the Pokémon runs.", wiki: "http://www.serebii.net/attackdex-sm/dragontail.shtml"},
 {id: "work up", name: "Work Up", type: "Normal", cat: "Status", pp: 30, effect: "Raises user's Attack and Special Attack.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/workup.shtml"},
 {id: "electroweb", name: "Electroweb", type: "Electric", cat: "Special", power: 55, pp: 15, acc: 95, effect: "Lowers opponent's Speed.", wiki: "http://www.serebii.net/attackdex-sm/electroweb.shtml"},
 {id: "wild charge", name: "Wild Charge", type: "Electric", cat: "Physical", power: 90, pp: 15, acc: 100, effect: "User receives recoil damage.", wiki: "http://www.serebii.net/attackdex-sm/wildcharge.shtml"},
 {id: "drill run", name: "Drill Run", type: "Ground", cat: "Physical", power: 80, pp: 10, acc: 95, effect: "High critical hit ratio.", wiki: "http://www.serebii.net/attackdex-sm/drillrun.shtml"},
 {id: "dual chop", name: "Dual Chop", type: "Dragon", cat: "Physical", power: 40, pp: 15, acc: 90, effect: "Hits twice in one turn.", wiki: "http://www.serebii.net/attackdex-sm/dualchop.shtml"},
 {id: "heart stamp", name: "Heart Stamp", type: "Psychic", cat: "Physical", power: 60, pp: 25, acc: 100, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/heartstamp.shtml"},
 {id: "horn leech", name: "Horn Leech", type: "Grass", cat: "Physical", power: 75, pp: 10, acc: 100, effect: "User recovers half the HP inflicted on opponent.", wiki: "http://www.serebii.net/attackdex-sm/hornleech.shtml"},
 {id: "sacred sword", name: "Sacred Sword", type: "Fighting", cat: "Physical", power: 90, pp: 15, acc: 100, effect: "Ignores opponent's stat changes.", wiki: "http://www.serebii.net/attackdex-sm/sacredsword.shtml"},
 {id: "razor shell", name: "Razor Shell", type: "Water", cat: "Physical", power: 75, pp: 10, acc: 95, effect: "May lower opponent's Defense.", wiki: "http://www.serebii.net/attackdex-sm/razorshell.shtml"},
 {id: "heat crash", name: "Heat Crash", type: "Fire", cat: "Physical", pp: 10, acc: 100, effect: "The heavier the user, the stronger the attack.", wiki: "http://www.serebii.net/attackdex-sm/heatcrash.shtml"},
 {id: "leaf tornado", name: "Leaf Tornado", type: "Grass", cat: "Special", power: 65, pp: 10, acc: 90, effect: "May lower opponent's Accuracy.", wiki: "http://www.serebii.net/attackdex-sm/leaftornado.shtml"},
 {id: "steamroller", name: "Steamroller", type: "Bug", cat: "Physical", power: 65, pp: 20, acc: 100, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/steamroller.shtml"},
 {id: "cotton guard", name: "Cotton Guard", type: "Grass", cat: "Status", pp: 10, effect: "Drastically raises user's Defense.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/cottonguard.shtml"},
 {id: "night daze", name: "Night Daze", type: "Dark", cat: "Special", power: 85, pp: 10, acc: 95, effect: "May lower opponent's Accuracy.", wiki: "http://www.serebii.net/attackdex-sm/nightdaze.shtml"},
 {id: "psystrike", name: "Psystrike", type: "Psychic", cat: "Special", power: 100, pp: 10, acc: 100, effect: "Inflicts damage based on the target's Defense, not Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/psystrike.shtml"},
 {id: "tail slap", name: "Tail Slap", type: "Normal", cat: "Physical", power: 25, pp: 10, acc: 85, effect: "Hits 2-5 times in one turn.", wiki: "http://www.serebii.net/attackdex-sm/tailslap.shtml"},
 {id: "hurricane", name: "Hurricane", type: "Flying", cat: "Special", power: 110, pp: 10, acc: 70, effect: "May confuse opponent.", wiki: "http://www.serebii.net/attackdex-sm/hurricane.shtml"},
 {id: "head charge", name: "Head Charge", type: "Normal", cat: "Physical", power: 120, pp: 15, acc: 100, effect: "User receives recoil damage.", wiki: "http://www.serebii.net/attackdex-sm/headcharge.shtml"},
 {id: "gear grind", name: "Gear Grind", type: "Steel", cat: "Physical", power: 50, pp: 15, acc: 85, effect: "Hits twice in one turn.", wiki: "http://www.serebii.net/attackdex-sm/geargrind.shtml"},
 {id: "searing shot", name: "Searing Shot", type: "Fire", cat: "Special", power: 100, pp: 5, acc: 100, effect: "May burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/searingshot.shtml"},
 {id: "techno blast", name: "Techno Blast", type: "Normal", cat: "Special", power: 120, pp: 5, acc: 100, effect: "Type depends on the Drive being held.", wiki: "http://www.serebii.net/attackdex-sm/technoblast.shtml"},
 {id: "relic song", name: "Relic Song", type: "Normal", cat: "Special", power: 75, pp: 10, acc: 100, effect: "May put the target to sleep.", wiki: "http://www.serebii.net/attackdex-sm/relicsong.shtml"},
 {id: "secret sword", name: "Secret Sword", type: "Fighting", cat: "Special", power: 85, pp: 10, acc: 100, effect: "Inflicts damage based on the target's Defense, not Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/secretsword.shtml"},
 {id: "glaciate", name: "Glaciate", type: "Ice", cat: "Special", power: 65, pp: 10, acc: 95, effect: "Lowers opponent's Speed.", wiki: "http://www.serebii.net/attackdex-sm/glaciate.shtml"},
 {id: "bolt strike", name: "Bolt Strike", type: "Electric", cat: "Physical", power: 130, pp: 5, acc: 85, effect: "May paralyze opponent.", wiki: "http://www.serebii.net/attackdex-sm/boltstrike.shtml"},
 {id: "blue flare", name: "Blue Flare", type: "Fire", cat: "Special", power: 130, pp: 5, acc: 85, effect: "May burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/blueflare.shtml"},
 {id: "fiery dance", name: "Fiery Dance", type: "Fire", cat: "Special", power: 80, pp: 10, acc: 100, effect: "May raise user's Special Attack.", wiki: "http://www.serebii.net/attackdex-sm/fierydance.shtml"},
 {id: "freeze shock", name: "Freeze Shock", type: "Ice", cat: "Physical", power: 140, pp: 5, acc: 90, effect: "Charges on first turn, attacks on second. May paralyze opponent.", wiki: "http://www.serebii.net/attackdex-sm/freezeshock.shtml"},
 {id: "ice burn", name: "Ice Burn", type: "Ice", cat: "Special", power: 140, pp: 5, acc: 90, effect: "Charges on first turn, attacks on second. May burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/iceburn.shtml"},
 {id: "snarl", name: "Snarl", type: "Dark", cat: "Special", power: 55, pp: 15, acc: 95, effect: "Lowers opponent's Special Attack.", wiki: "http://www.serebii.net/attackdex-sm/snarl.shtml"},
 {id: "icicle crash", name: "Icicle Crash", type: "Ice", cat: "Physical", power: 85, pp: 10, acc: 90, effect: "May cause flinching.", wiki: "http://www.serebii.net/attackdex-sm/iciclecrash.shtml"},
 {id: "v-create", name: "V-create", type: "Fire", cat: "Physical", power: 180, pp: 5, acc: 95, effect: "Lowers user's Defense, Special Defense and Speed.", wiki: "http://www.serebii.net/attackdex-sm/v-create.shtml"},
 {id: "fusion flare", name: "Fusion Flare", type: "Fire", cat: "Special", power: 100, pp: 5, acc: 100, effect: "Power increases if Fusion Bolt is used in the same turn.", wiki: "http://www.serebii.net/attackdex-sm/fusionflare.shtml"},
 {id: "fusion bolt", name: "Fusion Bolt", type: "Electric", cat: "Physical", power: 100, pp: 5, acc: 100, effect: "Power increases if Fusion Flare is used in the same turn.", wiki: "http://www.serebii.net/attackdex-sm/fusionbolt.shtml"},
 {id: "flying press", name: "Flying Press", type: "Fighting", cat: "Physical", power: 80, pp: 10, acc: 95, effect: "Deals Fighting and Flying type damage.", wiki: "http://www.serebii.net/attackdex-sm/flyingpress.shtml"},
 {id: "mat block", name: "Mat Block", type: "Fighting", cat: "Status", pp: 10, effect: "Protects teammates from damaging moves.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/matblock.shtml"},
 {id: "belch", name: "Belch", type: "Poison", cat: "Special", power: 120, pp: 10, acc: 90, effect: "User must have consumed a Berry.", wiki: "http://www.serebii.net/attackdex-sm/belch.shtml"},
 {id: "rototiller", name: "Rototiller", type: "Ground", cat: "Status", pp: 10, effect: "Raises Attack and Special Attack of Grass-types.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/rototiller.shtml"},
 {id: "sticky web", name: "Sticky Web", type: "Bug", cat: "Status", pp: 20, effect: "Lowers opponent's Speed when switching into battle.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/stickyweb.shtml"},
 {id: "fell stinger", name: "Fell Stinger", type: "Bug", cat: "Physical", power: 30, pp: 25, acc: 100, effect: "Sharply raises user's Attack if target is KO'd.", wiki: "http://www.serebii.net/attackdex-sm/fellstinger.shtml"},
 {id: "phantom force", name: "Phantom Force", type: "Ghost", cat: "Physical", power: 90, pp: 10, acc: 100, effect: "Disappears on first turn, attacks on second. Can strike through Protect/Detect.", wiki: "http://www.serebii.net/attackdex-sm/phantomforce.shtml"},
 {id: "trick-or-treat", name: "Trick-or-treat", type: "Ghost", cat: "Status", pp: 20, acc: 100, effect: "Adds Ghost type to opponent.", zeffect: "All stats ↑", wiki: "http://www.serebii.net/attackdex-sm/trick-or-treat.shtml"},
 {id: "noble roar", name: "Noble Roar", type: "Normal", cat: "Status", pp: 30, acc: 100, effect: "Lowers opponent's Attack and Special Attack.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/nobleroar.shtml"},
 {id: "ion deluge", name: "Ion Deluge", type: "Electric", cat: "Status", pp: 25, effect: "Changes Normal-type moves to Electric-type.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/iondeluge.shtml"},
 {id: "parabolic charge", name: "Parabolic Charge", type: "Electric", cat: "Special", power: 50, pp: 20, acc: 100, effect: "User recovers half the HP inflicted on opponent.", wiki: "http://www.serebii.net/attackdex-sm/paraboliccharge.shtml"},
 {id: "forest's curse", name: "Forests Curse", type: "Grass", cat: "Status", pp: 20, acc: 100, effect: "Adds Grass type to opponent.", zeffect: "All stats ↑", wiki: "http://www.serebii.net/attackdex-sm/forestscurse.shtml"},
 {id: "petal blizzard", name: "Petal Blizzard", type: "Grass", cat: "Physical", power: 90, pp: 15, acc: 100, effect: "Hits all adjacent Pokémon.", wiki: "http://www.serebii.net/attackdex-sm/petalblizzard.shtml"},
 {id: "freeze-dry", name: "Freeze-dry", type: "Ice", cat: "Special", power: 70, pp: 20, acc: 100, effect: "May freeze opponent. Super-effective against Water types.", wiki: "http://www.serebii.net/attackdex-sm/freeze-dry.shtml"},
 {id: "disarming voice", name: "Disarming Voice", type: "Fairy", cat: "Special", power: 40, pp: 15, effect: "Ignores Accuracy and Evasiveness.", wiki: "http://www.serebii.net/attackdex-sm/disarmingvoice.shtml"},
 {id: "parting shot", name: "Parting Shot", type: "Dark", cat: "Status", pp: 20, acc: 100, effect: "Lowers opponent's Attack and Special Attack then switches out.", zeffect: "Restores replacement’s HP 100%", wiki: "http://www.serebii.net/attackdex-sm/partingshot.shtml"},
 {id: "topsy-turvy", name: "Topsy-turvy", type: "Dark", cat: "Status", pp: 20, acc: 100, effect: "Reverses stat changes of opponent.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/topsy-turvy.shtml"},
 {id: "draining kiss", name: "Draining Kiss", type: "Fairy", cat: "Special", power: 50, pp: 10, acc: 100, effect: "User recovers most the HP inflicted on opponent.", wiki: "http://www.serebii.net/attackdex-sm/drainingkiss.shtml"},
 {id: "crafty shield", name: "Crafty Shield", type: "Fairy", cat: "Status", pp: 10, effect: "Protects the Pokémon from status moves.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/craftyshield.shtml"},
 {id: "flower shield", name: "Flower Shield", type: "Fairy", cat: "Status", pp: 10, effect: "Sharply raises Defense of all Grass-type Pokémon on the field.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/flowershield.shtml"},
 {id: "grassy terrain", name: "Grassy Terrain", type: "Grass", cat: "Status", pp: 10, effect: "Restores a little HP of all Pokémon for 5 turns.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/grassyterrain.shtml"},
 {id: "misty terrain", name: "Misty Terrain", type: "Fairy", cat: "Status", pp: 10, effect: "Protects the field from status conditions for 5 turns.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/mistyterrain.shtml"},
 {id: "electrify", name: "Electrify", type: "Electric", cat: "Status", pp: 20, effect: "Changes the target's move to Electric type.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/electrify.shtml"},
 {id: "play rough", name: "Play Rough", type: "Fairy", cat: "Physical", power: 90, pp: 10, acc: 90, effect: "May lower opponent's Attack.", wiki: "http://www.serebii.net/attackdex-sm/playrough.shtml"},
 {id: "fairy wind", name: "Fairy Wind", type: "Fairy", cat: "Special", power: 40, pp: 30, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/fairywind.shtml"},
 {id: "moonblast", name: "Moonblast", type: "Fairy", cat: "Special", power: 95, pp: 15, acc: 100, effect: "May lower opponent's Special Attack.", wiki: "http://www.serebii.net/attackdex-sm/moonblast.shtml"},
 {id: "boomburst", name: "Boomburst", type: "Normal", cat: "Special", power: 140, pp: 10, acc: 100, effect: "Hits all adjacent Pokémon.", wiki: "http://www.serebii.net/attackdex-sm/boomburst.shtml"},
 {id: "fairy lock", name: "Fairy Lock", type: "Fairy", cat: "Status", pp: 10, effect: "Prevents fleeing in the next turn.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/fairylock.shtml"},
 {id: "king's shield", name: "King's Shield", type: "Steel", cat: "Status", pp: 10, effect: "Protects against attacks, and lowers opponent's Attack on contact.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/kingsshield.shtml"},
 {id: "play nice", name: "Play Nice", type: "Normal", cat: "Status", pp: 20, effect: "Lowers opponent's Attack. Always hits.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/playnice.shtml"},
 {id: "confide", name: "Confide", type: "Normal", cat: "Status", pp: 20, effect: "Lowers opponent's Special Attack.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/confide.shtml"},
 {id: "diamond storm", name: "Diamond Storm", type: "Rock", cat: "Physical", power: 100, pp: 5, acc: 95, effect: "May raise user's Defense", wiki: "http://www.serebii.net/attackdex-sm/diamondstorm.shtml"},
 {id: "steam eruption", name: "Steam Eruption", type: "Water", cat: "Special", power: 110, pp: 5, acc: 95, effect: "May burn opponent.", wiki: "http://www.serebii.net/attackdex-sm/steameruption.shtml"},
 {id: "hyperspace hole", name: "Hyperspace Hole", type: "Psychic", cat: "Special", power: 80, pp: 5, effect: "Can strike through Protect/Detect.", wiki: "http://www.serebii.net/attackdex-sm/hyperspacehole.shtml"},
 {id: "water shuriken", name: "Water Shuriken", type: "Water", cat: "Physical", power: 15, pp: 20, acc: 100, effect: "Hits 2-5 times in one turn.", wiki: "http://www.serebii.net/attackdex-sm/watershuriken.shtml"},
 {id: "mystical fire", name: "Mystical Fire", type: "Fire", cat: "Special", power: 65, pp: 10, acc: 100, effect: "Lowers opponent's Special Attack.", wiki: "http://www.serebii.net/attackdex-sm/mysticalfire.shtml"},
 {id: "spiky shield", name: "Spiky Shield", type: "Grass", cat: "Status", pp: 10, effect: "Protects user and inflicts damage on contact moves.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/spikyshield.shtml"},
 {id: "aromatic mist", name: "Aromatic Mist", type: "Fairy", cat: "Status", pp: 20, effect: "Raises Special Defense of allies.", zeffect: "Special Defense ↑↑", wiki: "http://www.serebii.net/attackdex-sm/aromaticmist.shtml"},
 {id: "eerie impulse", name: "Eerie Impulse", type: "Electric", cat: "Status", pp: 15, acc: 100, effect: "Sharply lowers opponent's Special Attack.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/eerieimpulse.shtml"},
 {id: "venom drench", name: "Venom Drench", type: "Poison", cat: "Status", pp: 20, acc: 100, effect: "Lowers poisoned opponent's Special Attack and Speed.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/venomdrench.shtml"},
 {id: "powder", name: "Powder", type: "Bug", cat: "Status", pp: 20, acc: 100, effect: "Damages Pokémon using Fire type moves.", zeffect: "Special Defense ↑↑", wiki: "http://www.serebii.net/attackdex-sm/powder.shtml"},
 {id: "geomancy", name: "Geomancy", type: "Fairy", cat: "Status", pp: 10, effect: "Charges on first turn, sharply raises user's Sp. Attack, Sp. Defense and Speed on the second.", zeffect: "All stats ↑", wiki: "http://www.serebii.net/attackdex-sm/geomancy.shtml"},
 {id: "magnetic flux", name: "Magnetic Flux", type: "Electric", cat: "Status", pp: 20, effect: "Raises Defense and Sp. Defense of Plus/Minus Pokémon.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/magneticflux.shtml"},
 {id: "happy hour", name: "Happy Hour", type: "Normal", cat: "Status", pp: 30, effect: "Doubles prize money from trainer battles.", zeffect: "All stats ↑", wiki: "http://www.serebii.net/attackdex-sm/happyhour.shtml"},
 {id: "electric terrain", name: "Electric Terrain", type: "Electric", cat: "Status", pp: 10, effect: "Prevents all Pokémon from falling asleep for 5 turns.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/electricterrain.shtml"},
 {id: "dazzling gleam", name: "Dazzling Gleam", type: "Fairy", cat: "Special", power: 80, pp: 10, acc: 100, effect: "Hits all adjacent opponents.", wiki: "http://www.serebii.net/attackdex-sm/dazzlinggleam.shtml"},
 {id: "celebrate", name: "Celebrate", type: "Normal", cat: "Status", pp: 40, effect: "The Pokémon congratulates you on your special day. No battle effect.", zeffect: "All stats ↑", wiki: "http://www.serebii.net/attackdex-sm/celebrate.shtml"},
 {id: "hold hands", name: "Hold Hands", type: "Normal", cat: "Status", pp: 40, effect: "Makes the user and an ally very happy.", zeffect: "All stats ↑", wiki: "http://www.serebii.net/attackdex-sm/holdhands.shtml"},
 {id: "baby-doll eyes", name: "Baby-doll Eyes", type: "Fairy", cat: "Status", pp: 30, acc: 100, effect: "Always goes first. Lowers the target's attack.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/baby-dolleyes.shtml"},
 {id: "nuzzle", name: "Nuzzle", type: "Electric", cat: "Physical", power: 20, pp: 20, acc: 100, effect: "Paralyzes opponent.", wiki: "http://www.serebii.net/attackdex-sm/nuzzle.shtml"},
 {id: "hold back", name: "Hold Back", type: "Normal", cat: "Physical", power: 40, pp: 40, acc: 100, effect: "Always leaves opponent with at least 1 HP.", wiki: "http://www.serebii.net/attackdex-sm/holdback.shtml"},
 {id: "infestation", name: "Infestation", type: "Bug", cat: "Special", power: 20, pp: 20, acc: 100, effect: "Traps opponent, damaging them for 4-5 turns.", wiki: "http://www.serebii.net/attackdex-sm/infestation.shtml"},
 {id: "power-up punch", name: "Power-up Punch", type: "Fighting", cat: "Physical", power: 40, pp: 20, acc: 100, effect: "Raises Attack.", wiki: "http://www.serebii.net/attackdex-sm/power-uppunch.shtml"},
 {id: "oblivion wing", name: "Oblivion Wing", type: "Flying", cat: "Special", power: 80, pp: 10, acc: 100, effect: "User recovers most of the HP inflicted on opponent.", wiki: "http://www.serebii.net/attackdex-sm/oblivionwing.shtml"},
 {id: "thousand arrows", name: "Thousand Arrows", type: "Ground", cat: "Physical", power: 90, pp: 10, acc: 100, effect: "Makes Flying-type Pokémon vulnerable to Ground moves.", wiki: "http://www.serebii.net/attackdex-sm/thousandarrows.shtml"},
 {id: "thousand waves", name: "Thousand Waves", type: "Ground", cat: "Physical", power: 90, pp: 10, acc: 100, effect: "Opponent cannot flee or switch.", wiki: "http://www.serebii.net/attackdex-sm/thousandwaves.shtml"},
 {id: "lands wrath", name: "Lands Wrath", type: "Ground", cat: "Physical", power: 90, pp: 10, acc: 100, effect: "None", wiki: "http://www.serebii.net/attackdex-sm/landswrath.shtml"},
 {id: "light of ruin", name: "Light Of Ruin", type: "Fairy", cat: "Special", power: 140, pp: 5, acc: 90, effect: "User receives recoil damage.", wiki: "http://www.serebii.net/attackdex-sm/lightofruin.shtml"},
 {id: "origin pulse", name: "Origin Pulse", type: "Water", cat: "Special", power: 110, pp: 10, acc: 85, effect: "Hits all adjacent opponents.", wiki: "http://www.serebii.net/attackdex-sm/originpulse.shtml"},
 {id: "precipice blades", name: "Precipice Blades", type: "Ground", cat: "Physical", power: 120, pp: 10, acc: 85, effect: "Hits all adjacent opponents.", wiki: "http://www.serebii.net/attackdex-sm/precipiceblades.shtml"},
 {id: "dragon ascent", name: "Dragon Ascent", type: "Flying", cat: "Physical", power: 120, pp: 5, acc: 100, effect: "Lowers user's Defense and Special Defense.", wiki: "http://www.serebii.net/attackdex-sm/dragonascent.shtml"},
 {id: "hyperspace fury", name: "Hyperspace Fury", type: "Dark", cat: "Physical", power: 100, pp: 5, effect: "Lowers user's Defense. Can strike through Protect/Detect.", wiki: "http://www.serebii.net/attackdex-sm/hyperspacefury.shtml"},
 {id: "10,000,000 volt thunderbolt", name: "10,000,000 Volt Thunderbolt", type: "Electric", cat: "Special", power: 195, pp: 1, effect: "Pikachu-exclusive Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/10000000voltthunderbolt.shtml"},
 {id: "accelerock", name: "Accelerock", type: "Rock", cat: "Physical", power: 40, pp: 20, acc: 100, effect: "User attacks first.", wiki: "http://www.serebii.net/attackdex-sm/accelerock.shtml"},
 {id: "acid downpour", name: "Acid Downpour", type: "Poison", cat: "N/A", pp: 1, effect: "Poison type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/aciddownpour.shtml"},
 {id: "all-out pummeling", name: "All-out Pummeling", type: "Fighting", cat: "N/A", pp: 1, effect: "Fighting type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/all-outpummeling.shtml"},
 {id: "anchor shot", name: "Anchor Shot", type: "Steel", cat: "Physical", power: 80, pp: 20, acc: 100, effect: "The user entangles the target with its anchor chain while attacking. The target becomes unable to flee.", wiki: "http://www.serebii.net/attackdex-sm/anchorshot.shtml"},
 {id: "aurora veil", name: "Aurora Veil", type: "Ice", cat: "Status", pp: 20, effect: "Halves damage from Physical and Special attacks for five turns.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/auroraveil.shtml"},
 {id: "baneful bunker", name: "Baneful Bunker", type: "Poison", cat: "Status", pp: 10, effect: "In addition to protecting the user from attacks, this move also poisons any attacker that makes direct contact.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/banefulbunker.shtml"},
 {id: "beak blast", name: "Beak Blast", type: "Flying", cat: "Physical", power: 100, pp: 15, acc: 100, effect: "The user first heats up its beak, and then it attacks the target. Making direct contact with the Pokémon while it’s heating up its beak results in a burn.", wiki: "http://www.serebii.net/attackdex-sm/beakblast.shtml"},
 {id: "black hole eclipse", name: "Black Hole Eclipse", type: "Dark", cat: "N/A", pp: 1, effect: "Dark type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/blackholeeclipse.shtml"},
 {id: "bloom doom", name: "Bloom Doom", type: "Grass", cat: "N/A", pp: 1, effect: "Grass type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/bloomdoom.shtml"},
 {id: "breakneck blitz", name: "Breakneck Blitz", type: "Normal", cat: "N/A", pp: 1, effect: "Normal type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/breakneckblitz.shtml"},
 {id: "brutal swing", name: "Brutal Swing", type: "Dark", cat: "Physical", power: 60, pp: 20, acc: 100, effect: "The user swings its body around violently to inflict damage on everything in its vicinity.", wiki: "http://www.serebii.net/attackdex-sm/brutalswing.shtml"},
 {id: "burn up", name: "Burn Up", type: "Fire", cat: "Special", power: 130, pp: 5, acc: 100, effect: "To inflict massive damage, the user burns itself out. After using this move, the user will no longer be Fire type.", wiki: "http://www.serebii.net/attackdex-sm/burnup.shtml"},
 {id: "catastropika", name: "Catastropika", type: "Electric", cat: "Physical", power: 210, pp: 1, effect: "Pikachu-exclusive Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/catastropika.shtml"},
 {id: "clanging scales", name: "Clanging Scales", type: "Dragon", cat: "Special", power: 110, pp: 5, acc: 100, effect: "Lowers user's Defense.", wiki: "http://www.serebii.net/attackdex-sm/clangingscales.shtml"},
 {id: "continental crush", name: "Continental Crush", type: "Rock", cat: "N/A", pp: 1, effect: "Rock type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/continentalcrush.shtml"},
 {id: "core enforcer", name: "Core Enforcer", type: "Dragon", cat: "Special", power: 100, pp: 10, acc: 100, effect: "Scorches a 'Z' pattern on the ground.", wiki: "http://www.serebii.net/attackdex-sm/coreenforcer.shtml"},
 {id: "corkscrew crash", name: "Corkscrew Crash", type: "Steel", cat: "N/A", pp: 1, effect: "Steel type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/corkscrewcrash.shtml"},
 {id: "darkest lariat", name: "Darkest Lariat", type: "Dark", cat: "Physical", power: 85, pp: 10, acc: 100, effect: "Ignores opponent's stat changes.", wiki: "http://www.serebii.net/attackdex-sm/darkestlariat.shtml"},
 {id: "devastating drake", name: "Devastating Drake", type: "Dragon", cat: "N/A", pp: 1, effect: "Dragon type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/devastatingdrake.shtml"},
 {id: "dragon hammer", name: "Dragon Hammer", type: "Dragon", cat: "Physical", power: 90, pp: 15, acc: 100, effect: "The user uses its body like a hammer to attack the target and inflict damage.", wiki: "http://www.serebii.net/attackdex-sm/dragonhammer.shtml"},
 {id: "extreme evoboost", name: "Extreme Evoboost", type: "Normal", cat: "Status", pp: 1, effect: "Eevee-exclusive Z-Move. Sharply raises all stats.", wiki: "http://www.serebii.net/attackdex-sm/extremeevoboost.shtml"},
 {id: "fire lash", name: "Fire Lash", type: "Fire", cat: "Physical", power: 80, pp: 15, acc: 100, effect: "The user strikes the target with a burning lash. This also lowers the target’s Defense stat.", wiki: "http://www.serebii.net/attackdex-sm/firelash.shtml"},
 {id: "first impression", name: "First Impression", type: "Bug", cat: "Physical", power: 90, pp: 10, acc: 100, effect: "Although this move has great power, it only works the first turn the user is in battle.", wiki: "http://www.serebii.net/attackdex-sm/firstimpression.shtml"},
 {id: "fleur cannon", name: "Fleur Cannon", type: "Fairy", cat: "Special", power: 130, pp: 5, acc: 90, effect: "Sharply lowers user's Special Attack.", wiki: "http://www.serebii.net/attackdex-sm/fleurcannon.shtml"},
 {id: "floral healing", name: "Floral Healing", type: "Fairy", cat: "Status", pp: 10, effect: "The user restores the target’s HP by up to half of its max HP. It restores more HP when the terrain is grass.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/floralhealing.shtml"},
 {id: "gear up", name: "Gear Up", type: "Steel", cat: "Status", pp: 20, effect: "The user engages its gears to raise the Attack and Sp. Atk stats of ally Pokémon with the Plus or Minus Ability.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/gearup.shtml"},
 {id: "genesis supernova", name: "Genesis Supernova", type: "Psychic", cat: "Special", power: 185, pp: 1, effect: "Mew-exclusive Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/genesissupernova.shtml"},
 {id: "gigavolt havoc", name: "Gigavolt Havoc", type: "Electric", cat: "N/A", pp: 1, effect: "Electric type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/gigavolthavoc.shtml"},
 {id: "guardian of alola", name: "Guardian Of Alola", type: "Fairy", cat: "N/A", pp: 1, effect: "Tapu-exclusive Z-move. Cuts opponent's HP by 75%.", wiki: "http://www.serebii.net/attackdex-sm/guardianofalola.shtml"},
 {id: "high horsepower", name: "High Horsepower", type: "Ground", cat: "Physical", power: 95, pp: 10, acc: 95, effect: "The user fiercely attacks the target using its entire body.", wiki: "http://www.serebii.net/attackdex-sm/highhorsepower.shtml"},
 {id: "hydro vortex", name: "Hydro Vortex", type: "Water", cat: "N/A", pp: 1, effect: "Water type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/hydrovortex.shtml"},
 {id: "ice hammer", name: "Ice Hammer", type: "Ice", cat: "Physical", power: 100, pp: 10, acc: 90, effect: "The user swings and hits with its strong, heavy fist. It lowers the user’s Speed, however.", wiki: "http://www.serebii.net/attackdex-sm/icehammer.shtml"},
 {id: "inferno overdrive", name: "Inferno Overdrive", type: "Fire", cat: "N/A", pp: 1, effect: "Fire type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/infernooverdrive.shtml"},
 {id: "instruct", name: "Instruct", type: "Psychic", cat: "Status", pp: 15, effect: "Allows an ally to use a move instead.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/instruct.shtml"},
 {id: "laser focus", name: "Laser Focus", type: "Normal", cat: "Status", pp: 30, effect: "User's next attack is guaranteed to result in a critical hit.", zeffect: "Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/laserfocus.shtml"},
 {id: "leafage", name: "Leafage", type: "Grass", cat: "Physical", power: 40, pp: 40, acc: 100, effect: "Strikes opponent with leaves.", wiki: "http://www.serebii.net/attackdex-sm/leafage.shtml"},
 {id: "liquidation", name: "Liquidation", type: "Water", cat: "Physical", power: 85, pp: 10, acc: 100, effect: "The user slams into the target using a full-force blast of water. This may also lower the target’s Defense stat.", wiki: "http://www.serebii.net/attackdex-sm/liquidation.shtml"},
 {id: "lunge", name: "Lunge", type: "Bug", cat: "Physical", power: 80, pp: 15, acc: 100, effect: "The user makes a lunge at the target, attacking with full force. This also lowers the target’s Attack stat.", wiki: "http://www.serebii.net/attackdex-sm/lunge.shtml"},
 {id: "malicious moonsault", name: "Malicious Moonsault", type: "Dark", cat: "Physical", power: 180, pp: 1, effect: "Incineroar-exclusive Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/maliciousmoonsault.shtml"},
 {id: "moongeist beam", name: "Moongeist Beam", type: "Ghost", cat: "Special", power: 100, pp: 5, acc: 100, effect: "Ignores the target's ability.", wiki: "http://www.serebii.net/attackdex-sm/moongeistbeam.shtml"},
 {id: "multi-attack", name: "Multi-Attack", type: "Normal", cat: "Physical", power: 90, pp: 10, acc: 100, effect: "Type matches user's current type.", wiki: "http://www.serebii.net/attackdex-sm/multi-attack.shtml"},
 {id: "natures madness", name: "Nature's Madness", type: "Fairy", cat: "Special", pp: 10, acc: 90, effect: "Halves the foe's HP.", wiki: "http://www.serebii.net/attackdex-sm/nature'smadness.shtml"},
 {id: "never-ending nightmare", name: "Never-ending Nightmare", type: "Ghost", cat: "N/A", pp: 1, effect: "Ghost type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/never-endingnightmare.shtml"},
 {id: "oceanic operetta", name: "Oceanic Operetta", type: "Water", cat: "Special", power: 195, pp: 1, effect: "Primarina-exclusive Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/oceanicoperetta.shtml"},
 {id: "pollen puff", name: "Pollen Puff", type: "Bug", cat: "Special", power: 90, pp: 15, acc: 100, effect: "The user attacks the enemy with a pollen puff that explodes. If the target is an ally, it gives the ally a pollen puff that restores its HP instead.", wiki: "http://www.serebii.net/attackdex-sm/pollenpuff.shtml"},
 {id: "power trip", name: "Power Trip", type: "Dark", cat: "Physical", power: 20, pp: 10, acc: 100, effect: "The user boasts its strength and attacks the target. The more the user’s stats are raised, the greater the move’s power.", wiki: "http://www.serebii.net/attackdex-sm/powertrip.shtml"},
 {id: "prismatic laser", name: "Prismatic Laser", type: "Psychic", cat: "Special", power: 160, pp: 10, acc: 100, effect: "The user shoots powerful lasers using the power of a prism. The user can’t move on the next turn.", wiki: "http://www.serebii.net/attackdex-sm/prismaticlaser.shtml"},
 {id: "psychic fangs", name: "Psychic Fangs", type: "Psychic", cat: "Physical", power: 85, pp: 10, acc: 100, effect: "The user bites the target with its psychic capabilities. This can also destroy Light Screen and Reflect.", wiki: "http://www.serebii.net/attackdex-sm/psychicfangs.shtml"},
 {id: "psychic terrain", name: "Psychic Terrain", type: "Psychic", cat: "Status", pp: 10, effect: "Prevents priority moves from being used for 5 turns.", zeffect: "Special Attack ↑", wiki: "http://www.serebii.net/attackdex-sm/psychicterrain.shtml"},
 {id: "pulverizing pancake", name: "Pulverizing Pancake", type: "Normal", cat: "Physical", power: 210, pp: 1, effect: "Snorlax-exclusive Normal type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/pulverizingpancake.shtml"},
 {id: "purify", name: "Purify", type: "Poison", cat: "Status", pp: 20, effect: "The user heals the target’s status condition. If the move succeeds, it also restores the user’s own HP.", zeffect: "All stats ↑", wiki: "http://www.serebii.net/attackdex-sm/purify.shtml"},
 {id: "revelation dance", name: "Revelation Dance", type: "Normal", cat: "Special", power: 90, pp: 15, acc: 100, effect: "Type changes based on Oricorio's form.", wiki: "http://www.serebii.net/attackdex-sm/revelationdance.shtml"},
 {id: "savage spin-out", name: "Savage Spin-out", type: "Bug", cat: "N/A", pp: 1, effect: "Bug type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/savagespin-out.shtml"},
 {id: "shadow bone", name: "Shadow Bone", type: "Ghost", cat: "Physical", power: 85, pp: 10, acc: 100, effect: "The user attacks by beating the target with a bone that contains a spirit. This may also lower the target’s Defense stat.", wiki: "http://www.serebii.net/attackdex-sm/shadowbone.shtml"},
 {id: "shattered psyche", name: "Shattered Psyche", type: "Psychic", cat: "N/A", pp: 1, effect: "Psychic type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/shatteredpsyche.shtml"},
 {id: "shell trap", name: "Shell Trap", type: "Fire", cat: "Special", power: 150, pp: 5, acc: 100, effect: "Deals more damage to opponent if hit by a Physical move.", wiki: "http://www.serebii.net/attackdex-sm/shelltrap.shtml"},
 {id: "shore up", name: "Shore Up", type: "Ground", cat: "Status", pp: 10, effect: "The user regains up to half of its max HP. It restores more HP in a sandstorm.", zeffect: "Remove user's stat debuffs", wiki: "http://www.serebii.net/attackdex-sm/shoreup.shtml"},
 {id: "sinister arrow raid", name: "Sinister Arrow Raid", type: "Ghost", cat: "Physical", power: 180, pp: 1, effect: "Decidueye-exclusive Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/sinisterarrowraid.shtml"},
 {id: "smart strike", name: "Smart Strike", type: "Steel", cat: "Physical", power: 70, pp: 10, effect: "The user stabs the target with a sharp horn. This attack never misses.", wiki: "http://www.serebii.net/attackdex-sm/smartstrike.shtml"},
 {id: "solar blade", name: "Solar Blade", type: "Grass", cat: "Physical", power: 125, pp: 10, acc: 100, effect: "Charges on first turn, attacks on second.", wiki: "http://www.serebii.net/attackdex-sm/solarblade.shtml"},
 {id: "soul-stealing 7-star strike", name: "Soul-Stealing 7-Star Strike", type: "Ghost", cat: "Physical", power: 195, pp: 1, effect: "Marshadow-exclusive Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/soul-stealing7-starstrike.shtml"},
 {id: "sparkling aria", name: "Sparkling Aria", type: "Water", cat: "Special", power: 90, pp: 10, acc: 100, effect: "Heals the burns of its target.", wiki: "http://www.serebii.net/attackdex-sm/sparklingaria.shtml"},
 {id: "spectral thief", name: "Spectral Thief", type: "Ghost", cat: "Physical", power: 90, pp: 10, acc: 100, effect: "The user hides in the target’s shadow, steals the target’s stat boosts, and then attacks.", wiki: "http://www.serebii.net/attackdex-sm/spectralthief.shtml"},
 {id: "speed swap", name: "Speed Swap", type: "Psychic", cat: "Status", pp: 10, effect: "The user exchanges Speed stats with the target.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/speedswap.shtml"},
 {id: "spirit shackle", name: "Spirit Shackle", type: "Ghost", cat: "Physical", power: 80, pp: 10, acc: 100, effect: "Prevents the opponent switching out.", wiki: "http://www.serebii.net/attackdex-sm/spiritshackle.shtml"},
 {id: "spotlight", name: "Spotlight", type: "Normal", cat: "Status", pp: 15, effect: "The user shines a spotlight on the target so that only the target will be attacked during the turn.", zeffect: "Special Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/spotlight.shtml"},
 {id: "stoked sparksurfer", name: "Stoked Sparksurfer", type: "Electric", cat: "Special", power: 175, pp: 1, effect: "Raichu-exclusive Electric type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/stokedsparksurfer.shtml"},
 {id: "stomping tantrum", name: "Stomping Tantrum", type: "Ground", cat: "Physical", power: 75, pp: 10, acc: 100, effect: "Driven by frustration, the user attacks the target. If the user’s previous move has failed, the power of this move doubles.", wiki: "http://www.serebii.net/attackdex-sm/stompingtantrum.shtml"},
 {id: "strength sap", name: "Strength Sap", type: "Grass", cat: "Status", pp: 10, acc: 100, effect: "The user restores its HP by the same amount as the target’s Attack stat. It also lowers the target’s Attack stat.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/strengthsap.shtml"},
 {id: "subzero slammer", name: "Subzero Slammer", type: "Ice", cat: "N/A", pp: 1, effect: "Ice type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/subzeroslammer.shtml"},
 {id: "sunsteel strike", name: "Sunsteel Strike", type: "Steel", cat: "Physical", power: 100, pp: 5, acc: 100, effect: "Ignores the target's ability.", wiki: "http://www.serebii.net/attackdex-sm/sunsteelstrike.shtml"},
 {id: "supersonic skystrike", name: "Supersonic Skystrike", type: "Flying", cat: "N/A", pp: 1, effect: "Flying type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/supersonicskystrike.shtml"},
 {id: "tearful look", name: "Tearful Look", type: "Normal", cat: "Status", pp: 20, effect: "The user gets teary eyed to make the target lose its combative spirit. This lowers the target’s Attack and Sp. Atk stats.", zeffect: "Defense ↑", wiki: "http://www.serebii.net/attackdex-sm/tearfullook.shtml"},
 {id: "tectonic rage", name: "Tectonic Rage", type: "Ground", cat: "N/A", pp: 1, effect: "Ground type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/tectonicrage.shtml"},
 {id: "throat chop", name: "Throat Chop", type: "Dark", cat: "Physical", power: 80, pp: 15, acc: 100, effect: "Prevents use of sound moves for two turns.", wiki: "http://www.serebii.net/attackdex-sm/throatchop.shtml"},
 {id: "toxic thread", name: "Toxic Thread", type: "Poison", cat: "N/A", pp: 20, acc: 100, effect: "The user shoots poisonous threads to poison the target and lower the target’s Speed stat.", zeffect: "Speed ↑", wiki: "http://www.serebii.net/attackdex-sm/toxicthread.shtml"},
 {id: "trop kick", name: "Trop Kick", type: "Grass", cat: "Physical", power: 70, pp: 15, acc: 100, effect: "Lowers opponent's Attack.", wiki: "http://www.serebii.net/attackdex-sm/tropkick.shtml"},
 {id: "twinkle tackle", name: "Twinkle Tackle", type: "Fairy", cat: "Status", pp: 1, effect: "Fairy type Z-Move.", wiki: "http://www.serebii.net/attackdex-sm/twinkletackle.shtml"},
 {id: "zing zap", name: "Zing Zap", type: "Electric", cat: "Physical", power: 80, pp: 10, acc: 100, effect: "A strong electric blast crashes down on the target, giving it an electric shock. This may also make the target flinch.", wiki: "http://www.serebii.net/attackdex-sm/zingzap.shtml"}];

var items = [{id: "ability capsule", name: "Ability Capsule", desc: "A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.", wiki: "http://www.serebii.net/itemdex/abilitycapsule.shtml"},
 {id: "ability urge", name: "Ability Urge", desc: "When used, it activates the Ability of an ally Pokémon.", wiki: "http://www.serebii.net/itemdex/abilityurge.shtml"},
 {id: "abomasite", name: "Abomasite", desc: "Enables Abomasnow to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/abomasite.shtml"},
 {id: "absolite", name: "Absolite", desc: "Enables Absol to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/absolite.shtml"},
 {id: "absorb bulb", name: "Absorb Bulb", desc: "A consumable bulb. If the holder is hit by a Water-type move, its Sp. Atk will rise.", wiki: "http://www.serebii.net/itemdex/absorbbulb.shtml"},
 {id: "adamant orb", name: "Adamant Orb", desc: "Increases the power of Dragon-​ and Steel-type moves when held by Dialga.", wiki: "http://www.serebii.net/itemdex/adamantorb.shtml"},
 {id: "adventure rules", name: "Adventure Rules", desc: "This book contains all the points a new Trainer needs to know on a journey. It was handmade by a kind friend.", wiki: "http://www.serebii.net/itemdex/adventurerules.shtml"},
 {id: "aerodactylite", name: "Aerodactylite", desc: "Enables Aerodactyl to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/aerodactylite.shtml"},
 {id: "aggronite", name: "Aggronite", desc: "Enables Aggron to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/aggronite.shtml"},
 {id: "aguav berry", name: "Aguav Berry", desc: "Restores HP if it's low, but may cause confusion.", wiki: "http://www.serebii.net/itemdex/aguavberry.shtml"},
 {id: "air balloon", name: "Air Balloon", desc: "When held by a Pokémon, the Pokémon will float into the air. When the holder is attacked, this item will burst.", wiki: "http://www.serebii.net/itemdex/airballoon.shtml"},
 {id: "alakazite", name: "Alakazite", desc: "Enables Alakazam to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/alakazite.shtml"},
 {id: "altarianite", name: "Altarianite", desc: "One of a variety of mysterious Mega Stones. Have Altaria hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/altarianite.shtml"},
 {id: "ampharosite", name: "Ampharosite", desc: "Enables Ampharos to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/ampharosite.shtml"},
 {id: "amulet coin", name: "Amulet Coin", desc: "An item to be held by a Pokémon. It doubles a battle’s prize money if the holding Pokémon joins in.", wiki: "http://www.serebii.net/itemdex/amuletcoin.shtml"},
 {id: "antidote", name: "Antidote", desc: "A spray-type medicine. It lifts the effect of poison from one Pokémon.", wiki: "http://www.serebii.net/itemdex/antidote.shtml"},
 {id: "apicot berry", name: "Apicot Berry", desc: "Raises Special Defense when HP is low.", wiki: "http://www.serebii.net/itemdex/apicotberry.shtml"},
 {id: "armor fossil", name: "Armor Fossil", desc: "A fossil from a prehistoric Pokémon that lived on the land. It appears to be part of a collar.", wiki: "http://www.serebii.net/itemdex/armorfossil.shtml"},
 {id: "aspear berry", name: "Aspear Berry", desc: "If held by a Pokémon, it defrosts it.", wiki: "http://www.serebii.net/itemdex/aspearberry.shtml"},
 {id: "audinite", name: "Audinite", desc: "One of a variety of mysterious Mega Stones. Have Audino hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/audinite.shtml"},
 {id: "awakening", name: "Awakening", desc: "A spray-type medicine. It awakens a Pokémon from the clutches of sleep.", wiki: "http://www.serebii.net/itemdex/awakening.shtml"},
 {id: "babiri berry", name: "Babiri Berry", desc: "Weakens a supereffective Steel-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/babiriberry.shtml"},
 {id: "balmmushroom", name: "Balmmushroom", desc: "A rare mushroom which gives off a nice fragrance. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/balmmushroom.shtml"},
 {id: "banettite", name: "Banettite", desc: "Enables Banette to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/banettite.shtml"},
 {id: "beedrillite", name: "Beedrillite", desc: "One of a variety of mysterious Mega Stones. Have Beedrill hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/beedrillite.shtml"},
 {id: "belue berry", name: "Belue Berry", desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/belueberry.shtml"},
 {id: "berry juice", name: "Berry Juice", desc: "A 100% pure juice made of Berries. It restores the HP of one Pokémon by just 20 points.", wiki: "http://www.serebii.net/itemdex/berryjuice.shtml"},
 {id: "big mushroom", name: "Big Mushroom", desc: "A large and rare mushroom. It is sought after by collectors.", wiki: "http://www.serebii.net/itemdex/bigmushroom.shtml"},
 {id: "big nugget", name: "Big Nugget", desc: "A big nugget of pure gold that gives off a lustrous gleam. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/bignugget.shtml"},
 {id: "big pearl", name: "Big Pearl", desc: "A quite-large pearl that sparkles in a pretty silver color. It can be sold at a high price to shops.", wiki: "http://www.serebii.net/itemdex/bigpearl.shtml"},
 {id: "big root", name: "Big Root", desc: "Recovers more HP from HP-stealing moves.", wiki: "http://www.serebii.net/itemdex/bigroot.shtml"},
 {id: "binding band", name: "Binding Band", desc: "A band that increases the power of binding moves when held.", wiki: "http://www.serebii.net/itemdex/bindingband.shtml"},
 {id: "black belt", name: "Black Belt", desc: "Increases the power of Fighting-type moves.", wiki: "http://www.serebii.net/itemdex/blackbelt.shtml"},
 {id: "black flute", name: "Black Flute", desc: "A toy flute made from black glass. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/blackflute.shtml"},
 {id: "black sludge", name: "Black Sludge", desc: "A held item that gradually restores the HP of Poison-type Pokémon. It inflicts damage on all other types.", wiki: "http://www.serebii.net/itemdex/blacksludge.shtml"},
 {id: "blackglasses", name: "Blackglasses", desc: "Increases the power of Dark-type moves.", wiki: "http://www.serebii.net/itemdex/blackglasses.shtml"},
 {id: "blastoisinite", name: "Blastoisinite", desc: "Enables Blastoise to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/blastoisinite.shtml"},
 {id: "blazikenite", name: "Blazikenite", desc: "Enables Blaziken to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/blazikenite.shtml"},
 {id: "blk apricorn", name: "Blk Apricorn", desc: "A black Apricorn It has an indescribable scent.", wiki: "http://www.serebii.net/itemdex/blkapricorn.shtml"},
 {id: "blu apricorn", name: "Blu Apricorn", desc: "A blue Apricorn. It smells a bit like grass.", wiki: "http://www.serebii.net/itemdex/bluapricorn.shtml"},
 {id: "blue flute", name: "Blue Flute", desc: "A toy flute made from blue glass. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/blueflute.shtml"},
 {id: "blue scarf", name: "Blue Scarf", desc: "Raises holder's Beauty aspect in a Contest.", wiki: "http://www.serebii.net/itemdex/bluescarf.shtml"},
 {id: "blue shard", name: "Blue Shard", desc: "A small blue shard. It appears to be from some sort of implement made long ago.", wiki: "http://www.serebii.net/itemdex/blueshard.shtml"},
 {id: "bluk berry", name: "Bluk Berry", desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/blukberry.shtml"},
 {id: "brightpowder", name: "Brightpowder", desc: "Lowers the opponent’s accuracy.", wiki: "http://www.serebii.net/itemdex/brightpowder.shtml"},
 {id: "bug gem", name: "Bug Gem", desc: "Increases the power of a Bug-type move only once.", wiki: "http://www.serebii.net/itemdex/buggem.shtml"},
 {id: "burn drive", name: "Burn Drive", desc: "Changes Techno Blast to a Fire-type move when held by Genesect.", wiki: "http://www.serebii.net/itemdex/burndrive.shtml"},
 {id: "burn heal", name: "Burn Heal", desc: "A spray-type medicine. It heals a single Pokémon that is suffering from a burn.", wiki: "http://www.serebii.net/itemdex/burnheal.shtml"},
 {id: "calcium", name: "Calcium", desc: "A nutritious drink for Pokémon. It raises the base Sp. Atk (Special Attack) stat of a single Pokémon.", wiki: "http://www.serebii.net/itemdex/calcium.shtml"},
 {id: "cameruptite", name: "Cameruptite", desc: "One of a variety of mysterious Mega Stones. Have Camerupt hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/cameruptite.shtml"},
 {id: "carbos", name: "Carbos", desc: "A nutritious drink for Pokémon. It raises the base Speed stat of a single Pokémon.", wiki: "http://www.serebii.net/itemdex/carbos.shtml"},
 {id: "casteliacone", name: "Casteliacone", desc: "Castelia City’s specialty, soft-serve ice cream. It heals all the status problems of a single Pokémon.", wiki: "http://www.serebii.net/itemdex/casteliacone.shtml"},
 {id: "cell battery", name: "Cell Battery", desc: "A consumable battery. If the holder is hit by an Electric-type move, its Attack will rise.", wiki: "http://www.serebii.net/itemdex/cellbattery.shtml"},
 {id: "charcoal", name: "Charcoal", desc: "Increases the power of Fire-type moves.", wiki: "http://www.serebii.net/itemdex/charcoal.shtml"},
 {id: "charizardite x", name: "Charizardite X", desc: "Enables Charizard to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/charizarditex.shtml"},
 {id: "charizardite y", name: "Charizardite Y", desc: "Enables Charizard to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/charizarditey.shtml"},
 {id: "charti berry", name: "Charti Berry", desc: "Weakens a supereffective Rock-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/chartiberry.shtml"},
 {id: "cheri berry", name: "Cheri Berry", desc: "If held by a Pokémon, it recovers from paralysis.", wiki: "http://www.serebii.net/itemdex/cheriberry.shtml"},
 {id: "cherish ball", name: "Cherish Ball", desc: "A quite rare Poké Ball that has been specially crafted to commemorate an occasion of some sort.", wiki: "http://www.serebii.net/itemdex/cherishball.shtml"},
 {id: "chesto berry", name: "Chesto Berry", desc: "If held by a Pokémon, it recovers from sleep.", wiki: "http://www.serebii.net/itemdex/chestoberry.shtml"},
 {id: "chilan berry", name: "Chilan Berry", desc: "Weakens a Normal-type attack against the Pokémon holding this berry.", wiki: "http://www.serebii.net/itemdex/chilanberry.shtml"},
 {id: "chill drive", name: "Chill Drive", desc: "Changes Techno Blast to an Ice-type move when held by Genesect.", wiki: "http://www.serebii.net/itemdex/chilldrive.shtml"},
 {id: "choice band", name: "Choice Band", desc: "Raises Attack, but only one move can be used.", wiki: "http://www.serebii.net/itemdex/choiceband.shtml"},
 {id: "choice scarf", name: "Choice Scarf", desc: "Raises Speed, but only one move can be used.", wiki: "http://www.serebii.net/itemdex/choicescarf.shtml"},
 {id: "choice specs", name: "Choice Specs", desc: "Raises Special Attack, but only one move can be used.", wiki: "http://www.serebii.net/itemdex/choicespecs.shtml"},
 {id: "chople berry", name: "Chople Berry", desc: "Weakens a supereffective Fighting-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/chopleberry.shtml"},
 {id: "claw fossil", name: "Claw Fossil", desc: "A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a claw.", wiki: "http://www.serebii.net/itemdex/clawfossil.shtml"},
 {id: "cleanse tag", name: "Cleanse Tag", desc: "An item to be held by a Pokémon. It helps keep wild Pokémon away if the holder is the first one in the party.", wiki: "http://www.serebii.net/itemdex/cleansetag.shtml"},
 {id: "clever wing", name: "Clever Wing", desc: "Increases Special Defense EVs by 1.", wiki: "http://www.serebii.net/itemdex/cleverwing.shtml"},
 {id: "coba berry", name: "Coba Berry", desc: "Weakens a supereffective Flying-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/cobaberry.shtml"},
 {id: "colbur berry", name: "Colbur Berry", desc: "Weakens a supereffective Dark-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/colburberry.shtml"},
 {id: "colress machine", name: "Colress Machine", desc: "A special device that wrings out the potential of Pokémon. It is an imperfect prototype.", wiki: "http://www.serebii.net/itemdex/colressmachine.shtml"},
 {id: "comet shard", name: "Comet Shard", desc: "A shard which fell to the ground when a comet approached. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/cometshard.shtml"},
 {id: "cornn berry", name: "Cornn Berry", desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/cornnberry.shtml"},
 {id: "cover fossil", name: "Cover Fossil", desc: "A fossil of an ancient Pokémon that lived in the sea in ancient times. It appears to be part of its back.", wiki: "http://www.serebii.net/itemdex/coverfossil.shtml"},
 {id: "custap berry", name: "Custap Berry", desc: "Holder can move first when HP is low.", wiki: "http://www.serebii.net/itemdex/custapberry.shtml"},
 {id: "damp mulch", name: "Damp Mulch", desc: "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/dampmulch.shtml"},
 {id: "damp rock", name: "Damp Rock", desc: "A Pokémon held item that extends the duration of the move Rain Dance used by the holder.", wiki: "http://www.serebii.net/itemdex/damprock.shtml"},
 {id: "dark gem", name: "Dark Gem", desc: "Increases the power of a Dark-type move only once.", wiki: "http://www.serebii.net/itemdex/darkgem.shtml"},
 {id: "dawn stone", name: "Dawn Stone", desc: "A peculiar stone that makes certain species of Pokémon evolve. It sparkles like eyes.", wiki: "http://www.serebii.net/itemdex/dawnstone.shtml"},
 {id: "deepseascale", name: "Deepseascale", desc: "Increases Special Defense when held by Clamperl.", wiki: "http://www.serebii.net/itemdex/deepseascale.shtml"},
 {id: "deepseatooth", name: "Deepseatooth", desc: "Increases Special Attack when held by Clamperl.", wiki: "http://www.serebii.net/itemdex/deepseatooth.shtml"},
 {id: "destiny knot", name: "Destiny Knot", desc: "A long, thin, bright-red string to be held by a Pokémon. If the holder becomes infatuated, the foe does too.", wiki: "http://www.serebii.net/itemdex/destinyknot.shtml"},
 {id: "diancite", name: "Diancite", desc: "One of a variety of mysterious Mega Stones. Have Diancie hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/diancite.shtml"},
 {id: "dire hit", name: "Dire Hit", desc: "Raises critical-hit ratio of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/direhit.shtml"},
 {id: "dire hit 2", name: "Dire Hit 2", desc: "It can be used many times to raise the critical-hit ratio of one Pokémon. It wears off if the Pokémon is withdrawn.", wiki: "http://www.serebii.net/itemdex/direhit2.shtml"},
 {id: "dire hit 3", name: "Dire Hit 3", desc: "It can be used many times to greatly raise a Pokémon’s critical-hit ratio. It wears off if the Pokémon is withdrawn.", wiki: "http://www.serebii.net/itemdex/direhit3.shtml"},
 {id: "dive ball", name: "Dive Ball", desc: "A somewhat different Poké Ball that works especially well on Pokémon that live underwater.", wiki: "http://www.serebii.net/itemdex/diveball.shtml"},
 {id: "dna splicers", name: "Dna Splicers", desc: "A splicer that fuses Kyurem and a certain Pokémon. They are said to have been one in the beginning.", wiki: "http://www.serebii.net/itemdex/dnasplicers.shtml"},
 {id: "dome fossil", name: "Dome Fossil", desc: "A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a shell.", wiki: "http://www.serebii.net/itemdex/domefossil.shtml"},
 {id: "douse drive", name: "Douse Drive", desc: "Changes Techno Blast to a Water-type move when held by Genesect.", wiki: "http://www.serebii.net/itemdex/dousedrive.shtml"},
 {id: "draco plate", name: "Draco Plate", desc: "Increases power of Dragon-type moves. Changes Arceus' type to Dragon.", wiki: "http://www.serebii.net/itemdex/dracoplate.shtml"},
 {id: "dragon fang", name: "Dragon Fang", desc: "Increases the power of Dragon-type moves.", wiki: "http://www.serebii.net/itemdex/dragonfang.shtml"},
 {id: "dragon gem", name: "Dragon Gem", desc: "Increases the power of a Dragon-type move only once.", wiki: "http://www.serebii.net/itemdex/dragongem.shtml"},
 {id: "dragon scale", name: "Dragon Scale", desc: "A thick and tough scale. Dragon-type Pokémon may be holding this item when caught.", wiki: "http://www.serebii.net/itemdex/dragonscale.shtml"},
 {id: "dread plate", name: "Dread Plate", desc: "Increases power of Dark-type moves. Changes Arceus' type to Dark.", wiki: "http://www.serebii.net/itemdex/dreadplate.shtml"},
 {id: "dream ball", name: "Dream Ball", desc: "A special Poké Ball that appears out of nowhere in a bag at the Entree Forest. It can catch any Pokémon.", wiki: "http://www.serebii.net/itemdex/dreamball.shtml"},
 {id: "dropped item", name: "Dropped Item", desc: "The Xtransceiver found at the Nimbasa City amusement park. It seems it belongs to a boy.", wiki: "http://www.serebii.net/itemdex/droppeditem.shtml"},
 {id: "dubious disc", name: "Dubious Disc", desc: "A transparent device overflowing with dubious data. Its producer is unknown.", wiki: "http://www.serebii.net/itemdex/dubiousdisc.shtml"},
 {id: "durin berry", name: "Durin Berry", desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/durinberry.shtml"},
 {id: "dusk ball", name: "Dusk Ball", desc: "A somewhat different Poké Ball that makes it easier to catch wild Pokémon at night or in dark places like caves.", wiki: "http://www.serebii.net/itemdex/duskball.shtml"},
 {id: "dusk stone", name: "Dusk Stone", desc: "A peculiar stone that makes certain species of Pokémon evolve. It is as dark as dark can be.", wiki: "http://www.serebii.net/itemdex/duskstone.shtml"},
 {id: "earth plate", name: "Earth Plate", desc: "Increases power of Ground-type moves. Changes Arceus' type to Ground.", wiki: "http://www.serebii.net/itemdex/earthplate.shtml"},
 {id: "eject button", name: "Eject Button", desc: "If the holder is hit by an attack, it will switch with another Pokémon in your party.", wiki: "http://www.serebii.net/itemdex/ejectbutton.shtml"},
 {id: "electirizer", name: "Electirizer", desc: "A box packed with a tremendous amount of electric energy. It is loved by a certain Pokémon.", wiki: "http://www.serebii.net/itemdex/electirizer.shtml"},
 {id: "electric gem", name: "Electric Gem", desc: "Increases the power of an Electric-type move only once.", wiki: "http://www.serebii.net/itemdex/electricgem.shtml"},
 {id: "elevator key", name: "Elevator Key", desc: "A card key that activates the elevator in Lysandre Labs. It is emblazoned with Team Flare’s logo.", wiki: "http://www.serebii.net/itemdex/elevatorkey.shtml"},
 {id: "elixir", name: "Elixir", desc: "It restores the PP of all the moves learned by the targeted Pokémon by 10 points each.", wiki: "http://www.serebii.net/itemdex/elixir.shtml"},
 {id: "energy root", name: "Energy Root", desc: "A very bitter root. It restores the HP of one POKéMON by 200 points.", wiki: "http://www.serebii.net/itemdex/energyroot.shtml"},
 {id: "energypowder", name: "Energypowder", desc: "A very bitter medicine powder. It restores the HP of one POKéMON by 50 points.", wiki: "http://www.serebii.net/itemdex/energypowder.shtml"},
 {id: "enigma berry", name: "Enigma Berry", desc: "If held by a Pokémon, it restores its HP if it is hit by any supereffective attack.", wiki: "http://www.serebii.net/itemdex/enigmaberry.shtml"},
 {id: "escape rope", name: "Escape Rope", desc: "A long, durable rope. Use it to escape instantly from a cave or a dungeon.", wiki: "http://www.serebii.net/itemdex/escaperope.shtml"},
 {id: "ether", name: "Ether", desc: "It restores the PP of a Pokémon’s selected move by a maximum of 10 points.", wiki: "http://www.serebii.net/itemdex/ether.shtml"},
 {id: "everstone", name: "Everstone", desc: "An item to be held by a Pokémon. The Pokémon holding this peculiar stone is prevented from evolving.", wiki: "http://www.serebii.net/itemdex/everstone.shtml"},
 {id: "eviolite", name: "Eviolite", desc: "A mysterious evolutionary lump. When held, it raises the Defense and Sp. Def of a Pokémon that can still evolve.", wiki: "http://www.serebii.net/itemdex/eviolite.shtml"},
 {id: "exp share", name: "Exp Share", desc: "An item to be held by a Pokémon. The holder gets a share of a battle’s Exp. Points without battling.", wiki: "http://www.serebii.net/itemdex/expshare.shtml"},
 {id: "expert belt", name: "Expert Belt", desc: "Increases the power of super-effective moves.", wiki: "http://www.serebii.net/itemdex/expertbelt.shtml"},
 {id: "fairy gem", name: "Fairy Gem", desc: "Increases the power of a Fairy-type move only once.", wiki: "http://www.serebii.net/itemdex/fairygem.shtml"},
 {id: "fast ball", name: "Fast Ball", desc: "A Poké Ball that makes it easier to catch Pokémon which are quick to run away.", wiki: "http://www.serebii.net/itemdex/fastball.shtml"},
 {id: "fighting gem", name: "Fighting Gem", desc: "Increases the power of a Fighting-type move only once.", wiki: "http://www.serebii.net/itemdex/fightinggem.shtml"},
 {id: "figy berry", name: "Figy Berry", desc: "Restores HP if it's low, but may cause confusion.", wiki: "http://www.serebii.net/itemdex/figyberry.shtml"},
 {id: "fire gem", name: "Fire Gem", desc: "Increases the power of a Fire-type move only once.", wiki: "http://www.serebii.net/itemdex/firegem.shtml"},
 {id: "fire stone", name: "Fire Stone", desc: "A peculiar stone that makes certain species of POKéMON evolve. It is colored orange.", wiki: "http://www.serebii.net/itemdex/firestone.shtml"},
 {id: "fist plate", name: "Fist Plate", desc: "Increases power of Fighting-type moves. Changes Arceus' type to Fighting.", wiki: "http://www.serebii.net/itemdex/fistplate.shtml"},
 {id: "flame orb", name: "Flame Orb", desc: "An item to be held by a Pokémon. It is a bizarre orb that inflicts a burn on the holder in battle.", wiki: "http://www.serebii.net/itemdex/flameorb.shtml"},
 {id: "flame plate", name: "Flame Plate", desc: "Increases power of Fire-type moves. Changes Arceus' type to Fire.", wiki: "http://www.serebii.net/itemdex/flameplate.shtml"},
 {id: "float stone", name: "Float Stone", desc: "A very light stone. It reduces the weight of a Pokémon when held.", wiki: "http://www.serebii.net/itemdex/floatstone.shtml"},
 {id: "fluffy tail", name: "Fluffy Tail", desc: "An item that attracts Pokémon. Use it to flee from any battle with a wild Pokémon.", wiki: "http://www.serebii.net/itemdex/fluffytail.shtml"},
 {id: "flying gem", name: "Flying Gem", desc: "Increases the power of a Flying-type move only once.", wiki: "http://www.serebii.net/itemdex/flyinggem.shtml"},
 {id: "focus band", name: "Focus Band", desc: "An item to be held by a Pokémon. The holder may endure a potential KO attack, leaving it with just 1 HP.", wiki: "http://www.serebii.net/itemdex/focusband.shtml"},
 {id: "focus sash", name: "Focus Sash", desc: "An item to be held by a Pokémon. If it has full HP, the holder will endure one potential KO attack, leaving 1 HP.", wiki: "http://www.serebii.net/itemdex/focussash.shtml"},
 {id: "fresh water", name: "Fresh Water", desc: "Water with a high mineral content. It restores the HP of one POKéMON by 50 points.", wiki: "http://www.serebii.net/itemdex/freshwater.shtml"},
 {id: "friend ball", name: "Friend Ball", desc: "A Poké Ball that makes caught Pokémon more friendly.", wiki: "http://www.serebii.net/itemdex/friendball.shtml"},
 {id: "full heal", name: "Full Heal", desc: "A spray-type medicine. It heals all the status problems of a single Pokémon.", wiki: "http://www.serebii.net/itemdex/fullheal.shtml"},
 {id: "full incense", name: "Full Incense", desc: "An item to be held by a Pokémon. It is an exotic-smelling incense that makes the holder bloated and slow moving.", wiki: "http://www.serebii.net/itemdex/fullincense.shtml"},
 {id: "full restore", name: "Full Restore", desc: "A medicine that fully restores the HP and heals any status problems of a single Pokémon.", wiki: "http://www.serebii.net/itemdex/fullrestore.shtml"},
 {id: "galladite", name: "Galladite", desc: "One of a variety of mysterious Mega Stones. Have Gallade hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/galladite.shtml"},
 {id: "ganlon berry", name: "Ganlon Berry", desc: "Raises Defense when HP is low.", wiki: "http://www.serebii.net/itemdex/ganlonberry.shtml"},
 {id: "garchompite", name: "Garchompite", desc: "Enables Garchomp to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/garchompite.shtml"},
 {id: "gardevoirite", name: "Gardevoirite", desc: "Enables Gardevoir to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/gardevoirite.shtml"},
 {id: "gengarite", name: "Gengarite", desc: "Enables Gengar to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/gengarite.shtml"},
 {id: "genius wing", name: "Genius Wing", desc: "Increases Special Attack EVs by 1.", wiki: "http://www.serebii.net/itemdex/geniuswing.shtml"},
 {id: "ghost gem", name: "Ghost Gem", desc: "Increases the power of a Ghost-type move only once.", wiki: "http://www.serebii.net/itemdex/ghostgem.shtml"},
 {id: "glalitite", name: "Glalitite", desc: "One of a variety of mysterious Mega Stones. Have Glalie hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/glalitite.shtml"},
 {id: "gooey mulch", name: "Gooey Mulch", desc: "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/gooeymulch.shtml"},
 {id: "grass gem", name: "Grass Gem", desc: "Increases the power of a Grass-type move only once.", wiki: "http://www.serebii.net/itemdex/grassgem.shtml"},
 {id: "great ball", name: "Great Ball", desc: "A good, high-performance Ball that provides a higher Pokémon catch rate than a standard Poké Ball.", wiki: "http://www.serebii.net/itemdex/greatball.shtml"},
 {id: "green scarf", name: "Green Scarf", desc: "Raises holder's Smart aspect in a Contest.", wiki: "http://www.serebii.net/itemdex/greenscarf.shtml"},
 {id: "green shard", name: "Green Shard", desc: "A small green shard. It appears to be from some sort of implement made long ago.", wiki: "http://www.serebii.net/itemdex/greenshard.shtml"},
 {id: "grepa berry", name: "Grepa Berry", desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base Sp. Def stat.", wiki: "http://www.serebii.net/itemdex/grepaberry.shtml"},
 {id: "grip claw", name: "Grip Claw", desc: "A Pokémon held item that extends the duration of multiturn attacks like Bind and Wrap.", wiki: "http://www.serebii.net/itemdex/gripclaw.shtml"},
 {id: "griseous orb", name: "Griseous Orb", desc: "Increases the power of Dragon- and Ghost-type moves when held by Giratina, and changes it to Origin Forme.", wiki: "http://www.serebii.net/itemdex/griseousorb.shtml"},
 {id: "grn apricorn", name: "Grn Apricorn", desc: "A green Apricorn. It has a mysterious, aromatic scent.", wiki: "http://www.serebii.net/itemdex/grnapricorn.shtml"},
 {id: "ground gem", name: "Ground Gem", desc: "Increases the power of a Ground-type move only once.", wiki: "http://www.serebii.net/itemdex/groundgem.shtml"},
 {id: "growth mulch", name: "Growth Mulch", desc: "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/growthmulch.shtml"},
 {id: "grubby hanky", name: "Grubby Hanky", desc: "A handkerchief dropped by a regular at Café Warehouse. It smells faintly like a Pokémon.", wiki: "http://www.serebii.net/itemdex/grubbyhanky.shtml"},
 {id: "guard spec", name: "Guard Spec", desc: "Prevents stat reduction for five turns.", wiki: "http://www.serebii.net/itemdex/guardspec.shtml"},
 {id: "gyaradosite", name: "Gyaradosite", desc: "Enables Gyarados to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/gyaradosite.shtml"},
 {id: "haban berry", name: "Haban Berry", desc: "Weakens a supereffective Dragon-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/habanberry.shtml"},
 {id: "hard stone", name: "Hard Stone", desc: "Increases the power of Rock-type moves.", wiki: "http://www.serebii.net/itemdex/hardstone.shtml"},
 {id: "heal ball", name: "Heal Ball", desc: "A remedial Poké Ball that restores the caught Pokémon’s HP and eliminates any status problem.", wiki: "http://www.serebii.net/itemdex/healball.shtml"},
 {id: "heal powder", name: "Heal Powder", desc: "A very bitter medicine powder. It heals all the status problems of a single Pokémon.", wiki: "http://www.serebii.net/itemdex/healpowder.shtml"},
 {id: "health wing", name: "Health Wing", desc: "Increases HP EVs by 1.", wiki: "http://www.serebii.net/itemdex/healthwing.shtml"},
 {id: "heart scale", name: "Heart Scale", desc: "A pretty, heart-shaped scale that is extremely rare. It glows faintly in the colors of the rainbow.", wiki: "http://www.serebii.net/itemdex/heartscale.shtml"},
 {id: "heat rock", name: "Heat Rock", desc: "A Pokémon held item that extends the duration of the move Sunny Day used by the holder.", wiki: "http://www.serebii.net/itemdex/heatrock.shtml"},
 {id: "heavy ball", name: "Heavy Ball", desc: "A Poké Ball for catching very heavy Pokémon.", wiki: "http://www.serebii.net/itemdex/heavyball.shtml"},
 {id: "helix fossil", name: "Helix Fossil", desc: "A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a seashell.", wiki: "http://www.serebii.net/itemdex/helixfossil.shtml"},
 {id: "heracronite", name: "Heracronite", desc: "Enables Heracross to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/heracronite.shtml"},
 {id: "hm01", name: "HM01", desc: "Teaches the move Cut.", wiki: "http://www.serebii.net/itemdex/hm01.shtml"},
 {id: "hm02", name: "HM02", desc: "Teaches the move Fly.", wiki: "http://www.serebii.net/itemdex/hm02.shtml"},
 {id: "hm03", name: "HM03", desc: "Teaches the move Surf.", wiki: "http://www.serebii.net/itemdex/hm03.shtml"},
 {id: "hm04", name: "HM04", desc: "Teaches the move Strength.", wiki: "http://www.serebii.net/itemdex/hm04.shtml"},
 {id: "hm05", name: "HM05", desc: "Teaches the move Flash/Defog/Whirlpool/Waterfall.", wiki: "http://www.serebii.net/itemdex/hm05.shtml"},
 {id: "hm06", name: "HM06", desc: "Teaches the move Whirlpool/Rock Smash/Dive.", wiki: "http://www.serebii.net/itemdex/hm06.shtml"},
 {id: "hm07", name: "HM07", desc: "Teaches the move Waterfall.", wiki: "http://www.serebii.net/itemdex/hm07.shtml"},
 {id: "hm08", name: "HM08", desc: "Teaches the move Dive/Rock Climb.", wiki: "http://www.serebii.net/itemdex/hm08.shtml"},
 {id: "holo caster", name: "Holo Caster", desc: "A device that allows users to receive and view hologram clips at any time. It is also used to chat with others.", wiki: "http://www.serebii.net/itemdex/holocaster.shtml"},
 {id: "hondew berry", name: "Hondew Berry", desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base Sp. Atk stat.", wiki: "http://www.serebii.net/itemdex/hondewberry.shtml"},
 {id: "honey", name: "Honey", desc: "A sweet honey with a lush aroma that attracts wild Pokémon when it is used in grass, caves, or on special trees.", wiki: "http://www.serebii.net/itemdex/honey.shtml"},
 {id: "honor of kalos", name: "Honor Of Kalos", desc: "A precious symbol that is awarded only to an individual who has done great things for the Kalos region.", wiki: "http://www.serebii.net/itemdex/honorofkalos.shtml"},
 {id: "houndoominite", name: "Houndoominite", desc: "Enables Houndoom to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/houndoominite.shtml"},
 {id: "hp up", name: "Hp Up", desc: "A nutritious drink for Pokémon. It raises the base HP of a single Pokémon.", wiki: "http://www.serebii.net/itemdex/hpup.shtml"},
 {id: "hyper potion", name: "Hyper Potion", desc: "A spray-type medicine for wounds. It restores the HP of one Pokémon by 200 points.", wiki: "http://www.serebii.net/itemdex/hyperpotion.shtml"},
 {id: "iapapa berry", name: "Iapapa Berry", desc: "Restores HP if it's low, but may cause confusion.", wiki: "http://www.serebii.net/itemdex/iapapaberry.shtml"},
 {id: "ice gem", name: "Ice Gem", desc: "Increases the power of an Ice-type move only once.", wiki: "http://www.serebii.net/itemdex/icegem.shtml"},
 {id: "ice heal", name: "Ice Heal", desc: "A spray-type medicine. It defrosts a Pokémon that has been frozen solid.", wiki: "http://www.serebii.net/itemdex/iceheal.shtml"},
 {id: "icicle plate", name: "Icicle Plate", desc: "Increases power of Ice-type moves. Changes Arceus' type to Ice.", wiki: "http://www.serebii.net/itemdex/icicleplate.shtml"},
 {id: "icy rock", name: "Icy Rock", desc: "A Pokémon held item that extends the duration of the move Hail used by the holder.", wiki: "http://www.serebii.net/itemdex/icyrock.shtml"},
 {id: "insect plate", name: "Insect Plate", desc: "Increases power of Bug-type moves. Changes Arceus' type to Bug.", wiki: "http://www.serebii.net/itemdex/insectplate.shtml"},
 {id: "intriguing stone", name: "Intriguing Stone", desc: "A rather curious stone that might appear to be valuable to some. It’s all in the eye of the beholder.", wiki: "http://www.serebii.net/itemdex/intriguingstone.shtml"},
 {id: "iron", name: "Iron", desc: "A nutritious drink for Pokémon. It raises the base Defense stat of a single Pokémon.", wiki: "http://www.serebii.net/itemdex/iron.shtml"},
 {id: "iron ball", name: "Iron Ball", desc: "A Pokémon held item that cuts Speed. It makes Flying-type and levitating holders susceptible to Ground moves.", wiki: "http://www.serebii.net/itemdex/ironball.shtml"},
 {id: "iron plate", name: "Iron Plate", desc: "Increases power of Steel-type moves. Changes Arceus' type to Steel.", wiki: "http://www.serebii.net/itemdex/ironplate.shtml"},
 {id: "item drop", name: "Item Drop", desc: "When used, it causes an ally Pokémon to drop a held item.", wiki: "http://www.serebii.net/itemdex/itemdrop.shtml"},
 {id: "item urge", name: "Item Urge", desc: "When used, it causes an ally Pokémon to use its held item.", wiki: "http://www.serebii.net/itemdex/itemurge.shtml"},
 {id: "jaboca berry", name: "Jaboca Berry", desc: "If held by a Pokémon and a physical attack lands, the attacker also takes damage.", wiki: "http://www.serebii.net/itemdex/jabocaberry.shtml"},
 {id: "kangaskhanite", name: "Kangaskhanite", desc: "Enables Kangaskhan to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/kangaskhanite.shtml"},
 {id: "kasib berry", name: "Kasib Berry", desc: "Weakens a supereffective Ghost-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/kasibberry.shtml"},
 {id: "kebia berry", name: "Kebia Berry", desc: "Weakens a supereffective Poison-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/kebiaberry.shtml"},
 {id: "kelpsy berry", name: "Kelpsy Berry", desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base Attack stat.", wiki: "http://www.serebii.net/itemdex/kelpsyberry.shtml"},
 {id: "kings rock", name: "Kings Rock", desc: "An item to be held by a Pokémon. When the holder inflicts damage, the target may flinch.", wiki: "http://www.serebii.net/itemdex/kingsrock.shtml"},
 {id: "lagging tail", name: "Lagging Tail", desc: "An item to be held by a Pokémon. It is tremendously heavy and makes the holder move slower than usual.", wiki: "http://www.serebii.net/itemdex/laggingtail.shtml"},
 {id: "lansat berry", name: "Lansat Berry", desc: "Increases critical-hit ratio when HP is low.", wiki: "http://www.serebii.net/itemdex/lansatberry.shtml"},
 {id: "latiasite", name: "Latiasite", desc: "One of a variety of mysterious Mega Stones. Have Latias hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/latiasite.shtml"},
 {id: "latiosite", name: "Latiosite", desc: "One of a variety of mysterious Mega Stones. Have Latios hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/latiosite.shtml"},
 {id: "lava cookie", name: "Lava Cookie", desc: "LAVARIDGE TOWN’s local specialty. It heals all the status problems of one POKéMON.", wiki: "http://www.serebii.net/itemdex/lavacookie.shtml"},
 {id: "lax incense", name: "Lax Incense", desc: "An item to be held by a Pokémon. The tricky aroma of this incense may make attacks miss the holder.", wiki: "http://www.serebii.net/itemdex/laxincense.shtml"},
 {id: "leaf stone", name: "Leaf Stone", desc: "A peculiar stone that makes certain species of POKéMON evolve. It has a leaf pattern.", wiki: "http://www.serebii.net/itemdex/leafstone.shtml"},
 {id: "leftovers", name: "Leftovers", desc: "An item to be held by a Pokémon. The holder’s HP is gradually restored during battle.", wiki: "http://www.serebii.net/itemdex/leftovers.shtml"},
 {id: "lemonade", name: "Lemonade", desc: "A very sweet drink. It restores the HP of one POKéMON by 80 points.", wiki: "http://www.serebii.net/itemdex/lemonade.shtml"},
 {id: "lens case", name: "Lens Case", desc: "A rather chic-looking case for carrying contact lenses.", wiki: "http://www.serebii.net/itemdex/lenscase.shtml"},
 {id: "leppa berry", name: "Leppa Berry", desc: "If held by a Pokémon, it restores a move’s PP by 10.", wiki: "http://www.serebii.net/itemdex/leppaberry.shtml"},
 {id: "level ball", name: "Level Ball", desc: "A Poké Ball for catching Pokémon that are a lower level than your own.", wiki: "http://www.serebii.net/itemdex/levelball.shtml"},
 {id: "liechi berry", name: "Liechi Berry", desc: "Raises Attack when HP is low.", wiki: "http://www.serebii.net/itemdex/liechiberry.shtml"},
 {id: "life orb", name: "Life Orb", desc: "Increases the power of moves, but loses HP each turn.", wiki: "http://www.serebii.net/itemdex/lifeorb.shtml"},
 {id: "light ball", name: "Light Ball", desc: "An item to be held by PIKACHU. It is a puzzling orb that raises the Attack and Sp. Atk stat.", wiki: "http://www.serebii.net/itemdex/lightball.shtml"},
 {id: "light clay", name: "Light Clay", desc: "A Pokémon held item that extends the duration of barrier moves like Light Screen and Reflect used by the holder.", wiki: "http://www.serebii.net/itemdex/lightclay.shtml"},
 {id: "looker ticket", name: "Looker Ticket", desc: "A ticket that was handmade by Looker. It’s decorated with a liberal amount of glittery paint.", wiki: "http://www.serebii.net/itemdex/lookerticket.shtml"},
 {id: "lopunnite", name: "Lopunnite", desc: "One of a variety of mysterious Mega Stones. Have Lopunny hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/lopunnite.shtml"},
 {id: "love ball", name: "Love Ball", desc: "Poké Ball for catching Pokémon that are the opposite gender of your Pokémon.", wiki: "http://www.serebii.net/itemdex/loveball.shtml"},
 {id: "lucarionite", name: "Lucarionite", desc: "Enables Lucario to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/lucarionite.shtml"},
 {id: "luck incense", name: "Luck Incense", desc: "An item to be held by a Pokémon. It doubles a battle’s prize money if the holding Pokémon joins in.", wiki: "http://www.serebii.net/itemdex/luckincense.shtml"},
 {id: "lucky egg", name: "Lucky Egg", desc: "An item to be held by a Pokémon. It is an egg filled with happiness that earns extra Exp. Points in battle.", wiki: "http://www.serebii.net/itemdex/luckyegg.shtml"},
 {id: "lucky punch", name: "Lucky Punch", desc: "Increases critical-hit ratio when held by Chansey.", wiki: "http://www.serebii.net/itemdex/luckypunch.shtml"},
 {id: "lum berry", name: "Lum Berry", desc: "If held by a Pokémon, it recovers from any status problem.", wiki: "http://www.serebii.net/itemdex/lumberry.shtml"},
 {id: "lure ball", name: "Lure Ball", desc: "A Poké Ball for catching Pokémon hooked by a Rod when fishing.", wiki: "http://www.serebii.net/itemdex/lureball.shtml"},
 {id: "lustrous orb", name: "Lustrous Orb", desc: "Increases the power of Dragon-​ and Water-type moves when held by Palkia.", wiki: "http://www.serebii.net/itemdex/lustrousorb.shtml"},
 {id: "luxury ball", name: "Luxury Ball", desc: "A comfortable Poké Ball that makes a caught wild Pokémon quickly grow friendly.", wiki: "http://www.serebii.net/itemdex/luxuryball.shtml"},
 {id: "macho brace", name: "Macho Brace", desc: "An item to be held by a Pokémon. It is a stiff and heavy brace that promotes strong growth but lowers Speed.", wiki: "http://www.serebii.net/itemdex/machobrace.shtml"},
 {id: "magmarizer", name: "Magmarizer", desc: "A box packed with a tremendous amount of magma energy. It is loved by a certain Pokémon.", wiki: "http://www.serebii.net/itemdex/magmarizer.shtml"},
 {id: "magnet", name: "Magnet", desc: "Increases the power of Electric-type moves.", wiki: "http://www.serebii.net/itemdex/magnet.shtml"},
 {id: "mago berry", name: "Mago Berry", desc: "Restores HP if it's low, but may cause confusion.", wiki: "http://www.serebii.net/itemdex/magoberry.shtml"},
 {id: "magost berry", name: "Magost Berry", desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/magostberry.shtml"},
 {id: "manectite", name: "Manectite", desc: "Enables Manectric to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/manectite.shtml"},
 {id: "master ball", name: "Master Ball", desc: "The best Ball with the ultimate level of performance. It will catch any wild Pokémon without fail.", wiki: "http://www.serebii.net/itemdex/masterball.shtml"},
 {id: "mawilite", name: "Mawilite", desc: "Enables Mawile to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/mawilite.shtml"},
 {id: "max elixir", name: "Max Elixir", desc: "It fully restores the PP of all the moves learned by the targeted Pokémon.", wiki: "http://www.serebii.net/itemdex/maxelixir.shtml"},
 {id: "max ether", name: "Max Ether", desc: "It fully restores the PP of a single selected move that has been learned by the target Pokémon.", wiki: "http://www.serebii.net/itemdex/maxether.shtml"},
 {id: "max potion", name: "Max Potion", desc: "A spray-type medicine for wounds. It completely restores the HP of a single Pokémon.", wiki: "http://www.serebii.net/itemdex/maxpotion.shtml"},
 {id: "max repel", name: "Max Repel", desc: "An item that prevents weak wild Pokémon from appearing for 250 steps after its use.", wiki: "http://www.serebii.net/itemdex/maxrepel.shtml"},
 {id: "max revive", name: "Max Revive", desc: "A medicine that revives a fainted Pokémon. It fully restores the Pokémon’s HP.", wiki: "http://www.serebii.net/itemdex/maxrevive.shtml"},
 {id: "meadow plate", name: "Meadow Plate", desc: "Increases power of Grass-type moves. Changes Arceus' type to Grass.", wiki: "http://www.serebii.net/itemdex/meadowplate.shtml"},
 {id: "medal box", name: "Medal Box", desc: "A box-shaped machine that stores Medals and Medal information.", wiki: "http://www.serebii.net/itemdex/medalbox.shtml"},
 {id: "medichamite", name: "Medichamite", desc: "Enables Medicham to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/medichamite.shtml"},
 {id: "mental herb", name: "Mental Herb", desc: "An item to be held by a Pokémon. It snaps the holder out of infatuation. It can be used only once.", wiki: "http://www.serebii.net/itemdex/mentalherb.shtml"},
 {id: "metagrossite", name: "Metagrossite", desc: "One of a variety of mysterious Mega Stones. Have Metagross hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/metagrossite.shtml"},
 {id: "metal coat", name: "Metal Coat", desc: "Increases the power of Steel-type moves.", wiki: "http://www.serebii.net/itemdex/metalcoat.shtml"},
 {id: "metal powder", name: "Metal Powder", desc: "Increases Defense when held by Ditto.", wiki: "http://www.serebii.net/itemdex/metalpowder.shtml"},
 {id: "metronome", name: "Metronome", desc: "Increases the power of moves used consecutively.", wiki: "http://www.serebii.net/itemdex/metronome.shtml"},
 {id: "mewtwonite x", name: "Mewtwonite X", desc: "Enables Mewtwo to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/mewtwonitex.shtml"},
 {id: "mewtwonite y", name: "Mewtwonite Y", desc: "Enables Mewtwo to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/mewtwonitey.shtml"},
 {id: "micle berry", name: "Micle Berry", desc: "Increases a move's accuracy when HP is low.", wiki: "http://www.serebii.net/itemdex/micleberry.shtml"},
 {id: "mind plate", name: "Mind Plate", desc: "Increases power of Psychic-type moves. Changes Arceus' type to Psychic.", wiki: "http://www.serebii.net/itemdex/mindplate.shtml"},
 {id: "miracle seed", name: "Miracle Seed", desc: "Increases the power of Grass-type moves.", wiki: "http://www.serebii.net/itemdex/miracleseed.shtml"},
 {id: "moomoo milk", name: "Moomoo Milk", desc: "Milk with a very high nutrition content. It restores the HP of one Pokémon by 100 points.", wiki: "http://www.serebii.net/itemdex/moomoomilk.shtml"},
 {id: "moon ball", name: "Moon Ball", desc: "A Poké Ball for catching Pokémon that evolve using the Moon Stone.", wiki: "http://www.serebii.net/itemdex/moonball.shtml"},
 {id: "moon stone", name: "Moon Stone", desc: "A peculiar stone that makes certain species of POKéMON evolve. It is as black as the night sky.", wiki: "http://www.serebii.net/itemdex/moonstone.shtml"},
 {id: "muscle band", name: "Muscle Band", desc: "Increases the power of Physical-category moves.", wiki: "http://www.serebii.net/itemdex/muscleband.shtml"},
 {id: "muscle wing", name: "Muscle Wing", desc: "Increases Attack EVs by 1.", wiki: "http://www.serebii.net/itemdex/musclewing.shtml"},
 {id: "mystic water", name: "Mystic Water", desc: "Increases the power of Water-type moves.", wiki: "http://www.serebii.net/itemdex/mysticwater.shtml"},
 {id: "nanab berry", name: "Nanab Berry", desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/nanabberry.shtml"},
 {id: "nest ball", name: "Nest Ball", desc: "A somewhat different Poké Ball that works especially well on weaker Pokémon in the wild.", wiki: "http://www.serebii.net/itemdex/nestball.shtml"},
 {id: "net ball", name: "Net Ball", desc: "A somewhat different Poké Ball that works especially well on Water- and Bug-type Pokémon.", wiki: "http://www.serebii.net/itemdex/netball.shtml"},
 {id: "nevermeltice", name: "Nevermeltice", desc: "Increases the power of Ice-type moves.", wiki: "http://www.serebii.net/itemdex/nevermeltice.shtml"},
 {id: "nomel berry", name: "Nomel Berry", desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/nomelberry.shtml"},
 {id: "normal gem", name: "Normal Gem", desc: "Increases the power of a Normal-type move only once.", wiki: "http://www.serebii.net/itemdex/normalgem.shtml"},
 {id: "nugget", name: "Nugget", desc: "A nugget of pure gold that gives off a lustrous gleam. It can be sold at a high price to shops.", wiki: "http://www.serebii.net/itemdex/nugget.shtml"},
 {id: "occa berry", name: "Occa Berry", desc: "Weakens a supereffective Fire-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/occaberry.shtml"},
 {id: "odd incense", name: "Odd Incense", desc: "Increases the power of Psychic-type moves.", wiki: "http://www.serebii.net/itemdex/oddincense.shtml"},
 {id: "odd keystone", name: "Odd Keystone", desc: "A vital item that is needed to keep a stone tower from collapsing. Voices can be heard from it occasionally.", wiki: "http://www.serebii.net/itemdex/oddkeystone.shtml"},
 {id: "old amber", name: "Old Amber", desc: "A piece of amber that contains the genetic material of an ancient Pokémon. It is clear with a reddish tint.", wiki: "http://www.serebii.net/itemdex/oldamber.shtml"},
 {id: "old gateau", name: "Old Gateau", desc: "Old Chateau’s hidden specialty. It heals all the status problems of a single Pokémon.", wiki: "http://www.serebii.net/itemdex/oldgateau.shtml"},
 {id: "oran berry", name: "Oran Berry", desc: "If held by a Pokémon, it heals the user by just 10 HP.", wiki: "http://www.serebii.net/itemdex/oranberry.shtml"},
 {id: "oval charm", name: "Oval Charm", desc: "An oval charm said to increase the chance of Pokémon Eggs being found at the Day Care.", wiki: "http://www.serebii.net/itemdex/ovalcharm.shtml"},
 {id: "oval stone", name: "Oval Stone", desc: "A peculiar stone that makes certain species of Pokémon evolve. It is shaped like an egg.", wiki: "http://www.serebii.net/itemdex/ovalstone.shtml"},
 {id: "pamtre berry", name: "Pamtre Berry", desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/pamtreberry.shtml"},
 {id: "park ball", name: "Park Ball", desc: "A special Poké Ball for the Pal Park.", wiki: "http://www.serebii.net/itemdex/parkball.shtml"},
 {id: "parlyz heal", name: "Parlyz Heal", desc: "A spray-type medicine. It eliminates paralysis from a single Pokémon.", wiki: "http://www.serebii.net/itemdex/parlyzheal.shtml"},
 {id: "pass orb", name: "Pass Orb", desc: "A mysterious orb containing the power of the Unova region, to be used when generating Pass Power.", wiki: "http://www.serebii.net/itemdex/passorb.shtml"},
 {id: "passho berry", name: "Passho Berry", desc: "Weakens a supereffective Water-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/passhoberry.shtml"},
 {id: "payapa berry", name: "Payapa Berry", desc: "Weakens a supereffective Psychic-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/payapaberry.shtml"},
 {id: "pearl", name: "Pearl", desc: "A somewhat-small pearl that sparkles in a pretty silver color. It can be sold cheaply to shops.", wiki: "http://www.serebii.net/itemdex/pearl.shtml"},
 {id: "pearl string", name: "Pearl String", desc: "Very large pearls that sparkle in a pretty silver color. A maniac will buy them for a high price.", wiki: "http://www.serebii.net/itemdex/pearlstring.shtml"},
 {id: "pecha berry", name: "Pecha Berry", desc: "If held by a Pokémon, it recovers from poison.", wiki: "http://www.serebii.net/itemdex/pechaberry.shtml"},
 {id: "permit", name: "Permit", desc: "A permit that is needed to enter the Nature Preserve. Not many know about it.", wiki: "http://www.serebii.net/itemdex/permit.shtml"},
 {id: "persim berry", name: "Persim Berry", desc: "If held by a Pokémon, it recovers from confusion.", wiki: "http://www.serebii.net/itemdex/persimberry.shtml"},
 {id: "petaya berry", name: "Petaya Berry", desc: "Raises Special Attack when HP is low.", wiki: "http://www.serebii.net/itemdex/petayaberry.shtml"},
 {id: "pidgeotite", name: "Pidgeotite", desc: "One of a variety of mysterious Mega Stones. Have Pidgeot hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/pidgeotite.shtml"},
 {id: "pinap berry", name: "Pinap Berry", desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/pinapberry.shtml"},
 {id: "pink scarf", name: "Pink Scarf", desc: "Raises holder's Cute aspect in a Contest.", wiki: "http://www.serebii.net/itemdex/pinkscarf.shtml"},
 {id: "pinsirite", name: "Pinsirite", desc: "Enables Pinsir to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/pinsirite.shtml"},
 {id: "pixie plate", name: "Pixie Plate", desc: "Increases power of Fairy-type moves. Changes Arceus' type to Fairy.", wiki: "http://www.serebii.net/itemdex/pixieplate.shtml"},
 {id: "plasma card", name: "Plasma Card", desc: "A card key needed to enter the password inside the Plasma Frigate.", wiki: "http://www.serebii.net/itemdex/plasmacard.shtml"},
 {id: "plume fossil", name: "Plume Fossil", desc: "A fossil of an ancient Pokémon that flew in the sky in ancient times. It appears to be part of its wing.", wiki: "http://www.serebii.net/itemdex/plumefossil.shtml"},
 {id: "pnk apricorn", name: "Pnk Apricorn", desc: "A pink Apricorn. It has a nice, sweet scent.", wiki: "http://www.serebii.net/itemdex/pnkapricorn.shtml"},
 {id: "poison barb", name: "Poison Barb", desc: "Increases the power of Poison-type moves.", wiki: "http://www.serebii.net/itemdex/poisonbarb.shtml"},
 {id: "poison gem", name: "Poison Gem", desc: "Increases the power of a Poison-type move only once.", wiki: "http://www.serebii.net/itemdex/poisongem.shtml"},
 {id: "poke ball", name: "Poké Ball", desc: "A device for catching wild Pokémon. It is thrown like a ball at the target. It is designed as a capsule system.", wiki: "http://www.serebii.net/itemdex/pokéball.shtml"},
 {id: "poke doll", name: "Poké Doll", desc: "A doll that attracts Pokémon. Use it to flee from any battle with a wild Pokémon.", wiki: "http://www.serebii.net/itemdex/pokédoll.shtml"},
 {id: "poke toy", name: "Poké Toy", desc: "An item that attracts Pokémon. Use it to flee from any battle with a wild Pokémon.", wiki: "http://www.serebii.net/itemdex/pokétoy.shtml"},
 {id: "pomeg berry", name: "Pomeg Berry", desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base HP.", wiki: "http://www.serebii.net/itemdex/pomegberry.shtml"},
 {id: "potion", name: "Potion", desc: "A spray-type medicine for wounds. It restores the HP of one Pokémon by just 20 points.", wiki: "http://www.serebii.net/itemdex/potion.shtml"},
 {id: "power anklet", name: "Power Anklet", desc: "A Pokémon held item that promotes Speed gain on leveling, but reduces the Speed stat.", wiki: "http://www.serebii.net/itemdex/poweranklet.shtml"},
 {id: "power band", name: "Power Band", desc: "A Pokémon held item that promotes Sp. Def gain on leveling, but reduces the Speed stat.", wiki: "http://www.serebii.net/itemdex/powerband.shtml"},
 {id: "power belt", name: "Power Belt", desc: "A Pokémon held item that promotes Defense gain on leveling, but reduces the Speed stat.", wiki: "http://www.serebii.net/itemdex/powerbelt.shtml"},
 {id: "power bracer", name: "Power Bracer", desc: "A Pokémon held item that promotes Attack gain on leveling, but reduces the Speed stat.", wiki: "http://www.serebii.net/itemdex/powerbracer.shtml"},
 {id: "power herb", name: "Power Herb", desc: "A single-use item to be held by a Pokémon. It allows the immediate use of a move that charges on the first turn.", wiki: "http://www.serebii.net/itemdex/powerherb.shtml"},
 {id: "power lens", name: "Power Lens", desc: "A Pokémon held item that promotes Sp. Atk gain on leveling, but reduces the Speed stat.", wiki: "http://www.serebii.net/itemdex/powerlens.shtml"},
 {id: "power plant pass", name: "Power Plant Pass", desc: "This pass serves as an ID card for gaining access to the power plant that lies along Route 13.", wiki: "http://www.serebii.net/itemdex/powerplantpass.shtml"},
 {id: "power weight", name: "Power Weight", desc: "A Pokémon held item that promotes HP gain on leveling, but reduces the Speed stat.", wiki: "http://www.serebii.net/itemdex/powerweight.shtml"},
 {id: "pp max", name: "PP Max", desc: "It maximally raises the top PP of a selected move that has been learned by the target Pokémon.", wiki: "http://www.serebii.net/itemdex/ppmax.shtml"},
 {id: "pp up", name: "PP Up", desc: "It slightly raises the maximum PP of a selected move that has been learned by the target Pokémon.", wiki: "http://www.serebii.net/itemdex/ppup.shtml"},
 {id: "premier ball", name: "Premier Ball", desc: "A somewhat rare Poké Ball that has been specially made to commemorate an event of some sort.", wiki: "http://www.serebii.net/itemdex/premierball.shtml"},
 {id: "pretty wing", name: "Pretty Wing", desc: "Though this feather is beautiful, it’s just a regular feather and has no effect on Pokémon.", wiki: "http://www.serebii.net/itemdex/prettywing.shtml"},
 {id: "prism scale", name: "Prism Scale", desc: "A mysterious scale that evolves certain Pokémon. It shines in rainbow colors.", wiki: "http://www.serebii.net/itemdex/prismscale.shtml"},
 {id: "prof's letter", name: "Prof's Letter", desc: "A letter that Professor Sycamore wrote to your mother. A faint but pleasant perfume seems to cling to the paper.", wiki: "http://www.serebii.net/itemdex/profsletter.shtml"},
 {id: "protector", name: "Protector", desc: "A protective item of some sort. It is extremely stiff and heavy. It is loved by a certain Pokémon.", wiki: "http://www.serebii.net/itemdex/protector.shtml"},
 {id: "protein", name: "Protein", desc: "A nutritious drink for Pokémon. It raises the base Attack stat of a single Pokémon.", wiki: "http://www.serebii.net/itemdex/protein.shtml"},
 {id: "psychic gem", name: "Psychic Gem", desc: "Increases the power of a Psychic-type move only once.", wiki: "http://www.serebii.net/itemdex/psychicgem.shtml"},
 {id: "pure incense", name: "Pure Incense", desc: "An item to be held by a Pokémon. It helps keep wild Pokémon away if the holder is the first one in the party.", wiki: "http://www.serebii.net/itemdex/pureincense.shtml"},
 {id: "qualot berry", name: "Qualot Berry", desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base Defense stat.", wiki: "http://www.serebii.net/itemdex/qualotberry.shtml"},
 {id: "quick ball", name: "Quick Ball", desc: "A somewhat different Poké Ball that provides a better catch rate if it is used at the start of a wild encounter.", wiki: "http://www.serebii.net/itemdex/quickball.shtml"},
 {id: "quick claw", name: "Quick Claw", desc: "An item to be held by a Pokémon. A light, sharp claw that lets the bearer move first occasionally.", wiki: "http://www.serebii.net/itemdex/quickclaw.shtml"},
 {id: "quick powder", name: "Quick Powder", desc: "Increases Speed when held by Ditto.", wiki: "http://www.serebii.net/itemdex/quickpowder.shtml"},
 {id: "rabuta berry", name: "Rabuta Berry", desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/rabutaberry.shtml"},
 {id: "rare bone", name: "Rare Bone", desc: "A bone that is extremely valuable for Pokémon archeology. It can be sold for a high price to shops.", wiki: "http://www.serebii.net/itemdex/rarebone.shtml"},
 {id: "rare candy", name: "Rare Candy", desc: "A candy that is packed with energy. It raises the level of a single Pokémon by one.", wiki: "http://www.serebii.net/itemdex/rarecandy.shtml"},
 {id: "rawst berry", name: "Rawst Berry", desc: "If held by a Pokémon, it recovers from a burn.", wiki: "http://www.serebii.net/itemdex/rawstberry.shtml"},
 {id: "razor claw", name: "Razor Claw", desc: "Increases critical-hit ratio.", wiki: "http://www.serebii.net/itemdex/razorclaw.shtml"},
 {id: "razor fang", name: "Razor Fang", desc: "An item to be held by a Pokémon. It may make foes and allies flinch when the holder inflicts damage.", wiki: "http://www.serebii.net/itemdex/razorfang.shtml"},
 {id: "razz berry", name: "Razz Berry", desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/razzberry.shtml"},
 {id: "reaper cloth", name: "Reaper Cloth", desc: "A cloth imbued with horrifyingly strong spiritual energy. It is loved by a certain Pokémon.", wiki: "http://www.serebii.net/itemdex/reapercloth.shtml"},
 {id: "red apricorn", name: "Red Apricorn", desc: "A red Apricorn. It assails your nostrils.", wiki: "http://www.serebii.net/itemdex/redapricorn.shtml"},
 {id: "red card", name: "Red Card", desc: "A card with a mysterious power. When the holder is struck by a foe, the attacker is removed from battle.", wiki: "http://www.serebii.net/itemdex/redcard.shtml"},
 {id: "red flute", name: "Red Flute", desc: "A toy flute made from red glass. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/redflute.shtml"},
 {id: "red scarf", name: "Red Scarf", desc: "Raises holder's Cool aspect in a Contest.", wiki: "http://www.serebii.net/itemdex/redscarf.shtml"},
 {id: "red shard", name: "Red Shard", desc: "A small red shard. It appears to be from some sort of implement made long ago.", wiki: "http://www.serebii.net/itemdex/redshard.shtml"},
 {id: "relic band", name: "Relic Band", desc: "A bracelet made in a civilization about 3,000 years ago. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/relicband.shtml"},
 {id: "relic copper", name: "Relic Copper", desc: "A copper coin used in a civilization about 3,000 years ago. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/reliccopper.shtml"},
 {id: "relic crown", name: "Relic Crown", desc: "A crown made in a civilization about 3,000 years ago. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/reliccrown.shtml"},
 {id: "relic gold", name: "Relic Gold", desc: "A gold coin used in a civilization about 3,000 years ago. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/relicgold.shtml"},
 {id: "relic silver", name: "Relic Silver", desc: "A silver coin used in a civilization about 3,000 years ago. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/relicsilver.shtml"},
 {id: "relic statue", name: "Relic Statue", desc: "A stone figure made in a civilization about 3,000 years ago. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/relicstatue.shtml"},
 {id: "relic vase", name: "Relic Vase", desc: "A vase made in a civilization about 3,000 years ago. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/relicvase.shtml"},
 {id: "repeat ball", name: "Repeat Ball", desc: "A somewhat different Poké Ball that works especially well on Pokémon species that were previously caught.", wiki: "http://www.serebii.net/itemdex/repeatball.shtml"},
 {id: "repel", name: "Repel", desc: "An item that prevents weak wild Pokémon from appearing for 100 steps after its use.", wiki: "http://www.serebii.net/itemdex/repel.shtml"},
 {id: "reset urge", name: "Reset Urge", desc: "When used, it restores any stat changes of an ally Pokémon.", wiki: "http://www.serebii.net/itemdex/reseturge.shtml"},
 {id: "resist wing", name: "Resist Wing", desc: "Increases Defense EVs by 1.", wiki: "http://www.serebii.net/itemdex/resistwing.shtml"},
 {id: "reveal glass", name: "Reveal Glass", desc: "A looking glass that reveals the truth. It’s a mysterious glass that returns a Pokémon to its original shape.", wiki: "http://www.serebii.net/itemdex/revealglass.shtml"},
 {id: "revival herb", name: "Revival Herb", desc: "A very bitter medicinal herb. It revives a fainted Pokémon, fully restoring its HP.", wiki: "http://www.serebii.net/itemdex/revivalherb.shtml"},
 {id: "revive", name: "Revive", desc: "A medicine that revives a fainted Pokémon. It restores half the Pokémon’s maximum HP.", wiki: "http://www.serebii.net/itemdex/revive.shtml"},
 {id: "rindo berry", name: "Rindo Berry", desc: "Weakens a supereffective Grass-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/rindoberry.shtml"},
 {id: "ring target", name: "Ring Target", desc: "Moves that would otherwise have no effect will land on the Pokémon that holds it.", wiki: "http://www.serebii.net/itemdex/ringtarget.shtml"},
 {id: "rock gem", name: "Rock Gem", desc: "Increases the power of a Rock-type move only once.", wiki: "http://www.serebii.net/itemdex/rockgem.shtml"},
 {id: "rock incense", name: "Rock Incense", desc: "Increases the power of Rock-type moves.", wiki: "http://www.serebii.net/itemdex/rockincense.shtml"},
 {id: "rocky helmet", name: "Rocky Helmet", desc: "If the holder of this item takes damage, the attacker will also be damaged upon contact.", wiki: "http://www.serebii.net/itemdex/rockyhelmet.shtml"},
 {id: "roller skates", name: "Roller Skates", desc: "Attaches roller skates to the bottom of your shoes, allowing you to glide quickly around and perform tricks.", wiki: "http://www.serebii.net/itemdex/rollerskates.shtml"},
 {id: "root fossil", name: "Root Fossil", desc: "A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a plant root.", wiki: "http://www.serebii.net/itemdex/rootfossil.shtml"},
 {id: "rose incense", name: "Rose Incense", desc: "Increases the power of Grass-type moves.", wiki: "http://www.serebii.net/itemdex/roseincense.shtml"},
 {id: "rowap berry", name: "Rowap Berry", desc: "If held by a Pokémon and a special attack lands, the attacker also takes damage.", wiki: "http://www.serebii.net/itemdex/rowapberry.shtml"},
 {id: "sablenite", name: "Sablenite", desc: "One of a variety of mysterious Mega Stones. Have Sableye hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/sablenite.shtml"},
 {id: "sacred ash", name: "Sacred Ash", desc: "It revives all fainted Pokémon. In doing so, it also fully restores their HP.", wiki: "http://www.serebii.net/itemdex/sacredash.shtml"},
 {id: "safari ball", name: "Safari Ball", desc: "A special Poké Ball that is used only in the Great Marsh. It is decorated in a camouflage pattern.", wiki: "http://www.serebii.net/itemdex/safariball.shtml"},
 {id: "salac berry", name: "Salac Berry", desc: "Raises Speed when HP is low.", wiki: "http://www.serebii.net/itemdex/salacberry.shtml"},
 {id: "salamencite", name: "Salamencite", desc: "One of a variety of mysterious Mega Stones. Have Salamence hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/salamencite.shtml"},
 {id: "sceptilite", name: "Sceptilite", desc: "One of a variety of mysterious Mega Stones. Have Sceptile hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/sceptilite.shtml"},
 {id: "scizorite", name: "Scizorite", desc: "Enables Scizor to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/scizorite.shtml"},
 {id: "scope lens", name: "Scope Lens", desc: "Increases critical-hit ratio.", wiki: "http://www.serebii.net/itemdex/scopelens.shtml"},
 {id: "sea incense", name: "Sea Incense", desc: "Increases the power of Water-type moves.", wiki: "http://www.serebii.net/itemdex/seaincense.shtml"},
 {id: "sharp beak", name: "Sharp Beak", desc: "Increases the power of Flying-type moves.", wiki: "http://www.serebii.net/itemdex/sharpbeak.shtml"},
 {id: "sharpedonite", name: "Sharpedonite", desc: "One of a variety of mysterious Mega Stones. Have Sharpedo hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/sharpedonite.shtml"},
 {id: "shed shell", name: "Shed Shell", desc: "A tough, discarded carapace to be held by a Pokémon. It enables the holder to switch with a waiting Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/shedshell.shtml"},
 {id: "shell bell", name: "Shell Bell", desc: "An item to be held by a Pokémon. The holder’s HP is restored a little every time it inflicts damage.", wiki: "http://www.serebii.net/itemdex/shellbell.shtml"},
 {id: "shiny charm", name: "Shiny Charm", desc: "A shiny charm said to increase the chance of finding a Shiny Pokémon in the wild.", wiki: "http://www.serebii.net/itemdex/shinycharm.shtml"},
 {id: "shiny stone", name: "Shiny Stone", desc: "A peculiar stone that makes certain species of Pokémon evolve. It shines with a dazzling light.", wiki: "http://www.serebii.net/itemdex/shinystone.shtml"},
 {id: "shoal salt", name: "Shoal Salt", desc: "Pure salt that can be discovered deep inside the Shoal Cave. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/shoalsalt.shtml"},
 {id: "shoal shell", name: "Shoal Shell", desc: "A pretty seashell that can be found deep inside the Shoal Cave. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/shoalshell.shtml"},
 {id: "shock drive", name: "Shock Drive", desc: "Changes Techno Blast to an Electric-type move when held by Genesect.", wiki: "http://www.serebii.net/itemdex/shockdrive.shtml"},
 {id: "shuca berry", name: "Shuca Berry", desc: "Weakens a supereffective Ground-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/shucaberry.shtml"},
 {id: "silk scarf", name: "Silk Scarf", desc: "Increases the power of Normal-type moves.", wiki: "http://www.serebii.net/itemdex/silkscarf.shtml"},
 {id: "silverpowder", name: "Silverpowder", desc: "Increases the power of Bug-type moves.", wiki: "http://www.serebii.net/itemdex/silverpowder.shtml"},
 {id: "sitrus berry", name: "Sitrus Berry", desc: "If held by a Pokémon, it heals the user’s HP a little.", wiki: "http://www.serebii.net/itemdex/sitrusberry.shtml"},
 {id: "skull fossil", name: "Skull Fossil", desc: "A fossil from a prehistoric Pokémon that lived on the land. It appears to be part of a head.", wiki: "http://www.serebii.net/itemdex/skullfossil.shtml"},
 {id: "sky plate", name: "Sky Plate", desc: "Increases power of Flying-type moves. Changes Arceus' type to Flying.", wiki: "http://www.serebii.net/itemdex/skyplate.shtml"},
 {id: "slowbronite", name: "Slowbronite", desc: "One of a variety of mysterious Mega Stones. Have Slowbro hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/slowbronite.shtml"},
 {id: "smoke ball", name: "Smoke Ball", desc: "An item to be held by a Pokémon. It enables the holder to flee from any wild Pokémon without fail.", wiki: "http://www.serebii.net/itemdex/smokeball.shtml"},
 {id: "smooth rock", name: "Smooth Rock", desc: "A Pokémon held item that extends the duration of the move Sandstorm used by the holder.", wiki: "http://www.serebii.net/itemdex/smoothrock.shtml"},
 {id: "soda pop", name: "Soda Pop", desc: "A fizzy soda drink. It restores the HP of one POKéMON by 60 points.", wiki: "http://www.serebii.net/itemdex/sodapop.shtml"},
 {id: "soft sand", name: "Soft Sand", desc: "Increases the power of Ground-type moves.", wiki: "http://www.serebii.net/itemdex/softsand.shtml"},
 {id: "soothe bell", name: "Soothe Bell", desc: "An item to be held by a Pokémon. It is a bell with a comforting chime that calms the holder and makes it friendly.", wiki: "http://www.serebii.net/itemdex/soothebell.shtml"},
 {id: "soul dew", name: "Soul Dew", desc: "Increases both Special Attack and Special Defense when held by Latios or Latias.", wiki: "http://www.serebii.net/itemdex/souldew.shtml"},
 {id: "spell tag", name: "Spell Tag", desc: "Increases the power of Ghost-type moves.", wiki: "http://www.serebii.net/itemdex/spelltag.shtml"},
 {id: "spelon berry", name: "Spelon Berry", desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/spelonberry.shtml"},
 {id: "splash plate", name: "Splash Plate", desc: "Increases power of Water-type moves. Changes Arceus' type to Water.", wiki: "http://www.serebii.net/itemdex/splashplate.shtml"},
 {id: "spooky plate", name: "Spooky Plate", desc: "Increases power of Ghost-type moves. Changes Arceus' type to Ghost.", wiki: "http://www.serebii.net/itemdex/spookyplate.shtml"},
 {id: "sport ball", name: "Sport Ball", desc: "A special Poké Ball for the Bug-Catching Contest.", wiki: "http://www.serebii.net/itemdex/sportball.shtml"},
 {id: "sprinklotad", name: "Sprinklotad", desc: "A watering can shaped like a Lotad. It helps promote the healthy growth of any Berries planted in good, soft soil.", wiki: "http://www.serebii.net/itemdex/sprinklotad.shtml"},
 {id: "stable mulch", name: "Stable Mulch", desc: "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/stablemulch.shtml"},
 {id: "star piece", name: "Star Piece", desc: "A shard of a pretty gem that sparkles in a red color. It can be sold at a high price to shops.", wiki: "http://www.serebii.net/itemdex/starpiece.shtml"},
 {id: "stardust", name: "Stardust", desc: "Lovely, red-colored sand with a loose, silky feel. It can be sold at a high price to shops.", wiki: "http://www.serebii.net/itemdex/stardust.shtml"},
 {id: "starf berry", name: "Starf Berry", desc: "Sharply raises a random stat when HP is low.", wiki: "http://www.serebii.net/itemdex/starfberry.shtml"},
 {id: "steel gem", name: "Steel Gem", desc: "Increases the power of a Steel-type move only once.", wiki: "http://www.serebii.net/itemdex/steelgem.shtml"},
 {id: "steelixite", name: "Steelixite", desc: "One of a variety of mysterious Mega Stones. Have Steelix hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/steelixite.shtml"},
 {id: "stick", name: "Stick", desc: "Increases critical-hit ratio when held by Farfetch'd.", wiki: "http://www.serebii.net/itemdex/stick.shtml"},
 {id: "sticky barb", name: "Sticky Barb", desc: "A held item that damages the holder on every turn. It may latch on to foes and allies that touch the holder.", wiki: "http://www.serebii.net/itemdex/stickybarb.shtml"},
 {id: "stone plate", name: "Stone Plate", desc: "Increases power of Rock-type moves. Changes Arceus' type to Rock.", wiki: "http://www.serebii.net/itemdex/stoneplate.shtml"},
 {id: "sun stone", name: "Sun Stone", desc: "A peculiar stone that makes certain species of POKéMON evolve. It is as red as the sun.", wiki: "http://www.serebii.net/itemdex/sunstone.shtml"},
 {id: "super potion", name: "Super Potion", desc: "A spray-type medicine for wounds. It restores the HP of one Pokémon by 50 points.", wiki: "http://www.serebii.net/itemdex/superpotion.shtml"},
 {id: "super repel", name: "Super Repel", desc: "An item that prevents weak wild Pokémon from appearing for 200 steps after its use.", wiki: "http://www.serebii.net/itemdex/superrepel.shtml"},
 {id: "swampertite", name: "Swampertite", desc: "One of a variety of mysterious Mega Stones. Have Swampert hold it, and this stone will enable it to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/swampertite.shtml"},
 {id: "sweet heart", name: "Sweet Heart", desc: "Very sweet chocolate. It restores the HP of one Pokémon by only 20 points.", wiki: "http://www.serebii.net/itemdex/sweetheart.shtml"},
 {id: "swift wing", name: "Swift Wing", desc: "Increases Speed EVs by 1.", wiki: "http://www.serebii.net/itemdex/swiftwing.shtml"},
 {id: "tamato berry", name: "Tamato Berry", desc: "Using it on a Pokémon makes it more friendly, but it also lowers its base Speed stat.", wiki: "http://www.serebii.net/itemdex/tamatoberry.shtml"},
 {id: "tanga berry", name: "Tanga Berry", desc: "Weakens a supereffective Bug-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/tangaberry.shtml"},
 {id: "thick club", name: "Thick Club", desc: "Increases Attack when held by Cubone or Marowak.", wiki: "http://www.serebii.net/itemdex/thickclub.shtml"},
 {id: "thunderstone", name: "Thunderstone", desc: "A peculiar stone that makes certain species of POKéMON evolve. It has a thunderbolt pattern.", wiki: "http://www.serebii.net/itemdex/thunderstone.shtml"},
 {id: "timer ball", name: "Timer Ball", desc: "A somewhat different BALL that becomes progressively better the more turns there are in a battle.", wiki: "http://www.serebii.net/itemdex/timerball.shtml"},
 {id: "tinymushroom", name: "Tinymushroom", desc: "A small and rare mushroom. It is sought after by collectors.", wiki: "http://www.serebii.net/itemdex/tinymushroom.shtml"},
 {id: "tm01", name: "TM01", desc: "Teaches the move Mega Punch/DynamicPunch/Focus Punch/Hone Claws.", wiki: "http://www.serebii.net/itemdex/tm01.shtml"},
 {id: "tm02", name: "TM02", desc: "Teaches the move Razor Wind/Headbutt/Dragon Claw.", wiki: "http://www.serebii.net/itemdex/tm02.shtml"},
 {id: "tm03", name: "TM03", desc: "Teaches the move Swords Dance/Curse/Water Pulse/Psyshock.", wiki: "http://www.serebii.net/itemdex/tm03.shtml"},
 {id: "tm04", name: "TM04", desc: "Teaches the move Whirlwind/Rollout/Calm Mind.", wiki: "http://www.serebii.net/itemdex/tm04.shtml"},
 {id: "tm05", name: "TM05", desc: "Teaches the move Mega Kick/Roar.", wiki: "http://www.serebii.net/itemdex/tm05.shtml"},
 {id: "tm06", name: "TM06", desc: "Teaches the move Toxic.", wiki: "http://www.serebii.net/itemdex/tm06.shtml"},
 {id: "tm07", name: "TM07", desc: "Teaches the move Horn Drill/Zap Cannon/Hail.", wiki: "http://www.serebii.net/itemdex/tm07.shtml"},
 {id: "tm08", name: "TM08", desc: "Teaches the move Body Slam/Rock Smash/Bulk Up.", wiki: "http://www.serebii.net/itemdex/tm08.shtml"},
 {id: "tm09", name: "TM09", desc: "Teaches the move Take Down/Psych Up/Bullet Seed/Venoshock.", wiki: "http://www.serebii.net/itemdex/tm09.shtml"},
 {id: "tm10", name: "TM10", desc: "Teaches the move Double-Edge/Hidden Power.", wiki: "http://www.serebii.net/itemdex/tm10.shtml"},
 {id: "tm100", name: "TM100", desc: "Teaches the move Confide.", wiki: "http://www.serebii.net/itemdex/tm100.shtml"},
 {id: "tm11", name: "TM11", desc: "Teaches the move BubbleBeam/Sunny Day.", wiki: "http://www.serebii.net/itemdex/tm11.shtml"},
 {id: "tm12", name: "TM12", desc: "Teaches the move Water Gun/Sweet Scent/Taunt.", wiki: "http://www.serebii.net/itemdex/tm12.shtml"},
 {id: "tm13", name: "TM13", desc: "Teaches the move Snore/Ice Beam.", wiki: "http://www.serebii.net/itemdex/tm13.shtml"},
 {id: "tm14", name: "TM14", desc: "Teaches the move Blizzard.", wiki: "http://www.serebii.net/itemdex/tm14.shtml"},
 {id: "tm15", name: "TM15", desc: "Teaches the move Hyper Beam.", wiki: "http://www.serebii.net/itemdex/tm15.shtml"},
 {id: "tm16", name: "TM16", desc: "Teaches the move Pay Day/Icy Wind/Light Screen.", wiki: "http://www.serebii.net/itemdex/tm16.shtml"},
 {id: "tm17", name: "TM17", desc: "Teaches the move Submission/Protect.", wiki: "http://www.serebii.net/itemdex/tm17.shtml"},
 {id: "tm18", name: "TM18", desc: "Teaches the move Counter/Rain Dance.", wiki: "http://www.serebii.net/itemdex/tm18.shtml"},
 {id: "tm19", name: "TM19", desc: "Teaches the move Seismic Toss/Giga Drain/Telekinesis/Roost.", wiki: "http://www.serebii.net/itemdex/tm19.shtml"},
 {id: "tm20", name: "TM20", desc: "Teaches the move Rage/Endure/Safeguard.", wiki: "http://www.serebii.net/itemdex/tm20.shtml"},
 {id: "tm21", name: "TM21", desc: "Teaches the move Mega Drain/Frustration.", wiki: "http://www.serebii.net/itemdex/tm21.shtml"},
 {id: "tm22", name: "TM22", desc: "Teaches the move SolarBeam.", wiki: "http://www.serebii.net/itemdex/tm22.shtml"},
 {id: "tm23", name: "TM23", desc: "Teaches the move Dragon Rage/Iron Tail/Smack Down.", wiki: "http://www.serebii.net/itemdex/tm23.shtml"},
 {id: "tm24", name: "TM24", desc: "Teaches the move Thunderbolt/DragonBreath.", wiki: "http://www.serebii.net/itemdex/tm24.shtml"},
 {id: "tm25", name: "TM25", desc: "Teaches the move Thunder.", wiki: "http://www.serebii.net/itemdex/tm25.shtml"},
 {id: "tm26", name: "TM26", desc: "Teaches the move Earthquake.", wiki: "http://www.serebii.net/itemdex/tm26.shtml"},
 {id: "tm27", name: "TM27", desc: "Teaches the move Fissure/Return.", wiki: "http://www.serebii.net/itemdex/tm27.shtml"},
 {id: "tm28", name: "TM28", desc: "Teaches the move Dig.", wiki: "http://www.serebii.net/itemdex/tm28.shtml"},
 {id: "tm29", name: "TM29", desc: "Teaches the move Psychic.", wiki: "http://www.serebii.net/itemdex/tm29.shtml"},
 {id: "tm30", name: "TM30", desc: "Teaches the move Teleport/Shadow Ball.", wiki: "http://www.serebii.net/itemdex/tm30.shtml"},
 {id: "tm31", name: "TM31", desc: "Teaches the move Mimic/Mud-Slap/Brick Break.", wiki: "http://www.serebii.net/itemdex/tm31.shtml"},
 {id: "tm32", name: "TM32", desc: "Teaches the move Double Team.", wiki: "http://www.serebii.net/itemdex/tm32.shtml"},
 {id: "tm33", name: "TM33", desc: "Teaches the move Ice Punch/Reflect.", wiki: "http://www.serebii.net/itemdex/tm33.shtml"},
 {id: "tm34", name: "TM34", desc: "Teaches the move Bide/Swagger/Shock Wave/Sludge Wave.", wiki: "http://www.serebii.net/itemdex/tm34.shtml"},
 {id: "tm35", name: "TM35", desc: "Teaches the move Metronome/Sleep Talk/Flamethrower.", wiki: "http://www.serebii.net/itemdex/tm35.shtml"},
 {id: "tm36", name: "TM36", desc: "Teaches the move Selfdestruct/Sludge Bomb.", wiki: "http://www.serebii.net/itemdex/tm36.shtml"},
 {id: "tm37", name: "TM37", desc: "Teaches the move Egg Bomb/Sandstorm.", wiki: "http://www.serebii.net/itemdex/tm37.shtml"},
 {id: "tm38", name: "TM38", desc: "Teaches the move Fire Blast.", wiki: "http://www.serebii.net/itemdex/tm38.shtml"},
 {id: "tm39", name: "TM39", desc: "Teaches the move Swift/Rock Tomb.", wiki: "http://www.serebii.net/itemdex/tm39.shtml"},
 {id: "tm40", name: "TM40", desc: "Teaches the move Skull Bash/Defense Curl/Aerial Ace.", wiki: "http://www.serebii.net/itemdex/tm40.shtml"},
 {id: "tm41", name: "TM41", desc: "Teaches the move Softboiled/ThunderPunch/Torment.", wiki: "http://www.serebii.net/itemdex/tm41.shtml"},
 {id: "tm42", name: "TM42", desc: "Teaches the move Dream Eater/Facade.", wiki: "http://www.serebii.net/itemdex/tm42.shtml"},
 {id: "tm43", name: "TM43", desc: "Teaches the move Sky Attack/Detect/Secret Power/Flame Charge.", wiki: "http://www.serebii.net/itemdex/tm43.shtml"},
 {id: "tm44", name: "TM44", desc: "Teaches the move Rest.", wiki: "http://www.serebii.net/itemdex/tm44.shtml"},
 {id: "tm45", name: "TM45", desc: "Teaches the move Thunder Wave/Attract.", wiki: "http://www.serebii.net/itemdex/tm45.shtml"},
 {id: "tm46", name: "TM46", desc: "Teaches the move Psywave/Thief.", wiki: "http://www.serebii.net/itemdex/tm46.shtml"},
 {id: "tm47", name: "TM47", desc: "Teaches the move Explosion/Steel Wing/Low Sweep.", wiki: "http://www.serebii.net/itemdex/tm47.shtml"},
 {id: "tm48", name: "TM48", desc: "Teaches the move Rock Slide/Fire Punch/Skill Swap/Round.", wiki: "http://www.serebii.net/itemdex/tm48.shtml"},
 {id: "tm49", name: "TM49", desc: "Teaches the move Tri Attack/Fury Cutter/Snatch/Echoed Voice.", wiki: "http://www.serebii.net/itemdex/tm49.shtml"},
 {id: "tm50", name: "TM50", desc: "Teaches the move Substitute/Nightmare/Overheat.", wiki: "http://www.serebii.net/itemdex/tm50.shtml"},
 {id: "tm51", name: "TM51", desc: "Teaches the move Roost/Ally Switch/Steel Wing.", wiki: "http://www.serebii.net/itemdex/tm51.shtml"},
 {id: "tm52", name: "TM52", desc: "Teaches the move Focus Blast.", wiki: "http://www.serebii.net/itemdex/tm52.shtml"},
 {id: "tm53", name: "TM53", desc: "Teaches the move Energy Ball.", wiki: "http://www.serebii.net/itemdex/tm53.shtml"},
 {id: "tm54", name: "TM54", desc: "Teaches the move False Swipe.", wiki: "http://www.serebii.net/itemdex/tm54.shtml"},
 {id: "tm55", name: "TM55", desc: "Teaches the move Brine/Scald.", wiki: "http://www.serebii.net/itemdex/tm55.shtml"},
 {id: "tm56", name: "TM56", desc: "Teaches the move Fling.", wiki: "http://www.serebii.net/itemdex/tm56.shtml"},
 {id: "tm57", name: "TM57", desc: "Teaches the move Charge Beam.", wiki: "http://www.serebii.net/itemdex/tm57.shtml"},
 {id: "tm58", name: "TM58", desc: "Teaches the move Endure/Sky Drop.", wiki: "http://www.serebii.net/itemdex/tm58.shtml"},
 {id: "tm59", name: "TM59", desc: "Teaches the move Dragon Pulse/Incinerate.", wiki: "http://www.serebii.net/itemdex/tm59.shtml"},
 {id: "tm60", name: "TM60", desc: "Teaches the move Drain Punch/Quash.", wiki: "http://www.serebii.net/itemdex/tm60.shtml"},
 {id: "tm61", name: "TM61", desc: "Teaches the move Will-O-Wisp.", wiki: "http://www.serebii.net/itemdex/tm61.shtml"},
 {id: "tm62", name: "TM62", desc: "Teaches the move Silver Wind/Acrobatics.", wiki: "http://www.serebii.net/itemdex/tm62.shtml"},
 {id: "tm63", name: "TM63", desc: "Teaches the move Embargo.", wiki: "http://www.serebii.net/itemdex/tm63.shtml"},
 {id: "tm64", name: "TM64", desc: "Teaches the move Explosion.", wiki: "http://www.serebii.net/itemdex/tm64.shtml"},
 {id: "tm65", name: "TM65", desc: "Teaches the move Shadow Claw.", wiki: "http://www.serebii.net/itemdex/tm65.shtml"},
 {id: "tm66", name: "TM66", desc: "Teaches the move Payback.", wiki: "http://www.serebii.net/itemdex/tm66.shtml"},
 {id: "tm67", name: "TM67", desc: "Teaches the move Recycle/Retaliate.", wiki: "http://www.serebii.net/itemdex/tm67.shtml"},
 {id: "tm68", name: "TM68", desc: "Teaches the move Giga Impact.", wiki: "http://www.serebii.net/itemdex/tm68.shtml"},
 {id: "tm69", name: "TM69", desc: "Teaches the move Rock Polish.", wiki: "http://www.serebii.net/itemdex/tm69.shtml"},
 {id: "tm70", name: "TM70", desc: "Teaches the move Flash.", wiki: "http://www.serebii.net/itemdex/tm70.shtml"},
 {id: "tm71", name: "TM71", desc: "Teaches the move Stone Edge.", wiki: "http://www.serebii.net/itemdex/tm71.shtml"},
 {id: "tm72", name: "TM72", desc: "Teaches the move Avalanche/Volt Switch.", wiki: "http://www.serebii.net/itemdex/tm72.shtml"},
 {id: "tm73", name: "TM73", desc: "Teaches the move Thunder Wave.", wiki: "http://www.serebii.net/itemdex/tm73.shtml"},
 {id: "tm74", name: "TM74", desc: "Teaches the move Gyro Ball.", wiki: "http://www.serebii.net/itemdex/tm74.shtml"},
 {id: "tm75", name: "TM75", desc: "Teaches the move Swords Dance.", wiki: "http://www.serebii.net/itemdex/tm75.shtml"},
 {id: "tm76", name: "TM76", desc: "Teaches the move Stealth Rock/Struggle Bug.", wiki: "http://www.serebii.net/itemdex/tm76.shtml"},
 {id: "tm77", name: "TM77", desc: "Teaches the move Psych Up.", wiki: "http://www.serebii.net/itemdex/tm77.shtml"},
 {id: "tm78", name: "TM78", desc: "Teaches the move Captivate/Bulldoze.", wiki: "http://www.serebii.net/itemdex/tm78.shtml"},
 {id: "tm79", name: "TM79", desc: "Teaches the move Dark Pulse/Frost Breath.", wiki: "http://www.serebii.net/itemdex/tm79.shtml"},
 {id: "tm80", name: "TM80", desc: "Teaches the move Rock Slide.", wiki: "http://www.serebii.net/itemdex/tm80.shtml"},
 {id: "tm81", name: "TM81", desc: "Teaches the move X-Scissor.", wiki: "http://www.serebii.net/itemdex/tm81.shtml"},
 {id: "tm82", name: "TM82", desc: "Teaches the move Sleep Talk/Dragon Tail.", wiki: "http://www.serebii.net/itemdex/tm82.shtml"},
 {id: "tm83", name: "TM83", desc: "Teaches the move Natural Gift/Work Up/Infestation.", wiki: "http://www.serebii.net/itemdex/tm83.shtml"},
 {id: "tm84", name: "TM84", desc: "Teaches the move Poison Jab.", wiki: "http://www.serebii.net/itemdex/tm84.shtml"},
 {id: "tm85", name: "TM85", desc: "Teaches the move Dream Eater.", wiki: "http://www.serebii.net/itemdex/tm85.shtml"},
 {id: "tm86", name: "TM86", desc: "Teaches the move Grass Knot.", wiki: "http://www.serebii.net/itemdex/tm86.shtml"},
 {id: "tm87", name: "TM87", desc: "Teaches the move Swagger.", wiki: "http://www.serebii.net/itemdex/tm87.shtml"},
 {id: "tm88", name: "TM88", desc: "Teaches the move Pluck/Sleep Talk.", wiki: "http://www.serebii.net/itemdex/tm88.shtml"},
 {id: "tm89", name: "TM89", desc: "Teaches the move U-turn.", wiki: "http://www.serebii.net/itemdex/tm89.shtml"},
 {id: "tm90", name: "TM90", desc: "Teaches the move Substitute.", wiki: "http://www.serebii.net/itemdex/tm90.shtml"},
 {id: "tm91", name: "TM91", desc: "Teaches the move Flash Cannon.", wiki: "http://www.serebii.net/itemdex/tm91.shtml"},
 {id: "tm92", name: "TM92", desc: "Teaches the move Trick Room.", wiki: "http://www.serebii.net/itemdex/tm92.shtml"},
 {id: "tm93", name: "TM93", desc: "Teaches the move Wild Charge.", wiki: "http://www.serebii.net/itemdex/tm93.shtml"},
 {id: "tm94", name: "TM94", desc: "Teaches the move Rock Smash.", wiki: "http://www.serebii.net/itemdex/tm94.shtml"},
 {id: "tm95", name: "TM95", desc: "Teaches the move Snarl.", wiki: "http://www.serebii.net/itemdex/tm95.shtml"},
 {id: "tm96", name: "TM96", desc: "Teaches the move Nature Power.", wiki: "http://www.serebii.net/itemdex/tm96.shtml"},
 {id: "tm97", name: "TM97", desc: "Teaches the move Dark Pulse.", wiki: "http://www.serebii.net/itemdex/tm97.shtml"},
 {id: "tm98", name: "TM98", desc: "Teaches the move Power-Up Punch.", wiki: "http://www.serebii.net/itemdex/tm98.shtml"},
 {id: "tm99", name: "TM99", desc: "Teaches the move Dazzling Gleam.", wiki: "http://www.serebii.net/itemdex/tm99.shtml"},
 {id: "tmv pass", name: "TMv Pass", desc: "A commuter pass that allows the holder to ride the TMV between Lumiose City and Kiloude City at any time.", wiki: "http://www.serebii.net/itemdex/tmvpass.shtml"},
 {id: "toxic orb", name: "Toxic Orb", desc: "An item to be held by a Pokémon. It is a bizarre orb that badly poisons the holder in battle.", wiki: "http://www.serebii.net/itemdex/toxicorb.shtml"},
 {id: "toxic plate", name: "Toxic Plate", desc: "Increases power of Poison-type moves. Changes Arceus' type to Poison.", wiki: "http://www.serebii.net/itemdex/toxicplate.shtml"},
 {id: "twistedspoon", name: "Twistedspoon", desc: "Increases the power of Psychic-type moves.", wiki: "http://www.serebii.net/itemdex/twistedspoon.shtml"},
 {id: "tyranitarite", name: "Tyranitarite", desc: "Enables Tyranitar to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/tyranitarite.shtml"},
 {id: "ultra ball", name: "Ultra Ball", desc: "An ultra-performance Ball that provides a higher Pokémon catch rate than a Great Ball.", wiki: "http://www.serebii.net/itemdex/ultraball.shtml"},
 {id: "up-grade", name: "Up-Grade", desc: "A transparent device filled with all sorts of data. It was produced by Silph Co.", wiki: "http://www.serebii.net/itemdex/up-grade.shtml"},
 {id: "venusaurite", name: "Venusaurite", desc: "Enables Venusaur to Mega Evolve during battle.", wiki: "http://www.serebii.net/itemdex/venusaurite.shtml"},
 {id: "wacan berry", name: "Wacan Berry", desc: "Weakens a supereffective Electric-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/wacanberry.shtml"},
 {id: "water gem", name: "Water Gem", desc: "Increases the power of a Water-type move only once.", wiki: "http://www.serebii.net/itemdex/watergem.shtml"},
 {id: "water stone", name: "Water Stone", desc: "A peculiar stone that makes certain species of Pokémon evolve. It is a clear, light blue.", wiki: "http://www.serebii.net/itemdex/waterstone.shtml"},
 {id: "watmel berry", name: "Watmel Berry", desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/watmelberry.shtml"},
 {id: "wave incense", name: "Wave Incense", desc: "Increases the power of Water-type moves.", wiki: "http://www.serebii.net/itemdex/waveincense.shtml"},
 {id: "wepear berry", name: "Wepear Berry", desc: "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/wepearberry.shtml"},
 {id: "white flute", name: "White Flute", desc: "A toy flute made from white glass. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/whiteflute.shtml"},
 {id: "white herb", name: "White Herb", desc: "An item to be held by a POKéMON. It restores any lowered stat in battle. It can be used only once.", wiki: "http://www.serebii.net/itemdex/whiteherb.shtml"},
 {id: "wht apricorn", name: "Wht Apricorn", desc: "A white Apricorn. It doesn’t smell like anything.", wiki: "http://www.serebii.net/itemdex/whtapricorn.shtml"},
 {id: "wide lens", name: "Wide Lens", desc: "Increases the accuracy of moves.", wiki: "http://www.serebii.net/itemdex/widelens.shtml"},
 {id: "wiki berry", name: "Wiki Berry", desc: "Restores HP if it's low, but may cause confusion.", wiki: "http://www.serebii.net/itemdex/wikiberry.shtml"},
 {id: "wise glasses", name: "Wise Glasses", desc: "Increases the power of Special-category moves.", wiki: "http://www.serebii.net/itemdex/wiseglasses.shtml"},
 {id: "x accuracy", name: "X Accuracy", desc: "Raises Accuracy of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xaccuracy.shtml"},
 {id: "x accuracy 2", name: "X Accuracy 2", desc: "Sharply raises Accuracy of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xaccuracy2.shtml"},
 {id: "x accuracy 3", name: "X Accuracy 3", desc: "Drastically raises Accuracy of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xaccuracy3.shtml"},
 {id: "x accuracy 6", name: "X Accuracy 6", desc: "Immensely raises Accuracy of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xaccuracy6.shtml"},
 {id: "x attack", name: "X Attack", desc: "Raises Attack of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xattack.shtml"},
 {id: "x attack 2", name: "X Attack 2", desc: "Sharply raises Attack of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xattack2.shtml"},
 {id: "x attack 3", name: "X Attack 3", desc: "Drastically raises Attack of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xattack3.shtml"},
 {id: "x attack 6", name: "X Attack 6", desc: "Immensely raises Attack of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xattack6.shtml"},
 {id: "x defend", name: "X Defend", desc: "Raises Defense of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xdefend.shtml"},
 {id: "x defend 2", name: "X Defend 2", desc: "Sharply raises Defense of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xdefend2.shtml"},
 {id: "x defend 3", name: "X Defend 3", desc: "Drastically raises Defense of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xdefend3.shtml"},
 {id: "x defend 6", name: "X Defend 6", desc: "Immensely raises Defense of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xdefend6.shtml"},
 {id: "x sp def", name: "X Sp Def", desc: "Raises Special Defense of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xspdef.shtml"},
 {id: "x sp def 2", name: "X Sp Def 2", desc: "Sharply raises Special Defense of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xspdef2.shtml"},
 {id: "x sp def 3", name: "X Sp Def 3", desc: "Drastically raises Special Defense of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xspdef3.shtml"},
 {id: "x sp def 6", name: "X Sp Def 6", desc: "Immensely raises Special Defense of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xspdef6.shtml"},
 {id: "x special", name: "X Special", desc: "Raises Special Attack of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xspecial.shtml"},
 {id: "x special 2", name: "X Special 2", desc: "Sharply raises Special Attack of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xspecial2.shtml"},
 {id: "x special 3", name: "X Special 3", desc: "Drastically raises Special Attack of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xspecial3.shtml"},
 {id: "x special 6", name: "X Special 6", desc: "Immensely raises Special Attack of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xspecial6.shtml"},
 {id: "x speed", name: "X Speed", desc: "Raises Speed of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xspeed.shtml"},
 {id: "x speed 2", name: "X Speed 2", desc: "Sharply raises Speed of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xspeed2.shtml"},
 {id: "x speed 3", name: "X Speed 3", desc: "Drastically raises Speed of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xspeed3.shtml"},
 {id: "x speed 6", name: "X Speed 6", desc: "Immensely raises Speed of a Pokémon in battle.", wiki: "http://www.serebii.net/itemdex/xspeed6.shtml"},
 {id: "yache berry", name: "Yache Berry", desc: "Weakens a supereffective Ice-type attack against the holding Pokémon.", wiki: "http://www.serebii.net/itemdex/yacheberry.shtml"},
 {id: "yellow flute", name: "Yellow Flute", desc: "A toy flute made from yellow glass. A maniac will buy it for a high price.", wiki: "http://www.serebii.net/itemdex/yellowflute.shtml"},
 {id: "yellow scarf", name: "Yellow Scarf", desc: "Raises holder's Tough aspect in a Contest.", wiki: "http://www.serebii.net/itemdex/yellowscarf.shtml"},
 {id: "yellow shard", name: "Yellow Shard", desc: "A small yellow shard. It appears to be from some sort of implement made long ago.", wiki: "http://www.serebii.net/itemdex/yellowshard.shtml"},
 {id: "ylw apricorn", name: "Ylw Apricorn", desc: "A yellow Apricorn. It has an invigorating scent.", wiki: "http://www.serebii.net/itemdex/ylwapricorn.shtml"},
 {id: "zap plate", name: "Zap Plate", desc: "Increases power of Electric-type moves. Changes Arceus' type to Electric.", wiki: "http://www.serebii.net/itemdex/zapplate.shtml"},
 {id: "zinc", name: "Zinc", desc: "A nutritious drink for Pokémon. It raises the base Sp. Def (Special Defense) stat of a single Pokémon.", wiki: "http://www.serebii.net/itemdex/zinc.shtml"},
 {id: "zoom lens", name: "Zoom Lens", desc: "Raises a move's accuracy if the holder moves after its target.", wiki: "http://www.serebii.net/itemdex/zoomlens.shtml"},
 {id: "normalium z", name: "Normalium Z", desc: "It converts Z-Power into crystals that upgrade Normal-type moves to Normal-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/normaliumz.shtml"},
 {id: "firium z", name: "Firium Z", desc: "It converts Z-Power into crystals that upgrade Fire-type moves to Fire-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/firiumz.shtml"},
 {id: "waterium z", name: "Waterium Z", desc: "It converts Z-Power into crystals that upgrade Water-type moves to Water-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/wateriumz.shtml"},
 {id: "electrium z", name: "Electrium Z", desc: "It converts Z-Power into crystals that upgrade Electric-type moves to Electric-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/electriumz.shtml"},
 {id: "grassium z", name: "Grassium Z", desc: "It converts Z-Power into crystals that upgrade Grass-type moves to Grass-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/grassiumz.shtml"},
 {id: "icium z", name: "Icium Z", desc: "It converts Z-Power into crystals that upgrade Ice-type moves to Ice-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/iciumz.shtml"},
 {id: "fightinium z", name: "Fightinium Z", desc: "It converts Z-Power into crystals that upgrade Fighting-type moves to Fighting-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/fightiniumz.shtml"},
 {id: "poisonium z", name: "Poisonium Z", desc: "It converts Z-Power into crystals that upgrade Poison-type moves to Poison-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/poisoniumz.shtml"},
 {id: "groundium z", name: "Groundium Z", desc: "It converts Z-Power into crystals that upgrade Ground-type moves to Ground-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/groundiumz.shtml"},
 {id: "flyinium z", name: "Flyinium Z", desc: "It converts Z-Power into crystals that upgrade Flying-type moves to Flying-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/flyiniumz.shtml"},
 {id: "psychium z", name: "Psychium Z", desc: "It converts Z-Power into crystals that upgrade Psychic-type moves to Psychic-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/psychiumz.shtml"},
 {id: "buginium z", name: "Buginium Z", desc: "It converts Z-Power into crystals that upgrade Bug-type moves to Bug-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/buginiumz.shtml"},
 {id: "rockium z", name: "Rockium Z", desc: "It converts Z-Power into crystals that upgrade Rock-type moves to Rock-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/rockiumz.shtml"},
 {id: "ghostium z", name: "Ghostium Z", desc: "It converts Z-Power into crystals that upgrade Ghost-type moves to Ghost-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/ghostiumz.shtml"},
 {id: "dragonium z", name: "Dragonium Z", desc: "It converts Z-Power into crystals that upgrade Dragon-type moves to Dragon-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/dragoniumz.shtml"},
 {id: "darkinium z", name: "Darkinium Z", desc: "It converts Z-Power into crystals that upgrade Dark-type moves to Dark-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/darkiniumz.shtml"},
 {id: "steelium z", name: "Steelium Z", desc: "It converts Z-Power into crystals that upgrade Steel-type moves to Steel-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/steeliumz.shtml"},
 {id: "fairium z", name: "Fairium Z", desc: "It converts Z-Power into crystals that upgrade Fairy-type moves to Fairy-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/fairiumz.shtml"},
 {id: "pikanium z", name: "Pikanium Z", desc: "It converts Z-Power into crystals that upgrade Pikachu’s Volt Tackle to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/pikaniumz.shtml"},
 {id: "bottle cap", name: "Bottle Cap", desc: "A beautiful bottle cap that gives off a silver gleam. Some people are happy to receive one.", wiki: "http://www.serebii.net/itemdex/bottlecap.shtml"},
 {id: "gold bottle cap", name: "Gold Bottle Cap", desc: "A beautiful bottle cap that gives off a golden gleam. Some people are happy to receive one.", wiki: "http://www.serebii.net/itemdex/goldbottlecap.shtml"},
 {id: "z-ring", name: "Z-Ring", desc: "A mysterious ring that enables Pokémon to use Z-Power. It requires both the willpower and the physical power of the Trainer wearing it.", wiki: "http://www.serebii.net/itemdex/z-ring.shtml"},
 {id: "decidium z", name: "Decidium Z", desc: "It converts Z-Power into crystals that upgrade Decidueye’s Spirit Shackle to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/decidiumz.shtml"},
 {id: "incinium z", name: "Incinium Z", desc: "It converts Z-Power into crystals that upgrade Incineroar’s Darkest Lariat to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/inciniumz.shtml"},
 {id: "primarium z", name: "Primarium Z", desc: "It converts Z-Power into crystals that upgrade Primarina’s Sparkling Aria to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/primariumz.shtml"},
 {id: "tapunium z", name: "Tapunium Z", desc: "It converts Z-Power into crystals that upgrade the tapu’s Nature’s Madness to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/tapuniumz.shtml"},
 {id: "marshadium z", name: "Marshadium Z", desc: "It converts Z-Power into crystals that upgrade Marshadow’s Spectral Thief to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/marshadiumz.shtml"},
 {id: "aloraichium z", name: "Aloraichium Z", desc: "It converts Z-Power into crystals that upgrade Alolan Raichu’s Thunderbolt to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/aloraichiumz.shtml"},
 {id: "snorlium z", name: "Snorlium Z", desc: "It converts Z-Power into crystals that upgrade Snorlax’s Giga Impact to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/snorliumz.shtml"},
 {id: "eevium z", name: "Eevium Z", desc: "It converts Z-Power into crystals that upgrade Eevee’s Last Resort to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/eeviumz.shtml"},
 {id: "mewnium z", name: "Mewnium Z", desc: "It converts Z-Power into crystals that upgrade Mew’s Psychic to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/mewniumz.shtml"},
 {id: "normalium z", name: "Normalium Z", desc: "It converts Z-Power into crystals that upgrade Normal-type moves to Normal-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/normaliumz.shtml"},
 {id: "firium z", name: "Firium Z", desc: "It converts Z-Power into crystals that upgrade Fire-type moves to Fire-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/firiumz.shtml"},
 {id: "waterium z", name: "Waterium Z", desc: "It converts Z-Power into crystals that upgrade Water-type moves to Water-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/wateriumz.shtml"},
 {id: "electrium z", name: "Electrium Z", desc: "It converts Z-Power into crystals that upgrade Electric-type moves to Electric-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/electriumz.shtml"},
 {id: "grassium z", name: "Grassium Z", desc: "It converts Z-Power into crystals that upgrade Grass-type moves to Grass-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/grassiumz.shtml"},
 {id: "icium z", name: "Icium Z", desc: "It converts Z-Power into crystals that upgrade Ice-type moves to Ice-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/iciumz.shtml"},
 {id: "fightinium z", name: "Fightinium Z", desc: "It converts Z-Power into crystals that upgrade Fighting-type moves to Fighting-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/fightiniumz.shtml"},
 {id: "poisonium z", name: "Poisonium Z", desc: "It converts Z-Power into crystals that upgrade Poison-type moves to Poison-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/poisoniumz.shtml"},
 {id: "groundium z", name: "Groundium Z", desc: "It converts Z-Power into crystals that upgrade Ground-type moves to Ground-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/groundiumz.shtml"},
 {id: "flyinium z", name: "Flyinium Z", desc: "It converts Z-Power into crystals that upgrade Flying-type moves to Flying-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/flyiniumz.shtml"},
 {id: "psychium z", name: "Psychium Z", desc: "It converts Z-Power into crystals that upgrade Psychic-type moves to Psychic-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/psychiumz.shtml"},
 {id: "buginium z", name: "Buginium Z", desc: "It converts Z-Power into crystals that upgrade Bug-type moves to Bug-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/buginiumz.shtml"},
 {id: "rockium z", name: "Rockium Z", desc: "It converts Z-Power into crystals that upgrade Rock-type moves to Rock-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/rockiumz.shtml"},
 {id: "ghostium z", name: "Ghostium Z", desc: "It converts Z-Power into crystals that upgrade Ghost-type moves to Ghost-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/ghostiumz.shtml"},
 {id: "dragonium z", name: "Dragonium Z", desc: "It converts Z-Power into crystals that upgrade Dragon-type moves to Dragon-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/dragoniumz.shtml"},
 {id: "darkinium z", name: "Darkinium Z", desc: "It converts Z-Power into crystals that upgrade Dark-type moves to Dark-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/darkiniumz.shtml"},
 {id: "steelium z", name: "Steelium Z", desc: "It converts Z-Power into crystals that upgrade Steel-type moves to Steel-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/steeliumz.shtml"},
 {id: "fairium z", name: "Fairium Z", desc: "It converts Z-Power into crystals that upgrade Fairy-type moves to Fairy-type Z-Moves.", wiki: "http://www.serebii.net/itemdex/fairiumz.shtml"},
 {id: "pikanium z", name: "Pikanium Z", desc: "It converts Z-Power into crystals that upgrade Pikachu’s Volt Tackle to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/pikaniumz.shtml"},
 {id: "decidium z", name: "Decidium Z", desc: "It converts Z-Power into crystals that upgrade Decidueye’s Spirit Shackle to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/decidiumz.shtml"},
 {id: "incinium z", name: "Incinium Z", desc: "It converts Z-Power into crystals that upgrade Incineroar’s Darkest Lariat to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/inciniumz.shtml"},
 {id: "primarium z", name: "Primarium Z", desc: "It converts Z-Power into crystals that upgrade Primarina’s Sparkling Aria to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/primariumz.shtml"},
 {id: "tapunium z", name: "Tapunium Z", desc: "It converts Z-Power into crystals that upgrade the tapu’s Nature’s Madness to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/tapuniumz.shtml"},
 {id: "marshadium z", name: "Marshadium Z", desc: "It converts Z-Power into crystals that upgrade Marshadow’s Spectral Thief to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/marshadiumz.shtml"},
 {id: "aloraichium z", name: "Aloraichium Z", desc: "It converts Z-Power into crystals that upgrade Alolan Raichu’s Thunderbolt to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/aloraichiumz.shtml"},
 {id: "snorlium z", name: "Snorlium Z", desc: "It converts Z-Power into crystals that upgrade Snorlax’s Giga Impact to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/snorliumz.shtml"},
 {id: "eevium z", name: "Eevium Z", desc: "It converts Z-Power into crystals that upgrade Eevee’s Last Resort to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/eeviumz.shtml"},
 {id: "mewnium z", name: "Mewnium Z", desc: "It converts Z-Power into crystals that upgrade Mew’s Psychic to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/mewniumz.shtml"},
 {id: "pikashunium z", name: "Pikashunium Z", desc: "It converts Z-Power into crystals that upgrade a Thunderbolt by Pikachu in a cap to an exclusive Z-Move.", wiki: "http://www.serebii.net/itemdex/pikashuniumz.shtml"},
 {id: "forage bag", name: "Forage Bag", desc: "A bag to carry ingredients gathered during Mallow’s trial in the jungle.", wiki: "http://www.serebii.net/itemdex/foragebag.shtml"},
 {id: "fishing rod", name: "Fishing Rod", desc: "A Fishing Rod made by Captain Lana. Cast a line over piles of underwater rocks to fish for wild aquatic Pokémon.", wiki: "http://www.serebii.net/itemdex/fishingrod.shtml"},
 {id: "professor's mask", name: "Professor’s Mask", desc: "The mask that belongs to The Masked Royal. This pro wrestler apparently sews his mask on a machine himself.", wiki: "http://www.serebii.net/itemdex/professor’smask.shtml"},
 {id: "festival ticket", name: "Festival Ticket", desc: "A ticket that allows you to host a mission in Festival Plaza.", wiki: "http://www.serebii.net/itemdex/festivalticket.shtml"},
 {id: "sparkling stone", name: "Sparkling Stone", desc: "A stone entrusted by a Pokémon that has been venerated as a guardian deity in the Alola region. There is said to be some secret in how it sparkles.", wiki: "http://www.serebii.net/itemdex/sparklingstone.shtml"},
 {id: "adrenaline orb", name: "Adrenaline Orb", desc: "Using it makes wild Pokémon more likely to call for help. If held by a Pokémon, it boosts Speed when intimidated. It can be used only once.", wiki: "http://www.serebii.net/itemdex/adrenalineorb.shtml"},
 {id: "zygarde cube", name: "Zygarde Cube", desc: "An item to store Zygarde Cores and Cells. You can also use it to teach Zygarde moves.", wiki: "http://www.serebii.net/itemdex/zygardecube.shtml"},
 {id: "ice stone", name: "Ice Stone", desc: "A peculiar stone that can make certain species of Pokémon evolve. It has an unmistakable snowflake pattern.", wiki: "http://www.serebii.net/itemdex/icestone.shtml"},
 {id: "ride pager", name: "Ride Pager", desc: "By entering certain numbers on this pager, you can summon Ride Pokémon in an instant.", wiki: "http://www.serebii.net/itemdex/ridepager.shtml"},
 {id: "beast ball", name: "Beast Ball", desc: "A special Poké Ball designed to catch Ultra Beasts. It has a low success rate for catching others.", wiki: "http://www.serebii.net/itemdex/beastball.shtml"},
 {id: "big malasada", name: "Big Malasada", desc: "The Alola region’s local specialty—fried bread. It can be used once to heal all the status conditions of a Pokémon.", wiki: "http://www.serebii.net/itemdex/bigmalasada.shtml"},
 {id: "red nectar", name: "Red Nectar", desc: "A flower nectar obtained at Ula’ula Meadow. It changes the form of certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/rednectar.shtml"},
 {id: "yellow nectar", name: "Yellow Nectar", desc: "A flower nectar obtained at Melemele Meadow. It changes the form of certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/yellownectar.shtml"},
 {id: "pink nectar", name: "Pink Nectar", desc: "The flower nectar obtained at the flowering shrubs on Royal Avenue. It changes the form of certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/pinknectar.shtml"},
 {id: "purple nectar", name: "Purple Nectar", desc: "A flower nectar obtained at Poni Meadow. It changes the form of certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/purplenectar.shtml"},
 {id: "sun flute", name: "Sun Flute", desc: "It is said that the tones it produces were offered up as an expression of gratitude to the Legendary Pokémon of the sun.", wiki: "http://www.serebii.net/itemdex/sunflute.shtml"},
 {id: "moon flute", name: "Moon Flute", desc: "It is said that the tones it produces were offered up as an expression of gratitude to the Legendary Pokémon of the moon.", wiki: "http://www.serebii.net/itemdex/moonflute.shtml"},
 {id: "enigmatic card", name: "Enigmatic Card", desc: "A mysterious card. Written on it is a request for you to go to a guest room in an Akala motel on Route 8.", wiki: "http://www.serebii.net/itemdex/enigmaticcard.shtml"},
 {id: "terrain extender", name: "Terrain Extender", desc: "An item to be held by a Pokémon. It extends the duration of the terrain caused by the holder’s move or Ability.", wiki: "http://www.serebii.net/itemdex/terrainextender.shtml"},
 {id: "protective pads", name: "Protective Pads", desc: "An item to be held by a Pokémon. These pads protect the holder from effects caused by making direct contact with the target.", wiki: "http://www.serebii.net/itemdex/protectivepads.shtml"},
 {id: "electric seed", name: "Electric Seed", desc: "An item to be held by a Pokémon. It boosts Defense on Electric Terrain. It can only be used once.", wiki: "http://www.serebii.net/itemdex/electricseed.shtml"},
 {id: "psychic seed", name: "Psychic Seed", desc: "An item to be held by a Pokémon. It boosts Sp. Def on Psychic Terrain. It can only be used once.", wiki: "http://www.serebii.net/itemdex/psychicseed.shtml"},
 {id: "misty seed", name: "Misty Seed", desc: "An item to be held by a Pokémon. It boosts Sp. Def on Misty Terrain. It can only be used once.", wiki: "http://www.serebii.net/itemdex/mistyseed.shtml"},
 {id: "grassy seed", name: "Grassy Seed", desc: "An item to be held by a Pokémon. It boosts Defense on Grassy Terrain. It can only be used once.", wiki: "http://www.serebii.net/itemdex/grassyseed.shtml"},
 {id: "fighting memory", name: "Fighting Memory", desc: "A memory disc that contains Fighting-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/fightingmemory.shtml"},
 {id: "flying memory", name: "Flying Memory", desc: "A memory disc that contains Flying-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/flyingmemory.shtml"},
 {id: "poison memory", name: "Poison Memory", desc: "A memory disc that contains Poison-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/poisonmemory.shtml"},
 {id: "ground memory", name: "Ground Memory", desc: "A memory disc that contains Ground-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/groundmemory.shtml"},
 {id: "rock memory", name: "Rock Memory", desc: "A memory disc that contains Rock-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/rockmemory.shtml"},
 {id: "bug memory", name: "Bug Memory", desc: "A memory disc that contains Bug-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/bugmemory.shtml"},
 {id: "ghost memory", name: "Ghost Memory", desc: "A memory disc that contains Ghost-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/ghostmemory.shtml"},
 {id: "steel memory", name: "Steel Memory", desc: "A memory disc that contains Steel-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/steelmemory.shtml"},
 {id: "fire memory", name: "Fire Memory", desc: "A memory disc that contains Fire-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/firememory.shtml"},
 {id: "water memory", name: "Water Memory", desc: "A memory disc that contains Water-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/watermemory.shtml"},
 {id: "grass memory", name: "Grass Memory", desc: "A memory disc that contains Grass-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/grassmemory.shtml"},
 {id: "electric memory", name: "Electric Memory", desc: "A memory disc that contains Electric-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/electricmemory.shtml"},
 {id: "psychic memory", name: "Psychic Memory", desc: "A memory disc that contains Psychic-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/psychicmemory.shtml"},
 {id: "ice memory", name: "Ice Memory", desc: "A memory disc that contains Ice-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/icememory.shtml"},
 {id: "dragon memory", name: "Dragon Memory", desc: "A memory disc that contains Dragon-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/dragonmemory.shtml"},
 {id: "dark memory", name: "Dark Memory", desc: "A memory disc that contains Dark-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/darkmemory.shtml"},
 {id: "fairy memory", name: "Fairy Memory", desc: "A memory disc that contains Fairy-type data. It changes the type of the holder if held by a certain species of Pokémon.", wiki: "http://www.serebii.net/itemdex/fairymemory.shtml"}];
 
 var abilities = [{id: "adaptability", name: "Adaptability", desc: "Powers up moves of the same type.", wiki: "http://www.serebii.net/abilitydex/adaptability.shtml"},
 {id: "aerilate", name: "Aerilate", desc: "Normal-type moves become Flying-type moves.", wiki: "http://www.serebii.net/abilitydex/aerilate.shtml"},
 {id: "aftermath", name: "Aftermath", desc: "Damages the foe landing the finishing hit.", wiki: "http://www.serebii.net/abilitydex/aftermath.shtml"},
 {id: "air lock", name: "Air Lock", desc: "Eliminates the effects of weather.", wiki: "http://www.serebii.net/abilitydex/airlock.shtml"},
 {id: "analytic", name: "Analytic", desc: "Strengthens moves when moving last.", wiki: "http://www.serebii.net/abilitydex/analytic.shtml"},
 {id: "anger point", name: "Anger Point", desc: "Raises Attack upon taking a critical hit.", wiki: "http://www.serebii.net/abilitydex/angerpoint.shtml"},
 {id: "anticipation", name: "Anticipation", desc: "Senses the foe’s dangerous moves.", wiki: "http://www.serebii.net/abilitydex/anticipation.shtml"},
 {id: "arena trap", name: "Arena Trap", desc: "Prevents the foe from fleeing.", wiki: "http://www.serebii.net/abilitydex/arenatrap.shtml"},
 {id: "aroma veil", name: "Aroma Veil", desc: "Protects allies from attacks that limit their move choices.", wiki: "http://www.serebii.net/abilitydex/aromaveil.shtml"},
 {id: "aura break", name: "Aura Break", desc: "The effects of \"Aura\" Abilities are reversed.", wiki: "http://www.serebii.net/abilitydex/aurabreak.shtml"},
 {id: "bad dreams", name: "Bad Dreams", desc: "Reduces a sleeping foe’s HP.", wiki: "http://www.serebii.net/abilitydex/baddreams.shtml"},
 {id: "battery", name: "Battery", desc: "Raises the power of allies' special moves", wiki: "http://www.serebii.net/abilitydex/battery.shtml"},
 {id: "battle armor", name: "Battle Armor", desc: "The Pokémon is protected against critical hits.", wiki: "http://www.serebii.net/abilitydex/battlearmor.shtml"},
 {id: "battle bond", name: "Battle Bond", desc: "Lets a Pokémon change its form after causing an opponent to faint.", wiki: "http://www.serebii.net/abilitydex/battlebond.shtml"},
 {id: "berserk", name: "Berserk", desc: "Raises Special Attack when HP is low", wiki: "http://www.serebii.net/abilitydex/berserk.shtml"},
 {id: "big pecks", name: "Big Pecks", desc: "Protects the Pokémon from Defense-lowering attacks.", wiki: "http://www.serebii.net/abilitydex/bigpecks.shtml"},
 {id: "blaze", name: "Blaze", desc: "Powers up Fire-type moves in a pinch.", wiki: "http://www.serebii.net/abilitydex/blaze.shtml"},
 {id: "bulletproof", name: "Bulletproof", desc: "Protects the Pokémon from some ball and bomb moves.", wiki: "http://www.serebii.net/abilitydex/bulletproof.shtml"},
 {id: "cacophony", name: "Cacophony", desc: "Avoids sound-based moves.", wiki: "http://www.serebii.net/abilitydex/cacophony.shtml"},
 {id: "cheek pouch", name: "Cheek Pouch", desc: "Restores HP as well when the Pokémon eats a Berry.", wiki: "http://www.serebii.net/abilitydex/cheekpouch.shtml"},
 {id: "chlorophyll", name: "Chlorophyll", desc: "Boosts the Pokémon's Speed in sunshine.", wiki: "http://www.serebii.net/abilitydex/chlorophyll.shtml"},
 {id: "clear body", name: "Clear Body", desc: "Prevents the Pokémon's stats from being lowered.", wiki: "http://www.serebii.net/abilitydex/clearbody.shtml"},
 {id: "cloud nine", name: "Cloud Nine", desc: "Eliminates the effects of weather.", wiki: "http://www.serebii.net/abilitydex/cloudnine.shtml"},
 {id: "color change", name: "Color Change", desc: "Changes the Pokémon's type to the foe’s move.", wiki: "http://www.serebii.net/abilitydex/colorchange.shtml"},
 {id: "comatose", name: "Comatose", desc: "Protects the Pokémon from status conditions other than sleep.", wiki: "http://www.serebii.net/abilitydex/comatose.shtml"},
 {id: "competitive", name: "Competitive", desc: "Boosts the Sp. Atk stat when a stat is lowered.", wiki: "http://www.serebii.net/abilitydex/competitive.shtml"},
 {id: "compound eyes", name: "Compound Eyes", desc: "The Pokémon's accuracy is boosted.", wiki: "http://www.serebii.net/abilitydex/compoundeyes.shtml"},
 {id: "contrary", name: "Contrary", desc: "Inverts changes to stat stages.", wiki: "http://www.serebii.net/abilitydex/contrary.shtml"},
 {id: "corrosion", name: "Corrosion", desc: "Allows the user to inflict poison on any Pokémon.", wiki: "http://www.serebii.net/abilitydex/corrosion.shtml"},
 {id: "cursed body", name: "Cursed Body", desc: "Has a 30% chance of Disabling any move that hits the Pokémon.", wiki: "http://www.serebii.net/abilitydex/cursedbody.shtml"},
 {id: "cute charm", name: "Cute Charm", desc: "Contact with the Pokémon may cause infatuation.", wiki: "http://www.serebii.net/abilitydex/cutecharm.shtml"},
 {id: "damp", name: "Damp", desc: "Prevents combatants from self destructing.", wiki: "http://www.serebii.net/abilitydex/damp.shtml"},
 {id: "dancer", name: "Dancer", desc: "Allows the Pokémon to immediately copy dancing moves.", wiki: "http://www.serebii.net/abilitydex/dancer.shtml"},
 {id: "dark aura", name: "Dark Aura", desc: "Powers up each Pokémon's Dark-type moves.", wiki: "http://www.serebii.net/abilitydex/darkaura.shtml"},
 {id: "dazzling", name: "Dazzling", desc: "Prevents the opponent from using moves with increased priority.", wiki: "http://www.serebii.net/abilitydex/dazzling.shtml"},
 {id: "defeatist", name: "Defeatist", desc: "Halves Attack and Special Attack below 50% HP.", wiki: "http://www.serebii.net/abilitydex/defeatist.shtml"},
 {id: "defiant", name: "Defiant", desc: "Raises Attack two stages upon having any stat lowered.", wiki: "http://www.serebii.net/abilitydex/defiant.shtml"},
 {id: "delta stream", name: "Delta Stream", desc: "Eliminates weather effects and eliminates weaknesses of Flying-type Pokémon.", wiki: "http://www.serebii.net/abilitydex/deltastream.shtml"},
 {id: "desolate land", name: "Desolate Land", desc: "Creates harsh sunlight.", wiki: "http://www.serebii.net/abilitydex/desolateland.shtml"},
 {id: "disguise", name: "Disguise", desc: "Allows the Pokémon to nullify damage from one attack.", wiki: "http://www.serebii.net/abilitydex/disguise.shtml"},
 {id: "download", name: "Download", desc: "Adjusts power according to the foe’s lowest defensive stat.", wiki: "http://www.serebii.net/abilitydex/download.shtml"},
 {id: "drizzle", name: "Drizzle", desc: "The Pokémon makes it rain if it appears in battle.", wiki: "http://www.serebii.net/abilitydex/drizzle.shtml"},
 {id: "drought", name: "Drought", desc: "The Pokémon makes it sunny if it is in battle.", wiki: "http://www.serebii.net/abilitydex/drought.shtml"},
 {id: "dry skin", name: "Dry Skin", desc: "Reduces HP if it is hot. Water restores HP.", wiki: "http://www.serebii.net/abilitydex/dryskin.shtml"},
 {id: "early bird", name: "Early Bird", desc: "The Pokémon awakens quickly from sleep.", wiki: "http://www.serebii.net/abilitydex/earlybird.shtml"},
 {id: "effect spore", name: "Effect Spore", desc: "Contact may paralyze, poison, or cause sleep.", wiki: "http://www.serebii.net/abilitydex/effectspore.shtml"},
 {id: "electric surge", name: "Electric Surge", desc: "Immediately creates Electric Terrain upon entering battle.", wiki: "http://www.serebii.net/abilitydex/electricsurge.shtml"},
 {id: "fairy aura", name: "Fairy Aura", desc: "Powers up each Pokémon's Fairy-type moves.", wiki: "http://www.serebii.net/abilitydex/fairyaura.shtml"},
 {id: "filter", name: "Filter", desc: "Powers down supereffective moves.", wiki: "http://www.serebii.net/abilitydex/filter.shtml"},
 {id: "flame body", name: "Flame Body", desc: "Contact with the Pokémon may burn the foe.", wiki: "http://www.serebii.net/abilitydex/flamebody.shtml"},
 {id: "flare boost", name: "Flare Boost", desc: "Increases Special Attack to 1.5× when burned.", wiki: "http://www.serebii.net/abilitydex/flareboost.shtml"},
 {id: "flash fire", name: "Flash Fire", desc: "Powers up Fire-type moves if hit by a fire move.", wiki: "http://www.serebii.net/abilitydex/flashfire.shtml"},
 {id: "flower gift", name: "Flower Gift", desc: "Powers up party Pokémon when it is sunny.", wiki: "http://www.serebii.net/abilitydex/flowergift.shtml"},
 {id: "flower veil", name: "Flower Veil", desc: "Prevents lowering of ally Grass-type Pokémon's stats.", wiki: "http://www.serebii.net/abilitydex/flowerveil.shtml"},
 {id: "fluffy", name: "Fluffy", desc: "Haves damage from physical moves, but doubles damage from Fire-type ones.", wiki: "http://www.serebii.net/abilitydex/fluffy.shtml"},
 {id: "forecast", name: "Forecast", desc: "Transforms with the weather.", wiki: "http://www.serebii.net/abilitydex/forecast.shtml"},
 {id: "forewarn", name: "Forewarn", desc: "Determines what moves the foe has.", wiki: "http://www.serebii.net/abilitydex/forewarn.shtml"},
 {id: "friend guard", name: "Friend Guard", desc: "Decreases damage inflicted against ally Pokémon.", wiki: "http://www.serebii.net/abilitydex/friendguard.shtml"},
 {id: "frisk", name: "Frisk", desc: "The Pokémon can check the foe’s held item.", wiki: "http://www.serebii.net/abilitydex/frisk.shtml"},
 {id: "full metal body", name: "Full Metal Body", desc: "Prevents other Pokémon’s moves or Abilities from lowering the Pokémon’s stats.", wiki: "http://www.serebii.net/abilitydex/fullmetalbody.shtml"},
 {id: "fur coat", name: "Fur Coat", desc: "Halves damage from physical moves.", wiki: "http://www.serebii.net/abilitydex/furcoat.shtml"},
 {id: "gale wings", name: "Gale Wings", desc: "Gives priority to Flying-type moves.", wiki: "http://www.serebii.net/abilitydex/galewings.shtml"},
 {id: "gluttony", name: "Gluttony", desc: "Encourages the early use of a held Berry.", wiki: "http://www.serebii.net/abilitydex/gluttony.shtml"},
 {id: "gooey", name: "Gooey", desc: "Contact with the Pokémon lowers the attacker's Speed stat.", wiki: "http://www.serebii.net/abilitydex/gooey.shtml"},
 {id: "grass pelt", name: "Grass Pelt", desc: "Boosts the Defense stat in Grassy Terrain.", wiki: "http://www.serebii.net/abilitydex/grasspelt.shtml"},
 {id: "guts", name: "Guts", desc: "Boosts Attack if there is a status problem.", wiki: "http://www.serebii.net/abilitydex/guts.shtml"},
 {id: "harvest", name: "Harvest", desc: "Sometimes restores a consumed Berry.", wiki: "http://www.serebii.net/abilitydex/harvest.shtml"},
 {id: "healer", name: "Healer", desc: "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn.", wiki: "http://www.serebii.net/abilitydex/healer.shtml"},
 {id: "heatproof", name: "Heatproof", desc: "Weakens the power of Fire-type moves.", wiki: "http://www.serebii.net/abilitydex/heatproof.shtml"},
 {id: "heavy metal", name: "Heavy Metal", desc: "Doubles the Pokémon's weight.", wiki: "http://www.serebii.net/abilitydex/heavymetal.shtml"},
 {id: "honey gather", name: "Honey Gather", desc: "The Pokémon may gather Honey from somewhere.", wiki: "http://www.serebii.net/abilitydex/honeygather.shtml"},
 {id: "huge power", name: "Huge Power", desc: "Raises the Pokémon's Attack stat.", wiki: "http://www.serebii.net/abilitydex/hugepower.shtml"},
 {id: "hustle", name: "Hustle", desc: "Boosts the Attack stat, but lowers accuracy.", wiki: "http://www.serebii.net/abilitydex/hustle.shtml"},
 {id: "hydration", name: "Hydration", desc: "Heals status problems if it is raining.", wiki: "http://www.serebii.net/abilitydex/hydration.shtml"},
 {id: "hyper cutter", name: "Hyper Cutter", desc: "Prevents the Attack stat from being lowered.", wiki: "http://www.serebii.net/abilitydex/hypercutter.shtml"},
 {id: "ice body", name: "Ice Body", desc: "The Pokémon regains HP in a hailstorm.", wiki: "http://www.serebii.net/abilitydex/icebody.shtml"},
 {id: "illuminate", name: "Illuminate", desc: "Raises the likelihood of meeting wild Pokémon.", wiki: "http://www.serebii.net/abilitydex/illuminate.shtml"},
 {id: "illusion", name: "Illusion", desc: "Takes the appearance of the last conscious party Pokémon upon being sent out until hit by a damaging move.", wiki: "http://www.serebii.net/abilitydex/illusion.shtml"},
 {id: "immunity", name: "Immunity", desc: "Prevents the Pokémon from getting poisoned.", wiki: "http://www.serebii.net/abilitydex/immunity.shtml"},
 {id: "imposter", name: "Imposter", desc: "Transforms upon entering battle.", wiki: "http://www.serebii.net/abilitydex/imposter.shtml"},
 {id: "innards out", name: "Innards Out", desc: "Deals damage to opposing Pokémon upon fainting.", wiki: "http://www.serebii.net/abilitydex/innardsout.shtml"},
 {id: "infiltrator", name: "Infiltrator", desc: "Ignores Light Screen, Reflect, and Safeguard.", wiki: "http://www.serebii.net/abilitydex/infiltrator.shtml"},
 {id: "inner focus", name: "Inner Focus", desc: "The Pokémon is protected from flinching.", wiki: "http://www.serebii.net/abilitydex/innerfocus.shtml"},
 {id: "insomnia", name: "Insomnia", desc: "Prevents the Pokémon from falling asleep.", wiki: "http://www.serebii.net/abilitydex/insomnia.shtml"},
 {id: "intimidate", name: "Intimidate", desc: "Lowers the foe’s Attack stat.", wiki: "http://www.serebii.net/abilitydex/intimidate.shtml"},
 {id: "iron barbs", name: "Iron Barbs", desc: "Damages attacking Pokémon for 1/8 their max HP on contact.", wiki: "http://www.serebii.net/abilitydex/ironbarbs.shtml"},
 {id: "iron fist", name: "Iron Fist", desc: "Boosts the power of punching moves.", wiki: "http://www.serebii.net/abilitydex/ironfist.shtml"},
 {id: "justified", name: "Justified", desc: "Raises Attack when hit by Dark-type moves.", wiki: "http://www.serebii.net/abilitydex/justified.shtml"},
 {id: "keen eye", name: "Keen Eye", desc: "Prevents the Pokémon from losing accuracy.", wiki: "http://www.serebii.net/abilitydex/keeneye.shtml"},
 {id: "klutz", name: "Klutz", desc: "The Pokémon can’t use any held items.", wiki: "http://www.serebii.net/abilitydex/klutz.shtml"},
 {id: "leaf guard", name: "Leaf Guard", desc: "Prevents status problems in sunny weather.", wiki: "http://www.serebii.net/abilitydex/leafguard.shtml"},
 {id: "levitate", name: "Levitate", desc: "Gives full immunity to all Ground-type moves.", wiki: "http://www.serebii.net/abilitydex/levitate.shtml"},
 {id: "light metal", name: "Light Metal", desc: "Halves the Pokémon's weight.", wiki: "http://www.serebii.net/abilitydex/lightmetal.shtml"},
 {id: "lightning rod", name: "Lightning Rod", desc: "The Pokémon draws in all Electric-type moves to raise Sp. Atk.", wiki: "http://www.serebii.net/abilitydex/lightningrod.shtml"},
 {id: "limber", name: "Limber", desc: "The Pokémon is protected from paralysis.", wiki: "http://www.serebii.net/abilitydex/limber.shtml"},
 {id: "liquid ooze", name: "Liquid Ooze", desc: "Inflicts damage on foes using any draining move.", wiki: "http://www.serebii.net/abilitydex/liquidooze.shtml"},
 {id: "magic bounce", name: "Magic Bounce", desc: "Reflects most non-damaging moves back at their user.", wiki: "http://www.serebii.net/abilitydex/magicbounce.shtml"},
 {id: "magic guard", name: "Magic Guard", desc: "The Pokémon only takes damage from attacks.", wiki: "http://www.serebii.net/abilitydex/magicguard.shtml"},
 {id: "magician", name: "Magician", desc: "The Pokémon steals the held item of a Pokémon it hits with a move.", wiki: "http://www.serebii.net/abilitydex/magician.shtml"},
 {id: "magma armor", name: "Magma Armor", desc: "Prevents the Pokémon from becoming frozen.", wiki: "http://www.serebii.net/abilitydex/magmaarmor.shtml"},
 {id: "magnet pull", name: "Magnet Pull", desc: "Prevents Steel-type Pokémon from escaping.", wiki: "http://www.serebii.net/abilitydex/magnetpull.shtml"},
 {id: "marvel scale", name: "Marvel Scale", desc: "Boosts Defense if there is a status problem.", wiki: "http://www.serebii.net/abilitydex/marvelscale.shtml"},
 {id: "mega launcher", name: "Mega Launcher", desc: "Powers up aura and pulse moves.", wiki: "http://www.serebii.net/abilitydex/megalauncher.shtml"},
 {id: "minus", name: "Minus", desc: "Boosts Sp. Atk if another Pokémon has Plus.", wiki: "http://www.serebii.net/abilitydex/minus.shtml"},
 {id: "mold breaker", name: "Mold Breaker", desc: "Moves can be used regardless of Abilities.", wiki: "http://www.serebii.net/abilitydex/moldbreaker.shtml"},
 {id: "moody", name: "Moody", desc: "Raises a random stat two stages and lowers another one stage after each turn.", wiki: "http://www.serebii.net/abilitydex/moody.shtml"},
 {id: "motor drive", name: "Motor Drive", desc: "Raises Speed if hit by an Electric-type move.", wiki: "http://www.serebii.net/abilitydex/motordrive.shtml"},
 {id: "moxie", name: "Moxie", desc: "Raises Attack one stage upon KOing a Pokémon.", wiki: "http://www.serebii.net/abilitydex/moxie.shtml"},
 {id: "multiscale", name: "Multiscale", desc: "Halves damage taken from full HP.", wiki: "http://www.serebii.net/abilitydex/multiscale.shtml"},
 {id: "multitype", name: "Multitype", desc: "Changes type to match the held Plate.", wiki: "http://www.serebii.net/abilitydex/multitype.shtml"},
 {id: "mummy", name: "Mummy", desc: "Contact with this Pokémon spreads this Ability.", wiki: "http://www.serebii.net/abilitydex/mummy.shtml"},
 {id: "natural cure", name: "Natural Cure", desc: "All status problems are healed upon switching out.", wiki: "http://www.serebii.net/abilitydex/naturalcure.shtml"},
 {id: "no guard", name: "No Guard", desc: "Ensures the Pokémon and its foe’s attacks land.", wiki: "http://www.serebii.net/abilitydex/noguard.shtml"},
 {id: "normalize", name: "Normalize", desc: "All the Pokémon's moves become Normal type.", wiki: "http://www.serebii.net/abilitydex/normalize.shtml"},
 {id: "oblivious", name: "Oblivious", desc: "Prevents the Pokémon from becoming infatuated or falling for taunts*.", wiki: "http://www.serebii.net/abilitydex/oblivious.shtml"},
 {id: "overcoat", name: "Overcoat", desc: "Protects against damage from weather.", wiki: "http://www.serebii.net/abilitydex/overcoat.shtml"},
 {id: "overgrow", name: "Overgrow", desc: "Powers up Grass-type moves in a pinch.", wiki: "http://www.serebii.net/abilitydex/overgrow.shtml"},
 {id: "own tempo", name: "Own Tempo", desc: "Prevents the Pokémon from becoming confused.", wiki: "http://www.serebii.net/abilitydex/owntempo.shtml"},
 {id: "parental bond", name: "Parental Bond", desc: "Parent and child attack together.", wiki: "http://www.serebii.net/abilitydex/parentalbond.shtml"},
 {id: "pickpocket", name: "Pickpocket", desc: "Steals attacking Pokémon's held item on contact.", wiki: "http://www.serebii.net/abilitydex/pickpocket.shtml"},
 {id: "pickup", name: "Pickup", desc: "The Pokémon may pick up items.", wiki: "http://www.serebii.net/abilitydex/pickup.shtml"},
 {id: "pixilate", name: "Pixilate", desc: "Normal-type moves become Fairy-type moves.", wiki: "http://www.serebii.net/abilitydex/pixilate.shtml"},
 {id: "plus", name: "Plus", desc: "Boosts Sp. Atk if another Pokémon has Minus.", wiki: "http://www.serebii.net/abilitydex/plus.shtml"},
 {id: "poison heal", name: "Poison Heal", desc: "Restores HP if the Pokémon is poisoned.", wiki: "http://www.serebii.net/abilitydex/poisonheal.shtml"},
 {id: "poison point", name: "Poison Point", desc: "Contact with the Pokémon may poison the foe.", wiki: "http://www.serebii.net/abilitydex/poisonpoint.shtml"},
 {id: "poison touch", name: "Poison Touch", desc: "Has a 30% chance of poisoning Pokémon upon contact when attacking.", wiki: "http://www.serebii.net/abilitydex/poisontouch.shtml"},
 {id: "power construct", name: "Power Construct", desc: "Changes the Pokémon's form when its HP falls below half.", wiki: "http://www.serebii.net/abilitydex/powerconstruct.shtml"},
 {id: "prankster", name: "Prankster", desc: "Raises non-damaging moves' priority by one stage.", wiki: "http://www.serebii.net/abilitydex/prankster.shtml"},
 {id: "pressure", name: "Pressure", desc: "The Pokémon raises the foe’s PP usage.", wiki: "http://www.serebii.net/abilitydex/pressure.shtml"},
 {id: "primordial sea", name: "Primordial Sea", desc: "Causes heavy rain.", wiki: "http://www.serebii.net/abilitydex/primordialsea.shtml"},
 {id: "protean", name: "Protean", desc: "Changes the Pokémon's type to the same type of the move it is using.", wiki: "http://www.serebii.net/abilitydex/protean.shtml"},
 {id: "pure power", name: "Pure Power", desc: "Boosts the power of physical attacks.", wiki: "http://www.serebii.net/abilitydex/purepower.shtml"},
 {id: "queenly majesty", name: "Queenly Majesty", desc: "Prevents the opponent from using moves with increased priority.", wiki: "http://www.serebii.net/abilitydex/queenlymajesty.shtml"},
 {id: "quick feet", name: "Quick Feet", desc: "Boosts Speed if there is a status problem.", wiki: "http://www.serebii.net/abilitydex/quickfeet.shtml"},
 {id: "rain dish", name: "Rain Dish", desc: "The Pokémon gradually recovers HP in rain.", wiki: "http://www.serebii.net/abilitydex/raindish.shtml"},
 {id: "rattled", name: "Rattled", desc: "Raises Speed one stage upon being hit by a Dark, Ghost, or Bug move.", wiki: "http://www.serebii.net/abilitydex/rattled.shtml"},
 {id: "receiver", name: "Receiver", desc: "Takes the Ability of a fainted ally.", wiki: "http://www.serebii.net/abilitydex/receiver.shtml"},
 {id: "reckless", name: "Reckless", desc: "Powers up moves that have recoil damage.", wiki: "http://www.serebii.net/abilitydex/reckless.shtml"},
 {id: "refrigerate", name: "Refrigerate", desc: "Normal-type moves become Ice-type moves.", wiki: "http://www.serebii.net/abilitydex/refrigerate.shtml"},
 {id: "regenerator", name: "Regenerator", desc: "Heals for 1/3 max HP upon leaving battle.", wiki: "http://www.serebii.net/abilitydex/regenerator.shtml"},
 {id: "rivalry", name: "Rivalry", desc: "Raises Attack if the foe is of the same gender.", wiki: "http://www.serebii.net/abilitydex/rivalry.shtml"},
 {id: "rks system", name: "RKS System", desc: "Changes type to match a specific item.", wiki: "http://www.serebii.net/abilitydex/rkssystem.shtml"},
 {id: "rock head", name: "Rock Head", desc: "Protects the Pokémon from recoil damage.", wiki: "http://www.serebii.net/abilitydex/rockhead.shtml"},
 {id: "rough skin", name: "Rough Skin", desc: "Inflicts damage to the foe on contact.", wiki: "http://www.serebii.net/abilitydex/roughskin.shtml"},
 {id: "run away", name: "Run Away", desc: "Enables sure getaway from wild Pokémon.", wiki: "http://www.serebii.net/abilitydex/runaway.shtml"},
 {id: "sand force", name: "Sand Force", desc: "Strengthens Rock, Ground, and Steel moves to 1.3× their power during a sandstorm.", wiki: "http://www.serebii.net/abilitydex/sandforce.shtml"},
 {id: "sand rush", name: "Sand Rush", desc: "Doubles Speed during a sandstorm.", wiki: "http://www.serebii.net/abilitydex/sandrush.shtml"},
 {id: "sand stream", name: "Sand Stream", desc: "The Pokémon summons a sandstorm in battle.", wiki: "http://www.serebii.net/abilitydex/sandstream.shtml"},
 {id: "sand veil", name: "Sand Veil", desc: "Boosts the Pokémon's evasion in a sandstorm.", wiki: "http://www.serebii.net/abilitydex/sandveil.shtml"},
 {id: "sap sipper", name: "Sap Sipper", desc: "Absorbs Grass moves, raising Attack one stage.", wiki: "http://www.serebii.net/abilitydex/sapsipper.shtml"},
 {id: "schooling", name: "Schooling", desc: "Changes the Pokémon's form when certain requirements are met.", wiki: "http://www.serebii.net/abilitydex/schooling.shtml"},
 {id: "scrappy", name: "Scrappy", desc: "Enables moves to hit Ghost-type foes.", wiki: "http://www.serebii.net/abilitydex/scrappy.shtml"},
 {id: "serene grace", name: "Serene Grace", desc: "Boosts the likelihood of added effects appearing.", wiki: "http://www.serebii.net/abilitydex/serenegrace.shtml"},
 {id: "shadow shield", name: "Shadow Shield", desc: "Lowers damage taken from moves while at maximum HP.", wiki: "http://www.serebii.net/abilitydex/shadowshield.shtml"},
 {id: "shadow tag", name: "Shadow Tag", desc: "Prevents the foe from escaping.", wiki: "http://www.serebii.net/abilitydex/shadowtag.shtml"},
 {id: "shed skin", name: "Shed Skin", desc: "The Pokémon may heal its own status problems.", wiki: "http://www.serebii.net/abilitydex/shedskin.shtml"},
 {id: "sheer force", name: "Sheer Force", desc: "Strengthens moves with extra effects to 1.3× their power, but prevents their extra effects.", wiki: "http://www.serebii.net/abilitydex/sheerforce.shtml"},
 {id: "shell armor", name: "Shell Armor", desc: "The Pokémon is protected against critical hits.", wiki: "http://www.serebii.net/abilitydex/shellarmor.shtml"},
 {id: "shield dust", name: "Shield Dust", desc: "Blocks the added effects of attacks taken.", wiki: "http://www.serebii.net/abilitydex/shielddust.shtml"},
 {id: "shields down", name: "Shields Down", desc: "Changes the Pokémon's form when HP is low.", wiki: "http://www.serebii.net/abilitydex/shieldsdown.shtml"},
 {id: "simple", name: "Simple", desc: "The Pokémon is prone to wild stat changes.", wiki: "http://www.serebii.net/abilitydex/simple.shtml"},
 {id: "skill link", name: "Skill Link", desc: "Increases the frequency of multi-strike moves.", wiki: "http://www.serebii.net/abilitydex/skilllink.shtml"},
 {id: "slow start", name: "Slow Start", desc: "Temporarily halves Attack and Speed.", wiki: "http://www.serebii.net/abilitydex/slowstart.shtml"},
 {id: "sniper", name: "Sniper", desc: "Powers up moves if they become critical hits.", wiki: "http://www.serebii.net/abilitydex/sniper.shtml"},
 {id: "snow cloak", name: "Snow Cloak", desc: "Raises evasion in a hailstorm.", wiki: "http://www.serebii.net/abilitydex/snowcloak.shtml"},
 {id: "snow warning", name: "Snow Warning", desc: "The Pokémon summons a hailstorm in battle.", wiki: "http://www.serebii.net/abilitydex/snowwarning.shtml"},
 {id: "solar power", name: "Solar Power", desc: "Boosts Sp. Atk, but lowers HP in sunshine.", wiki: "http://www.serebii.net/abilitydex/solarpower.shtml"},
 {id: "solid rock", name: "Solid Rock", desc: "Powers down supereffective moves.", wiki: "http://www.serebii.net/abilitydex/solidrock.shtml"},
 {id: "soul_heart", name: "Soul_heart", desc: "Raises the Pokémon's Special Attack when any Pokémon faints.", wiki: "http://www.serebii.net/abilitydex/soul_heart.shtml"},
 {id: "soundproof", name: "Soundproof", desc: "Gives full immunity to all sound-based moves.", wiki: "http://www.serebii.net/abilitydex/soundproof.shtml"},
 {id: "speed boost", name: "Speed Boost", desc: "The Pokémon's Speed stat is gradually boosted.", wiki: "http://www.serebii.net/abilitydex/speedboost.shtml"},
 {id: "stakeout", name: "Stakeout", desc: "Doubles damage inflicted on Pokémon that enter mid-battle.", wiki: "http://www.serebii.net/abilitydex/stakeout.shtml"},
 {id: "stall", name: "Stall", desc: "The Pokémon moves after even slower foes.", wiki: "http://www.serebii.net/abilitydex/stall.shtml"},
 {id: "stamina", name: "Stamina", desc: "Raises defense when hit by an attack.", wiki: "http://www.serebii.net/abilitydex/stamina.shtml"},
 {id: "stance change", name: "Stance Change", desc: "The Pokémon changes form depending on how it battles.", wiki: "http://www.serebii.net/abilitydex/stancechange.shtml"},
 {id: "static", name: "Static", desc: "Contact with the Pokémon may cause paralysis.", wiki: "http://www.serebii.net/abilitydex/static.shtml"},
 {id: "steadfast", name: "Steadfast", desc: "Raises Speed each time the Pokémon flinches.", wiki: "http://www.serebii.net/abilitydex/steadfast.shtml"},
 {id: "stench", name: "Stench", desc: "The stench may cause the target to flinch.", wiki: "http://www.serebii.net/abilitydex/stench.shtml"},
 {id: "sticky hold", name: "Sticky Hold", desc: "Protects the Pokémon from item theft.", wiki: "http://www.serebii.net/abilitydex/stickyhold.shtml"},
 {id: "storm drain", name: "Storm Drain", desc: "The Pokémon draws in all Water-type moves.", wiki: "http://www.serebii.net/abilitydex/stormdrain.shtml"},
 {id: "strong jaw", name: "Strong Jaw", desc: "The Pokémon's strong jaw gives it tremendous biting power.", wiki: "http://www.serebii.net/abilitydex/strongjaw.shtml"},
 {id: "sturdy", name: "Sturdy", desc: "The Pokémon is protected against 1-hit KO attacks.", wiki: "http://www.serebii.net/abilitydex/sturdy.shtml"},
 {id: "suction cups", name: "Suction Cups", desc: "Negates moves that force switching out.", wiki: "http://www.serebii.net/abilitydex/suctioncups.shtml"},
 {id: "super luck", name: "Super Luck", desc: "Heightens the critical-hit ratios of moves.", wiki: "http://www.serebii.net/abilitydex/superluck.shtml"},
 {id: "surge surfer", name: "Surge Surfer", desc: "Doubles Speed while under the effects of Electric Terrain.", wiki: "http://www.serebii.net/abilitydex/surgesurfer.shtml"},
 {id: "swarm", name: "Swarm", desc: "Powers up Bug-type moves in a pinch.", wiki: "http://www.serebii.net/abilitydex/swarm.shtml"},
 {id: "sweet veil", name: "Sweet Veil", desc: "Prevents itself and its allies from falling asleep.", wiki: "http://www.serebii.net/abilitydex/sweetveil.shtml"},
 {id: "swift swim", name: "Swift Swim", desc: "Boosts the Pokémon's Speed in rain.", wiki: "http://www.serebii.net/abilitydex/swiftswim.shtml"},
 {id: "symbiosis", name: "Symbiosis", desc: "The Pokémon can pass an item to an ally.", wiki: "http://www.serebii.net/abilitydex/symbiosis.shtml"},
 {id: "synchronize", name: "Synchronize", desc: "Passes on a burn, poison, or paralysis to the foe.", wiki: "http://www.serebii.net/abilitydex/synchronize.shtml"},
 {id: "tangled feet", name: "Tangled Feet", desc: "Raises evasion if the Pokémon is confused.", wiki: "http://www.serebii.net/abilitydex/tangledfeet.shtml"},
 {id: "technician", name: "Technician", desc: "Powers up the Pokémon's weaker moves.", wiki: "http://www.serebii.net/abilitydex/technician.shtml"},
 {id: "telepathy", name: "Telepathy", desc: "Protects against damaging moves from friendly Pokémon.", wiki: "http://www.serebii.net/abilitydex/telepathy.shtml"},
 {id: "teravolt", name: "Teravolt", desc: "Moves can be used regardless of Abilities.", wiki: "http://www.serebii.net/abilitydex/teravolt.shtml"},
 {id: "thick fat", name: "Thick Fat", desc: "Raises resistance to Fire- and Ice-type moves.", wiki: "http://www.serebii.net/abilitydex/thickfat.shtml"},
 {id: "tinted lens", name: "Tinted Lens", desc: "Powers up “not very effective” moves.", wiki: "http://www.serebii.net/abilitydex/tintedlens.shtml"},
 {id: "torrent", name: "Torrent", desc: "Powers up Water-type moves in a pinch.", wiki: "http://www.serebii.net/abilitydex/torrent.shtml"},
 {id: "tough claws", name: "Tough Claws", desc: "Powers up moves that make direct contact.", wiki: "http://www.serebii.net/abilitydex/toughclaws.shtml"},
 {id: "toxic boost", name: "Toxic Boost", desc: "Increases Attack to 1.5× when poisoned.", wiki: "http://www.serebii.net/abilitydex/toxicboost.shtml"},
 {id: "trace", name: "Trace", desc: "The Pokémon copies a foe's Ability.", wiki: "http://www.serebii.net/abilitydex/trace.shtml"},
 {id: "triage", name: "Triage", desc: "Boosts HP-restoring moves used to the highest priority.", wiki: "http://www.serebii.net/abilitydex/triage.shtml"},
 {id: "truant", name: "Truant", desc: "The Pokémon can't attack on consecutive turns.", wiki: "http://www.serebii.net/abilitydex/truant.shtml"},
 {id: "turboblaze", name: "Turboblaze", desc: "Moves can be used regardless of Abilities.", wiki: "http://www.serebii.net/abilitydex/turboblaze.shtml"},
 {id: "unaware", name: "Unaware", desc: "Ignores any change in stats by the foe.", wiki: "http://www.serebii.net/abilitydex/unaware.shtml"},
 {id: "unburden", name: "Unburden", desc: "Raises Speed if a held item is used.", wiki: "http://www.serebii.net/abilitydex/unburden.shtml"},
 {id: "unnerve", name: "Unnerve", desc: "Prevents opposing Pokémon from eating held Berries.", wiki: "http://www.serebii.net/abilitydex/unnerve.shtml"},
 {id: "victory star", name: "Victory Star", desc: "Raises moves' accuracy to 1.1× for friendly Pokémon.", wiki: "http://www.serebii.net/abilitydex/victorystar.shtml"},
 {id: "vital spirit", name: "Vital Spirit", desc: "Prevents the Pokémon from falling asleep.", wiki: "http://www.serebii.net/abilitydex/vitalspirit.shtml"},
 {id: "volt absorb", name: "Volt Absorb", desc: "Restores HP if hit by an Electric-type move.", wiki: "http://www.serebii.net/abilitydex/voltabsorb.shtml"},
 {id: "water absorb", name: "Water Absorb", desc: "Restores HP if hit by a Water-type move.", wiki: "http://www.serebii.net/abilitydex/waterabsorb.shtml"},
 {id: "water compaction", name: "Water Compaction", desc: "Raises Defense by two stages if hit by a Water-type move.", wiki: "http://www.serebii.net/abilitydex/watercompaction.shtml"},
 {id: "water veil", name: "Water Veil", desc: "Prevents the Pokémon from getting a burn.", wiki: "http://www.serebii.net/abilitydex/waterveil.shtml"},
 {id: "weak armor", name: "Weak Armor", desc: "Raises Speed and lowers Defense by one stage each upon being hit by any move.", wiki: "http://www.serebii.net/abilitydex/weakarmor.shtml"},
 {id: "white smoke", name: "White Smoke", desc: "Prevents the Pokémon's stats from being lowered.", wiki: "http://www.serebii.net/abilitydex/whitesmoke.shtml"},
 {id: "wimp out", name: "Wimp Out", desc: "Causes the Pokémon to flee or switch out when HP is low.", wiki: "http://www.serebii.net/abilitydex/wimpout.shtml"},
 {id: "wonder guard", name: "Wonder Guard", desc: "Only supereffective moves will hit.", wiki: "http://www.serebii.net/abilitydex/wonderguard.shtml"},
 {id: "wonder skin", name: "Wonder Skin", desc: "Has a 50% chance of protecting against non-damaging moves that inflict major status ailments.", wiki: "http://www.serebii.net/abilitydex/wonderskin.shtml"},
 {id: "zen mode", name: "Zen Mode", desc: "Changes the Pokémon's shape when HP is halved.", wiki: "http://www.serebii.net/abilitydex/zenmode.shtml"},
 {id: "emergency exit", name: "Emergency Exit", desc: "The Pokémon, sensing danger, switches out when its HP becomes half or less.", wiki: "http://www.serebii.net/abilitydex/emergencyexit.shtml"},
 {id: "merciless", name: "Merciless", desc: "The Pokémon’s attacks become critical hits if the target is poisoned.", wiki: "http://www.serebii.net/abilitydex/merciless.shtml"},
 {id: "water bubble", name: "Water Bubble", desc: "Lowers the power of Fire-type moves done to the Pokémon and prevents the Pokémon from getting a burn. Also secretly doubles the power of Water-type moves.", wiki: "http://www.serebii.net/abilitydex/waterbubble.shtml"},
 {id: "steelworker", name: "Steelworker", desc: "Powers up Steel-type moves.", wiki: "http://www.serebii.net/abilitydex/steelworker.shtml"},
 {id: "slush rush", name: "Slush Rush", desc: "Boosts the Pokémon’s Speed stat in a hailstorm.", wiki: "http://www.serebii.net/abilitydex/slushrush.shtml"},
 {id: "long reach", name: "Long Reach", desc: "The Pokémon uses its moves without making contact with the target.", wiki: "http://www.serebii.net/abilitydex/longreach.shtml"},
 {id: "liquid voice", name: "Liquid Voice", desc: "All sound-based moves become Water-type moves.", wiki: "http://www.serebii.net/abilitydex/liquidvoice.shtml"},
 {id: "galvanize", name: "Galvanize", desc: "Normal-type moves become Electric-type moves. The power of those moves is boosted a little.", wiki: "http://www.serebii.net/abilitydex/galvanize.shtml"},
 {id: "tangling hair", name: "Tangling Hair", desc: "Contact with the Pokémon lowers the attacker’s Speed stat.", wiki: "http://www.serebii.net/abilitydex/tanglinghair.shtml"},
 {id: "power of alchemy", name: "Power Of Alchemy", desc: "The Pokémon copies the Ability of a defeated ally.", wiki: "http://www.serebii.net/abilitydex/powerofalchemy.shtml"},
 {id: "beast boost", name: "Beast Boost", desc: "The Pokémon boosts its most proficient stat each time it knocks out a Pokémon.", wiki: "http://www.serebii.net/abilitydex/beastboost.shtml"},
 {id: "psychic surge", name: "Psychic Surge", desc: "Turns the ground into Psychic Terrain when the Pokémon enters a battle.", wiki: "http://www.serebii.net/abilitydex/psychicsurge.shtml"},
 {id: "misty surge", name: "Misty Surge", desc: "Turns the ground into Misty Terrain when the Pokémon enters a battle.", wiki: "http://www.serebii.net/abilitydex/mistysurge.shtml"},
 {id: "grassy surge", name: "Grassy Surge", desc: "Turns the ground into Grassy Terrain when the Pokémon enters a battle.", wiki: "http://www.serebii.net/abilitydex/grassysurge.shtml"},
 {id: "full metal body", name: "Full Metal Body", desc: "Prevents other Pokémon’s moves or Abilities from lowering the Pokémon’s stats.", wiki: "http://www.serebii.net/abilitydex/fullmetalbody.shtml"},
 {id: "prism armor", name: "Prism Armor", desc: "Reduces the power of supereffective attacks taken.", wiki: "http://www.serebii.net/abilitydex/prismarmor.shtml"}];
