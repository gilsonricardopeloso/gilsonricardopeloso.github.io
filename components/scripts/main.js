function loadJS(url, callback) {
	const script = document.createElement('script');
	script.src = url;
	script.onload = callback;
	script.type = 'text/javascript';
	document.body.appendChild(script);
}

loadJS('/components/scripts/starfield.min.js', () => {
	let range = [0, window.innerHeight * 2];

	const starfield = new WebGLBackground({
		canvas: document.getElementById('canvas'),
		button: document.getElementById('content-card'),
		backgroundColor: '#080f24',
		followButton: true,
		starCount: 1500,
		starsScrollRange: range,
		cloudsScrollRange: range,

		// Intensity of the starfield in idle mode ('intensity' affects speed, length and thickness of stars).
		// Defaults to 0. (We suggest leaving this to zero).
		idleIntensity: 0,
		clickIntensity: 1,
		buttonIntensity: 1
	});

	window.addEventListener('resize', () => {
		range = [0, window.innerHeight * 2];
		starfield.starsScrollRange = range;
		starfield.cloudsScrollRange = range;
	});
});

// var pauseButton = document.createElement('button');
// pauseButton.id = 'pauseButton';
// pauseButton.title = 'Stop animations';

// pauseButton.addEventListener('click', function () {
// 	if (starfield.app.renderLoop.paused) {
// 		starfield.app.renderLoop.resume();
// 		pauseButton.title = 'Stop animations';
// 	} else {
// 		starfield.app.renderLoop.pause();
// 		pauseButton.title = 'Resume animations';
// 	}
// 	document.body.classList.toggle('reduce-motion');
// 	this.classList.toggle('paused');
// });

// document.body.appendChild(pauseButton);
