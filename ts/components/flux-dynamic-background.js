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
    constructor(selector, page, pageManagement, imageMode) {
        super(selector, page, pageManagement);
        this.imageMode = ImageMode.NORMAL;
        this.currentImageIndex = 0;
        imageMode ? this.imageMode = imageMode : null;
    }
    build() {
        const self = this;
        // 1) Clone all children of page div
        const $childrenClones = $(`#${this.selector}`).children().clone(true, true);
        // 2) Create new foreground canvas
        const foregroundSelector = `${this.selector}-foreground`;
        const contentSelector = `${this.selector}-content`;
        $(`#${this.selector}`).html(`
            <div id=${foregroundSelector} class="flux-foreground flux-canvas">
                <div id=${foregroundSelector} class="flux-foreground bg2-saturate"></div>
            </div>
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
        $(`#${this.selector}`).addClass(toClass);
        // $(`#${this.selector}`).css('background-color', 'red');
        console.log("runTransition");
    }
    getImageClassByIndex(film, index) {
        return this.imageMode == ImageMode.NORMAL ? film[index].normal : film[index].saturated;
    }
    setFixedItemsToDissapear() { }
    setFixedItemsToAppear() { }
}
