const DiscordJS, { Intents } = require("discord.js")
const dotenv = require('dotenv')
dotenv.config()

const config = require('config.js')

const cmds = {
  'help': {
    syntax: [
      { name: 'command', optianal: false, desc: 'The command' }
    ],
    decription: 'Get the info of eny command',
    function: helpCmd,
    alises: []
  }
}

function helpCmd(msg, ...params) {
  const cmd = params[0]

  const embed = new DiscordJS.MessageEmbed()
    .setTitle(cmd.touppercase())

}

const client = new DiscordJS.Client( {
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS
  ]
} )

client.on("ready", () => {
  console.log("READDYYYYYYYY");
})

client.on("messageCreated", msg => {
  const [starter, ...params] = msg.split(' ')

  const prefix = starter.substr(0, 1);
  const cmd = starter.substr(1)

  if (prefix == config.prefix) {

    cmds[cmd].function(msg, ...params)
  }  
})