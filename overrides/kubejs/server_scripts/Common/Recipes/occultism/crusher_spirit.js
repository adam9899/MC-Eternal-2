
ServerEvents.recipes(event => {

    //ore Crushing management
    global.processableOreNames.forEach(ore => {

        let part = `kubejs:${ore}_crushed_part`;
        let crushed = crushedRawOres[ore]
        //console.log(crushed, part)

        event.remove({id: `occultism:crushing/${ore}_dust_from_raw`})
        event.remove({id: `occultism:crushing/${ore}_dust_from_raw_block`})

        occultismCrushing(event, Item.of(part, 3), 
            {tag: `forge:raw_materials/${ore}`}, 200, false)
            .id(`mce2:occultism/crushing/raw_${ore}_to_crushed_part`)

        /*
        occultismCrushing(event, Item.of(part, 27),
            {tag: `forge:storage_blocks/raw_${ore}`}, 200 * 9, false)
            .id(`mce2:occultism/crushing/raw_${ore}_block_to_crushed_part`)
        */


        event.shapeless(crushed, [
            part,
            part,
            part
        ]).id(`mce2:crafting/crushed_raw_${ore}_assembling`)
    })


    //Gem/Ingot crushing fixing
    // their datagen looks inconsistent :V some of it has mult disabled and some doesn't
    event.remove({id: /occultism:crushing\/.*_dust_from_ingot/})
    event.remove({id: /occultism:crushing\/.*_dust_from_gem/})

    let crushToDust = (output, input, oreName, sourceType) => {
        occultismCrushing(event, Item.of(output), input, 100, true)
            .id(`mce2:occultism/crushing/${oreName}_dust_from_${sourceType}`)
    }

    Object.keys(global.preferredOreProducts.dust.metal).forEach(ore => {
        crushToDust(global.preferredOreProducts.dust.metal[ore], {tag: `forge:ingots/${ore}`}, ore, "ingot")
    })


    Object.keys(global.preferredOreProducts.dust.gem).forEach(ore => {
        crushToDust(global.preferredOreProducts.dust.gem[ore], {tag: `forge:gems/${ore}`}, ore, "gem")
    })
})