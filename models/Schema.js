const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema({
  songTitle: String,
  image: String,
  link: String,
  artist: String,
});

const myMusic = mongoose.model("MusicSchema", MusicSchema);

module.exports = myMusic;
