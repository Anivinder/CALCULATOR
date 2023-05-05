const http = require('http')
const fs = require('graceful-fs')
const server  = http.createServer();


server.listen(8000, (req,res)=>{
    console.log('listening on port 8000');
})

server.on('request', (req,res)=>{
    return res.end(fs.readFileSync(__dirname + '/index.html'))
})