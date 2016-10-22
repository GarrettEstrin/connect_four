// Custom JavaScript by Garrett Estrin | GarrettEstrin.com

// Game object
var game = {};
// Fades in all body elements
$('body').fadeIn(2000);
game.turn = true;


// Variables for columnumns
game.column1 = $('#column1');
game.column2 = $('#column2');
game.column3 = $('#column3');
game.column4 = $('#column4');
game.column5 = $('#column5');
game.column6 = $('#column6');
// Variable to select message element
game.message = $('.message');
// Variable to select the bottle
game.bottle = $('.messageLeft')
// Drop token sound effect
game.snd = new Audio("./drop.mp3");
// Celebration sound effect
game.celebrate = new Audio("./celebration.mp3");
// Variable to select submessage area
game.submessage = $('#submessage');
// Arrays to hold player wins after each game
game.redWins = [];
game.blueWins = [];
// Variable to select score areas
game.redScore = $('#redScore');
game.blueScore = $('#blueScore');
// Variable to select instructions
game.instructions = $('.instructions')

// To make instructions disappear and re-appear
game.instructions.on('click', function(){
$(this).slideUp(1000);
})

game.message.on('click', function(){
  game.instructions.slideDown(1000);
})
// Functions to run after each turn
var showTurn = function(){
  if(game.turn){
    game.submessage.text('Go for it red player!')
  } else {game.submessage.text("Blue player, you're up!")}
};
// Function to reset game without reloading
var resetGame = function(){
  $('.square').removeClass('red blue');
  showTurn();
}
// Functions to run when red or blue gets a match
var redWinFunc = function(){
  game.submessage.text('Red wins! Grab a beer to play again!');
  game.redWins.push('x');
  addScoreRed();
  game.bottle.on('click', function(){
  game.celebrate.play();
  resetGame();
  game.bottle.off();
})
}

var blueWinFunc = function(){
  game.submessage.text('Blue wins! Grab a beer to play again!');
  game.blueWins.push('x');
  addScoreBlue();
  game.bottle.on('click', function(){
  game.celebrate.play();
  resetGame();
  game.bottle.off();
})
}

// Functions to add score to scoreboard
var addScoreRed = function(){
    game.redScore.text('');
  for(var i = 0; i < game.redWins.length; i++){
    game.redScore.append('X');
  }
}

var addScoreBlue = function(){
   game.blueScore.text('');
  for(var i = 0; i < game.blueWins.length; i++){
    game.blueScore.append('X');
  }
}

game.column1.children().on('click', function(){
console.log(this.dataset.col);
})

var checkWinnerContainerFunc = function(){
  console.log($(this));
}




