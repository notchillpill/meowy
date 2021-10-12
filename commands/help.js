module.exports = {
    name: "help",
    code: `$if[$message==]
        $title[Pomoc Meowy]
        $description[Siemanko! Jestem Meowy, Ciekawym botem który posiada **$commandsCount** komend\nZaufało mu **$serverCount** serwerów!\nMój prefix to $getServerVar[prefix]\nAby uzyskać pomoc o komendzie wpisz **$getServerVar[prefix]help <polecenie>**]\
        $footer[$userTag[$authorID] ($authorID);$authorAvatar]
        $addField[・Developerskie;
        **eval**]
        $addField[:gear:・Administracyjne;**certyfikat**,]
        $addField[:wrench: Konfiguracyjne;**ustawienia**, **cautorole**, **cprefix**]
        $color[BLUE]
        
        $elseif[$message==eval]
        $title[Pomoc Meowy]
        $footer[$userTag[$authorID] ($authorID);$authorAvatar]
        $addField[:mag:・Użycie;$getServerVar[prefix]eval <kod>;yes]
        $addField[:keyboard: Opis;Wykonuje kod;yes]
        $addField[📁・Kategoria; Developerskie;yes]
        $addField[⚙・Wymagane uprawnienia;Developer (bot);yes]
        $color[BLUE]
        $endelseif

        $elseif[$message==certyfikat]
        $title[Pomoc Meowy]
        $footer[$userTag[$authorID] ($authorID);$authorAvatar]
        $addField[:mag:・Użycie;$getServerVar[prefix]certyfikat <powod_czemu_go_chcesz>;yes]
        $addField[:keyboard: Opis;Wysyła request o certyfikat;yes]
        $addField[📁・Kategoria;⚙ Administracyjne;yes]
        $addField[⚙・Wymagane uprawnienia;Administrator (serwer);yes]
        $color[BLUE]

        $endelseif

        $elseif[$message==ustawienia]
        $title[Pomoc Meowy]
        $footer[$userTag[$authorID] ($authorID);$authorAvatar]
        $addField[:mag:・Użycie;$getServerVar[prefix]ustawienia;yes]
        $addField[:keyboard: Opis;Przegląd ustawień serwera.;yes]
        $addField[📁・Kategoria;⚙ Administracyjne;yes]
        $addField[⚙・Wymagane uprawnienia;Zarządzanie serwerem (serwer);yes]
        $color[BLUE]
        $endelseif
        $endif`
}