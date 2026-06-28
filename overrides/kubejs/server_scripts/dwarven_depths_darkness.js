PlayerEvents.tick(event => {
    if (event.player.level.dimension != "mce:dwarven_depths") return
 if ((event.player.persistentData.nvWarnCooldown || 0) > 0)
        event.player.persistentData.nvWarnCooldown--

    if (event.player.hasEffect("minecraft:night_vision")) {
        if ((event.player.persistentData.nvWarnCooldown || 0) <= 0) {
            event.player.tell("§3The ancient dwarven magic has shrouded your sight... Nightvision will not work here.")
            event.player.persistentData.nvWarnCooldown = 500 
        }

        event.player.removeEffect("minecraft:night_vision")
    }
            const hasLantern =
        event.player.mainHandItem.id == "ars_additions:golden_lantern" ||
        event.player.offHandItem.id == "ars_additions:golden_lantern"

    if (!hasLantern) {
        if (!event.player.persistentData.darkwarned) {
            event.player.tell("§7It is incomprehensibly dark.. You can just about see strange shadowy figures in the distance.. §oPerhaps I should equip a §6Golden Lantern")
            event.player.persistentData.darkwarned = true
        }
    } else {
        event.player.persistentData.darkwarned = false
    }
})