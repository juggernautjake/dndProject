//Allow for prompts in the program for testing purposes
const prompt = require('prompt-sync')();


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

