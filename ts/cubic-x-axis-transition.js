import { Transition } from "./transition.js";
export class CubicXAxisTransition extends Transition {
    animationStyleScrollUp() {
        throw new Error("Method not implemented.");
    }
    animationStyleScrollDown() {
        throw new Error("Method not implemented.");
    }
    executeScrollUp(pageAtTop, pageAtBottom) {
        throw new Error("Method not implemented.");
    }
    executeScrollDown(pageAtTop, pageAtBottom) {
        /* <div class="scene">
            <div id="pan">
                <div id="cube">
                    <div class="front">
                    <div class="bottom"> */
        jQuery(function () {
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
            var divBody = document.getElementById('page-management-container').cloneNode(true);
            // divCube.addEventListener("animationend", (event) => {
            //     divScene.replaceWith(divBody);
            //     console.log('animation ends');
            //     const targetToScroll = document.getElementById(pageAtBottom.getId());
            //     targetToScroll?.scrollIntoView();
            // });
            // Body replaced by Cube Animation
            document.getElementById('page-management-container').replaceWith(divScene);
        });
    }
}
export default CubicXAxisTransition;
