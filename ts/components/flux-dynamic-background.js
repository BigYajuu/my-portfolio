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
        this.lastBackgroundClass = "bg0-blank";
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
        this.runFadeTransition(this.getImageClassByIndex(SVGFilm1, 1));
    }
    appendCanvases() {
        $(`#${this.selector}`).append(`
            <div class="canvas-container">
                <div id="chicken">Chicken</div>
            </div>
        `);
    }
    runFadeTransition(toClass) {
        $(`#${this.foregroundSelector}`).addClass(this.lastBackgroundClass);
        $(`#${this.backgroundSelector}`).addClass(toClass);
        $(`#${this.foregroundSelector}`).animate({ opacity: 0 }, 4000, function () {
            // Animation ending sequence
        });
    }
    getImageClassByIndex(film, index) {
        return this.imageMode == ImageMode.NORMAL ? film[index].normal : film[index].saturated;
    }
    onLoad() {
        console.log('onLoad');
    }
    onRetire() {
        console.log('onRetire');
    }
}
