const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');


router.get('/', (req, res) => {
      res.send('Building Store')
});

router.get('/home', Controller.productFindAll);
router.post('/:id/add-chart', Controller.addChart);
router.get('/orderlist', Controller.orderListFindAll);
router.get('/orderlist', Controller.orderListFindAll);

module.exports = router;
