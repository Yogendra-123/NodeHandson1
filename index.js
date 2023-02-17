const http = require('http')
const port = 3001
const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        console.log("url heated");
        res.write('Using Html')
        res.write('<h1>Node Js Handson 1</h1>')
        res.end()
    }
    else if (req.url === '/json'){
        console.log(req);
        res.write(JSON.stringify([1,2,3,5]))
        res.end()
    }
    else if (req.url === '/obj'){
        console.log(req);
        res.write(JSON.stringify([{
            data: "Hello Nodejs",
            data2: "Json Data2"         }]))
        res.end()
    }
})


server.listen(port, ()=>{
    console.log('App is running')
})