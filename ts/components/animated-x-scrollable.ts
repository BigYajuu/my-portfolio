import {Utility, DeviceType} from '../utility.js';

enum ScrollDirection {
    LEFT = 'left',
    RIGHT = 'right'
}

enum ScrollChevronMouseState {
    ALONE = 'alone',
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

export class AnimatedXScrollable {
    private scrollPosition: number;
    private scrollSpeed: number;
    private movementIntervalHandler: number;
    private accelerationIntervalHandler: number;
    private scrollChevronMouseStateLeft: ScrollChevronMouseState;
    private scrollChevronMouseStateRight: ScrollChevronMouseState;

    constructor() {
        this.scrollPosition = 0;
        this.scrollSpeed = 0;
        this.movementIntervalHandler = 0;
        this.accelerationIntervalHandler = 0;
        this.scrollChevronMouseStateLeft = ScrollChevronMouseState.ALONE;
        this.scrollChevronMouseStateRight = ScrollChevronMouseState.ALONE;
    }

    build =  (selector: string, pageSelector: string, content: string) => {
        let height: number;
        let self = this;
        $(document).ready(function() {
            // 1) Make scrollable div with populated content
            $(`#${selector}`).html(
                `
                <div class="row x-scrollable">
                    ${content}
                </div>
                `
            );
            // 2) Get height of scrollable div
            height = $(`#${selector}`).outerHeight()!;
            if (Utility.determineDeviceType() === DeviceType.DESKTOP) {
                // 3) Recreate scrollable div and chevrons w/ corrent heights
                let scrollableID = `${selector}-scrollable` // For the scrollable div encompassing the containers
                let scrollChevronLeftID = `${selector}-scroll-chevron-left` // Chevron on the left
                let scrollChevronRightID = `${selector}-scroll-chevron-right`   // Chevron on the right
                $(`#${selector}`).html(
                    `
                    <div class="row x-scrollable" id="${scrollableID}">
                        ${self._buildScrollChevronLeft(height, scrollChevronLeftID)}
                        ${self._buildScrollChevronRight(height, scrollChevronRightID)}
                        ${content}
                    </div>
                    `
                );
                // 4) Setup Mouse Scroll Events
                self._setupScrollMouseEvent(scrollChevronLeftID, scrollableID, ScrollDirection.LEFT);
                self._setupScrollMouseEvent(scrollChevronRightID, scrollableID, ScrollDirection.RIGHT);
                self._updateTopPosition(scrollChevronLeftID, pageSelector, $(`#${scrollChevronLeftID}`).position().top);
                self._updateTopPosition(scrollChevronRightID, pageSelector, $(`#${scrollChevronRightID}`).position().top);
            }
        });
    }

    private _buildScrollChevronLeft = function (height: number, id: string) {
        return `
                <div class="scroll-chevron-left" id="${id}" style="height: ${height}px">
                    <i class="fa-solid fa-arrow-left fa-fade fa-3x" style="color: #000000"></i>
                </div>
                `;
    }

    private _buildScrollChevronRight = function (height: number, id: string) {
        return `
                <div class="scroll-chevron-right" id="${id}" style="height: ${height}px">
                    <i class="fa-solid fa-arrow-right fa-fade fa-3x" style="color: #000000"></i>
                </div>
                `;
    }

