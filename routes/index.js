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

module.exports = router;
