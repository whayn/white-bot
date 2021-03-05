module.exports = {
    exec: ({ message }) => {
        message.delete()
        if(!message.channel.name.startsWith("add" || "test")) return message.channel.send("Vous ne pouvez pas fermer un salon qui n'est pas un ticket.").then(msg => msg.delete({ timeout: 4000 }))
        message.channel.delete()
        message.author.send("Ticket fermé avec succès.")
    },
    config: { name: "close", aliases: [] }
}   