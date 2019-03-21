const express = require('express')

const router = express.Router()

router.use((req, res, next) => {
  console.log(`The journal API begin: [Time: ${new Date()}]`)
  console.log(`The params by request is:`, req)
  next()
})

/**
 * 获取日志详情
 * [GET]/journal/:id
 */
router.get('/journal/:id', (req, res, next) => {
  res.status(200).send('GET')
  next()
})

/**
 * 分页查询列表
 * [POST]/journal
 */
router.post('/journal', (req, res, next) => {
  res.status(200).send('POST')
  next()
})

/**
 * 添加
 * [POST]/journal/add
 */
router.post('/journal/add', (req, res, next) => {
  res.status(200).send('POST')
  next()
})

/**
 * 修改日志
 * [PUT]/journal/:id
 */
router.put('journal/:id', (req, res, next) => {
  res.status(200).send('PUT')
  next()
})

/**
 * 删除日志
 * [DELETE]/journal/:id
 */
router.delete('journal/:id', (req, res, next) => {
  res.status(200).send('DELETE')
  next()
})

module.exports = router