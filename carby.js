var Discord = require('discord.io');

var bot = new Discord.Client({
    token: "",
    autorun: true
});

var jsonfile = require('jsonfile');
var file = "data.json";
var data = {
	victims: -1,
	kinuVictims: -1,
	rodsBroken: -1
};

bot.on('ready', function () {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
    jsonfile.readFile(file, function(err, obj) {
		data = obj;
	});
});

bot.on('disconnect', function () {
    bot.connect();
});

//reads incoming messages for commands and redirects to functions to handle them
bot.on('message', function (user, userID, channelID, message, event) {
    var lowMes = message.toLowerCase();
    if ((userID !== bot.id) && (lowMes.charAt(0) === "!" || lowMes.charAt(0) === ".")) {
        //.help
        if (lowMes.indexOf(".help") === 0) {
            help(user, userID, channelID, message, event);
        }
        //.mcalc
        if (lowMes.indexOf(".mcalc") === 0) {
            mcalc(user, userID, channelID, message, event);
        }
        //.almagest
        if (lowMes.indexOf(".almagest") === 0) {
            almagest(user, userID, channelID, message, event);
        }
        //fiesta rolls
        if (lowMes.indexOf(".normal") === 0) {
            normal(user, userID, channelID, message, event);
        }
        if (lowMes.indexOf(".random") === 0) {
            random(user, userID, channelID, message, event);
        }
        if (lowMes.indexOf(".750") === 0) {
            sevenFifty(user, userID, channelID, message, event);
        }
        if (lowMes.indexOf(".no750") === 0) {
            noSevenFifty(user, userID, channelID, message, event);
        }
        if (lowMes.indexOf(".chaos") === 0) {
            chaos(user, userID, channelID, message, event);
        }
        if (lowMes.indexOf(".chaosno750") === 0) {
            chaosNoSevenFifty(user, userID, channelID, message, event);
        }
        if (lowMes.indexOf(".chaos750") === 0) {
            chaosSevenFifty(user, userID, channelID, message, event);
        }
        if (lowMes.indexOf(".purechaos") === 0) {
            purechaos(user, userID, channelID, message, event);
        }
        //.dd
        if (lowMes.indexOf(".dd") === 0) {
            dd(user, userID, channelID, message, event);
        }
        //speedtrap and rods
        if (lowMes.indexOf(".trapped") === 0) {
        	trapped(user, userID, channelID, message, event);
        }
        if (lowMes.indexOf(".victims") === 0) {
        	victim(user, userID, channelID, message, event);
        }
        if (lowMes.indexOf(".break") === 0) {
        	breakRod(user, userID, channelID, message, event);
        }
        if (lowMes.indexOf(".broken") === 0) {
        	broken(user, userID, channelID, message, event);
        }
    }
});

//.help
function help(user, userID, channelID, message, event) {
    bot.createDMChannel(userID);
    bot.sendMessage({
        to: userID,
        message: "I have a lot of commands, too many to list in this Discord PM. Check this Pastebin: https://pastebin.com/g2FtqmMv"
    });
}

//.mcalc
function mcalc(user, userID, channelID, message, event) {
    var args = message.toLowerCase().split(" ");
    var m;
    var nextLevel;
    //expected args - 0: ".mcalc", 1: level (int), 2: str/mag (int), 3: type (string), 4: extra stat (int)
    var level = parseInt(args[1]);
    var strMag = parseInt(args[2]);
    var statString = "";
    if (isNaN(level) || isNaN(strMag)) {
        abortMcalc(user, userID, channelID, message, event);
        return;
    }
    if (args[3] === "physical") {
        m = Math.floor(((level * strMag) / 128) + 2);
        nextLevel = Math.floor((128 * ((m + 1) - 2)) / strMag);
        statString = "Strength";
    } else if (args[3] === "magic") {
        m = Math.floor(((level * strMag) / 256) + 4);
        nextLevel = Math.floor((256 * ((m + 1) - 4)) / strMag);
        statString = "Magic";
    } else if (args[3] === "knife") {
        var agil = parseInt(args[4]);
        if (isNaN(agil)) {
            abortMcalc(user, userID, channelID, message, event);
            return;
        } else {
            var agilBonus = false;
            m = Math.floor(((level * strMag) / 128) + ((level * agil) % 128) + 2);
            //TODO if agil bonus deal with it
        }
    } else if (args[3] === "chicken") {} else if (args[3] === "rune") {} else if (args[3] === "fists") {
        m = Math.floor(((level * strMag) / 256) + 2);
        nextLevel = Math.floor((256 * ((m + 1) - 2)) / strMag);
        statString = "Strength";
    } else {
        abortMcalc(user, userID, channelID, message, event);
        return;
    }
    bot.sendMessage({
        to: channelID,
        message: "At level " + level + " with " + strMag + " " + statString + ", your " + args[3] + " M is " + m + ". To reach the next M, you need to reach level " + nextLevel
    });
}

