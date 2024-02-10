

ServerEvents.recipes(event=>{
    event.replaceInput(
        {id: 'computercraft:computer_normal'},
        'minecraft:stone',
        'modern_industrialization:turbo_machine_hull'
    )
    event.replaceInput(
        {id: 'computercraft:computer_normal'},
        'minecraft:redstone',
        'ae2:printed_logic_processor'
    )
    event.replaceInput(
        {id: 'computercraft:speaker'},
        'minecraft:stone',
        'modern_industrialization:turbo_machine_hull'
    )
    event.replaceInput(
        {id: 'computercraft:turtle_normal'},
        '#c:wooden_chests',
        'modern_industrialization:configurable_chest'
    )
    event.replaceInput(
        {id: 'computercraft:pocket_computer_normal'},
        'minecraft:stone',
        'modern_industrialization:turbo_machine_hull'
    )
    event.replaceInput(
        {id: 'computercraft:pocket_computer_normal'},
        'minecraft:golden_apple',
        'modern_industrialization:digital_circuit'
    )
})