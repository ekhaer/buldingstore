const express = require('express');
const app = express()
const router = express.Router();
const Controller = require('../controllers/controller');
const loginRouter = require('./loginRouter')
const isLogin = require('../middlewares/isLoginMiddleware')

app.use(isLogin)

router.get('/', (req, res) => {
      console.log(req);
      res.send('Building Store')
});

router.use('/', loginRouter)

router.get('/home', Controller.productFindAll);
router.post('/:id/add-chart', Controller.addChart);
router.get('/orderlist', Controller.orderListFindAll);
router.get('/:id/delete-order', Controller.deleteOrder);
router.get('/checkout', Controller.checkout);

module.exports = router;
