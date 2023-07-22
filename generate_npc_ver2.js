//------TO DO's------
//Add HP and AC functions
//Add occupation function
//Add two more races



//Create an object facotry that will produce one or more npc's for a dnd campaign
//All npc's need a race, gender, physical features, age, alignment, occupation, stats, level, etc...

//Allow for prompts in the program for testing purposes
let prompt = require('prompt-sync')();

//initialize and define all needed functions below

//-------------FUNCTION TO CHECK IT CHOICE IS VALID-------------
let checkIfInvalidOption = (input, arrayToCheckBackend, arrayToCheckFrontend, selection, message) => {
    let k = 0;
    let t = 0;
    while(input != arrayToCheckBackend[k]) {
            if(k === arrayToCheckBackend.length - 1) {
                console.log(`${message}`);
                while(t < arrayToCheckFrontend.length) {
                    console.log(arrayToCheckFrontend[t]);
                    t++;
                    if(t === arrayToCheckFrontend.length) {
                        t = 0;
                        break;
                    }
                }
                console.log("\n")
                input = prompt(`ENTER ${selection}: `);
                if(typeof input === 'string') {
                    input = input.toLowerCase();
                }
                k = 0;
            } else {
              k++;
            }
        }
    if(input === 'R' || input === 'r' || input === 'Random' || input === 'random') {
      input = arrayToCheckFrontend[Math.floor(Math.random() * arrayToCheckFrontend.length - 1) + 1];
    }
    return input;
}



//-------------FUNCTION TO CALCULATE NORMAL DISTRIBUTION-------------
function boxMullerTransform() {
  const u1 = Math.random();
  const u2 = Math.random();
  
  const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
  const z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2.0 * Math.PI * u2);
  
  return { z0, z1 };
}




//-------------FUNCTION TO GET A RANDOM NUMBER FROM NORMAL DISTRIBUTION-------------
function getNormallyDistributedRandomNumber(mean, stddev) {
  const { z0, _ } = boxMullerTransform();
  
  return z0 * stddev + mean;
}



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



//-----------FUNCTION TO CHOOSE SUB-RACE------------
const chooseSubRace = (race) => {
  
  //Create variable for dragon type
  let dragonType = '';

  //Populate arrays with all possible dragon types;
  const commonDragonTypes = [
    'black',
    'blue',
    'brass',
    'bronze',
    'brown',
    'copper',
    'gold',
    'gray',
    'green',
    'orange',
    'red',
    'silver',
    'white'
  ];

  const uncommonDragonTypes = [
    'air',
    'axial',
    'beast',
    'chomium',
    'cobalt',
    'fang',
    'fire',
    'force',
    'forest',
    'iron',
    'mercury',
    'nature',
    'nickel',
    'purple',
    'rattelyr',
    'steel',
    'tungsten',
    'turquoise',
    'water',
    'yellow',
  ];

  const rareDragonTypes = [
    'amethyst',
    'aquamarine',
    'arboreal',
    'battle',
    'cerilian',
    'choas',
    'chole',
    'concordant',
    'crystal',
    'deep,',
    'elysian',
    'emerald',
    'etherial',
    'gloom',
    'hellfire',
    'hex',
    'howling',
    'incarnum',
    'kodragon',
    'mithral',
    'obsidian',
    'oceanus',
    'orium',
    'pink',
    'prismatic',
    'pyriclastic',
    'rust',
    'sand',
    'sapphire',
    'skeleton',
    'song',
    'styx',
    'tarterian',
    'tome',
    'topaz'
  ];

  const mythicalDragonTypes = [
    'astral',
    'brainstealer',
    'ectoplasmic',
    'moon',
    'radiant',
    'shadow',
    'stellar',
    'sun',
    'time',
  ];

  const allDragonTypes = [
    'adamantine',
    'air',
    'amethyst',
    'aquamarine',
    'arboreal',
    'astral',
    'axial',
    'battle',
    'beast',
    'black',
    'blue',
    'brainstealer',
    'brass',
    'bronze',
    'brown',
    'cerilian',
    'chaos',
    'chole',
    'chromium',
    'cobalt',
    'concordant',
    'copper',
    'crystal',
    'deep',
    'ectoplasmic',
    'elysian',
    'emerald',
    'etherial',
    'fang',
    'fire',
    'force',
    'forest',
    'gloom',
    'gold',
    'gray',
    'green',
    'hellfire',
    'hex',
    'howling',
    'incarnum',
    'iron',
    'kodragon',
    'mercury',
    'mithral',
    'moon',
    'nature',
    'nickel',
    'obsidian',
    'oceanus',
    'orange',
    'orium',
    'pink',
    'prismatic',
    'purple',
    'pyriclastic',
    'radiant',
    'rattelyr',
    'red',
    'rust',
    'sand',
    'sapphire',
    'shadow',
    'silver',
    'skeleton',
    'song',
    'steel',
    'stellar',
    'styx',
    'sun',
    'tarterian',
    'time',
    'tome',
    'topaz',
    'tungsten',
    'turquoise',
    'water',
    'white',
    'yellow'
  ];

  const allDragonTypesWithRandom = [
    'random',
    'adamantine',
    'air',
    'amethyst',
    'aquamarine',
    'arboreal',
    'astral',
    'axial',
    'battle',
    'beast',
    'black',
    'blue',
    'brainstealer',
    'brass',
    'bronze',
    'brown',
    'cerilian',
    'chaos',
    'chole',
    'chromium',
    'cobalt',
    'concordant',
    'copper',
    'crystal',
    'deep',
    'ectoplasmic',
    'elysian',
    'emerald',
    'etherial',
    'fang',
    'fire',
    'force',
    'forest',
    'gloom',
    'gold',
    'gray',
    'green',
    'hellfire',
    'hex',
    'howling',
    'incarnum',
    'iron',
    'kodragon',
    'mercury',
    'mithral',
    'moon',
    'nature',
    'nickel',
    'obsidian',
    'oceanus',
    'orange',
    'orium',
    'pink',
    'prismatic',
    'purple',
    'pyriclastic',
    'radiant',
    'rattelyr',
    'red',
    'rust',
    'sand',
    'sapphire',
    'shadow',
    'silver',
    'skeleton',
    'song',
    'steel',
    'stellar',
    'styx',
    'sun',
    'tarterian',
    'time',
    'tome',
    'topaz',
    'tungsten',
    'turquoise',
    'water',
    'white',
    'yellow'
  ];

  const allBirdTypes = [
    'bird-of-paradise',
    'blue jay',
    'bluebird',
    'buzzard',
    'caracara',
    'cardnal',
    'chickadee',
    'cockatoo',
    'condor',
    'crane',
    'dove',
    'duck',
    'eagle',
    'falcon',
    'finch',
    'flamingo',
    'goldfinch',
    'goose',
    'harrier',
    'hawk',
    'hobby',
    'hummingbird',
    'junco',
    'kestrel',
    'kingfisher',
    'kite',
    'lovebird',
    'macaws',
    'magpie',
    'merlin',
    'mockingbird',
    'nuthatch',
    'oriole',
    'osprey',
    'parrot',
    'quetzal',
    'ramphastos',
    'robin',
    'seagull',
    'secretarybird',
    'sparrow',
    'spoonbill',
    'starling',
    'titmouse',
    'toucan',
    'trogon',
    'tropicbird',
    'vulture',
    'whydah',
    'woodpecker',
    'wren',
  ];

  const allBirdTypesWithRandom = [
    'random',
    'bird-of-paradise',
    'blue jay',
    'bluebird',
    'buzzard',
    'caracara',
    'cardnal',
    'chickadee',
    'cockatoo',
    'condor',
    'crane',
    'dove',
    'duck',
    'eagle',
    'falcon',
    'finch',
    'flamingo',
    'goldfinch',
    'goose',
    'harrier',
    'hawk',
    'hobby',
    'hummingbird',
    'junco',
    'kestrel',
    'kingfisher',
    'kite',
    'lovebird',
    'macaws',
    'magpie',
    'merlin',
    'mockingbird',
    'nuthatch',
    'oriole',
    'osprey',
    'parrot',
    'quetzal',
    'ramphastos',
    'robin',
    'seagull',
    'secretarybird',
    'sparrow',
    'spoonbill',
    'starling',
    'titmouse',
    'toucan',
    'trogon',
    'tropicbird',
    'vulture',
    'whydah',
    'woodpecker',
    'wren',
  ];

  const allAasimarTypes = [
      'fallen',
      'protector',
      'scourge'
  ];

  const allAasimarTypesWithRandom = [
      'random',
      'fallen',
      'protector',
      'scourge'
  ];

  race = race.toLowerCase();

  //Create an if statment to handle dragonborn sub races
  if(race === 'aarakocra') {
    //List all aarakocra options
    console.log("\nChoose Aarakocra subrace or 'random' for a common Aarakocra subraces.\n\nAarakocra subraces are: ")
    let i = 0;
    console.log('\n---AARAKOCRA SURACES---');
    while(i < allBirdTypes.length) {
        console.log('-' + allBirdTypesWithRandom[i]);
        i++;
    }

    console.log('\n')
    //Prompt user for sub race choice
    subRace = prompt('ENTER AARAKOCRA SUBRACE: ');

    //Create selection and input message for checkIfInvalidOption function parameters. Check the function to see how these parameters are used
    selection = 'AARAKOCRA SUBRACE';
    inputMessage = `'${subRace}' is not a valid option. Please enter a Aarakocra subrace from the list.\n\nAarakocra subraces are: `;

    //Use checkIfInvalidOption fucntion to make sure the user entered a valid choice
    subRace = checkIfInvalidOption(subRace, allAasimarTypesWithRandom, allAasimarTypesWithRandom, selection, inputMessage);

    //If the user wants a npc with a random sub race, set sub race equal to a random element in the birdTypes array
    if(subRace === 'random' || subRace === 'r') {
      subRace = allBirdTypes[Math.round(Math.random() * allBirdTypes.length)];
    }

    //Return the dragon type selected
    return subRace;

  } else if (race === 'aasimar') {
      //List all aarakocra options
    console.log("\nChoose Aasimar subrace or 'random' for a common bird type.\n\nAasimar subraces are: ")
    let i = 0;
    console.log('\n---COMMON AASIMAR SUBRACES---');
    while(i < allAasimarTypes.length) {
        console.log('-' + allAasimarTypesWithRandom[i]);
        i++;
    }

    console.log('\n')
    //Prompt user for sub race choice
    subRace = prompt('ENTER AASIMAR SUBRACES: ');

    //Create selection and input message for checkIfInvalidOption function parameters. Check the function to see how these parameters are used
    selection = 'AASIMAR SUBRACE';
    inputMessage = `'${subRace}' is not a valid option. Please enter a Aasimar subraces from the list.\n\nAasimar subraces are: `;

    //Use checkIfInvalidOption fucntion to make sure the user entered a valid choice
    subRace = checkIfInvalidOption(subRace, allAasimarTypesWithRandom, allAasimarTypesWithRandom, selection, inputMessage);

    //If the user wants a npc with a random sub race, set sub race equal to a random element in the birdTypes array
    if(subRace === 'random' || subRace === 'r') {
      subRace = allAasimarTypes[Math.round(Math.random() * allAssimarTypes.length)];
    }

    //Return the dragon type selected
    return subRace;

  } else if (race === 'half elf') {

  } else if (race === 'half elf') {

  } else if (race === 'half elf') {

  } else if (race === 'half elf') {

  } else if (race === 'half elf') {

  } else if (race === 'half elf') {

  } else if (race === 'half elf') {

  } else if (race === 'half elf') {

  } else if(race === 'dragonborn') {
    //List all dragon type options
    console.log("\nChoose dragonborn subrace or 'random' for a common dragonborn subrace.\n\nDragonborn subraces are: ");
    let i = 0;
    console.log('\n---COMMON DRAGONBORN SUBRACES---');
    while(i < commonDragonTypes.length) {
        console.log('-' + commonDragonTypes[i]);
        i++;
    }
    i = 0;
    console.log('\n---UNCOMMON DRAGONBORN SUBRACES---');
    while(i < uncommonDragonTypes.length) {
      console.log('-' + uncommonDragonTypes[i]);
      i++;
    }
    i = 0;
    console.log('\n---RARE DRAGONBORN SUBRACES---');
    while(i < commonDragonTypes.length) {
      console.log('-' + commonDragonTypes[i]);
      i++;
    }
    i = 0;
    console.log('\n---MYTHICAL DRAGONBORN SUBRACES---');
    while(i < mythicalDragonTypes.length) {
      console.log('-' + mythicalDragonTypes[i]);
      i++;
    }

    console.log('\n')
    //Prompt user for sub race choice
    subRace = prompt('ENTER DRAGONBORN SUBRACE: ');

    //Create selection and input message for checkIfInvalidOption function parameters. Check the function to see how these parameters are used
    selection = 'DRAGONBORN SUBRACE';
    inputMessage = `'${subRace}' is not a valid option. Please enter a Dragonborn subrace from the list.\n\nDragonborn subraces are: `;

    //Use checkIfInvalidOption fucntion to make sure the user entered a valid choice
    subRace = checkIfInvalidOption(subRace, allDragonTypesWithRandom, allDragonTypesWithRandom, selection, inputMessage);

    //If the user wants a npc with a random sub race, set sub race equal to a random element in the dragonTypes array
    if(subRace === 'random' || subRace === 'r') {
      subRace = commonDragonTypes[Math.round(Math.random() * commonDragonTypes.length)];
    }

    //Return the dragon type selected
    return subRace;

  } else if (race === 'half elf') {

  } else if (race === 'half orc') {
    
  } else if (race === 'half dwarf') {
    
  } else if (race === 'halfling') {
    
  } else if (race === 'human') {
    
  } else if (race === 'human variant') {
    
  } else if (race === 'tiefling') {
    
  } else if (race === 'half elf') {
    
  } else if (race === 'half elf') {
    
  } else if (race === 'half elf') {
    
  } else if (race === 'half elf') {
    
  } else if (race === 'half elf') {
    
  } else if (race === 'half elf') {
    
  } else if (race === 'half elf') {
    
  } else if (race === 'half elf') {
    
  } else if (race === 'half elf') {
    
  } else if (race === 'half elf') {
    
  } else if (race === 'half elf') {
    
  }
}





