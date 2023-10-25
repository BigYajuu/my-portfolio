export var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection[ScrollDirection["SCROLLING_UP"] = 0] = "SCROLLING_UP";
    ScrollDirection[ScrollDirection["SCROLLING_DOWN"] = 1] = "SCROLLING_DOWN";
    ScrollDirection[ScrollDirection["UNCHANGING"] = 2] = "UNCHANGING";
})(ScrollDirection || (ScrollDirection = {}));
export var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["DESKTOP"] = 0] = "DESKTOP";
    DeviceType[DeviceType["TABLET"] = 1] = "TABLET";
    DeviceType[DeviceType["MOBILE"] = 2] = "MOBILE";
})(DeviceType || (DeviceType = {}));
export class Utility {
    static isScrollToPosition(figure1, figure2) {
        const tolerance = 2;
        return Math.abs(figure1 - figure2) <= tolerance;
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
    static determineDeviceType() {
        const userAgent = navigator.userAgent || navigator.vendor;
        const isMobileDevice = () => {
            const regexs = [/(Android)(.+)(Mobile)/i, /BlackBerry/i, /iPhone|iPod/i, /Opera Mini/i, /IEMobile/i];
            return regexs.some((b) => userAgent.match(b));
        };
        const isTabletDevice = () => {
            const regex = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/;
            return regex.test(userAgent.toLowerCase());
        };
        const isDesktopDevice = () => !isMobileDevice() && !isTabletDevice();
        if (isMobileDevice()) {
            return DeviceType.MOBILE;
        }
        else if (isTabletDevice()) {
            return DeviceType.TABLET;
        }
        else if (isDesktopDevice()) {
            return DeviceType.DESKTOP;
        }
        return DeviceType.DESKTOP;
    }
    static delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
export default Utility;
