// Custom JavaScript by Garrett Estrin | GarrettEstrin.com

$turn = true;

// Variables for columns
$cola = $('#column-a');
$colb = $('#column-b');
$colc = $('#column-c');
$cold = $('#column-d');
$cole = $('#column-e');
$colf = $('#column-f');
$colg = $('#column-g');

// Winning Logic
var isThereAWinner = function(){
  if(($('#a6').attr('class') == 'square red') && ($('#a5').attr('class') == 'square red') && ($('#a4').attr('class') == 'square red') && ($('#a3').attr('class') == 'square red')){
      console.log("Red is the winner");
} else if (($('#a5').attr('class') == 'square red') && ($('#a4').attr('class') == 'square red') && ($('#a3').attr('class') == 'square red') && ($('#a2').attr('class') == 'square red')){
    console.log("Red is the winner");
}
}



$cola.on('click', function(){
  if ($turn){
    if($('#a6').attr('class') == 'square'){
    $('#a6').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#a5').attr('class') == 'square'){
    $('#a5').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#a4').attr('class') == 'square'){
    $('#a4').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#a3').attr('class') == 'square'){
    $('#a3').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#a2').attr('class') == 'square'){
    $('#a2').addClass('red');
    $turn = false;
    isThereAWinner();
  } else {
    $('#a1').addClass('red');
    $turn = false;
    isThereAWinner();
  }
  } else {
    if($('#a6').attr('class') == 'square'){
    $('#a6').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#a5').attr('class') == 'square'){
    $('#a5').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#a4').attr('class') == 'square'){
    $('#a4').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#a3').attr('class') == 'square'){
    $('#a3').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#a2').attr('class') == 'square'){
    $('#a2').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else {
    $('#a1').addClass('blue');
    $turn = true;
    isThereAWinner();
  }

}
})

$colb.on('click', function(){
  if ($turn){
    if($('#b6').attr('class') == 'square'){
    $('#b6').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#b5').attr('class') == 'square'){
    $('#b5').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#b4').attr('class') == 'square'){
    $('#b4').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#b3').attr('class') == 'square'){
    $('#b3').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#b2').attr('class') == 'square'){
    $('#b2').addClass('red');
    $turn = false;
    isThereAWinner();
  } else {
    $('#b1').addClass('red');
    $turn = false;
    isThereAWinner();
  }
  } else {
    if($('#b6').attr('class') == 'square'){
    $('#b6').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#b5').attr('class') == 'square'){
    $('#b5').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#b4').attr('class') == 'square'){
    $('#b4').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#b3').attr('class') == 'square'){
    $('#b3').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#b2').attr('class') == 'square'){
    $('#b2').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else {
    $('#b1').addClass('blue');
    $turn = true;
    isThereAWinner();
  }

}
})

$colc.on('click', function(){
  if ($turn){
    if($('#c6').attr('class') == 'square'){
    $('#c6').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#c5').attr('class') == 'square'){
    $('#c5').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#c4').attr('class') == 'square'){
    $('#c4').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#c3').attr('class') == 'square'){
    $('#c3').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#c2').attr('class') == 'square'){
    $('#c2').addClass('red');
    $turn = false;
    isThereAWinner();
  } else {
    $('#c1').addClass('red');
    $turn = false;
    isThereAWinner();
  }
  } else {
    if($('#c6').attr('class') == 'square'){
    $('#c6').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#c5').attr('class') == 'square'){
    $('#c5').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#c4').attr('class') == 'square'){
    $('#c4').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#c3').attr('class') == 'square'){
    $('#c3').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#c2').attr('class') == 'square'){
    $('#c2').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else {
    $('#c1').addClass('blue');
    $turn = true;
    isThereAWinner();
  }

}
})

$cold.on('click', function(){
  if ($turn){
    if($('#d6').attr('class') == 'square'){
    $('#d6').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#d5').attr('class') == 'square'){
    $('#d5').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#d4').attr('class') == 'square'){
    $('#d4').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#d3').attr('class') == 'square'){
    $('#d3').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#d2').attr('class') == 'square'){
    $('#d2').addClass('red');
    $turn = false;
    isThereAWinner();
  } else {
    $('#d1').addClass('red');
    $turn = false;
    isThereAWinner();
  }
  } else {
    if($('#d6').attr('class') == 'square'){
    $('#d6').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#d5').attr('class') == 'square'){
    $('#d5').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#d4').attr('class') == 'square'){
    $('#d4').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#d3').attr('class') == 'square'){
    $('#d3').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#d2').attr('class') == 'square'){
    $('#d2').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else {
    $('#d1').addClass('blue');
    $turn = true;
    isThereAWinner();
  }

}
})
$cole.on('click', function(){
  if ($turn){
    if($('#e6').attr('class') == 'square'){
    $('#e6').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#e5').attr('class') == 'square'){
    $('#e5').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#e4').attr('class') == 'square'){
    $('#e4').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#e3').attr('class') == 'square'){
    $('#e3').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#e2').attr('class') == 'square'){
    $('#e2').addClass('red');
    $turn = false;
    isThereAWinner();
  } else {
    $('#e1').addClass('red');
    $turn = false;
    isThereAWinner();
  }
  } else {
    if($('#e6').attr('class') == 'square'){
    $('#e6').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#e5').attr('class') == 'square'){
    $('#e5').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#e4').attr('class') == 'square'){
    $('#e4').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#e3').attr('class') == 'square'){
    $('#e3').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#e2').attr('class') == 'square'){
    $('#e2').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else {
    $('#e1').addClass('blue');
    $turn = true;
    isThereAWinner();
  }

}
})

$colf.on('click', function(){
  if ($turn){
    if($('#f6').attr('class') == 'square'){
    $('#f6').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#f5').attr('class') == 'square'){
    $('#f5').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#f4').attr('class') == 'square'){
    $('#f4').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#f3').attr('class') == 'square'){
    $('#f3').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#f2').attr('class') == 'square'){
    $('#f2').addClass('red');
    $turn = false;
    isThereAWinner();
  } else {
    $('#f1').addClass('red');
    $turn = false;
    isThereAWinner();
  }
  } else {
    if($('#f6').attr('class') == 'square'){
    $('#f6').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#f5').attr('class') == 'square'){
    $('#f5').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#f4').attr('class') == 'square'){
    $('#f4').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#f3').attr('class') == 'square'){
    $('#f3').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#f2').attr('class') == 'square'){
    $('#f2').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else {
    $('#f1').addClass('blue');
    $turn = true;
    isThereAWinner();
  }

}
})

$colg.on('click', function(){
  if ($turn){
    if($('#g6').attr('class') == 'square'){
    $('#g6').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#g5').attr('class') == 'square'){
    $('#g5').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#g4').attr('class') == 'square'){
    $('#g4').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#g3').attr('class') == 'square'){
    $('#g3').addClass('red');
    $turn = false;
    isThereAWinner();
  } else if ($('#g2').attr('class') == 'square'){
    $('#g2').addClass('red');
    $turn = false;
    isThereAWinner();
  } else {
    $('#g1').addClass('red');
    $turn = false;
    isThereAWinner();
  }
  } else {
    if($('#g6').attr('class') == 'square'){
    $('#g6').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#g5').attr('class') == 'square'){
    $('#g5').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#g4').attr('class') == 'square'){
    $('#g4').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#g3').attr('class') == 'square'){
    $('#g3').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else if ($('#g2').attr('class') == 'square'){
    $('#g2').addClass('blue');
    $turn = true;
    isThereAWinner();
  } else {
    $('#g1').addClass('blue');
    $turn = true;
    isThereAWinner();
  }

}
})
