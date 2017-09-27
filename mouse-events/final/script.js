$('document').ready(function(){
	$(".container").css("visibility",'hidden')
	$(this).click(function(){
		$(".welcome").css("visibility",'hidden')
		$(".container").css({
			"visibility":'visible',
		})

	});
});

$("h1").mouseover(function(){
	$(this).css({
		"font-size": '180px',
		"position": 'absolute',
		"opacity": '0.1'
	});
		var word = ["hello", "مرحبا","你好", "හෙලෝ", "kamusta", "zdravo", "ہیلو", "नमस्ते", "xin chào", "добры дзень", "bonjour", "hola", "guten tag", "ciao", "namaste", "salaam", "halò", "שלום", "sveiki", "สวัสดี", "bonghjornu", "szia", "ສະບາຍດີ", "ni hau", "Здравейте", "sain bainuu"]
	$(this).each(function(){
		var selectedword = Math.floor(Math.random()*word.length);
		$(this).html(""+word[selectedword]+"");
		});
});

$("h2").mouseover(function(){
	$(this).css({
		"font-size": '17px',
		"font-weight": 'bold'
	});
		var word = ["hello", "مرحبا","你好", "හෙලෝ", "kamusta", "zdravo", "ہیلو", "नमस्ते", "xin chào", "добры дзень", "bonjour", "hola", "guten tag", "ciao", "namaste", "salaam", "halò", "שלום", "sveiki", "สวัสดี", "bonghjornu", "szia", "ສະບາຍດີ", "ni hau", "Здравейте", "sain bainuu"]
	$(this).each(function(){
		var selectedword = Math.floor(Math.random()*word.length);
		$(this).html(""+word[selectedword]+"");
		});
});

$('.line').mouseover(function() {
  $(this).toggleClass("big");
  $(".line").css("background-color", randomColor({luminosity: "light", hue: "red"}));
});

$('body').click(function() {
  $(this).css("background-color", randomColor({luminosity: "dark"}));
});

$("h2").click(function() {
  $(this).toggleClass("skew");
});