import $ from "jquery";
export class Component {
    constructor(selector) {
        this.hasInitiallyScrolledIn = false;
        this.children = [];
        // Completes element construction
        this.selector = selector;
    }
    attach() {
        // Assigns element to target selector div in HTML
        if (this.$constructedElement) {
            $(`#${this.selector}`).append(this.$constructedElement);
        }
        else {
            throw new Error("Component not constructed.");
        }
    }
    ;
    attachChildren() {
        for (const child of this.children) {
            child.attach();
        }
    }
    ;
    build() {
        // Returns the constructed element that is stored as the component's state
        return this.$constructedElement ? this.$constructedElement : undefined;
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
    onAttachBeforeScrollIn() { }
    ;
    onScrollIn() { }
    ;
    onScrollOut() { }
    ;
    conditionalOnInitialBuildBeforeScrollIn() {
        if (!this.hasInitiallyScrolledIn) {
            this.onAttachBeforeScrollIn();
            this.hasInitiallyScrolledIn = true;
        }
    }
}
export default Component;
