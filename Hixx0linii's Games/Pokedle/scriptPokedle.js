let randPokedexIndex; 
let pokedexNames
const inputElement = document.getElementById('currentGuess');
const container = document.getElementById('guesses');
function randomPokedex(){
    pokedex = getFinalPokedex().finalPokedex
    pokedexNames = getFinalPokedex().finalPokedexNames
    randPokedexIndex = Math.floor(Math.random() * pokedex.length)
    console.log(`Pokemon to guess: ${randPokedexIndex+1}`, pokedex[randPokedexIndex].name) 
    container.innerHTML = ''
    inputElement.value = ''
}
randomPokedex()

var currentGuessName = ''
function checkGuessedPokemonName(){
    currentGuessName = document.getElementById('currentGuess').value.toLowerCase().trim();
    const guessedPokemon = pokedex.find(pokemon => pokemon.name === currentGuessName);

    return {currentGuessName, guessedPokemon}
}

function checkAnswers(){
    if (checkGuessedPokemonName().guessedPokemon) {
        console.log(`User guessed: ${checkGuessedPokemonName().guessedPokemon.name}`);
        if(checkGuessedPokemonName().currentGuessName === pokedex[randPokedexIndex].name){
            console.log('gut');
        } else {
            console.log('no gut');
        }
        addGuessRow(checkGuessedPokemonName().guessedPokemon);
        inputElement.value = ''
        
    } else {
        console.log(`'${checkGuessedPokemonName().currentGuessName}' is not a valid Pokémon name.`);
    }
}



function normalizeAbility(ability) {
    return Array.isArray(ability) ? ability : [ability];
}

function checkAbilityMatch(guess, target) {
    const guessAbilities = normalizeAbility(guess.ability);
    const targetAbilities = normalizeAbility(target.ability);

    const allMatch =
        guessAbilities.length === targetAbilities.length &&
        guessAbilities.every(ab => targetAbilities.includes(ab));

    const atLeastOneMatch =
        guessAbilities.some(ab => targetAbilities.includes(ab));

    return { allMatch, atLeastOneMatch };
}



function normalizeColor(color) {
    return Array.isArray(color) ? color : [color];
}

function checkColorMatch(guess, target) {
    const guessColor = normalizeColor(guess.color);
    const targetColor = normalizeColor(target.color);

    const allMatch =
        guessColor.length === targetColor.length &&
        guessColor.every(col => targetColor.includes(col));

    const atLeastOneMatch =
        guessColor.some(col => targetColor.includes(col));

    return { allMatch, atLeastOneMatch };
}




function addGuessRow(pokemon){
    if(!checkGuessedPokemonName().guessedPokemon.guessed){
        const abilityDisplay = Array.isArray(pokemon.ability) ? pokemon.ability.join(', ') : pokemon.ability;
        const colorDisplay = Array.isArray(pokemon.color) ? pokemon.color.join(', ') : pokemon.color;
        const fullyEvolvedDisplay = pokemon.fullyEvolved ? 'Yes' : 'No';
        const abilityMatch = checkAbilityMatch(pokemon, pokedex[randPokedexIndex]);
        const colorMatch = checkColorMatch(pokemon, pokedex[randPokedexIndex]);

        const row = document.createElement('div');
        const focia = document.createElement('img');
        // focia.src = './blue-pawn.png'
        // focia.style.height = '30px'
        // focia.style.width = '30px'
        row.className = 'guess-row';

        var colorOfGrid = 'red'
        
        row.innerHTML += `<div style='font-size: x-large; background-color: gray;'>${pokemon.name}</div>`

        if(pokemon.type1 === pokedex[randPokedexIndex].type1){colorOfGrid = 'green'}
        else if(pokemon.type1 === pokedex[randPokedexIndex].type2){colorOfGrid = 'orange'}
        else{colorOfGrid = 'red'}
        row.innerHTML += `<div style='background-color: ${colorOfGrid};font-size: x-large;'>${pokemon.type1}</div>`

        if(pokemon.type2 === pokedex[randPokedexIndex].type2){colorOfGrid = 'green'}
        else if(pokemon.type2 === pokedex[randPokedexIndex].type1){colorOfGrid = 'orange'}
        else{colorOfGrid = 'red'}
        row.innerHTML += `<div style='background-color: ${colorOfGrid};font-size: x-large;'>${pokemon.type2}</div>`

        if (abilityMatch.allMatch) {colorOfGrid = 'green';}
        else if (abilityMatch.atLeastOneMatch) {colorOfGrid = 'orange';}
        else {colorOfGrid = 'red';}
        row.innerHTML += `<div style="background-color:${colorOfGrid};font-size: x-large;">${abilityDisplay}</div>`;

        if (colorMatch.allMatch) {colorOfGrid = 'green';}
        else if (colorMatch.atLeastOneMatch) {colorOfGrid = 'orange';}
        else {colorOfGrid = 'red';}
        row.innerHTML += `<div style="background-color:${colorOfGrid};font-size: x-large;">${colorDisplay}</div>`;

        if(pokemon.stage === pokedex[randPokedexIndex].stage){colorOfGrid = 'green'}
        else{colorOfGrid = 'red'}
        row.innerHTML += `<div style="background-color:${colorOfGrid};font-size: x-large;">${pokemon.stage}</div>`;
        
        if(pokemon.fullyEvolved === pokedex[randPokedexIndex].fullyEvolved){colorOfGrid = 'green'}
        else{colorOfGrid = 'red'}
        row.innerHTML += `<div style="background-color:${colorOfGrid};font-size: x-large;">${fullyEvolvedDisplay}</div>`;

        if(pokemon.gen === pokedex[randPokedexIndex].gen){colorOfGrid = 'green'}
        else{colorOfGrid = 'red'}
        row.innerHTML += `<div style="background-color:${colorOfGrid};font-size: x-large;">${pokemon.gen}</div>`;

        
        container.insertBefore(row, container.children[0]);
        // container.insertBefore(focia, container.children[0]);
        checkGuessedPokemonName().guessedPokemon.guessed = true
        console.log(pokedex)
    }
}

const suggestionsContainer = document.getElementById("suggestions");

inputElement.addEventListener("input", () => {
    const query = inputElement.value.toLowerCase().trim();

    if (query.length < 3) {
        suggestionsContainer.style.display = "none";
        return;
    }

    const matches = pokedexNames.filter(name => 
        name.toLowerCase().startsWith(query)
    ).slice(0, 20); 

    if (matches.length === 0) {
        suggestionsContainer.style.display = "none";
        return;
    }

    suggestionsContainer.innerHTML = "";

    matches.forEach(name => {
        const div = document.createElement("div");
        div.textContent = name;
        
        div.onclick = () => {
            inputElement.value = name;
            suggestionsContainer.style.display = "none";
        };

        suggestionsContainer.appendChild(div);
    });

    suggestionsContainer.style.display = "block";
});

document.addEventListener("click", (e) => {
    if (e.target !== inputElement && e.target !== suggestionsContainer) {
        suggestionsContainer.style.display = "none";
    }
});