function setup() {
  cnv = createCanvas(windowWidth/2, windowHeight/2);
  noFill();
  angleMode(DEGREES);
}

function draw() {
  let c = color(0, 137, 221, 102);
  distanceX = (abs(int(mouseX - width/2)) * -1) + width/2;
  distanceY = (abs(int(mouseY - height/2)) * -1) + height/2;
  numberOfLines = 10;
  lineWeight = 20;
  tolerance = distanceX/8; 
  let displace, extraSlant, amp, controlY1, controlY2 = 0.0001;
  speed = 3;
  clear(0);
  let mouseReact = false
  if ((mouseX > 0) && 
      (mouseX < width) &&
      (mouseY > 0) && 
      (mouseY < height)) {
    mouseReact = true;
    amp = 50;
  } else {
    mouseReact = false;
    amp = 30;
  }
  stroke(c);
  for (let i = 0; i < numberOfLines; i += 1) {
    
    lineSelect = (i - numberOfLines/2) - (mouseY - height/2)/numberOfLines;
    controlX = !mouseReact ? width/2 : mouseX  ;
    controlY1 = i*(height/numberOfLines) + sin((frameCount*speed)+i*30)*amp;        
    controlY2 = i*(height/numberOfLines) + sin((frameCount*speed)+ i*30+45)*amp;  
    
    strokeWeight(lineWeight);
    c = color(0, 255, 150, 200);
    stroke(c);
    line(
      0,
      (i) * height/numberOfLines,
      width,
      (i) * height/numberOfLines - 30
    );
  }
  for (let i = 0; i < numberOfLines; i += 1) {
     
    lineSelect = (i - numberOfLines/2) - (mouseY - height/2)/numberOfLines;
    controlX = !mouseReact ? width/2 : mouseX  ;
    controlY1 = i*(height/numberOfLines) + sin((frameCount*speed)+i*30)*amp;        
    controlY2 = i*(height/numberOfLines) + sin((frameCount*speed)+ i*30+45)*amp;  

    strokeWeight(lineWeight);
    c = color(0, 137, 221, 200);
    stroke(c);
    bezier(
      0,
      (i) * height/numberOfLines,
      controlX,
      controlY1 ,
      controlX,
      controlY2 ,
      width,
      (i) * height/numberOfLines + 10
    );
  }

}