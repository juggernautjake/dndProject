//Allow for prompts in the program for testing purposes
const prompt = require('prompt-sync')();

//-------------FUNCTION TO CHOOSE RACE-------------
const chooseRace = () => {

    //Populate an array with all possible races with different spellings for backend use
    const racesBackend = [
      'aarakocra',
      'aasimar',
      'air genasi',
      'astral elf',
      'autognome',
      'bugbear',
      'centaur',
      'changeling',
      'deep gnome',
      'dragonborn',
      'duergar',
      'dwarf',
      'earth genasi',
      'eladrin',
      'elf',
      'fairy',
      'firbolg',
      'fire genasi',
      'giff',
      'githyanki',
      'githzerai',
      'gnome',
      'goblin',
      'goliath',
      'grung',
      'hadozee',
      'half-elf',
      'half-orc',
      'halfling',
      'harengon',
      'hobgoblin',
      'human',
      'kalashtar',
      'kender',
      'kenku',
      'kobold',
      'leonin',
      'lizardfolk',
      'locathah',
      'loxodon',
      'minotaur',
      'orc',
      'owlin',
      'plasmoid',
      'satyr',
      'sea elf',
      'shadar-kai',
      'shifter',
      'simic hybrid',
      'tabaxi',
      'thri-kreen',
      'tiefling',
      'tortle',
      'triton',
      'vedalken',
      'verdan',
      'warforged',
      'water genasi',
      'yuan-ti', 
      'random', 
      'r'];

    //Populate an array with all possible races including 'random' for frontend use
    const racesWithRandom = [
      'random', 
      'aarakocra',
      'aasimar',
      'air genasi',
      'astral elf',
      'autognome',
      'bugbear',
      'centaur',
      'changeling',
      'deep gnome',
      'dragonborn',
      'duergar',
      'dwarf',
      'earth genasi',
      'eladrin',
      'elf',
      'fairy',
      'firbolg',
      'fire genasi',
      'giff',
      'githyanki',
      'githzerai',
      'gnome',
      'goblin',
      'goliath',
      'grung',
      'hadozee',
      'half-elf',
      'half-orc',
      'halfling',
      'harengon',
      'hobgoblin',
      'human',
      'kalashtar',
      'kender',
      'kenku',
      'kobold',
      'leonin',
      'lizardfolk',
      'locathah',
      'loxodon',
      'minotaur',
      'orc',
      'owlin',
      'plasmoid',
      'satyr',
      'sea elf',
      'shadar-kai',
      'shifter',
      'simic hybrid',
      'tabaxi',
      'thri-kreen',
      'tiefling',
      'tortle',
      'triton',
      'vedalken',
      'verdan',
      'warforged',
      'water genasi',
      'yuan-ti' ];

    //Populate an array with all possible races not including 'random' for frontend use
    const racesWithoutRandom = [
      'aarakocra',
      'aasimar',
      'air genasi',
      'astral elf',
      'autognome',
      'bugbear',
      'centaur',
      'changeling',
      'deep gnome',
      'dragonborn',
      'duergar',
      'dwarf',
      'earth genasi',
      'eladrin',
      'elf',
      'fairy',
      'firbolg',
      'fire genasi',
      'giff',
      'githyanki',
      'githzerai',
      'gnome',
      'goblin',
      'goliath',
      'grung',
      'hadozee',
      'half-elf',
      'half-orc',
      'halfling',
      'harengon',
      'hobgoblin',
      'human',
      'kalashtar',
      'kender',
      'kenku',
      'kobold',
      'leonin',
      'lizardfolk',
      'locathah',
      'loxodon',
      'minotaur',
      'orc',
      'owlin',
      'plasmoid',
      'satyr',
      'sea elf',
      'shadar-kai',
      'shifter',
      'simic hybrid',
      'tabaxi',
      'thri-kreen',
      'tiefling',
      'tortle',
      'triton',
      'vedalken',
      'verdan',
      'warforged',
      'water genasi',
      'yuan-ti' ];

    //Initialize variable for race
    let race = '';

    //Ask user to enter a race or choose 'random'
    console.log("\nPlease enter what race you would like the npc to be or type 'random' for any race.\n\nOptions are:")
    let i = 0;

    for(i = 0; i < racesWithRandom.length; i++) {
      console.log('-' + racesWithRandom[i]);
    }
    //Prompt user for race choice
    race = prompt('ENTER RACE: ');

    //Create selection and input message for checkIfInvalidOption function parameters. Check the function to see how these parameters are used
    selection = 'RACE';
    inputMessage = `\n'${race}' is not a valid option. Please enter an option from the list.\n\nPossible Options are:`;


    //Make the user input lowercase
    if(typeof race === 'string') {
        race = race.toLowerCase();
    }
    
    //Use checkIfInvalidOption fucntion to make sure the user entered a valid choice
    race = checkIfInvalidOption(race, racesWithRandom, racesWithRandom, selection, inputMessage);

    //If the user wants a npc with a random race, set race equal to a random element in the racesWithoutRandom array
    if(race === 'random' || race === 'r') {
         race = racesWithoutRandom[Math.floor(Math.random() * racesWithoutRandom.length)];
    }

    race = race.charAt(0).toUpperCase() + race.slice(1);

    //return the race selected
    return race;
}