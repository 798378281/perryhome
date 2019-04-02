const express = require('express')
const router = express.Router()

const service = require('../service/category_service')

/**
 * 获取详情
 * [GET]/category/:id
 */
router.get('/category/detail/:id', async (req, res, next) => {
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
 * [POST]/category
 */
router.post('/category/list', async (req, res, next) => {
  try {
    const { rows } = await service.getList(0, 10)
    let result = rows.map(item => {
      const { id, name, desc } = item
      return {
        id,
        name,
        desc
      }
    })
    res.status(200).send({
      data: result,
      code: 200,
      message: ''
    })
    next()
  } catch (error) {
    console.log(err)
    res.status(500).send({
      data: null,
      code: 500,
      message: err
    })
    next()
  }
})

/**
 * 添加
 * [POST]/category/add
 */
router.post('/category/add', async (req, res, next) => {
  console.log(req)
  const { name, desc } = req.body
  if (!name) {
    res.status(400).send({
      data: null,
      code: 400,
      message: '分类名称不能为空'
    })
    next()
  } else {
    try {
      await service.insert({ name, desc })
      res.status(200).send({
        data: null,
        code: 200,
        message: '添加成功'
      })
      next ()
    } catch (err) {
      console.log(err)
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
 * [PUT]/category/:id
 */
router.post('category/update', (req, res, next) => {
  res.status(200).send('PUT')
  next()
})

/**
 * 删除日志
 * [DELETE]/category/:id
 */
router.get('category/delete/:id', (req, res, next) => {
  console.log(req)
  res.status(200).send('DELETE')
  next()
})

module.exports = router