/**
* create by hyzer official
* g usah di hapus anjg, gw cape sumpah
* sc free, bayar pake subs aja udh good
* jika ada bug/mau request fitur
* chat me on wa https://wa.me/6287892711054
* follow my instagram @zexyds_
**/

//━━━━━━━━[ DEFAULT SETTINGS ]━━━━━━━━//
let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')

//━━━━━━━━[ DEFAULT MENU ]━━━━━━━━//
const defaultMenu = {
  before:`Hai, %name!
 ⬣ ❯━━━━━━━━━━━━━━━━━❮ ⬣
 ╿                *${global.namebot}* 
 │    
 ┝╾⬣ USER          
⫹⫺ Nama %name 
⫹⫺ Tersisa *%limit Limit*
⫹⫺ Role *%role*
⫹⫺ Level *%level (%exp / %maxexp)*
⫹⫺ %totalexp XP Secara Total
 ┝╾⬣ TIME
⫹⫺ Tanggal: *%week %weton, %date*
⫹⫺ Islam: *%dateIslamic*
⫹⫺ Waktu: *%time*
 ┝╾⬣ SPEC
⫹⫺ Uptime: *%uptime (%muptime)*
⫹⫺ Database: %rtotalreg dari %totalreg
⫹⫺ Ram : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
%readmore`.trimStart(), 
  header: '*╭────━•〔 %category 〕•━────┐*',
  body: '│ ⸙͎۪۫ %cmd %islimit %isPremium',
  footer: '*╰──────────━⃝┅⃝━────────┘*',
  after: `⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕`,
}

