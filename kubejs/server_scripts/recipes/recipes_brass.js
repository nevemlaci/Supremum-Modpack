ServerEvents.recipes(event=>{
    event.remove({type: "create:mixing" , output: "create:brass_ingot"})

    //basic recipe for brass dust, has to be smelted for brass ingot
    event.shapeless(
        "kubejs:brass_dust",
        [
            "2x kubejs:zinc_dust",
            "2x #c:copper_dusts"
        ]
    )

    event.smelting("create:brass_ingot" , "kubejs:brass_dust")
    
    //heating recipe for brass ingot, gives double ores
    event.custom(
        {
            "type": "create:mixing",
            "heatRequirement": "heated",
            "ingredients": [
              {
                "tag": "c:copper_dusts"
              },
              {
                "item": "kubejs:zinc_dust"
              }
            ],
            "results": [
              {
                "item": "create:brass_dust"
              }
            ]
          }
    )
})