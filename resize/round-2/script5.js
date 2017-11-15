$(document).ready(function() {
    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize <= 625) {
            $('.font').html("Zeitgeist")
            $('.designer').html("")
            $('.foundry').html("")
            $('.year').html("")
            $('.letter').css('background-image', 'url(images/alphabet-26.svg)')
        }

        else if (windowSize <= 650) {
            $('.font').html("Yellowtail")
            $('.designer').html("")
            $('.foundry').html("")
            $('.year').html("")
            $('.letter').css('background-image', 'url(images/alphabet-25.svg)')
        }

        else if (windowSize <= 675) {
        	$('.font').html("Xavier")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
          $('.letter').css('background-image', 'url(images/alphabet-24.svg)')
        }

        else if (windowSize <= 700) {
        	$('.font').html("Whitney")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
            $('.letter').css('background-image', 'url(images/alphabet-23.svg)')
        }

        else if (windowSize <= 725) {
        	$('.font').html("Vitesse Slab")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-22.svg)')        
   		}

   		else if (windowSize <= 750) {
        	$('.font').html("Univers")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-21.svg)')        
   		}

   		else if (windowSize <= 775) {
        	$('.font').html("Tiempos Text")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-20.svg)')        
   		}

   		else if (windowSize <= 800) {
        	$('.font').html("Space Mono")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-19.svg)')        
   		}

   		else if (windowSize <= 825) {
        	$('.font').html("Rockwell")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-18.svg)')        
   		}

   		else if (windowSize <= 850) {
        	$('.font').html("Quadraat")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-17.svg)')        
   		}

   		else if (windowSize <= 875) {
        	$('.font').html("Playfair Display")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-16.svg)')        
   		}

   		else if (windowSize <= 900) {
        	$('.font').html("Open Sans")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-15.svg)')        
   		}

   		else if (windowSize <= 925) {
        	$('.font').html("Neutraface Display")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-14.svg)')        
   		}

   		else if (windowSize <= 950) {
        	$('.font').html("Mistral")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-13.svg)')        
   		}

   		else if (windowSize <= 975) {
        	$('.font').html("Lyon Text")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-12.svg)')        
   		}

   		else if (windowSize <= 1000) {
        	$('.font').html("Karla")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-11.svg)')        
   		}

   		else if (windowSize <= 1025) {
        	$('.font').html("Joanna")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-10.svg)')        
   		}

   		else if (windowSize <= 1050) {
        	$('.font').html("Impact")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-09.svg)')        
   		}

   		else if (windowSize <= 1075) {
        	$('.font').html("Helvetica")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-08.svg)')        
   		}

   		else if (windowSize <= 1100) {
        	$('.font').html("Gill Sans")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-07.svg)')        
   		}

   		else if (windowSize <= 1125) {
        	$('.font').html("Founders Grotesk")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-06.svg)')        
   		}

   		else if (windowSize <= 1150) {
        	$('.font').html("Ehrhardt MT")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-05.svg)')        
   		}

   		else if (windowSize <= 1175) {
        	$('.font').html("Domaine Display")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-04.svg)')        
   		}

   		else if (windowSize <= 1200) {
        	$('.font').html("Cooper Black STD")
          $('.designer').html("Oswald Bruce Cooper")
          $('.foundry').html("Barnhart Brothers & Spindler")
          $('.year').html("1922")
        	$('.letter').css('background-image', 'url(images/alphabet-03.svg)')        
   		}

   		else if (windowSize <= 1225) {
        	$('.font').html("Big Caslon")
          $('.designer').html("Mattew Carter")
          $('.foundry').html("Carter & Cone")
          $('.year').html("1994")
        	$('.letter').css('background-image', 'url(images/alphabet-02.svg)')        
   		}

   		else if (windowSize <= 1250) {
        	$('.font').html("Arial")
          $('.designer').html("Robin Nicholas, Patricia Saunders")          
          $('.foundry').html("Monotype")
          $('.year').html("1982")
        	$('.letter').css('background-image', 'url(images/alphabet-01.svg)')        
   		}
   	}

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
})