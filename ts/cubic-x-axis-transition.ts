import {Transition} from "./transition.js"
import {Page} from "./page"

export class CubicXAxisTransition extends Transition {
    
    animationStyleScrollUp(): void {
        throw new Error("Method not implemented.");
    }
    animationStyleScrollDown(): void {
        throw new Error("Method not implemented.");
    }

    executeScrollUp(pageAtTop: Page, pageAtBottom: Page): void {
        throw new Error("Method not implemented.");
    }
    executeScrollDown(pageAtTop: Page, pageAtBottom: Page): void {
        /* <div class="scene">
            <div class="pan">
                <div id="cube">
                    <div class="front"> 
                    <div class="bottom"> */
        var divScene = document.createElement('div');
        var divPan = document.createElement('div');
        var divCube = document.createElement('div');
        var divFront = document.createElement('div');
        var divBottom = document.createElement('div');
        divScene.classList.add('scene');
        divPan.classList.add('pan');
        divCube.classList.add('cube');
        divFront.classList.add('front');
        divBottom.classList.add('bottom');
        // Assign pages to faces
        divFront.appendChild(pageAtTop.getElement()!);
        divBottom.appendChild(pageAtBottom.getElement()!);
        // Form Scene Complex
        divCube.appendChild(divFront);
        divCube.appendChild(divBottom);
        divPan.appendChild(divCube);
        divScene.appendChild(divPan);
    }
}

export default CubicXAxisTransition;