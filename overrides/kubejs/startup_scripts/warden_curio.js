
StartupEvents.registry('item', event => {
    event.create('warden_curio')
        .displayName('Boots of The Void Blossom')
        .maxStackSize(1)
        .tag('curios:charm')
        .glow(true)
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    'minecraft:generic.max_health',
                    'warden_health',
                    -0.50,
                    'multiply_total'
                )
        )
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
                })
        )
})
