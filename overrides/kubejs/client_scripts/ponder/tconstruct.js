
const $CastingBlockEntity = Java.loadClass("slimeknights.tconstruct.smeltery.block.entity.CastingBlockEntity")
const $FaucetBlockEntity = Java.loadClass("slimeknights.tconstruct.smeltery.block.entity.FaucetBlockEntity")
const $HeatingStructureBlockEntity = Java.loadClass("slimeknights.tconstruct.smeltery.block.entity.controller.HeatingStructureBlockEntity")
const $MeltingModuleInventory = Java.loadClass("slimeknights.tconstruct.smeltery.block.entity.module.MeltingModuleInventory")
const $SearedTankBlockEntity = Java.loadClass("slimeknights.tconstruct.smeltery.block.entity.component.TankBlockEntity")
const $ForgeCapabilities = Java.loadClass("net.minecraftforge.common.capabilities.ForgeCapabilities")

Ponder.registry(event => {

    event.create("tconstruct:smeltery_controller")
        .scene(
            "smeltery",
            "The Smeltery and Melting",
            "mce2:smeltery",
            (scene, util) => {

                scene.showBasePlate()
                scene.idle(20)
                //Opening
                scene.text(70, "So, you want to build a Smeltery to Melt things down and Cast them out? Then let's go over the basics.")
                scene.idle(70)

                //Base
                scene.world.showSection([2, 1, 2, 4, 1, 4], Facing.DOWN)
                scene.idle(20)
                scene.text(50, "The Smeltery is composed primarily of different Seared Blocks.", [3.5, 2.5, 3.5])
                scene.idle(60)
                scene.text(50, "First, the Bottom layer of it can be any Rectangular shape, and must be made of any regular Seared block.").attachKeyFrame()
                scene.idle(60)
                scene.text(50, "We'll use a 3x3 base in this example.")
                scene.idle(60)

                //Layer 2
                scene.world.showSection([1, 2, 1, 5, 2, 5], Facing.DOWN)
                scene.idle(20)
                scene.text(40, "Higher layers of the Smeltery can use other Seared blocks.").attachKeyFrame()
                scene.idle(60)
                scene.text(40, "Most importantly, the Smeltery Controller.")
                scene.idle(50)
                scene.text(40, "Every Smeltery requires a Smeltery Controller...", [1.0, 2.5, 3.5])
                scene.idle(50)
                scene.text(40, "...some kind of Seared Tank...", [1.5, 2.5, 2.5])
                scene.idle(50)
                scene.text(40, "...and atleast one Seared Drain to access its contents.", [2.5, 2.5, 1.5])
                scene.idle(60)

                //Melting
                scene.text(40, "As for the Smeltery's main purpose, Melting items down.")
                scene.idle(60)
                scene.text(60, "You can add items to melt either through the Smeltery Controller's interface, physically dropping them inside of it, or feeding them in through a Seared Chute").attachKeyFrame()
                scene.idle(80)
                let copperItem = Item.of("minecraft:raw_copper", 9);
                let copperItemEntity = scene.world.createItemEntity([3.5, 5, 3.5], [0, 0, 0], copperItem)
                scene.idle(15)
                scene.world.modifyEntity(copperItemEntity, entity => {
                    entity.kill()
                    //console.log("Death of "+ entity)
                })
                scene.world.modifyBlockEntity([1, 2, 3], $HeatingStructureBlockEntity, smelter => {
                    smelter.getCapability($ForgeCapabilities.ITEM_HANDLER).ifPresent(cap => {
                        //console.log(copperItem, copperItem.count)
                        for (let i = 0; i < copperItem.count; i++) {
                            let stack = Item.of(copperItem.id)
                            console.log(stack, i)
                            cap.insertItem(i, stack, false)
                        }
                    })
                })
                scene.idle(40)

                //Fuel explanation
                scene.text(60, "...Oh yeah, it'll also need some kind of Fuel to heat up the contents.").attachKeyFrame()
                scene.idle(80)
                scene.text(40, "Lava is your first available Fuel for it.")
                scene.idle(60)
                scene.showControls(40, [1.5, 2.5, 2.5], "left").rightClick().withItem("minecraft:lava_bucket")
                scene.idle(20)
                scene.world.modifyBlockEntity([1, 2, 2], $SearedTankBlockEntity, tank => {
                    tank.getCapability($ForgeCapabilities.FLUID_HANDLER).ifPresent(cap => {
                        cap.fill(Fluid.of("minecraft:lava", 1000), "execute")
                    })
                })

                //Melting action
                scene.idle(80)
                scene.world.modifyBlockEntity([1, 2, 3], $HeatingStructureBlockEntity, smelter => {
                    smelter.getCapability($ForgeCapabilities.ITEM_HANDLER).ifPresent(cap => {
                        if(cap instanceof $MeltingModuleInventory) {
                            for (let iterations = 0; iterations < 2; iterations++)
                                for (let i = 0; i < cap.getSlots(); i++) {
                                    cap.getModule(i).heatItem(1000, 1000)
                                }
                        }
                    })
                })
                scene.idle(40)
                scene.text(40, "Presto, Molten Copper!", [3.5, 2.5, 3.5])
                scene.idle(60)


                //Layer 3 & about more layers
                scene.text(40, "The Smeltery's height can also be increased by adding more Layers.").attachKeyFrame()
                scene.idle(60)
                scene.world.showSection([1, 3, 1, 5, 3, 5], Facing.DOWN)
                scene.idle(20)
                scene.text(60, "This will increase its Capacity for Fluids and Items, but cause it to consume Fuel faster.")
                scene.idle(80)
                
        })
        .scene(
            "casting",
            "Casting from The Smeltery",
            "mce2:smeltery",
            (scene, util) => {

                //Setup
                scene.showBasePlate()
                scene.world.showSection([1, 1, 1, 5, 3, 5], Facing.DOWN)
                scene.world.modifyBlockEntity([1, 2, 2], $SearedTankBlockEntity, tank => {
                    tank.getCapability($ForgeCapabilities.FLUID_HANDLER).ifPresent(cap => {
                        cap.fill(Fluid.of("minecraft:lava", 1000), "execute")
                    })
                })
                scene.world.modifyBlockEntityNBT([1, 2, 3], nbt => {
                    nbt.tank.fluids.add(0, {
                        Amount: 540,
                        FluidName: "tconstruct:molten_copper"
                    })
                })
                //Opening
                scene.idle(20)

                //Drain and Faucet explanation
                scene.text(40, "A Seared Drain is where the Fluids inside of the Smeltery can be interfaced with.", [2.5, 2.5, 1.2]).attachKeyFrame()
                scene.idle(60)
                scene.world.showSection([2, 2, 0, 4, 2, 0], Facing.DOWN)
                scene.text(40, "The most common way to extract them is a Seared Faucet.", [2.5, 2.5, 1])
                scene.idle(60)
                scene.text(40, "Seared Faucets can pour Fluids from the Smeltery into things placed beneath them.")
                scene.idle(50)

                //Casting explanation
                scene.text(40, "Most Importantly, Casting Tables and Basins.").attachKeyFrame()
                scene.idle(60)
                scene.world.showSection([2, 1, 0, 4, 1, 0], Facing.SOUTH)
                scene.idle(40)
                scene.text(40, "Casting Tables are most often used to cast Ingots and Tool Parts from Molten Metals in the Smeltery.", [2.5, 1.5, 0.5])
                scene.idle(60)
                scene.text(40, "While Casting Basins are often used to cast Blocks from Metals in the Smeltery.", [4.5, 1.5, 0.5])
                scene.idle(60)
                scene.text(40, "Casting Tables often require a Cast for Molten fluids to Cool in.").attachKeyFrame()
                scene.idle(60)
                scene.showControls(40, [2.5, 2, 0.5], "down").rightClick().withItem("tconstruct:ingot_cast")
                scene.idle(20)
                scene.world.modifyBlockEntityNBT([2, 1, 0], nbt => {
                    nbt.Items = [{
                        Count: 1,
                        Slot: 0,
                        id: "tconstruct:ingot_cast"
                    }]
                })
                scene.idle(40)

                //Pouring and Casting demonstration @ Table
                let tablePos = [2, 1, 0]
                scene.text(40, "To Pour Fluids out of a Seared Faucet, simply Interact with it").attachKeyFrame()
                scene.idle(60)
                scene.showControls(20, [2.5, 2.5, 0.5], "down").rightClick()
                scene.idle(30)
                scene.world.modifyBlockEntityNBT([2, 2, 0], nbt => {
                    nbt.state = true
                    nbt.render_fluid = {
                        Amount: 90,
                        FluidName: "tconstruct:molten_copper"
                    }
                })
                scene.world.modifyBlockEntityNBT(tablePos, nbt => {
                        nbt.tank = {
                            capacity: 90,
                            filter: "tconstruct:molten_copper",
                            fluid: {
                                FluidName: "tconstruct:molten_copper",
                                Amount: 10
                            }
                        }
                })
                scene.idle(2)
                for (let fill = 0; fill < 8; fill++) {
                    scene.world.modifyBlockEntityNBT(tablePos, nbt => nbt.tank.fluid.Amount += 10)
                    scene.idle(2)
                }
    
                scene.world.modifyBlockEntityNBT([2, 2, 0], nbt => nbt.state = false)
                scene.idle(5)
                scene.world.modifyBlockEntityNBT(tablePos, nbt => {
                    nbt.recipe = "tconstruct:smeltery/casting/metal/copper/ingot_gold_cast"
                })
                scene.idle(50)
                scene.world.modifyBlockEntity(tablePos, $CastingBlockEntity, casting => {
                    casting.reset()
                    casting.setItem(1, Item.of("minecraft:copper_ingot"))
                })
                scene.idle(20)

                //Automatic Pouring and Casting demonstration @ Basin
                let basinPos = [4, 1, 0]
                scene.text(40, "Casting can also be automated from Faucets using Redstone.").attachKeyFrame()
                scene.idle(60)
                scene.world.setBlock([4, 3, 0], "minecraft:lever", false)
                scene.world.showSection([4, 3, 0], Facing.SOUTH)
                scene.text(40, "Applying a Redstone Signal to a Faucet will cause it to begin casting.", [4.5, 3.5, 0.8])
                scene.idle(60)
                scene.world.toggleRedstonePower([4, 3, 0])
                scene.idle(5)
                scene.world.modifyBlockEntityNBT([4, 2, 0], nbt => {
                    nbt.state = true
                    nbt.render_fluid = {
                        Amount: 90,
                        FluidName: "tconstruct:molten_copper"
                    }
                })
                scene.text(80, "This sequence has been accelerated for your viewing pleasure.")
                scene.idle(5)
                for (let i = 0; i < 54; i++) {
                    scene.world.modifyBlockEntity(basinPos, $CastingBlockEntity, basin => {
                        basin.getCapability($ForgeCapabilities.FLUID_HANDLER).ifPresent(cap => {
                            cap.fill(Fluid.of("tconstruct:molten_copper", 20), "execute")
                        })
                    })
                    scene.idle(1)
                }
                scene.world.modifyBlockEntityNBT([4, 2, 0], nbt => {
                    nbt.state = false
                })
                scene.idle(50)
                scene.world.modifyBlockEntity(basinPos, $CastingBlockEntity, basin => {
                    basin.reset()
                    basin.setItem(0, Item.of("minecraft:copper_block"))
                })
                scene.idle(20)
                scene.world.modifyBlockEntity(basinPos, $CastingBlockEntity, basin => {
                    basin.removeItem(0, 1)
                })
                scene.idle(10)
                scene.world.modifyBlockEntityNBT([4, 2, 0], nbt => nbt.state = true)
                scene.idle(5)
                scene.text(60, "As long as Redstone is still applied when the Casted Item is removed, the Faucet will continue Casting.", [4.5, 2.5, 0.5]).attachKeyFrame()
                for (let i = 0; i < 54; i++) {
                    scene.world.modifyBlockEntity(basinPos, $CastingBlockEntity, basin => {
                        basin.getCapability($ForgeCapabilities.FLUID_HANDLER).ifPresent(cap => {
                            cap.fill(Fluid.of("tconstruct:molten_copper", 20), "execute")
                        })
                    })
                    scene.idle(1)
                }
                scene.world.modifyBlockEntityNBT([4, 2, 0], nbt => nbt.state = false)
                scene.idle(20)
                scene.markAsFinished()
                scene.idle(130)
                scene.world.modifyBlockEntity(basinPos, $CastingBlockEntity, basin => {
                    basin.reset()
                    basin.setItem(0, Item.of("minecraft:copper_block"))
                })
        })
})