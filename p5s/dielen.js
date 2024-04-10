function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  const c = color('#ffffff');
  stroke(c);
  noFill();
  strokeCap(SQUARE);
  c.setAlpha(30);
}

function draw() {
    const listOfColors = [color('#00E9C9'),color('#00CACA'),color('#00ACD6')];
    distanceX = (abs(int(mouseX - width/2)) * -1) + width/2;
    distanceY = (abs(int(mouseY - height/2)) * -1) + height/2;
    numberOfLines = 30;
    lineWeight = 30;
    tolerance = distanceX/8;
      // Set the noise level and scale.
      speed = 0.001 +(distanceY/10000);
      // Scale the input coordinate.
      
      
      clear();
      for (let i = 1; i <= numberOfLines; i += 1) {
        const c = listOfColors[i%listOfColors.length];
        c.setAlpha(220);
        stroke(c)
        strokeWeight(lineWeight);
        lineSelect = constrain((mouseY/height * numberOfLines),0 ,numberOfLines );
        let lineDistanceToCursor = abs(lineSelect-i)
        let noiseLevel = 2000;
        let noiseScale = 0.005*lineDistanceToCursor; 
        let nt = noiseScale * frameCount;
        noiseSeed(i);
        let delta1 = noise(nt)
        noiseSeed(10*i+numberOfLines);
        let delta2 = noise(nt);
        let displace = 10*(2*sin(lineSelect-i+PI)-1);
        let displacedLinePos = i * (height-20)/numberOfLines;
        console.log(delta1)
        line(
          20,
          constrain(displacedLinePos - (noiseLevel/2 + delta1 * noiseLevel) * (lineSelect-i+numberOfLines/4)/numberOfLines ,20,height-20),

          width-20,
          constrain(displacedLinePos - (400/(lineDistanceToCursor+1)) - (noiseLevel/2 + delta2 * noiseLevel) * (lineSelect-i+numberOfLines/4)/numberOfLines ,20,height-20) 
        );
    }

}