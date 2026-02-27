// priority: 100

const $EnderTeleportEvent = Java.loadClass('net.minecraftforge.event.entity.EntityTeleportEvent$EnderEntity')

ForgeEvents.onEvent($EnderTeleportEvent, event => {
    global.handleJoltBlazeTeleport(event)
})

/**
 * Handles JoltBlaze teleportation to lightning rods if one is found within defined box
 * @param {Internal.EntityTeleportEvent} event 
 */
global.handleJoltBlazeTeleport = event => {
    let entity = event.getEntity()

    if (entity.getType().toString() === 'specialmobs:joltblaze') {
        
        // defines how many blocks in each direction to search for lightning rods, not actual radius
        let searchRadius = 16 

        let pos = entity.blockPosition()
        let world = entity.level

        let lightningRods = []

        // Define the search area
        let pos1 = pos.offset(-searchRadius, -searchRadius, -searchRadius)
        let pos2 = pos.offset(searchRadius, searchRadius, searchRadius)

        for (let checkPos of BlockPos.betweenClosed(pos1, pos2)) {
            if (world.getBlock(checkPos).id === "minecraft:lightning_rod") {
                let rodPos = {
                    x: checkPos.x,
                    y: checkPos.y,
                    z: checkPos.z
                }
                lightningRods.push(rodPos)
            }
        }

        if (lightningRods.length > 0) {
            
            // Select a random lightning rod position
            let randomIndex = Math.floor(Math.random() * lightningRods.length)
            let targetPos = lightningRods[randomIndex]
            
            event.setTargetX(targetPos.x + 0.5)
            event.setTargetY(targetPos.y + 1)
            event.setTargetZ(targetPos.z + 0.5)
        }
    }
}