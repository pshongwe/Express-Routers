const dishRouter = require('express').Router();
const bodyParser = require('body-parser');

dishRouter.use(bodyParser.json());

dishRouter.route('/').all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  res.send('We will send all the dishes to you.');
}).post((req, res, next) => {
 res.end('Will add the dish: ' + req.params.id + ' with detail');
}).put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
}).delete((req, res, next) => {
    res.end('Deleting all dishes');
});

dishRouter.route('/:dishId').all((req,res,next) => {
  console.log(":dishId dishRouter.use");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  res.send('We will send the dish ' +req.params.dishId +' to you.');
}).post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/'+ req.params.dishId);
}).put((req, res, next) => {
  es.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
}).delete((req, res, next) => {
  res.end('Deleting dish: ' + req.params.dishId);
});

module.exports = dishRouter;