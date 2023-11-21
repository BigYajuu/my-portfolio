import $ from 'jquery';
import { ProviderKeys } from "../constants";
import MixinComponent from "../engine/mixin-component";
import StateManager from "../engine/state-management.ts/state-manager";
export class FloatingDialog extends MixinComponent {
    constructor(selector) {
        super(selector);
        this.backgroundProvider = StateManager.getInstance(ProviderKeys.BACKGROUND, { currentBackground: this });
        this.$dialogElement = $('<div>').addClass('dialog-element');
    }
    getBackgroundFromProvider() {
        return this.backgroundProvider.getState().currentBackground;
    }
}
export default FloatingDialog;
