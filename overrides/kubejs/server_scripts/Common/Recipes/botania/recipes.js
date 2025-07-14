ServerEvents.recipes(event => {

    //unfortunately this has to be yeeted.
    // its implementation is too absolute and it will break many things it has not yet been found to, as it utterly bypasses spawning conditions.
    event.remove({id: "botania:brew/bloodthirst"})
})