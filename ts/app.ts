import $ from "jquery";
import {Page} from "./engine/page.js";
import {PageManagement} from "./engine/page-management.js";
import {CubicXAxisTransition} from "./engine/cubic-x-axis-transition.js";
import {AnimatedXScrollable} from "./components/animated-x-scrollable.js";
import {Constants, ProviderKeys, Selectors} from "./constants.js";
import { FluxDynamicBackground } from "./components/flux-dynamic-background.js";
import { Service } from "./engine/service.js";
import { EmailFloatingDialog } from "./mixin-components/email-floating-dialog.js";
import EmailDialogProvider from "./providers/email-dialog-provider.js";
import StateManager from "./engine/state-management.ts/state-manager.js";

class App {

    private appBuilt: boolean = false;
    private emailMixinProvider: EmailDialogProvider<any>;

    constructor() {
        this.emailMixinProvider = StateManager.getInstance(ProviderKeys.EMAIL_FLOATING_DIALOG, { get: new EmailFloatingDialog() });
    }

    public getEmailFloatingDialog() {
        return this.emailMixinProvider.getState().get;
    }

    private buildMixins() {
        this.getEmailFloatingDialog().build();
    }

    public build() {
        if (this.appBuilt) {
            return;
        }
        const self = this;

        const page1_bg = new FluxDynamicBackground(Selectors.PAGE_1, undefined, "bg0-blank");
        const page2_bg = new FluxDynamicBackground(Selectors.PAGE_2, undefined, "bg1-saturate");

        const sectionProjectItems2 = new AnimatedXScrollable(
            `
            <div class="x-scrollable-item col-abs-width col-default-padding">
                <div class="container">
                    <h1>Item 1</h1>
                    <p>Item 1</p>
                    <p>Item 1</p>
                </div>
            </div>
            
            <div class="x-scrollable-item col-abs-width col-default-padding">
                <div class="container">
                    <h1>Item 2</h1>
                    <p>Item 2</p>
                </div>
            </div>
            
            <div class="x-scrollable-item col-abs-width col-default-padding">
                <div class="container">
                    <h1>Item 3</h1>
                    <p>Item 3</p>
                </div>
            </div>
            `,
            "section-projects-items-2",
            Selectors.PAGE_2
        );

        const sectionProjectItems3 = new AnimatedXScrollable(
            `
            <div class="x-scrollable-item col-abs-width col-default-padding">
                <div class="container">
                    <h1>Item 1</h1>
                    <p>Item 1</p>
                    <p>Item 1</p>
                </div>
            </div>
            
            <div class="x-scrollable-item col-abs-width col-default-padding">
                <div class="container">
                    <h1>Item 2</h1>
                    <p>Item 2</p>
                </div>
            </div>

            <div class="x-scrollable-item col-abs-width col-default-padding">
                <div class="container">
                    <h1>Item 2</h1>
                    <p>Item 2</p>
                </div>
            </div>

            <div class="x-scrollable-item col-abs-width col-default-padding">
                <div class="container">
                    <h1>Item 2</h1>
                    <p>Item 2</p>
                </div>
            </div>

            <div class="x-scrollable-item col-abs-width col-default-padding">
                <div class="container">
                    <h1>Item 2</h1>
                    <p>Item 2</p>
                </div>
            </div>

            <div class="x-scrollable-item col-abs-width col-default-padding">
                <div class="container">
                    <h1>Item 2</h1>
                    <p>Item 2</p>
                </div>
            </div>

            <div class="x-scrollable-item col-abs-width col-default-padding">
                <div class="container">
                    <h1>Item 2</h1>
                    <p>Item 2</p>
                </div>
            </div>
            
            <div class="x-scrollable-item col-abs-width col-default-padding">
                <div class="container">
                    <h1>Item 3</h1>
                    <p>Item 3</p>
                </div>
            </div>
            `,
            "section-projects-items-3",
            Selectors.PAGE_2
        );

        const page1 = new Page(Selectors.PAGE_1, new CubicXAxisTransition(), [page1_bg]);
        const page2 = new Page(Selectors.PAGE_2, new CubicXAxisTransition(), [page2_bg, sectionProjectItems2, sectionProjectItems3]);

        const pageManagement = new PageManagement(Selectors.PAGE_MANAGEMENT_CONTAINER, [page1, page2]);

        // Mixins and links
        this.buildMixins();

        $('#header-icon-mail').on('click', function(event) {
            self.getEmailFloatingDialog().onShow();
        });

        $(function() {
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




