import 'whatwg-fetch';
import "babel-polyfill";
import ChannelData from "./channel-data.js";
import ArticleSection from "./sections/article-section.js";
import CheckBoxSection from "./sections/check-box-section.js";
import { logger } from "./log/logger.js";
import { notification } from "./log/notification.js";
import { store } from "./custom-redux/store.js"

class PageController {
    constructor() {
        this.sources = ["BBC News", "Financial Times", "Metro", "the Economist", "the Telegraph", "Independent", "Daily Mail"];
    }

    getNews() {
        return this.getCheckedChannels().forEach(channel => {
            this.getChannelNews(channel);
        });
    }

    async getChannelNews(channel) {
        try {
            const channelData = new ChannelData(channel);
            const data = await channelData.getData();
            this.renderArticleSection(data);
            logger.getMessage("info", `loaded: ${channel}`);
        } catch (error) {
            notification.getMessage("Что-то пошло не так, не удалось загрузить новости.");
            logger.getMessage("warn", `error during loading news from ${channel}`);
        };
    }

    renderArticleSection(articles) {
        const section = new ArticleSection(articles);
        section.addArticlesSectionToView();
    }

    renderCheckBoxSection() {
        const section = new CheckBoxSection(this.sources);
        section.addSourcesSectionToView();
    }

    getCheckedChannels() {
        logger.getMessage("info", store.getState());
        const checkedChannels = store.getState().map(resource => resource.value);
        logger.getMessage("info", `checked channels: ${checkedChannels}`);
        return checkedChannels;
    }
}
export const page = new PageController();