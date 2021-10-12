const msg = "$message"
const optins = "$getServerVar[gchat]"

module.exports = [{
    name: "$alwaysExecute",
    code: `$forEachGuild[gchat]
    
    $onlyForChannels[$getServerVar[gchatch];]
    $onlyIf[$isBot!==true;siema eniu]

`
}, {
    name: "gchat",
    type: "awaitedCommand",
    code: `
    $channelSendMessage[$getServerVar[gchatch];{author:$userTag[$authorID] ($authorID):$authorAvatar} {description:${msg}} {color:RANDOM} {footer:jakis footer XD}]
$cooldown[2s]
$suppressErrors[]`
}]