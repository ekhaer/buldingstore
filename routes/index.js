const express = require('express');
const app = express()
const router = express.Router();
const Controller = require('../controllers/controller');
const loginRouter = require('./loginRouter')
const isLogin = require('../middlewares/isLoginMiddleware')

// app.use(isLogin)

router.get('/', isLogin, (req, res) => {
      console.log(req);
      res.send('Building Store')
});

router.use('/', loginRouter)

router.get('/home', isLogin, Controller.productFindAll);
router.post('/:id/add-chart', isLogin, Controller.addChart);
router.get('/orderlist', isLogin, Controller.orderListFindAll);
router.get('/:id/delete-order', isLogin, Controller.deleteOrder);
router.get('/:id/edit-order', Controller.getEditOrder);
router.post('/:id/edit-order', Controller.postEditOrder);
router.get('/checkout', isLogin, Controller.checkout);

module.exports = router;
