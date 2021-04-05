const arr = ['Oui', 'Non', 'Peut-être']
const Discord = require('discord.js');

module.exports = {
    exec : ({message, args}) => {
        const random = Math.floor(Math.random() * arr.length)
        const array = arr[random]
        const question = args.join(' ')
        if(!question || question.lenght < 5) return message.channel.send('<:error:813061047329488976> La question doit être supérieur à 5 caractères.') && message.react("<:error:813061047329488976>")

        const answer = new Discord.MessageEmbed()
            .setColor("#e53935")
            .setTitle(":8ball:  8ball")
            .setdescription("    ")
            .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/259/pool-8-ball_1f3b1.png")
            .addFields(
                {name: ":question: Question", value: question},
                {name: ":exclamation: Answer", value: array}
            )
            .setTimestamp()
            .setFooter(`Asked by ${message.author.username}`, message.author.displayAvatarURL())

        message.channel.send(answer)
    },
    config: {name: '8ball', aliases: [], categs: "fun", description: "Answer to your question ! 100% garranted true", use:"<question>"}
}