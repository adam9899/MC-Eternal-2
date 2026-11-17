
StartupEvents.registry('item', event => {
    event.create('plate_curio')
        .displayName('§ePlate of a Thousand Metals')
        .maxStackSize(1)
        .tag('curios:charm')
        .glow(true)
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    'minecraft:generic.armor',
                    'plate_armor',
                    0.30,
                    'multiply_base'
                )
                 .addAttribute(
                    'minecraft:generic.armor_toughness',
                    'plate_toughness',
                    20,
                    'multiply_base'
                )
        )
})
