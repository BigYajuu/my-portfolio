import {Transition} from "./transition"

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

    getElement() {
        return document.getElementById(this._id);
    }

    setNeighbouringPages(pageNext: Page | null, pagePrev: Page | null) {
        var self = this;
        this._pageNext = pageNext;
        this._pagePrev = pagePrev;
        this._addOverscrollEventListener(function () {
            if (self._pagePrev) {
                self._transitionScrollUp.executeScrollUp(pagePrev!, self);
            }
        }, function () {
            if (self._pageNext) {
                self._transitionScrollDown.executeScrollDown(pageNext!, self);
            }
        });
    }

    _addOverscrollEventListener(overscrollTopCallback: Function, overscrollBottomCallback: Function) {

    }
}

export default Page;