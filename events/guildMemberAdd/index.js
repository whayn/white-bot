module.exports = (member) => {

    if(member.user.bot) return 

    member.roles.add('817462367377162290') 
    
    member.guild.channels.cache.get("817461382832062507").send({embed: {color: "#e53935", description: `<a:wavegif:814888449417019442> Welcome to ${member} ! `}}) 
}

// member.guild.id != "805457447216218132" ||