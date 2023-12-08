import $ from "jquery";
export class Page {
    constructor(selector, scrollTransition, components = []) {
        this.components = [];
        this.selector = selector;
        this.transitionScrollUp = scrollTransition;
        this.transitionScrollDown = scrollTransition;
        this.components = components;
    }
    appendComponent(component) {
        this.components.push(component);
    }
    initializePage() {
        this.buildComponents();
    }
    buildComponents() {
        for (var i = 0; i < this.components.length; i++) {
            this.components[i].attach();
        }
    }
    getSelector() {
        return this.selector;
    }
    getNode() {
        const clonedElement = $(`#${this.getSelector()}`).clone(true, true)[0];
        return clonedElement;
    }
    getScrollUpCallback(pageManagement) {
        const self = this;
        return function () {
            if (self.pagePrev) {
                self.transitionScrollUp.executeScrollUp(self.pagePrev, self, pageManagement);
            }
        };
    }
    getScrollDownCallback(pageManagement) {
        const self = this;
        return function () {
            if (self.pageNext) {
                self.transitionScrollDown.executeScrollDown(self, self.pageNext, pageManagement);
            }
        };
    }
    setNeighbouringPages(pageNext, pagePrev) {
        this.pageNext = pageNext;
        this.pagePrev = pagePrev;
    }
    conditionalOnInitialBuildBeforeScrollIn() {
        for (var i = 0; i < this.components.length; i++) {
            this.components[i].conditionalOnInitialBuildBeforeScrollIn();
        }
    }
    onScrollIn() {
        for (var i = 0; i < this.components.length; i++) {
            this.components[i].onScrollIn();
        }
    }
    onScrollOut() {
        for (var i = 0; i < this.components.length; i++) {
            this.components[i].onScrollOut();
        }
    }
}
export default Page;
