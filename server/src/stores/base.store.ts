export interface BaseType {
    id: number;
}

export class BaseStore<T extends BaseType> {

    private _state: T[] = [];

    constructor(InitialState?: T[]) {
        this.setState(InitialState);
    }

    public setState(state: T[]) {
        this._state = [
            ...this._state,
            ...state,
        ];
    }

    public get state(): T[] {
        return this._state;
    }

    public add(item: T): void {
        this._state = [
            ...this._state,
            item,
        ];
    }

    public remove(idToRemove: number): void {
        this._state = {
            ...this._state.filter(({id}) => id !== idToRemove),
        }
    }
}
