import { Page } from "./engine/page.js";
import { PageManagement } from "./engine/page-management.js";
import { CubicXAxisTransition } from "./engine/cubic-x-axis-transition.js";
import { AnimatedXScrollable } from "./components/animated-x-scrollable.js";
export const page1 = new Page("page-1", new CubicXAxisTransition());
export const page2 = new Page("page-2", new CubicXAxisTransition());
export const pageManagement = new PageManagement("page-management-container", [page1, page2]);
export const sectionProjectItems = new AnimatedXScrollable(`
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
    </div>`, "section-projects-items", page1, pageManagement);
export const sectionProjectItems2 = new AnimatedXScrollable(`
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
    </div>`, "section-projects-items-2", page2, pageManagement);
export const sectionProjectItems3 = new AnimatedXScrollable(`
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
    </div>`, "section-projects-items-3", page2, pageManagement);
