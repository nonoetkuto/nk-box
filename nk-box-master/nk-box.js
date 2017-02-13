// fucking constants
var HIKKU = 104;
var CHIE = 99;
var a = document.createElement('audio');
var counter = 0;

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

function playSound(name, offset) {
	a.setAttribute('src', 'res/sounds/'+name+'.mp3');
	if(offset != undefined) 
		a.currentTime = offset; // a little fucking offset bitch
	
	a.play();
	$('.nk-logo').rotateMeSenpai(hasard(0,1) ? 360 : -360);
}

function randomson() {
	var len = $('.btnSound').length;
	var i = Math.floor((Math.random() * len));
	playSound($('.btnSound')[i]["id"]);
}

function cliquepas(){
	counter = counter +1;
	if (counter == 100){
		location.assign("http://www.pornhub.com/view_video.php?viewkey=1162851739");
	}
	
}

$(document).keypress(function(event) {
	var angle = 0;
	switch(event.which) {
		case CHIE: 
			a.setAttribute('src', 'res/sounds/chie.mp3');
			a.play();
			angle = -360;
			break;

		case HIKKU:
			a.setAttribute('src', 'res/sounds/hikku.mp3');
			a.currentTime = 0.2; // a little fucking offset bitch
			a.play();
			angle = 360;
			break;
	}

	// NOW DO A BARREL ROLL
	$('.nk-logo').rotateMeSenpai(angle);
});