import * as express from 'express';
import wss from './src/websocket';
import { MainGame } from './src/game';

const game = new MainGame();
const app = express();

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(1235, () => {
    console.log('~ Http Server Listening ~');
});

if(wss){
    console.log();
}
