
const arsLocateStructure = (event, target, inputs, id) => {

    let recipe = {
        type: "ars_additions:locate_structure",
        id: id
    }

    if(target.startsWith("#"))
        recipe.structure = {tag: target.substring(1)}
    else
        recipe.structure = {key: target}

    let finalInputs = []
    inputs.forEach(entry => entry.startsWith("#") 
        ? finalInputs.push({tag: entry.substring(1)}) 
        : finalInputs.push({key: entry}))

    recipe.augments = finalInputs

    return event.custom(recipe)
}


ServerEvents.recipes(event => {

    arsLocateStructure(event, "betterfortresses:fortress", ["minecraft:nether_brick"], "ars_additions:fortress")

    //TODO localize this shite after i mixin support for that, because currently it just mangles the ResourceLocation of the target, so zero localization support. WHY.
    arsLocateStructure(event, "#mce2:irons_spellbooks/wizard_structure", ["irons_spellbooks:blank_rune","irons_spellbooks:arcane_essence"], "mce2:irons_spellbooks/wizard_structure")

    arsLocateStructure(event, "irons_spellbooks:ancient_battleground", ["minecraft:netherite_scrap","irons_spellbooks:cinder_essence"], "mce2:irons_spellbooks/ancient_battleground")

    arsLocateStructure(event, "idas:iceandfire/dread_citadel", ["#iceandfire:dragon_hearts", "#forge:wither_bones"], "mce2:idas/dread_citadel")
})