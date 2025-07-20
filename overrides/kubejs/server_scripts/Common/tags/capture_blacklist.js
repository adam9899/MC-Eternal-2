
const tagNoCapture = "#c:capturing_not_supported"

const tagNoFarming = "#c:spawning_not_supported"


ServerEvents.tags("entity_type", event => {

    //extra Bosses
    // for some reason they weren't already idk why
    event.add("forge:bosses", [
        "bosses_of_mass_destruction:lich",
        "bosses_of_mass_destruction:gauntlet",
        "bosses_of_mass_destruction:void_blossom",
        "mowziesmobs:ferrous_wroughtnaut",
        "mowziesmobs:frostmaw",
        "mowziesmobs:umvuthi",
        "mowziesmobs:sculptor",
        "masquerader_mod:masquerader",
        "irons_spellbooks:dead_king",
        "irons_spellbooks:dead_king_corpse"
    ])


    //No Capture
    event.add("c:capturing_not_supported", [
        "#forge:bosses",
        "minecraft:warden",
        "irons_spellbooks:citadel_keeper",
        "irons_spellbooks:pyromancer",
        "irons_spellbooks:archevoker",
        "irons_spellbooks:apothecarist",
        "irons_spellbooks:cryomancer",
        "alexscaves:hullbreaker",
        "alexscaves:tremorzilla",
        "artifacts:mimic",
        "irons_spellbooks:priest",
        "irons_spellbooks:cultist",
        "goblintraders:goblin_trader",
      "goblintraders:vein_goblin_trader",
        "iceandfire:lightning_dragon",
        "iceandfire:fire_dragon",
        "iceandfire:ice_dragon",
        "iceandfire:sea_serpent",
        /occultism:.*((?=possessed)|(?=familiar)).*/,
        "occultism:otherworld_bird",
        "occultism:afrit_wild",
        "occultism:shub_niggurath_spawn",
        /occultism:wild_hunt_.*/,
        /pneumaticcraft:.*/,

        //Non-Living
        // atleast Ars Nouveau is a bit dumb, and can catch nonliving entities :V
        "minecraft:item",
        "minecraft:arrow",
        "minecraft:spectral_arrow",
        "tconstruct:indestructible",
        "occultism:thrown_sword"
    ])


    event.add("ars_nouveau:jar_blacklist", [
        tagNoCapture
    ])

    event.add("enderio:soul_vial_blacklist", [
        tagNoCapture
    ])

    event.add("occultism:soul_gem_deny_list", [
        tagNoCapture
    ])


    //No Spawning
    // inherits from No Capture
    // because if we don't want something caught, we probably do not want it farmed either.
    event.add("c:spawning_not_supported", [
        tagNoCapture
    ])

    event.add("ars_nouveau:drygmy_blacklist", [
        tagNoFarming
    ])

    event.add("enderio:spawner_blacklist", [
        tagNoFarming
    ])

    event.add("pneumaticcraft:vacuum_trap_blacklisted", [
        tagNoFarming
    ])

    

    //No Teleport
    // mostly just block bosses from being force warped, cause that is kinda silly.

    // Hexcasting, blocks Greater Teleportation
    event.add("hexcasting:cannot_teleport", [
        "#forge:bosses",
        "iceandfire:lightning_dragon",
        "iceandfire:fire_dragon",
        "iceandfire:ice_dragon"
    ])
})
