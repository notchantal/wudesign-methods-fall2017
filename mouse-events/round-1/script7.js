$('body').ready(function() {
  $('body').css("cursor", "crosshair");
});


$(".box").mouseover(function() {
  var color = randomColor();
  $(this).css("background-color", randomColor({luminosity: 'light', hue: 'pink'}));
});

$('.box').mouseover(function() {
ion.sound({
    sounds: [
        {name: "tap"},
    ],

    // main config
    path: "sounds/",
    preload: true,
    multiplay: true,
    volume: 0.9
});
// play sound
ion.sound.play("tap");
});



