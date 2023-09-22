import {Page} from "./page.js"

export class PageManagement {
    pages: Page[];
    constructor(pages: Page[]) {
        this.pages = pages;
        this._initializePages();
    }

    _initializePages() {
        for (let i = 0; i < this.pages.length; i++) {
            var pagePrev = i - 1 >= 0 ? this.pages[i-1] : null;
            var pageNext = i + 1 < this.pages.length ? this.pages[i+1] : null;
            this.pages[i].setNeighbouringPages(pageNext, pagePrev);
            this.pages[i].setDefaultOverscrollEventListeners(this);
        }
    }

    _addPage(page: Page) {
        this.pages.push(page);
    }

    updatePageEvents() {
        const self = this;
        for (let i = 0; i < this.pages.length; i++) {
            this.pages[i].setDefaultOverscrollEventListeners(this);
        }
    }
}

export default PageManagement;