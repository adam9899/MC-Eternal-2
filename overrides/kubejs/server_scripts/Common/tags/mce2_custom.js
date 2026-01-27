const getCrushedRawOre = (ore) => {
    let crushedOre;
    if(ore == "cobalt" || ore == "iesnium") {
        crushedOre = `kubejs:crushed_raw_${ore}`
    } else
        crushedOre = `create:crushed_raw_${ore}`;
    return crushedOre;
}

const oreParts = []
const crushedRawOres = {}

ServerEvents.tags("item", event => {


    global.processableOreNames.forEach(ore => {
        // Crushed Ore Part tags
        let part = `kubejs:${ore}_crushed_part`
        oreParts.push(part)
        event.add(`mce2:ore_processing/crushed_parts/${ore}`, part)


        //Raw Ore tags
        let crushedOre = getCrushedRawOre(ore)
        crushedRawOres[ore] = crushedOre
        event.add(`create:crushed_raw_materials/${ore}`, crushedOre)
    })

    event.add("mce2:ore_processing/crushed_parts", oreParts)

    //Crushed Raw Ore tags
    event.add("create:crushed_raw_materials", [
        "kubejs:crushed_raw_iesnium",
        "kubejs:crushed_raw_cobalt"
    ])


    //Trash Cans
    // for tooltip, cause there are people who do not know wtf a nullifier does.
    event.add("mce2:general_trash_cans", [
        "thermal:device_nullifier",
        "ae2:condenser"
    ])

    event.add("mce2:fluid_trash_cans", [
        "#mce2:general_trash_cans"
    ])

    event.add("mce2:item_trash_cans", [
        "#mce2:general_trash_cans",
        "minecraft:lava_bucket",
        "rats:trash_can",
        "trashcompactor:trash_compactor",
        "ars_nouveau:void_jar",
        "storagedrawers:void_upgrade",
        'sophisticatedstorage:void_upgrade',
        'sophisticatedstorage:advanced_void_upgrade',
        'sophisticatedbackpacks:void_upgrade',
        'sophisticatedbackpacks:advanced_void_upgrade'
    ])


    //Hex Pigment
    event.add("mce2:hexcasting/pigment", /hexcasting:.*_colorizer.*/)


    //Mining Gadgets
    event.add("mce2:mininggadgets", /mininggadgets:mininggadget.*/)


    event.add("mce2:jei_hidden", [
        //Hide Mek Creative tanks
        // they show a variant for every fluid
        "mekanism:creative_fluid_tank",
        "mekanism:creative_chemical_tank",

        //Part-based Tinker Tools
        // there are far too many of them, for each material, the parts is more than enough.
        "tconstruct:battlesign",
        "tconstruct:broad_axe",
        "tconstruct:cleaver",
        "tconstruct:crossbow",
        "tconstruct:dagger",
        "tconstruct:excavator",
        "tconstruct:hand_axe",
        "tconstruct:kama",
        "tconstruct:longbow",
        "tconstruct:mattock",
        "tconstruct:melting_pan",
        "tconstruct:pickadze",
        "tconstruct:pickaxe",
        "tconstruct:plate_boots",
        "tconstruct:plate_chestplate",
        "tconstruct:plate_helmet",
        "tconstruct:plate_leggings",
        "tconstruct:plate_shield",
        "tconstruct:scythe",
        "tconstruct:sledge_hammer",
        "tconstruct:swasher",
        "tconstruct:sword",
        "tconstruct:vein_hammer",
        "tconstruct:war_pick",
        "tinkers_advanced:electron_tuner",
        "tinkers_advanced:ionized_cannon",
        "tinkers_advanced:matter_manipulator",
        "tinkers_katanas:katana",
        "tinkersjewelry:ring",

        //hide unavailable/disabled foods
	    "netherexp:hogham",
        "netherexp:cooked_hogham",
	    "jadensnetherexpansiondelight:hogham_slice",
	    "netherexp:red_scale_fungus",
	    "netherexp:blue_scale_fungus",
	    "jadensnetherexpansiondelight:blue_scale_fungus_roll",
	    "jadensnetherexpansiondelight:red_scale_fungus_roll",

        //disabled Mob Grinding Utils items
        "mob_grinding_utils:mob_swab",
        "mob_grinding_utils:gm_chicken_feed"
    ])
})


ServerEvents.tags("entity_type", event => {

    event.add("mce2:arthropods", [
        "#forge:spiders",
        "#forge:silverfish"
    ])

    event.add("mce2:vampiresdelight/humanoids", [
        "#vampirism:hunter",
        "#minecraft:raiders",
        "minecraft:villager",
        "minecraft:wandering_trader"
    ])
})


ServerEvents.tags("worldgen/structure", event => {

    event.add("mce2:irons_spellbooks/wizard_structure", [
        "irons_spellbooks:pyromancer_tower",
        "irons_spellbooks:mountain_tower",
        "irons_spellbooks:evoker_fort"
    ])


    event.add('kubejs:structure_locator_nether', 'netherexp:sanctum')

    event.add('kubejs:structure_locator', 'minecraft:ancient_city')
})