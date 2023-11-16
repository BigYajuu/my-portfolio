import $ from "jquery";
var ScrollEdgeDetection;
(function (ScrollEdgeDetection) {
    ScrollEdgeDetection[ScrollEdgeDetection["AT_TOP"] = 0] = "AT_TOP";
    ScrollEdgeDetection[ScrollEdgeDetection["AT_BOTTOM"] = 1] = "AT_BOTTOM";
    ScrollEdgeDetection[ScrollEdgeDetection["NONE"] = 2] = "NONE";
})(ScrollEdgeDetection || (ScrollEdgeDetection = {}));
export class Page {
    constructor(selector, scrollTransition, components = []) {
        this.pageScrollEdgeDetection = ScrollEdgeDetection.NONE;
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
            this.components[i].build();
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
            console.log(`onInitialBuildBeforeScrollIn: ${this.components[i].constructor.name}`);
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
