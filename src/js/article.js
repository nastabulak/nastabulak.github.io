export default class Article {
    constructor({ author, description = "No details", publishedAt, title, url, urlToImage, source: { name } }) {
        this.author = author || name;
        this.description = description;
        this.publishedAt = publishedAt;
        this.sourceName = name;
        this.title = title;
        this.articleUrl = url;
        this.imageUrl = urlToImage;
    }

    createArticle() {
        return `<div class="card bg-light mb-3">
                <img class="card-img-top" src=${this.imageUrl} alt="No image to show">
                <div class="card-body">
                    <div class="card-title">
                        <h5 class="card-title">${this.title}</h5>
                        <h6 class="card-title">${this.author}</h6>
                        <a href=${this.articleUrl}>${this.sourceName}</a>
                    </div>
                    <p class="card-text">${this.publishedAt}</p>
                    <p class="card-text">${this.description}</p>
                 </div>
            </div>`
    }
}