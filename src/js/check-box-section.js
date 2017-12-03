import CheckBox from "./check-box.js";

export default class CheckBoxSection {
    constructor(sources) {
        this.sources = sources;
    }

    createSourcesList() {        
        return this.sources.map(source => {
            const checkBox = new CheckBox(source);
            return checkBox.createCheckBox();
        }).join("");
    }

    createSourcesSection() {
        return `<form>${this.createSourcesList()} </form> ${this.createGetNewsButton()}`;
    }

    addSourcesSectionToView() {
        document.getElementById("resources").innerHTML = this.createSourcesSection();
    }

       createGetNewsButton() {
        return `<button class="btn btn-primary" id="getNews">Get Your News</button>`;
    }
}