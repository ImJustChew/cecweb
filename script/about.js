function changelang(lang) {
		switch (lang) {
			case 1: 
				$('en').fadeOut('slow', function(){ $('zh').fadeIn('slow');   });
				break;
			case 2: 
				$('zh').fadeOut('slow', function(){ $('jp').fadeIn('slow');   });
				break;
			case 3: 
				$('jp').fadeOut('slow', function(){ $('de').fadeIn('slow');   });
				break;
			case 4: 
				$('de').fadeOut('slow', function(){ $('en').fadeIn('slow');   });
				break;
		}
};