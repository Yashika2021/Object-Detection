img = "";
status1 ="";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting objects"
}

function modelLoaded(){
    console.log("Model Loaded");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Dog", 40, 80);
    noFill();
    stroke("red");
    rect(30, 60, 320, 350);

    fill("red");
    text("Cat", 300, 115);
    noFill();
    stroke("red");
    rect(280, 100, 320, 310);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}