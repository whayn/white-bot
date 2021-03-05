const { Invite, Collection } = require("discord.js");

module.exports = {
  exec: ({ client, message }) => {
    message.channel.send({
      embed: {
        color: 0xe53935,
        author: {
          name: "Help page",
          icon_url: client.user.displayAvatarURL(),
        },
        description: client.commands.map((cmd) => `\`${cmd.config.name}\``).join(' '),
      },
    })
//    async function asyncCall() {
//      console.log('calling');
//      const result = await message.guild.fetchInvites();
//      console.log(result);
//      // expected output: "resolved"
//    }

  },
  config: { name: "help", aliases: ["h"] },
};
