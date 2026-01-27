
ServerEvents.recipes(event => {

    const basePath = "mce2:severing/";

    //Knife Scavenging mob drops to Severing

    //Farmer's Delight
    tinkersSevering(event, Item.of("farmersdelight:ham"), ["minecraft:pig", "minecraft:hoglin"])
        .id(basePath +"farmersdelight/ham")

    //Delightful
    tinkersSevering(event, Item.of("delightful:animal_fat"), "#delightful:fatty_animals")
        .id(basePath +"delightful/animal_fat")

    //End's Delight
    tinkersSevering(event, Item.of("ends_delight:enderman_gristle"), "#forge:endermen")
        .id(basePath + "ends_delight/enderman_gristle")
    tinkersSevering(event, Item.of("ends_delight:raw_ender_mite_meat"), "minecraft:endermite")
        .id(basePath +"ends_delight/endermite_meat")
    tinkersSevering(event, Item.of("ends_delight:shulker_meat"), "minecraft:shulker")
        .id(basePath +"ends_delight/shulker_meat")

    //Miner's Delight
    tinkersSevering(event, Item.of("miners_delight:arthropod"), "#mce2:arthropods")
        .id(basePath +"miners_delight/arthropod")
    tinkersSevering(event, Item.of("miners_delight:tentacles", 2), "#forge:squid")
        .id(basePath +"miners_delight/tentacle")
    tinkersSevering(event, Item.of("miners_delight:squid"), "minecraft:squid")
        .id(basePath +"miners_delight/squid")
    tinkersSevering(event, Item.of("miners_delight:glow_squid"), "minecraft:glow_squid")
        .id(basePath +"miners_delight/glow_squid")
    tinkersSevering(event, Item.of("miners_delight:bat_wing", 2), "#forge:bats")
        .id(basePath +"miners_delight/bat_wing")
    tinkersSevering(event, Item.of("miners_delight:silverfish_eggs"), "#forge:silverfish")
        .id(basePath +"miners_delight/silverfish_eggs")

    //My Nether's Delight
    tinkersSevering(event, Item.of("mynethersdelight:ghasta"), "#forge:ghasts")
        .id(basePath +"mynethersdelight/ghasta")
    tinkersSevering(event, Item.of("mynethersdelight:hoglin_hide"), "#forge:hoglins")
        .id(basePath +"mynethersdelight/hoglin_hide")
    tinkersSevering(event, Item.of("mynethersdelight:strider_slice", 2), "minecraft:strider")
        .id(basePath +"mynethersdelight/strider_slice")
    tinkersSevering(event, Item.of("mynethersdelight:strider_rock", 1), "minecraft:strider")
        .id(basePath +"mynethersdelight/strider_rock")

    //Ocean's Delight
    tinkersSevering(event, Item.of("oceansdelight:guardian"), "minecraft:guardian")
        .id(basePath +"oceansdelight/guardian")
    tinkersSevering(event, Item.of("oceansdelight:elder_guardian_slab"), "minecraft:elder_guardian")
        .id(basePath +"oceansdelight/elder_guardian_slab")

    //Ars Flavors Delight
    tinkersSevering(event, Item.of("arsdelight:wilden_meat"), "ars_nouveau:wilden_hunter")
        .id(basePath +"arsdelight/wilden_mean")
    tinkersSevering(event, Item.of("arsdelight:chimera_meat", 4), "ars_nouveau:wilden_boss")
        .id(basePath +"arsdelight/chimera_meat")

    //Vampire's Delight
    tinkersSevering(event, Item.of("vampiresdelight:human_eye"), "#mce2:vampiresdelight/humanoids")
        .id(basePath +"vampiresdelight/human_eye")
})