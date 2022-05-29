const express = require("express");
const router = express.Router();

const {
  getWatchlaterVideos,
  addToWatchlater,
  removeFromWatchlater,
} = require("../controllers/watchlater.controller");

router
  .route("/")
  .get(getWatchlaterVideos)
  .post(addToWatchlater)
  .delete(removeFromWatchlater);

module.exports = router;
