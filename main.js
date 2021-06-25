Nosex=0;
NoseY=0;
leftwristX=0;
RightwristX=0;
Diffrence=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(550,500);
    canvas.position(560,100);

    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses)
}
function draw(){
    background('#FFFF00');
  stroke('blue');
  fill("lightgreen");
 square(Nosex, NoseY, Diffrence);
 document.getElementById("square_size").innerHTML=" width and height of the square is..."+Diffrence+"PX";
}

function modelLoaded(){
    console.log("posenet has started");

}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        Nosex=results[0].pose.nose.x;
        NoseY=results[0].pose.nose.y;
        leftwristX=results[0].pose.leftWrist.x;
        RightwristX=results[0].pose.rightWrist.x;
        Diffrence=floor(leftwristX-RightwristX);


    }

}