import Page from "./page";
import PageManagement from "./page-management";

export abstract class Component {

    protected selector: string;
    protected page: Page;
    protected pageManagement: PageManagement;

    constructor(selector: string, page: Page, pageManagement: PageManagement) {
        this.selector = selector;
        this.page = page;
        this.pageManagement = pageManagement;
        this.page.appendComponent(this);
    }

    public abstract build(): void;

    public onScrollIn(): void {};

    public onScrollOut(): void {};
}

export default Component;