require('dotenv').config()

const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
    token: process.env.PROD_TOKEN,
    prefix: "$getServerVar[prefix]"
})

// Commands Handling
bot.loadCommands('./commands')
bot.loadCommands('./events')

bot.onMessage({
    guildOnly: false
})

bot.readyCommand({
    channel: "",
    code: `$log[Ready $userTag[$clientID]]
    $setStatus[Meow!]`
})

bot.variables({
    prefix: ".",
    autorole: "0",
    // Welcome variables
    wtitle: "",
    wdesc: "",
    wcolor: "fffff",
    wimage: "",
    wprevimage: "",
    wchannel: "",
    perms: "User"
})


// Callbacks

bot.onGuildJoin()
bot.onGuildLeave()

bot.onJoined()
