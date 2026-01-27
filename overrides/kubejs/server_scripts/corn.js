ServerEvents.recipes(event => {

// Mekanism Crushing

    event.custom({
        type:'mekanism:crushing',
        input: {
            ingredient: {
                item: 'thermal:corn_seeds'
            }
        },
        output: {
            count: 2,
            item: 'mekanism:bio_fuel'
        }
    })

    event.custom({
        type:'mekanism:crushing',
        input: {
            ingredient: {
                item: 'thermal:corn'
            }
        },
        output: {
            count: 5,
            item: 'mekanism:bio_fuel'
        }
    })

// Pneumatic Craft Ethanol
    event.custom({
        type: 'pneumaticcraft:thermo_plant',
        exothermic: true,
        fluid_input: {
            type: 'pneumaticcraft:fluid',
            amount: 100,
            tag: 'pneumaticcraft:yeast_culture'
        },
        fluid_output: {
            amount: 50,
            fluid: 'pneumaticcraft:ethanol'
        },
        item_input: {
            item: 'thermal:corn'
        },
        speed: 0.25,
        temperature: {
            max_temp: 333,
            min_temp: 303
        }
    })

})
