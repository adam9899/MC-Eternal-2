
ServerEvents.recipes(event => {

    arsEnchanting(event, Item.of('ars_additions:warp_index'),
        Item.of("ars_nouveau:mundane_belt"), [
            Item.of("ars_nouveau:enchanters_eye"),
            Item.of("ars_nouveau:scryers_crystal"),
            Item.of("ars_nouveau:starbuncle_charm"),
            Item.of("ars_nouveau:bookwyrm_charm"),
            Item.of("minecraft:nether_star")
    ], 1000).id("ars_additions:apparatus/warp_index")

    arsEnchanting(event, Item.of("ars_additions:stabilized_warp_index"),
        Item.of("ars_additions:warp_index"), [
            Item.of("waystones:warp_stone"),
            Item.of("minecraft:echo_shard"),
            Item.of("minecraft:ender_chest")
    ], 1000, true).id("ars_additions:apparatus/stabilized_warp_index")

    event.custom({
    type: "create:mixing",
    ingredients: [
      { item: "ars_nouveau:experience_gem" }
    ],
    results: [
      { fluid: "enderio:xp_juice", amount: 60 }
    ],
    processingTime: 60 
  })
  event.custom({
    type: "create:mixing",
    ingredients: [
      { item: "ars_nouveau:greater_experience_gem" }
    ],
    results: [
      { fluid: "enderio:xp_juice", amount: 240 }
    ],
    processingTime: 120 
  })
   event.custom({
    type: "thermal:centrifuge",
    ingredient: {
      item: "ars_nouveau:experience_gem"
    },
    result: [
      { fluid: "enderio:xp_juice", amount: 60 }
    ],
    energy: 4000
  })
   event.custom({
    type: "thermal:centrifuge",
    ingredient: {
      item: "ars_nouveau:greater_experience_gem"
    },
    result: [
      { fluid: "enderio:xp_juice", amount: 240 }
    ],
    energy: 4000
  })
     event.recipes.create.mixing(Fluid.of("enderio:xp_juice", 60), Item.of("ars_nouveau:experience_gem")).id("mce2:mixing/gem_juicing")
mechanicalSqueezing(event, [], Item.of("ars_nouveau:experience_gem"), 40, Fluid.of("enderio:xp_juice", 60)).id("mce2:mechanical_squeezing/xp_extraction")
  
  
  event.recipes.create.mixing(Fluid.of("enderio:xp_juice", 240), Item.of("ars_nouveau:greater_experience_gem")).id("mce2:mixing/big_gem_juicing")
mechanicalSqueezing(event, [], Item.of("ars_nouveau:greater_experience_gem"), 40, Fluid.of("enderio:xp_juice", 240)).id("mce2:mechanical_squeezing/big_xp_extraction")
  
})
