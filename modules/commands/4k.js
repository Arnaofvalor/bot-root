module.exports.config = {
  name: "10k",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NLam182",//lụm đc code ban đầu ko có cre nên chịu
  description: "",
  commandCategory: "tiện ích",
  usages: "[reply]",
  cooldowns: 0
};

module.exports.run = async function({ api, event, args }) {
  const fs = global.nodemodule["fs-extra"];
  const axios = require('axios').default;
  const isLink = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(args[0]);
  var linkUp = event.messageReply.attachments[0].url || (isLink ? args[0] : '');
  if (!linkUp) return api.sendMessage('Vui lòng reply 1 ảnh hoặc nhập link ảnh!', event.threadID, event.messageID);
  try {
    if (isLink) {
      const response = await axios.get(linkUp, { responseType: "arraybuffer" });
      api.sendMessage("Đang load, chờ tí nhé....!", event.threadID);
      fs.writeFileSync(__dirname + `/cache/netanh.png`, Buffer.from(response.data, "binary"));
    } else {
      const res = await axios.get(`https://apibot.dungkon.me/imgur?link=${encodeURIComponent(linkUp)}&apikey=Free_1744646768`);
      const link = res.data.uploaded.image;
      const response = await axios.get(`http://43.134.186.138:3333/s4b1k/remini?input=${link}`, { responseType: "arraybuffer" });
      api.sendMessage("Đang địt chờ bố 1 tí....!", event.threadID);
      fs.writeFileSync(__dirname + `/cache/netanh.png`, Buffer.from(response.data, "binary"));
    }
    return api.sendMessage({
      body: `🧸Ảnh của mày đây!`,
      attachment: fs.createReadStream(__dirname + `/cache/netanh.png`)
    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/netanh.png`), event.messageID);
  } catch (e) {
    return api.sendMessage(e, event.threadID, event.messageID);
  }
};
