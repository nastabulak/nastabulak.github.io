export default class CheckBox {
    constructor(title) {
        this.title = title;
        this.value = this.title.toLowerCase().split(" ").join("-");
    }

    createCheckBox() {
        return `<div class="form-check">
        <label class="form-check-label">
        <input class="form-check-input" type="checkbox" value=${this.value}>${this.title}
        </label>
        </div>`;
    }
}