import CheckBox from "./check-box.js";
import { page } from "../page-controller.js";
import { store } from "../custom-redux/store.js"

export default class CheckBoxSection {
    constructor(sources) {
        this.sources = sources;
    }

    createSourcesList() {
        return this.sources.map((source, i) => {
            const checkBox = new CheckBox(source, i);
            return checkBox.createCheckBox();
        }).join("");
    }

    createSourcesSection() {
        return `<form>${this.createSourcesList()} </form> ${this.createGetNewsButton()}`;
    }

    addSourcesSectionToView() {
        let resources = document.getElementById("resources");
        resources.innerHTML = this.createSourcesSection();
        resources.addEventListener("click", () => this.addClickHandlers(event));
    }

    createGetNewsButton() {
        return `<button class="btn btn-primary" id="getNews">Get Your News</button>`;
    }

    addClickHandlers(event) {
        if (event.target.id === "getNews") {
            document.getElementById("articles").innerHTML = "";
            page.getNews();
        }
        else if (event.target.classList.contains('form-check-label')) {
            const value = event.target.getElementsByTagName("input")[0].value;
            store.dispatch({ type: 'TOGGLE_RESOURCE', value: value, id: event.target.id })
        };
    }
}