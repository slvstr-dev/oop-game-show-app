class Game {
    constructor() {
        this.phrases = [
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
        this.activePhrase = null;
        this.missed = 0;
    }

    /**
     * Get a random phrase from the phrases property
     * @return {Object} Random phrase object for use in game
     */
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);

        return this.phrases[randomNumber];
    }

    /**
     * Check if all letters from phrase have been guessed
     * @return {boolean} True if game has been won, false if game wasn't won
     */
    checkForWin() {
        if (document.querySelectorAll(".hide").length <= 0) {
            this.gameOver(true);
        }
    }

    /**
     * 1. Remove a life from the scoreboard
     * 2. Increase the value of the missed property
     * 3. Adjust background color
     * 4. Check if the game has been lost
     */
    removeLife() {
        const background = document.querySelector("[data-missed]");
        const lives = document.querySelectorAll(".tries img");

        lives[this.missed].src = "images/lostHeart.png";
        this.missed++;

        background.dataset.missed = this.missed;

        if (this.missed >= 5) {
            this.gameOver(false);
        }
    }

    /**
     * Display a conditional game over message
     * @param {boolean} gameWon - Whether or not the game has been won
     */
    gameOver(gameWon) {
        const overlay = document.getElementById("overlay");
        const h1 = document.getElementById("game-over-message");
        const answer = document.getElementById("game-over-answer");

        if (gameWon) {
            const livesLeft =
                this.missed <= 4
                    ? `${5 - this.missed} lives left`
                    : "1 live left";

            h1.textContent = "Great, you won!";

            answer.textContent = `With ${livesLeft} you guessed: '${this.activePhrase.phrase}'.`;

            overlay.classList.add("win");
        } else {
            h1.textContent = "Game over!";

            answer.textContent = `The correct phrase was: '${this.activePhrase.phrase}'.`;

            overlay.classList.add("lose");
        }

        document.getElementById("overlay").style.display = "flex";
    }

    /**
     * Handle interactions with the keyboard
     * @param {string} button - The clicked HTML button element
     */
    handleInteraction(button) {
        if (this.missed >= 5) {
            return;
        }

        button.disabled = true;

        if (this.activePhrase.checkLetter(button.innerText)) {
            button.classList.add("chosen");

            this.activePhrase.showMatchedLetter(button.innerText);

            this.checkForWin();
        } else {
            button.classList.add("wrong");

            this.removeLife();
        }
    }

    /**
     * Reset game to default state
     */
    resetGame() {
        document.querySelectorAll(".key").forEach((key) => {
            key.disabled = false;
            key.classList.remove("chosen", "wrong");
        });

        document
            .querySelectorAll(".tries img")
            .forEach((heart) => (heart.src = "images/liveHeart.png"));

        document.getElementById("overlay").classList.remove("win", "lose");
    }

    /**
     * 1. Initialize game by getting & displaying a random phrase
     * 2. Remove start new game overlay
     */
    startGame() {
        this.activePhrase = this.getRandomPhrase();

        this.activePhrase.addPhraseToDisplay();

        document.getElementById("overlay").style.display = "none";
    }
}
