import $ from "jquery";

export abstract class Component {

    protected selector: string;
    protected $constructedElement?: JQuery<HTMLElement>;
    protected hasInitiallyScrolledIn: boolean = false;
    protected children: Component[] = [];

    constructor(selector: string) {
        // Completes element construction
        this.selector = selector;
    }

    public attach(): void {
        // Assigns element to target selector div in HTML
        if (this.$constructedElement) {
            $(`#${this.selector}`).replaceWith(this.$constructedElement);
        } else {
            throw new Error("Component not constructed.");
        }
    };

    public attachChildren(): void {
        for (const child of this.children) {
            child.attach();
        }
    };

    public build(): JQuery<HTMLElement> | undefined {
        // Returns the constructed element that is stored as the component's state
        return this.$constructedElement ? this.$constructedElement : undefined;
    }

    public getConstructedElement(): JQuery<HTMLElement> | undefined {
        return this.$constructedElement;
    };

    public getChildrenConstructedElements(): JQuery<HTMLElement>[] {
        const childrenConstructedElements: JQuery<HTMLElement>[] = [];
        for (const child of this.children) {
            const childConstructedElement = child.getConstructedElement();
            if (childConstructedElement) {
                childrenConstructedElements.push(childConstructedElement);
            }
        }
        return childrenConstructedElements;
    }

    public onAttachBeforeScrollIn(): void {};

    public onScrollIn(): void {};

    public onScrollOut(): void {};

    public conditionalOnInitialBuildBeforeScrollIn(): void {
        if (!this.hasInitiallyScrolledIn) {
            this.onAttachBeforeScrollIn();
            this.hasInitiallyScrolledIn = true;
        }
    }
}

export default Component;