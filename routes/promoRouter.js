const promoRouter = require('express').Router();
const bodyParser = require('body-parser');

promoRouter.use(bodyParser.json());

promoRouter.route('/').all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  res.send('We will send all the promos to you.');
}).post((req, res, next) => {
  res.end('Will add the promo: ' + req.params.id + ' with detail');
}).put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /promotions');
}).delete((req, res, next) => {
    res.end('Deleting all promos');
});

promoRouter.route('/:promoId').all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  res.send('We will send the promo ' +req.params.promoId +' to you.');
}).post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promotions/'+ req.params.promoId);
}).put((req, res, next) => {
  es.write('Updating the promo: ' + req.params.promoId + '\n');
  res.end('Will update the promo: ' + req.body.name + 
        ' with details: ' + req.body.description);
}).delete((req, res, next) => {
  res.end('Deleting promo: ' + req.params.promoId);
});

module.exports = promoRouter;