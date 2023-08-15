class AnimatedXScrollable {

    build = function (selector, content) {
        var height;
        var self = this;
        $(document).ready(function() {
            // 1) Make scrollable div with populated content
            $(selector).html(
                `
                <div class="row x-scrollable">
                    ${content}
                </div>
                `
            );
            // 2) Get height of scrollable div
            height = $(selector).outerHeight();
            // 3) Recreate scrollable div and chevrons w/ corrent heights
            $(selector).html(
                `
                <div class="row x-scrollable">
                    ${self._buildScrollChevronLeft(height)}
                    ${self._buildScrollChevronRight(height)}
                    ${content}
                    
                </div>
                `
            );
        });
    }

    _buildScrollChevronLeft = function (height) {
        return `
                <div class="chevron-style-left" style="height: ${height}px">
                </div>
                `;
    }

    _buildScrollChevronRight = function (height) {
        return `
                <div class="chevron-style-right" style="height: ${height}px">
                </div>
                `;
    }
}
