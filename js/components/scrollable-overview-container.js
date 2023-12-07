import $ from "jquery";
import Component from "../engine/component";
export class ScrollableOverviewContainer extends Component {
    constructor(selector, { title, subtitle, dateBegun, dateEnded = "", imageClass, imageHeight, imageWidth, imageTitle, overview }, overviewDialog) {
        super(selector);
        this.containerSelector = `${this.selector}-container`;
        const self = this;
        this.overviewDialog = overviewDialog;
        const $timestamp = $(`<div>`).html(`<p class="i timestamp">${dateBegun}<br>- ${dateEnded}<p>`);
        const $image = $(`<div title="${imageTitle}">`).addClass(`${imageClass} x-scrollable-image`);
        if (imageHeight) {
            $image.css("height", imageHeight);
        }
        if (imageWidth) {
            $image.css("width", imageWidth);
        }
        const $titleBar = $(`<div>`).addClass("title-bar")
            .append($(`<h1>`).text(title))
            .append($timestamp);
        const $subtitle = $(`<p class="i">`)
            .css({
            "margin": "0",
            "padding": "0"
        })
            .text(subtitle ? subtitle : "");
        const $overview = $(`<p>`).text(overview);
        this.$container = $(`<div id=${self.containerSelector}>`)
            .addClass("container")
            .append($image)
            .append($titleBar)
            .append($subtitle)
            .append($overview);
        this.$constructedElement = $(`<div id=${selector}>`)
            .addClass("x-scrollable-item")
            .addClass("col-abs-width")
            .addClass("col-default-padding")
            .append(this.$container);
        this.setUpOnClick();
    }
    setUpOnClick() {
        const self = this;
        if (this.overviewDialog) {
            $(document).on('click', `#${self.selector}`, () => {
                self.onClick();
                console.log("click");
            });
            this.$container.addClass("clickable");
        }
    }
    onClick() {
        // Display corresponding overview dialog.
        this.overviewDialog.onBuildAndShow();
    }
}
export default ScrollableOverviewContainer;
