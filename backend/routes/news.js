const express = require("express");
const {
  getNewss,
  getNews,
  addNews,
  updateNews,
  deleteNews,
} = require("../controllers/news");

const News = require("../models/News");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(
    advancedResults(News, {
      path: "admin",
      select: "name description",
    }),
    getNews
  )
  .post(protect, authorize("user", "admin"), addNews);

router
  .route("/:id")
  .get(getNews)
  .put(protect, authorize("admin", "admin"), updateNews)
  .delete(protect, authorize("admin", "admin"), deleteNews);

module.exports = router;
