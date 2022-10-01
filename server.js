const HTTP_PORT = process.env.PORT || 8080;
const express = require("express");
const path = require("path");
const app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/Blog/blog.html"));
});

app.get("/article", function (req, res) {
    res.sendFile(path.join(__dirname, "/article/read_more.html"));
});

app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "/login/login.html"));
});

app.get("/registration", function(req,res){
    res.sendFile(path.join(__dirname, "/registration/registration.html"));
  });

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);