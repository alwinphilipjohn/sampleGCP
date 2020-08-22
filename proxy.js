
module.exports = async function getCode( name ){
    console.log("name "+name)
    var Http = require("http");
    var responseData;
  
        var req = await Http.request({
            host: '203.99.133.29',
            // proxy IP
            port: 80,
            // proxy port
            method: 'GET',
            path: name // full URL as path
            },function (res) {
                res.on('data', function (data) {
                console.log(data.toString());
                responseData =  data.toString();
            });
            });
    

        setTimeout(sendResult,3000)
        function sendResult(){
            console.log(responseData)
            req.end();
            return responseData;
        }

}

