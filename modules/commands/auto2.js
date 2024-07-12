module.exports.config = {
    name: "atd",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "KhangDZ",
    description: "",
    commandCategory: "box chat",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
}
const axios = require('axios');

const ytdl = require('ytdl-core');
const { resolve } = require('path');
async function imgD(url) {
  var axios = require("axios");
  var fs = require("fs-extra");
var h = (await axios.get(url,{responseType: "arraybuffer"})).data;
  const path = `${__dirname}/cache/${Date.now()}.png`;
  fs.writeFileSync(path,Buffer.from(h, 'utf-8'));
  setTimeout(j=>fs.unlinkSync(j), 20*1000, path);
  return fs.createReadStream(path);
}
async function stUrl(url, mime) {
  var downloader = require('image-downloader'),
  fse = require('fs-extra');
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`;
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 30*1000, dest);
    return fse.createReadStream(dest);
};
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
  try {
    var time1 = ["05:03","01:08","02:01","05:43","02:32"];
    var rdtime = time1[Math.floor(Math.random()*time1.length)];
    if (event.reaction == "👎") {
  //console.log(handleReaction.mp3Url)
  return api.sendMessage({body: `00:02 ━●━━━━━━━━━━━━━━━  ${rdtime}\n⇆ㅤㅤㅤ ㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤ ㅤㅤㅤ↻\n`, attachment: await stUrl(handleReaction.mp3Url,"mp3")},event.threadID, event.messageID);
  }
      } catch(e) {console.log(e)}
}
async function shortUrl(url) {
  var data = await axios.post(`https://goolnk.com/api/v1/shorten`, {
    url: url});
  return data.data.result_url
}
module.exports.handleEvent = async ({api,event,args}) => {
  try {

    const fs = require("fs-extra");

  var filename = __filename.slice(__dirname.length+1)
//	const keydata = key.data.key 
  const { join, resolve } = require("path")
    var ev = event.body || " ";
    var arr = ev.split(" "),
      regEx_tiktok = /(^https:\/\/)((vm|vt|www|v)\.)?(tiktok|douyin)\.com\//,
        regEx_youtube = /(^https:\/\/)((www)\.)?(youtube|youtu)(PP)*\.(com|be)\//,
        regEx_facebook = /(^https:\/\/)(\w+\.)?(facebook|fb)\.(com|watch)\/((story\.php|page\.\w+)(\?|\/))?(story_fbid=|\w+\/)/,
        regEx_instagram = /^\u0068\u0074\u0074\u0070\u0073\u003a\/\/(www\.)?instagram\.com\/(reel|p)\/\w+\/\w*/,
      reg_cc = new RegExp("(?<=https://www.capcut.com/t/)[A-Za-z0-9]+"),
      reg_cb = new RegExp("(?<=https:\/\/files\.catbox\.moe\/)[a-zA-Z0-9\.\-]+(?:\.png|\.mp4)");
//console.log(arr)
    var fbreg = new RegExp("https://www\.facebook\.com/(?:[^/]+/)+[^/?]+\?mibextid=[^/?]+$")
    //https://www.facebook.com/vutruvotri.riviu/videos/1152734079232567/
for (const el of arr)
  {

    if (regEx_tiktok.test(el)) {
      var apikey = require("./data/apikey.json");
  var token = apikey[Math.floor(Math.random()*apikey.length)];
  var key = token.token[Math.floor(Math.random()*token.token.length)];
    //	console.log(el)
      const options = {
  method: 'GET',
  url: 'https://tiktok-download-without-watermark.p.rapidapi.com/analysis',
  params: {
    url: el,
    hd: '1'
  },
  headers: {
    'X-RapidAPI-Key': key,
    'X-RapidAPI-Host': 'tiktok-download-without-watermark.p.rapidapi.com'
  }
};


	const tik = await axios.request(options);
    //console.log(tik.data)
	if (tik.status != 200) return {
status: false
  }
//    console.log(rp)
  var data = tik.data.data
      /*const data = (await axios.post(`https://www.tikwm.com/api/`, {
          url: el
      })).data.data;*/
      //console.log(data)
      var _date = new Date(data.create_time*1000);
      var date = _date.toLocaleDateString();
        var shr =await shortUrl(data.hdplay);									 
    //	console.log(data);
      if (data.images !== undefined)
      {
        let attachment2 = [];
        for (let i = 0; i < data.images.length; i++) {
          attachment2.push(await imgD(data.images[i]));

        }
      //	console.log(attachment2);
      //	console.log(attachment2)
        return api.sendMessage({body:`=== 『 𝗧𝗜𝗞𝗧𝗢𝗞 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ [📝] 𝗧𝗶𝗲̂𝘂 Đ𝗲̂̀: ${data.title}.\n→ [❤] 𝗟𝘂̛𝗼̛̣𝘁 𝗧𝗵𝗶́𝗰𝗵: ${data.digg_count}.\n→ [💬] 𝗟𝘂̛𝗼̛̣𝘁 𝗕𝗶̀𝗻𝗵 𝗟𝘂𝗮̣̂𝗻: ${data.comment_count}\n→ [🌟] 𝗟𝘂̛𝗼̛̣𝘁 𝗖𝗵𝗶𝗮 𝗦𝗲̉: ${data.share_count}\n→ [📥] 𝗟𝘂̛𝗼̛̣𝘁 𝗧𝗮̉𝗶: ${data.download_count}\n→ [🗓️] 𝗡𝗴à𝘆 đă𝗻𝗴: ${date}\n→ [🔃] ${shr}\n→ 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 ❤ đ𝗲̂̉ 𝘁𝗮̉𝗶 𝗻𝗵𝗮̣𝗰.`, attachment:attachment2}, event.threadID,
                              (err, info) => {
    global.client.handleReaction.push({
        name: this.config.name, 
        messageID: info.messageID,
        author: event.senderID,
        mp3Url: data.music
                                })
                                },event.messageID);
      }
      //console.log(await stUrl(data.play, 'mp4'))
    return api.sendMessage({body: `=== 『 𝗧𝗜𝗞𝗧𝗢𝗞 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ [📝] 𝗧𝗶𝗲̂𝘂 Đ𝗲̂̀: ${data.title}.\n→ [❤] 𝗟𝘂̛𝗼̛̣𝘁 𝗧𝗵𝗶́𝗰𝗵: ${data.digg_count}.\n→ [💬] 𝗟𝘂̛𝗼̛̣𝘁 𝗕𝗶̀𝗻𝗵 𝗟𝘂𝗮̣̂𝗻: ${data.comment_count}\n→ [🌟] 𝗟𝘂̛𝗼̛̣𝘁 𝗖𝗵𝗶𝗮 𝗦𝗲̉: ${data.share_count}\n→ [📥] 𝗟𝘂̛𝗼̛̣𝘁 𝗧𝗮̉𝗶: ${data.download_count}\n→ [🗓️] 𝗡𝗴à𝘆 đă𝗻𝗴: ${date}\n→ [🔃] ${shr}\n→ [💓] Đ𝐚̂𝘆 𝗹𝗮̀ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗻𝗸 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸 📺\n→ 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 ❤ đ𝗲̂̉ 𝘁𝗮̉𝗶 𝗻𝗵𝗮̣𝗰.\n\n`, attachment: await stUrl(data.hdplay, 'mp4')},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
      mp3Url: data.music
    })
    },event.messageID);
    };
    if (regEx_youtube.test(el)) {
      var mpath = __dirname+`/cache/ytdl_${Date.now()}.mp4`;
var data = await ytDl(el,"mp4",mpath);
    //	console.log(await ytDl(el,"mp4",mpath))
setTimeout(() => {api.sendMessage({body:"youtube",attachment:fs.createReadStream(mpath)},event.threadID,(err, info) => {
    if (err) return console.log(err)
    })},2000)
    };
    if (el.includes("https://www.facebook.com")) {
      if(el.includes("https://www.facebook.com/share") && !el.includes("https://www.facebook.com/share/p") && !el.includes("https://www.facebook.com/share/r")){
        var data = await fbStory(el);
        return api.sendMessage({body:`=== 『 FACEBOOK STORY』 ====\n━━━━━━━━━━━━━━━━━━\n🌸  𝗿𝗲𝗮𝗰𝘁𝗶𝗼𝗻 "👎" 𝗧𝗵𝗶𝘀 𝗠𝗲𝘀𝘀𝗮𝗴𝗲 𝗙𝗼𝗿 𝗠𝘂𝘀𝗶𝗰`,attachment: await stUrl(data.video_url,"mp4")},event.threadID,(err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
      mp3Url: data.url
    })
    },event.messageID);
    };
     //   return console.log("shared")
      
      //return console.log(true)
      var data = await fbDownload(el)
      //var resd = data.data;
      var shr = "jsjs"//await shortUrl(data.url)
    //	var get2 = await axios.get(`https://api.sumiproject.net/facebook/video?url=${resd.url}`);
  console.log(data)
    return api.sendMessage({body:`=== 『 FACEBOOK 』 ====\n━━━━━━━━━━━━━━━━━━\n\n [🗓️] 𝗨𝗽𝗹𝗼𝗮𝗱 𝗗𝗮𝘁𝗲: ${data.upload_date}\n [⌛] 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${data.duration}m\n [🌟] 𝗩𝗶𝗲𝘄 𝗖𝗼𝘂𝗻𝘁: ${data.view_count}\n [📥] 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗟𝗶𝗻𝗸: ${shr}\n [📝] 𝗧𝗶𝘁𝗹𝗲: ${data.title}.\n [💓] 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: ${data.description}\n🌸  𝗿𝗲𝗮𝗰𝘁𝗶𝗼𝗻 "👎" 𝗧𝗵𝗶𝘀 𝗠𝗲𝘀𝘀𝗮𝗴𝗲 𝗙𝗼𝗿 𝗠𝘂𝘀𝗶𝗰`,attachment: await stUrl(data.url,"mp4")},event.threadID,(err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
      mp3Url: data.video_url
    })
    },event.messageID);
    };
    if (regEx_instagram.test(el)) {
      var data = await instaDownload(el)
    //  console.log(data);
      //var resd = data.data;
      
    //	console.log(resp);
    if (data.is_video == false) {
      var att = [];
      for (i in data.image_url) {
        att.push(await stUrl(data.image_url[i],"png"));
      }
      var msgBody = {body:`=== 『 𝗜𝗡𝗦𝗧𝗔𝗥𝗚𝗥𝗔𝗠 』 ====\n━━━━━━━━━━━━━━━━━━\n\n [👤] 𝗖𝗿𝗲𝗮𝘁𝗼𝗿: @${data.owner_info.username}\n [❤] 𝗟𝗶𝗸𝗲 𝗖𝗼𝘂𝗻𝘁: ${data.like_count}\n [💬] 𝗖𝗼𝗺𝗺𝗲𝗻𝘁 𝗖𝗼𝘂𝗻𝘁: ${data.comment_count}\n [📝] 𝗧𝗶𝘁𝗹𝗲: ${data.caption}`, attachment: att}
      return api.sendMessage(msgBody,event.threadID,event.messageID);
    }
var shr = await shortUrl(data.video_url)
      return api.sendMessage({body:`=== 『 𝗜𝗡𝗦𝗧𝗔𝗥𝗚𝗥𝗔𝗠 』 ====\n━━━━━━━━━━━━━━━━━━\n\n [👤] 𝗖𝗿𝗲𝗮𝘁𝗼𝗿: @${data.owner_info.username}\n [❤] 𝗟𝗶𝗸𝗲 𝗖𝗼𝘂𝗻𝘁: ${data.like_count}\n [💬] 𝗖𝗼𝗺𝗺𝗲𝗻𝘁 𝗖𝗼𝘂𝗻𝘁: ${data.comment_count}\n [🌟] 𝗣𝗹𝗮𝘆 𝗖𝗼𝘂𝗻𝘁: ${data.play_count}\n [📥] 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗟𝗶𝗻𝗸: ${shr}\n [📝] 𝗧𝗶𝘁𝗹𝗲: ${data.caption}\n🌸  𝗿𝗲𝗮𝗰𝘁𝗶𝗼𝗻 "👎" 𝗧𝗵𝗶𝘀 𝗠𝗲𝘀𝘀𝗮𝗴𝗲 𝗙𝗼𝗿 𝗠𝘂𝘀𝗶𝗰`, attachment: await stUrl(data.video_url,"mp4")},event.threadID,(err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
      mp3Url: data.video_url
    })
    },event.messageID);
    }
    if (el.includes("https://www.capcut.com")) {
      var data = await capcut(el);
      var shr = await shortUrl(data.video_url);		
    //  console.log(el)
      return api.sendMessage({body:`=== 『 CAPCUT 』 ====\n━━━━━━━━━━━━━━━━━━\n\n [👤] Creator: ₫(₫(₫(*;\n [📌] Title: ${data.title}\n [🗒️] Description: ${data.description}`, attachment: await stUrl(data.video_url,"mp4")},event.threadID,(err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
      mp3Url: data.video_url
    })
    },event.messageID);
    }
 /*   if (reg_cb.test(el)) {
      var mime = el.slice(el.length-3,100);
      console.log(el)
      return api.sendMessage({body:`=== 『 CATBOX 』 ====\n━━━━━━━━━━━━━━━━━━`, attachment: await mg.catboxDownload(el)},event.threadID,(err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
      mp3Url: el
    })
    },event.messageID);
    }*/
  }

  } catch(e) { console.log(e)}
};

