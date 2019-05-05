const dishRouter = require('express').Router();
const bodyParser = require('body-parser');

dishRouter.use(bodyParser.json());

dishRouter.route('/').all((req,res,next) => {
  console.log("dishes dishRouter.use");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  console.log("dishes dishRouter.get");
  res.send('We will send all the dishes to you.');
}).post((req, res, next) => {
  console.log("dishes dishRouter.post");
 res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
}).put((req, res, next) => {
  console.log("dishes dishRouter.put");
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
}).delete((req, res, next) => {
  console.log("dishes dishRouter.delete");
    res.end('Deleting all dishes');
});

dishRouter.route('/:dishId').all((req,res,next) => {
  console.log(":dishId dishRouter.use");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  console.log(":dishId dishRouter.get");
  res.send('We will send all the dishes to you.');
}).post((req, res, next) => {
  console.log(":dishId dishRouter.post");
 res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
}).put((req, res, next) => {
  console.log(":dishId dishRouter.put");
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
}).delete((req, res, next) => {
  console.log(":dishId dishRouter.delete");
    res.end('Deleting all dishes');
});

console.log("dishes b4 export dishRouter");
module.exports = dishRouter;