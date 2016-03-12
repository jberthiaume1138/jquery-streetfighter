$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	$('.ryu').mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();	
	})
	$('.ryu').mousedown(function() {
		$('.ryu-throwing').show();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();	
		$('.hadouken').show();
		// play sound
		// animate Hadouken
	})
	$('.ryu').mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-ready').show();	
		// $('.hadouken').hide();
	});
});