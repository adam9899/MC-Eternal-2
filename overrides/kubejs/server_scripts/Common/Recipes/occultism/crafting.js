
ServerEvents.recipes(event => {

    //Stable Wormhole
    occultismRegularCraftRitual(event, Item.of("occultism:stable_wormhole"), Item.of("occultism:ritual_dummy/craft_stable_wormhole"), "occultism:craft_foliot", Item.of(bookOfBinding.foliot), 200, [
        Item.of("occultism:wormhole_frame"),
        Item.of("occultism:iesnium_dust"),
        Item.of("ars_nouveau:scryers_crystal"),
        Item.of("occultism:iesnium_dust")
    ]).id("occultism:ritual/craft_stable_wormhole")

    //Funny Remote
    occultismRegularCraftRitual(event, Item.of("occultism:storage_remote"), Item.of("occultism:ritual_dummy/craft_storage_remote"), "occultism:craft_djinni", Item.of(bookOfBinding.djinni), 200, [
        Item.of("occultism:storage_remote_inert"),
        Item.of("waystones:warp_stone"),
        Item.of("minecraft:echo_shard")
    ]).id("occultism:ritual/craft_storage_remote")


    //Blame Goat for these

    //Storage Stabilizer Tier 1
    occultismRegularCraftRitual(event, Item.of("occultism:storage_stabilizer_tier1"), Item.of("occultism:ritual_dummy/craft_stabilizer_tier1"), "occultism:craft_foliot", Item.of(bookOfBinding.foliot), 200, [
        Item.of("occultism:otherstone_pedestal"),
        {tag: "forge:storage_blocks/bronze"},
        Item.of("minecraft:blaze_powder"),
        Item.of("occultism:spirit_attuned_gem")
    ]).id("occultism:ritual/craft_stabilizer_tier1")

    //Storage Stabilizer Tier 3
    occultismRegularCraftRitual(event, Item.of("occultism:storage_stabilizer_tier3"), Item.of("occultism:ritual_dummy/craft_stabilizer_tier3"), "occultism:craft_afrit", Item.of(bookOfBinding.afrit), 200, [
        Item.of("occultism:storage_stabilizer_tier2"),
        {tag: "forge:storage_blocks/lumium"},
        Item.of("botania:life_essence"),
        Item.of("occultism:spirit_attuned_crystal")
    ]).id("occultism:ritual/craft_stabilizer_tier3")
})