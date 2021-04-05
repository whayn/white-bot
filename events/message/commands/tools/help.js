const { Invite, Collection } = require("discord.js");

module.exports = {

  

  exec: ({ client, message }) => {

    const prefix = "w!" 

    message.channel.send({
      embed: {
        color: 0xFEFEFE,
        title: "Whitebot's help page",
        thumbnail: {
          url: client.user.displayAvatarURL()
        },
        description: `My prefix is \`${prefix}\`\n       
                    \`<>\` → Necessary 
                    \`[]\` → Optional
                    \`|\` → Choice`,
        fields: [
          { name: "__Tools__", value: `${client.commands.filter(cmd => cmd.config.categs == "tools").map(cmd => `\`${prefix+cmd.config.name+" "+cmd.config.use}\` → ${cmd.config.description} \n`).join("")}`+`\n` },
          { name: "__Fun__", value: `${client.commands.filter(cmd => cmd.config.categs == "fun").map(cmd => `\`${prefix+cmd.config.name+" "+cmd.config.use}\` → ${cmd.config.description} \n`).join("")}`+`` },
          { name: "__Leveling__", value: `${client.commands.filter(cmd => cmd.config.categs == "exp").map(cmd => `\`${prefix+cmd.config.name+" "+cmd.config.use}\` → ${cmd.config.description} \n`).join("")}`+`\n` },
//          { name: "__Settings__", value: `${client.commands.filter(cmd => cmd.config.categs == "settings").map(cmd => `\`${prefix+cmd.config.name+" "+cmd.config.use}\` → ${cmd.config.description} \n`).join("")}`+`\n` },
//          { name: "__Credits__", value: `Bot by Whayn#2400\n Join [support server](https://discord.gg/aDq3T9wqHb)` },
        ],
        timestamp: new Date(),
        footer: {
          text: `Asked by ${message.author.username}`,
          icon_url: message.author.displayAvatarURL(),
        },
      },
    })


  },
  config: { name: "help", aliases: ["h"], categs: "tools", description: "Help page", use: "" },
};
