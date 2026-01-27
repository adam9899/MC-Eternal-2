ServerEvents.tags("block_entity_type", event => {

    event.add("tconstruct:side_inventories", [
        "quark:variant_chest",
        "sophisticatedstorage:chest",
        "sophisticatedstorage:barrel",
        "sophisticatedstorage:shulker_box"
    ])
})

ServerEvents.tags("item", event => {

    event.add("mce2:gold_bars", [
        "tconstruct:gold_bars",
        "quark:gold_bars"
    ])

    event.add("tconstruct:casts/empty/table", "#mce2:gold_bars")
})