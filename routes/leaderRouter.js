const leaderRouter = require('express').Router();
const bodyParser = require('body-parser');

leaderRouter.use(bodyParser.json());

leaderRouter.route('/').all((req,res,next) => {
  console.log("leaders leaderRouter.use");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  console.log("leaders leaderRouter.get");
  res.send('We will send all the leaders to you.');
}).post((req, res, next) => {
  console.log("leaders leaderRouter.post");
 res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
}).put((req, res, next) => {
  console.log("leaders leaderRouter.put");
  res.statusCode = 403;
  res.end('PUT operation not supported on /leaders');
}).delete((req, res, next) => {
  console.log("leaders leaderRouter.delete");
    res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderId').all((req,res,next) => {
  console.log(":leaderId leaderRouter.use");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  console.log(":leaderId leaderRouter.get");
  res.send('We will send all the leaders to you.');
}).post((req, res, next) => {
  console.log(":leaderId leaderRouter.post");
 res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
}).put((req, res, next) => {
  console.log(":leaderId leaderRouter.put");
  res.statusCode = 403;
  res.end('PUT operation not supported on /leaders');
}).delete((req, res, next) => {
  console.log(":leaderId leaderRouter.delete");
    res.end('Deleting all leaders');
});

console.log("leaders b4 export leaderRouter");
module.exports = leaderRouter;