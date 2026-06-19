const express = require("express");
const app = express();
const mongomodel = require("./mongomodel");

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  let createduser = await mongomodel.create({
    name: "dhruvi",
    username: "d1",
    email: "d1@gmail.com",
  });
  res.send(createduser);
});

app.listen(1000, () => {
  console.log("Server running on http://localhost:1000");
});
