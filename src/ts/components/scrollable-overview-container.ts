import $ from "jquery";
import Component from "../engine/component";
import { OverviewDialog } from "../mixin-components/overview-dialog";

export class ScrollableOverviewContainer extends Component {
    // This object acts as a scrollable item that sits 
    // along the scrollable component.

    private overviewDialog?: OverviewDialog;
    private containerSelector: string = `${this.selector}-container`;
    private $container: JQuery<HTMLElement>;

    constructor(selector: string, {title, subtitle, dateBegun, dateEnded="", imagePath, imageTitle, overview
    } : {
        title: string,
        subtitle?: string,
        dateBegun: string,
        dateEnded?: string,
        imagePath?: string,
        imageTitle?: string,
        overview: string
    }, overviewDialog?: OverviewDialog, 
    ) {
        super(selector);
        const self = this;
        this.overviewDialog = overviewDialog;
        const $timestamp = $(`<div>`).html(`<p class="i timestamp">${dateBegun}<br>- ${dateEnded}<p>`);
        var $image = $(`<div>`);
        if (imagePath) {
            $image = $(`<img>`)
                .attr({
                    'src': `${imagePath}`,
                    'title': `${imageTitle}`,
                    'loading': 'lazy',
                })
                .addClass(`x-scrollable-image`);
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
            .addClass("col-container")
            .addClass("col-default-padding")
            .append(this.$container);
        this.setUpOnClick();
    }

    private setUpOnClick() {
        const self = this;
        if (this.overviewDialog) {
            $(document).on('click', `#${self.selector}`, () => {
                self.onClick();
            });
            this.$container.addClass("clickable");
        }
    }

    private onClick() {
        // Display corresponding overview dialog.
        this.overviewDialog!.onBuildAndShow();
    }
}

export default ScrollableOverviewContainer;