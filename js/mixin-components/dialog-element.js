import $ from 'jquery';
import MixinComponent from "../engine/mixin-component";
import Veil from './veil';
import { Constants } from '../constants';
export class DialogElement extends MixinComponent {
    constructor(selector, title = '') {
        super(selector);
        this.veil = new Veil(`${this.selector}-veil`, this);
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
        this.$dialogElement.animate({ 'opacity': 1 }, Constants.ANIMATION_DURATION_SLOW);
    }
    ;
    onHide() {
        this.veil.onHide();
        this.$dialogElement.stop();
        this.$dialogElement.animate({ 'opacity': 0 }, Constants.ANIMATION_DURATION_DEFAULT, () => {
            this.$dialogElement.css('visibility', 'hidden');
        });
    }
    ;
}
export default DialogElement;
