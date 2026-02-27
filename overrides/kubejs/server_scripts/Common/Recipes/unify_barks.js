 ServerEvents.tags('item', event => {
//unify tags
    event.add('mce2:barks', ['#immersive_weathering:bark', '#farmersdelight:barks'])
 })
 

 ServerEvents.recipes(event => {

    //unified barks, so not needed
    event.remove({id: 'arsdelight:paper_from_barks'})
    event.remove({id: 'arsdelight:organic_compost_from_tree_bark'})
  
    event.replaceInput(
        {input:'#farmersdelight:barks'},
        '#farmersdelight:barks',
        '#mce2:barks')

    event.custom({
        'type': 'brewinandchewin:fermenting',
        'basefluid': {
            'count': 1000,
            'fluid': 'brewinandchewin:rice_wine'
        },
        'experience': 1.0,
        'ingredients': [
            {'item': 'minecraft:honey_bottle'},
            {'tag': 'mce2:barks'},
            {'item': 'minecraft:lily_of_the_valley'},
            {'item': 'minecraft:sugar'}
        ],
        'result': {
            'count': 1000,
            'fluid': 'brewinandchewin:pale_jane'
        },
        'temperature':4
    }).id('brewinandchewin:fermenting/pale_jane_from_rice_wine')  
})


