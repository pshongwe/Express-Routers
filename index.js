const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const hostname = 'localhost';
const port = 3000;
const morgan = require('morgan');
var dishRouter = require('./routes/dishRouter');
var promoRouter = require('./routes/promoRouter');
var leaderRouter = require('./routes/leaderRouter');

app.use(morgan('dev'));
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
