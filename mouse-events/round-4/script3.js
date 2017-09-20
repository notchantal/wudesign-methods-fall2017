$(function(){
	var fadeDelay = 1000;
	var fadeDuration = 1000;
	var word = [
		"A quick movement of the enemy will jeopardize six gunboats.",
		"Playing jazz vibe chords quickly excites my wife.",
		"A very bad quack might jinx zippy fowls.",
		"Relaxing in basins at the end of inlets terminates the endless tests from the box.",
		"Carved symbols in a mountain hollow on the bank of an inlet irritated an eccentric person.",
		"Cross valley and plain to steal coins from Saudi mint.",
		"An Abyssinian fly playing a Celtic violin was annoyed by trashy flags on which were the Hebrew letter qoph.",
		"A grass-plains wryneck climbs upon a male yak-cattle hybrid that was donated under Islamic law.",
		"Signage indicating endowments for industrial diamonds annoy filth-spreading genies.",
		"We promptly judged antique ivory buckles for the next prize.",
		"How razorback jumping frogs can level six piqued gymnasts.",
		"Sixty zippers were quickly picked from the woven jute bag.",
		"Crazy Fredrick bought many very exquisite opal jewels.",
		"Jump by vow of quick, lazy strength in Oxford.",
		"The quick brown fox jumps over a lazy dog.",
		"Pack my box with five dozen liquor jugs.",
		"How quickly daft jumping zebras vex.",
		"Sphinx of black quartz: judge my vow.",
		"Quick zephyrs blow, vexing daft Jim.",
		"Waltz, nymph, for quick jigs vex bud.",
		"Jack amazed a few girls by dropping the antique onyx vase!",
		"Jelly‐like above the high wire, six quaking pachyderms kept the climax of the extravaganza in a dazzling state of flux.",
		"Forsaking monastic tradition, twelve jovial friars gave up their vocation for a questionable existence on the flying trapeze.",
		"The junior office clerks were quite amazed at the extra reward given by their generous employer",
		"Sympathizing would fix Quaker objectives.",
		"When we go back to Juarez, Mexico, do we fly over picturesque Arizona?",
		"William said that everything about his jacket was in quite good condition except for the zipper.",
		"We promptly judged antique ivory buckles for the next prize."
		]

	window.alert("Move mouse to write, click to change font.");

		$('.page').mousemove(function(e){
			var newDiv = $('<div class="coloredBlock">')
				.css({
					"left": e.pageX + 'px',
					"top": e.pageY + 'px',
				})
			$('.coloredBlock').each(function(){
				var selectedword = Math.floor(Math.random()*word.length);	
				$(this).html("<p>"+word[selectedword]+"</p>");
				$(this).css({
					"color": randomColor({hue: 'green'}),
				})
			});

		$('.page').click(function(){
			var fontName = ["Alfa Slab One", "Armata", "VT323", "Volkhov", "Glegoo", "Monoton", "Special Elite", "Press Start 2P", "Carter One", "Nixie One", "Cinzel Decorative", "Quando", "Headland One", "Holtwood One SC"]
			var selectedfontName = Math.floor(Math.random()*fontName.length);	
			$('body').css({
					"font-family": fontName[selectedfontName]
				})
			});


		$('.page').append(newDiv);
			})     

});