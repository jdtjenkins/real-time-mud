import { axios } from 'axios';

const ws = new WebSocket('ws://localhost:1236');

ws.onerror = err => console.log(err);

ws.onmessage = data => console.log(JSON.parse(data.data));
