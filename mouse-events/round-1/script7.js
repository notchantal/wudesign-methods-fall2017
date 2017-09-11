$('body').ready(function() {
  $('body').css("cursor", "crosshair");
});


$(".box").mouseover(function() {
  var color = randomColor();
  $(this).css("background-color", randomColor({luminosity: 'light', hue: 'pink'}));
});



$(".box").click(function() {
ion.sound({
    sounds: [
        {name: "button_tiny"},
        {name: "metal_plate"}
    ],

    // main config
    path: "sounds/",
    preload: true,
    multiplay: true,
    volume: 0.9
});
// play sound
ion.sound.play("button_tiny, metal_plate");
});


