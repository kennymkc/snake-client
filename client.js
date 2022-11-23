const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  const moveUp = function () {
    conn.write("Move: up")
  }

  conn.on('connect', () => {
    console.log('A connection has been made!');
    conn.write("Name: KNI");
    conn.write("Move: up");
  });

  conn.on('data', (data) => {
    console.log(data)
  });

  return conn;
};



module.exports = { connect };