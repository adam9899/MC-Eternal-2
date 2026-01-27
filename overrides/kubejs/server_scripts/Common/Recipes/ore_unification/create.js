
createModule("create")
    .init = (event) => {
        //custom Crushed Raw ores
        //createSplashing(event, [Item.of(global.preferredOreProducts.cobalt.nugget, 9)], Item.of("kubejs:crushed_raw_cobalt")).id("mce2:unification/splashing/crushed_raw_cobalt")
        //createSplashing(event, [Item.of(global.preferredOreProducts.iesnium.nugget, 9)], Item.of("kubejs:crushed_raw_iesnium")).id("mce2:unification/splashing/crushed_raw_iesnium")

        let crushedRawAndBlock = (matId) => {
            let material = global.preferredOreProducts[matId]
            createCrushing(event, [material.crushed_raw, {item: "create:experience_nugget", chance: 0.75}], Ingredient.of(`#forge:raw_materials/${matId}`))
                .id(`mce2:unification/crushing/crushed_${matId}_from_raw`)

            createCrushing(event, [Item.of(material.crushed_raw, 9), {item: "create:experience_nugget", count: 9, chance: 0.75}], Ingredient.of(`#forge:storage_blocks/raw_${matId}`))
                .id(`mce2:unification/crushing/crushed_${matId}_from_raw_block`)

            createCrushing(event, [Item.of(material.crushed_raw), {item: material.crushed_raw, chance: 0.75}, {item: "create:experience_nugget", chance: 0.75}], Ingredient.of(`#forge:ores/${matId}`))
                .id(`mce2:unification/crushing/crushed_${matId}_from_ore`)
        }

        crushedRawAndBlock("cobalt")
        crushedRawAndBlock("iesnium")

        // nuke Washing recipes for Crushed Raw ores
        event.remove({id: /create:splashing\/.*crushed_raw_.*/})
    }

modules.create.main = (event, matId, material) => {

    if(material.crushed_raw && material.nugget) {

        let inputs = [Item.of(material.nugget, 9)]
        if(material.byproduct)
            inputs.push(material.byproduct)

        createSplashing(event, inputs, material.crushed_raw)
            .id(`mce2:unification/splashing/crushed_raw_${matId}`)
    }
}