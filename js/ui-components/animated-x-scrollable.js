class AnimatedXScrollable {

    constructor() {
        this.scrollPosition = 0;
        this.scrollSpeed = 0;
        this.movementIntervalHandler;
        this.accelerationIntervalHandler;
    }

    build = function (selector, content) {
        var height;
        var self = this;
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
            var scrollableID = `${selector}-scrollable`
            var scrollChevronLeftID = `${selector}-scroll-chevron-left`
            var scrollChevronRightID = `${selector}-scroll-chevron-right`
            $(`#${selector}`).html(
                `
                <div class="row x-scrollable" id="${scrollableID}">
                    ${self._buildScrollChevronLeft(height, scrollChevronLeftID)}
                    ${self._buildScrollChevronRight(height, scrollChevronRightID)}
                    ${content}
                </div>
                `
            );
            // Set scroll listener
            $(`#${scrollChevronRightID}`).on('mouseenter', function() {
                // self.scrollSpeed = 0;
                self.movementIntervalHandler = setInterval(function() {
                    if (self.scrollSpeed < 12) {
                        self.scrollSpeed += 1;
                    }
                    // console.log(self.scrollSpeed);
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft() + self.scrollSpeed;
                    $(`#${scrollableID}`).scrollLeft(self.scrollPosition);       
                }, 15);
            }).on('mouseleave', function(){
                clearInterval(self.movementIntervalHandler);
                self.accelerationIntervalHandler = setInterval(function() {
                    self.scrollPosition = $(`#${scrollableID}`).scrollLeft() + self.scrollSpeed;
                    $(`#${scrollableID}`).scrollLeft(self.scrollPosition);

                    if (self.scrollSpeed <= 0) {
                        clearInterval(self.accelerationIntervalHandler);
                    } else {
                        self.scrollSpeed -= 1;
                    }
                }, 15)
            });
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
}
