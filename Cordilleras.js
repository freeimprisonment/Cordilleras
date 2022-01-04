let y;
let amplitude;
let steps;
let timeSteps;
let vers = -100;
let sw;
let  col1;
let margin = (50);
let doReDraw = true;
function setup () {
  minHW = min([windowWidth, windowHeight]);
  createCanvas(minHW, minHW*1.2);
  pixelDensity(2);
  sw = random (25, 50);
  //randomize color
  col1 = color(249,231,159);
  amplitude= random (1,25);
}
function draw () {
if (doReDraw == true) {
  background (col1);
  y = (50);
  while (y < height+random(100, 100)) {
    setRandomValues ();
    drawfill();
    drawlines();
    y+= random(1, 50);
}
  drawMargin();
  doReDraw = false;
}}
function setRandomValues () {
  noiseSeed ( random (1, 900));
  sw = random (0.5, 0.5);
  steps = random (sw*2, 6);
  amplitude = random (100, 300);
  timeSteps = random (0.01, 0.05);
  vers = (2000);
}
function drawfill () {
  fill (col1);
  noStroke();
  let noiseValue;
  let x = -abs (vers);
  let time = 0.0;
  beginShape ();
  vertex (-10, height+1);
  while (x < width ) {
    noiseValue = y - noise (time)*amplitude;
    vertex (x, noiseValue);
    x+= steps;
    time += timeSteps;
}
  vertex (width+1, height+1);
  endShape();
}
function drawlines () {
  strokeWeight (sw);
  let noiseValue;
  let x = -abs (vers);
  let time = 0;
  while (x < width + abs (vers)) {
    noiseValue = y - noise (time)*amplitude;
    strokeWeight (random (sw*1.5, sw*1.9));
//randomize color (randomcolor1,2 function
      stroke (0,0,0);
    line (x, noiseValue+5, x + random (vers*1, vers), noiseValue+3+height);
    x+= steps;
    time += timeSteps;
}}
function drawMargin () {
  noStroke();
  fill (col1);
  rect (0, 0, width, margin);
  rect (0, height, width, -margin);
  rect (0, 0, margin, height);
  rect (width, 0, -margin, height);
}
let lapse = 0;    // mouse timer
function mousePressed(){
  // prevents mouse press from registering twice
  if (millis() - lapse > 400){
    save("img_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".jpg");
    lapse = millis();
  }
}
