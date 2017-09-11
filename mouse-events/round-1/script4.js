$(".box").mouseover(function() {
  var color = randomColor();
  $(this).css("background-color", randomColor({luminosity: 'light', hue: 'pink'}));
});

$('.box').click(function() {
  var color = randomColor();
  $(this).css("background-color", randomColor());
});
