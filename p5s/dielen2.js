function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  const c = color('#ffffff');
  stroke(c);
  noFill();
  strokeCap(SQUARE);
  angleMode(DEGREES);
  // frameRate(1);
}

function draw() {
    const listOfColors = [color('#00E9C9'),color('#00CACA'),color('#00ACD6'), color('#0089DD')];
    distanceX = (abs(int(mouseX - width/2)) * -1) + width/2;
    distanceY = (abs(int(mouseY - height/2)) * -1) + height/2;
    lineWeight = 10;
    numberOfLines = 50;
    lineSelect = (mouseY/height * numberOfLines);
    clear();
    for (let i = 1; i <= numberOfLines; i += 1) {
      // fro
      let lineDistanceToCursor = (i-lineSelect) 
      // console.log(lineDistanceToCursor);
        let c = listOfColors[i%listOfColors.length];
        let noiseLevel = abs(lineDistanceToCursor)/3;
        let noiseScale = 0.01; 
        let nt = noiseScale * frameCount;
        noiseSeed(i);
        let delta1 = noise(nt)
        noiseSeed(10*i+numberOfLines);
        let delta2 = noise(nt);
        let displace, extraSlant, extraSlantControl1, extraSlantControl2 = 0.0001;
        if (int(lineDistanceToCursor) === 0 ) {
          displace = 0;
          extraSlant = sin(3*frameCount/2)*10;        
          extraSlantControl1 = sin((3*frameCount+45)/2)*30;        
          extraSlantControl2 = sin((3*frameCount+135)/2)*30;        
        } else {
          displace = 40/lineDistanceToCursor;
          extraSlant = 0.001;        
          extraSlantControl1 = 0.001;        
          extraSlantControl2 = 0.001;      
        }
        let displacedLinePos = (i * (height-20)/numberOfLines) + displace;
        strokeWeight(1)
        // text(`displace: ${displace}`, 50, displacedLinePos);  
        c.setAlpha(255);
        strokeWeight(lineWeight);
        stroke(c)
        bezier(
          -20,
          displacedLinePos  + extraSlant + (noiseLevel/2 - delta1 * noiseLevel) * lineDistanceToCursor ,
          width/2-50,displacedLinePos + extraSlantControl1,
          width/2+50,displacedLinePos + extraSlantControl2,
          width+20,
          displacedLinePos - extraSlant + (noiseLevel/2 - delta2 * noiseLevel) * lineDistanceToCursor
        );
    }
    strokeWeight(1)
    // text(`lineSelect: ${lineSelect}`, 50, 50);

}