$('.line').mouseover(function() {
  $(this).toggleClass("skew big");
  $(".line").css("background-color", randomColor);
  $('body').css("background-color", randomColor);

});