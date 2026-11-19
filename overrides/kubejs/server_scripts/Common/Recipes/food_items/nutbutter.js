
ServerEvents.recipes(event => {
  event.custom({
    type: "farmersdelight:cooking",
    container: {
      item: "minecraft:glass_bottle"
    },
    cookingtime: 200,
    experience: 1.0,
    ingredients: [
      { item: "delightful:acorn" },
      { item: "delightful:acorn" },
      { item: "delightful:acorn" },
      { item: "minecraft:sugar" },
	  { item: "minecraft:kelp" }
    ],
    recipe_book_tab: "misc",
    result: {
      item: "delightful:nut_butter_bottle"
    }
  })
})
