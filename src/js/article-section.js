import Article from "./article.js";

export default class ArticleSection {
    constructor(data) {
        this.data = data;
    }

    createArticlesSection() {
        let div = document.createElement("div");

        div.innerHTML = this.data.map(articleData => {
            const article = new Article(articleData);
            return article.createArticle();
        }).join("");

        return div;
    }

    addArticlesSectionToView() {
        document.getElementById("articles").appendChild(this.createArticlesSection());
    }
}