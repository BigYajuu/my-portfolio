import $ from "jquery";
import Component from "../engine/component";

export class ScrollableOverviewContainer extends Component {
    // This object acts as a scrollable item that sits 
    // along the scrollable component.

    constructor(selector: string, {title, subtitle, dateBegun, dateEnded="", imageClass, imageHeight, imageWidth, imageTitle, overview
    } : {
        title: string,
        subtitle?: string,
        dateBegun: string,
        dateEnded?: string,
        imageClass?: string,
        imageHeight?: string,
        imageWidth?: string,
        imageTitle?: string,
        overview: string
    }
    ) {
        super(selector);
        const self = this;
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
        const $container = $(`<div>`)
            .addClass("container")
            .append($image)
            .append($titleBar)
            .append($subtitle)
            .append($overview);
        self.$constructedElement = $(`<div id=${selector}>`)
            .addClass("x-scrollable-item")
            .addClass("col-abs-width")
            .addClass("col-default-padding")
            .append($container);
    }    
}

export default ScrollableOverviewContainer;