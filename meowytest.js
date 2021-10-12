const aoijs = require("aoi.js")
require('dotenv').config()

const bot = new aoijs.Bot({
    token: process.env.TEST_TOKEN,
    prefix: "t!"
})

bot.onMessage({
    guildOnly: false
})

bot.loadCommands('./command_test')

bot.readyCommand({
    channel: "",
    code: `$djseval[console.clear();]
    $log[Ready as $userTag[$clientID]]`
})

bot.readyCommand({
    channel: "",
    code: `$wait[2s]
    $log[Ready as $userTag[$clientID]]`
})

bot.botJoinCommand({
    channel: "$systemChannelID",
    code: `$if[$guildID==717767643225915483]
    Bot dodany z powodzeniem.
    $else
    $title[Błąd!]
    $description[Ten bot jest prywatny, i nie może zostać od tak dodany]
    $color[RED]
    $endif
    `
})

bot.botJoinCommand({
    channel: "$systemChannelID",
    code: `$if[$guildID==717767643225915483]
    $wait[1s]
    $else
    $wait[1s]
    $botLeave
    $endif
    $createSlashCommand[$guildID;eval;Wykonuje kod;code:Twój zwalony kod:true:3]
    `
})

bot.onGuildJoin()

bot.onInteractionCreate()
bot.interactionCommand({
    name: "eval",
    code: `
    $if[$message==client.token]
    $interactionReply[Nie dam ci tokenu!;;;64;4]
    $elseif[$message==process.env.TEST_TOKEN]
    $interactionReply[Nie dam ci tokenu!;;;64;4]
    $endelseif
    $elseif[$message==process.env.PROD_TOKEN]
    $interactionReply[Nie dam ci tokenu!;;;64;4]
    $endelseif
    $else
    $interactionReply[;{title:Eval} {description:Input:\n\`\`\`$message\`\`\`\ \n :outbox_tray: Output\n \`\`\`$djsEval[$message;yes]\`\`\`} {footer:$userTag[$authorID] ($authorID):$authorAvatar};;0;4]
    $endif
    
    $onlyForIDs[$botOwnerID;535375983411462154;uga buga]
    $suppressErrors`
})

bot.interactionCommand({
    name: "debug",
    code: `$interactionReply[Twoja nazwa: $userTag[$authorID]\nTwoje ID: $authorID \nUtworzono: $creationDate[$authorID;date];;;;64;4]
    $onlyForIDs[$botOwnerID;]`
})

bot.variables({
    gchat: "",
    gchatch: ""
})