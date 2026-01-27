ServerEvents.recipes(event => {
  event.shaped('kubejs:ultimate_cheese', [
    'CCC',
    'BBB',
    'NNN'
  ], {
    C: 'rats:block_of_cheese',
    B: 'rats:block_of_blue_cheese',
    N: 'rats:block_of_nether_cheese'
  })
})