module.exports = {
    exec: async ({ message, prefix, command, args }) => {
        message.delete()

        const messageAuthor = message.author
        const botName = args.shift()
        const botId = args.shift()
        const botDescription = args.join(" ") 
        const channelParent = message.channel.parent

        if(!parseInt(botId)) return message.channel.send("Veuillez fournir une ID de bot valide.").then(msg => msg.delete({ timeout: 4000 }))
        if(botId.length !== 18) return message.channel.send("Veuillez fournir une ID valide de bot valide. ").then(msg => msg.delete({ timeout: 4000 }))
        if(botDescription.length < 30) return message.channel.send("Veuillez fournir une descrition d'au moins 30 caractères.")

        const ticket = await message.guild.channels.create(
          `add-${botName}-${messageAuthor.username}`,
          {
            type: "text",
            parent: channelParent,
            permissionOverwrites: [
              {
                id: message.author.id,
                allow: ["VIEW_CHANNEL"],
              },
              {
                id: message.guild.roles.everyone.id,
                deny: ["VIEW_CHANNEL"],
              },
              {
                id: message.guild.roles.cache.find(tester => tester.name.toLowerCase().includes("testers")).id,
                allow: ["VIEW_CHANNEL"]
              },
            ],
          }
        );

          ticket.send(`<@${messageAuthor.id}>`)
          ticket.send({embed:{ 
              color: "#e65050",
              title: `Demande d'ajout du bot : ${botName}`,
              description: `**${messageAuthor.tag}** demande d'ajouter à *${message.guild.name}* son bot \`${botName}\``,
              fields: [
                { name: "Nom du bot :", value: botName, inline: true },
                { name: "Invite :", value: `https://discord.com/oauth2/authorize?client_id=${botId}&scope=bot&permissions=0`, inline: true },
                { name: "Description :", value: botDescription}
              ]
           }})

//        console.log(message + " / " + prefix + " / " + command + " / " + args)
    },
    config: { name: "add", aliases: [] }
}   