import $ from 'jquery';
import MixinComponent from "../engine/mixin-component";
import Veil from './veil';
export class DialogElement extends MixinComponent {
    constructor(selector, title = '') {
        super(selector);
        this.veil = new Veil(`${this.selector}-veil`, this);
        this.ANIMATE_DURATION = 400;
        this.title = title;
        this.veil.build();
        this.$dialogElement = $('<div>').addClass('dialog-element');
    }
    buildTitle() {
        return $('<h1>').text(this.title);
    }
    onShow() {
        this.veil.onShow();
        this.$dialogElement.stop();
        this.$dialogElement.css('visibility', 'visible');
        this.$dialogElement.animate({ 'opacity': 1 }, this.ANIMATE_DURATION);
    }
    ;
    onHide() {
        this.veil.onHide();
        this.$dialogElement.stop();
        this.$dialogElement.css('visibility', 'hidden');
        this.$dialogElement.animate({ 'opacity': 0 }, this.ANIMATE_DURATION);
    }
    ;
}
export default DialogElement;
