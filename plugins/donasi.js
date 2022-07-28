let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085869074622]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/ZansLord
│ • Shoppe Pay [085869074622]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
