var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;
var freqG = 268;

var oscA, oscS, oscD, oscF, oscG;

var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;
var playingG = false;


function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
  
  oscG = new p5.Oscillator();
  oscG.setType('triangle');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
  
}



function draw() {
  if (playing) {
    background(0, 255, 255);
  } else {
    background(255, 0, 255);
  }
  text('click here,\nthen press A/S/D/F\n keys to play', width / 2, 40);
}

function keyPressed() {
  print("got key press for ", key);
  var osc; 
  if (key == 'A') {
    osc = oscA;
    playingA = true;
  } else if (key == 'S') {
    osc = oscS;
    playingS = true;
  } else if (key == 'D') {
    osc = oscD;
    playingD = true;
  } else if (key == 'F') {
    osc = oscF;
    playingF = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
  }
  }
  
function mousePressed() {
  print("got key press for ", mouseIsPressed);
  var osc;
  if (mouseIsPressed == "mousePress")
    osc = oscG;
  	playingG = true;
  
}
function draw() {
  background(255);
  fill("pink");
  if (playingA) {
    rect(0, 0, width/4, height);
  }
  fill("lightGreen");
  if (playingS) {
    rect(25, 0, width/4, height);
  }
  fill("purple");
  if (playingD) {
    rect(50, 0, width/4, height);
  }
  
  fill("lightBlue");
  if (playingF) {
    rect(75, 0, width/4, height);
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playingA = false;
    playingS = false;
    playingD = false;
    playingF = false;
  }
}