//------------FUNCTION TO CHOOSE GENDER--------------
const chooseGender = () => {

    //Populate an array with all possible inputs for gender for backend use
    const gendersBackend = ['male', 'female', 'M', 'm', 'F', 'f', 'Random', 'random', 'R', 'r'];

    //Populate an array with all genders for frontend use
    const genders = ['male', 'female'];

    //Initialize a variable for gender
    let gender = '';

    //Prompt user for gender type using approach similar to the one used to get the race
    j = 0;
    console.log("\nType 'M' for 'male', 'F' for 'female', or 'R' for 'random'\n");
    gender = prompt('ENTER GENDER (M/F/R): ');

    //Create selection and input message for checkIfInvalidOption function parameters. Check the function to see how these parameters are used
    selection = 'GENDER (M/F/R)';
    inputMessage = `\n'${gender}' is not a valid option. Please enter an option from the list.\n\nOptions are: `;

    //Make user input lowercase
     if(typeof gender === 'string') {
         gender = gender.toLowerCase();
     }

    //Use checkIfInvalidOption fucntion to make sure the user entered a valid choice
    gender = checkIfInvalidOption(gender, gendersBackend, genders, selection, inputMessage);

    //If input is a single letter, assign the correct gender based on the corresponding letter
    if(gender === 'm') {
        gender = 'male';
    }else if(gender === 'f') {
        gender = 'female';
    }

    //If the user wants a npc with a random gender, set race equal to a random gender
    if(gender === 'random' || gender === 'r') {
      gender = genders[Math.floor(Math.random() * genders.length)];
    }

    //return the gender selected
    return gender;
}




//-----------FUNCTION TO CHOOSE AGE-----------
const chooseAge = (race) => {

    //Initialize a variable for age
    let age = 0;
    let ageString = '';

    //Prompt the user to input an age for their npc
    console.log("\nType your npc's age or type 'random'\n");
    ageString = prompt("ENTER AGE: ");
    ageString = ageString.toLowerCase();
    race = race.toLowerCase();

    //Create if statements to handle random age for any possible race
    if(ageString === 'random' || ageString === 'r') {
      if (race === 'aarakocra'){
        while(age < 0.5){
          console.log(age);
          age = Math.round(getNormallyDistributedRandomNumber(15, 10) * 10) / 10;
        } 
        return age; 
      }
      else if (race === 'aasimar'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(55, 48) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'air genasi'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'astral elf'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'autognome'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'bugbear'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'centaur'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'changeling'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'deep gnome'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'dragonborn'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 25) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'duergar'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'dwarf'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'earth genasi'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'eladrin'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'elf'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'fairy'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'firbolg'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'fire genasi'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'giff'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'githyanki'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'githzerai'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'gnome'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'goblin'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'goliath'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'grung'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'hadozee'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'half-elf'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'half-orc'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'halfling'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'harengon'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'hobgoblin'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'human'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'kalashtar'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'kender'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'kenku'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'kobold'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'leonin'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'lizardfolk'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'locathah'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'loxodon'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'minotaur'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'orc'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'owlin'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'plasmoid'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'satyr'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'sea elf'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'shadar-kai'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'shifter'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'simic hybrid'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'tabaxi'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'thri-kreen'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'tiefling'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'tortle'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'triton'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'vedalken'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'verdan'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'warforged'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'water genasi'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
      else if (race === 'yuan-ti'){
        while(age < 0.5){
          age = Math.round(getNormallyDistributedRandomNumber(35, 30) * 10) / 10;
        }
        return age; 
      }
     
     
    }else if(ageString != 'random' && ageString != 'r') {

      //Check to make sure input for age is valid
      let i = 0;
      let ageCheck = true;
      //Check needs to run at least once
      do {
        for(i = 0; i < ageString.length; i++) {
          //Check against all numeral digits
          if(ageString[i] != '0' && ageString[i] != '1' && ageString[i] != '2' && ageString[i] != '3' && ageString[i] != '4' && ageString[i] != '5' && ageString[i] != '6' && ageString[i] != '7' && ageString[i] != '8' && ageString[i] != '9') {
            ageCheck = false;
            console.log('The input given is not valid. Only numbers greater than zero are valid');
            ageString = prompt('ENTER AGE: ');
            break;
          } 
          //If the for loop checks every element in the string and finds them all to be numeral digits, set ageCheck equal to true
          if(i === ageString.length - 1) {
            ageCheck = true;
          }
        }
        //If ageCheck is true, turn the input string into a number data type using the 'parseInt()' function
        if(ageCheck = true) {
            age = parseInt(ageString, 10);
        }

      } while(ageCheck === false)
    }


    //Return age selected
    return age;
}



