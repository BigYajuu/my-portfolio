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
    constructor(selector, page, pageManagement, imageMode, initialBackgroundClass) {
        super(selector, page, pageManagement);
        this.imageMode = ImageMode.SATURATED;
        this.currentImageIndex = 0;
        this.currentFilm = SVGFilm1;
        this.lastBackgroundClass = "bg0-blank";
        this.lastForegroundClass = "";
        imageMode ? this.imageMode = imageMode : null;
        initialBackgroundClass ? this.lastBackgroundClass = initialBackgroundClass : null;
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
        const lastForegroundClass = this.lastForegroundClass;
        const lastBackgroundClass = this.lastBackgroundClass;
        const newBackgroundClass = toClass;
        $(`#${this.foregroundSelector}`).addClass(lastBackgroundClass).removeClass(lastForegroundClass);
        $(`#${this.backgroundSelector}`).addClass(newBackgroundClass).removeClass(lastBackgroundClass);
        $(`#${this.foregroundSelector}`).css('opacity', 1);
        $(`#${this.foregroundSelector}`).animate({ opacity: 0 }, 2000, function () {
            self.lastForegroundClass = lastBackgroundClass;
            self.lastBackgroundClass = newBackgroundClass;
            console.log(`lastForegroundClass: ${self.lastForegroundClass}\nlastBackgroundClass: ${self.lastBackgroundClass}`);
            console.log(`currentImageIndex: ${self.currentImageIndex}`);
            self.runNextFadeTransition();
        });
    }
    getImageClassByIndex(index) {
        return this.imageMode == ImageMode.NORMAL ? this.currentFilm[index].normal : this.currentFilm[index].saturated;
    }
    onLoad() {
        this.setForegroundToAppear();
        // this.runNextFadeTransition();
    }
    onRetire() {
        this.setForegroundToDisappear();
    }
    runNextFadeTransition() {
        this.runFadeTransition(this.getImageClassByIndex(this.currentImageIndex));
        this.updateNextImageIndex();
    }
    updateNextImageIndex() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.currentFilm.length;
    }
    setForegroundToAppear() {
        $(`#${this.foregroundSelector}`).css('opacity', 1);
    }
    setForegroundToDisappear() {
        $(`#${this.foregroundSelector}`).css('opacity', 0);
    }
}
