
const fluidTag = (tag, amount) => {
    amount = amount || 1000
    return {
        fluidTag: tag,
        amount: amount
    }
}

ServerEvents.recipes(event => {

    //Mixing

    //Aquamirae
    event.recipes.create.mixing(Item.of("aquamirae:sea_casserole", 2), [
        "minecraft:sweet_berries",
        "aquamirae:oxygelium",
        "#forge:crops/wheat",
        "aquamirae:esca",
        Item.of("minecraft:egg", 2),
        fluidTag("forge:milk", 1000)
    ]).id("mce2:mixing/food/aquamirae_sea_casserole")

    //Ars Nouveau
    event.recipes.create.mixing("ars_nouveau:source_berry_roll", [
        "#forge:dough",
        fluidTag("forge:milk", 250),
        "ars_nouveau:sourceberry_bush"
    ]).id("mce2:mixing/food/ars_nouveau_source_berry_roll")


    //Autumnity
    event.recipes.create.mixing("autumnity:pancake", [
        "autumnity:syrup_bottle",
        fluidTag("forge:milk", 250),
        "#forge:eggs",
        Item.of("#forge:crops/wheat", 2)
    ]).id("mce2:mixing/food/autumnity_pancake")


    //Brewin' And Chewin'
    event.recipes.create.mixing("brewinandchewin:quiche", [
        Item.of("minecraft:brown_mushroom", 2),
        "farmersdelight:cabbage_leaf",
        fluidTag("forge:milk", 500),
        "#brewinandchewin:cheese_wedges",
        "minecraft:egg",
        "farmersdelight:pie_crust"
    ]).id("mce2:mixing/food/brewingandchewin_quiche_with_mushroom")

    event.recipes.create.mixing("brewinandchewin:quiche", [
        Item.of("farmersdelight:bacon", 2),
        "farmersdelight:cabbage_leaf",
        fluidTag("forge:milk", 500),
        "#brewinandchewin:cheese_wedges",
        "minecraft:egg",
        "farmersdelight:pie_crust"
    ]).id("mce2:mixing/food/brewingandchewin_quiche_with_bacon")


    //Delightful
    event.recipes.create.mixing([Item.of("delightful:matcha_milkshake", 3), "minecraft:bowl"], [
        Item.of("minecraft:glass_bottle", 3),
        "delightful:matcha_ice_cream",
        fluidTag("forge:milk", 250)
    ]).id("mce2:mixing/food/delightful_matcha_milkshake")

    event.recipes.create.mixing("delightful:matcha_ice_cream", [
        "minecraft:bowl",
        "delightful:matcha",
        fluidTag("forge:milk", 250),
        "minecraft:ice",
        "#forge:sugar",
    ]).id("mce2:mixing/food/delightful_matcha_ice_cream")

    event.recipes.create.mixing("delightful:berry_matcha_latte", [
        "minecraft:glass_bottle",
        fluidTag("forge:honey", 250),
        fluidTag("forge:milk", 250),
        "delightful:matcha",
        "#forge:berries",
        "minecraft:ice"
    ]).id("mce2:mixing/food/delightful_berry_matcha_latte")

    event.recipes.create.mixing([Item.of("delightful:salmonberry_milkshake", 3), "minecraft:bowl"], [
        Item.of("minecraft:glass_bottle", 3),
        "delightful:salmonberry_ice_cream",
        fluidTag("forge:milk", 250)
    ]).id("mce2:mixing/food/delightful_salmonberry_milkshake")

    event.recipes.create.mixing("delightful:salmonberry_ice_cream", [
        "minecraft:bowl",
        "delightful:salmonberries",
        fluidTag("forge:milk", 250),
        "minecraft:ice",
        "#forge:sugar",
    ]).id("mce2:mixing/food/delightful_salmonberry_ice_cream")

    event.recipes.create.mixing([Item.of("delightful:source_berry_milkshake", 3), "minecraft:bowl"], [
        Item.of("minecraft:glass_bottle", 3),
        "delightful:source_berry_ice_cream",
        fluidTag("forge:milk", 250)
    ]).id("mce2:mixing/food/delightful_source_berry_milkshake")

    event.recipes.create.mixing("delightful:source_berry_ice_cream", [
        "minecraft:bowl",
        "ars_nouveau:sourceberry_bush",
        fluidTag("forge:milk", 250),
        "minecraft:ice",
        "#forge:sugar",
    ]).id("mce2:mixing/food/delightful_source_berry_ice_cream")


    //Ender IO
    event.recipes.create.mixing("enderio:enderios", [
        "minecraft:bowl",
        fluidTag("forge:milk", 1000),
        "#forge:crops/wheat",
        "#forge:dusts/ender_pearl"
    ]).id("mce2:mixing/food/enderio_enderios")


    //Farmer's Delight
    event.recipes.create.mixing("farmersdelight:stuffed_potato", [
        "minecraft:baked_potato",
        "#forge:cooked_beef_or_vegan",
        fluidTag("forge:milk", 250)
    ]).id("mce2:mixing/food/farmersdelight_stuffed_potato")


    //Jaden's Nether Expansion
    event.recipes.create.mixing(Item.of("netherexp:glowcheese", 3), [
        "netherexp:lightspores",
        "netherexp:nightspores",
        fluidTag("forge:milk", 1000)
    ]).id("mce2:mixing/food/netherexp_glowcheese")


    //Jellyfishing
    event.recipes.create.mixing("jellyfishing:triple_gooberberry_sunrise", [
        "minecraft:cocoa_beans",
        Item.of("#forge:fruits", 3),
        "#forge:berries",
        fluidTag("forge:milk", 250)
    ]).id("mce2:mixing/food/jellyfishing_triple_gooberberry_sunrise")

    event.recipes.create.mixing("jellyfishing:seanut_butter", [
        "jellyfishing:seanut",
        fluidTag("forge:milk", 250)
    ]).id("mce2:mixing/food/jellyfishing_seanut_butter")


    //Incubation
    event.recipes.create.mixing("incubation:scrambled_eggs", [
        Ingredient.of("#forge:eggs", 2),
        fluidTag("forge:milk", 250),
        "minecraft:bowl"
    ]).id("mce2:mixing/food/incubation_scrambled_eggs")


    //Supplementaries
    event.recipes.create.mixing(Item.of("supplementaries:pancake", 3), [
        "#forge:sugar",
        fluidTag("forge:milk", 250),
        "#forge:dough",
        "#forge:eggs"
    ]).id("mce2:mixing/food/supplementaries_pancake")


    //Thermal
    event.recipes.create.mixing("thermal:cheese_wheel", [
        fluidTag("forge:milk", 1000),
        "#forge:crops/sadiroot"
    ]).id("mce2:mixing/food/thermal_cheese_wheel")


    //Vampire's Delight
    event.recipes.create.mixing("vampiresdelight:snow_white_ice_cream", [
        "#vampirism:holy_water",
        fluidTag("forge:milk", 250),
        "minecraft:cocoa_beans",
        "minecraft:ice",
        "#forge:sugar"
    ]).id("mce2:mixing/food/vampiresdelight_snow_white_ice_cream")

    event.recipes.create.mixing("vampiresdelight:cursed_cupcake", [
        "vampiresdelight:blood_bagel",
        fluidTag("forge:milk", 250),
        "#forge:sugar"
    ]).id("mce2:mixing/food/vampiresdelight_cursed_cupcake")

    event.recipes.create.mixing("vampiresdelight:orchid_ice_cream", [
        Item.of("vampiresdelight:orchid_petals", 2),
        fluidTag("forge:milk", 250),
        "minecraft:ice",
        "#forge:sugar",
        "minecraft:bowl"
    ]).id("mce2:mixing/food/vampiresdelight_orchid_ice_cream")



    //Spouting

    //Minecolonies
    event.recipes.create.filling("minecolonies:large_milk_bottle", [
        "minecolonies:large_empty_bottle",
        fluidTag("forge:milk", 1000)
    ]).id("mce2:filling/minecolonies_large_milk_bottle")
})