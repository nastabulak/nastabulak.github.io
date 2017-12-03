class Logger {
    constructor(enviroment) {
        this.enviroment = enviroment;
        this.DEV = "development";
        this.PROD = "production";

    }

    info(message) {
        if (this.enviroment === this.DEV) {
            console.info(message);
        }
        return;
    }

    warn(message) {
        if (this.enviroment === this.DEV) {
            console.warn(message);
        }
        return;
    }

    error(message) {
        console.error(message);
    }

}
export let logger = new Logger("production");
