//------TO DO's------
//clean up code
//write individual functions for each characteristic
//write comments for everything
//post on github
//finish populating arrays
//move as much code into the functions as possible
//Make user prompts more uniform
//write code to calculate HP and AC based on class and level
//Output dragonborn breath weapon
//readjust dragonborn age to height/weight ranges
//seperate dragon types into groups based on rarity
//write breath weapon discriptions
//create name syllable arrays for name creation
//create an if statement to handle random character or trait generation
//clean up code
//write functions to generate npc's of all race types
//acount for alternate spellings
//create occupation array
//assign npc's occupations



//Create an object facotry that will produce one or more npc's for a dnd campaign
//All npc's need a race, gender, physical features, age, alignment, occupation, stats, level, etc...

//Allow for prompts in the program for testing purposes
const prompt = require('prompt-sync')();

//initialize and define all needed functions below

//-------------FUNCTION TO CHECK IT CHOICE IS VALID-------------
const checkIfInvalidOption = (input, arrayToCheckBackend, arrayToCheckFrontend, selection, message) => {
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




//-------------FUNCTION TO CHOOSE RACE-------------
const chooseRace = () => {

    //Populate an array with all possible races with different spellings for backend use
    const racesBackend = ['dragonborn', 'dragon born', 'dragon-born', 'dragonborn', 'half elf', 'half orc', 'dwarf', 'elf', 'gnome', 'half-elf', 'halfling', 'half-orc', 'human', 'human variant', 'tiefling', 'Random', 'random', 'R', 'r'];

    //Populate an array with all possible races including 'random' for frontend use
    const racesWithRandom = ['random', 'dragonborn', 'half elf', 'half orc', 'dwarf', 'elf', 'gnome', 'half-elf', 'halfling', 'half-orc', 'human', 'human variant', 'tiefling'];

    //Populate an array with all possible races not including 'random' for frontend use
    const racesWithoutRandom = ['dragonborn', 'half elf', 'half orc', 'dwarf', 'elf', 'gnome', 'half-elf', 'halfling', 'half-orc', 'human', 'human variant', 'tiefling'];

    //Initialize variable for race
    let race = '';

    //Ask user to enter a race or choose 'random'
    console.log("\nPlease enter what race you would like the npc to be or type 'random' for any race.\n\nOptions are:")
    let i = 0;
    //display all race options
    while(i < racesWithRandom.length) {
        console.log('-' + racesWithRandom[i]);
        i++;
        if(i === racesWithRandom.length) {
            i = 0;
            break;
        }
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
    checkIfInvalidOption(race, racesWithRandom, racesWithRandom, selection, inputMessage);

    //If the user wants a npc with a random race, set race equal to a random element in the racesWithoutRandom array
    if(race === 'random' || race === 'r') {
         race = racesWithoutRandom[Math.floor(Math.random() * racesWithoutRandom.length)];
    }

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
    ]

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

  //Create an if statment to handle dragonborn sub races
  if(race === 'dragonborn') {
    //List all dragon type options
    console.log("\nChoose dragon type or 'random'.\n\nPossible options are: ");
    let i = 0;
    console.log('\n---COMMON DRAGON TYPES---');
    while(i < commonDragonTypes.length) {
        console.log('-' + commonDragonTypes[i]);
        i++;
    }
    i = 0;
    console.log('\n---UNCOMMON DRAGON TYPES---');
    while(i < uncommonDragonTypes.length) {
      console.log('-' + uncommonDragonTypes[i]);
      i++;
    }
    i = 0;
    console.log('\n---RARE DRAGON TYPES---');
    while(i < commonDragonTypes.length) {
      console.log('-' + commonDragonTypes[i]);
      i++;
    }
    i = 0;
    console.log('\n---MYTHICAL DRAGON TYPES---');
    while(i < mythicalDragonTypes.length) {
      console.log('-' + mythicalDragonTypes[i]);
      i++;
    }

    console.log('\n')
    //Prompt user for sub race choice
    dragonType = prompt('ENTER DRAGON TYPE: ');

    //Create selection and input message for checkIfInvalidOption function parameters. Check the function to see how these parameters are used
    selection = 'DRAGON TYPE';
    inputMessage = `'${dragonType}' is not a valid option. Please enter a dragon type from the list.\n\nDragon types are: `;

    //Use checkIfInvalidOption fucntion to make sure the user entered a valid choice
    checkIfInvalidOption(dragonType, allDragonTypes, allDragonTypes, selection, inputMessage);

    //If the user wants a npc with a random sub race, set sub race equal to a random element in the dragonTypes array
    if(dragonType === 'random' || dragonType === 'r') {
      dragonType = dragonTypes[Math.floor(Math.random() * dragonTypes.length)];
    }

    //Return the dragon type selected
    return dragonType;
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
    checkIfInvalidOption(gender, gendersBackend, genders, selection, inputMessage);

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
const chooseAge = () => {

    //Initialize a variable for age
    let age = 0;

    //Prompt the user to input an age for their npc
    console.log("\nType your npc's age or type 'random'\n");
    age = prompt("ENTER AGE: ");

    //If input is a string, make sure it is lowercase
    if(typeof age === 'string') {
        age = age.toLowerCase();
    }

    //Check if user input is a number or not
    while(age != 'random' && age != 'r' && (typeof age != 'number' && age < -1)) {
        //If the input does not meet the requirements, prompt the user to input a new age for their npc
        console.log("\nType your npc's age or type 'random'. Cannot accept negative numbers.\n");
        age = prompt("ENTER AGE: ");
        age = age.toLowerCase();
    }

    //Return age selected
    return age;
}


// //----------FUNCTION TO CHOOSE NAME-----------
// const chooseName = () => {

//     //Initialize varable for the npc's full name
//     let fullName = '';

//     //Prompt the user to input a name for their npc
//     console.log("\nType your npc's full name or type 'random'\n");
//     fullName = prompt("ENTER FULL NAME: ");

//     //Check if user input is a string or not
//     while(typeof fullName != 'string') {
//         //If the input does not meet the requirements, prompt the user to input a new first name for their npc
//         console.log("\nType your npc's full name or type 'random'.\n");
//         fullName = prompt("ENTER FULL NAME: ");
//     }

//     //Return the name selected
//     return fullName;

// }



//----------FUNCTION TO CHOOSE NAME-----------
const chooseName = (race, gender, clan) => {

  //Initialize varable for the npc's first, last and full names
  let firstName = '';
  let lastName = '';
  let fullName = '';

  //Populate arrays for name syllables
  let numOfSyllables = 0;
  let dragonbornFirstNameSyllables = [];
  let dragonbornLastNameSyllables = [];


  //Prompt the user to input a name for their npc
  console.log("\nType your npc's full name or type 'random'\n");
  fullName = prompt("ENTER FULL NAME: ");

  //Check if user input is a string or not
  while(typeof fullName != 'string') {
      //If the input does not meet the requirements, prompt the user to input a new first name for their npc
      console.log("\nType your npc's full name or type 'random'.\n");
      fullName = prompt("ENTER FULL NAME: ");
  }

  //Create first and last names if the race is dragonborn and the user wants a random name. also account for gender.
  if(race === 'dragonborn') {
      if((fullName === 'random' || fullName === 'Random' || fullName === 'r' || fullName === 'R') && (gender === 'male')) {
          //Get random number of syllables for first name
          numOfSyllables = Math.floor(Math.random() * 3) + 1;
          //Populate an array with syllables for the first name
          dragonbornFirstNameSyllables = ['arj', 'han', 'bal', 'a', 'sar', 'bhar', 'ash', 'don', 'aar', 'ghesh', 'hes', 'kan', 'kriv', 'med', 'rash', 'me', 'hen', 'na', 'darr', 'pand', 'jed', 'pat', 'rin', 'rho', 'gar', 'sha', 'mash', 'she', 'dinn', 'tar', 'hun', 'tor', 'inn', 'klan', 'car', 'dria', 'ra', 'jin', 'cuam', 'pish', 'ti', 'rec', 'prur', 'nak', 'fep', 'hi', 'ko', 'mi', 'ath', 'ny', 'al', 'kel', 'cor', 'ash', 'kmed', 'dal', 'dol', 'mi', 'am', 'rid', 'u', 'am', 'phel', 'sho', 'rush', 'tir', 'is', 'sept', 'raah', 'ven', 'ki', 'as', 'en', 'cis' ];
          //Build first name
          for(let i = 0; i < numOfSyllables; i++) {
              firstName += dragonbornFirstNameSyllables[Math.floor(Math.random() * dragonbornFirstNameSyllables.length)];
          }
          //Get random number of syllables for last name
          numOfSyllables = Math.floor(Math.random() * 3) + 1;
          //Populate an array with syllables for the first name
          dragonbornLastNameSyllables = ['ar', 'xan', 'dra', 'vull', 'ur', 'o', 'vull', 'zor', 'wun', 'nax', 'mar', 'zi', 'ros', 'bha', 'vull', 'nar', 'rinn', 'inn', 'gor', 'ax', 'an', 'lorg', 'hull', 'vor', 'fras', 'wul', 'kax', 'rav', 'o', 'wun', 'ax', 'fro', 'bor', 'hid', 'aar', 'ar', 'a', 'vyu', 'qrin', 'qel', 'qull', 'ud', 'o', 'dor', 'im', 'ot', 'iz', 'a', 'vur', 'bal', 'ra', 'kas', 'jar', 'y', 'thas', 'ot', 'is', 'eth', 'na', 'da', 'ar', 'mord', 'hall', 'kil', 'zi', 're', 'kil', 'gar', 'na', 'sash', 'i', 'jar', 'yax', 'sul', 'crath'];
          //Build last name
          for(let i = 0; i < numOfSyllables; i++) {
              lastName += dragonbornLastNameSyllables[Math.floor(Math.random() * dragonbornLastNameSyllables.length)];
          }
      } else if((fullName === 'random' || fullName === 'Random' || fullName === 'r' || fullName === 'R') && (gender === 'female')) {
          numOfSyllables = Math.floor(Math.random() * 3) + 1;
          dragonbornFirstNameSyllables = ['ak', 'ra', 'bi', 'ri', 'da', 'ar', 'far', 'ri', 'deh', 'har', 'ann', 'ha', 'vi', 'ar', 'jhe', 'ri', 'ka', 'va', 'ko', 'rinn', 'mi', 'shann', 'na', 'la', 'per', 'ra', 'rai', 'ann', 'so', 'ra', 'su', 'rin', 'a', 'tha', 'va', 'u', 'ad', 'jit', 'gul', 'di', 'as', 'tir', 'jal', 'ear', 'gic', 'gi', 'pas', 'nye', 'cish', 'myi', 'phush', 'tesh', 'thil', 'xon', 'kid', 'icc', 'ic', 'mi', 'mash', 'clur', 'doth', 'ec', 'dri', 'pan', 'kas', 'yal', 'tac', 'am', 'es', 'klac', 'cak', 'yal', 'tet', 'or', 'ruc', 'ul', 'del', 'ak'];
          for(let i = 0; i < numOfSyllables; i++) {
              firstName += dragonbornFirstNameSyllables[Math.floor(Math.random() * dragonbornFirstNameSyllables.length)];
          }
          numOfSyllables = Math.floor(Math.random() * 3) + 1;
          dragonbornLastNameSyllables = ['ar', 'xan', 'dra', 'vull', 'ur', 'o', 'vull', 'zor', 'wun', 'nax', 'mar', 'zi', 'ros', 'bha', 'vull', 'nar', 'rinn', 'inn', 'gor', 'ax', 'an', 'lorg', 'hull', 'vor', 'fras', 'wul', 'kax', 'rav', 'o', 'wun', 'ax', 'fro', 'bor', 'hid', 'aar', 'ar', 'a', 'vyu', 'qrin', 'qel', 'qull', 'ud', 'o', 'dor', 'im', 'ot', 'iz', 'a', 'vur', 'bal', 'ra', 'kas', 'jar', 'y', 'thas', 'ot', 'is', 'eth', 'na', 'da', 'ar', 'mord', 'hall', 'kil', 'zi', 're', 'kil', 'gar', 'na', 'sash', 'i', 'jar', 'yax', 'sul', 'crath'];
          for(let i = 0; i < numOfSyllables; i++) {
              lastName += dragonbornLastNameSyllables[Math.floor(Math.random() * dragonbornLastNameSyllables.length)];
          }
      }
      //Build full name useing first and last names
      fullName = firstName + '' + lastName;
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
  checkIfInvalidOption(alignment, alignmentOptions, alignmentOptions, selection, inputMessage);

  //If the user wants a npc with a random alignment, set race equal to a random alignment
  if(alignment === 'random' || alignment === 'r') {
    alignment = alignmentsBackend[Math.floor(Math.random() * alignmentsBackend.length)];
  }

  //return the selected alignment
  return alignment;
}



//----------FUNCTION TO CHOOSE HEIGHT-----------
const chooseHeight = () => {

  //Initialize variables for height array and height
  //let heightArray = [];
  let height = 0;

  //Prompt user for height
  console.log('\nPlease type the height of your npc in centimeters');
  let heightString = prompt('ENTER HEIGHT: ');



  //Check to make sure input for heigt is valid
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
      height = parseInt(heightString, 10);
    }

  } while(heightCheck === false)

  //return height
  return height;

}



//----------FUNCTION TO CHOOSE WEIGHT-----------
const chooseWeight = () => {

  //Initialize variables for weight
  let weight = [];

  //Prompt user for weight
  console.log('\nPlease type the weight of your npc in pounds');
  let weightString = prompt('ENTER WEIGHT: ');



  //Check to make sure input for heigt is valid
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
      weight = parseInt(weightString, 10);
    }

  } while(weightCheck === false)

  //return weight
  return weight;

}



