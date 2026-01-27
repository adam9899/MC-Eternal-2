ServerEvents.recipes(event => {


    const gadgets = [
        //MK1
        {
            result: Item.of("mininggadgets:mininggadget_simple"),
            key: Item.of("minecraft:repeater"),
        },
        //MK2
        {
            result: Item.of("mininggadgets:mininggadget_fancy"),
            key: Item.of("minecraft:lightning_rod")
        },
        //MK3
        {
            result: Item.of("mininggadgets:mininggadget"),
            key: Item.of("create:shaft")
        }
    ]

    gadgets.forEach(entry => {
        event.shaped(entry.result, [
            "DIG",
            "CUK",
            "DIG"
        ], {
            "D": Ingredient.of("#forge:gems/diamond"),
            "G": Ingredient.of("#forge:ingots/gold"),
            "I": Ingredient.of("#forge:ingots/iron"),
            "K": entry.key,
            "C": Item.of("mekanism:advanced_control_circuit"),
            "U": Item.of("mininggadgets:upgrade_empty")
        }).id(entry.result.id)

        event.smithing(entry.result, Item.of("create:empty_schematic"), Ingredient.of("#mce2:mininggadgets"), entry.key)
            .id(`mce2:smithing/${entry.result.id.split(":")[1]}`)
    })
})