function abortMcalc(user, userID, channelID, message, event) {
    bot.sendMessage({
        to: channelID,
        message: "The syntax for this command is: .mcalc level strength/magic <type> <agility/magic>; example: .mcalc 20 46 rune 44 (valid types: physical, magic, knife, chicken, rune, fists)"
    });
    return;
}

//.almagest
function almagest(user, userID, channelID, message, event) {
    var args = message.toLowerCase().split(" ");
    var vit = parseInt(args[1]);
    if (isNaN(vit) || args.length === 1) {
        bot.sendMessage({
            to: channelID,
            message: "NED's Almagest can deal 1620 to 1665 Holy damage and inflict Sap. Good luck! (Only 720 to 740 damage if you have Shell! Yay!)"
        });
    } else {
        var target = Math.floor((32 * 1665) / (vit + 32));
        var buffTarget = Math.floor((32 * 1725) / (vit + 32));
        bot.sendMessage({
            to: channelID,
            message: "You need " + target + " base HP to survive a max 1665 damage Almagest with 10 Vitality (or " + buffTarget + " to have 1725 HP for a buffer). Refer here for the level you'll need! http://bit.ly/1WKSUyu"
        });
    }
}

//DIY fiestas
var windJobs = ["Knight", "Monk", "Thief", "Black Mage", "White Mage", "Blue Mage"];
var waterJobs = ["Red Mage", "Time Mage", "Summoner", "Berserker", "Mystic Knight"];
var fireJobs = ["Beastmaster", "Geomancer", "Ninja", "Ranger", "Bard"];
var earthJobs = ["Dragoon", "Dancer", "Samurai", "Chemist"];
var miscJobs = ["Freelancer", "Mime"];
var mageJobs = ["Black Mage", "White Mage", "Blue Mage", "Red Mage", "Time Mage", "Summoner", "Geomancer", "Bard", "Dancer", "Chemist", "Mime"];
var noMageJobs = ["Monk", "Thief", "Knight", "Berserker", "Mystic Knight", "Ninja", "Ranger", "Beastmaster", "Samurai", "Dragoon"];

function normal(user, userID, channelID, message, event) {
    var wind = windJobs[getIncInt(0, windJobs.length - 1)];
    var water = waterJobs[getIncInt(0, waterJobs.length - 1)];
    var fire = fireJobs[getIncInt(0, fireJobs.length - 1)];
    var earth = earthJobs[getIncInt(0, earthJobs.length - 1)];
    bot.createDMChannel(userID);
    bot.sendMessage({
        to: userID,
        message: "Wind Job: " + wind + "\nWater Job: " + water + "\nFire Job: " + fire + "\nEarth Job: " + earth
    });
}

function random(user, userID, channelID, message, event) {
    var wind = windJobs[getIncInt(0, windJobs.length - 1)];
    var randWater = windJobs.concat(waterJobs);
    var water = randWater[getIncInt(0, randWater.length - 1)];
    var randFire = randWater.concat(fireJobs);
    var fire = randFire[getIncInt(0, randFire.length - 1)];
    var randEarth = randFire.concat(earthJobs);
    var earth = randEarth[getIncInt(0, randEarth.length - 1)];
    bot.createDMChannel(userID);
    bot.sendMessage({
        to: userID,
        message: "Wind Job: " + wind + "\nWater Job: " + water + "\nFire Job: " + fire + "\nEarth Job: " + earth
    });
}