//----------FUNCTION TO CHOOSE SKIN COLOR-----------
const chooseskinColor = () => {

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



//----------FUNCTION TO CHOOSE STATS-----------
const chooseStats = () => {

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



//----------FUNCTION TO CHOOSE WEALTH-----------
const chooseWealth = () => {
  
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



//----------MAIN FUNCTION FOR NPC GENERATION-----------
const npcGen = () => {


    //Initialize variables
    let race = '';
    let subRace = '';
    let gender = '';
    let age = 0;
    let fullName = '';
    let alignment = '';
    let height = 0;
    let weight = 0;
    let skinColor = '';
    let dragonType = '';
    let eyeColor = ''; 
    let characterClass = '';
    let characterSubclass = '';
    let characterLevel = 0;
    let armorClass = 0;
    let healthPoints = 0;
    let proBonus = 0;
    let speed = 0;
    let selection = '';
    let inputMessage = '';




    //Populate an array with all possible eye colors
    const eyeColors = [
      'red', 
      'blue',
      'black',
      'brown',
      'gray',
      'green',
      'maroon',
      'purple',
      'violet',
      'white',
      'silver',
      'gold',
      'pink',
      'turquoise',
      'hazel']

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
      ]

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

    //Check if the user wants a custome npc or a completely random npc
    console.log("Do you want customize your npc? Type 'Y' for 'yes' or 'N' for 'no' then press enter.")
    const customizeOrNah = prompt('(Y/N): ');


    //If yes, begin npc creation by aquiring all characteristic from the user
    if(customizeOrNah === 'Y' || 'y') {

        //Call race function and set race equal to its return value
        race = chooseRace();
        console.log(race);

        //Call gender function and set gender equal to its return value
        gender = chooseGender();
        console.log(gender);

        //Call age function and set age equal to its return value
        age = chooseAge();
        console.log(age);

        //Call name function and set name equal to its return value
        fullName = chooseName();
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

        subRace = chooseSubRace(race);
        console.log(subRace)


        //Prompt user to input eye color
        console.log("\nType your npc's eye color or 'random'.\nOptions are: ");
        i = 0;
        while(i < eyeColors.length) {
            console.log(eyeColors[i]);
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

        checkIfInvalidOption(eyeColor, eyeColors, selection, inputMessage);


        createDragonBornNPC(
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

npcGen();





//Dragonborn npc object factory function
function createDragonBornNPC(
    race,
    gender,
    age,
    fullName,
    alignment, 
    height,
    weight,
    dragonType,
    eyeColor
  ) {

    str = Math.floor(Math.random() * 13) + 6;
    dex = Math.floor(Math.random() * 13) + 6;
    con = Math.floor(Math.random() * 13) + 6;
    int = Math.floor(Math.random() * 13) + 6;
    wis = Math.floor(Math.random() * 13) + 6;
    cha = Math.floor(Math.random() * 13) + 6;

    let dragonbornBreathWeapon = '';
    let lifeRange = '';

    let dragonTypes = []
    for(let i = 0; i < 100; i++) {
        dragonTypes.push('red');
    }
    for(let i = 0; i < 80; i++) {
        dragonTypes.push('blue');
    }
    for(let i = 0; i < 50; i++) {
        dragonTypes.push('black');
    }
    for(let i = 0; i < 60; i++) {
        dragonTypes.push('brown');
    }
    for(let i = 0; i < 60; i++) {
        dragonTypes.push('green');
    }
    for(let i = 0; i < 40; i++) {
        dragonTypes.push('gray');
    }
    for(let i = 0; i < 10; i++) {
        dragonTypes.push('gold');
    }
    for(let i = 0; i < 50; i++) {
        dragonTypes.push('yellow');
    }
    for(let i = 0; i < 5; i++) {
        dragonTypes.push('white');
    }
    for(let i = 0; i < 5; i++) {
        dragonTypes.push('purple');
    }
    for(let i = 0; i < 3; i++) {
        dragonTypes.push('pink');
    }
    for(let i = 0; i < 5; i++) {
        dragonTypes.push('silver');
    }
    for(let i = 0; i < 60; i++) {
        dragonTypes.push('orange');
    }
    for(let i = 0; i < 5; i++) {
        dragonTypes.push('teal');
    }  
    

    if(dragonType === 'red' || dragonType === 'gold' || dragonType === 'brass' || dragonType === 'obsidian' || dragonType === 'rattelyr' || dragonType === 'fire') {
        dragonbornBreathWeapon = 'fire';
    } else if(dragonType === 'blue' || dragonType === 'bronze' || dragonType === 'beast') {
        dragonbornBreathWeapon = 'lightning';
    } else if(dragonType === 'black' || dragonType === 'brown' || dragonType === 'gray' || dragonType === 'copper' || dragonType === 'orium') {
        dragonbornBreathWeapon = 'acid';
    } else if(dragonType === 'green' || dragonType === 'hex' || dragonType === 'nature') {
        dragonbornBreathWeapon = 'poison';
    } else if(dragonType === 'silver' || dragonType === 'white') {
        dragonbornBreathWeapon = 'cold';
    } else if(dragonType === 'pink') {
        dragonbornBreathWeapon = 'bubble breath';
    } else if(dragonType === 'yellow') {
        dragonbornBreathWeapon = 'salt';
    } else if(dragonType === 'purple') {
        dragonbornBreathWeapon = 'energy';
    } else if(dragonType === 'orange') {
        dragonbornBreathWeapon = 'explosive saliva';
    } else if(dragonType === 'gray') {
        dragonbornBreathWeapon = 'caustic ooze';
    } else if(dragonType === 'turquoise') {
        dragonbornBreathWeapon = 'cloud of ozone';
    } else if(dragonType === 'aquamarine') {
        dragonbornBreathWeapon = 'cloud of ozone and disappear';
    } else if(dragonType === 'adamantine') {
        dragonbornBreathWeapon = ['white fire', 'hold monster gas'];
    } else if(dragonType === 'cobalt') {
        dragonbornBreathWeapon = 'magnetic force';
    } else if(dragonType === 'mercury') {
        dragonbornBreathWeapon = 'yellow light';
    } else if(dragonType === 'mithral') {
        dragonbornBreathWeapon = 'mithral shard';
    } else if(dragonType === 'orium') {
        dragonbornBreathWeapon = 'cloud of ozone and disappear';
    } else if(dragonType === 'steel') {
        dragonbornBreathWeapon = 'cube of acid gas';
    } else if(dragonType === 'amethyst' || dragonType === 'axial' || dragonType === 'etherial' || dragonType === 'force') {
        dragonbornBreathWeapon = 'force';
    } else if(dragonType === 'crystal') {
        dragonbornBreathWeapon = 'blinding light';
    } else if(dragonType === 'emerald') {
        dragonbornBreathWeapon = 'burst of wind';
    } else if(dragonType === 'sapphire') {
        dragonbornBreathWeapon = 'panicking sound';
    } else if(dragonType === 'topaz') {
        dragonbornBreathWeapon = 'dehydration';
    } else if(dragonType === 'chromium') {
        dragonbornBreathWeapon = ['ice', 'freezing crystals'];
    } else if(dragonType === 'iron') {
        dragonbornBreathWeapon = ['superheated sparks', 'sleep gase'];
    } else if(dragonType === 'nickel') {
        dragonbornBreathWeapon = 'corrosive gas';
    } else if(dragonType === 'tungsten') {
        dragonbornBreathWeapon = 'hot sand';
    } else if(dragonType === 'shadow') {
        dragonbornBreathWeapon = 'energy-draining shadows';
    } else if(dragonType === 'arboreal') {
        dragonbornBreathWeapon = 'razor-sharp thorns';
    } else if(dragonType === 'astral') {
        dragonbornBreathWeapon = ['dismissal effect', 'scouring dust'];
    } else if(dragonType === 'battle') {
        dragonbornBreathWeapon = ['sonic energy', 'fear gas'];
    } else if(dragonType === 'chaos') {
        dragonbornBreathWeapon = ['random elemental blast', 'confusion gas'];
    } else if(dragonType === 'chole') {
        dragonbornBreathWeapon = 'poisonous insanity vapors';
    } else if(dragonType === 'concordant') {
        dragonbornBreathWeapon = 'antithetical energy';
    } else if(dragonType === 'ectoplasmic') {
        dragonbornBreathWeapon = ['white fire', 'sticky ectoplasm'];
    } else if(dragonType === 'elysian') {
        dragonbornBreathWeapon = ['sonic energy', 'inebriation gas'];
    } else if(dragonType === 'gloom') {
        dragonbornBreathWeapon = 'apathy gas';
    } else if(dragonType === 'howling') {
        dragonbornBreathWeapon = ['howling sound', 'maddening wails'];
    } else if(dragonType === 'kodragon') {
        dragonbornBreathWeapon = ['shrinking', 'reverse shrinking'];
    } else if(dragonType === 'oceanus') {
        dragonbornBreathWeapon = ['lightning', 'tranquility gas'];
    } else if(dragonType === 'pyroclastic') {
        dragonbornBreathWeapon = ['super heated ash with crushing sonic force', 'disintegrating line'];
    } else if(dragonType === 'radiant') {
        dragonbornBreathWeapon = ['force', 'light'];
    } else if(dragonType === 'rust') {
        dragonbornBreathWeapon = 'acid', 'rusting liquid';
    } else if(dragonType === 'styx') {
        dragonbornBreathWeapon = ['acid', 'stupefying gas'];
    }  else if(dragonType === 'tarterian') {
        dragonbornBreathWeapon = ['disruptive force', 'will-sapping gas'];
    } else if(dragonType === 'hellfire') {
        dragonbornBreathWeapon = 'infernal flame';
    } else if(dragonType === 'deep') {
        dragonbornBreathWeapon = 'flesh-corrosive gas';
    } else if(dragonType === 'fang') {
        dragonbornBreathWeapon = 'none';
    } else if(dragonType === 'song') {
        dragonbornBreathWeapon = 'electrically charged gas';
    } else if(dragonType === 'incarnum') {
        dragonbornBreathWeapon = 'incarnum energy';
    } else if(dragonType === 'sand') {
        dragonbornBreathWeapon = 'flaywind sand';
    } else if(dragonType === 'prismatic') {
        dragonbornBreathWeapon = 'prismatic spray';
    } else if(dragonType === 'time') {
        dragonbornBreathWeapon = ['ravaging time', 'time expulsion'];
    }  else if(dragonType === 'tome') {
        dragonbornBreathWeapon = 'elemental energy';
    } else if(dragonType === 'cerilian') {
        dragonbornBreathWeapon = 'burning venom';
    } else if(dragonType === 'sun') {
        dragonbornBreathWeapon = 'spitfire';
    } else if(dragonType === 'moon') {
        dragonbornBreathWeapon = 'black frost';
    } else if(dragonType === 'stellar') {
        dragonbornBreathWeapon = 'translate to memory';
    } else if(dragonType === 'air') {
        dragonbornBreathWeapon = 'scalding breath';
    } else if (dragonType === 'water') {
      dragonbornBreathWeapon = 'steam breath';
    } else if (dragonType === 'forest') {
      dragonbornBreathWeapon = 'breath of the forest';
    } else if (dragonType === 'skeleton') {
      dragonbornBreathWeapon = ['bone shard breath', 'noxious breath'];
    } else if (dragonType === 'brainstealer') {
      dragonbornBreathWeapon = 'mind blast';
    }
      

    let dragonbornEyeColors = []
    for(let i = 0; i < 50; i++) {
        dragonbornEyeColors.push('red');
    }
    for(let i = 0; i < 80; i++) {
        dragonbornEyeColors.push('blue');
    }
    for(let i = 0; i < 10; i++) {
        dragonbornEyeColors.push('black');
    }
    for(let i = 0; i < 100; i++) {
        dragonbornEyeColors.push('brown');
    }
    for(let i = 0; i < 70; i++) {
        dragonbornEyeColors.push('green');
    }
    for(let i = 0; i < 60; i++) {
        dragonbornEyeColors.push('gray');
    }
    for(let i = 0; i < 20; i++) {
        dragonbornEyeColors.push('gold');
    }
    for(let i = 0; i < 10; i++) {
        dragonbornEyeColors.push('silver');
    }
    for(let i = 0; i < 5; i++) {
        dragonbornEyeColors.push('white');
    }
    for(let i = 0; i < 5; i++) {
        dragonbornEyeColors.push('purple');
    }
    for(let i = 0; i < 3; i++) {
        dragonbornEyeColors.push('pink');
    }
    for(let i = 0; i < 20; i++) {
        dragonbornEyeColors.push('orange');
    }
    for(let i = 0; i < 5; i++) {
        dragonbornEyeColors.push('teal');
    }
    for(let i = 0; i < 30; i++) {
        dragonbornEyeColors.push('yellow');
    }
    for(let i = 0; i < 40; i++) {
        dragonbornEyeColors.push('hazel');
    }

    let dragonbornFirstNameSyllables = [];
    let dragonbornLastNameSyllables = [];
  
          //series of if statements to provide range for height and weight depending on gender and age
          //height and weight for children dragonborn is roughly the same regardless of gender
          if (age === 1) {
            lifeRange = 'infant';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 25) + 40;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 7) + 5;
            }
          } else if (age === 2) {
            lifeRange = 'toddler';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 20) + 60;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 5) + 15;
            }
          } else if (age === 3) {
            lifeRange = 'toddler';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 25) + 65;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 10) + 20;
            }
          } else if (age === 4) {
            lifeRange = 'toddler';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 30) + 75;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 15) + 30;
            }
          } else if (age === 5) {
            lifeRange = 'child';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 30) + 85;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 15) + 40;
            }
          } else if (age === 6) {
            lifeRange = 'child';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 30) + 95;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 15) + 50;
            }
          } else if (age === 7) {
            lifeRange = 'child';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 30) + 110;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 20) + 60;
            }
          } else if (age > 7 && age < 13) {
            lifeRange = 'child';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 25) + 140;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 40) + 80;
            }
          } 
          
          //account for height and weight of adolecent male dragonborn
          else if (age > 12 && age < 20 && gender === 'male') {
            lifeRange = 'teenager';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 60) + 170;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 90) + 115;
            }
          } 
          //account for height and weight of young adult male dragonborn
          else if (age > 19 && age < 35 && gender === 'male') {
            lifeRange = 'young dragonborn';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 60) + 190;
            }
            if (typeof weight === 'undefined' ) {
              weight = Math.floor(Math.random() * 110) + 200;
            }
          } 
          //account for height and weight of middle-aged male dragonborn
          else if (age > 34 && age < 55 && gender === 'male') {
            lifeRange = 'middle-aged';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 60) + 190;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 115) + 220;
            }
          } 
          //account for height and weight of elderly male dragonborn
          else if (age > 54 && age < 80 && gender === 'male') {
            lifeRange = 'elderly';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 45) + 185;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 100) + 190;
            }
          } 
          //account for height and weight of very old male dragonborn
          else if (age > 79 && age < 100 && gender === 'male') {
            lifeRange = 'very old';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 40) + 180;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 80) + 160;
            }
          }
          //account for the height and weight of ancient male dragonborn
          else if(age > 100) {
            lifeRange = 'ancient';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 40) + 180;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 80) + 160;
            }
          }

          //account for height and weight of female dragonborn
          //account for height and weight of adolecent female dragonborn
          else if (age > 12 && age < 20 && gender === 'female') {
            lifeRange = 'teenager';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 60) + 140;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 70) + 115;
            }
          } 
          //account for height and weight of young adult female dragonborn
          else if (age > 19 && age < 35 && gender === 'female') {
            lifeRange = 'young dragonborn';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 50) + 160;
            }
            if (typeof weight === 'undefined' ) {
              weight = Math.floor(Math.random() * 80) + 160;
            }
          } 
          //account for height and weight of middle-aged female dragonborn
          else if (age > 34 && age < 55 && gender === 'female') {
            lifeRange = 'middle-aged';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 50) + 160;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 100) + 160;
            }
          } 
          //account for height and weight of elderly female dragonborn
          else if (age > 54 && age < 80 && gender === 'female') {
            lifeRange = 'elderly';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 40) + 160;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 100) + 145;
            }
          } 
          //account for height and weight of very old female dragonborn
          else if (age > 79 && age < 100 && gender === 'female') {
            lifeRange = 'very old';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 40) + 140;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 80) + 130;
            }
          }
          //account for height and weight of ancient female dragonborn
          else if(age > 100) {
            lifeRange = 'ancient';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 40) + 140;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 80) + 130;
            }
          }

          str += 2;
          con += 1;
          speed = 30;
  
        console.log(
          '\nRace: ' + race + '\nGender: ' + gender + '\nAge: ' + 
          age + '\nLife Range: ' + lifeRange + '\nName: ' + fullName + '\nAlignment: ' + alignment + '\nHeight: ' + 
          height + ' cm' + '\nWeight: ' + weight + ' lbs' + '\nDragon Type: ' 
          + dragonType + '\nEye Color: ' + eyeColor +
          '\nWalking Speed: ' + speed + '\nSTR: ' + str + '\nDEX: ' + dex + 
          '\nCON: ' + con + '\nINT: ' + int + '\nWIS: ' + wis + '\nCHA: ' + cha);

    }


    
  

  