

const arsEnchanting = (event, output, central, pedestalItems, source, keepReagentNBT) => {

    source = source || 0

    let recipe = {
        type: "ars_nouveau:enchanting_apparatus",
        pedestalItems: pedestalItems,
        reagent: [central],
        output: output,
        source: source,
    }

    if(keepReagentNBT)
        recipe.keepNbtOfReagent = keepReagentNBT

    return event.custom(recipe);
}