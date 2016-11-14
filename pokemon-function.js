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
		default:
			bot.sendMessage({
				to: channelID,
				message: "I don't recognise that Pokémon, " + user + "!"
			});
	}
}
