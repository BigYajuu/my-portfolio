import $ from "jquery";
import Component from '../engine/component.js';
import {Utility, DeviceType} from '../engine/utility.js';
import { Constants } from '../static/constants.js';

enum ScrollDirection {
    LEFT = 'left',
    RIGHT = 'right'
}

enum ScrollChevronState {
    BLANK = 'blank',
    AVAILABLE = 'available',
    HOVERING = 'hovering'
}

interface ScrollChevronStyle {
    opacity: string;
    width: string;
}

const ScrollChevronBlankStyle: ScrollChevronStyle = {
    opacity: '0',
    width: '0%'
};

const ScrollChevronAvailableStyle: ScrollChevronStyle = {
    opacity: '0.5',
    width: '15%'
};

const ScrollChevronHoveringStyle: ScrollChevronStyle = {
    opacity: '1',
    width: '20%'
};


export class AnimatedXScrollable extends Component {

    private static SCROLLABLE_MAX_DX: number = 12;

    private $content: JQuery<HTMLElement>;
    private pageSelector: string;
    private scrollableSelector: string;
    private scrollChevronLeftSelector: string;
    private scrollChevronRightSelector: string;

    private lastVPosition: number;

    private xScrollPosition: number;
    private xScrollSpeed: number;
    private xMovementIntervalHandler: number;
    private xAccelerationIntervalHandler: number;
    private scrollChevronStateLeft: ScrollChevronState;
    private scrollChevronStateRight: ScrollChevronState;
    private scrollChevronOpacityMaskSelector: string;

    constructor(selector: string, pageSelector: string, 
            {children=[], $content}: {children?: Component[], $content?: JQuery<HTMLElement>}) {
        super(selector);
        // Take content element from selector div's children or from the argument.
        this.children = children;
        $content ? this.$content = $content : this.$content = $(`#${this.selector}`).children();
        this.pageSelector = pageSelector;
        this.scrollableSelector = `${this.selector}-scrollable`;    // For the scrollable div encompassing the containers
        this.scrollChevronLeftSelector = `${this.selector}-scroll-chevron-left`;    // Chevron on the left
        this.scrollChevronRightSelector = `${this.selector}-scroll-chevron-right`;  // Chevron on the right
        this.scrollChevronOpacityMaskSelector = `${this.selector}-scroll-chevron-opacity-mask` // An outer div that controls opacity for chevrons

        this.lastVPosition = 0;

        this.xScrollPosition = 0;
        this.xScrollSpeed = 0;
        this.xMovementIntervalHandler = 0;
        this.xAccelerationIntervalHandler = 0;
        this.scrollChevronStateLeft = ScrollChevronState.BLANK;
        this.scrollChevronStateRight = ScrollChevronState.BLANK;
    }

    build = () => {}

    public onInitialBuildBeforeScrollIn(): void {
        const self = this;
        // 1) Make scrollable div with populated content
        const $scrollable = $(`<div class="x-scrollable" id="${self.scrollableSelector}">`)
            .append(self.getChildrenConstructedElements())
            .append(self.$content);
        $(`#${self.selector}`).append($scrollable);
        // 2) Get height of scrollable div
        var height = $(`#${self.scrollableSelector}`).outerHeight()!;
        if (Utility.determineDeviceType() === DeviceType.DESKTOP) {
            // 3) Recreate scrollable div, chevrons 
            // and additional whitespace w/ corrent heights
            $(`#${self.selector}`).empty();
            $scrollable.prepend(self.buildScrollChevrons(height));
            $scrollable.append(self.buildRightmostWhitespace());
            $(`#${self.selector}`).append($scrollable);
            // 4) Setup Mouse Scroll Events
            self.setXScrollMouseEvents();
            // 5) Make Chevrons to follow scroll
            self.setScrollChevronVPositionEventListeners();
        }
    }

    private buildScrollChevrons = (height: number) => {
        const self = this;
        const $scrollChevronLeft = $(`<div id="${self.scrollChevronLeftSelector}">`)
            .addClass('scroll-chevron-left')
            .css('height', `${height}px`);
        const $scrollChevronRight = $(`<div id="${self.scrollChevronRightSelector}">`)
            .addClass('scroll-chevron-right')
            .css('height', `${height}px`);
        const $scrollChevronOpacityMask = $(`<div id="${self.scrollChevronOpacityMaskSelector}">`)
            .append([$scrollChevronLeft, $scrollChevronRight]);
        return $scrollChevronOpacityMask;
    }

