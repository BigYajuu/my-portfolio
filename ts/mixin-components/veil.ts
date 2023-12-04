import $ from "jquery";
import MixinComponent from "../engine/mixin-component";
import BackgroundProvider from "../providers/background-provider";
import StateManager from "../engine/state-management.ts/state-manager";
import { ProviderKeys } from "../static/constants";

export class Veil extends MixinComponent {

    private backgroundProvider: BackgroundProvider<any>;
    private $veil: JQuery<HTMLElement> = $('<div>').addClass('veil');
    private correlatedMixinOnHideCallback?: () => void;

    constructor(selector: string, correlatedMixinOnHideCallback?: () => void) {
        super(selector);
        this.backgroundProvider = StateManager.getInstance(ProviderKeys.BACKGROUND, { currentBackground : this });
        this.correlatedMixinOnHideCallback = correlatedMixinOnHideCallback;
    }

    public build(): void {
        const self = this;
        this.$veil.on('click', () => {
            // Doesn't call veil's onHide. Runs onHide on the correlated mixin side.
            self.correlatedMixinOnHideCallback ? self.correlatedMixinOnHideCallback() : null;
        });
        $('body').append(this.$veil);
    }

    public remove(): void {
        this.$veil.remove();
    }

    public onShow(): void {
        this.getBackgroundFromProvider().setToDefocused();
        this.$veil.stop();
        this.$veil.css('visibility', 'visible');
        this.$veil.css('opacity', 1);
    }

    public onHide(): void {
        this.getBackgroundFromProvider().setToFocused();
        this.$veil.stop();
        this.$veil.css('visibility', 'hidden');
        this.$veil.css('opacity', 0);
    }

    public getBackgroundFromProvider(): Background {
        return this.backgroundProvider.getState().currentBackground;
    }
}

export default Veil;