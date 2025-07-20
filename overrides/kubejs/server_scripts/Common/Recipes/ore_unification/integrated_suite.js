
createModule("integrateddynamics")

//Material names ignored by Ore > Raw Ore squeezing
// specificially contains Copper, so that it is only added by the first module
const moduleSqueezingExcluded = [
    "copper"
]

//Mechanical Squeezer Nerf
// this shit is *too* good.
modules.integrateddynamics.subscribe("raw_material", (event, material, product) => {
    if(moduleSqueezingExcluded.includes(material)) return;

    mechanicalSqueezing(event, [IDStack(product, 2), IDStack(product, 2, 0.5)], {"tag": `forge:ores/${material}`}, 40)
        .id(`mce2:mechanical_squeezer/ore/raw_${material}`)
})


modules.integrateddynamics.first = (event) => {
    event.remove({id: /integrateddynamics:mechanical_squeezer\/ore\/raw_.*/})
    event.remove({id: /integrateddynamics:.*squeezer\/ore\/gem_emerald/})

    //Copper yields a lot more usually
    let rawCopper = global.preferredOreProducts.raw_material.copper
    let secondary = IDStack(rawCopper, 2, 0.5)
    mechanicalSqueezing(event, [IDStack(rawCopper, 6), secondary, secondary], {"tag": "forge:ores/copper"}, 40)
        .id("mce2:mechanical_squeezer/ore/raw_copper")

    //fix Emerald Ore outputting Goety emeralds
    let emerald = global.preferredOreProducts.gem.emerald

    mechanicalSqueezing(event, [IDStack(emerald, 2), IDStack(emerald, 1, 0.5)], {"tag": "forge:ores/emerald"}, 40)
        .id("mce2:mechanical_squeezer/ore/emerald")

    squeezing(event, [IDStack(emerald), IDStack(emerald, 0.5)], {"tag": "forge:ores/emerald"}, 40)
        .id("mce2:squeezer/ore/emerald")

}