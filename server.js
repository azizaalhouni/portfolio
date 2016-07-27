// Let's build a server!
var express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

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
