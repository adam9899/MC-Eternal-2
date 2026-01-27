
//chance doesn't work with the KJS create calls, so we have these, which *do* work, i think.

const createSplashing = (event, outputs, input) => {
    let recipe = {
        type: "create:splashing",
        results: outputs,
        ingredients: [
            input
        ]
    }

    return event.custom(recipe)
}

const createCrushing = (event, outputs, input, time) => {
    let recipe = {
        type: "create:crushing",
        results: outputs,
        ingredients: [
            input
        ]
    }

    if(time)
        recipe.processingTime = time

    return event.custom(recipe)
}