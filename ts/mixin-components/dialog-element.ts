import $ from 'jquery';
import MixinComponent from "../engine/mixin-component";
import Veil from './veil';

export class DialogElement extends MixinComponent {

    protected title: string;
    protected veil: Veil = new Veil(`${this.selector}-veil`, this);
    protected $dialogElement: JQuery<HTMLElement>;

    private ANIMATE_DURATION = 400;

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
        this.$dialogElement.animate({'opacity': 1}, this.ANIMATE_DURATION);
    };

    public onHide(): void {
        this.veil.onHide();
        this.$dialogElement.stop();
        this.$dialogElement.css('visibility', 'hidden');
        this.$dialogElement.animate({'opacity': 0}, this.ANIMATE_DURATION);
    };
}

export default DialogElement;