
const bodyGuardItemMap = {
    'kubejs:scorched_letter': [{ id: 'goety_spillage:zombie_absorber', weight: 1 }],
    "kubejs:mossy_letter": [{ id: 'goety_cataclysm:coralssus', weight: 1 }],
    "kubejs:elegant_letter": [{ id: 'goety_cataclysm:kobolediator', weight: 1 }],
    "kubejs:scorched_letter1": [
        { id: 'goety_cataclysm:the_prowler', weight: 20 },
        { id: 'goety_cataclysm:watcher_servant', weight: 80 }
    ],
    "kubejs:mossy_letter1": [{ id: 'goety:bear_servant', weight: 1 }]
}


ItemEvents.rightClicked(event => {
    const { item, player, server } = event;
    if (!server || !bodyGuardItemMap[item.id]) return;

    const {username, potionEffects} = player;

    
    player.getCooldowns().addCooldown(item, 500); //9500


    player.tell(Text.translate("message.mce2.bodyguard_arrived").italic().color("dark_green"));
    global.playSoundNear(player, null, "minecraft:entity.wither.spawn", "players", 1.0, 0.5);
    server.runCommandSilent(`execute at ${username} run particle create:soul ~ ~ ~`);


    potionEffects.add('minecraft:glowing', 1200, 0);


    const weightedEntities = bodyGuardItemMap[item.id];


    const totalWeight = weightedEntities.reduce((sum, entity) => sum + entity.weight, 0);
    let rand = Math.random() * totalWeight;
    let selectedEntity = null;

    for (const entity of weightedEntities) {
        rand -= entity.weight;
        if (rand <= 0) {
            selectedEntity = entity.id;
            break;
        }
    }

    if (selectedEntity) {
        let entityTag = `temp_${username}_${Date.now()}`;

       
        server.runCommandSilent(`execute at ${username} run summon ${selectedEntity} ~ ~5 ~5 {DeathLootTable:"minecraft:empty"}`);

        server.scheduleInTicks(1, () => {
        server.runCommandSilent(`execute at ${username} run tag @e[type=${selectedEntity},distance=..50,limit=1,sort=nearest] add ${entityTag}`);
        });

        server.scheduleInTicks(2000, () => {
            server.runCommandSilent(`execute as @e[tag=${entityTag}] at @s run particle minecraft:squid_ink ~ ~1 ~ 0.5 1 0.5 0.01 100 force`);
            server.runCommandSilent(`kill @e[tag=${entityTag}]`);
        });
    }
    
});
