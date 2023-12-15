const express = require("express");

const app = express();
const path = require("path");
const db = require("./mongoose");
app.use(express.json());
app.use(express.static(path.join(__dirname, "./build")));
const usersRoute = require("./routes/usersRoute");

app.use("/api/users", usersRoute);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

const port = process.env.PORT || 7000;
app.listen(port, function (err) {
  if (err) {
    console.log("error in connecting to express server", err);
    return;
  }
  console.log("Express server is running on port:", port);
});
