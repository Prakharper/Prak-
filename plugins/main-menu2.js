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

  let MenuText = `> 「 Powered By Prak Harper あ⁩ 」


›   ╭━┄━┄━┄━┄━┄━┄╮.⠈.
›   :･ ⃕✝︎ 𝕻𝐫𝐚𝐤 𝐁Ọ𝐓. 
›   ╰── ✝︎ ──.
╭━─━─━─≪✞︎≫─━─━─━╮
┃✰ ♕︎ *Cliente:* Niño Piña
┃✰ ♕︎ *Estrellas:* 10
┃✰ ♕︎ *Nivel:* 0 [ -3471 Xp Para Subir De Nivel]
┃✰ ♕︎ *Xp:* 3540 / 69
┃✰ ♕︎ *TotalXp:* 3540
 ╰━─━─━─≪✞︎≫─━─━─━╯
╔──────¤☠︎︎¤──────╗
┋#    ✦   * 𝐈 𝐍 𝐅 𝐎 ‹‹❑ౄ*
╚──────¤☠︎︎¤─────╝
╭━─━─━─≪𓁹≫─━─━─━╮
┃✰ ♕︎ *Modo:* Publico
┃✰ ♕︎ *Prefijo:* [ *.* ]
┃✰ ♕︎ *Rutina:* --:--:-- 
┃✰ ♕︎ *Database:*  1096
╰━─━─━─≪𓁹≫─━─━─━╯
     
   ⏤͟͟͞͞☠𝕻𝐫𝐚𝐤 𝐁Ọ𝐓☠︎︎𓅓
◆━━━━━━━▣✦▣━━━━━━━━◆ 
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
			_*𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒*_ ﭢ

╭═════⊹⊱≼「 *🧧 ANIME 🎐* 」≽⊰⊹════•
┃✯› ,🚀 . .acosar @usuario
┃✯› ,🚀 . .abrazar @usuario
┃✯› ,🚀 . .llorar @usuario
┃✯› ,🚀 . .abrazar @usuario
┃✯› ,🚀 . .awoo @usuario
┃✯› ,🚀 . .besar @usuario
┃✯› ,🚀 . .lamer @usuario
┃✯› ,🚀 . .acariciar @usuario
┃✯› ,🚀 . .engreído @usuario
┃✯› ,🚀 . .golpear @usuario
┃✯› ,🚀 . .lanzar @usuario
┃✯› ,🚀 . .ruborizarse @usuario
┃✯› ,🚀 . .sonreír @usuario
┃✯› ,🚀 . .saludar @usuario
┃✯› ,🚀 . .chocar @usuario
┃✯› ,🚀 . .sostener @usuario
┃✯› ,🚀 . .morder @usuario
┃✯› ,🚀 . .glomp @usuario
┃✯› ,🚀 . .abofetear @usuario
┃✯› ,🚀 . .matar @usuario
┃✯› ,🚀 . .feliz @usuario
┃✯› ,🚀 . .guiñar @usuario
┃✯› ,🚀 . .tocar @usuario
┃✯› ,🚀 . .bailar @usuario
┃✯› ,🚀 . .cringe @usuario
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *❗ INFO ❕* 」≽⊰⊹════•
┃✯› ,🚀 . .owner
┃✯› ,🚀 . .allmenu
┃✯› ,🚀 . .script
┃✯› ,🚀 . .menugrupo
┃✯› ,🚀 . .menunsfw
┃✯› ,🚀 . .menuowner
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🔎 SEARCH 🔍* 」≽⊰⊹════•
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🕹️ GAME 🎮* 」≽⊰⊹════•
┃✯› ,🚀 . .mates
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🌐 RPG 🥇* 」≽⊰⊹════•
┃✯› ,🚀 . .claim
┃✯› ,🚀 . .depositar
┃✯› ,🚀 . .minar
┃✯› ,🚀 . .work
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🎑 REGISTRO 🎟️* 」≽⊰⊹════•
┃✯› ,🚀 . .reg *<nombre.edad>*
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *💟 STICKER 🏷️* 」≽⊰⊹════•
┃✯› ,🚀 . .scat
┃✯› ,🚀 . .sticker
┃✯› ,🚀 . .toimg *<sticker>*
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🖼️ IMAGE 🎇* 」≽⊰⊹════•
┃✯› ,🚀 . .imagen <query>
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *👥 GROUPS 📢* 」≽⊰⊹════•
┃✯› ,🚀 . .banearbot
┃✯› ,🚀 . .demote *@tag*
┃✯› ,🚀 . .emotag < emoji >
┃✯› ,🚀 . .kick *@user*
┃✯› ,🚀 . .promote *@user*
┃✯› ,🚀 . .setppgc
┃✯› ,🚀 . .desbanearbot
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🎛️ ON / OFF 🔌* 」≽⊰⊹════•
┃✯› ,🚀 . .enable
┃✯› ,🚀 . .disable
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *💎 PREMIUM 👑* 」≽⊰⊹════•
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *📥 DOWNLOAD 📤* 」≽⊰⊹════•
┃✯› ,🚀 . .soundcloud *<búsqueda>*
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🔧 TOOLS 🛠️* 」≽⊰⊹════•
┃✯› ,🚀 . .imagen <query>
┃✯› ,🚀 . .imagen <query>
┃✯› ,🚀 . .chatgpt <texto>
┃✯› ,🚀 . .ia <texto>
┃✯› ,🚀 . .genearimg
┃✯› ,🚀 . .genearimg
┃✯› ,🚀 . .hd
┃✯› ,🚀 . .imgff
┃✯› ,🚀 . .nuevafotochannel
┃✯› ,🚀 . .nosilenciarcanal
┃✯› ,🚀 . .silenciarcanal
┃✯› ,🚀 . .noseguircanal
┃✯› ,🚀 . .seguircanal
┃✯› ,🚀 . .avisoschannel
┃✯› ,🚀 . .resiviravisos
┃✯› ,🚀 . .inspect
┃✯› ,🚀 . .inspeccionar
┃✯› ,🚀 . .eliminarfotochannel
┃✯› ,🚀 . .reactioneschannel
┃✯› ,🚀 . .reaccioneschannel
┃✯› ,🚀 . .nuevonombrecanal
┃✯› ,🚀 . .nuevadescchannel
┃✯› ,🚀 . .picwish
┃✯› ,🚀 . .removebg
┃✯› ,🚀 . .document *<audio/video>*
┃✯› ,🚀 . .toimg *<sticker>*
┃✯› ,🚀 . .tourl2
┃✯› ,🚀 . .tts <lang> <teks>
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🎉 FUN 🎊* 」≽⊰⊹════•
┃✯› ,🚀 . .formartrio
┃✯› ,🚀 . .acosar @usuario
┃✯› ,🚀 . .abrazar @usuario
┃✯› ,🚀 . .llorar @usuario
┃✯› ,🚀 . .abrazar @usuario
┃✯› ,🚀 . .awoo @usuario
┃✯› ,🚀 . .besar @usuario
┃✯› ,🚀 . .lamer @usuario
┃✯› ,🚀 . .acariciar @usuario
┃✯› ,🚀 . .engreído @usuario
┃✯› ,🚀 . .golpear @usuario
┃✯› ,🚀 . .lanzar @usuario
┃✯› ,🚀 . .ruborizarse @usuario
┃✯› ,🚀 . .sonreír @usuario
┃✯› ,🚀 . .saludar @usuario
┃✯› ,🚀 . .chocar @usuario
┃✯› ,🚀 . .sostener @usuario
┃✯› ,🚀 . .morder @usuario
┃✯› ,🚀 . .glomp @usuario
┃✯› ,🚀 . .abofetear @usuario
┃✯› ,🚀 . .matar @usuario
┃✯› ,🚀 . .feliz @usuario
┃✯› ,🚀 . .guiñar @usuario
┃✯› ,🚀 . .tocar @usuario
┃✯› ,🚀 . .bailar @usuario
┃✯› ,🚀 . .cringe @usuario
┃✯› ,🚀 . .top
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🔞 NSFW 📛* 」≽⊰⊹════•
┃✯› ,🚀 . .genshin
┃✯› ,🚀 . .swimsuit
┃✯› ,🚀 . .schoolswimsuit
┃✯› ,🚀 . .white
┃✯› ,🚀 . .barefoot
┃✯› ,🚀 . .touhou
┃✯› ,🚀 . .gamecg
┃✯› ,🚀 . .hololive
┃✯› ,🚀 . .uncensored
┃✯› ,🚀 . .sunglasses
┃✯› ,🚀 . .glasses
┃✯› ,🚀 . .weapon
┃✯› ,🚀 . .shirtlift
┃✯› ,🚀 . .chain
┃✯› ,🚀 . .fingering
┃✯› ,🚀 . .flatchest
┃✯› ,🚀 . .torncloth
┃✯› ,🚀 . .bondage
┃✯› ,🚀 . .demon
┃✯› ,🚀 . .wet
┃✯› ,🚀 . .pantypull
┃✯› ,🚀 . .headdress
┃✯› ,🚀 . .headphone
┃✯› ,🚀 . .tie
┃✯› ,🚀 . .anusview
┃✯› ,🚀 . .shorts
┃✯› ,🚀 . .stokings
┃✯› ,🚀 . .topless
┃✯› ,🚀 . .beach
┃✯› ,🚀 . .bunnygirl
┃✯› ,🚀 . .bunnyear
┃✯› ,🚀 . .idol
┃✯› ,🚀 . .vampire
┃✯› ,🚀 . .gun
┃✯› ,🚀 . .maid
┃✯› ,🚀 . .bra
┃✯› ,🚀 . .nobra
┃✯› ,🚀 . .bikini
┃✯› ,🚀 . .whitehair
┃✯› ,🚀 . .blonde
┃✯› ,🚀 . .pinkhair
┃✯› ,🚀 . .bed
┃✯› ,🚀 . .ponytail
┃✯› ,🚀 . .nude
┃✯› ,🚀 . .dress
┃✯› ,🚀 . .underwear
┃✯› ,🚀 . .foxgirl
┃✯› ,🚀 . .uniform
┃✯› ,🚀 . .skirt
┃✯› ,🚀 . .sex
┃✯› ,🚀 . .sex2
┃✯› ,🚀 . .sex3
┃✯› ,🚀 . .breast
┃✯› ,🚀 . .twintail
┃✯› ,🚀 . .spreadpussy
┃✯› ,🚀 . .tears
┃✯› ,🚀 . .seethrough
┃✯› ,🚀 . .breasthold
┃✯› ,🚀 . .drunk
┃✯› ,🚀 . .fateseries
┃✯› ,🚀 . .spreadlegs
┃✯› ,🚀 . .openshirt
┃✯› ,🚀 . .headband
┃✯› ,🚀 . .food
┃✯› ,🚀 . .close
┃✯› ,🚀 . .tree
┃✯› ,🚀 . .nipples
┃✯› ,🚀 . .erectnipples
┃✯› ,🚀 . .horns
┃✯› ,🚀 . .greenhair
┃✯› ,🚀 . .wolfgirl
┃✯› ,🚀 . .catgirl
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🧮 DATABASE 🖥️* 」≽⊰⊹════•
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *👤 OWNER 👁️* 」≽⊰⊹════•
┃✯› ,🚀 . .autoadmin
┃✯› ,🚀 . .cleartmp
┃✯› ,🚀 . .getplugin
┃✯› ,🚀 . .nuevabiobot <teks>
┃✯› ,🚀 . .nuevonombrebot <teks>
┃✯› ,🚀 . .restart
┃✯› ,🚀 . .salir
┃✯› ,🚀 . .update
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *📣 AUDIOS 🔊* 」≽⊰⊹════•
┃✯› ,🚀 . .bass *<mp3/vn>*
┃✯› ,🚀 . .blown *<mp3/vn>*
┃✯› ,🚀 . .deep *<mp3/vn>*
┃✯› ,🚀 . .earrape *<mp3/vn>*
┃✯› ,🚀 . .fast *<mp3/vn>*
┃✯› ,🚀 . .fat *<mp3/vn>*
┃✯› ,🚀 . .nightcore *<mp3/vn>*
┃✯› ,🚀 . .reverse *<mp3/vn>*
┃✯› ,🚀 . .robot *<mp3/vn>*
┃✯› ,🚀 . .slow *<mp3/vn>*
┃✯› ,🚀 . .smooth *<mp3/vn>*
┃✯› ,🚀 . .tupai *<mp3/vn>*
┃✯› ,🚀 . .reverb *<mp3/vn>*
┃✯› ,🚀 . .chorus *<mp3/vn>*
┃✯› ,🚀 . .flanger *<mp3/vn>*
┃✯› ,🚀 . .distortion *<mp3/vn>*
┃✯› ,🚀 . .pitch *<mp3/vn>*
┃✯› ,🚀 . .highpass *<mp3/vn>*
┃✯› ,🚀 . .lowpass *<mp3/vn>*
┃✯› ,🚀 . .underwater *<mp3/vn>*
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🗝️ ADVANCED 📍* 」≽⊰⊹════•
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *buscador* 」≽⊰⊹════•
┃✯› ,🚀 . .imagen <query>
┃✯› ,🚀 . .imagen <query>
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *descargas* 」≽⊰⊹════•
┃✯› ,🚀 . .imagen <query>
┃✯› ,🚀 . .tiktok *<link>* ◜⭐◞
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *Descargas* 」≽⊰⊹════•
┃✯› ,🚀 . .play2
┃✯› ,🚀 . .playvid
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *nsfws* 」≽⊰⊹════•
┃✯› ,🚀 . .sixnine/69 @tag
┃✯› ,🚀 . .lesbianas/tijeras @tag
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *emox* 」≽⊰⊹════•
┃✯› ,🚀 . .kiss/besar @tag
┃✯› ,🚀 . .kiss2/besar2 @tag
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *grupo* 」≽⊰⊹════•
┃✯› ,🚀 . .group abrir / cerrar
┃✯› ,🚀 . .todos <mesaje>
┃✯› ,🚀 . .n <mensaje>
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *info* 」≽⊰⊹════•
┃✯› ,🚀 . .precios1
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *serbot* 」≽⊰⊹════•
┃✯› ,🚀 . .code
┃✯› ,🚀 . .stop
┃✯› ,🚀 . .byebot
┃✯› ,🚀 . .serbot
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *tourl* 」≽⊰⊹════•
┃✯› ,🚀 . .allff
┃✯› ,🚀 . .togris
┃✯› ,🚀 . .dalle
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *convertir* 」≽⊰⊹════•
┃✯› ,🚀 . .toibb
╰═════⊹⊱≼≽⊰⊹═════╯
> © 𝐏𝐨𝐰𝐫𝐞𝐝 𝐁𝐲 (⁎˃ᴗ˂⁎)PrakHarper`.trim();

    conn.sendMessage(m.chat, { 
      image: { url: banner }, 
      caption: MenuText, 
      footer: "by PrakHarper", 
      buttons: [
        { buttonId: ".s", buttonText: { displayText: "hola" } }, 
        { buttonId: ".menu", buttonText: { displayText: "WillZek" } }
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