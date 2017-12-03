export default class Notification {
    constructor(enviroment) {
        this.enviroment = enviroment;
        this.PROD = "production";
    }

    error() {
        if (this.enviroment === this.PROD) {
            this.createErrorNotificationTemplate();
        }
        return;
    }

    createErrorNotificationTemplate() {
        const message = `Что-то пошло не так. Не удалось загрузить новости`;
        alert(message);
    }
}

export let notification = new Notification("production");