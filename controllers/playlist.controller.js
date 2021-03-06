const { playlist } = require("../models/playlist.model")

const getAllPlaylist = async (req, res) => {
  try {
    const playlistData = await playlist.find({}).populate("videos");
    res.json({ success: true, playlistData });
  } catch (err) {
    res.json({
      success: false,
      message: "Unable to fetch playlists",
      errorMessage: err.message,
    });
  }
};

const createPlaylist = async (req, res) => {
  try {
    const { playlistName, videos } = req.body;
    const createdPlaylist = await playlist({ playlistName, videos }).save();
    res.json({ success: true, createdPlaylist });
  } catch (err) {
    res.json({
      success: false,
      message: "Unable to create playlist or add video to playlist",
      errorMessage: err.message,
    });
  }
};

const addVideosToPlaylist = async (req, res) => {
  try {
    const { playlistId } = req.params;
    const { videoId } = req.body;
    // find the playlist with that playlistId
    const foundPlaylist = await playlist.findOne({ _id: playlistId });

    //check if the videoId is already present in this playlist or not
    const isVideoInPlaylist = foundPlaylist.videos.includes(videoId);
    const updatedVideos = foundPlaylist.videos.filter(
      (video) => video._id != videoId
    );

    //if  video is already present remove from paylist , else push it to the playlist
    isVideoInPlaylist
      ? (foundPlaylist.videos = updatedVideos)
      : foundPlaylist.videos.push(videoId);
    const updatedPlaylist = await foundPlaylist.save();
    res.json({ success: true, updatedPlaylist, message: "Playlist updated" });
  } catch (err) {
    res.json({
      success: false,
      message: "Unable to update playlist",
      errorMessage: err.message,
    });
  }
};

const deletePlaylist = async (req, res) => {
  try {
    const { playlistId } = req.params;
    const deletedPlaylist = await playlist.findOneAndDelete({
      _id: playlistId,
    });
    res.json({
      success: true,
      message: "Successfully deleted playlist",
      deletedPlaylist,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Unable to delete playlist",
      errorMessage: err.message,
    });
  }
};

const removeVideoFromPlaylist = async (req, res) => {
  try {
    const { playlistId } = req.params;
    const videoId = req.query.videoId;

    const foundPlaylist = await playlist.findById(playlistId);
    const updatedVideos = foundPlaylist.videos.filter((_id) => _id != videoId);
    foundPlaylist.videos = updatedVideos;
    const updatedPlaylist = await foundPlaylist.save();
    res.json({
      success: true,
      updatedPlaylist,
      message: "Video removed Successfully",
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Unable to remove video from playlist",
    });
  }
};

module.exports = {
  getAllPlaylist,
  createPlaylist,
  addVideosToPlaylist,
  deletePlaylist,
  removeVideoFromPlaylist,
};
