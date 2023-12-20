const http = require('http')
const port = 3000

let mainCounter = 0
let aboutCounter = 0
let notFoundCounter = 0

const mainLink = '<a href="http://localhost:3000/">Main</a>'
const aboutLink = '<a href="http://localhost:3000/about">About</a>'

const server = http.createServer((req, res) => {

	if (req.url === '/') {
		res.writeHead(200, {
			'Content-Type': 'text/html; charset=UTF-8'
		})
		res.end(`${aboutLink}<h1>Main</h1><span>${++mainCounter}</span>`)
	} else if (req.url === '/about') {
		res.writeHead(200, {
			'Content-Type': 'text/html; charset=UTF-8'
		});
		res.end(`${mainLink}<h1>About</h1><span>${++aboutCounter}</span>`)
	} else {
		res.writeHead(404, {
			'Content-Type': 'text/html; charset=UTF-8'
		});
		res.end(`${mainLink}${aboutLink}<h1>Page is not fount 404</h1><span>${++notFoundCounter}</span>`)
	}
})

server.listen(port, () => {
	console.log(`Server work on port: ${port}`)
})