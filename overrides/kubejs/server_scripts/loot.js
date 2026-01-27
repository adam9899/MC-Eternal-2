LootJS.modifiers((event) => {
    // Mechanism
    event.addBlockLootModifier('mekanism:lead_ore').replaceLoot('mekanism:raw_lead', 'thermal:raw_lead');
    event.addBlockLootModifier('mekanism:deepslate_lead_ore').replaceLoot('mekanism:raw_lead', 'thermal:raw_lead');

    // Ice & Fire
    event.addBlockLootModifier('iceandfire:silver_ore').replaceLoot('iceandfire:raw_silver', 'thermal:raw_silver');
    event.addBlockLootModifier('iceandfire:deepslate_silver_ore').replaceLoot('iceandfire:raw_silver', 'thermal:raw_silver');
    event.addBlockLootModifier('iceandfire:silver_pile').replaceLoot('iceandfire:silver_nugget','thermal:silver_nugget', true);

    // Occultism
    event.addBlockLootModifier('occultism:silver_ore').replaceLoot('occultism:raw_silver', 'thermal:raw_silver');
    event.addBlockLootModifier('occultism:silver_ore_deepslate').replaceLoot('occultism:raw_silver', 'thermal:raw_silver');
})
