import $ from "jquery";
import { Page } from "./engine/page.js";
import { PageManagement } from "./engine/page-management.js";
import { CubicXAxisTransition } from "./engine/cubic-x-axis-transition.js";
import { AnimatedXScrollable } from "./components/animated-x-scrollable.js";
import { ProviderKeys, Selectors } from "./constants.js";
import { FluxDynamicBackground } from "./components/flux-dynamic-background.js";
import { Service } from "./engine/service.js";
import { EmailFloatingDialog } from "./mixin-components/email-floating-dialog.js";
import StateManager from "./engine/state-management.ts/state-manager.js";
class App {
    constructor() {
        this.appBuilt = false;
        this.emailMixinProvider = StateManager.getInstance(ProviderKeys.EMAIL_FLOATING_DIALOG, { get: new EmailFloatingDialog() });
    }
    getEmailFloatingDialog() {
        return this.emailMixinProvider.getState().get;
    }
    buildMixins() {
        this.getEmailFloatingDialog().build();
    }
    build() {
        if (this.appBuilt) {
            return;
        }
        const self = this;
        const page1_bg = new FluxDynamicBackground(Selectors.PAGE_1, undefined, "bg0-blank");
        const page2_bg = new FluxDynamicBackground(Selectors.PAGE_2, undefined, "bg1-saturate");
        const sectionWorksScrollable = new AnimatedXScrollable("section-works-scrollable", Selectors.PAGE_2);
        const sectionExperiencesScrollable = new AnimatedXScrollable("section-experiences-scrollable", Selectors.PAGE_2);
        const page1 = new Page(Selectors.PAGE_1, new CubicXAxisTransition(), [page1_bg]);
        const page2 = new Page(Selectors.PAGE_2, new CubicXAxisTransition(), [
            page2_bg,
            sectionWorksScrollable,
            sectionExperiencesScrollable,
        ]);
        const pageManagement = new PageManagement(Selectors.PAGE_MANAGEMENT_CONTAINER, [page1, page2]);
        // Mixins and links
        this.buildMixins();
        $('#header-icon-mail').on('click', function (event) {
            self.getEmailFloatingDialog().onShow();
        });
        $(function () {
            const paramEnquire = Service.getParameterByName('enquire', window.location.href);
            if (paramEnquire === '1') {
                // TODO: Add call for enquire
                self.getEmailFloatingDialog().onShow();
            }
        });
        this.appBuilt = true;
    }
}
export const app = new App().build();
