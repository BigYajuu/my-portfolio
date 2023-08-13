class AnimatedXScrollable {
    build = function (selector) {
        $(selector).html(
            `<div class="row x-scrollable">
                
                <div class="col-abs-width col-default-padding">
                    <div class="container">
                        <h1>Item 1</h1>
                        <p>Item 1</p>
                        <p>Item 1</p>
                    </div>
                </div>
                
                <div class="col-abs-width col-default-padding">
                    <div class="container">
                        <h1>Item 2</h1>
                        <p>Item 2</p>
                    </div>
                </div>
                
                <div class="col-abs-width col-default-padding">
                    <div class="container">
                        <h1>Item 3</h1>
                        <p>Item 3</p>
                    </div>
                </div>
            
            </div>`
        );
    }
}
