//Allow for prompts in the program for testing purposes
const prompt = require('prompt-sync')();



//Dragonborn npc object factory function
function createRandomDragonBornNPC(
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

    let FirstNameSyllables = [];
    let LastNameSyllables = [];
  
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
          height + '\nWeight: ' + weight + '\nDragon Type: ' 
          + dragonType + '\nEye Color: ' + eyeColor +
          '\nWalking Speed: ' + speed + '\nSTR: ' + str + '\nDEX: ' + dex + 
          '\nCON: ' + con + '\nINT: ' + int + '\nWIS: ' + wis + '\nCHA: ' + cha);
        
  }