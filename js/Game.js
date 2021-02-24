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
}
