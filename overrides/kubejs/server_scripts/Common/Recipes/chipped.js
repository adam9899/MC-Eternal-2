
//Reference object for Chipped benches.
// call this object's values instead of writing them literally to avoid spelling mistakes.
const benches = {
    botanist: "chipped:botanist_workbench",
    glassblower: "chipped:glassblower",
    carpenter: "chipped:carpenters_table",
    loom: "chipped:loom_table",
    mason: "chipped:mason_table",
    alchemy: "chipped:alchemy_bench",
    tinkering: "chipped:tinkering_table"
}

// tags always excluded from bench conversion recipes.
const ignoredTags = [
        "forge:storage_blocks/emerald",
        "forge:storage_blocks/quartz"
    ]

/**
 * @param {RecipeType} benchType Chipped bench to add conversion to. use the const {@link benches `benches`} as a reference, and call its values.
 * @param {TagKeyItem} variantTags Item Tags which will have variant recipes added. Ignores any `chipped` or `minecraft` tags, or tags with a single entry.
 */
const chippedBenchConversion = (event, benchType, variantTags) => {
    //Filter out any entries with 1
        let acceptedVariants = []
        for (let tag of variantTags) {
            //console.log(`Items in tag: ${Ingredient.of(`#${tag}`).itemIds.length}, isChipped: ${tag.startsWith("chipped")}, isMinecraft: ${tag.startsWith("minecraft")}`)
            if(Ingredient.of(`#${tag}`).itemIds.length > 1
                    && !(tag.startsWith("chipped") || tag.startsWith("minecraft")))
                acceptedVariants.push(tag)
        }

        let recipe = {
            type: benchType,
            tags: acceptedVariants
        }

        return event.custom(recipe)
}