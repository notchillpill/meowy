module.exports = {
    name: "certyfikat",
    code: `
$argsCheck[>1;{title:Błąd} {description:Proszę podaj powód dlaczego chcesz certyfikat} {color:RED} {deleteIn:3s} {footer: $userTag[$authorID] ($authorID):$authorAvatar}]
    $title[Powodzenie!]
    $color[GREEN]
    $description[Wysłano prośbę o certyfikat!]
    $footer[$userTag[$authorID] ($authorID);$authorAvatar]
    $channelSendMessage[889083035696377866;{title:Prośba o certyfikat!} {description::information_source: Nazwa serwera: $serverName\n:pencil: Powód certyfikatu: $message\n::link: Zaproszenie: [kliknij]($getServerInvite[$guildID])\n:busts_in_silhouette: Liczba osób $membersCount (Wymagane 100)} {footer:Wejdź na serwer i wpisz akceptuj aby dodać certyfikat i zapisać w bazie danych}]
    $onlyPerms[admin;]
`

}