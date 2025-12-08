gen1Toggle = true
gen2Toggle = true
gen3Toggle = true
gen4Toggle = true
gen5Toggle = true
gen6Toggle = true
gen7Toggle = true
gen8Toggle = true
gen9Toggle = true

function getPokedex(){
    //gen 1  TODO
    const pokedexKanto = [
        {name: 'bulbasaur',type1: 'grass',type2: 'poison',ability: ['overgrow'], color: ['blue','green'], stage: 1, fullyEvolved: false, gen: 1, guessed: false },
        {name: 'ivysaur',type1: 'grass',type2: 'poison',ability: ['overgrow'], color: ['blue','green'], stage: 2, fullyEvolved: false, gen: 1, guessed: false },
        {name: 'venusaur',type1: 'grass',type2: 'poison',ability: ['overgrow'], color: ['blue','green'], stage: 3, fullyEvolved: true, gen: 1, guessed: false },
        {name: 'charmander',type1: 'fire',type2: 'none',ability: ['blaze'], color: ['red','orange'], stage: 1, fullyEvolved: false, gen: 1, guessed: false },
        {name: 'charmeleon',type1: 'fire',type2: 'none',ability: ['blaze'], color: ['red','orange'], stage: 2, fullyEvolved: false, gen: 1, guessed: false },
        {name: 'charizard',type1: 'fire',type2: 'flying',ability: ['blaze'], color: ['red','orange'], stage: 3, fullyEvolved: true, gen: 1, guessed: false },
        {name: 'squirtle',type1: 'water',type2: 'none',ability: ['torrent'], color: ['blue'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #007
        {name: 'wartortle',type1: 'water',type2: 'none',ability: ['torrent'], color: ['blue'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #008
        {name: 'blastoise',type1: 'water',type2: 'none',ability: ['torrent'], color: ['blue'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #009
        {name: 'caterpie',type1: 'bug',type2: 'none',ability: ['shield dust'], color: ['green'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #010
        {name: 'metapod',type1: 'bug',type2: 'none',ability: ['shed skin'], color: ['green'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #011
        {name: 'butterfree',type1: 'bug',type2: 'flying',ability: ['compound eyes'], color: ['purple','white'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #012
        {name: 'weedle',type1: 'bug',type2: 'poison',ability: ['shield dust'], color: ['brown','yellow'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #013
        {name: 'kakuna',type1: 'bug',type2: 'poison',ability: ['shed skin'], color: ['yellow'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #014
        {name: 'beedrill',type1: 'bug',type2: 'poison',ability: ['swarm'], color: ['yellow','black'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #015
        {name: 'pidgey',type1: 'normal',type2: 'flying',ability: ['keen eye'], color: ['brown','tan'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #016
        {name: 'pidgeotto',type1: 'normal',type2: 'flying',ability: ['keen eye'], color: ['brown','red'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #017
        {name: 'pidgeot',type1: 'normal',type2: 'flying',ability: ['keen eye'], color: ['brown','red'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #018
        {name: 'rattata',type1: 'normal',type2: 'none',ability: ['run away'], color: ['purple'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #019
        {name: 'raticate',type1: 'normal',type2: 'none',ability: ['run away'], color: ['brown'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #020
        {name: 'spearow',type1: 'normal',type2: 'flying',ability: ['keen eye'], color: ['brown'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #021
        {name: 'fearow',type1: 'normal',type2: 'flying',ability: ['keen eye'], color: ['brown','red'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #022
        {name: 'ekans',type1: 'poison',type2: 'none',ability: ['intimidate'], color: ['purple'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #023
        {name: 'arbok',type1: 'poison',type2: 'none',ability: ['intimidate'], color: ['purple'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #024
        {name: 'pikachu',type1: 'electric',type2: 'none',ability: ['static'], color: ['yellow'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #025
        {name: 'raichu',type1: 'electric',type2: 'none',ability: ['static'], color: ['yellow','orange'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #026
        {name: 'sandshrew',type1: 'ground',type2: 'none',ability: ['sand veil'], color: ['yellow','brown'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #027
        {name: 'sandslash',type1: 'ground',type2: 'none',ability: ['sand veil'], color: ['yellow','brown'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #028
        {name: 'nidoran female',type1: 'poison',type2: 'none',ability: ['poison point'], color: ['blue'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #029
        {name: 'nidorina',type1: 'poison',type2: 'none',ability: ['poison point'], color: ['blue'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #030
        {name: 'nidoqueen',type1: 'poison',type2: 'ground',ability: ['poison point'], color: ['blue'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #031
        {name: 'nidoran male',type1: 'poison',type2: 'none',ability: ['poison point'], color: ['purple'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #032
        {name: 'nidorino',type1: 'poison',type2: 'none',ability: ['poison point'], color: ['purple'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #033
        {name: 'nidoking',type1: 'poison',type2: 'ground',ability: ['poison point'], color: ['purple'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #034
        {name: 'clefairy',type1: 'fairy',type2: 'none',ability: ['cute charm'], color: ['pink'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #035
        {name: 'clefable',type1: 'fairy',type2: 'none',ability: ['cute charm'], color: ['pink'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #036
        {name: 'vulpix',type1: 'fire',type2: 'none',ability: ['flash fire'], color: ['brown','orange'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #037
        {name: 'ninetales',type1: 'fire',type2: 'none',ability: ['flash fire'], color: ['yellow'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #038
        {name: 'jigglypuff',type1: 'normal',type2: 'fairy',ability: ['cute charm'], color: ['pink'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #039
        {name: 'wigglytuff',type1: 'normal',type2: 'fairy',ability: ['cute charm'], color: ['pink'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #040
        {name: 'zubat',type1: 'poison',type2: 'flying',ability: ['inner focus'], color: ['purple','blue'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #041
        {name: 'golbat',type1: 'poison',type2: 'flying',ability: ['inner focus'], color: ['purple','blue'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #042
        {name: 'oddish',type1: 'grass',type2: 'poison',ability: ['chlorophyll'], color: ['blue','green'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #043
        {name: 'gloom',type1: 'grass',type2: 'poison',ability: ['chlorophyll'], color: ['blue','green'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #044
        {name: 'vileplume',type1: 'grass',type2: 'poison',ability: ['chlorophyll'], color: ['red','blue'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #045
        {name: 'paras',type1: 'bug',type2: 'grass',ability: ['effect spore'], color: ['red','orange'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #046
        {name: 'parasect',type1: 'bug',type2: 'grass',ability: ['effect spore'], color: ['red','orange'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #047
        {name: 'venonat',type1: 'bug',type2: 'poison',ability: ['compound eyes'], color: ['purple','red'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #048
        {name: 'venomoth',type1: 'bug',type2: 'poison',ability: ['shield dust'], color: ['purple'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #049
        {name: 'diglett',type1: 'ground',type2: 'none',ability: ['sand veil'], color: ['brown'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #050
        {name: 'dugtrio',type1: 'ground',type2: 'none',ability: ['sand veil'], color: ['brown'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #051
        {name: 'meowth',type1: 'normal',type2: 'none',ability: ['pickup'], color: ['yellow','brown'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #052
        {name: 'persian',type1: 'normal',type2: 'none',ability: ['limber'], color: ['yellow','tan'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #053
        {name: 'psyduck',type1: 'water',type2: 'none',ability: ['damp'], color: ['yellow'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #054
        {name: 'golduck',type1: 'water',type2: 'none',ability: ['damp'], color: ['blue'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #055
        {name: 'mankey',type1: 'fighting',type2: 'none',ability: ['vital spirit'], color: ['white','brown'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #056
        {name: 'primeape',type1: 'fighting',type2: 'none',ability: ['vital spirit'], color: ['white','brown'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #057
        {name: 'growlithe',type1: 'fire',type2: 'none',ability: ['intimidate'], color: ['orange','black'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #058
        {name: 'arcanine',type1: 'fire',type2: 'none',ability: ['intimidate'], color: ['orange','black'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #059
        {name: 'poliwag',type1: 'water',type2: 'none',ability: ['water absorb'], color: ['blue'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #060
        {name: 'poliwhirl',type1: 'water',type2: 'none',ability: ['water absorb'], color: ['blue'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #061
        {name: 'poliwrath',type1: 'water',type2: 'fighting',ability: ['water absorb'], color: ['blue'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #062
        {name: 'abra',type1: 'psychic',type2: 'none',ability: ['synchronize'], color: ['yellow','brown'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #063
        {name: 'kadabra',type1: 'psychic',type2: 'none',ability: ['synchronize'], color: ['yellow','brown'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #064
        {name: 'alakazam',type1: 'psychic',type2: 'none',ability: ['synchronize'], color: ['yellow','brown'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #065
        {name: 'machop',type1: 'fighting',type2: 'none',ability: ['guts'], color: ['gray','blue'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #066
        {name: 'machoke',type1: 'fighting',type2: 'none',ability: ['guts'], color: ['gray','blue'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #067
        {name: 'machamp',type1: 'fighting',type2: 'none',ability: ['guts'], color: ['gray','blue'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #068
        {name: 'bellsprout',type1: 'grass',type2: 'poison',ability: ['chlorophyll'], color: ['green','yellow'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #069
        {name: 'weepinbell',type1: 'grass',type2: 'poison',ability: ['chlorophyll'], color: ['green','yellow'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #070
        {name: 'victreebel',type1: 'grass',type2: 'poison',ability: ['chlorophyll'], color: ['green','yellow'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #071
        {name: 'tentacool',type1: 'water',type2: 'poison',ability: ['clear body'], color: ['blue','red'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #072
        {name: 'tentacruel',type1: 'water',type2: 'poison',ability: ['clear body'], color: ['blue','red'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #073
        {name: 'geodude',type1: 'rock',type2: 'ground',ability: ['rock head'], color: ['brown','gray'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #074
        {name: 'graveler',type1: 'rock',type2: 'ground',ability: ['rock head'], color: ['brown','gray'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #075
        {name: 'golem',type1: 'rock',type2: 'ground',ability: ['rock head'], color: ['brown','gray'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #076
        {name: 'ponyta',type1: 'fire',type2: 'none',ability: ['run away'], color: ['white','red'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #077
        {name: 'rapidash',type1: 'fire',type2: 'none',ability: ['run away'], color: ['white','blue'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #078
        {name: 'slowpoke',type1: 'water',type2: 'psychic',ability: ['oblivious'], color: ['pink'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #079
        {name: 'slowbro',type1: 'water',type2: 'psychic',ability: ['oblivious'], color: ['pink','brown'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #080
        {name: 'magnemite',type1: 'electric',type2: 'steel',ability: ['magnet pull'], color: ['gray','blue'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #081
        {name: 'magneton',type1: 'electric',type2: 'steel',ability: ['magnet pull'], color: ['gray','blue'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #082
        {name: 'farfetchd',type1: 'normal',type2: 'flying',ability: ['keen eye'], color: ['brown','white'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #083
        {name: 'doduo',type1: 'normal',type2: 'flying',ability: ['run away'], color: ['brown','black'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #084
        {name: 'dodrio',type1: 'normal',type2: 'flying',ability: ['run away'], color: ['brown','black'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #085
        {name: 'seel',type1: 'water',type2: 'none',ability: ['thick fat'], color: ['white'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #086
        {name: 'dewgong',type1: 'water',type2: 'ice',ability: ['thick fat'], color: ['white','blue'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #087
        {name: 'grimer',type1: 'poison',type2: 'none',ability: ['stench'], color: ['purple'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #088
        {name: 'muk',type1: 'poison',type2: 'none',ability: ['stench'], color: ['purple'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #089
        {name: 'shellder',type1: 'water',type2: 'none',ability: ['shell armor'], color: ['purple'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #090
        {name: 'cloyster',type1: 'water',type2: 'ice',ability: ['shell armor'], color: ['purple','white'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #091
        {name: 'gastly',type1: 'ghost',type2: 'poison',ability: ['levitate'], color: ['purple'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #092
        {name: 'haunter',type1: 'ghost',type2: 'poison',ability: ['levitate'], color: ['purple'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #093
        {name: 'gengar',type1: 'ghost',type2: 'poison',ability: ['cursed body'], color: ['purple'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #094
        {name: 'onix',type1: 'rock',type2: 'ground',ability: ['rock head'], color: ['gray'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #095
        {name: 'drowzee',type1: 'psychic',type2: 'none',ability: ['insomnia'], color: ['yellow','brown'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #096
        {name: 'hypno',type1: 'psychic',type2: 'none',ability: ['insomnia'], color: ['yellow','brown'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #097
        {name: 'krabby',type1: 'water',type2: 'none',ability: ['hyper cutter'], color: ['red'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #098
        {name: 'kingler',type1: 'water',type2: 'none',ability: ['hyper cutter'], color: ['red'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #099
        {name: 'voltorb',type1: 'electric',type2: 'none',ability: ['soundproof'], color: ['red','white'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #100
        {name: 'electrode',type1: 'electric',type2: 'none',ability: ['soundproof'], color: ['red','white'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #101
        {name: 'exeggcute',type1: 'grass',type2: 'psychic',ability: ['chlorophyll'], color: ['pink','brown'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #102
        {name: 'exeggutor',type1: 'grass',type2: 'psychic',ability: ['chlorophyll'], color: ['yellow','green'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #103
        {name: 'cubone',type1: 'ground',type2: 'none',ability: ['rock head'], color: ['brown'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #104
        {name: 'marowak',type1: 'ground',type2: 'none',ability: ['rock head'], color: ['brown'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #105
        {name: 'hitmonlee',type1: 'fighting',type2: 'none',ability: ['limber'], color: ['brown','yellow'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #106
        {name: 'hitmonchan',type1: 'fighting',type2: 'none',ability: ['keen eye'], color: ['brown','red'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #107
        {name: 'lickitung',type1: 'normal',type2: 'none',ability: ['own tempo'], color: ['pink'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #108
        {name: 'koffing',type1: 'poison',type2: 'none',ability: ['levitate'], color: ['purple'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #109
        {name: 'weezing',type1: 'poison',type2: 'none',ability: ['levitate'], color: ['purple'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #110
        {name: 'rhyhorn',type1: 'ground',type2: 'rock',ability: ['lightning rod'], color: ['gray'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #111
        {name: 'rhydon',type1: 'ground',type2: 'rock',ability: ['lightning rod'], color: ['gray'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #112
        {name: 'chansey',type1: 'normal',type2: 'none',ability: ['natural cure'], color: ['pink'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #113
        {name: 'tangela',type1: 'grass',type2: 'none',ability: ['chlorophyll'], color: ['blue'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #114
        {name: 'kangaskhan',type1: 'normal',type2: 'none',ability: ['early bird'], color: ['brown'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #115
        {name: 'horsea',type1: 'water',type2: 'none',ability: ['swift swim'], color: ['blue'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #116
        {name: 'seadra',type1: 'water',type2: 'none',ability: ['poison point'], color: ['blue'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #117
        {name: 'goldeen',type1: 'water',type2: 'none',ability: ['swift swim'], color: ['red','white'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #118
        {name: 'seaking',type1: 'water',type2: 'none',ability: ['swift swim'], color: ['red','white'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #119
        {name: 'staryu',type1: 'water',type2: 'none',ability: ['illuminate'], color: ['brown','yellow'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #120
        {name: 'starmie',type1: 'water',type2: 'psychic',ability: ['illuminate'], color: ['purple'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #121
        {name: 'mr-mime',type1: 'psychic',type2: 'fairy',ability: ['soundproof'], color: ['pink','blue'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #122
        {name: 'scyther',type1: 'bug',type2: 'flying',ability: ['swarm'], color: ['green'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #123
        {name: 'jynx',type1: 'ice',type2: 'psychic',ability: ['oblivious'], color: ['red','purple'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #124
        {name: 'electabuzz',type1: 'electric',type2: 'none',ability: ['static'], color: ['yellow','black'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #125
        {name: 'magmar',type1: 'fire',type2: 'none',ability: ['flame body'], color: ['red','yellow'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #126
        {name: 'pinsir',type1: 'bug',type2: 'none',ability: ['hyper cutter'], color: ['brown'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #127
        {name: 'tauros',type1: 'normal',type2: 'none',ability: ['intimidate'], color: ['brown'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #128
        {name: 'magikarp',type1: 'water',type2: 'none',ability: ['swift swim'], color: ['red'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #129
        {name: 'gyarados',type1: 'water',type2: 'flying',ability: ['intimidate'], color: ['blue','red'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #130
        {name: 'lapras',type1: 'water',type2: 'ice',ability: ['water absorb'], color: ['blue'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #131
        {name: 'ditto',type1: 'normal',type2: 'none',ability: ['limber'], color: ['purple','pink'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #132
        {name: 'eevee',type1: 'normal',type2: 'none',ability: ['run away'], color: ['brown'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #133
        {name: 'vaporeon',type1: 'water',type2: 'none',ability: ['water absorb'], color: ['blue'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #134
        {name: 'jolteon',type1: 'electric',type2: 'none',ability: ['volt absorb'], color: ['yellow','green'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #135
        {name: 'flareon',type1: 'fire',type2: 'none',ability: ['flash fire'], color: ['red','yellow'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #136
        {name: 'porygon',type1: 'normal',type2: 'none',ability: ['trace'], color: ['pink','blue'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #137
        {name: 'omanyte',type1: 'rock',type2: 'water',ability: ['swift swim'], color: ['blue'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #138
        {name: 'omastar',type1: 'rock',type2: 'water',ability: ['swift swim'], color: ['blue'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #139
        {name: 'kabuto',type1: 'rock',type2: 'water',ability: ['battle armor'], color: ['brown'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #140
        {name: 'kabutops',type1: 'rock',type2: 'water',ability: ['battle armor'], color: ['brown'], stage: 2, fullyEvolved: true, gen: 1, guessed: false }, // #141
        {name: 'aerodactyl',type1: 'rock',type2: 'flying',ability: ['rock head'], color: ['purple','gray'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #142
        {name: 'snorlax',type1: 'normal',type2: 'none',ability: ['thick fat'], color: ['blue','green'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #143
        {name: 'articuno',type1: 'ice',type2: 'flying',ability: ['pressure'], color: ['blue'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #144
        {name: 'zapdos',type1: 'electric',type2: 'flying',ability: ['pressure'], color: ['yellow'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #145
        {name: 'moltres',type1: 'fire',type2: 'flying',ability: ['pressure'], color: ['orange','yellow'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #146
        {name: 'dratini',type1: 'dragon',type2: 'none',ability: ['shed skin'], color: ['blue'], stage: 1, fullyEvolved: false, gen: 1, guessed: false }, // #147
        {name: 'dragonair',type1: 'dragon',type2: 'none',ability: ['shed skin'], color: ['blue'], stage: 2, fullyEvolved: false, gen: 1, guessed: false }, // #148
        {name: 'dragonite',type1: 'dragon',type2: 'flying',ability: ['inner focus'], color: ['orange'], stage: 3, fullyEvolved: true, gen: 1, guessed: false }, // #149
        {name: 'mewtwo',type1: 'psychic',type2: 'none',ability: ['pressure'], color: ['purple'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #150
        {name: 'mew',type1: 'psychic',type2: 'none',ability: ['synchronize'], color: ['pink'], stage: 1, fullyEvolved: true, gen: 1, guessed: false }, // #151
    ]

    //gen 2  TODO
    const pokedexJohto = [
        {name: 'chikorita',type1: 'grass',type2: 'none',ability: ['overgrow'], color: ['green'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #152
        {name: 'bayleef',type1: 'grass',type2: 'none',ability: ['overgrow'], color: ['green'], stage: 2, fullyEvolved: false, gen: 2, guessed: false }, // #153
        {name: 'meganium',type1: 'grass',type2: 'none',ability: ['overgrow'], color: ['green','yellow'], stage: 3, fullyEvolved: true, gen: 2, guessed: false }, // #154
        {name: 'cyndaquil',type1: 'fire',type2: 'none',ability: ['blaze'], color: ['yellow','blue'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #155
        {name: 'quilava',type1: 'fire',type2: 'none',ability: ['blaze'], color: ['yellow','blue'], stage: 2, fullyEvolved: false, gen: 2, guessed: false }, // #156
        {name: 'typhlosion',type1: 'fire',type2: 'none',ability: ['blaze'], color: ['blue','yellow'], stage: 3, fullyEvolved: true, gen: 2, guessed: false }, // #157
        {name: 'totodile',type1: 'water',type2: 'none',ability: ['torrent'], color: ['blue','red'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #158
        {name: 'croconaw',type1: 'water',type2: 'none',ability: ['torrent'], color: ['blue','red'], stage: 2, fullyEvolved: false, gen: 2, guessed: false }, // #159
        {name: 'feraligatr',type1: 'water',type2: 'none',ability: ['torrent'], color: ['blue','yellow'], stage: 3, fullyEvolved: true, gen: 2, guessed: false }, // #160
        {name: 'sentret',type1: 'normal',type2: 'none',ability: ['run away'], color: ['brown','yellow'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #161
        {name: 'furret',type1: 'normal',type2: 'none',ability: ['run away'], color: ['brown','yellow'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #162
        {name: 'hoothoot',type1: 'normal',type2: 'flying',ability: ['insomnia'], color: ['brown','yellow'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #163
        {name: 'noctowl',type1: 'normal',type2: 'flying',ability: ['insomnia'], color: ['brown','yellow'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #164
        {name: 'ledyba',type1: 'bug',type2: 'flying',ability: ['swarm'], color: ['red','white'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #165
        {name: 'ledian',type1: 'bug',type2: 'flying',ability: ['early bird'], color: ['red','yellow'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #166
        {name: 'spinarak',type1: 'bug',type2: 'poison',ability: ['swarm'], color: ['green','yellow'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #167
        {name: 'ariados',type1: 'bug',type2: 'poison',ability: ['insomnia'], color: ['red','white'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #168
        {name: 'crobat',type1: 'poison',type2: 'flying',ability: ['inner focus'], color: ['purple'], stage: 3, fullyEvolved: true, gen: 2, guessed: false }, // #169
        {name: 'chinchou',type1: 'water',type2: 'electric',ability: ['volt absorb'], color: ['blue','yellow'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #170
        {name: 'lanturn',type1: 'water',type2: 'electric',ability: ['volt absorb'], color: ['blue','yellow'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #171
        {name: 'pichu',type1: 'electric',type2: 'none',ability: ['static'], color: ['yellow'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #172
        {name: 'cleffa',type1: 'fairy',type2: 'none',ability: ['cute charm'], color: ['pink'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #173
        {name: 'igglybuff',type1: 'normal',type2: 'fairy',ability: ['cute charm'], color: ['pink'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #174
        {name: 'togepi',type1: 'fairy',type2: 'none',ability: ['hustle'], color: ['white','yellow'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #175
        {name: 'togetic',type1: 'fairy',type2: 'flying',ability: ['hustle'], color: ['white','red'], stage: 2, fullyEvolved: false, gen: 2, guessed: false }, // #176
        {name: 'natu',type1: 'psychic',type2: 'flying',ability: ['synchronize'], color: ['green','red'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #177
        {name: 'xatu',type1: 'psychic',type2: 'flying',ability: ['synchronize'], color: ['green','yellow'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #178
        {name: 'mareep',type1: 'electric',type2: 'none',ability: ['static'], color: ['white','yellow'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #179
        {name: 'flaaffy',type1: 'electric',type2: 'none',ability: ['static'], color: ['pink','yellow'], stage: 2, fullyEvolved: false, gen: 2, guessed: false }, // #180
        {name: 'ampharos',type1: 'electric',type2: 'none',ability: ['static'], color: ['yellow','red'], stage: 3, fullyEvolved: true, gen: 2, guessed: false }, // #181
        {name: 'bellossom',type1: 'grass',type2: 'none',ability: ['chlorophyll'], color: ['green','red'], stage: 3, fullyEvolved: true, gen: 2, guessed: false }, // #182
        {name: 'marill',type1: 'water',type2: 'fairy',ability: ['thick fat'], color: ['blue','white'], stage: 2, fullyEvolved: false, gen: 2, guessed: false }, // #183
        {name: 'azumarill',type1: 'water',type2: 'fairy',ability: ['thick fat'], color: ['blue','white'], stage: 3, fullyEvolved: true, gen: 2, guessed: false }, // #184
        {name: 'sudowoodo',type1: 'rock',type2: 'none',ability: ['sturdy'], color: ['brown','green'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #185
        {name: 'politoed',type1: 'water',type2: 'none',ability: ['water absorb'], color: ['green','yellow'], stage: 3, fullyEvolved: true, gen: 2, guessed: false }, // #186
        {name: 'hoppip',type1: 'grass',type2: 'flying',ability: ['chlorophyll'], color: ['pink'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #187
        {name: 'skiploom',type1: 'grass',type2: 'flying',ability: ['chlorophyll'], color: ['green','yellow'], stage: 2, fullyEvolved: false, gen: 2, guessed: false }, // #188
        {name: 'jumpluff',type1: 'grass',type2: 'flying',ability: ['chlorophyll'], color: ['pink','white'], stage: 3, fullyEvolved: true, gen: 2, guessed: false }, // #189
        {name: 'aipom',type1: 'normal',type2: 'none',ability: ['run away'], color: ['purple'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #190
        {name: 'sunkern',type1: 'grass',type2: 'none',ability: ['chlorophyll'], color: ['yellow','green'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #191
        {name: 'sunflora',type1: 'grass',type2: 'none',ability: ['chlorophyll'], color: ['yellow','green'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #192
        {name: 'yanma',type1: 'bug',type2: 'flying',ability: ['speed boost'], color: ['red','green'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #193
        {name: 'wooper',type1: 'water',type2: 'ground',ability: ['damp'], color: ['blue'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #194
        {name: 'quagsire',type1: 'water',type2: 'ground',ability: ['damp'], color: ['blue'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #195
        {name: 'espeon',type1: 'psychic',type2: 'none',ability: ['synchronize'], color: ['green'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #196
        {name: 'umbreon',type1: 'dark',type2: 'none',ability: ['synchronize'], color: ['black','yellow'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #197
        {name: 'murkrow',type1: 'dark',type2: 'flying',ability: ['insomnia'], color: ['black','yellow'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #198
        {name: 'slowking',type1: 'water',type2: 'psychic',ability: ['oblivious'], color: ['pink','red'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #199
        {name: 'misdreavus',type1: 'ghost',type2: 'none',ability: ['levitate'], color: ['purple','red'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #200
        {name: 'unown',type1: 'psychic',type2: 'none',ability: ['levitate'], color: ['black'], stage: 1, fullyEvolved: true, gen: 2, guessed: false }, // #201
        {name: 'wobbuffet',type1: 'psychic',type2: 'none',ability: ['shadow tag'], color: ['blue','black'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #202
        {name: 'girafarig',type1: 'normal',type2: 'psychic',ability: ['inner focus'], color: ['yellow','brown'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #203
        {name: 'pineco',type1: 'bug',type2: 'none',ability: ['sturdy'], color: ['green','yellow'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #204
        {name: 'forretress',type1: 'bug',type2: 'steel',ability: ['sturdy'], color: ['purple','yellow'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #205
        {name: 'dunsparce',type1: 'normal',type2: 'none',ability: ['run away'], color: ['yellow','blue'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #206
        {name: 'gligar',type1: 'ground',type2: 'flying',ability: ['hyper cutter'], color: ['purple'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #207
        {name: 'steelix',type1: 'steel',type2: 'ground',ability: ['rock head'], color: ['gray'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #208
        {name: 'snubbull',type1: 'fairy',type2: 'none',ability: ['intimidate', 'run away'], color: ['pink'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #209
        {name: 'granbull',type1: 'fairy',type2: 'none',ability: ['intimidate', 'quick feet'], color: ['purple'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #210
        {name: 'qwilfish',type1: 'water',type2: 'poison',ability: ['poison point', 'swift swim'], color: ['gray','yellow'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #211
        {name: 'scizor',type1: 'bug',type2: 'steel',ability: ['swarm', 'technician'], color: ['red'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #212
        {name: 'shuckle',type1: 'bug',type2: 'rock',ability: ['sturdy', 'gluttony'], color: ['yellow','brown'], stage: 1, fullyEvolved: true, gen: 2, guessed: false }, // #213
        {name: 'heracross',type1: 'bug',type2: 'fighting',ability: ['swarm', 'guts'], color: ['blue'], stage: 1, fullyEvolved: true, gen: 2, guessed: false }, // #214
        {name: 'sneasel',type1: 'dark',type2: 'ice',ability: ['inner focus', 'keen eye'], color: ['black','red'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #215
        {name: 'teddiursa',type1: 'normal',type2: 'none',ability: ['pickup', 'quick feet'], color: ['brown'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #216
        {name: 'ursaring',type1: 'normal',type2: 'none',ability: ['guts', 'quick feet'], color: ['brown'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #217
        {name: 'slugma',type1: 'fire',type2: 'none',ability: ['magma armor', 'flame body'], color: ['red'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #218
        {name: 'magcargo',type1: 'fire',type2: 'rock',ability: ['magma armor', 'flame body'], color: ['red', 'gray'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #219
        {name: 'swinub',type1: 'ice',type2: 'ground',ability: ['oblivious', 'snow cloak'], color: ['brown'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #220
        {name: 'piloswine',type1: 'ice',type2: 'ground',ability: ['oblivious', 'snow cloak'], color: ['brown'], stage: 2, fullyEvolved: false, gen: 2, guessed: false }, // #221
        {name: 'corsola',type1: 'water',type2: 'rock',ability: ['hustle', 'natural cure'], color: ['pink', 'white'], stage: 1, fullyEvolved: true, gen: 2, guessed: false }, // #222
        {name: 'remoraid',type1: 'water',type2: 'none',ability: ['hustle', 'sniper'], color: ['blue', 'red'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #223
        {name: 'octillery',type1: 'water',type2: 'none',ability: ['suction cups', 'sniper'], color: ['red'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #224
        {name: 'delibird',type1: 'ice',type2: 'flying',ability: ['vital spirit', 'hustle'], color: ['red', 'white'], stage: 1, fullyEvolved: true, gen: 2, guessed: false }, // #225
        {name: 'mantine',type1: 'water',type2: 'flying',ability: ['swift swim', 'water absorb'], color: ['blue'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #226
        {name: 'skarmory',type1: 'steel',type2: 'flying',ability: ['keen eye', 'sturdy'], color: ['gray'], stage: 1, fullyEvolved: true, gen: 2, guessed: false }, // #227
        {name: 'houndour',type1: 'dark',type2: 'fire',ability: ['early bird', 'flash fire'], color: ['black', 'red'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #228
        {name: 'houndoom',type1: 'dark',type2: 'fire',ability: ['early bird', 'flash fire'], color: ['black', 'red'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #229
        {name: 'kingdra',type1: 'water',type2: 'dragon',ability: ['swift swim', 'sniper'], color: ['blue'], stage: 3, fullyEvolved: true, gen: 2, guessed: false }, // #230
        {name: 'phanpy',type1: 'ground',type2: 'none',ability: ['pickup'], color: ['blue', 'gray'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #231
        {name: 'donphan',type1: 'ground',type2: 'none',ability: ['sturdy'], color: ['gray'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #232
        {name: 'porygon2',type1: 'normal',type2: 'none',ability: ['trace', 'download'], color: ['red', 'blue'], stage: 2, fullyEvolved: false, gen: 2, guessed: false }, // #233
        {name: 'stantler',type1: 'normal',type2: 'none',ability: ['intimidate', 'frisk'], color: ['brown', 'tan'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #234
        {name: 'smeargle',type1: 'normal',type2: 'none',ability: ['own tempo', 'technician'], color: ['white', 'brown'], stage: 1, fullyEvolved: true, gen: 2, guessed: false }, // #235
        {name: 'tyrogue',type1: 'fighting',type2: 'none',ability: ['guts', 'steadfast'], color: ['purple', 'brown'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #236
        {name: 'hitmontop',type1: 'fighting',type2: 'none',ability: ['intimidate', 'technician'], color: ['brown'], stage: 2, fullyEvolved: true, gen: 2, guessed: false }, // #237
        {name: 'smoochum',type1: 'ice',type2: 'psychic',ability: ['oblivious', 'forewarn'], color: ['pink', 'yellow'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #238
        {name: 'elekid',type1: 'electric',type2: 'none',ability: ['static'], color: ['yellow', 'black'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #239
        {name: 'magby',type1: 'fire',type2: 'none',ability: ['flame body'], color: ['red', 'yellow'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #240
        {name: 'miltank',type1: 'normal',type2: 'none',ability: ['thick fat', 'scrappy'], color: ['pink', 'white'], stage: 1, fullyEvolved: true, gen: 2, guessed: false }, // #241
        {name: 'blissey',type1: 'normal',type2: 'none',ability: ['natural cure', 'serene grace'], color: ['pink', 'white'], stage: 3, fullyEvolved: true, gen: 2, guessed: false }, // #242
        {name: 'raikou',type1: 'electric',type2: 'none',ability: ['pressure'], color: ['yellow', 'black'], stage: 1, fullyEvolved: true, gen: 2, guessed: false }, // #243
        {name: 'entei',type1: 'fire',type2: 'none',ability: ['pressure'], color: ['brown', 'yellow'], stage: 1, fullyEvolved: true, gen: 2, guessed: false }, // #244
        {name: 'suicune',type1: 'water',type2: 'none',ability: ['pressure'], color: ['blue', 'white'], stage: 1, fullyEvolved: true, gen: 2, guessed: false }, // #245
        {name: 'larvitar',type1: 'rock',type2: 'ground',ability: ['guts'], color: ['green', 'gray'], stage: 1, fullyEvolved: false, gen: 2, guessed: false }, // #246
        {name: 'pupitar',type1: 'rock',type2: 'ground',ability: ['shed skin'], color: ['gray', 'green'], stage: 2, fullyEvolved: false, gen: 2, guessed: false }, // #247
        {name: 'tyranitar',type1: 'rock',type2: 'dark',ability: ['sand stream'], color: ['green'], stage: 3, fullyEvolved: true, gen: 2, guessed: false }, // #248
        {name: 'lugia',type1: 'psychic',type2: 'flying',ability: ['pressure'], color: ['white', 'blue'], stage: 1, fullyEvolved: true, gen: 2, guessed: false }, // #249
        {name: 'ho-oh',type1: 'fire',type2: 'flying',ability: ['pressure'], color: ['red', 'yellow'], stage: 1, fullyEvolved: true, gen: 2, guessed: false }, // #250
        {name: 'celebi',type1: 'psychic',type2: 'grass',ability: ['natural cure'], color: ['green'], stage: 1, fullyEvolved: true, gen: 2, guessed: false }, // #251
    ]

    //gen 3  TODO
    const pokedexHoenn = [
        {name: 'treecko',type1: 'grass',type2: 'none',ability: ['overgrow'], color: ['green'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #252
        {name: 'grovyle',type1: 'grass',type2: 'none',ability: ['overgrow'], color: ['green'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #253
        {name: 'sceptile',type1: 'grass',type2: 'none',ability: ['overgrow'], color: ['green'], stage: 3, fullyEvolved: true, gen: 3, guessed: false }, // #254
        {name: 'torchic',type1: 'fire',type2: 'none',ability: ['blaze'], color: ['red', 'yellow'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #255
        {name: 'combusken',type1: 'fire',type2: 'fighting',ability: ['blaze'], color: ['red', 'yellow'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #256
        {name: 'blaziken',type1: 'fire',type2: 'fighting',ability: ['blaze'], color: ['red', 'yellow'], stage: 3, fullyEvolved: true, gen: 3, guessed: false }, // #257
        {name: 'mudkip',type1: 'water',type2: 'none',ability: ['torrent'], color: ['blue', 'orange'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #258
        {name: 'marshtomp',type1: 'water',type2: 'ground',ability: ['torrent'], color: ['blue', 'orange'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #259
        {name: 'swampert',type1: 'water',type2: 'ground',ability: ['torrent'], color: ['blue', 'orange'], stage: 3, fullyEvolved: true, gen: 3, guessed: false }, // #260
        {name: 'poochyena',type1: 'dark',type2: 'none',ability: ['run away', 'quick feet'], color: ['gray'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #261
        {name: 'mightyena',type1: 'dark',type2: 'none',ability: ['intimidate', 'quick feet'], color: ['gray', 'black'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #262
        {name: 'zigzagoon',type1: 'normal',type2: 'none',ability: ['pickup', 'gluttony'], color: ['brown', 'gray'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #263
        {name: 'linoone',type1: 'normal',type2: 'none',ability: ['pickup', 'gluttony'], color: ['white', 'brown'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #264
        {name: 'wurmple',type1: 'bug',type2: 'none',ability: ['shield dust'], color: ['red'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #265
        {name: 'silcoon',type1: 'bug',type2: 'none',ability: ['shed skin'], color: ['white'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #266
        {name: 'beautifly',type1: 'bug',type2: 'flying',ability: ['swarm'], color: ['yellow', 'black'], stage: 3, fullyEvolved: true, gen: 3, guessed: false }, // #267
        {name: 'cascoon',type1: 'bug',type2: 'none',ability: ['shed skin'], color: ['purple'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #268
        {name: 'dustox',type1: 'bug',type2: 'poison',ability: ['shield dust'], color: ['green', 'yellow'], stage: 3, fullyEvolved: true, gen: 3, guessed: false }, // #269
        {name: 'lotad',type1: 'water',type2: 'grass',ability: ['swift swim', 'rain dish'], color: ['green', 'blue'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #270
        {name: 'lombre',type1: 'water',type2: 'grass',ability: ['swift swim', 'rain dish'], color: ['green', 'blue'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #271
        {name: 'ludicolo',type1: 'water',type2: 'grass',ability: ['swift swim', 'rain dish'], color: ['green', 'yellow'], stage: 3, fullyEvolved: true, gen: 3, guessed: false }, // #272
        {name: 'seedot',type1: 'grass',type2: 'none',ability: ['chlorophyll', 'early bird'], color: ['brown'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #273
        {name: 'nuzleaf',type1: 'grass',type2: 'dark',ability: ['chlorophyll', 'early bird'], color: ['brown', 'green'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #274
        {name: 'shiftry',type1: 'grass',type2: 'dark',ability: ['chlorophyll', 'early bird'], color: ['brown', 'green'], stage: 3, fullyEvolved: true, gen: 3, guessed: false }, // #275
        {name: 'taillow',type1: 'normal',type2: 'flying',ability: ['guts'], color: ['blue', 'red'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #276
        {name: 'swellow',type1: 'normal',type2: 'flying',ability: ['guts'], color: ['blue', 'red'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #277
        {name: 'wingull',type1: 'water',type2: 'flying',ability: ['keen eye', 'hydration'], color: ['white', 'blue'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #278
        {name: 'pelipper',type1: 'water',type2: 'flying',ability: ['keen eye', 'drizzle'], color: ['white', 'blue'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #279
        {name: 'ralts',type1: 'psychic',type2: 'fairy',ability: ['synchronize', 'trace'], color: ['white', 'green'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #280
        {name: 'kirlia',type1: 'psychic',type2: 'fairy',ability: ['synchronize', 'trace'], color: ['white', 'green'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #281
        {name: 'gardevoir',type1: 'psychic',type2: 'fairy',ability: ['synchronize', 'trace'], color: ['white', 'green'], stage: 3, fullyEvolved: true, gen: 3, guessed: false }, // #282
        {name: 'surskit',type1: 'bug',type2: 'water',ability: ['swift swim'], color: ['blue', 'yellow'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #283
        {name: 'masquerain',type1: 'bug',type2: 'flying',ability: ['intimidate'], color: ['blue', 'red'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #284
        {name: 'shroomish',type1: 'grass',type2: 'none',ability: ['effect spore', 'poison heal'], color: ['brown', 'green'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #285
        {name: 'breloom',type1: 'grass',type2: 'fighting',ability: ['effect spore', 'poison heal'], color: ['green', 'red'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #286
        {name: 'slakoth',type1: 'normal',type2: 'none',ability: ['truant'], color: ['brown', 'white'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #287
        {name: 'vigoroth',type1: 'normal',type2: 'none',ability: ['vital spirit'], color: ['white', 'red'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #288
        {name: 'slaking',type1: 'normal',type2: 'none',ability: ['truant'], color: ['brown', 'white'], stage: 3, fullyEvolved: true, gen: 3, guessed: false }, // #289
        {name: 'nincada',type1: 'bug',type2: 'ground',ability: ['compound eyes'], color: ['gray', 'green'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #290
        {name: 'ninjask',type1: 'bug',type2: 'flying',ability: ['speed boost'], color: ['yellow', 'green'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #291
        {name: 'shedinja',type1: 'bug',type2: 'ghost',ability: ['wonder guard'], color: ['brown', 'gray'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #292
        {name: 'whismur',type1: 'normal',type2: 'none',ability: ['soundproof'], color: ['pink', 'purple'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #293
        {name: 'loudred',type1: 'normal',type2: 'none',ability: ['soundproof'], color: ['purple', 'red'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #294
        {name: 'exploud',type1: 'normal',type2: 'none',ability: ['soundproof'], color: ['purple', 'red'], stage: 3, fullyEvolved: true, gen: 3, guessed: false }, // #295
        {name: 'makuhita',type1: 'fighting',type2: 'none',ability: ['thick fat', 'guts'], color: ['yellow', 'brown'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #296
        {name: 'hariyama',type1: 'fighting',type2: 'none',ability: ['thick fat', 'guts'], color: ['yellow', 'brown'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #297
        {name: 'azurill',type1: 'normal',type2: 'fairy',ability: ['thick fat', 'huge power'], color: ['blue', 'white'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #298
        {name: 'nosepass',type1: 'rock',type2: 'none',ability: ['sturdy', 'magnet pull'], color: ['gray', 'blue'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #299
        {name: 'skitty',type1: 'normal',type2: 'none',ability: ['cute charm', 'normalize'], color: ['pink'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #300
        {name: 'delcatty',type1: 'normal',type2: 'none',ability: ['cute charm', 'normalize'], color: ['purple', 'pink'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #301
        {name: 'sableye',type1: 'dark',type2: 'ghost',ability: ['keen eye', 'stall'], color: ['purple'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #302
        {name: 'mawile',type1: 'steel',type2: 'fairy',ability: ['hyper cutter', 'intimidate'], color: ['black', 'yellow'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #303
        {name: 'aron',type1: 'steel',type2: 'rock',ability: ['sturdy', 'rock head'], color: ['gray'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #304
        {name: 'lairon',type1: 'steel',type2: 'rock',ability: ['sturdy', 'rock head'], color: ['gray'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #305
        {name: 'aggron',type1: 'steel',type2: 'rock',ability: ['sturdy', 'rock head'], color: ['gray'], stage: 3, fullyEvolved: true, gen: 3, guessed: false }, // #306
        {name: 'meditite',type1: 'fighting',type2: 'psychic',ability: ['pure power'], color: ['blue', 'gray'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #307
        {name: 'medicham',type1: 'fighting',type2: 'psychic',ability: ['pure power'], color: ['blue', 'red'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #308
        {name: 'electrike',type1: 'electric',type2: 'none',ability: ['static', 'lightning rod'], color: ['green', 'yellow'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #309
        {name: 'manectric',type1: 'electric',type2: 'none',ability: ['static', 'lightning rod'], color: ['blue', 'yellow'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #310
        {name: 'plusle',type1: 'electric',type2: 'none',ability: ['plus'], color: ['yellow', 'red'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #311
        {name: 'minun',type1: 'electric',type2: 'none',ability: ['minus'], color: ['yellow', 'blue'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #312
        {name: 'volbeat',type1: 'bug',type2: 'none',ability: ['illuminate', 'swarm'], color: ['blue', 'yellow'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #313
        {name: 'illumise',type1: 'bug',type2: 'none',ability: ['oblivious', 'tinted lens'], color: ['purple', 'yellow'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #314
        {name: 'roselia',type1: 'grass',type2: 'poison',ability: ['natural cure', 'poison point'], color: ['green', 'red'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #315
        {name: 'gulpin',type1: 'poison',type2: 'none',ability: ['liquid ooze', 'sticky hold'], color: ['green'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #316
        {name: 'swalot',type1: 'poison',type2: 'none',ability: ['liquid ooze', 'sticky hold'], color: ['purple'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #317
        {name: 'carvanha',type1: 'water',type2: 'dark',ability: ['rough skin'], color: ['red', 'blue'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #318
        {name: 'sharpedo',type1: 'water',type2: 'dark',ability: ['rough skin'], color: ['blue', 'red'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #319
        {name: 'wailmer',type1: 'water',type2: 'none',ability: ['water veil', 'oblivious'], color: ['blue'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #320
        {name: 'wailord',type1: 'water',type2: 'none',ability: ['water veil', 'oblivious'], color: ['blue'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #321
        {name: 'numel',type1: 'fire',type2: 'ground',ability: ['oblivious', 'simple'], color: ['yellow', 'brown'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #322
        {name: 'camerupt',type1: 'fire',type2: 'ground',ability: ['magma armor', 'solid rock'], color: ['red', 'brown'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #323
        {name: 'torkoal',type1: 'fire',type2: 'none',ability: ['white smoke', 'drought'], color: ['brown', 'gray'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #324
        {name: 'spoink',type1: 'psychic',type2: 'none',ability: ['thick fat', 'own tempo'], color: ['pink', 'black'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #325
        {name: 'grumpig',type1: 'psychic',type2: 'none',ability: ['thick fat', 'own tempo'], color: ['purple', 'black'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #326
        {name: 'spinda',type1: 'normal',type2: 'none',ability: ['own tempo', 'tangled feet'], color: ['white', 'brown'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #327
        {name: 'trapinch',type1: 'ground',type2: 'none',ability: ['hyper cutter', 'arena trap'], color: ['brown'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #328
        {name: 'vibrava',type1: 'ground',type2: 'dragon',ability: ['levitate'], color: ['green'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #329
        {name: 'flygon',type1: 'ground',type2: 'dragon',ability: ['levitate'], color: ['green'], stage: 3, fullyEvolved: true, gen: 3, guessed: false }, // #330
        {name: 'cacnea',type1: 'grass',type2: 'none',ability: ['sand veil'], color: ['green', 'yellow'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #331
        {name: 'cacturne',type1: 'grass',type2: 'dark',ability: ['sand veil'], color: ['green'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #332
        {name: 'swablu',type1: 'normal',type2: 'flying',ability: ['natural cure'], color: ['blue', 'white'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #333
        {name: 'altaria',type1: 'dragon',type2: 'flying',ability: ['natural cure'], color: ['blue', 'white'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #334
        {name: 'zangoose',type1: 'normal',type2: 'none',ability: ['immunity'], color: ['white', 'red'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #335
        {name: 'seviper',type1: 'poison',type2: 'none',ability: ['shed skin'], color: ['purple', 'yellow'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #336
        {name: 'lunatone',type1: 'rock',type2: 'psychic',ability: ['levitate'], color: ['yellow', 'gray'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #337
        {name: 'solrock',type1: 'rock',type2: 'psychic',ability: ['levitate'], color: ['red', 'yellow'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #338
        {name: 'barboach',type1: 'water',type2: 'ground',ability: ['oblivious', 'anticipation'], color: ['blue', 'yellow'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #339
        {name: 'whiscash',type1: 'water',type2: 'ground',ability: ['oblivious', 'anticipation'], color: ['blue', 'yellow'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #340
        {name: 'corphish',type1: 'water',type2: 'none',ability: ['hyper cutter', 'shell armor'], color: ['red'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #341
        {name: 'crawdaunt',type1: 'water',type2: 'dark',ability: ['hyper cutter', 'shell armor'], color: ['red', 'blue'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #342
        {name: 'baltoy',type1: 'ground',type2: 'psychic',ability: ['levitate'], color: ['brown', 'red'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #343
        {name: 'claydol',type1: 'ground',type2: 'psychic',ability: ['levitate'], color: ['black', 'red'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #344
        {name: 'lileep',type1: 'rock',type2: 'grass',ability: ['suction cups'], color: ['green', 'purple'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #345
        {name: 'cradily',type1: 'rock',type2: 'grass',ability: ['suction cups'], color: ['green', 'yellow'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #346
        {name: 'anorith',type1: 'rock',type2: 'bug',ability: ['battle armor'], color: ['gray', 'blue'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #347
        {name: 'armaldo',type1: 'rock',type2: 'bug',ability: ['battle armor'], color: ['gray', 'blue'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #348
        {name: 'feebas',type1: 'water',type2: 'none',ability: ['swift swim', 'oblivious'], color: ['brown', 'red'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #349
        {name: 'milotic',type1: 'water',type2: 'none',ability: ['marvel scale', 'competitive'], color: ['blue', 'pink'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #350
        {name: 'castform',type1: 'normal',type2: 'none',ability: ['forecast'], color: ['white'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #351
        {name: 'kecleon',type1: 'normal',type2: 'none',ability: ['color change'], color: ['green', 'red'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #352
        {name: 'shuppet',type1: 'ghost',type2: 'none',ability: ['insomnia', 'frisk'], color: ['black', 'pink'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #353
        {name: 'banette',type1: 'ghost',type2: 'none',ability: ['insomnia', 'frisk'], color: ['black', 'red'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #354
        {name: 'duskull',type1: 'ghost',type2: 'none',ability: ['levitate'], color: ['black', 'red'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #355
        {name: 'dusclops',type1: 'ghost',type2: 'none',ability: ['pressure'], color: ['black', 'red'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #356
        {name: 'tropius',type1: 'grass',type2: 'flying',ability: ['chlorophyll', 'solar power'], color: ['green', 'yellow'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #357
        {name: 'chimecho',type1: 'psychic',type2: 'none',ability: ['levitate'], color: ['blue', 'white'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #358
        {name: 'absol',type1: 'dark',type2: 'none',ability: ['pressure', 'super luck'], color: ['white', 'black'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #359
        {name: 'wynaut',type1: 'psychic',type2: 'none',ability: ['shadow tag'], color: ['blue'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #360
        {name: 'snorunt',type1: 'ice',type2: 'none',ability: ['inner focus', 'ice body'], color: ['gray', 'blue'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #361
        {name: 'glalie',type1: 'ice',type2: 'none',ability: ['inner focus', 'ice body'], color: ['gray', 'blue'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #362
        {name: 'spheal',type1: 'ice',type2: 'water',ability: ['thick fat', 'ice body'], color: ['blue', 'white'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #363
        {name: 'sealeo',type1: 'ice',type2: 'water',ability: ['thick fat', 'ice body'], color: ['blue', 'white'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #364
        {name: 'walrein',type1: 'ice',type2: 'water',ability: ['thick fat', 'ice body'], color: ['blue', 'white'], stage: 3, fullyEvolved: true, gen: 3, guessed: false }, // #365
        {name: 'clamperl',type1: 'water',type2: 'none',ability: ['shell armor'], color: ['blue', 'white'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #366
        {name: 'huntail',type1: 'water',type2: 'none',ability: ['swift swim'], color: ['blue', 'yellow'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #367
        {name: 'gorebyss',type1: 'water',type2: 'none',ability: ['swift swim'], color: ['pink', 'yellow'], stage: 2, fullyEvolved: true, gen: 3, guessed: false }, // #368
        {name: 'relicanth',type1: 'water',type2: 'rock',ability: ['swift swim', 'rock head'], color: ['gray', 'brown'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #369
        {name: 'luvdisc',type1: 'water',type2: 'none',ability: ['swift swim'], color: ['pink'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #370
        {name: 'bagon',type1: 'dragon',type2: 'none',ability: ['rock head'], color: ['blue', 'red'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #371
        {name: 'shelgon',type1: 'dragon',type2: 'none',ability: ['rock head'], color: ['white', 'red'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #372
        {name: 'salamence',type1: 'dragon',type2: 'flying',ability: ['intimidate'], color: ['blue', 'red'], stage: 3, fullyEvolved: true, gen: 3, guessed: false }, // #373
        {name: 'beldum',type1: 'steel',type2: 'psychic',ability: ['clear body'], color: ['blue', 'gray'], stage: 1, fullyEvolved: false, gen: 3, guessed: false }, // #374
        {name: 'metang',type1: 'steel',type2: 'psychic',ability: ['clear body'], color: ['blue', 'gray'], stage: 2, fullyEvolved: false, gen: 3, guessed: false }, // #375
        {name: 'metagross',type1: 'steel',type2: 'psychic',ability: ['clear body'], color: ['blue', 'gray'], stage: 3, fullyEvolved: true, gen: 3, guessed: false }, // #376
        {name: 'regirock',type1: 'rock',type2: 'none',ability: ['clear body'], color: ['brown', 'gray'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #377
        {name: 'regice',type1: 'ice',type2: 'none',ability: ['clear body'], color: ['blue'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #378
        {name: 'registeel',type1: 'steel',type2: 'none',ability: ['clear body'], color: ['gray'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #379
        {name: 'latias',type1: 'dragon',type2: 'psychic',ability: ['levitate'], color: ['red'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #380
        {name: 'latios',type1: 'dragon',type2: 'psychic',ability: ['levitate'], color: ['blue'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #381
        {name: 'kyogre',type1: 'water',type2: 'none',ability: ['drizzle'], color: ['blue'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #382
        {name: 'groudon',type1: 'ground',type2: 'none',ability: ['drought'], color: ['red'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #383
        {name: 'rayquaza',type1: 'dragon',type2: 'flying',ability: ['air lock'], color: ['green'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #384
        {name: 'jirachi',type1: 'steel',type2: 'psychic',ability: ['serene grace'], color: ['yellow'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #385
        {name: 'deoxys',type1: 'psychic',type2: 'none',ability: ['pressure'], color: ['red', 'green'], stage: 1, fullyEvolved: true, gen: 3, guessed: false }, // #386
    ]

    //gen 4  TODO
    const pokedexSinnoh = [
        {name: 'turtwig',type1: 'grass',type2: 'none',ability: ['overgrow'], color: ['green'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #387
        {name: 'grotle',type1: 'grass',type2: 'none',ability: ['overgrow'], color: ['green'], stage: 2, fullyEvolved: false, gen: 4, guessed: false }, // #388
        {name: 'torterra',type1: 'grass',type2: 'ground',ability: ['overgrow'], color: ['green', 'brown'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #389
        {name: 'chimchar',type1: 'fire',type2: 'none',ability: ['blaze'], color: ['brown', 'orange'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #390
        {name: 'monferno',type1: 'fire',type2: 'fighting',ability: ['blaze'], color: ['brown', 'red'], stage: 2, fullyEvolved: false, gen: 4, guessed: false }, // #391
        {name: 'infernape',type1: 'fire',type2: 'fighting',ability: ['blaze'], color: ['brown', 'red'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #392
        {name: 'piplup',type1: 'water',type2: 'none',ability: ['torrent'], color: ['blue', 'yellow'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #393
        {name: 'prinplup',type1: 'water',type2: 'none',ability: ['torrent'], color: ['blue', 'yellow'], stage: 2, fullyEvolved: false, gen: 4, guessed: false }, // #394
        {name: 'empoleon',type1: 'water',type2: 'steel',ability: ['torrent'], color: ['blue', 'yellow'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #395
        {name: 'starly',type1: 'normal',type2: 'flying',ability: ['keen eye'], color: ['gray', 'white'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #396
        {name: 'staravia',type1: 'normal',type2: 'flying',ability: ['intimidate'], color: ['gray', 'white'], stage: 2, fullyEvolved: false, gen: 4, guessed: false }, // #397
        {name: 'staraptor',type1: 'normal',type2: 'flying',ability: ['intimidate'], color: ['gray', 'red'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #398
        {name: 'bidoof',type1: 'normal',type2: 'none',ability: ['simple', 'unaware'], color: ['brown', 'white'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #399
        {name: 'bibarel',type1: 'normal',type2: 'water',ability: ['simple', 'unaware'], color: ['brown', 'white'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #400
        {name: 'kricketot',type1: 'bug',type2: 'none',ability: ['shed skin'], color: ['red'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #401
        {name: 'kricketune',type1: 'bug',type2: 'none',ability: ['swarm'], color: ['red', 'yellow'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #402
        {name: 'shinx',type1: 'electric',type2: 'none',ability: ['rivalry', 'intimidate'], color: ['blue', 'yellow'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #403
        {name: 'luxio',type1: 'electric',type2: 'none',ability: ['rivalry', 'intimidate'], color: ['blue', 'yellow'], stage: 2, fullyEvolved: false, gen: 4, guessed: false }, // #404
        {name: 'luxray',type1: 'electric',type2: 'none',ability: ['rivalry', 'intimidate'], color: ['blue', 'yellow'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #405
        {name: 'budew',type1: 'grass',type2: 'poison',ability: ['natural cure', 'poison point'], color: ['green', 'yellow'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #406
        {name: 'roserade',type1: 'grass',type2: 'poison',ability: ['natural cure', 'poison point'], color: ['green', 'red'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #407
        {name: 'cranidos',type1: 'rock',type2: 'none',ability: ['mold breaker'], color: ['blue', 'gray'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #408
        {name: 'rampardos',type1: 'rock',type2: 'none',ability: ['mold breaker'], color: ['blue', 'gray'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #409
        {name: 'shieldon',type1: 'rock',type2: 'steel',ability: ['sturdy'], color: ['gray', 'yellow'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #410
        {name: 'bastiodon',type1: 'rock',type2: 'steel',ability: ['sturdy'], color: ['gray', 'yellow'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #411
        {name: 'burmy',type1: 'bug',type2: 'none',ability: ['shed skin'], color: ['green', 'brown'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #412
        {name: 'wormadam',type1: 'bug',type2: 'grass',ability: ['anticipation'], color: ['green', 'brown'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #413
        {name: 'mothim',type1: 'bug',type2: 'flying',ability: ['swarm'], color: ['yellow', 'black'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #414
        {name: 'combee',type1: 'bug',type2: 'flying',ability: ['honey gather'], color: ['yellow', 'brown'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #415
        {name: 'vespiquen',type1: 'bug',type2: 'flying',ability: ['pressure'], color: ['yellow', 'black'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #416
        {name: 'pachirisu',type1: 'electric',type2: 'none',ability: ['run away', 'pickup'], color: ['white', 'blue'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #417
        {name: 'buizel',type1: 'water',type2: 'none',ability: ['swift swim'], color: ['orange', 'blue'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #418
        {name: 'floatzel',type1: 'water',type2: 'none',ability: ['swift swim'], color: ['orange', 'blue'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #419
        {name: 'cherubi',type1: 'grass',type2: 'none',ability: ['chlorophyll'], color: ['red', 'green'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #420
        {name: 'cherrim',type1: 'grass',type2: 'none',ability: ['flower gift'], color: ['pink', 'purple'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #421
        {name: 'shellos',type1: 'water',type2: 'none',ability: ['sticky hold', 'storm drain'], color: ['pink', 'blue'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #422
        {name: 'gastrodon',type1: 'water',type2: 'ground',ability: ['sticky hold', 'storm drain'], color: ['pink', 'blue'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #423
        {name: 'ambipom',type1: 'normal',type2: 'none',ability: ['technician', 'pickup'], color: ['purple', 'yellow'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #424
        {name: 'drifloon',type1: 'ghost',type2: 'flying',ability: ['unburden', 'aftermath'], color: ['purple', 'yellow'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #425
        {name: 'drifblim',type1: 'ghost',type2: 'flying',ability: ['unburden', 'aftermath'], color: ['purple', 'yellow'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #426
        {name: 'buneary',type1: 'normal',type2: 'none',ability: ['run away', 'klutz'], color: ['brown', 'pink'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #427
        {name: 'lopunny',type1: 'normal',type2: 'none',ability: ['cute charm', 'klutz'], color: ['brown', 'white'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #428
        {name: 'mismagius',type1: 'ghost',type2: 'none',ability: ['levitate'], color: ['purple', 'red'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #429
        {name: 'honchkrow',type1: 'dark',type2: 'flying',ability: ['insomnia', 'super luck'], color: ['black', 'red'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #430
        {name: 'glameow',type1: 'normal',type2: 'none',ability: ['limber', 'own tempo'], color: ['gray', 'pink'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #431
        {name: 'purugly',type1: 'normal',type2: 'none',ability: ['thick fat', 'own tempo'], color: ['gray', 'white'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #432
        {name: 'chingling',type1: 'psychic',type2: 'none',ability: ['levitate'], color: ['yellow', 'white'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #433
        {name: 'stunky',type1: 'poison',type2: 'dark',ability: ['stench', 'aftermath'], color: ['purple', 'white'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #434
        {name: 'skuntank',type1: 'poison',type2: 'dark',ability: ['stench', 'aftermath'], color: ['purple', 'white'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #435
        {name: 'bronzor',type1: 'steel',type2: 'psychic',ability: ['levitate', 'heatproof'], color: ['green', 'gray'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #436
        {name: 'bronzong',type1: 'steel',type2: 'psychic',ability: ['levitate', 'heatproof'], color: ['green', 'gray'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #437
        {name: 'bonsly',type1: 'rock',type2: 'none',ability: ['sturdy', 'rock head'], color: ['brown', 'green'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #438
        {name: 'mime-jr',type1: 'psychic',type2: 'fairy',ability: ['soundproof', 'filter'], color: ['pink', 'blue'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #439
        {name: 'happiny',type1: 'normal',type2: 'none',ability: ['natural cure', 'serene grace'], color: ['pink', 'white'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #440
        {name: 'chatot',type1: 'normal',type2: 'flying',ability: ['keen eye', 'tangled feet'], color: ['black', 'green'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #441
        {name: 'spiritomb',type1: 'ghost',type2: 'dark',ability: ['pressure'], color: ['purple', 'green'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #442
        {name: 'gible',type1: 'dragon',type2: 'ground',ability: ['sand veil'], color: ['blue', 'red'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #443
        {name: 'gabite',type1: 'dragon',type2: 'ground',ability: ['sand veil'], color: ['blue', 'red'], stage: 2, fullyEvolved: false, gen: 4, guessed: false }, // #444
        {name: 'garchomp',type1: 'dragon',type2: 'ground',ability: ['sand veil'], color: ['blue', 'red'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #445
        {name: 'munchlax',type1: 'normal',type2: 'none',ability: ['pickup', 'thick fat'], color: ['blue', 'green'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #446
        {name: 'riolu',type1: 'fighting',type2: 'none',ability: ['steadfast', 'inner focus'], color: ['blue', 'yellow'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #447
        {name: 'lucario',type1: 'fighting',type2: 'steel',ability: ['steadfast', 'inner focus'], color: ['blue', 'black'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #448
        {name: 'hippopotas',type1: 'ground',type2: 'none',ability: ['sand stream'], color: ['brown', 'gray'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #449
        {name: 'hippowdon',type1: 'ground',type2: 'none',ability: ['sand stream'], color: ['brown', 'gray'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #450
        {name: 'skorupi',type1: 'poison',type2: 'bug',ability: ['battle armor', 'sniper'], color: ['purple', 'red'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #451
        {name: 'drapion',type1: 'poison',type2: 'dark',ability: ['battle armor', 'sniper'], color: ['purple', 'red'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #452
        {name: 'croagunk',type1: 'poison',type2: 'fighting',ability: ['anticipation', 'dry skin'], color: ['blue', 'black'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #453
        {name: 'toxicroak',type1: 'poison',type2: 'fighting',ability: ['anticipation', 'dry skin'], color: ['blue', 'black'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #454
        {name: 'carnivine',type1: 'grass',type2: 'none',ability: ['levitate'], color: ['green', 'red'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #455
        {name: 'finneon',type1: 'water',type2: 'none',ability: ['swift swim', 'storm drain'], color: ['blue', 'pink'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #456
        {name: 'lumineon',type1: 'water',type2: 'none',ability: ['swift swim', 'storm drain'], color: ['blue', 'pink'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #457
        {name: 'mantyke',type1: 'water',type2: 'flying',ability: ['swift swim', 'water absorb'], color: ['blue', 'white'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #458
        {name: 'snover',type1: 'grass',type2: 'ice',ability: ['snow warning'], color: ['white', 'green'], stage: 1, fullyEvolved: false, gen: 4, guessed: false }, // #459
        {name: 'abomasnow',type1: 'grass',type2: 'ice',ability: ['snow warning'], color: ['white', 'green'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #460
        {name: 'weavile',type1: 'dark',type2: 'ice',ability: ['pressure'], color: ['black', 'red'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #461
        {name: 'magnezone',type1: 'electric',type2: 'steel',ability: ['magnet pull', 'sturdy'], color: ['gray', 'blue'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #462
        {name: 'lickilicky',type1: 'normal',type2: 'none',ability: ['own tempo', 'oblivious'], color: ['pink'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #463
        {name: 'rhyperior',type1: 'ground',type2: 'rock',ability: ['lightning rod', 'solid rock'], color: ['gray', 'orange'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #464
        {name: 'tangrowth',type1: 'grass',type2: 'none',ability: ['chlorophyll', 'leaf guard'], color: ['blue'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #465
        {name: 'electivire',type1: 'electric',type2: 'none',ability: ['motor drive'], color: ['yellow', 'black'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #466
        {name: 'magmortar',type1: 'fire',type2: 'none',ability: ['flame body'], color: ['red', 'yellow'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #467
        {name: 'togekiss',type1: 'fairy',type2: 'flying',ability: ['hustle', 'serene grace'], color: ['white', 'red'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #468
        {name: 'yanmega',type1: 'bug',type2: 'flying',ability: ['speed boost', 'tinted lens'], color: ['green', 'red'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #469
        {name: 'leafeon',type1: 'grass',type2: 'none',ability: ['leaf guard'], color: ['green'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #470
        {name: 'glaceon',type1: 'ice',type2: 'none',ability: ['snow cloak'], color: ['blue', 'white'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #471
        {name: 'gliscor',type1: 'ground',type2: 'flying',ability: ['hyper cutter', 'sand veil'], color: ['purple', 'red'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #472
        {name: 'mamoswine',type1: 'ice',type2: 'ground',ability: ['oblivious', 'snow cloak'], color: ['brown', 'white'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #473
        {name: 'porygon-z',type1: 'normal',type2: 'none',ability: ['adaptability', 'download'], color: ['red', 'blue'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #474
        {name: 'gallade',type1: 'psychic',type2: 'fighting',ability: ['steadfast'], color: ['white', 'green'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #475
        {name: 'probopass',type1: 'rock',type2: 'steel',ability: ['sturdy', 'magnet pull'], color: ['gray', 'blue'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #476
        {name: 'dusknoir',type1: 'ghost',type2: 'none',ability: ['pressure'], color: ['black', 'red'], stage: 3, fullyEvolved: true, gen: 4, guessed: false }, // #477
        {name: 'froslass',type1: 'ice',type2: 'ghost',ability: ['snow cloak'], color: ['white', 'purple'], stage: 2, fullyEvolved: true, gen: 4, guessed: false }, // #478
        {name: 'rotom',type1: 'electric',type2: 'ghost',ability: ['levitate'], color: ['red', 'blue'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #479
        {name: 'uxie',type1: 'psychic',type2: 'none',ability: ['levitate'], color: ['yellow', 'blue'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #480
        {name: 'mesprit',type1: 'psychic',type2: 'none',ability: ['levitate'], color: ['pink'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #481
        {name: 'azelf',type1: 'psychic',type2: 'none',ability: ['levitate'], color: ['blue'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #482
        {name: 'dialga',type1: 'steel',type2: 'dragon',ability: ['pressure'], color: ['blue', 'gray'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #483
        {name: 'palkia',type1: 'water',type2: 'dragon',ability: ['pressure'], color: ['pink', 'white'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #484
        {name: 'heatran',type1: 'fire',type2: 'steel',ability: ['flash fire'], color: ['brown', 'red'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #485
        {name: 'regigigas',type1: 'normal',type2: 'none',ability: ['slow start'], color: ['white', 'red'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #486
        {name: 'giratina',type1: 'ghost',type2: 'dragon',ability: ['pressure'], color: ['gold', 'red'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #487
        {name: 'cresselia',type1: 'psychic',type2: 'none',ability: ['levitate'], color: ['pink', 'yellow'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #488
        {name: 'phione',type1: 'water',type2: 'none',ability: ['hydration'], color: ['blue', 'yellow'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #489
        {name: 'manaphy',type1: 'water',type2: 'none',ability: ['hydration'], color: ['blue', 'yellow'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #490
        {name: 'darkrai',type1: 'dark',type2: 'none',ability: ['bad dreams'], color: ['black'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #491
        {name: 'shaymin',type1: 'grass',type2: 'none',ability: ['natural cure'], color: ['green', 'pink'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #492
        {name: 'arceus',type1: 'normal',type2: 'none',ability: ['multitype'], color: ['white', 'gray'], stage: 1, fullyEvolved: true, gen: 4, guessed: false }, // #493
    ]

    //gen 5  TODO
    const pokedexUnova = [
    {name: 'victini',type1: 'psychic',type2: 'fire',ability: ['victory star'], color: ['yellow', 'white'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #494
    {name: 'snivy',type1: 'grass',type2: 'none',ability: ['overgrow', 'contrary'], color: ['green'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #495 - ADDED CONTRARY (HA)
    {name: 'servine',type1: 'grass',type2: 'none',ability: ['overgrow', 'contrary'], color: ['green'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #496 - ADDED CONTRARY (HA)
    {name: 'serperior',type1: 'grass',type2: 'none',ability: ['overgrow', 'contrary'], color: ['green'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #497 - ADDED CONTRARY (HA)
    {name: 'tepig',type1: 'fire',type2: 'none',ability: ['blaze', 'reckless'], color: ['red', 'orange'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #498 - ADDED RECKLESS (HA)
    {name: 'pignite',type1: 'fire',type2: 'fighting',ability: ['blaze', 'reckless'], color: ['red', 'brown'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #499 - ADDED RECKLESS (HA)
    {name: 'emboar',type1: 'fire',type2: 'fighting',ability: ['blaze', 'reckless'], color: ['red', 'black'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #500 - ADDED RECKLESS (HA)
    {name: 'oshawott',type1: 'water',type2: 'none',ability: ['torrent', 'shell armor'], color: ['blue', 'white'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #501 - ADDED SHELL ARMOR (HA)
    {name: 'dewott',type1: 'water',type2: 'none',ability: ['torrent', 'shell armor'], color: ['blue', 'white'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #502 - ADDED SHELL ARMOR (HA)
    {name: 'samurott',type1: 'water',type2: 'none',ability: ['torrent', 'shell armor'], color: ['blue', 'white'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #503 - ADDED SHELL ARMOR (HA)
    {name: 'patrat',type1: 'normal',type2: 'none',ability: ['run away', 'keen eye', 'analytic'], color: ['brown', 'white'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #504 - ADDED ANALYTIC (HA)
    {name: 'watchog',type1: 'normal',type2: 'none',ability: ['illuminate', 'keen eye', 'analytic'], color: ['brown', 'yellow'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #505 - ADDED ANALYTIC (HA)
    {name: 'lillipup',type1: 'normal',type2: 'none',ability: ['vital spirit', 'pickup', 'scrappy'], color: ['brown', 'white'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #506 - ADDED SCRAPPY (HA)
    {name: 'herdier',type1: 'normal',type2: 'none',ability: ['intimidate', 'sand rush', 'scrappy'], color: ['gray', 'black'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #507 - ADDED SCRAPPY (HA)
    {name: 'stoutland',type1: 'normal',type2: 'none',ability: ['intimidate', 'sand rush', 'scrappy'], color: ['gray', 'yellow'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #508 - ADDED SCRAPPY (HA)
    {name: 'purrloin',type1: 'dark',type2: 'none',ability: ['limber', 'unburden', 'prankster'], color: ['purple', 'black'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #509 - ADDED PRANKSTER (HA)
    {name: 'liepard',type1: 'dark',type2: 'none',ability: ['limber', 'unburden', 'prankster'], color: ['purple', 'black'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #510 - ADDED PRANKSTER (HA)
    {name: 'pansage',type1: 'grass',type2: 'none',ability: ['gluttony', 'overgrow'], color: ['green'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #511 - ADDED OVERGROW (HA)
    {name: 'simisage',type1: 'grass',type2: 'none',ability: ['gluttony', 'overgrow'], color: ['green'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #512 - ADDED OVERGROW (HA)
    {name: 'pansear',type1: 'fire',type2: 'none',ability: ['gluttony', 'blaze'], color: ['red'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #513 - ADDED BLAZE (HA)
    {name: 'simisear',type1: 'fire',type2: 'none',ability: ['gluttony', 'blaze'], color: ['red'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #514 - ADDED BLAZE (HA)
    {name: 'panpour',type1: 'water',type2: 'none',ability: ['gluttony', 'torrent'], color: ['blue'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #515 - ADDED TORRENT (HA)
    {name: 'simipour',type1: 'water',type2: 'none',ability: ['gluttony', 'torrent'], color: ['blue'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #516 - ADDED TORRENT (HA)
    {name: 'munna',type1: 'psychic',type2: 'none',ability: ['forewarn', 'synchronize', 'telepathy'], color: ['pink', 'purple'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #517 - ADDED TELEPATHY (HA)
    {name: 'musharna',type1: 'psychic',type2: 'none',ability: ['forewarn', 'synchronize', 'telepathy'], color: ['pink', 'purple'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #518 - ADDED TELEPATHY (HA)
    {name: 'pidove',type1: 'normal',type2: 'flying',ability: ['big pecks', 'super luck', 'rivalry'], color: ['gray', 'white'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #519 - ADDED RIVALRY (HA)
    {name: 'tranquill',type1: 'normal',type2: 'flying',ability: ['big pecks', 'super luck', 'rivalry'], color: ['gray', 'white'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #520 - ADDED RIVALRY (HA)
    {name: 'unfezant',type1: 'normal',type2: 'flying',ability: ['big pecks', 'super luck', 'rivalry'], color: ['gray', 'green'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #521 - ADDED RIVALRY (HA)
    {name: 'blitzle',type1: 'electric',type2: 'none',ability: ['lightning rod', 'motor drive', 'sap sipper'], color: ['black', 'white'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #522 - ADDED SAP SIPPER (HA)
    {name: 'zebstrika',type1: 'electric',type2: 'none',ability: ['lightning rod', 'motor drive', 'sap sipper'], color: ['black', 'white'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #523 - ADDED SAP SIPPER (HA)
    {name: 'roggenrola',type1: 'rock',type2: 'none',ability: ['sturdy', 'sand force'], color: ['blue', 'gray'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #524 - ADDED SAND FORCE (HA)
    {name: 'boldore',type1: 'rock',type2: 'none',ability: ['sturdy', 'weak armor', 'sand force'], color: ['blue', 'gray'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #525 - CORRECTED BASE/HA
    {name: 'gigalith',type1: 'rock',type2: 'none',ability: ['sturdy', 'sand force', 'sand stream'], color: ['blue', 'gray'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #526 - CORRECTED BASE/HA (Sturdy, Sand Force as Regular)
    {name: 'woobat',type1: 'psychic',type2: 'flying',ability: ['unaware', 'klutz', 'simple'], color: ['blue', 'pink'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #527 - ADDED SIMPLE (HA)
    {name: 'swoobat',type1: 'psychic',type2: 'flying',ability: ['unaware', 'klutz', 'simple'], color: ['blue', 'pink'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #528 - ADDED SIMPLE (HA)
    {name: 'drilbur',type1: 'ground',type2: 'none',ability: ['sand rush', 'sand force', 'mold breaker'], color: ['brown', 'gray'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #529 - ADDED MOLD BREAKER (HA)
    {name: 'excadrill',type1: 'ground',type2: 'steel',ability: ['sand rush', 'sand force', 'mold breaker'], color: ['brown', 'gray'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #530 - ADDED MOLD BREAKER (HA)
    {name: 'audino',type1: 'normal',type2: 'none',ability: ['healer', 'regenerator', 'klutz'], color: ['pink', 'white'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #531 - ADDED KLUTZ (HA)
    {name: 'timburr',type1: 'fighting',type2: 'none',ability: ['guts', 'sheer force', 'iron fist'], color: ['gray', 'pink'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #532 - ADDED IRON FIST (HA)
    {name: 'gurdurr',type1: 'fighting',type2: 'none',ability: ['guts', 'sheer force', 'iron fist'], color: ['gray', 'pink'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #533 - ADDED IRON FIST (HA)
    {name: 'conkeldurr',type1: 'fighting',type2: 'none',ability: ['guts', 'sheer force', 'iron fist'], color: ['brown', 'gray'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #534 - ADDED IRON FIST (HA)
    {name: 'tympole',type1: 'water',type2: 'none',ability: ['swift swim', 'hydration', 'water absorb'], color: ['blue'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #535 - ADDED WATER ABSORB (HA)
    {name: 'palpitoad',type1: 'water',type2: 'ground',ability: ['swift swim', 'hydration', 'water absorb'], color: ['blue', 'green'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #536 - ADDED WATER ABSORB (HA)
    {name: 'seismitoad',type1: 'water',type2: 'ground',ability: ['swift swim', 'poison touch', 'water absorb'], color: ['blue', 'green'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #537 - ADDED WATER ABSORB (HA)
    {name: 'throh',type1: 'fighting',type2: 'none',ability: ['guts', 'inner focus', 'mold breaker'], color: ['red'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #538 - ADDED MOLD BREAKER (HA)
    {name: 'sawk',type1: 'fighting',type2: 'none',ability: ['sturdy', 'inner focus', 'mold breaker'], color: ['blue'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #539 - ADDED MOLD BREAKER (HA)
    {name: 'sewaddle',type1: 'bug',type2: 'grass',ability: ['swarm', 'chlorophyll', 'overcoat'], color: ['yellow', 'green'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #540 - ADDED OVERCOAT (HA)
    {name: 'swadloon',type1: 'bug',type2: 'grass',ability: ['leaf guard', 'chlorophyll', 'overcoat'], color: ['yellow', 'green'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #541 - ADDED OVERCOAT (HA)
    {name: 'leavanny',type1: 'bug',type2: 'grass',ability: ['swarm', 'chlorophyll', 'overcoat'], color: ['yellow', 'green'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #542 - ADDED OVERCOAT (HA)
    {name: 'venipede',type1: 'bug',type2: 'poison',ability: ['poison point', 'swarm', 'speed boost'], color: ['red', 'purple'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #543 - ADDED SPEED BOOST (HA)
    {name: 'whirlipede',type1: 'bug',type2: 'poison',ability: ['poison point', 'swarm', 'speed boost'], color: ['gray', 'red'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #544 - ADDED SPEED BOOST (HA)
    {name: 'scolipede',type1: 'bug',type2: 'poison',ability: ['poison point', 'swarm', 'speed boost'], color: ['red', 'purple'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #545 - ADDED SPEED BOOST (HA)
    {name: 'cottonee',type1: 'grass',type2: 'fairy',ability: ['prankster', 'infiltrator', 'chlorophyll'], color: ['white'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #546 - ADDED CHLOROPHYLL (HA)
    {name: 'whimsicott',type1: 'grass',type2: 'fairy',ability: ['prankster', 'infiltrator', 'chlorophyll'], color: ['white', 'green'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #547 - ADDED CHLOROPHYLL (HA)
    {name: 'petilil',type1: 'grass',type2: 'none',ability: ['chlorophyll', 'own tempo', 'leaf guard'], color: ['green'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #548 - ADDED LEAF GUARD (HA)
    {name: 'lilligant',type1: 'grass',type2: 'none',ability: ['chlorophyll', 'own tempo', 'leaf guard'], color: ['green', 'pink'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #549 - ADDED LEAF GUARD (HA)
    {name: 'basculin',type1: 'water',type2: 'none',ability: ['reckless', 'adaptability', 'mold breaker'], color: ['green', 'red'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #550 - ADDED MOLD BREAKER (HA)
    {name: 'sandile',type1: 'ground',type2: 'dark',ability: ['intimidate', 'moxie', 'anger point'], color: ['brown', 'black'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #551 - ADDED ANGER POINT (HA)
    {name: 'krokorok',type1: 'ground',type2: 'dark',ability: ['intimidate', 'moxie', 'anger point'], color: ['brown', 'black'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #552 - ADDED ANGER POINT (HA)
    {name: 'krookodile',type1: 'ground',type2: 'dark',ability: ['intimidate', 'moxie', 'anger point'], color: ['red', 'black'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #553 - ADDED ANGER POINT (HA)
    {name: 'darumaka',type1: 'fire',type2: 'none',ability: ['hustle', 'inner focus'], color: ['red', 'yellow'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #554 - ADDED INNER FOCUS (HA)
    {name: 'darmanitan',type1: 'fire',type2: 'none',ability: ['sheer force', 'zen mode'], color: ['red', 'black'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #555 - ADDED ZEN MODE (HA)
    {name: 'maractus',type1: 'grass',type2: 'none',ability: ['water absorb', 'chlorophyll', 'storm drain'], color: ['green', 'yellow'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #556 - ADDED STORM DRAIN (HA)
    {name: 'dwebble',type1: 'bug',type2: 'rock',ability: ['sturdy', 'shell armor', 'weak armor'], color: ['red', 'brown'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #557 - ADDED WEAK ARMOR (HA)
    {name: 'crustle',type1: 'bug',type2: 'rock',ability: ['sturdy', 'shell armor', 'weak armor'], color: ['red', 'brown'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #558 - ADDED WEAK ARMOR (HA)
    {name: 'scraggy',type1: 'dark',type2: 'fighting',ability: ['shed skin', 'moxie', 'intimidate'], color: ['yellow', 'red'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #559 - ADDED INTIMIDATE (HA)
    {name: 'scrafty',type1: 'dark',type2: 'fighting',ability: ['shed skin', 'moxie', 'intimidate'], color: ['yellow', 'red'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #560 - ADDED INTIMIDATE (HA)
    {name: 'sigilyph',type1: 'psychic',type2: 'flying',ability: ['wonder skin', 'magic guard', 'tinted lens'], color: ['black', 'blue'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #561 - ADDED TINTED LENS (HA)
    {name: 'yamask',type1: 'ghost',type2: 'none',ability: ['mummy'], color: ['black', 'yellow'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #562
    {name: 'cofagrigus',type1: 'ghost',type2: 'none',ability: ['mummy'], color: ['yellow', 'blue'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #563
    {name: 'tirtouga',type1: 'water',type2: 'rock',ability: ['solid rock', 'sturdy', 'swift swim'], color: ['blue', 'gray'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #564 - ADDED SWIFT SWIM (HA)
    {name: 'carracosta',type1: 'water',type2: 'rock',ability: ['solid rock', 'sturdy', 'swift swim'], color: ['blue', 'gray'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #565 - ADDED SWIFT SWIM (HA)
    {name: 'archen',type1: 'rock',type2: 'flying',ability: ['defeatist'], color: ['yellow', 'blue'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #566
    {name: 'archeops',type1: 'rock',type2: 'flying',ability: ['defeatist'], color: ['yellow', 'blue'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #567
    {name: 'trubbish',type1: 'poison',type2: 'none',ability: ['stench', 'sticky hold', 'aftermath'], color: ['green', 'white'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #568 - ADDED AFTERMATH (HA)
    {name: 'garbodor',type1: 'poison',type2: 'none',ability: ['stench', 'weak armor', 'aftermath'], color: ['green', 'pink'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #569 - ADDED AFTERMATH (HA)
    {name: 'zorua',type1: 'dark',type2: 'none',ability: ['illusion'], color: ['gray', 'red'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #570
    {name: 'zoroark',type1: 'dark',type2: 'none',ability: ['illusion'], color: ['gray', 'red'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #571
    {name: 'minccino',type1: 'normal',type2: 'none',ability: ['cute charm', 'technician', 'skill link'], color: ['gray', 'white'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #572 - ADDED SKILL LINK (HA)
    {name: 'cinccino',type1: 'normal',type2: 'none',ability: ['cute charm', 'technician', 'skill link'], color: ['gray', 'white'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #573 - ADDED SKILL LINK (HA)
    {name: 'gothita',type1: 'psychic',type2: 'none',ability: ['frisk', 'competitive', 'shadow tag'], color: ['purple', 'black'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #574 - ADDED SHADOW TAG (HA)
    {name: 'gothorita',type1: 'psychic',type2: 'none',ability: ['frisk', 'competitive', 'shadow tag'], color: ['purple', 'black'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #575 - ADDED SHADOW TAG (HA)
    {name: 'gothitelle',type1: 'psychic',type2: 'none',ability: ['frisk', 'competitive', 'shadow tag'], color: ['purple', 'black'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #576 - ADDED SHADOW TAG (HA)
    {name: 'solosis',type1: 'psychic',type2: 'none',ability: ['overcoat', 'magic guard', 'regenerator'], color: ['green', 'yellow'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #577 - ADDED REGENERATOR (HA)
    {name: 'duosion',type1: 'psychic',type2: 'none',ability: ['overcoat', 'magic guard', 'regenerator'], color: ['green', 'yellow'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #578 - ADDED REGENERATOR (HA)
    {name: 'reuniclus',type1: 'psychic',type2: 'none',ability: ['overcoat', 'magic guard', 'regenerator'], color: ['green', 'yellow'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #579 - ADDED REGENERATOR (HA)
    {name: 'ducklett',type1: 'water',type2: 'flying',ability: ['keen eye', 'big pecks', 'hydration'], color: ['blue', 'white'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #580 - ADDED HYDRATION (HA)
    {name: 'swanna',type1: 'water',type2: 'flying',ability: ['keen eye', 'big pecks', 'hydration'], color: ['white', 'blue'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #581 - ADDED HYDRATION (HA)
    {name: 'vanillite',type1: 'ice',type2: 'none',ability: ['ice body', 'snow cloak', 'weak armor'], color: ['white', 'blue'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #582 - ADDED WEAK ARMOR (HA)
    {name: 'vanillish',type1: 'ice',type2: 'none',ability: ['ice body', 'snow cloak', 'weak armor'], color: ['white', 'blue'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #583 - ADDED WEAK ARMOR (HA)
    {name: 'vanilluxe',type1: 'ice',type2: 'none',ability: ['ice body', 'snow cloak', 'weak armor'], color: ['white', 'blue'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #584 - ADDED WEAK ARMOR (HA)
    {name: 'deerling',type1: 'normal',type2: 'grass',ability: ['chlorophyll', 'sap sipper', 'serene grace'], color: ['pink', 'green'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #585 - ADDED SERENE GRACE (HA)
    {name: 'sawsbuck',type1: 'normal',type2: 'grass',ability: ['chlorophyll', 'sap sipper', 'serene grace'], color: ['brown', 'green'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #586 - ADDED SERENE GRACE (HA)
    {name: 'emolga',type1: 'electric',type2: 'flying',ability: ['static', 'motor drive'], color: ['yellow', 'white'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #587 - ADDED MOTOR DRIVE (HA)
    {name: 'karrablast',type1: 'bug',type2: 'none',ability: ['swarm', 'shed skin', 'no guard'], color: ['blue', 'gray'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #588 - ADDED NO GUARD (HA)
    {name: 'escavalier',type1: 'bug',type2: 'steel',ability: ['swarm', 'shell armor', 'overcoat'], color: ['gray', 'yellow'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #589 - ADDED OVERCOAT (HA)
    {name: 'foongus',type1: 'grass',type2: 'poison',ability: ['effect spore', 'regenerator'], color: ['white', 'red'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #590 - ADDED REGENERATOR (HA)
    {name: 'amoonguss',type1: 'grass',type2: 'poison',ability: ['effect spore', 'regenerator'], color: ['white', 'red'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #591 - ADDED REGENERATOR (HA)
    {name: 'frillish',type1: 'water',type2: 'ghost',ability: ['water absorb', 'cursed body', 'damp'], color: ['blue', 'pink'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #592 - ADDED DAMP (HA)
    {name: 'jellicent',type1: 'water',type2: 'ghost',ability: ['water absorb', 'cursed body', 'damp'], color: ['blue', 'pink'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #593 - ADDED DAMP (HA)
    {name: 'alomomola',type1: 'water',type2: 'none',ability: ['healer', 'hydration', 'regenerator'], color: ['pink'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #594 - ADDED REGENERATOR (HA)
    {name: 'joltik',type1: 'bug',type2: 'electric',ability: ['compound eyes', 'unnerve', 'swarm'], color: ['yellow', 'blue'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #595 - ADDED SWARM (HA)
    {name: 'galvantula',type1: 'bug',type2: 'electric',ability: ['compound eyes', 'unnerve', 'swarm'], color: ['yellow', 'blue'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #596 - ADDED SWARM (HA)
    {name: 'ferroseed',type1: 'grass',type2: 'steel',ability: ['iron barbs', 'anticipation'], color: ['gray', 'green'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #597 - ADDED ANTICIPATION (HA)
    {name: 'ferrothorn',type1: 'grass',type2: 'steel',ability: ['iron barbs', 'anticipation'], color: ['gray', 'green'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #598 - ADDED ANTICIPATION (HA)
    {name: 'klink',type1: 'steel',type2: 'none',ability: ['plus', 'minus', 'clear body'], color: ['gray'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #599 - ADDED CLEAR BODY (HA)
    {name: 'klang',type1: 'steel',type2: 'none',ability: ['plus', 'minus', 'clear body'], color: ['gray'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #600 - ADDED CLEAR BODY (HA)
    {name: 'klinklang',type1: 'steel',type2: 'none',ability: ['plus', 'minus', 'clear body'], color: ['gray'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #601 - ADDED CLEAR BODY (HA)
    {name: 'tynamo',type1: 'electric',type2: 'none',ability: ['levitate'], color: ['white', 'blue'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #602
    {name: 'eelektrik',type1: 'electric',type2: 'none',ability: ['levitate'], color: ['blue', 'yellow'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #603
    {name: 'eelektross',type1: 'electric',type2: 'none',ability: ['levitate'], color: ['blue', 'yellow'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #604
    {name: 'elgyem',type1: 'psychic',type2: 'none',ability: ['telepathy', 'synchronize', 'analytic'], color: ['green', 'yellow'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #605 - ADDED ANALYTIC (HA)
    {name: 'beheeyem',type1: 'psychic',type2: 'none',ability: ['telepathy', 'synchronize', 'analytic'], color: ['green', 'yellow'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #606 - ADDED ANALYTIC (HA)
    {name: 'litwick',type1: 'ghost',type2: 'fire',ability: ['flash fire', 'flame body', 'infiltrator'], color: ['white', 'purple'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #607 - ADDED INFILTRATOR (HA)
    {name: 'lampent',type1: 'ghost',type2: 'fire',ability: ['flash fire', 'flame body', 'infiltrator'], color: ['black', 'purple'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #608 - ADDED INFILTRATOR (HA)
    {name: 'chandelure',type1: 'ghost',type2: 'fire',ability: ['flash fire', 'flame body', 'infiltrator'], color: ['black', 'purple'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #609 - ADDED INFILTRATOR (HA)
    {name: 'axew',type1: 'dragon',type2: 'none',ability: ['rivalry', 'mold breaker', 'unnerve'], color: ['green', 'gray'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #610 - ADDED UNNERVE (HA)
    {name: 'fraxure',type1: 'dragon',type2: 'none',ability: ['rivalry', 'mold breaker', 'unnerve'], color: ['green', 'gray'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #611 - ADDED UNNERVE (HA)
    {name: 'haxorus',type1: 'dragon',type2: 'none',ability: ['rivalry', 'mold breaker', 'unnerve'], color: ['green', 'yellow'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #612 - ADDED UNNERVE (HA)
    {name: 'cubchoo',type1: 'ice',type2: 'none',ability: ['snow cloak', 'slush rush', 'rattled'], color: ['white', 'blue'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #613 - ADDED RATTLED (HA)
    {name: 'beartic',type1: 'ice',type2: 'none',ability: ['snow cloak', 'slush rush', 'swift swim'], color: ['white', 'blue'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #614 - ADDED SWIFT SWIM (HA)
    {name: 'cryogonal',type1: 'ice',type2: 'none',ability: ['levitate'], color: ['blue', 'white'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #615
    {name: 'shelmet',type1: 'bug',type2: 'none',ability: ['hydration', 'shell armor', 'overcoat'], color: ['green', 'yellow'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #616 - ADDED OVERCOAT (HA)
    {name: 'accelgor',type1: 'bug',type2: 'none',ability: ['hydration', 'sticky hold', 'unburden'], color: ['gray', 'blue'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #617 - ADDED UNBURDEN (HA)
    {name: 'stunfisk',type1: 'ground',type2: 'electric',ability: ['static', 'limber', 'sand veil'], color: ['brown', 'yellow'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #618 - ADDED SAND VEIL (HA)
    {name: 'mienfoo',type1: 'fighting',type2: 'none',ability: ['inner focus', 'regeneration', 'reckless'], color: ['purple', 'yellow'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #619 - ADDED RECKLESS (HA)
    {name: 'mienshao',type1: 'fighting',type2: 'none',ability: ['inner focus', 'regeneration', 'reckless'], color: ['purple', 'white'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #620 - ADDED RECKLESS (HA)
    {name: 'bouffalant',type1: 'normal',type2: 'none',ability: ['reckless', 'sap sipper', 'soundproof'], color: ['brown', 'black'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #621 - ADDED SOUNDPROOF (HA)
    {name: 'rufflet',type1: 'normal',type2: 'flying',ability: ['keen eye', 'sheer force', 'defiant'], color: ['white', 'blue'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #622 - ADDED DEFIANT (HA)
    {name: 'braviary',type1: 'normal',type2: 'flying',ability: ['keen eye', 'sheer force', 'defiant'], color: ['red', 'white'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #623 - ADDED DEFIANT (HA)
    {name: 'vullaby',type1: 'dark',type2: 'flying',ability: ['big pecks', 'overcoat', 'weak armor'], color: ['black', 'brown'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #624 - ADDED WEAK ARMOR (HA)
    {name: 'mandibuzz',type1: 'dark',type2: 'flying',ability: ['big pecks', 'overcoat', 'weak armor'], color: ['black', 'brown'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #625 - ADDED WEAK ARMOR (HA)
    {name: 'heatmor',type1: 'fire',type2: 'none',ability: ['gluttony', 'flash fire', 'white smoke'], color: ['red', 'yellow'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #626 - ADDED WHITE SMOKE (HA)
    {name: 'durant',type1: 'bug',type2: 'steel',ability: ['swarm', 'hustle', 'truant'], color: ['gray', 'black'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #627 - ADDED TRUANT (HA)
    {name: 'deino',type1: 'dark',type2: 'dragon',ability: ['hustle'], color: ['blue', 'black'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #628
    {name: 'zweilous',type1: 'dark',type2: 'dragon',ability: ['hustle'], color: ['blue', 'black'], stage: 2, fullyEvolved: false, gen: 5, guessed: false }, // #629
    {name: 'hydreigon',type1: 'dark',type2: 'dragon',ability: ['levitate'], color: ['blue', 'black'], stage: 3, fullyEvolved: true, gen: 5, guessed: false }, // #630
    {name: 'larvesta',type1: 'bug',type2: 'fire',ability: ['flame body', 'swarm'], color: ['white', 'red'], stage: 1, fullyEvolved: false, gen: 5, guessed: false }, // #631 - ADDED SWARM (HA)
    {name: 'volcarona',type1: 'bug',type2: 'fire',ability: ['flame body', 'swarm'], color: ['white', 'red'], stage: 2, fullyEvolved: true, gen: 5, guessed: false }, // #632 - ADDED SWARM (HA)
    {name: 'cobalion',type1: 'steel',type2: 'fighting',ability: ['justified'], color: ['blue', 'gray'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #633
    {name: 'terrakion',type1: 'rock',type2: 'fighting',ability: ['justified'], color: ['yellow', 'gray'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #634
    {name: 'virizion',type1: 'grass',type2: 'fighting',ability: ['justified'], color: ['green', 'yellow'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #635
    {name: 'tornadus',type1: 'flying',type2: 'none',ability: ['prankster', 'defiant'], color: ['green', 'blue'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #636 - ADDED DEFIANT (HA/Therian)
    {name: 'thundurus',type1: 'electric',type2: 'flying',ability: ['prankster', 'defiant'], color: ['blue', 'yellow'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #637 - ADDED DEFIANT (HA/Therian)
    {name: 'reshiram',type1: 'dragon',type2: 'fire',ability: ['turboblaze'], color: ['white', 'gray'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #638
    {name: 'zekrom',type1: 'dragon',type2: 'electric',ability: ['teravolt'], color: ['black', 'blue'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #639
    {name: 'landorus',type1: 'ground',type2: 'flying',ability: ['sand force', 'sheer force'], color: ['orange', 'brown'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #640 - ADDED SHEER FORCE (HA/Therian)
    {name: 'kyurem',type1: 'dragon',type2: 'ice',ability: ['pressure', 'turboblaze', 'teravolt'], color: ['gray', 'blue'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #641 - Included fused abilities
    {name: 'keldeo',type1: 'water',type2: 'fighting',ability: ['justified'], color: ['blue', 'white'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #642
    {name: 'meloetta',type1: 'normal',type2: 'psychic',ability: ['serene grace'], color: ['white', 'green'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #643
    {name: 'genesect',type1: 'bug',type2: 'steel',ability: ['download'], color: ['purple', 'gray'], stage: 1, fullyEvolved: true, gen: 5, guessed: false }, // #644
];

    //gen 6
    const pokedexKalos = [
    {name: 'chespin',type1: 'grass',type2: 'none',ability: ['overgrow'], color: ['green', 'brown'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #650
    {name: 'quilladin',type1: 'grass',type2: 'none',ability: ['overgrow'], color: ['green', 'brown'], stage: 2, fullyEvolved: false, gen: 6, guessed: false }, // #651
    {name: 'chesnaught',type1: 'grass',type2: 'fighting',ability: ['overgrow', 'bulletproof'], color: ['green', 'brown'], stage: 3, fullyEvolved: true, gen: 6, guessed: false }, // #652 - ADDED BULLETPROOF (HA)
    {name: 'fennekin',type1: 'fire',type2: 'none',ability: ['blaze'], color: ['red', 'yellow'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #653
    {name: 'braixen',type1: 'fire',type2: 'none',ability: ['blaze'], color: ['red', 'yellow'], stage: 2, fullyEvolved: false, gen: 6, guessed: false }, // #654
    {name: 'delphox',type1: 'fire',type2: 'psychic',ability: ['blaze', 'magician'], color: ['red', 'yellow'], stage: 3, fullyEvolved: true, gen: 6, guessed: false }, // #655 - ADDED MAGICIAN (HA)
    {name: 'froakie',type1: 'water',type2: 'none',ability: ['torrent'], color: ['blue', 'white'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #656
    {name: 'frogadier',type1: 'water',type2: 'none',ability: ['torrent'], color: ['blue', 'black'], stage: 2, fullyEvolved: false, gen: 6, guessed: false }, // #657
    {name: 'greninja',type1: 'water',type2: 'dark',ability: ['torrent', 'protean'], color: ['blue', 'black'], stage: 3, fullyEvolved: true, gen: 6, guessed: false }, // #658 - ADDED PROTEAN (HA)
    {name: 'bunnelby',type1: 'normal',type2: 'none',ability: ['pickup', 'cheek pouch'], color: ['brown', 'gray'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #659
    {name: 'diggersby',type1: 'normal',type2: 'ground',ability: ['pickup', 'cheek pouch', 'huge power'], color: ['brown', 'gray'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #660 - ADDED HUGE POWER (HA)
    {name: 'fletchling',type1: 'normal',type2: 'flying',ability: ['big pecks', 'gale wings'], color: ['red', 'gray'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #661 - ADDED GALE WINGS (HA)
    {name: 'fletchinder',type1: 'fire',type2: 'flying',ability: ['flame body', 'gale wings'], color: ['red', 'black'], stage: 2, fullyEvolved: false, gen: 6, guessed: false }, // #662 - ADDED GALE WINGS (HA)
    {name: 'talonflame',type1: 'fire',type2: 'flying',ability: ['flame body', 'gale wings'], color: ['red', 'yellow'], stage: 3, fullyEvolved: true, gen: 6, guessed: false }, // #663 - ADDED GALE WINGS (HA)
    {name: 'scatterbug',type1: 'bug',type2: 'none',ability: ['shield dust', 'compound eyes'], color: ['black', 'green'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #664
    {name: 'spewpa',type1: 'bug',type2: 'none',ability: ['shed skin'], color: ['black', 'gray'], stage: 2, fullyEvolved: false, gen: 6, guessed: false }, // #665
    {name: 'vivillon',type1: 'bug',type2: 'flying',ability: ['shield dust', 'compound eyes', 'friend guard'], color: ['black', 'blue'], stage: 3, fullyEvolved: true, gen: 6, guessed: false }, // #666 - ADDED FRIEND GUARD (HA)
    {name: 'litleo',type1: 'fire',type2: 'normal',ability: ['rivalry', 'unnerve', 'moxie'], color: ['brown', 'red'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #667 - ADDED MOXIE (HA)
    {name: 'pyroar',type1: 'fire',type2: 'normal',ability: ['rivalry', 'unnerve', 'moxie'], color: ['brown', 'red'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #668 - ADDED MOXIE (HA)
    {name: 'flabebe',type1: 'fairy',type2: 'none',ability: ['flower veil', 'symbiosis'], color: ['white', 'green'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #669 - ADDED SYMBIOSIS (HA)
    {name: 'floette',type1: 'fairy',type2: 'none',ability: ['flower veil', 'symbiosis'], color: ['white', 'green'], stage: 2, fullyEvolved: false, gen: 6, guessed: false }, // #670 - ADDED SYMBIOSIS (HA)
    {name: 'florges',type1: 'fairy',type2: 'none',ability: ['flower veil', 'symbiosis'], color: ['white', 'green'], stage: 3, fullyEvolved: true, gen: 6, guessed: false }, // #671 - ADDED SYMBIOSIS (HA)
    {name: 'skiddo',type1: 'grass',type2: 'none',ability: ['sap sipper'], color: ['brown', 'green'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #672
    {name: 'gogoat',type1: 'grass',type2: 'none',ability: ['sap sipper'], color: ['brown', 'green'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #673
    {name: 'pancham',type1: 'fighting',type2: 'none',ability: ['iron fist', 'mold breaker'], color: ['white', 'black'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #674
    {name: 'pangoro',type1: 'fighting',type2: 'dark',ability: ['iron fist', 'mold breaker', 'scrappy'], color: ['white', 'black'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #675 - ADDED SCRAPPY (HA)
    {name: 'furfrou',type1: 'normal',type2: 'none',ability: ['fur coat'], color: ['white', 'black'], stage: 1, fullyEvolved: true, gen: 6, guessed: false }, // #676
    {name: 'espurr',type1: 'psychic',type2: 'none',ability: ['keen eye', 'infiltrator'], color: ['gray', 'pink'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #677
    {name: 'meowstic',type1: 'psychic',type2: 'none',ability: ['keen eye', 'infiltrator', 'prankster', 'competitive'], color: ['blue', 'white'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #678 - ADDED GENDER HAs
    {name: 'honedge',type1: 'steel',type2: 'ghost',ability: ['no guard'], color: ['brown', 'gray'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #679
    {name: 'doublade',type1: 'steel',type2: 'ghost',ability: ['no guard'], color: ['brown', 'gray'], stage: 2, fullyEvolved: false, gen: 6, guessed: false }, // #680
    {name: 'aegislash',type1: 'steel',type2: 'ghost',ability: ['stance change'], color: ['brown', 'gray'], stage: 3, fullyEvolved: true, gen: 6, guessed: false }, // #681
    {name: 'spritzee',type1: 'fairy',type2: 'none',ability: ['healer'], color: ['pink'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #682
    {name: 'aromatisse',type1: 'fairy',type2: 'none',ability: ['healer', 'aroma veil'], color: ['pink', 'purple'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #683 - ADDED AROMA VEIL (HA)
    {name: 'swirlix',type1: 'fairy',type2: 'none',ability: ['sweet veil'], color: ['white', 'pink'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #684
    {name: 'slurpuff',type1: 'fairy',type2: 'none',ability: ['sweet veil', 'unburden'], color: ['white', 'pink'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #685 - ADDED UNBURDEN (HA)
    {name: 'inkay',type1: 'dark',type2: 'psychic',ability: ['contrary', 'suction cups'], color: ['blue', 'white'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #686
    {name: 'malamar',type1: 'dark',type2: 'psychic',ability: ['contrary', 'suction cups', 'infiltrator'], color: ['blue', 'white'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #687 - ADDED INFILTRATOR (HA)
    {name: 'binacle',type1: 'rock',type2: 'water',ability: ['tough claws', 'sniper'], color: ['brown', 'gray'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #688
    {name: 'barbaracle',type1: 'rock',type2: 'water',ability: ['tough claws', 'sniper', 'pickpocket'], color: ['brown', 'gray'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #689 - ADDED PICKPOCKET (HA)
    {name: 'skrelp',type1: 'poison',type2: 'water',ability: ['poison touch', 'poison point', 'adaptability'], color: ['brown', 'red'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #690 - ADDED ADAPTABILITY (HA)
    {name: 'dragalge',type1: 'poison',type2: 'dragon',ability: ['poison touch', 'poison point', 'adaptability'], color: ['brown', 'red'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #691 - ADDED ADAPTABILITY (HA)
    {name: 'clauncher',type1: 'water',type2: 'none',ability: ['mega launcher'], color: ['blue', 'red'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #692
    {name: 'clawitzer',type1: 'water',type2: 'none',ability: ['mega launcher'], color: ['blue', 'red'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #693
    {name: 'helioptile',type1: 'electric',type2: 'normal',ability: ['dry skin', 'sand veil', 'solar power'], color: ['yellow', 'black'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #694 - ADDED SOLAR POWER (HA)
    {name: 'heliolisk',type1: 'electric',type2: 'normal',ability: ['dry skin', 'sand veil', 'solar power'], color: ['yellow', 'black'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #695 - ADDED SOLAR POWER (HA)
    {name: 'tyrunt',type1: 'rock',type2: 'dragon',ability: ['strong jaw'], color: ['brown', 'red'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #696
    {name: 'tyrantrum',type1: 'rock',type2: 'dragon',ability: ['strong jaw', 'rock head'], color: ['red', 'white'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #697 - ADDED ROCK HEAD (HA)
    {name: 'amaura',type1: 'rock',type2: 'ice',ability: ['refrigerate'], color: ['blue', 'white'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #698
    {name: 'aurorus',type1: 'rock',type2: 'ice',ability: ['refrigerate', 'snow warning'], color: ['blue', 'white'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #699 - ADDED SNOW WARNING (HA)
    {name: 'sylveon',type1: 'fairy',type2: 'none',ability: ['cute charm', 'pixilate'], color: ['pink', 'white'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #700 - ADDED PIXILATE (HA)
    {name: 'hawlucha',type1: 'fighting',type2: 'flying',ability: ['unburden', 'limber', 'mold breaker'], color: ['green', 'red'], stage: 1, fullyEvolved: true, gen: 6, guessed: false }, // #701 - ADDED MOLD BREAKER (HA)
    {name: 'dedenne',type1: 'electric',type2: 'fairy',ability: ['cheek pouch', 'pickup', 'plus'], color: ['yellow', 'orange'], stage: 1, fullyEvolved: true, gen: 6, guessed: false }, // #702 - ADDED PLUS
    {name: 'carbink',type1: 'rock',type2: 'fairy',ability: ['clear body', 'sturdy', 'sand force'], color: ['gray', 'blue'], stage: 1, fullyEvolved: true, gen: 6, guessed: false }, // #703 - ADDED SAND FORCE (HA)
    {name: 'goomy',type1: 'dragon',type2: 'none',ability: ['gooey', 'hydration'], color: ['purple', 'green'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #704
    {name: 'sliggoo',type1: 'dragon',type2: 'none',ability: ['gooey', 'hydration'], color: ['purple', 'green'], stage: 2, fullyEvolved: false, gen: 6, guessed: false }, // #705
    {name: 'goodra',type1: 'dragon',type2: 'none',ability: ['gooey', 'hydration', 'sap sipper'], color: ['purple', 'green'], stage: 3, fullyEvolved: true, gen: 6, guessed: false }, // #706 - ADDED SAP SIPPER (HA)
    {name: 'klefki',type1: 'steel',type2: 'fairy',ability: ['prankster', 'magician'], color: ['gray', 'yellow'], stage: 1, fullyEvolved: true, gen: 6, guessed: false }, // #707 - ADDED MAGICIAN (HA)
    {name: 'phantump',type1: 'ghost',type2: 'grass',ability: ['natural cure', 'frisk'], color: ['brown', 'gray'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #708
    {name: 'trevenant',type1: 'ghost',type2: 'grass',ability: ['natural cure', 'frisk', 'harvest'], color: ['brown', 'gray'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #709 - ADDED HARVEST (HA)
    {name: 'pumpkaboo',type1: 'ghost',type2: 'grass',ability: ['pickup', 'frisk', 'insomnia'], color: ['black', 'yellow'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #710 - ADDED INSOMNIA (HA)
    {name: 'gourgeist',type1: 'ghost',type2: 'grass',ability: ['pickup', 'frisk', 'insomnia'], color: ['black', 'yellow'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #711 - ADDED INSOMNIA (HA)
    {name: 'bergmite',type1: 'ice',type2: 'none',ability: ['own tempo', 'ice body'], color: ['blue', 'white'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #712
    {name: 'avalugg',type1: 'ice',type2: 'none',ability: ['own tempo', 'ice body', 'sturdy'], color: ['blue', 'white'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #713 - ADDED STURDY (HA)
    {name: 'noibat',type1: 'flying',type2: 'dragon',ability: ['frisk', 'infiltrator'], color: ['purple', 'green'], stage: 1, fullyEvolved: false, gen: 6, guessed: false }, // #714
    {name: 'noivern',type1: 'flying',type2: 'dragon',ability: ['frisk', 'infiltrator', 'telepathy'], color: ['purple', 'green'], stage: 2, fullyEvolved: true, gen: 6, guessed: false }, // #715 - ADDED TELEPATHY (HA)
    {name: 'xerneas',type1: 'fairy',type2: 'none',ability: ['fairy aura'], color: ['blue', 'black'], stage: 1, fullyEvolved: true, gen: 6, guessed: false }, // #716
    {name: 'yveltal',type1: 'dark',type2: 'flying',ability: ['dark aura'], color: ['red', 'black'], stage: 1, fullyEvolved: true, gen: 6, guessed: false }, // #717
    {name: 'zygarde',type1: 'dragon',type2: 'ground',ability: ['aura break', 'power construct'], color: ['green', 'black'], stage: 1, fullyEvolved: true, gen: 6, guessed: false }, // #718 - ADDED POWER CONSTRUCT (HA)
    {name: 'diancie',type1: 'rock',type2: 'fairy',ability: ['clear body'], color: ['pink', 'gray'], stage: 1, fullyEvolved: true, gen: 6, guessed: false }, // #719
    {name: 'hoopa',type1: 'psychic',type2: 'ghost',ability: ['magician'], color: ['purple', 'gold'], stage: 1, fullyEvolved: true, gen: 6, guessed: false }, // #720
    {name: 'volcanion',type1: 'fire',type2: 'water',ability: ['water absorb'], color: ['red', 'blue'], stage: 1, fullyEvolved: true, gen: 6, guessed: false }, // #721
];

    //gen 7
    const pokedexAlola = [
    {name: 'rowlet',type1: 'grass',type2: 'flying',ability: ['overgrow'], color: ['green', 'brown'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #722
    {name: 'dartrix',type1: 'grass',type2: 'flying',ability: ['overgrow'], color: ['green', 'brown'], stage: 2, fullyEvolved: false, gen: 7, guessed: false }, // #723
    {name: 'decidueye',type1: 'grass',type2: 'ghost',ability: ['overgrow'], color: ['green', 'white'], stage: 3, fullyEvolved: true, gen: 7, guessed: false }, // #724
    {name: 'litten',type1: 'fire',type2: 'none',ability: ['blaze'], color: ['red', 'black'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #725
    {name: 'torracat',type1: 'fire',type2: 'none',ability: ['blaze'], color: ['red', 'black'], stage: 2, fullyEvolved: false, gen: 7, guessed: false }, // #726
    {name: 'incineroar',type1: 'fire',type2: 'dark',ability: ['blaze'], color: ['red', 'black'], stage: 3, fullyEvolved: true, gen: 7, guessed: false }, // #727
    {name: 'popplio',type1: 'water',type2: 'none',ability: ['torrent'], color: ['blue', 'white'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #728
    {name: 'brionne',type1: 'water',type2: 'none',ability: ['torrent'], color: ['blue', 'white'], stage: 2, fullyEvolved: false, gen: 7, guessed: false }, // #729
    {name: 'primarina',type1: 'water',type2: 'fairy',ability: ['torrent'], color: ['blue', 'white'], stage: 3, fullyEvolved: true, gen: 7, guessed: false }, // #730
    {name: 'pikipek',type1: 'normal',type2: 'flying',ability: ['keen eye', 'skill link'], color: ['black', 'white'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #731
    {name: 'trumbeak',type1: 'normal',type2: 'flying',ability: ['keen eye', 'skill link'], color: ['black', 'white'], stage: 2, fullyEvolved: false, gen: 7, guessed: false }, // #732
    {name: 'toucannon',type1: 'normal',type2: 'flying',ability: ['keen eye', 'skill link', 'sheer force'], color: ['black', 'red'], stage: 3, fullyEvolved: true, gen: 7, guessed: false }, // #733 - ADDED SHEER FORCE
    {name: 'yungoos',type1: 'normal',type2: 'none',ability: ['stakeout', 'strong jaw'], color: ['brown', 'yellow'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #734
    {name: 'gumshoos',type1: 'normal',type2: 'none',ability: ['stakeout', 'strong jaw'], color: ['brown', 'yellow'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #735
    {name: 'grubbin',type1: 'bug',type2: 'none',ability: ['swarm'], color: ['yellow', 'green'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #736
    {name: 'charjabug',type1: 'bug',type2: 'electric',ability: ['battery'], color: ['green', 'yellow'], stage: 2, fullyEvolved: false, gen: 7, guessed: false }, // #737
    {name: 'vikavolt',type1: 'bug',type2: 'electric',ability: ['levitate'], color: ['blue', 'yellow'], stage: 3, fullyEvolved: true, gen: 7, guessed: false }, // #738
    {name: 'crabrawler',type1: 'fighting',type2: 'none',ability: ['hyper cutter', 'iron fist'], color: ['blue', 'white'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #739
    {name: 'crabominable',type1: 'fighting',type2: 'ice',ability: ['hyper cutter', 'iron fist'], color: ['blue', 'white'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #740
    {name: 'oricorio-baile',type1: 'fire',type2: 'flying',ability: ['dancer'], color: ['red', 'yellow'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #741 (Baile Style)
    {name: 'oricorio-pom-pom',type1: 'electric',type2: 'flying',ability: ['dancer'], color: ['yellow', 'black'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #741 (Pom-Pom Style)
    {name: 'oricorio-pau',type1: 'psychic',type2: 'flying',ability: ['dancer'], color: ['pink', 'white'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #741 (P'au Style)
    {name: 'oricorio-sensu',type1: 'ghost',type2: 'flying',ability: ['dancer'], color: ['purple', 'black'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #741 (Sensu Style)
    {name: 'cutiefly',type1: 'bug',type2: 'fairy',ability: ['honey gather', 'shield dust'], color: ['yellow', 'white'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #742
    {name: 'ribombee',type1: 'bug',type2: 'fairy',ability: ['honey gather', 'shield dust'], color: ['yellow', 'white'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #743
    {name: 'rockruff',type1: 'rock',type2: 'none',ability: ['keen eye', 'vital spirit'], color: ['brown', 'white'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #744
    {name: 'lycanroc-midday-midnight',type1: 'rock',type2: 'none',ability: ['keen eye', 'sand rush', 'tough claws'], color: ['brown', 'white'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #745 - CORRECTED ABILITIES
    {name: 'lycanroc-dusk',type1: 'rock',type2: 'none',ability: ['tough claws'], color: ['brown', 'orange'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #745 - ADDED DUSK FORM
    {name: 'wishiwashi',type1: 'water',type2: 'none',ability: ['schooling'], color: ['blue', 'gray'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #746
    {name: 'mareanie',type1: 'poison',type2: 'water',ability: ['merciless', 'limber'], color: ['blue', 'purple'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #747
    {name: 'toxapex',type1: 'poison',type2: 'water',ability: ['merciless', 'limber', 'regenerator'], color: ['blue', 'purple'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #748 - ADDED REGENERATOR
    {name: 'mudbray',type1: 'ground',type2: 'none',ability: ['own tempo', 'stamina'], color: ['brown'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #749
    {name: 'mudsdale',type1: 'ground',type2: 'none',ability: ['own tempo', 'stamina'], color: ['brown'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #750
    {name: 'dewpider',type1: 'water',type2: 'bug',ability: ['water bubble'], color: ['green', 'blue'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #751
    {name: 'araquanid',type1: 'water',type2: 'bug',ability: ['water bubble'], color: ['blue', 'green'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #752
    {name: 'fomantis',type1: 'grass',type2: 'none',ability: ['leaf guard'], color: ['pink', 'green'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #753
    {name: 'lurantis',type1: 'grass',type2: 'none',ability: ['leaf guard'], color: ['pink', 'green'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #754
    {name: 'morelull',type1: 'grass',type2: 'fairy',ability: ['illuminate', 'effect spore'], color: ['purple', 'white'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #755
    {name: 'shiinotic',type1: 'grass',type2: 'fairy',ability: ['illuminate', 'effect spore'], color: ['purple', 'white'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #756
    {name: 'salandit',type1: 'poison',type2: 'fire',ability: ['corrosion'], color: ['black', 'gray'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #757
    {name: 'salazzle',type1: 'poison',type2: 'fire',ability: ['corrosion'], color: ['black', 'purple'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #758
    {name: 'stufful',type1: 'normal',type2: 'fighting',ability: ['fluffy', 'klutz'], color: ['pink', 'brown'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #759
    {name: 'bewear',type1: 'normal',type2: 'fighting',ability: ['fluffy', 'klutz'], color: ['pink', 'black'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #760
    {name: 'bounsweet',type1: 'grass',type2: 'none',ability: ['leaf guard', 'oblivious'], color: ['pink', 'green'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #761
    {name: 'steenee',type1: 'grass',type2: 'none',ability: ['leaf guard', 'oblivious'], color: ['pink', 'green'], stage: 2, fullyEvolved: false, gen: 7, guessed: false }, // #762
    {name: 'tsareena',type1: 'grass',type2: 'none',ability: ['leaf guard', 'queenly majesty'], color: ['pink', 'green'], stage: 3, fullyEvolved: true, gen: 7, guessed: false }, // #763
    {name: 'comfey',type1: 'fairy',type2: 'none',ability: ['flower veil', 'triage'], color: ['green', 'pink'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #764
    {name: 'oranguru',type1: 'normal',type2: 'psychic',ability: ['inner focus', 'telepathy', 'symbiosis'], color: ['white', 'purple'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #765 - ADDED SYMBIOSIS
    {name: 'passimian',type1: 'fighting',type2: 'none',ability: ['receiver', 'defiant'], color: ['white', 'green'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #766 - ADDED DEFIANT
    {name: 'wimpod',type1: 'bug',type2: 'water',ability: ['wimp out'], color: ['gray', 'blue'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #767
    {name: 'golisopod',type1: 'bug',type2: 'water',ability: ['emergency exit'], color: ['gray', 'blue'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #768
    {name: 'sandygast',type1: 'ghost',type2: 'ground',ability: ['water compaction'], color: ['brown', 'gray'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #769
    {name: 'palossand',type1: 'ghost',type2: 'ground',ability: ['water compaction'], color: ['brown', 'gray'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #770
    {name: 'pyukumuku',type1: 'water',type2: 'none',ability: ['innards out'], color: ['green', 'white'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #771
    {name: 'type-null',type1: 'normal',type2: 'none',ability: ['battle armor'], color: ['gray', 'blue'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #772
    {name: 'silvally',type1: 'normal',type2: 'none',ability: ['rks system'], color: ['gray', 'blue'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #773
    {name: 'minior',type1: 'rock',type2: 'flying',ability: ['shields down'], color: ['red', 'blue'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #774
    {name: 'komala',type1: 'normal',type2: 'none',ability: ['comatose'], color: ['white', 'brown'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #775 - ADJUSTED ABILITY
    {name: 'turtonator',type1: 'fire',type2: 'dragon',ability: ['shell armor'], color: ['red', 'yellow'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #776
    {name: 'togedemaru',type1: 'electric',type2: 'steel',ability: ['iron barbs', 'lightning rod'], color: ['gray', 'yellow'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #777
    {name: 'mimikyu',type1: 'ghost',type2: 'fairy',ability: ['disguise'], color: ['yellow', 'black'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #778
    {name: 'bruxish',type1: 'water',type2: 'psychic',ability: ['dazzling', 'strong jaw'], color: ['pink', 'blue'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #779
    {name: 'drampa',type1: 'normal',type2: 'dragon',ability: ['berserk', 'sap sipper'], color: ['white', 'blue'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #780
    {name: 'dhelmise',type1: 'ghost',type2: 'grass',ability: ['steelworker'], color: ['green', 'red'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #781
    {name: 'jangmo-o',type1: 'dragon',type2: 'none',ability: ['bulletproof', 'soundproof'], color: ['gray', 'yellow'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #782
    {name: 'hakamo-o',type1: 'dragon',type2: 'fighting',ability: ['bulletproof', 'soundproof'], color: ['gray', 'yellow'], stage: 2, fullyEvolved: false, gen: 7, guessed: false }, // #783
    {name: 'kommo-o',type1: 'dragon',type2: 'fighting',ability: ['bulletproof', 'soundproof'], color: ['gray', 'yellow'], stage: 3, fullyEvolved: true, gen: 7, guessed: false }, // #784
    {name: 'tapu-koko',type1: 'electric',type2: 'fairy',ability: ['electric surge'], color: ['yellow', 'black'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #785
    {name: 'tapu-lele',type1: 'psychic',type2: 'fairy',ability: ['psychic surge'], color: ['pink', 'yellow'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #786
    {name: 'tapu-bulu',type1: 'grass',type2: 'fairy',ability: ['grassy surge'], color: ['red', 'brown'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #787
    {name: 'tapu-fini',type1: 'water',type2: 'fairy',ability: ['misty surge'], color: ['purple', 'white'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #788
    {name: 'cosmog',type1: 'psychic',type2: 'none',ability: ['unaware'], color: ['blue', 'purple'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #789
    {name: 'cosmoem',type1: 'psychic',type2: 'none',ability: ['sturdy'], color: ['blue', 'purple'], stage: 2, fullyEvolved: false, gen: 7, guessed: false }, // #790
    {name: 'solgaleo',type1: 'psychic',type2: 'steel',ability: ['full metal body'], color: ['white', 'yellow'], stage: 3, fullyEvolved: true, gen: 7, guessed: false }, // #791
    {name: 'lunala',type1: 'psychic',type2: 'ghost',ability: ['shadow shield'], color: ['purple', 'blue'], stage: 3, fullyEvolved: true, gen: 7, guessed: false }, // #792
    {name: 'nihilego',type1: 'rock',type2: 'poison',ability: ['beast boost'], color: ['white', 'blue'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #793
    {name: 'buzzwole',type1: 'bug',type2: 'fighting',ability: ['beast boost'], color: ['red', 'green'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #794
    {name: 'pheromosa',type1: 'bug',type2: 'fighting',ability: ['beast boost'], color: ['white', 'black'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #795
    {name: 'xurkitree',type1: 'electric',type2: 'none',ability: ['beast boost'], color: ['black', 'white'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #796
    {name: 'celesteela',type1: 'steel',type2: 'flying',ability: ['beast boost'], color: ['green', 'gray'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #797
    {name: 'kartana',type1: 'grass',type2: 'steel',ability: ['beast boost'], color: ['white', 'green'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #798
    {name: 'guzzlord',type1: 'dark',type2: 'dragon',ability: ['beast boost'], color: ['black', 'blue'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #799
    {name: 'necrozma',type1: 'psychic',type2: 'none',ability: ['prism armor'], color: ['black', 'gray'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #800
    {name: 'magearna',type1: 'steel',type2: 'fairy',ability: ['soul-heart'], color: ['red', 'gray'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #801
    {name: 'marshadow',type1: 'fighting',type2: 'ghost',ability: ['technician'], color: ['gray', 'green'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #802
    {name: 'poipole',type1: 'poison',type2: 'none',ability: ['beast boost'], color: ['purple', 'yellow'], stage: 1, fullyEvolved: false, gen: 7, guessed: false }, // #803
    {name: 'naganadel',type1: 'poison',type2: 'dragon',ability: ['beast boost'], color: ['purple', 'yellow'], stage: 2, fullyEvolved: true, gen: 7, guessed: false }, // #804
    {name: 'stakataka',type1: 'rock',type2: 'steel',ability: ['beast boost'], color: ['gray', 'blue'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #805
    {name: 'blacephalon',type1: 'fire',type2: 'ghost',ability: ['beast boost'], color: ['white', 'red'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #806
    {name: 'zeraora',type1: 'electric',type2: 'none',ability: ['volt absorb'], color: ['yellow', 'black'], stage: 1, fullyEvolved: true, gen: 7, guessed: false }, // #807
];

    //gen 8
    const pokedexGalarHisui = [
    {name: 'meltan', type1: 'steel', type2: 'none', ability: ['magnet pull'], color: ['gray', 'yellow'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #808
    {name: 'melmetal', type1: 'steel', type2: 'none', ability: ['iron fist'], color: ['gray', 'yellow'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #809
    {name: 'grookey', type1: 'grass', type2: 'none', ability: ['overgrow'], color: ['green', 'yellow'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #810
    {name: 'thwackey', type1: 'grass', type2: 'none', ability: ['overgrow'], color: ['green', 'yellow'], stage: 2, fullyEvolved: false, gen: 8, guessed: false }, // #811
    {name: 'rillaboom', type1: 'grass', type2: 'none', ability: ['overgrow'], color: ['green', 'brown'], stage: 3, fullyEvolved: true, gen: 8, guessed: false }, // #812
    {name: 'scorbunny', type1: 'fire', type2: 'none', ability: ['blaze'], color: ['white', 'orange'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #813
    {name: 'raboot', type1: 'fire', type2: 'none', ability: ['blaze'], color: ['gray', 'white'], stage: 2, fullyEvolved: false, gen: 8, guessed: false }, // #814
    {name: 'cinderace', type1: 'fire', type2: 'none', ability: ['blaze'], color: ['white', 'orange'], stage: 3, fullyEvolved: true, gen: 8, guessed: false }, // #815
    {name: 'sobble', type1: 'water', type2: 'none', ability: ['torrent'], color: ['blue', 'yellow'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #816
    {name: 'drizzile', type1: 'water', type2: 'none', ability: ['torrent'], color: ['blue', 'purple'], stage: 2, fullyEvolved: false, gen: 8, guessed: false }, // #817
    {name: 'inteleon', type1: 'water', type2: 'none', ability: ['torrent'], color: ['blue', 'purple'], stage: 3, fullyEvolved: true, gen: 8, guessed: false }, // #818
    {name: 'skwovet', type1: 'normal', type2: 'none', ability: ['cheek pouch', 'guts'], color: ['brown', 'gray'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #819
    {name: 'greedent', type1: 'normal', type2: 'none', ability: ['cheek pouch', 'gluttony'], color: ['brown', 'gray'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #820
    {name: 'rookidee', type1: 'flying', type2: 'none', ability: ['keen eye', 'unnerve'], color: ['blue', 'black'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #821
    {name: 'corvisquire', type1: 'flying', type2: 'none', ability: ['keen eye', 'unnerve'], color: ['blue', 'black'], stage: 2, fullyEvolved: false, gen: 8, guessed: false }, // #822
    {name: 'corviknight', type1: 'flying', type2: 'steel', ability: ['pressure', 'unnerve'], color: ['blue', 'black'], stage: 3, fullyEvolved: true, gen: 8, guessed: false }, // #823
    {name: 'blipbug', type1: 'bug', type2: 'none', ability: ['swarm', 'compound eyes'], color: ['blue', 'red'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #824
    {name: 'dottler', type1: 'bug', type2: 'psychic', ability: ['swarm', 'compound eyes'], color: ['blue', 'red'], stage: 2, fullyEvolved: false, gen: 8, guessed: false }, // #825
    {name: 'orbeetle', type1: 'bug', type2: 'psychic', ability: ['swarm', 'frisk'], color: ['red', 'blue'], stage: 3, fullyEvolved: true, gen: 8, guessed: false }, // #826
    {name: 'nickit', type1: 'dark', type2: 'none', ability: ['run away', 'unburden'], color: ['brown', 'gray'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #827
    {name: 'thievul', type1: 'dark', type2: 'none', ability: ['run away', 'unburden'], color: ['brown', 'gray'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #828
    {name: 'gossifleur', type1: 'grass', type2: 'none', ability: ['cotton guard', 'regenerator'], color: ['white', 'yellow'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #829
    {name: 'eldegoss', type1: 'grass', type2: 'none', ability: ['cotton guard', 'regenerator'], color: ['green', 'yellow'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #830
    {name: 'wooloo', type1: 'normal', type2: 'none', ability: ['fluffy', 'run away'], color: ['white', 'black'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #831
    {name: 'dubwool', type1: 'normal', type2: 'none', ability: ['fluffy', 'steadfast'], color: ['white', 'black'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #832
    {name: 'chewtle', type1: 'water', type2: 'none', ability: ['strong jaw', 'shell armor'], color: ['green', 'yellow'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #833
    {name: 'drednaw', type1: 'water', type2: 'rock', ability: ['strong jaw', 'shell armor'], color: ['green', 'yellow'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #834
    {name: 'yamper', type1: 'electric', type2: 'none', ability: ['ball fetch', 'rattled'], color: ['yellow', 'brown'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #835
    {name: 'boltund', type1: 'electric', type2: 'none', ability: ['strong jaw', 'competitive'], color: ['yellow', 'brown'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #836
    {name: 'rolycoly', type1: 'rock', type2: 'none', ability: ['steam engine', 'heatproof'], color: ['black', 'red'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #837
    {name: 'carkol', type1: 'rock', type2: 'fire', ability: ['steam engine', 'flame body'], color: ['black', 'red'], stage: 2, fullyEvolved: false, gen: 8, guessed: false }, // #838
    {name: 'coalossal', type1: 'rock', type2: 'fire', ability: ['steam engine', 'flame body'], color: ['black', 'red'], stage: 3, fullyEvolved: true, gen: 8, guessed: false }, // #839
    {name: 'applin', type1: 'grass', type2: 'dragon', ability: ['ripen', 'gluttony'], color: ['green', 'red'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #840
    {name: 'flapple', type1: 'grass', type2: 'dragon', ability: ['ripen', 'hustle'], color: ['green', 'red'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #841
    {name: 'appletun', type1: 'grass', type2: 'dragon', ability: ['ripen', 'gluttony'], color: ['green', 'yellow'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #842
    {name: 'silicobra', type1: 'ground', type2: 'none', ability: ['sand spit', 'shed skin'], color: ['green', 'yellow'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #843
    {name: 'sandaconda', type1: 'ground', type2: 'none', ability: ['sand spit', 'shed skin'], color: ['green', 'yellow'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #844
    {name: 'cramorant', type1: 'flying', type2: 'water', ability: ['gulp missile'], color: ['blue', 'yellow'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #845
    {name: 'arrokuda', type1: 'water', type2: 'none', ability: ['swift swim', 'propeller tail'], color: ['blue', 'gray'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #846
    {name: 'barraskewda', type1: 'water', type2: 'none', ability: ['swift swim', 'propeller tail'], color: ['blue', 'gray'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #847
    {name: 'toxel', type1: 'electric', type2: 'poison', ability: ['rattled', 'static'], color: ['purple', 'blue'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #848
    {name: 'toxtricity', type1: 'electric', type2: 'poison', ability: ['punk rock', 'plus'], color: ['purple', 'blue'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #849
    {name: 'sizzlipede', type1: 'fire', type2: 'bug', ability: ['flash fire', 'white smoke'], color: ['red', 'yellow'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #850
    {name: 'centiskorch', type1: 'fire', type2: 'bug', ability: ['flash fire', 'white smoke'], color: ['red', 'yellow'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #851
    {name: 'clobbopus', type1: 'fighting', type2: 'none', ability: ['limber', 'technician'], color: ['blue', 'white'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #852
    {name: 'grapploct', type1: 'fighting', type2: 'none', ability: ['limber', 'technician'], color: ['blue', 'white'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #853
    {name: 'sinistea', type1: 'ghost', type2: 'none', ability: ['weak armor'], color: ['purple', 'gray'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #854
    {name: 'polteageist', type1: 'ghost', type2: 'none', ability: ['weak armor'], color: ['purple', 'gray'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #855
    {name: 'hatenna', type1: 'psychic', type2: 'none', ability: ['healer', 'anticipation'], color: ['pink', 'blue'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #856
    {name: 'hattrem', type1: 'psychic', type2: 'none', ability: ['healer', 'anticipation'], color: ['pink', 'blue'], stage: 2, fullyEvolved: false, gen: 8, guessed: false }, // #857
    {name: 'hatterene', type1: 'psychic', type2: 'fairy', ability: ['healer', 'anticipation'], color: ['pink', 'purple'], stage: 3, fullyEvolved: true, gen: 8, guessed: false }, // #858
    {name: 'impidimp', type1: 'dark', type2: 'fairy', ability: ['prankster', 'frisk'], color: ['pink', 'black'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #859
    {name: 'morgrem', type1: 'dark', type2: 'fairy', ability: ['prankster', 'frisk'], color: ['pink', 'black'], stage: 2, fullyEvolved: false, gen: 8, guessed: false }, // #860
    {name: 'grimmsnarl', type1: 'dark', type2: 'fairy', ability: ['prankster', 'frisk'], color: ['pink', 'black'], stage: 3, fullyEvolved: true, gen: 8, guessed: false }, // #861
    {name: 'obstagoon', type1: 'dark', type2: 'normal', ability: ['reckless', 'guts'], color: ['black', 'white'], stage: 3, fullyEvolved: true, gen: 8, guessed: false }, // #862
    {name: 'perrserker', type1: 'steel', type2: 'none', ability: ['battle armor', 'tough claws'], color: ['gray', 'yellow'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #863
    {name: 'cursola', type1: 'ghost', type2: 'none', ability: ['perish body'], color: ['white', 'blue'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #864
    {name: 'sirfetchd', type1: 'fighting', type2: 'none', ability: ['steadfast'], color: ['brown', 'white'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #865
    {name: 'mr-rime', type1: 'ice', type2: 'psychic', ability: ['tangled feet', 'screen cleaner'], color: ['blue', 'white'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #866
    {name: 'runerigus', type1: 'ground', type2: 'ghost', ability: ['wandering spirit'], color: ['yellow', 'black'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #867
    {name: 'milcery', type1: 'fairy', type2: 'none', ability: ['sweet veil'], color: ['white', 'pink'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #868
    {name: 'alcremie', type1: 'fairy', type2: 'none', ability: ['sweet veil'], color: ['white', 'pink'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #869
    {name: 'falinks', type1: 'fighting', type2: 'none', ability: ['battle armor'], color: ['yellow', 'gold'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #870
    {name: 'pincurchin', type1: 'electric', type2: 'none', ability: ['lightning rod'], color: ['black', 'yellow'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #871
    {name: 'snom', type1: 'ice', type2: 'bug', ability: ['shield dust'], color: ['white', 'blue'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #872
    {name: 'frosmoth', type1: 'ice', type2: 'bug', ability: ['shield dust'], color: ['white', 'blue'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #873
    {name: 'stonjourner', type1: 'rock', type2: 'none', ability: ['power spot'], color: ['gray'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #874
    {name: 'eiscue', type1: 'ice', type2: 'none', ability: ['ice face'], color: ['blue', 'white'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #875
    {name: 'indeedee', type1: 'psychic', type2: 'normal', ability: ['inner focus', 'synchronize'], color: ['white', 'blue'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #876
    {name: 'morpeko', type1: 'electric', type2: 'dark', ability: ['hunger switch'], color: ['yellow', 'black'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #877
    {name: 'cufant', type1: 'steel', type2: 'none', ability: ['sheer force'], color: ['yellow', 'brown'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #878
    {name: 'copperajah', type1: 'steel', type2: 'none', ability: ['sheer force'], color: ['yellow', 'brown'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #879
    {name: 'dracozolt', type1: 'electric', type2: 'dragon', ability: ['volt absorb', 'hustle'], color: ['green', 'yellow'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #880
    {name: 'arctozolt', type1: 'ice', type2: 'electric', ability: ['volt absorb', 'static'], color: ['blue', 'yellow'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #881
    {name: 'dracovish', type1: 'water', type2: 'dragon', ability: ['water absorb', 'strong jaw'], color: ['green', 'blue'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #882
    {name: 'arctovish', type1: 'water', type2: 'ice', ability: ['water absorb', 'ice body'], color: ['blue', 'gray'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #883
    {name: 'duraludon', type1: 'steel', type2: 'dragon', ability: ['light metal', 'heavy metal'], color: ['gray', 'white'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #884
    {name: 'dreepy', type1: 'dragon', type2: 'ghost', ability: ['clear body', 'infiltrator'], color: ['green', 'blue'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #885
    {name: 'drakloak', type1: 'dragon', type2: 'ghost', ability: ['clear body', 'infiltrator'], color: ['green', 'blue'], stage: 2, fullyEvolved: false, gen: 8, guessed: false }, // #886
    {name: 'dragapult', type1: 'dragon', type2: 'ghost', ability: ['clear body', 'infiltrator'], color: ['green', 'blue'], stage: 3, fullyEvolved: true, gen: 8, guessed: false }, // #887
    {name: 'zacian', type1: 'fairy', type2: 'none', ability: ['intrepid sword'], color: ['blue', 'pink'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #888
    {name: 'zamazenta', type1: 'fighting', type2: 'none', ability: ['dauntless shield'], color: ['red', 'blue'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #889
    {name: 'eternatus', type1: 'poison', type2: 'dragon', ability: ['pressure'], color: ['purple', 'black'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #890
    {name: 'kubfu', type1: 'fighting', type2: 'none', ability: ['inner focus'], color: ['gray', 'white'], stage: 1, fullyEvolved: false, gen: 8, guessed: false }, // #891
    {name: 'urshifu', type1: 'fighting', type2: 'dark', ability: ['unseen fist'], color: ['gray', 'brown'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #892
    {name: 'zarude', type1: 'dark', type2: 'grass', ability: ['leaf guard'], color: ['black', 'green'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #893 - MISSING POKÉMON ADDED
    {name: 'regieleki', type1: 'electric', type2: 'none', ability: ['transistor'], color: ['yellow', 'white'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #894
    {name: 'regidrago', type1: 'dragon', type2: 'none', ability: ['dragon\'s maw'], color: ['red', 'green'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #895
    {name: 'glastrier', type1: 'ice', type2: 'none', ability: ['chilling antagonism'], color: ['white', 'blue'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #896
    {name: 'spectrier', type1: 'ghost', type2: 'none', ability: ['grim neigh'], color: ['black', 'purple'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #897
    {name: 'calyrex', type1: 'psychic', type2: 'grass', ability: ['unnerve'], color: ['white', 'green'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #898
    {name: 'wyrdeer', type1: 'normal', type2: 'psychic', ability: ['intimidate', 'frisk'], color: ['brown', 'white'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #899
    {name: 'kleavor', type1: 'bug', type2: 'rock', ability: ['swarm', 'sheer force'], color: ['brown', 'gray'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #900
    {name: 'ursaluna', type1: 'ground', type2: 'normal', ability: ['guts', 'bulletproof'], color: ['brown', 'gray'], stage: 3, fullyEvolved: true, gen: 8, guessed: false }, // #901
    {name: 'basculegion', type1: 'water', type2: 'ghost', ability: ['swift swim', 'adaptability'], color: ['blue', 'red'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #902
    {name: 'sneasler', type1: 'fighting', type2: 'poison', ability: ['pressure', 'unburden'], color: ['purple', 'white'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #903
    {name: 'overqwil', type1: 'dark', type2: 'poison', ability: ['poison point', 'swift swim'], color: ['black', 'purple'], stage: 2, fullyEvolved: true, gen: 8, guessed: false }, // #904
    {name: 'enamorus', type1: 'fairy', type2: 'flying', ability: ['healer', 'contrary'], color: ['pink', 'green'], stage: 1, fullyEvolved: true, gen: 8, guessed: false }, // #905
];

    //gen 9
    const pokedexPaldea = [
        {name: 'sprigatito', type1: 'grass', type2: 'none', ability: ['overgrow'], color: ['green'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #906
        {name: 'floragato', type1: 'grass', type2: 'none', ability: ['overgrow'], color: ['green'], stage: 2, fullyEvolved: false, gen: 9, guessed: false }, // #907
        {name: 'meowscarada', type1: 'grass', type2: 'dark', ability: ['overgrow'], color: ['green'], stage: 3, fullyEvolved: true, gen: 9, guessed: false }, // #908
        {name: 'fuecoco', type1: 'fire', type2: 'none', ability: ['blaze'], color: ['red'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #909
        {name: 'crocalor', type1: 'fire', type2: 'none', ability: ['blaze'], color: ['red'], stage: 2, fullyEvolved: false, gen: 9, guessed: false }, // #910
        {name: 'skeledirge', type1: 'fire', type2: 'ghost', ability: ['blaze'], color: ['red'], stage: 3, fullyEvolved: true, gen: 9, guessed: false }, // #911
        {name: 'quaxly', type1: 'water', type2: 'none', ability: ['torrent'], color: ['blue'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #912
        {name: 'quaxwell', type1: 'water', type2: 'none', ability: ['torrent'], color: ['blue'], stage: 2, fullyEvolved: false, gen: 9, guessed: false }, // #913
        {name: 'quaquaval', type1: 'water', type2: 'fighting', ability: ['torrent'], color: ['blue'], stage: 3, fullyEvolved: true, gen: 9, guessed: false }, // #914
        {name: 'lechonk', type1: 'normal', type2: 'none', ability: ['aroma veil', 'gluttony'], color: ['gray'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #915
        {name: 'oinkologne', type1: 'normal', type2: 'none', ability: ['lingering aroma', 'gluttony'], color: ['gray', 'pink'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #916
        {name: 'tarountula', type1: 'bug', type2: 'none', ability: ['insomnia'], color: ['white'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #917
        {name: 'spidops', type1: 'bug', type2: 'none', ability: ['insomnia'], color: ['green'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #918
        {name: 'nymble', type1: 'bug', type2: 'none', ability: ['swarm'], color: ['gray'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #919
        {name: 'lokix', type1: 'bug', type2: 'dark', ability: ['swarm'], color: ['gray'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #920
        {name: 'pawmi', type1: 'electric', type2: 'none', ability: ['static', 'natural cure'], color: ['orange'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #921
        {name: 'pawmo', type1: 'electric', type2: 'fighting', ability: ['volt absorb', 'natural cure'], color: ['orange'], stage: 2, fullyEvolved: false, gen: 9, guessed: false }, // #922
        {name: 'pawmot', type1: 'electric', type2: 'fighting', ability: ['volt absorb', 'natural cure'], color: ['orange'], stage: 3, fullyEvolved: true, gen: 9, guessed: false }, // #923
        {name: 'tandemaus', type1: 'normal', type2: 'none', ability: ['run away', 'pickup'], color: ['white'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #924
        {name: 'maushold', type1: 'normal', type2: 'none', ability: ['friend guard', 'cheek pouch'], color: ['white'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #925
        {name: 'fidough', type1: 'fairy', type2: 'none', ability: ['own tempo'], color: ['yellow'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #926
        {name: 'dachsbun', type1: 'fairy', type2: 'none', ability: ['well-baked body'], color: ['brown'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #927
        {name: 'smoliv', type1: 'grass', type2: 'normal', ability: ['early bird'], color: ['green'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #928
        {name: 'dolliv', type1: 'grass', type2: 'normal', ability: ['early bird'], color: ['green'], stage: 2, fullyEvolved: false, gen: 9, guessed: false }, // #929
        {name: 'arboliva', type1: 'grass', type2: 'normal', ability: ['seed sower'], color: ['green'], stage: 3, fullyEvolved: true, gen: 9, guessed: false }, // #930
        {name: 'squawkabilly', type1: 'normal', type2: 'flying', ability: ['intimidate', 'hustle'], color: ['green', 'blue', 'yellow', 'white'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #931
        {name: 'nacli', type1: 'rock', type2: 'none', ability: ['purifying salt', 'sturdy'], color: ['brown'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #932
        {name: 'naclstack', type1: 'rock', type2: 'none', ability: ['purifying salt', 'sturdy'], color: ['brown'], stage: 2, fullyEvolved: false, gen: 9, guessed: false }, // #933
        {name: 'garganacl', type1: 'rock', type2: 'none', ability: ['purifying salt', 'sturdy'], color: ['brown'], stage: 3, fullyEvolved: true, gen: 9, guessed: false }, // #934
        {name: 'charcadet', type1: 'fire', type2: 'none', ability: ['flash fire'], color: ['red'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #935
        {name: 'armarouge', type1: 'fire', type2: 'psychic', ability: ['flash fire'], color: ['red'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #936
        {name: 'ceruledge', type1: 'fire', type2: 'ghost', ability: ['flash fire'], color: ['purple'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #937
        {name: 'tadbulb', type1: 'electric', type2: 'none', ability: ['own tempo', 'static'], color: ['yellow'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #938
        {name: 'bellibolt', type1: 'electric', type2: 'none', ability: ['electromorphosis', 'static'], color: ['green'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #939
        {name: 'wattrel', type1: 'electric', type2: 'flying', ability: ['wind power', 'volt absorb'], color: ['black'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #940
        {name: 'kilowattrel', type1: 'electric', type2: 'flying', ability: ['wind power', 'volt absorb'], color: ['yellow'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #941
        {name: 'maschiff', type1: 'dark', type2: 'none', ability: ['intimidate', 'run away'], color: ['brown'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #942
        {name: 'mabosstiff', type1: 'dark', type2: 'none', ability: ['intimidate', 'guard dog'], color: ['gray'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #943
        {name: 'shroodle', type1: 'poison', type2: 'normal', ability: ['unburden', 'pickpocket'], color: ['gray'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #944
        {name: 'grafaiai', type1: 'poison', type2: 'normal', ability: ['unburden', 'poison touch'], color: ['gray'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #945
        {name: 'bramblin', type1: 'grass', type2: 'ghost', ability: ['wind rider'], color: ['brown'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #946
        {name: 'brambleghast', type1: 'grass', type2: 'ghost', ability: ['wind rider'], color: ['brown'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #947
        {name: 'toedscool', type1: 'ground', type2: 'grass', ability: ['mycelium might'], color: ['yellow'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #948
        {name: 'toedscruel', type1: 'ground', type2: 'grass', ability: ['mycelium might'], color: ['black'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #949
        {name: 'klawf', type1: 'rock', type2: 'none', ability: ['anger shell', 'shell armor'], color: ['red'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #950
        {name: 'capsakid', type1: 'grass', type2: 'none', ability: ['chlorophyll', 'insomnia'], color: ['green'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #951
        {name: 'scovillain', type1: 'grass', type2: 'fire', ability: ['chlorophyll', 'insomnia'], color: ['green', 'red'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #952
        {name: 'rellor', type1: 'bug', type2: 'none', ability: ['compound eyes'], color: ['brown'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #953
        {name: 'rabsca', type1: 'bug', type2: 'psychic', ability: ['synchronize'], color: ['green'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #954
        {name: 'flittle', type1: 'psychic', type2: 'none', ability: ['anticipation', 'frisk'], color: ['yellow'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #955
        {name: 'espathra', type1: 'psychic', type2: 'none', ability: ['opportunist', 'frisk'], color: ['purple'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #956
        {name: 'tinkatink', type1: 'fairy', type2: 'steel', ability: ['mold breaker', 'own tempo'], color: ['pink'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #957
        {name: 'tinkatuff', type1: 'fairy', type2: 'steel', ability: ['mold breaker', 'own tempo'], color: ['pink'], stage: 2, fullyEvolved: false, gen: 9, guessed: false }, // #958
        {name: 'tinkaton', type1: 'fairy', type2: 'steel', ability: ['mold breaker', 'own tempo'], color: ['pink'], stage: 3, fullyEvolved: true, gen: 9, guessed: false }, // #959
        {name: 'wiglett', type1: 'water', type2: 'none', ability: ['gooey', 'rattled'], color: ['white'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #960
        {name: 'wugtrio', type1: 'water', type2: 'none', ability: ['gooey', 'rattled'], color: ['red'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #961
        {name: 'bombirdier', type1: 'flying', type2: 'dark', ability: ['big pecks', 'rocky payload'], color: ['white'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #962
        {name: 'finizen', type1: 'water', type2: 'none', ability: ['water veil'], color: ['blue'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #963
        {name: 'palafin', type1: 'water', type2: 'none', ability: ['zero to hero'], color: ['blue'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #964
        {name: 'varoom', type1: 'steel', type2: 'poison', ability: ['overcoat'], color: ['gray'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #965
        {name: 'revavroom', type1: 'steel', type2: 'poison', ability: ['overcoat'], color: ['gray'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #966
        {name: 'cyclizar', type1: 'dragon', type2: 'normal', ability: ['shed skin', 'regenerator'], color: ['green'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #967
        {name: 'orthworm', type1: 'steel', type2: 'none', ability: ['earth eater'], color: ['pink'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #968
        {name: 'glimmet', type1: 'rock', type2: 'poison', ability: ['toxic debris'], color: ['blue'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #969
        {name: 'glimmora', type1: 'rock', type2: 'poison', ability: ['toxic debris'], color: ['blue'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #970
        {name: 'greavard', type1: 'ghost', type2: 'none', ability: ['pickup'], color: ['white'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #971
        {name: 'houndstone', type1: 'ghost', type2: 'none', ability: ['sand rush'], color: ['white'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #972
        {name: 'flamigo', type1: 'flying', type2: 'fighting', ability: ['scrappy', 'tangled feet'], color: ['pink'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #973
        {name: 'cetoddle', type1: 'ice', type2: 'none', ability: ['thick fat', 'snow cloak'], color: ['white'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #974
        {name: 'cetitan', type1: 'ice', type2: 'none', ability: ['thick fat', 'slush rush'], color: ['white'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #975
        {name: 'veluza', type1: 'water', type2: 'psychic', ability: ['mold breaker'], color: ['gray'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #976
        {name: 'dondozo', type1: 'water', type2: 'none', ability: ['unaware', 'oblivious'], color: ['blue'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #977
        {name: 'tatsugiri', type1: 'dragon', type2: 'water', ability: ['commander'], color: ['orange', 'pink', 'yellow'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #978
        {name: 'annihilape', type1: 'fighting', type2: 'ghost', ability: ['vital spirit', 'inner focus'], color: ['gray'], stage: 3, fullyEvolved: true, gen: 9, guessed: false }, // #979
        {name: 'clodsire', type1: 'poison', type2: 'ground', ability: ['poison point', 'water absorb'], color: ['brown'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #980
        {name: 'farigiraf', type1: 'normal', type2: 'psychic', ability: ['cud chew', 'armor tail'], color: ['brown'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #981
        {name: 'dudunsparce', type1: 'normal', type2: 'none', ability: ['serene grace', 'rattled'], color: ['yellow'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #982
        {name: 'kingambit', type1: 'dark', type2: 'steel', ability: ['supreme overlord'], color: ['black', 'red'], stage: 3, fullyEvolved: true, gen: 9, guessed: false }, // #983
        {name: 'great-tusk', type1: 'ground', type2: 'fighting', ability: ['protosynthesis'], color: ['purple'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #984
        {name: 'scream-tail', type1: 'fairy', type2: 'psychic', ability: ['protosynthesis'], color: ['pink'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #985
        {name: 'brute-bonnet', type1: 'grass', type2: 'dark', ability: ['protosynthesis'], color: ['gray'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #986
        {name: 'flutter-mane', type1: 'ghost', type2: 'fairy', ability: ['protosynthesis'], color: ['gray'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #987
        {name: 'slither-wing', type1: 'bug', type2: 'fighting', ability: ['protosynthesis'], color: ['red'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #988
        {name: 'sandy-shocks', type1: 'electric', type2: 'ground', ability: ['protosynthesis'], color: ['gray'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #989
        {name: 'iron-treads', type1: 'ground', type2: 'steel', ability: ['quark drive'], color: ['gray'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #990
        {name: 'iron-bundle', type1: 'ice', type2: 'water', ability: ['quark drive'], color: ['red'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #991
        {name: 'iron-hands', type1: 'fighting', type2: 'electric', ability: ['quark drive'], color: ['gray'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #992
        {name: 'iron-jugulis', type1: 'dark', type2: 'flying', ability: ['quark drive'], color: ['black'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #993
        {name: 'iron-moth', type1: 'fire', type2: 'poison', ability: ['quark drive'], color: ['yellow'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #994
        {name: 'iron-thorns', type1: 'rock', type2: 'electric', ability: ['quark drive'], color: ['green'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #995
        {name: 'frigibax', type1: 'dragon', type2: 'ice', ability: ['thermal exchange'], color: ['gray'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #996
        {name: 'arctibax', type1: 'dragon', type2: 'ice', ability: ['thermal exchange'], color: ['gray'], stage: 2, fullyEvolved: false, gen: 9, guessed: false }, // #997
        {name: 'baxcalibur', type1: 'dragon', type2: 'ice', ability: ['thermal exchange'], color: ['gray'], stage: 3, fullyEvolved: true, gen: 9, guessed: false }, // #998
        {name: 'gimmighoul', type1: 'ghost', type2: 'none', ability: ['run away'], color: ['brown'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #999
        {name: 'gholdengo', type1: 'steel', type2: 'ghost', ability: ['good as gold'], color: ['gold'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #1000
        {name: 'wo-chien', type1: 'dark', type2: 'grass', ability: ['tablets of ruin'], color: ['brown'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1001
        {name: 'chien-pao', type1: 'dark', type2: 'ice', ability: ['sword of ruin'], color: ['white'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1002
        {name: 'ting-lu', type1: 'dark', type2: 'ground', ability: ['vessel of ruin'], color: ['brown'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1003
        {name: 'chi-yu', type1: 'dark', type2: 'fire', ability: ['beads of ruin'], color: ['red'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1004
        {name: 'roaring-moon', type1: 'dragon', type2: 'dark', ability: ['protosynthesis'], color: ['green'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1005
        {name: 'iron-valiant', type1: 'fairy', type2: 'fighting', ability: ['quark drive'], color: ['white'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1006
        {name: 'koraidon', type1: 'fighting', type2: 'dragon', ability: ['orichalcum pulse'], color: ['red'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1007
        {name: 'miraidon', type1: 'electric', type2: 'dragon', ability: ['hadron engine'], color: ['blue'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1008
        {name: 'walking-wake', type1: 'water', type2: 'dragon', ability: ['protosynthesis'], color: ['blue'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1009
        {name: 'iron-leaves', type1: 'grass', type2: 'psychic', ability: ['quark drive'], color: ['green'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1010
        {name: 'dipplin', type1: 'grass', type2: 'dragon', ability: ['supersweet syrup', 'gluttony'], color: ['red'], stage: 2, fullyEvolved: false, gen: 9, guessed: false }, // #1011
        {name: 'poltchageist', type1: 'grass', type2: 'ghost', ability: ['hospitality'], color: ['green'], stage: 1, fullyEvolved: false, gen: 9, guessed: false }, // #1012
        {name: 'sinistcha', type1: 'grass', type2: 'ghost', ability: ['hospitality'], color: ['green'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #1013
        {name: 'okidogi', type1: 'poison', type2: 'fighting', ability: ['toxic chain'], color: ['black'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1014
        {name: 'munkidori', type1: 'poison', type2: 'psychic', ability: ['toxic chain'], color: ['blue'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1015
        {name: 'fezandipiti', type1: 'poison', type2: 'fairy', ability: ['toxic chain'], color: ['black'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1016
        {name: 'ogerpon', type1: 'grass', type2: 'none', ability: ['defiant'], color: ['green'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1017 (Teal Mask assumed)
        {name: 'archaludon', type1: 'steel', type2: 'dragon', ability: ['stamina', 'sturdy'], color: ['gray'], stage: 2, fullyEvolved: true, gen: 9, guessed: false }, // #1018
        {name: 'hydrapple', type1: 'grass', type2: 'dragon', ability: ['supersweet syrup', 'regenerator'], color: ['red'], stage: 3, fullyEvolved: true, gen: 9, guessed: false }, // #1019
        {name: 'gouging-fire', type1: 'fire', type2: 'dragon', ability: ['protosynthesis'], color: ['brown'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1020
        {name: 'raging-bolt', type1: 'electric', type2: 'dragon', ability: ['protosynthesis'], color: ['yellow'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1021
        {name: 'iron-boulder', type1: 'rock', type2: 'psychic', ability: ['quark drive'], color: ['gray'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1022
        {name: 'iron-crown', type1: 'steel', type2: 'psychic', ability: ['quark drive'], color: ['blue'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1023
        {name: 'terapagos', type1: 'normal', type2: 'none', ability: ['tera shift'], color: ['blue'], stage: 1, fullyEvolved: true, gen: 9, guessed: false }, // #1024
        {name: 'pecharunt', type1: 'poison', type2: 'ghost', ability: ['poison puppeteer'], color: ['purple'], stage: 1, fullyEvolved: true, gen: 9, guessed: false } // #1025
    ];

    return {pokedexKanto,pokedexAlola,pokedexGalarHisui,pokedexHoenn,pokedexJohto,pokedexKalos,pokedexPaldea,pokedexSinnoh,pokedexUnova}
}

function getFinalPokedex(pokedex){    
    const finalPokedex = []
    switch(pokedex){
        case 1:
            gen1Toggle = !gen1Toggle
            console.log(gen1Toggle)
            break;
        case 2:
            gen2Toggle = !gen2Toggle
            break;
        case 3:
            gen3Toggle = !gen3Toggle
            break;
        case 4:
            gen4Toggle = !gen4Toggle
            break;
        case 5:
            gen5Toggle = !gen5Toggle
            break;
        case 6:
            gen6Toggle = !gen6Toggle
            break;
        case 7:
            gen7Toggle = !gen7Toggle
            break;
        case 8:
            gen8Toggle = !gen8Toggle
            break;
        case 9:
            gen9Toggle = !gen9Toggle
            break; 
    }
    if(gen1Toggle){
        button1 = document.getElementById("gen1")
        button1.style.backgroundColor = 'green'
        for(let i = 0; i<getPokedex().pokedexKanto.length; i++){
            finalPokedex.push(getPokedex().pokedexKanto[i])
        }
    }
    else{button1.style.backgroundColor = 'red'}
    if(gen2Toggle){
        button2 = document.getElementById("gen2")
        button2.style.backgroundColor = 'green'
        for(let i = 0; i<getPokedex().pokedexJohto.length; i++){
            finalPokedex.push(getPokedex().pokedexJohto[i])
        }
    }
    else{button2.style.backgroundColor = 'red'}
    if(gen3Toggle){
        button3 = document.getElementById("gen3")
        button3.style.backgroundColor = 'green'
        for(let i = 0; i<getPokedex().pokedexHoenn.length; i++){
            finalPokedex.push(getPokedex().pokedexHoenn[i])
        }
    }
    else{button3.style.backgroundColor = 'red'}
    if(gen4Toggle){
        button4 = document.getElementById("gen4")
        button4.style.backgroundColor = 'green'
        for(let i = 0; i<getPokedex().pokedexSinnoh.length; i++){
            finalPokedex.push(getPokedex().pokedexSinnoh[i])
        }
    }
    else{button4.style.backgroundColor = 'red'}
    if(gen5Toggle){
        button5 = document.getElementById("gen5")
        button5.style.backgroundColor = 'green'
        for(let i = 0; i<getPokedex().pokedexUnova.length; i++){
            finalPokedex.push(getPokedex().pokedexUnova[i])
        }
    }
    else{button5.style.backgroundColor = 'red'}
    if(gen6Toggle){
        button6 = document.getElementById("gen6")
        button6.style.backgroundColor = 'green'
        for(let i = 0; i<getPokedex().pokedexKalos.length; i++){
            finalPokedex.push(getPokedex().pokedexKalos[i])
        }
    }
    else{button6.style.backgroundColor = 'red'}
    if(gen7Toggle){
        button7 = document.getElementById("gen7")
        button7.style.backgroundColor = 'green'
        for(let i = 0; i<getPokedex().pokedexAlola.length; i++){
            finalPokedex.push(getPokedex().pokedexAlola[i])
        }
    }
    else{button7.style.backgroundColor = 'red'}
    if(gen8Toggle){
        button8 = document.getElementById("gen8")
        button8.style.backgroundColor = 'green'
        for(let i = 0; i<getPokedex().pokedexGalarHisui.length; i++){
            finalPokedex.push(getPokedex().pokedexGalarHisui[i])
        }
    }
    else{button8.style.backgroundColor = 'red'}
    if(gen9Toggle){
        button9 = document.getElementById("gen9")
        button9.style.backgroundColor = 'green'
        for(let i = 0; i<getPokedex().pokedexPaldea.length; i++){
            finalPokedex.push(getPokedex().pokedexPaldea[i])
        }
    }
    else{button9.style.backgroundColor = 'red'}
    console.log(finalPokedex.length)

    return {finalPokedex}
}