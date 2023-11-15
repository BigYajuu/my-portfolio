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
    private initialImageClass: string = "bg0-blank";

    constructor(selector: string, page: Page, pageManagement: PageManagement, imageMode?: ImageMode, initialImageClass?: string) {
        super(selector, page, pageManagement);
        imageMode ? this.imageMode = imageMode : null;
        initialImageClass ? this.initialImageClass = initialImageClass : null;
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
        const lastForegroundClass = this.getImageClassByIndex(this.currentImageIndex - 2);
        const lastBackgroundClass = this.getImageClassByIndex(this.currentImageIndex - 1);
        const newBackgroundClass = this.getImageClassByIndex(this.currentImageIndex);
        $(`#${this.foregroundSelector}`).addClass(lastBackgroundClass).removeClass(lastForegroundClass);
        $(`#${this.backgroundSelector}`).addClass(newBackgroundClass).removeClass(lastBackgroundClass);
        $(`#${this.foregroundSelector}`).css('opacity', 1);
        $(`#${this.foregroundSelector}`).animate({opacity: 0}, 4000, function() {
            console.log(`currentImageIndex: ${self.currentImageIndex}`);
            self.runNextFadeTransition();
        });
    }

    public getImageClassByIndex(index: number): string {
        var rectifiedIndex = ((index % this.currentFilm.length) + this.currentFilm.length) % this.currentFilm.length;
        return this.imageMode == ImageMode.NORMAL ? this.currentFilm[rectifiedIndex].normal : this.currentFilm[rectifiedIndex].saturated;
    }

    public onScrollIn(): void {
        this.clearAllImageClasses();
        this.setForegroundToAppear();
        this.setForegroundAnimationToRunning();
    }

    public onScrollOut(): void {
        this.setForegroundToDisappear();
        this.setForegroundAnimationToPaused();
    }

    public clearAllImageClasses(): void {
        $(`#${this.foregroundSelector}`).removeClass(this.initialImageClass);
        for (let i = 0; i < this.currentFilm.length; i++) {
            $(`#${this.foregroundSelector}`).removeClass(this.getImageClassByIndex(i));
            $(`#${this.backgroundSelector}`).removeClass(this.getImageClassByIndex(i));
        }
    }

    public runNextFadeTransition(): void {
        this.runFadeTransition(this.getImageClassByIndex(this.currentImageIndex));
        this.updateNextImageIndex();
    }

    public updateNextImageIndex(): void {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.currentFilm.length;
    }

    public setForegroundToAppear(): void {
        $(`#${this.foregroundSelector}`).css('visibility', 'visible');
        $(`#${this.foregroundSelector}`).css('opacity', '0');
    }

    public setForegroundToDisappear(): void {
        $(`#${this.foregroundSelector}`).css('visibility', 'hidden');
    }

    public setForegroundAnimationToPaused(): void {
        $(`#${this.foregroundSelector}`).stop();
    }

    public setForegroundAnimationToRunning(): void {
        this.runNextFadeTransition();
    }

}