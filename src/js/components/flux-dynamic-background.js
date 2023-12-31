import $ from "jquery";
import Component from "../engine/component";
import { ProviderKeys } from "../static/constants";
import StateManager from "../engine/state-management.ts/state-manager";
var ImageMode;
(function (ImageMode) {
    ImageMode[ImageMode["NORMAL"] = 0] = "NORMAL";
    ImageMode[ImageMode["SATURATED"] = 1] = "SATURATED";
})(ImageMode || (ImageMode = {}));
const SVGFilm1 = [
    // A collection of CSS classes configurable in flux.scss.
    { normal: "bg1-normal", saturated: "bg1-saturate" },
    { normal: "bg2-normal", saturated: "bg2-saturate" },
    { normal: "bg3-normal", saturated: "bg3-saturate" },
    { normal: "bg4-normal", saturated: "bg4-saturate" },
    { normal: "bg5-normal", saturated: "bg5-saturate" },
    { normal: "bg6-normal", saturated: "bg6-saturate" }
];
export class FluxDynamicBackground extends Component {
    constructor(selector, imageMode, initialImageClass) {
        super(selector);
        this.FADE_DURATION = 3300;
        this.FADE_DURATION_FAST = 800;
        this.imageMode = ImageMode.SATURATED;
        this.currentImageIndex = 0;
        this.currentFilm = SVGFilm1;
        this.initialImageClass = "";
        this.hasInitialImageClassAnimated = false;
        this.backgroundProvider = StateManager.getInstance(ProviderKeys.BACKGROUND, { currentBackground: this });
        imageMode ? this.imageMode = imageMode : null;
        if (initialImageClass) {
            this.initialImageClass = initialImageClass;
        }
        this.foregroundSelector = `${this.selector}-foreground`;
        this.backgroundSelector = `${this.selector}`;
        this.contentSelector = `${this.selector}-content`;
    }
    attach() { }
    onAttachBeforeScrollIn() {
        // Reforms mark-up page div into a background/foreground structure
        // with an augmented content div for children elem from within 
        // the original page div.
        // div background (this.backgroundSelector)
        //   |__ div foreground (this.foregroundSelector)
        //   |__ div content (this.contentSelector)
        const self = this;
        // 1) Clone all children of page div
        const $childrenClones = $(`#${self.selector}`).children().clone(true, true);
        // 1.5) Obtain mark-up classes of the page div
        const predefinedPageClassList = $(`#${self.selector}`)[0].classList;
        // 2) Set-up back/foregrounds
        $(`#${self.selector}`).addClass("background-window");
        $(`#${self.selector}`).html(`
            <div id=${self.foregroundSelector} class="flux-foreground"></div>
            <div id=${self.contentSelector} class="flux-content"></div>
            `);
        // 2.5) Add classes from step 1.5) to content div
        $.each(predefinedPageClassList, function (index, className) {
            $(`#${self.contentSelector}`).addClass(className); // Output each class name
        });
        // 3) Append children to content
        $(`#${self.contentSelector}`).append($childrenClones);
        // 4) Set-up initial background
        $(`#${self.backgroundSelector}`).addClass(self.initialImageClass);
    }
    appendCanvases() {
        $(`#${this.selector}`).append(`
            <div class="canvas-container">
                <div id="chicken">Chicken</div>
            </div>
        `);
    }
    runFadeTransition(fromClass, toClass, duration, animationEndCallback) {
        const self = this;
        this.clearAllImageClasses();
        $(`#${this.foregroundSelector}`).addClass(fromClass);
        $(`#${this.backgroundSelector}`).addClass(toClass);
        $(`#${this.foregroundSelector}`).css('opacity', 1);
        $(`#${this.foregroundSelector}`).animate({ opacity: 0 }, duration, () => {
            if (typeof animationEndCallback === 'function') {
                animationEndCallback();
            }
        });
    }
    runNextFadeTransition() {
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
    getImageClassByIndex(index, overrideImageMode) {
        var rectifiedIndex = ((index % this.currentFilm.length) + this.currentFilm.length) % this.currentFilm.length;
        var rectifiedImageMode = overrideImageMode !== undefined ? overrideImageMode : this.imageMode;
        return rectifiedImageMode == ImageMode.NORMAL ? this.currentFilm[rectifiedIndex].normal : this.currentFilm[rectifiedIndex].saturated;
    }
    onScrollIn() {
        this.clearAllImageClasses();
        this.setForegroundToAppear();
        this.setForegroundAnimationToRunning();
        this.setThisBackgroundInProvider();
    }
    onScrollOut() {
        this.setForegroundToDisappear();
        this.setForegroundAnimationToStop();
    }
    clearAllImageClasses() {
        $(`#${this.foregroundSelector}`).removeClass(this.initialImageClass);
        for (let i = 0; i < this.currentFilm.length; i++) {
            $(`#${this.foregroundSelector}`).removeClass(this.getImageClassByIndex(i, ImageMode.NORMAL));
            $(`#${this.backgroundSelector}`).removeClass(this.getImageClassByIndex(i, ImageMode.NORMAL));
            $(`#${this.foregroundSelector}`).removeClass(this.getImageClassByIndex(i, ImageMode.SATURATED));
            $(`#${this.backgroundSelector}`).removeClass(this.getImageClassByIndex(i, ImageMode.SATURATED));
        }
    }
    decrementImageIndex() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.currentFilm.length;
    }
    updateNextImageIndex() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.currentFilm.length;
    }
    setForegroundToAppear() {
        $(`#${this.foregroundSelector}`).css('visibility', 'visible');
        $(`#${this.foregroundSelector}`).css('opacity', '0');
    }
    setForegroundToDisappear() {
        $(`#${this.foregroundSelector}`).css('visibility', 'hidden');
    }
    setForegroundAnimationToStop() {
        $(`#${this.foregroundSelector}`).stop();
    }
    setForegroundAnimationToRunning() {
        this.runNextFadeTransition();
    }
    setToFocused() {
        this.setForegroundAnimationToStop();
        this.runSaturatedImageTransition();
    }
    setToDefocused() {
        this.setForegroundAnimationToStop();
        this.runNormalImageTransition();
    }
    runNormalImageTransition() {
        const fromClass = this.getImageClassByIndex(this.currentImageIndex); // Saturated img
        this.imageMode = ImageMode.NORMAL; // As mode changes, the image would be in normal saturation.
        const toClass = this.getImageClassByIndex(this.currentImageIndex); // Normal img
        this.runFadeTransition(fromClass, toClass, this.FADE_DURATION_FAST, () => { });
    }
    runSaturatedImageTransition() {
        const self = this;
        const fromClass = this.getImageClassByIndex(this.currentImageIndex); // Normal img
        this.imageMode = ImageMode.SATURATED;
        const toClass = this.getImageClassByIndex(this.currentImageIndex); // Saturated img
        this.runFadeTransition(fromClass, toClass, this.FADE_DURATION_FAST, () => {
            self.decrementImageIndex();
            self.runNextFadeTransition();
        });
    }
    setThisBackgroundInProvider() {
        this.backgroundProvider.setState({ currentBackground: this });
    }
}
