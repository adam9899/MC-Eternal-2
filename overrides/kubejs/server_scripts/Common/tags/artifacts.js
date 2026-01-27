ServerEvents.tags("entity_type", event => {

    //What mobs are considered Creepers by the Kitty Slippers
    event.add("artifacts:creepers", [
        /specialmobs:.*creeper/,
        /creeperoverhaul:.*_creeper/
    ])
})