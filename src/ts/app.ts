import $ from "jquery";
import {Page} from "./engine/page";
import {PageManagement} from "./engine/page-management";
import {CubicXAxisTransition} from "./engine/cubic-x-axis-transition.js";
import {AnimatedXScrollable} from "./components/animated-x-scrollable.js";
import {Paths, ProviderKeys, Selectors} from "./static/constants.js";
import { FluxDynamicBackground } from "./components/flux-dynamic-background.js";
import { Service } from "./engine/service.js";
import { EmailFloatingDialog } from "./mixin-components/email-floating-dialog.js";
import EmailDialogProvider from "./providers/email-dialog-provider.js";
import StateManager from "./engine/state-management.ts/state-manager.js";
import ScrollableOverviewContainer from "./components/scrollable-overview-container.js";
import LandingContent from "./components/landing-content";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleDown, faCircleLeft, faCircleRight, faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { OverviewDialog } from "./mixin-components/overview-dialog";
import { WorksProjectInterveneOverviewDialog } from "./mixin-components/overview-dialog/works-project-intervene-overview-dialogs";
import { WorksEMCB32OverviewDialog } from "./mixin-components/overview-dialog/works-emcb32-overview-dialog";
import { WorksEMCBHDOverviewDialog } from "./mixin-components/overview-dialog/works-emcb-hd-overview-dialog";
import { WorksETextureOverviewDialog } from "./mixin-components/overview-dialog/works-e-texture-overview-dialog";
import { WorksAngularCityOverviewDialog } from "./mixin-components/overview-dialog/works-angular-city-overview-dialog";

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
        this.getEmailFloatingDialog();
    }

    private fontIconSetup() {
        library.add({faCircleDown, faCircleLeft, faCircleRight, faCircleUp})
    }

    public build() {
        if (this.appBuilt) {
            return;
        }
        const self = this;

        this.fontIconSetup();

        const page1_bg = new FluxDynamicBackground(Selectors.PAGE_1, undefined, "bg0-blank");
        const page2_bg = new FluxDynamicBackground(Selectors.PAGE_2, undefined, "bg1-saturate");

        const landingContent = new LandingContent("landing-content");

        const sectionWorksScrollable = new AnimatedXScrollable(
            "section-works-scrollable",
            "page-2-content",
            {
                children: [
                    new ScrollableOverviewContainer(
                        Selectors.DIALOG_WORKS_PROJECT_INTERVENE,
                        {
                            title: "Project Intervene (Provisional)",
                            dateBegun: "Jun 2022",
                            imagePath: `${Paths.IMG_WORKS_PROJECT_INTERVENE}/01.png`,
                            imageTitle: "Placeholder Logo for Project Intervene",
                            overview:
                                `Work in progress. This simple app 
                                aims to keep users from using other apps, 
                                like social medias,
                                and puts them back on track during work.`
                        },
                        new WorksProjectInterveneOverviewDialog(),
                    ),
                    new ScrollableOverviewContainer(
                        Selectors.DIALOG_WORKS_ANGULAR_CITY,
                        {
                            title: "Angular City",
                            dateBegun: "May 2020",
                            dateEnded: "(On Hiatus)",
                            imagePath: `${Paths.IMG_WORKS_ANGULAR_CITY}/01.png`,
                            overview:
                                `A railroad world 
                                built with Minecraft and mods.
                                While the city undergoes its development,
                                other projects were underway to
                                completely change the looks of the textures
                                and aesthetics.`
                        },
                        new WorksAngularCityOverviewDialog(),
                    ),
                    new ScrollableOverviewContainer(
                        Selectors.DIALOG_WORKS_EMCB32,
                        {
                            title: "EMCB32",
                            dateBegun: "Sep 2020",
                            dateEnded: "Sep 2021",
                            imagePath: `${Paths.IMG_WORKS_EMCB32}/01.png`,
                            imageTitle: "Logo of EMCB32",
                            overview:
                                `The release of the HD mod
                                inspired me to make another version
                                with the same textures but in 32x32 resolution
                                that blends in more with the organic,
                                pixelated feel of the Minecraft world.`
                        },
                        new WorksEMCB32OverviewDialog(),
                    ),
                    new ScrollableOverviewContainer(
                        Selectors.DIALOG_WORKS_EMCB_HD,
                        {
                            title: "EMCB HD",
                            dateBegun: "Jun 2020",
                            dateEnded: "Sep 2021",
                            imagePath: `${Paths.IMG_WORKS_EMCB_HD}/01.png`,
                            imageTitle: "Logo of EMCB HD",
                            overview:
                                `My growing desire to build a 
                                city based on reality in Minecraft 
                                puts me on a journey
                                to create a mod that introduces
                                a huge collection of HD building blocks 
                                with immersive textures.`
                        },
                        new WorksEMCBHDOverviewDialog(),
                    ),
                    new ScrollableOverviewContainer(
                        Selectors.DIALOG_WORKS_E_TEXTURE,
                        {
                            title: "E-Texture",
                            dateBegun: "Jul 2019",
                            dateEnded: "Nov 2019",
                            imagePath: `${Paths.IMG_WORKS_E_TEXTURE}/01.png`,
                            imageTitle: "Showcase of E-Texture Signboard Designs",
                            overview:
                                `As I began working on a new city project in Minecraft, 
                                I built this signboard extension for 
                                a popular mod.
                                These signs can be placed
                                within the station perimeters 
                                to simulate real pedistrian experiences.`
                        },
                        new WorksETextureOverviewDialog(),
                    ),
                ]
            }
        );

        const sectionExperienceScrollable = new AnimatedXScrollable(
            "section-experience-scrollable",
            "page-2-content",
            {
                children: [
                    new ScrollableOverviewContainer(
                        Selectors.SOC_EXPERIENCE_AGMO_STUDIO,
                        {
                            title: "Agmo Studio",
                            subtitle: "Mobile Dev Intern (iOS/Flutter Team)",
                            dateBegun: "Nov 2022",
                            dateEnded: "Jan 2023",
                            imagePath: `${Paths.IMG_EXPERIENCE_AGMO_STUDIO}/01.jpeg`,
                            imageTitle: "Agmo Studio",
                            overview:
                                `For 3-months of my university's industrial training,
                                I have the opportunity to work on mobile
                                app dev projects using Flutter 
                                and experiment with many proof-of-concept features.
                                `
                        }
                    ),
                ]
            }
        );


        // Pages and Manager
        const page1 = new Page(Selectors.PAGE_1, new CubicXAxisTransition(), 
            [
                page1_bg,
                landingContent,
            ]
        );
        const page2 = new Page(Selectors.PAGE_2, new CubicXAxisTransition(), 
            [
                page2_bg, 
                sectionWorksScrollable, 
                sectionExperienceScrollable,
            ]
        );

        const pageManagement = new PageManagement(Selectors.PAGE_MANAGEMENT_CONTAINER, [page1, page2]);

        // Mixins and links
        this.buildMixins();

        $('#header-icon-mail, #footnote-mail').on('click', function() {
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




