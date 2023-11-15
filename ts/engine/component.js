export class Component {
    constructor(selector, page, pageManagement) {
        this.selector = selector;
        this.page = page;
        this.pageManagement = pageManagement;
        this.page.appendComponent(this);
    }
    onScrollIn() { }
    ;
    onScrollOut() { }
    ;
}
export default Component;
