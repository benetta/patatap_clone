
document.querySelector('body').addEventListener('keypress', function(event) {
	switch(event.key) {
		case 'q':
		var sound = new Howl({
	      src: ['sounds/wipe.wav','sounds/wipe.mp3']
	    });
	    sound.play();
	    break;
	    case 'w': 
	    var sound = new Howl({
	      src: ['sounds/zig-zag.wav','sounds/zig-zag.mp3']
	    });
	    sound.play();
	    break;
	    case 'e': 
	    var sound = new Howl({
	      src: ['sounds/veil.wav','sounds/veil.mp3']
	    });
	    sound.play();
	    break;

	}	
});