//----------FUNCTION TO CHOOSE LIFE RANCE-----------
const chooseLifeRange = (race, age) => {

  //Initialize varaible for life range
  let lifeRange = '';

  race = race.toLowerCase();

  if(race === 'aarakocra') {
    if(age > 0 && age < 1) {
      lifeRange = 'infant';
    } else if(age >= 1 && age < 2) {
      lifeRange = 'child';
    } else if(age >= 2 && age < 3) {
      lifeRange = 'teenager';
    } else if(age >= 3 && age < 10) {
      lifeRange = 'young adult';
    } else if(age >= 10 && age < 20) {
      lifeRange = 'middle-aged';
    } else if(age >= 20 && age < 30) {
      lifeRange = 'elderly';
    } else if(age >= 30 && age < 36) {
      lifeRange = 'very old';
    } else if(age > 35) {
      lifeRange = 'ancient';
    }
  } else if(race === 'Aasimar') {
    if(age > 0 && age < 1) {
      lifeRange = 'infant';
    } else if(age >= 1 && age < 2) {
      lifeRange = 'child';
    } else if(age >= 2 && age < 3) {
      lifeRange = 'teenager';
    } else if(age >= 3 && age < 10) {
      lifeRange = 'young adult';
    } else if(age >= 10 && age < 20) {
      lifeRange = 'middle-aged';
    } else if(age >= 20 && age < 30) {
      lifeRange = 'elderly';
    } else if(age >= 30 && age < 36) {
      lifeRange = 'very old';
    } else if(age > 35) {
      lifeRange = 'ancient';
    }

  } else if(race === 'air genasi') {
    if(age > 0 && age < 1) {
      lifeRange = 'infant';
    } else if(age >= 1 && age < 13) {
      lifeRange = 'child';
    } else if(age >= 13 && age < 20) {
      lifeRange = 'teenager';
    } else if(age >= 20 && age < 45) {
      lifeRange = 'young adult';
    } else if(age >= 45 && age < 70) {
      lifeRange = 'middle-aged';
    } else if(age >= 70 && age < 90) {
      lifeRange = 'elderly';
    } else if(age >= 90 && age < 120) {
      lifeRange = 'very old';
    } else if(age > 120) {
      lifeRange = 'ancient';
    }

  } else if(race === 'astral elf') {
    if(age > 0 && age < 1) {
      lifeRange = 'infant';
    } else if(age >= 1 && age < 2) {
      lifeRange = 'child';
    } else if(age >= 2 && age < 3) {
      lifeRange = 'teenager';
    } else if(age >= 3 && age < 10) {
      lifeRange = 'young adult';
    } else if(age >= 10 && age < 20) {
      lifeRange = 'middle-aged';
    } else if(age >= 20 && age < 30) {
      lifeRange = 'elderly';
    } else if(age >= 30 && age < 36) {
      lifeRange = 'very old';
    } else if(age > 35) {
      lifeRange = 'ancient';
    }

  } else if(race === 'autognome') {
    if(age > 0 && age < 1) {
      lifeRange = 'infant';
    } else if(age >= 1 && age < 2) {
      lifeRange = 'child';
    } else if(age >= 2 && age < 3) {
      lifeRange = 'teenager';
    } else if(age >= 3 && age < 10) {
      lifeRange = 'young adult';
    } else if(age >= 10 && age < 20) {
      lifeRange = 'middle-aged';
    } else if(age >= 20 && age < 30) {
      lifeRange = 'elderly';
    } else if(age >= 30 && age < 36) {
      lifeRange = 'very old';
    } else if(age > 35) {
      lifeRange = 'ancient';
    }

  } else if(race === 'bugbear') {
    if(age > 0 && age < 1) {
      lifeRange = 'infant';
    } else if(age >= 1 && age < 2) {
      lifeRange = 'child';
    } else if(age >= 2 && age < 3) {
      lifeRange = 'teenager';
    } else if(age >= 3 && age < 10) {
      lifeRange = 'young adult';
    } else if(age >= 10 && age < 20) {
      lifeRange = 'middle-aged';
    } else if(age >= 20 && age < 30) {
      lifeRange = 'elderly';
    } else if(age >= 30 && age < 36) {
      lifeRange = 'very old';
    } else if(age > 35) {
      lifeRange = 'ancient';
    }

  } else if(race === 'centaur') {
    if(age > 0 && age < 1) {
      lifeRange = 'infant';
    } else if(age >= 1 && age < 2) {
      lifeRange = 'child';
    } else if(age >= 2 && age < 3) {
      lifeRange = 'teenager';
    } else if(age >= 3 && age < 10) {
      lifeRange = 'young adult';
    } else if(age >= 10 && age < 20) {
      lifeRange = 'middle-aged';
    } else if(age >= 20 && age < 30) {
      lifeRange = 'elderly';
    } else if(age >= 30 && age < 36) {
      lifeRange = 'very old';
    } else if(age > 35) {
      lifeRange = 'ancient';
    }

  } else if(race === 'changeling') {
    if(age > 0 && age < 1) {
      lifeRange = 'infant';
    } else if(age >= 1 && age < 2) {
      lifeRange = 'child';
    } else if(age >= 2 && age < 3) {
      lifeRange = 'teenager';
    } else if(age >= 3 && age < 10) {
      lifeRange = 'young adult';
    } else if(age >= 10 && age < 20) {
      lifeRange = 'middle-aged';
    } else if(age >= 20 && age < 30) {
      lifeRange = 'elderly';
    } else if(age >= 30 && age < 36) {
      lifeRange = 'very old';
    } else if(age > 35) {
      lifeRange = 'ancient';
    }

  } else if(race === 'deep gnome') {
    if(age > 0 && age < 1) {
      lifeRange = 'infant';
    } else if(age >= 1 && age < 2) {
      lifeRange = 'child';
    } else if(age >= 2 && age < 3) {
      lifeRange = 'teenager';
    } else if(age >= 3 && age < 10) {
      lifeRange = 'young adult';
    } else if(age >= 10 && age < 20) {
      lifeRange = 'middle-aged';
    } else if(age >= 20 && age < 30) {
      lifeRange = 'elderly';
    } else if(age >= 30 && age < 36) {
      lifeRange = 'very old';
    } else if(age > 35) {
      lifeRange = 'ancient';
    }

  } else if(race === 'dragonborn'){
    if(age > 0 && age < 0.5) {
      lifeRange = 'infant';
    } else if(age >= 0.5 && age < 4) {
      lifeRange = 'child';
    } else if(age >= 4 && age < 15) {
      lifeRange = 'teenager';
    } else if(age >= 15 && age < 35) {
      lifeRange = 'young adult';
    } else if(age >= 35 && age < 60) {
      lifeRange = 'middle-aged';
    } else if(age >= 60 && age < 75) {
      lifeRange = 'elderly';
    } else if(age >= 75 && age < 95) {
      lifeRange = 'very old';
    } else if(age > 95) {
      lifeRange = 'ancient';
    }
    
  }
  return lifeRange;
}




