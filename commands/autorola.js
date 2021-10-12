module.exports = {
    name: "cautorole",
    code: `$argsCheck[1;{title:Błąd!} {description:Oznacz rolę do ustawienia albo napisz \`reset\` żeby wyłączyć!} {color:RED} {footer: $userTag[$authorID] ($authorID):$authorAvatar]
        $setServerVar[autorole;$mentionedRoles[1]]
        $title[Ustawiono autorole!]
        $description[Autorole ustawione na role: <@&$mentionedRoles[1]]>
        $color[GREEN]
        $footer[$userTag[$authorID] ($authorID);$authorAvatar]`
}