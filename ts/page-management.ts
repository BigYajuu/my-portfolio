import {Page} from "./page"

export class PageManagement {
    pages: Page[];
    constructor(pages: Page[]) {
        this.pages = pages;
    }

    _buildPages() {
        this._initializePages();
    }

    _initializePages() {
        for (let i = 0; i < this.pages.length; i++) {
            var pagePrev = i - 1 >= 0 ? this.pages[i-1] : null;
            var pageNext = i + 1 < this.pages.length ? this.pages[i+1] : null;
            this.pages[i].setNeighbouringPages(pageNext, pagePrev);
        }
    }

    _addPage(page: Page) {
        this.pages.push(page);
    }
}

export default PageManagement;