BlockEvents.broken(event => {
  if (event.block.id.startsWith('kubejs:reactor_tnt')) {
    const {player: player, level: world, block: block} = event

    if (player) {
      player.potionEffects.add('minecraft:nausea', 200, 0)
      player.potionEffects.add('minecraft:slowness', 200, 5)
      player.potionEffects.add('alexscaves:irradiated', 600, 0)
      player.potionEffects.add('alexsmobs:earthquake', 200, 0)
      player.tell(Text.translate("message.mce2.reactor_tnt_broken"))
    }

    const {x, y, z} = block.pos

    world.runCommandSilent(`summon minecraft:tnt ${x + 0.5} ${y} ${z + 0.5} {Fuse:40}`)
    world.runCommandSilent(`summon minecraft:tnt ${x + 0.2} ${y} ${z + 0.8} {Fuse:40}`)

  }
})