// Winning Logic - really long - skip to line 523 -
// checks all possible winnings combinations
// split up by color based on whos turn it is
var isThereAWinner = function(){
  if (game.turn){
    game.turn = false;
  } else {game.turn = true;};
  game.snd.play();
  showTurn();
  if(($('#0').attr('class') == 'square red') && ($('#7').attr('class') == 'square red') && ($('#14').attr('class') == 'square red') && ($('#21').attr('class') == 'square red')){
      redWinFunc();
} else if (($('#7').attr('class') == 'square red') && ($('#14').attr('class') == 'square red') && ($('#21').attr('class') == 'square red') && ($('#28').attr('class') == 'square red')){
    redWinFunc();
} else if (($('#14').attr('class') == 'square red') && ($('#21').attr('class') == 'square red') && ($('#28').attr('class') == 'square red') && ($('#35').attr('class') == 'square red')){
    redWinFunc();
    // Row 2
} else if (($('#1').attr('class') == 'square red') && ($('#8').attr('class') == 'square red') && ($('#15').attr('class') == 'square red') && ($('#22').attr('class') == 'square red')){
    redWinFunc();
} else if (($('#8').attr('class') == 'square red') && ($('#15').attr('class') == 'square red') && ($('#22').attr('class') == 'square red') && ($('#29').attr('class') == 'square red')){
    redWinFunc();
} else if (($('#15').attr('class') == 'square red') && ($('#22').attr('class') == 'square red') && ($('#29').attr('class') == 'square red') && ($('#36').attr('class') == 'square red')){
    redWinFunc();
}
// Row 3
 else if (($('#2').attr('class') == 'square red') && ($('#9').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#23').attr('class') == 'square red')){
redWinFunc();
} else if (($('#9').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#23').attr('class') == 'square red') && ($('#30').attr('class') == 'square red')){
redWinFunc();
} else if (($('#16').attr('class') == 'square red') && ($('#23').attr('class') == 'square red') && ($('#30').attr('class') == 'square red') && ($('#37').attr('class') == 'square red')){
redWinFunc();
}
// Row 4
 else if (($('#3').attr('class') == 'square red') && ($('#10').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#24').attr('class') == 'square red')){
redWinFunc();
} else if (($('#10').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#31').attr('class') == 'square red')){
redWinFunc();
} else if (($('#17').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#31').attr('class') == 'square red') && ($('#38').attr('class') == 'square red')){
redWinFunc();
}
// Row 5
 else if (($('#4').attr('class') == 'square red') && ($('#11').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#25').attr('class') == 'square red')){
redWinFunc();
} else if (($('#11').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#32').attr('class') == 'square red')){
redWinFunc();
} else if (($('#18').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#32').attr('class') == 'square red') && ($('#39').attr('class') == 'square red')){
redWinFunc();
}
// Row 6
 else if (($('#5').attr('class') == 'square red') && ($('#12').attr('class') == 'square red') && ($('#19').attr('class') == 'square red') && ($('#26').attr('class') == 'square red')){
redWinFunc();
} else if (($('#12').attr('class') == 'square red') && ($('#19').attr('class') == 'square red') && ($('#26').attr('class') == 'square red') && ($('#33').attr('class') == 'square red')){
redWinFunc();
} else if (($('#19').attr('class') == 'square red') && ($('#26').attr('class') == 'square red') && ($('#33').attr('class') == 'square red') && ($('#40').attr('class') == 'square red')){
redWinFunc();
}
// Row 7
 else if (($('#6').attr('class') == 'square red') && ($('#13').attr('class') == 'square red') && ($('#20').attr('class') == 'square red') && ($('#27').attr('class') == 'square red')){
redWinFunc();
} else if (($('#13').attr('class') == 'square red') && ($('#20').attr('class') == 'square red') && ($('#27').attr('class') == 'square red') && ($('#34').attr('class') == 'square red')){
redWinFunc();
} else if (($('#20').attr('class') == 'square red') && ($('#27').attr('class') == 'square red') && ($('#34').attr('class') == 'square red') && ($('#41').attr('class') == 'square red')){
redWinFunc();
}
// Start Columns
// Column 1
else if (($('#0').attr('class') == 'square red') && ($('#1').attr('class') == 'square red') && ($('#2').attr('class') == 'square red') && ($('#3').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#1').attr('class') == 'square red') && ($('#2').attr('class') == 'square red') && ($('#3').attr('class') == 'square red') && ($('#4').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#2').attr('class') == 'square red') && ($('#3').attr('class') == 'square red') && ($('#4').attr('class') == 'square red') && ($('#5').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#3').attr('class') == 'square red') && ($('#4').attr('class') == 'square red') && ($('#5').attr('class') == 'square red') && ($('#6').attr('class') == 'square red')){
redWinFunc();
}
// Column 2
else if (($('#7').attr('class') == 'square red') && ($('#8').attr('class') == 'square red') && ($('#9').attr('class') == 'square red') && ($('#10').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#8').attr('class') == 'square red') && ($('#9').attr('class') == 'square red') && ($('#10').attr('class') == 'square red') && ($('#11').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#9').attr('class') == 'square red') && ($('#10').attr('class') == 'square red') && ($('#11').attr('class') == 'square red') && ($('#12').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#10').attr('class') == 'square red') && ($('#10').attr('class') == 'square red') && ($('#10').attr('class') == 'square red') && ($('#10').attr('class') == 'square red')){
redWinFunc();
}
// Column 3
else if (($('#14').attr('class') == 'square red') && ($('#15').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#17').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#15').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#18').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#16').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#19').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#17').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#19').attr('class') == 'square red') && ($('#20').attr('class') == 'square red')){
redWinFunc();
}
// Column 4
else if (($('#21').attr('class') == 'square red') && ($('#22').attr('class') == 'square red') && ($('#23').attr('class') == 'square red') && ($('#24').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#22').attr('class') == 'square red') && ($('#23').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#25').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#23').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#26').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#24').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#26').attr('class') == 'square red') && ($('#27').attr('class') == 'square red')){
redWinFunc();
}
// Column 5
else if (($('#28').attr('class') == 'square red') && ($('#29').attr('class') == 'square red') && ($('#30').attr('class') == 'square red') && ($('#31').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#29').attr('class') == 'square red') && ($('#30').attr('class') == 'square red') && ($('#31').attr('class') == 'square red') && ($('#32').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#30').attr('class') == 'square red') && ($('#31').attr('class') == 'square red') && ($('#32').attr('class') == 'square red') && ($('#33').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#31').attr('class') == 'square red') && ($('#32').attr('class') == 'square red') && ($('#33').attr('class') == 'square red') && ($('#34').attr('class') == 'square red')){
redWinFunc();
}
// Column 6
else if (($('#35').attr('class') == 'square red') && ($('#36').attr('class') == 'square red') && ($('#37').attr('class') == 'square red') && ($('#38').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#36').attr('class') == 'square red') && ($('#37').attr('class') == 'square red') && ($('#38').attr('class') == 'square red') && ($('#39').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#37').attr('class') == 'square red') && ($('#38').attr('class') == 'square red') && ($('#39').attr('class') == 'square red') && ($('#40').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#38').attr('class') == 'square red') && ($('#39').attr('class') == 'square red') && ($('#40').attr('class') == 'square red') && ($('#41').attr('class') == 'square red')){
redWinFunc();
}
// diagonal row 6
else if (($('#20').attr('class') == 'square red') && ($('#26').attr('class') == 'square red') && ($('#32').attr('class') == 'square red') && ($('#38').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#13').attr('class') == 'square red') && ($('#19').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#31').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#6').attr('class') == 'square red') && ($('#12').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#24').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#41').attr('class') == 'square red') && ($('#33').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#17').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#34').attr('class') == 'square red') && ($('#26').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#10').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#27').attr('class') == 'square red') && ($('#19').attr('class') == 'square red') && ($('#11').attr('class') == 'square red') && ($('#3').attr('class') == 'square red')){
redWinFunc();
}
// diagonal row 5
else if (($('#19').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#31').attr('class') == 'square red') && ($('#37').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#12').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#30').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#5').attr('class') == 'square red') && ($('#11').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#23').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#40').attr('class') == 'square red') && ($('#32').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#16').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#33').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#9').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#26').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#10').attr('class') == 'square red') && ($('#2').attr('class') == 'square red')){
redWinFunc();
}
// diagonal row 4
else if (($('#18').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#30').attr('class') == 'square red') && ($('#36').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#11').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#23').attr('class') == 'square red') && ($('#29').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#4').attr('class') == 'square red') && ($('#10').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#22').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#38').attr('class') == 'square red') && ($('#30').attr('class') == 'square red') && ($('#22').attr('class') == 'square red') && ($('#15').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#32').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#8').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#25').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#9').attr('class') == 'square red') && ($('#1').attr('class') == 'square red')){
redWinFunc();
}
// diagonal row 3
else if (($('#17').attr('class') == 'square red') && ($('#23').attr('class') == 'square red') && ($('#29').attr('class') == 'square red') && ($('#35').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#10').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#22').attr('class') == 'square red') && ($('#28').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#3').attr('class') == 'square red') && ($('#9').attr('class') == 'square red') && ($('#15').attr('class') == 'square red') && ($('#21').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#37').attr('class') == 'square red') && ($('#29').attr('class') == 'square red') && ($('#21').attr('class') == 'square red') && ($('#14').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#31').attr('class') == 'square red') && ($('#23').attr('class') == 'square red') && ($('#15').attr('class') == 'square red') && ($('#7').attr('class') == 'square red')){
redWinFunc();
}
else if (($('#24').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#8').attr('class') == 'square red') && ($('#0').attr('class') == 'square red')){
redWinFunc();
}
// Start Blue win section
else if (($('#0').attr('class') == 'square blue') && ($('#7').attr('class') == 'square blue') && ($('#14').attr('class') == 'square blue') && ($('#21').attr('class') == 'square blue')){
    blueWinFunc();
} else if (($('#7').attr('class') == 'square blue') && ($('#14').attr('class') == 'square blue') && ($('#21').attr('class') == 'square blue') && ($('#28').attr('class') == 'square blue')){
  blueWinFunc();
} else if (($('#14').attr('class') == 'square blue') && ($('#21').attr('class') == 'square blue') && ($('#28').attr('class') == 'square blue') && ($('#35').attr('class') == 'square blue')){
  blueWinFunc();
  // Row 2
} else if (($('#1').attr('class') == 'square blue') && ($('#8').attr('class') == 'square blue') && ($('#15').attr('class') == 'square blue') && ($('#22').attr('class') == 'square blue')){
  blueWinFunc();
} else if (($('#8').attr('class') == 'square blue') && ($('#15').attr('class') == 'square blue') && ($('#22').attr('class') == 'square blue') && ($('#29').attr('class') == 'square blue')){
  blueWinFunc();
} else if (($('#15').attr('class') == 'square blue') && ($('#22').attr('class') == 'square blue') && ($('#29').attr('class') == 'square blue') && ($('#36').attr('class') == 'square blue')){
  blueWinFunc();
}
// Row 3
else if (($('#2').attr('class') == 'square blue') && ($('#9').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue')){
blueWinFunc();
} else if (($('#9').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue') && ($('#30').attr('class') == 'square blue')){
blueWinFunc();
} else if (($('#16').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue') && ($('#30').attr('class') == 'square blue') && ($('#37').attr('class') == 'square blue')){
blueWinFunc();
}
// Row 4
else if (($('#3').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue')){
blueWinFunc();
} else if (($('#10').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#31').attr('class') == 'square blue')){
blueWinFunc();
} else if (($('#17').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#31').attr('class') == 'square blue') && ($('#38').attr('class') == 'square blue')){
blueWinFunc();
}
// Row 5
else if (($('#4').attr('class') == 'square blue') && ($('#11').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue')){
blueWinFunc();
} else if (($('#11').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#32').attr('class') == 'square blue')){
blueWinFunc();
} else if (($('#18').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#32').attr('class') == 'square blue') && ($('#39').attr('class') == 'square blue')){
blueWinFunc();
}
// Row 6
else if (($('#5').attr('class') == 'square blue') && ($('#12').attr('class') == 'square blue') && ($('#19').attr('class') == 'square blue') && ($('#26').attr('class') == 'square blue')){
blueWinFunc();
} else if (($('#12').attr('class') == 'square blue') && ($('#19').attr('class') == 'square blue') && ($('#26').attr('class') == 'square blue') && ($('#33').attr('class') == 'square blue')){
blueWinFunc();
} else if (($('#19').attr('class') == 'square blue') && ($('#26').attr('class') == 'square blue') && ($('#33').attr('class') == 'square blue') && ($('#40').attr('class') == 'square blue')){
blueWinFunc();
}
// Row 7
else if (($('#6').attr('class') == 'square blue') && ($('#13').attr('class') == 'square blue') && ($('#20').attr('class') == 'square blue') && ($('#27').attr('class') == 'square blue')){
blueWinFunc();
} else if (($('#13').attr('class') == 'square blue') && ($('#20').attr('class') == 'square blue') && ($('#27').attr('class') == 'square blue') && ($('#34').attr('class') == 'square blue')){
blueWinFunc();
} else if (($('#20').attr('class') == 'square blue') && ($('#27').attr('class') == 'square blue') && ($('#34').attr('class') == 'square blue') && ($('#41').attr('class') == 'square blue')){
blueWinFunc();
}
// Start Columns
// Column 1
else if (($('#0').attr('class') == 'square blue') && ($('#1').attr('class') == 'square blue') && ($('#2').attr('class') == 'square blue') && ($('#3').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#1').attr('class') == 'square blue') && ($('#2').attr('class') == 'square blue') && ($('#3').attr('class') == 'square blue') && ($('#4').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#2').attr('class') == 'square blue') && ($('#3').attr('class') == 'square blue') && ($('#4').attr('class') == 'square blue') && ($('#5').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#3').attr('class') == 'square blue') && ($('#4').attr('class') == 'square blue') && ($('#5').attr('class') == 'square blue') && ($('#6').attr('class') == 'square blue')){
blueWinFunc();
}
// Column 2
else if (($('#7').attr('class') == 'square blue') && ($('#8').attr('class') == 'square blue') && ($('#9').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#8').attr('class') == 'square blue') && ($('#9').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue') && ($('#11').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#9').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue') && ($('#11').attr('class') == 'square blue') && ($('#12').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#10').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue')){
blueWinFunc();
}
// Column 3
else if (($('#14').attr('class') == 'square blue') && ($('#15').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#15').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#16').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#19').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#17').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#19').attr('class') == 'square blue') && ($('#20').attr('class') == 'square blue')){
blueWinFunc();
}
// Column 4
else if (($('#21').attr('class') == 'square blue') && ($('#22').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#22').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#23').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#26').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#24').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#26').attr('class') == 'square blue') && ($('#27').attr('class') == 'square blue')){
blueWinFunc();
}
// Column 5
else if (($('#28').attr('class') == 'square blue') && ($('#29').attr('class') == 'square blue') && ($('#30').attr('class') == 'square blue') && ($('#31').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#29').attr('class') == 'square blue') && ($('#30').attr('class') == 'square blue') && ($('#31').attr('class') == 'square blue') && ($('#32').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#30').attr('class') == 'square blue') && ($('#31').attr('class') == 'square blue') && ($('#32').attr('class') == 'square blue') && ($('#33').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#31').attr('class') == 'square blue') && ($('#32').attr('class') == 'square blue') && ($('#33').attr('class') == 'square blue') && ($('#34').attr('class') == 'square blue')){
blueWinFunc();
}
// Column 6
else if (($('#35').attr('class') == 'square blue') && ($('#36').attr('class') == 'square blue') && ($('#37').attr('class') == 'square blue') && ($('#38').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#36').attr('class') == 'square blue') && ($('#37').attr('class') == 'square blue') && ($('#38').attr('class') == 'square blue') && ($('#39').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#37').attr('class') == 'square blue') && ($('#38').attr('class') == 'square blue') && ($('#39').attr('class') == 'square blue') && ($('#40').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#38').attr('class') == 'square blue') && ($('#39').attr('class') == 'square blue') && ($('#40').attr('class') == 'square blue') && ($('#41').attr('class') == 'square blue')){
blueWinFunc();
}
// diagonal row 6
else if (($('#20').attr('class') == 'square blue') && ($('#26').attr('class') == 'square blue') && ($('#32').attr('class') == 'square blue') && ($('#38').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#13').attr('class') == 'square blue') && ($('#19').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#31').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#6').attr('class') == 'square blue') && ($('#12').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#41').attr('class') == 'square blue') && ($('#33').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#34').attr('class') == 'square blue') && ($('#26').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#27').attr('class') == 'square blue') && ($('#19').attr('class') == 'square blue') && ($('#11').attr('class') == 'square blue') && ($('#3').attr('class') == 'square blue')){
blueWinFunc();
}
// diagonal row 5
else if (($('#19').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#31').attr('class') == 'square blue') && ($('#37').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#12').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#30').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#5').attr('class') == 'square blue') && ($('#11').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#40').attr('class') == 'square blue') && ($('#32').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#33').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#9').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#26').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue') && ($('#2').attr('class') == 'square blue')){
blueWinFunc();
}
// diagonal row 4
else if (($('#18').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#30').attr('class') == 'square blue') && ($('#36').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#11').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue') && ($('#29').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#4').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#22').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#38').attr('class') == 'square blue') && ($('#30').attr('class') == 'square blue') && ($('#22').attr('class') == 'square blue') && ($('#15').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#32').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#8').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#25').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#9').attr('class') == 'square blue') && ($('#1').attr('class') == 'square blue')){
blueWinFunc();
}
// diagonal row 3
else if (($('#17').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue') && ($('#29').attr('class') == 'square blue') && ($('#35').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#10').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#22').attr('class') == 'square blue') && ($('#28').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#3').attr('class') == 'square blue') && ($('#9').attr('class') == 'square blue') && ($('#15').attr('class') == 'square blue') && ($('#21').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#37').attr('class') == 'square blue') && ($('#29').attr('class') == 'square blue') && ($('#21').attr('class') == 'square blue') && ($('#14').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#31').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue') && ($('#15').attr('class') == 'square blue') && ($('#7').attr('class') == 'square blue')){
blueWinFunc();
}
else if (($('#24').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#8').attr('class') == 'square blue') && ($('#0').attr('class') == 'square blue')){
blueWinFunc();
}

}


var scale = 'scale(.75)';
document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
 document.body.style.msTransform =   scale;       // IE 9
 document.body.style.transform = scale;     // General
