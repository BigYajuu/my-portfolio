import $ from "jquery";
import DialogElement from "./dialog-element";
import AnimatedXScrollable from "../components/animated-x-scrollable";
import Veil from "./veil";

interface OverviewImageData {
    class: string;
    title: string;
}

export class OverviewDialog extends DialogElement {
    protected images: OverviewImageData[] = [];

    protected scrollableSelector: string = `${this.selector}-scrollable`;
    protected veil: Veil = new Veil(`${this.selector}-veil`, () => {
        this.onHideAndRemove();
    });

    constructor(selector: string, title: string, images: OverviewImageData[] = []) {
        super(selector, title);
        this.images = images;
        this.$dialogElement.append(this.buildImageXScrollable());
        this.attachImageXScrollable();
    }

    private buildImageXScrollable(): JQuery<HTMLElement> {
        const self = this;
        return $(`<div id=${self.scrollableSelector}>`);
    }

    private attachImageXScrollable() {
        const $imageContents = [];
        const xScrollable = new AnimatedXScrollable(
            this.scrollableSelector, 
            this.selector, 
            {
                $content: this.buildImageContent(),
            }
        )
        xScrollable.onInitialBuildBeforeScrollIn();
    }

    private buildImageContent(): JQuery<HTMLElement> {
        return $(`<div>`).html(`<p>test</p>`);
    }

    public onBuildAndShow(): void {
        this.build();
        this.onShow();
        console.log("onBuildAndShow");
    }

    public onHideAndRemove(): void {
        this.onHide();
        this.remove();
    }
}