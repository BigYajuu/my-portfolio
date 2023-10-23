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

    public abstract appear(): void;

    public abstract build(): void;

    public abstract disappear(): void;

    public abstract discard(): void;
}

export default Component;