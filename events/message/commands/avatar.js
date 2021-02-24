module.exports = {
    exec: ({ message, args }) => {
      const member = message.guild.members.cache.get(args[0] && args[0].replace(/\D+/g, '')) || message.member   //
      const membre = message.mentions.members.first() || message.member
      message.channel.send({
        embed: {
          title: `Avatar de ${membre.displayName}`,
          url: member.user.displayAvatarURL(),
          color: 0xe53935,
          image: {
            url: member.user.displayAvatarURL({
              size: 2048,
              format: "png",
              dynamic: true,
            })
            },
            timestamp: new Date(),
            footer: {
              text: `Asked by ${message.author.username}`,
              icon_url: message.author.displayAvatarURL() 
          },
        },
      });
    },
    config: {name: 'avatar', aliases: ['pp']}
}