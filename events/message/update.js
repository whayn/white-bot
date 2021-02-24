const { writeFileSync, existsSync  } = require("fs")


module.exports = {
 user_exp: async ({ message }) => {
    const userId = message.author.id
    const data = existsSync(`./_database/users/exp/${userId}.json`) ? require(`../../_database/users/exp/${userId}.json`) : { level: 0, exp: 0 }
    const random_exp =  Math.floor(Math.random() *  5) + 1
    const exp_max = data.level == 0 ? 100 : 100 * (data.level / 10 + 1)
    
    if (data.exp + random_exp >= exp_max) {
      data.exp = 0
      data.level++
      await message.channel.send(`Bien Joué ${message.member} ! Tu passe level **${data.level}**`) && message.react("⬆️")
      writeFileSync(`./_database/users/exp/${userId}.json`, JSON.stringify(data))
    } else {
      data.exp += random_exp
      writeFileSync(`./_database/users/exp/${userId}.json`, JSON.stringify(data))
    }
  },
}
