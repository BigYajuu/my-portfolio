import $ from "jquery";
import Component from "../engine/component";
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
    { normal: "bg4-normal", saturated: "bg4-saturate" }
];
export class FluxDynamicBackgrounds extends Component {
    constructor(selector, page, pageManagement, imageMode, initialImageClass) {
        super(selector, page, pageManagement);
        this.imageMode = ImageMode.SATURATED;
        this.currentImageIndex = 0;
        this.currentFilm = SVGFilm1;
        this.initialImageClass = "bg0-blank";
        imageMode ? this.imageMode = imageMode : null;
        initialImageClass ? this.initialImageClass = initialImageClass : null;
        this.foregroundSelector = `${this.selector}-foreground`;
        this.backgroundSelector = `${this.selector}`;
        this.contentSelector = `${this.selector}-content`;
    }
    build() {
        const self = this;
        // 1) Clone all children of page div
        const $childrenClones = $(`#${self.selector}`).children().clone(true, true);
        // 2) Set-up back/foregrounds
        const foregroundSelector = self.foregroundSelector;
        const contentSelector = self.contentSelector;
        $(`#${self.selector}`).html(`
            <div id=${foregroundSelector} class="flux-foreground"></div>
            <div id=${contentSelector} class="flux-content"></div>
            `);
        $(`#${contentSelector}`).append($childrenClones);
        this.runNextFadeTransition();
    }
    appendCanvases() {
        $(`#${this.selector}`).append(`
            <div class="canvas-container">
                <div id="chicken">Chicken</div>
            </div>
        `);
    }
    runFadeTransition(toClass) {
        const self = this;
        const lastForegroundClass = this.getImageClassByIndex(this.currentImageIndex - 2);
        const lastBackgroundClass = this.getImageClassByIndex(this.currentImageIndex - 1);
        const newBackgroundClass = this.getImageClassByIndex(this.currentImageIndex);
        $(`#${this.foregroundSelector}`).addClass(lastBackgroundClass).removeClass(lastForegroundClass);
        $(`#${this.backgroundSelector}`).addClass(newBackgroundClass).removeClass(lastBackgroundClass);
        $(`#${this.foregroundSelector}`).css('opacity', 1);
        $(`#${this.foregroundSelector}`).animate({ opacity: 0 }, 4000, function () {
            console.log(`currentImageIndex: ${self.currentImageIndex}`);
            self.runNextFadeTransition();
        });
    }
    getImageClassByIndex(index) {
        var rectifiedIndex = ((index % this.currentFilm.length) + this.currentFilm.length) % this.currentFilm.length;
        return this.imageMode == ImageMode.NORMAL ? this.currentFilm[rectifiedIndex].normal : this.currentFilm[rectifiedIndex].saturated;
    }
    onScrollIn() {
        this.clearAllImageClasses();
        this.setForegroundToAppear();
        this.setForegroundAnimationToRunning();
    }
    onScrollOut() {
        this.setForegroundToDisappear();
        this.setForegroundAnimationToPaused();
    }
    clearAllImageClasses() {
        $(`#${this.foregroundSelector}`).removeClass(this.initialImageClass);
        for (let i = 0; i < this.currentFilm.length; i++) {
            $(`#${this.foregroundSelector}`).removeClass(this.getImageClassByIndex(i));
            $(`#${this.backgroundSelector}`).removeClass(this.getImageClassByIndex(i));
        }
    }
    runNextFadeTransition() {
        this.runFadeTransition(this.getImageClassByIndex(this.currentImageIndex));
        this.updateNextImageIndex();
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
    setForegroundAnimationToPaused() {
        $(`#${this.foregroundSelector}`).stop();
    }
    setForegroundAnimationToRunning() {
        this.runNextFadeTransition();
    }
}
