PlayerEvents.tick(event => {
    let {player} = event
    
    if (player.level.dimension != "mce:dwarven_depths" 
        || (player.isCreative() || player.isSpectator()))
            return;

    if ((player.persistentData.nvWarnCooldown || 0) > 0)
        player.persistentData.nvWarnCooldown--

    if (player.hasEffect("minecraft:night_vision")) {
        if ((player.persistentData.nvWarnCooldown || 0) <= 0) {
            player.tell("§3The ancient dwarven magic has shrouded your sight... Nightvision will not work here.")
            player.persistentData.nvWarnCooldown = 500 
        }

        player.removeEffect("minecraft:night_vision")
    }
    const hasLantern =
        player.mainHandItem.id == "ars_additions:golden_lantern" ||
        player.offHandItem.id == "ars_additions:golden_lantern"

    if (!hasLantern) {
        if (!player.persistentData.darkwarned) {
            player.tell("§7It is incomprehensibly dark.. You can just about see strange shadowy figures in the distance.. §oPerhaps I should equip a §6Golden Lantern")
            player.persistentData.darkwarned = true
        }
    } else {
        player.persistentData.darkwarned = false
    }
})