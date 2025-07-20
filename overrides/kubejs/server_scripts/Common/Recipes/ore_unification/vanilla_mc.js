let rebuildSmelting;

let removeCraftingForUsing;

let variantConversionStonecutting;

createModule("minecraft")
    .first = (event) => {

        rebuildSmelting = (material, product, inputType, outputType, idSuffix, xp) => {
            //console.log(`processing Smelting/Blasting rebuild for "${material}"`)
            event.remove({type: "minecraft:smelting", input: inputType, output: outputType})
            event.remove({type: "minecraft:blasting", input: inputType, output: outputType})

            event.smelting(product, inputType)
                .cookingTime(200)
                .xp(xp)
                .id(`mce2:unification/smelting/${material}_${idSuffix}`)

            event.blasting(product, inputType)
                .cookingTime(100)
                .xp(xp)
                .id(`mce2:unificiation/blasting/${material}_${idSuffix}`)
        }

        removeCraftingForUsing = (output, input) => {
            //console.log(`${output} < ${input}`)
            event.remove([{
                type: "minecraft:crafting_shaped", 
                input: input,
                output: output
            }, {
                type: "minecraft:crafting_shapeless",
                input: input,
                output: output
            }])
        }

        //Use chippedBenchConversion instead, this will stay commented unless we like, remove chipped.
        /*
        variantConversionStonecutting = (variants) => {
            if(variants.length <= 1) return;
            for (let storageBlock of variants) {
                for (let variant of variants) 
                    if(storageBlock != variant)
                        event.stonecutting(variant, storageBlock)
                            .id(`mce2:unification/stonecutting/block_variants/${variant.replace(":", "_")}_from_${storageBlock.replace(":", "_")}`)
            }
        }
        */

        //AC uranium considered a Uranium Ingot block, but can be uncrafted into Raw Uranium. that's a dupe exploit hiding in plain sight.
        event.remove({id: "alexscaves:uranium_from_block"})
        event.remove({id: "alexscaves:block_of_uranium"})
    }

modules.minecraft.subscribe("ore_ingot", (event, material, product) => {

    //Raw Ore > Ingot
    rebuildSmelting(material, product,  Ingredient.of(`#forge:raw_materials/${material}`), `#forge:ingots/${material}`, "ingot_from_raw", 0.7)

    //Ore > Ingot
    rebuildSmelting(material, product, Ingredient.of(`#forge:ores/${material}`), `#forge:ingots/${material}`, "ingot_from_ore", 0.7)

})

modules.minecraft.subscribe("dust_metal", (event, material, product) => {

    //Dust > Ingot
    rebuildSmelting(material, global.preferredOreProducts.ingot[material], Ingredient.of(`#forge:dusts/${material}`), `#forge:ingots/${material}`, "ingot_from_dust", 0.1)

})

modules.minecraft.subscribe("crushed_raw", (event, material, product) => {

    //Crushed Raw > Ingot
    rebuildSmelting(material, global.preferredOreProducts.ingot[material], Ingredient.of(`#create:crushed_raw_materials/${material}`), `#forge:ingots/${material}`, "ingot_from_crushed_raw", 0.2)

})

modules.minecraft.subscribe("metal_block", (event, material, product) => {

    let ingot = `#forge:ingots/${material}`
    let nugget = `#forge:nuggets/${material}`
    let block = `#forge:storage_blocks/${material}`

    //Ingot > Nugget
    removeCraftingForUsing(nugget, ingot)

    event.shapeless(Item.of(global.preferredOreProducts.nugget[material], 9), [
        ingot
    ]).id(`mce2:unification/crafting/nuggets/${material}_nugget_from_ingot`)


    //Nugget > Ingot
    removeCraftingForUsing(ingot, nugget)

    event.shapeless(global.preferredOreProducts.ingot[material], [
        nugget, nugget, nugget, nugget, nugget, nugget, nugget, nugget, nugget
    ]).id(`mce2:unification/crafting/ingots/${material}_ingot_from_nugget`)


    //Ingot > Block
    removeCraftingForUsing(block, ingot)

    event.shapeless(product, [
        ingot, ingot, ingot, ingot, ingot, ingot, ingot, ingot, ingot
    ]).id(`mce2:unification/crafting/blocks/${material}_block_from_ingot`)


    //Block > Ingot
    removeCraftingForUsing(ingot, block)

    event.shapeless(Item.of(global.preferredOreProducts.ingot[material], 9), [
        block
    ]).id(`mce2:unification/crafting/blocks/${material}_ingot_from_block`)


    //Stonecutting to other mods' Storage Block variants
    // for deco purposes, they should still uncraft into the preferred product
    /**
     * use {@link chippedBenchConversion} for this for the time being.
     * /
    let blocks = Ingredient.of(block).itemIds
    for (let storageBlock of blocks) {
        if(blocks.length <= 1) continue;
        for (let variant of blocks) 
            if(storageBlock != variant)
                event.stonecutting(variant, storageBlock)
                    .id(`mce2:unification/stonecutting/block_variants/${variant.replace(":", "_")}_from_${storageBlock.replace(":", "_")}`)
    }
    */
})


modules.minecraft.subscribe("raw_block", (event, material, product) => {

    let rawOre = `#forge:raw_materials/${material}`
    let rawBlock = `#forge:storage_blocks/raw_${material}`

    //Raw Block > Raw Ore
    removeCraftingForUsing(rawOre, rawBlock)

    event.shapeless(Item.of(global.preferredOreProducts.raw_material[material], 9), [
        rawBlock
    ]).id(`mce2:unification/crafting/blocks/raw_${material}_from_raw_block`)

    //Raw Ore > Raw Block
    removeCraftingForUsing(rawBlock, rawOre)

    event.shapeless(product, [
        rawOre, rawOre, rawOre, rawOre, rawOre, rawOre, rawOre, rawOre, rawOre
    ]).id(`mce2:unification/crafting/blocks/raw_${material}_block_from_raw_ore`)
})
