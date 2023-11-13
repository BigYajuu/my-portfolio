import Component from "../engine/component";
class RawHtml extends Component {
    constructor(selector, page, pageManagement, htmlString) {
        super(selector, page, pageManagement);
        this.htmlString = htmlString;
    }
    build() {
        $(`#${this.selector}`).html(this.htmlString);
    }
    onRetire() {
        throw new Error("Method not implemented.");
    }
    onLoad() {
        throw new Error("Method not implemented.");
    }
}
