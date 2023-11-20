type ListenerCallback<T> = (state: T) => void;

export class Provider<T> {
    private state: T;
    private listeners: ListenerCallback<T>[] = [];

    constructor(initialState: T) {
        this.state = initialState;
    }

    getState(): T {
        return this.state;
    }

    setState(newState: Partial<T> | ((prevState: T) => Partial<T>)) {
        if (typeof newState === 'function') {
            this.state = { ...this.state, ...(newState as Function)(this.state) };
        } else {
            this.state = { ...this.state, ...newState };
        }
        this.notifyListeners();
    }

    subscribe(listener: ListenerCallback<T>): () => void {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    private notifyListeners() {
        this.listeners.forEach(listener => listener(this.state));
    }
}

export default Provider;