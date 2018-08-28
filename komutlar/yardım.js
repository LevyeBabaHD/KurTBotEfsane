const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `k!banned = Dene ve Gör! \nk!avatarım = Avatarınınızı Gösterir. \nk!herkesebendençay = Herkese Çay Alırsınız. \nk!koş = Koşarsınız.\nk!çayiç = Çay İçersiniz. \nk!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nk!çayaşekerat = Çaya Şeker Atarsınız. \nk!yumruh-at = Yumruk Atarsınız. \nk!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nk!sunucuresmi = BOT Sunucunun Resmini Atar. \nk!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nk!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \nk!söv = Size Özelden Söver.`)
  .addField("**Sunucu Yetkilisi Komutları**", `k!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nk!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nk!unban = İstediğiniz Kişinin Yasağını Açar. \nk!sustur = İstediğiniz Kişiyi Susturur. -MUTED- \n-oylama = Oylama Açar. \n-duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Botun Ana Komutları**", "k!yardım = BOT Komutlarını Atar. \nk!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nk!ping = BOT Gecikme Süresini Söyler. \nk!davet = BOT Davet Linkini Atar. \nk!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Gizli Komutlar:**", " **Botun Altyapısında Bazı Gizli Komutlar Var Bunları Bul Hade** ")
  .setFooter('**Beni Yaratan =ＬＥＶＹＥ#8336**  ')


  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
