import 'whatwg-fetch';
import "babel-polyfill";
import ChannelData from "./channel-data.js";
import ArticleSection from "./article-section.js";
import CheckBoxSection from "./check-box-section.js";
import { logger } from "./logger.js";
import { notification } from "./notification.js";

export default class PageController {
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
            let data = await channelData.getData();
            this.renderArticleSection(data);
            logger.info(`loaded: ${channel}`);
        } catch (error) {
            notification.error();
            logger.error(`error during loading news from ${channel}`);
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
        let checkedChannels = Array.from(document.forms[0].elements).filter(resource => resource.checked).map(channel => channel.value);
        logger.info(`checked channels: ${checkedChannels}`);
        return checkedChannels;
    }
}