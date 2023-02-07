//Allow for prompts in the program for testing purposes
const prompt = require('prompt-sync')();



//----------FUNCTION TO CHOOSE NAME-----------
const chooseName = (race, gender, clan) => {

    //Initialize varable for the npc's first, last and full names
    let firstName = '';
    let lastName = '';
    let fullName = '';
  
    //Populate arrays for name syllables
    let numOfSyllables = 0;
    let FirstNameSyllables = [];
    let LastNameSyllables = [];
  
    race = race.toLowerCase();
  
    //Prompt the user to input a name for their npc
    console.log("\nType your npc's full name or type 'random'\n");
    fullName = prompt("ENTER FULL NAME: ");
  
    fullName = fullName.toLowerCase();
  
    //Create first and last names for any npc from any race if the user wants a random name. also account for gender.
    if(race === 'aarakocra') {
      if((fullName === 'random' || fullName === 'r') && (gender === 'male')) {
        //Get random number of syllables for first name
        numOfSyllables = Math.floor(Math.random() * 2) + 1;
        //Populate an array with syllables for the first name
        FirstNameSyllables = ['aer','aur', 'deek', 'ek', 'errk', 'heehk', 'ik', 'ki', 'kleeck', 'oorr', 'ouss', 'quaf', 'quierk', 'sall', 'eek', 'urr', 'zeed', 'gu', 'zi', 'as', 'qrak', 'qarc', 'ak', 'ick', 'khir', 'raar', 'dek', 'kee', 'cig', 'rhek', 'kaac', 'qlu', 'caal', 'giss', 'zice', 'ill', 'grer', 'res', 'klec', 'irrk', 'ir', 'rark', 'dour', 'ri', 'cek', 'ka', 'err', 'qhek', 'ik', 'rher', 'qil', 'qu', 'cruf', 'rel', 'cuf', 'qirrk', 'af', 'kre', 'qerrk', 'gra', 'ak', 'el', 'kel', 'ru', 'cluc', 'ci', 'aer', 'deek', 'kek', 'errk', 'heehk', 'kleeck', 'oorr', 'quaf', 'sal', 'leek'];
        //Build first name
        for(let i = 0; i < numOfSyllables; i++) {
            firstName += FirstNameSyllables[Math.round(Math.random() * FirstNameSyllables.length)];
        }
        //Build full name useing first and last names
        fullName = (firstName.charAt(0).toUpperCase() + firstName.slice(1)) + ' ' + (lastName.charAt(0).toUpperCase() + lastName.slice(1));
    } else if((fullName === 'random' || fullName === 'r') && (gender === 'female')) {
        numOfSyllables = Math.floor(Math.random() * 2) + 1;
        FirstNameSyllables = ['ek', 'kark', 'af', 'zic', 'ce', 'arrk', 'kri', 'rhuck', 'kha', 'ciss', 'qha', 'kiss', 'har', 'ries', 'clurr', 'si', 'qle', 'la', 'qhig', 'uk', 'kif', 'zu', 'ier', 'guc', 'cihk', 're', 'krerk', 'ric', 'cark', 'cuf', 'zar', 'ral', 'klarc', 'kuss', 'karc', 'iqe', 'kaec', 'cerrk', 'khai', 'ack', 'su', 'erk', 'rhek', 'kaac', 'har', 'ries', 'kru', 'ra', 'cra', 'cef', 'hi', 'caf', 'yes', 'clirr', 'kliq', 'erk', 'ai', 'as'];
        for(let i = 0; i < numOfSyllables; i++) {
            firstName += FirstNameSyllables[Math.round(Math.random() * FirstNameSyllables.length)];
        }
        //Build full name useing first and last names
        fullName = (firstName.charAt(0).toUpperCase() + firstName.slice(1));
      }
    }else if(race === 'dragonborn') {
      if((fullName === 'random' || fullName === 'r') && (gender === 'male')) {
          //Get random number of syllables for first name
          numOfSyllables = Math.floor(Math.random() * 3) + 2;
          //Populate an array with syllables for the first name
          FirstNameSyllables = ['arj', 'han', 'bal', 'sar', 'bhar', 'ash', 'don', 'aar', 'ghesh', 'hes', 'kan', 'kriv', 'med', 'rash', 'me', 'hen', 'na', 'darr', 'pand', 'jed', 'pat', 'rin', 'rho', 'gar', 'sha', 'mash', 'she', 'dinn', 'tar', 'hun', 'tor', 'inn', 'klan', 'car', 'dria', 'ra', 'jin', 'cuam', 'pish', 'ti', 'rec', 'prur', 'nak', 'fep', 'hi', 'ko', 'mi', 'ath', 'ny', 'al', 'kel', 'cor', 'ash', 'kmed', 'dal', 'dol', 'mi', 'am', 'rid', 'am', 'phel', 'sho', 'rush', 'tir', 'is', 'sept', 'raah', 'ven', 'ki', 'as', 'en', 'cis' ];
          //Build first name
          for(let i = 0; i < numOfSyllables; i++) {
              firstName += FirstNameSyllables[Math.floor(Math.random() * FirstNameSyllables.length)];
          }
          //Get random number of syllables for last name
          numOfSyllables = Math.floor(Math.random() * 3) + 2;
          //Populate an array with syllables for the first name
          LastNameSyllables = ['ar', 'xan', 'dra', 'vull', 'ur', 'vull', 'zor', 'wun', 'nax', 'mar', 'zi', 'ros', 'bha', 'vull', 'nar', 'rinn', 'inn', 'gor', 'ax', 'an', 'lorg', 'hull', 'vor', 'fras', 'wul', 'kax', 'rav', 'wun', 'ax', 'fro', 'bor', 'hid', 'aar', 'ar', 'vyu', 'qrin', 'qel', 'qull', 'ud', 'dor', 'im', 'ot', 'iz', 'vur', 'bal', 'ra', 'kas', 'jar', 'thas', 'ot', 'is', 'eth', 'na', 'da', 'ar', 'mord', 'hall', 'kil', 'zi', 're', 'kil', 'gar', 'na', 'sash', 'i', 'jar', 'yax', 'sul', 'crath'];
          //Build last name
          for(let i = 0; i < numOfSyllables; i++) {
              lastName += LastNameSyllables[Math.floor(Math.random() * LastNameSyllables.length)];
          }
          //Build full name useing first and last names
          fullName = (firstName.charAt(0).toUpperCase() + firstName.slice(1)) + ' ' + (lastName.charAt(0).toUpperCase() + lastName.slice(1));
      } else if((fullName === 'random' || fullName === 'r') && (gender === 'female')) {
          numOfSyllables = Math.floor(Math.random() * 3) + 2;
          FirstNameSyllables = ['ak', 'ra', 'bi', 'ri', 'da', 'ar', 'far', 'ri', 'deh', 'har', 'ann', 'ha', 'vi', 'ar', 'jhe', 'ri', 'ka', 'va', 'ko', 'rinn', 'mi', 'shann', 'na', 'la', 'per', 'ra', 'rai', 'ann', 'so', 'ra', 'su', 'rin', 'tha', 'va', 'ad', 'jit', 'gul', 'di', 'as', 'tir', 'jal', 'ear', 'gic', 'gi', 'pas', 'nye', 'cish', 'myi', 'phush', 'tesh', 'thil', 'xon', 'kid', 'icc', 'ic', 'mi', 'mash', 'clur', 'doth', 'ec', 'dri', 'pan', 'kas', 'yal', 'tac', 'am', 'es', 'klac', 'cak', 'yal', 'tet', 'or', 'ruc', 'ul', 'del', 'ak'];
          for(let i = 0; i < numOfSyllables; i++) {
              firstName += FirstNameSyllables[Math.floor(Math.random() * FirstNameSyllables.length)];
          }
          numOfSyllables = Math.floor(Math.random() * 3) + 2;
          LastNameSyllables = ['ar', 'xan', 'dra', 'vull', 'ur', 'vull', 'zor', 'wun', 'nax', 'mar', 'zi', 'ros', 'bha', 'vull', 'nar', 'rinn', 'inn', 'gor', 'ax', 'an', 'lorg', 'hull', 'vor', 'fras', 'wul', 'kax', 'rav', 'wun', 'ax', 'fro', 'bor', 'hid', 'aar', 'ar', 'vyu', 'qrin', 'qel', 'qull', 'ud', 'dor', 'im', 'ot', 'iz', 'vur', 'bal', 'ra', 'kas', 'jar', 'thas', 'ot', 'is', 'eth', 'na', 'da', 'ar', 'mord', 'hall', 'kil', 'zi', 're', 'kil', 'gar', 'na', 'sash', 'jar', 'yax', 'sul', 'crath'];
          for(let i = 0; i < numOfSyllables; i++) {
              lastName += LastNameSyllables[Math.floor(Math.random() * LastNameSyllables.length)];
          }
          //Build full name useing first and last names
          fullName = (firstName.charAt(0).toUpperCase() + firstName.slice(1)) + ' ' + (lastName.charAt(0).toUpperCase() + lastName.slice(1));
      }
    }
  
    //Return the name selected
    return fullName;
  
  }