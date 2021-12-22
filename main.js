img="";
array=[];
status="";

function preload(){
    img=loadImage("child.jpg");

}

function setup(){
    canvas=createCanvas(200,200);
    canvas.center();
  objectdetector=ml5.objectDetector("cocossd",modelloaded);
  document.getElementById("status").innerHTML="status: detecting object";

}

function draw(){
    image(img,0,0,200,200);

    if(status !=""){
        for(i=0; i< array.length; i++){
            document.getElementById("status").innerHTML="status:object detected";
            fill("red");
            percent=floor(array[i].confidence*100);
            text(array[i].label+" "+percent+"%",array[i].x+15,array[i].y+15);
            noFill();
            stroke("red");
            rect(array[i].x,array[i].y,array[i].width,array[i].height);
        }
    }
}

function modelloaded(){
    console.log("model is loaded");
    status=true; 
    objectdetector.detect(img,gotresults);
}

function gotresults(error,results){
 if(error){
 console.error(error);
 }
 else{
     console.log(results);
     array=results;
 }
}