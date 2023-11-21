export class MixinComponent {
    constructor(selector) {
        this.selector = selector;
    }
    build() {
        // As the component is built it is usually not active in the beginning.
        // The built component preserves input data, 
        // such as the text in the input field.
    }
    ;
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