    private buildRightmostWhitespace = () => {
        // When div lacks the rightmost whitespace, this layer compensates.
        return $(`<div>`).addClass("x-scrollable-item x-scrollable-item-rightmost-whitespace");
    }

    private setXScrollMouseEvents = () => {
        const self = this;
        self.setXScrollMouseEvent(self.scrollChevronLeftSelector, ScrollDirection.LEFT);
        self.setXScrollMouseEvent(self.scrollChevronRightSelector, ScrollDirection.RIGHT);
    }

    private setXScrollMouseEvent =  (scrollChevronSelector: string, direction: ScrollDirection) => {
        // Attaches mouse event to only ONE scroll chevron.
        // Manages scroll animation's speed, acceleration and chevron's state of opacity.
        const self = this;
        // Update Chevron's state whenever scroll is triggered
        $(`#${self.scrollableSelector}`).on('scroll', function () {
            self.xScrollEdgeResponse(scrollChevronSelector, direction);
        })
        // Updates chevrons when window resizes
        $(window).on('resize', function() {
            self.updateScrollChevronVPositions();
            self.xScrollEdgeResponse(scrollChevronSelector, direction);
        });
        $(`#${scrollChevronSelector}`).on('mouseenter', function() {  // When mouse enters chevron
            clearInterval(self.xAccelerationIntervalHandler);
            // Set Chevron to Hovering state and animate
            self.customAnimation(scrollChevronSelector, ScrollChevronState.HOVERING, direction);
            if (direction === ScrollDirection.LEFT) {
                self.scrollChevronStateLeft = ScrollChevronState.HOVERING;
            } else if (direction === ScrollDirection.RIGHT) {
                self.scrollChevronStateRight = ScrollChevronState.HOVERING;
            }
            // Set scroll accel animation
            self.xMovementIntervalHandler = setInterval(function() {
                if (self.xScrollSpeed < AnimatedXScrollable.SCROLLABLE_MAX_DX) {
                    self.xScrollSpeed += 1;
                }
                if (direction === ScrollDirection.LEFT) {
                    self.xScrollPosition = $(`#${self.scrollableSelector}`).scrollLeft()! - self.xScrollSpeed;
                } else if (direction === ScrollDirection.RIGHT) {
                    self.xScrollPosition = $(`#${self.scrollableSelector}`).scrollLeft()! + self.xScrollSpeed;
                }
                $(`#${self.scrollableSelector}`).scrollLeft(self.xScrollPosition);
            }, 15);
        }).on('mouseleave', function() {    // When mouse leaves chevron
            clearInterval(self.xMovementIntervalHandler);
            // Set Chevron to Alone state
            if (direction === ScrollDirection.LEFT) {
                self.scrollChevronStateLeft = ScrollChevronState.BLANK;
            } else if (direction === ScrollDirection.RIGHT) {
                self.scrollChevronStateRight = ScrollChevronState.BLANK;
            }
            // Set scroll de-accel animation
            self.xAccelerationIntervalHandler = setInterval(function() {
                if (direction === ScrollDirection.LEFT) {
                    self.xScrollPosition = $(`#${self.scrollableSelector}`).scrollLeft()! - self.xScrollSpeed;
                } else if (direction === ScrollDirection.RIGHT) {
                    self.xScrollPosition = $(`#${self.scrollableSelector}`).scrollLeft()! + self.xScrollSpeed;
                }
                $(`#${self.scrollableSelector}`).scrollLeft(self.xScrollPosition);
    
                if (self.xScrollSpeed > 0) {
                    self.xScrollSpeed -= 1;
                }
            }, 15);
            self.xScrollEdgeResponse(scrollChevronSelector, direction);
        });
    }
    
