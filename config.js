const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347072839321";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_43_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQzLFxuICAgICAgICA3NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDc2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk5LFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NixcbiAgICAgICAgMTI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3LFxuICAgICAgICAxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDc0LFxuICAgICAgICA2NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDQzLFxuICAgICAgICA2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg0LFxuICAgICAgICA5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDYyLFxuICAgICAgICA3NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTGdQd2RueHExcG1sdWZRZitZQ3BRL0NIUlhSWmhxdkQzVHFKK0NjckNxTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiekxXVXlxQmJUSkdMSGpWY25FQndsZ1wiLFxuICBcInBob25lSWRcIjogXCI0ZTA5MmZkYy1hNTliLTQ5NzEtYTM2Zi0wYzVlMWM3ODlmZjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMTAyLFxuICAgICAgOTcsXG4gICAgICAyMTQsXG4gICAgICAxNDQsXG4gICAgICAxMjcsXG4gICAgICAxMDEsXG4gICAgICAxMjUsXG4gICAgICAyMzAsXG4gICAgICAxOTgsXG4gICAgICAyNSxcbiAgICAgIDIzOCxcbiAgICAgIDIzMCxcbiAgICAgIDE3OCxcbiAgICAgIDEyLFxuICAgICAgMTY5LFxuICAgICAgMTI5LFxuICAgICAgMTk2LFxuICAgICAgMjE0LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAyOCxcbiAgICAgIDk4LFxuICAgICAgMjUwLFxuICAgICAgMjIyLFxuICAgICAgMTIyLFxuICAgICAgNTEsXG4gICAgICA5MSxcbiAgICAgIDEyNyxcbiAgICAgIDkxLFxuICAgICAgMTYwLFxuICAgICAgMTM0LFxuICAgICAgNzksXG4gICAgICA2MCxcbiAgICAgIDkzLFxuICAgICAgNzUsXG4gICAgICAxNDQsXG4gICAgICAyMjIsXG4gICAgICA1NCxcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01Xdm5NMEZFS2JNeUxrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicjVMY3U5Q0NUMzZiVFZ1Mk5RV3ZjTStEZ3NNQVE1NEFRaEVnWTcxOE5EYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4ejNPanRVTkFUN0tQWkNHd2wvK1BzNWRVYzVUblc2UGVvaDVwYlRXOUFCNUcxemxKdG9tYXFjYUtqNmRNL3JSK3pBZEl3aUJ5NVJCRWYxVTdpenZEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkVHA0R3FyQWdJZy9DNHljRllBb1E4c0dkVFRMU3djK0gxcTNOL3BnY0h5cWhVR0RxUXNQaS9nQVlQRi9EU0VJZlM2bERhQ2FIL3FmRlpTZjJhaWNBUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNzI4MzkzMjE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9iYXNcIixcbiAgICBcImxpZFwiOiBcIjI0NDc0NDkzNjU1MDUzNzo0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA3MjgzOTMyMTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTMzOTgxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZmWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmZWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMlMwOWQ3MWcyT0pYUlRNa3ZneUVuYlRMSEFNczR2NlFmMVhUNkFKRjRFVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTA0MTIyODIwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEzMjUyNTkzOTFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGZlcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJILzN5aHRaSUhML0lLVm1GMUpFc0tzTVcxdXExMGxuSldkdjl2dkZEbHJnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MDQxMjI4MjAsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzMxMzM5NzU1NjYwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmZYLmpzb24iOiAie1wia2V5RGF0YVwiOlwienVlMDZVUDBpZEpGUDBFNEFnOEtiUEo3V2ZYd1ZYUzMyanhLWkwxOXQzQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTA0MTIyODIwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGZlkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPeXlPSGFXSjhRckd0T3ZwdlVUazl3eGJoS012Y0xKbnQ2QjBXSmVOWDdFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MDQxMjI4MjAsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEzMzk3Njg0NzJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
