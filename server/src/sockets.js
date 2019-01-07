const socketIO = require('socket.io');

function init(server) {
  const io = socketIO(server)
  console.log('socket is Listening!');

  io.on('connection', socket => {
    console.log('client connected!');
  });
}

module.exports = {
  init
};
