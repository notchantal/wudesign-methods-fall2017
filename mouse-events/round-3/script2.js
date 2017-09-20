$(".container").mouseover(function() {
	var word = ["hello", "bonjour", "hola", "guten tag", "ciao", "namaste", "salaam", "marhaba", "szia", "ni hau", "sain bainuu"]
	$("h1").each(function(){
		var selectedword = Math.floor(Math.random()*word.length);
		$(this).html(""+word[selectedword]+"");
		});
	$("h1").toggleClass("mono rotate lettersp")
});

$("h1").click(function() {
	$(this).toggleClass("skewmore")
	$(this).animate({
       	height: '+=60px',
        width: '+=60px',
        fontSize: '+=30px',
	}); 
});

