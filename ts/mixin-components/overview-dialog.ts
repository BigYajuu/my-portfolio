import $ from "jquery";
import DialogElement from "./dialog-element";
import AnimatedXScrollable from "../components/animated-x-scrollable";

interface OverviewImageData {
    path: string;
    title: string;
}

export class OverviewDialog extends DialogElement {
    protected images: OverviewImageData[] = [];
    protected scrollableComponent: AnimatedXScrollable;
    protected scrollableSelector: string = `${this.selector}-scrollable`;
    protected isScrollableAttached: boolean = false;

    constructor(selector: string, title: string, images: OverviewImageData[] = []) {
        super(selector, title);
        this.images = images;
        this.scrollableComponent = new AnimatedXScrollable(
            this.scrollableSelector, 
            this.selector, 
            {
                $content: this.buildImageContent(),
            }
        );
        this.$dialogElement.append(this.buildImageXScrollable());
        this.$dialogElement.append(this.buildBody());
        this.attach();        
    }

    private buildImageXScrollable(): JQuery<HTMLElement> {
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

    private buildBody(): JQuery<HTMLElement> {
        // Where body content is filled
        return $(`<div>`).html("<p>Lorem Ipsum Loremmmmm Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>").css({

        });
    }

    private attachImageXScrollable() {
        this.scrollableComponent.attachExternally();
    }

    private buildImageContent(): JQuery<HTMLElement> {
        const $slideshow = $(`<div>`);
        for (var i=0; i<this.images.length; i++) {
            $slideshow
                .append(
                    $('<img>')
                        .attr({
                            'src': this.images[i].path,
                            'title': this.images[i].title,
                        })
                        .addClass('x-scrollable-item-slideshow')
                );
        }
        return $slideshow;
    }

    public onBuildAndShow(): void {
        this.onShow();
        if (!this.isScrollableAttached) {
            this.attachImageXScrollable();
            this.isScrollableAttached = true;
        }
    }
}