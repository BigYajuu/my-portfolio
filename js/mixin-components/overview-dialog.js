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
        this.$dialogElement.append(this.buildBody());
        this.attach();
    }
    buildImageXScrollable() {
        // Where slideshow image items are filled
        const self = this;
        const $scrollable = $(`<div id=${self.scrollableSelector}>`);
        const $scrollableWrapper = $(`<div>`).css({
            'float': 'left',
            'max-width': '100%'
        })
            .append($scrollable);
        return $scrollableWrapper;
    }
    buildBody() {
        // Where body content is filled
        return $(`<div>`).html("<p>Lorem Ipsum Loremmmmm Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>").css({});
    }
    attachImageXScrollable() {
        this.scrollableComponent.attachExternally();
    }
    buildImageContent() {
        const $slideshow = $(`<div>`);
        for (var i = 0; i < this.images.length; i++) {
            $slideshow
                .append($('<img>')
                .attr({
                'src': this.images[i].path,
                'title': this.images[i].title,
            })
                .addClass('x-scrollable-item-slideshow'));
        }
        return $slideshow;
    }
    onBuildAndShow() {
        this.onShow();
        if (!this.isScrollableAttached) {
            this.attachImageXScrollable();
            this.isScrollableAttached = true;
        }
    }
}
