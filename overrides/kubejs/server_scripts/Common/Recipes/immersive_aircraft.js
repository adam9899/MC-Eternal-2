ServerEvents.recipes(event => {

    event.replaceInput(
        { mod: 'immersive_aircraft' },
        'create:iron_sheet',
        '#forge:plates/iron'
    )

    event.replaceInput(
        { mod: 'immersive_aircraft' },
        'create:copper_sheet',
        '#forge:plates/copper'
    )

})
