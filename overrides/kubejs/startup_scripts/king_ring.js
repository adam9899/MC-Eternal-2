ItemEvents.modification(event => {
    event.modify('kubejs:king_ring', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => {
                    const player = slotContext.entity()

                    player.potionEffects.add(
                        'royalvariations:royal_blessing',
                        40,
                        1,
                        false,
                        false
                    )
                })
        )
    })
})
