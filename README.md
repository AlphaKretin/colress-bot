# Colress  
Colress is a [Discord](https://discordapp.com/) bot written in the NodeJS module [discord.io](https://github.com/izy521/discord.io), with a focus on functions related to the Pokémon series of video games. The name comes from [a scientist character](http://bulbapedia.bulbagarden.net/wiki/Colress) in said games. All commands are case-insensitive.  
  
You can install a copy of Colress yourself, more information on how below, but if you'd rather just use my copy, [here's](https://discordapp.com/oauth2/authorize?client_id=247697943098818570&scope=bot&permissions=52288) the invite link. For support and feedback, my Discord server is [here](https://discordapp.com/invite/GrMGspZ), and you can support me on Patreon [here]( https://www.patreon.com/alphakretinbots). 
  
## Commands  
Colress' primary purpose is a database of information about the Pokémon games. Basic knowledge about relevant terms will be assumed in this section and the next. Note that Colress' prefix is customisable - more information on that in the configuration section - this section assumes the default prefix of "!".  
  
### help  
Usage: `@Colress#7376`  
  
Mentioning Colress will provide a link to this readme.  
  
### !pokemon  
Usage: `!pokemon [name]`  
  
The `!pokemon` command searches for a Pokémon by name and returns the Pokémon's name, National Pokédex number, Alolan Pokédex number (if applicable), type and abilities, an image of the Pokémon, and a link to the Pokémon's page on [Serebii.net](http://www.serebii.net/), for more detailed information. The command can also look up alternate formes, including Mega Evolutions. Colress will search for the nearest guess if you don't type an exact name.  
  
As an example, `!pokemon volcarona` returns the following output:  
![!pokemon output](/readme-images/pokemon.png)  
  
### !pokedex  
Usage: `!pokedex [number]`  
  
The `!pokedex` command works the same way as the above `!pokemon` command, but searches by National Pokédex number. Because alternate formes share the same Pokédex number, this command does not support them.  
  
As an example, `!pokedex 6` returns the following output:  
![!pokedex output](/readme-images/pokedex.png)  
  
### !aloladex  
Usage: `!aloladex [number]`  
  
The `!aloladex` command works the same way as the above `!pokedex` command, but searches by Alolan Pokédex number.  
  
As an example, `!aloladex 40` returns the following output:  
![!aloladex output](/readme-images/aloladex.png)  
  
### !move  
Usage: `!move [name]`  
  
The `!move` command searches for a Pokémon battle move by name and returns its name, type, category (Physical, Special or Status), attack power, PP, accuracy, effect, additional effect when used as a Z-Move, any TMs that have taught the move throughout the series, and a Serebii link for further information. Not every move has all of these properties, and only the appropriate ones will be displayed. Colress will search for the nearest guess if you don't type an exact name.  
  
As an example, `!move earthquake` returns the following output:  
![!move output](/readme-images/move.png)  
  
### !item  
Usage: `!item [name]`  
  
The `!item` command searches for an item by name and returns its name, a description of what it does, and a Serebii link for further information. Colress will search for the nearest guess if you don't type an exact name.  
  
As an example, `!item enigma berry` returns the following output:  
![!item output](/readme-images/item.png)  
  
### !ability  
Usage: `!ability [name]`  
  
The `!ability` command searches for a Pokémon ability by name and returns its name, a description of what it does, and a Serebii link for further information. Colress will search for the nearest guess if you don't type an exact name.  
  
As an example, `!ability speed boost` returns the following output:  
![!ability output](/readme-images/ability.png)  
  
### !shiny  
Usage: `!shiny [name]`  
  
The `!shiny` command searches for a Pokémon by name and returns a link an image of it with its shiny colouration. Colress will search for the nearest guess if you don't type an exact name.  
  
As an example, `!shiny mega tyranitar` returns the following output:  
![!shiny output](/readme-images/shiny.png)  
  
### !weak  
Usage: `!weak [name]`  
  
The `!weak` command searches for a Pokémon by name and returns a list of the types it is weak to, it resists, and that it is immune to. When a type is displayed in __underline__, it indicates that both of a Pokémon's types are weak or resistant to the given type, amplifying the damage modifier. Colress will search for the nearest guess if you don't type an exact name.  
  
As an example, `!weak mimikyu` returns the following output:  
  
![!weak output](/readme-images/weak.png)  
  
### !weaktypes  
Usage: `!weaktypes [types]`  
  
The `!weaktypes` command is similar to the above `!weak` command, but accepts a list of types instead of a Pokémon's name.  
  
As an example, `!weaktypes ice dragon` returns the following output:  
  
![!weak output](/readme-images/weaktypes.png)  
  
### Reference Images  
The following commands all output a link or image.  
* `!typechart` displays a chart of Pokémon type relationships  
* `!evolution` displays a reference for evolution methods for Pokémon newly introduced in Sun and Moon versions  
* `!qr` links an imgur album of QR codes for Sun and Moon's scanning feature  
* `!nature` displays a table of Natures and which stats they increase and decrease.  
  
### !game  
For fun, Colress can play a variety of text-based games. `!game` with no arguments, or an invalid one, will return a list of games. Note that currently only one game can be running on any server at one time, so you'll have more luck using your own copy of Colress for this than if you've invited my master copy.  
  
#### High-low  
Usage: `!game highlow`  
  
In the high-low game, Colress names a Pokémon and players have to guess its National Pokédex number in 10 tries or less. When a player guesses incorrectly, Colress will say which Pokémon that number corresponds to, and if it's too low or too high.  
  
#### High-low 2  
Usage: `!game highlow2`  
  
This is an alternate version of the high-low game where the rules are reversed. Colress provides a Pokédex number and players guess the Pokémon's name, with a hint at 5 guesses.  
  
#### Who's that?  
Usage: `!game whosthat`  
  
This is a game of "Who's that Pokémon?", where Colress provides an image of a Pokémon and players have 10 seconds to give its name, with a hint at 5 seconds. At this time, the images aren't obscured in any way, so the game is rather easy.  
  
#### Hangman  
Usage: `!game hangman`  
  
In this game, Colress provides a series of blank spaces corresponding to a Pokémon's name, and players have to guess what letters are in the name through trial and error, with no more than 10 mistakes.  
  
## Installation  
If you so choose, you can run a copy of Colress yourself! This section will assume some basic familiarity with NodeJS and the command line.  
  
All of Colress' dependencies are properly documented in the package.json, so you can just download that, put it in a folder, and run `npm install`. To run the bot, the script expects two certain files - a configuration file, and a SQLite database with all of the information about the games that Colress serves.  
  
### Configuration  
By default, the configuration file is called `config.json`, and is expected to be found in a subfolder of the local directory called `config`, i.e. `config/config.json`. The script expects `config.json` to contain a JSON object with the following properties:  
```json  
{  
	"token": "",  
	"prefix": "!",  
	"data": "data/colressData.db",  
	"redirects": {  
		"serverID": "channelID",  
		"serverID": "channelID"  
	},  
	"imageUrl": "https://www.source.com/images/",  
	"shinyUrl": "https://www.source.com/shiny/"  
}  
```  
`token` is the Discord User token that the discord.io module will use to log in to Discord. You can obtain a bot token through the [Discord Developers website](https://discordapp.com/developers/applications/me/).  
  
`prefix` is the text that Colress will look for at the start of messages to indicate that it's a bot command. For example, if `prefix` is "c$", `!pokemon` becomes `c$pokemon`.  
  
`data` is the path in the local directory to the SQLite database. See the below section for more information about this database.  
  
If Colress would send a message to any server with an ID that is a key in `redirects`, it will be sent to the channel with the corresponding ID instead of the same channel the request came from.  
  
`imageUrl` is the web adress from which Colress will obtain images of Pokémon to post. It will append the pokemon's National Dex number, a suffix customisable from the database if applicable, and the extension ".png". For example, Mega Charizard X would be `https://www.source.com/images/006-mx.png`. `shinyURL` is used instead when a Shiny Pokémon image is requested.  
  
### Database  
Colress reads all of his information about Pokémon, Moves, Items and Abilities from an SQL database, named in the config file, with 4 tables: `mons`, `moves`, `items` and `abilities`. Here is the schema to create the tables, after which I will explain each column.  
```sql  
CREATE TABLE [moves](  
    [id] INT PRIMARY KEY NOT NULL UNIQUE,   
    [name] VARCHAR(32) NOT NULL,   
    [type] VARCHAR(8) NOT NULL,   
    [cat] VARCHAR(8) NOT NULL,   
    [power] INT,   
    [pp] INT NOT NULL,   
    [acc] INT,   
    [effect] VARCHAR(256) NOT NULL,   
    [zeffect] VARCHAR(128),   
    [tm] VARCHAR(4),   
    [wiki] VARCHAR(32));  
CREATE TABLE [items](  
    [id] INT PRIMARY KEY NOT NULL UNIQUE,   
    [name] VARCHAR(16) NOT NULL,   
    [desc] VARCHAR(256) NOT NULL,   
    [wiki] VARCHAR(16));  
CREATE TABLE [abilities](  
    [id] INT PRIMARY KEY NOT NULL UNIQUE,   
    [name] VARCHAR(16) NOT NULL,   
    [desc] VARCHAR(256) NOT NULL,   
    [wiki] VARCHAR(16));  
CREATE TABLE [mons](  
    [id] INT PRIMARY KEY NOT NULL UNIQUE,   
    [name] VARCHAR(32) NOT NULL,   
    [dex] INT NOT NULL,  
    [alola] INT,   
    [type1] VARCHAR(8) NOT NULL,   
    [type2] VARCHAR(8),   
    [ability1] VARCHAR(16) NOT NULL,   
    [ability2] VARCHAR(16),   
    [abilityHidden] VARCHAR(16) NOT NULL,   
    [imageSuffix] VARCHAR(4));
```  
  
#### mons  
`id` is just an arbitrary integer to use as the primary key. `name` is the Pokémon's name, `dex` is their National Pokédex number, and `alola` is their Alolan Pokédex number, if applicable. `type1` and `type2` are the Pokémon's types, `ability1` and `ability2` are their normail abilities, and `abilityHidden` is their hidden ability. `imageSuffix` is a string that will be appended after the image URL for the Pokémon. For example, Mega Charizard X might have "mx", so that Colress will look for the image "006-mx".  
  
#### moves  
`id` is just an arbitrary integer to use as the primary key. `name` is the move's name, and `type` is its type. `cat` is its category - as in Physical, Special or Status. `power` is the moves attack power, `pp` is its default max PP, and `acc` is its accuracy. `effect` is a description of any effect the move has, and `zeffect` is the extra effect a status move confers when used as a Z-Move. `tm` is the name of a TM the move has been obtainable from, and `wiki` is an alternate name used for generating the link to the Serebii page. This is not needed often if ever, as Colress will try converting the name to lower case and removing spaces.  
  
#### items  
`id` is just an arbitrary integer to use as the primary key. `name` is the item's name, and `desc` is a description of what it does. `wiki` is an alternate name used for generating the link to the Serebii page. This is not needed often if ever, as Colress will try converting the name to lower case and removing spaces.  
  
#### abilities  
`id` is just an arbitrary integer to use as the primary key. `name` is the ability's name, and `desc` is a description of what it does. `wiki` is an alternate name used for generating the link to the Serebii page. This is not needed often if ever, as Colress will try converting the name to lower case and removing spaces.

### To-do list
- Make pokemon images sillhouettes in whosthat
- Split typechart into sections
- Upload single images
