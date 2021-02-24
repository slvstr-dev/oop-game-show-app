let game;
const startButton = document.getElementById("btn__reset");

startButton.addEventListener("click", (event) => {
    game = new Game();
    game.startGame();
});
