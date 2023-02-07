//Allow for prompts in the program for testing purposes
const prompt = require('prompt-sync')();

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


      //Call npc info output function
      npcInfoOutput(race, subRace, gender, age, fullName, alignment, height, weight, skinColor, eyeColor, characterClass, characterLevel, armorClass, healthPoints, profBonus, npcStats, speed);

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