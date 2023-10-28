"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionProjectItems3 = exports.sectionProjectItems2 = exports.sectionProjectItems = exports.pageManagement = exports.page2 = exports.page1 = void 0;
const page_js_1 = require("./engine/page.js");
const page_management_js_1 = require("./engine/page-management.js");
const cubic_x_axis_transition_js_1 = require("./engine/cubic-x-axis-transition.js");
const animated_x_scrollable_js_1 = require("./components/animated-x-scrollable.js");
exports.page1 = new page_js_1.Page("page-1", new cubic_x_axis_transition_js_1.CubicXAxisTransition());
exports.page2 = new page_js_1.Page("page-2", new cubic_x_axis_transition_js_1.CubicXAxisTransition());
exports.pageManagement = new page_management_js_1.PageManagement("page-management-container", [exports.page1, exports.page2]);
exports.sectionProjectItems = new animated_x_scrollable_js_1.AnimatedXScrollable(`
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
            <h1>Item 2</h1>
            <p>Item 2</p>
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
            <h1>Item 2</h1>
            <p>Item 2</p>
        </div>
    </div>
    
    <div class="col-abs-width col-default-padding">
        <div class="container">
            <h1>Item 3</h1>
            <p>Item 3</p>
        </div>
    </div>`, "section-projects-items", exports.page1, exports.pageManagement);
exports.sectionProjectItems2 = new animated_x_scrollable_js_1.AnimatedXScrollable(`
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
    </div>`, "section-projects-items-2", exports.page2, exports.pageManagement);
exports.sectionProjectItems3 = new animated_x_scrollable_js_1.AnimatedXScrollable(`
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
            <h1>Item 2</h1>
            <p>Item 2</p>
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
            <h1>Item 2</h1>
            <p>Item 2</p>
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
            <h1>Item 2</h1>
            <p>Item 2</p>
        </div>
    </div>
    
    <div class="col-abs-width col-default-padding">
        <div class="container">
            <h1>Item 3</h1>
            <p>Item 3</p>
        </div>
    </div>`, "section-projects-items-3", exports.page2, exports.pageManagement);
