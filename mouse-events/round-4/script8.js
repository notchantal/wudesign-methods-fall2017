$('body').click(function(){
	$("h1").css({"color": randomColor({luminosity: 'light'})});
		var word = ["hello", "مرحبا","你好", "හෙලෝ", "kamusta", "zdravo", "ہیلو", "नमस्ते", "xin chào", "добры дзень", "bonjour", "hola", "guten tag", "ciao", "namaste", "salaam", "halò", "שלום", "sveiki", "สวัสดี", "bonghjornu", "szia", "ສະບາຍດີ", "ni hau", "Здравейте", "sain bainuu"]
	$("h1").each(function(){
		var selectedword = Math.floor(Math.random()*word.length);
		$(this).html(""+word[selectedword]+"");
		});
});