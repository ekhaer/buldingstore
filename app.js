const express = require('express')
const app = express()
const port = 3100
const router = require('./routes/index');
const session = require('express-session')

app.set('view engine', 'ejs');

app.use(session({
  secret: "supermarket bahan bangunan",
  resave: false,
  saveUninitialized: true
}))

app.use(express.urlencoded({ extended : false }))

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})