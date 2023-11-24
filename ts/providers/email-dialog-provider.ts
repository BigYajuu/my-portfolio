import Provider from "../engine/state-management.ts/provider";

export class EmailDialogProvider<T> extends Provider<T> {
    constructor(initialState: T) {
        super(initialState);
    }
}

export default EmailDialogProvider;