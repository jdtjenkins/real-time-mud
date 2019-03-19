import { ItemInterface } from '../interfaces/item.interface';

export interface CharacterInfoInterface {
    id: number,
    alignment: boolean, // true for good, false for bad
    name: string,
    _inventory?: ItemInterface[],
    room: number,
}

export interface CharacterStatsInterface {
    hp: number,
    strength: number,
    attack: number,
    defence: number
}
