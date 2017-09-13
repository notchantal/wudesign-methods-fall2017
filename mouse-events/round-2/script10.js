$('.container').mousemove(function() {
	var image = ["images/obama1.png", "images/obama2.png", "images/obama3.png", "images/obama4.png", "images/obama5.png", "images/obama6.png", "images/obama7.png", "images/obama8.png", "images/obama9.png", "images/obama10.png", "images/obama11.png", "images/obama12.png", "images/obama13.png", "images/obama14.png"]
	var selectedimage = Math.floor(Math.random()*image.length);
  $(this).css({
  		'background-image': 'url('+image[selectedimage]+')',
  		'background-position': '50% -50%',
  		'background-repeat': 'repeat',
  		'background-size': '25%'
  	});
});



$('.container').click(function() {
	var sound = ["sounds/obama/obama1.mp3", "sounds/obama/obama1.mp3"]
	var selectedsound = Math.floor(Math.random()*sound.length);
	new Audio('+sound[selectedsound]+').play()
});

