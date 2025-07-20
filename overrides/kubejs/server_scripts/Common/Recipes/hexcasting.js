
const hexBlocks = {
        amethyst: [
            "minecraft:amethyst_block",
            "hexcasting:amethyst_tiles",
            "hexcasting:amethyst_bricks",
            "hexcasting:amethyst_bricks_small",
            "hexcasting:amethyst_pillar"
        ],
        slate: [
            "hexcasting:slate_block",
            "hexcasting:slate_tiles",
            "hexcasting:slate_bricks",
            "hexcasting:slate_bricks_small",
            "hexcasting:slate_pillar"
        ],
        slate_amethyst: [
            "hexcasting:slate_amethyst_tiles",
            "hexcasting:slate_amethyst_bricks",
            "hexcasting:slate_amethyst_bricks_small",
            "hexcasting:slate_amethyst_pillar"
        ],
        quenched_allay: [
            "hexcasting:quenched_allay",
            "hexcasting:quenched_allay_tiles",
            "hexcasting:quenched_allay_bricks",
            "hexcasting:quenched_allay_bricks_small"
        ]
    }

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

    //Deco blocks
    event.shaped(Item.of("hexcasting:slate_amethyst_tiles", 4), [
        "SA",
        "AS"
    ], {
        S: "hexcasting:slate_block",
        A: "#forge:storage_blocks/amethyst"
    }).id("mce2:hexcasting/slate_amethyst_tiles")

    event.remove({id: "hexcasting:stonecutting/amethyst_tiles"})

    Object.keys(hexBlocks).forEach(blockSet => {
        hexBlocks[blockSet].forEach(block => {
            hexBlocks[blockSet].forEach(inputBlock => {
                //console.log(`${block} -> ${inputBlock}`)
                if(inputBlock != block)
                    event.stonecutting(block, inputBlock).id(`mce2:${block.replace(":", "/")}_from_${inputBlock.replace(":", "_")}`)
            })
        })
    })
})