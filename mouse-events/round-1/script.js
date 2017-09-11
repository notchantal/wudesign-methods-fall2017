$(document).ready(function() {
  var color = randomColor();
  $(".box").css("background-color", randomColor);
});

$(".box").mouseover(function() {
  var color = randomColor();
  $(this).css("background-color", randomColor);
});