const express = require("express");
const router = express.Router();

const {
  getAllPlaylist,
  createPlaylist,
  addVideosToPlaylist,
  deletePlaylist,
  removeVideoFromPlaylist,
} = require("../controllers/playlist.controller");

router.route("/")
    .get(getAllPlaylist)
    .post(createPlaylist);

router.route("/:playlistId")
    .post(addVideosToPlaylist)
    .delete(deletePlaylist);

router.route("/remove-video/:playlistId")
    .delete(removeVideoFromPlaylist);

module.exports = router;
