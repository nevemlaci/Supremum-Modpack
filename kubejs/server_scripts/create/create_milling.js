ServerEvents.recipes(event=>{
    event.remove({id: "create:milling/gravel"})

    event.custom(
    {
        "type": "create:milling",
        "ingredients": [
          {
            "item": "minecraft:gravel"
          }
        ],
        "processingTime": 50,
        "results": [
          {
            "item": "minecraft:dirt"
          }  
        ]
    }
    )
})