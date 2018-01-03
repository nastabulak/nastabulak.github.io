export default class Notification {
    constructor() {
    }

    getMessage(message) {
        if (PRODUCTION) {
            alert(message);
        }
    }
}

export let notification = new Notification();