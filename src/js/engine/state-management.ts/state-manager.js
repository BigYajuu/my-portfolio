import { Provider } from "./provider";
export class StateManager {
    static getInstance(identifier, initialState) {
        if (!StateManager.instances.has(identifier)) {
            const provider = new Provider(initialState);
            StateManager.instances.set(identifier, provider);
        }
        return StateManager.instances.get(identifier);
    }
}
StateManager.instances = new Map();
export default StateManager;
