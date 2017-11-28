
import PageController from "./page-controller.js";

let page = new PageController();
page.renderPage();

let button = document.getElementById("getNews");
button.addEventListener("click", () =>  document.getElementById("articles").innerHTML = "");
button.addEventListener("click", page.getNews.bind(page));






