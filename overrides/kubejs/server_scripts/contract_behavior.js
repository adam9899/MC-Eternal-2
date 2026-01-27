
ItemEvents.rightClicked(event => {
  const { item, player, server, hand } = event

  if (!server || item.id != 'kubejs:contract') return

  player.addItemCooldown(item, 25)

  let input = {
      translate: "item.kubejs.contract.use.0",
      italic: true,
      color: "gold",
      clickEvent: {
        action: "open_url",
        value: "https://www.youtube.com/watch?v=6vMrdTlwrIU"
      },
      hoverEvent: {
        action: "show_text",
        contents: [
          {
            translate: "item.kubejs.contract.use.1",
            color: "gray"
          }
        ]
      }
    }

  //console.log(input, JSON.stringify(input))

  server.runCommand(`tellraw ${player.username} ` +JSON.stringify(input))
})
