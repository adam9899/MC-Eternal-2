ServerEvents.tags("entity_type", event => {

    //Tamable mobs that are problematic for tombstone to be able to generate in familiar receptacles
    event.add("tombstone:unhandled_tamable", [
        "alexscaves:tremorzilla",
        "alexscaves:tremorsaurus",
        "alexscaves:vallumraptor",
        "alexscaves:subterranodon",
        "iceandfire:fire_dragon",
        "iceandfire:ice_dragon",
        "iceandfire:lightning_dragon",
        "iceandfire:amphithere",
        "iceandfire:hippogryph",
        /iceandfire:myrmex_.*/,
        "endertrigon:baby_ender_dragon",
        "the_bumblezone:beehemoth",
        "cataclysm:netherite_ministrosity",
        "cataclysm:modern_remnant",
        "cataclysm:the_baby_leviathan",
        "occultism:otherworld_bird",
        "luggage:luggage",
        "luggage:ender_luggage"
    ])
})