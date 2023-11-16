import $ from "jquery";
import PageManagement from "./page-management";
import Transition from "./transition";
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

    constructor(selector: string, scrollTransition: Transition, components: Component[] = []) {
        this.selector = selector;
        this.transitionScrollUp = scrollTransition;
        this.transitionScrollDown = scrollTransition;
        this.components = components;
    }

    public appendComponent(component: Component) {
        this.components.push(component);
    }

    public initializePage() {
        this.buildComponents();
    }

    public buildComponents() {
        for (var i=0; i<this.components.length; i++) {
            this.components[i].build();
        }
    }

    public getSelector() {
        return this.selector;
    }

    public getNode() {
        const clonedElement = $(`#${this.getSelector()}`).clone(true, true)[0];
        return clonedElement;
    }

    public getScrollUpCallback(pageManagement?: PageManagement) {
        const self = this;
        return function () {
            if (self.pagePrev) {
                self.transitionScrollUp.executeScrollUp(self.pagePrev!, self, pageManagement);
            }
        }
    }

    public getScrollDownCallback(pageManagement?: PageManagement) {
        const self = this;
        return function () {
            if (self.pageNext) {
                self.transitionScrollDown.executeScrollDown(self, self.pageNext!, pageManagement);
            }
        }
    }

    public setNeighbouringPages(pageNext: Page | null, pagePrev: Page | null) {
        this.pageNext = pageNext;
        this.pagePrev = pagePrev;
    }

    public conditionalOnInitialBuildBeforeScrollIn() {
        for (var i=0; i<this.components.length; i++) {
            console.log(`onInitialBuildBeforeScrollIn: ${this.components[i].constructor.name}`);
            this.components[i].conditionalOnInitialBuildBeforeScrollIn();
        }
    }

    public onScrollIn() {
        for (var i=0; i<this.components.length; i++) {
            this.components[i].onScrollIn();
        }
    }

    public onScrollOut() {
        for (var i=0; i<this.components.length; i++) {
            this.components[i].onScrollOut();
        }
    }
}

export default Page;