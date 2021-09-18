function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/y7dTibZEJ/model.json", modelload);
}

function modelload(){
    classifier.classify(gotresult);
}

function gotresult(error, result){
if(error)
console.error(error);
else
console.log(result);
random_color_r = Math.floor(Math.random()*255)+1;
random_color_g = Math.floor(Math.random()*255)+1;
random_color_b = Math.floor(Math.random()*255)+1;

document.getElementById("resultlabel").innerHTML = "I can hear - " +result[0].label;
document.getElementById("resultaccuracy").innerHTML = "Accuracy - "+(result[0].confidence*100).toFixed(2) + " %";
document.getElementById("resultlabel").style.color = "rgb("+random_color_r+","+random_color_g+","+random_color_b+ ")";
document.getElementById("resultaccuracy").style.color = "rgb("+random_color_r+","+random_color_g+","+random_color_b+ ")";

img=document.getElementById("alienimage1");
img1=document.getElementById("alienimage2");
img2=document.getElementById("alienimage3");
img3=document.getElementById("alienimage4");

if(result[0].label=="Background Noise"){
img.src = "aliens-01.gif";
img1.src = "aliens-02.png";
img2.src ="aliens-03.png";
img3.src ="aliens-04.png";
}
else if(result[0].label=="Tap on table"){
img.src = "aliens-01.png";
img1.src="aliens-02.gif";
img2.src="aliens-03.png";
img3.src="aliens-04.png";
}
else if(result[0].label=="Snap"){
img.src="aliens-01.png";
img1.src="aliens-02.png";
img2.src="aliens-03.gif";
img3.src="aliens-04.png";
}
else {
    img.src="aliens-01.png";
    img1.src = "aliens-02.png";
    img2.src ="aliens-03.png";
    img3.src="aliens-04.gif";
}
}

