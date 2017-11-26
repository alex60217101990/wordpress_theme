/* 
	Adapted from Tom Carden, May 2004
	a simple particle system with naive gravitational attraction
	https://processing.org/exhibition/works/metropop/
*/
let gl_color1=[1,2,3];
{
	// a point in space with a velocity
	class Particle {
		constructor() {
			// changing these parameters can give very different results
			this.damp = 0.00002; // remember a very small amount of the last direction
			this.accel = 4000; // move very quickly
			this.init();
		}
		init() {
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;
			this.vx = this.accel * (Math.random() - Math.random());
			this.vy = this.accel * (Math.random() - Math.random());
		}
		step() {
			// move towards every attractor
			// at a speed inversely proportional to distance squared
			// (much slower when further away, very fast when close)
			for (const a of attractors) {
				// calculate the square of the distance
				// from this particle to the current attractor
				const dx = a.x - this.x;
				const dy = a.y - this.y;
				const d2 = dx * dx + dy * dy;
				if (d2 > 0.1) {
					// make sure we don't divide by zero
					// accelerate towards each attractor
					this.vx += this.accel * dx / d2;
					this.vy += this.accel * dy / d2;
				}
			}
			// move by the velocity
			this.x += this.vx;
			this.y += this.vy;
			// scale the velocity back for the next frame
			this.vx *= this.damp;
			this.vy *= this.damp;
			// draw particle
			ctx.fillRect(this.x, this.y, 0.5, 0.5);
		}
	}
	// init canvas
	const canvas = {
		init() {
			this.frame = 0;
			this.elem = document.createElement("canvas");
			document.body.appendChild(this.elem);
			this.resize();
			// reset on mouse click
			window.addEventListener("click", e => this.reset(), false);
			this.elem.addEventListener("touchstart", e => this.reset(), false);
			return this.elem.getContext("2d");
		},
		resize () {
			this.width = this.elem.width = this.elem.offsetWidth;
			this.height = this.elem.height = this.elem.offsetHeight;
		},
		reset() {
			ctx.globalCompositeOperation = "source-over";
			this.resize();
			let color1=randColor();
			gl_color1[0]=color1;
			let color2=randColorBack();
			gl_color1[1]=color2;
			let color3=randColor();
			gl_color1[2]=color3;
			ctx.fillStyle = color1;
			ctx.globalCompositeOperation = color3;//"lighter";
			$('canvas').css('background',color2);
			for (const p of particles) p.init();
			for (const a of attractors) a.init();
			this.frame = 0;
		}
	};
	// init pen
	const ctx = canvas.init();
	const attractors = Array.from({ length: 8 }, () => new Particle());
	const particles = Array.from({ length: 4000 }, () => new Particle());
	canvas.reset();
	// move and draw particles
	const run = () => {
		requestAnimationFrame(run);
		if (canvas.frame++ < 1000) {
			for (const p of particles) p.step();
		}
	};
	run();
}



function randColor(){
	let color_array=['#00FA9A','#DC143C','#00FFFF','#FF69B4','#00CED1','#EE82EE','#FF4500',
'#6A5ACD','#FA8072','#00FF00','#E0FFFF','#FFFF00','#FF00FF'];
var rand = Math.floor(Math.random() * color_array.length);
return color_array[rand];
}
function randColorBack(){
	let color_array1=['#8B0000','#2E8B57','#191970','#808080','#2F4F4F','#800080','#008080','#4B0082','#800080',
	'#000000'];
var rand = Math.floor(Math.random() * color_array1.length);
return color_array1[rand];
}
