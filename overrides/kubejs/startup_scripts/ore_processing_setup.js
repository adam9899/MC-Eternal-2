
global.processableOreNames = [
    "iron",
    "gold",
    "copper",
    "tin",
    "silver",
    "lead",
    "nickel",
    "osmium",
    "uranium",
    "zinc",
    "cobalt",
    "iesnium"
]

//bootleg enum
global.types = {
    ORE_METAL: {name: "ore_metal", hasOre: true},
    METAL: {name: "metal", hasOre: false},
    ORE_GEM: {name: "ore_gem", hasOre: true},
    GEM: {name: "gem", hasOre: false},
    OTHER: {name: "other", hasOre: false}
}


StartupEvents.registry("item", event => {

    //custom intermediaries for processing
    // mostly for occultism crushers right now to make sure they don't get too wacky good
    global.processableOreNames.forEach(ore => {
        event.create(`${ore}_crushed_part`)
            .texture("layer0", "kubejs:item/crushed_ore_part")
            .color(global.preferredOreProducts[ore].color)
    })

    event.create("crushed_raw_iesnium")
    event.create("crushed_raw_cobalt")
})

const byproductOf = (item, chance, count) => {
    count = count || 1
    chance = chance || 1
    return {
        item: item,
        chance: chance,
        count: count
    }
}


//Preferred Materials Map
// associates our preferred version of every notable material in the game with its name
// created to allow generating recipes which will output preferred materials en masse.
// also serves as a reference instead of writing literal outputs for these items into recipes.
/* Template
iron: {
    type: "ingot",
    ingot: "minecraft:iron_ingot",
    nugget: "minecraft:iron_nugget",
    block: "minecraft:iron_block",
    plate: "create:iron_sheet",
    dust: "thermal:iron_dust",
    molten: "tconstruct:molten_iron",
    raw_material: "minecraft:raw_iron",
    raw_block: "minecraft:raw_iron_block",
    crushed_raw: "create:crushed_raw_iron"
}
*/

