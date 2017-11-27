import CheckBox from "./check-box.js";
import Article from "./article.js";

export default class Section {
    constructor(sources = [], data = []) {
        this.sources = sources;
        this.data = data;
    }

    createSourcesList() {
        return this.sources.map(source => {
            let checkBox = new CheckBox(source);
            return checkBox.createCheckBox();
        }).join("");

    }

    createSourcesSection() {
        return `<form>${this.createSourcesList()} </form> ${this.createGetNewsButton()}`;
    }

    addSourcesSectionToView() {
        document.getElementById("resources").innerHTML = this.createSourcesSection();
    }

    createArticlesSection() {
        let div = document.createElement("div")
        div.innerHTML = this.data.map(articleData => {
            let article = new Article(articleData);
            return article.createArticle();
        }).join("");
        return div;

    }

    addArticlesSectionToView() {
        document.getElementById("articles").appendChild(this.createArticlesSection());
    }

    createGetNewsButton() {
        return `<button class="btn btn-primary" onclick="page.getNews()">Get Your News</button>`;
    }
}