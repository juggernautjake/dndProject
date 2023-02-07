  //Create array to hold all six stat values
  let statsArray =[];

  //for loop to get 6 stats
  let current = 0;
  for(let i = 0; i < 7; i++) {
    current = Math.floor(Math.random() * 13) + 6;
    statsArray.push(current);
  }
  statsArray.sort(function(a, b) {
    return b - a;
  });

  console.log(statsArray);