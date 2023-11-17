import Component from "../engine/component";
import Page from "../engine/page";
import PageManagement from "../engine/page-management";

class RawHtml extends Component {

    private htmlString: string;

    constructor(selector: string, htmlString: string) {
        super(selector);
        this.htmlString = htmlString;
    }

    public build(): void {
        $(`#${this.selector}`).html(this.htmlString);
    }
    public onScrollOut(): void {
        throw new Error("Method not implemented.");
    }
    public onScrollIn(): void {
        throw new Error("Method not implemented.");
    }
    
}