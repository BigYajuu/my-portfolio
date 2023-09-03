import {Page} from "./page"

export abstract class Transition {
    constructor() {
    }

    abstract animationStyleScrollUp(): void;

    abstract animationStyleScrollDown(): void;

    abstract executeScrollUp(pageAtTop: Page, pageAtBottom: Page): void;
    
    abstract executeScrollDown(pageAtTop: Page, pageAtBottom: Page): void;
}

export default Transition;