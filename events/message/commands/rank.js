const { existsSync } = require('fs');

module.exports = {
    exec: async ({ message, args }) => {
        const member = message.guild.members.cache.get(args[0] && args[0].replace(/\D+/g, "")) || message.member;
        const user_exp = existsSync(`./_database/users/exp/${message.author.id}.json`) ? require(`../../../_database/users/exp/${message.author.id}.json`) : { level: 0, exp: 0 };

        message.channel.send({
            embed: {
                color: "53935",
                author: { name: `Niveau de ${member.user.tag}`, icon_url: member.user.displayAvatarURL({ size: 2048, dynamic: true, format: "png" }) },
                fields: [
                    { name: "Niveau", value: user_exp.level, inline: true },
                    { name: "Experience", value: user_exp.exp, inline: true }
                ]
            }
        })
    },

    config: {name: "rank", aliases: ["profile", "exp"]}
}
