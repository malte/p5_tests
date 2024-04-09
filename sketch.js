function setup() {
  const c = color(0, 137, 221, 102);
  createCanvas(windowWidth/2, windowHeight/2);
  stroke(c);
  noFill();
}

function draw() {
    distanceX = (abs(int(mouseX - width/2)) * -1) + width/2;
    distanceY = (abs(int(mouseY - height/2)) * -1) + height/2;
    numberOfLines = 30;
    lineWeight = 20;
    console.log(distanceX);
    tolerance = distanceX/8; 
  speed = 0.01 +(distanceY/10000);
  clear(0);
  for (let i = 0; i < numberOfLines; i += 1) {

    lineSelect = (i - numberOfLines/2) - (mouseY - height/2)/numberOfLines;
    controlY =  i*(height/numberOfLines);
    controlX = width/2 + (mouseX - width/2)/2;
    strokeWeight(lineWeight);
   
    bezier(
      0,
      (i) * height/numberOfLines,
      controlX + sin((frameCount+200+6*i)*speed)*120,
      controlY + cos((frameCount+200+6*i)*speed)*120,
      controlX + sin((frameCount+200+6*i)*speed)*120,
      controlY + cos((frameCount+200+6*i)*speed)*120,
      width,
      (i) * height/numberOfLines
    );
  }

}