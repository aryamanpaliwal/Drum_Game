// document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    // alert("its a click");
    // console.log(this);
    // console.log(this.innerHTML);
    // this.style.color="white";
    var buttonInnerHTML = this.innerHTML;
    sound(buttonInnerHTML);
    buttonannimation(buttonInnerHTML);
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}


document.addEventListener("keydown", function (event) {
    sound(event.key); 
    buttonannimation(event.key); 
});

function sound(char) {
    switch (char) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonannimation (char) {
    var current = document.querySelector("."+char);
    current.classList.add("pressed");
    setTimeout(function() {
        current.classList.remove("pressed");
    } , 100);
}