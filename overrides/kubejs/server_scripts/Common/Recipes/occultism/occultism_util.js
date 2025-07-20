
const bookOfBinding = {
    foliot: "occultism:book_of_binding_bound_foliot",
    djinni: "occultism:book_of_binding_bound_djinni",
    afrit: "occultism:book_of_binding_bound_afrit",
    marid: "occultism:book_of_binding_bound_marid"
}

const occultismDummyNone = "occultism:jei_dummy/none"

const occultismCrushing = (event, output, input, time, ignoreMult, minTier, maxTier) => {
    let recipe = {
        type: "occultism:crushing",
        result: output,
        ingredient: input,
        crushing_time: time
    }


    if(ignoreMult)
        recipe.ignore_crushing_multiplier = ignoreMult
    if(minTier)
        recipe.min_tier = minTier
    if(maxTier)
        recipe.max_tier = maxTier

    return event.custom(recipe)
}

const occultismRitual = (event, output, dummy, pentacle, central, duration, inputs, mergedData) => {

    let recipe = {
        type: "occultism:ritual",
        result: output,
        activation_item: central,
        ingredients: inputs,
        pentacle_id: pentacle,
        duration: duration,
        ritual_dummy: dummy
    }

    if(mergedData)
        Object.assign(recipe, mergedData)

    //console.log(recipe)
    return event.custom(recipe)
}

const occultismRegularCraftRitual = (event, output, dummy, pentacle, central, duration, inputs) => {
    let mergedData = {
        ritual_type: "occultism:craft"
    }
    return occultismRitual(event, output, dummy, pentacle, central, duration, inputs, mergedData)
}

const occultismJobSpiritRitual = (event, spiritJob, summonEntity, dummy, pentacle, central, duration, inputs) => {
    let mergedData = {
        ritual_type: "occultism:summon_spirit_with_job",
        spirit_max_age: -1,
        spirit_job_type: spiritJob,
        entity_to_summon: summonEntity,
        ritual_dummy: dummy
    }
    return occultismRitual(event, Item.of(occultismDummyNone), pentacle, central, duration, inputs, mergedData);
}