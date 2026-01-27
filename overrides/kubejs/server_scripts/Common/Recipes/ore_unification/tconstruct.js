let sandAndGoldCasting;

let tinkersGemCasting;

createModule("tconstruct")
    .init = (event) => {

        sandAndGoldCasting = (matId, result, inputFluid, time, castType) => {
            tinkersCastingTable(event, result, inputFluid, time, Ingredient.of(`#tconstruct:casts/multi_use/${castType}`))
                .id(`mce2:unification/casting/metal/${matId}/${castType}_gold_cast`)
            tinkersCastingTable(event, result, inputFluid, time, Ingredient.of(`#tconstruct:casts/single_use/${castType}`), true)
                .id(`mce2:unification/casting/metal/${matId}/${castType}_sand_cast`)
        }

        //yeet casting recipes with sensible names for this material
        //event.remove({id: /.*:smeltery\/casting\/metal\/.*\/ingot_.*_cast/})
    }


modules.tconstruct.main = (event, matId, material) => {

    if(material.molten && material.cooling_time) {
        let fluid = `forge:molten_${matId}`
        let baseDefaultRecipePath = `${material.molten.split(":")[0]}:smeltery/casting/metal/${matId}/`

        //console.log(`${moltenSourceMod}:smeltery/casting/metal/${matId}/nugget_gold_cast`)

        if(material.ingot) {
            event.remove({id: baseDefaultRecipePath +"ingot_gold_cast"})
            event.remove({id: baseDefaultRecipePath +"ingot_sand_cast"})

            sandAndGoldCasting(matId, material.ingot, {tag: fluid, amount: 90}, material.cooling_time, "ingot")
        }

        if(material.block) {
            event.remove({id: baseDefaultRecipePath +"block"})

            tinkersCastingBasin(event, material.block, {tag: fluid, amount: 810}, Math.round(material.cooling_time * 3))
                .id(`mce2:unification/casting/metal/${matId}/block`)
        }

        if(material.nugget) {
            event.remove({id: baseDefaultRecipePath +"nugget_gold_cast"})
            event.remove({id: baseDefaultRecipePath +"nugget_sand_cast"})

            sandAndGoldCasting(matId, material.nugget, {tag: fluid, amount: 10}, Math.round(material.cooling_time / 3), "nugget")
        }
    }

    
    //skimping on gem ores this cause we don't actually have any cases where this makes any difference.
}