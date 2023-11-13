import $ from "jquery";
import Component from "../engine/component";
import Page from "../engine/page";
import PageManagement from "../engine/page-management";

interface SVGSetClasses {
    normal: string;
    saturated: string;
}

enum ImageMode {
    NORMAL,
    SATURATED
}

const SVGFilm1: Array<SVGSetClasses> = [
    // A collection of CSS classes configurable in flux.scss.
    {normal: "bg1-normal", saturated: "bg1-saturate"},
    {normal: "bg2-normal", saturated: "bg2-saturate"},
    {normal: "bg3-normal", saturated: "bg3-saturate"},
    {normal: "bg4-normal", saturated: "bg4-saturate"}
]

export class FluxDynamicBackgrounds extends Component {

    private imageMode: ImageMode = ImageMode.SATURATED;
    private currentImageIndex: number = 0;
    private foregroundSelector: string;
    private backgroundSelector: string;
    private contentSelector: string;
    private lastBackgroundClass: string = "bg0-blank";

    constructor(selector: string, page: Page, pageManagement: PageManagement, imageMode?: ImageMode, initialBackgroundClass?: string) {
        super(selector, page, pageManagement);
        imageMode ? this.imageMode = imageMode : null;
        initialBackgroundClass ? this.lastBackgroundClass = initialBackgroundClass : null;
        this.foregroundSelector = `${this.selector}-foreground`;
        this.backgroundSelector = `${this.selector}`;
        this.contentSelector = `${this.selector}-content`;
    }

    public build(): void {
        const self = this;
        // 1) Clone all children of page div
        const $childrenClones = $(`#${self.selector}`).children().clone(true, true);
        // 2) Set-up back/foregrounds
        const foregroundSelector = self.foregroundSelector;
        const contentSelector = self.contentSelector;
        $(`#${self.selector}`).html(
            `
            <div id=${foregroundSelector} class="flux-foreground"></div>
            <div id=${contentSelector} class="flux-content"></div>
            `
        );
        $(`#${contentSelector}`).append($childrenClones);
        this.runFadeTransition(this.getImageClassByIndex(SVGFilm1, 1));
    }

    public appendCanvases(): void {
        $(`#${this.selector}`).append(`
            <div class="canvas-container">
                <div id="chicken">Chicken</div>
            </div>
        `);
    }

    public runFadeTransition(toClass: string): void {
        $(`#${this.foregroundSelector}`).addClass(this.lastBackgroundClass);
        $(`#${this.backgroundSelector}`).addClass(toClass);
        $(`#${this.foregroundSelector}`).animate({opacity: 0}, 4000, function() {
            // Animation ending sequence
        });
    }

    public getImageClassByIndex(film: Array<SVGSetClasses>, index: number): string {
        return this.imageMode == ImageMode.NORMAL ? film[index].normal : film[index].saturated;
    }

    public onLoad(): void {
        console.log('onLoad');
    }

    public onRetire(): void {
        console.log('onRetire');
    }

}