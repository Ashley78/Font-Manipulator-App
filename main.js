nosex=0;
nosey=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(570,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function draw(){
    background('#000000');
    textSize(difference);
    fill('#ffffff');
    text('Ashley',50,400);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex= results[0].pose.nose.x;
        nosey= results[0].pose.nose.y;
        console.log("nosex= "+nosex +"nosey= "+nosey );

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("left wrist= "+leftWristX+"right wrist= "+rightWristX);
        difference=floor(leftWristX-rightWristX);
        console.log("difference = "+difference);
 
        document.getElementById("text_sides").innerHTML="The size of the square = "+difference;
    }
}