module.exports = {
    name: "set",
    aliases: ['gchat', 'globalchatset'],
    code: `$setServerVar[gchat;$createWebhook[$channelID;GlobalChat;https://images-ext-2.discordapp.net/external/XaofodO7E-5yHLWpDnSke1ekM3Caf7Hj7GD5vaAMT8Y/https/i.ytimg.com/vi/gqmr01N0ydM/hqdefault.jpg;yes;#SEMI#]]
    $setServerVar[gchatch;$mentionedChannels[1]]
$onlyforids[$botOwnerID; :x: brak uprawnienia moderator bota]`
}