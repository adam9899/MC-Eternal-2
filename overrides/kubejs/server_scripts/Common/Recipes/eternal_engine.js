ServerEvents.recipes(event => {
    event.shaped(Item.of('kubejs:eternal_engine', 1), [
        'CEC',
        'OAO'
    ],
    {
        C:'ad_astra:calorite_plate',
        E:'alexscaves:enigmatic_engine',
        O:'ad_astra:ostrum_plate',
        A:'immersive_aircraft:engine',
    })
})
