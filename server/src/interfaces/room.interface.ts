export interface RoomInterface {
    id: number,
    name: string,
    description?: string,
    coords?: object, // feature to look into
    entities: number[],
}
