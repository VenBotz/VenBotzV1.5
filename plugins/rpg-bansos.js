let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
  try {
    global.DATABASE.data.users[m.sender].lastbansos = global.db.data.users[m.sender].lastbansos || 0
    let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
    let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
    let Aku = (randomaku * 1)
    let Kamu = (randomkamu * 1)
    let kbansos = 'https://telegra.ph/file/afcf9a7f4e713591080b5.jpg'
    let mbansos = 'https://telegra.ph/file/d31fcc46b09ce7bf236a7.jpg'
    let botol = global.wm
    //let name = conn.getName[m.sender]
    let __timers = (new Date - global.db.data.users[m.sender].lastbansos)
    let _timers = (604800000 - __timers) 
    let timers = clockString(_timers)
    let user = global.db.data.users[m.sender]
    if (new Date - global.db.data.users[m.sender].lastbansos > 300000) {
      if (Aku > Kamu) {
        conn.sendFile( m.chat, kbansos, 'b.jpg', `*「 FAILED CORRUPTION 」*\n\nKamu Tertangkap Setelah Kamu Korupsi Dana Bansos, Dan Kamu Harus Membayar Denda Sebesar 3 Juta Money💵`, m)
        user.money -= 3000000
        global.db.data.users[m.sender].lastbansos = new Date * 1
      } else if (Aku < Kamu) {
        user.money += 3000000
        conn.sendFile( m.chat, mbansos, 'b.jpg', `*「 SUCCESSFUL CORRUPTION 」*\n\nKamu Berhasil Korupsi Dana Bansos, Dan Kamu Mendapatkan 3 Juta Money💵`, m)
        global.db.data.users[m.sender].lastbansos = new Date * 1
      } else {
        conn.sendBut( m.chat, `*「 FAILED AND NOT CAPTURED 」*\n\nKamu Tidak Berhasil Korupsi Bansos Dan Tidak Masuk Penjara Karna Kamu Berhasil Lolos🏃`, `${botol}`, `Kembali`, `${usedPrefix}menu`, m)
        global.db.data.users[m.sender].lastbansos = new Date * 1
      }
    } else conn.sendBut(m.chat, `Kamu Sudah Melakukan Korupsi Bansos 💰\nDan Kamu Harus Menunggu Selama 🕓 *${timers}* Agar Bisa Korupsi Bansos Kembali`, `${botol}`, `⋮☰ Menu`, `${usedPrefix}menu`, m)
  } catch (e) {
    throw `${e}`
  }
}

handler.help = ['bansos']
handler.tags = ['rpg']
handler.command = /^(bansos|korupsi)$/i
handler.premium = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
