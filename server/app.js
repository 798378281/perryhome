const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const journalRoute = require('./route/journal')
const journalCategory = require('./route/journal-category')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/', journalRoute)
// app.use(journalCategory)

// 异常处理
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send(err.stack)
})

app.listen(3000, () => {
  console.log('服务器启动，端口号为3000')
})