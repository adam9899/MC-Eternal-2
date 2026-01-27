
createModule("integrateddynamics")

//Material names ignored by Ore > Raw Ore squeezing
// specificially contains Copper, so that it is only added by the first module
const moduleSqueezingExcluded = [
    "copper"
]

//Mechanical Squeezer Nerf
// this shit is *too* good.
modules.integrateddynamics.init = (event) => {
    event.remove({id: /integrateddynamics:mechanical_squeezer\/ore\/raw_.*/})
    event.remove({id: /integrateddynamics:.*squeezer\/ore\/gem_emerald/})

    //Copper yields a lot more usually
    let rawCopper = global.preferredOreProducts.copper.raw_material
    let secondary = IDStack(rawCopper, 2, 0.5)
    mechanicalSqueezing(event, [IDStack(rawCopper, 6), secondary, secondary], {"tag": "forge:ores/copper"}, 40)
        .id("mce2:unification/mechanical_squeezer/ore/raw_copper")

    //fix Emerald Ore outputting Goety emeralds
    let emerald = global.preferredOreProducts.emerald.gem

    mechanicalSqueezing(event, [IDStack(emerald, 2), IDStack(emerald, 1, 0.5)], {"tag": "forge:ores/emerald"}, 40)
        .id("mce2:unification/mechanical_squeezer/ore/emerald")

    squeezing(event, [IDStack(emerald), IDStack(emerald, 0.5)], {"tag": "forge:ores/emerald"}, 40)
        .id("mce2:unification/squeezer/ore/emerald")

}

modules.integrateddynamics.main = (event, matId, material) => {
    if(moduleSqueezingExcluded.includes(matId)) return;

    if(material.raw_material && material.type.hasOre) {
        mechanicalSqueezing(event, [IDStack(material.raw_material, 2), IDStack(material.raw_material, 2, 0.5)], {"tag": `forge:ores/${matId}`}, 40)
            .id(`mce2:unification/mechanical_squeezer/ore/raw_${matId}`)
    }
}