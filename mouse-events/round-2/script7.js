$('.line').mouseover(function() {
  $(this).toggleClass("skew big");
  $(".line").css("background-color", randomColor);
  $('body').css("background-color", randomColor);
});


$('.line').mouseover(function() {
ion.sound({
    sounds: [
        {name: "snap"},
    ],

    // main config
    path: "sounds/",
    preload: true,
    multiplay: true,
    volume: 0.9
});
// play sound
ion.sound.play("snap");
});