function sevenFifty(user, userID, channelID, message, event) {
    var mageWind = intersect(windJobs, mageJobs);
    var wind = mageWind[getIncInt(0, mageWind.length - 1)];
    var mageWater = intersect(waterJobs, mageJobs);
    var water = mageWater[getIncInt(0, mageWater.length - 1)];
    var mageFire = intersect(fireJobs, mageJobs);
    var fire = mageFire[getIncInt(0, mageFire.length - 1)];
    var mageEarth = intersect(earthJobs, mageJobs);
    var earth = mageEarth[getIncInt(0, mageEarth.length - 1)];
    bot.createDMChannel(userID);
    bot.sendMessage({
        to: userID,
        message: "Wind Job: " + wind + "\nWater Job: " + water + "\nFire Job: " + fire + "\nEarth Job: " + earth
    });
}

function noSevenFifty(user, userID, channelID, message, event) {
    var noWind = intersect(windJobs, noMageJobs);
    var wind = noWind[getIncInt(0, noWind.length - 1)];
    var noWater = intersect(waterJobs, noMageJobs);
    var water = noWater[getIncInt(0, noWater.length - 1)];
    var noFire = intersect(fireJobs, noMageJobs);
    var fire = noFire[getIncInt(0, noFire.length - 1)];
    var noEarth = intersect(earthJobs, noMageJobs);
    var earth = noEarth[getIncInt(0, noEarth.length - 1)];
    bot.createDMChannel(userID);
    bot.sendMessage({
        to: userID,
        message: "Wind Job: " + wind + "\nWater Job: " + water + "\nFire Job: " + fire + "\nEarth Job: " + earth
    });
}

function chaos(user, userID, channelID, message, event) {
    var allJobs = windJobs.concat(waterJobs).concat(fireJobs).concat(earthJobs);
    //get 4 jobs then sort by crystal
    var tempJobs = [allJobs[getIncInt(0, allJobs.length - 1)], allJobs[getIncInt(0, allJobs.length - 1)], allJobs[getIncInt(0, allJobs.length - 1)], allJobs[getIncInt(0, allJobs.length - 1)]];
    var fourJobs = [];
    for (var job of tempJobs) {
        if (windJobs.includes(job)) {
            fourJobs.push(job);
        }
    }
    for (var job of tempJobs) {
        if (waterJobs.includes(job)) {
            fourJobs.push(job);
        }
    }
    for (var job of tempJobs) {
        if (fireJobs.includes(job)) {
            fourJobs.push(job);
        }
    }
    for (var job of tempJobs) {
        if (earthJobs.includes(job)) {
            fourJobs.push(job);
        }
    }
    var wind = fourJobs[0];
    var water = fourJobs[1];
    var fire = fourJobs[2];
    var earth = fourJobs[3];
    bot.createDMChannel(userID);
    bot.sendMessage({
        to: userID,
        message: "Wind Job: " + wind + "\nWater Job: " + water + "\nFire Job: " + fire + "\nEarth Job: " + earth
    });
}

function chaosNoSevenFifty(user, userID, channelID, message, event) {
    var allJobs = windJobs.concat(waterJobs).concat(fireJobs).concat(earthJobs);
    var noJobs = intersect(allJobs, noMageJobs);
    //get 4 jobs then sort by crystal
    var tempJobs = [noJobs[getIncInt(0, noJobs.length - 1)], noJobs[getIncInt(0, noJobs.length - 1)], noJobs[getIncInt(0, noJobs.length - 1)], noJobs[getIncInt(0, noJobs.length - 1)]];
    var fourJobs = [];
    for (var job of tempJobs) {
        if (windJobs.includes(job)) {
            fourJobs.push(job);
        }
    }
    for (var job of tempJobs) {
        if (waterJobs.includes(job)) {
            fourJobs.push(job);
        }
    }
    for (var job of tempJobs) {
        if (fireJobs.includes(job)) {
            fourJobs.push(job);
        }
    }
    for (var job of tempJobs) {
        if (earthJobs.includes(job)) {
            fourJobs.push(job);
        }
    }
    var wind = fourJobs[0];
    var water = fourJobs[1];
    var fire = fourJobs[2];
    var earth = fourJobs[3];
    bot.createDMChannel(userID);
    bot.sendMessage({
        to: userID,
        message: "Wind Job: " + wind + "\nWater Job: " + water + "\nFire Job: " + fire + "\nEarth Job: " + earth
    });
}

