const express = require('express')
const router = express.Router()
const articleController = require('../../controllers/articles')

router
    .get("/", articleController.findStoredArticles)
    .post("/", articleController.storeArticles);

module.exports = router