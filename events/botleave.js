module.exports = {
    type: "botLeaveCommand",
    channel: "889084328724799498",
    code: `$author[Bot wyszedł!]
        $description[
            :information_source: Nazwa serwera: $serverName
            :gear: ID serwera: $guildID
            :crown: Właściciel serwera: $userTag[$ownerID] ($ownerID)
        ]
        $color[RED]`
}