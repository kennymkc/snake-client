let connection;

const saying = {
  "1": "Say: nom nom nom",
  "2": "Say: i'm gonna get u",
  "3": "Say: sssssss"
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  };
  if (key === 'w') {
    connection.write("Move: up")
    //console.log("Moved up")
  };
  if (key === 'a') {
    connection.write("Move: left")
    //console.log("Moved left")
  };
  if (key === 's') {
    connection.write("Move: down")
    //console.log("Moved down")
  };
  if (key === 'd') {
    connection.write("Move: right")
    //console.log("Moved right")
  };
  if (saying[key]) {
    connection.write(saying[key])
  };
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };