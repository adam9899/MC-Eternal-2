ServerEvents.tags("entity_type", event => {

    event.add("mob_grinding_utils:no_dreadful_spawn", [
        //Mobs that are invincible to the grinder and risk crashes or lag over time in a dreadful dirt spawner
        "mowziesmobs:grottol",
        "species:limpet",
        //Quakes aren't technically invincible, but will still clog up spawner with their huge hitbox and can also instakill players through walls- enable or disable at your own discretion
        "species:quake"

    ])
})