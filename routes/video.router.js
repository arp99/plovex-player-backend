const express = require("express");
const router = express.Router();

const {
  getAllVideos,
  saveVideo,
  getVideoById,
} = require("../controllers/videos.controller");

//fetch all videos from db
router.route("/")
    .get(getAllVideos)
    .post(saveVideo);

router.route("/v/:videoId").get(getVideoById);

module.exports = router;
