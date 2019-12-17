const express = require('express')
const router = express.Router()
const articleController = require('../../controllers/articles')

router
    .get("/", async function(req, res){
        const response = await articleController.scrapeArticles();
        console.log(response)
        res.json(response);
    });

module.exports = router

