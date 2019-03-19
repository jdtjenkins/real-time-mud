import { RoomActions } from '../enums/room-actions.enum';
import { RoomInterface } from '../interfaces/room.interface';

export class RoomClass implements RoomInterface {

    public id: number
    public name: string;
    public description: string;
    //public coords = object, // feature to look int
    public entities: any[] = [];// WARNING:

    constructor(roomInfo?: RoomInterface){
        this.id = roomInfo.id;
        this.name = roomInfo.name;
        this.description = roomInfo.description;
        this.entities = [
            ...this.entities,
            ...roomInfo.entities,
        ];
    }

    public action(action: string, data: any) {
        switch(action){
            case RoomActions.ADD_ENTITY: // Data should be a number
                this.entities.push(data);
            case RoomActions.REMOVE_ENTITY: // Data should be a number
                this.entities = this.entities.filter(entity => entity !== data);
        }
    }
}
