import * as WebSocket from 'ws';
import { onConnection } from './game';

class WebsocketServer {

    private _server: any;
    private _connections: WebSocket[] = [];

    constructor(port: number){
        this._server = new WebSocket.Server({
            port,
        }, () => console.log('~ Websocket Server Running ~'));

        this._server.on('error', (err: object) => console.log(err));
        this._server.on('open', (ws: WebSocket) => this.onOpen(ws));
        this._server.on('connection', (ws: WebSocket) => this.onConnection(ws));
        this._server.on('message', (ws: WebSocket) => this.onMessage(ws))
    }

    public send(ws: number | WebSocket, data: object): void {
        if (ws.send){
            return ws.send(JSON.stringify(data));
        }

        this._connections[ws].ws.send(JSON.stringify(data));
    }

    private onOpen(ws: WebSocket): void {
        // console.log(ws);
    }

    private onConnection(ws: WebSocket): void {
        this._connections.push({
            id: this._connections.length + 1,
            ws,
        });

        this.send(ws, {
            status: 200,
            message: 'Connected',
        })

        onConnection(ws);
    }

    public onMessage(data: object): void {
        console.log(data);
    }
}

export default new WebsocketServer(1236);
