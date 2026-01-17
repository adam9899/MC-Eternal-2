// allow immersive weathering leaf piles to be overwritten by trees
// so as to not break tree farms
ServerEvents.tags('block', event => {
  event.add('minecraft:replaceable_by_trees', [
    '#immersive_weathering:leaf_piles'
  ])
})
