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

    private imageMode: ImageMode = ImageMode.NORMAL;
    private currentImageIndex: number = 0;

    constructor(selector: string, page: Page, pageManagement: PageManagement, imageMode?: ImageMode) {
        super(selector, page, pageManagement);
        imageMode ? this.imageMode = imageMode : null;
    }

    public build(): void {
        const self = this;
        // 1) Clone all children of page div
        const $childrenClones = $(`#${this.selector}`).children().clone(true, true);
        // 2) Create new foreground canvas
        const foregroundSelector = `${this.selector}-foreground`;
        const contentSelector = `${this.selector}-content`;
        $(`#${this.selector}`).html(
            `
            <div id=${foregroundSelector} class="flux-foreground flux-canvas">
                <div id=${foregroundSelector} class="flux-foreground bg2-saturate"></div>
            </div>
            <div id=${contentSelector} class="flux-content"></div>
            `
        )
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
        $(`#${this.selector}`).addClass(toClass);
        // $(`#${this.selector}`).css('background-color', 'red');
        console.log("runTransition");
    }

    public getImageClassByIndex(film: Array<SVGSetClasses>, index: number): string {
        return this.imageMode == ImageMode.NORMAL ? film[index].normal : film[index].saturated;
    }

    public setFixedItemsToDissapear(): void {}
    public setFixedItemsToAppear(): void {}
}