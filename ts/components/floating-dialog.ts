import { ProviderKeys } from "../constants";
import MixinComponent from "../engine/mixin-component";
import StateManager from "../engine/state-management.ts/state-manager";
import BackgroundProvider from "../providers/background-provider";

export class FloatingDialog extends MixinComponent {

    private backgroundProvider: BackgroundProvider<any>;

    constructor(selector: string, content: string) {
        super(selector, content);
        this.backgroundProvider = StateManager.getInstance(ProviderKeys.BACKGROUND, { currentBackground : this });
    }

    public build(): void {
        
    }
    
    public getBackgroundFromProvider(): Background {
        return this.backgroundProvider.getState().currentBackground;
    }
}

export default FloatingDialog;