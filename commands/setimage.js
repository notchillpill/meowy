module.exports = {
    name: "setimage",
    code: `$onlyForIDs[$botOwnerID;:x: Komenda działa narazie tylko dla właściciela!]
    $setServerVar[wimage;$getServerVar[wprevimage;$message];$message]
    Ustawiono`
}