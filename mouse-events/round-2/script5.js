$('.line').mouseover(function() {
  $(this).toggleClass("skew");
  $(".line").css("background-color", randomColor);

});

$(document).ready(function() {
  var color = randomColor();
  $(".line").css("background-color", randomColor);
});