ServerEvents.recipes(event => {

    event.shaped("integratedterminals:terminal_storage_portable", [
        " T ",
        "CEC",
        "SWS"
    ], {
        T: "integratedterminals:part_terminal_storage",
        C: "integrateddynamics:crystalized_chorus_block",
        W: "waystones:warp_stone",
        E: "mekanism:elite_control_circuit",
        S: "minecraft:echo_shard"
    }).id("integratedterminals:crafting/terminal_storage_portable")
})