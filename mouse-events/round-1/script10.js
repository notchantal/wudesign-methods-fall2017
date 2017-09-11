$('body').ready(function() {
  $('body').css("cursor", "crosshair");
});


$(".box").mouseover(function() {
  var color = randomColor();
  $(this).css("background-color", randomColor({luminosity: 'light', hue: 'orange'}));
});

$('#one').mouseover(function() {
ion.sound({
    sounds: [
        {name: "china1"},
    ],

    // main config
    path: "china-sounds/",
    preload: true,
    multiplay: true,
    volume: 0.9
});
// play sound
ion.sound.play("china1");
});

$('#two').mouseover(function() {
ion.sound({
    sounds: [
        {name: "china2"},
    ],

    // main config
    path: "china-sounds/",
    preload: true,
    multiplay: true,
    volume: 0.9
});
// play sound
ion.sound.play("china2");
});

$('#three').mouseover(function() {
ion.sound({
    sounds: [
        {name: "china3"},
    ],

    // main config
    path: "china-sounds/",
    preload: true,
    multiplay: true,
    volume: 0.9
});
// play sound
ion.sound.play("china3");
});

$('#four').mouseover(function() {
ion.sound({
    sounds: [
        {name: "china4"},
    ],

    // main config
    path: "china-sounds/",
    preload: true,
    multiplay: true,
    volume: 0.9
});
// play sound
ion.sound.play("china4");
});



