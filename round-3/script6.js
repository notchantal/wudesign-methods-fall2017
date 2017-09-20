$(function(){
	var fadeDelay = 1000;
	var fadeDuration = 1000;
	var color = randomColor();
	var word = ["hello", "bonjour", "hola", "guten tag", "ciao", "namaste", "salaam", "marhaba", "szia", "ni hau", "sain bainuu"]
	$('.page').ready(function(){
		window.alert("Click");
		});
	$('.page').click(function(e){
		var newDiv = $('<div class="coloredBlock">')
			.css({
				"left": e.pageX + 'px',
				"top": e.pageY + 'px',
			})
		$('.coloredBlock').each(function(){
			var selectedword = Math.floor(Math.random()*word.length);	
			$(this).html("<p>"+word[selectedword]+"</p>");
			$(this).css({
				"color": randomColor({hue: 'blue'}),
			})

		});
	$('.page').append(newDiv);
		})     
});