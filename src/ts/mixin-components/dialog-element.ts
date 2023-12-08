import $ from 'jquery';
import MixinComponent from "../engine/mixin-component";
import Veil from './veil';
import { Constants } from '../static/constants';

export class DialogElement extends MixinComponent {

    protected title: string;
    protected veil: Veil = new Veil(`${this.selector}-veil`, () => {
        this.onHide();
    });
    protected $dialogElement: JQuery<HTMLElement>;

    constructor(selector: string, title: string = '') {
        super(selector);
        this.title = title;
        this.$dialogElement = $('<div>').addClass('dialog-element');
        this.$dialogElement.append(this.buildTitleBar());
    }

    public attach() {
        this.veil.attach();
        $('body').append(this.$dialogElement);
    }

    public remove() {
        this.veil.remove();
        this.$dialogElement.remove();
    }
    
    public buildTitleBar() {
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