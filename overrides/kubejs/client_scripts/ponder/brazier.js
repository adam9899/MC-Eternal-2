Ponder.registry(event => {

    event.create("brazier:brazier")
        .scene(
            "brazier",
            "Spawn-Busting With The Brazier",
            "mce2:brazier",
            (scene, util) => {

                scene.showBasePlate()
                scene.idle(20)
                //Opening
                scene.text(70, "The Brazier is a Multiblock structure used to prevent monsters from spawning in a large radius around it.")
                scene.idle(90)
                scene.text(70, "Let's start by going over how to build its structure.")
                scene.idle(90)
                scene.world.showSection([1, 1, 1, 5, 1, 5], Facing.DOWN)

                //Base and Stripe
                scene.text(50, "The Brazier has two categories of Blocks that are used for its structure.").attachKeyFrame()
                scene.idle(60)
                scene.text(70, "The \"Stripe\" Blocks, which can be Ancient Debris or Netherite Blocks...", [4.5, 1, 4.5])
                scene.idle(80)
                scene.text(70, "... and the \"Base\" Blocks, which can be Gilded Blackstone or Crying Obsidian", [2.5, 1.5, 1.5])
                scene.idle(80)
                scene.text(50, "The Stripes go in Cardinal directions from the center, as seen.")
                scene.idle(60)
                scene.text(50, "While the Bases cover everything else, except the corners, those are ignored.")
                scene.idle(70)

                scene.rotateCameraY(-90)
                scene.idle(20)
                scene.world.setBlock([3, 2, 3], "brazier:brazier", false)
                scene.world.destroyBlock([3, 3, 3])
                scene.world.showSection([3, 2, 3], Facing.DOWN)
                scene.idle(40)
                scene.idle(40)
                scene.text(60, "Once the Brazier lights, that means it's active!")
                scene.idle(80)
                scene.text(40, "... But it'll have a pretty limited range like this...").attachKeyFrame()
                scene.idle(60)
                scene.text(60, "So let's make it taller to increase that!")
                scene.idle(80)
                
                scene.world.setBlock([3, 2, 3], "minecraft:netherite_block", true)
                scene.world.showSection([1, 2, 1, 5, 2, 5], Facing.DOWN)
                scene.idle(40)
                scene.world.setBlock([3, 3, 3], "brazier:brazier", false)
                scene.world.showSection([3, 3, 3], Facing.DOWN)
                scene.idle(40)
                scene.idle(40)
                scene.text(40, "Now it'll stop spawns in a larger radius!")
                scene.idle(50)
                scene.text(40, "To be exact, it'll get a circular radius increase of 10 Blocks per layer.")
                scene.idle(60)
                scene.text(60, "And the limit for its height is 10 Layers, which is a whopping 100 Block radius!")
                scene.idle(60)
        })
})