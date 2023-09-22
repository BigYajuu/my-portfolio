import PageManagement from "./page-management.js";
import {Transition} from "./transition.js"
import {Utility} from "./utility.js";

export class Page {
    _id: string;
    _pageNext?: Page | null;
    _pagePrev?: Page | null;
    _transitionScrollUp: Transition;
    _transitionScrollDown: Transition;

    constructor(id: string, scrollTransition: Transition) {
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

    setNeighbouringPages(pageNext: Page | null, pagePrev: Page | null) {
        const self = this;
        this._pageNext = pageNext;
        this._pagePrev = pagePrev;
    }

    setDefaultOverscrollEventListeners(pageManagement?: PageManagement) {
        const self = this;
        this._addOverscrollEventListeners(function () {
            if (self._pagePrev) {
                self._transitionScrollUp.executeScrollUp(self._pagePrev!, self, pageManagement);
            }
        }, function () {
            if (self._pageNext) {
                self._transitionScrollDown.executeScrollDown(self, self._pageNext!, pageManagement);
            }
        });
    }

    _addOverscrollEventListeners(overscrollTopCallback: Function, overscrollBottomCallback: Function) {
        const scrollableDiv = document.getElementById(this._id)!
        scrollableDiv.addEventListener("scroll", function () {
            console.log(`scrolling! DIV: ${scrollableDiv.id}, scrollTop: ${scrollableDiv.scrollTop}`);
            if (scrollableDiv.scrollTop === 0) {
                overscrollTopCallback();
                console.log(`overscroll UP! DIV: ${scrollableDiv.id}, scrollTop: ${scrollableDiv.scrollTop}, scrollHeight: ${scrollableDiv.scrollHeight}, clientHeight: ${scrollableDiv.clientHeight}`);
            } else if (Utility.isScrollToPosition(scrollableDiv.scrollTop + scrollableDiv.clientHeight, scrollableDiv.scrollHeight)) {
                overscrollBottomCallback();
                console.log(`overscroll DWN! DIV: ${scrollableDiv.id}, clientHeight: ${scrollableDiv.clientHeight}`);
            }
          });
    }
}

export default Page;