function setup() {
  let alpha = 180;
  const c = color(255, 255, 255, alpha);
  createCanvas(windowWidth/2, windowHeight/2);
  stroke(c);
  fill('rgba(255,255,255,0.1)');
  angleMode(DEGREES);
}

function draw() {
  let centerX = width/2;
  let centerY = height/2;
  let margin = abs(mouseX-centerX)/50;
  
  clear();
  for (let i = 0; i < 10; i += 1) {
    quad(
      i * margin , i * margin,
      width -i * margin, i * margin, 
      width - i * margin, height - i * margin, 
      i * margin, height -i * margin
      );
  }
}