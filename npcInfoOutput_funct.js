//Allow for prompts in the program for testing purposes
const prompt = require('prompt-sync')();

//----------FUNCTION FOR NPC INFO OUTPUT-----------
const npcInfoOutput = (race, subRace, gender, age, fullName, alignment, height, weight, skinColor, eyeColor, characterClass, characterLevel, armorClass, healthPoints, profBonus, npcStats, speed) => {
    race = race.toLowerCase();
    if(race === 'aarakocra') {
      race = (race.charAt(0).toUpperCase() + race.slice(1))
      console.log(
        '\nRace: ' + race + '\nGender: ' + gender + '\nAge: ' + 
        age /* + '\nLife Range: ' + lifeRange*/ + '\nName: ' + fullName + '\nAlignment: ' + alignment + '\nHeight: ' + 
        height + '\nWeight: ' + weight + '\nBird Type: ' 
        + subRace + '\nEye Color: ' + eyeColor +
        '\nWalking Speed: ' + 25 + '\nFlying Speed: ' + 50 + '\nSTR: ' + npcStats.str + '\nDEX: ' + npcStats.dex + 
        '\nCON: ' + npcStats.con + '\nINT: ' + npcStats.int + '\nWIS: ' + npcStats.wis + '\nCHA: ' + npcStats.cha);
    } else if(race === 'dragonborn') {
      console.log(
        '\nRace: ' + race + '\nGender: ' + gender + '\nAge: ' + 
        age /* + '\nLife Range: ' + lifeRange */ + '\nName: ' + fullName + '\nAlignment: ' + alignment + '\nHeight: ' + 
        height + '\nWeight: ' + weight + '\nDragon Type: ' 
        + subRace + '\nEye Color: ' + eyeColor +
        '\nWalking Speed: ' + 30 + '\nSTR: ' + npcStats.str + '\nDEX: ' + npcStats.dex + 
        '\nCON: ' + npcStats.con + '\nINT: ' + npcStats.int + '\nWIS: ' + npcStats.wis + '\nCHA: ' + npcStats.cha);
    }
  }