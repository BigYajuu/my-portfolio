import $ from "jquery";
import DialogElement from "./dialog-element";
import AnimatedXScrollable from "../components/animated-x-scrollable";
export class OverviewDialog extends DialogElement {
    constructor(selector, title, images = []) {
        super(selector, title);
        this.images = [];
        this.scrollableSelector = `${this.selector}-scrollable`;
        this.isScrollableAttached = false;
        this.images = images;
        this.scrollableComponent = new AnimatedXScrollable(this.scrollableSelector, this.selector, {
            $content: this.buildImageContent(),
        });
        this.$dialogElement.append(this.buildImageXScrollable());
        this.$dialogElement.append(this.buildBody().addClass('body'));
        this.attach();
    }
    buildImageXScrollable() {
        // Where slideshow image items are filled
        const self = this;
        const $scrollable = $(`<div id=${self.scrollableSelector}>`);
        this.$scrollableWrapper = $(`<div>`).css({
            'max-width': '100%',
            'padding-bottom': '16px',
        }).append($scrollable);
        return this.$scrollableWrapper;
    }
    buildBody() {
        // Where body textual content is filled
        return $(`<div>`);
    }
    attachScrollable() {
        this.scrollableComponent.attachExternally();
        this.updateScrollableFloatStatus();
    }
    updateScrollableFloatStatus() {
        // After attaching scrollable, check if scrollable width exceeds threshold.
        // If it does, do not set the scrollable to float.
        const self = this;
        var targetWidth = this.$scrollableWrapper.width();
        var parentWidth = this.$scrollableWrapper.parent().parent().width();
        // Either exceeding 0.6 of parent width or 250px.
        if (targetWidth > 0.6 * parentWidth || parentWidth - targetWidth < 250) {
            this.$scrollableWrapper.css({
                'float': 'none'
            });
        }
        else {
            this.$scrollableWrapper.css({
                'float': 'left'
            });
        }
    }
    buildImageContent() {
        const $slideshow = $(`<div>`);
        for (var i = 0; i < this.images.length; i++) {
            const loadingMode = i < 4 ? 'eager' : 'lazy'; // Load first 5 images eagerly
            const $a = $('<a>').attr({
                'href': `${this.images[i].folderPath}${this.images[i].imageName}`,
                'target': '_blank',
            });
            const $img = $('<img>').attr({
                'src': `${this.images[i].folderPath}/thumbnails/${this.images[i].imageName}`,
                'title': this.images[i].title,
                'loading': loadingMode,
            }).addClass('x-scrollable-item-slideshow');
            $slideshow.append($a.append($img));
        }
        return $slideshow;
    }
    onBuildAndShow() {
        this.onShow();
        if (!this.isScrollableAttached) {
            this.attachScrollable();
            this.isScrollableAttached = true;
        }
        this.updateScrollableFloatStatus();
    }
}
