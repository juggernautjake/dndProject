//Allow for prompts in the program for testing purposes
const prompt = require('prompt-sync')();

//initialize and define all needed functions below

//-------------FUNCTION TO CHECK IT CHOICE IS VALID-------------
let checkIfInvalidOption = (input, arrayToCheckBackend, arrayToCheckFrontend, selection, message) => {
    let k = 0;
    let t = 0;
    while(input != arrayToCheckBackend[k]) {
            if(k === arrayToCheckBackend.length - 1) {
                console.log(`${message}`);
                while(t < arrayToCheckFrontend.length) {
                    console.log(arrayToCheckFrontend[t]);
                    t++;
                    if(t === arrayToCheckFrontend.length) {
                        t = 0;
                        break;
                    }
                }
                console.log("\n")
                input = prompt(`ENTER ${selection}: `);
                if(typeof input === 'string') {
                    input = input.toLowerCase();
                }
                k = 0;
            } else {
              k++;
            }
        }
    if(input === 'R' || input === 'r' || input === 'Random' || input === 'random') {
      input = arrayToCheckFrontend[Math.floor(Math.random() * arrayToCheckFrontend.length - 1) + 1];
    }
    return input;
}