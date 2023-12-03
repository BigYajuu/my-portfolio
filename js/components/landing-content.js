import $ from "jquery";
import Component from "../engine/component";
import { Constants } from "../static/constants";
import { icon } from '@fortawesome/fontawesome-svg-core';
export class LandingContent extends Component {
    constructor(selector) {
        super(selector);
        this.firstScrollInComplete = false;
        this.titleSelector = `${this.selector}-title`;
        this.subtitleSelector = `${this.selector}-subtitle`;
        this.scrollDownIconSelector = `${this.selector}-scroll-down-icon`;
        const self = this;
        const $title = $(`<div id="${self.titleSelector}">`)
            .html(`
                <h0 class="section-margin">
                    Behold the 
                    <i style="font-weight: lighter;">future</i> 
                    of portfolios.
                </h0>`)
            .css("opacity", "0.4")
            .addClass("section-default-page-margin");
        const $subtitle = $(`<div id="${self.subtitleSelector}">`)
            .html(`<p0 class="section-margin">
                    A web experience designed by Chuyue Wu.
                </p0>`)
            .css("opacity", "0.4")
            .addClass("section-default-page-margin");
        const $scrollDownIcon = $(`<div id="${self.scrollDownIconSelector}">`);
        $scrollDownIcon.addClass("scroll-down-icon");
        const scrollDownIcon = icon({ prefix: 'far', iconName: 'circle-down' });
        $scrollDownIcon.append(scrollDownIcon.node[0]).css("opacity", "0");
        this.$constructedElement = $(`<div id="${selector}">`)
            .append($title)
            .append($subtitle)
            .append($scrollDownIcon);
    }
    onInitialBuildBeforeScrollIn() {
        $(`#${this.titleSelector}`).animate({ "opacity": "1" }, Constants.ANIMATION_DURATION_SLOWER, () => {
            $(`#${this.subtitleSelector}`).animate({ "opacity": "1" }, Constants.ANIMATION_DURATION_SLOWER, () => {
                $(`#${this.scrollDownIconSelector}`).delay(1000).animate({ "opacity": "1" }, Constants.ANIMATION_DURATION_SLOWER);
            });
        });
    }
    onScrollOut() {
        this.setTitleSubtitleToFullyShow();
        this.setScrollDownIconToDisappear();
    }
    onScrollIn() {
        if (this.firstScrollInComplete) {
            this.setTitleSubtitleToFullyShow();
            this.setScrollDownIconToAppear();
        }
        else {
            this.firstScrollInComplete = true;
        }
    }
    setTitleSubtitleToFullyShow() {
        $(`#${this.titleSelector}`).stop();
        $(`#${this.titleSelector}`).css("opacity", "1");
        $(`#${this.subtitleSelector}`).stop();
        $(`#${this.subtitleSelector}`).css("opacity", "1");
    }
    setScrollDownIconToDisappear() {
        $(`#${this.scrollDownIconSelector}`).stop();
        $(`#${this.scrollDownIconSelector}`).css({ "visibility": "hidden" });
    }
    setScrollDownIconToAppear() {
        $(`#${this.scrollDownIconSelector}`).stop();
        $(`#${this.scrollDownIconSelector}`).css({ "opacity": "0" });
        $(`#${this.scrollDownIconSelector}`).css({ "visibility": "visible" });
        $(`#${this.scrollDownIconSelector}`).animate({ "opacity": "1" }, Constants.ANIMATION_DURATION_SLOWER);
    }
}
export default LandingContent;
