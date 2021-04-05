module.exports = {
    exec: async ({ message, prefix, command}) => {
        message.delete()
        if(message.content.length >= 2000) return message.reply("nope")
        const toSend = message.content.slice(prefix.length + command.length + 1)
        if(toSend.includes("@")) return message.reply("you can't give a mention to ray.")
        if(!toSend) return message.channel.send(":warning: Give a sentence to say.")
        message.channel.send("You gave "+toSend+" to Ray.")
    },
    config: { name: "giftray", aliases: [], categs: "fun", description: "Make a gift to ray (from TPN)", use:"<gift>" }
}