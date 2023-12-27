song1 = "";
song2 = "";
song1_status = "";
song2_status = "";

function preload(){
    song1 = loadSound("Song1.MP3.mp3");
    song2 = loadSound("Song2.MP3.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}