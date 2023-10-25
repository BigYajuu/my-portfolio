import PageManagement from "engine/page-management";
import Transition from "engine/transition";
import Component from "./component";

enum ScrollEdgeDetection {
    AT_TOP,
    AT_BOTTOM,
    NONE
}

export class Page {
    private selector: string;
    private pageNext?: Page | null;
    private pagePrev?: Page | null;
    private transitionScrollUp: Transition;
    private transitionScrollDown: Transition;
    private pageScrollEdgeDetection: ScrollEdgeDetection = ScrollEdgeDetection.NONE;
    private components: Component[] = [];

    constructor(selector: string, scrollTransition: Transition) {
        this.selector = selector;
        this.transitionScrollUp = scrollTransition;
        this.transitionScrollDown = scrollTransition;
    }

    appendComponent(component: Component) {
        this.components.push(component);
    }

    getSelector() {
        return this.selector;
    }

    getNode() {
        const clonedElement = $(`#${this.getSelector()}`).clone(true, true)[0];
        return clonedElement;
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

    setNeighbouringPages(pageNext: Page | null, pagePrev: Page | null) {
        this.pageNext = pageNext;
        this.pagePrev = pagePrev;
    }

    setAllFixedItemsToAppear() {
        for (var i=0; i<this.components.length; i++) {
            this.components[i].setFixedItemsToAppear();
        }
    }

    setAllFixedItemsToDissapear() {
        for (var i=0; i<this.components.length; i++) {
            this.components[i].setFixedItemsToDissapear();
        }
    }
}

export default Page;