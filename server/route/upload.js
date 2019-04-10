const express = require('express')
const router = express.Router()
const fs = require('fs')
const multer = require('multer')

const UPLOAD_DIR = 'server/upload/'

let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, UPLOAD_DIR)
  },
  filename: (req, file, callback) => {
    let fileName = file.originalname.split('.')
    let newName = Date.now() + '.' + fileName[fileName.length - 1]
    callback(null, newName)
  }
})

const upload = multer({
  storage: storage
})

function createDir (folder) {
  try {
    fs.accessSync(folder)
  } catch (e) {
    fs.mkdirSync(folder)
  }
}

createDir(UPLOAD_DIR)



/**
 * 文件上传
 */
router.post('/file/upload', upload.single('file'), (req, res, next) => {
  var file = req.file
  const url = 'http://' + req.host + ':3000/' + req.file.path
  res.status(200).json({
    code: 200,
    message: '上传成功',
    data: url
  })
  next()
})


/**
 * 删除文件
 */
router.get('/file/delete', (req, res, next) => {
  console.log(req)
  next()
})

module.exports = router