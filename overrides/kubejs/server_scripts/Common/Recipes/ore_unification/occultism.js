let crushMaterialToDust; // shortcut helper assigned later with event as a lambda param. not recommended for use.


createModule("occultism")
    .init = (event) => {
        event.remove({id: /occultism:crushing\/.*_dust_from_raw/})
        event.remove({id: /occultism:crushing\/.*_dust_from_raw_block/})

        //Gem/Ingot crushing fixing
        // their datagen looks inconsistent :V some of it has mult disabled and some doesn't
        event.remove({id: /occultism:crushing\/.*_dust_from_ingot/})
        event.remove({id: /occultism:crushing\/.*_dust_from_gem/})

        crushMaterialToDust = (output, input, oreName, sourceType) => {
            occultismCrushing(event, output, input, 100, true)
                .id(`mce2:unification/occultism/crushing/${oreName}_dust_from_${sourceType}`)
        }

        crushMaterialToDust(Item.of(global.preferredOreProducts.coal.dust), Item.of("minecraft:coal"), "coal", "coal")
    }

modules.occultism.main = (event, matId, material) => {
    //console.log(crushed, part)
    event.remove({id: `occultism:crushing/${matId}_dust`})

    if(material.crushed_raw) {
        let crushedPart = `kubejs:${matId}_crushed_part`

        occultismCrushing(event, Item.of(crushedPart, 5), 
            {tag: `forge:raw_materials/${matId}`}, 200, false)
            .id(`mce2:unification/occultism/crushing/raw_${matId}_to_crushed_part`)

        occultismCrushing(event, Item.of(crushedPart, 10),
            {tag: `forge:ores/${matId}`}, 200, false)
            .id(`mce2:unification/occultism/crushing/${matId}_dust`)

        /*
        occultismCrushing(event, Item.of(crushedPart, 36),
            {tag: `forge:storage_blocks/raw_${ore}`}, 200 * 9, false)
            .id(`mce2:occultism/crushing/raw_${ore}_block_to_crushed_part`)
        */

        event.shapeless(material.crushed_raw, [
            crushedPart, crushedPart, crushedPart, crushedPart
        ]).id(`mce2:unification/crafting/crushed_raw_${matId}_assembling`)
    }

    if(material.dust) {

        if(material.type == global.types.ORE_METAL && material.ingot)
            crushMaterialToDust(Item.of(material.dust), {tag: `forge:ingots/${matId}`}, matId, "ingot")

        if(material.type == global.types.ORE_GEM && material.gem) {
            crushMaterialToDust(Item.of(material.dust), {tag: `forge:gems/${matId}`}, matId, "gem")

            event.remove({id: `occultism:crushing/${matId}_dust`})
            occultismCrushing(event, Item.of(material.dust, 3), {tag: `forge:ores/${matId}`}, 100, false)
                .id(`mce2:unification/occultism/crushing/${matId}_dust_from_ore`)
            //crushMaterialToDust(Item.of(product, 3), {tag: `forge:ores/${material}`}, material, "ore")
        }
    }
}