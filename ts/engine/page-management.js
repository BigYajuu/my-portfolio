import { Utility, ScrollDirection } from "../utility.js";
export class PageManagement {
    constructor(divID, pages) {
        this.currentPageIndex = 0;
        this.lastVPosition = 0;
        this.divID = divID;
        this.pages = pages;
        this.initializePages();
    }
    doesPageSelectorDenoteCurrentPage(givenPageSelector) {
        return givenPageSelector == this.pages[this.currentPageIndex].getSelector();
    }
    getCurrentPageIndex() {
        return this.currentPageIndex;
    }
    initializePages() {
        for (var i = 0; i < this.pages.length; i++) {
            var pagePrev = i - 1 >= 0 ? this.pages[i - 1] : null;
            var pageNext = i + 1 < this.pages.length ? this.pages[i + 1] : null;
            this.pages[i].setNeighbouringPages(pageNext, pagePrev);
        }
        this.setOverscrollEventListener();
    }
    setOverscrollEventListener() {
        // The listener detects scroll on the main div 
        // and actuates up/down scroll transition animation 
        // accordingly.
        const self = this;
        const mainDiv = document.getElementById(this.divID);
        self.setLastVPosition(mainDiv.scrollTop); // Update current V position
        mainDiv.addEventListener('scroll', function (event) {
            const scrollDirection = Utility.determineScrollDirection(self.lastVPosition, this.scrollTop);
            if (scrollDirection == ScrollDirection.SCROLLING_UP) {
                const lastPageIndex = self.currentPageIndex;
                const scrollUpCallback = self.pages[self.currentPageIndex].getScrollUpCallback(self);
                self.currentPageIndex = self.currentPageIndex - 1 >= 0 ? self.currentPageIndex - 1 : 0;
                console.log(self.currentPageIndex);
                if (lastPageIndex != self.currentPageIndex) {
                    self.pages[lastPageIndex].setAllFixedItemsToDissapear();
                    self.pages[self.currentPageIndex].setAllFixedItemsToAppear();
                }
                scrollUpCallback();
            }
            else if (scrollDirection == ScrollDirection.SCROLLING_DOWN) {
                const lastPageIndex = self.currentPageIndex;
                const scrollDownCallback = self.pages[self.currentPageIndex].getScrollDownCallback(self);
                self.currentPageIndex = self.currentPageIndex + 1 < self.pages.length ? self.currentPageIndex + 1 : self.pages.length - 1;
                console.log(self.currentPageIndex);
                if (lastPageIndex != self.currentPageIndex) {
                    self.pages[lastPageIndex].setAllFixedItemsToDissapear();
                    self.pages[self.currentPageIndex].setAllFixedItemsToAppear();
                }
                scrollDownCallback();
            }
        });
    }
    setLastVPosition(lastVPosition) {
        this.lastVPosition = lastVPosition;
    }
    updatePageEvents() {
        // This is called after the transition restores a new main div.
        // And technically when a new main div is established,
        // all event listeners will be removed. Thus an update is required.
        const self = this;
        self.setOverscrollEventListener();
    }
}
export default PageManagement;
