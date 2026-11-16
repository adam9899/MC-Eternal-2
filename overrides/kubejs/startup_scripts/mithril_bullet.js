
StartupEvents.registry('item', event => {
    event.create('mithril_bullet')
        .displayName('Mithril Bullet')
        .maxStackSize(1)
        .tag('curios:charm')
        .glow(true)
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    'irons_artifice:damage',
                    'mithril_bullet',
                    0.80,
                    'multiply_base'
                )
                 .addAttribute(
                    'irons_artifice:bullet_speed',
                    'bullet_speed',
                    10,
                    'addition'
                )
        )
})
