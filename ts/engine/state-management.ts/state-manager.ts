import { Provider } from "./provider";

export class StateManager {
    private static instances: Map<string, Provider<any>> = new Map();
  
    static getInstance<T>(identifier: string, initialState: T): Provider<T> {
        if (!StateManager.instances.has(identifier)) {
            const provider = new Provider<T>(initialState);
            StateManager.instances.set(identifier, provider);
        }
        return StateManager.instances.get(identifier) as Provider<T>;
    }
}

export default StateManager;