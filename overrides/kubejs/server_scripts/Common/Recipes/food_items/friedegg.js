ServerEvents.recipes(event => {
  event.custom({
    type: "farmersdelight:cooking",
    ingredients: [
      { item: "minecraft:egg" }
    ],
    result: {
      item: "incubation:fried_egg",
      count: 1
    },
    experience: 0.35,
    cookingtime: 200
  })
})