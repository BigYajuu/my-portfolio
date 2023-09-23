var ScrollEdgeDetection;
(function (ScrollEdgeDetection) {
    ScrollEdgeDetection[ScrollEdgeDetection["AT_TOP"] = 0] = "AT_TOP";
    ScrollEdgeDetection[ScrollEdgeDetection["AT_BOTTOM"] = 1] = "AT_BOTTOM";
    ScrollEdgeDetection[ScrollEdgeDetection["NONE"] = 2] = "NONE";
})(ScrollEdgeDetection || (ScrollEdgeDetection = {}));
export class Page {
    constructor(id, scrollTransition) {
        this._pageScrollEdgeDetection = ScrollEdgeDetection.NONE;
        this._id = id;
        this._transitionScrollUp = scrollTransition;
        this._transitionScrollDown = scrollTransition;
    }
    getId() {
        return this._id;
    }
    getNode() {
        const clonedElement = $(`#${this.getId()}`).clone(true, true)[0];
        return clonedElement;
    }
    setNeighbouringPages(pageNext, pagePrev) {
        const self = this;
        this._pageNext = pageNext;
        this._pagePrev = pagePrev;
    }
    getScrollUpCallback(pageManagement) {
        const self = this;
        return function () {
            if (self._pagePrev) {
                self._transitionScrollUp.executeScrollUp(self._pagePrev, self, pageManagement);
            }
        };
    }
    getScrollDownCallback(pageManagement) {
        const self = this;
        return function () {
            if (self._pageNext) {
                self._transitionScrollDown.executeScrollDown(self, self._pageNext, pageManagement);
            }
        };
    }
}
export default Page;
