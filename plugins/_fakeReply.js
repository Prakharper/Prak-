import fetch from 'node-fetch'

export async function before(m, { conn }) {
let name = '𝑷𝒓𝒂𝒌𝑩𝒐𝒕- 𝑴𝑫 - 𝑪𝒉𝒂𝒏𝒏𝒆𝒍'
let imagenes = ["https://files.catbox.moe/aitrwl.jpg",
"https://files.catbox.moe/say0dh.jpg",
"https://files.catbox.moe/9gylyb.jpg",
"https://files.catbox.moe/53hv9g.jpg",
"https://files.catbox.moe/sonk72.jpg",
"https://files.catbox.moe/aitrwl.jpg",
"https://files.catbox.moe/say0dh.jpg"]

let icono = imagenes[Math.floor(Math.random() * imagenes.length)]


global.rcanal = {
 contextInfo: {
             isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363352827504495@newsletter",
      serverMessageId: 100,
      newsletterName: name,
   }, 
   externalAdReply: {
    showAdAttribution: true, 
    title: botname, 
    body: textbot, 
    mediaUrl: null, 
    description: null, 
    previewType: "PHOTO", 
    thumbnailUrl: icono, 
    sourceUrl: canal, 
    mediaType: 1, 
    renderLargerThumbnail: false }, 
    }, 
    }


 global.fake = {
    contextInfo: {
            isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363317263885467@newsletter",
      serverMessageId: 100,
      newsletterName: name,
    },
    },
  }
}