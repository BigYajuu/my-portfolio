import {Page} from "engine/page"
import PageManagement from "engine/page-management";

export abstract class Transition {
    constructor() {
    }

    protected abstract animationStyleScrollUp(): void;

    protected abstract animationStyleScrollDown(): void;

    protected abstract executeScrollUp(pageAtTop: Page, pageAtBottom: Page, pageManagement?: PageManagement): void;
    
    protected abstract executeScrollDown(pageAtTop: Page, pageAtBottom: Page, pageManagement?: PageManagement): void;
}

export default Transition;