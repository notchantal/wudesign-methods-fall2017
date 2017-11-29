$(document).ready(function() {
    function checkWidth() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        if (windowWidth <= 600 && windowHeight <= 800) {
          $('.font').html("RESIZE WINDOW")
          $('.designer').html("")
          $('.foundry').html("")
          $('.year').html("")
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
        }

        else if (windowWidth <= 625 && windowHeight <= 800) {
          $('.font').html("Zeitgeist")
          $('.designer').html("Michael Johnson")
          $('.foundry').html("Monotype Corporation")
          $('.year').html("1990")
          $('.letter').css('background-image', 'url(images/alphabet-26.svg)')
          $('.word').css('background-image', 'none')
        }

        else if (windowWidth <= 650 && windowHeight <= 800) {
          $('.font').html("Yrsa")
          $('.designer').html("Anna Giedryś, David Březina")
          $('.foundry').html("Rosetta Type Foundry")
          $('.year').html("2016")
          $('.letter').css('background-image', 'url(images/alphabet-25.svg)')
          $('.word').css('background-image', 'none')
        }

        else if (windowWidth <= 675 && windowHeight <= 800) {
        	$('.font').html("Xenara")
          $('.designer').html("Ray Larabie")
          $('.foundry').html("Typodermic")
          $('.year').html("2005")
          $('.letter').css('background-image', 'url(images/alphabet-24.svg)')
          $('.word').css('background-image', 'none')
        }

        else if (windowWidth <= 700 && windowHeight <= 800) {
        	$('.font').html("Whitney")
          $('.designer').html("Tobias Frere-Jones")
          $('.foundry').html("H&FJ (now Hoefler & Co.)")
          $('.year').html("2004")
          $('.letter').css('background-image', 'url(images/alphabet-23.svg)')
          $('.word').css('background-image', 'none')
        }

        else if (windowWidth <= 725 && windowHeight <= 800) {
        	$('.font').html("Vitesse Slab")
          $('.designer').html("Jonathan Hoefler, Tobias Frere-Jones")
          $('.foundry').html("H&FJ (now Hoefler & Co.)")
          $('.year').html("2010")
        	$('.letter').css('background-image', 'url(images/alphabet-22.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 750 && windowHeight <= 800) {
        	$('.font').html("Univers")
          $('.designer').html("Adrian Frutiger")
          $('.foundry').html("Deberny & Peignot")
          $('.year').html("1957")
        	$('.letter').css('background-image', 'url(images/alphabet-21.svg)')  
          $('.word').css('background-image', 'none')      
   		}

   		else if (windowWidth <= 775 && windowHeight <= 800) {
        	$('.font').html("Tiempos Text")
          $('.designer').html("Kris Sowersby")
          $('.foundry').html("Klim Type Foundry")
          $('.year').html("2010")
        	$('.letter').css('background-image', 'url(images/alphabet-20.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 800 && windowHeight <= 800) {
        	$('.font').html("Space Mono")
          $('.designer').html("N/A")
          $('.foundry').html("Colophon Foundry")
          $('.year').html("2016")
        	$('.letter').css('background-image', 'url(images/alphabet-19.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 825 && windowHeight <= 800) {
        	$('.font').html("Rockwell")
          $('.designer').html("Frank Hinman Pierpont")
          $('.foundry').html("Monotype Corporation")
          $('.year').html("1934")
        	$('.letter').css('background-image', 'url(images/alphabet-18.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 850 && windowHeight <= 800) {
        	$('.font').html("Quadraat")
          $('.designer').html("Fred Smeijers")
          $('.foundry').html("FontFont")
          $('.year').html("1998")
        	$('.letter').css('background-image', 'url(images/alphabet-17.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 875 && windowHeight <= 800) {
        	$('.font').html("Playfair Display")
          $('.designer').html("Claus Eggers Sørensen")
          $('.foundry').html("Google Fonts")
          $('.year').html("2011")
        	$('.letter').css('background-image', 'url(images/alphabet-16.svg)')  
          $('.word').css('background-image', 'none')      
   		}

   		else if (windowWidth <= 900 && windowHeight <= 800) {
        	$('.font').html("Open Sans")
          $('.designer').html("Steve Matteson")
          $('.foundry').html("Ascender Corporation")
          $('.year').html("2010")
        	$('.letter').css('background-image', 'url(images/alphabet-15.svg)')  
          $('.word').css('background-image', 'none')      
   		}

   		else if (windowWidth <= 925 && windowHeight <= 800) {
        	$('.font').html("Neuzeit S")
          $('.designer').html("Arthur Ritzel, Wilhelm Pischner")
          $('.foundry').html("Linotype")
          $('.year').html("1966")
        	$('.letter').css('background-image', 'url(images/alphabet-14.svg)')  
          $('.word').css('background-image', 'none')      
   		}

   		else if (windowWidth <= 950 && windowHeight <= 800) {
        	$('.font').html("Minion")
          $('.designer').html("Robert Slimbach")
          $('.foundry').html("Adobe")
          $('.year').html("1992")
        	$('.letter').css('background-image', 'url(images/alphabet-13.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 975 && windowHeight <= 800) {
        	$('.font').html("Lyon Text")
          $('.designer').html("Kai Bernau ")
          $('.foundry').html("Commercial Type")
          $('.year').html("2009")
        	$('.letter').css('background-image', 'url(images/alphabet-12.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 1000 && windowHeight <= 800) {
        	$('.font').html("Karla")
          $('.designer').html("Jonny Pinhorn")
          $('.foundry').html("Google Fonts")
          $('.year').html("2012")
        	$('.letter').css('background-image', 'url(images/alphabet-11.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 1025 && windowHeight <= 800) {
        	$('.font').html("Joanna")
          $('.designer').html("Eric Gill")
          $('.foundry').html("Monotype Corporation")
          $('.year').html("1931")
        	$('.letter').css('background-image', 'url(images/alphabet-10.svg)')   
          $('.word').css('background-image', 'none')     
   		}

   		else if (windowWidth <= 1050 && windowHeight <= 800) {
        	$('.font').html("Interstate")
          $('.designer').html("Tobias Frere-Jones")
          $('.foundry').html("Font Bureau")
          $('.year').html("1993")
        	$('.letter').css('background-image', 'url(images/alphabet-09.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 1075 && windowHeight <= 800) {
        	$('.font').html("Helvetica")
          $('.designer').html("Edouard Hoffmann, Max Miedinger")
          $('.foundry').html("Haas Type Foundry")
          $('.year').html("1959")
        	$('.letter').css('background-image', 'url(images/alphabet-08.svg)')   
          $('.word').css('background-image', 'none')     
   		}

   		else if (windowWidth <= 1100 && windowHeight <= 800) {
        	$('.font').html("Gill Sans")
          $('.designer').html("Eric Gill")
          $('.foundry').html("Monotype Corporation")
          $('.year').html("1926")
        	$('.letter').css('background-image', 'url(images/alphabet-07.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 1125 && windowHeight <= 800) {
        	$('.font').html("Founders Grotesk")
          $('.designer').html("Kris Sowersby")
          $('.foundry').html("Klim Type Foundry")
          $('.year').html("2010")
        	$('.letter').css('background-image', 'url(images/alphabet-06.svg)')
          $('.word').css('background-image', 'none')        
   		}

   		else if (windowWidth <= 1150 && windowHeight <= 800) {
        	$('.font').html("Editor Condensed")
          $('.designer').html("Jean-Baptiste Morizot")
          $('.foundry').html("Indian Type Foundry")
          $('.year').html("2016")
        	$('.letter').css('background-image', 'url(images/alphabet-05.svg)')
          $('.word').css('background-image', 'none')        
   		}

   		else if (windowWidth <= 1175 && windowHeight <= 800) {
        	$('.font').html("Domaine Display")
          $('.designer').html("Kris Sowersby")
          $('.foundry').html("Klim Type Foundry")
          $('.year').html("2013")
        	$('.letter').css('background-image', 'url(images/alphabet-04.svg)')  
          $('.word').css('background-image', 'none')      
   		}

   		else if (windowWidth <= 1200 && windowHeight <= 800) {
        	$('.font').html("Cooper Black")
          $('.designer').html("Oswald Bruce Cooper")
          $('.foundry').html("Barnhart Brothers & Spindler")
          $('.year').html("1922")
        	$('.letter').css('background-image', 'url(images/alphabet-03.svg)')
          $('.word').css('background-image', 'none')        
   		}

   		else if (windowWidth <= 1225 && windowHeight <= 800) {
        	$('.font').html("Big Caslon")
          $('.designer').html("Mattew Carter")
          $('.foundry').html("Carter & Cone")
          $('.year').html("1994")
        	$('.letter').css('background-image', 'url(images/alphabet-02.svg)') 
          $('.word').css('background-image', 'none')       
   		}

   		else if (windowWidth <= 1250 && windowHeight <= 800) {
        	$('.font').html("Arial")
          $('.designer').html("Robin Nicholas, Patricia Saunders")          
          $('.foundry').html("Monotype Corporation")
          $('.year').html("1982")
        	$('.letter').css('background-image', 'url(images/alphabet-01.svg)')
          $('.word').css('background-image', 'none')        
   		}

      else if (windowWidth <= 10000) {
          $('.font').html("RESIZE WINDOW")
          $('.designer').html("")          
          $('.foundry').html("")
          $('.year').html("")
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')        
      }








      if (windowWidth <= 600 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 625 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-52.svg')
      }

      else if (windowWidth <= 650 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-51.svg')
      }

      else if (windowWidth <= 675 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-50.svg')
      }

      else if (windowWidth <= 700 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-49.svg')
      }

      else if (windowWidth <= 725 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-48.svg')
      }

      else if (windowWidth <= 750 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-47.svg')
      }

      else if (windowWidth <= 775 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-46.svg')
      }

      else if (windowWidth <= 800 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-45.svg')
      }

      else if (windowWidth <= 825 && windowHeight <= 400) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'url(images/alphabet-44.svg')
      }

      else if (windowWidth <= 850 && windowHeight <= 400) {
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

      







      if (windowWidth <= 600 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 625 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 650 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 675 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 700 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 725 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 750 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 775 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 800 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 825 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 850 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 875 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 900 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 925 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 950 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 975 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 1000 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 1025 && windowHeight >= 600) {
          $('.letter').css('background-image', 'none')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 1050 && windowHeight >= 600) {
          $('.letter').css('background-image', 'url(images/alphabet-61.svg')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 1075 && windowHeight >= 600) {
          $('.letter').css('background-image', 'url(images/alphabet-60.svg')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 1100 && windowHeight >= 600) {
          $('.letter').css('background-image', 'url(images/alphabet-59.svg')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 1125 && windowHeight >= 600) {
          $('.letter').css('background-image', 'url(images/alphabet-58.svg')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 1150 && windowHeight >= 600) {
          $('.letter').css('background-image', 'url(images/alphabet-57.svg')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 1175 && windowHeight >= 600) {
          $('.letter').css('background-image', 'url(images/alphabet-56.svg')
          $('.word').css('background-image', 'none')
      } 

      else if (windowWidth <= 1200 && windowHeight >= 600) {
          $('.letter').css('background-image', 'url(images/alphabet-55.svg')
          $('.word').css('background-image', 'none')
      } 

      else if (windowWidth <= 1225 && windowHeight >= 600) {
          $('.letter').css('background-image', 'url(images/alphabet-54.svg')
          $('.word').css('background-image', 'none')
      }

      else if (windowWidth <= 1250 && windowHeight >= 600) {
          $('.letter').css('background-image', 'url(images/alphabet-53.svg')
          $('.word').css('background-image', 'none')
      }









   	}

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
})