const tinkersEntityMelting = (event, entityRep, fluid, amount, damage) => {
    let recipe = {
        type: "tconstruct:entity_melting",
        entity: entityIngredient(entityRep),
        result: {
            fluid: fluid,
            amount: amount
        },
        damage: damage || 2
    }

    return event.custom(recipe)
} 

const tinkersCastingTable = (event, result, inputFluid, time, cast, consumeCast) => {
    return tinkersCasting(event, "tconstruct:casting_table", result, inputFluid, time, cast, consumeCast)
}

const tinkersCastingBasin = (event, result, inputFluid, time, cast, consumeCast) => {
    return tinkersCasting(event, "tconstruct:casting_basin", result, inputFluid, time, cast, consumeCast)
}

const tinkersCasting = (event, type, result, inputFluid, time, cast, consumeCast) => {
    let recipe = {
        type: type,
        result: result,
        fluid: inputFluid,
        cooling_time: time,
    }

    if(cast) {
        recipe.cast = cast;
        recipe.cast_consumed = consumeCast || false
    }

    return event.custom(recipe)
}

const tinkersMelting = (event, output, input, temp, time, byproducts) => {
    let recipe = {
        type: "tconstruct:melting",
        result: output.toJson(),
        ingredient: input,
        temperature: temp,
        time: time
    }

    if(byproducts)
        recipe.byproducts = byproducts

    return event.custom(recipe)
}

const tinkersSevering = (event, output, entityRep) => {
    let recipe = {
        type: "tconstruct:severing",
        entity: entityIngredient(entityRep),
        result: output
    }

    

    return event.custom(recipe)
}

/**
 * Helper to convert a JS object to accepted Mantle `EntityIngredient` format appropriate for it. 
 * Allows Severing and Entity Melting helpers to accept hard ID, Array, or Tag reference.
 * @param {string|string[]|TagKey} entityRep object to convert to `EntityIngredient`
 * @returns 
 */
const entityIngredient = (entityRep) => {
    if(Array.isArray(entityRep))
        return { types: entityRep }
    else if(entityRep.startsWith("#"))
        return { tag: entityRep.substring(1) }
    else
        return { type: entityRep }
}