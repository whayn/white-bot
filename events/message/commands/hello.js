module.exports = {
    exec: ({message}) => message.react('👋'),
    config: {name: 'hello', aliases: ['hi']}
}

// {if(hello.some((string) =>  message.content.startsWith(string) )) return message.react('👋')}