
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

global.oreColors = {
    iron: 0xc9c0bf,
    gold: 0xfcd538,
    copper: 0xe07a1b,
    tin: 0x89a1a0,
    silver: 0xabc7c6,
    lead: 0x393040,
    nickel: 0xd5d69f,
    osmium: 0xa7d1d0,
    uranium: 0x82eb63,
    zinc: 0xcbe6c3,
    cobalt: 0x366de3,
    iesnium: 0x60d6d6
}


StartupEvents.registry("item", event => {

    //custom intermediaries for processing
    // mostly for occultism crushers right now to make sure they don't get too wacky good
    global.processableOreNames.forEach(ore => {
        event.create(`${ore}_crushed_part`)
            .texture("layer0", "kubejs:item/crushed_ore_part")
            .color(global.oreColors[ore])
    })

    event.create("crushed_raw_iesnium")
    event.create("crushed_raw_cobalt")
})


//Preferred Materials Map
// associates our preferred version of every Ore material in the game with its name
// created to allow generating recipes which will output preferred materials en masse.
// also serves as a reference instead of writing literal outputs for these items into recipes.
global.preferredOreProducts = {
    //Ingots
    ingot: {
        iron: "minecraft:iron_ingot",
        gold: "minecraft:gold_ingot",
        copper: "minecraft:copper_ingot",
        netherite: "minecraft:netherite_ingot",
        netherite_scrap: "minecraft:netherite_scrap",
        iesnium: "occultism:iesnium_ingot",
        desh: "ad_astra:desh_ingot",
        ostrum: "ad_astra:ostrum_ingot",
        calorite: "ad_astra:calorite_ingot",
        cobalt: "tconstruct:cobalt_ingot",
        zinc: "create:zinc_ingot",
        tin: "thermal:tin_ingot",
        lead: "thermal:lead_ingot",
        silver: "thermal:silver_ingot",
        nickel: "thermal:nickel_ingot",
        steel: "thermal:steel_ingot",
        bronze: "thermal:bronze_ingot",
        electrum: "thermal:electrum_ingot",
        invar: "thermal:invar_ingot",
        constantan: "thermal:constantan_ingot",
        signalum: "thermal:signalum_ingot",
        lumium: "thermal:lumium_ingot",
        enderium: "thermal:enderium_ingot",
        osmium: "mekanism:ingot_osmium",
        uranium: "mekanism:ingot_uranium",
        brass: "create:brass_ingot",
    },
    //Ingots with an associated Raw Ore
    ore_ingot: {
        iron: "minecraft:iron_ingot",
        gold: "minecraft:gold_ingot",
        copper: "minecraft:copper_ingot",
        iesnium: "occultism:iesnium_ingot",
        desh: "ad_astra:desh_ingot",
        ostrum: "ad_astra:ostrum_ingot",
        calorite: "ad_astra:calorite_ingot",
        cobalt: "tconstruct:cobalt_ingot",
        zinc: "create:zinc_ingot",
        tin: "thermal:tin_ingot",
        lead: "thermal:lead_ingot",
        silver: "thermal:silver_ingot",
        nickel: "thermal:nickel_ingot",
        osmium: "mekanism:ingot_osmium",
        uranium: "mekanism:ingot_uranium",
    },
    //Dusts with an associated Ingot
    dust_metal: {
        iron: "thermal:iron_dust",
        gold: "thermal:gold_dust",
        copper: "thermal:copper_dust",
        netherite: "thermal:netherite_dust",
        tin: "thermal:tin_dust",
        lead: "thermal:lead_dust",
        silver: "thermal:silver_dust",
        nickel: "thermal:nickel_dust",
        steel: "thermal:steel_dust",
        bronze: "thermal:bronze_dust",
        electrum: "thermal:electrum_dust",
        invar: "thermal:invar_dust",
        constantan: "thermal:constantan_dust",
        signalum: "thermal:signalum_dust",
        lumium: "thermal:lumium_dust",
        enderium: "thermal:enderium_dust",
        osmium: "mekanism:dust_osmium",
        uranium: "mekanism:dust_uranium",
        iesnium: "occultism:iesnium_dust",
        zinc: "moremekanismprocessing:dust_zinc"
    },
    //Metals that have an associated Ingot and Ore
    dust_ore_metal: {
        iron: "thermal:iron_dust",
        gold: "thermal:gold_dust",
        copper: "thermal:copper_dust",
        tin: "thermal:tin_dust",
        lead: "thermal:lead_dust",
        silver: "thermal:silver_dust",
        nickel: "thermal:nickel_dust",
        osmium: "mekanism:dust_osmium",
        uranium: "mekanism:dust_uranium",
        iesnium: "occultism:iesnium_dust",
        zinc: "moremekanismprocessing:dust_zinc",
        cobalt: "enderio:powdered_cobalt"
    },
    //Dusts with an associated Gem
    dust_gem: {
        lapis: "thermal:lapis_dust",
        diamond: "thermal:diamond_dust",
        emerald: "thermal:emerald_dust",
        quartz: "thermal:quartz_dust",
        ruby: "thermal:ruby_dust",
        sapphire: "thermal:sapphire_dust",
        certus_quartz: "ae2:certus_quartz_dust",
        fluix: "ae2:fluix_dust",
        amethyst: "hexcasting:amethyst_dust",
        apatite: "thermal:apatite_dust",
        sulfur: "thermal:sulfur_dust",
        niter: "thermal:niter_dust",
        fluorite: "mekanism:dust_fluorite"
    },
    //Dusts that have an associated Gem and Ore
    dust_ore_gem: {
        lapis: "thermal:lapis_dust",
        diamond: "thermal:diamond_dust",
        emerald: "thermal:emerald_dust",
        quartz: "thermal:quartz_dust",
        ruby: "thermal:ruby_dust",
        sapphire: "thermal:sapphire_dust",
        apatite: "thermal:apatite_dust",
        sulfur: "thermal:sulfur_dust",
        niter: "thermal:niter_dust",
        fluorite: "mekanism:dust_fluorite"
    },
    //Other Dusts
    dust_other: {
        coal: "enderio:powdered_coal",
        wood: "thermal:sawdust",
        obsidian: "create:powdered_obsidian",
        ender_pearl: "thermal:ender_pearl_dust"
    },
    //Gems
    gem: {
        lapis: "minecraft:lapis_lazuli",
        diamond: "minecraft:diamond",
        emerald: "minecraft:emerald",
        quartz: "minecraft:quartz",
        amethyst: "minecraft:amethyst",
        certus_quartz: "ae2:certus_quartz_crystal",
        fluix: "ae2:fluix_crystal",
        fluorite: "mekanism:fluorite",
        apatite: "thermal:apatite",
        cinnabar: "thermal:cinnabar",
        niter: "thermal:niter",
        sulfur: "thermal:sulfur",
        ruby: "thermal:ruby",
        sapphire: "thermal:sapphire",
        jade: "goety:jade"
    },
    //Raw Ores
    raw_material: {
        iron: "minecraft:raw_iron",
        gold: "minecraft:raw_gold",
        copper: "minecraft:raw_copper",
        tin: "thermal:raw_tin",
        lead: "thermal:raw_lead",
        silver: "thermal:raw_silver",
        nickel: "thermal:raw_nickel",
        osmium: "mekanism:raw_osmium",
        uranium: "mekanism:raw_uranium",
        iesnium: "occultism:raw_iesnium",
        desh: "ad_astra:raw_desh",
        ostrum: "ad_astra:raw_ostrum",
        calorite: "ad_astra:raw_calorite",
        cobalt: "tconstruct:raw_cobalt",
        zinc: "create:raw_zinc"
    },
    //Plates
    plate: {
        iron: "create:iron_sheet",
        gold: "create:gold_sheet",
        copper: "create:copper_sheet",
        brass: "create:brass_sheet",
        netherite: "thermal:netherite_plate",
        tin: "thermal:tin_plate",
        lead: "thermal:lead_plate",
        silver: "thermal:silver_plate",
        nickel: "thermal:nickel_plate",
        steel: "thermal:steel_plate",
        bronze: "thermal:bronze_plate",
        electrum: "thermal:electrum_plate",
        invar: "thermal:invar_plate",
        thermal: "thermal:constantan_plate",
        signalum: "thermal:signalum_plate",
        lumium: "thermal:lumium_plate",
        enderium: "thermal:enderium_plate",
        desh: "ad_astra:desh_plate",
        ostrum: "ad_astra:ostrum_plate",
        calorite: "ad_astra:calorite_plate"
    },
    //Nuggets
    nugget: {
        iron: 'minecraft:iron_nugget', 
        gold: 'minecraft:gold_nugget',
        copper: 'create:copper_nugget',
        netherite: 'thermal:netherite_nugget',
        tin: 'thermal:tin_nugget',
        lead: 'thermal:lead_nugget',
        silver: 'thermal:silver_nugget', 
        nickel: 'thermal:nickel_nugget',
        steel: 'thermal:steel_nugget',
        bronze: 'thermal:bronze_nugget', 
        electrum: 'thermal:electrum_nugget', 
        invar: 'thermal:invar_nugget',
        constantan: 'thermal:constantan_nugget', 
        signalum: 'thermal:signalum_nugget', 
        lumium: 'thermal:lumium_nugget', 
        enderium: 'thermal:enderium_nugget', 
        osmium: 'mekanism:nugget_osmium',
        uranium: 'mekanism:nugget_uranium',
        iesnium: 'occultism:iesnium_nugget',
        desh: 'ad_astra:desh_nugget', 
        ostrum: 'ad_astra:ostrum_nugget', 
        calorite: 'ad_astra:calorite_nugget', 
        cobalt: 'tconstruct:cobalt_nugget', 
        netherite_scrap: 'tconstruct:debris_nugget', 
        zinc: 'create:zinc_nugget', 
        brass: 'create:brass_nugget'
    },
    //Blocks that require 9 of an Ingot item
    metal_block: {
        iron: 'minecraft:iron_block',
        gold: 'minecraft:gold_block',
        copper: 'minecraft:copper_block',
        netherite: 'minecraft:netherite_block', 
        tin: 'thermal:tin_block', 
        lead: 'thermal:lead_block', 
        silver: 'thermal:silver_block', 
        nickel: 'thermal:nickel_block', 
        bronze: 'thermal:bronze_block', 
        electrum: 'thermal:electrum_block', 
        invar: 'thermal:invar_block', 
        constantan: 'thermal:constantan_block', 
        steel: 'thermal:steel_block', 
        signalum: 'thermal:signalum_block', 
        lumium: 'thermal:lumium_block', 
        enderium: 'thermal:enderium_block', 
        osmium: 'mekanism:block_osmium',
        uranium: 'mekanism:block_uranium', 
        zinc: 'create:zinc_block', 
        brass: 'create:brass_block',
        desh: "ad_astra:desh_block",
        ostrum: "ad_astra:ostrum_block",
        calorite: "ad_astra:calorite_block",
    },
    //Blocks that require 9 of a Gem item
    gem_block: {
        coal: 'minecraft:coal_block', 
        redstone: 'minecraft:redstone_block', 
        lapis: 'minecraft:lapis_block',
        diamond: 'minecraft:diamond_block', 
        emerald: 'minecraft:emerald_block', 
        ruby: 'thermal:ruby_block', 
        sapphire: 'thermal:sapphire_block',
        cobalt: 'tconstruct:cobalt_block',
        apatite: 'thermal:apatite_block', 
        cinnabar: 'thermal:cinnabar_block', 
        niter: 'thermal:niter_block',
        sulfur: 'thermal:sulfur_block', 
    },
    //Blocks that require 4 of an item
    block_4: {
        quartz: "minecraft:quartz_block",
        amethyst: "minecraft:amethyst_block",
        source_gem: "ars_nouveau:source_gem_block"
    },
    //Raw Ore Blocks
    raw_block: {
        iron: 'minecraft:raw_iron_block',
        copper: 'minecraft:raw_copper_block',
        gold: 'minecraft:raw_gold_block', 
        tin: 'thermal:raw_tin_block', 
        lead: 'thermal:raw_lead_block', 
        silver: 'thermal:raw_silver_block', 
        nickel: 'thermal:raw_nickel_block', 
        zinc: 'create:raw_zinc_block', 
        osmium: 'mekanism:block_raw_osmium', 
        uranium: 'mekanism:block_raw_uranium', 
        iesnium: 'occultism:raw_iesnium_block', 
        cobalt: 'tconstruct:raw_cobalt_block', 
        desh: 'ad_astra:raw_desh_block',
        ostrum: 'ad_astra:raw_ostrum_block',
        calorite: 'ad_astra:raw_calorite_block'
    },
    //Crushed Raw Ores
    crushed_raw: {
        iron: 'create:crushed_raw_iron',
        gold: 'create:crushed_raw_gold', 
        copper: 'create:crushed_raw_copper',
        zinc: 'create:crushed_raw_zinc', 
        tin: 'create:crushed_raw_tin', 
        silver: 'create:crushed_raw_silver', 
        lead: 'create:crushed_raw_lead', 
        nickel: 'create:crushed_raw_nickel',
        osmium: 'create:crushed_raw_osmium', 
        uranium: 'create:crushed_raw_uranium', 
        iesnium: 'kubejs:crushed_raw_iesnium', 
        cobalt: 'kubejs:crushed_raw_cobalt'
    }
}


//Generate crushed part IDs
// Running it here as opposed to during item registry ensures that it regenerates and persists through reloads
/*
global.processableOreNames.forEach(ore => {
    global.preferredOreProducts.crushed_part[ore] = `kubejs:${ore}_crushed_part`
})
*/