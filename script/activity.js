function sdgverygood() {
	$('#title-text').fadeOut('600');
	$('#description-content').fadeOut('1250');
	setTimeout(function(){
	$('#sdg-title').fadeIn('3000');
	$('#sdg-container').fadeIn('3000');
	},500);
}

function backintime() {
	$('#sdg-title').fadeOut('600');
	$('#sdg-container').fadeOut('1250');
	setTimeout(function(){
	$('#title-text').fadeIn('3000');
	$('#description-content').fadeIn('3000');
	},500);
}

function start() {
	$('#start').fadeOut('slow');
	setTimeout(function(){
	$('#content-container').fadeIn('slow');
	$('#l0n1').addClass('active');
	},500);
}

var item0 = true;
var item1 = false;
var item2 = false;
var item3 = false;
var item4 = false;
function menuitem(item) {
	
	switch(item) {
		case 0:
		if (item0 == true) {
		item0 = false;
		$('#l0n1-desc').fadeOut('850');
		$('#l0n1').removeClass('active');
		} else {
			item0 = true;
			$('#l0n1-desc').fadeIn();
			$('#l0n1').addClass('active');
		}
		break;
		
		case 1:
		if ( item1 == false) {
		$('#l0n1-desc').fadeOut('850');
		item0 = false;
		$('#psp').addClass('active').siblings('div').removeClass('active');
		item1 = true;
		setTimeout(function() {
			$('#psp-desc').fadeIn();
		},400); 
		} else {
			item1 = false;
			$('#psp-desc').fadeOut('850');
			$('#psp').removeClass('active');
		}
		break;
		
		case 2:
		if ( item2 == false) {
		$('#psp-desc').fadeOut('850');
		item1 = false;
		$('#mc').addClass('active').siblings('div').removeClass('active');
		item2 = true;
		setTimeout(function() {
			$('#mc-desc').fadeIn();
		},400);
		} else {
			item2 = false;
			$('#mc-desc').fadeOut('850');
			$('#mc').removeClass('active');
		}
		break;
		
		case 3:
		if ( item3 == false) {
		$('#mc-desc').fadeOut('850');
		item2 = false;
		$('#cne').addClass('active').siblings('div').removeClass('active');
		item3 = true;
		setTimeout(function() {
			$('#cne-desc').fadeIn();
		},400);
		} else {
			item3 = false;
			$('#cne-desc').fadeOut('850');
			$('#cne').removeClass('active');
		}
		break;
		
		case 4:
		if ( item4 == false) {
		$('#cne-desc').fadeOut('850');
		item3 = false;
		$('#cs').addClass('active').siblings('div').removeClass('active');
		item4 = true;
		setTimeout(function() {
			$('#cs-desc').fadeIn();
		},400);
		} else {
			item4 = false;
			$('#cs-desc').fadeOut('850');
			$('#cs').removeClass('active');
		}
		break;
		
}}

var idle = false;
$(document).ready(function(){
	window.setInterval( function(){
	  if ( item0 == item1 == item2 == item3 == item4 == false ) {
		  idle = true;
		  setTimeout( function() {
		$('#idle-desc').fadeIn();
		  },500);
		} else {
			$('#idle-desc').fadeOut();
			idle = false;
		}
	},800)
});
		