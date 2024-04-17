// CODE BY CHARLIE ROBERTS https://charlie-roberts.com/gibber/p5-gibber/ 

fftSize = 2048

function setup() {
  createCanvas( windowWidth, windowHeight )

  pwm =  PWM()
  mod  =  Sine( 4, 40 )._
  pwm.frequency = Add( 440, mod )

  fft = FFT( fftSize )
  waveform = new Uint8Array( fft.frequencyBinCount )

  frameRate( 30 )
  strokeWeight( 1 )
}

// adapted from: 
// http://p5js.org/learn/examples/Sound_Oscillator_Frequency.php
function draw() {
  background(0)

  fft.getByteTimeDomainData( waveform )

  beginShape()
  for ( var i = 0; i < waveform.length; i++ ){
    var x = map( i, 0, waveform.length, 0, width )
    var y = map( waveform[i], 0, 255, height, 0 )
    vertex( x, y )
  }
  endShape()

  mod.frequency  = map( mouseY, 0, height, .25, 10 )
  mod.amp        = map( mouseX, 0, width, 4, 100 )
  pwm.pulsewidth = map( mouseX, 0, width, 0, 1 )
}