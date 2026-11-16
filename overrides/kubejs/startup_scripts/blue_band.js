StartupEvents.registry('item', event => {
    event.create('blue_band')
        .displayName('§bArmband of Eternal Night')
        .maxStackSize(1)
        .glow(true)
        .tag('curios:bracelet')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => {
                    const player = slotContext.entity()

                    if (player.level.isNight()) {
                        player.potionEffects.add(
                            'minecraft:night_vision',
                            40,
                            0,
                            false,
                            false
                        )

                        player.potionEffects.add(
                            'cofh_core:magic_resistance',
                            40,
                            0,
                            false,
                            false
                        )
                    }
                })
        )
})