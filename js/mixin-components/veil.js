import $ from "jquery";
import MixinComponent from "../engine/mixin-component";
import StateManager from "../engine/state-management.ts/state-manager";
import { ProviderKeys } from "../constants";
export class Veil extends MixinComponent {
    constructor(selector, correlatedMixinComponents) {
        super(selector);
        this.$veil = $('<div>').addClass('veil');
        this.backgroundProvider = StateManager.getInstance(ProviderKeys.BACKGROUND, { currentBackground: this });
        this.correlatedMixinComponent = correlatedMixinComponents;
    }
    build() {
        const self = this;
        this.$veil.on('click', () => {
            // Doesn't call veil's onHide. Runs onHide on the correlated mixin side.
            self.correlatedMixinComponent ? self.correlatedMixinComponent.onHide() : null;
        });
        $('body').append(this.$veil);
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
