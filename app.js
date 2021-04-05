
const {Client} = require("discord.js")
const { existsSync, readdirSync, statSync } = require('fs')

const client = new Client()
module.exports = client

const commands = []
readdirSync(`./events/message/commands`).forEach(
  (dir) => statSync(`./events/message/commands/${dir}`).isDirectory() && readdirSync(`./events/message/commands/${dir}`).forEach((file) => {
      if(!file.endsWith(`.js`)) return console.log("Y'a des ptains de DS_store")
      commands.push(require(`./events/message/commands/${dir}/${file}`));
    })
);
client.commands = commands

readdirSync("./events").forEach((dir) => existsSync(`./events/${dir}/index.js`) && client.on(dir, require(`./events/${dir}/index.js`))) 

client.login(require('./config.json').token)