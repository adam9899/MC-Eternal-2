

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