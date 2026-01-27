ItemEvents.rightClicked(event => {
    const { item, player, server } = event;
    if (!server || item.id !== 'kubejs:nether_item') return;

    const name = player.username;

    
    player.getCooldowns().addCooldown('kubejs:nether_item', 3500);


    server.runCommand(`tellraw ${name} {"text":"You ponder the orb and see a vision of the distant past... An unspeakable eternal army unlike anything you've ever seen... Endless torment.. This is oblivion.. ","italic":true,"color":"dark_gray"}`);
    server.runCommand(`execute at ${name} run playsound minecraft:entity.wither.spawn ambient ${name}`);
    server.runCommand(`execute at ${name} run particle create:soul ~ ~ ~`);


    player.potionEffects.add('netherexp:betrayed', 600, 0);


    const weightedEntities = [
        { id: 'goety_cataclysm:netherite_monstrosity', weight: 1 },
        { id: 'goety_cataclysm:ignited_berserker', weight: 80 },
        { id: 'goety_cataclysm:ignited_revenant', weight: 80 },
        { id: 'goety_cataclysm:aptrgangr', weight: 80 },
        { id: 'goety_cataclysm:royal_draugr_servant', weight: 100 },
        { id: 'goety:wither_necromancer_servant', weight: 40 },
        { id: 'goety_cataclysm:elite_draugr_servant', weight: 100 }
    ];


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
        let entityTag = `temp_${player.username}_${Date.now()}`;

       
        server.runCommand(`execute at ${name} run summon ${selectedEntity} ~ ~1 ~5 {DeathLootTable:"minecraft:empty"}`);
server.scheduleInTicks(1, () => {
  server.runCommand(`execute at ${name} run tag @e[type=${selectedEntity},distance=..50,limit=1,sort=nearest] add ${entityTag}`);
});


        server.scheduleInTicks(600, () => {
            server.runCommand(`execute as @e[tag=${entityTag}] at @s run particle minecraft:soul_fire_flame ~ ~1 ~ 0.5 1 0.5 0.01 100 force`);
            server.runCommand(`kill @e[tag=${entityTag}]`);
        });
    }
    
});
