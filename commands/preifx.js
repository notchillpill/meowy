module.exports = {
    name: "cprefix",
    code: `$argsCheck[1;{title:Błąd!} {description:Napisz jaki prefix chcesz ustawić!} {color:RED} {footer: $userTag[$authorID] ($authorID):$authorAvatar]
        $onlyPerms[manageserver;$argsCheck[2;{title:Błąd} {description:Nie posiadasz uprawnienia \`MANAGE_SERVER\`} {color:RED} {footer: $userTag[$authorID] ($authorID):$authorAvatar}]
        $setServerVar[prefix;$message]
        $title[Ustawiono prefix!]
        $description[Autorole ustawione na **$message**>
        $color[GREEN]
        $footer[$userTag[$authorID] ($authorID);$authorAvatar]
        `
    }