let express = require("express");

let app = express();

// server setup
let server = app.listen(4000, () => {
  console.log("Server is running on localhost:4000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
