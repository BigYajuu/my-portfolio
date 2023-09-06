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
        const element = document.getElementById(this._id);
        var node;
        jQuery(node = $(`#${this.getId()}`).clone(true, true));
        return node;
    }
    setNeighbouringPages(pageNext, pagePrev) {
        var self = this;
        this._pageNext = pageNext;
        this._pagePrev = pagePrev;
        this._addOverscrollEventListener(function () {
            if (self._pagePrev) {
                self._transitionScrollUp.executeScrollUp(pagePrev, self);
            }
        }, function () {
            if (self._pageNext) {
                self._transitionScrollDown.executeScrollDown(pageNext, self);
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
}
export default Page;
