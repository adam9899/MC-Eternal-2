
StartupEvents.registry('item', event => {
    event.create('warden_curio')
        .displayName('§5Boots of The Void Blossom')
        .maxStackSize(1)
        .tag('curios:charm')
        .glow(true)
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => {
                    const player = slotContext.entity()

                    player.potionEffects.add(
                        'thegreatbelow:warden_effect',
                        40,
                        0,
                        false,
                        false
                    )
                     player.potionEffects.add(
                        'goety:void_touched',
                        40,
                        0,
                        false,
                        false
                    )
                })
        )
})
