import $ from "jquery";
import DialogElement from "./dialog-element";
import AnimatedXScrollable from "../components/animated-x-scrollable";

interface OverviewImageData {
    folderPath: string;
    imageName: string;
    title: string;
}

export class OverviewDialog extends DialogElement {
    protected images: OverviewImageData[] = [];
    protected $scrollableWrapper?: JQuery<HTMLElement>;
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
        this.$dialogElement.append(this.buildBody().addClass('body'));
        this.attach();        
    }

    private buildImageXScrollable(): JQuery<HTMLElement> {
        // Where slideshow image items are filled
        const self = this;
        const $scrollable = $(`<div id=${self.scrollableSelector}>`);
        this.$scrollableWrapper = $(`<div>`).css({
            'max-width': '100%',
            'padding-bottom': '16px',
        }).append($scrollable);
        return this.$scrollableWrapper;
    }

    protected buildBody(): JQuery<HTMLElement> {
        // Where body textual content is filled
        return $(`<div>`);
    }

    private attachScrollable() {
        this.scrollableComponent.attachExternally();
        this.updateScrollableFloatStatus();
    }

    private updateScrollableFloatStatus() {
        // After attaching scrollable, check if scrollable width exceeds threshold.
        // If it does, do not set the scrollable to float.
        const self = this;
        var targetWidth = this.$scrollableWrapper!.width();
        var parentWidth = this.$scrollableWrapper!.parent().parent().width();
        // Either exceeding 0.6 of parent width or 250px.
        if (targetWidth! > 0.6 * parentWidth! || parentWidth! - targetWidth! < 250) {
            this.$scrollableWrapper!.css({
                'float': 'none'
            })
        } else {
            this.$scrollableWrapper!.css({
                'float': 'left'
            })
        }
    }

    private buildImageContent(): JQuery<HTMLElement> {
        const $slideshow = $(`<div>`);
        for (var i=0; i<this.images.length; i++) {
            const $a = $('<a>').attr({
                'href': `${this.images[i].folderPath}${this.images[i].imageName}`,
                'target': '_blank',
            });
            const $img = $('<img>').attr({
                'src': `${this.images[i].folderPath}/thumbnails/${this.images[i].imageName}`,
                'title': this.images[i].title,
                'loading': 'lazy',
            }).addClass('x-scrollable-item-slideshow');
            $slideshow.append($a.append($img));
        }
        return $slideshow;
    }

    public onBuildAndShow(): void {
        this.onShow();
        if (!this.isScrollableAttached) {
            this.attachScrollable();
            this.isScrollableAttached = true;
        }
        this.updateScrollableFloatStatus();
    }
}