const express = require('express');
var bodyparser = require("body-parser");
var urlencodedParser = bodyparser.urlencoded({
    extended: false
   });

const app = express();

app.use(express.json());

console.log("Server Side running at 5000");

app.listen(process.env.PORT || 5000, () => {
    console.log("Started Listening")
});

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/login.html")
})

app.post("/login", urlencodedParser, (req, res) => {
    var uname = req.body.uname;
    var pwd = req.body.password;
    var longtitude = req.body.lo;
    var langtitude = req.body.la;
    var appname = req.body.appname;

    var result = {
        user : uname,
        password: pwd,
        location: longtitude+","+langtitude,
        browserName: appname
    }

    res.send(result);

})