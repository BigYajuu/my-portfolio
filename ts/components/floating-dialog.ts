import $ from 'jquery';
import { ProviderKeys } from "../constants";
import MixinComponent from "../engine/mixin-component";
import StateManager from "../engine/state-management.ts/state-manager";
import BackgroundProvider from "../providers/background-provider";

export class FloatingDialog extends MixinComponent {

    protected backgroundProvider: BackgroundProvider<any>;
    protected $dialogElement: JQuery<HTMLElement>;

    constructor(selector: string) {
        super(selector);
        this.backgroundProvider = StateManager.getInstance(ProviderKeys.BACKGROUND, { currentBackground : this });
        this.$dialogElement = $('<div>').addClass('dialog-element');
    }
    
    public getBackgroundFromProvider(): Background {
        return this.backgroundProvider.getState().currentBackground;
    }
}

export default FloatingDialog;