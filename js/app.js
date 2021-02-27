const startButton = document.getElementById("btn__reset");
const keyboard = document.getElementById("qwerty");
const keys = document.querySelectorAll(".key");
let game;

/**
 * (Re)start game
 */
startButton.addEventListener("click", () => {
    game = new Game();

    game.resetGame();

    game.startGame();

    /**
     * Handle physical keyboard guesses
     */
    document.addEventListener("keydown", (event) => {
        keys.forEach((key) => {
            if (!key.disabled && key.innerText === event.key) {
                game.handleInteraction(key);
            }
        });
    });
});

/**
 * Handle on screen keyboard guesses
 */
keyboard.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        game.handleInteraction(event.target);
    }
});
