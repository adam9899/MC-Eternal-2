StartupEvents.registry("block", (event) => {
    event.create("ancient_portal_stone") 
        .material("stone") 
        .hardness(55.0) 
        .unbreakable()
        .resistance(50.0) // Set resistance (to explosions, etc)
        .requiresTool(true) // Requires a tool or it won't drop (see tags below)


    event.create('reactor_tnt', 'basic') // <- must be 'machine' to use a block entity
        .material('explosive')
        .hardness(0.0)
        .requiresTool(false)
        .renderType('solid')
        .rightClick(event => {
            const {level: level, player: player, level: world, block: block, hand: hand} = event
            //console.log(level.isClientSide(), hand !== "main_hand", !player.getItemInHand(hand).isEmpty())
            if (level.isClientSide() || hand !== 'main_hand' || !player.getItemInHand(hand).isEmpty()) return

                
            player.tell(Text.translate("message.mce2.reactor_tnt_touch"))

                
            player.potionEffects.add('minecraft:nausea', 200, 0)
            player.potionEffects.add('alexscaves:irradiated', 200, 0)

                
            world.playSound(null, block.pos, 'minecraft:block.beacon.activate', 'block', 1.0, 1.0)

            event.cancel()
        })


    event.create('ultimate_cheese')
        .material('organic_product')
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(false)
        .soundType('honey_block')
        .renderType('solid')
        .rightClick(event => {
            const { player, block, level, hand } = event
            if (level.isClientSide()) return
            //if (block.id != 'kubejs:ultimate_cheese') return

            
            if (hand.name() !== 'MAIN_HAND') return

            const cooldownKey = 'cheese_last_use'
            const now = level.server.overworld().time
            const lastUsed = player.persistentData[cooldownKey] || 0
            const cooldownTicks = 3600
            const remaining = cooldownTicks - (now - lastUsed)

            if (remaining > 0) {
                player.tell(Text.translate("message.mce2.ultimate_cheese_cooldown", Math.ceil(remaining / 20)).red())
                return
            }

            player.persistentData[cooldownKey] = now

            player.potionEffects.add("minecraft:saturation", 5, 3, false, true)
            player.potionEffects.add("minecraft:regeneration", 5, 3, false, true)
            player.potionEffects.add("rats:synesthesia", 5, 0, false, true)

            player.tell(Text.translate("message.mce2.ultimate_cheese_used"))
        })
})