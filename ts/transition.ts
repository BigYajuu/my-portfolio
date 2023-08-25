abstract class Transition {
    constructor() {
    }

    abstract animationStyleScrollUp(): void;

    abstract animationStyleScrollDown(): void;

    abstract executeScrollUp(pageAtTop: string, pageAtBottom: string): void;
    
    abstract executeScrollDown(pageAtTop: string, pageAtBottom: string): void;
}