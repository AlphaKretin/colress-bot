function pokemon(user, userID, channelID, message, event){
	var mon = message.substring(9);
	mon = mon.toLowerCase();
	switch (mon){
		case "bulbasaur":
			bot.sendMessage({
				to: channelID,
				message: "Image: " + bulbasaur.image + "\nName: " + bulbasaur.name + "\nPokédex No.: " + bulbasaur.dex + "\nType: " + bulbasaur.type + "\nAbility: " + bulbasaur.ability + "\nEvolution: " + bulbasaur.evolve + "\nWiki Link: " + bulbasaur.wiki
			});
			break;
		case "ivysaur":
			bot.sendMessage({
				to: channelID,
				message: "Image: " + ivysaur.image + "\nName: " + ivysaur.name + "\nPokédex No.: " + ivysaur.dex + "\nType: " + ivysaur.type + "\nAbility: " + ivysaur.ability + "\nEvolution: " + ivysaur.evolve + "\nWiki Link: " + ivysaur.wiki
			});
			break;
		case "venusaur":
			bot.sendMessage({
				to: channelID,
				message: "Image: " + venusaur.image + "\nName: " + venusaur.name + "\nPokédex No.: " + venusaur.dex + "\nType: " + venusaur.type + "\nAbility: " + venusaur.ability + "\nEvolution: " + venusaur.evolve + "\nWiki Link: " + venusaur.wiki
			});
			break;
		case "charmander":
			bot.sendMessage({
				to: channelID,
				message: "Image: " + charmander.image + "\nName: " + charmander.name + "\nPokédex No.: " + charmander.dex + "\nType: " + charmander.type + "\nAbility: " + charmander.ability + "\nEvolution: " + charmander.evolve + "\nWiki Link: " + charmander.wiki
			});
			break;
		case "charmeleon":
			bot.sendMessage({
				to: channelID,
				message: "Image: " + charmeleon.image + "\nName: " + charmeleon.name + "\nPokédex No.: " + charmeleon.dex + "\nType: " + charmeleon.type + "\nAbility: " + charmeleon.ability + "\nEvolution: " + charmeleon.evolve + "\nWiki Link: " + charmeleon.wiki
			});
			break;
		default:
			bot.sendMessage({
				to: channelID,
				message: "I don't recognise that Pokémon, " + user + "!"
			});
	}
}
