
const $BlockHitResult = Java.loadClass("net.minecraft.world.phys.BlockHitResult")
const $DirectionalPlaceContext = Java.loadClass("net.minecraft.world.item.context.DirectionalPlaceContext")
//const $BlockPos = Java.loadClass("net.minecraft.core.BlockPos")

const $HexBlocks = Java.loadClass("at.petrak.hexcasting.common.lib.HexBlocks")
const $HexXplat = Java.loadClass("at.petrak.hexcasting.xplat.IXplatAbstractions").INSTANCE
const $BlockConjured = Java.loadClass("at.petrak.hexcasting.common.blocks.BlockConjured")

ItemEvents.rightClicked("kubejs:glimmering_lantern", event => {
    let {player, target, hand, level} = event;
    //console.log("lantern interaction!")
    if(target.block == null || target.block == null) return;
    //console.log(`facing ${target.facing}`)
    let direction = target.facing
    //console.log(`blockpos ${target.block.pos}`)
    let hitPos = target.block.pos

    //console.log(`making pos with: ${hitPos.x}x ${hitPos.y}y ${hitPos.z}z`)
    let pos = new BlockPos(hitPos.x, hitPos.y, hitPos.z).relative(direction)
    //console.log(`at: ${pos}, isReplaceable: ${level.getBlockState(pos).canBeReplaced()}`)
    let placeContext = new $DirectionalPlaceContext(level, pos, direction.getOpposite(), Item.getEmpty(), direction)

    if(level.getBlockState(pos).canBeReplaced()) {
        level.setBlock(pos, $HexBlocks.CONJURED_LIGHT.getStateForPlacement(placeContext), 3)
        //console.log(`conjured light place at ${pos}`)

        if(level.getBlockState(pos).block instanceof $BlockConjured) {
            let pigment = $HexXplat.getPigment(player)
            $BlockConjured.setColor(level, pos, pigment)
            //console.log(`pigment of light set to ${pigment}`)
        }

        player.addItemCooldown("kubejs:glimmering_lantern", 60)
        global.playSoundAt(level, pos, "hexcasting:casting.cast.normal", "blocks", 1.0, 1.0)
        player.swing()
    }
})