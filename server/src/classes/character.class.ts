import { CharacterInfoInterface, CharacterStatsInterface } from '../interfaces/character.interface';
import { CharacterActions } from '../enums/character-actions.enum';
// import { EntityActions } from '../enums/entity-actions.enum';
import { ItemInterface } from '../interfaces/item.interface';
import { RoomActions } from '../enums/room-actions.enum';
import { InventoryActions } from '../enums/inventory-actions.enum';
import { stores } from '../stores/index.store';
import { items } from '../json/items.json';

export class CharacterClass {

    public entityId: number;

    public info: CharacterInfoInterface = {
        id: 0,
        alignment: true, // true for good, false for bad
        name: '',
        room: 0,
        _inventory: [],
    }

    public stats: CharacterStatsInterface = {
        hp: 10,
        strength: 1,
        attack: 1,
        defence: 1,

    }

    public _inventory: ItemInterface[] = [];

    constructor(initialState: any){
        this.info = {
            id: initialState.id,
            alignment: initialState.alignment,
            name: initialState.name,
            room: initialState.room,
        }

        this.stats = {
            hp: initialState.hp,
            strength: initialState.strength,
            attack: initialState.attack,
            defence: initialState.defence,
        }

        this._inventory = [
            ...initialState._inventory,
        ]

        this.entityId = initialState.entityId;
    }

    public action(action: string, data: any) {
        switch(action){
            case CharacterActions.TRANSITION_ROOM:
                stores.roomStore.action(RoomActions.REMOVE_ENTITY, {
                    currentRoom: this.info.room,
                    nextRoom: data,
                    entityId: this.entityId,
                });
            case InventoryActions.INVENTORY_ADD:
                this._inventory.push(data);
            // case EntityActions.INVENTORY_REMOVE:
            //     this._inventory = this.inventory.filter(entity => entity !== data);
        }
    }

    public get inventory(): ItemInterface[] {
        return this._inventory.map(item => <ItemInterface>items[item.id]);
    }
}
