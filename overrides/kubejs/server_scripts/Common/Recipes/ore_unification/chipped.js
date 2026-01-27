createModule("chipped")

modules.chipped.init = (event) => {

    let tags = []
    for (let [matId, material] of Object.entries(global.preferredOreProducts)) {
        //add Metal and Gem Storage Block tags
        if(material.block)
            tags.push(`forge:storage_blocks/${matId}`)
        //add Raw Ore block tags
        if(material.raw_block)
            tags.push(`forge:storage_blocks/raw_${matId}`)
    }

    chippedBenchConversion(event, benches.alchemy, tags)
        .id("mce2:unification/chipped/forge_storage_block_conversion")

}