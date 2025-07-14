
StartupEvents.registry('item', event => {
    event.create('strange_burger')
        .displayName('§eStrange Burger')
        .food(food => {
            food.hunger(20)
            food.saturation(0.5)
            food.effect('minecraft:strength', 150, 0, 2.0)
        })
})
