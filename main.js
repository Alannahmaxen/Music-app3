song1="";
song2="";
leftWristX =0;
leftWristY=0;
rightWristX=0
rightWrsitY=0;
function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");

}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded()
{
    console.log('poseNet is initialized!');
}

function gotPoses(results){

  if(results.length > 0)
  {
      console.log(results);
      scoreRightWrist = results[0].pose.keypoints[10].score;
      scoreLeftWrist = results[0].pose.keypoints[9].score;
      console.log("scoreLeftWrist =" + scoreLeftWrist + "scoreLeftWrist =" + scoreLeftWrist);

  }
}