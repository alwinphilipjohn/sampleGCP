var Http = require('http')

async function demo(){

    var req = await Http.request({host: '203.99.133.29',
               // proxy IP
               port: 80,
               // proxy port
               method: 'GET',
               path: "http://www.tiktok.com/" // full URL as path
               }, (res)=> {
                   res.on('data', function (data) {
                    console.log(data.toString());
                   responseData =  data.toString();
                   process(responseData);
                   return true;
               });
               });
               function process(data){
                   console.log(data)
               }
            }
            demo()
            

                    /*
            implementing the proxy for the requested url
        
       
        var options = {
            host: '203.99.133.29',
            port: 80,
            path: url,
            method: 'GET'
        }

        callback = function(response) {
            var str = '';

            response.on('data', function(chunk) {
                str+= chunk;
            });

            response.on('end',function(chunk) {
                console.log(str);
            });
        }

        Http.request(options.callback).end();