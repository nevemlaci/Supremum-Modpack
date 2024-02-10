
var removedRecipes = [
    'create:crafting/kinetics/fluid_tank',
    'computercraft:pocket_computer_advanced',
    'computercraft:computer_advanced',
    'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot',
    'ad_astra:hammering/steel_plate',
    'ad_astra:hammering/desh_plate',
    'ad_astra:hammering/ostrum_plate',
    'ad_astra:hammering/calorite_plate',
    'computercraft:turtle_normal_overlays/turtle_trans_overlay',
    'computercraft:turtle_normal_overlays/turtle_rainbow_overlay',
    'computercraft:turtle_advanced_overlays/turtle_trans_overlay',
    'computercraft:turtle_advanced_overlays/turtle_rainbow_overlay',
    'ad_astra:recipes/hammer',
    'ad_astra:hammering/iron_plate'
]

ServerEvents.recipes(event=>{
    
    removedRecipes.forEach(recipe => {
        event.remove({id: recipe})
    })
})