    private customAnimation(scrollChevronSelector: string, newScrollChevronState: ScrollChevronState, direction: ScrollDirection) {
        if (direction === ScrollDirection.LEFT) {
            if (this.scrollChevronStateLeft != newScrollChevronState) {
                $(`#${scrollChevronSelector}`).stop();
                $(`#${scrollChevronSelector}`).animate(this.getScrollChevronStyleByState(newScrollChevronState), Constants.ANIMATION_DURATION_DEFAULT);
                this.scrollChevronStateLeft = newScrollChevronState;
            }
        } else if (direction === ScrollDirection.RIGHT) {
            if (this.scrollChevronStateRight != newScrollChevronState) {
                $(`#${scrollChevronSelector}`).stop();
                $(`#${scrollChevronSelector}`).animate(this.getScrollChevronStyleByState(newScrollChevronState), Constants.ANIMATION_DURATION_DEFAULT);
                this.scrollChevronStateRight = newScrollChevronState;
            }
        }
    }

    private xScrollEdgeResponse(scrollChevronSelector: string, direction: ScrollDirection) {
        const self = this;
        // Set Chevron's state to available/blank depending on whether the edge is reached on either side.
        if (direction == ScrollDirection.LEFT) {
            if ($(`#${self.scrollableSelector}`).scrollLeft() == (0)) {
                self.customAnimation(scrollChevronSelector, ScrollChevronState.BLANK, direction);
            } else if (self.scrollChevronStateLeft != ScrollChevronState.HOVERING) {
                self.customAnimation(scrollChevronSelector, ScrollChevronState.AVAILABLE, direction);
            } // Left Chevron edge detection
        } else if (direction == ScrollDirection.RIGHT) {
            if (Utility.isScrollToPosition(Math.round($(`#${self.scrollableSelector}`).scrollLeft()!), $(`#${self.scrollableSelector}`).prop('scrollWidth')! - $(`#${self.scrollableSelector}`).prop('clientWidth')!)) {
                self.customAnimation(scrollChevronSelector, ScrollChevronState.BLANK, direction);
            } else if (self.scrollChevronStateRight == ScrollChevronState.BLANK) {
                self.customAnimation(scrollChevronSelector, ScrollChevronState.AVAILABLE, direction);
            } // Right Chevron edge detection
        } 
    }

    private getScrollChevronStyleByState = (scrollChevronState: ScrollChevronState) : ScrollChevronStyle => {
        switch (scrollChevronState) {
            case ScrollChevronState.BLANK:
                return ScrollChevronBlankStyle;
            case ScrollChevronState.AVAILABLE:
                return ScrollChevronAvailableStyle;
            case ScrollChevronState.HOVERING:
                return ScrollChevronHoveringStyle;
        }
    }

    private setScrollChevronVPositionEventListeners = () => {
        const self = this;
        $(`#${this.pageSelector}`).on('scroll', function() {
            self.updateScrollChevronVPositions();
        });
    }

    public onScrollIn(): void {
        this.updateScrollChevronVPositions();
        this.setScrollChevronsToAppear();
    }

    public onScrollOut(): void {
        this.setScrollChevronsToDisappear();
    }

    private setScrollChevronsToAppear() {
        const self = this;
        self.xScrollEdgeResponse(self.scrollChevronLeftSelector, ScrollDirection.LEFT);
        self.xScrollEdgeResponse(self.scrollChevronRightSelector, ScrollDirection.RIGHT);
        $(`#${self.scrollChevronOpacityMaskSelector}`).animate({
            opacity: '1',
        }, Constants.ANIMATION_DURATION_DEFAULT);
    }

    private setScrollChevronsToDisappear() {
        const self = this;
        $(`#${self.scrollChevronOpacityMaskSelector}`).stop();
        $(`#${self.scrollChevronOpacityMaskSelector}`).css('opacity', '0');
    }

    private updateScrollChevronVPositions = () => {
        const self = this;
        // offset() is applicable for divs relative to the parents
        const scrollablePositions = $(`#${self.scrollableSelector}`).offset();
        var finalHeight = self.lastVPosition;
        if (scrollablePositions) {
            finalHeight = scrollablePositions.top;
            self.lastVPosition = finalHeight;
        }
        $(`#${self.scrollChevronLeftSelector}`).css('top', finalHeight);
        $(`#${self.scrollChevronRightSelector}`).css('top', finalHeight);
    }
}

export default AnimatedXScrollable;