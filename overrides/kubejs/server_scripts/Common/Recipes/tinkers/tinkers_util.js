const tinkersEntityMelting = (event, entityTypes, fluid, amount, damage) => {
    let recipe = {
        type: "tconstruct:entity_melting",
        entity: {
            types: entityTypes
        },
        result: {
            fluid: fluid,
            amount: amount
        },
        damage: damage || 2
    }

    return event.custom(recipe)
} 
