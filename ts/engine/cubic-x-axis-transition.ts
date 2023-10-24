import Transition from "./transition.js";
import Page from "engine/page.js";
import PageManagement from "engine/page-management.js";

export class CubicXAxisTransition extends Transition {
    
    /*  Follow the following div structure: (scrollDown)
        <div class="scene">
            <div id="pan">
                <div id="cube">
                    <div class="front"> 
                    <div class="bottom"> */

    animationStyleScrollUp(): void {
        throw new Error("Method not implemented.");
    }
    animationStyleScrollDown(): void {
        throw new Error("Method not implemented.");
    }

    executeScrollUp(pageAtTop: Page, pageAtBottom: Page, pageManagement: PageManagement): void {
        jQuery(function() {
            const divScene = document.createElement('div');
            const divPan = document.createElement('div');
            const divCube = document.createElement('div');
            const divTop = document.createElement('div');
            const divFront = document.createElement('div');

            divScene.classList.add('scene');
            divPan.id = 'pan';
            divCube.id = 'cube';
            divPan.classList.add('panScrollUp')
            divCube.classList.add('rotateCubeScrollUp');
            divTop.classList.add('top');
            divFront.classList.add('front');
            // Assign pages to faces
            divTop.appendChild(pageAtTop.getNode());
            divFront.appendChild(pageAtBottom.getNode());
            // Form Scene Complex
            divCube.appendChild(divTop);
            divCube.appendChild(divFront);
            divPan.appendChild(divCube);
            divScene.appendChild(divPan);
            // Save current body state and scroll page to the next marking
            const divBody = $(`#${'page-management-container'}`).clone(true, true)[0];
            divCube.addEventListener("animationend", (event) => {
                divScene.replaceWith(divBody);
                const targetToScroll = document.getElementById(pageAtTop.getSelector());
                targetToScroll?.scrollIntoView();
                pageManagement?.updatePageEvents();
            });
            
            // Body replaced by Cube Animation
            document.getElementById('page-management-container')!.replaceWith(divScene);
        });
    }

    executeScrollDown(pageAtTop: Page, pageAtBottom: Page, pageManagement?: PageManagement): void {
        jQuery(function() {
            const divScene = document.createElement('div');
            const divPan = document.createElement('div');
            const divCube = document.createElement('div');
            const divFront = document.createElement('div');
            const divBottom = document.createElement('div');

            divScene.classList.add('scene');
            divPan.id = 'pan';
            divCube.id = 'cube';
            divPan.classList.add('panScrollDown')
            divCube.classList.add('rotateCubeScrollDown');
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
            const divBody = $(`#${'page-management-container'}`).clone(true, true)[0];
            divCube.addEventListener("animationend", (event) => {
                divScene.replaceWith(divBody);
                const targetToScroll = document.getElementById(pageAtBottom.getSelector());
                targetToScroll?.scrollIntoView();
                pageManagement?.updatePageEvents();
            });
            
            // Body replaced by Cube Animation
            document.getElementById('page-management-container')!.replaceWith(divScene);
        });
    }
}

export default CubicXAxisTransition;