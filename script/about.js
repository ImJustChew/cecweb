function changelang(lang) {
		switch (lang) {
			case 1: 
				$('#en').fadeOut('slow');
				$('#zh').fadeIn('slow');
				break;
			case 2: 
				$('#zh').fadeOut('slow');
				$('#jp').fadeIn('slow');
				break;
			case 3: 
				$('#jp').fadeOut('slow');
				$('#de').fadeIn('slow');
				break;
			case 4: 
				$('#de').fadeOut('slow');
				$('#en').fadeIn('slow');
				break;
		}
};