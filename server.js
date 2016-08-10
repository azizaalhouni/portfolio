// Let's build a server!
var express = require('express'),
//require in our request proxy module to publish on heroku
//proxy give us an autorizition to use github so proxy will call process.env
  requestProxy = require('express-request-proxy'),
  //process.env just define in the server
  port = process.env.PORT || 4000,
  app = express();
  //heroku Now use our proxy within a function to request
  //our github data on the Server.
var proxyGitHub = function(request, response){
  console.log('Routing GitHub request for', request.params[0]);
  (
    requestProxy({
      url: 'http://api.github.com/' + request.params[0],
      headers: {Authorization: 'token ' + process.env.GITHUB_TOKEN }
    })
  )(request, response);
};
app.get('/github/*', proxyGitHub);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  //root . means own directory
  response.sendFile('index.html', {root: '.'});
});
//take my port and anonumes function
//i need to tell my app to listen
app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
