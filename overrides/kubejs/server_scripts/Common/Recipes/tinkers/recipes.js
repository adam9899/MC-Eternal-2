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
    tinkersMelting(event, Fluid.of("tconstruct:molten_cobalt", 360), Item.of("tconstruct:foundry_controller"), 1000, 232, 
        [Fluid.of("tconstruct:scorched_stone", 1000).toJson()])
        .id("tconstruct:smeltery/melting/obsidian/foundry_controller")


    //Quark Gold Bars melting for parity
    tinkersMelting(event, Fluid.of(global.preferredOreProducts.gold.molten, 30), Ingredient.of("#mce2:gold_bars"), 700, 33)
        .id("tconstruct:smeltery/melting/metal/gold/nugget_3")

    
    chippedBenchConversion(event, benches.tinkering, ["mce2:gold_bars"])
        .id("mce2:chipped/gold_bars_variant_conversion")
})