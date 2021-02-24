class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display game phrase
     */
    addPhraseToDisplay() {
        const characters = this.phrase.split("");
        let html = "";

        characters.forEach((character) => {
            if (character === " ") {
                html += "<li class='space'> </li>";
            } else {
                html += `<li class="hide letter ${character}">${character}</li>`;
            }
        });

        document.getElementById("phrase").firstElementChild.innerHTML = html;
    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {
        return this.phrase.indexOf(letter) !== -1;
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        const matchedLetters = document.querySelectorAll(`.${letter}`);
        matchedLetters.forEach((matchedLetter) => {
            matchedLetter.classList.add("show");
            matchedLetter.classList.remove("hide");
        });
    }
}