/*TODO
- ORATCHALCUM

// ADD BYPRODUCTS TO DEFS MATERIAL
*/
global.preferredOreProducts = {
    //Ore Metals
    iron: {
        type: global.types.ORE_METAL,
        color: 0xc9c0bf,
        block_density: 9,
        cooling_time: 60,
        ingot: "minecraft:iron_ingot",
        nugget: "minecraft:iron_nugget",
        block: "minecraft:iron_block",
        plate: "create:iron_sheet",
        dust: "thermal:iron_dust",
        molten: "tconstruct:molten_iron",
        raw_material: "minecraft:raw_iron",
        raw_block: "minecraft:raw_iron_block",
        crushed_raw: "create:crushed_raw_iron",
        byproduct: byproductOf("minecraft:redstone", 0.75)
    },
    gold: {
        type: global.types.ORE_METAL,
        color: 0xfcd538,
        block_density: 9,
        cooling_time: 57,
        ingot: "minecraft:gold_ingot",
        nugget: "minecraft:gold_nugget",
        block: "minecraft:gold_block",
        plate: "create:gold_sheet",
        dust: "thermal:gold_dust",
        molten: "tconstruct:molten_gold",
        raw_material: "minecraft:raw_gold",
        raw_block: "minecraft:raw_gold_block",
        crushed_raw: "create:crushed_raw_gold",
        byproduct: byproductOf("minecraft:quartz", 0.5)
    },
    copper: {
        type: global.types.ORE_METAL,
        color: 0xe07a1b,
        block_density: 9,
        cooling_time: 50,
        ingot: "minecraft:copper_ingot",
        nugget: "create:copper_nugget",
        block: "minecraft:copper_block",
        plate: "create:copper_sheet",
        dust: "thermal:copper_dust",
        molten: "tconstruct:molten_copper",
        raw_material: "minecraft:raw_copper",
        raw_block: "minecraft:raw_copper_block",
        crushed_raw: "create:crushed_raw_copper",
        byproduct: byproductOf("minecraft:clay_ball", 0.5)
    },
    tin: {
        type: global.types.ORE_METAL,
        color: 0x89a1a0,
        block_density: 9,
        cooling_time: 39,
        ingot: "thermal:tin_ingot",
        nugget: "thermal:tin_nugget",
        block: "thermal:tin_block",
        plate: "thermal:tin_plate",
        dust: "thermal:tin_dust",
        molten: "tconstruct:molten_tin",
        raw_material: "thermal:raw_tin",
        raw_block: "thermal:raw_tin_block",
        crushed_raw: "create:crushed_raw_tin",
        byproduct: byproductOf("thermal:apatite_dust", 0.12)
    },
    silver: {
        type: global.types.ORE_METAL,
        color: 0xabc7c6,
        block_density: 9,
        cooling_time: 60,
        ingot: "thermal:silver_ingot",
        nugget: "thermal:silver_nugget",
        block: "thermal:silver_block",
        plate: "thermal:silver_plate",
        dust: "thermal:silver_dust",
        molten: "tconstruct:molten_silver",
        raw_material: "thermal:raw_silver",
        raw_block: "thermal:raw_silver_block",
        crushed_raw: "create:crushed_raw_silver",
        byproduct: byproductOf("thermal:lead_dust", 0.1)
    },
    lead: {
        type: global.types.ORE_METAL,
        color: 0x393040,
        block_density: 9,
        cooling_time: 43,
        ingot: "thermal:lead_ingot",
        nugget: "thermal:lead_nugget",
        block: "thermal:lead_block",
        plate: "thermal:lead_plate",
        dust: "thermal:lead_dust",
        molten: "tconstruct:molten_lead",
        raw_material: "thermal:raw_lead",
        raw_block: "thermal:raw_lead_block",
        crushed_raw: "create:crushed_raw_lead",
        byproduct: byproductOf("thermal:silver_dust", 0.1)
    },
    nickel: {
        type: global.types.ORE_METAL,
        color: 0xd5d69f,
        block_density: 9,
        cooling_time: 65,
        ingot: "thermal:nickel_ingot",
        nugget: "thermal:nickel_nugget",
        block: "thermal:nickel_block",
        plate: "thermal:nickel_plate",
        dust: "thermal:nickel_dust",
        molten: "tconstruct:molten_nickel",
        raw_material: "thermal:raw_nickel",
        raw_block: "thermal:raw_nickel_block",
        crushed_raw: "create:crushed_raw_nickel"
    },
    osmium: {
        type: global.types.ORE_METAL,
        color: 0xa7d1d0,
        cooling_time: 66,
        ingot: "mekanism:ingot_osmium",
        nugget: "mekanism:nugget_osmium",
        block: "mekanism:block_osmium",
        dust: "mekanism:dust_osmium",
        molten: "tconstruct:molten_osmium",
        raw_material: "mekanism:raw_osmium",
        raw_block: "mekanism:block_raw_osmium",
        crushed_raw: "create:crushed_raw_osmium",
        byproduct: byproductOf("thermal:diamond_dust", 0.05)
    },
    uranium: {
        type: global.types.ORE_METAL,
        color: 0x82eb63,
        cooling_time: 61,
        ingot: "mekanism:ingot_uranium",
        nugget: "mekanism:nugget_uranium",
        block: "mekanism:block_uranium",
        dust: "mekanism:dust_uranium",
        molten: "tconstruct:molten_uranium",
        raw_material: "mekanism:raw_uranium",
        raw_block: "mekanism:block_raw_uranium",
        crushed_raw: "create:crushed_raw_uranium",
        byproduct: byproductOf("thermal:sulfur_dust", 0.5)
    },
    zinc: {
        type: global.types.ORE_METAL,
        color: 0xcbe6c3,
        cooling_time: 47,
        ingot: "create:zinc_ingot",
        nugget: "create:zinc_nugget",
        block: "create:zinc_block",
        dust: "moremekanismprocessing:dust_zinc",
        molten: "tconstruct:molten_zinc",
        raw_material: "create:raw_zinc",
        raw_block: "create:raw_zinc_block",
        crushed_raw: "create:crushed_raw_zinc",
        byproduct: byproductOf("minecraft:gunpowder", 0.25)
    },
    cobalt: {
        type: global.types.ORE_METAL,
        color: 0x366de3,
        cooling_time: 65,
        ingot: "tconstruct:cobalt_ingot",
        nugget: "tconstruct:cobalt_nugget",
        block: "tconstruct:cobalt_block",
        dust: "enderio:powdered_cobalt",
        molten: "tconstruct:molten_cobalt",
        raw_material: "tconstruct:raw_cobalt",
        raw_block: "tconstruct:raw_cobalt_block",
        crushed_raw: "kubejs:crushed_raw_cobalt"
    },
    iesnium: {
        type: global.types.ORE_METAL,
        color: 0x60d6d6,
        ingot: "occultism:iesnium_ingot",
        nugget: "occultism:iesnium_nugget",
        dust: "occultism:iesnium_dust",
        raw_material: "occultism:raw_iesnium",
        raw_block: "occultism:raw_iesnium_block",
        crushed_raw: "kubejs:crushed_raw_iesnium",
        byproduct: byproductOf("create:powdered_obsidian", 0.20)
    },
    desh: {
        type: global.types.ORE_METAL,
        //cooling_time: 50,
        ingot: "ad_astra:desh_ingot",
        nugget: "ad_astra:desh_nugget",
        block: "ad_astra:desh_block",
        plate: "ad_astra:desh_plate",
        molten: "tcintegrations:molten_desh",
        raw_material: "ad_astra:raw_desh",
        raw_block: "ad_astra:raw_desh_block"
    },
    ostrum: {
        type: global.types.ORE_METAL,
        //cooling_time: 50,
        ingot: "ad_astra:ostrum_ingot",
        nugget: "ad_astra:ostrum_nugget",
        block: "ad_astra:ostrum_block",
        plate: "ad_astra:ostrum_plate",
        molten: "tcintegrations:molten_ostrum",
        raw_material: "ad_astra:raw_ostrum",
        raw_block: "ad_astra:raw_ostrum_block"
    },
    calorite: {
        type: global.types.ORE_METAL,
        //cooling_time: 50,
        ingot: "ad_astra:calorite_ingot",
        nugget: 'ad_astra:calorite_nugget', 
        block: "ad_astra:calorite_block",
        plate: "ad_astra:calorite_plate",
        molten: "tcintegrations:molten_calorite",
        raw_material: "ad_astra:raw_calorite",
        raw_block: "ad_astra:raw_calorite_block"
    },


    //Alloy Metals
    netherite: {
        type: global.types.METAL,
        block_density: 9,
        cooling_time: 74,
        ingot: "minecraft:netherite_ingot",
        nugget: "thermal:netherite_nugget",
        block: "minecraft:netherite_block",
        plate: "thermal:netherite_plate",
        dust: "thermal:netherite_dust",
        molten: "tconstruct:molten_netherite"
    },
    brass: {
        type: global.types.METAL,
        block_density: 9,
        cooling_time: 54,
        ingot: "create:brass_ingot",
        nugget: "create:brass_nugget",
        block: "create:brass_block",
        plate: "create:brass_sheet",
        molten: "tconstruct:molten_brass"
    },
    bronze: {
        type: global.types.METAL,
        block_density: 9,
        cooling_time: 57,
        ingot: "thermal:bronze_ingot",
        nugget: "thermal:bronze_nugget",
        block: "thermal:bronze_block",
        plate: "thermal:bronze_plate",
        dust: "thermal:bronze_dust",
        molten: "tconstruct:molten_bronze"
    },
    electrum: {
        type: global.types.METAL,
        block_density: 9,
        cooling_time: 59,
        ingot: "thermal:electrum_ingot",
        nugget: "thermal:electrum_nugget",
        block: "thermal:electrum_block",
        plate: "thermal:electrum_plate",
        dust: "thermal:electrum_dust",
        molten: "tconstruct:molten_electrum"
    },
    invar: {
        type: global.types.METAL,
        block_density: 9,
        cooling_time: 63,
        ingot: "thermal:invar_ingot",
        nugget: "thermal:invar_nugget",
        block: "thermal:invar_block",
        plate: "thermal:invar_plate",
        dust: "thermal:invar_dust",
        molten: "tconstruct:molten_invar"
    },
    constantan: {
        type: global.types.METAL,
        block_density: 9,
        cooling_time: 64,
        ingot: "thermal:constantan_ingot",
        nugget: "thermal:constantan_nugget",
        block: "thermal:constantan_block",
        plate: "thermal:constantan_plate",
        dust: "thermal:constantan_dust",
        molten: "tconstruct:molten_constantan"
    },
    //Thermal Strange Alloys
    signalum: {
        type: global.types.METAL,
        block_density: 9,
        cooling_time: 66,
        ingot: "thermal:signalum_ingot",
        nugget: "thermal:signalum_nugget",
        block: "thermal:signalum_block",
        plate: "thermal:signalum_plate",
        dust: "thermal:signalum_dust",
        molten: "tconstruct:molten_signalum"
    },
    lumium: {
        type: global.types.METAL,
        block_density: 9,
        cooling_time: 68,
        ingot: "thermal:lumium_ingot",
        nugget: "thermal:lumium_nugget",
        block: "thermal:lumium_block",
        plate: "thermal:lumium_plate",
        dust: "thermal:lumium_dust",
        molten: "tconstruct:molten_lumium"
    },
    enderium: {
        type: global.types.METAL,
        block_density: 9,
        cooling_time: 76,
        ingot: "thermal:enderium_ingot",
        nugget: "thermal:enderium_nugget",
        block: "thermal:enderium_block",
        plate: "thermal:enderium_plate",
        dust: "thermal:enderium_dust",
        molten: "tconstruct:molten_enderium"
    },


    //Other Metals
    netherite_scrap: {
        type: global.types.METAL,
        ingot: "minecraft:netherite_scrap",
        nugget: "tconstruct:debris_nugget",
        molten: "tconstruct:molten_debris"
    },
    steel: {
        type: global.types.METAL,
        block_density: 9,
        cooling_time: 65,
        ingot: "thermal:steel_ingot",
        nugget: "thermal:steel_nugget",
        block: "thermal:steel_block",
        plate: "thermal:steel_plate",
        dust: "thermal:steel_dust",
        molten: "tconstruct:molten_steel"
    },


    //Ore Gems
    lapis: {
        type: global.types.ORE_GEM,
        block_density: 9,
        gem: "minecraft:lapis_lazuli",
        block: "minecraft:lapis_block",
        dust: "thermal:lapis_dust"
    },
    diamond: {
        type: global.types.ORE_GEM,
        block_density: 9,
        gem: "minecraft:diamond",
        block: "minecraft:diamond_block",
        dust: "thermal:diamond_dust",
        molten: "tconstruct:molten_diamond"
    },
    emerald: {
        type: global.types.ORE_GEM,
        block_density: 9,
        gem: "minecraft:emerald",
        block: "minecraft:emerald_block",
        dust: "thermal:emerald_dust",
        molten: "tconstruct:molten_emerald"
    },
    quartz: {
        type: global.types.ORE_GEM,
        block_density: 4,
        gem: "minecraft:quartz",
        block: "minecraft:quartz_block",
        dust: "thermal:quartz_dust",
        molten: "tconstruct:molten_quartz"
    },
    fluorite: {
        type: global.types.ORE_GEM,
        block_density: 9,
        gem: "mekanism:fluorite",
        block: "mekanism:block_fluorite",
        dust: "mekanism:dust_fluorite"
    },
    ruby: {
        type: global.types.ORE_GEM,
        block_density: 9,
        gem: "thermal:ruby",
        block: "thermal:ruby_block",
        dust: "thermal:ruby_dust"
    },
    sapphire: {
        type: global.types.ORE_GEM,
        block_density: 9,
        gem: "thermal:sapphire",
        block: "thermal:sapphire_block",
        dust: "thermal:sapphire_dust"
    },
    apatite: {
        type: global.types.ORE_GEM,
        block_density: 9,
        gem: "thermal:apatite",
        dust: "thermal:apatite_dust",
        block: "thermal:apatite_block"
    },
    cinnabar: {
        type: global.types.ORE_GEM,
        block_density: 9,
        gem: "thermal:cinnabar",
        block: "thermal:cinnabar_block",
    },
    sulfur: {
        type: global.types.ORE_GEM,
        block_density: 9,
        gem: "thermal:sulfur",
        block: "thermal:sulfur_block",
        dust: "thermal:sulfur_dust"
    },
    niter: {
        type: global.types.ORE_GEM,
        block_density: 9,
        gem: "thermal:niter",
        block: "thermal:niter_block",
        dust: "thermal:niter_dust"
    },
    jade: {
        type: global.types.ORE_GEM,
        gem: "goety:jade"
    },


    //Gems
    amethyst: {
        type: global.types.GEM,
        block_density: 4,
        gem: "minecraft:amethyst",
        block: "minecraft:amethyst_block",
        dust: "hexcasting:amethyst_dust",
        molten: "tconstruct:molten_amethyst"
    },
    certus_quartz: {
        type: global.types.GEM,
        block_density: 4,
        gem: "ae2:certus_quartz_crystal",
        dust: "ae2:certus_quartz_dust"
    },
    fluix: {
        type: global.types.GEM,
        block_density: 4,
        gem: "ae2:fluix_crystal",
        block: "ae2:fluix_block",
        dust: "ae2:fluix_dust"
    },
    source_gem: {
        type: global.types.GEM,
        block_density: 4,
        block: "ars_nouveau:source_gem_block"
    },


    //Other
    coal: {
        type: global.types.OTHER,
        block_density: 9,
        main: "minecraft:coal",
        block: "minecraft:coal_block",
        dust: "enderio:powdered_coal"
    },
    redstone: {
        type: global.types.OTHER,
        block_density: 9,
        block: "minecraft:redstone_block",
        dust: "minecraft:redstone",
    },
    wood: {
        type: global.types.OTHER,
        dust: "thermal:sawdust"
    },
    obsidian: {
        type: global.types.OTHER,
        main: "minecraft:obsidian",
        dust: "create:powdered_obsidian"
    },
    ender_pearl: {
        type: global.types.OTHER,
        main: "minecraft:ender_pearl",
        dust: "thermal:ender_pearl_dust"
    }
}


//Generate crushed part IDs
// Running it here as opposed to during item registry ensures that it regenerates and persists through reloads
/*
global.processableOreNames.forEach(ore => {
    global.preferredOreProducts.crushed_part[ore] = `kubejs:${ore}_crushed_part`
})
*/