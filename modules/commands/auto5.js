const axios = require("axios");
const fs = require("fs");

const isURL = (u) => /^http(|s):\/\//.test(u);

exports.handleEvent = async function (o) {
  try {
    const str = o.event.body;
    const send = (msg) =>
      o.api.sendMessage(msg, o.event.threadID, o.event.messageID);
    const head = (app) =>
      `🥨 == [ ${app.toUpperCase()} - DownLoad ] == 🥨\n━━━━━━━━━━━━━━━━━━━`;
    // const head = app => '';
    if (isURL(str)) {
      if (/fb|facebook/.test(str)) {
        //const data = await fbVideo(str);
        const res = await axios.get(`https://hoanghao.me/api/facebook/download?url=${str}`);
        send({
          body: `${head('FaceBook')}\n[🍒] → Tiêu Đề: ${res.data.data.title}`, attachment: await streamURL(res.data.data.video, 'mp4')
        });
      }
      /*AUTODOWN CAPCUT VIIDEO */
      else if (/capcut\.com/.test(str)) {
                var res = (await axios.get(`https://api.phungtuanhai.online/capcut/download?apikey=PTH&url=${str}`))
                  send({body: `${head('CAPCUT')}\n→ Tiêu Đề: ${res.data.title}\n→ Description : ${res.data.description}\n→ Lượt Xem : ${res.data.usage}\n`,attachment: await streamURL(res.data.videoUrl, 'mp4')})
                }

      /* TỰ ĐỘNG TẢI ẢNH HOẶC NHẠC SOUNDCLOUD */ 
      else if(/soundcloud\.com/.test(str)){
        send({body: `${head("SOUNDCLOUD")}`,attachment: await streamURL(`https://api.phungtuanhai.online/soundcloud/download?link=${str}&apikey=PTH`, 'mp3')})
                  }
        /* TỰ ĐỘNG TẢI ẢNH HOẶC NHẠC SPOTIFY */ 
      else if(/spotify\.com/.test(str)){
        const url = (await axios.get(`https://api.phungtuanhai.online/spotify/download?apikey=PTH&link=${str}`)).data.audio
        send({body: `${head("SPOTIFY")}`,attachment: await streamURL(url, 'mp3')})
      }
      /* TỰ ĐỘNG TẢI NHẠC ZINGMP3 */ 
      else if(/zingmp3\.vn/.test(str)){
          send({body: `${head('ZINGMP3')}\n`,attachment: await streamURL(`https://api.phungtuanhai.online/zingmp3/download?apikey=PTH&link=${str}`, 'mp3')})
        }
      /* TỰ ĐỘNG TẢI ẢNH, VIDEO TWITTER */ 
      else if (/twitter\.com/.test(str)) {
      const res = (await axios.get(`https://api.phungtuanhai.online/twitter/download?url=${str}&apikey=PTH`)).data
      let attachment = [];
                      if (res.data.video_url != null) {
      attachment = await streamURL(res.data.video_url[1].url,"mp4")
      } else {
      attachment = await streamURL(res.data.media_url[0], 'jpg');
                      }
      send({body: `${head("TWITTER")}\n→ Tiêu đề: ${res.data.text}`,attachment})
      }
      /* TỰ ĐỘNG TẢI ẢNH HOẶC VIDEO PINTEREST */ 

      /* TỰ ĐỘNG TẢI ẢNH HOẶC VIDEO INSTAGRAM */ 
      else if (/instagram\.com/.test(str)) {
                const res = await axios.get(`https://api.phungtuanhai.online/instagram/dlpost?apikey=PTH&url=${str}`);
                const {
                    videos = [{}],
                    images
                } = res.data;
                let attachment = [];

                if (videos[0] != undefined) {
                    attachment = await streamURL(videos[0], 'mp4');
                } else if (images != undefined) {
                    for (const $ of typeof images == 'string' ? [images]: images) {
                        attachment.push(await streamURL($, 'png'));
                    }
                }
                send({
                    body: `${head('INSTAGRAM')}\n→ Tiêu Đề: ${res.data.caption}`, attachment
                });
            }
        }

    } catch(e) {
        console.log('Error', e);
    }
};
exports.run = () => {};
exports.handleReaction = async function (o){
  const { threadID: t, messageID: m, reaction: r } = o.event
  const { handleReaction: _ } = o
  //if (r != "👍") return; 
  o.api.sendMessage({ body: `== [ MUSIC TIKTOK ] ==\n━━━━━━━━━━━━━━━━━━━\n→ Id: ${_.data.music_info.id}\n→ Tên nhạc: ${_.data.music_info.title}\n→ Link mp3: ${_.data.music_info.play}\n→ Thời lượng: ${_.data.music_info.duration}s\n→ Âm thanh của bạn yêu cầu nè, đây là tính năng tự động tải nhạc khi bạn thả cảm xúc bất kì vào video`,attachment: await streamURL(_.data.music, "mp3")},t,m)
}
exports.config = {
    name: '1',
    version: '1',
    hasPermssion: 0,
    credits: 'Công Nam mod all Harin',
    description: '',
    commandCategory: 'Autodown',
    usages: [],
    cooldowns: 3
};

function streamURL(url, type) {
    return axios.get(url, {
        responseType: 'arraybuffer'
    }).then(res => {
        const path = __dirname + `/cache/${Date.now()}.${type}`;
        fs.writeFileSync(path, res.data);
        setTimeout(p => fs.unlinkSync(p), 1000 * 60, path);
        return fs.createReadStream(path);
    });
}

function infoPostTT(url) {
    return axios({
        method: 'post',
        url: `https://tikwm.com/api/`,
        data: {
            url
        },
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.data.data);
  }