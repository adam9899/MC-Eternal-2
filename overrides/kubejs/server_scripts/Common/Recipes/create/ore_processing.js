ServerEvents.recipes(event => {


    //custom Crushed Raw ores
    createSplashing(event, [Item.of(global.preferredOreProducts.nugget.cobalt, 9)], Item.of("kubejs:crushed_raw_cobalt")).id("mce2:ore_processing/splashing/crushed_raw_cobalt")
    createSplashing(event, [Item.of(global.preferredOreProducts.nugget.iesnium, 9)], Item.of("kubejs:crushed_raw_iesnium")).id("mce2:ore_processing/splashing/crushed_raw_iesnium")
})