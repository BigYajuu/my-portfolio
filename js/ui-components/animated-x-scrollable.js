class AnimatedXScrollable {
    build = function (selector, content) {
        $(selector).html(
            `<div class="row x-scrollable">
                
                ${content}
            
            </div>`
        );
    }
}
