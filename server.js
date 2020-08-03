const express = require('express');

const app = express();

app.use(express.json());

console.log("Server Side running at 5000");

app.listen(process.env.PORT || 5000, () => {
    console.log("Started Listening")
});

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/login.html")
})