import {Transition} from "./transition.js"
import {Page} from "./page.js"

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
            <div id="pan">
                <div id="cube">
                    <div class="front"> 
                    <div class="bottom"> */
        jQuery(function() {
            var divScene = document.createElement('div');
            var divPan = document.createElement('div');
            var divCube = document.createElement('div');
            var divFront = document.createElement('div');
            var divBottom = document.createElement('div');

            divScene.classList.add('scene');
            divPan.id = 'pan';
            divCube.id = 'cube';
            divFront.classList.add('front');
            divBottom.classList.add('bottom');
            // Assign pages to faces
            divFront.appendChild(pageAtTop.getNode());
            divBottom.appendChild(pageAtBottom.getNode());
            // Form Scene Complex
            divCube.appendChild(divFront);
            divCube.appendChild(divBottom);
            divPan.appendChild(divCube);
            divScene.appendChild(divPan);
            // Save current body state and scroll page to the next marking
            var divBody = document.getElementById('page-management-container')!.cloneNode(true);
            
            // divCube.addEventListener("animationend", (event) => {
            //     divScene.replaceWith(divBody);
            //     console.log('animation ends');
            //     const targetToScroll = document.getElementById(pageAtBottom.getId());
            //     targetToScroll?.scrollIntoView();
            // });
            
            // Body replaced by Cube Animation
            document.getElementById('page-management-container')!.replaceWith(divScene);
        });
    }
}

export default CubicXAxisTransition;