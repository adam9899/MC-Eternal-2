

Ponder.registry(event => {


    event.create([
        "vampirism:bloody_dark_stone_bricks",
        "vampirism:blood_bottle",
        "vampirism:vampire_blood_bottle"
        ])
        .scene(
            "vampire_portal",
            "Portal to The Vampire Forest",
            "mce2:vampire_portal",
            (scene, util) => {

                scene.showBasePlate()
                scene.idle(20)

                scene.text(50, "Looking for a Vampire Forest? It's contained solely within a custom Dimension in MC Eternal 2.")
                scene.idle(70)
                scene.text(40, "Here's how to reach it.")
                scene.idle(50)

                scene.text(40, "First, create a ring of Deepslate Bricks.").attachKeyFrame()
                scene.idle(20)
                scene.world.showSection([1, 1, 1, 5, 1, 5], Facing.DOWN)
                scene.idle(30)

                scene.text(40, "Then, use either a full Blood Bottle or Vampire Blood on each brick.").attachKeyFrame()
                scene.idle(50)

                scene.showControls(40, [1, 2, 3], "down").withItem(Item.of("vampirism:blood_bottle", {Damage:9})).rightClick()
                scene.showControls(40, [3, 2, 1], "down").withItem("vampirism:vampire_blood_bottle").rightClick()
                scene.idle(30)
                scene.world.setBlock([1, 1, 3], "vampirism:bloody_dark_stone_bricks", true)
                scene.world.setBlock([3, 1, 1], "vampirism:bloody_dark_stone_bricks", true)
                scene.idle(40)
                

                let brickPos = [
                    {x: 2, z: 1},
                    {x: 1, z: 2},
                    {x: 4, z: 2},
                    {x: 2, z: 4},
                    {x: 4, z: 3},
                    {x: 3, z: 4}
                ]

                brickPos.forEach(pos => {
                    scene.world.setBlock([pos.x, 1, pos.z], "vampirism:bloody_dark_stone_bricks", true)
                    scene.idle(5)
                })
                scene.idle(20)

                scene.text(40, "Then, just click anywhere inside the frame with Vampire Blood!").attachKeyFrame()
                scene.idle(50)

                scene.showControls(40, [2, 3, 2], "down").withItem("vampirism:vampire_blood_bottle").rightClick()
                scene.idle(30)
                for (let x = 2; x <= 3; x++)
                    for (let z = 2; z <= 3; z++)
                        scene.world.setBlock([x, 1, z], Block.id("cpapireforged:custom_portal_block").with("axis", "y"), false)

                scene.idle(20)
        })
})