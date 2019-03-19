import { CharacterClass } from './classes/character.class';
import { RoomClass } from './classes/room.class';
import { stores } from './stores/index.store';

import wss from './websocket';

const CharacterJacob = new CharacterClass({
    id: 1,
    alignment: true, // true for good, false for bad
    name: 'Jacob',
    maxHp: 10,
    hp: 10,
    strength: 5,
    attack: 5,
    defence: 5,
    _inventory: [1],
})

const CharacterKatie = new CharacterClass({
    id: 2,
    alignment: true, // true for good, false for bad
    name: 'Katie',
    maxHp: 10,
    hp: 10,
    strength: 5,
    attack: 5,
    defence: 5,
    _inventory: [1, 2],
})

const RoomUpper = new RoomClass({
    id: 1,
    name: 'Upper',
    description: 'A nice place nigga',
    coords: [0, 0],
    entities: [],
})

const RoomLower = new RoomClass({
    id: 2,
    name: 'Lower',
    description: 'Still a cool place',
    coords: [0, -1],
    entities: [],
})

export class MainGame {
    constructor() {
        stores.entityStore.add(CharacterJacob);
        stores.entityStore.add(CharacterKatie);
        stores.roomStore.add(RoomUpper);
        stores.roomStore.add(RoomLower);
    }
}

export const onConnection = (ws) => {
    ws.send(JSON.stringify(stores));
}
