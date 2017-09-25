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
  $(this).toggleClass("skew big");
  $(".line").css("background-color", randomColor({luminosity: "dark", hue: "red"}));
});


// $("h1").hover(function(){
// 	$(this).css("font-size", '10px');
// });

// $("h1").click(function(){
// 	$(this).css({
// 		"color": randomColor({luminosity: 'light'}),
// 		"font-size": '100px'
// 	});
// 		var word = ["hello", "مرحبا","你好", "හෙලෝ", "kamusta", "zdravo", "ہیلو", "नमस्ते", "xin chào", "добры дзень", "bonjour", "hola", "guten tag", "ciao", "namaste", "salaam", "halò", "שלום", "sveiki", "สวัสดี", "bonghjornu", "szia", "ສະບາຍດີ", "ni hau", "Здравейте", "sain bainuu"]
// 	$(this).each(function(){
// 		var selectedword = Math.floor(Math.random()*word.length);
// 		$(this).html(""+word[selectedword]+"");
// 		});
// });