export abstract class MixinComponent {
    protected selector: string;
    constructor(selector: string, content: string) {
        this.selector = selector;
    }

    public abstract build(): void;

    public onShow(): void {};

    public onDismiss(): void {};

    public onReset(): void {};
}

export default MixinComponent;