const express = require("express");
const router = express.Router();

const {
  getLikedVideos,
  addToLikeVideos,
  removeFromLikeVideos,
} = require("../controllers/likes.controller");

router
  .route("/")
  .get(getLikedVideos)
  .post(addToLikeVideos)
  .delete(removeFromLikeVideos);

module.exports = router;
