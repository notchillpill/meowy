module.exports = {
    name: "join",
    channel: "$getServerVar[wchannel]",
    type: "joinCommand",
    code: `$title[$getServerVar[wtitle]]
    $description[$getServerVar[wdesc]]
    $thumbnail[$authorAvatar]
    $color[$getServerVar[wcolor]]
    $footer[$userTag[$authorID] ($authorID)]
    $image[$getServerVar[wimage]]`
}