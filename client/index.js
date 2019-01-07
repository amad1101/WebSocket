// This is the client
import io from 'socket.io-client'


const API_URL = 'http://localhost:5000';
const socket = io.connect(API_URL);
socket.on('connect', () => {
  console.log('connected to the server');
})

console.log('it\'s working');
