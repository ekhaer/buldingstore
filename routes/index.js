const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');


router.get('/', (req, res) => {
      res.send('Building Store')
});

module.exports = router;
