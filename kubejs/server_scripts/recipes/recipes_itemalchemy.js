ServerEvents.recipes(event=>{
    event.remove({id: 'itemalchemy:alchemy_table'})

    event.shaped('itemalchemy:alchemy_table',
        [
            'ABC',
            'DXF',
            'GHI'
        ],
        {
            A: 'minecraft:dragon_egg',
            B: 'modern_industrialization:singularity',
            C: 'modern_industrialization:uu_matter_bucket',
            D: 'ad_astra:glacio_stone',
            F: 'modern_industrialization:quantum_circuit',
            G: 'minecraft:nether_star',
            H: 'betterend:elytra_crystalite',
            I: 'ae2:singularity',

            X: 'itemalchemy:philosopher_stone'
        }
    )

    event.remove({output: 'itemalchemy:philosopher_stone'})
    
    event.shaped('itemalchemy:philosopher_stone',
        [
            'ABC',
            'DXF',
            'GHI'
        ],
        {
            
                A:'modern_industrialization:mixed_ingot_blastproof',
                B:'modern_industrialization:mixed_ingot_iridium',
                C:'modern_industrialization:mixed_plate_nuclear',
                D:'ad_astra:calorite_ingot',
                F:'betterend:eternal_crystal',
                G:'modern_industrialization:superconductor_coil',
                H:'ae2:item_storage_cell_256k',
                I:'ae2:fluid_storage_cell_256k',

                X:'modern_industrialization:quantum_machine_casing'
        }
    )

})