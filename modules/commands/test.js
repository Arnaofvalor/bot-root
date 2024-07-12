module.exports.config = {
    name: "fakebill",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Dũngkon",
    description: "Tạo ảnh fakebill",
    commandCategory: "TIỆN ÍCH",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event, args, Currencies, Users }) {
    if(this.config.credits !== 'Dũngkon') return api.sendMessage('Đã bảo đừng thay credits rồi mà không nghe, thay lại credits ngay không là đéo dùng được đâu nha', event.threadID, event.messageID);
    const moment = require("moment-timezone");
    const axios = require('axios').default;
    var list_id = [];
    const push = [];
    push.push(Date.now());
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss - D/MM/YYYY");

    const [
        name_gui,
        stk_gui,
        bank,
        code1,
        code,
        stk,
        name_nhan,
        amount,
        noidung,
        magiaodich,
        time1,
        hinhthucck,
        thoigianhientai
    ] = args.join(" ").trim().split(" | ");

    if (!name_gui) return api.sendMessage(`📌 HDSD:\n/fake NGUYEN DINH TIEN DUNG | 1234567897749 | Ngân Hàng Vietcombank | Vietcombank | VCB | 1236266266 | HOANG VAN ANH | 1500000 | Done | FT273738263883 | 22:29:23, 20/03/2024 | Ngoài MB | 22:29`, event.threadID, event.messageID);
  if (!stk_gui) return api.sendMessage(`⚠ Thiếu số tài khoản người gửi`, event.threadID, event.messageID);
  if (!bank) return api.sendMessage(`⚠ Thiếu tên ngân hàng người nhận`, event.threadID, event.messageID);
  if (!code1) return api.sendMessage(`⚠ ên ngân hàng nhận`, event.threadID, event.messageID);
  if (!code) return api.sendMessage(`⚠ Tên ngân hàng (Viết tắt)`, event.threadID, event.messageID);
  if (!stk) return api.sendMessage(`⚠ Số tài khoản người nhận`, event.threadID, event.messageID);
  if (!name_nhan) return api.sendMessage(`⚠ Tên ngân hàng người nhận`, event.threadID, event.messageID);
  if (!amount) return api.sendMessage(`⚠ Số tiền chuyển khoản`, event.threadID, event.messageID);
  if (!noidung) return api.sendMessage(`⚠ Nội dung chuyển khoản`, event.threadID, event.messageID);
  if (!magiaodich) return api.sendMessage(`⚠ Mã giao dịch`, event.threadID, event.messageID);
  if (!time1) return api.sendMessage(`⚠ Thời gian Chuyển khoản`, event.threadID, event.messageID);
  if (!hinhthucck) return api.sendMessage(`⚠ Hình thức chuyển khoản`, event.threadID, event.messageID);
  if (!thoigianhientai) return api.sendMessage(`⚠ thời gian hiện tại`, event.threadID, event.messageID);

    api.sendMessage(`✅ Đang Tạo bill Cho ${(await Users.getData(event.senderID)).name}`, event.threadID , (err, info)  => setTimeout(() => { api.unsendMessage(info.messageID) }, 5000));
    
    const { data } = await axios.get(`https://api.sumiproject.net/fakebill?name_gui=${name_gui}&stk_gui=${stk_gui}&bank=${bank}&code1=${code1}&code=${code}&stk=${stk}&name_nhan=${name_nhan}&amount=${amount}&noidung=${noidung}&magiaodich=${magiaodich}&time1=${time1}&hinhthucck=${hinhthucck}&thoigianhientai=${thoigianhientai}&apikey=apikeysumi`, { responseType: 'stream' });

    api.sendMessage({
        body: ``,
        attachment: data
    }, event.threadID, event.messageID);
}