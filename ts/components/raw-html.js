import Component from "../engine/component";
class RawHtml extends Component {
    constructor(selector, htmlString) {
        super(selector);
        this.htmlString = htmlString;
    }
    build() {
        $(`#${this.selector}`).html(this.htmlString);
    }
    onScrollOut() {
        throw new Error("Method not implemented.");
    }
    onScrollIn() {
        throw new Error("Method not implemented.");
    }
}