function chaosSevenFifty(user, userID, channelID, message, event) {
    var allJobs = windJobs.concat(waterJobs).concat(fireJobs).concat(earthJobs);
    var magJobs = intersect(allJobs, mageJobs);
    //get 4 jobs then sort by crystal
    var tempJobs = [magJobs[getIncInt(0, magJobs.length - 1)], magJobs[getIncInt(0, magJobs.length - 1)], magJobs[getIncInt(0, magJobs.length - 1)], magJobs[getIncInt(0, magJobs.length - 1)]];
    var fourJobs = [];
    for (var job of tempJobs) {
        if (windJobs.includes(job)) {
            fourJobs.push(job);
        }
    }
    for (var job of tempJobs) {
        if (waterJobs.includes(job)) {
            fourJobs.push(job);
        }
    }
    for (var job of tempJobs) {
        if (fireJobs.includes(job)) {
            fourJobs.push(job);
        }
    }
    for (var job of tempJobs) {
        if (earthJobs.includes(job)) {
            fourJobs.push(job);
        }
    }
    var wind = fourJobs[0];
    var water = fourJobs[1];
    var fire = fourJobs[2];
    var earth = fourJobs[3];
    bot.createDMChannel(userID);
    bot.sendMessage({
        to: userID,
        message: "Wind Job: " + wind + "\nWater Job: " + water + "\nFire Job: " + fire + "\nEarth Job: " + earth
    });
}

function purechaos(user, userID, channelID, message, event) {
    var allJobs = windJobs.concat(waterJobs).concat(fireJobs).concat(earthJobs).concat(miscJobs);
    var wind = allJobs[getIncInt(0, allJobs.length - 1)];
    var water = allJobs[getIncInt(0, allJobs.length - 1)];
    var fire = allJobs[getIncInt(0, allJobs.length - 1)];
    var earth = allJobs[getIncInt(0, allJobs.length - 1)];
    bot.createDMChannel(userID);
    bot.sendMessage({
        to: userID,
        message: "Wind Job: " + wind + "\nWater Job: " + water + "\nFire Job: " + fire + "\nEarth Job: " + earth
    });
}

