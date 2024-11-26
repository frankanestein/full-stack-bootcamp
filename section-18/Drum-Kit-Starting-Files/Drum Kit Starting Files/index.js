// for (button in document.querySelectorAll("button")) {
//     button.addEventListener("click",handleClick);
// }    // this didn't work

// document.querySelectorAll(".drum").forEach(function(drum){(console.log(drum))}) // This is what I wanted as a one liner.

// for (var i = 0; i < document.querySelectorAll(".drum").length;i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// }

document.querySelectorAll(".drum").forEach(function(drum){(drum.addEventListener("click",handleClick))});   // This uses an anonymous function like in
                                                                                                            // the OneNote example for handleClick
document.addEventListener("keydown",handleKeyboard);
// document.addEventListener("keydown", function(event) {                   // Angela's solution
//     makeSound(event.key);
// })

function handleKeyboard(incoming) {
    console.log(incoming)
    var keyPressed = incoming.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
}

function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

}

function makeSound(key) {
    switch (key) {
        case "w" : 
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
          break;
        case "a" :
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
          break;
        case "s" :
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
          break;
        case "d" :
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
          break;
        case "j" :
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
          break;
        case "k" :
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
          break;
        case "l" :
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
          break;
        default: console.log(key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed"), 100});
}