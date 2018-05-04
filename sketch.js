var rSlider, gSlider, bSlider;
var fixed = {x: 400, y:100}; //En fast punkt
var huvud = {min: 30, max: 150};
var kropp = {min: 30, max: 200};
var lem = {min: 30, max: 100};
var finger = {min: 5, max: 250};
var numberOfFingers = {min:2, max:75}

var hals = 0.2;
var arm_ratio = 0.8;

function setup() {
  // create canvas
  createCanvas(710, 400);
  textSize(15);
  noStroke();

  // create sliders
  hSlider = createSlider(huvud.min, huvud.max, Math.random()*(huvud.max-huvud.min)+huvud.min);
  hSlider.position(20, 20);
  lSlider = createSlider(lem.min, lem.max, Math.random()*(lem.max-lem.min)+lem.min);
  lSlider.position(20, 50);
  kSlider = createSlider(kropp.min, kropp.max, Math.random()*(kropp.max-kropp.min)+kropp.min);
  kSlider.position(20, 80);
  fSlider = createSlider(finger.min, finger.max, Math.random()*(finger.max-finger.min)+finger.min);
  fSlider.position(20, 110);
  afSlider = createSlider(numberOfFingers.min, numberOfFingers.max, Math.random()*(numberOfFingers.max-numberOfFingers.min)+numberOfFingers.min);
  afSlider.position(20, 170);
}

function draw() {
  var huvud = hSlider.value();
  var lemmar = lSlider.value();
  var kropp = kSlider.value();
  var finger = fSlider.value();
  var numberOfFingers = afSlider.value();
  background(210, 200, 240);
  ellipse(400, fixed.y-huvud/2, huvud*.8, huvud); //Huvudet
  ellipse(380, fixed.y-huvud/2-20, huvud*.1, huvud*.1,)
  ellipse(420, fixed.y-huvud/2-20, huvud*.1, huvud*.1,)
  stroke(128);
  line(fixed.x, fixed.y, fixed.x, fixed.y+kropp);
  line(fixed.x, fixed.y+kropp, fixed.x+lemmar, fixed.y+kropp+lemmar);
  line(fixed.x, fixed.y+kropp, fixed.x-lemmar, fixed.y+kropp+lemmar);
  line(fixed.x, fixed.y, fixed.x, fixed.y+kropp);
  armslutVx = fixed.x+lemmar*arm_ratio
  armslutVy = fixed.y+lemmar*arm_ratio
  armslutHx = fixed.x-lemmar*arm_ratio
  armslutHy = fixed.y+lemmar*arm_ratio
  line(fixed.x, fixed.y+kropp*hals, armslutVx, armslutVy);
  line(fixed.x, fixed.y+kropp*hals, armslutHx, armslutHy);
  drawFingers(lemmar, finger, numberOfFingers, -1);
  drawFingers(lemmar, finger, numberOfFingers, 1)
  text("huvud " + hSlider.value(), hSlider.x * 2 + hSlider.width, 35);
  text("lemmar " + lSlider.value(), lSlider.x * 2 + lSlider.width, 65);
  text("kropp " + kSlider.value(), kSlider.x * 2 + kSlider.width, 95);
  text("finger " + fSlider.value(), fSlider.x * 2 + fSlider.width, 125);
  text("antal fingrar " + afSlider.value(), afSlider.x * 2 + afSlider.width, 185);
}

function drawFingers(lemmar, finger, numberOfFingers, sida) {
	armslut = {x: fixed.x+sida*lemmar*arm_ratio, y: fixed.y+lemmar*arm_ratio}
	line(armslut.x, armslut.y, armslut.x + sida*finger, armslut.y); 
	for (i = 0; i < numberOfFingers-2; i++) {
		var degrees = 90 - (i+1)*90/(numberOfFingers-1);
		line(armslut.x, armslut.y, armslut.x + sida*finger*sin(toRadians(degrees)), armslut.y + finger*cos(toRadians(degrees)));
	}
	
	line(armslut.x, armslut.y, armslut.x, armslut.y + finger); 
	
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}
