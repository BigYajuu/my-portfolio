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
            <div class="pan">
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
            divPan.classList.add('pan');
            divCube.classList.add('cube');
            divFront.classList.add('front');
            divBottom.classList.add('bottom');
            // Assign pages to faces
            divFront.appendChild(pageAtTop.getNode()[0]);
            divBottom.appendChild(pageAtBottom.getNode()[0]);
            // Form Scene Complex
            divCube.appendChild(divFront);
            divCube.appendChild(divBottom);
            divPan.appendChild(divCube);
            divScene.appendChild(divPan);
            // Save current body state and scroll page to the next marking
            var divBody = document.body.cloneNode(true);
            //
            // divCube.addEventListener("animationend", (event) => {
            //     document.body.replaceWith(divBody);
            //     const targetToScroll = document.getElementById(pageAtBottom.getId());
            //     targetToScroll?.scrollIntoView();
            // });
            // Body replaced by Cube Animation
            document.body.replaceWith(divScene);
        });
    }
}
export default CubicXAxisTransition;
