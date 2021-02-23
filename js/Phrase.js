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
}
