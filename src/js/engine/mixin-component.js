export class MixinComponent {
    constructor(selector) {
        this.selector = selector;
    }
    attach() {
        // As the component is built it is usually not active in the beginning.
        // The built component preserves input data, 
        // such as the text in the input field.
        // Like component's build, this function acts 
        // to attach the mixin to the DOM (usually body).
        // And it is usually called in the constructor 
        // or in onShow() of the mixin class itself.
    }
    ;
    remove() {
        // Used to remove the element from DOM.
    }
    onShow() {
        // This consequently defocuses the background
        // and the mixin shows.
    }
    ;
    onHide() {
        // This consequently re-focuses the background
        // and the mixin hides.
    }
    ;
    onReset() {
        // This function should be used to clear input data within the component.
    }
    ;
}
export default MixinComponent;
