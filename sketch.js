function setup() {
    createCanvas(500,500);
    noStroke();
}


let value = 0;

function mousePressed() {
 if (value == 0) {
      value = 255;
  } else {
      value = 0;
   }
} 


function draw() {
    
  background("#000000");
  ellipse(mouseX, mouseY, 20, 20);
  from = color(124, 0, 0, 0 * 124);
  to = color(0, 0, 50, 0 * 50);
  c1 = lerpColor(from, to, 0.33);
  c2 = lerpColor(from, to, 0.66);
    
  for (let i = 0; i < 2; i++) {
      
    fill(from);
    quad(
      random(-40, 220), random(height),
      random(-40, 220), random(height),
      random(-40, 220), random(height),
      random(-40, 220), random(height)
    );
    fill(c1);
    quad(
      random(140, 380), random(height),
      random(140, 380), random(height),
      random(140, 380), random(height),
      random(140, 380), random(height)
    );
    fill(c2);
    quad(
      random(320, 580), random(height),
      random(320, 580), random(height),
      random(320, 580), random(height),
      random(320, 580), random(height)
    );
    fill(to);
    quad(
      random(500, 760), random(height),
      random(500, 760), random(height),
      random(500, 760), random(height),
      random(500, 760), random(height)
    );
  
  frameRate(5);

    fill("#008000");
    stroke("#00FF00");
    strokeWeight(0);
    
    ellipse(width/2,height/2,200,200);
    rect(148,115,200,50);
    rect(148,335,200,50);
    fill("#FDFEFE");
    stroke("#145A32");
    strokeWeight(10);
    ellipse(width/2,height/2,100,95);
   
     
    fill("#FFFFFF");
    fill(value);
    ellipse(width/2,height/2,100,95);
    stroke("#008000");
    strokeWeight(10);
    textSize(25);
    textFont("Times New Roman");
    textStyle(BOLD);
    textAlign(CENTER);
    text("In Brightest Day, In Blackest Night.",width/2,30);
    textSize(25);
    textFont("Times New Roman");
    textStyle(BOLD);
    textAlign(CENTER);
    text("No Evil Shall Escape My Sight.",width/2,65);
    textSize(25);
    textFont("Times New Roman");
    textStyle(BOLD);
    textAlign(CENTER);
    text("Let Those Who Worship Evils Might.",width/2,100);
    textSize(25);
    textFont("Times New Roman");
    textStyle(BOLD);
    textAlign(CENTER);
    text("Beware My Power,",width/2,415);
    textSize(35);
    textFont("Times New Roman");
    textStyle(BOLD);
    textAlign(CENTER);
    text("GREEN LANTERNS LIGHT!",width/2,460);
}
    
}





