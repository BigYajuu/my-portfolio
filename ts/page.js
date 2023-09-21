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
        const originalElement = document.getElementById(this.getId());
        const clonedElement = $(`#${this.getId()}`).clone(true, true)[0];
        // this._copyComputedStyles(originalElement, clonedElement);
        return clonedElement;
    }
    setNeighbouringPages(pageNext, pagePrev) {
        const self = this;
        this._pageNext = pageNext;
        this._pagePrev = pagePrev;
        this._addOverscrollEventListener(function () {
            if (self._pagePrev) {
                self._transitionScrollUp.executeScrollUp(pagePrev, self);
            }
        }, function () {
            if (self._pageNext) {
                self._transitionScrollDown.executeScrollDown(self, pageNext);
            }
        });
    }
    _addOverscrollEventListener(overscrollTopCallback, overscrollBottomCallback) {
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
    _copyComputedStyles(source, target) {
        const computedStyles = window.getComputedStyle(source);
        for (let i = 0; i < computedStyles.length; i++) {
            const property = computedStyles[i];
            const value = computedStyles.getPropertyValue(property);
            console.log(`property: ${property}, value: ${value}`);
            target.style[property] = value;
        }
    }
}
export default Page;
