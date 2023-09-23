import PageManagement from "./page-management.js";
import {Transition} from "./transition.js"
import {Utility} from "./utility.js";

enum ScrollEdgeDetection {
    AT_TOP,
    AT_BOTTOM,
    NONE
}

export class Page {
    _id: string;
    _pageNext?: Page | null;
    _pagePrev?: Page | null;
    _transitionScrollUp: Transition;
    _transitionScrollDown: Transition;
    _pageScrollEdgeDetection: ScrollEdgeDetection = ScrollEdgeDetection.NONE;

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

    getScrollUpCallback(pageManagement?: PageManagement) {
        const self = this;
        return function () {
            if (self._pagePrev) {
                self._transitionScrollUp.executeScrollUp(self._pagePrev!, self, pageManagement);
            }
        }
    }

    getScrollDownCallback(pageManagement?: PageManagement) {
        const self = this;
        return function () {
            if (self._pageNext) {
                self._transitionScrollDown.executeScrollDown(self, self._pageNext!, pageManagement);
            }
        }
    }
}

export default Page;