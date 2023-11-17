export abstract class Component {

    protected selector: string;
    protected hasInitiallyScrolledIn: boolean = false;

    constructor(selector: string) {
        this.selector = selector;
    }

    public abstract build(): void;

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