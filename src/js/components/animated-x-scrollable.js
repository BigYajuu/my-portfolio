import $ from "jquery";
import Component from '../engine/component.js';
import { Utility, DeviceType } from '../engine/utility.js';
import { Constants } from '../static/constants.js';
import { icon } from "@fortawesome/fontawesome-svg-core";
var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection["LEFT"] = "left";
    ScrollDirection["RIGHT"] = "right";
})(ScrollDirection || (ScrollDirection = {}));
var ScrollChevronState;
(function (ScrollChevronState) {
    ScrollChevronState["BLANK"] = "blank";
    ScrollChevronState["AVAILABLE"] = "available";
    ScrollChevronState["HOVERING"] = "hovering";
})(ScrollChevronState || (ScrollChevronState = {}));
const ScrollChevronBlankStyle = {
    opacity: '0',
    width: '0%',
};
const ScrollChevronAvailableStyle = {
    opacity: '0.5',
    width: '15%',
};
const ScrollChevronHoveringStyle = {
    opacity: '1',
    width: '20%',
};
export class AnimatedXScrollable extends Component {
    constructor(selector, pageSelector, { children = [], $content }) {
        super(selector);
        this.scrollableSelector = `${this.selector}-scrollable`; // For the scrollable div encompassing the containers
        this.scrollChevronLeftSelector = `${this.selector}-scroll-chevron-left`; // Chevron on the left
        this.scrollChevronRightSelector = `${this.selector}-scroll-chevron-right`; // Chevron on the right
        this.scrollChevronOpacityMaskSelector = `${this.selector}-scroll-chevron-opacity-mask`; // An outer div that controls opacity for chevrons;
        this.lastVPosition = 0;
        this.xScrollPosition = 0;
        this.xScrollSpeed = 0;
        this.scrollChevronStateLeft = ScrollChevronState.BLANK;
        this.scrollChevronStateRight = ScrollChevronState.BLANK;
        this.buildScrollChevrons = (height) => {
            const self = this;
            const scrollLeftIcon = icon({ prefix: 'far', iconName: 'circle-left' });
            const scrollRightIcon = icon({ prefix: 'far', iconName: 'circle-right' });
            const $scrollChevronLeft = $(`<div id="${self.scrollChevronLeftSelector}">`)
                .addClass('scroll-chevron-left')
                .css('height', `${height}px`)
                .append(scrollLeftIcon.node[0]);
            const $scrollChevronRight = $(`<div id="${self.scrollChevronRightSelector}">`)
                .addClass('scroll-chevron-right')
                .css('height', `${height}px`)
                .append(scrollRightIcon.node[0]);
            this.updateScrollChevronsHeight();
            const $scrollChevronOpacityMask = $(`<div id="${self.scrollChevronOpacityMaskSelector}">`)
                .append([$scrollChevronLeft, $scrollChevronRight]);
            return $scrollChevronOpacityMask;
        };
        this.setXScrollMouseEvents = () => {
            const self = this;
            self.setXScrollMouseEvent(self.scrollChevronLeftSelector, ScrollDirection.LEFT);
            self.setXScrollMouseEvent(self.scrollChevronRightSelector, ScrollDirection.RIGHT);
        };
        this.setXScrollMouseEvent = (scrollChevronSelector, direction) => {
            // Attaches mouse event to only ONE scroll chevron.
            // Manages scroll animation's speed, acceleration and chevron's state of opacity.
            const self = this;
            // Update Chevron's state whenever scroll is triggered
            $(`#${self.scrollableSelector}`).on('scroll', function () {
                self.xScrollEdgeResponse(scrollChevronSelector, direction);
            });
            // Updates chevrons when window resizes
            $(window).on('resize', function () {
                self.updateScrollChevronVPositions();
                self.updateScrollChevronsHeight();
                self.xScrollEdgeResponse(scrollChevronSelector, direction);
            });
            $(`#${scrollChevronSelector}`).on('mouseenter', function () {
                clearInterval(self.xAccelerationIntervalHandler);
                // Set Chevron to Hovering state and animate
                self.customAnimation(scrollChevronSelector, ScrollChevronState.HOVERING, direction);
                if (direction === ScrollDirection.LEFT) {
                    self.scrollChevronStateLeft = ScrollChevronState.HOVERING;
                }
                else if (direction === ScrollDirection.RIGHT) {
                    self.scrollChevronStateRight = ScrollChevronState.HOVERING;
                }
                // Set scroll accel animation
                self.xMovementIntervalHandler = setInterval(function () {
                    if (self.xScrollSpeed < AnimatedXScrollable.SCROLLABLE_MAX_DX) {
                        self.xScrollSpeed += 1;
                    }
                    if (direction === ScrollDirection.LEFT) {
                        self.xScrollPosition = $(`#${self.scrollableSelector}`).scrollLeft() - self.xScrollSpeed;
                    }
                    else if (direction === ScrollDirection.RIGHT) {
                        self.xScrollPosition = $(`#${self.scrollableSelector}`).scrollLeft() + self.xScrollSpeed;
                    }
                    $(`#${self.scrollableSelector}`).scrollLeft(self.xScrollPosition);
                }, 15);
            }).on('mouseleave', function () {
                clearInterval(self.xMovementIntervalHandler);
                // Set Chevron to Alone state
                if (direction === ScrollDirection.LEFT) {
                    self.scrollChevronStateLeft = ScrollChevronState.BLANK;
                }
                else if (direction === ScrollDirection.RIGHT) {
                    self.scrollChevronStateRight = ScrollChevronState.BLANK;
                }
                // Set scroll de-accel animation
                self.xAccelerationIntervalHandler = setInterval(function () {
                    if (direction === ScrollDirection.LEFT) {
                        self.xScrollPosition = $(`#${self.scrollableSelector}`).scrollLeft() - self.xScrollSpeed;
                    }
                    else if (direction === ScrollDirection.RIGHT) {
                        self.xScrollPosition = $(`#${self.scrollableSelector}`).scrollLeft() + self.xScrollSpeed;
                    }
                    $(`#${self.scrollableSelector}`).scrollLeft(self.xScrollPosition);
                    if (self.xScrollSpeed > 0) {
                        self.xScrollSpeed -= 1;
                    }
                }, 15);
                self.xScrollEdgeResponse(scrollChevronSelector, direction);
            });
        };
        this.getScrollChevronStyleByState = (scrollChevronState) => {
            switch (scrollChevronState) {
                case ScrollChevronState.BLANK:
                    return ScrollChevronBlankStyle;
                case ScrollChevronState.AVAILABLE:
                    return ScrollChevronAvailableStyle;
                case ScrollChevronState.HOVERING:
                    return ScrollChevronHoveringStyle;
            }
        };
        this.setScrollChevronVPositionEventListeners = () => {
            const self = this;
            $(`#${this.pageSelector}`).on('scroll', function () {
                self.updateScrollChevronVPositions();
            });
        };
        this.updateScrollChevronVPositions = () => {
            const self = this;
            // offset() is applicable for divs relative to the parents
            const scrollablePositions = $(`#${self.scrollableSelector}`).position();
            var finalHeight = self.lastVPosition;
            if (scrollablePositions) {
                finalHeight = scrollablePositions.top;
                self.lastVPosition = finalHeight;
            }
            $(`#${self.scrollChevronLeftSelector}`).css('top', finalHeight);
            $(`#${self.scrollChevronRightSelector}`).css('top', finalHeight);
        };
        const self = this;
        // Take content element from selector div's children or from the argument.
        this.children = children;
        $content ? this.$content = $content : this.$content = $(`#${this.selector}`).children();
        this.pageSelector = pageSelector;
        // Define constructed element.
        this.$constructedElement = $(`<div class="x-scrollable" id="${self.scrollableSelector}">`)
            .append(self.getChildrenConstructedElements())
            .append(self.$content);
    }
    onAttachBeforeScrollIn() {
        const self = this;
        if (!self.$constructedElement) {
            return;
        }
        if (Utility.determineDeviceType() === DeviceType.DESKTOP) {
            // 3) Regenerate scrollable content and chevrons 
            self.$constructedElement.prepend(self.buildScrollChevrons(self.getConstructedElementHeight()));
            $(`#${self.selector}`).replaceWith(self.$constructedElement);
            // 4) Setup Mouse Scroll Events
            self.setXScrollMouseEvents();
            // 5) Make Chevrons to follow scroll
            self.setScrollChevronVPositionEventListeners();
        }
        else {
            $(`#${self.selector}`).replaceWith(self.$constructedElement);
        }
    }
    ;
    attach() { }
    ;
    attachExternally() {
        // This method is called from context other than page initialization.
        // And extra pre-processings will be conducted.
        this.onAttachBeforeScrollIn();
        this.$constructedElement?.css({
            'padding': '0',
            'margin': '0',
        });
        this.setScrollChevronsToAppear();
    }
    updateScrollChevronsHeight() {
        const self = this;
        const height = this.getConstructedElementHeight();
        $(`#${self.scrollChevronLeftSelector}`).css('height', `${height}px`);
        $(`#${self.scrollChevronRightSelector}`).css('height', `${height}px`);
    }
    customAnimation(scrollChevronSelector, newScrollChevronState, direction) {
        const newStyle = this.getScrollChevronStyleByState(newScrollChevronState);
        if (direction === ScrollDirection.LEFT) {
            if (this.scrollChevronStateLeft != newScrollChevronState) {
                $(`#${scrollChevronSelector}`).stop();
                $(`#${scrollChevronSelector}`).animate(newStyle, Constants.ANIMATION_DURATION_DEFAULT);
                this.scrollChevronStateLeft = newScrollChevronState;
            }
        }
        else if (direction === ScrollDirection.RIGHT) {
            if (this.scrollChevronStateRight != newScrollChevronState) {
                $(`#${scrollChevronSelector}`).stop();
                $(`#${scrollChevronSelector}`).animate(newStyle, Constants.ANIMATION_DURATION_DEFAULT);
                this.scrollChevronStateRight = newScrollChevronState;
            }
        }
        if (newStyle === ScrollChevronBlankStyle) {
            $(`#${scrollChevronSelector}`).css('pointer-events', 'none');
        }
        else {
            $(`#${scrollChevronSelector}`).css('pointer-events', 'auto');
        }
    }
    xScrollEdgeResponse(scrollChevronSelector, direction) {
        const self = this;
        // Set Chevron's state to available/blank depending on whether the edge is reached on either side.
        if (direction == ScrollDirection.LEFT) {
            if ($(`#${self.scrollableSelector}`).scrollLeft() == (0)) {
                self.customAnimation(scrollChevronSelector, ScrollChevronState.BLANK, direction);
            }
            else if (self.scrollChevronStateLeft != ScrollChevronState.HOVERING) {
                self.customAnimation(scrollChevronSelector, ScrollChevronState.AVAILABLE, direction);
            } // Left Chevron edge detection
        }
        else if (direction == ScrollDirection.RIGHT) {
            if (Utility.isScrollToPosition(Math.round($(`#${self.scrollableSelector}`).scrollLeft()), $(`#${self.scrollableSelector}`).prop('scrollWidth') - $(`#${self.scrollableSelector}`).prop('clientWidth'))) {
                self.customAnimation(scrollChevronSelector, ScrollChevronState.BLANK, direction);
            }
            else if (self.scrollChevronStateRight == ScrollChevronState.BLANK) {
                self.customAnimation(scrollChevronSelector, ScrollChevronState.AVAILABLE, direction);
            } // Right Chevron edge detection
        }
    }
    getConstructedElementHeight() {
        // This method appends the constructed element temporarily to the body,
        // reads the height, and removes the element.
        const self = this;
        if (self.$constructedElement) {
            $(`body`).append(self.$constructedElement);
            const height = self.$constructedElement.outerHeight();
            self.$constructedElement.remove();
            return height;
        }
        else {
            return 0;
        }
    }
    onScrollIn() {
        this.updateScrollChevronVPositions();
        this.setScrollChevronsToAppear();
    }
    onScrollOut() {
        this.setScrollChevronsToDisappear();
    }
    setScrollChevronsToAppear() {
        const self = this;
        self.xScrollEdgeResponse(self.scrollChevronLeftSelector, ScrollDirection.LEFT);
        self.xScrollEdgeResponse(self.scrollChevronRightSelector, ScrollDirection.RIGHT);
        $(`#${self.scrollChevronOpacityMaskSelector}`).animate({
            opacity: '1',
        }, Constants.ANIMATION_DURATION_DEFAULT);
    }
    setScrollChevronsToDisappear() {
        const self = this;
        $(`#${self.scrollChevronOpacityMaskSelector}`).stop();
        $(`#${self.scrollChevronOpacityMaskSelector}`).css('opacity', '0');
    }
}
AnimatedXScrollable.SCROLLABLE_MAX_DX = 12;
export default AnimatedXScrollable;
