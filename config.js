const { writeFileSync, existsSync  } = require("fs")


module.exports = {
    exec: async ({ message }) => {
        const serveData = existsSync(`./_database/servers/config/${message.guild.id}.json`) ? require(`../../../../_database/servers/config/${message.guild.id}`) : { prefix: "w!", join: {enabled: false, joinMsg: "", msgChannel: ""}, leave: {enabled: false, joinMsg: "", msgChannel: ""} }
        message.channel.send("hey")
    }, 
    config: { name: "config", aliases: [], categs: "settings", decription: "Configurate the bot settings in your server", use:"" }
}