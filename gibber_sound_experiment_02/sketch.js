
// CODE BY CHARLIE ROBERTS https://charlie-roberts.com/gibber/p5-gibber/ 

// sketch.js, also imports automata.js
// conway's game of life. refresh to restart.
var rows = 15,
    columns = 15
    
function setup() {  
  createCanvas( windowWidth,windowHeight )
  frameRate( 5 )
  
  // sound engine
  fm = FM({ maxVoices:32, attack:ms(1) })
  fm.fx.add( Reverb() )
  
  // life object imported from automata.js
  life.init( rows, columns )
  
  // event handler for birth of cell, trigger a note
  // with pan and frequency based on cell position
  life.onbirth = function( x, y ) {
    var child = fm.voiceCount,
        frequency = 220 + ( y / this.rows ) * 880 + ( 880 / this.rows ) / (x + 1),
        pan = -1 + ( x / this.columns ) * 2
        
    fm.note( frequency  )
    fm.children[ child ].pan = pan
  }
}

function draw() {
  life.run() // run the automata simulation
  
  var _width = windowWidth / columns,
      _height = windowHeight / rows
  
  for( var y = 0; y < rows; y++ ) {
    for( var x = 0; x < columns; x++ ) {
      var cell = life.cells[ x ][ y ],
          value = cell.value
      
      fill( value * 255, 0, 0 )
      rect( x * _width, y * _height, _width, _height )
    }
  }
}

