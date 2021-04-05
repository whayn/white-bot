module.exports = (member) => {
    if(member.user.bot) return 

    member.roles.add('821793469726326815') 
    
    member.guild.channels.cache.get("822228105346678814").send({embed: {color: "#229954", description: `<a:wave_animated:821828653758939216> Welcome to ${member} ! `}}) 
}
