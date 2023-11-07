// Create web server
// 1. Load http module
var http = require('http');
// 2. Create web server
var server = http.createServer(function(req, res){
  // 3. Set content header
  res.writeHead(200, {'Content-Type': 'text/html'});
  // 4. Set response body
  res.write('<html><body><p>This is home Page.</p></body></html>');
  res.end();
});
// 5. Make web server listen on port 3000
server.listen(3000);
console.log('Server is listening on port 3000');