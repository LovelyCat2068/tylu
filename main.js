function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    pumpkin = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4IMYnUOsk/model.json', modelLoaded);
}
function draw(){
    image(video, 0, 0, 300, 300);
    pumpkin.classify(video, gotResult);
}

function modelLoaded(){
    console.log("gdh");
}

function gotResult(results,error){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementbyId("o0").innerHTML = results[0].label;
        document.getElementbyId("a@").innerHTML = results[0].confidence.toFixed(2);

    }
}