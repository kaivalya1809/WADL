1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
const http = require('http')
const fs = require('fs')
const port = 3000
 
const server = http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile('main.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error: File not found')
        }else{
            res.write(data)
        }
        res.end()
    })
 
})
 
server.listen(port, function(error) {
    if (error) {
        console.log('An error has occured', error)
 
    } else {
        console.log('Server is running on port ' + port)
    }
})