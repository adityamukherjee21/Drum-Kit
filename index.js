// document.querySelectorAll("button")[0].addEventListener("click", function(){
//     alert("w got clicked")
// })
// document.querySelectorAll("button")[1].addEventListener("click", function(){
//     alert("a got clicked")
// })
// document.querySelectorAll("button")[2].addEventListener("click", function(){
//     alert("s got clicked")
// })
// document.querySelectorAll("button")[3].addEventListener("click",function(){
//     alert("d got clicked")
// })
// document.querySelectorAll("button")[4].addEventListener("click",function(){
//     alert("j got clicked")
// })
// document.querySelectorAll("button")[5].addEventListener("click",function(){
//     alert("k got clicked")
// })
// document.querySelectorAll("button")[6].addEventListener("click",function(){
//     alert("l got clicked")
// })
var numberButton = document.querySelectorAll(".drum").length
for(var i=0; i<numberButton;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
        var buttonInnerHtml = this.innerHTML
        makeSound(buttonInnerHtml);
        
    })
}

document.addEventListener("keypress",function(event){
        makeSound(event.key);

})


 function makeSound(key){
    
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
            
    
        default:console.log(buttonInnerHtml)
            break;
    }
 }