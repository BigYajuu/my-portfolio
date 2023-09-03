export class Page {
    constructor(id, scrollTransition) {
        this._id = id;
        this._transitionScrollUp = scrollTransition;
        this._transitionScrollDown = scrollTransition;
    }
    getElement() {
        return document.getElementById(this._id);
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
    }
}
export default Page;
