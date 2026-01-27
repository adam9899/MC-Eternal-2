
ServerEvents.loaded(event => {
if(event.server.persistentData.artifactsGamerulesSet) return;
  event.server.runCommandSilent('gamerule artifacts.snorkel.isInfinite false');
  event.server.runCommandSilent('gamerule artifacts.vampiricGlove.maxHealingPerHit 3');
  event.server.runCommandSilent('gamerule artifacts.feralClaws.attackSpeedBonus 20');
  //console.log(event.server.overworld().time, event.server.overworld().time < 24000)
  if(event.server.overworld().time < 24000)
    event.server.runCommandSilent('time set day');
  event.server.persistentData.artifactsGamerulesSet = true
})
