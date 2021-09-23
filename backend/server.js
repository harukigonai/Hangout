var http = require("http");
var url = require("url");
var path = require("path");

var fs = require("fs");

function handleRequest(req, res) {
  var pathname = req.url;

  if (pathname == "/") {
    pathname = "/index.html";
  }

  var ext = path.extname(pathname);

  var typeExt = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
  };

  var contentType = typeExt[ext] || "text/plain";

  fs.readFile(__dirname + pathname, function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end("Error loading " + pathname);
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
}
var server = http.createServer(handleRequest);
server.listen(8080);

console.log("Server started on port 8080");

var io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const pos = [];
const vel = [];

io.sockets.on("connection", function (socket) {
  console.log("We have a new client: " + socket.id);
  console.log(socket.id);

  // Initialize player position and velocity
  // pos.push({})

  socket.on("mouse", function (data) {
    console.log("Received: 'mouse' " + data.x + " " + data.y);

    socket.broadcast.emit("mouse", data);
  });

  socket.on("disconnect", function () {
    console.log("Client has disconnected");
  });
});
