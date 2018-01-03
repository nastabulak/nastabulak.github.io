class Logger {
    constructor() {
    }

    getMessage(type, message) {
        switch (type) {
            case "info":
                if (PRODUCTION) {
                    break;
                }
                console.info(message);
                break;
            case "warn":
                if (PRODUCTION) {
                    break;
                }
                console.warn(mesage);
                break;
            default:
                console.error(message);
                break;
        }
    }
}

export let logger = new Logger();
