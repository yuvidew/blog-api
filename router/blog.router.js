const express = require('express')
const {getAddBlogs , getFilterBlogs} = require('../controller/getAddBlogs')
const router = express.Router()


router.post('/add/blogs' , getAddBlogs)
router.get('/blog' , getFilterBlogs)

module.exports = router