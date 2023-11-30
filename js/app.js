import $ from "jquery";
import { Page } from "./engine/page";
import { PageManagement } from "./engine/page-management";
import { CubicXAxisTransition } from "./engine/cubic-x-axis-transition.js";
import { AnimatedXScrollable } from "./components/animated-x-scrollable.js";
import { ProviderKeys, Selectors } from "./static/constants.js";
import { FluxDynamicBackground } from "./components/flux-dynamic-background.js";
import { Service } from "./engine/service.js";
import { EmailFloatingDialog } from "./mixin-components/email-floating-dialog.js";
import StateManager from "./engine/state-management.ts/state-manager.js";
import ScrollableOverviewContainer from "./components/scrollable-overview-container.js";
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
        const sectionWorksScrollable = new AnimatedXScrollable("section-works-scrollable", Selectors.PAGE_2, {
            children: [
                new ScrollableOverviewContainer("soc-project-intervene", {
                    title: "Project Intervene (Provisional)",
                    dateBegun: "Jun 2022",
                    imageClass: "image-project-intervene",
                    imageTitle: "Logo of EMCB HD",
                    imageHeight: "7.2em",
                    overview: `Work in progress. This simple app 
                                aims to keep users from using other apps, 
                                like social medias,
                                and puts them back on track during work.`
                }),
                new ScrollableOverviewContainer("soc-emcb32", {
                    title: "EMCB32",
                    dateBegun: "Sep 2020",
                    dateEnded: "Sep 2021",
                    imageClass: "image-emcb32",
                    imageTitle: "Logo of EMCB32",
                    overview: `The release of the HD mod
                                inspired me to make another version
                                with the same textures but in 32x32 resolution
                                that blends in more with the organic,
                                pixelated feel of the Minecraft world.`
                }),
                new ScrollableOverviewContainer("soc-emcb-hd", {
                    title: "EMCB HD",
                    dateBegun: "Jun 2020",
                    dateEnded: "Sep 2021",
                    imageClass: "image-emcb-hd",
                    imageTitle: "Logo of EMCB HD",
                    overview: `My growing desire to build a realistic, 
                                rail-transport city in Minecraft 
                                at the time puts me on a journey
                                to create a mod that introduces
                                a collection of HD building blocks 
                                with real-world textures.`
                }),
            ]
        });
        const sectionExperiencesScrollable = new AnimatedXScrollable("section-experiences-scrollable", Selectors.PAGE_2, {});
        // Pages and Manager
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
