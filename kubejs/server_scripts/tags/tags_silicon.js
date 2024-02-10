//priority: 0

let silicons = ['ae2:silicon' ,  'modern_industrialization:silicon_plate']

ServerEvents.tags('item' , event=>{

    silicons.forEach(item => {
        event.add('fabric:silicons', item)
    })


})