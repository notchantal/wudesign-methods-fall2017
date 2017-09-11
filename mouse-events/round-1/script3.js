$(document).click(function() {
  var color = randomColor();
  $(".box").css("background-color", randomColor({luminosity: 'dark', hue: 'blue'}));
});

$(".box").mouseover(function() {
  var color = randomColor();
  $(this).css("background-color", randomColor({luminosity: 'light', hue: 'blue'}));
});

