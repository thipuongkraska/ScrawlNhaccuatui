const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

const takeData = require("./crawl");
const MusicSchema = require("./models/Schema");

const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/nhaccuatui";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const db = mongoose.connection;
db.on("open", () => console.log("connected to database"));

const url = "https://www.nhaccuatui.com/";

app.get("/", async (req,res) => {
  const music = await MusicSchema.find({});
  await res.render("index", {music: music});
});

// (async function () {
//   const musics = await takeData(url);
//   console.log(musics);
//   await MusicSchema.create(musics);
//   console.log("success!");
// })();
app.listen(3000, function() {
  console.log("server is running");
});
