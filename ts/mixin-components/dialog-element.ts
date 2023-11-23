import $ from 'jquery';
import MixinComponent from "../engine/mixin-component";
import Veil from './veil';
import { Constants } from '../constants';

export class DialogElement extends MixinComponent {

    protected title: string;
    protected veil: Veil = new Veil(`${this.selector}-veil`, this);
    protected $dialogElement: JQuery<HTMLElement>;

    constructor(selector: string, title: string = '') {
        super(selector);
        this.title = title;
        this.veil.build();
        this.$dialogElement = $('<div>').addClass('dialog-element');
    }
    
    public buildTitle() {
        return $('<h1>').text(this.title);
    }

    public onShow(): void {
        this.veil.onShow();
        this.$dialogElement.stop();
        this.$dialogElement.css('visibility', 'visible');
        this.$dialogElement.animate({'opacity': 1}, Constants.ANIMATION_DURATION_SLOW);
    };

    public onHide(): void {
        this.veil.onHide();
        this.$dialogElement.stop();
        this.$dialogElement.animate({'opacity': 0}, Constants.ANIMATION_DURATION_DEFAULT, () => {
            this.$dialogElement.css('visibility', 'hidden');
        
        });
    };
}

export default DialogElement;