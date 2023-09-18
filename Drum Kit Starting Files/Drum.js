var lengthdram=document.querySelectorAll(".drum").length;


for(i=0;i<lengthdram;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", me);
}


function me(){
var b=this.innerHTML;
makesound(b);
active(b);

}
//key press
addEventListener("keypress", function(event){
    makesound(event.key);
    active(event.key);
});



    






function makesound(key){
    
   


 switch(key){
case "w":
    var audio = new Audio('/Drum Kit Starting Files/images/sounds/tom-1.mp3');
    audio.play();
    break;
    case "a":
    var audio = new Audio('/Drum Kit Starting Files/images/sounds/tom-2.mp3');
    audio.play();
    break;
    case "s":
    var audio = new Audio('/Drum Kit Starting Files/images/sounds/tom-3.mp3');
    audio.play();
    break;
    case "d":
    var audio = new Audio('/Drum Kit Starting Files/images/sounds/tom-4.mp3');
    audio.play();
    break;
    case "j":
    var audio = new Audio('/Drum Kit Starting Files/images/sounds/snare.mp3');
    audio.play();
    break;
    case "k":
    var audio = new Audio('/Drum Kit Starting Files/images/sounds/kick-bass.mp3');
    audio.play();
    break;
    case "l":
    var audio = new Audio('/Drum Kit Starting Files/images/sounds/crash.mp3');
    audio.play();
    break;

 }

  
}


function active(currentkey){
    var ani=document.querySelector("."+currentkey);
    ani.classList.add("pressed");
    setTimeout(function(){
        ani.classList.remove("pressed");
    },100);
}