$(".box").click(function() {

  $(this).draggable();

  $(this).css("cursor", "move");

  var color = randomColor();
  $(this).css("background-color", color);
  $('body').css("background-color", randomColor);

  var x = Math.floor((Math.random()*500)+5);
  $(this).width(x+'px');
  $(this).height(x+'px');

  $(this).css({
    left:(Math.random()*$(window).width()-20),
    top:(Math.random()*$(window).height()-20),});
});


$(".box").dblclick(function() {
  $(this).addClass('imgbackground8');

});
