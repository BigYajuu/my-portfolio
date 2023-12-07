import $ from "jquery";
import MixinComponent from "../engine/mixin-component";
import StateManager from "../engine/state-management.ts/state-manager";
import { ProviderKeys } from "../static/constants";
export class Veil extends MixinComponent {
    constructor(selector, correlatedMixinOnHideCallback) {
        super(selector);
        this.$veil = $('<div>').addClass('veil');
        this.backgroundProvider = StateManager.getInstance(ProviderKeys.BACKGROUND, { currentBackground: this });
        this.correlatedMixinOnHideCallback = correlatedMixinOnHideCallback;
    }
    attach() {
        const self = this;
        this.$veil.on('click', () => {
            // Doesn't call veil's onHide. Runs onHide on the correlated mixin side.
            self.correlatedMixinOnHideCallback ? self.correlatedMixinOnHideCallback() : null;
        });
        $('body').append(this.$veil);
    }
    remove() {
        this.$veil.remove();
    }
    onShow() {
        this.getBackgroundFromProvider().setToDefocused();
        this.$veil.stop();
        this.$veil.css('visibility', 'visible');
        this.$veil.css('opacity', 1);
    }
    onHide() {
        this.getBackgroundFromProvider().setToFocused();
        this.$veil.stop();
        this.$veil.css('visibility', 'hidden');
        this.$veil.css('opacity', 0);
    }
    getBackgroundFromProvider() {
        return this.backgroundProvider.getState().currentBackground;
    }
}
export default Veil;
