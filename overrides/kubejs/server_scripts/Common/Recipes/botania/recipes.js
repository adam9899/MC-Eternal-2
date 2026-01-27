ServerEvents.recipes(event => {

    //unfortunately this has to be yeeted.
    // its implementation is too absolute and it will break many things it has not yet been found to, as it utterly bypasses spawning conditions.
    event.remove({id: "botania:brew/bloodthirst"})


    //Gaia Pylon
    // gates gaia a bit more solidly as an expert-tier encounter, since wither is unreliable as gate currently.
    event.shaped("botania:gaia_pylon", [
        " P ",
        "MBM",
        " P "
    ],
    {
        B: "botania:mana_pylon",
        P: "botania:pixie_dust",
        M: "#forge:ingots/manyullyn"
    }).id("botania:gaia_pylon")
})