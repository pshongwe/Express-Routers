const leaderRouter = require('express').Router();
const bodyParser = require('body-parser');

leaderRouter.use(bodyParser.json());

leaderRouter.route('/').all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  res.send('We will send all the leaders to you.');
}).post((req, res, next) => {
  res.end('Will add the leader: ' + req.params.id + ' with detail');
}).put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /leaders');
}).delete((req, res, next) => {
    res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderId').all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  res.send('We will send the leader ' +req.params.leaderId +' to you.');
}).post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
}).put((req, res, next) => {
  es.write('Updating the leader: ' + req.params.leaderId + '\n');
  res.end('Will update the leader: ' + req.body.name + 
        ' with details: ' + req.body.description);
}).delete((req, res, next) => {  
  res.end('Deleting leader: ' + req.params.leaderId);
});

module.exports = leaderRouter;