//.dd
var ddLines = [
    "I suggest using **ENCOUNTER MANIPULATION** (#1)",
    "Good thing I can !Control Shield Dragons so I can hashtag grind on them for **TWO HOURS** (#2)",
    "No, I have to let the Aegis Shield burn, I ran the numbers, doing it without the Flame Shield is impossible. (#3)",
    "Running through the Gil Turtle cave four times lets you buy sufficient cottages! (#4)",
    "You'll need Bartz in critical HP for this fight. It's not like the Seal Guardians have physical attacks... (#5)",
    "I may not have Summoner, but I absolutely have to go get Catoblepas for... some reason! (#6)",
    "...what free Hermes Sandals? (#7)",
    "I just realized I didn't put Butz in the front row... (I didn't notice Krile either...) (#8)",
    "I'm not using Catch and Release for this fight because I can't have four Beastmasters. (#9)",
    "**I'M NOT USING FOCUS, IT DOESN'T DO ENOUGH DAMAGE. I TESTED THIS EXTENSIVELY** (#10)",
    "I can't get the genji shield off of Gilgamesh because I can't steal. (#11)",
    "THE LAG IN THE GAME just prevented my full party curaga! (#12)",
    "Hold on, I need to use my eyedrops on the person WHO HAS RAPID FIRE. (#13)",
    "Good thing I have a map of Exdeath's Castle so I can completely miss the Hayate Bow! (#14)",
    "Giving your Dancer the Chicken Knife over your Ranger is Sound Dragondarch Planning! (#15)",
    "Yes, I believe my Ranger with Rapid Fire is the lowest damage character. I will make her a Red Mage instead. (#16)",
    "Bartz, please use !Dance while we attempt to run. While wielding the Chicken Knife. (#17)",
    "http://winvm.kyrosiris.com/optimalhelmchoices.png (#18)",
    "I wish I, a person with access to Equip Bows, had a way to blind someone! (#19)",
    "But he's not weak to Air, as far as I'm aware of! ...Oh, wait, yes he is, never mind. (#20)",
    "Sword Dance is the best form of damage we've got with this team. (#21)",
    "Good thing I have Red Mage so I can hashtag grind Mini Dragons for **TWO HOURS** while my sycophants in chat defend it! (#22)",
    "Ladies and gentlemen, the grinding is over, we've hit level 32! ...now what do I do? (#23)",
    "Yes! Sub 5-hour world 1! I'm so good. (#24)",
    "Oh my god, the Wonder Wand missed! (#25)",
    "...Does the Hayate Bow even sell? (#26)",
    "There's no save points around here. *enters next room, finds save point* (#27)",
    "I am a fucking idiot. I have this thing called !Mix, why am I not using it? (#28)",
    "Is Archeosaur fuckin' heavy or something? (#29)",
    "ANYTHING but the fucking chicken knife! (#30)",
    "Now I actually know what the fuck I'm doing here. (#31)",
    "I actually don't do serious speedruns of this game. I just have a fairly good amount of knowledge about how the mechanics work and stuff. (#32)",
    "I need Faris solo to gain experience for **#GOBLINPUNCH**. *game overs in the Wind Shrine without having saved the game* (#33)",
    "THE CHEST IS OPEN! WHERE IS THE DRAGON FANG? I'M STARING AT THE OPEN CHEST!!! (#34)"
];

function dd(user, userID, channelID, message, event) {
    var args = message.toLowerCase().split(" ");
    var index = parseInt(args[1]);
    if (isNaN(index) || args.length === 1 || index > ddLines.length || index < 1) {
        bot.sendMessage({
            to: channelID,
            message: ddLines[getIncInt(0, ddLines.length - 1)]
        });
    } else {
        bot.sendMessage({
            to: channelID,
            message: ddLines[index - 1]
        });
    }
}

//speedtrap
function trapped(user, userID, channelID, message, event) {
	data.victims++;
	if (userID === "90507312564805632") {
		data.kinuVictims++;
	}
	bot.sendMessage({
		to: channelID,
		message: "Gotta go fast! Total Victims: " + data.victims
	});
	jsonfile.writeFile(file, data, function (err) {
  		console.error(err);
	});
}

function victim(user, userID, channelID, message, event) {
	bot.sendMessage({
		to: channelID,
		message: "<@" + userID + ">: Dr. Clapperclaw's Deadly Speed Trap has snared " + data.victims + " victims! (" + data.kinuVictims +" of them are alcharagia...)"
	});
}

function breakRod(user, userID, channelID, message, event) {
	var args = message.toLowerCase().split(" ");
    var index = parseInt(args[1]);
    if (isNaN(index) || args.length === 1 || index < 0) {
    	data.rodsBroken++;
    } else {
    	data.rodsBroken += index;
    }
    bot.sendMessage({
        to: channelID,
        message: "750 blaze rods errday (" + data.rodsBroken + " broken so far!)"
    });
    jsonfile.writeFile(file, data, function (err) {
  		console.error(err);
	});
}

function broken(user, userID, channelID, message, event) {
	bot.sendMessage({
		to: channelID,
		message: "You godless heathens have blazed " + data.rodsBroken + " rods so far. DARE has failed you all."
	});
}

//misc functions
function getIncInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function intersect(a, b) {
    var t;
    if (b.length > a.length) {
        t = b;
        b = a;
        a = t;
    } // indexOf to loop over shorter
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    }).filter(function (e, i, c) { // extra step to remove duplicates
        return c.indexOf(e) === i;
    });
}