module.exports.run = async ({ event, api, Currencies, args, utils }) => {
  const { join, resolve } = require("path")

return api.sendMessage(`🔍Từ khóa: anime, gái, ảnh...\n(comming soon)`,event.threadID)
    }

async function ytDl(link, type, path) {
  try{
    var fs =  require("fs-extra");

  var timestart = Date.now();
  if(!link) return 'Thiếu link'
    var resolveFunc = function () { };
    var rejectFunc = function () { };


    ytdl(link).pipe(fs.createWriteStream(path))
        .on("close", async () => {
            var data = await ytdl.getInfo(link)
            var result = {
                title: data.videoDetails.title,
                dur: Number(data.videoDetails.lengthSeconds),
                viewCount: data.videoDetails.viewCount,
                likes: data.videoDetails.likes,
                author: data.videoDetails.author.name,
                timestart: timestart
            }

        })
    setTimeout(() => {
      fs.unlinkSync(path)
    },40000)
    //if (get == "data") return returnPromise;
  return fs.createReadStream(path)
  } catch(e) {console.log(e)}

}
function convertHMS(value) {
    const sec = parseInt(value, 10); 
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60); 
    let seconds = sec - (hours * 3600) - (minutes * 60); 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return (hours != '00' ? hours +':': '') + minutes+':'+seconds;
}
function token() {
  var data = require("./data/apikey.json")
 // var apikey = require("./data/apikey.json");
  var token = data[Math.floor(Math.random()*data.length)];
  var key = token.token[Math.floor(Math.random()*token.token.length)];
  return key
}
async function fbDownload(url) {
  const link = url;
  if (!link) return "Vui lòng nhập URL video Facebook cần tải";
  //const axios = require('axios');

  //const axios = require('axios');
  const options = {
    method: "GET",
    url: "https://facebook-video-audio-download.p.rapidapi.com/geturl",
    params: {
      video_url: `${link}`,
    },
    headers: {
      "X-RapidAPI-Key": token(),
      "X-RapidAPI-Host": "facebook-video-audio-download.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    var resd = response.data;
    var dat = resd.upload_date;
    var y,
      m,
      d = " ";
    if (dat) {
      y = dat.slice(0, 4);
      m = dat.slice(4, 6);
      d = dat.slice(6, 8);
    }
 //   console.log(y, m, d);
    return {
      video_url: resd.video_high,
      view_count: resd.view_count,
      description: resd.description,
      duration: resd.duration_string,
      title: resd.title,
      upload_date: `${d}/${m}/${y}`,
      uploader: resd.uploader,
    };
   // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
async function fbStory(url) {
  

  //const axios = require('axios');

  const encodedParams = new URLSearchParams();
  encodedParams.set('URL', url);

  const options = {
    method: 'POST',
    url: 'https://facebook-story-saver-and-video-downloader.p.rapidapi.com/',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'b7a92bd2b4msh3c6ea25ded9ea48p1b3773jsn26d0af3bc458',
      'X-RapidAPI-Host': 'facebook-story-saver-and-video-downloader.p.rapidapi.com'
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    var res = response.data;
    var d = ""
    if(res.source == "FB-Vid") d = response.data.links;
    if(res.source == "FB-Story") d = response.data.links[0];
   // console.log(d)
var f = d.find(i => i.quality == "Video HD") || d.find(i => i.quality == "720p")
    //console.log(f)
    return {
      video_url: f.url
    }
  } catch (error) {
    console.error(error);
  }
}
async function capcut(url) {
  

  

  const options = {
    method: 'POST',
    url: 'https://all-video-downloader1.p.rapidapi.com/capcut',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'b7a92bd2b4msh3c6ea25ded9ea48p1b3773jsn26d0af3bc458',
      'X-RapidAPI-Host': 'all-video-downloader1.p.rapidapi.com'
    },
    data: {
      url: url
    }
  };

  try {
    const response = await axios.request(options);
    var data =response.data;
    return {
      creator: data.capcutResults.creator,
      title: data.capcutResults.result.title,
      description: data.capcutResults.result.description,
      used_time: data.capcutResults.result.digunakan,
      video_url: data.capcutResults.result.video_ori
    }
  } catch (error) {
    console.error(error);
  }
}
async function instaDownload(url) {
  if (!url) return "Thiếu dữ liệu để khởi chạy chương trình";

  const keyAPi = [
    "b258ef723fmsh6e1c717e4da8c55p1a6aa6jsn0b568acec4ba",
    "aefdb0602bmsh108794901717a46p1633c1jsn158e610f3ec7",
    "2cc687a09fmsh03d743f2aa512a8p10abdcjsn78953f7f18eb",
    "1d37e77a02mshf3a6c1b1595c733p1a1bb5jsn95a79657b66a",
    "57f9a2103emshb5be9d95c8964bdp1d3620jsnd6716f0c155b",
    "250976cf63msh6da47b4f04c0fb2p199701jsn7f1e0a8fbd11",
    "5099af6297msh5cc9c6524d30a94p10d307jsn003307a68755",
    "aea50f9b26msh5d25474550daf0ap1a6537jsncc77ca7a71b5",
  ];
  var keyRandom = keyAPi[Math.floor(Math.random() * keyAPi.length)];

  //v

  const options = {
    method: "GET",
    url: "https://instagram-looter2.p.rapidapi.com/post",
    params: { link: url },
    headers: {
      "X-RapidAPI-Key": keyRandom,
      "X-RapidAPI-Host": "instagram-looter2.p.rapidapi.com",
    },
  };

  var response = await axios.request(options);
  try {
    //.then(function (response) {
    // console.log(response.data)
    //return res.json(response.data)
    var dataForm = {};
    var p = [];
    var d = response.data;
    if (d.is_video == false) {
      var img = d.edge_sidecar_to_children.edges;

      for (i in img) {
        p.push(img[i].node.display_url);
      }
      dataForm = {
        is_video: d.is_video,
        comment_count: d.edge_media_to_comment.count,
        like_count: d.edge_media_preview_like.count,
        image_url: p,
        caption: d.edge_media_to_caption.edges[0].node.text,
        owner_info: d.owner,
      };
      return dataForm;
    }
    var cap = "";
    if (d.edge_media_to_caption.edges.length == 0) {
      cap = "";
    } else {
      cap = d.edge_media_to_caption.edges[0].node.text;
    }
    var dataForm = {
      video_url: d.video_url,
      is_audio: d.has_audio,
      play_count: d.video_play_count,
      view_count: d.video_view_count,
      video_duration: d.video_duration,
      is_video: d.is_video,
      comment_count: d.edge_media_to_comment.count,
      like_count: d.edge_media_preview_like.count,
      image_url: p,
      caption: cap,

      owner_info: d.owner,
    };

    // return d.edge_sidecar_to_children.edges
    return dataForm;
  } catch (e) {
    console.error(e);
  }
}