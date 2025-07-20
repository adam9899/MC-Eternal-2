ServerEvents.tags("item", event => {

    //Golem "Shards", which is what what items Amethyst Golems will collect.
    event.add("ars_nouveau:golem/shard", [
        "hexcasting:amethyst_dust",
        "hexcasting:charged_amethyst",
        "ae2:certus_quartz_crystal",
        "ae2:certus_quartz_dust",
        /tconstruct:.*_slime_crystal/
    ])

    //tagging because Scrying rituals *ONLY* accept Tags. why.
    constructSlimeTypes.forEach(type =>
        event.add(`mce2:scrying_ingredients/tconstruct_${type}_slime`, `tconstruct:${type}_slime_crystal`))
})

ServerEvents.tags("block", event => {

    //Golem "Budding", which is what blocks Amethyst Golems will cache as Budding Blocks to look at harvesting near.
    event.add("ars_nouveau:golem/budding", [
        /ae2:.*_budding_quartz/,
        /tconstruct:budding_.*_slime_crystal/
    ])

    //Golem "Cluster", which is what blocks Amethyst Golems will Harvest.
    event.add("ars_nouveau:golem/cluster", [
        "ae2:quartz_cluster",
        /tconstruct:.*_slime_crystal_cluster/,
    ])


    //Storage Autopull Blacklist
    // prevents the Storage Lectern from trying to put away things in adjacent containers whose source blocks are on this list
    event.add("ars_nouveau:storage/autopull_disabled", [
        "#ars_nouveau:lectern_blacklist"
    ])


    //Storage Interaction Blacklist
    // blocks in this tag can't be used by the Storage Lectern as containers
    event.add("ars_nouveau:lectern_blacklist", [
        //can dupe shit in drives if it doesn't find somewhere to put them. atleast i think that's what the problem is.
        "ae2:drive",
        "ae2:chest",
        "ae2:io_port"
    ])

    //as above, because Scraying rituals *ONLY* accept Tags.
    constructSlimeTypes.forEach(type => 
        event.add(`mce2:scryables/tconstruct_${type}_slime`, `tconstruct:budding_${type}_slime_crystal`))
})