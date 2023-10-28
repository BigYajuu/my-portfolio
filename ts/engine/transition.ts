import {Page} from "./page"
import PageManagement from "./page-management";

export abstract class Transition {
    constructor() {
    }

    public abstract animationStyleScrollUp(): void;

    public abstract animationStyleScrollDown(): void;

    public abstract executeScrollUp(pageAtTop: Page, pageAtBottom: Page, pageManagement?: PageManagement): void;
    
    public abstract executeScrollDown(pageAtTop: Page, pageAtBottom: Page, pageManagement?: PageManagement): void;
}

export default Transition;