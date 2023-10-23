import { Utility, ScrollDirection } from "../utility.js";
export class PageManagement {
    constructor(divID, pages) {
        this._currentPageIndex = 0;
        this._lastVPosition = 0;
        this._divID = divID;
        this.pages = pages;
        this._initializePages();
    }
    _initializePages() {
        for (var i = 0; i < this.pages.length; i++) {
            var pagePrev = i - 1 >= 0 ? this.pages[i - 1] : null;
            var pageNext = i + 1 < this.pages.length ? this.pages[i + 1] : null;
            this.pages[i].setNeighbouringPages(pageNext, pagePrev);
        }
        this.setOverscrollEventListener();
    }
    updatePageEvents() {
        // This is called after the transition restores a new main div.
        // And technically when a new main div is established,
        // all event listeners will be removed. Thus an update is required.
        const self = this;
        self.setOverscrollEventListener();
    }
    setOverscrollEventListener() {
        // The listener detects scroll on the main div 
        // and actuates up/down transition animation 
        // accordingly.
        const self = this;
        const mainDiv = document.getElementById(this._divID);
        self._setLastVPosition(mainDiv.scrollTop); // Update current V position
        mainDiv.addEventListener('scroll', function (event) {
            const scrollDirection = Utility.determineScrollDirection(self._lastVPosition, this.scrollTop);
            if (scrollDirection == ScrollDirection.SCROLLING_UP) {
                const scrollUpCallback = self.pages[self._currentPageIndex].getScrollUpCallback(self);
                self._currentPageIndex = self._currentPageIndex - 1 >= 0 ? self._currentPageIndex - 1 : 0;
                scrollUpCallback();
            }
            else if (scrollDirection == ScrollDirection.SCROLLING_DOWN) {
                const scrollDownCallback = self.pages[self._currentPageIndex].getScrollDownCallback(self);
                self._currentPageIndex = self._currentPageIndex + 1 < self.pages.length ? self._currentPageIndex + 1 : self.pages.length - 1;
                scrollDownCallback();
            }
        });
    }
    setComponentEventListeners() {
    }
    _setLastVPosition(lastVPosition) {
        this._lastVPosition = lastVPosition;
    }
}
export default PageManagement;
