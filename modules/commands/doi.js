const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "dỗi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vdang",
  description: "ngỏ lời",
  commandCategory: "Hành Động",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://scontent.fhan3-3.fna.fbcdn.net/v/t1.15752-9/371533308_662010772742932_3377020307948875296_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CcF_SnzoRpoQ7kNvgGbWJ1Y&_nc_ht=scontent.fhan3-3.fna&oh=03_Q7cD1QGcEeL9NWoqG7PI9wMye2ePKzA0WARI68bSwblI6o1mYQ&oe=6690AF3E",
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body: `Bé dỗi ${tag} rồi ToT`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/doi.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/doi.png"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/doi.png")).on("close",() => callback());
   }