//----------FUNCTION TO CHOOSE NAME-----------
const chooseName = (race, gender, clan) => {

  //Initialize varable for the npc's first, last and full names
  let firstName = '';
  let lastName = '';
  let fullName = '';

  //Populate arrays for name syllables
  let numOfSyllables = 0;
  let FirstNameSyllables = [];
  let LastNameSyllables = [];

  race = race.toLowerCase();

  //Prompt the user to input a name for their npc
  console.log("\nType your npc's full name or type 'random'\n");
  fullName = prompt("ENTER FULL NAME: ");

  fullName = fullName.toLowerCase();

  //Create first and last names for any npc from any race if the user wants a random name. also account for gender.
  if(race === 'aarakocra') {
    if((fullName === 'random' || fullName === 'r') && (gender === 'male')) {
      //Get random number of syllables for first name
      numOfSyllables = Math.floor(Math.random() * 2) + 1;
      //Populate an array with syllables for the first name
      FirstNameSyllables = ['aer','aur', 'deek', 'ek', 'errk', 'heehk', 'ik', 'ki', 'kleeck', 'oorr', 'ouss', 'quaf', 'quierk', 'sall', 'eek', 'urr', 'zeed', 'gu', 'zi', 'as', 'qrak', 'qarc', 'ak', 'ick', 'khir', 'raar', 'dek', 'kee', 'cig', 'rhek', 'kaac', 'qlu', 'caal', 'giss', 'zice', 'ill', 'grer', 'res', 'klec', 'irrk', 'ir', 'rark', 'dour', 'ri', 'cek', 'ka', 'err', 'qhek', 'ik', 'rher', 'qil', 'qu', 'cruf', 'rel', 'cuf', 'qirrk', 'af', 'kre', 'qerrk', 'gra', 'ak', 'el', 'kel', 'ru', 'cluc', 'ci', 'aer', 'deek', 'kek', 'errk', 'heehk', 'kleeck', 'oorr', 'quaf', 'sal', 'leek'];
      //Build first name
      for(let i = 0; i < numOfSyllables; i++) {
          firstName += FirstNameSyllables[Math.round(Math.random() * FirstNameSyllables.length)];
      }
      //Build full name useing first and last names
      fullName = (firstName.charAt(0).toUpperCase() + firstName.slice(1)) + ' ' + (lastName.charAt(0).toUpperCase() + lastName.slice(1));
  } else if((fullName === 'random' || fullName === 'r') && (gender === 'female')) {
      numOfSyllables = Math.floor(Math.random() * 2) + 1;
      FirstNameSyllables = ['ek', 'kark', 'af', 'zic', 'ce', 'arrk', 'kri', 'rhuck', 'kha', 'ciss', 'qha', 'kiss', 'har', 'ries', 'clurr', 'si', 'qle', 'la', 'qhig', 'uk', 'kif', 'zu', 'ier', 'guc', 'cihk', 're', 'krerk', 'ric', 'cark', 'cuf', 'zar', 'ral', 'klarc', 'kuss', 'karc', 'iqe', 'kaec', 'cerrk', 'khai', 'ack', 'su', 'erk', 'rhek', 'kaac', 'har', 'ries', 'kru', 'ra', 'cra', 'cef', 'hi', 'caf', 'yes', 'clirr', 'kliq', 'erk', 'ai', 'as'];
      for(let i = 0; i < numOfSyllables; i++) {
          firstName += FirstNameSyllables[Math.round(Math.random() * FirstNameSyllables.length)];
      }
      //Build full name useing first and last names
      fullName = (firstName.charAt(0).toUpperCase() + firstName.slice(1));
    }
  }else if(race === 'dragonborn') {
    if((fullName === 'random' || fullName === 'r') && (gender === 'male')) {
        //Get random number of syllables for first name
        numOfSyllables = Math.floor(Math.random() * 3) + 2;
        //Populate an array with syllables for the first name
        FirstNameSyllables = ['arj', 'han', 'bal', 'sar', 'bhar', 'ash', 'don', 'aar', 'ghesh', 'hes', 'kan', 'kriv', 'med', 'rash', 'me', 'hen', 'na', 'darr', 'pand', 'jed', 'pat', 'rin', 'rho', 'gar', 'sha', 'mash', 'she', 'dinn', 'tar', 'hun', 'tor', 'inn', 'klan', 'car', 'dria', 'ra', 'jin', 'cuam', 'pish', 'ti', 'rec', 'prur', 'nak', 'fep', 'hi', 'ko', 'mi', 'ath', 'ny', 'al', 'kel', 'cor', 'ash', 'kmed', 'dal', 'dol', 'mi', 'am', 'rid', 'am', 'phel', 'sho', 'rush', 'tir', 'is', 'sept', 'raah', 'ven', 'ki', 'as', 'en', 'cis' ];
        //Build first name
        for(let i = 0; i < numOfSyllables; i++) {
            firstName += FirstNameSyllables[Math.floor(Math.random() * FirstNameSyllables.length)];
        }
        //Get random number of syllables for last name
        numOfSyllables = Math.floor(Math.random() * 3) + 2;
        //Populate an array with syllables for the first name
        LastNameSyllables = ['ar', 'xan', 'dra', 'vull', 'ur', 'vull', 'zor', 'wun', 'nax', 'mar', 'zi', 'ros', 'bha', 'vull', 'nar', 'rinn', 'inn', 'gor', 'ax', 'an', 'lorg', 'hull', 'vor', 'fras', 'wul', 'kax', 'rav', 'wun', 'ax', 'fro', 'bor', 'hid', 'aar', 'ar', 'vyu', 'qrin', 'qel', 'qull', 'ud', 'dor', 'im', 'ot', 'iz', 'vur', 'bal', 'ra', 'kas', 'jar', 'thas', 'ot', 'is', 'eth', 'na', 'da', 'ar', 'mord', 'hall', 'kil', 'zi', 're', 'kil', 'gar', 'na', 'sash', 'i', 'jar', 'yax', 'sul', 'crath'];
        //Build last name
        for(let i = 0; i < numOfSyllables; i++) {
            lastName += LastNameSyllables[Math.floor(Math.random() * LastNameSyllables.length)];
        }
        //Build full name useing first and last names
        fullName = (firstName.charAt(0).toUpperCase() + firstName.slice(1)) + ' ' + (lastName.charAt(0).toUpperCase() + lastName.slice(1));
    } else if((fullName === 'random' || fullName === 'r') && (gender === 'female')) {
        numOfSyllables = Math.floor(Math.random() * 3) + 2;
        FirstNameSyllables = ['ak', 'ra', 'bi', 'ri', 'da', 'ar', 'far', 'ri', 'deh', 'har', 'ann', 'ha', 'vi', 'ar', 'jhe', 'ri', 'ka', 'va', 'ko', 'rinn', 'mi', 'shann', 'na', 'la', 'per', 'ra', 'rai', 'ann', 'so', 'ra', 'su', 'rin', 'tha', 'va', 'ad', 'jit', 'gul', 'di', 'as', 'tir', 'jal', 'ear', 'gic', 'gi', 'pas', 'nye', 'cish', 'myi', 'phush', 'tesh', 'thil', 'xon', 'kid', 'icc', 'ic', 'mi', 'mash', 'clur', 'doth', 'ec', 'dri', 'pan', 'kas', 'yal', 'tac', 'am', 'es', 'klac', 'cak', 'yal', 'tet', 'or', 'ruc', 'ul', 'del', 'ak'];
        for(let i = 0; i < numOfSyllables; i++) {
            firstName += FirstNameSyllables[Math.floor(Math.random() * FirstNameSyllables.length)];
        }
        numOfSyllables = Math.floor(Math.random() * 3) + 2;
        LastNameSyllables = ['ar', 'xan', 'dra', 'vull', 'ur', 'vull', 'zor', 'wun', 'nax', 'mar', 'zi', 'ros', 'bha', 'vull', 'nar', 'rinn', 'inn', 'gor', 'ax', 'an', 'lorg', 'hull', 'vor', 'fras', 'wul', 'kax', 'rav', 'wun', 'ax', 'fro', 'bor', 'hid', 'aar', 'ar', 'vyu', 'qrin', 'qel', 'qull', 'ud', 'dor', 'im', 'ot', 'iz', 'vur', 'bal', 'ra', 'kas', 'jar', 'thas', 'ot', 'is', 'eth', 'na', 'da', 'ar', 'mord', 'hall', 'kil', 'zi', 're', 'kil', 'gar', 'na', 'sash', 'jar', 'yax', 'sul', 'crath'];
        for(let i = 0; i < numOfSyllables; i++) {
            lastName += LastNameSyllables[Math.floor(Math.random() * LastNameSyllables.length)];
        }
        //Build full name useing first and last names
        fullName = (firstName.charAt(0).toUpperCase() + firstName.slice(1)) + ' ' + (lastName.charAt(0).toUpperCase() + lastName.slice(1));
    }
  }

  //Return the name selected
  return fullName;

}



//----------FUNCTION TO CHOOSE ALIGNMENT-----------

const chooseAlignment = () => {

  //Populate an array with all alignment options
  let alignmentOptions = ['random', 'lawful good', 'chaotic good', 'lawful neutral', 'chaotic neutral', 'lawful evil', 'chaotic evil'];

  //Populate an array with all alignment options
  let alignmentsBackend = ['lawful good', 'chaotic good', 'lawful neutral', 'chaotic neutral', 'lawful evil', 'chaotic evil'];

  //Initialize a variable for alignment
  let alignment = '';

  //Ask user to choose an alignment and display all alignment options
  console.log("\nPlease enter what alignment you would like the npc to have or type 'random' for any alignment.\n\nOptions are:")
  let i = 0;
  while(i < alignmentOptions.length) {
      console.log('-' + alignmentOptions[i]);
      i++;
  }

  //Prompt the user to input an alignment for their npc
  alignment = prompt("ENTER ALIGNMENT: ");

  //Create selection and input message for checkIfInvalidOption function parameters. Check the function to see how these parameters are used
  selection = 'ALIGNMENT';
  inputMessage = `\n'${alignment}' is not a valid option. Please enter an option from the list.\n\nOptions are:`;

  //Make the user input lowercase
  if(typeof alignment === 'string') {
    alignment = alignment.toLowerCase();
  }

  //Use checkIfInvalidOption fucntion to make sure the user entered a valid choice
  alignment = checkIfInvalidOption(alignment, alignmentOptions, alignmentOptions, selection, inputMessage);

  //If the user wants a npc with a random alignment, set race equal to a random alignment
  if(alignment === 'random' || alignment === 'r') {
    alignment = alignmentsBackend[Math.floor(Math.random() * alignmentsBackend.length)];
  }

  //return the selected alignment
  return alignment;
}



//----------FUNCTION TO CHOOSE HEIGHT-----------
const chooseHeight = () => {

  //Initialize variables for height
  let heightInMetric = 0;
  let heightInEnglish = 0;
  let heightInEnglishFeet = 0;
  let heightInEnglishInches = 0;

  //Prompt user for height
  console.log('\nPlease type the height of your npc in centimeters');
  let heightString = prompt('ENTER HEIGHT: ');



  //Check to make sure input for height is valid
  let i = 0;
  let heightCheck = true;
  //Check needs to run at least once
  do {
    for(i = 0; i < heightString.length; i++) {
      //Check against all numeral digits
      if(heightString[i] != '0' && heightString[i] != '1' && heightString[i] != '2' && heightString[i] != '3' && heightString[i] != '4' && heightString[i] != '5' && heightString[i] != '6' && heightString[i] != '7' && heightString[i] != '8' && heightString[i] != '9') {
        i = 0;
        heightCheck = false;
        console.log('The input given is not valid. Only numbers greater than zero are valid');
        heightString = '';
        heightString = prompt('ENTER HEIGHT: ');
        
      } 

      //If the for loop checks every element in the string and finds them all to be numeral digits, set heightCheck equal to true
      if(i === heightString.length - 1) {
          heightCheck = true;
      }
    }
    //If heightCheck is true, turn the input string into a number data type using the 'parseInt()' function
    if(heightCheck = true) {
        heightInMetric = parseInt(heightString, 10);
        heightInEnglish = Math.round(heightInMetric / 2.54);
        heightInEnglishFeet = Math.floor(heightInEnglish / 12);
        heightInEnglishInches = (heightInEnglish % 12);
    }

  } while(heightCheck === false)

  //return height in cm and in feet/inches
  return heightInMetric + ' centimeters (' + heightInEnglishFeet + ' feet ' + heightInEnglishInches + ' inches)';
}



