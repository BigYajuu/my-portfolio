export enum ScrollDirection {
    SCROLLING_UP,
    SCROLLING_DOWN,
    UNCHANGING
}

export enum DeviceType {
    DESKTOP,
    TABLET,
    MOBILE
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

    static determineDeviceType(): DeviceType {
        const userAgent: string = navigator.userAgent || navigator.vendor;

        const isMobileDevice = (): boolean => {
            const regexs = [/(Android)(.+)(Mobile)/i, /BlackBerry/i, /iPhone|iPod/i, /Opera Mini/i, /IEMobile/i];
            return regexs.some((b) => userAgent.match(b));
        }

        const isTabletDevice = (): boolean => {
            const regex = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/;
            return regex.test(userAgent.toLowerCase());
        }

        const isDesktopDevice = (): boolean => !isMobileDevice() && !isTabletDevice();
        
        if (isMobileDevice()) {
            return DeviceType.MOBILE;
        } else if (isTabletDevice()) {
            return DeviceType.TABLET;
        } else if (isDesktopDevice()) {
            return DeviceType.DESKTOP;
        }
        return DeviceType.DESKTOP;
    }
}

export default Utility;