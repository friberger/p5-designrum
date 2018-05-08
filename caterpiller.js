var rSlider, gSlider, bSlider;
var fixed = {x: 100, y:400}; //En fast punkt
// startparameterar: antal kroppsdelar, storlek på huvud, längd på ben
var numberOfBodyParts = {min:2, max:10}
var headSize = {min: 30, max: 150};
var legLenth = {min: 30, max: 100};

// sedan
var bodySize = {min: 30, max: 200};

// förslag på vad lägga till: fler ben, variera längd på spröten

var hals = 0.2;
var arm_ratio = 0.8;

function setup() {
  // create canvas
  createCanvas(1000, 700);
  textSize(15);
  noStroke();

  // create sliders
  bpSlider = createSlider(numberOfBodyParts.min, numberOfBodyParts.max, Math.random()*(numberOfBodyParts.max-numberOfBodyParts.min)+numberOfBodyParts.min);
  bpSlider.position(20, 20);
  hSlider = createSlider(headSize.min, headSize.max, Math.random()*(headSize.max-headSize.min)+headSize.min);
  hSlider.position(20, 50);
  lSlider = createSlider(legLenth.min, legLenth.max, Math.random()*(legLenth.max-legLenth.min)+legLenth.min);
  lSlider.position(20, 80);
  bSlider = createSlider(bodySize.min, bodySize.max, Math.random()*(bodySize.max-bodySize.min)+bodySize.min);
  bSlider.position(20, 110);

}

function draw() {
  var numberOfBodyParts = bpSlider.value();
  var headSize = hSlider.value();
  var legLenth = lSlider.value();
  var bodySize = bSlider.value();

  background(210, 150, 50);
  ellipse(fixed.x, fixed.y-headSize/2, headSize*.9, headSize); //Huvudet
  
  for (i = 0; i < numberOfBodyParts; i++) {
	if (i%2==0) {
		fill(0,200,0)
	}
	else {
		fill (0,210,55)
	}
    ellipse(fixed.x+headSize/2+i*bodySize*.85, fixed.y+15, bodySize, bodySize)	
  }

  fill (250,250,250)

  text("antal kroppsdelar " + bpSlider.value(), bpSlider.x * 2 + bpSlider.width, 35);
  text("huvudstorlek " + hSlider.value(), hSlider.x * 2 + hSlider.width, 65);
  text("benlangd " + lSlider.value(), lSlider.x * 2 + lSlider.width, 95);
  text("kroppstorlek " + bSlider.value(), bSlider.x * 2 + bSlider.width, 125);
}

