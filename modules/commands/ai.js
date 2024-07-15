const axios = require("axios");
const moment = require("moment-timezone");

module.exports.config = {
    name: "gpt",
    version: "8.8",
    hasPermission: 0,
    credits: "ex ★ machina",
    description: "ChatGPT 4.0",
    commandCategory: "noprefix",
    usages: "noprefix",
    cooldowns: 3,
};

module.exports.handleEvent = async function({ api, event }) {
    if (!(event.body.indexOf("gpt") === 0 || event.body.indexOf("Gpt") === 0)) return;
    const args = event.body.split(/\s+/);
    args.shift();
    if (args.length === 0) {
        api.sendMessage("🤖 ChatGPT 4.0 được huấn luyện bởi OpenAI.\n🔍 Để sử dụng: [Gpt / gpt] [input]\n👉 Ví dụ hãy nhắn: Gpt ý nghĩa của cuộc sống", event.threadID, event.messageID);
        return; 
    }
    try {
        api.setMessageReaction("✅", event.threadID, event.messageID);
        const prompt = args.join(" ");
        const response = await axios.get(`http://43.134.186.138:4444/chatgpt5?text=${encodeURIComponent(prompt)}`);
        if (response.data && response.data.content) {
            const currentTimePH = moment().tz('Asia/Ho_Chi_Minh').format('hh:mm:ss A');
            api.sendMessage(`🎓 ℂ𝕙𝕒𝕥𝔾ℙ𝕋 𝟜.𝟘\n\n🖋️ 𝘾𝙖̂𝙪 𝙝𝙤̉𝙞 : '${prompt}'\n\n📝 𝙁𝙚𝙚𝙙𝙗𝙖𝙘𝙠:${response.data.content}\n\n⏰ Time: ${currentTimePH}`, event.threadID, event.messageID);
        } else {
            api.sendMessage("🔍 Đã xảy ra lỗi, vui lòng kiểm tra ChatGPT API của bạn và thử lại", event.threadID);
        }
    } catch (error) {
        api.sendMessage("🔍 Đã xảy ra lỗi kết nối với ChatGPT API.", event.threadID); 
        console.error("🚫 Lỗi phản hồi:", error);
    }
};

module.exports.run = async function({ api, event }) {};