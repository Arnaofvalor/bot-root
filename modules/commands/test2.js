const axios = require('axios');

module.exports.config = {
  name: "ff",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Mây Trắng", //https://www.facebook.com/deleteuserbot// thêm cho giống info 
  description: "Lấy thông tin chi tiết của tài khoản Free Fire qua ID",
  commandCategory: "Tiện ích",
  usages: "ff [Free Fire ID]",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
  if (!args[0]) {
    return api.sendMessage("Vui lòng nhập ID của tài khoản Free Fire.", event.threadID);
  }

  const ffId = args[0];
  const apiUrl = `https://api.x10.mx/api/account.php?id=${ffId}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data && data.basicInfo) {
      const info = data.basicInfo;
      let resultMessage = `╭─────────────⭓\n│Thông tin tài khoản Free Fire:\n`;
      resultMessage += `│ID: ${info.accountId}\n`;
      resultMessage += `│Name: ${info.nickname}\n`;
      resultMessage += `│Level: ${info.level}\n`;
      resultMessage += `│Rank: ${info.rank}\n`;

      resultMessage += `│Điểm Ranking: ${info.rankingPoints}\n`;
      resultMessage += `│Thẻ Booyah: ${info.hasElitePass ? 'Có' : 'Không'}\n`;
      resultMessage += `│Số Badge: ${info.badgeCnt}\n`;


      resultMessage += `│Giới tính: ${data.socialInfo.gender === 'Gender_MALE' ? 'Nam' : 'Nữ'}\n`;
      resultMessage += `│Ngôn ngữ: ${data.socialInfo.language}\n`;
      resultMessage += `│Tiểu Sử: ${data.socialInfo.signature}\n`;
      resultMessage += `│Like: ${info.liked}\n╰─────────────⭓`;



      api.sendMessage(resultMessage, event.threadID);
    } else {

      api.sendMessage("Không tìm thấy thông tin hoặc có lỗi xảy ra.", event.threadID);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage("Có lỗi", event.threadID);
  }
};