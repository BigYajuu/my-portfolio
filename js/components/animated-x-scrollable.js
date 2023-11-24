import $ from "jquery";
import Component from '../engine/component.js';
import { Utility, DeviceType } from '../engine/utility.js';
import { Constants } from '../constants.js';
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
    width: '0%'
};
const ScrollChevronAvailableStyle = {
    opacity: '0.5',
    width: '15%'
};
const ScrollChevronHoveringStyle = {
    opacity: '1',
    width: '20%'
};
export class AnimatedXScrollable extends Component {
    constructor(content, selector, pageSelector) {
        super(selector);
        this.build = () => { };
        this.buildScrollChevrons = (height) => {
            const self = this;
            return `
                <div id="${self.scrollChevronOpacityMaskSelector}">
                    <div class="scroll-chevron-left" id="${self.scrollChevronLeftSelector}" style="height: ${height}px">
                        <i class="fa-solid fa-arrow-left fa-fade fa-3x" style="color: #000000"></i>
                    </div>
                    <div class="scroll-chevron-right" id="${self.scrollChevronRightSelector}" style="height: ${height}px">
                        <i class="fa-solid fa-arrow-right fa-fade fa-3x" style="color: #000000"></i>
                    </div>
                </div>
                `;
        };
        this.buildRightmostWhitespace = () => {
            // When div lacks the rightmost whitespace, this layer compensates.
            return `<div class="x-scrollable-item x-scrollable-item-rightmost-whitespace"></div>`;
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
                    if (self.xScrollSpeed < 12) {
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
            const scrollablePositions = $(`#${self.scrollableSelector}`).offset();
            var finalHeight = self.lastVPosition;
            if (scrollablePositions) {
                finalHeight = scrollablePositions.top;
                self.lastVPosition = finalHeight;
            }
            $(`#${self.scrollChevronLeftSelector}`).css('top', finalHeight);
            $(`#${self.scrollChevronRightSelector}`).css('top', finalHeight);
        };
        this.content = content;
        this.pageSelector = pageSelector;
        this.scrollableSelector = `${this.selector}-scrollable`; // For the scrollable div encompassing the containers
        this.scrollChevronLeftSelector = `${this.selector}-scroll-chevron-left`; // Chevron on the left
        this.scrollChevronRightSelector = `${this.selector}-scroll-chevron-right`; // Chevron on the right
        this.scrollChevronOpacityMaskSelector = `${this.selector}-scroll-chevron-opacity-mask`; // An outer div that controls opacity for chevrons
        this.lastVPosition = 0;
        this.xScrollPosition = 0;
        this.xScrollSpeed = 0;
        this.xMovementIntervalHandler = 0;
        this.xAccelerationIntervalHandler = 0;
        this.scrollChevronStateLeft = ScrollChevronState.BLANK;
        this.scrollChevronStateRight = ScrollChevronState.BLANK;
    }
    onInitialBuildBeforeScrollIn() {
        const self = this;
        var height;
        // 1) Make scrollable div with populated content
        $(`#${self.selector}`).html(`
            <div class="x-scrollable">
                ${self.content}
            </div>
            `);
        // 2) Get height of scrollable div
        height = $(`#${self.selector}`).outerHeight();
        if (Utility.determineDeviceType() === DeviceType.DESKTOP) {
            // 3) Recreate scrollable div and chevrons w/ corrent heights
            $(`#${self.selector}`).html(`
                <div class="x-scrollable" id="${self.scrollableSelector}">
                    ${self.buildScrollChevrons(height)}
                    ${self.content}
                    ${self.buildRightmostWhitespace()}
                </div>
                `);
            // 4) Setup Mouse Scroll Events
            self.setXScrollMouseEvents();
            // 5) Make Chevrons to follow scroll
            self.setScrollChevronVPositionEventListeners();
        }
    }
    customAnimation(scrollChevronSelector, newScrollChevronState, direction) {
        if (direction === ScrollDirection.LEFT) {
            if (this.scrollChevronStateLeft != newScrollChevronState) {
                $(`#${scrollChevronSelector}`).stop();
                $(`#${scrollChevronSelector}`).animate(this.getScrollChevronStyleByState(newScrollChevronState), Constants.ANIMATION_DURATION_DEFAULT);
                this.scrollChevronStateLeft = newScrollChevronState;
            }
        }
        else if (direction === ScrollDirection.RIGHT) {
            if (this.scrollChevronStateRight != newScrollChevronState) {
                $(`#${scrollChevronSelector}`).stop();
                $(`#${scrollChevronSelector}`).animate(this.getScrollChevronStyleByState(newScrollChevronState), Constants.ANIMATION_DURATION_DEFAULT);
                this.scrollChevronStateRight = newScrollChevronState;
            }
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
export default AnimatedXScrollable;