ServerEvents.recipes(event => {
    
    event.remove({ id: 'waystones:warp_stone' })
    event.remove({ id: 'waystones:warp_scroll' })
    event.remove({ id: 'waystones:return_scroll' })
    event.remove({ id: 'waystones:bound_scroll' })

    event.shaped('waystones:warp_stone', [
        'DED',
        'EGE',
        'DED'
    ], {
        D: 'minecraft:amethyst_shard',
        E: 'majruszsdifficulty:enderium_ingot',
        G: '#balm:emeralds'
    })

    event.shaped(Item.of('waystones:warp_scroll', 3), [
        'GDG',
        'GEG',
        'PPP'
    ], {
        G: '#balm:gold_nuggets',
        E: 'minecraft:ender_pearl',
        P: 'minecraft:paper',
        D: 'waystones:warp_dust'
    })


    event.shaped(Item.of('waystones:return_scroll', 3), [
        'GEG',
        'PPP'
    ], {
        G: '#balm:gold_nuggets',
        E: 'waystones:warp_dust',
        P: 'minecraft:paper'
    })


    event.shaped(Item.of('waystones:bound_scroll', 3), [
        'DDD',
        'GEG',
        'PPP'
    ], {
        D: 'waystones:warp_dust',
        G: '#balm:gold_nuggets',
        E: 'minecraft:ender_pearl',
        P: 'minecraft:paper'
    })

})

