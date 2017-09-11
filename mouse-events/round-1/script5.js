$(".box").mouseover(function() {
  var color = randomColor();
  $(this).css("background-color", randomColor({luminosity: 'light', hue: 'pink'}));
});

$(document).click(function() {
  var color = randomColor();
  $(".box").addClass('skew');
});
