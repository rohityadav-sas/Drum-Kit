for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonHTML = this.innerHTML;
        makeSound(buttonHTML);

        buttonAnimation(buttonHTML);
    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("./assets/sounds/crash.mp3");
            crash.play()
            break;
        case "a":
            var kick = new Audio("./assets/sounds/punch.mp3");
            kick.play()
            break;
        case "s":
            var snare = new Audio("./assets/sounds/snare.mp3");
            snare.play()
            break;
        case "d":
            var tom1 = new Audio("./assets/sounds/tom-1.mp3");
            tom1.play()
            break;
        case "j":
            var tom2 = new Audio("./assets/sounds/tom-2.mp3");
            tom2.play()
            break;
        case "k":
            var tom3 = new Audio("./assets/sounds/tom-3.mp3");
            tom3.play()
            break;
        case "l":
            var tom4 = new Audio("./assets/sounds/tom-4.mp3");
            tom4.play()
            break;
        default:

            break;
    }

}

function buttonAnimation(clickedKey) {
    var activeKey = document.querySelector("." + clickedKey);

    activeKey.classList.add("pressed");

    setTimeout(function () {
        activeKey.classList.remove("pressed");
    }, 100);
}

