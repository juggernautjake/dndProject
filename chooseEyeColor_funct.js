//Allow for prompts in the program for testing purposes
const prompt = require('prompt-sync')();


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