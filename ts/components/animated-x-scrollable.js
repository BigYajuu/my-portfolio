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
                    ${self.buildScrollChevronLeft(height, self.scrollChevronLeftSelector)}
                    ${self.buildScrollChevronRight(height, self.scrollChevronRightSelector)}
                    ${self.content}
                </div>
                `);
                // 4) Setup Mouse Scroll Events
                self.setScrollMouseEvent(self.scrollChevronLeftSelector, self.scrollableSelector, ScrollDirection.LEFT);
                self.setScrollMouseEvent(self.scrollChevronRightSelector, self.scrollableSelector, ScrollDirection.RIGHT);
                // 5) Make Chevrons to follow scroll
                const invisibleTopPinSelector = `${self.page.getSelector()}-invisible-top-pin`;
                self.appendInvisibleTopPinDiv(self.page.getSelector(), invisibleTopPinSelector);
                self.setScrollChevronVPositionEventListeners();
            }
        };
        this.buildScrollChevronLeft = function (height, selector) {
            return `
                <div class="scroll-chevron-left" id="${selector}" style="height: ${height}px">
                    <i class="fa-solid fa-arrow-left fa-fade fa-3x" style="color: #000000"></i>
                </div>
                `;
        };
        this.buildScrollChevronRight = function (height, selector) {
            return `
                <div class="scroll-chevron-right" id="${selector}" style="height: ${height}px">
                    <i class="fa-solid fa-arrow-right fa-fade fa-3x" style="color: #000000"></i>
                </div>
                `;
        };
        this.appendInvisibleTopPinDiv = function (pageSelector, selector) {
            $(`#${pageSelector}`).append(`
            <div id="${selector}" style="position: fixed; top: 0; left: 0; z-index: 9999"></div>
            `);
        };
        this.setScrollMouseEvent = (scrollChevronSelector, scrollableSelector, direction) => {
            const self = this;
            var currentScrollAnimationStyle;
            function customAnimation(scrollChevronSelector, scrollChevronStyle) {
                if (currentScrollAnimationStyle != scrollChevronStyle) {
                    $(`#${scrollChevronSelector}`).stop();
                    $(`#${scrollChevronSelector}`).animate(scrollChevronStyle, 150);
                    currentScrollAnimationStyle = scrollChevronStyle;
                }
            }
            function scrollEdgeResponse() {
                // Set Chevron's state to available/blank depending on whether the edge is reached on either side.
                if (direction == ScrollDirection.RIGHT) {
                    if (Utility.isScrollToPosition(Math.round($(`#${scrollableSelector}`).scrollLeft()), $(`#${scrollableSelector}`).prop('scrollWidth') - $(`#${scrollableSelector}`).prop('clientWidth'))) {
                        customAnimation(scrollChevronSelector, ScrollChevronBlankStyle);
                    }
                    else if (self.xScrollChevronMouseStateRight == ScrollChevronMouseState.ALONE) {
                        customAnimation(scrollChevronSelector, ScrollChevronAvailableStyle);
                    } // Right Chevron edge detection
                }
                else if (direction == ScrollDirection.LEFT) {
                    if ($(`#${scrollableSelector}`).scrollLeft() == (0)) {
                        customAnimation(scrollChevronSelector, ScrollChevronBlankStyle);
                    }
                    else if (self.xScrollChevronMouseStateLeft == ScrollChevronMouseState.ALONE) {
                        customAnimation(scrollChevronSelector, ScrollChevronAvailableStyle);
                    } // Left Chevron edge detection
                }
            }
            // Set Chevron's initial state
            scrollEdgeResponse();
            // Update Chevron's state whenever scroll is triggered
            $(`#${scrollableSelector}`).scroll(function () {
                scrollEdgeResponse();
            });
            // Updates chevrons when window resizes
            $(window).on('resize', function () {
                scrollEdgeResponse();
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
                        self.xScrollPosition = $(`#${scrollableSelector}`).scrollLeft() - self.xScrollSpeed;
                    }
                    else if (direction === ScrollDirection.RIGHT) {
                        self.xScrollPosition = $(`#${scrollableSelector}`).scrollLeft() + self.xScrollSpeed;
                    }
                    $(`#${scrollableSelector}`).scrollLeft(self.xScrollPosition);
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
                        self.xScrollPosition = $(`#${scrollableSelector}`).scrollLeft() - self.xScrollSpeed;
                    }
                    else if (direction === ScrollDirection.RIGHT) {
                        self.xScrollPosition = $(`#${scrollableSelector}`).scrollLeft() + self.xScrollSpeed;
                    }
                    $(`#${scrollableSelector}`).scrollLeft(self.xScrollPosition);
                    if (self.xScrollSpeed > 0) {
                        self.xScrollSpeed -= 1;
                    }
                }, 15);
                scrollEdgeResponse();
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
            console.log(finalHeight);
            $(`#${self.scrollChevronLeftSelector}`).css('top', finalHeight);
            $(`#${self.scrollChevronRightSelector}`).css('top', finalHeight);
        };
        this.content = content;
        this.scrollableSelector = `${this.selector}-scrollable`; // For the scrollable div encompassing the containers
        this.scrollChevronLeftSelector = `${this.selector}-scroll-chevron-left`; // Chevron on the left
        this.scrollChevronRightSelector = `${this.selector}-scroll-chevron-right`; // Chevron on the right
        this.lastVPosition = 0;
        this.xScrollPosition = 0;
        this.xScrollSpeed = 0;
        this.xMovementIntervalHandler = 0;
        this.xAccelerationIntervalHandler = 0;
        this.xScrollChevronMouseStateLeft = ScrollChevronMouseState.ALONE;
        this.xScrollChevronMouseStateRight = ScrollChevronMouseState.ALONE;
    }
    discard() {
        throw new Error('Method not implemented.');
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
        $(`#${self.scrollChevronLeftSelector}`).css('visibility', 'visible');
        $(`#${self.scrollChevronRightSelector}`).css('visibility', 'visible');
    }
    setScrollChevronsToDisappear() {
        const self = this;
        $(`#${self.scrollChevronLeftSelector}`).css('visibility', 'hidden');
        $(`#${self.scrollChevronRightSelector}`).css('visibility', 'hidden');
    }
}
export default AnimatedXScrollable;
