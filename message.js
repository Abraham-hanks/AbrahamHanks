var http = require("http");
var fs = require("fs");
const { parse } = require('querystring');
let body = 
`<!doctype html>
<html>
<body>
    <form action="/message" method="post">
        <label>Message</label><input type="text" name="message"/>
        <input type="submit" value="Submit text"/>
    </form>
</body>
</html>
`;
http.createServer(function(req,res){
    if (req.method === 'POST') {
        body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            let data = parse(body);
            fs.writeFile('message.txt', data.message, (err) => { 
      
                // In case of a error throw err. 
                if (err) throw err; 
                console.log("Succesfully created file");
            }) 
            res.end('Message saved in message.txt');
        });
    }
    else{
        console.log("something...");
        res.end(body);
    }
}).listen(3000);