//━━━━━━━━[ CATEGORY ]━━━━━━━━//
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'anime', 'kerangajaib', 'sound', 'vn', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'vote', 'tanpakategori', 'owner', 'gift', 'thnks']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'rpg': 'Epic Rpg',
    'xp': 'Exp & Limit',
    'fun': 'Fun',
    'jodoh': 'Jodoh',
    'gift': 'Gift',
    'anime': 'Anime',
    'hentai': 'NSFW',
    'premium': 'Premium',
    'anonymous': 'Anonymous Chat',
    'kerang': 'Kerang Ajaib',
    'sound': 'Sound Music',
    'vn': 'Vn Imuet',
    'quotes': 'Quotes',
    'absen': 'Absen',
    'vote': 'Voting',
    'admin': 'Admin',
    'group': 'Grup',
    'news': 'News',
    'internet': 'Internet',
    'edukasi': 'Edukasi',
    'quran': 'Islam',
    'image': 'Random Image',
    'sticker': 'Stiker',
    'nulis': 'MagerNulis & Logo',
    'audio': 'Pengubah Suara',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'database': 'Database',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
    'thnks': 'THANKS TO',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'nsfw') tags = {
    'hentai': 'NSFW',
    'nsfw': 'HENTAI',
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Epic Rpg'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
if (teks == 'sound') tags = {
    'sound': 'Sound Music'
  }
if (teks == 'vn') tags = {
    'vn': 'Vn Imuet'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': 'admin'
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'image') tags = {
    'image': 'Random Image'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun',
    'jodoh': 'Jodoh'
  }
  if (teks == 'jodoh') tags = {
    'jodoh': 'Jodoh'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
    if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'quran') tags = {
    'quran': 'Islam'
  }
  if (teks == 'gift') tags = {
    'gift': 'Gift'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'thnks') tags = {
    'thnks': 'THANKS TO'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }

//━━━━━━━━[ DATABASE USER ]━━━━━━━━//
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(m.sender)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let premium = global.db.data.users[m.sender].premium
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let tag = `wa.me/${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

//━━━━━━━━[ TIMER ]━━━━━━━━//
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')

//━━━━━━━━[ SETTING HELP ]━━━━━━━━//
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })

//━━━━━━━━[ FAKE REPLY ]━━━━━━━━//
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "0-1625305606@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "Mengter", 
            "caption": "Halo bang jagoo", 
            'jpegThumbnail': fs.readFileSync('./media/siang.jpg')
		}
	}
}
const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Hai Kak ${name}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
const fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: wm, 
   }
   }
   }

//━━━━━━━━[ BAGIAN MENU ]━━━━━━━━//
if (teks == '404') {
let menuu = `\n╭━━━━┈⎔ *INFO BOT*
├❏ *Bot Name* : *${namebot}*
├❏ *Owner* : Reza
├❏ *Version* : 3.0
├❏ *Perfix* : Multi
├❏ *Lib* : Baileys-Md@4.0.0
├❏ *Pengguna* : ${Object.keys(global.db.data.users).length}
├❏ *Chat Terbanned* : ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
├❏ *Penggunaan Terbanned* : ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
├❏ *Ram* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
╰┬───┈⎔ *INFO USER*
┌┤ *Name* : ${name}
││ *Api* : ${tag}
││ *Limit* : ${limit}
││ *Role* : ${role}
││ *Level* : ${level}
││ *Premium* : ${global.prem ? 'Yes' : 'No'}
│╰────────────┈⎔
│ *Time* : ${wib}
│ *Date* : ${week} ${date}
│ *Runtime* : ${uptime}
╰━━━━━━━━━━━━┈⎔

ICON INFO
*Ⓛ* = Fitur Memakai Limit
*Ⓟ* = Fitur Khusu Premium User   
`
const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: `${ucapan()} ${name}`,
            description: menuu,
            buttonText: 'CLICK HERE ⎙',
            listType: 1,
            footerText: "©VenBotz",
            mtype: 'listMessage',
            sections: [
                {
                "rows": [{
                  "title": "💬 〉ɞ 『 Semua Perintah 』",
                  "description": "Memberikan Semua Fitur ⌬ VenBotz",
                  "rowId": '? all'
                  }, {
                  "title": "🗳️ 〉ɞ 『 Vote & Absen 』",
                  "description": "Group only!",
                  "rowId": `${_p} vote`
                }, {
                  "title": "⛩️ 〉ɞ 『 Anime 』",
                  "description": "Bang? Anjir wibu...",
                  "rowId": `${_p} anime`
                }, {
                  "title": "↳♀️┃ASUPAN",
                  "description": "Asupan Cecan Di Berbagai Negara",
                  "rowId": `${_p}? asupan`
                }, {
                  "title": "🎫 〉ɞ 『 Sticker 』",
                  "description": "Membuat sticker yang unik!",
                  "rowId": `${_p} sticker`
                }, {
                  "title": "📥 〉ɞ 『 Downloader 』",
                  "description": "Download Sesuatu diBot!",
                  "rowId": `${_p} downloader`
                }, {
                  "title": "📈 〉ɞ 『 Exp & Limit 』",
                  "description": "Ayo tingkatkan level mu..!",
                  "rowId": `${_p} xp`
                }, {
                  "title": "🧩 〉ɞ 『 Fun 』",
                  "description": "Sangat Family Friendly...",
                  "rowId": `${_p} fun`
                }, {
                  "title": "🎮 〉ɞ 『 Game 』",
                  "description": "Gamenya seru seru kak...",
                  "rowId": `${_p} game`
                }, {
                  "title": "↳🧰┃GITHUB",
                  "description": "Unduh / Search Github Lewat Bot",
                  "rowId": `${_p}? github`
                }, {
                  "title": "👥 〉ɞ 『 Group 』",
                  "description": "Group Only!",
                  "rowId": `${_p} group`
                }, {
                  "title": "↳🖼┃IMAGE",
                  "description": "Mendapatkan Image Random Dari Bot",
                  "rowId": `${_p}? image`
                }, {
                  "title": "💻 〉ɞ 『 Internet 』",
                  "description": "Cari Sesuatu yang menarik!",
                  "rowId": `${_p} internet`
                }, {
                  "title": "☪️ 〉ɞ 『 Islamic 』",
                  "description": "Tobat Yuk Kak...",
                  "rowId": `${_p} islami`
                }, {
                  "title": "🐚 〉ɞ 『 Kerang 』",
                  "description": "Menurut Kerang ajaib...!",
                  "rowId": `${_p} kerangajaib`
                }, {
                  "title": "↳✒️┃MAKER",
                  "description": "Membuat Karya Seni",
                  "rowId": `${_p}? maker`
                }, {
                  "title": "↳👑┃OWNER",
                  "description": "Hanya Owner Yang Bisa Meng-Akses",
                  "rowId": `${_p}? owner`
                }, {
                  "title": "🎙️ 〉ɞ 『 Voice 』",
                  "description": "Voice Changer...",
                  "rowId": `${_p} audio`
                }, {
                  "title": "🌟 〉ɞ 『 Premium 』",
                  "description": "Premium Users Only!",
                  "rowId": `${_p} premium`
                }, {
                  "title": "📑 〉ɞ 『 Quotes 』",
                  "description": "Random Teks...",
                  "rowId": ".? quotes"
                }, {
                  "title": "🌱 〉ɞ 『 Rpg 』",
                  "description": "Game Epic Rpg ! ",
                  "rowId": `${_p} rpg`
                }, {
                  "title": "↳🔭┃STALKER",
                  "description": "Menguntit Mantan Ya?",
                  "rowId": `${_p}? stalk`
                }, {
                  "title": "↳🖇️┃SHORT LINK",
                  "description": "Short Link Melalui Bot",
                  "rowId": `${_p}? shortlink`
                }, {
                  "title": "🧰 〉ɞ 『 Tools 』",
                  "description": "Mungkin ini bisa membantu mu...",
                  "rowId": `${_p} tools`
                }, {
                  "title": "↳📃┃TEXT MAKER",
                  "description": "Membuat Text Menjadi Indah",
                  "rowId": `${_p}? text`
                }, {
                  "title": "🔞 〉ɞ 『 Nsfw 』",
                  "description": "Adick adick jangan liat ya...",
                  "rowId": `${_p} nsfw`
                }, {
                  "title": "↳🎰┃RANDOM",
                  "description": "Kurang Kerjaan Mampir Saja Kesini",
                  "rowId": `${_p}? random`
                }, {
                  "title": "↳⛄┃TEXT PRO",
                  "description": "Membuat Text Menjadi Indah V Image",
                  "rowId": `${_p}? textpro`
                }, {
                  "title": "↳🤳┃PHOTO OXY",
                  "description": "Photo Oxt Melalui Bot",
                  "rowId": `${_p}? textpro`
                }
                  ],
                "title": "▮𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆 」"
              },               {
                "rows": [{
                  "title": `↳⬣🤴┃OWNER BOT`,
                  "description": "Nomor Owner",
                  "rowId": `.owner`
                },{
                  "title": "ℹ️ 〉ɞ 『 Info 』",
                  "description": "Fitur fitur info...",
                  "rowId": `${_p} info`
                }],
                "title": "▮𝗜𝗻𝗳𝗼 」"
              }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: fkontak });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                  .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    
//━━━━━━━━[ SETTINGS MENU ]━━━━━━━━//
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
      const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
          hydratedTemplate: {
            imageMessage: message.imageMessage, 
            hydratedContentText: text, 
            hydratedFooterText: wm2, 
            hydratedButtons: [{
            urlButton: {
               displayText: '[🛒]  *Trakteer Bot*',
               url: web
             }

           },
             {
             urlButton: {
               displayText: '[💌]  *Official Gc*', 
               url: gc
             }

           },
               {
             quickReplyButton: {
               displayText: '[🦅]  *Owner*',
               id: '.owner',
             }

           },
               {
             quickReplyButton: {
               displayText: '[🚀]  *Speed Test*',
               id: '.ping',
             }

           },
           {
             quickReplyButton: {
               displayText: '[🏷️]  *Credits*',
               id: '.tqto',
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
     //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
} catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

//━━━━━━━━[  JANGAN DI UBAH  ]━━━━━━━━//
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat DiniHari"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time > 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}
