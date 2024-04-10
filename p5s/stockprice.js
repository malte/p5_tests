class Graph {
  constructor() {
    this.xoff = random(1000); // Use random offset for diversity
    this.graphPoints = []; // Store graph points
    
    // Initialize graphPoints with noise values
    for (let x = 0; x < width; x++) {
      this.xoff += 0.005;
      this.graphPoints.push(noise(this.xoff) * height );
    }
  }

  updateAndDraw(displace) {
    noiseSeed(displace);
    // Add a new point at the end based on noise
    this.xoff += 0.005;
    this.graphPoints.push(noise(this.xoff) * height  + displace-100);
    // Remove the oldest point to simulate scrolling
    this.graphPoints.shift();

    // Draw the graph
    beginShape();
    for (let i = 0; i < this.graphPoints.length; i++) {
      vertex(i, this.graphPoints[i]);
    }
    vertex(width, height)
    vertex(0, height)

    endShape();
  }
}

let graphs = [];
const numberOfGraphs = 4; // Control the number of graphs here

function setup() {
  frameRate(30);
    createCanvas(800, 400);
    clear();
  // Create graph instances based on numberOfGraphs
  for (let i = 0; i < numberOfGraphs; i++) {
    graphs.push(new Graph());
  }
}

function draw() {
  clear();
  strokeWeight(0);
  const listOfColors = [color('#00E9C9'),color('#00CACA'),color('#00ACD6'), color('#0089DD')];
  
  // Update and draw each graph with a unique noise seed and stroke
  for (let i = 0; i < graphs.length; i++) {
    let c = listOfColors[i%listOfColors.length];
    c.setAlpha(255);
    // Generate a distinct color for each graph
    // stroke(0, i*(255/numberOfGraphs), 1/i*(255), 100);
    stroke(0)
    fill(c);
    graphs[i].updateAndDraw(i * 40);
  }
}
