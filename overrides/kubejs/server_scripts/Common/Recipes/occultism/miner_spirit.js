
ServerEvents.recipes(event => {

    event.remove({id: "occultism:miner/ores/osmium_ore"})

    event.remove({id: "occultism:miner/basic_resources/end_stone"})


    occultismMinerResult(event, Item.of("mekanism:fluorite_ore"), Ingredient.of("#occultism:miners/ores"), 150)
        .id("mce2:occult_miner/ores/fluorite")
})