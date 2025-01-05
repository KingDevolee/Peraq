//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348084247867";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZjOWZOUW4wOEdyb0pBUm93T2ZqWGtjZ0grRUpTZWw4M2pCZjRzbGhXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUwrL3hWOTV0Tk1CaEVzbFdleUVXeU9KNEJ2RG5Sdkc1VkdoOHZvUUZ3OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRHNVOXQ2OGtIZ3N0Z3NEOFBhQWNIeVYvRitSY1dLUzNFdzhvdVV3WVZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUy9TYklIaUNjYVFhNDZXelkrK1N4bGpacnhnRXNxeE5yQnQxVlNIazBZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGMGsyNEZxYmJ3Q0RkK3M2V3c1eHVIenFuK1ZzSlVSMlpuMEFUZWYvRW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRzQThHUWxCcWFoUDZIcVlka0UzOThnR1RPSDRTemNwYUkrTFpRWFpKejg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUpZcU9haDliUzF3cUZpSEFMSXh2ZDByRUxtRVNaSnJFcmpNcEl6WkxGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2ZEYTlReVJVY3hSNExGTWgwOGZzV1RZaEZYazlEekkzTW5tdElSbTh3UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im8vRWVTbWwxTjlRN2hiKzV1VWovSThSNnMzeXVIb3d1RmhWQmV0L0hEcUFqakQvcy9TNHppeExuMTk3MzZKbDg0ZzRXQlN3NG1tT0RFTVcwNmZrTEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6IjYwdytMNmdKRU1yT1hXRFNpVFhIS1lyOXV2WGZ0NWd3dWkyaTdPS3RrT2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkhhZl9fU3B3UVQyT3lvdklQMEdfNWciLCJwaG9uZUlkIjoiMDM4YzVlOWQtYmY0MS00YTUwLThkNDMtODFmOWVmOTA5NjhmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJNdTNUSUxLbTBQYmcvRlFCZkR6b2taTFpuQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYR2RKTEFCcmQ0d0o3bEg1b2hGZHN2QXZwSmc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUDZCUDJFM0ciLCJtZSI6eyJpZCI6IjIzNDgwODQyNDc4Njc6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJQZXJhcSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWUyNzlnSEVLSzc2THNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUVJQR0xqaTNuVTRtN2QxMElxUDQ0SHBlQUdOa1BlM0xkZzJSRnAyb21Dbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV2lKbWNnY01vTjNhQmgrRDZJOXVscnNNa2RGaTJDZ0Nyb2ZiVHVZMTAzV1F4ZHJvSlhZRjQwcnBmUHN1Q092dFJvZGIvMTM4eUcvRmJ3ZkRrZW1TQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Imt6M1dRRUh1MTNQeExMaGM3VjIvSzNtQkw4NXpVV3hZaGZjZENQb001bFVOc3ZlVVJnSXMwdk5vRHlxU0NyTFF6bjZLMDk4Qkh0N0ZmbldkYWZyYkNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA4NDI0Nzg2NzozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVFVHhpNDR0NTFPSnUzZGRDS2orT0I2WGdCalpEM3R5M1lOa1JhZHFKZ3EifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzYwNTYyMzl9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`KING_DAVID™`",
  author: process.env.PACK_AUTHER || "KING_DAVID",
  packname: process.env.PACK_NAME || "KING_DAVID",
  botname: process.env.BOT_NAME || "KING_DAVID",
  ownername: process.env.OWNER_NAME || "KING_DAVID",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
