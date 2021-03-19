module.exports = (member) => {
    if(member.user.bot) return 

    member.guild.channels.cache.get("822228105346678814").send({embed: {color: "#e53935", description: `:door: ${member} left the guild  `}})
}
