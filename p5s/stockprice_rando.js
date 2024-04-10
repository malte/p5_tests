class Graph {
  constructor() {

    updateAndDraw(Seed) {
      noiseSeed(Seed);
      beginShape();
      for (let p = 0; p < width; p++) {
        vertex(p, random(-width/2, width/2));
      }
      endShape();
    }
  }
}

let graphs = [];
const numberOfGraphs = 1; // Control the number of graphs here

function setup() {
    createCanvas(800, 400);
    clear();
    noFill();
    frameRate(1);
  // Create graph instances based on numberOfGraphs
  for (let i = 0; i < numberOfGraphs; i++) {
    graphs.push(new Graph());
  }
}

function draw() {
  const listOfColors = [color('#00E9C9'),color('#00CACA'),color('#00ACD6'), color('#0089DD')];
  clear();
  strokeWeight(1);
  
    let c = listOfColors[2%listOfColors.length];
    c.setAlpha(255);
    stroke(c);
  graphs[0].updateAndDraw(10);

}
