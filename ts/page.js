"use strict";
class Page {
    constructor(id, initialState, transitionScrollUp, transitionScrollDown) {
        this.id = id;
        this.initialState = initialState;
        this.completionState = initialState;
        this.transitionScrollUp = transitionScrollUp;
        this.transitionScrollDown = transitionScrollDown;
    }
    saveCompletionState(completionState) {
        this.completionState = completionState;
    }
}
