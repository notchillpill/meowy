module.exports = {
    name: "cwelcome",
    code: `$if[$checkContains[$message;channel]==true]
    $setServerVar[wchannel;$mentionedChannels[1]]
    $title[Powodzenie]
    $description[Ustawiono kanał powitań!]
    $footer[$userTag[$authorID] ($authorID);$authorAvatar]
    
    $elseif[$checkContains[$message;title]==true]
    $setServerVar[wtitle;$messageSlice[1;200]]
    $title[Powodzenie]
    $description[Ustawiono tytuł powitań!]
    $footer[$userTag[$authorID] ($authorID);$authorAvatar]
    $endelseif
    
    $elseif[$checkContains[$message;desc]==true]
    $setServerVar[wdesc;$messageSlice[1;200]]
    $title[Powodzenie]
    $description[Ustawiono opis powitań!]
    $footer[$userTag[$authorID] ($authorID);$authorAvatar]
    $endelseif

    $elseif[$checkContains[$message;color]==true]
    $setServerVar[wcolor;$messageSlice[1;200]]
    $title[Powodzenie]
    $description[Ustawiono kolor powitań!
    To jest kolor HEX! czy jest on rozpoczęty od #?]
    $footer[$userTag[$authorID] ($authorID);$authorAvatar]
    $endelseif

    $elseif[$checkContains[$message;image]==true]
    $setServerVar[wprevimage;$messageSlice[1;200]]
    $title[Wysłano obrazek]
    $description[Wysłano obrazek do weryfikacji! będzie on działał jak zostanie zaakceptowany!]
    $footer[$userTag[$authorID] ($authorID);$authorAvatar]
    $channelSendMessage[889083035696377866;{title:Obrazek do weryfikacji!} {description:Serwer: $serverName\nWłaściciel: } {footer:Dodaj obrazek używając setimage <id serwera>}]
    $endelseif
    
    $else
    $title[Konfiguracja powitań]
    $description[
        Dostępne argumenty
        **cwelcome title** - Ustawia tytuł
        **cwelcome desc** - Ustawia opis
        **cwelcome channel** Ustawia kanał
        **cwelcome color** - Ustawia kolor
        **cwelcome image** - Ustawia obrazek
    ]
    $endif
    `
}