//Create an object facotry that will produce one or more npc's for a dnd campaign
//All npc's need a race, gender, physical features, age, alignment, occupation, stats, level, etc...


var customizeOrNah = window.prompt("what is your name?");

//create npc object factory function
function createDragonBornNPC(
    race,
    gender,
    age,
    lifeRange,
    firstName,
    lastName,
    alignment,
    height,
    weight,
    scale_color,
    hair_color,
    eye_color,
    speed,
    str,
    dex,
    con,
    int,
    wis,
    cha
  ) {
    if(typeof race === 'string') {
      race = race.toLowerCase();
    }
    const races = ['dragonborn', 'dragon born', 'dragon-born']; //, 'dwarf', 'elf', 'gnome', 'half-elf','half elf', 'halfling', 'half-orc', 'half orc', 'human', 'human variant', 'tiefling'];
    const numRaces = races.length;
    const randomRace = races[Math.floor(Math.random() * numRaces)];
    const genders = ['male', 'female'];
    lifeRange = 'infant';
    let dragonbornScaleColors = []
    for(let i = 0; i < 100; i++) {
        dragonbornScaleColors.push('red');
    }
    for(let i = 0; i < 80; i++) {
        dragonbornScaleColors.push('blue');
    }
    for(let i = 0; i < 50; i++) {
        dragonbornScaleColors.push('black');
    }
    for(let i = 0; i < 60; i++) {
        dragonbornScaleColors.push('brown');
    }
    for(let i = 0; i < 60; i++) {
        dragonbornScaleColors.push('green');
    }
    for(let i = 0; i < 40; i++) {
        dragonbornScaleColors.push('grey');
    }
    for(let i = 0; i < 10; i++) {
        dragonbornScaleColors.push('gold');
    }
    for(let i = 0; i < 50; i++) {
        dragonbornScaleColors.push('yellow');
    }
    for(let i = 0; i < 5; i++) {
        dragonbornScaleColors.push('white');
    }
    for(let i = 0; i < 5; i++) {
        dragonbornScaleColors.push('purple');
    }
    for(let i = 0; i < 3; i++) {
        dragonbornScaleColors.push('pink');
    }
    for(let i = 0; i < 5; i++) {
        dragonbornScaleColors.push('silver');
    }
    for(let i = 0; i < 60; i++) {
        dragonbornScaleColors.push('orange');
    }
    for(let i = 0; i < 5; i++) {
        dragonbornScaleColors.push('teal');
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
        dragonbornEyeColors.push('grey');
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


    let dragonbornFirstNames = [];
    let dragonbornLastNames = [];
    //check if there is no parameter for race
    if(typeof race === 'undefined') {
      race = randomRace;
    }

    if(race === 'dragon born' || race === 'dragon-born'){
        race = 'dragonborn';
    }
  
    //check to make sure that the parameter for race matches an element in the races array
    let i = 0;
    var foundRace = false;
    while(i < numRaces) {
        if(race != races[i]) {
            i++;
        } else {
            foundRace = true;
            break;
        }
    }
  
    //if the input does not match a race option, prompt the user to try again
    if(foundRace != true) {
        console.log('You did not enter a valid race option. Please try again.');
    }
  
    //switch block to check which race is being used to build the npc and then finish the character
    switch (race) {
        //Case for dragonborn race and variant spellings
      case 'dragonborn':
      case 'dragon born':
      case 'dragon-born':
        //check if gender parameter is given by user or not
        if (typeof gender === 'undefined') {
          gender = genders[Math.floor(Math.random() * genders.length)];
        }
        //check if age parameter or lifeRange parameter is given by user or not
        
        //if it is not, then select an age at random
        if (typeof age === 'undefined') {
            if(typeof lifefRange === 'undefined') {
                age = Math.floor(Math.random() * 100);
            } else if(lifeRange === 'infant') {
                age = 1;
            } else if(lifeRange === 'toddler') {
                age = Math.floor(Math.random() * 3) + 2;
            } else if(lifeRange === 'child') {
                age = Math.floor(Math.random() * 8) + 5;
            } else if(lifeRange === 'teenager') {
                age = Math.floor(Math.random() * 7) + 13;
            } else if(lifeRange === 'young adult') {
                age = Math.floor(Math.random() * 15) + 20;
            } else if(lifeRange === 'middle-aged') {
                age = Math.floor(Math.random() * 20) + 35;
            } else if(lifeRange === 'elderly') {
                age = Math.floor(Math.random() * 25) + 55;
            } else if(lifeRange === 'decrepit') {
                age = Math.floor(Math.random() * 21) + 80;
            }
        }

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
          //account for height and weight of decrepit male dragonborn
          else if (age > 79 && age < 100 && gender === 'male') {
            lifeRange = 'decrepit';
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
          //account for height and weight of decrepit female dragonborn
          else if (age > 79 && age < 100 && gender === 'female') {
            lifeRange = 'decrepit';
            if (typeof height === 'undefined') {
              height = Math.floor(Math.random() * 40) + 140;
            }
            if (typeof weight === 'undefined') {
              weight = Math.floor(Math.random() * 80) + 130;
            }
          }

    
        firstName = 'Steve';
        lastName = 'Scaletale';
        alignment = 'chaotic/good';
        scale_color = dragonbornScaleColors[Math.floor(Math.random() * dragonbornScaleColors.length)];
        hair_color = 'none';
        eye_color = dragonbornEyeColors[Math.floor(Math.random() * dragonbornEyeColors.length)];
        speed = 30;
        str = Math.floor(Math.random() * 12) + 7;
        dex = Math.floor(Math.random() * 12) + 7;
        con = Math.floor(Math.random() * 12) + 7;
        int = Math.floor(Math.random() * 12) + 7;
        wis = Math.floor(Math.random() * 12) + 7;
        cha = Math.floor(Math.random() * 12) + 7;
  
        console.log(
          'Race: ' + race + '\nGender: ' + gender + '\nAge: ' + 
          age + '\nLife Range: ' + lifeRange + '\nName: ' + firstName + 
          ' ' + lastName + '\nAlignment: ' + alignment + '\nHeight: ' + 
          height + ' cm' + '\nWeight: ' + weight + ' lbs' + '\nScale Color: ' + scale_color +
          '\nHair Color: ' + hair_color + '\nEye Color: ' + eye_color +
          '\nWalking Speed: ' + speed + '\nSTR: ' + str + '\nDEX: ' + dex + 
          '\nCON: ' + con + '\nINT: ' + int + '\nWIS: ' + wis + '\nCHA: ' + cha);

        break;
    
      default:
        break;
    }
  }
  
createDragonBornNPC('dragonborn', 56);
  
  
  // let npcs = {
  //     _race: race,
  //     _gender: gender,
  //     _age: age,
  //     _name: {
  //         firstName: firstName,
  //         lastName: lastName
  //     },
  //     _alignment: alignment,
  //     _physical_features: {
  //         height: height,
  //         weight: weight,
  //         scale_color: scale_color,
  //         hair_color: hair_color,
  //         eye_color: eye_color},
  
  //     speed: speed,
  //     str: str,
  //     dex: dex,
  //     con: con,
  //     int: int,
  //     wis: wis,
  //     cha: cha,
  
  // }
  