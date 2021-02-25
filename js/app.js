const startButton = document.getElementById("btn__reset");
const keyboard = document.getElementById("qwerty");
let game;

keyboard.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        game.handleInteraction(event.target);
    }
});

startButton.addEventListener("click", () => {
    game = new Game();

    game.resetGame();
    game.startGame();
});
