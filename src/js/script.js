require("babel-polyfill");
require("babel-polyfill");
import "../styles/style.less"
import { logger } from "./log/logger.js";
import data from '../test-source/source.json';

function sourcesLazyLoader() {
    import(/* webpackChunkName: "page-controller" */
        "./page-controller.js")
        .then(module => {
            logger.getMessage("info", "loaded: page module");
            module.page.renderCheckBoxSection();
        }).catch(err => {
            logger.getMessage("error", "page module loading error");
        });
}

const showNewsButton = document.getElementById("showNews");
showNewsButton.addEventListener("click", () => sourcesLazyLoader());
showNewsButton.addEventListener("click", () => logger.getMessage("info", data)); // to check custom Loader

