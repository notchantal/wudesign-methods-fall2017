$(document).ready(function() {
    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize <= 625) {
            $('#font').html("Zeitgeist")
            $('#letter').css('background-image', 'url(images/alphabet-26.svg)')
        }

        else if (windowSize <= 650) {
            $('#font').html("Yellowtail")
            $('#letter').css('background-image', 'url(images/alphabet-25.svg)')
        }

        else if (windowSize <= 675) {
        	$('#font').html("Xavier")
            $('#letter').css('background-image', 'url(images/alphabet-24.svg)')
        }

        else if (windowSize <= 700) {
        	$('#font').html("Whitney")
            $('#letter').css('background-image', 'url(images/alphabet-23.svg)')
        }

        else if (windowSize <= 725) {
        	$('#font').html("Vitesse Slab")
        	$('#letter').css('background-image', 'url(images/alphabet-22.svg)')        
   		}

   		else if (windowSize <= 750) {
        	$('#font').html("Univers")
        	$('#letter').css('background-image', 'url(images/alphabet-21.svg)')        
   		}

   		else if (windowSize <= 775) {
        	$('#font').html("Tiempos Text")
        	$('#letter').css('background-image', 'url(images/alphabet-20.svg)')        
   		}

   		else if (windowSize <= 800) {
        	$('#font').html("Space Mono")
        	$('#letter').css('background-image', 'url(images/alphabet-19.svg)')        
   		}

   		else if (windowSize <= 825) {
        	$('#font').html("Rockwell")
        	$('#letter').css('background-image', 'url(images/alphabet-18.svg)')        
   		}

   		else if (windowSize <= 850) {
        	$('#font').html("Quadraat")
        	$('#letter').css('background-image', 'url(images/alphabet-17.svg)')        
   		}

   		else if (windowSize <= 875) {
        	$('#font').html("Playfair Display")
        	$('#letter').css('background-image', 'url(images/alphabet-16.svg)')        
   		}

   		else if (windowSize <= 900) {
        	$('#font').html("Open Sans")
        	$('#letter').css('background-image', 'url(images/alphabet-15.svg)')        
   		}

   		else if (windowSize <= 925) {
        	$('#font').html("Neutraface Display")
        	$('#letter').css('background-image', 'url(images/alphabet-14.svg)')        
   		}

   		else if (windowSize <= 950) {
        	$('#font').html("Mistral")
        	$('#letter').css('background-image', 'url(images/alphabet-13.svg)')        
   		}

   		else if (windowSize <= 975) {
        	$('#font').html("Lyon Text")
        	$('#letter').css('background-image', 'url(images/alphabet-12.svg)')        
   		}

   		else if (windowSize <= 1000) {
        	$('#font').html("Karla")
        	$('#letter').css('background-image', 'url(images/alphabet-11.svg)')        
   		}

   		else if (windowSize <= 1025) {
        	$('#font').html("Joanna")
        	$('#letter').css('background-image', 'url(images/alphabet-10.svg)')        
   		}

   		else if (windowSize <= 1050) {
        	$('#font').html("Impact")
        	$('#letter').css('background-image', 'url(images/alphabet-09.svg)')        
   		}

   		else if (windowSize <= 1075) {
        	$('#font').html("Helvetica")
        	$('#letter').css('background-image', 'url(images/alphabet-08.svg)')        
   		}

   		else if (windowSize <= 1100) {
        	$('#font').html("Gill Sans")
        	$('#letter').css('background-image', 'url(images/alphabet-07.svg)')        
   		}

   		else if (windowSize <= 1125) {
        	$('#font').html("Founders Grotesk")
        	$('#letter').css('background-image', 'url(images/alphabet-06.svg)')        
   		}

   		else if (windowSize <= 1150) {
        	$('#font').html("Ehrhardt MT")
        	$('#letter').css('background-image', 'url(images/alphabet-05.svg)')        
   		}

   		else if (windowSize <= 1175) {
        	$('#font').html("Domaine Display")
        	$('#letter').css('background-image', 'url(images/alphabet-04.svg)')        
   		}

   		else if (windowSize <= 1200) {
        	$('#font').html("Cooper Black STD")
        	$('#letter').css('background-image', 'url(images/alphabet-03.svg)')        
   		}

   		else if (windowSize <= 1225) {
        	$('#font').html("Big Caslon")
        	$('#letter').css('background-image', 'url(images/alphabet-02.svg)')        
   		}

   		else if (windowSize <= 1250) {
        	$('#font').html("AT Times")
        	$('#letter').css('background-image', 'url(images/alphabet-01.svg)')        
   		}
   	}

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
})