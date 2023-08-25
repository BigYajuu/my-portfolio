class Page {
    id: string;
    initialState: string;
    completionState: string;    // This is the state the page will stay in onwards
    transitionScrollUp: Transition;
    transitionScrollDown: Transition;
    constructor(id: string, initialState: string, transitionScrollUp: Transition, transitionScrollDown: Transition) {
        this.id = id;
        this.initialState = initialState;
        this.completionState = initialState;
        this.transitionScrollUp = transitionScrollUp;
        this.transitionScrollDown = transitionScrollDown;
    }

    saveCompletionState(completionState: string) {
        this.completionState = completionState;
    }
}