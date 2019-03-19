import { BaseStore } from './base.store';
import { RoomActions } from '../enums/room-actions.enum';
import { RoomInterface } from '../interfaces/room.interface';
import { RoomClass } from '../classes/room.class';
import { EntityActions } from '../enums/entity-actions.enum';

export class RoomStore extends BaseStore<RoomClass> {
    public action(action: string, data: any): void {
        switch (action){
            case EntityActions.TRANSITION_ROOM:
                const roomA = this.state.find(room => room.id === data.currentRoom);
                const roomB = this.state.find(room => room.id === data.nextRoom);

                roomA.action(RoomActions.REMOVE_ENTITY, data.entityId);
                roomB.action(RoomActions.ADD_ENTITY, data.entityId);
        }
    }
}
