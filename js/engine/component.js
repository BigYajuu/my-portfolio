export class Component {
    constructor(selector) {
        this.hasInitiallyScrolledIn = false;
        this.selector = selector;
    }
    onInitialBuildBeforeScrollIn() { }
    ;
    onScrollIn() { }
    ;
    onScrollOut() { }
    ;
    conditionalOnInitialBuildBeforeScrollIn() {
        if (!this.hasInitiallyScrolledIn) {
            this.onInitialBuildBeforeScrollIn();
            this.hasInitiallyScrolledIn = true;
        }
    }
}
export default Component;
