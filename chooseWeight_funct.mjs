//Allow for prompts in the program for testing purposes
const prompt = require('prompt-sync')();



//----------FUNCTION TO CHOOSE WEIGHT-----------
const chooseWeight = () => {

  //Initialize variables for weight
  let weightInMetric = 0;
  let weightInEnglish = 0;
  let weightInEnglishFeet = 0;
  let weightInEnglishInches = 0;

//Prompt user for weight
console.log('\nPlease type the weight of your npc in kilograms');
let weightString = prompt('ENTER WEIGHT: ');



//Check to make sure input for weight is valid
let i = 0;
let weightCheck = true;
//Check needs to run at least once
do {
  for(i = 0; i < weightString.length; i++) {
    //Check against all numeral digits
    if(weightString[i] != '0' && weightString[i] != '1' && weightString[i] != '2' && weightString[i] != '3' && weightString[i] != '4' && weightString[i] != '5' && weightString[i] != '6' && weightString[i] != '7' && weightString[i] != '8' && weightString[i] != '9') {
      weightCheck = false;
      console.log('The input given is not valid. Only numbers greater than zero are valid');
      weightString = '';
      weightString = prompt('ENTER WEIGHT: ');
      break;
    } 
    //If the for loop checks every element in the string and finds them all to be numeral digits, set weightCheck equal to true
    if(i === weightString.length - 1) {
      weightCheck = true;
    }
  }
  //If weightCheck is true, turn the input string into a number data type using the 'parseInt()' function
  if(weightCheck = true) {
      weightInMetric = parseInt(weightString, 10);
      weightInEnglishPounds = Math.round(weightInMetric * 2.20462);
  }

} while(weightCheck === false)

//return height in cm and in feet/inches
return weightInMetric + ' kilograms (' + weightInEnglishPounds + ' lbs)';
}