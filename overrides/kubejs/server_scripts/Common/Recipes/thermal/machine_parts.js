ServerEvents.recipes(event => {
    
    //Machine Frame
    event.shaped(Item.of('thermal:machine_frame', 1), [
        'SGS',
        'GDG',
        'SGS'
    ],
    {
        S:'#forge:ingots/silver',
        G:'minecraft:tinted_glass',
        D:'thermal:diamond_gear',
    }).id('thermal:machine_frame')

    //Redstone Servo
    event.remove({ id: 'thermal:redstone_servo'})
    event.shaped(Item.of('thermal:redstone_servo', 1), [
        'RTR',
        ' P ',
        'RTR'
    ],
    {
        R: 'minecraft:redstone_block',
        T: '#forge:ingots/tin',
        P: 'create:precision_mechanism',
    }).id("thermal:redstone_servo")

    //RF Coil
    event.shaped(Item.of('thermal:rf_coil', 1), [
        '  B',
        ' R ',
        'B  '
    ],
    {
        B:'create:brass_ingot',
        R:'minecraft:redstone_block',
    }).id("thermal:rf_coil")

})
