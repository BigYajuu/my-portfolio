export class Utility {
    static isScrollToPosition(figure1: number, figure2: number): boolean {
        const tolerance = 1;
        return Math.abs(figure1 - figure2) < tolerance;
    }
}

export default Utility;