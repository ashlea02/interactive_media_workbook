var storageData = [167.68, 21, 48.22, 14.7, 4.4]
var total; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5)
}


function draw() {
  let total = getTotal(storageData);
   let lastPiece = 0;
   let piece = map(storageData[i], 0, total, 0, 360);
  for (let i = 0; i < storageData.length; i++) {
   
    fill(random(255), random(255), random(255));
    noStroke()
    arc(
    width / 2, 
    height / 2, 
    600, 
    600, 
    lastPiece, 
    lastPiece + piece
    );
    lastPiece += piece;
  }

}

function getTotal (data) {
  let total = 0;
  for (let i = 0; i < data.length; i ++) {
    total += data[i];
  }
  return total; 
}
