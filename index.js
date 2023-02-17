const http = require('http')
const port = 3001
const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        console.log("url heated");
        res.write('<h1>Node Js Handson 1</h1>')
        res.write('<h1>Q. What is NodeJs</h1>')
        res.write('<strong>Node.js is an open-source, corss-platform JavaScript runtime environment and library for running web applications outside the clients browser. Ryan Dahl developed nodejs in 2009, and its latest iteration, version 15.14 was released in April 2021. Developers use node.js to create server-side web applications, and its perfect for data-intensive applications since it uses an asynchronous model</strong>')
        res.write('<hr/>')
        res.write('<h2>Note: To see The json object type => /obj or /json in the end of URL.</h2>')
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
            data2: "Json Data2" }]))
        res.end()
    }
})


server.listen(port, ()=>{
    console.log('App is running')
})