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
router.get('/journal/detail/:id', async (req, res, next) => {
  let id = req.params.id
  try {
    const { dataValues } = await service.getInfo(id)
  } catch (err) {}
  res.status(200).send(dataValues)
  next()
})

/**
 * 分页查询列表
 * [POST]/journal
 */
router.post('/journal/list', async (req, res, next) => {
  res.status(200).send('POST')
  next()
})

/**
 * 添加
 * [POST]/journal/add
 */
router.post('/journal/add', async (req, res, next) => {
  console.log(req)
  const {title, category, desc, content} = req.body
  if (!title || !category || !desc) {
    res.status(400).send({
      data: null,
      code: 400,
      message: '缺少必要数据'
    })
    next()
  } else {
    try {
      await service.insert({ title, category, desc, content })
      res.status(200).send({
        data: null,
        code: 200,
        message: '添加成功'
      })
      next()
    } catch (err) {
      console.log('err:', err)
      res.status(500).send({
        data: null,
        code: 500,
        message: err
      })
      next()
    }
  }
  
})

/**
 * 修改日志
 * [PUT]/journal/:id
 */
router.post('journal/update', (req, res, next) => {
  res.status(200).send('PUT')
  next()
})

/**
 * 删除日志
 * [DELETE]/journal/:id
 */
router.delete('journal/delete/:id', (req, res, next) => {
  res.status(200).send('DELETE')
  next()
})


module.exports = router