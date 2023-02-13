const express = require("express");
const {createArticle, getAllArticles, getArticle, updateArticle, deleteArticle} = require("../controllers/articleController")


const router = express.Router();

router.route("/articles").post(createArticle);
router.route("/articles").get(getAllArticles);
router.route("/articles/:id").get(getArticle);
router.route("/articles/:id").patch(updateArticle);
router.route("/articles/:id").delete(deleteArticle);


module.exports = router