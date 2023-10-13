import Transition from "./transition.js";
export class CubicXAxisTransition extends Transition {
    /*  Follow the following div structure: (scrollDown)
        <div class="scene">
            <div id="pan">
                <div id="cube">
                    <div class="front">
                    <div class="bottom"> */
    animationStyleScrollUp() {
        throw new Error("Method not implemented.");
    }
    animationStyleScrollDown() {
        throw new Error("Method not implemented.");
    }
    executeScrollUp(pageAtTop, pageAtBottom, pageManagement) {
        jQuery(function () {
            var divScene = document.createElement('div');
            var divPan = document.createElement('div');
            var divCube = document.createElement('div');
            var divTop = document.createElement('div');
            var divFront = document.createElement('div');
            divScene.classList.add('scene');
            divPan.id = 'pan';
            divCube.id = 'cube';
            divPan.classList.add('panScrollUp');
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
            var divBody = $(`#${'page-management-container'}`).clone(true, true)[0];
            divCube.addEventListener("animationend", (event) => {
                divScene.replaceWith(divBody);
                console.log('animation ends');
                const targetToScroll = document.getElementById(pageAtTop.getId());
                targetToScroll === null || targetToScroll === void 0 ? void 0 : targetToScroll.scrollIntoView();
                pageManagement === null || pageManagement === void 0 ? void 0 : pageManagement.updatePageEvents();
            });
            // Body replaced by Cube Animation
            document.getElementById('page-management-container').replaceWith(divScene);
        });
    }
    executeScrollDown(pageAtTop, pageAtBottom, pageManagement) {
        jQuery(function () {
            var divScene = document.createElement('div');
            var divPan = document.createElement('div');
            var divCube = document.createElement('div');
            var divFront = document.createElement('div');
            var divBottom = document.createElement('div');
            divScene.classList.add('scene');
            divPan.id = 'pan';
            divCube.id = 'cube';
            divPan.classList.add('panScrollDown');
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
            var divBody = $(`#${'page-management-container'}`).clone(true, true)[0];
            divCube.addEventListener("animationend", (event) => {
                divScene.replaceWith(divBody);
                const targetToScroll = document.getElementById(pageAtBottom.getId());
                targetToScroll === null || targetToScroll === void 0 ? void 0 : targetToScroll.scrollIntoView();
                pageManagement === null || pageManagement === void 0 ? void 0 : pageManagement.updatePageEvents();
            });
            // Body replaced by Cube Animation
            document.getElementById('page-management-container').replaceWith(divScene);
        });
    }
}
export default CubicXAxisTransition;
