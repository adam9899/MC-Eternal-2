
StartupEvents.registry('item', event => {
    event.create('manyullyn_bullet')
        .displayName('Manyullyn Bullet')
        .maxStackSize(1)
        .tag('curios:charm')
        .glow(true)
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    'irons_artifice:damage',
                    'manyullyn_bullet',
                    0.80,
                    'multiply_base'
                )
                 .addAttribute(
                    'irons_artifice:piercing',
                    'bullet_piercing',
                    50,
                    'addition'
                )
        )
})
