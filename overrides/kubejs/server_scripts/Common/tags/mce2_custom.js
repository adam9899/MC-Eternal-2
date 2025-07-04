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
})