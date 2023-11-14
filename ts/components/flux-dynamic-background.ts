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
    private currentFilm: Array<SVGSetClasses> = SVGFilm1;
    private foregroundSelector: string;
    private backgroundSelector: string;
    private contentSelector: string;
    private lastBackgroundClass: string = "bg0-blank";
    private lastForegroundClass: string = "";

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
        this.runNextFadeTransition();
    }

    public appendCanvases(): void {
        $(`#${this.selector}`).append(`
            <div class="canvas-container">
                <div id="chicken">Chicken</div>
            </div>
        `);
    }

    public runFadeTransition(toClass: string): void {
        const self = this;
        const lastForegroundClass = this.lastForegroundClass;
        const lastBackgroundClass = this.lastBackgroundClass;
        const newBackgroundClass = toClass;
        $(`#${this.foregroundSelector}`).addClass(lastBackgroundClass).removeClass(lastForegroundClass);
        $(`#${this.backgroundSelector}`).addClass(newBackgroundClass).removeClass(lastBackgroundClass);
        $(`#${this.foregroundSelector}`).css('opacity', 1);
        $(`#${this.foregroundSelector}`).animate({opacity: 0}, 2000, function() {
            self.lastForegroundClass = lastBackgroundClass;
            self.lastBackgroundClass = newBackgroundClass;
            console.log(`lastForegroundClass: ${self.lastForegroundClass}\nlastBackgroundClass: ${self.lastBackgroundClass}`);
            console.log(`currentImageIndex: ${self.currentImageIndex}`);
            self.runNextFadeTransition();
        });
        
    }

    public getImageClassByIndex(index: number): string {
        return this.imageMode == ImageMode.NORMAL ? this.currentFilm[index].normal : this.currentFilm[index].saturated;
    }

    public onLoad(): void {
        this.setForegroundToAppear();
        // this.runNextFadeTransition();
    }

    public onRetire(): void {
        this.setForegroundToDisappear();
    }

    public runNextFadeTransition(): void {
        this.runFadeTransition(this.getImageClassByIndex(this.currentImageIndex));
        this.updateNextImageIndex();
    }

    public updateNextImageIndex(): void {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.currentFilm.length;
    }

    public setForegroundToAppear(): void {
        $(`#${this.foregroundSelector}`).css('opacity', 1);
    }

    public setForegroundToDisappear(): void {
        $(`#${this.foregroundSelector}`).css('opacity', 0);
    }

}