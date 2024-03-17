music1 = "";
music2 = "";
lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;
rws = 0;
lws = 0;
songf = "";
function preload(){
    music1 = loadSound("music.mp3")
    music2 = loadSound("music2.mp3")
    
}
function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide();
    pose = ml5.poseNet(video, modelLoaded)
    pose.on("pose", gotpose)
}
function modelLoaded() {
    console.log("posenet has been initialized")
    }
function draw() {
    image(video, 0, 0, 600, 500)
    fill("red")
    stroke("red")
    if(lws > 0.2){
        circle(lwx,lwy,20);
        if(music1.isPlaying() == false){
            music2.stop()
            music1.play()
            document.getElementById("songn").innerHTML = "music = playing dubstep harry potter"
        }
        
    }
    if(rws > 0.2){
        circle(rwx,rwy,20);
        if(music2.isPlaying() == false){
            music1.stop()
            music2.play()
            document.getElementById("songn").innerHTML = "music = peter pan song"
        }
    }
    
}

 function gotpose(r){

    if(r.length > 0){
        
         lwx = r[0].pose.leftWrist.x;
         lwy = r[0].pose.leftWrist.y;
         rwx = r[0].pose.rightWrist.x;
         rwy = r[0].pose.rightWrist.y;
         lws = r[0].pose.keypoints[9].score;
         rws = r[0].pose.keypoints[10].score;
         console.log(lwx,lwy,lws)
         console.log(rwx,rwy,rws)   
}
}
