$(document).ready(function() {
    function checkWidth() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        if (windowWidth <= 625) {
          $('.font').html("Zeitgeist")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
          $('.letter').css('background-image', 'url(images/alphabet-26.svg)')
          $('.word').css('background-image', 'none')
        }

        else if (windowWidth <= 650) {
          $('.font').html("Yellowtail")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
          $('.letter').css('background-image', 'url(images/alphabet-25.svg)')
          $('.word').css('background-image', 'none')
        }

        else if (windowWidth <= 675) {
        	$('.font').html("Xavier")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
          $('.letter').css('background-image', 'url(images/alphabet-24.svg)')
          $('.word').css('background-image', 'none')
        }

        else if (windowWidth <= 700) {
        	$('.font').html("Whitney")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
          $('.letter').css('background-image', 'url(images/alphabet-23.svg)')
          $('.word').css('background-image', 'none')
        }

        else if (windowWidth <= 725) {
        	$('.font').html("Vitesse Slab")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-22.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 750) {
        	$('.font').html("Univers")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-21.svg)')  
          $('.word').css('background-image', 'none')      
   		}

   		else if (windowWidth <= 775) {
        	$('.font').html("Tiempos Text")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-20.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 800) {
        	$('.font').html("Space Mono")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-19.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 825) {
        	$('.font').html("Rockwell")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
        	$('.letter').css('background-image', 'url(images/alphabet-18.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 850) {
        	$('.font').html("Quadraat")
          $('.designer').html("Fred Smeijers")
          $('.foundry').html("FontFont")
          $('.year').html("1998")
        	$('.letter').css('background-image', 'url(images/alphabet-17.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 875) {
        	$('.font').html("Playfair Display")
          $('.designer').html("Claus Eggers Sørensen")
          $('.foundry').html("Google Fonts")
          $('.year').html("2011")
        	$('.letter').css('background-image', 'url(images/alphabet-16.svg)')  
          $('.word').css('background-image', 'none')      
   		}

   		else if (windowWidth <= 900) {
        	$('.font').html("Open Sans")
          $('.designer').html("Steve Matteson")
          $('.foundry').html("Ascender Corporation")
          $('.year').html("2010")
        	$('.letter').css('background-image', 'url(images/alphabet-15.svg)')  
          $('.word').css('background-image', 'none')      
   		}

   		else if (windowWidth <= 925) {
        	$('.font').html("Neuzeit S")
          $('.designer').html("Arthur Ritzel, Wilhelm Pischner")
          $('.foundry').html("Linotype")
          $('.year').html("1966")
        	$('.letter').css('background-image', 'url(images/alphabet-14.svg)')  
          $('.word').css('background-image', 'none')      
   		}

   		else if (windowWidth <= 950) {
        	$('.font').html("Minion")
          $('.designer').html("Robert Slimbach")
          $('.foundry').html("Adobe")
          $('.year').html("1992")
        	$('.letter').css('background-image', 'url(images/alphabet-13.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 975) {
        	$('.font').html("Lyon Text")
          $('.designer').html("Kai Bernau ")
          $('.foundry').html("Commercial Type")
          $('.year').html("2009")
        	$('.letter').css('background-image', 'url(images/alphabet-12.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 1000) {
        	$('.font').html("Karla")
          $('.designer').html("Jonny Pinhorn")
          $('.foundry').html("Google Fonts")
          $('.year').html("2012")
        	$('.letter').css('background-image', 'url(images/alphabet-11.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 1025) {
        	$('.font').html("Joanna")
          $('.designer').html("Eric Gill")
          $('.foundry').html("Monotype")
          $('.year').html("1931")
        	$('.letter').css('background-image', 'url(images/alphabet-10.svg)')   
          $('.word').css('background-image', 'none')     
   		}

   		else if (windowWidth <= 1050) {
        	$('.font').html("Interstate")
          $('.designer').html("Tobias Frere-Jones")
          $('.foundry').html("Font Bureau")
          $('.year').html("1993")
        	$('.letter').css('background-image', 'url(images/alphabet-09.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 1075) {
        	$('.font').html("Helvetica")
          $('.designer').html("Edouard Hoffmann, Max Miedinger")
          $('.foundry').html("Haas Type Foundry")
          $('.year').html("1959")
        	$('.letter').css('background-image', 'url(images/alphabet-08.svg)')   
          $('.word').css('background-image', 'none')     
   		}

   		else if (windowWidth <= 1100) {
        	$('.font').html("Gill Sans")
          $('.designer').html("Eric Gill")
          $('.foundry').html("Monotype")
          $('.year').html("1926")
        	$('.letter').css('background-image', 'url(images/alphabet-07.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 1125) {
        	$('.font').html("Founders Grotesk")
          $('.designer').html("Kris Sowersby")
          $('.foundry').html("Klim Type Foundry")
          $('.year').html("2010")
        	$('.letter').css('background-image', 'url(images/alphabet-06.svg)')
          $('.word').css('background-image', 'none')        
   		}

   		else if (windowWidth <= 1150) {
        	$('.font').html("Editor Condensed")
          $('.designer').html("Jean-Baptiste Morizot")
          $('.foundry').html("Indian Type Foundry")
          $('.year').html("2016")
        	$('.letter').css('background-image', 'url(images/alphabet-05.svg)')
          $('.word').css('background-image', 'none')        
   		}

   		else if (windowWidth <= 1175) {
        	$('.font').html("Domaine Display")
          $('.designer').html("Kris Sowersby")
          $('.foundry').html("Klim Type Foundry")
          $('.year').html("2013")
        	$('.letter').css('background-image', 'url(images/alphabet-04.svg)')  
          $('.word').css('background-image', 'none')      
   		}

   		else if (windowWidth <= 1200) {
        	$('.font').html("Cooper Black")
          $('.designer').html("Oswald Bruce Cooper")
          $('.foundry').html("Barnhart Brothers & Spindler")
          $('.year').html("1922")
        	$('.letter').css('background-image', 'url(images/alphabet-03.svg)')
          $('.word').css('background-image', 'none')        
   		}

   		else if (windowWidth <= 1225) {
        	$('.font').html("Big Caslon")
          $('.designer').html("Mattew Carter")
          $('.foundry').html("Carter & Cone")
          $('.year').html("1994")
        	$('.letter').css('background-image', 'url(images/alphabet-02.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 1250) {
        	$('.font').html("Arial")
          $('.designer').html("Robin Nicholas, Patricia Saunders")          
          $('.foundry').html("Monotype")
          $('.year').html("1982")
        	$('.letter').css('background-image', 'url(images/alphabet-01.svg)')
          $('.word').css('background-image', 'none')        
   		}

      else if (windowWidth >= 1250) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
          $('.font').html("")
          $('.designer').html("")          
          $('.foundry').html("")
          $('.year').html("")
          $('.word').css('background-image', 'none')
      }




       if (windowWidth <= 850 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-43.svg')
      }

      else if (windowWidth <= 875 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-42.svg')
      }

      else if (windowWidth <= 900 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-41.svg')
      }

      else if (windowWidth <= 925 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-40.svg')
      }

      else if (windowWidth <= 950 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-39.svg')
      }

      else if (windowWidth <= 975 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-38.svg')
      }

      else if (windowWidth <= 1000 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-37.svg')
      }

      else if (windowWidth <= 1025 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-36.svg')
      }

      else if (windowWidth <= 1050 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-35.svg')
      }

      else if (windowWidth <= 1075 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-34.svg')
      }

      else if (windowWidth <= 1100 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-33.svg')
      }

      else if (windowWidth <= 1125 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-32.svg')
      }

      else if (windowWidth <= 1150 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-31.svg')
      }

      else if (windowWidth <= 1175 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-30.svg')
      } 

      else if (windowWidth <= 1200 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-29.svg')
      } 

      else if (windowWidth <= 1225 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-28.svg')
      }

      else if (windowWidth <= 1250 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-27.svg')
      }

      




   	}

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
})