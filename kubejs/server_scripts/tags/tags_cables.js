//priority: 0

let lv_cables = ['modern_industrialization:copper_cable', 'modern_industrialization:tin_cable', 'modern_industrialization:silver_cable']
let mv_cables = ['modern_industrialization:cupronickel_cable', 'modern_industrialization:electrum_cable']
let hv_cables = ['modern_industrialization:kanthal_cable', 'modern_industrialization:aluminum_cable']
let ev_cables = ['modern_industrialization:annealed_copper_cable', 'modern_industrialization:platinum_cable']

ServerEvents.tags('item' , event=>{

    lv_cables.forEach(cable => {
        event.add('fabric:lv_cables', cable)
    })

    mv_cables.forEach(cable => {
        event.add('fabric:mv_cables', cable)
    })

    hv_cables.forEach(cable => {
        event.add('fabric:hv_cables', cable)
    })

    ev_cables.forEach(cable => {
        event.add('fabric:ev_cables', cable)
    })

})