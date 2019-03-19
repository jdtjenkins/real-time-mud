import { EntityClass } from '../classes/entity.class';

// An entity is a thing that can be interacted with within the game
export class EntityStore {

    private _state: object = {}

    constructor(){

    }

    public state() {
        return this._state;
    }

    public add<T>(entity: T): number {
        const id: number = Object.keys(this.state).length + 1;
        entity['entityId'] = id;
        this._state[id] = entity;
        return id;
    }

    public remove(entityId: number): void {
        delete this._state[entityId];
    }
}
