import { RoomStore } from './room.store';
import { EntityStore } from './entity.store';


export const stores = {
    roomStore: new RoomStore(),
    entityStore: new EntityStore(),
}
