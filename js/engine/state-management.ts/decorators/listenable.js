import Provider from "../provider";
export function listenable() {
    return function (target, key) {
        let value = target[key];
        const getter = () => value;
        const setter = (newValue) => {
            value = newValue;
            if (target.provider instanceof Provider) {
                target.provider.setState({ [key]: newValue });
            }
            console.log(`Set ${key} to ${newValue}`);
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
export default listenable;
