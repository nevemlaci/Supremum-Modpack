//priority: 1

ServerEvents.recipes(event=>{
    event.replaceInput(
        {input: 'ae2:silicon'},
        'ae2:silicon',
        'modern_industrialization:silicon_plate'
    )

    event.remove({id: 'modern_industrialization:compat/ae2/printed_silicon_from_ingot'})
    event.remove({id: 'ae2:smelting/silicon_from_certus_quartz_dust'})
    event.remove({id: 'ae2:blasting/silicon_from_certus_quartz_dust'})
    event.remove({id: 'ae2:inscriber/silicon_print'})
    event.replaceInput(
        {id: 'ae2:network/blocks/inscribers'},
        'minecraft:sticky_piston',
        'modern_industrialization:electric_compressor'
    )

    event.replaceInput(
        {id: 'ae2:network/blocks/energy_energy_acceptor'},
        'minecraft:copper_ingot',
        'modern_industrialization:electronic_circuit'
    )

    event.replaceInput(
        {id: 'ae2:network/blocks/controller'},
        'ae2:engineering_processor',
        'modern_industrialization:electronic_circuit'
    )
})