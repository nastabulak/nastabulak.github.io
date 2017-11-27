export default class ChannelData {
    constructor(channel) {
        this.channel = channel;
        this.request = new Request(`https://newsapi.org/v2/top-headlines?sources=${channel}&apiKey=ec5df01b8bcb4e0fb2e831c378846e2b`);
    }

    getData() {
        return fetch(this.request).then(response => response.json()).then(data => data.articles);
    }
}
