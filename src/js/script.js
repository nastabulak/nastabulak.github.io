import PageController from "./page-controller.js";

const page = new PageController();
page.renderCheckBoxSection();

const button = document.getElementById("getNews");
button.addEventListener("click", () => document.getElementById("articles").innerHTML = "");
button.addEventListener("click", page.getNews.bind(page));