
var removedInscriberRecipes = [
    'ae2:inscriber/sky_stone_dust',
    'ae2:inscriber/silicon_press',
    'ae2:inscriber/logic_processor_print',
    'ae2:inscriber/logic_processor_press',
    'ae2:inscriber/logic_processor',
    'ae2:inscriber/fluix_dust',
    'ae2:inscriber/engineering_processor_print',
    'ae2:inscriber/engineering_processor_press',
    'ae2:inscriber/engineering_processor',
    'ae2:inscriber/ender_dust',
    'ae2:inscriber/certus_quartz_dust',
    'ae2:inscriber/calculation_processor_print',
    'ae2:inscriber/calculation_processor_press',
    'ae2:inscriber/calculation_processor',
    'ae2:inscriber/calculation_processor'
]

ServerEvents.recipes(event=>{
    
    removedInscriberRecipes.forEach(recipe => {
        event.remove({id: recipe})
    })
})