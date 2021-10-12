module.exports = {
    type: "botJoinCommand",
    channel: "889084311893065759",
    code: `$author[Bot dołączył do serwera!]
        $description[
            :information_source: Nazwa serwera: $serverName
            :gear: ID serwera: $guildID
            :crown: Właściciel serwera: $userTag[$ownerID] ($ownerID)
            :busts_in_silhouette: Liczba osób $membersCount
            :link: Zaproszenie: [Kliknij]($getServerInvite[$guildID])
        ]
        $thumbnail[$serverIcon[$guildID]]
        $color[GREEN]`
}