# Colress
Colress is a [Discord](https://discordapp.com/) bot written in the NodeJS module [discord.io](https://github.com/izy521/discord.io), with a focus on functions related to the Pokémon series of video games, though it has a few miscellaneous functions that I've thrown in for fun. The name comes from [a scientist character](http://bulbapedia.bulbagarden.net/wiki/Colress) in said games. All commands are case-insenstive.

A note: this documentation is a guide for interacting with the Colress bot you share a server with. It is not a guide for using the source code, or getting the bot on your own server, and I do not plan to support either of these things.

## Pokémon Database
Colress' primary and original purpose is a small database of information about the Pokémon games. Basic knowledge about relevant terms will be assumed in this section and the next.

### !pokemon
Usage: `!pokemon [name]`

The `!pokemon` command searches for a Pokémon by name and returns the Pokémon's name, National Pokédex number, Alolan Pokédex number (if applicable), type and abilities, as well as a link to an image of the Pokémon, which Discord should automatically embed, and a link to the Pokémon's page on [Serebii.net](http://www.serebii.net/), for more detailed information. When a Pokémon only has one non-hidden ability, their second is listead as "None" so that the hidden ability is always third. The command can also look up alternate formes, including Mega Evolutions. For Pokémon with hard-to-type characters in their name, such as Flabebé or the two Nidoran Pokémon, a substitution is used. A list of all valid names can be found [here](/readme-images/pokemonids.txt).

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

The `!move` command searches for a Pokémon battle move by name and returns its name, type, category (Physical, Special or Status), attack power, PP, accuracy, effect, additional effect when used as a Z-Move, any TMs that have taught the move throughout the series, and a Serebii link for further information. Not every move has all of these properties, and only the appropriate ones will be displayed.

As an example, `!move earthquake` returns the following output:
![!move output](/readme-images/move.png)

### !item
Usage: `!item [name]`

The `!item` command searches for an item by name and returns its name, a description of what it does, and a Serebii link for further information. 

As an example, `!item enigma berry` returns the following output:
![!item output](/readme-images/item.png)

### !ability
Usage: `!ability [name]`

The `!ability` command searches for a Pokémon ability by name and returns its name, a description of what it does, and a Serebii link for further information. 

As an example, `!ability speed boost` returns the following output:
![!ability output](/readme-images/ability.png)

### !lookup
Usage: `!lookup [name|number]`

The `!lookup` command searches for anything in the above categories, except for Alolan Pokédex number, returning the appropriate output.

As an example, `!lookup metagross-m` returns the following output:
![!lookup output](/readme-images/lookup.png)

### !shiny
Usage: `!shiny [name]`

The `!shiny` command searches for a Pokémon by name and returns a link to an image of it with its shiny colouration, which Discord should automatically embed.

As an example, `!shiny mega tyranitar` returns the following output:
![!shiny output](/readme-images/shiny.png)

## Other Pokémon Functions
As well as the database, Colress contains other functions related to the Pokémon games.

### !fc
Usage: `!fc` or `fc [@mention]` or `!fc [12 digit number] [name]`

The `!fc` command interfaces with a database of Nintendo 3DS Friend Codes for use with online trading and battling. First, users set their information with the latter of the above argument sets, with their 12 digit Friend Code and the name of their Trainer in the game, so you can find them in the Friend Plaza. Then, users can call their own information with the first example, or somebody else's with the second.

Below is an example of all 3 uses of the command. Note that Colress' FC is hard-coded to include letters as a joke, they are normally invalid:

![!fc output](/readme-images/fc.png)

### !weak
Usage: `!weak [name]`

The `!weak` command searches for a Pokémon by name and returns a list of the types it is weak to, it resists, and that it is immune to. When a type is displayed in **bold**, it indicates that both of a Pokémon's types are weak or resistant to the given type, amplifying the damage modifier.

As an example, `!weak mimikyu` returns the following output:

![!weak output](/readme-images/weak.png)

### Reference Images
The following commands all output a link, often to an image, which Discord should automatically embed.
* `!typechart` displays a chart of Pokémon type relationships
* `!evolution` displays a reference for evolution methods for Pokémon newly introduced in Sun and Moon versions
* `!qr` links an imgur album of QR codes for Sun and Moon's scanning feature
* `!nature` displays a table of Natures and which stats they increase and decrease.

## Miscellaneous Functions
While Colress largely exists for the sake of Pokémon, it has a couple other functions as well.

### !avatar
Usage: `!avatar [@mention]`

The `!avatar` command returns a link to the image that the user mentioned has as their avatar.

As an example, `!avatar @Colress#7376` returns the following output:
![!avatar output](/readme-images/avatar.png)

### !game
For fun, Colress can play a variety of text-based games. `!game` with no arguments, or an invalid one, will return a list of games.

#### High-low
Usage: `!game highlow`

In the high-low game, Colress names a Pokémon and players have to guess its National Pokédex number in 10 tries or less. When a player guesses incorrectly, Colress will say which Pokémon that number corresponds to, and if it's too low or too high.

Below is an example game of high-low:
![!game highlow](/readme-images/highlow.png)

#### High-low 2
Usage: `!game highlow2`

This is an alternate version of the high-low game where the rules are reversed. Colress provides a Pokédex number and players guess the Pokémon's name, with a hint at 5 guesses.

Below are snippets of an example game of high-low2:
![!game highlow2 a](/readme-images/highlow2a.png)
![!game highlow2 b](/readme-images/highlow2b.png)

#### Who's that?
Usage: `!game whosthat`

This is a game of "Who's that Pokémon?", where Colress provides an image of a Pokémon and players have 10 seconds to give its name, with a hint at 5 seconds. At this time, the images aren't obscured in any way, so the game is rather easy.

Below is an example game of who's that:

![!game whosthat](/readme-images/whosthat.png)

#### Hangman
Usage: `!game hangman`

In this game, Colress provides a series of blank spaces corresponding to a Pokémon's name, and players have to guess what letters are in the name through trial and error, with no more than 10 mistakes.

Below are snippets of an example game of hangman:
![!game hangman 1](/readme-images/hangman1.png)
![!game hangman 2](/readme-images/hangman2.png)

#### Acronyms
Usage: `!game acro`

In this game, Colress provides an acronym, and players have to provide a phrase that fits it, which Colress then deletes for anonymity. Then, after 30 seconds, Colress lists all the phrases, and players vote for which one they want to win. Self-voting is allowed to avoid ties in 2-player games, though ties are still possible and supported.

Below is an example game of the acronym game:
![!game acro](/readme-images/acro.png)