//----------FUNCTION TO CHOOSE WEIGHT-----------
const chooseWeight = () => {

    //Initialize variables for weight
    let weightInMetric = 0;
    let weightInEnglish = 0;
    let weightInEnglishFeet = 0;
    let weightInEnglishInches = 0;

  //Prompt user for weight
  console.log('\nPlease type the weight of your npc in kilograms');
  let weightString = prompt('ENTER WEIGHT: ');



  //Check to make sure input for weight is valid
  let i = 0;
  let weightCheck = true;
  //Check needs to run at least once
  do {
    for(i = 0; i < weightString.length; i++) {
      //Check against all numeral digits
      if(weightString[i] != '0' && weightString[i] != '1' && weightString[i] != '2' && weightString[i] != '3' && weightString[i] != '4' && weightString[i] != '5' && weightString[i] != '6' && weightString[i] != '7' && weightString[i] != '8' && weightString[i] != '9') {
        weightCheck = false;
        console.log('The input given is not valid. Only numbers greater than zero are valid');
        weightString = '';
        weightString = prompt('ENTER WEIGHT: ');
        break;
      } 
      //If the for loop checks every element in the string and finds them all to be numeral digits, set weightCheck equal to true
      if(i === weightString.length - 1) {
        weightCheck = true;
      }
    }
    //If weightCheck is true, turn the input string into a number data type using the 'parseInt()' function
    if(weightCheck = true) {
        weightInMetric = parseInt(weightString, 10);
        weightInEnglishPounds = Math.round(weightInMetric * 2.20462);
    }

  } while(weightCheck === false)

  //return height in cm and in feet/inches
  return weightInMetric + ' kilograms (' + weightInEnglishPounds + ' lbs)';
}



//----------FUNCTION TO CHOOSE EYE COLOR-----------
const chooseEyeColor = () => {
  //Initialize varables and arrays
  let eyeColor = '';
  //Populate an array with all possible eye colors
  const eyeColors = [
    'black',
    'blue',
    'brown',
    'gold',
    'gray',
    'green',
    'hazel',
    'magenta',
    'maroon',
    'orange',
    'pink',
    'purple',
    'red',
    'silver',
    'turquoise',
    'violet',
    'white',
    'yellow',
    ]

    const eyeColorsWithRandom = [
      'random',
      'black',
      'blue',
      'brown',
      'gold',
      'gray',
      'green',
      'hazel',
      'magenta',
      'maroon',
      'orange',
      'pink',
      'purple',
      'red',
      'silver',
      'turquoise',
      'violet',
      'white',
      'yellow',
      ]

  //Prompt user to input eye color
  console.log("\nType your npc's eye color or 'random'.\nOptions are: ");
  i = 0;
  while(i < eyeColors.length) {
      console.log(eyeColorsWithRandom[i]);
      i++;
  }
  console.log('\n');
  eyeColor = prompt("ENTER EYE COLOR: ");
  selection = 'EYE COLOR';
  inputMessage = `\n'${eyeColor}' is not a valid option. Please enter an option from the list.\nOptions are:`;


  //Make the user input lowercase
  if(typeof eyeColor === 'string') {
      eyeColor = eyeColor.toLowerCase();
  }

  eyeColor = checkIfInvalidOption(eyeColor, eyeColorsWithRandom, eyeColorsWithRandom, selection, inputMessage);

  return eyeColor;
}



//----------FUNCTION TO CHOOSE SKIN COLOR-----------
const chooseSkinColor = () => {



}



//----------FUNCTION TO CHOOSE HAIR COLOR-----------
const chooseHairColor = () => {

}



//----------FUNCTION TO CHOOSE VOICE TYPE-----------
const chooseVoiceType = () => {

}



//----------FUNCTION TO CHOOSE PERSONALITY TYPE-----------
const choosePersonality = () => {

}



//----------FUNCTION TO CHOOSE CLASS-----------
const chooseClass = () => {

}



//----------FUNCTION TO CHOOSE SUB-CLASS-----------
const chooseSubClass = () => {

}



//----------FUNCTION TO CHOOSE LEVEL-----------
const chooseLevel = () => {

}



//----------FUNCTION TO CHOOSE RESISTANCES------------
const chooseResistances = () => {

}



//----------FUNCTION TO CHOOSE LANGUAGES-----------
const chooseLanguages = () => {

}


//----------FUNCTION TO CHOOSE RACIAL TRAITS AND FEATS-----------



