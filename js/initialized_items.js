import $ from "jquery";
import { Page } from "./engine/page.js";
import { PageManagement } from "./engine/page-management.js";
import { CubicXAxisTransition } from "./engine/cubic-x-axis-transition.js";
import { AnimatedXScrollable } from "./components/animated-x-scrollable.js";
import { Selectors } from "./constants.js";
import { FluxDynamicBackground } from "./components/flux-dynamic-background.js";
import { Service } from "./engine/service.js";
import { FloatingDialog } from "./components/floating-dialog.js";
const page1_bg = new FluxDynamicBackground(Selectors.PAGE_1, undefined, "bg0-blank");
const page2_bg = new FluxDynamicBackground(Selectors.PAGE_2, undefined, "bg1-saturate");
const sectionProjectItems2 = new AnimatedXScrollable(`
    <div class="x-scrollable-item col-abs-width col-default-padding">
        <div class="container">
            <h1>Item 1</h1>
            <p>Item 1</p>
            <p>Item 1</p>
        </div>
    </div>
    
    <div class="x-scrollable-item col-abs-width col-default-padding">
        <div class="container">
            <h1>Item 2</h1>
            <p>Item 2</p>
        </div>
    </div>
    
    <div class="x-scrollable-item col-abs-width col-default-padding">
        <div class="container">
            <h1>Item 3</h1>
            <p>Item 3</p>
        </div>
    </div>
    `, "section-projects-items-2", Selectors.PAGE_2);
const sectionProjectItems3 = new AnimatedXScrollable(`
    <div class="x-scrollable-item col-abs-width col-default-padding">
        <div class="container">
            <h1>Item 1</h1>
            <p>Item 1</p>
            <p>Item 1</p>
        </div>
    </div>
    
    <div class="x-scrollable-item col-abs-width col-default-padding">
        <div class="container">
            <h1>Item 2</h1>
            <p>Item 2</p>
        </div>
    </div>

    <div class="x-scrollable-item col-abs-width col-default-padding">
        <div class="container">
            <h1>Item 2</h1>
            <p>Item 2</p>
        </div>
    </div>

    <div class="x-scrollable-item col-abs-width col-default-padding">
        <div class="container">
            <h1>Item 2</h1>
            <p>Item 2</p>
        </div>
    </div>

    <div class="x-scrollable-item col-abs-width col-default-padding">
        <div class="container">
            <h1>Item 2</h1>
            <p>Item 2</p>
        </div>
    </div>

    <div class="x-scrollable-item col-abs-width col-default-padding">
        <div class="container">
            <h1>Item 2</h1>
            <p>Item 2</p>
        </div>
    </div>

    <div class="x-scrollable-item col-abs-width col-default-padding">
        <div class="container">
            <h1>Item 2</h1>
            <p>Item 2</p>
        </div>
    </div>
    
    <div class="x-scrollable-item col-abs-width col-default-padding">
        <div class="container">
            <h1>Item 3</h1>
            <p>Item 3</p>
        </div>
    </div>
    `, "section-projects-items-3", Selectors.PAGE_2);
const page1 = new Page(Selectors.PAGE_1, new CubicXAxisTransition(), [page1_bg]);
const page2 = new Page(Selectors.PAGE_2, new CubicXAxisTransition(), [page2_bg, sectionProjectItems2, sectionProjectItems3]);
const pageManagement = new PageManagement(Selectors.PAGE_MANAGEMENT_CONTAINER, [page1, page2]);
$(function () {
    const paramEnquire = Service.getParameterByName('enquire', window.location.href);
    if (paramEnquire === '1') {
        // TODO: Add call for enquire
    }
});
const floating = new FloatingDialog("test", "chicken");
floating.getBackgroundFromProvider();
