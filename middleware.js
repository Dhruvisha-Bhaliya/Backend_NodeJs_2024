const express = require("express");
const app = express();

const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("please provide age");
  } else if (req.query.age < 18) {
    resp.send("you can not access this page");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("/", (res, resp) => {
  resp.send("Welcome to home page");
});

app.get("/users", reqFilter, (res, resp) => {
  resp.send("Welcome to Users page");
});

app.listen(5000);
