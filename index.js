const jsonServer = require("json-server");
const path = require("path");

// config
const server = jsonServer.create();

const middlewares = jsonServer.defaults();
server.use(middlewares);

const router = jsonServer.router(path.join(__dirname, "db.json"));
server.use(jsonServer.bodyParser);
server.use(router);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = server;
