const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const journalRoute = require('./route/journal')
const category = require('./route/category')
const logger = require('morgan')
const uploadApi = require('./route/upload')

// 跨域中间件
const allowCors = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Credentials','true')
  next()
}

app.use(allowCors)
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.bodyParser({ uploadDir: './upload_dir'}))

app.use('/api/', journalRoute)
app.use('/api/', category)
app.use('/api/', uploadApi)
// app.use(journalCategory)

// 异常处理
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send(err.stack)
})

app.listen(3000, () => {
  console.log('服务器启动，端口号为3000')
})