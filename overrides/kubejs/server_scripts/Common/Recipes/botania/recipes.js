ServerEvents.recipes(event => {

    //unfortunately this has to be yeeted.
    // its implementation is too absolute and it will break many things it has not yet been found to, as it utterly bypasses spawning conditions.
    event.remove({id: "botania:brew/bloodthirst"})


    


    //Gaia Pylon
    // gates gaia a bit more solidly as an expert-tier encounter, since wither is unreliable as gate currently.
    event.shaped("botania:gaia_pylon", [
        " P ",
        "MBM",
        " P "
    ],
    {
        B: "botania:mana_pylon",
        P: "botania:pixie_dust",
        M: "#forge:ingots/manyullyn"
    }).id("botania:gaia_pylon")

    //Runic Altar
    //Adds Forge tags to the runes of Air and Summer, allowing substitutes for vanilla Slimeballs and Feathers
    //if there's a way to do this in-place instead of ripping out the old recipe and putting a near-identical one back in PLEASE tell me
    event.remove({id: "botania:runic_altar/air"})
    event.remove({id: "botania:runic_altar/summer"})
    addRunicAltar(
        event, 
        Item.of('botania:rune_air', 2), 
        [Ingredient.of('#botania:manasteel_ingots'), Ingredient.of('#botania:mana_dusts'), Ingredient.of('#minecraft:wool_carpets'), Ingredient.of('#forge:feathers'), Item.of('minecraft:string')], 
        5200
    ).id("mce2:botania/runic_altar/air")
    addRunicAltar(
        event, 
        Item.of('botania:rune_summer', 2), 
        [Item.of('botania:rune_earth'), Item.of('botania:rune_air'), Ingredient.of('#minecraft:sand'), Ingredient.of('#minecraft:sand'), Ingredient.of('#forge:slimeballs'), Item.of('minecraft:melon_slice')], 
        8000
    ).id("mce2:botania/runic_altar/summer")
})
