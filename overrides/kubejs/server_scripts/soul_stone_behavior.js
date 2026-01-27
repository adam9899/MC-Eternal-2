ItemEvents.rightClicked(event => {
    const { item, player, server, level } = event;
    if (!server || item.id !== 'kubejs:artifact_endergem') return;

    const {username: name} = player;

    player.getCooldowns().addCooldown('kubejs:artifact_endergem', 12000);

    player.tell(Text.translate("message.mce2.soul_stone_peer").italic().color("dark_gray"));
    global.playSoundNear(player, null, "thegreatbelow:beacon_power_up", "players", 1.0, 1.0);
    server.runCommand(`execute at ${name} run particle minecraft:soul ~ ~ ~`);


 player.potionEffects.add('thegreatbelow:soul_vision', 150, 0);    
 player.potionEffects.add('minecraft:darkness', 160, 0);    
    
    
});
