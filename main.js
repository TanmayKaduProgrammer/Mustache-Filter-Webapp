function preload(){

}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center;
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,500,500);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("Nose X = "+results[0].pose.nose.x);
        console.log("Nose Y = "+results[0].pose.nose.y);
    }
    else{
        alert("An error occured");
    }
}

function modelLoaded(){
    console.log("Model Loaded Successfully");
}