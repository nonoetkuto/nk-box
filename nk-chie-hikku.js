// fucking constants
var HIKKU = 104;
var CHIE = 99;

var a = document.createElement('audio');

$.fn.rotateMeSenpai = function(angle) {
  return this.each(function() {
    var $e = $(this); // <- fuck javascript

    $({deg: 0}).animate({deg: angle}, {
      step: function(t) {
        $e.css({
           transform: 'rotate(' + t + 'deg)' // lol
         });
      }
    });
  });
};

function chie(){
	a.setAttribute('src', 'chie.mp3');
	a.currentTime = 0.2; // a little fucking offset bitch
	a.play();
	
	$('.nk-logo').rotateMeSenpai(-360);
}

function hikku(){
	a.setAttribute('src', 'hikku.mp3');
	a.currentTime = 0.2; // a little fucking offset bitch
	a.play();
	$('.nk-logo').rotateMeSenpai(360);
}

function ohmygod(){
	a.setAttribute('src', 'ohmygod.mp3');
	a.currentTime = 0.2; // a little fucking offset bitch
	a.play();
	
	//$('.nk-logo').rotateMeSenpai(-360);
}

function hasard(min,max){
	return min+Math.floor(Math.random()*(max-min+1));
}

function randomson(){
	var rng = hasard(1,3);
	switch(rng){
		case 1:
			chie();
		break;
		case 2:
			hikku();
			break;
		case 3:
			ohmygod();
			break;
	}
}


$(document).keypress(function(event) {
	var angle = 0;
	switch(event.which) {
		case CHIE: 
		a.setAttribute('src', 'chie.mp3');
		a.play();
		angle = -360;
		break;

		case HIKKU:
		a.setAttribute('src', 'hikku.mp3');
		a.currentTime = 0.2; // a little fucking offset bitch
		a.play();
		angle = 360;
		break;
	}

	// NOW DO A BARREL ROLL
	$('.nk-logo').rotateMeSenpai(angle);
});