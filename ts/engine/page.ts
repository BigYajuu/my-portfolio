import PageManagement from "engine/page-management";
import Transition from "engine/transition";

enum ScrollEdgeDetection {
    AT_TOP,
    AT_BOTTOM,
    NONE
}

export class Page {
    private id: string;
    private pageNext?: Page | null;
    private pagePrev?: Page | null;
    private transitionScrollUp: Transition;
    private transitionScrollDown: Transition;
    private pageScrollEdgeDetection: ScrollEdgeDetection = ScrollEdgeDetection.NONE;

    constructor(id: string, scrollTransition: Transition) {
        this.id = id;
        this.transitionScrollUp = scrollTransition;
        this.transitionScrollDown = scrollTransition;
    }

    getId() {
        return this.id;
    }

    getNode() {
        const clonedElement = $(`#${this.getId()}`).clone(true, true)[0];
        return clonedElement;
    }

    setNeighbouringPages(pageNext: Page | null, pagePrev: Page | null) {
        const self = this;
        this.pageNext = pageNext;
        this.pagePrev = pagePrev;
    }

    getScrollUpCallback(pageManagement?: PageManagement) {
        const self = this;
        return function () {
            if (self.pagePrev) {
                self.transitionScrollUp.executeScrollUp(self.pagePrev!, self, pageManagement);
            }
        }
    }

    getScrollDownCallback(pageManagement?: PageManagement) {
        const self = this;
        return function () {
            if (self.pageNext) {
                self.transitionScrollDown.executeScrollDown(self, self.pageNext!, pageManagement);
            }
        }
    }
}

export default Page;