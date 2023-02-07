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
  