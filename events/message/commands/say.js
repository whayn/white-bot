module.exports = {
    exec: async ({ message, prefix, command}) => {
        const toSend = message.content.slice(prefix.length + command.length + 1)
        if(!toSend) return message.channel.send("<:error:813061047329488976> Give a sentence to say.")
        message.channel.send(toSend)
    },
    config: { name: "say", aliases: ["repeat"] }
}