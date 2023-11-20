export class Provider {
    constructor(initialState) {
        this.listeners = [];
        this.state = initialState;
    }
    getState() {
        return this.state;
    }
    setState(newState) {
        if (typeof newState === 'function') {
            this.state = Object.assign(Object.assign({}, this.state), newState(this.state));
        }
        else {
            this.state = Object.assign(Object.assign({}, this.state), newState);
        }
        this.notifyListeners();
    }
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }
    notifyListeners() {
        this.listeners.forEach(listener => listener(this.state));
    }
}
export default Provider;
