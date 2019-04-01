const express = require('express')
const router = express.Router()

const service = require('../service/journal_service')

router.use((req, res, next) => {
  console.log(`The journal API begin: [Time: ${new Date()}]`)
  next()
})

/**
 * 获取日志详情
 * [GET]/journal/:id
 */
router.get('/journal/:id', async (req, res, next) => {
  let id = req.params.id
  try {
    const { dataValues } = await service.getInfo(id)
  } catch (err) {}
  
  console.log('data:', dataValues)
  res.status(200).send(dataValues)
  next()
})

/**
 * 分页查询列表
 * [POST]/journal
 */
router.post('/journal', async (req, res, next) => {
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