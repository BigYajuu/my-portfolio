import Component from "../engine/component";
import Page from "../engine/page";
import PageManagement from "../engine/page-management";

class RawHtml extends Component {

    private htmlString: string;

    constructor(selector: string, page: Page, pageManagement: PageManagement, htmlString: string) {
        super(selector, page, pageManagement);
        this.htmlString = htmlString;
    }

    public build(): void {
        $(`#${this.selector}`).html(this.htmlString);
    }
    public onRetire(): void {
        throw new Error("Method not implemented.");
    }
    public onLoad(): void {
        throw new Error("Method not implemented.");
    }
    
}