//adds the Raider tag to pied pipers since they spawn in raids
ServerEvents.tags("entity_type", event => {

    event.add("minecraft:raiders", [
        "rats:pied_piper"
    ])
})