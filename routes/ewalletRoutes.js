const router = require('express').Router();
const verify = require('./verifyToken');
const payService = require('../services/pay.service');

router
.post('/deposit',verify, (req,res,next)=>{
    try {
        const paymentResponse = await payService.debitCard(req.Customer.accountNumber, req.body.card, req.body.amount);
        res.json(paymentResponse);
      } catch (error) {
        next(error);
      }



});

module.exports(router);
