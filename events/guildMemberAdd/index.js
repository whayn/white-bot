module.exports = (member) => {
    console.log("guildMemberAdd lancé ")

    if(member.user.bot) return // Id du serveur sur lequel je teste mon bot.

    member.roles.add('813810025285288027') // Id du role que j'ajoute aux nouveaux arrivants
    
    member.guild.channels.cache.get("813815261031432222").send({embed: {color: "#e53935", description: `Bienvenue à ${member} ! `}}) // id du salon ou je veux envoyer mon message
}

// member.guild.id != "805457447216218132" ||