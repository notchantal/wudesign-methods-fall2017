$('body').ready(function() {
  $('body').css("cursor", "crosshair");
});


$(".box").mouseover(function() {
  var color = randomColor();
  $(this).css("background-color", randomColor({luminosity: 'light', hue: 'pink'}));
});

$('#one').mouseover(function() {
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

$('#two').mouseover(function() {
ion.sound({
    sounds: [
        {name: "button_tiny"},
    ],

    // main config
    path: "sounds/",
    preload: true,
    multiplay: true,
    volume: 0.9
});
// play sound
ion.sound.play("button_tiny");
});

$('#three').mouseover(function() {
ion.sound({
    sounds: [
        {name: "metal_plate"},
    ],

    // main config
    path: "sounds/",
    preload: true,
    multiplay: true,
    volume: 0.9
});
// play sound
ion.sound.play("metal_plate");
});

$('#four').mouseover(function() {
ion.sound({
    sounds: [
        {name: "staple_gun"},
    ],

    // main config
    path: "sounds/",
    preload: true,
    multiplay: true,
    volume: 0.9
});
// play sound
ion.sound.play("staple_gun");
});



