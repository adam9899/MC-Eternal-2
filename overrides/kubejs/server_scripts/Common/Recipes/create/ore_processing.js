ServerEvents.recipes(event => {


    //custom Crushed Raw ores
    createSplashing(event, [Item.of(global.preferredOreProducts.nugget.cobalt, 9)], Item.of("kubejs:crushed_raw_cobalt")).id("mce2:ore_processing/splashing/crushed_raw_cobalt")
    createSplashing(event, [Item.of(global.preferredOreProducts.nugget.iesnium, 9)], Item.of("kubejs:crushed_raw_iesnium")).id("mce2:ore_processing/splashing/crushed_raw_iesnium")

    event.smelting(global.preferredOreProducts.ingot.cobalt, "kubejs:crushed_raw_cobalt").cookingTime(200).id("mce2:ore_processing/smelting/crushed_raw_cobalt")
    event.smelting(global.preferredOreProducts.ingot.iesnium, "kubejs:crushed_raw_iesnium").cookingTime(200).id("mce2:ore_processing/smelting/crushed_raw_iesnium")

    event.blasting(global.preferredOreProducts.ingot.cobalt, "kubejs:crushed_raw_cobalt").cookingTime(100).id("mce2:ore_processing/blasting/crushed_raw_cobalt")
    event.blasting(global.preferredOreProducts.ingot.iesnium, "kubejs:crushed_raw_iesnium").cookingTime(100).id("mce2:ore_processing/blasting/crushed_raw_iesnium")
})