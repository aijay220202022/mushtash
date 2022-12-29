

function preload() {

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    vedio = createCapture(VIDEO);
    vedio.size(300,300);
    vedio.hide();

    poseNet = ml5.poseNet(vedio, modelLoded);
    poseNet.on('pose', gotPoses);

}

function modelLoded() {
    console.log('PoseNet Is Insitialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}



function draw() {
image(vedio, 0, 0, 300, 300);
}

function take_snapshot(){
    save('myFilterImage.png')
}