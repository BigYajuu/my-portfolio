import {Page} from "./page"
import PageManagement from "./page-management";

export abstract class Transition {
    constructor() {
    }

    abstract animationStyleScrollUp(): void;

    abstract animationStyleScrollDown(): void;

    abstract executeScrollUp(pageAtTop: Page, pageAtBottom: Page, pageManagement?: PageManagement): void;
    
    abstract executeScrollDown(pageAtTop: Page, pageAtBottom: Page, pageManagement?: PageManagement): void;
}

export default Transition;