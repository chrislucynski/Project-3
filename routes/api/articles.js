const express = require('express')
const router = express.Router()
const articleController = require('../../controllers/articles')

router
    .delete("/delete", articleController.deleteStoredArticles)
    .post("/store", articleController.storeArticles)
    .get("/", articleController.findStoredArticles);

module.exports = router

