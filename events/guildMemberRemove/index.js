module.exports = (member) => {
    if(member.user.bot) return 

    member.guild.channels.cache.get("817461382832062507").send({embed: {color: "#e53935", description: `:door: ${member} leave the guild  `}})
}
