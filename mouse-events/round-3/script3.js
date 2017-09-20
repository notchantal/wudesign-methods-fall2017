$(function(){
	var fadeDelay = 1000;
	var fadeDuration = 1000;
	var color = randomColor();
	var image = ["images/trump6.png"]
	var selectedimage = Math.floor(Math.random()*image.length);
	$('.page').mouseover(function(e){
		var newDiv = $('<div class="coloredBlock">')
			.css({
				"left": e.pageX + 'px',
				"top": e.pageY + 'px',
  				'background-image': 'url('+image[selectedimage]+')',
			})
	$('.page').append(newDiv);
		})        
});