ServerEvents.recipes(event => {

    //Eternal Engine
    event.shaped(Item.of('kubejs:eternal_engine', 1), [
        'CEC',
        'OAO'
    ],
    {
        C:'ad_astra:calorite_plate',
        E:'alexscaves:enigmatic_engine',
        O:'ad_astra:ostrum_plate',
        A:'immersive_aircraft:engine',
    }).id("mce2:crafting/eternal_engine")


    //Warp Dust
    event.remove({ id: 'waystones:warp_dust' })
    event.shapeless(Item.of('waystones:warp_dust', 4), [
        'minecraft:ender_pearl',
        'majruszsdifficulty:enderium_shard'
    ]).id("mce2:crafting/waystones/warp_dust")


    //Recall Potion
    event.shaped(Item.of('majruszsdifficulty:recall_potion', 1), [
        ' E ',
        'GWG',
        ' G '
    ],
    {
        E:'minecraft:ender_eye',
        G:'minecraft:glass',
        W:'netherexp:warped_wart',
    }).id("mce2:crafting/majruszs_recall_potion")


    //Time in a Bottle
    event.shaped(Item.of('tiab:time_in_a_bottle', 1), [
        'GGG',
        'DCD',
        'LBL'
    ],
    {
        G:'minecraft:gold_block',
        D:'minecraft:diamond_block',
        C:'minecraft:clock',
        L:'minecraft:lapis_block',
        B:'minecraft:dragon_breath',
    })


    //Blazing Flask
    event.shaped(Item.of('relics:blazing_flask', 1), [
        'SHS',
        'IEI',
        'SIS'
    ],
    {
        S:'majruszsdifficulty:enderium_shard',
        H:'nethersdelight:hoglin_hide',
        I:'cataclysm:ignitium_ingot',
        E:'majruszsdifficulty:ender_pouch',
    })

    //Brimstone Nectar
    // overly expensive default recipe for this pack
    event.remove({id: "bosses_of_mass_destruction:brimstone_nectar"})
    event.shapeless("bosses_of_mass_destruction:brimstone_nectar", [
        "#forge:ingots/netherite_scrap",
        Item.of('minecraft:potion', '{Potion:"minecraft:long_regeneration"}'),
        "minecraft:ghast_tear"
    ]).id("mce2:bomd_brimstone_nectar")


    //Infinity Wand
    event.shaped("constructionwand:infinity_wand", [
        "  C",
        " S ",
        "S  "
    ],
    {
        C: "mekanism:ultimate_control_circuit",
        S: "mekanism:hdpe_stick"
    }).id("constructionwand:infinity_wand")


    //Destruction Core
    // when combined with the former, allows *free* mass destruction of only *similar* blocks indefinitely, akin to a Destruction Gadget, only arguably more powerful.
    event.shaped("constructionwand:core_destruction", [
        "GEG",
        "TVT",
        "GPG"
    ],
    {
        E: "iceandfire:cockatrice_eye",
        P: "create:precision_mechanism",
        V: "#mce2:item_trash_cans",
        G: "#forge:glass_panes",
        T: "create:electron_tube"
    }).id("constructionwand:core_destruction")


    //Mob Swab and GM Chicken Feed
    // no. it lets you create infinite spawn eggs from a single instance of a mob. this is unquestionably overpowered as shit.
    event.remove({id: "mob_grinding_utils:recipe_mob_swab"})
    event.remove({id: "mob_grinding_utils:gm_chicken_feed"})
})