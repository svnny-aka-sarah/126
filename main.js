
song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;



function preLoad()
{
song1 = loadSound("hp.mp3");
song2 = loadSound("kothm.mp3")
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas =createCanvas(550, 550);
    canvas.position(550, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

    console.log('poseNet is initialize');
}

function gotPoses(results)
{
 if(results.lenth > 0);
 {
    console.log(results);
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log("scoreLeftWrist = " + scoreLeftWrist);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristY  = " + leftWristY  + " leftWristY = "+ leftWristY );

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristY  = " + rightWristY  + " rightWristY = "+ rightWristY );

 }
}



function draw()
{
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX, lefWristY, 20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    leftWristY_divide_1000 = remove_decimals/1000;
    volume = leftWristY_divide_1000 * 2;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
    }
}


