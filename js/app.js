$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();	
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-throwing').show();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();	
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left','515px');
			}
		)
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-ready').show();	
	})

 	$(document).keydown(function(e) {
 		if (e.which == 88 ) {
			console.log("key=" + event.keyCode + " down");
			coolRyu();
    	}
    })

 	$(document).keyup(function(e) {
 		if (e.which ==88 ) {
 			console.log("key=" + event.keyCode + " up");
 			stillRyu();
 		}
 	});
});

function coolRyu () {
	$('.ryu-cool').show();
	$('.ryu-throwing').hide();
	$('.ryu-still').hide();
	$('.ryu-ready').hide();
}

function stillRyu () {
	$('.ryu-cool').hide();
	$('.ryu-throwing').hide();
	$('.ryu-still').show();
	$('.ryu-ready').hide();
}

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}