ServerEvents.recipes(event => {

    event.shaped("hexcasting:spellbook", [
        "CBA",
        "DBA",
        "CBA"
    ], {
        A: "hexcasting:charged_amethyst",
        B: "minecraft:writable_book",
        C: "#forge:ingots/cobalt",
        D: "#forge:ingots/netherite_scrap"
    }).id("hexcasting:spellbook")
})