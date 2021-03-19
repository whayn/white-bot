const { inspect } = require("util")

module.exports = {
    exec: async({ command, message, prefix }) => {
    if(message.author.id !== "813053611189600307") return message.channel.send("<:error:820354047763939409> Missing permission (`BOT_OWNER`)")
    const toEval = message.content.slice(prefix.length).trimStart().slice(command.length).trimStart()
    console.log(toEval)
    const evaled = inspect(await eval(/^\s*(?:let|const|var|if|switch|for)|(?<!function\*?\s*(?:\s+[a-zA-Z_$][a-zA-Z0-9_$]*)?\([^]*\)\s*{[^}]*|(?:\([^]*\)|[a-zA-Z_$][a-zA-Z0-9_$]*\s+)\s*=>\s*{?\s*)(?<![{]+([^}]+({[^]*}[^]*)?|))return(\s*(?:!\S+|;)|\s+\S+)/.test(toEval) ? `(async() => {${toEval}})()` : `(async() => ${toEval})()`), { showHidden: 1, depth: 0 })
    message.channel.send({embed: {
        color: "#e53935",
        title: "Console de Test Bot Whayn",
        description: `\`\`\`diff\n${evaled}\n\`\`\``
    }})
},
    config: { name: "eval", aliases: ["test"] }
}

//Erreuueueuruururur


