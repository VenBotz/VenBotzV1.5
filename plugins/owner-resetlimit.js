let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
	let list = Object.entries(global.db.data.users)
	if(!args || !args[0]) {
		var lim = 50
	} else {
		var lim = parseInt(args[0])
	}
	list.slice(0, list.length).map(([user, data], i) => (Number(data.limit = lim)))
		conn.reply(m.chat, `*berhasil direset ${lim} / user*`, m)
}
handler.help = ['limit'].map(v => 'reset' + v)
handler.tags = ['owner', 'host']
handler.command = /^(resetlimit)$/i

handler.rowner = true

module.exports = handler