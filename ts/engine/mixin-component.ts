export abstract class MixinComponent {
    protected selector: string;
    constructor(selector: string) {
        this.selector = selector;
    }

    public build(): void {
        // As the component is built it is usually not active in the beginning.
        // The built component preserves input data, 
        // such as the text in the input field.
        // Like component's build, this function acts 
        // to attach the mixin to the DOM (usually body).
        // And it is usually called in the constructor 
        // or in onShow() of the mixin class itself.
    };

    public remove(): void {
        // Used to remove the element from DOM.
    }

    public onShow(): void {
        // This consequently defocuses the background
        // and the mixin shows.
    };

    public onHide(): void {
        // This consequently re-focuses the background
        // and the mixin hides.
    };

    public onReset(): void {
        // This function should be used to clear input data within the component.
    };
}

export default MixinComponent;