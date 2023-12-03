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

    public build(): void {
        // Assigns element to target selector div in HTML
        if (this.$constructedElement) {
            $(`#${this.selector}`).append(this.$constructedElement);
        } else {
            throw new Error("Component not constructed.");
        }
    };

    public buildChildren(): void {
        for (const child of this.children) {
            child.build();
        }
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

    public onInitialBuildBeforeScrollIn(): void {};

    public onScrollIn(): void {};

    public onScrollOut(): void {};

    public conditionalOnInitialBuildBeforeScrollIn(): void {
        if (!this.hasInitiallyScrolledIn) {
            this.onInitialBuildBeforeScrollIn();
            this.hasInitiallyScrolledIn = true;
        }
    }
}

export default Component;