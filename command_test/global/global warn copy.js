module.exports =  {
    name: "gwarn",
    code: `$title[Globalne ostrzeżenie]
$description[Zostałeś ostrzeżony globalnie przez **$username#$discriminator**
twoje id i powod: **$noMentionMessage
**]
$footer[$Addtimestamp]
$color[RED]
$dm[$message[1]]
$onlyForIDs[$botOwnerID;]`
}