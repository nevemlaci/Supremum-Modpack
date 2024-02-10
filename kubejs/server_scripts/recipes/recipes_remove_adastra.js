var removedAdAstraRecipes = [
    'ad_astra:recipes/fuel_refinery',
    'ad_astra:recipes/steel_block'
]

ServerEvents.recipes(event=>{
    
    removedAdAstraRecipes.forEach(recipe => {
        event.remove({id: recipe})
    })
})