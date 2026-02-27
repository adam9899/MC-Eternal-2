ServerEvents.recipes(event => {

    //Fossil Fuel into Oil
    tinkersMelting(event, Fluid.of("thermal:crude_oil", 100), Item.of("netherexp:fossil_fuel"), 600, 160)
        .id("mce2:melting/oil_from_fossil_fuel")

    thermalCrucible(event, Fluid.of("thermal:crude_oil", 100), Item.of("netherexp:fossil_fuel"), 10000)
        .id("mce2:thermal_crucible/oil_from_fossil_fuel")

    event.recipes.create.mixing(Fluid.of("thermal:crude_oil", 100), Item.of("netherexp:fossil_fuel"))
        .superheated()
        .id("mce2:mixing/oil_from_fossil_fuel")

})