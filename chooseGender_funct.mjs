//Allow for prompts in the program for testing purposes
const prompt = require('prompt-sync')();

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
    gender = checkIfInvalidOption(gender, gendersBackend, genders, selection, inputMessage);

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