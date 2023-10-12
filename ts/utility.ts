export enum ScrollDirection {
    SCROLLING_UP,
    SCROLLING_DOWN,
    UNCHANGING
}

export class Utility {
    static isScrollToPosition(figure1: number, figure2: number): boolean {
        const tolerance = 1;
        return Math.abs(figure1 - figure2) < tolerance;
    }

    static determineScrollDirection(lastVPosition: number, currentVPosition: number): ScrollDirection {
        if (lastVPosition < currentVPosition) {
            return ScrollDirection.SCROLLING_DOWN;
        } else if (lastVPosition > currentVPosition) {
            return ScrollDirection.SCROLLING_UP;
        } else {
            return ScrollDirection.UNCHANGING;
        }
    }
}

export default Utility;