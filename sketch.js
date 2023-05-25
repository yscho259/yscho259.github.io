let imgs = [];
let selected = -1;

function preload() {
  for (let i = 0; i < 5; i++) {
    let img = loadImage("album-" + (i + 1) + ".jpeg");
    imgs.push(img);
  }
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);

  for (let i = 0; i < imgs.length; i++) {
    if (selected == i) {
      tint(255, 255, 255, 255);
    } else {
      tint(255, 255, 255, 55);
    }
    image(imgs[i], i * 100, 0, 100, 100);
  }

  fill(255, 0, 0);
  rect(0, 0, 400, 200);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 100) selected = 0;
  if (mouseX > 100 && mouseX < 200) selected = 1;
  if (mouseX > 200 && mouseX < 300) selected = 2;
  if (mouseX > 300 && mouseX < 400) selected = 3;
  if (mouseX > 400 && mouseX < 500) selected = 4;
  
  for (let i = 0; i < 5; i++) {
    if (mouseX > i * 100 && mouseX < i * 100 + 100) {
      selected = i;
    }
  }
}
