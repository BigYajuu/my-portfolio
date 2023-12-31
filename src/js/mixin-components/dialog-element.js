import $ from 'jquery';
import MixinComponent from "../engine/mixin-component";
import Veil from './veil';
import { Constants } from '../static/constants';
export class DialogElement extends MixinComponent {
    constructor(selector, title = '') {
        super(selector);
        this.veil = new Veil(`${this.selector}-veil`, () => {
            this.onHide();
        });
        this.title = title;
        this.$dialogElement = $('<div>').addClass('dialog-element');
        this.$dialogElement.append(this.buildTitleBar());
    }
    attach() {
        this.veil.attach();
        $('body').append(this.$dialogElement);
    }
    remove() {
        this.veil.remove();
        this.$dialogElement.remove();
    }
    buildTitleBar() {
        const $titleBar = $('<div>').addClass('title-bar');
        const $title = $('<h1>').text(this.title);
        const $closeIcon = $('<div>').addClass(['close-button', 'icon-x']);
        // $closeIcon.attr('height', '1.2rem');
        $closeIcon.on('click', () => {
            this.onHide();
        });
        $titleBar.append([$title, $closeIcon]);
        return $titleBar;
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
