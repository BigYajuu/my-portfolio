export class Paths {
    static ROOT = "./";
    static IMG = `${Paths.ROOT}img/`;
    
    static IMG_WORKS = `${Paths.IMG}works/`;
    static IMG_WORKS_PROJECT_INTERVENE = `${Paths.IMG_WORKS}project-intervene/`;
    static IMG_WORKS_ANGULAR_CITY = `${Paths.IMG_WORKS}angular-city/`;
    static IMG_WORKS_EMCB32 = `${Paths.IMG_WORKS}emcb32/`;
    static IMG_WORKS_EMCB_HD = `${Paths.IMG_WORKS}emcb-hd/`;
    static IMG_WORKS_E_TEXTURE = `${Paths.IMG_WORKS}e-texture/`;

    static IMG_EXPERIENCE = `${Paths.IMG}experience/`;
    static IMG_EXPERIENCE_AGMO_STUDIO = `${Paths.IMG_EXPERIENCE}agmo-studio/`;
}

export class Constants {
    static ANIMATION_DURATION_SLOWER = 1200;
    static ANIMATION_DURATION_SLOW = 400;
    static ANIMATION_DURATION_DEFAULT = 140;   
}

export class ProviderKeys {
    static BACKGROUND = "background";
    static EMAIL_FLOATING_DIALOG = "email-floating-dialog";
}

export class Selectors {
    static PAGE_1 = "page-1";
    static PAGE_2 = "page-2";
    static PAGE_MANAGEMENT_CONTAINER = "page-management-container";

    static EMAIL_FLOATING_DIALOG = "email-floating-dialog";
    
    static SOC_WORKS_PROJECT_INTERVENE = "soc-works-project-intervene";
    static SOC_WORKS_ANGULAR_CITY = "soc-works-angular-city";
    static SOC_WORKS_EMCB32 = "soc-works-emcb32";
    static SOC_WORKS_EMCB_HD = "soc-works-emcb-hd";
    static SOC_WORKS_E_TEXTURE = "soc-works-e-texture";
    static SOC_EXPERIENCE_AGMO_STUDIO = "soc-works-agmo-studio";

    static DIALOG_WORKS_PROJECT_INTERVENE = this.SOC_WORKS_PROJECT_INTERVENE + "-dialog";
    static DIALOG_WORKS_ANGULAR_CITY = this.SOC_WORKS_ANGULAR_CITY + "-dialog";
    static DIALOG_WORKS_EMCB32 = this.SOC_WORKS_EMCB32 + "-dialog";
    static DIALOG_WORKS_EMCB_HD = this.SOC_WORKS_EMCB_HD + "-dialog";
    static DIALOG_WORKS_E_TEXTURE = this.SOC_WORKS_E_TEXTURE + "-dialog";
    static DIALOG_EXPERIENCE_AGMO_STUDIO = this.SOC_EXPERIENCE_AGMO_STUDIO + "-dialog";
}