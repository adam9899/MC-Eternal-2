StartupEvents.registry("item", event => {

  event.create('regret_scroll')
    .glow(true)
    .displayName('§eScroll of Regret')
  
  event.create('crimson').glow(true);
  event.create('unsigned_contract').glow(false);
  event.create('dwarven_ring').glow(true).displayName('§eDwarven Ring');
  event.create('lorkhan_heart').glow(true).displayName('§dHeart of Lorkhan');
  
  event.create('dwarven_map')
    .fireResistant(true)
    .glow(true);

  event.create('portable_wormhole_generator').glow(true);
  event.create('portable_wormhole_generator_inert').glow(false);

  event.create('magic_map')
    .fireResistant(true)
    .glow(true);

  event.create('contract').glow(true)
    .maxStackSize(1)
    .burnTime(20)
    .fireResistant(true)
    .rarity('UNCOMMON');
  
  event.create('artifact_runestone_dark_inscribed_large')
    .fireResistant(true)
    .glow(true);

  event.create('ingot_thousand_metals').glow(false);

  event.create('artifact_endergem').glow(false);
  
  event.create('travel_ticket').glow(true);

  event.create('scorched_letter').glow(true);

  event.create('scorched_letter1').glow(true);

  event.create('mossy_letter').glow(true);

  event.create('mossy_letter1').glow(true);

  event.create('elegant_letter').glow(true);

  event.create('eternal_engine').glow(true);
  
  event.create('loyalty_card_generic').glow(false);
  
  event.create('loyalty_card_curio').glow(true);
  
  event.create('loyalty_card_bm').glow(true);

  event.create("corporea_crystal")
    .tooltip(Text.translate("item.kubejs.corporea_crystal.desc").color("light_purple"))
  
  //Icons for Ponders
  event.create("icon_yes")
  event.create("icon_no")


  //Complex Items
  event.create('nether_item')
    .fireResistant(true)
    .glow(true);

  event.create('s_soup')
    .food(food => {
      food.hunger(30)
      food.saturation(0.5)
      food.effect('mowziesmobs:geomancy', 350, 0, 1.0)
    })

  event.create('strange_burger')
    .food(food => {
      food.hunger(20)
      food.saturation(0.5)
      food.effect('minecraft:strength', 150, 0, 2.0)
    })

  event.create('sunscreen')
    .food(food => {
      food.hunger(0)
      food.saturation(0.0)
      food.effect('mowziesmobs:sunblock', 2250, 0, 1.0)
      food.effect('vampirism:sunscreen', 2250, 0, 4.0)
    })


  event.create('chocolate_coin')
    .food(food => {
      food.hunger(2)
      food.saturation(0.2)
      food.effect('alexscaves:sugar_rush', 50, 0, 1.0)
    })


  event.create('mcejaffa')
    .food(food => {
      food.hunger(30)
      food.saturation(0.5)
      food.effect('alexscaves:sugar_rush', 150, 0, 1.0)
    })


  event.create("loot_bag")
    .fireResistant(true).glow(true);
})
