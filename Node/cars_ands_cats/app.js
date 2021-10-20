const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if(request.url === '/styles.css') {
        fs.readFile('stylesheets/styles.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } 
    else if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('views/newcar.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }


    else if(request.url === '/images/645191.jpg') {
        fs.readFile('./images/645191.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/images/do.jpg') {
        fs.readFile('./images/do.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === '/images/cat-floor.jpg') {
		fs.readFile('./images/cat-floor.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
    else if (request.url === '/images/cat-stripes.jpg') {
		fs.readFile('./images/cat-stripes.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
    else if (request.url === '/images/white-cat.jpg') {
		fs.readFile('./images/white-cat.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}

    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(6789);
console.log("listening on port 6789");