//----------FUNCTION TO CHOOSE STATS-----------
const chooseStats = (race, subRace, npcClass, occupation, str, dex, con, int, wis, cha) => {

  //Create array to hold all six stat values
  let statsArray =[];

  //for loop to get 6 stats
  let current = 0;
  for(let i = 0; i < 7; i++) {
    current = Math.floor(Math.random() * 13) + 6;
    statsArray.push(current);
  }
  statsArray.sort(function(a, b) {
    return b - a;
  });
  
  
  //Initialize variables for stats
  let str =  0,
      dex =  0,
      con =  0,
      int =  0,
      wis =  0,
      cha =  0;

  //Assign values to abilities scores based on class and/or occupation
  if(npcClass === 'barbarian') {
    str += stats[1];
    dex +=  statsArray[2];
    con +=  statsArray[0];
    int +=  statsArray[5];
    wis +=  statsArray[4];
    cha +=  statsArray[3];
  } else if(npcClass === 'bard') {
    str += stats[3];
    dex +=  statsArray[2];
    con +=  statsArray[5];
    int +=  statsArray[1];
    wis +=  statsArray[4];
    cha +=  statsArray[0];
  } else if(npcClass === 'cleric') {
    str += stats[5];
    dex +=  statsArray[4];
    con +=  statsArray[3];
    int +=  statsArray[2];
    wis +=  statsArray[0];
    cha +=  statsArray[1];
  } else if(npcClass === 'druid') {
    str += stats[2];
    dex +=  statsArray[1];
    con +=  statsArray[3];
    int +=  statsArray[4];
    wis +=  statsArray[0];
    cha +=  statsArray[5];
  } else if(npcClass === 'fighter') {
    str += stats[0];
    dex +=  statsArray[2];
    con +=  statsArray[1];
    int +=  statsArray[3];
    wis +=  statsArray[5];
    cha +=  statsArray[4];
  } else if(npcClass === 'monk') {
    str += stats[2];
    dex +=  statsArray[0];
    con +=  statsArray[3];
    int +=  statsArray[4];
    wis +=  statsArray[1];
    cha +=  statsArray[5];
  } else if(npcClass === 'paladin') {
    str += stats[1];
    dex +=  statsArray[3];
    con +=  statsArray[2];
    int +=  statsArray[5];
    wis +=  statsArray[4];
    cha +=  statsArray[0];
  } else if(npcClass === 'ranger') {
    str += stats[0];
    dex +=  statsArray[1];
    con +=  statsArray[2];
    int +=  statsArray[5];
    wis +=  statsArray[3];
    cha +=  statsArray[4];
  } else if(npcClass === 'rogue') {
    str += stats[4];
    dex +=  statsArray[0];
    con +=  statsArray[5];
    int +=  statsArray[2];
    wis +=  statsArray[3];
    cha +=  statsArray[1];
  } else if(npcClass === 'sorcerer') {
    str += stats[4];
    dex +=  statsArray[2];
    con +=  statsArray[0];
    int +=  statsArray[1];
    wis +=  statsArray[3];
    cha +=  statsArray[5];
  } else if(npcClass === 'warlock') {
    str += stats[4];
    dex +=  statsArray[3];
    con +=  statsArray[1];
    int +=  statsArray[0];
    wis +=  statsArray[2];
    cha +=  statsArray[5];
  } else if(npcClass === 'wizard') {
    str += stats[5];
    dex +=  statsArray[4];
    con +=  statsArray[3];
    int +=  statsArray[2];
    wis +=  statsArray[0];
    cha +=  statsArray[1];
  } else if(npcClass === 'blood hunter') {
    str += stats[1];
    dex +=  statsArray[2];
    con +=  statsArray[3];
    int +=  statsArray[0];
    wis +=  statsArray[4];
    cha +=  statsArray[5];
  } else if(occupation === 'woodcutter' || 
  occupation === 'stonecutter' || 
  occupation === 'mason' || 
  occupation === 'carpenter' || 
  occupation === 'tanner' || 
  occupation === 'butcher' || 
  occupation === 'fisherman' || 
  occupation === 'hunter' || 
  occupation === 'farmer' || 
  occupation === 'construction worker' || 
  occupation === 'blacksmith' || 
  occupation === 'precious metal smith' || 
  occupation === 'equestrian' || 
  occupation === 'stable boy') {
    str += stats[0];
    dex +=  statsArray[2];
    con +=  statsArray[1];
    int +=  statsArray[4];
    wis +=  statsArray[3];
    cha +=  statsArray[5];
  } else if(occupation === 'merchant') {
    str += stats[5];
    dex +=  statsArray[3];
    con +=  statsArray[4];
    int +=  statsArray[0];
    wis +=  statsArray[2];
    cha +=  statsArray[1];
  } else if(occupation === 'gladiator') {
    str += stats[1];
    dex +=  statsArray[2];
    con +=  statsArray[0];
    int +=  statsArray[5];
    wis +=  statsArray[4];
    cha +=  statsArray[3];
  } else if(occupation === 'opera singer' || 
  occupation === 'jester' || 
  occupation === 'storyteller' || 
  occupation === 'mayor' || 
  occupation === 'council member' || 
  occupation === 'politician' || 
  occupation === 'bartender' || 
  occupation === 'server' || 
  occupation === 'fortune teller' ||
  occupation === 'cheiftan' ||
  occupation === 'town elder') {
    str += stats[3];
    dex +=  statsArray[2];
    con +=  statsArray[5];
    int +=  statsArray[1];
    wis +=  statsArray[4];
    cha +=  statsArray[0];
  } else if(occupation === 'priest' || 
  occupation === 'priestess' || 
  occupation === 'cultist') {
    str += stats[5];
    dex +=  statsArray[4];
    con +=  statsArray[3];
    int +=  statsArray[2];
    wis +=  statsArray[0];
    cha +=  statsArray[1];
  } else if(occupation === 'beekeeper' || 
  occupation === 'rancher' || 
  occupation === 'pest exterminator' || 
  occupation === 'varmint catcher') {
    str += stats[2];
    dex +=  statsArray[1];
    con +=  statsArray[3];
    int +=  statsArray[4];
    wis +=  statsArray[0];
    cha +=  statsArray[5];
  } else if(occupation === 'gravedigger' || 
  occupation === 'bouncer' || 
  occupation === 'bodygaurd') {
    str += stats[0];
    dex +=  statsArray[2];
    con +=  statsArray[1];
    int +=  statsArray[3];
    wis +=  statsArray[5];
    cha +=  statsArray[4];
  } else if(occupation === 'cavalier' || 
  occupation === 'naval seaman' || 
  occupation === 'skyman' ||
  occupation === 'pilot' || 
  occupation === 'infantry' || 
  occupation === 'sailor' || 
  occupation === 'bandit' || 
  occupation === 'outlaw' || 
  occupation === 'pirate' || 
  occupation === 'soldier' || 
  occupation === 'sword for hire' || 
  occupation === 'athlete') {
    str += stats[0];
    dex +=  statsArray[1];
    con +=  statsArray[2];
    int +=  statsArray[5];
    wis +=  statsArray[3];
    cha +=  statsArray[4];
  } else if(occupation === 'pick pocket' || 
  occupation === 'spy' || 
  occupation === 'assassin') {
    str += stats[4];
    dex +=  statsArray[0];
    con +=  statsArray[5];
    int +=  statsArray[2];
    wis +=  statsArray[3];
    cha +=  statsArray[1];
  } else if(occupation === 'herbalist') {
    str += stats[4];
    dex +=  statsArray[2];
    con +=  statsArray[0];
    int +=  statsArray[1];
    wis +=  statsArray[3];
    cha +=  statsArray[5];
  } else if(occupation === 'doctor' || 
  occupation === 'leech') {
    str += stats[4];
    dex +=  statsArray[3];
    con +=  statsArray[1];
    int +=  statsArray[0];
    wis +=  statsArray[2];
    cha +=  statsArray[5];
  } else if(occupation === 'botanist' || 
  occupation === 'gardener' || 
  occupation === 'scholar' || 
  occupation === 'writer' || 
  occupation === 'judge' || 
  occupation === 'lawyer' || 
  occupation === 'baker' || 
  occupation === 'chef' || 
  occupation === 'cook' || 
  occupation === 'accountant' || 
  occupation === 'potion maker' || 
  occupation === 'scientist' || 
  occupation === 'inventor' || 
  occupation === 'runist' || 
  occupation === 'librarian' || 
  occupation === 'court clerk' || 
  occupation === 'theologian' || 
  occupation === 'historian' || 
  occupation === 'architect' || 
  occupation === 'vetenarian' || 
  occupation === 'teacher' || 
  occupation === 'mathematician' || 
  occupation === 'military strategist' || 
  occupation === 'enchanter') {
    str += stats[5];
    dex +=  statsArray[4];
    con +=  statsArray[3];
    int +=  statsArray[2];
    wis +=  statsArray[0];
    cha +=  statsArray[1];
  } else if(occupation === 'acrobat' || 
  occupation === 'dancer') {
    str += stats[2];
    dex +=  statsArray[0];
    con +=  statsArray[3];
    int +=  statsArray[5];
    wis +=  statsArray[4];
    cha +=  statsArray[1];
  } else if(occupation === 'actor' || 
  occupation === 'minstrel' || 
  occupation === 'prostitute' || 
  occupation === 'musician' || 
  occupation === 'painter' || 
  occupation === 'piper' || 
  occupation === 'playwright' || 
  occupation === 'poet' || 
  occupation === 'sculptor' || 
  occupation === 'tattooist' || 
  occupation === 'writer' || 
  occupation === 'illuminator') {
    str += stats[5];
    dex +=  statsArray[4];
    con +=  statsArray[3];
    int +=  statsArray[2];
    wis +=  statsArray[1];
    cha +=  statsArray[0];
  } else if(occupation === 'accountant' || 
  occupation === 'navigator' || 
  occupation === 'entrepreneur' || 
  occupation === 'chandler' || 
  occupation === 'banker' || 
  occupation === 'fishmonger' || 
  occupation === 'general contractor' || 
  occupation === 'grocer' || 
  occupation === 'innkeeper' || 
  occupation === 'peddler' || 
  occupation === 'speculator' || 
  occupation === 'linguist' || 
  occupation === 'translator' || 
  occupation === 'printer' || 
  occupation === 'taxidermist' || 
  occupation === 'toymaker' || 
  occupation === 'wheelwright' || 
  occupation === 'anthropologist' || 
  occupation === 'archaeologist' || 
  occupation === 'archivist' || 
  occupation === 'cartographer' || 
  occupation === 'engineer' || 
  occupation === 'horologist' ||
  occupation === 'drug maker' || 
  occupation === 'philosopher' || 
  occupation === 'professor' || 
  occupation === 'scribe' || 
  occupation === 'student' || 
  occupation === 'tutor' || 
  occupation === 'diplomat' || 
  occupation === 'steward' || 
  occupation === 'alchemist' || 
  occupation === 'apothecary' || 
  occupation === 'midwife' || 
  occupation === 'mortician' || 
  occupation === 'nurse' || 
  occupation === 'barber' || 
  occupation === 'clerk') {
    str += stats[5];
    dex +=  statsArray[4];
    con +=  statsArray[3];
    int +=  statsArray[0];
    wis +=  statsArray[1];
    cha +=  statsArray[2];
  } else if(occupation === 'animal handler' || 
  occupation === 'arborist' || 
  occupation === 'folwer' || 
  occupation === 'cowherd' || 
  occupation === 'dairyman' || 
  occupation === 'falconer' || 
  occupation === 'forager' || 
  occupation === 'herder' || 
  occupation === 'horse trainer' || 
  occupation === 'master-of-hounds' || 
  occupation === 'miller' || 
  occupation === 'prospector' || 
  occupation === 'shepherd' || 
  occupation === 'thresher' || 
  occupation === 'stablehand' || 
  occupation === 'trapper' || 
  occupation === 'zookeeper') {
    str += stats[2];
    dex +=  statsArray[1];
    con +=  statsArray[4];
    int +=  statsArray[3];
    wis +=  statsArray[0];
    cha +=  statsArray[5];
  } else if(occupation === 'brickmason' || 
  occupation === 'claymason' || 
  occupation === 'plasterer' || 
  occupation === 'stonemason' || 
  occupation === 'streetlayer') {
    str += stats[0];
    dex +=  statsArray[5];
    con +=  statsArray[2];
    int +=  statsArray[1];
    wis +=  statsArray[3];
    cha +=  statsArray[4];
  } else if(occupation === 'pimp' || 
  occupation === 'collector' || 
  occupation === 'tax collector' || 
  occupation === 'plantation owner' || 
  occupation === 'slaver' || 
  occupation === 'kidnapper') {
    str += stats[1];
    dex +=  statsArray[2];
    con +=  statsArray[4];
    int +=  statsArray[0];
    wis +=  statsArray[5];
    cha +=  statsArray[3];
  } else if(occupation === 'courier' || 
  occupation === 'herald' || 
  occupation === 'messenger' || 
  occupation === 'town crier') {
    str += stats[4];
    dex +=  statsArray[0];
    con +=  statsArray[5];
    int +=  statsArray[2];
    wis +=  statsArray[3];
    cha +=  statsArray[1];
  } else if(occupation === 'armorer' || 
  occupation === 'bladesmith' || 
  occupation === 'bowyer' || 
  occupation === 'broom maker' || 
  occupation === 'candlemaker' || 
  occupation === 'cobbler' || 
  occupation === 'cooper' || 
  occupation === 'cutler' || 
  occupation === 'embroiderer' || 
  occupation === 'engraver' || 
  occupation === 'fletcher' || 
  occupation === 'furniture maker' || 
  occupation === 'furrier' || 
  occupation === 'glassmaker' || 
  occupation === 'goldsmith/silversmith' || 
  occupation === 'hatter' || 
  occupation === 'glovemaker' || 
  occupation === 'jewerler' || 
  occupation === 'locksmith' || 
  occupation === 'mercer' || 
  occupation === 'potter' || 
  occupation === 'printer' || 
  occupation === 'rope maker' || 
  occupation === 'saddler' || 
  occupation === 'soaper' || 
  occupation === 'tinker' || 
  occupation === 'whittler' || 
  occupation === 'woodcarver') {
    str += stats[2];
    dex +=  statsArray[4];
    con +=  statsArray[5];
    int +=  statsArray[0];
    wis +=  statsArray[1];
    cha +=  statsArray[3];
  } else if(occupation === 'burglar' || 
  occupation === 'charlatan' || 
  occupation === 'crime boss' || 
  occupation === 'cutpurse' || 
  occupation === 'drug lord' ||
  occupation === 'drug dealer' || 
  occupation === 'fence' || 
  occupation === 'loan shark' || 
  occupation === 'poacher' || 
  occupation === 'smuggler') {
    str += stats[1];
    dex +=  statsArray[2];
    con +=  statsArray[3];
    int +=  statsArray[0];
    wis +=  statsArray[5];
    cha +=  statsArray[4];
  } else if(occupation === 'archduke/archduchess' || 
  occupation === 'aristocrat' || 
  occupation === 'baron/baroness' || 
  occupation === 'chancellor' || 
  occupation === 'courtier' || 
  occupation === 'lady-in-waiting' || 
  occupation === 'marquess' || 
  occupation === 'master of revels' || 
  occupation === 'noble' || 
  occupation === 'orator' || 
  occupation === 'squire' || 
  occupation === 'viscount') {
    str += stats[2];
    dex +=  statsArray[0];
    con +=  statsArray[3];
    int +=  statsArray[5];
    wis +=  statsArray[4];
    cha +=  statsArray[1];
  } else if(occupation === 'healer' || 
  occupation === 'surgeon') {
    str += stats[5];
    dex +=  statsArray[3];
    con +=  statsArray[2];
    int +=  statsArray[1];
    wis +=  statsArray[0];
    cha +=  statsArray[4];
  } else if(occupation == 'baker' || 
  occupation === 'barber' || 
  occupation === 'barkeep' || 
  occupation === 'barmaid' || 
  occupation === 'charcaol maker' || 
  occupation === 'chatelain' || 
  occupation === 'chimney sweeper' || 
  occupation === 'cook' || 
  occupation === 'croupier' || 
  occupation === 'distiller' || 
  occupation === 'florist' || 
  occupation === 'gongfarmer' || 
  occupation === 'housemaid' || 
  occupation === 'laborer' || 
  occupation === 'lamplighter' || 
  occupation === 'landscaper' || 
  occupation === 'laundry worker' || 
  occupation === 'longshoreman' || 
  occupation === 'butler/maid' || 
  occupation === 'miner' || 
  occupation === 'orphanage caretaker' || 
  occupation === 'page' || 
  occupation === 'pastry chef' || 
  occupation === 'plumer' || 
  occupation === 'plumber' || 
  occupation === 'porter' || 
  occupation === 'slave' || 
  occupation === 'street sweeper' || 
  occupation === 'tavern worker' ||  
  occupation === 'water bearer') {
    str += stats[3];
    dex +=  statsArray[2];
    con +=  statsArray[5];
    int +=  statsArray[0];
    wis +=  statsArray[1];
    cha +=  statsArray[4];
  } else if(occupation === 'abjurer' || 
  occupation === 'archmage' || 
  occupation === 'augurer' || 
  occupation === 'elementalist' || 
  occupation === 'enchanter' || 
  occupation === 'evoker' || 
  occupation === 'hearth witch' || 
  occupation === 'illusionist' || 
  occupation === 'mage' || 
  occupation === 'necromancer' || 
  occupation === 'ritualist' || 
  occupation === 'runecaster' || 
  occupation === 'sage' || 
  occupation === 'seer/oracle' || 
  occupation === 'shaman' || 
  occupation === 'summoner' || 
  occupation === 'transmuter' || 
  occupation === 'shapeshifter' || 
  occupation === 'witchdoctor' || 
  occupation === 'witch' || 
  occupation === 'wordsmith') {
    str += stats[5];
    dex +=  statsArray[4];
    con +=  statsArray[3];
    int +=  statsArray[1];
    wis +=  statsArray[0];
    cha +=  statsArray[2];
  } else if(occupation === 'admiral' || 
  occupation === 'captain' || 
  occupation === 'detective' || 
  occupation === 'general' || 
  occupation === 'jailer' || 
  occupation === 'marhsall' || 
  occupation === 'mercenary' || 
  occupation === 'sergeant' || 
  occupation === 'warmage' || 
  occupation === 'warden' || 
  occupation === 'police officer') {
    str += stats[2];
    dex +=  statsArray[3];
    con +=  statsArray[4];
    int +=  statsArray[0];
    wis +=  statsArray[1];
    cha +=  statsArray[5];
  } else if(occupation === 'fireman') {
    str += stats[1];
    dex +=  statsArray[2];
    con +=  statsArray[3];
    int +=  statsArray[4];
    wis +=  statsArray[0];
    cha +=  statsArray[5];
  } else if(occupation === 'gaurd' || 
  occupation === 'city watch' || 
  occupation === 'bodygaurd' || 
  occupation === 'sentinel') {
    str += stats[1];
    dex +=  statsArray[4];
    con +=  statsArray[5];
    int +=  statsArray[3];
    wis +=  statsArray[2];
    cha +=  statsArray[0];
  } else if(occupation === 'archer') {
    str += stats[2];
    dex +=  statsArray[0];
    con +=  statsArray[4];
    int +=  statsArray[3];
    wis +=  statsArray[1];
    cha +=  statsArray[5];
  } else if(occupation === 'duelist') {
    str += stats[1];
    dex +=  statsArray[0];
    con +=  statsArray[3];
    int +=  statsArray[4];
    wis +=  statsArray[2];
    cha +=  statsArray[5];
  } else if(occupation === 'torturer') {
    str += stats[1];
    dex +=  statsArray[4];
    con +=  statsArray[5];
    int +=  statsArray[3];
    wis +=  statsArray[2];
    cha +=  statsArray[0];
  } else if(occupation === 'executioner') {
    str += stats[0];
    dex +=  statsArray[2];
    con +=  statsArray[3];
    int +=  statsArray[5];
    wis +=  statsArray[4];
    cha +=  statsArray[1];
  } else if(occupation === 'acolyte' || 
  occupation === 'abbot/abbess' || 
  occupation === 'archbishop' || 
  occupation === 'bishop' || 
  occupation === 'cardinal' || 
  occupation === 'chaplain' || 
  occupation === 'clergy' || 
  occupation === 'diviner' || 
  occupation === 'high priest/priestess' || 
  occupation === 'friar' || 
  occupation === 'inquisitor' || 
  occupation === 'missionary' || 
  occupation === 'nun' || 
  occupation === 'pardoner' || 
  occupation === 'prophet' || 
  occupation === 'sexton' || 
  occupation === 'templar') {
    str += stats[5];
    dex +=  statsArray[3];
    con +=  statsArray[4];
    int +=  statsArray[2];
    wis +=  statsArray[0];
    cha +=  statsArray[1];
  } else if(occupation === 'boatman' || 
  occupation === 'bosun' || 
  occupation === 'cabbie' || 
  occupation === 'caravaneer' || 
  occupation === 'charioteer' || 
  occupation === 'ferryman' || 
  occupation === 'first mate' || 
  occupation === 'sea captain' || 
  occupation === 'helmsman' || 
  occupation === 'purser' || 
  occupation === 'shipwright' || 
  occupation === 'swab') {
    str += stats[1];
    dex +=  statsArray[0];
    con +=  statsArray[3];
    int +=  statsArray[2];
    wis +=  statsArray[4];
    cha +=  statsArray[5];
  } else if(occupation === 'adventurer' || 
  occupation === 'bounty hunter' || 
  occupation === 'explorer' || 
  occupation === 'folk hero' || 
  occupation === 'pilgrim' || 
  occupation === 'rebel' || 
  occupation === 'dungeon delver') {
    str += stats[2];
    dex +=  statsArray[1];
    con +=  statsArray[5];
    int +=  statsArray[0];
    wis +=  statsArray[3];
    cha +=  statsArray[4];
  } else if(occupation === 'vagabond' || 
  occupation === 'urchin' || 
  occupation === 'runaway slave' || 
  occupation === 'squatter' || 
  occupation === 'refugee' || 
  occupation === 'hermit' || 
  occupation === 'heckler' || 
  occupation === 'gambler' || 
  occupation === 'ex-criminal' || 
  occupation === 'exile' || 
  occupation === 'disgraced noble' || 
  occupation === 'deserter' || 
  occupation === 'beggar') {
    str += stats[5];
    dex +=  statsArray[3];
    con +=  statsArray[0];
    int +=  statsArray[4];
    wis +=  statsArray[1];
    cha +=  statsArray[2];
  } else if(occupation === 'housewife/househusband') {
    str += stats[5];
    dex +=  statsArray[4];
    con +=  statsArray[2];
    int +=  statsArray[1];
    wis +=  statsArray[0];
    cha +=  statsArray[3];
  } else if(occupation === 'fool') {
    str += stats[1];
    dex +=  statsArray[0];
    con +=  statsArray[3];
    int +=  statsArray[4];
    wis +=  statsArray[5];
    cha +=  statsArray[2];
  }

  //Give racial ability score bonuses or penalties
  //If statement to check race
  race = race.toLowerCase();
  if(race === 'aarakocra') {
    dex += 2;
    wis += 1;
  } else if(race === 'aasimar') {
    cha += 2;
    if(subRace === 'fallen') { 
      str += 1;
    } else if(subRace === 'protector') {
      wis += 1;
    } else if(subRace === 'scourge') {
      con += 1;
    }
  } else if(race === 'dragonborn') { 
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  } else if(race === 'dragonborn') {
    str += 2;
    con += 1;
  }

  return {str, dex, con, int, wis, cha};
}



