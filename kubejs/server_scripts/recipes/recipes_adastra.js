ServerEvents.recipes(event=>{
    event.replaceInput(
        {id: 'ad_astra:recipes/nasa_workbench'},
        'minecraft:lever',
        'modern_industrialization:digital_circuit'
    )

    event.remove({id: 'ad_astra:recipes/jet_suit'})

    event.custom(
            {
        "type": "ad_astra:crafting_shaped_space_suit",
        "key": {
            "#": {
            "tag": "ad_astra_platform:calorite_plates"
            },
            "B": {
            "tag": "ad_astra_platform:calorite_blocks"
            },
            "E": {
            "item": "modern_industrialization:quantum_upgrade"
            },
            "N": {
            "item": "modern_industrialization:gravichestplate"
            },
            "T": {
            "item": "ad_astra:calorite_tank"
            }
        },
        "pattern": [
            "# #",
            "TNT",
            "BEB"
        ],
        "result": {
            "item": "ad_astra:jet_suit"
        }
        }
    )
    
})