// EDrums
// CODE BY CHARLIE ROBERTS https://charlie-roberts.com/gibber/p5-gibber/ 

// fftSize must be at least 32, and a power of 2 (32,64,128,256 etc.)
var fftSize = 512

function setup() {
  createCanvas( windowWidth, windowHeight )

  drums = EDrums('----x------x-')
  drums.amp = 2

  bass = FM('bass')
    .note.seq( [0,0,0,7,14,100].rnd(), [1/8,1/16].rnd(1/7,2) )

  rhodes = Synth( 'rhodes', {amp:.7} )
    .chord.seq( Rndi(0,6,3), 5 )
    .fx.add( Delay() )

  fft = FFT( fftSize )

  Gibber.scale.root.seq( ['c4','ab3','bb3'], [4,2,2] )
  Gibber.scale.mode.seq( ['Minor','Mixolydian'], [6,2] )

  noStroke()
  colorMode( HSB, 255 )
}

function draw() {
  background( 64 )

  var numBars = fftSize / 32,
      barHeight = ( height - 1 ) / numBars,
      barColor = null, 
      value = null

  for( var i = 0; i < numBars; i++ ) {
    barColor = color( ( i / numBars ) * 25, 200, 255 )
    fill( barColor ) 

    // read FFT value, which ranges from 0-255, and scale it.
    value = ( fft[ i ] / 255 ) * width

    rect( 0, barHeight * i, value, barHeight )
  }
}
  

