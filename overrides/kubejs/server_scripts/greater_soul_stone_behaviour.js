ItemEvents.rightClicked(event => {
    const { item, player, server } = event;
    if (!server || item.id !== 'kubejs:soul') return;

    global.playSoundNear(
        player,
        null,
        "thegreatbelow:beacon_power_up",
        "players",
        1.0,
        1.0
    );

    server.runCommand(
        `execute as ${player.username} at ${player.username} run tbrestoreinventory`
    );

    item.shrink(1);
});
