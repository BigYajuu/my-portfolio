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
    private scrollableSelector: string;
    private scrollChevronLeftSelector: string;
    private scrollChevronRightSelector: string;

    private scrollPosition: number;
    private scrollSpeed: number;
    private movementIntervalHandler: number;
    private accelerationIntervalHandler: number;
    private scrollChevronMouseStateLeft: ScrollChevronMouseState;
    private scrollChevronMouseStateRight: ScrollChevronMouseState;


    constructor(content: string, selector: string, pageSelector: string, pageManagement: PageManagement) {
        super(selector, pageSelector, pageManagement);
        this.content = content;
        this.scrollableSelector = `${this.selector}-scrollable`;    // For the scrollable div encompassing the containers
        this.scrollChevronLeftSelector = `${this.selector}-scroll-chevron-left`;    // Chevron on the left
        this.scrollChevronRightSelector = `${this.selector}-scroll-chevron-right`;  // Chevron on the right


        this.scrollPosition = 0;
        this.scrollSpeed = 0;
        this.movementIntervalHandler = 0;
        this.accelerationIntervalHandler = 0;
        this.scrollChevronMouseStateLeft = ScrollChevronMouseState.ALONE;
        this.scrollChevronMouseStateRight = ScrollChevronMouseState.ALONE;
    }

    build = () => {
        const self = this;
        var height: number;
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
                $(`#${self.selector}`).html(
                    `
                    <div class="row x-scrollable" id="${self.scrollableSelector}">
                        ${self.buildScrollChevronLeft(height, self.scrollChevronLeftSelector)}
                        ${self.buildScrollChevronRight(height, self.scrollChevronRightSelector)}
                        ${self.content}
                    </div>
                    `
                );
                // 4) Setup Mouse Scroll Events
                self.setScrollMouseEvent(self.scrollChevronLeftSelector, self.scrollableSelector, ScrollDirection.LEFT);
                self.setScrollMouseEvent(self.scrollChevronRightSelector, self.scrollableSelector, ScrollDirection.RIGHT);
                // 5) Make Chevrons to follow scroll
                const invisibleTopPinSelector = `${self.pageSelector}-invisible-top-pin`;
                self.appendInvisibleTopPinDiv(self.pageSelector, invisibleTopPinSelector);
                self.setScrollChevronVPositionEventListeners(self.scrollChevronLeftSelector, self.pageSelector, self.scrollableSelector);
                self.setScrollChevronVPositionEventListeners(self.scrollChevronRightSelector, self.pageSelector, self.scrollableSelector);
            }
        });
    }
    
    discard(): void {
        throw new Error('Method not implemented.');
    }

    private buildScrollChevronLeft = function (height: number, selector: string) {
        return `
                <div class="scroll-chevron-left" id="${selector}" style="height: ${height}px">
                    <i class="fa-solid fa-arrow-left fa-fade fa-3x" style="color: #000000"></i>
                </div>
                `;
    }

    private buildScrollChevronRight = function (height: number, selector: string) {
        return `
                <div class="scroll-chevron-right" id="${selector}" style="height: ${height}px">
                    <i class="fa-solid fa-arrow-right fa-fade fa-3x" style="color: #000000"></i>
                </div>
                `;
    }

    private appendInvisibleTopPinDiv = function (pageSelector: string, selector: string) {
        $(`#${pageSelector}`).append(
            `
            <div id="${selector}" style="position: fixed; top: 0; left: 0; z-index: 9999"></div>
            `
        );
    }

    private setScrollMouseEvent =  (scrollChevronSelector: string, scrollableSelector: string, direction: ScrollDirection) => {
        const self = this;
        var currentScrollAnimationStyle: ScrollChevronStyle;
        function customAnimation(scrollChevronSelector: string, scrollChevronStyle: ScrollChevronStyle) {
            if (currentScrollAnimationStyle != scrollChevronStyle) {
                $(`#${scrollChevronSelector}`).stop();
                $(`#${scrollChevronSelector}`).animate(scrollChevronStyle, 150);
                currentScrollAnimationStyle = scrollChevronStyle;
            }
        }
        function scrollEdgeResponse() {
            // Set Chevron's state to available/blank depending on whether the edge is reached on either side.
            if (direction == ScrollDirection.RIGHT) {
                if (Utility.isScrollToPosition(Math.round($(`#${scrollableSelector}`).scrollLeft()!), $(`#${scrollableSelector}`).prop('scrollWidth')! - $(`#${scrollableSelector}`).prop('clientWidth')!)) {
                    customAnimation(scrollChevronSelector, ScrollChevronBlankStyle);
                } else if (self.scrollChevronMouseStateRight == ScrollChevronMouseState.ALONE) {
                    customAnimation(scrollChevronSelector, ScrollChevronAvailableStyle);
                } // Right Chevron edge detection
            } else if (direction == ScrollDirection.LEFT) {
                if ($(`#${scrollableSelector}`).scrollLeft() == (0)) {
                    customAnimation(scrollChevronSelector, ScrollChevronBlankStyle);
                } else if (self.scrollChevronMouseStateLeft == ScrollChevronMouseState.ALONE) {
                    customAnimation(scrollChevronSelector, ScrollChevronAvailableStyle);
                } // Left Chevron edge detection
            }
        }
        // Set Chevron's initial state
        scrollEdgeResponse();
        // Update Chevron's state whenever scroll is triggered
        $(`#${scrollableSelector}`).scroll(function () {
            scrollEdgeResponse();
        })
        // Updates chevrons when window resizes
        $(window).on('resize', function() {
            scrollEdgeResponse();
        });
        $(`#${scrollChevronSelector}`).on('mouseenter', function() {  // When mouse enters chevron
            clearInterval(self.accelerationIntervalHandler);
            // Set Chevron to Hovering state and animate
            customAnimation(scrollChevronSelector, ScrollChevronHoveringStyle);
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
                    self.scrollPosition = $(`#${scrollableSelector}`).scrollLeft()! - self.scrollSpeed;
                } else if (direction === ScrollDirection.RIGHT) {
                    self.scrollPosition = $(`#${scrollableSelector}`).scrollLeft()! + self.scrollSpeed;
                }
                $(`#${scrollableSelector}`).scrollLeft(self.scrollPosition);
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
                    self.scrollPosition = $(`#${scrollableSelector}`).scrollLeft()! - self.scrollSpeed;
                } else if (direction === ScrollDirection.RIGHT) {
                    self.scrollPosition = $(`#${scrollableSelector}`).scrollLeft()! + self.scrollSpeed;
                }
                $(`#${scrollableSelector}`).scrollLeft(self.scrollPosition);
    
                if (self.scrollSpeed > 0) {
                    self.scrollSpeed -= 1;
                }
            }, 15);
            scrollEdgeResponse();
        });
    }
    
    private setScrollChevronVPositionEventListeners = (selector: string, pageSelector: string, scrollableSelector: string) => {
        const self = this;
        $(`#page-management-container`).on('scroll', function() {
            self.updateScrollChevronVPositions(selector, pageSelector, scrollableSelector);
        });
        $(`#${pageSelector}`).on('scroll', function() {
            self.updateScrollChevronVPositions(selector, pageSelector, scrollableSelector);
        });
    }

    private updateScrollChevronVPositions = (selector: string, pageSelector: string, scrollableSelector: string) => {
        const self = this;
        self.updateScrollChevronVisibility();
        var scrollableOffset = $(`#${scrollableSelector}`).position()!;
        // console.log(`${pageSelector}: ${scrollableOffset.top} - ${$(`#${pageSelector}`).scrollTop()!}`);
        $(`#${selector}`).css('top', scrollableOffset.top);
        
    }

    private setScrollChevronsToAppear() {
        const self = this;
        $(`#${self.scrollChevronLeftSelector}`).css('visibility', 'visible');
        $(`#${self.scrollChevronRightSelector}`).css('visibility', 'visible');
    }

    private setScrollChevronsToDisappear() {
        const self = this;
        $(`#${self.scrollChevronLeftSelector}`).css('visibility', 'hidden');
        $(`#${self.scrollChevronRightSelector}`).css('visibility', 'hidden');
    }

    private isThisComponentOnCurrentPage = () => {
        const self = this;
        return this.pageManagement.doesPageSelectorDenoteCurrentPage(this.pageSelector);
    }

    private updateScrollChevronVisibility() {
        const self = this;
        if (self.isThisComponentOnCurrentPage()) {
            self.setScrollChevronsToAppear();
        } else {
            self.setScrollChevronsToDisappear();
        }
    }
}

export default AnimatedXScrollable;