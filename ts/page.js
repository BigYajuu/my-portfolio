import { Utility } from "./utility.js";
export class Page {
    constructor(id, scrollTransition) {
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
    setDefaultOverscrollEventListeners(pageManagement) {
        const self = this;
        this._addOverscrollEventListeners(function () {
            if (self._pagePrev) {
                self._transitionScrollUp.executeScrollUp(self._pagePrev, self, pageManagement);
            }
        }, function () {
            if (self._pageNext) {
                self._transitionScrollDown.executeScrollDown(self, self._pageNext, pageManagement);
            }
        });
    }
    _addOverscrollEventListeners(overscrollTopCallback, overscrollBottomCallback) {
        const scrollableDiv = document.getElementById(this._id);
        scrollableDiv.addEventListener("scroll", function () {
            console.log(`scrolling! DIV: ${scrollableDiv.id}, scrollTop: ${scrollableDiv.scrollTop}`);
            if (scrollableDiv.scrollTop === 0) {
                overscrollTopCallback();
                console.log(`overscroll UP! DIV: ${scrollableDiv.id}, scrollTop: ${scrollableDiv.scrollTop}, scrollHeight: ${scrollableDiv.scrollHeight}, clientHeight: ${scrollableDiv.clientHeight}`);
            }
            else if (Utility.isScrollToPosition(scrollableDiv.scrollTop + scrollableDiv.clientHeight, scrollableDiv.scrollHeight)) {
                overscrollBottomCallback();
                console.log(`overscroll DWN! DIV: ${scrollableDiv.id}, clientHeight: ${scrollableDiv.clientHeight}`);
            }
        });
    }
}
export default Page;
