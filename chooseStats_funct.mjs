//Allow for prompts in the program for testing purposes
const prompt = require('prompt-sync')();


//----------FUNCTION TO CHOOSE STATS-----------
const chooseStats = (race, subRace) => {
    //Initialize variables for stats
    let str =  Math.floor(Math.random() * 13) + 6,
        dex =  Math.floor(Math.random() * 13) + 6,
        con =  Math.floor(Math.random() * 13) + 6,
        int =  Math.floor(Math.random() * 13) + 6,
        wis =  Math.floor(Math.random() * 13) + 6,
        cha =  Math.floor(Math.random() * 13) + 6;
  
    race = race.toLowerCase();
    if(race === 'aarakocra') {
      dex += 2;
      wis += 1;
    } else if(race === 'dragonborn') {
      str += 2;
      con += 1;
    }
  
    return {str, dex, con, int, wis, cha};
  }
  