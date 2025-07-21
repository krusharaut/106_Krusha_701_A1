const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/gethello", (req, res) => {
  res.send("Hello Node js!!");
});

app.get("/Question2", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index2.html"));
});

app.listen(port, () => {
  console.log("Server is indexing...");
});
