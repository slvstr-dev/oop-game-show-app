class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
     * Create possible game phrases
     * @return {array} An array of possible phrases for the game
     */
    createPhrases() {
        return [
            new Phrase("You must be the change you wish to see in the world"),
            new Phrase("Life is a divine adventure"),
            new Phrase("He who has a why to live can bear almost any how"),
            new Phrase(
                "History is the version of past events that people have decided to agree upon"
            ),
            new Phrase(
                "Failure is the condiment that gives success its flavor"
            ),
        ];
    }

    /**
     * Get random phrase from phrases property
     * @return {Object} Random phrase object for use in game
     */
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);

        return this.phrases[randomNumber];
    }

    /**
     * Initialize game by getting & displaying a random phrase
     */
    startGame() {
        document.getElementById("overlay").style.display = "none";

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't won
     */
    checkForWin() {
        if (document.querySelectorAll(".hide").length === 0) {
            this.gameOver(true);
        }
    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        const lives = document.querySelectorAll(
            "img[src='images/liveHeart.png']"
        );

        lives[lives.length - 1].src = "images/lostHeart.png";

        this.missed++;

        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        const overlay = document.getElementById("overlay");
        const h1 = document.getElementById("game-over-message");

        if (gameWon) {
            h1.textContent = "Win";
            overlay.classList.add("win");
        } else {
            h1.textContent = "Lose";
            overlay.classList.add("lose");
        }

        document.getElementById("overlay").style.display = "flex";
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button) {
        button.setAttribute("disabled", true);

        if (this.activePhrase.checkLetter(button.innerText)) {
            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(button.innerText);
            this.checkForWin();
        } else {
            button.classList.add("wrong");
            this.removeLife();
        }
    }
}
