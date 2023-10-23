import PageManagement from "./page-management";

export abstract class Component {

    protected selector: string;
    protected pageSelector: string;
    protected pageManagement: PageManagement;

    constructor(selector: string, pageSelector: string, pageManagement: PageManagement) {
        this.selector = selector;
        this.pageSelector = pageSelector;
        this.pageManagement = pageManagement;
    }

    abstract appear(): void;

    abstract build(): void;

    abstract disappear(): void;

    abstract discard(): void;
}

export default Component;