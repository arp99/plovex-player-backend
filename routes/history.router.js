const express = require("express");
const router = express.Router();

const {
  getVideosInHistory,
  saveVideoToHistory,
  removeVideoFromHistory,
} = require("../controllers/history.controller");

router
  .route("/")
  .get(getVideosInHistory)
  .post(saveVideoToHistory)
  .delete(removeVideoFromHistory);

module.exports = router;
