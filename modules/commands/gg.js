const axios = require('axios');
const fs = require('fs');
module.exports.config = {
  name: "gg",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Thanh Mài",
  description: "",
  commandCategory: "Tiện ích",
  usages: "[từ khoá]",
  cooldowns: 0
};
module.exports.run = async function({ api, event, args }) {
  const { threadID, messageID } = event;
  const prompt = args.join(' ');
  if (!prompt) {
    return api.sendMessage("❎ Vui lòng nhập câu hỏi", event.threadID);
  }
  api.sendMessage(`🔄 Đang xử lý dữ liệu`, threadID, messageID);
try {
    const response = await axios.get(`https://bard.niio-zic.repl.co/bard?ask=${encodeURIComponent(prompt)}`);
    const ask = response.data.result;
    const message = {
      body: ` ${ask} ` };
    return api.sendMessage(message, event.threadID);
  } catch (error) {
    console.error(error);
    api.sendMessage("❎ lỗi rồi", event.threadID);
  }
};