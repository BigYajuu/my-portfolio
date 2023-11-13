export class Component {
    constructor(selector, page, pageManagement) {
        this.selector = selector;
        this.page = page;
        this.pageManagement = pageManagement;
        this.page.appendComponent(this);
    }
    onLoad() { }
    ;
    onRetire() { }
    ;
    setFixedItemsToDissapear() { }
    ;
    setFixedItemsToAppear() { }
    ;
}
export default Component;
