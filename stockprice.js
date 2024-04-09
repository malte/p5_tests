class Graph {
  constructor() {
    this.xoff = random(1000); // Use random offset for diversity
    this.graphPoints = []; // Store graph points
    
    // Initialize graphPoints with noise values
    for (let x = 0; x < width; x++) {
      this.graphPoints.push(noise(this.xoff) * height + (mouseX/100));
      this.xoff += 0.005;
    }
  }

  updateAndDraw(Seed) {
    noiseSeed(Seed);
    // Add a new point at the end based on noise
    this.graphPoints.push(noise(this.xoff) * height + (mouseX/100));
    this.xoff += 0.005;
    // Remove the oldest point to simulate scrolling
    this.graphPoints.shift();

    // Draw the graph
    beginShape();
    for (let i = 0; i < this.graphPoints.length; i++) {
      vertex(i, this.graphPoints[i]);
    }
    endShape();
  }
}

let graphs = [];
const numberOfGraphs = 5; // Control the number of graphs here

function setup() {
    createCanvas(800, 400);
    clear();
    noFill();
  // Create graph instances based on numberOfGraphs
  for (let i = 0; i < numberOfGraphs; i++) {
    graphs.push(new Graph());
  }
}

function draw() {
  const listOfColors = [color('#00E9C9'),color('#00CACA'),color('#00ACD6'), color('#0089DD')];
  clear();
  strokeWeight(10);
  
  // Update and draw each graph with a unique noise seed and stroke
  for (let i = 0; i < graphs.length; i++) {
    let c = listOfColors[i%listOfColors.length];
    c.setAlpha(255);
    // Generate a distinct color for each graph
    // stroke(0, i*(255/numberOfGraphs), 1/i*(255), 100);
    stroke(c);
    graphs[i].updateAndDraw(i + 1);
  }
}
