$(function(){
	var fadeDelay = 1000;
	var fadeDuration = 1000;
	var color = randomColor();
	var word = ["hello", "bonjour", "hola", "guten tag", "ciao", "namaste", "salaam", "marhaba", "szia", "ni hau", "sain bainuu"]
	window.alert("Move your mouse around.");

		$('.page').mousemove(function(e){
			var newDiv = $('<div class="coloredBlock">')
				.css({
					"left": e.pageX + 'px',
					"top": e.pageY + 'px',
				})
			$(this).css ({
				"backgroundColor": randomColor({luminosity:  'light', hue: 'red'})
			})
			$('.coloredBlock').each(function(){
				var selectedword = Math.floor(Math.random()*word.length);	
				$(this).html("<p>"+word[selectedword]+"</p>");
				$(this).css({
					"color": randomColor({hue: 'blue'}),
				})
			});

		$('.page').click(function(){
			var fontName = ["helvetica", "courier"]
			var selectedfontName = Math.floor(Math.random()*fontName.length);	
			$('body').css({
					"font-family": fontName[selectedfontName]
				})
			});

		$('.page').append(newDiv);
			})     

});