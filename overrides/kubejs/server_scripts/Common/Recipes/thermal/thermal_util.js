
const thermalCrucible = (event, output, input, energy) => {
    let recipe = {
        type: "thermal:crucible",
        ingredient: input,
        result: [output.toJson()],
        energy: energy
    }

    return event.custom(recipe)
}