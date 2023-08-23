const ScrollDirection = {
    LEFT: 'left',
    RIGHT: 'right'
};

const ScrollChevronMouseState = {
    ALONE: 'alone',
    HOVERING: 'hovering'
}

const ScrollChevronBlankStyle = {
    opacity: '0',
    width: '0%'
};

const ScrollChevronAvailableStyle = {
    opacity: '0.5',
    width: '15%'
}

const ScrollChevronHoveringStyle = {
    opacity: '1',
    width: '20%'
}

class AnimatedXScrollable {

    constructor() {
        this.scrollPosition = 0;
        this.scrollSpeed = 0;
        this.movementIntervalHandler;
        this.accelerationIntervalHandler;
        this.scrollChevronMouseStateLeft = ScrollChevronMouseState.ALONE;
        this.scrollChevronMouseStateRight = ScrollChevronMouseState.ALONE;
    }

    build = function (selector, content) {
        let height;
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
            height = $(`#${selector}`).outerHeight();
            if (!jQuery.browser.mobile) {
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
            }
        });
    }

    _buildScrollChevronLeft = function (height, id) {
        return `
                <div class="scroll-chevron-left" id="${id}" style="height: ${height}px">
                    <i class="fa-solid fa-arrow-left fa-fade fa-3x" style="color: #000000"></i>
                </div>
                `;
    }

    _buildScrollChevronRight = function (height, id) {
        return `
                <div class="scroll-chevron-right" id="${id}" style="height: ${height}px">
                    <i class="fa-solid fa-arrow-right fa-fade fa-3x" style="color: #000000"></i>
                </div>
                `;
    }

    _setupScrollMouseEvent = function (scrollChevronID, scrollableID, direction) {
        let self = this;
        let currentScrollAnimationStyle;
        function customAnimation(scrollChevronID, scrollChevronStyle) {
            if (currentScrollAnimationStyle != scrollChevronStyle) {
                $(`#${scrollChevronID}`).stop();
                $(`#${scrollChevronID}`).animate(scrollChevronStyle, 150);
                currentScrollAnimationStyle = scrollChevronStyle;
            }
        }
        function scrollEdgeResponse() {
            // Set Chevron's state to available/blank depending on whether the edge is reached on either side.
            if (direction == ScrollDirection.RIGHT && self.scrollChevronMouseStateRight == ScrollChevronMouseState.ALONE) {
                if (Math.round($(`#${scrollableID}`).scrollLeft()) == ($(`#${scrollableID}`).prop('scrollWidth') - $(window).width())
                || Math.round($(`#${scrollableID}`).scrollLeft()) - 1 == ($(`#${scrollableID}`).prop('scrollWidth') - $(window).width())
                || Math.ceil($(`#${scrollableID}`).scrollLeft()) + 1 == ($(`#${scrollableID}`).prop('scrollWidth') - $(window).width())) {
                    customAnimation(scrollChevronID, ScrollChevronBlankStyle);
                } else {
                    customAnimation(scrollChevronID, ScrollChevronAvailableStyle);
                } // Right Chevron edge detection
            } else if (direction == ScrollDirection.LEFT && self.scrollChevronMouseStateLeft == ScrollChevronMouseState.ALONE) {
                if ($(`#${scrollableID}`).scrollLeft() == (0)) {
                    customAnimation(scrollChevronID, ScrollChevronBlankStyle);
                } else {
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
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft() - self.scrollSpeed;
                } else if (direction === ScrollDirection.RIGHT) {
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft() + self.scrollSpeed;
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
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft() - self.scrollSpeed;
                } else if (direction === ScrollDirection.RIGHT) {
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft() + self.scrollSpeed;
                }
                $(`#${scrollableID}`).scrollLeft(self.scrollPosition);
    
                if (self.scrollSpeed > 0) {
                    self.scrollSpeed -= 1;
                }
            }, 15);
            scrollEdgeResponse();
        });
    }
}
