ServerEvents.tags("entity_type", event => {
    event.add('ftbchunks:entity_mob_griefing_blacklist', [
        'specialmobs:spitfireskeleton',
        /iceandfire:.*_dragon/,
        'rats:rat'
     ]);
})
