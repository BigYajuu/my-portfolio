import PageManagement from '../engine/page-management.js';
import Component from '../engine/component.js';
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

export class AnimatedXScrollable extends Component {
    
    private content: string;

    private scrollPosition: number;
    private scrollSpeed: number;
    private movementIntervalHandler: number;
    private accelerationIntervalHandler: number;
    private scrollChevronMouseStateLeft: ScrollChevronMouseState;
    private scrollChevronMouseStateRight: ScrollChevronMouseState;


    constructor(content: string, selector: string, pageSelector: string, pageManagement: PageManagement) {
        super(selector, pageSelector, pageManagement);
        this.content = content;

        this.scrollPosition = 0;
        this.scrollSpeed = 0;
        this.movementIntervalHandler = 0;
        this.accelerationIntervalHandler = 0;
        this.scrollChevronMouseStateLeft = ScrollChevronMouseState.ALONE;
        this.scrollChevronMouseStateRight = ScrollChevronMouseState.ALONE;
    }

    build = () => {
        const self = this;
        let height: number;
        $(document).ready(function() {
            // 1) Make scrollable div with populated content
            $(`#${self.selector}`).html(
                `
                <div class="row x-scrollable">
                    ${self.content}
                </div>
                `
            );
            // 2) Get height of scrollable div
            height = $(`#${self.selector}`).outerHeight()!;
            if (Utility.determineDeviceType() === DeviceType.DESKTOP) {
                // 3) Recreate scrollable div and chevrons w/ corrent heights
                let scrollableID = `${self.selector}-scrollable` // For the scrollable div encompassing the containers
                let scrollChevronLeftID = `${self.selector}-scroll-chevron-left` // Chevron on the left
                let scrollChevronRightID = `${self.selector}-scroll-chevron-right`   // Chevron on the right
                $(`#${self.selector}`).html(
                    `
                    <div class="row x-scrollable" id="${scrollableID}">
                        ${self._buildScrollChevronLeft(height, scrollChevronLeftID)}
                        ${self._buildScrollChevronRight(height, scrollChevronRightID)}
                        ${self.content}
                    </div>
                    `
                );
                // 4) Setup Mouse Scroll Events
                self._setScrollMouseEvent(scrollChevronLeftID, scrollableID, ScrollDirection.LEFT);
                self._setScrollMouseEvent(scrollChevronRightID, scrollableID, ScrollDirection.RIGHT);
                // 5) Make Chevrons to follow scroll
                const fixedDivID = `${self.pageSelector}-fixed-div`;
                self.appendDefaultFixedDiv(self.pageSelector, fixedDivID);
                self._setChevronTopPositionEventListeners(scrollChevronLeftID, self.pageSelector, scrollableID);
                self._setChevronTopPositionEventListeners(scrollChevronRightID, self.pageSelector, scrollableID);
            }
        });
    }

    appear(): void {
        throw new Error('Method not implemented.');
    }
    disappear(): void {
        throw new Error('Method not implemented.');
    }
    discard(): void {
        throw new Error('Method not implemented.');
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

    private appendDefaultFixedDiv = function (pageSelector: string, id: string) {
        // $(document).ready(function() {
            $(`#${pageSelector}`).append(
                `
                <div id="${id}" style="position: fixed; top: 0; left: 0; z-index: 9999"><p></p></div>
                `
            );
        // })
        
    }

    private _setScrollMouseEvent =  (scrollChevronID: string, scrollableID: string, direction: ScrollDirection) => {
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
    
    private _setChevronTopPositionEventListeners = (selector: string, pageSelector: string, scrollableSelector: string) => {
        const self = this;
        $(`#page-management-container`).on('scroll', function() {
            self._updateChevronTopPositions(selector, pageSelector, scrollableSelector);
        });
        $(`#${pageSelector}`).on('scroll', function() {
            self._updateChevronTopPositions(selector, pageSelector, scrollableSelector);
        });
    }

    private _updateChevronTopPositions = function (selector: string, pageSelector: string, scrollableSelector: string) {
        var scrollableOffset = $(`#${scrollableSelector}`).position()!;
        console.log(`${pageSelector}: ${scrollableOffset.top} - ${$(`#${pageSelector}`).scrollTop()!}`);
        $(`#${selector}`).css('top', scrollableOffset.top);
    }
}

export default AnimatedXScrollable;