let rebuildSmelting;

let removeCraftingForUsing;

let variantConversionStonecutting;

createModule("minecraft")

modules.minecraft.init = (event) => {

    rebuildSmelting = (matId, product, inputType, outputType, idSuffix, xp) => {
        xp = xp || 0
        //console.log(`processing Smelting/Blasting rebuild for "${material}"`)
        event.remove({type: "minecraft:smelting", input: inputType, output: outputType})
        event.remove({type: "minecraft:blasting", input: inputType, output: outputType})

        event.smelting(product, inputType)
            .cookingTime(200)
            .xp(xp)
            .id(`mce2:unification/smelting/${matId}_${idSuffix}`)

        event.blasting(product, inputType)
            .cookingTime(100)
            .xp(xp)
            .id(`mce2:unificiation/blasting/${matId}_${idSuffix}`)
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

    //Ruby
    event.shapeless(global.preferredOreProducts.ruby.block, [
        "#forge:gems/ruby", "#forge:gems/ruby", "#forge:gems/ruby",
        "#forge:gems/ruby", "#forge:gems/ruby", "#forge:gems/ruby",
        "#forge:gems/ruby", "#forge:gems/ruby", "#forge:gems/ruby"
    ]).id("mce2:unification/crafting/ruby_block_from_gem")

    event.shapeless(Item.of(global.preferredOreProducts.ruby.gem, 9), [
        "#forge:storage_blocks/ruby"
    ]).id("mce2:unification/crafting/ruby_gem_from_block")

    //Sapphire
    event.remove({id: "iceandfire:sapphire_gem_to_sapphire_block"})
    event.remove({id: "iceandfire:sapphire_block_to_sapphire_gem"})

    event.shapeless(global.preferredOreProducts.sapphire.block, [
        "#forge:gems/sapphire", "#forge:gems/sapphire", "#forge:gems/sapphire",
        "#forge:gems/sapphire", "#forge:gems/sapphire", "#forge:gems/sapphire",
        "#forge:gems/sapphire", "#forge:gems/sapphire", "#forge:gems/sapphire"
    ]).id("mce2:unification/crafting/sapphire_block_from_gem")

    event.shapeless(Item.of(global.preferredOreProducts.sapphire.gem, 9), [
        "#forge:storage_blocks/sapphire"
    ]).id("mce2:unification/crafting/sapphire_gem_from_block")
}

modules.minecraft.main = (event, matId, material) => {

    let ingot = `#forge:ingots/${matId}`
    let nugget = `#forge:nuggets/${matId}`
    let block = `#forge:storage_blocks/${matId}`

    if(material.ingot) {

        //console.log(matId, material.ingot, material.nugget)

        if(material.nugget) {
            //Ingot > Nugget
            removeCraftingForUsing(nugget, ingot)

            event.shapeless(Item.of(material.nugget, 9), [
                ingot
            ]).id(`mce2:unification/crafting/nuggets/${matId}_nugget_from_ingot`)


            //Nugget > Ingot
            removeCraftingForUsing(ingot, nugget)

            event.shapeless(material.ingot, [
                nugget, nugget, nugget, nugget, nugget, nugget, nugget, nugget, nugget
            ]).id(`mce2:unification/crafting/ingots/${matId}_ingot_from_nugget`)

        }

        if(material.block) {
            //Ingot > Block
            removeCraftingForUsing(block, ingot)

            event.shapeless(material.block, [
                ingot, ingot, ingot, ingot, ingot, ingot, ingot, ingot, ingot
            ]).id(`mce2:unification/crafting/blocks/${matId}_block_from_ingot`)


            //Block > Ingot
            removeCraftingForUsing(ingot, block)

            event.shapeless(Item.of(material.ingot, 9), [
                block
            ]).id(`mce2:unification/crafting/blocks/${matId}_ingot_from_block`)

        }



        let rawOre = `#forge:raw_materials/${matId}`
        let rawBlock = `#forge:storage_blocks/raw_${matId}`

        if(material.raw_material) {

            if(material.raw_block) {
                //Raw Block > Raw Ore
                removeCraftingForUsing(rawOre, rawBlock)

                event.shapeless(Item.of(material.raw_material, 9), [
                    rawBlock
                ]).id(`mce2:unification/crafting/blocks/raw_${matId}_from_raw_block`)

                //Raw Ore > Raw Block
                removeCraftingForUsing(rawBlock, rawOre)

                event.shapeless(material.raw_block, [
                    rawOre, rawOre, rawOre, rawOre, rawOre, rawOre, rawOre, rawOre, rawOre
                ]).id(`mce2:unification/crafting/blocks/raw_${matId}_block_from_raw_ore`)
            }

            //Raw Ore > Ingot
            if(material.raw_material)
                rebuildSmelting(matId, material.ingot,  Ingredient.of(`#forge:raw_materials/${matId}`), `#forge:ingots/${matId}`, "ingot_from_raw", 0.7)

        }


        //Ore > Ingot
        if(material.type.hasOre)
            rebuildSmelting(matId, material.ingot, Ingredient.of(`#forge:ores/${matId}`), `#forge:ingots/${matId}`, "ingot_from_ore", 0.7)

        //Dust > Ingot
        if(material.dust)
            rebuildSmelting(matId, material.ingot, Ingredient.of(`#forge:dusts/${matId}`), `#forge:ingots/${matId}`, "ingot_from_dust")

        //Crushed Raw > Ingot
        if(material.crushed_raw)
            rebuildSmelting(matId, material.ingot, Ingredient.of(`#create:crushed_raw_materials/${matId}`), `#forge:ingots/${matId}`, "ingot_from_crushed_raw", 0.1)

    } else if(material.gem) {
        
    }


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
}
