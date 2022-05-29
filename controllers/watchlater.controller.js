const { watchlaterVideo } = require("../models/watchlater.model");

const getWatchlaterVideos = async (req, res) => {
  try {
    let watchlaterVideos = await watchlaterVideo.find({}).populate("_id");
    watchlaterVideos = watchlaterVideos.map((item) => ({ ...item._id._doc }));
    res.json({ success: true, watchlaterVideos });
  } catch (err) {
    res.json({
      succes: false,
      message: "Unable to fetch watchlater videos",
      errorMessage: err.message,
    });
  }
};

const addToWatchlater = async (req, res) => {
  try {
    const videoToAdd = req.body;
    const savedVideo = await watchlaterVideo(videoToAdd).save();
    res.json({ success: true, message: "Added to Watchlater", savedVideo });
  } catch (err) {
    res.json({
      success: false,
      message: "Unable to add to Watchlater",
      errorMessage: err.message,
    });
  }
};

const removeFromWatchlater = async (req, res) => {
  try {
    const videoIdToRemove = req.body;
    const deletedVideoId = await watchlaterVideo.findOneAndDelete({
      _id: videoIdToRemove._id,
    });
    res.json({
      success: true,
      message: "Successfully removed video from watchlater",
      deletedVideoId,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Unable to remove video from wathclater",
      errorMessage: err.message,
    });
  }
};

module.exports = {
  getWatchlaterVideos,
  addToWatchlater,
  removeFromWatchlater,
};
