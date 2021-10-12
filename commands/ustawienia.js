module.exports = {
    name: "ustawienia",
    code: `
    $onlyPerms[manageserver;$argsCheck[2;{title:Błąd} {description:Nie posiadasz uprawnienia \`MANAGE_SERVER\`} {color:RED} {footer: $userTag[$authorID] ($authorID):$authorAvatar}]
    $footer[$userTag[$authorID] ($authorID);$authorAvatar]
    $title[Przegląd ustawień serwera]
    $color[BLUE]
    $description[
        **Prefix**:
        $getServerVar[prefix]

        **Rola w autorole**
        <@&$getServerVar[autorole]>
    ]
    

        
        `
}