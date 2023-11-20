import { ProviderKeys } from "../constants";
import MixinComponent from "../engine/mixin-component";
import StateManager from "../engine/state-management.ts/state-manager";
export class FloatingDialog extends MixinComponent {
    constructor(selector, content) {
        super(selector, content);
        this.backgroundProvider = StateManager.getInstance(ProviderKeys.BACKGROUND, { currentBackground: this });
    }
    build() {
    }
    getBackgroundFromProvider() {
        return this.backgroundProvider.getState().currentBackground;
    }
}
export default FloatingDialog;
