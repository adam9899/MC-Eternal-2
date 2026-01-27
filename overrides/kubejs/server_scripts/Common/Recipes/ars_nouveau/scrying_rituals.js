
const arsScrying = (event, target, augment, id) => {
    let recipe = {
        type: "ars_nouveau:scry_ritual",
        augment: augment,
        highlight: target,
        id: id
    }

    return event.custom(recipe)
}

const constructSlimeTypes = [
    "earth",
    "sky",
    "ichor",
    "ender"
]


ServerEvents.recipes(event => {

    //scrying for TCon geodes
    constructSlimeTypes.forEach(type =>
        arsScrying(event, `mce2:scryables/tconstruct_${type}_slime`, `mce2:scrying_ingredients/tconstruct_${type}_slime`, `mce2:scry_ritual/tconstruct_${type}_slime_geode`))

})