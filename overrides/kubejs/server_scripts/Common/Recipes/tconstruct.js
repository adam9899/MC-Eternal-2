ServerEvents.recipes(event => {


    //Foundry Controller needs Cobalt
    // because you can otherwise just get everything Before The Nether thanks to mods being not balanced for our situation. and then get cobalt by melting gold.
    event.custom({
        "type": "tconstruct:retextured_casting_basin",
        "cast": {
            "tag": "tconstruct:foundry_bricks"
        },
        "cast_consumed": true,
        "cooling_time": 221,
        "fluid": {
            "amount": 360,
            "tag": "tconstruct:molten_cobalt"
        },
        "result": "tconstruct:foundry_controller"
    }).id("tconstruct:smeltery/casting/scorched/foundry_controller")

    //melting for parity with the cast recipe
    event.custom({
        "type": "tconstruct:melting",
        "byproducts": [
            {
            "amount": 1000,
            "fluid": "tconstruct:scorched_stone"
            }
        ],
        "ingredient": {
            "item": "tconstruct:foundry_controller"
        },
        "result": {
            "amount": 360,
            "fluid": "tconstruct:molten_cobalt"
        },
        "temperature": 1000,
        "time": 232
    }).id("tconstruct:smeltery/melting/obsidian/foundry_controller")
})