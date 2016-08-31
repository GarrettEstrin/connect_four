// Custom JavaScript by Garrett Estrin | GarrettEstrin.com

$turn = true;
$message = $('.message');

// Variables for columnumns
$column1 = $('#column1');
$column2 = $('#column2');
$column3 = $('#column3');
$column4 = $('#column4');
$column5 = $('#column5');
$column6 = $('#column6');

var snd = new Audio("./drop.mp3");
var $submessage = $('#submessage');
var redWins = [];
var blueWins = [];

var showTurn = function(){
  if($turn == false){
    $submessage.text('Go for it red player!')
  } else {$submessage.text("Blue player, you're up!")}
}



// Winning Logic
var isThereAWinner = function(){
  snd.play();
  showTurn();
  if(($('#0').attr('class') == 'square red') && ($('#7').attr('class') == 'square red') && ($('#14').attr('class') == 'square red') && ($('#21').attr('class') == 'square red')){
      $submessage.text('Red wins!');
redWins.push('x');
} else if (($('#7').attr('class') == 'square red') && ($('#14').attr('class') == 'square red') && ($('#21').attr('class') == 'square red') && ($('#28').attr('class') == 'square red')){
    $submessage.text('Red wins!');
redWins.push('x');
} else if (($('#14').attr('class') == 'square red') && ($('#21').attr('class') == 'square red') && ($('#28').attr('class') == 'square red') && ($('#35').attr('class') == 'square red')){
    $submessage.text('Red wins!');
redWins.push('x');
    // Row 2
} else if (($('#1').attr('class') == 'square red') && ($('#8').attr('class') == 'square red') && ($('#15').attr('class') == 'square red') && ($('#22').attr('class') == 'square red')){
    $submessage.text('Red wins!');
redWins.push('x');
} else if (($('#8').attr('class') == 'square red') && ($('#15').attr('class') == 'square red') && ($('#22').attr('class') == 'square red') && ($('#29').attr('class') == 'square red')){
    $submessage.text('Red wins!');
redWins.push('x');
} else if (($('#15').attr('class') == 'square red') && ($('#22').attr('class') == 'square red') && ($('#29').attr('class') == 'square red') && ($('#36').attr('class') == 'square red')){
    $submessage.text('Red wins!');
redWins.push('x');
}
// Row 3
 else if (($('#2').attr('class') == 'square red') && ($('#9').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#23').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
} else if (($('#9').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#23').attr('class') == 'square red') && ($('#30').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
} else if (($('#16').attr('class') == 'square red') && ($('#23').attr('class') == 'square red') && ($('#30').attr('class') == 'square red') && ($('#37').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
// Row 4
 else if (($('#3').attr('class') == 'square red') && ($('#10').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#24').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
} else if (($('#10').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#31').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
} else if (($('#17').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#31').attr('class') == 'square red') && ($('#38').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
// Row 5
 else if (($('#4').attr('class') == 'square red') && ($('#11').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#25').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
} else if (($('#11').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#32').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
} else if (($('#18').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#32').attr('class') == 'square red') && ($('#39').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
// Row 6
 else if (($('#5').attr('class') == 'square red') && ($('#12').attr('class') == 'square red') && ($('#19').attr('class') == 'square red') && ($('#26').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
} else if (($('#12').attr('class') == 'square red') && ($('#19').attr('class') == 'square red') && ($('#26').attr('class') == 'square red') && ($('#33').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
} else if (($('#19').attr('class') == 'square red') && ($('#26').attr('class') == 'square red') && ($('#33').attr('class') == 'square red') && ($('#40').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
// Row 7
 else if (($('#6').attr('class') == 'square red') && ($('#13').attr('class') == 'square red') && ($('#20').attr('class') == 'square red') && ($('#27').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
} else if (($('#13').attr('class') == 'square red') && ($('#20').attr('class') == 'square red') && ($('#27').attr('class') == 'square red') && ($('#34').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
} else if (($('#20').attr('class') == 'square red') && ($('#27').attr('class') == 'square red') && ($('#34').attr('class') == 'square red') && ($('#41').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
// Start Columns
// Column 1
else if (($('#0').attr('class') == 'square red') && ($('#1').attr('class') == 'square red') && ($('#2').attr('class') == 'square red') && ($('#3').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#1').attr('class') == 'square red') && ($('#2').attr('class') == 'square red') && ($('#3').attr('class') == 'square red') && ($('#4').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#2').attr('class') == 'square red') && ($('#3').attr('class') == 'square red') && ($('#4').attr('class') == 'square red') && ($('#5').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#3').attr('class') == 'square red') && ($('#4').attr('class') == 'square red') && ($('#5').attr('class') == 'square red') && ($('#6').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
// Column 2
else if (($('#7').attr('class') == 'square red') && ($('#8').attr('class') == 'square red') && ($('#9').attr('class') == 'square red') && ($('#10').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#8').attr('class') == 'square red') && ($('#9').attr('class') == 'square red') && ($('#10').attr('class') == 'square red') && ($('#11').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#9').attr('class') == 'square red') && ($('#10').attr('class') == 'square red') && ($('#11').attr('class') == 'square red') && ($('#12').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#10').attr('class') == 'square red') && ($('#10').attr('class') == 'square red') && ($('#10').attr('class') == 'square red') && ($('#10').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
// Column 3
else if (($('#14').attr('class') == 'square red') && ($('#15').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#17').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#15').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#18').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#16').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#19').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#17').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#19').attr('class') == 'square red') && ($('#20').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
// Column 4
else if (($('#21').attr('class') == 'square red') && ($('#22').attr('class') == 'square red') && ($('#23').attr('class') == 'square red') && ($('#24').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#22').attr('class') == 'square red') && ($('#23').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#25').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#23').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#26').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#24').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#26').attr('class') == 'square red') && ($('#27').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
// Column 5
else if (($('#28').attr('class') == 'square red') && ($('#29').attr('class') == 'square red') && ($('#30').attr('class') == 'square red') && ($('#31').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#29').attr('class') == 'square red') && ($('#30').attr('class') == 'square red') && ($('#31').attr('class') == 'square red') && ($('#32').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#30').attr('class') == 'square red') && ($('#31').attr('class') == 'square red') && ($('#32').attr('class') == 'square red') && ($('#33').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#31').attr('class') == 'square red') && ($('#32').attr('class') == 'square red') && ($('#33').attr('class') == 'square red') && ($('#34').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
// Column 6
else if (($('#35').attr('class') == 'square red') && ($('#36').attr('class') == 'square red') && ($('#37').attr('class') == 'square red') && ($('#38').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#36').attr('class') == 'square red') && ($('#37').attr('class') == 'square red') && ($('#38').attr('class') == 'square red') && ($('#39').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#37').attr('class') == 'square red') && ($('#38').attr('class') == 'square red') && ($('#39').attr('class') == 'square red') && ($('#40').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#38').attr('class') == 'square red') && ($('#39').attr('class') == 'square red') && ($('#40').attr('class') == 'square red') && ($('#41').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
// diagonal row 6
else if (($('#20').attr('class') == 'square red') && ($('#26').attr('class') == 'square red') && ($('#32').attr('class') == 'square red') && ($('#38').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#13').attr('class') == 'square red') && ($('#19').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#31').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#6').attr('class') == 'square red') && ($('#12').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#24').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#41').attr('class') == 'square red') && ($('#33').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#17').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#34').attr('class') == 'square red') && ($('#26').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#10').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#27').attr('class') == 'square red') && ($('#19').attr('class') == 'square red') && ($('#11').attr('class') == 'square red') && ($('#3').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
// diagonal row 5
else if (($('#19').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#31').attr('class') == 'square red') && ($('#37').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#12').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#30').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#5').attr('class') == 'square red') && ($('#11').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#23').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#40').attr('class') == 'square red') && ($('#32').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#16').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#33').attr('class') == 'square red') && ($('#25').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#9').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#26').attr('class') == 'square red') && ($('#18').attr('class') == 'square red') && ($('#10').attr('class') == 'square red') && ($('#2').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
// diagonal row 4
else if (($('#18').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#30').attr('class') == 'square red') && ($('#36').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#11').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#23').attr('class') == 'square red') && ($('#29').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#4').attr('class') == 'square red') && ($('#10').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#22').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#38').attr('class') == 'square red') && ($('#30').attr('class') == 'square red') && ($('#22').attr('class') == 'square red') && ($('#15').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#32').attr('class') == 'square red') && ($('#24').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#8').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#25').attr('class') == 'square red') && ($('#17').attr('class') == 'square red') && ($('#9').attr('class') == 'square red') && ($('#1').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
// diagonal row 3
else if (($('#17').attr('class') == 'square red') && ($('#23').attr('class') == 'square red') && ($('#29').attr('class') == 'square red') && ($('#35').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#10').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#22').attr('class') == 'square red') && ($('#28').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#3').attr('class') == 'square red') && ($('#9').attr('class') == 'square red') && ($('#15').attr('class') == 'square red') && ($('#21').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#37').attr('class') == 'square red') && ($('#29').attr('class') == 'square red') && ($('#21').attr('class') == 'square red') && ($('#14').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#31').attr('class') == 'square red') && ($('#23').attr('class') == 'square red') && ($('#15').attr('class') == 'square red') && ($('#7').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
else if (($('#24').attr('class') == 'square red') && ($('#16').attr('class') == 'square red') && ($('#8').attr('class') == 'square red') && ($('#0').attr('class') == 'square red')){
$submessage.text('Red wins!');
redWins.push('x');
}
// Start Blue win section
else if (($('#0').attr('class') == 'square blue') && ($('#7').attr('class') == 'square blue') && ($('#14').attr('class') == 'square blue') && ($('#21').attr('class') == 'square blue')){
    $submessage.text('Blue wins!');
blueWins.push('x');
} else if (($('#7').attr('class') == 'square blue') && ($('#14').attr('class') == 'square blue') && ($('#21').attr('class') == 'square blue') && ($('#28').attr('class') == 'square blue')){
  $submessage.text('Blue wins!');
blueWins.push('x');
} else if (($('#14').attr('class') == 'square blue') && ($('#21').attr('class') == 'square blue') && ($('#28').attr('class') == 'square blue') && ($('#35').attr('class') == 'square blue')){
  $submessage.text('Blue wins!');
blueWins.push('x');
  // Row 2
} else if (($('#1').attr('class') == 'square blue') && ($('#8').attr('class') == 'square blue') && ($('#15').attr('class') == 'square blue') && ($('#22').attr('class') == 'square blue')){
  $submessage.text('Blue wins!');
blueWins.push('x');
} else if (($('#8').attr('class') == 'square blue') && ($('#15').attr('class') == 'square blue') && ($('#22').attr('class') == 'square blue') && ($('#29').attr('class') == 'square blue')){
  $submessage.text('Blue wins!');
blueWins.push('x');
} else if (($('#15').attr('class') == 'square blue') && ($('#22').attr('class') == 'square blue') && ($('#29').attr('class') == 'square blue') && ($('#36').attr('class') == 'square blue')){
  $submessage.text('Blue wins!');
blueWins.push('x');
}
// Row 3
else if (($('#2').attr('class') == 'square blue') && ($('#9').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
} else if (($('#9').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue') && ($('#30').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
} else if (($('#16').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue') && ($('#30').attr('class') == 'square blue') && ($('#37').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
// Row 4
else if (($('#3').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
} else if (($('#10').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#31').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
} else if (($('#17').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#31').attr('class') == 'square blue') && ($('#38').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
// Row 5
else if (($('#4').attr('class') == 'square blue') && ($('#11').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
} else if (($('#11').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#32').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
} else if (($('#18').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#32').attr('class') == 'square blue') && ($('#39').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
// Row 6
else if (($('#5').attr('class') == 'square blue') && ($('#12').attr('class') == 'square blue') && ($('#19').attr('class') == 'square blue') && ($('#26').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
} else if (($('#12').attr('class') == 'square blue') && ($('#19').attr('class') == 'square blue') && ($('#26').attr('class') == 'square blue') && ($('#33').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
} else if (($('#19').attr('class') == 'square blue') && ($('#26').attr('class') == 'square blue') && ($('#33').attr('class') == 'square blue') && ($('#40').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
// Row 7
else if (($('#6').attr('class') == 'square blue') && ($('#13').attr('class') == 'square blue') && ($('#20').attr('class') == 'square blue') && ($('#27').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
} else if (($('#13').attr('class') == 'square blue') && ($('#20').attr('class') == 'square blue') && ($('#27').attr('class') == 'square blue') && ($('#34').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
} else if (($('#20').attr('class') == 'square blue') && ($('#27').attr('class') == 'square blue') && ($('#34').attr('class') == 'square blue') && ($('#41').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
// Start Columns
// Column 1
else if (($('#0').attr('class') == 'square blue') && ($('#1').attr('class') == 'square blue') && ($('#2').attr('class') == 'square blue') && ($('#3').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#1').attr('class') == 'square blue') && ($('#2').attr('class') == 'square blue') && ($('#3').attr('class') == 'square blue') && ($('#4').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#2').attr('class') == 'square blue') && ($('#3').attr('class') == 'square blue') && ($('#4').attr('class') == 'square blue') && ($('#5').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#3').attr('class') == 'square blue') && ($('#4').attr('class') == 'square blue') && ($('#5').attr('class') == 'square blue') && ($('#6').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
// Column 2
else if (($('#7').attr('class') == 'square blue') && ($('#8').attr('class') == 'square blue') && ($('#9').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#8').attr('class') == 'square blue') && ($('#9').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue') && ($('#11').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#9').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue') && ($('#11').attr('class') == 'square blue') && ($('#12').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#10').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
// Column 3
else if (($('#14').attr('class') == 'square blue') && ($('#15').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#15').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#16').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#19').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#17').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#19').attr('class') == 'square blue') && ($('#20').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
// Column 4
else if (($('#21').attr('class') == 'square blue') && ($('#22').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#22').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#23').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#26').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#24').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#26').attr('class') == 'square blue') && ($('#27').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
// Column 5
else if (($('#28').attr('class') == 'square blue') && ($('#29').attr('class') == 'square blue') && ($('#30').attr('class') == 'square blue') && ($('#31').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#29').attr('class') == 'square blue') && ($('#30').attr('class') == 'square blue') && ($('#31').attr('class') == 'square blue') && ($('#32').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#30').attr('class') == 'square blue') && ($('#31').attr('class') == 'square blue') && ($('#32').attr('class') == 'square blue') && ($('#33').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#31').attr('class') == 'square blue') && ($('#32').attr('class') == 'square blue') && ($('#33').attr('class') == 'square blue') && ($('#34').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
// Column 6
else if (($('#35').attr('class') == 'square blue') && ($('#36').attr('class') == 'square blue') && ($('#37').attr('class') == 'square blue') && ($('#38').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#36').attr('class') == 'square blue') && ($('#37').attr('class') == 'square blue') && ($('#38').attr('class') == 'square blue') && ($('#39').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#37').attr('class') == 'square blue') && ($('#38').attr('class') == 'square blue') && ($('#39').attr('class') == 'square blue') && ($('#40').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#38').attr('class') == 'square blue') && ($('#39').attr('class') == 'square blue') && ($('#40').attr('class') == 'square blue') && ($('#41').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
// diagonal row 6
else if (($('#20').attr('class') == 'square blue') && ($('#26').attr('class') == 'square blue') && ($('#32').attr('class') == 'square blue') && ($('#38').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#13').attr('class') == 'square blue') && ($('#19').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#31').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#6').attr('class') == 'square blue') && ($('#12').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#41').attr('class') == 'square blue') && ($('#33').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#34').attr('class') == 'square blue') && ($('#26').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#27').attr('class') == 'square blue') && ($('#19').attr('class') == 'square blue') && ($('#11').attr('class') == 'square blue') && ($('#3').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
// diagonal row 5
else if (($('#19').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#31').attr('class') == 'square blue') && ($('#37').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#12').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#30').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#5').attr('class') == 'square blue') && ($('#11').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#40').attr('class') == 'square blue') && ($('#32').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#33').attr('class') == 'square blue') && ($('#25').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#9').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#26').attr('class') == 'square blue') && ($('#18').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue') && ($('#2').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
// diagonal row 4
else if (($('#18').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#30').attr('class') == 'square blue') && ($('#36').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#11').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue') && ($('#29').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#4').attr('class') == 'square blue') && ($('#10').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#22').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#38').attr('class') == 'square blue') && ($('#30').attr('class') == 'square blue') && ($('#22').attr('class') == 'square blue') && ($('#15').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#32').attr('class') == 'square blue') && ($('#24').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#8').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#25').attr('class') == 'square blue') && ($('#17').attr('class') == 'square blue') && ($('#9').attr('class') == 'square blue') && ($('#1').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
// diagonal row 3
else if (($('#17').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue') && ($('#29').attr('class') == 'square blue') && ($('#35').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#10').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#22').attr('class') == 'square blue') && ($('#28').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#3').attr('class') == 'square blue') && ($('#9').attr('class') == 'square blue') && ($('#15').attr('class') == 'square blue') && ($('#21').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#37').attr('class') == 'square blue') && ($('#29').attr('class') == 'square blue') && ($('#21').attr('class') == 'square blue') && ($('#14').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#31').attr('class') == 'square blue') && ($('#23').attr('class') == 'square blue') && ($('#15').attr('class') == 'square blue') && ($('#7').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}
else if (($('#24').attr('class') == 'square blue') && ($('#16').attr('class') == 'square blue') && ($('#8').attr('class') == 'square blue') && ($('#0').attr('class') == 'square blue')){
$submessage.text('Blue wins!');
blueWins.push('x');
}

}


$column1.on('click', function(){
  if ($turn){
    // if red turn
    if($('#6').attr('class') == 'square'){
      $('#6').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#5').attr('class') == 'square'){
      $('#5').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#4').attr('class') == 'square'){
      $('#4').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#3').attr('class') == 'square'){
      $('#3').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#2').attr('class') == 'square'){
      $('#2').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#1').attr('class') == 'square'){
      $('#1').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#0').attr('class') == 'square'){
      $('#0').addClass('red');
      isThereAWinner();
      $turn = false;
    } else {
      // do nothing
    }}
    else {
      // if blue turn
      if($('#6').attr('class') == 'square'){
        $('#6').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#5').attr('class') == 'square'){
        $('#5').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#4').attr('class') == 'square'){
        $('#4').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#3').attr('class') == 'square'){
        $('#3').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#2').attr('class') == 'square'){
        $('#2').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#1').attr('class') == 'square'){
        $('#1').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#0').attr('class') == 'square'){
        $('#0').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else {
        // do nothing
      }
    }
    // End of turn if statement

})

// Click function for Column 2
$column2.on('click', function(){
  if ($turn){
    // if red turn
    if($('#13').attr('class') == 'square'){
      $('#13').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#12').attr('class') == 'square'){
      $('#12').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#11').attr('class') == 'square'){
      $('#11').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#10').attr('class') == 'square'){
      $('#10').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#9').attr('class') == 'square'){
      $('#9').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#8').attr('class') == 'square'){
      $('#8').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#7').attr('class') == 'square'){
      $('#7').addClass('red');
      isThereAWinner();
      $turn = false;
    } else {
      // do nothing
    }}
    else {
      // if blue turn
      if($('#13').attr('class') == 'square'){
        $('#13').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#12').attr('class') == 'square'){
        $('#12').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#11').attr('class') == 'square'){
        $('#11').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#10').attr('class') == 'square'){
        $('#10').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#9').attr('class') == 'square'){
        $('#9').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#8').attr('class') == 'square'){
        $('#8').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#7').attr('class') == 'square'){
        $('#7').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else {
        // do nothing
      }
    }
    // End of turn if statement

})
// Click function for Column 3
$column3.on('click', function(){
  if ($turn){
    // if red turn
    if($('#20').attr('class') == 'square'){
      $('#20').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#19').attr('class') == 'square'){
      $('#19').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#18').attr('class') == 'square'){
      $('#18').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#17').attr('class') == 'square'){
      $('#17').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#16').attr('class') == 'square'){
      $('#16').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#15').attr('class') == 'square'){
      $('#15').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#14').attr('class') == 'square'){
      $('#14').addClass('red');
      isThereAWinner();
      $turn = false;
    } else {
      // do nothing
    }}
    else {
      // if blue turn
      if($('#20').attr('class') == 'square'){
        $('#20').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#19').attr('class') == 'square'){
        $('#19').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#18').attr('class') == 'square'){
        $('#18').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#17').attr('class') == 'square'){
        $('#17').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#16').attr('class') == 'square'){
        $('#16').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#15').attr('class') == 'square'){
        $('#15').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#14').attr('class') == 'square'){
        $('#14').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else {
        // do nothing
      }
    }
    // End of turn if statement

})
// Click function for Column 4
$column4.on('click', function(){
  if ($turn){
    // if red turn
    if($('#27').attr('class') == 'square'){
      $('#27').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#26').attr('class') == 'square'){
      $('#26').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#25').attr('class') == 'square'){
      $('#25').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#24').attr('class') == 'square'){
      $('#24').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#23').attr('class') == 'square'){
      $('#23').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#22').attr('class') == 'square'){
      $('#22').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#21').attr('class') == 'square'){
      $('#21').addClass('red');
      isThereAWinner();
      $turn = false;
    } else {
      // do nothing
    }}
    else {
      // if blue turn
      if($('#27').attr('class') == 'square'){
        $('#27').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#26').attr('class') == 'square'){
        $('#26').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#25').attr('class') == 'square'){
        $('#25').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#24').attr('class') == 'square'){
        $('#24').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#23').attr('class') == 'square'){
        $('#23').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#22').attr('class') == 'square'){
        $('#22').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#21').attr('class') == 'square'){
        $('#21').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else {
        // do nothing
      }
    }
    // End of turn if statement

})
// Click function for Column 5
$column5.on('click', function(){
  if ($turn){
    // if red turn
    if($('#34').attr('class') == 'square'){
      $('#34').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#33').attr('class') == 'square'){
      $('#33').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#32').attr('class') == 'square'){
      $('#32').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#31').attr('class') == 'square'){
      $('#31').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#30').attr('class') == 'square'){
      $('#30').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#29').attr('class') == 'square'){
      $('#29').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#28').attr('class') == 'square'){
      $('#28').addClass('red');
      isThereAWinner();
      $turn = false;
    } else {
      // do nothing
    }}
    else {
      // if blue turn
      if($('#34').attr('class') == 'square'){
        $('#34').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#33').attr('class') == 'square'){
        $('#33').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#32').attr('class') == 'square'){
        $('#32').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#31').attr('class') == 'square'){
        $('#31').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#30').attr('class') == 'square'){
        $('#30').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#29').attr('class') == 'square'){
        $('#29').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#28').attr('class') == 'square'){
        $('#28').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else {
        // do nothing
      }
    }
    // End of turn if statement

})
// Click function for Column 6
$column6.on('click', function(){
  if ($turn){
    // if red turn
    if($('#41').attr('class') == 'square'){
      $('#41').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#40').attr('class') == 'square'){
      $('#40').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#39').attr('class') == 'square'){
      $('#39').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#38').attr('class') == 'square'){
      $('#38').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#37').attr('class') == 'square'){
      $('#37').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#36').attr('class') == 'square'){
      $('#36').addClass('red');
      isThereAWinner();
      $turn = false;
    } else if ($('#35').attr('class') == 'square'){
      $('#35').addClass('red');
      isThereAWinner();
      $turn = false;
    } else {
      // do nothing
    }}
    else {
      // if blue turn
      if($('#41').attr('class') == 'square'){
        $('#41').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#40').attr('class') == 'square'){
        $('#40').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#39').attr('class') == 'square'){
        $('#39').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#38').attr('class') == 'square'){
        $('#38').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#37').attr('class') == 'square'){
        $('#37').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#36').attr('class') == 'square'){
        $('#36').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else if ($('#35').attr('class') == 'square'){
        $('#35').addClass('blue');
        isThereAWinner();
        $turn = true;
      } else {
        // do nothing
      }
    }
    // End of turn if statement

})

// Variable to show turn
$turn = true;
