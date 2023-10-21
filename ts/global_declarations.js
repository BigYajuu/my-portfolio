import { Page } from "./engine/page.js";
import { PageManagement } from "./engine/page-management.js";
import { CubicXAxisTransition } from "./engine/cubic-x-axis-transition.js";
export var page1 = new Page("page-1", new CubicXAxisTransition());
export var page2 = new Page("page-2", new CubicXAxisTransition());
export var pageManagement = new PageManagement("page-management-container", [page1, page2]);
