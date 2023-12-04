import $ from "jquery";
import DialogElement from "./dialog-element";
import AnimatedXScrollable from "../components/animated-x-scrollable";
import Veil from "./veil";
export class OverviewDialog extends DialogElement {
    constructor(selector, title, images = []) {
        super(selector, title);
        this.images = [];
        this.scrollableSelector = `${this.selector}-scrollable`;
        this.veil = new Veil(`${this.selector}-veil`, () => {
            this.onHideAndRemove();
        });
        this.images = images;
        this.$dialogElement.append(this.buildImageXScrollable());
        this.attachImageXScrollable();
    }
    buildImageXScrollable() {
        const self = this;
        return $(`<div id=${self.scrollableSelector}>`);
    }
    attachImageXScrollable() {
        const $imageContents = [];
        const xScrollable = new AnimatedXScrollable(this.scrollableSelector, this.selector, {
            $content: this.buildImageContent(),
        });
        xScrollable.onInitialBuildBeforeScrollIn();
    }
    buildImageContent() {
        return $(`<div>`).html(`<p>test</p>`);
    }
    onBuildAndShow() {
        this.build();
        this.onShow();
        console.log("onBuildAndShow");
    }
    onHideAndRemove() {
        this.onHide();
        this.remove();
    }
}
