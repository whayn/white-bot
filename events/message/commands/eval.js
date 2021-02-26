module.exports = {
    exec: async({ cmd, message, prefix }) => {
    const toEval = message.content.slice(prefix.length).trimStart().slice(cmd.length).trimStart()
    const evaled = inspect(await eval(/^\s*(?:let|const|var|if|switch|for)|(?<!function\*?\s*(?:\s+[a-zA-Z_$][a-zA-Z0-9_$]*)?\([^]*\)\s*{[^}]*|(?:\([^]*\)|[a-zA-Z_$][a-zA-Z0-9_$]*\s+)\s*=>\s*{?\s*)(?<![{]+([^}]+({[^]*}[^]*)?|))return(\s*(?:!\S+|;)|\s+\S+)/.test(toEval) ? `(async() => {${toEval}})()` : `(async() => ${toEval})()`), { showHidden: 1, depth: 0 })
    message.channel.send(evaled)
},
    config: { name: "eval", aliases: ["test"] }
}

