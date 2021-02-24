const client = require('../../app')

module.exports = () => {
    const status = [
        "Ban ! Ban! Ban !", "b!help", `${client.guilds.cache.size} serveurs`, `${client.users.cache.filter(user => !user.bot).size} utilisateurs`
    ]
    var interval = setInterval (function () {
        const random = Math.floor(Math.random() * status.length)
        const statue = status[random]
        client.user.setActivity(statue, { type: 'PLAYING' })
    }, 10 *  1000); 

    client.user.setStatus('dnd')

    console.log(`${client.user.username} is started !`)
    console.log(`${client.commands.length} commands load.`)
}