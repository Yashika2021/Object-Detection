img = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Dog", 40, 80);
    noFill();
    stroke("red");
    rect(30, 60, 320, 350);
}