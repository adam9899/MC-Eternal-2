// credit to JakTac on the latvian.dev discord server, this is entirely their work.
const $EyeofEnder = Java.loadClass('net.minecraft.world.entity.projectile.EyeOfEnder')
const $Registry = Java.loadClass('net.minecraft.core.registries.Registries')
const $TagKey = Java.loadClass('net.minecraft.tags.TagKey')

StartupEvents.registry('entity_type', event => {
  let ItemEntity = Java.loadClass("net.minecraft.world.entity.item.ItemEntity")

  //Wither Heart
  event.create('mobdrop_endermanheart_beating', "minecraft:eye_of_ender")
    .disableTrailParticles()
    //.displayName(Text.translate("item.kubejs.mobdrop_endermanheart_beating"))
    .disableDefaultDeathLogic()
    .tick(entity => {
      if (entity.level.isClientSide) {
        entity.level.addParticle('irons_spellbooks:fire', true, entity.x, entity.y, entity.z, 0, 0, 0)
      }
    })
    .onRemovedFromWorld(entity => {
      entity.level.playSound(null, entity.x, entity.y, entity.z, 'minecraft:entity.wither.spawn', entity.getSoundSource(), 1.0, 0.8)
      
      let glowingEye = new ItemEntity(entity.level, entity.x, entity.y, entity.z, 'kubejs:mobdrop_endermanheart_beating')
      glowingEye.setGlowing(true) 
      entity.level.addFreshEntity(glowingEye)
    })
    .setSurvivalChance(0)
    .renderOffset(0, 0, 0)
    .renderScale(0.5, 0.5, 0.5)
    .item(item => {
      item.signalTo(context => {
        const { level, player, hand } = context
        let structureTag = $TagKey.create($Registry.STRUCTURE, 'kubejs:structure_locator_nether')
        let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
        if (foundPos) {
          if (!player.abilities.instabuild) {
            player.getHeldItem(hand).count--
          }
          if (player.level.dimension == "minecraft:the_nether") {
            player.swing()
          }
          level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
          return foundPos
        }
      })
      item.fireResistant(true)
    })
    .getItem(entity => {
      return Item.of('kubejs:mobdrop_endermanheart_beating')
    })

  //Mysterious Object
  event.create('artifact_beating_heart', "minecraft:eye_of_ender")
    .disableTrailParticles()
    //.displayName(Text.translate("item.kubejs.artifact_beating_heart"))
    .disableDefaultDeathLogic()
    .tick(entity => {
      if (entity.level.isClientSide) {
        entity.level.addParticle('minecraft:soul_fire_flame', true, entity.x, entity.y, entity.z, 0, 0, 0)
      }
    })
    .onRemovedFromWorld(entity => {
      entity.level.playSound(null, entity.x, entity.y, entity.z, 'entity.warden.heartbeat', entity.getSoundSource(), 5.0, 0.8)
      entity.level.playSound(null, entity.x, entity.y, entity.z, 'entity.warden.heartbeat', entity.getSoundSource(), 4.0, 0.5)

      let glowingEye = new ItemEntity(entity.level, entity.x, entity.y, entity.z, 'kubejs:artifact_beating_heart')
      glowingEye.setGlowing(true) 
      entity.level.addFreshEntity(glowingEye)
    })
    .setSurvivalChance(0)
    .renderOffset(0, 0, 0)
    .renderScale(0.5, 0.5, 0.5)
    .item(item => {
      item.signalTo(context => {
        const { level, player, hand } = context
        let structureTag = $TagKey.create($Registry.STRUCTURE, 'kubejs:structure_locator')
        let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
        if (foundPos) {
          if (!player.abilities.instabuild) {
            player.getHeldItem(hand).count--
          }
          if (player.level.dimension == "minecraft:overworld") {
            player.swing()
          }
          level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
          return foundPos
        }
      })
      item.fireResistant(true)
    })
    .getItem(entity => {
      return Item.of('kubejs:artifact_beating_heart')
    })
})
