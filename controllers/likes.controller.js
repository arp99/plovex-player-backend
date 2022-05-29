const { likedVideo } = require("../models/liked.model");

const getLikedVideos = async (req, res) => {
  try {
    let likedVideos = await likedVideo.find({}).populate("_id");
    likedVideos = likedVideos.map((item) => ({ ...item._id._doc }));
    res.json({ success: true, likedVideos });
  } catch (err) {
    res.json({
      success: false,
      message: "Unable to fetch liked videos",
      errorMessage: err.message,
    });
  }
};

const addToLikeVideos = async (req, res) => {
  try {
    const videoToAdd = req.body;
    const savedVideo = await likedVideo(videoToAdd).save();
    res.json({ success: true, message: "Added to liked videos", savedVideo });
  } catch (err) {
    res.json({
      success: false,
      message: "Unable to add to liked videos",
      errorMessage: err.message,
    });
  }
};

const removeFromLikeVideos = async (req, res) => {
  try {
    const videoIdToRemove = req.body;
    const removedVideoId = await likedVideo.findOneAndDelete({
      _id: videoIdToRemove,
    });
    res.json({
      success: true,
      message: "Removed from liked videos",
      removedVideoId,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Unable to remove from liked videos",
      errorMessage: err.message,
    });
  }
};

module.exports = {
  getLikedVideos,
  addToLikeVideos,
  removeFromLikeVideos,
};
