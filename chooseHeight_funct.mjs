//Allow for prompts in the program for testing purposes
const prompt = require('prompt-sync')();



//----------FUNCTION TO CHOOSE HEIGHT-----------
const chooseHeight = () => {

  //Initialize variables for height
  let heightInMetric = 0;
  let heightInEnglish = 0;
  let heightInEnglishFeet = 0;
  let heightInEnglishInches = 0;

  //Prompt user for height
  console.log('\nPlease type the height of your npc in centimeters');
  let heightString = prompt('ENTER HEIGHT: ');



  //Check to make sure input for height is valid
  let i = 0;
  let heightCheck = true;
  //Check needs to run at least once
  do {
    for(i = 0; i < heightString.length; i++) {
      //Check against all numeral digits
      if(heightString[i] != '0' && heightString[i] != '1' && heightString[i] != '2' && heightString[i] != '3' && heightString[i] != '4' && heightString[i] != '5' && heightString[i] != '6' && heightString[i] != '7' && heightString[i] != '8' && heightString[i] != '9') {
        i = 0;
        heightCheck = false;
        console.log('The input given is not valid. Only numbers greater than zero are valid');
        heightString = '';
        heightString = prompt('ENTER HEIGHT: ');
        
      } 

      //If the for loop checks every element in the string and finds them all to be numeral digits, set heightCheck equal to true
      if(i === heightString.length - 1) {
          heightCheck = true;
      }
    }
    //If heightCheck is true, turn the input string into a number data type using the 'parseInt()' function
    if(heightCheck = true) {
        heightInMetric = parseInt(heightString, 10);
        heightInEnglish = Math.round(heightInMetric / 2.54);
        heightInEnglishFeet = Math.floor(heightInEnglish / 12);
        heightInEnglishInches = (heightInEnglish % 12);
    }

  } while(heightCheck === false)

  //return height in cm and in feet/inches
  return heightInMetric + ' centimeters (' + heightInEnglishFeet + ' feet ' + heightInEnglishInches + ' inches)';
}
