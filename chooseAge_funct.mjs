//Allow for prompts in the program for testing purposes
const prompt = require('prompt-sync')();


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
        age = Math.floor(Math.random() * 40) + 1; 
        return age; 
      }
      else if (race === 'aasimar'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'aasimar'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'air genasi'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'astral elf'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'autognome'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'bugbear'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'centaur'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'centaur'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'changeling'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'deep gnome'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'dragonbonr'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'duergar'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'dwarf'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'earth genasi'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'eladrin'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'elf'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'fairy'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'firbolg'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'fire genasi'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'giff'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'githyanki'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'githzerai'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'gnome'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'goblin'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'goliath'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'grung'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'hadozee'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'half-elf'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'half-orc'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'halfling'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'harengon'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'hobgoblin'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'human'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'kalashtar'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'kender'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'kenku'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'kobold'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'leonin'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'lizardfolk'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'locathah'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'loxodon'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'minotaur'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'orc'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'owlin'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'plasmoid'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'satyr'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'sea elf'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'shadar-kai'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'shifter'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'simic hybrid'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'tabaxi'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'thri-kreen'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'tiefling'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'tortle'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'triton'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'vedalken'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'verdan'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'warforged'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'water genasi'){
        age = Math.floor(Math.random() * 100) + 1; 
        return age; 
      }
      else if (race === 'yuan-ti'){
        age = Math.floor(Math.random() * 100) + 1; 
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