//----------FUNCTION TO CHOOSE HEALTH POINTS-----------
const chooseHealthPoints = () => {

}



//----------FUNCTION TO CHOOSE ARMOR CLASS-----------
const chooseArmorClass = () => {

}



//----------FUNCTION TO CHOOSE SKILLS-----------
const chooseSkills = () => {
  
}



//----------FUNCTION TO CHOOSE FEATS-----------
const chooseFeats = () => {
  
}



//----------FUNCTION TO CHOOSE SPELLS-----------
const chooseSpells = () => {
  
}



//----------FUNCTION TO CHOOSE INVENTORY-----------
const chooseInventory = () => {

}



//----------FUNCTION TO CHOOSE MARITAL STATUS-----------
const chooseMaritalStatus = () => {

}



//----------FUNCTION TO CHOOSE FAMILY STRUCTURE-----------
const chooseFamily = () => {
  
}



//----------FUNCTION TO CHOOSE OCCUPATION-----------
const chooseOccupation = () => {
  
}



//----------FUNCTION FOR RANDOM NPC GENERATION-----------
const randomNpcGen = () => {
  
}



//----------FUNCTION FOR NPC INFO OUTPUT-----------
const npcInfoOutput = (race, subRace, gender, age, lifeRange, fullName, alignment, height, weight, skinColor, eyeColor, characterClass, characterLevel, armorClass, healthPoints, profBonus, npcStats, speed) => {
  race = race.toLowerCase();
  if(race === 'aarakocra') {
    race = (race.charAt(0).toUpperCase() + race.slice(1))
    console.log(
      '\nRace: ' + race + '\nGender: ' + gender + '\nAge: ' + 
      age + '\nLife Range: ' + lifeRange + '\nName: ' + fullName + '\nAlignment: ' + alignment + '\nHeight: ' + 
      height + '\nWeight: ' + weight + '\nBird Type: ' 
      + subRace + '\nEye Color: ' + eyeColor +
      '\nWalking Speed: ' + 25 + '\nFlying Speed: ' + 50 + '\nSTR: ' + npcStats.str + '\nDEX: ' + npcStats.dex + 
      '\nCON: ' + npcStats.con + '\nINT: ' + npcStats.int + '\nWIS: ' + npcStats.wis + '\nCHA: ' + npcStats.cha);
  } 

  else if(race === 'dragonborn') {
    console.log(
      '\nRace: ' + race + '\nGender: ' + gender + '\nAge: ' + 
      age + '\nLife Range: ' + lifeRange + '\nName: ' + fullName + '\nAlignment: ' + alignment + '\nHeight: ' + 
      height + '\nWeight: ' + weight + '\nDragon Type: ' 
      + subRace + '\nEye Color: ' + eyeColor +
      '\nWalking Speed: ' + 30 + '\nSTR: ' + npcStats.str + '\nDEX: ' + npcStats.dex + 
      '\nCON: ' + npcStats.con + '\nINT: ' + npcStats.int + '\nWIS: ' + npcStats.wis + '\nCHA: ' + npcStats.cha);
  }

  else if(race === 'dragonborn') {
    console.log(
      '\nRace: ' + race + '\nGender: ' + gender + '\nAge: ' + 
      age + '\nLife Range: ' + lifeRange + '\nName: ' + fullName + '\nAlignment: ' + alignment + '\nHeight: ' + 
      height + '\nWeight: ' + weight + '\nDragon Type: ' 
      + subRace + '\nEye Color: ' + eyeColor +
      '\nWalking Speed: ' + 30 + '\nSTR: ' + npcStats.str + '\nDEX: ' + npcStats.dex + 
      '\nCON: ' + npcStats.con + '\nINT: ' + npcStats.int + '\nWIS: ' + npcStats.wis + '\nCHA: ' + npcStats.cha);
  }

  else if(race === 'dragonborn') {
    console.log(
      '\nRace: ' + race + '\nGender: ' + gender + '\nAge: ' + 
      age + '\nLife Range: ' + lifeRange + '\nName: ' + fullName + '\nAlignment: ' + alignment + '\nHeight: ' + 
      height + '\nWeight: ' + weight + '\nDragon Type: ' 
      + subRace + '\nEye Color: ' + eyeColor +
      '\nWalking Speed: ' + 30 + '\nSTR: ' + npcStats.str + '\nDEX: ' + npcStats.dex + 
      '\nCON: ' + npcStats.con + '\nINT: ' + npcStats.int + '\nWIS: ' + npcStats.wis + '\nCHA: ' + npcStats.cha);
    }

  else if(race === 'dragonborn') {
    console.log(
      '\nRace: ' + race + '\nGender: ' + gender + '\nAge: ' + 
      age + '\nLife Range: ' + lifeRange + '\nName: ' + fullName + '\nAlignment: ' + alignment + '\nHeight: ' + 
      height + '\nWeight: ' + weight + '\nDragon Type: ' 
      + subRace + '\nEye Color: ' + eyeColor +
      '\nWalking Speed: ' + 30 + '\nSTR: ' + npcStats.str + '\nDEX: ' + npcStats.dex + 
      '\nCON: ' + npcStats.con + '\nINT: ' + npcStats.int + '\nWIS: ' + npcStats.wis + '\nCHA: ' + npcStats.cha);
  }
}



