const {prefix} = require('../../config.json')
const client = require('../../app')
const update = require('./update')
client.cooldowns = {}


module.exports = (message) => {
    if(!message.content || message.author.bot || message.channel.type == 'dm' ) return
    if(client.cooldowns[message.member.id] && client.cooldowns[message.member.id] > Date.now()) return
    client.cooldowns[message.member.id] = Date.now() + 2000

    update.user_exp({ message })

    if(!message.content.startsWith(prefix)) return
    const [command, ...args] = message.content.toLowerCase().slice(prefix.length).split(' ') 
    const cmdToExport = client.commands.find(obj => [obj.config.name, ...obj.config.aliases, ...obj.config.categs, ...obj.config.description, ...obj.config.use].includes(command))
    if(cmdToExport ) return cmdToExport.exec({client, message, prefix, command, args})
}

