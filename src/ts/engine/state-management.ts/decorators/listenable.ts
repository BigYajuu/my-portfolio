import Provider from "../provider";

export function listenable() {
    return function (target: any, key: string) {
        let value : any = target[key];
    
        const getter = () => value;
    
        const setter = (newValue: any) => {
            value = newValue;
            if (target.provider instanceof Provider) {
                target.provider.setState({ [key]: newValue });
            }
            console.log(`Set ${key} to ${newValue}`)
        };
    
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    }
}

export default listenable;