//----------MAIN FUNCTION FOR NPC GENERATION-----------
const npcGen = () => {

  //Initialize all variables for npc generation
  let race = '';
  let subRace = '';
  let gender = '';
  let age = 0;
  let fullName = '';
  let alignment = '';
  let height = 0;
  let weight = 0;
  let skinColor = '';
  let eyeColor = ''; 
  let npcStats = '';
  let npcClass = '';
  let characterClass = '';
  let characterSubclass = '';
  let characterLevel = 0;
  let armorClass = 0;
  let healthPoints = 0;
  let profBonus = 0;
  let speed = 0;
  let selection = '';
  let inputMessage = '';
  let backStory = '';
  let feats = [];

  

  //Check if the user wants a custome npc or a completely random npc
  console.log("Do you want customize your npc? Type 'Y' for 'yes' or 'N' for 'no' then press enter.")
  const customizeOrNah = prompt('(Y/N): ');


  //If yes, begin npc creation by aquiring all characteristic from the user
  if(customizeOrNah === 'Y' || 'y') {

      //Call race function and set race equal to its return value
      race = chooseRace();
      console.log(race);


      //Call subrace function and set subrace equal to its return value
      subRace = chooseSubRace(race);
      console.log(subRace)


      //Call gender function and set gender equal to its return value
      gender = chooseGender();
      console.log(gender);

      //Call age function and set age equal to its return value
      age = chooseAge(race);
      console.log(age);

      //Call name function and set name equal to its return value
      fullName = chooseName(race, gender);
      console.log(fullName);

      //Call alignment function and set alignment equal to its return value
      alignment = chooseAlignment();
      console.log(alignment)

      //Call height function and set height equal to its return value
      height = chooseHeight();
      console.log(height)


      //Call weight function and set weight equal to its return value
      weight = chooseWeight();
      console.log(weight);


      //Call eye color function and set eye color equal to its return value
      eyeColor = chooseEyeColor();
      console.log(eyeColor);


      //Call npc stat function and set stats equal to the corresponding return object properties
      npcStats = chooseStats(race, subRace);
      console.log('str: ' + npcStats.str + '\ndex: ' + npcStats.dex + '\ncon: ' + npcStats.con + '\nint: ' + npcStats.int + '\nwis: ' + npcStats.wis + '\ncha: ' + npcStats.cha);


      //Call npc life range function to calculate and return the npc's life range
      lifeRange = chooseLifeRange(race, age);
      console.log(lifeRange);


      //Call npc info output function
      npcInfoOutput(race, subRace, gender, age, lifeRange, fullName, alignment, height, weight, skinColor, eyeColor, characterClass, characterLevel, armorClass, healthPoints, profBonus, npcStats, speed);

    if(race === 'dragonborn') {
      createRandomDragonBornNPC(
          race,
          gender,
          age,
          fullName,
          alignment,
          height,
          weight,
          subRace,
          eyeColor
          );
    }

  }
  
  let str = npcStats.str;
  let dex = npcStats.dex;
  let con = npcStats.con;
  let int = npcStats.int;
  let wis = npcStats.wis;
  let cha = npcStats.cha;


  //Initialize variables
  let npc = {
    race: race,
    subRace: subRace,
    gender: gender,
    age: age,
    fullName: fullName,
    alignment: alignment,
    height: height,
    weight: weight,
    skinColor: skinColor,
    eyeColor: eyeColor,
    stats: {str: str, dex: dex, con: con, int: int, wis: wis, cha: cha}
  }


  return npc;

}

console.log(npcGen());
