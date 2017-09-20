$(".container").mouseover(function() {
	var word = ["hello", "bonjour", "hola", "guten tag", "ciao", "namaste", "salaam", "marhaba", "szia", "ni hau", "sain bainuu"]
	var selectedword = Math.floor(Math.random()*word.length);
	$("h1").html(""+word[selectedword]+"");
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

