import Component from '../engine/component.js';
import { Utility, DeviceType } from '../utility.js';
import { Constants } from '../constants.js';
var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection["LEFT"] = "left";
    ScrollDirection["RIGHT"] = "right";
})(ScrollDirection || (ScrollDirection = {}));
var ScrollChevronMouseState;
(function (ScrollChevronMouseState) {
    ScrollChevronMouseState["ALONE"] = "alone";
    ScrollChevronMouseState["HOVERING"] = "hovering";
})(ScrollChevronMouseState || (ScrollChevronMouseState = {}));
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
    constructor(content, selector, page, pageManagement) {
        super(selector, page, pageManagement);
        this.build = () => {
            const self = this;
            var height;
            // 1) Make scrollable div with populated content
            $(`#${self.selector}`).html(`
            <div class="row x-scrollable">
                ${self.content}
            </div>
            `);
            // 2) Get height of scrollable div
            height = $(`#${self.selector}`).outerHeight();
            if (Utility.determineDeviceType() === DeviceType.DESKTOP) {
                // 3) Recreate scrollable div and chevrons w/ corrent heights
                $(`#${self.selector}`).html(`
                <div class="row x-scrollable" id="${self.scrollableSelector}">
                    ${self.buildScrollChevrons(height)}
                    ${self.content}
                </div>
                `);
                // 4) Setup Mouse Scroll Events
                self.setXScrollMouseEvents();
                // 5) Make Chevrons to follow scroll
                const invisibleTopPinSelector = `${self.page.getSelector()}-invisible-top-pin`;
                self.appendInvisibleTopPinDiv(self.page.getSelector(), invisibleTopPinSelector);
                self.setScrollChevronVPositionEventListeners();
            }
        };
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
        this.appendInvisibleTopPinDiv = function (pageSelector, selector) {
            $(`#${pageSelector}`).append(`
            <div id="${selector}" style="position: fixed; top: 0; left: 0; z-index: 9999"></div>
            `);
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
            var currentScrollAnimationStyle = ScrollChevronBlankStyle;
            // Set Chevron's initial state
            currentScrollAnimationStyle = self.xScrollEdgeResponse(scrollChevronSelector, direction);
            // Update Chevron's state whenever scroll is triggered
            $(`#${self.scrollableSelector}`).on('scroll', function () {
                currentScrollAnimationStyle = self.xScrollEdgeResponse(scrollChevronSelector, direction, currentScrollAnimationStyle);
            });
            // Updates chevrons when window resizes
            $(window).on('resize', function () {
                currentScrollAnimationStyle = self.xScrollEdgeResponse(scrollChevronSelector, direction, currentScrollAnimationStyle);
            });
            $(`#${scrollChevronSelector}`).on('mouseenter', function () {
                clearInterval(self.xAccelerationIntervalHandler);
                // Set Chevron to Hovering state and animate
                console.log(currentScrollAnimationStyle === null || currentScrollAnimationStyle === void 0 ? void 0 : currentScrollAnimationStyle.opacity);
                currentScrollAnimationStyle = self.customAnimation(scrollChevronSelector, ScrollChevronHoveringStyle, currentScrollAnimationStyle);
                if (direction === ScrollDirection.LEFT) {
                    self.xScrollChevronMouseStateLeft = ScrollChevronMouseState.HOVERING;
                }
                else if (direction === ScrollDirection.RIGHT) {
                    self.xScrollChevronMouseStateRight = ScrollChevronMouseState.HOVERING;
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
                    self.xScrollChevronMouseStateLeft = ScrollChevronMouseState.ALONE;
                }
                else if (direction === ScrollDirection.RIGHT) {
                    self.xScrollChevronMouseStateRight = ScrollChevronMouseState.ALONE;
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
                currentScrollAnimationStyle = self.xScrollEdgeResponse(scrollChevronSelector, direction, currentScrollAnimationStyle);
            });
        };
        this.setScrollChevronVPositionEventListeners = () => {
            const self = this;
            $(`#${self.page.getSelector()}`).on('scroll', function () {
                self.updateScrollChevronVPositions();
            });
        };
        this.updateScrollChevronVPositions = () => {
            const self = this;
            const scrollableHeight = $(`#${self.scrollableSelector}`).position();
            var finalHeight = self.lastVPosition;
            if (scrollableHeight) {
                finalHeight = scrollableHeight.top;
                self.lastVPosition = finalHeight;
            }
            $(`#${self.scrollChevronLeftSelector}`).css('top', finalHeight);
            $(`#${self.scrollChevronRightSelector}`).css('top', finalHeight);
        };
        this.content = content;
        this.scrollableSelector = `${this.selector}-scrollable`; // For the scrollable div encompassing the containers
        this.scrollChevronLeftSelector = `${this.selector}-scroll-chevron-left`; // Chevron on the left
        this.scrollChevronRightSelector = `${this.selector}-scroll-chevron-right`; // Chevron on the right
        this.scrollChevronOpacityMaskSelector = `${this.selector}-scroll-chevron-opacity-mask`; // An outer div that controls opacity for chevrons
        this.lastVPosition = 0;
        this.xScrollPosition = 0;
        this.xScrollSpeed = 0;
        this.xMovementIntervalHandler = 0;
        this.xAccelerationIntervalHandler = 0;
        this.xScrollChevronMouseStateLeft = ScrollChevronMouseState.ALONE;
        this.xScrollChevronMouseStateRight = ScrollChevronMouseState.ALONE;
    }
    customAnimation(scrollChevronSelector, scrollChevronStyle, currentScrollAnimationStyle) {
        console.log(`Animate ${scrollChevronSelector} ${currentScrollAnimationStyle === null || currentScrollAnimationStyle === void 0 ? void 0 : currentScrollAnimationStyle.opacity}->${scrollChevronStyle.opacity}`);
        if (currentScrollAnimationStyle == undefined || currentScrollAnimationStyle != scrollChevronStyle) {
            $(`#${scrollChevronSelector}`).stop();
            $(`#${scrollChevronSelector}`).animate(scrollChevronStyle, Constants.DEFAULT_ANIMATION_DURATION);
            currentScrollAnimationStyle = scrollChevronStyle;
        }
        return currentScrollAnimationStyle;
    }
    xScrollEdgeResponse(scrollChevronSelector, direction, currentScrollAnimationStyle) {
        const self = this;
        var updatedScrollAnimationStyle = currentScrollAnimationStyle;
        // Set Chevron's state to available/blank depending on whether the edge is reached on either side.
        if (direction == ScrollDirection.LEFT) {
            if ($(`#${self.scrollableSelector}`).scrollLeft() == (0)) {
                // console.log(`LEFTEDGE ${currentScrollAnimationStyle?.opacity} ${`#${self.xScrollChevronMouseStateLeft}`}`);
                updatedScrollAnimationStyle = self.customAnimation(scrollChevronSelector, ScrollChevronBlankStyle, currentScrollAnimationStyle);
            }
            else if (self.xScrollChevronMouseStateLeft != ScrollChevronMouseState.HOVERING) {
                console.log(`MIDDLE ${currentScrollAnimationStyle === null || currentScrollAnimationStyle === void 0 ? void 0 : currentScrollAnimationStyle.opacity} ${`#${self.xScrollChevronMouseStateLeft}`}`);
                updatedScrollAnimationStyle = self.customAnimation(scrollChevronSelector, ScrollChevronAvailableStyle, currentScrollAnimationStyle);
            } // Left Chevron edge detection
        }
        else if (direction == ScrollDirection.RIGHT) {
            if (Utility.isScrollToPosition(Math.round($(`#${self.scrollableSelector}`).scrollLeft()), $(`#${self.scrollableSelector}`).prop('scrollWidth') - $(`#${self.scrollableSelector}`).prop('clientWidth'))) {
                updatedScrollAnimationStyle = self.customAnimation(scrollChevronSelector, ScrollChevronBlankStyle, currentScrollAnimationStyle);
            }
            else if (self.xScrollChevronMouseStateRight == ScrollChevronMouseState.ALONE) {
                updatedScrollAnimationStyle = self.customAnimation(scrollChevronSelector, ScrollChevronAvailableStyle, currentScrollAnimationStyle);
            } // Right Chevron edge detection
        }
        return updatedScrollAnimationStyle;
    }
    setFixedItemsToAppear() {
        this.updateScrollChevronVPositions();
        this.setScrollChevronsToAppear();
    }
    setFixedItemsToDissapear() {
        this.setScrollChevronsToDisappear();
    }
    setScrollChevronsToAppear() {
        const self = this;
        self.xScrollEdgeResponse(self.scrollChevronLeftSelector, ScrollDirection.LEFT);
        self.xScrollEdgeResponse(self.scrollChevronRightSelector, ScrollDirection.RIGHT);
        $(`#${self.scrollChevronOpacityMaskSelector}`).animate({
            opacity: '1',
        }, Constants.DEFAULT_ANIMATION_DURATION);
    }
    setScrollChevronsToDisappear() {
        const self = this;
        $(`#${self.scrollChevronOpacityMaskSelector}`).css('opacity', '0');
    }
}
export default AnimatedXScrollable;
