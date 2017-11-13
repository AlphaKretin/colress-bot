# Colress  
Colress is a [Discord](https://discordapp.com/) bot written in the NodeJS module [discord.io](https://github.com/izy521/discord.io), with a focus on functions related to the Pokémon series of video games. The name comes from [a scientist character](http://bulbapedia.bulbagarden.net/wiki/Colress) in said games. All commands are case-insenstive.  
  
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
For fun, Colress can play a variety of text-based games. `!game` with no arguments, or an invalid one, will return a list of games.  
  
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

