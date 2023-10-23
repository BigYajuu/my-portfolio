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

    protected abstract appear(): void;

    protected abstract build(): void;

    protected abstract disappear(): void;

    protected abstract discard(): void;
}

export default Component;