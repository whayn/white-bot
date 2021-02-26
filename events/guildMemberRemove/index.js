module.exports = (member) => {
    if(member.user.bot) return 

    member.guild.channels.cache.get("813815261031432222").send({embed: {color: "#e53935", description: `:door: ${member} leave the guild  `}})
}
