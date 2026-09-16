PlayerEvents.loggedIn(event => {
    if (global.PackMode.get() === "Default") return

    event.server.runCommandSilent(
        `advancement grant ${event.player.username} only netherportalconfigurator:portal_unlocked`
    )
})

