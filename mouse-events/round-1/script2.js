$(document).ready(function() {
  var color = randomColor();
  $(".box").css("background-color", randomColor({hue: 'blue'}));
});

$(".box").mouseover(function() {
  var color = randomColor();
  $(this).css("background-color", randomColor({hue: 'blue'}));
});