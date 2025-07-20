JEIEvents.hideItems(event => {

    event.hide("kubejs:icon_yes")
    event.hide("kubejs:icon_no")

    //hide all AE2 facades except for Stone
    // these adds like 8+ pages to JEI so yeah
    event.hide(Ingredient.custom("ae2:facade", stack => stack.tag.item != "minecraft:stone"))

    //Hide Mek Creative tanks
    // they show a variant for every fluid
    event.hide("mekanism:creative_fluid_tank")
    event.hide("mekanism:creative_chemical_tank")

    //Hide filled Soul Vials and Broken Spawners
    event.hide("enderio:filled_soul_vial")
    event.hide(Ingredient.custom("enderio:broken_spawner", stack => !stack.nbt.isEmpty()))


    //Hide EIO Glass by regex
    // this regex only hides colored variants of each special glass type, uncolored is left alone.
    //event.hide(/enderio:(clear_glass|fused_quartz)_([ednpma]{1,3}_\w*|[^ednpma]\w*)/)
    event.hide(/enderio:(clear_glass|fused_quartz)_([ednpma]{1,3}(ag.*|[iu].*|_\w*)|[^ednpma]\w*)/)
    //stupid workaround for the first regex not catching magenta, pink, and purple regular versions.
    //event.hide(/enderio:(clear_glass|fused_quartz)_(magenta|pink|purple)/)

    //Part-based Tinker Tools
    // there are far too many of them, for each material, the parts is more than enough.
    // hides slimeskulls atm but that's a bug, they are incorrectly classed as multipart in Tcon 3.9.2.37
    event.hide("#tconstruct:modifiable/multipart")
})