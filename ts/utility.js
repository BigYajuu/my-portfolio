export var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection[ScrollDirection["SCROLLING_UP"] = 0] = "SCROLLING_UP";
    ScrollDirection[ScrollDirection["SCROLLING_DOWN"] = 1] = "SCROLLING_DOWN";
    ScrollDirection[ScrollDirection["UNCHANGING"] = 2] = "UNCHANGING";
})(ScrollDirection || (ScrollDirection = {}));
export class Utility {
    static isScrollToPosition(figure1, figure2) {
        const tolerance = 1;
        return Math.abs(figure1 - figure2) < tolerance;
    }
    static determineScrollDirection(lastVPosition, currentVPosition) {
        if (lastVPosition < currentVPosition) {
            return ScrollDirection.SCROLLING_DOWN;
        }
        else if (lastVPosition > currentVPosition) {
            return ScrollDirection.SCROLLING_UP;
        }
        else {
            return ScrollDirection.UNCHANGING;
        }
    }
}
export default Utility;
