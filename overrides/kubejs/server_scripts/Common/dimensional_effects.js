const $MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance")
const $HashMap = Java.loadClass("java.util.HashMap")

const dimEffectUpdateDelay = 20;
const dimEffects = new $HashMap()
//const playerDimensionMemory = new $HashMap()

let dimEffectTickCounter = 0;

const addDimensionalEffect = (dim, effect, amp, duration, visible, condition) => {
    let effectObj = {id: effect, amp: amp, duration: duration, visible: visible}

    if(condition)
        effectObj.condition = condition;
    else effectObj.condition = () => true;

    dimEffects[dim] 
        ? dimEffects.get(dim).push(effectObj)
        : dimEffects.put(dim, [effectObj]);
}
//great below
addDimensionalEffect("thegreatbelow:thegreatbelow", "xaerominimap:no_waypoints", 0, 225, false)
addDimensionalEffect("thegreatbelow:thegreatbelow", "xaerominimap:no_minimap", 0, 225, false)
addDimensionalEffect("thegreatbelow:thegreatbelow", "xaeroworldmap:no_world_map", 0, 225, false)

//dwarven depths
addDimensionalEffect("mce:dwarven_depths", "goety:burn_hex", 0, 225, false)

addDimensionalEffect(
    "mce:dwarven_depths",
    "goety:nyctophobia",
    3,
    40,
    false,
    player =>
        player.mainHandItem.id != "ars_additions:golden_lantern" &&
        player.offHandItem.id != "ars_additions:golden_lantern"
)

addDimensionalEffect(
    "mce:dwarven_depths",
    "minecraft:darkness",
    0,
    80,
    false,
    player =>
        player.mainHandItem.id != "ars_additions:golden_lantern" &&
        player.offHandItem.id != "ars_additions:golden_lantern"
)

ServerEvents.tick(event => {
    //console.log(dimEffectTickCounter, dimEffectUpdateDelay)
    dimEffectTickCounter++
    if(dimEffectTickCounter < dimEffectUpdateDelay)
        return;
    dimEffectTickCounter = 0;

    dimEffects.forEach((dimId, effects) => {
        let level = event.server.getLevel(dimId)
        level.getPlayers(() => true).forEach(player => {
            let playerEffects = player.getActiveEffectsMap();

            effects.forEach(effect => {
                if(!effect.condition(player)
                    || (playerEffects.containsKey(effect.id) && playerEffects.get(effect.id).getAmplifier() < effect.level))
                    return;
                    
                player.addEffect(new $MobEffectInstance(effect.id, effect.duration, effect.amp, false, effect.visible))
            })
        })
    });
})
