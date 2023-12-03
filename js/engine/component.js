import $ from "jquery";
export class Component {
    constructor(selector) {
        this.hasInitiallyScrolledIn = false;
        this.children = [];
        // Completes element construction
        this.selector = selector;
    }
    build() {
        // Assigns element to target selector div in HTML
        if (this.$constructedElement) {
            $(`#${this.selector}`).append(this.$constructedElement);
        }
        else {
            throw new Error("Component not constructed.");
        }
    }
    ;
    buildChildren() {
        for (const child of this.children) {
            child.build();
        }
    }
    getConstructedElement() {
        return this.$constructedElement;
    }
    ;
    getChildrenConstructedElements() {
        const childrenConstructedElements = [];
        for (const child of this.children) {
            const childConstructedElement = child.getConstructedElement();
            if (childConstructedElement) {
                childrenConstructedElements.push(childConstructedElement);
            }
        }
        return childrenConstructedElements;
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
