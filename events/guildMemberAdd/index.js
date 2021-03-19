module.exports = (member) => {
    if(member.user.bot) return // Id du serveur sur lequel je teste mon bot.

    member.roles.add('821793469726326815') // Id du role que j'ajoute aux nouveaux arrivants
    
    member.guild.channels.cache.get("822228105346678814").send({embed: {color: "#229954", description: `<a:wave_animated:821828653758939216> Welcome to ${member} ! `}}) // id du salon ou je veux envoyer mon message
}

// member.guild.id != "805457447216218132" ||