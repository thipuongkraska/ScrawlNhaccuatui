const request = require("request-promise");
const cheerio = require("cheerio");

const takeData = async (url) => {
  const res = await request.get(url);
  const $ = await cheerio.load(res);

  let myMusic = [];

  $(".box-content-music-list").each(function(stt, element) {
    const songTitle = $(element).find("h3").text();
    const image = $(element).find("img").attr("src");
    const link = $(element).find("a").attr("href");
    const artist = $(element).find(".name_sing_under").text();

    const song = {
      songTitle,
      image,
      link,
      artist,
    };

    myMusic.push(song);
  });

  return myMusic;
}

module.exports = takeData;
