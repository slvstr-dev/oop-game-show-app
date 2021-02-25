const startButton = document.getElementById("btn__reset");
const keyboard = document.getElementById("qwerty");
let game;

startButton.addEventListener("click", (event) => {
    game = new Game();
    game.startGame();
});

keyboard.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        game.handleInteraction(event.target);
    }
});
