export default class CheckBox {
    constructor(title, id) {
        this.title = title;
        this.value = this.title.toLowerCase().split(" ").join("-");
        this.id = id;
    }

    createCheckBox() {
        return `<div class="form-check" >
        <label class="form-check-label" id=${this.id}>
        <input class="form-check-input" type="checkbox" value=${this.value}>${this.title} 
        </label>
        </div>`;
    }
}
