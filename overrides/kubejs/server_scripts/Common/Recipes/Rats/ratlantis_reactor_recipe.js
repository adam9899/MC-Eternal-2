ServerEvents.recipes(event => {
  event.shaped('rats:ratlantis_reactor', [
    'MRM',
    'GOG',
    'MRM'
  ], {
    R: 'rats:compressed_rat',
    G: 'rats:gem_of_ratlantis',
    O: 'rats:oratchalcum_block',
	M: 'rats:marbled_cheese_raw'
  })
})
