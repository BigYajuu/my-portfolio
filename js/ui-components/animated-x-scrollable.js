const ScrollDirection = {
    LEFT: 'left',
    RIGHT: 'right'
};

const ScrollChevronMouseState = {
    ALONE: 'alone',
    HOVERING: 'hovering'
}

const ScrollChevronRightBlankStyle = {
    opacity: '0.75',
    width: '0%'
};

const ScrollChevronRightAvailableStyle = {
    opacity: '0.75',
    width: '15%'
}

const ScrollChevronRightHoveringStyle = {
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
                </div>
                `;
    }

    _buildScrollChevronRight = function (height, id) {
        return `
                <div class="scroll-chevron-right" id="${id}" style="height: ${height}px">
                </div>
                `;
    }

    _setupScrollMouseEvent = function (scrollChevronID, scrollableID, direction) {
        let self = this;
        let currentScrollAnimationStyle = ScrollChevronRightAvailableStyle;
        function customAnimation(scrollChevronID, scrollChevronStyle) {
            if (currentScrollAnimationStyle != scrollChevronStyle) {
                $(`#${scrollChevronID}`).stop();
                $(`#${scrollChevronID}`).animate(scrollChevronStyle, 150);
                currentScrollAnimationStyle = scrollChevronStyle;
            }
        }
        function scrollEdgeResponse() {
            if (direction == ScrollDirection.RIGHT && self.scrollChevronMouseStateRight == ScrollChevronMouseState.ALONE) {
                if (Math.round($(`#${scrollableID}`).scrollLeft()) == ($(`#${scrollableID}`).prop('scrollWidth') - $(window).width())
                || Math.round($(`#${scrollableID}`).scrollLeft()) - 1 == ($(`#${scrollableID}`).prop('scrollWidth') - $(window).width())
                || Math.ceil($(`#${scrollableID}`).scrollLeft()) + 1 == ($(`#${scrollableID}`).prop('scrollWidth') - $(window).width())) {
                    customAnimation(scrollChevronID, ScrollChevronRightBlankStyle);
                } else {
                    customAnimation(scrollChevronID, ScrollChevronRightAvailableStyle);
                } // Right Chevron edge detection
            } else if (direction == ScrollDirection.LEFT && self.scrollChevronMouseStateLeft == ScrollChevronMouseState.ALONE) {
                if ($(`#${scrollableID}`).scrollLeft() == (0)) {
                    customAnimation(scrollChevronID, ScrollChevronRightBlankStyle);
                } else {
                    customAnimation(scrollChevronID, ScrollChevronRightAvailableStyle);
                } // Left Chevron edge detection
            }
        }
        // Set Chevron to Blank/Available state depending on scroll position
        scrollEdgeResponse();
        $(`#${scrollableID}`).scroll(function () {
            // Set Chevron to Blank/Available state if no mouse is hovering
            scrollEdgeResponse();
        });
        $(`#${scrollChevronID}`).on('mouseenter', function() {
            clearInterval(self.accelerationIntervalHandler);
            // Set Chevron to Hovering state
            customAnimation(scrollChevronID, ScrollChevronRightHoveringStyle);
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
            if (direction === ScrollDirection.LEFT) {
                self.scrollChevronMouseStateLeft = ScrollChevronMouseState.HOVERING;
            } else if (direction === ScrollDirection.RIGHT) {
                self.scrollChevronMouseStateRight = ScrollChevronMouseState.HOVERING;
            }
        }).on('mouseleave', function(){
            clearInterval(self.movementIntervalHandler);
            // Set scroll de-accel animation
            self.accelerationIntervalHandler = setInterval(function() {
                if (direction === ScrollDirection.LEFT) {
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft() - self.scrollSpeed;
                } else if (direction === ScrollDirection.RIGHT) {
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft() + self.scrollSpeed;
                }
                $(`#${scrollableID}`).scrollLeft(self.scrollPosition);
    
                if (self.scrollSpeed <= 0) {
                } else {
                    self.scrollSpeed -= 1;
                }
            }, 15);
            if (direction === ScrollDirection.LEFT) {
                self.scrollChevronMouseStateLeft = ScrollChevronMouseState.ALONE;
            } else if (direction === ScrollDirection.RIGHT) {
                self.scrollChevronMouseStateRight = ScrollChevronMouseState.ALONE;
            }
            scrollEdgeResponse();
            console.log(Math.floor($(`#${scrollableID}`).scrollLeft()));
            console.log(Math.ceil($(`#${scrollableID}`).scrollLeft()));
            console.log($(`#${scrollableID}`).prop('scrollWidth') - $(window).width());
        });
        
    }
}
