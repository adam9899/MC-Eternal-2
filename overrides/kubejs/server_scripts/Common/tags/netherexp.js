ServerEvents.tags("item", event => {

    event.remove("forge:ores/coal", "netherexp:fossil_fuel_ore")
    event.add("forge:ores/fossil_fuel", "netherexp:fossil_fuel_ore")
    event.add("forge:ores", "netherexp:fossil_fuel_ore")
})

ServerEvents.tags("block", event => {

    event.remove("forge:ores/coal", "netherexp:fossil_fuel_ore")
    event.add("forge:ores/fossil_fuel", "netherexp:fossil_fuel_ore")
    event.add("forge:ores", "netherexp:fossil_fuel_ore")
})