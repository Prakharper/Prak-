import moment from 'moment-timezone';

let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  let user = global.db.data.users[userId];

  let name = conn.getName(userId);
  let cumpleanos = user.birth || 'No especificado';
  let genero = user.genre || 'No especificado';
  let pareja = user.marry || 'No especificado';
  let exp = user.exp || 0;
  let nivel = user.level || 0;
  let coins = user.coin || 0;

  let perfil = await conn.profilePictureUrl(userId, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg');

let name = '𝑷𝒓𝒂𝒌𝑩𝒐𝒕- 𝑴𝑫 - 𝑪𝒉𝒂𝒏𝒏𝒆𝒍'
   let banner = 'https://files.catbox.moe/3xqp7x.jpg';

  let MenuText = `𝐇𝐨𝐥𝐚! 𝐒𝐨𝐲 ${botname} 
> © 𝐏𝐨𝐰𝐫𝐞𝐝 𝐁𝐲 (⁎˃ᴗ˂⁎)𝐈𝐒𝐀`.trim();

    conn.sendMessage(m.chat, { 
      image: { url: banner }, 
      caption: MenuText, 
      footer: "by Isita", 
      buttons: [
        { buttonId: ".precio1", buttonText: { displayText: "hola" } }, 
        { buttonId: ".menu", buttonText: { displayText: ".s" } }
      ], 
      headerType: 6, 
      viewOnce: true, 
      contextInfo: {
        forwardedNewsletterMessageInfo: { 
          newsletterJid: '120363368073378190@newsletter', 
          serverMessageId: '', 
          newsletterName: name
        }, 
        isForwarded: true
      }
    }, { quoted: m });
};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu2', 'allmenu2', 'menú2', 'help2'];

export default handler;

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}