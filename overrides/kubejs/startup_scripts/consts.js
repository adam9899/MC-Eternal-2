//priority: 10

Platform.setModName("mce2", "MC Eternal 2")


global.playSoundNear = (player, sourceEntity, sound, sourceType, volume, pitch) => {
    //player.level['playSound(net.minecraft.world.entity.player.Player,net.minecraft.core.BlockPos,net.minecraft.sounds.SoundEvent,net.minecraft.sounds.SoundSource,float,float)']
    player.level.playSound(sourceEntity, player.x, player.y, player.z, sound, sourceType, volume, pitch)
}