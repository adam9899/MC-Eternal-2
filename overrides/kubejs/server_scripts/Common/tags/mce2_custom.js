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
})