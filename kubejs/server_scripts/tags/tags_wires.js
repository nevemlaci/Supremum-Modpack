//priority: 0

let lv_wires = ['modern_industrialization:copper_wire', 'modern_industrialization:tin_wire', 'modern_industrialization:silver_wire']
let mv_wires = ['modern_industrialization:cupronickel_wire', 'modern_industrialization:electrum_wire']
let hv_wires = ['modern_industrialization:kanthal_wire', 'modern_industrialization:aluminum_wire']
let ev_wires = ['modern_industrialization:annealed_copper_wire', 'modern_industrialization:platinum_wire']

ServerEvents.tags('item' , event=>{

    lv_wires.forEach(wire => {
        event.add('fabric:lv_wires', wire)
    })

    mv_wires.forEach(wire => {
        event.add('fabric:mv_wires', wire)
    })

    hv_wires.forEach(wire => {
        event.add('fabric:hv_wires', wire)
    })

    ev_wires.forEach(wire => {
        event.add('fabric:ev_wires', wire)
    })

})