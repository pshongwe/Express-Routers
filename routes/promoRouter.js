const promoRouter = require('express').Router();
const bodyParser = require('body-parser');

promoRouter.use(bodyParser.json());

promoRouter.route('/').all((req,res,next) => {
  console.log("promos promoRouter.use");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  console.log("promos promoRouter.get");
  res.send('We will send all the promos to you.');
}).post((req, res, next) => {
  console.log("promos promoRouter.post");
 res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
}).put((req, res, next) => {
  console.log("promos promoRouter.put");
  res.statusCode = 403;
  res.end('PUT operation not supported on /promos');
}).delete((req, res, next) => {
  console.log("promos promoRouter.delete");
    res.end('Deleting all promos');
});

promoRouter.route('/:promoId').all((req,res,next) => {
  console.log(":promoId promoRouter.use");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  console.log(":promoId promoRouter.get");
  res.send('We will send the promo ' +req.params.promoId +' to you.');
}).post((req, res, next) => {
  console.log(":promoId promoRouter.post");
  res.statusCode = 403;
  res.end('POST operation not supported on /promoes/'+ req.params.promoId);
}).put((req, res, next) => {
  console.log(":promoId promoRouter.put");
  es.write('Updating the promo: ' + req.params.promoId + '\n');
  res.end('Will update the promo: ' + req.body.name + 
        ' with details: ' + req.body.description);
}).delete((req, res, next) => {
  console.log(":promoId promoRouter.delete");
  res.end('Deleting promo: ' + req.params.promoId);
});

console.log("promos b4 export promoRouter");
module.exports = promoRouter;