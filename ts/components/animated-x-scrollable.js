import Component from '../engine/component.js';
import { Utility, DeviceType } from '../utility.js';
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
            var currentScrollAnimationStyle;
            function customAnimation(scrollChevronSelector, scrollChevronStyle) {
                if (currentScrollAnimationStyle != scrollChevronStyle) {
                    $(`#${scrollChevronSelector}`).stop();
                    $(`#${scrollChevronSelector}`).animate(scrollChevronStyle, 150);
                    currentScrollAnimationStyle = scrollChevronStyle;
                }
            }
            function xScrollEdgeResponse() {
                // Set Chevron's state to available/blank depending on whether the edge is reached on either side.
                if (direction == ScrollDirection.RIGHT) {
                    if (Utility.isScrollToPosition(Math.round($(`#${self.scrollableSelector}`).scrollLeft()), $(`#${self.scrollableSelector}`).prop('scrollWidth') - $(`#${self.scrollableSelector}`).prop('clientWidth'))) {
                        customAnimation(scrollChevronSelector, ScrollChevronBlankStyle);
                    }
                    else if (self.xScrollChevronMouseStateRight == ScrollChevronMouseState.ALONE) {
                        customAnimation(scrollChevronSelector, ScrollChevronAvailableStyle);
                    } // Right Chevron edge detection
                }
                else if (direction == ScrollDirection.LEFT) {
                    if ($(`#${self.scrollableSelector}`).scrollLeft() == (0)) {
                        customAnimation(scrollChevronSelector, ScrollChevronBlankStyle);
                    }
                    else if (self.xScrollChevronMouseStateLeft == ScrollChevronMouseState.ALONE) {
                        customAnimation(scrollChevronSelector, ScrollChevronAvailableStyle);
                    } // Left Chevron edge detection
                }
            }
            // Set Chevron's initial state
            xScrollEdgeResponse();
            // Update Chevron's state whenever scroll is triggered
            $(`#${self.scrollableSelector}`).scroll(function () {
                xScrollEdgeResponse();
            });
            // Updates chevrons when window resizes
            $(window).on('resize', function () {
                xScrollEdgeResponse();
            });
            $(`#${scrollChevronSelector}`).on('mouseenter', function () {
                clearInterval(self.xAccelerationIntervalHandler);
                // Set Chevron to Hovering state and animate
                customAnimation(scrollChevronSelector, ScrollChevronHoveringStyle);
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
                xScrollEdgeResponse();
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
    setFixedItemsToAppear() {
        this.updateScrollChevronVPositions();
        this.setScrollChevronsToAppear();
    }
    setFixedItemsToDissapear() {
        this.setScrollChevronsToDisappear();
    }
    setScrollChevronsToAppear() {
        const self = this;
        $(`#${self.scrollChevronOpacityMaskSelector}`).css('visibility', 'visible');
    }
    setScrollChevronsToDisappear() {
        const self = this;
        $(`#${self.scrollChevronOpacityMaskSelector}`).css('visibility', 'hidden');
    }
}
export default AnimatedXScrollable;
