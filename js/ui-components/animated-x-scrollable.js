const ScrollDirection = {
    LEFT: 'left',
    RIGHT: 'right'
};

class AnimatedXScrollable {

    constructor() {
        this.scrollPosition = 0;
        this.scrollSpeed = 0;
        this.movementIntervalHandler;
        this.accelerationIntervalHandler;
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
        $(`#${scrollChevronID}`).on('mouseenter', function() {
            // self.scrollSpeed = 0;
            self.movementIntervalHandler = setInterval(function() {
                if (self.scrollSpeed < 12) {
                    self.scrollSpeed += 1;
                }
                // console.log(self.scrollSpeed);
                if (direction === ScrollDirection.LEFT) {
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft() - self.scrollSpeed;
                } else if (direction === ScrollDirection.RIGHT) {
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft() + self.scrollSpeed;
                }
                console.log(self.scrollPosition);
                $(`#${scrollableID}`).scrollLeft(self.scrollPosition);       
            }, 15);
        }).on('mouseleave', function(){
            clearInterval(self.movementIntervalHandler);
            self.accelerationIntervalHandler = setInterval(function() {
                if (direction === ScrollDirection.LEFT) {
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft() - self.scrollSpeed;
                } else if (direction === ScrollDirection.RIGHT) {
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft() + self.scrollSpeed;
                }
                $(`#${scrollableID}`).scrollLeft(self.scrollPosition);
    
                if (self.scrollSpeed <= 0) {
                    clearInterval(self.accelerationIntervalHandler);
                } else {
                    self.scrollSpeed -= 1;
                }
            }, 15);
        });
    }
}
