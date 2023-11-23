import $ from "jquery";
import Component from "../engine/component";
import BackgroundProvider from "../providers/background-provider";
import { ProviderKeys } from "../constants";
import StateManager from "../engine/state-management.ts/state-manager";

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
    {normal: "bg4-normal", saturated: "bg4-saturate"},
    {normal: "bg5-normal", saturated: "bg5-saturate"},
    {normal: "bg6-normal", saturated: "bg6-saturate"}
]

export class FluxDynamicBackground extends Component implements Background {

    private backgroundProvider: BackgroundProvider<any>;

    private FADE_DURATION: number = 3300;
    private FADE_DURATION_FAST: number = 800;

    private imageMode: ImageMode = ImageMode.SATURATED;
    private currentImageIndex: number = 0;
    private currentFilm: Array<SVGSetClasses> = SVGFilm1;
    private foregroundSelector: string;
    private backgroundSelector: string;
    private contentSelector: string;
    private initialImageClass: string = "";
    private hasInitialImageClassAnimated: boolean = false;

    constructor(selector: string, imageMode?: ImageMode, initialImageClass?: string) {
        super(selector);
        this.backgroundProvider = StateManager.getInstance(ProviderKeys.BACKGROUND, { currentBackground : this });
        imageMode ? this.imageMode = imageMode : null;
        if (initialImageClass) {
            this.initialImageClass = initialImageClass;
        }
        this.foregroundSelector = `${this.selector}-foreground`;
        this.backgroundSelector = `${this.selector}`;
        this.contentSelector = `${this.selector}-content`;
    }

    public build(): void {}

    public onInitialBuildBeforeScrollIn(): void {
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
        // 3) Append children to content
        $(`#${contentSelector}`).append($childrenClones);
        // 4) Set-up initial background
        $(`#${self.backgroundSelector}`).addClass(self.initialImageClass);
    }

    public appendCanvases(): void {
        $(`#${this.selector}`).append(`
            <div class="canvas-container">
                <div id="chicken">Chicken</div>
            </div>
        `);
    }

    public runFadeTransition(fromClass: string, toClass: string, duration: number, animationEndCallback: () => void): void {
        const self = this;
        this.clearAllImageClasses();
        $(`#${this.foregroundSelector}`).addClass(fromClass);
        $(`#${this.backgroundSelector}`).addClass(toClass);
        $(`#${this.foregroundSelector}`).css('opacity', 1);
        $(`#${this.foregroundSelector}`).animate({opacity: 0}, duration, () => {
                if (typeof animationEndCallback === 'function') {
                    animationEndCallback();
                }   
            }
        );
    }

    public runNextFadeTransition(): void {
        const self = this;
        var lastBackgroundClass = this.getImageClassByIndex(this.currentImageIndex - 1);
        if (!this.hasInitialImageClassAnimated) {
            lastBackgroundClass = this.initialImageClass;
            this.hasInitialImageClassAnimated = true;
        }
        const newBackgroundClass = this.getImageClassByIndex(this.currentImageIndex);
        this.runFadeTransition(lastBackgroundClass, newBackgroundClass, self.FADE_DURATION, () => {
            self.runNextFadeTransition();
        });
        this.updateNextImageIndex();
    }

    public getImageClassByIndex(index: number, overrideImageMode?: ImageMode): string {
        var rectifiedIndex = ((index % this.currentFilm.length) + this.currentFilm.length) % this.currentFilm.length;
        var rectifiedImageMode = overrideImageMode !== undefined ? overrideImageMode : this.imageMode;
        return rectifiedImageMode == ImageMode.NORMAL ? this.currentFilm[rectifiedIndex].normal : this.currentFilm[rectifiedIndex].saturated;
    }

    public onScrollIn(): void {
        this.clearAllImageClasses();
        this.setForegroundToAppear();
        this.setForegroundAnimationToRunning();
        this.setThisBackgroundInProvider();
    }

    public onScrollOut(): void {
        this.setForegroundToDisappear();
        this.setForegroundAnimationToStop();
    }

    public clearAllImageClasses(): void {
        $(`#${this.foregroundSelector}`).removeClass(this.initialImageClass);
        for (let i = 0; i < this.currentFilm.length; i++) {
            $(`#${this.foregroundSelector}`).removeClass(this.getImageClassByIndex(i, ImageMode.NORMAL));
            $(`#${this.backgroundSelector}`).removeClass(this.getImageClassByIndex(i, ImageMode.NORMAL));
            $(`#${this.foregroundSelector}`).removeClass(this.getImageClassByIndex(i, ImageMode.SATURATED));
            $(`#${this.backgroundSelector}`).removeClass(this.getImageClassByIndex(i, ImageMode.SATURATED));
        }
    }

    public decrementImageIndex(): void {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.currentFilm.length;
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

    public setForegroundAnimationToStop(): void {
        $(`#${this.foregroundSelector}`).stop();
    }

    public setForegroundAnimationToRunning(): void {
        this.runNextFadeTransition();
    }

    public setToFocused(): void {
        this.setForegroundAnimationToStop();
        this.runSaturatedImageTransition();
    }

    public setToDefocused(): void {
        this.setForegroundAnimationToStop();
        this.runNormalImageTransition();
    }

    private runNormalImageTransition(): void {
        const fromClass = this.getImageClassByIndex(this.currentImageIndex);    // Saturated img
        this.imageMode = ImageMode.NORMAL; // As mode changes, the image would be in normal saturation.
        const toClass = this.getImageClassByIndex(this.currentImageIndex);  // Normal img
        this.runFadeTransition(fromClass, toClass, this.FADE_DURATION_FAST,
        () => {});
    }

    private runSaturatedImageTransition(): void {
        const self = this;
        const fromClass = this.getImageClassByIndex(this.currentImageIndex);    // Normal img
        this.imageMode = ImageMode.SATURATED;
        const toClass = this.getImageClassByIndex(this.currentImageIndex);  // Saturated img
        this.runFadeTransition(fromClass, toClass, this.FADE_DURATION_FAST,
        () => {
            self.decrementImageIndex();
            self.runNextFadeTransition();
        });
    }

    public setThisBackgroundInProvider(): void {
        this.backgroundProvider.setState({ currentBackground : this });
    }
}