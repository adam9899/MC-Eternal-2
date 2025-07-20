ServerEvents.recipes(event => {

    event.shaped("ae2wtlib:quantum_bridge_card", [
        "CAW",
        " E "
    ], {
        A: "ae2:advanced_card",
        W: "waystones:warp_stone",
        C: "mekanism:elite_control_circuit",
        E: "minecraft:echo_shard"
    }).id("ae2wtlib:quantum_bridge_card")

    event.remove({id: 'ae2:network/cables/smart_fluix'}) //Remove old recipe

    event.shapeless(Item.of('ae2:fluix_smart_cable', 4), [
    '4x ae2:fluix_covered_cable',
    'minecraft:redstone',
    'minecraft:glowstone_dust',
  ]
)
})