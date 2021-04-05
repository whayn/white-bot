const { existsSync, writeFileSync, readFileSync  } = require("fs")

module.exports = {
    exec: async ({ message, prefix, command}) => {
 //       if(message.author.id !== "813053611189600307") return message.reply("command in development (nano, stop)")

        const guildId = message.guild.id
        const guildData = existsSync(`./_database/guilds/config/${guildId}.json`) ? require(`../../../../_database/guilds/config/${guildId}.json`) : { prefix: "w!", join: {enabled: false, joinMsg: "", msgChannel: "", embeded: false }, leave: { enabled: false, joinMsg: "", msgChannel: "", embeded: false } }
        
        message.channel.send({embed: {
                color: 0xFEFEFE,
                title: "Guild configuration",
                description: "Configure you guild options"
            }})

       const joinMsgEnabledmsg = await message.channel.send({embed: {
           color: 0xFEFEFE,
           title: "Guild configuration",
           description: "Did you want to activate the join messages ?"
       }})
  
       joinMsgEnabledmsg.react("✅")
       joinMsgEnabledmsg.react("❎")
       const filter = (reaction, user) => ['✅', '❎'].includes(reaction.emoji.name) && !user.bot && user.id === message.author.id
       const collected = await joinMsgEnabledmsg.awaitReactions(filter, { max: 1, time: 30000 }).catch(() => message.reply('No reaction after 30 seconds, operation canceled'))

       if (collected.first().emoji.name == '✅') {
            message.channel.send("✅")
        }
        else
            message.reply('Operation canceled.').then(canceled => canceled.delete({ timeout: 5000 }));


message.channel.send(":thumbsup:")

//      if(joinMsgEnabled === true) {
//       const joinMsgContentmsg = await message.channel.send({embed: {
//               color: 0xFEFEFE,
//               title: "Guild configuration",
//               description: "Did you want to activate the join messages ?"
//           }})
//      await message.channel.awaitMessages(m => m.author.id == message.author.id,
//              {max: 1, time: 30000}).then(collected => {
//                      // only accept messages by the user who sent the command
//                      // accept only 1 message, and return the promise after 30000ms = 30s
//                      // first (and, in this case, only) message of the collection
//                      if (collected.first().content.toLowerCase() == 'yes') {
//                              message.reply('Shutting down...');
//                      }
//                      else
//                              message.reply('Operation canceled.');      
//              }).catch(() => {
//                      message.reply('No answer after 30 seconds, operation canceled.');
//              });
//           
//      }



//        
//        message.reply('The bot will now shut down.\n'
//        + 'Confirm with `yes` or deny with `no`.');
//
//// First argument is a filter function - which is made of conditions
//// m is a 'Message' object






//        writeFileSync(`./_database/guilds/config/${guildId}.json`, JSON.stringify(data))
    },
    config: { name: "config", aliases: [], categs: "setting", description: "Configurate the bot settings in your server", use:"" }
}