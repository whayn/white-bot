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
    });
  },
  config: { name: "help", aliases: ["h"] },
};
