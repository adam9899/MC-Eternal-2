ServerEvents.recipes(event => {
    // Most blazes drop 20mb
    tinkersEntityMelting(event, 
        ["specialmobs:armoredblaze", "specialmobs:conflagrationblaze", "specialmobs:emberblaze", "specialmobs:hellfireblaze", "specialmobs:infernoblaze", "specialmobs:joltblaze", "specialmobs:wildfireblaze", "specialmobs:blaze"], 
        "tconstruct:blazing_blood", 
        20, 
        2
    ).id("mce2:tinkers/entity_melting/blaze_variants_blazing_blood")

    // Cinderblaze drops only 4mb
    tinkersEntityMelting(event, 
        ["specialmobs:cinderblaze"], 
        "tconstruct:blazing_blood", 
        4, 
        2
    ).id("mce2:tinkers/entity_melting/cinderblaze_blazing_blood")
}) 
