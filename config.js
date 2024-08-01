const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_10_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQyLFxuICAgICAgICA1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM5LFxuICAgICAgICA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTczLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDksXG4gICAgICAgIDYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDUxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg4LFxuICAgICAgICA3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDkzLFxuICAgICAgICA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY4LFxuICAgICAgICAxODEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyLFxuICAgICAgICA2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NCxcbiAgICAgICAgNjksXG4gICAgICAgIDY1LFxuICAgICAgICAxODUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImZiNlBkTVdCZndtbnhwdVZJQURlUDhTSGEyZnZSeTZVN3lxRFV3Qlk3OG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NTc3MzQyMTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg1QzhCNTNGRjJFMzg5M0QzRDRBQkQwMDlFNTY5NDE1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjUwMzQwNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuQ3AtRUJSelJxbUNaci02UTFaOU9BXCIsXG4gIFwicGhvbmVJZFwiOiBcImY0NThkNWQ1LWNmN2ItNDFlYS05M2YwLThmODJjOWFlMThhNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICAyNDcsXG4gICAgICAxOTEsXG4gICAgICAyNDMsXG4gICAgICAyOSxcbiAgICAgIDE4OCxcbiAgICAgIDIxNCxcbiAgICAgIDE5NixcbiAgICAgIDE3NCxcbiAgICAgIDEzMyxcbiAgICAgIDI1NCxcbiAgICAgIDE5NSxcbiAgICAgIDgxLFxuICAgICAgMjMsXG4gICAgICAxMDgsXG4gICAgICAyNDQsXG4gICAgICA2MCxcbiAgICAgIDgyLFxuICAgICAgMjUzLFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk0LFxuICAgICAgMjMsXG4gICAgICA0MyxcbiAgICAgIDE0LFxuICAgICAgODQsXG4gICAgICAyMDgsXG4gICAgICAxNTIsXG4gICAgICAxNjksXG4gICAgICA0NSxcbiAgICAgIDgwLFxuICAgICAgMTMwLFxuICAgICAgODQsXG4gICAgICAyNTUsXG4gICAgICA2MyxcbiAgICAgIDkwLFxuICAgICAgMTMzLFxuICAgICAgMjI3LFxuICAgICAgMzIsXG4gICAgICA1NSxcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0UEw3UTFER1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTc3MzQyMTY6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzg4MDExMzcyNjY5MTk6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKS2NQeERpb2EyMUJoZ0JJQUFvQUE9PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVubkU4QmlqRDJHc0JqNjdrR3ZjQUhnYVFhM1ZJUWhLL1kvbmxXUkNTbnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidzd0VEVNMEcrdmJ1NzBzL1lpazkyVzFQQ2gzVXBQQldhT2UxOGpLZjFmNU5jL20wKzhlclBGd2p2cVNmeXpydXVnWk5TWkk0NjhWTXpWZmMwSVRHQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRzNKOG9XK2toMDQ5clFGOGtiQ0o5VG95VytaUDZSNjkvVXZiVmw5aE9wdk5qZWZ2VkluN0dpdUQ3R1hkZWVpUzdnaVJ1Z3UrYm9xb0tsK1JZYjhXQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTc3MzQyMTY6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTAzMzk4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWpsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJamwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKajJTZHcxdExwelBUZWMvZGUybFkzVmRvV2lJMnRkMXo2UTlvcGpYWkhnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMzU3OTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjUwMzQwMzEwN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
