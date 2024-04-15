// SOUND MIXER
// CODE BY jfforero https://editor.p5js.org/jfforero/sketches/FYr5O5bAx

let bgCol;
let canvas;
let button;
let song;
let amp;



function preload() {
  song = loadSound('windchimes_02.mp3');
  amp = new p5.Amplitude();

}

function setup() {
  createCanvas(400, 400);

  button = createButton("music off");
  button.position(50, 10);
  button.mousePressed(suPlay);

  slider = createSlider(0, 1, 0.5, 0.01);
  slider.position(150, 10);
  slider.style('width', '200px');

}

function draw() {
  //background(255, 60, 80);

  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 0, 255);


  let slider1_val = slider.value();

  for (var i = 1; i <= 9; i++) {
   // strokeWeight(10);
   // stroke(diam, i*20, 255);
   // fill(diam, diam, i*20);
    //ellipse(width/2, height/2, 300/i, 300/i);
  }
  
  song.setVolume(slider.value());
}


function suPlay() {
  if (!song.isPlaying()) {
    song.play();
    button.html("music off");

  } else {
    song.pause();
    button.html("music on");

  }

}

