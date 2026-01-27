Ponder.tags(event => {
	
	event.createTag('mce2:mekanism_multiblocks', 'mekanismgenerators:turbine_blade', 'MC Eternal: Mekanism Structures', 'Making Massive Mekanized Multiblocks!', [
		'mekanism:supercharged_coil',
		'mekanismgenerators:fusion_reactor_controller',
		'mekanismgenerators:fission_fuel_assembly',
		'mekanismgenerators:control_rod_assembly'
	])
	
})

Ponder.registry(event => {
	
	// SPS
	// Fully Complete
	event.create('mekanism:supercharged_coil')
		.tag('mce2:mekanism_multiblocks')
		.scene(
			'mek_sps',
			'The Supercritical Phase Shifter',
			'mce2:mek_multis/sps', 
			(scene, util) => {
				
				scene.showBasePlate()
				scene.idle(20)
				
				scene.text(50, 'The Supercritical Phase Shifter is a Multiblock used to create Antimatter.').colored(PonderPalette.SLOW)
				
				scene.idle(60)
				
				scene.text(50, 'Let\'s start by making the Bottom layer.').colored(PonderPalette.SLOW)
				
				scene.idle(40)
				scene.world.showSection([1, 1, 1, 7, 1, 7], Facing.DOWN)
				
				scene.idle(20)
				
				scene.text(60, 'The SPS can be made of any combination of SPS Casing, Ports, and Structural Glass', [5, 2, 5]).colored(PonderPalette.SLOW).attachKeyFrame()
				
				scene.idle(40)
				
				for (let x = 3; x <= 5; x++){
					for (let z = 3; z <= 5; z++){
						scene.world.setBlock([x, 1, z], 'mekanism:structural_glass', true)
						scene.idle(5)
					}
				}
				
				scene.idle(15)
				scene.world.setBlock([4, 1, 4], 'mekanism:sps_port', true)
				
				scene.idle(40)
				scene.world.setBlocks([3, 1, 3, 5, 1, 5], 'mekanism:sps_casing', true)
				
				scene.idle(20)
				scene.text(60, 'However, the Edges must be composed of only SPS Casing.').colored(PonderPalette.SLOW)
				
				scene.idle(20)
				scene.world.setBlock([2, 1, 2], 'mekanism:structural_glass', true)
				scene.idle(20)
				scene.showControls(40, [2, 2, 2], 'down').withItem(no)
				scene.idle(50)
				scene.world.setBlock([2, 1, 2], 'mekanism:sps_casing', true)
				
				scene.idle(20)
				scene.world.setBlock([4, 1, 1], 'mekanism:sps_port', true)
				scene.idle(20)
				scene.showControls(40, [4, 2, 1], 'down').withItem(no)
				scene.idle(50)
				scene.world.setBlock([4, 1, 1], 'mekanism:sps_casing', true)
				
				scene.idle(40)
				scene.world.setBlock([4, 1, 2], 'mekanism:sps_port', true)
				scene.world.setBlock([2, 1, 4], 'mekanism:sps_port', true)
				scene.idle(20)
				scene.showControls(40, [4, 3, 2], 'down').withItem(yes)
				scene.showControls(40, [2, 3, 4], 'down').withItem(yes)
				
				scene.idle(50)
				scene.text(40, 'A Configurator can be used to change a Port\'s mode').colored(PonderPalette.SLOW).attachKeyFrame()
				scene.idle(50)
				scene.showControls(40, [2, 3, 4], 'down').withItem('mekanism:configurator').rightClick().whileSneaking()
				scene.idle(10)
				scene.world.modifyBlock([2, 1, 4], (state) => state.with('active', true), true)
				
				scene.idle(40)
				scene.text(40, 'The other Sides of the structure follow the same rules as the Bottom.').colored(PonderPalette.SLOW)
				
				scene.idle(50)
				scene.text(40, 'Now, Let\'s move on to those sides, and other mechanics of the SPS.').colored(PonderPalette.SLOW)
				
				scene.idle(50)
				scene.world.showSection([1, 2, 1, 7, 4, 7], Facing.DOWN)
				
				scene.idle(40)
				scene.text(40, 'Supercharged Coils must be placed on a Port to let it accept Energy.', [4, 5, 6]).colored(PonderPalette.SLOW).attachKeyFrame()
				scene.idle(50)
				scene.text(60, 'Ports with Supercharged Coils attached can still be used to Input and Output Chemical products.').colored(PonderPalette.SLOW)
				scene.idle(70)
				
				scene.world.setBlock([5, 1, 6], 'mekanism:sps_port', true)
				scene.world.setBlock([5, 2, 6], 'mekanism:supercharged_coil', true)
				scene.world.modifyBlocks([5, 2, 6], (state) => state.with('facing', 'up'), true)
				scene.idle(10)
				scene.text(50, 'Supercharged Coils do not need to be placed on the Walls, nor be aligned with the center of the Structure.', [5, 3, 6]).colored(PonderPalette.SLOW)
				scene.idle(70)
				scene.world.setBlock([5, 1, 6], 'mekanism:sps_casing', true)
				scene.world.setBlock([5, 2, 6], 'minecraft:air', true)
				scene.idle(20)
				
				scene.world.showSection([1, 5, 1, 7, 7, 7], Facing.DOWN)
				scene.idle(20)
				scene.text(60, 'Now all you need to do is pipe in your Polonium, provide a load of Energy, and get out your Antimatter!').colored(PonderPalette.SLOW)
	})
	
	
	// Fusion Reactor
	// Unfinished
	event.create('mekanismgenerators:fusion_reactor_controller')
		.tag('mce2:mekanism_multiblocks')
		.scene(
			'mek_fusion',
			'Fusion Reactor [WIP]',
			'mce2:mek_multis/fusion_reactor',
			(scene, util) => {
				
				scene.showBasePlate()
				scene.idle(20)
				
				scene.text(50, 'So, you want to build a Fusion Reactor to get all the energy in the world?').colored(PonderPalette.SLOW)
				scene.idle(60)
				
				scene.text(50, 'We\'ll start by getting down the Building rules with the Bottom layer.').colored(PonderPalette.SLOW)
				
				scene.idle(40)
				scene.world.showSection([1, 1, 1, 6, 1, 6], Facing.DOWN)
				
				scene.idle(20)
				scene.text(100, 'A Fusion Reactor can be made of any combination of Fusion Reactor Casing, Ports, Logic Adapters, Laser Focus Matrixes and Reactor Glass.').colored(PonderPalette.SLOW).attachKeyFrame()
				
				scene.idle(110)
				
				scene.world.setBlock([2, 1, 3], 'mekanismgenerators:reactor_glass', true)
				scene.idle(10)
				scene.world.setBlock([3, 1, 2], 'mekanismgenerators:laser_focus_matrix', true)
				scene.idle(10)
				scene.world.setBlock([4, 1, 3], 'mekanismgenerators:fusion_reactor_port', true)
				scene.idle(10)
				scene.world.setBlock([3, 1, 4], 'mekanismgenerators:fusion_reactor_logic_adapter', true)
				scene.idle(20)
				
				scene.showControls(15, [3, 3, 3], 'down').withItem(yes)
				scene.idle(30)
				
				
				
				scene.idle(20)
				scene.world.setBlocks([2, 1, 2, 4, 1, 4], 'mekanismgenerators:fusion_reactor_frame', true)
				
				scene.idle(60)
				scene.showStructure()
	})
	
	
	// Fission Reactor
	// Unfinished
	event.create([
		'mekanismgenerators:control_rod_assembly',
		'mekanismgenerators:fission_fuel_assembly'
		])
		.tag('mce2:mekanism_multiblocks')
		.scene(
			'mek_fission',
			'Fission Reactor [WIP]',
			'mce2:mek_multis/fission_reactor',
			(scene, util) => {
				
				scene.showBasePlate()
				scene.idle(20)
				
				scene.text(50, 'Looking for some big power? Or maybe just special Resources? Fission Reactors have you covered!').colored(PonderPalette.SLOW)
				scene.idle(60)
				
				scene.text(50, 'Let\'s get the Building Rules down with the Bottom layer.').colored(PonderPalette.SLOW)
				
				scene.idle(40)
				scene.world.showSection([0, 1, 0, 9, 1, 9], Facing.DOWN)
				
	})
})