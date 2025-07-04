
ServerEvents.recipes(event => {

    arsEnchanting(event, Item.of('ars_additions:warp_index'),
        Item.of("ars_nouveau:mundane_belt"), [
            Item.of("ars_nouveau:enchanters_eye"),
            Item.of("ars_nouveau:scryers_crystal"),
            Item.of("ars_nouveau:starbuncle_charm"),
            Item.of("ars_nouveau:bookwyrm_charm"),
            Item.of("minecraft:nether_star")
    ], 1000).id("ars_additions:apparatus/warp_index")

    arsEnchanting(event, Item.of("ars_additions:stabilized_warp_index"),
        Item.of("ars_additions:warp_index"), [
            Item.of("waystones:warp_stone"),
            Item.of("minecraft:echo_shard"),
            Item.of("minecraft:ender_chest"),
            Item.of("mekanism:elite_control_circuit")
    ], 1000, true).id("ars_additions:apparatus/stabilized_warp_index")
})