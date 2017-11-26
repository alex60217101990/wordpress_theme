/*var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext( '2d' ),
    
    particles = [],
    shake = 0,
    tick = 0;

function Particle(){
  
  this.size = 4 + ( 10 * Math.random() ) |0;
  this.x = Math.random() * w;
  this.y = Math.random() * h;
  
  var vel = 1 + 2 * Math.random(),
      rad = Math.random() * Math.PI * 2;
  
  this.vx = Math.cos( rad ) * vel;
  this.vy = Math.sin( rad ) * vel;
  
  this.vel = vel;
  this.rad = rad;
}
Particle.prototype.step = function(){
  
  this.x += this.vx;
  this.y += this.vy;
  
  if( this.vel > this.size / 2 ){
    
    this.vel -= .5;
    this.vx = Math.cos( this.rad ) * this.vel;
    this.vy = Math.sin( this.rad ) * this.vel;
  }
  
  if( this.x < 0 ){
    
    this.x = 0;
    this.vx *= -1;
    this.setRad();
    
  } else if( this.x > w ){
    
    this.x = w;
    this.vx *= -1;
    this.setRad();
  }
  
  if( this.y < 0 ){
    
    this.y = 0;
    this.vy *= -1;
    this.setRad();
  } else if( this.y > h ){
    
    this.y = h;
    this.vy *= -1;
    this.setRad();
  }
  
  ctx.strokeStyle = 'hsl(hue,sat%,50%)'.replace( 'hue', this.x / w * 360 + tick ).replace( 'sat', this.vel / this.size * 80 );
  ctx.lineWidth = this.size;
  ctx.beginPath();
  ctx.moveTo( this.x - this.vx, this.y - this.vy );
  ctx.lineTo( this.x, this.y );
  
  ctx.stroke();
}
Particle.prototype.setRad = function(){
  
  this.rad = Math.atan( this.vy / this.vx );
  
  if( this.vx < 0 )
    this.rad += Math.PI;
  
  if( this.vx !== 0 )
    this.vel = this.vx / Math.cos( this.rad );
  else
    this.vel = this.vy / Math.sin( this.rad );
}

function anim(){
  
  window.requestAnimationFrame( anim );
  
  ++tick;
  
  if( shake > 0 )
    shake -= .1;
  if( shake < 0 )
    shake = 0;
  
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = 'rgba(0,0,0,.1)';
  ctx.fillRect( 0, 0, w, h );
  ctx.globalCompositeOperation = 'lighter';
  
  var randomX = Math.random() * shake,
      randomY = Math.random() * shake;
  
  ctx.translate( randomX, randomY );
  for( var i = 0; i < particles.length; ++i )
    particles[ i ].step();
  
  for( var i = 0; i < particles.length; ++i ){
    
    var p1 = particles[ i ];
    
    for( var j = i + 1; j < particles.length; ++j ){
      
      var p2 = particles[ j ],
          dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          d = dx*dx + dy*dy;
      
      if( d <= 20 * ( p1.size + p2.size ) ){
        
        ctx.strokeStyle = 'white';
        ctx.lineWidth = Math.min( p1.size, p2.size );
        ctx.beginPath();
        ctx.moveTo( p1.x, p1.y );
        ctx.lineTo( p2.x, p2.y );
        ctx.stroke();
        
        p1.vx += dx * p2.size / 80;
        p1.vy += dy * p2.size / 80;
        p2.vx -= dx * p1.size / 80;
        p2.vy -= dy * p2.size / 80;
        
        //shake = 1;
      }
    }
  }
  
  ctx.translate( -randomX, -randomY );
}

for( var i = 0; i < 60; ++i )
  particles.push( new Particle );

window.addEventListener( 'resize', function(){
  
  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
  
})

anim();*/


var c=document.getElementById('c');
console.log(c);
var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext( '2d' ),
    
    particles = [],
    minSquareDist = w * 10,
    springConst = .00025,
    tick = 0;

for( var i = 0; i < 80; ++i )
  particles.push( new Particle );

function Particle(){
  
  this.x = Math.random() * w;
  this.y = Math.random() * h;
  
  var rad = Math.random() * Math.PI * 2;
  
  this.vx = Math.cos( rad ) * 2;
  this.vy = Math.sin( rad ) * 2;
  
  this.waveSize = rad;
}
Particle.prototype.update = function(){
  
  this.x += this.vx;
  this.y += this.vy;
  
  var changeX = true,
      changeY = true;
  
  if( this.x < 0 )
    this.x = 0;
  else if( this.x > w )
    this.x = w;
  else changeX = false;
  
  if( changeX )
    this.vx *= -1;
  
  if( this.y < 0 )
    this.y = 0;
  else if( this.y > h )
    this.y = h;
  else changeY = false;
  
  if( changeY )
    this.vy *= -1;
  
  this.waveSize += .1 + Math.random() * .001;
}
Particle.prototype.render = function(){
  
  ctx.fillStyle = 'hsl(hue,80%,70%)'.replace( 'hue', this.x / w * 360 + tick )
  
  ctx.beginPath();
  ctx.arc( this.x, this.y, 5 + 2 * Math.sin( this.waveSize ), 0, Math.PI * 2 );
  ctx.fill();
}

function anim(){
  
  window.requestAnimationFrame( anim );
  
  ++tick;
  
  ctx.fillStyle = 'rgba(0,0,0,1)';
  ctx.fillRect( 0, 0, w, h );
  
  ctx.strokeStyle = '#ccc';
  
  particles.map( function( particle ){ particle.update(); } );
  
  for( var i = 0; i < particles.length; ++i ){
    
    var p1 = particles[ i ];
    
    for( var j = i + 1; j < particles.length; ++j ){
      
      var p2 = particles[ j ],
          dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dSquare = dx*dx + dy*dy;
      
      if( dSquare < minSquareDist ){
        
        p1.vx -= dx * springConst;
        p1.vy -= dy * springConst;
        p2.vx += dx * springConst;
        p2.vy += dy * springConst;
        
        ctx.lineWidth = ( 1 - dSquare / minSquareDist ) * 2;
        
        ctx.beginPath();
        ctx.moveTo( p1.x, p1.y );
        ctx.lineTo( p2.x, p2.y );
        ctx.stroke();
      }
    }
    
    p1.render();
  }
}
anim();

window.addEventListener( 'resize', function(){
  
  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
  
  minSquareDist = w * 10;
})

