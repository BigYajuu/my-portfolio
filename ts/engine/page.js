var ScrollEdgeDetection;
(function (ScrollEdgeDetection) {
    ScrollEdgeDetection[ScrollEdgeDetection["AT_TOP"] = 0] = "AT_TOP";
    ScrollEdgeDetection[ScrollEdgeDetection["AT_BOTTOM"] = 1] = "AT_BOTTOM";
    ScrollEdgeDetection[ScrollEdgeDetection["NONE"] = 2] = "NONE";
})(ScrollEdgeDetection || (ScrollEdgeDetection = {}));
export class Page {
    constructor(selector, scrollTransition) {
        this.pageScrollEdgeDetection = ScrollEdgeDetection.NONE;
        this.selector = selector;
        this.transitionScrollUp = scrollTransition;
        this.transitionScrollDown = scrollTransition;
    }
    getSelector() {
        return this.selector;
    }
    getNode() {
        const clonedElement = $(`#${this.getSelector()}`).clone(true, true)[0];
        return clonedElement;
    }
    setNeighbouringPages(pageNext, pagePrev) {
        this.pageNext = pageNext;
        this.pagePrev = pagePrev;
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
}
export default Page;
