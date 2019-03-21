const express = require('express')

const router = express.Router()

router.use((req, res, next) => {
  console.log(`The category API begin: [Time: ${new Date()}]`)
  console.log(`The params by request is:`, req)
  next()
})

/**
 * 获取详情
 * [GET] /category/:id
 */
router.get('/category/:id', (req, res, next) => {next()})

/**
 * 分页获取分类列表
 * [POST] /category
 */
router.post('/category', (req, res, next) => {next()})


/**
 * 修改分类
 * [PUT] /category/:id
 */
router.put('/category/:id', (req, res, next) => {next()})

/**
 * 删除分类
 * [DELETE] /category/:id
 */
router.delete('/category/:id', (req, res, next) => {next()})

module.exports = router