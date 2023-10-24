import Page from "engine/page";
import {Utility, ScrollDirection} from "../utility.js";

export class PageManagement {
    // A class that manages and controls all the pages 
    // and keeps the listeners updated 
    // whenever transition takes place.
    private divID: string;
    private currentPageIndex: number = 0;
    private lastVPosition: number = 0;
    private pages: Page[];
    constructor(divID: string, pages: Page[]) {
        this.divID = divID;
        this.pages = pages;
        this.initializePages();
    }

    public doesPageSelectorDenoteCurrentPage(givenPageSelector: string): boolean {
        return givenPageSelector == this.pages[this.currentPageIndex].getSelector();
    }

    public getCurrentPageIndex(): number {
        return this.currentPageIndex;
    }

    private initializePages() {
        for (var i = 0; i < this.pages.length; i++) {
            var pagePrev = i - 1 >= 0 ? this.pages[i-1] : null;
            var pageNext = i + 1 < this.pages.length ? this.pages[i+1] : null;
            this.pages[i].setNeighbouringPages(pageNext, pagePrev);
        }
        this.setOverscrollEventListener();
    }

    public setOverscrollEventListener() {
        // The listener detects scroll on the main div 
        // and actuates up/down scroll transition animation 
        // accordingly.
        const self = this;
        const mainDiv = document.getElementById(this.divID)!
        self.setLastVPosition(mainDiv.scrollTop);  // Update current V position
        mainDiv.addEventListener('scroll', function (event) {
            const scrollDirection = Utility.determineScrollDirection(self.lastVPosition, this.scrollTop);
            if (scrollDirection == ScrollDirection.SCROLLING_UP) {
                const scrollUpCallback = self.pages[self.currentPageIndex].getScrollUpCallback(self);
                self.currentPageIndex = self.currentPageIndex - 1 >= 0 ? self.currentPageIndex - 1 : 0;
                scrollUpCallback();
            } else if (scrollDirection == ScrollDirection.SCROLLING_DOWN) {
                const scrollDownCallback = self.pages[self.currentPageIndex].getScrollDownCallback(self);
                self.currentPageIndex = self.currentPageIndex + 1 < self.pages.length ? self.currentPageIndex + 1 : self.pages.length - 1;
                scrollDownCallback();
            }
        }
        );
    }

    private setLastVPosition(lastVPosition: number) {
        this.lastVPosition = lastVPosition;
    }

    public updatePageEvents() {
        // This is called after the transition restores a new main div.
        // And technically when a new main div is established,
        // all event listeners will be removed. Thus an update is required.
        const self = this;
        self.setOverscrollEventListener();
    }
}

export default PageManagement;