    private _setupScrollMouseEvent =  (scrollChevronID: string, scrollableID: string, direction: ScrollDirection) => {
        let self = this;
        let currentScrollAnimationStyle: ScrollChevronStyle;
        function customAnimation(scrollChevronID: string, scrollChevronStyle: ScrollChevronStyle) {
            if (currentScrollAnimationStyle != scrollChevronStyle) {
                $(`#${scrollChevronID}`).stop();
                $(`#${scrollChevronID}`).animate(scrollChevronStyle, 150);
                currentScrollAnimationStyle = scrollChevronStyle;
            }
        }
        function scrollEdgeResponse() {
            // Set Chevron's state to available/blank depending on whether the edge is reached on either side.
            if (direction == ScrollDirection.RIGHT) {
                if (Utility.isScrollToPosition(Math.round($(`#${scrollableID}`).scrollLeft()!), $(`#${scrollableID}`).prop('scrollWidth')! - $(`#${scrollableID}`).prop('clientWidth')!)) {
                    customAnimation(scrollChevronID, ScrollChevronBlankStyle);
                } else if (self.scrollChevronMouseStateRight == ScrollChevronMouseState.ALONE) {
                    customAnimation(scrollChevronID, ScrollChevronAvailableStyle);
                } // Right Chevron edge detection
            } else if (direction == ScrollDirection.LEFT) {
                if ($(`#${scrollableID}`).scrollLeft() == (0)) {
                    customAnimation(scrollChevronID, ScrollChevronBlankStyle);
                } else if (self.scrollChevronMouseStateLeft == ScrollChevronMouseState.ALONE) {
                    customAnimation(scrollChevronID, ScrollChevronAvailableStyle);
                } // Left Chevron edge detection
            }
        }
        // Set Chevron's initial state
        scrollEdgeResponse();
        // Update Chevron's state whenever scroll is triggered
        $(`#${scrollableID}`).scroll(function () {
            scrollEdgeResponse();
        })
        // Updates chevrons when window resizes
        $(window).on('resize', function() {
            scrollEdgeResponse();
        });
        $(`#${scrollChevronID}`).on('mouseenter', function() {  // When mouse enters chevron
            clearInterval(self.accelerationIntervalHandler);
            // Set Chevron to Hovering state and animate
            customAnimation(scrollChevronID, ScrollChevronHoveringStyle);
            if (direction === ScrollDirection.LEFT) {
                self.scrollChevronMouseStateLeft = ScrollChevronMouseState.HOVERING;
            } else if (direction === ScrollDirection.RIGHT) {
                self.scrollChevronMouseStateRight = ScrollChevronMouseState.HOVERING;
            }
            // Set scroll accel animation
            self.movementIntervalHandler = setInterval(function() {
                if (self.scrollSpeed < 12) {
                    self.scrollSpeed += 1;
                }
                if (direction === ScrollDirection.LEFT) {
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft()! - self.scrollSpeed;
                } else if (direction === ScrollDirection.RIGHT) {
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft()! + self.scrollSpeed;
                }
                $(`#${scrollableID}`).scrollLeft(self.scrollPosition);
            }, 15);
        }).on('mouseleave', function() {    // When mouse leaves chevron
            clearInterval(self.movementIntervalHandler);
            // Set Chevron to Alone state
            if (direction === ScrollDirection.LEFT) {
                self.scrollChevronMouseStateLeft = ScrollChevronMouseState.ALONE;
            } else if (direction === ScrollDirection.RIGHT) {
                self.scrollChevronMouseStateRight = ScrollChevronMouseState.ALONE;
            }
            // Set scroll de-accel animation
            self.accelerationIntervalHandler = setInterval(function() {
                if (direction === ScrollDirection.LEFT) {
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft()! - self.scrollSpeed;
                } else if (direction === ScrollDirection.RIGHT) {
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft()! + self.scrollSpeed;
                }
                $(`#${scrollableID}`).scrollLeft(self.scrollPosition);
    
                if (self.scrollSpeed > 0) {
                    self.scrollSpeed -= 1;
                }
            }, 15);
            scrollEdgeResponse();
        });
    }

    private _updateTopPosition = function (selector: string, pageSelector: string, topPosition: number) {
        const pageDiv = document.getElementById(pageSelector)!;
        pageDiv.addEventListener('scroll', function() {
            console.log(topPosition - pageDiv.scrollTop);
            $(`#${selector}`).css('top', topPosition - pageDiv.scrollTop);
        });
    }
}

export default AnimatedXScrollable;